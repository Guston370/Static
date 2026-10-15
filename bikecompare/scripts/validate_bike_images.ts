import * as fs from 'fs';
import * as path from 'path';

const catalogPath = path.resolve(__dirname, '../data/india-bike-models.json');
const imagesPath = path.resolve(__dirname, '../data/bike-images.json');

if (!fs.existsSync(catalogPath)) {
  console.error(`ERROR: data/india-bike-models.json not found at ${catalogPath}`);
  process.exit(1);
}

if (!fs.existsSync(imagesPath)) {
  console.error(`ERROR: data/bike-images.json not found at ${imagesPath}`);
  process.exit(1);
}

const catalogData = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const imagesData = JSON.parse(fs.readFileSync(imagesPath, 'utf8'));

const modelIds = new Set<string>(catalogData.bikes.map((b: { id: string }) => b.id));
const imageModels = imagesData.models || [];

let errors = 0;
let warnings = 0;
const seenModelIds = new Set<string>();

console.log(`\n===============================================================`);
console.log(` VALIDATING ${imageModels.length} IMAGE ENTRIES (bike-images.json)`);
console.log(`===============================================================\n`);

for (let i = 0; i < imageModels.length; i++) {
  const entry = imageModels[i];
  const ref = `ImageEntry[${i}] (${entry.brand || ''} ${entry.modelName || entry.modelId || 'unnamed'})`;

  if (!entry.modelId) {
    console.error(`[FAIL] ${ref}: Missing 'modelId'`);
    errors++;
  } else if (seenModelIds.has(entry.modelId)) {
    console.error(`[FAIL] ${ref}: Duplicate image entry for modelId '${entry.modelId}'`);
    errors++;
  } else {
    seenModelIds.add(entry.modelId);
  }

  // Check if modelId exists in catalog
  if (entry.modelId && !modelIds.has(entry.modelId)) {
    console.error(`[FAIL] ${ref}: Orphan image entry! modelId '${entry.modelId}' not in india-bike-models.json`);
    errors++;
  }

  // Primary image checks
  if (!entry.primaryImage) {
    console.error(`[FAIL] ${ref}: Missing 'primaryImage' object`);
    errors++;
  } else {
    const p = entry.primaryImage;
    if (!p.url || typeof p.url !== 'string' || !p.url.startsWith('http')) {
      console.error(`[FAIL] ${ref}: Invalid primaryImage url '${p.url}'`);
      errors++;
    }
    if (!p.alt || typeof p.alt !== 'string') {
      console.warn(`[WARN] ${ref}: Missing primaryImage alt text`);
      warnings++;
    }
    if (!p.source) {
      console.warn(`[WARN] ${ref}: Missing primaryImage source attribution`);
      warnings++;
    }
  }

  // Additional images check
  if (entry.additionalImages && Array.isArray(entry.additionalImages)) {
    for (let j = 0; j < entry.additionalImages.length; j++) {
      const addImg = entry.additionalImages[j];
      if (!addImg.url || typeof addImg.url !== 'string' || !addImg.url.startsWith('http')) {
        console.error(`[FAIL] ${ref}: Invalid additionalImages[${j}] url`);
        errors++;
      }
    }
  }
}

// Check coverage: every bike in india-bike-models.json must have an image entry
const missingImages = Array.from(modelIds).filter(id => !seenModelIds.has(id));
if (missingImages.length > 0) {
  console.error(`[FAIL] The following ${missingImages.length} models are missing from bike-images.json:`, missingImages);
  errors += missingImages.length;
}

console.log(`\nImage Validation Summary:`);
console.log(`- Total Image Entries: ${imageModels.length}`);
console.log(`- Models in Catalog: ${modelIds.size}`);
console.log(`- Image Coverage: ${seenModelIds.size} / ${modelIds.size} (${((seenModelIds.size / modelIds.size) * 100).toFixed(1)}%)`);
console.log(`- Errors: ${errors}`);
console.log(`- Warnings: ${warnings}`);

if (errors > 0) {
  console.error(`\n❌ FAILED: ${errors} errors detected in bike image mappings.`);
  process.exit(1);
} else {
  console.log(`\n✅ PASSED: All ${imageModels.length} models have valid, non-orphan image mappings.\n`);
}
