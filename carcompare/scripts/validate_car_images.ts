#!/usr/bin/env tsx
/**
 * scripts/validate_car_images.ts
 *
 * Validates car-images.json for:
 * - Every active model has an entry
 * - Four required angles present (front_3_4, rear_3_4, side, front|rear)
 * - No duplicate angle per model
 * - Images have required metadata (alt, source, sourceUrl)
 * - hasFourAngle flag is accurate
 * - imageStatus matches actual images
 * 
 * Usage: npm run validate:images
 */

import fs from 'fs';
import path from 'path';

const modelsPath = path.resolve(__dirname, '../data/india-car-models.json');
const imagesPath = path.resolve(__dirname, '../data/car-images.json');

if (!fs.existsSync(imagesPath)) {
  console.error('ERROR: car-images.json not found. Run npm run update:images first.');
  process.exit(1);
}

const modelCatalog = JSON.parse(fs.readFileSync(modelsPath, 'utf8'));
const imageCatalog = JSON.parse(fs.readFileSync(imagesPath, 'utf8'));

const activeModels: string[] = modelCatalog.models
  .filter((m: { status: string }) => m.status === 'active')
  .map((m: { slug: string }) => m.slug);

const imageModelIds = new Set<string>(imageCatalog.models.map((m: { modelId: string }) => m.modelId));

const VALID_ANGLES = ['front_3_4', 'rear_3_4', 'side', 'front', 'rear', 'interior'];
const VALID_TIERS = ['official', 'official_press', 'reputable_media'];
const VALID_STATUSES = ['complete', 'partial', 'missing'];

let errors = 0;
let warnings = 0;
let totalModels = 0;
let modelsWithImages = 0;
let modelsWithFourAngle = 0;
let modelsMissingImages = 0;
let modelsPartial = 0;

// Models missing from image catalog
const missingFromCatalog: string[] = [];
activeModels.forEach(slug => {
  if (!imageModelIds.has(slug)) {
    console.error(`[ERROR] Active model '${slug}' has no image catalog entry`);
    missingFromCatalog.push(slug);
    errors++;
  }
});

// Per-model validation
const coverageReport: { model: string; front3_4: boolean; rear3_4: boolean; side: boolean; front_rear: boolean; total: number }[] = [];

for (const entry of imageCatalog.models) {
  totalModels++;
  const { modelId, images, hasFourAngle, imageStatus, primaryImage } = entry;

  // Check if modelId is an active model
  if (!activeModels.includes(modelId)) {
    console.warn(`[WARN] Image catalog has entry for '${modelId}' which is not an active model`);
    warnings++;
  }

  // Count valid images
  const hasImages = images && images.length > 0;
  if (!hasImages) {
    modelsMissingImages++;
  } else {
    modelsWithImages++;
  }

  // Check for duplicate angles
  const angleCount: Record<string, number> = {};
  for (const img of (images || [])) {
    if (!VALID_ANGLES.includes(img.angle)) {
      console.error(`[ERROR] Model '${modelId}' has invalid angle '${img.angle}'`);
      errors++;
    }
    angleCount[img.angle] = (angleCount[img.angle] || 0) + 1;
    if (angleCount[img.angle] > 1) {
      console.warn(`[WARN] Model '${modelId}' has duplicate angle '${img.angle}'`);
      warnings++;
    }

    // Check required fields on each image
    if (!img.url || img.url.trim() === '') {
      console.error(`[ERROR] Model '${modelId}' image '${img.angle}' has empty URL`);
      errors++;
    }
    if (!img.alt || img.alt.trim() === '') {
      console.warn(`[WARN] Model '${modelId}' image '${img.angle}' missing alt text`);
      warnings++;
    }
    if (!img.source || img.source.trim() === '') {
      console.warn(`[WARN] Model '${modelId}' image '${img.angle}' missing source name`);
      warnings++;
    }
    if (!img.sourceUrl || img.sourceUrl.trim() === '') {
      console.warn(`[WARN] Model '${modelId}' image '${img.angle}' missing sourceUrl`);
      warnings++;
    }
    if (!VALID_TIERS.includes(img.sourceTier)) {
      console.error(`[ERROR] Model '${modelId}' image '${img.angle}' has invalid sourceTier '${img.sourceTier}'`);
      errors++;
    }
    if (!img.verifiedAt) {
      console.warn(`[WARN] Model '${modelId}' image '${img.angle}' missing verifiedAt`);
      warnings++;
    }
  }

  // Check coverage of required angles
  const hasFront34 = !!angleCount['front_3_4'];
  const hasRear34 = !!angleCount['rear_3_4'];
  const hasSide = !!angleCount['side'];
  const hasFrontOrRear = !!(angleCount['front'] || angleCount['rear']);

  coverageReport.push({
    model: modelId,
    front3_4: hasFront34,
    rear3_4: hasRear34,
    side: hasSide,
    front_rear: hasFrontOrRear,
    total: images?.length || 0,
  });

  // Validate hasFourAngle flag
  const actualFourAngle = hasFront34 && hasRear34 && hasSide && (hasFrontOrRear || images?.length >= 4);
  if (hasFourAngle !== actualFourAngle) {
    console.warn(`[WARN] Model '${modelId}' hasFourAngle flag (${hasFourAngle}) doesn't match actual coverage (${actualFourAngle})`);
    warnings++;
  }
  if (actualFourAngle) modelsWithFourAngle++;

  // Validate imageStatus
  const computedStatus = (!hasImages) ? 'missing' : (actualFourAngle ? 'complete' : 'partial');
  if (imageStatus !== computedStatus) {
    console.warn(`[WARN] Model '${modelId}' imageStatus is '${imageStatus}', should be '${computedStatus}'`);
    warnings++;
  }
  if (computedStatus === 'partial') modelsPartial++;

  // Check primary image
  if (hasImages && !primaryImage) {
    console.warn(`[WARN] Model '${modelId}' has images but primaryImage is null`);
    warnings++;
  }
  if (!VALID_STATUSES.includes(imageStatus)) {
    console.error(`[ERROR] Model '${modelId}' has invalid imageStatus '${imageStatus}'`);
    errors++;
  }
}

// Print coverage table for models that have images
console.log('\nIMAGE COVERAGE REPORT');
console.log('────────────────────────────────────────────────────────────────────────────────');
console.log(`${'Model'.padEnd(45)} Front¾  Rear¾  Side  F/R  Total`);
console.log('────────────────────────────────────────────────────────────────────────────────');

const withImages = coverageReport.filter(r => r.total > 0);
withImages.slice(0, 30).forEach(r => {
  const line = [
    r.model.substring(0, 44).padEnd(45),
    (r.front3_4 ? '✓' : '✗').padEnd(8),
    (r.rear3_4 ? '✓' : '✗').padEnd(7),
    (r.side ? '✓' : '✗').padEnd(6),
    (r.front_rear ? '✓' : '✗').padEnd(5),
    r.total,
  ].join(' ');
  console.log(line);
});

if (withImages.length > 30) {
  console.log(`... and ${withImages.length - 30} more models with images`);
}

console.log('\nMODELS MISSING ALL IMAGES:');
const missingAll = coverageReport.filter(r => r.total === 0);
if (missingAll.length === 0) {
  console.log('  (none)');
} else {
  missingAll.slice(0, 50).forEach(r => console.log(' -', r.model));
  if (missingAll.length > 50) console.log(` ... and ${missingAll.length - 50} more`);
}

console.log('\nIMAGE VALIDATION SUMMARY');
console.log('────────────────────────────');
console.log(`Total models:             ${totalModels}`);
console.log(`Models with any image:    ${modelsWithImages}`);
console.log(`Models with 4 angles:     ${modelsWithFourAngle}`);
console.log(`Models partial:           ${modelsPartial}`);
console.log(`Models missing images:    ${modelsMissingImages}`);
console.log('');
console.log(`Errors:                   ${errors}`);
console.log(`Warnings:                 ${warnings}`);
console.log('────────────────────────────');

if (errors > 0) {
  console.error(`STATUS: VALIDATION FAILED (${errors} errors)`);
  process.exit(1);
} else {
  console.log('STATUS: VALIDATION PASSED');
  process.exit(0);
}
