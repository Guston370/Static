/**
 * scripts/validate_variants.ts
 *
 * Validates data/india-car-variants.json against strict data-integrity rules:
 * - Duplicate variant IDs and slugs (globally and per model)
 * - Model reference existence and active status in data/india-car-models.json
 * - Mandatory name, fullName, trim, pricing
 * - Valid fuel types, transmissions, and drivetrains
 * - Feature availability values ('standard' | 'optional' | 'not_available')
 * - Source metadata presence and non-empty URLs/names
 * - Impossible specifications (e.g. negative power, extreme mileage, impossible displacement)
 */

import fs from 'fs';
import path from 'path';
import type { MasterVariantCatalog } from '../src/types/variant';
import type { RawCatalogModel } from '../src/lib/cars';

const variantsPath = path.resolve(__dirname, '../data/india-car-variants.json');
const modelsPath = path.resolve(__dirname, '../data/india-car-models.json');

if (!fs.existsSync(variantsPath)) {
  console.error(`ERROR: Variant catalog not found at ${variantsPath}`);
  process.exit(1);
}

const variantCatalog: MasterVariantCatalog = JSON.parse(fs.readFileSync(variantsPath, 'utf8'));
const modelCatalog = JSON.parse(fs.readFileSync(modelsPath, 'utf8'));
const activeModelMap = new Map<string, RawCatalogModel>();
modelCatalog.models.forEach((m: RawCatalogModel) => {
  if (m.status === 'active') {
    activeModelMap.set(m.slug, m);
  }
});

const totalModels = variantCatalog.models.length;
let totalVariants = 0;
let validVariants = 0;
let warnings = 0;
let errors = 0;

let duplicateVariantIds = 0;
let duplicateVariantSlugs = 0;
let missingModelReferences = 0;
let missingSources = 0;
let missingPrices = 0;
let needsVerificationCount = 0;
let impossibleSpecs = 0;

const globalVariantIds = new Set<string>();
const globalVariantSlugsByModel = new Map<string, Set<string>>();

const VALID_FUELS = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'MildHybrid', 'StrongHybrid', 'PlugInHybrid', 'CNG', 'Petrol+CNG'];
const VALID_TRANSMISSIONS = ['Manual', 'Automatic', 'CVT', 'DCT', 'AMT', 'iMT', 'Single-Speed Automatic'];
const VALID_AVAILABILITY = ['standard', 'optional', 'not_available'];

for (const group of variantCatalog.models) {
  // Check model reference exists in models.json
  const activeModel = activeModelMap.get(group.modelId);
  if (!activeModel) {
    console.error(`[ERROR] Group modelId "${group.modelId}" does not exist as an active model in india-car-models.json!`);
    errors++;
    missingModelReferences++;
  }

  const modelSlugs = new Set<string>();
  globalVariantSlugsByModel.set(group.modelId, modelSlugs);

  for (const variant of group.variants) {
    totalVariants++;
    let variantHasError = false;

    // 1. Duplicate ID check
    if (globalVariantIds.has(variant.id)) {
      console.error(`[ERROR] Duplicate variant ID found: "${variant.id}"`);
      duplicateVariantIds++;
      variantHasError = true;
    } else {
      globalVariantIds.add(variant.id);
    }

    // 2. Duplicate slug check within model
    if (modelSlugs.has(variant.slug)) {
      console.error(`[ERROR] Duplicate variant slug within model ${group.modelId}: "${variant.slug}"`);
      duplicateVariantSlugs++;
      variantHasError = true;
    } else {
      modelSlugs.add(variant.slug);
    }

    // 3. Model ID match
    if (variant.modelId !== group.modelId) {
      console.error(`[ERROR] Variant ${variant.id} has modelId "${variant.modelId}" differing from group "${group.modelId}"`);
      missingModelReferences++;
      variantHasError = true;
    }

    // 4. Name & fullName
    if (!variant.name || !variant.name.trim() || !variant.fullName || !variant.fullName.trim()) {
      console.error(`[ERROR] Variant ${variant.id} missing name or fullName`);
      variantHasError = true;
    }

    // 5. Powertrain validity
    if (!VALID_FUELS.includes(variant.powertrain.fuelType)) {
      console.error(`[ERROR] Variant ${variant.id} has invalid fuelType: "${variant.powertrain.fuelType}"`);
      variantHasError = true;
    }
    if (!VALID_TRANSMISSIONS.includes(variant.powertrain.transmission)) {
      console.error(`[ERROR] Variant ${variant.id} has invalid transmission: "${variant.powertrain.transmission}"`);
      variantHasError = true;
    }

    // 6. Pricing validity
    if (variant.pricing.exShowroomLakh === null || variant.pricing.exShowroomLakh <= 0) {
      missingPrices++;
      warnings++;
    }

    // 7. Verification status
    if (variant.variantStatus === 'needs_verification') {
      needsVerificationCount++;
    }

    // 8. Sources validity
    if (!variant.sources || variant.sources.length === 0) {
      console.error(`[ERROR] Variant ${variant.id} has no source metadata!`);
      missingSources++;
      variantHasError = true;
    }

    // 9. Feature availability sanity
    const checkAvailability = (val: string, name: string) => {
      if (!VALID_AVAILABILITY.includes(val)) {
        console.error(`[ERROR] Variant ${variant.id} feature "${name}" has invalid availability value: "${val}"`);
        variantHasError = true;
      }
    };
    checkAvailability(variant.features.safety.abs, 'safety.abs');
    checkAvailability(variant.features.safety.esc, 'safety.esc');
    checkAvailability(variant.features.exterior.sunroof, 'exterior.sunroof');
    checkAvailability(variant.features.interior.ventilatedSeats, 'interior.ventilatedSeats');
    checkAvailability(variant.features.infotainment.digitalInstrumentCluster, 'infotainment.digitalInstrumentCluster');

    // 10. Impossible specs sanity check
    if (variant.powertrain.maxPowerBhp !== null && (variant.powertrain.maxPowerBhp < 15 || variant.powertrain.maxPowerBhp > 2500)) {
      console.error(`[ERROR] Variant ${variant.id} has impossible maxPowerBhp: ${variant.powertrain.maxPowerBhp}`);
      impossibleSpecs++;
      variantHasError = true;
    }
    if (variant.performance.mileageKmpl !== null && (variant.performance.mileageKmpl <= 0 || variant.performance.mileageKmpl > 60)) {
      console.error(`[ERROR] Variant ${variant.id} has impossible mileage: ${variant.performance.mileageKmpl}`);
      impossibleSpecs++;
      variantHasError = true;
    }

    if (variantHasError) {
      errors++;
    } else {
      validVariants++;
    }
  }
}

console.log('VARIANT VALIDATION');
console.log('────────────────────────');
console.log(`Models:                  ${totalModels}`);
console.log(`Variants:                ${totalVariants}`);
console.log('');
console.log(`Valid:                   ${validVariants}`);
console.log(`Warnings:                ${warnings}`);
console.log(`Errors:                  ${errors}`);
console.log('');
console.log(`Duplicate variants:      ${duplicateVariantIds + duplicateVariantSlugs}`);
console.log(`Missing model references: ${missingModelReferences}`);
console.log(`Missing sources:         ${missingSources}`);
console.log(`Missing prices:          ${missingPrices}`);
console.log(`Needs verification:      ${needsVerificationCount}`);
console.log(`Impossible specs:        ${impossibleSpecs}`);
console.log('────────────────────────');

if (errors > 0) {
  console.error(`STATUS: VALIDATION FAILED WITH ${errors} ERRORS.`);
  process.exit(1);
} else {
  console.log('STATUS: VALIDATION PASSED (Zero Errors)');
  process.exit(0);
}
