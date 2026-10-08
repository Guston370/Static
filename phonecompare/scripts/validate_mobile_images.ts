/**
 * scripts/validate_mobile_images.ts
 *
 * Validates data/mobile-images.json against the active Indian smartphone catalog:
 * - Total active models
 * - Models with images
 * - Models with 4+ views
 * - Missing images
 * - Wrong-model images
 * - Duplicate images
 * - Broken / Invalid URLs
 *
 * Usage: npm run validate:mobile-images
 */

import * as fs from 'fs';
import * as path from 'path';
import type { MobileModel, MobileImageCatalogEntry } from '../src/types/mobile';

const modelsPath = path.resolve(__dirname, '../data/india-mobile-models.json');
const imagesPath = path.resolve(__dirname, '../data/mobile-images.json');

if (!fs.existsSync(modelsPath) || !fs.existsSync(imagesPath)) {
  console.error('ERROR: Required JSON catalogs not found');
  process.exit(1);
}

const modelsCatalog = JSON.parse(fs.readFileSync(modelsPath, 'utf8'));
const imagesCatalog = JSON.parse(fs.readFileSync(imagesPath, 'utf8'));

const activeModels: MobileModel[] = modelsCatalog.models.filter((m: MobileModel) => m.status === 'active');
const activeModelIds = new Set<string>(activeModels.map((m) => m.id));

const imageEntries: MobileImageCatalogEntry[] = imagesCatalog.models;
const imageModelIds = new Set<string>();

let errors = 0;
let warnings = 0;
let modelsWithImages = 0;
let modelsWith4PlusViews = 0;
let missingImagesCount = 0;
let wrongModelImagesCount = 0;
let duplicateImagesCount = 0;
let brokenUrlsCount = 0;

const seenUrls = new Set<string>();

console.log('═══════════════════════════════════════════════════════');
console.log(' INDIAN SMARTPHONE IMAGE CATALOG VALIDATION');
console.log('═══════════════════════════════════════════════════════\n');

for (const entry of imageEntries) {
  // Check if model exists
  if (!activeModelIds.has(entry.modelId)) {
    console.error(`[FAIL] Image entry has unknown/non-active modelId '${entry.modelId}'`);
    wrongModelImagesCount++;
    errors++;
  }

  if (imageModelIds.has(entry.modelId)) {
    console.error(`[FAIL] Duplicate image entry for modelId '${entry.modelId}'`);
    errors++;
  }
  imageModelIds.add(entry.modelId);

  if (entry.images && entry.images.length > 0) {
    modelsWithImages++;
    if (entry.images.length >= 4) {
      modelsWith4PlusViews++;
    }

    const angles = new Set<string>();
    for (const img of entry.images) {
      if (!img.url || !img.url.startsWith('http')) {
        brokenUrlsCount++;
        errors++;
      }

      if (seenUrls.has(img.url)) {
        duplicateImagesCount++;
      } else {
        seenUrls.add(img.url);
      }

      angles.add(img.angle);
    }

    if (!angles.has('front')) {
      console.warn(`[WARN] Model '${entry.modelId}' missing front view`);
      warnings++;
    }
  }
}

// Missing images check
for (const m of activeModels) {
  if (!imageModelIds.has(m.id)) {
    console.error(`[FAIL] Active model '${m.id}' has no images`);
    missingImagesCount++;
    errors++;
  }
}

console.log(`Total Active Models:         ${activeModels.length}`);
console.log(`Models with Images:          ${modelsWithImages} / ${activeModels.length} (${Math.round((modelsWithImages / activeModels.length) * 100)}%)`);
console.log(`Models with 4+ Views:        ${modelsWith4PlusViews}`);
console.log(`Missing Images:              ${missingImagesCount}`);
console.log(`Wrong-Model Images:          ${wrongModelImagesCount}`);
console.log(`Duplicate Images:            ${duplicateImagesCount}`);
console.log(`Broken URLs:                 ${brokenUrlsCount}`);
console.log('───────────────────────────────────────────────────────');
console.log(`Errors:   ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  console.error('\n❌ Mobile image catalog validation FAILED with ' + errors + ' errors.');
  process.exit(1);
} else {
  console.log('\n✓ Mobile image catalog validation PASSED (0 errors).');
}
