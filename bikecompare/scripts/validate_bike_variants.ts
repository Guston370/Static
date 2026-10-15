import * as fs from 'fs';
import * as path from 'path';

const catalogPath = path.resolve(__dirname, '../data/india-bike-models.json');
const variantsPath = path.resolve(__dirname, '../data/india-bike-variants.json');

if (!fs.existsSync(catalogPath)) {
  console.error(`ERROR: data/india-bike-models.json not found at ${catalogPath}`);
  process.exit(1);
}

if (!fs.existsSync(variantsPath)) {
  console.error(`ERROR: data/india-bike-variants.json not found at ${variantsPath}`);
  process.exit(1);
}

const catalogData = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const variantsData = JSON.parse(fs.readFileSync(variantsPath, 'utf8'));

const modelIds = new Set<string>(catalogData.bikes.map((b: { id: string }) => b.id));
const variants = variantsData.variants || [];

let errors = 0;
let warnings = 0;
const variantIdSet = new Set<string>();
const modelsWithVariants = new Set<string>();

console.log(`\n===============================================================`);
console.log(` VALIDATING ${variants.length} BIKE VARIANTS (india-bike-variants.json)`);
console.log(`===============================================================\n`);

for (let i = 0; i < variants.length; i++) {
  const v = variants[i];
  const ref = `Variant[${i}] (${v.id || 'unnamed'} -> ${v.bikeId})`;

  // Unique ID
  if (!v.id) {
    console.error(`[FAIL] ${ref}: Missing 'id'`);
    errors++;
  } else if (variantIdSet.has(v.id)) {
    console.error(`[FAIL] ${ref}: Duplicate variant id '${v.id}'`);
    errors++;
  } else {
    variantIdSet.add(v.id);
  }

  // Foreign Key check: bikeId must exist in models
  if (!v.bikeId) {
    console.error(`[FAIL] ${ref}: Missing 'bikeId'`);
    errors++;
  } else if (!modelIds.has(v.bikeId)) {
    console.error(`[FAIL] ${ref}: Orphan variant! bikeId '${v.bikeId}' not found in india-bike-models.json`);
    errors++;
  } else {
    modelsWithVariants.add(v.bikeId);
  }

  // Variant Name
  if (!v.variantName || typeof v.variantName !== 'string') {
    console.error(`[FAIL] ${ref}: Missing or invalid 'variantName'`);
    errors++;
  }

  // Price validation
  if (typeof v.price !== 'number' || v.price <= 0) {
    console.error(`[FAIL] ${ref}: Invalid price ${v.price}`);
    errors++;
  }

  // Status
  if (!v.status || !['active', 'discontinued'].includes(v.status)) {
    console.error(`[FAIL] ${ref}: Invalid status '${v.status}'`);
    errors++;
  }

  // Source URL
  if (!v.source || typeof v.source !== 'string') {
    console.warn(`[WARN] ${ref}: Missing or invalid 'source'`);
    warnings++;
  }
}

// Check if any model in catalog is missing variants
const missingVariantModels = Array.from(modelIds).filter(id => !modelsWithVariants.has(id));
if (missingVariantModels.length > 0) {
  console.error(`[FAIL] The following ${missingVariantModels.length} models have 0 variants:`, missingVariantModels);
  errors += missingVariantModels.length;
}

console.log(`\nVariant Validation Summary:`);
console.log(`- Total Variants: ${variants.length}`);
console.log(`- Unique Variant IDs: ${variantIdSet.size}`);
console.log(`- Models Covered: ${modelsWithVariants.size} / ${modelIds.size}`);
console.log(`- Errors: ${errors}`);
console.log(`- Warnings: ${warnings}`);

if (errors > 0) {
  console.error(`\n❌ FAILED: ${errors} errors detected in bike variants.`);
  process.exit(1);
} else {
  console.log(`\n✅ PASSED: All ${variants.length} variants are valid, non-orphan, and properly linked to models.\n`);
}
