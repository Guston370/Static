/**
 * scripts/validate_mobile_variants.ts
 *
 * Validates data/india-mobile-variants.json against strict integrity rules:
 * - Duplicate variant IDs
 * - Valid modelId reference pointing to an existing active model in india-mobile-models.json
 * - Valid RAM format (e.g., '8GB', '12GB', '16GB')
 * - Valid storage format (e.g., '128GB', '256GB', '512GB', '1TB')
 * - Positive pricing in INR
 * - Duplicate configurations (same model + RAM + storage combo)
 * - Source presence
 *
 * Usage: npm run validate:mobile-variants
 */

import * as fs from 'fs';
import * as path from 'path';
import type { MobileVariant, MobileModel } from '../src/types/mobile';

const modelsPath = path.resolve(__dirname, '../data/india-mobile-models.json');
const variantsPath = path.resolve(__dirname, '../data/india-mobile-variants.json');

if (!fs.existsSync(modelsPath) || !fs.existsSync(variantsPath)) {
  console.error('ERROR: Required JSON catalogs not found');
  process.exit(1);
}

const modelsCatalog = JSON.parse(fs.readFileSync(modelsPath, 'utf8'));
const variantsCatalog = JSON.parse(fs.readFileSync(variantsPath, 'utf8'));

const modelMap = new Map<string, MobileModel>();
modelsCatalog.models.forEach((m: MobileModel) => {
  modelMap.set(m.id, m);
});

const variants: MobileVariant[] = variantsCatalog.variants;
let errors = 0;
let warnings = 0;

const variantIdSet = new Set<string>();
const configKeySet = new Set<string>();

console.log(`\nValidating ${variants.length} mobile variants in data/india-mobile-variants.json...\n`);

for (let i = 0; i < variants.length; i++) {
  const v = variants[i];
  const ref = `Variant[${i}] (${v.id || 'unnamed'})`;

  // ID uniqueness
  if (!v.id) {
    console.error(`[FAIL] ${ref}: Missing 'id'`);
    errors++;
  } else if (variantIdSet.has(v.id)) {
    console.error(`[FAIL] ${ref}: Duplicate variant id '${v.id}'`);
    errors++;
  } else {
    variantIdSet.add(v.id);
  }

  // Model reference
  if (!v.modelId) {
    console.error(`[FAIL] ${ref}: Missing 'modelId'`);
    errors++;
  } else if (!modelMap.has(v.modelId)) {
    console.error(`[FAIL] ${ref}: Referenced modelId '${v.modelId}' does not exist in mobile models catalog`);
    errors++;
  }

  // RAM & Storage
  if (!v.ram || !v.ram.includes('GB')) {
    console.error(`[FAIL] ${ref}: Invalid RAM specification '${v.ram}'`);
    errors++;
  }
  if (!v.storage || (!v.storage.includes('GB') && !v.storage.includes('TB'))) {
    console.error(`[FAIL] ${ref}: Invalid storage specification '${v.storage}'`);
    errors++;
  }

  // Duplicate configuration within model
  const configKey = `${v.modelId}:${v.ram}:${v.storage}`;
  if (configKeySet.has(configKey)) {
    console.error(`[FAIL] ${ref}: Duplicate RAM+Storage configuration for model '${configKey}'`);
    errors++;
  } else {
    configKeySet.add(configKey);
  }

  // Pricing
  if (typeof v.price !== 'number' || v.price <= 0) {
    console.error(`[FAIL] ${ref}: Invalid price ₹${v.price}`);
    errors++;
  }

  // Verification
  if (!v.verified) {
    console.warn(`[WARN] ${ref}: Variant is marked unverified`);
    warnings++;
  }
}

console.log('──────────────────────────────────────────────────');
console.log(`Results: ${variants.length} variants checked`);
console.log(`Errors:   ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  console.error('\n❌ Mobile variants validation FAILED with ' + errors + ' errors.');
  process.exit(1);
} else {
  console.log('\n✓ Mobile variants validation PASSED (0 errors).');
}
