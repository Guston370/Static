import * as fs from 'fs';
import * as path from 'path';
import type { Bike } from '../src/types/bike';

const catalogPath = path.resolve(__dirname, '../data/india-bike-models.json');

if (!fs.existsSync(catalogPath)) {
  console.error(`ERROR: data/india-bike-models.json not found at ${catalogPath}`);
  process.exit(1);
}

const rawData = fs.readFileSync(catalogPath, 'utf8');
const catalog = JSON.parse(rawData);

if (!catalog.bikes || !Array.isArray(catalog.bikes)) {
  console.error('ERROR: catalog.bikes must be an array');
  process.exit(1);
}

const bikes: Bike[] = catalog.bikes;
let errors = 0;
let warnings = 0;

const idSet = new Set<string>();
const slugSet = new Set<string>();

console.log(`\n===============================================================`);
console.log(` VALIDATING ${bikes.length} TWO-WHEELER MODELS (india-bike-models.json)`);
console.log(`===============================================================\n`);

for (let i = 0; i < bikes.length; i++) {
  const b = bikes[i];
  const ref = `Bike[${i}] (${b.brand} ${b.model || b.id || 'unnamed'})`;

  // ID & Slug uniqueness
  if (!b.id) {
    console.error(`[FAIL] ${ref}: Missing 'id'`);
    errors++;
  } else if (idSet.has(b.id)) {
    console.error(`[FAIL] ${ref}: Duplicate id '${b.id}'`);
    errors++;
  } else {
    idSet.add(b.id);
  }

  if (!b.slug) {
    console.error(`[FAIL] ${ref}: Missing 'slug'`);
    errors++;
  } else if (slugSet.has(b.slug)) {
    console.error(`[FAIL] ${ref}: Duplicate slug '${b.slug}'`);
    errors++;
  } else {
    slugSet.add(b.slug);
  }

  // Required text fields
  if (!b.brand || typeof b.brand !== 'string') {
    console.error(`[FAIL] ${ref}: Invalid or missing 'brand'`);
    errors++;
  }
  if (!b.model || typeof b.model !== 'string') {
    console.error(`[FAIL] ${ref}: Invalid or missing 'model'`);
    errors++;
  }
  if (!b.tagline) {
    console.error(`[FAIL] ${ref}: Missing 'tagline'`);
    errors++;
  }

  // Status check
  if (b.status && !['active', 'discontinued'].includes(b.status)) {
    console.error(`[FAIL] ${ref}: Invalid status '${b.status}'`);
    errors++;
  }

  // Vehicle Type
  if (!['Motorcycle', 'Scooter', 'Electric Two-Wheeler'].includes(b.vehicleType)) {
    console.error(`[FAIL] ${ref}: Invalid vehicleType '${b.vehicleType}'`);
    errors++;
  }

  // Fuel Type
  if (!['Petrol', 'Electric', 'CNG'].includes(b.fuelType)) {
    console.error(`[FAIL] ${ref}: Invalid fuelType '${b.fuelType}'`);
    errors++;
  }

  // Pricing
  if (typeof b.startingPrice !== 'number' || b.startingPrice <= 0) {
    console.error(`[FAIL] ${ref}: Invalid startingPrice ${b.startingPrice}`);
    errors++;
  }
  if (typeof b.maxPrice !== 'number' || b.maxPrice < b.startingPrice) {
    console.error(`[FAIL] ${ref}: maxPrice (${b.maxPrice}) cannot be less than startingPrice (${b.startingPrice})`);
    errors++;
  }

  // Specifications
  if (b.fuelType === 'Electric') {
    if (b.electricRangeKm === null || b.electricRangeKm === undefined || b.electricRangeKm <= 0) {
      console.warn(`[WARN] ${ref}: EV missing valid electricRangeKm`);
      warnings++;
    }
  } else {
    if (b.displacementCC === null || b.displacementCC <= 0) {
      console.error(`[FAIL] ${ref}: ICE vehicle missing valid displacementCC`);
      errors++;
    }
  }

  if (typeof b.maxPowerBhp !== 'number' || b.maxPowerBhp <= 0) {
    console.error(`[FAIL] ${ref}: Invalid maxPowerBhp ${b.maxPowerBhp}`);
    errors++;
  }
  if (typeof b.maxTorqueNm !== 'number' || b.maxTorqueNm <= 0) {
    console.error(`[FAIL] ${ref}: Invalid maxTorqueNm ${b.maxTorqueNm}`);
    errors++;
  }

  if (typeof b.kerbWeightKg !== 'number' || b.kerbWeightKg <= 0) {
    console.error(`[FAIL] ${ref}: Invalid kerbWeightKg ${b.kerbWeightKg}`);
    errors++;
  }

  // Image & Source URL
  if (!b.image || typeof b.image !== 'string') {
    console.error(`[FAIL] ${ref}: Missing 'image'`);
    errors++;
  }
  if (!b.sourceUrl || typeof b.sourceUrl !== 'string') {
    console.warn(`[WARN] ${ref}: Missing 'sourceUrl'`);
    warnings++;
  }
}

console.log(`Validation Complete: ${errors} errors, ${warnings} warnings.`);
if (errors > 0) {
  console.error(`\n❌ FAILED: ${errors} validation errors found.`);
  process.exit(1);
} else {
  console.log(`\n✅ PASSED: All ${bikes.length} bike models meet strict schema and data integrity constraints.\n`);
}
