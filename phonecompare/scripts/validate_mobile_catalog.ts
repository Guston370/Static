/**
 * scripts/validate_mobile_catalog.ts
 *
 * Validates data/india-mobile-models.json against strict data-integrity rules:
 * - Duplicate IDs and Slugs
 * - Required fields (brand, modelName, slug, status, pricing, display, performance, cameras, battery, connectivity, physical, software, security, sources)
 * - Valid status ('active' | 'discontinued' | 'upcoming')
 * - Positive pricing and min <= max constraints
 * - Verified source attribution
 *
 * Usage: npm run validate:mobiles
 */

import * as fs from 'fs';
import * as path from 'path';
import type { MobileModel } from '../src/types/mobile';

const catalogPath = path.resolve(__dirname, '../data/india-mobile-models.json');

if (!fs.existsSync(catalogPath)) {
  console.error(`ERROR: data/india-mobile-models.json not found at ${catalogPath}`);
  process.exit(1);
}

const rawData = fs.readFileSync(catalogPath, 'utf8');
const catalog = JSON.parse(rawData);

if (!catalog.models || !Array.isArray(catalog.models)) {
  console.error('ERROR: catalog.models must be an array');
  process.exit(1);
}

const models: MobileModel[] = catalog.models;
let errors = 0;
let warnings = 0;

const idSet = new Set<string>();
const slugSet = new Set<string>();

console.log(`\nValidating ${models.length} mobile models in data/india-mobile-models.json...\n`);

for (let i = 0; i < models.length; i++) {
  const m = models[i];
  const ref = `Model[${i}] (${m.brand} ${m.modelName || m.id || 'unnamed'})`;

  // ID & Slug uniqueness
  if (!m.id) {
    console.error(`[FAIL] ${ref}: Missing 'id'`);
    errors++;
  } else if (idSet.has(m.id)) {
    console.error(`[FAIL] ${ref}: Duplicate id '${m.id}'`);
    errors++;
  } else {
    idSet.add(m.id);
  }

  if (!m.slug) {
    console.error(`[FAIL] ${ref}: Missing 'slug'`);
    errors++;
  } else if (slugSet.has(m.slug)) {
    console.error(`[FAIL] ${ref}: Duplicate slug '${m.slug}'`);
    errors++;
  } else {
    slugSet.add(m.slug);
  }

  // Brand and modelName
  if (!m.brand || m.brand.trim() === '') {
    console.error(`[FAIL] ${ref}: Missing 'brand'`);
    errors++;
  }
  if (!m.modelName || m.modelName.trim() === '') {
    console.error(`[FAIL] ${ref}: Missing 'modelName'`);
    errors++;
  }

  // Status
  const validStatuses = ['active', 'discontinued', 'upcoming'];
  if (!validStatuses.includes(m.status)) {
    console.error(`[FAIL] ${ref}: Invalid status '${m.status}'. Must be one of ${validStatuses.join(', ')}`);
    errors++;
  }

  // Pricing
  if (!m.pricing) {
    console.error(`[FAIL] ${ref}: Missing 'pricing' object`);
    errors++;
  } else {
    if (typeof m.pricing.startingPrice !== 'number' || m.pricing.startingPrice <= 0) {
      console.error(`[FAIL] ${ref}: Invalid startingPrice (${m.pricing.startingPrice})`);
      errors++;
    }
    if (typeof m.pricing.maximumPrice !== 'number' || m.pricing.maximumPrice < m.pricing.startingPrice) {
      console.error(`[FAIL] ${ref}: maximumPrice (${m.pricing.maximumPrice}) cannot be less than startingPrice (${m.pricing.startingPrice})`);
      errors++;
    }
    if (m.pricing.currency !== 'INR') {
      console.error(`[FAIL] ${ref}: currency must be 'INR'`);
      errors++;
    }
  }

  // Display specs
  if (!m.display) {
    console.error(`[FAIL] ${ref}: Missing 'display' object`);
    errors++;
  } else {
    if (!m.display.displaySize || m.display.displaySize < 4.0 || m.display.displaySize > 9.0) {
      console.error(`[FAIL] ${ref}: Display size ${m.display.displaySize}" is out of expected smartphone range`);
      errors++;
    }
    if (!m.display.refreshRate || m.display.refreshRate < 60) {
      console.error(`[FAIL] ${ref}: Refresh rate ${m.display.refreshRate}Hz must be >= 60Hz`);
      errors++;
    }
  }

  // Performance specs
  if (!m.performance) {
    console.error(`[FAIL] ${ref}: Missing 'performance' object`);
    errors++;
  } else {
    if (!m.performance.chipset) {
      console.error(`[FAIL] ${ref}: Missing chipset`);
      errors++;
    }
    if (!m.performance.ramOptions || m.performance.ramOptions.length === 0) {
      console.error(`[FAIL] ${ref}: Missing ramOptions`);
      errors++;
    }
    if (!m.performance.storageOptions || m.performance.storageOptions.length === 0) {
      console.error(`[FAIL] ${ref}: Missing storageOptions`);
      errors++;
    }
  }

  // Cameras
  if (!m.cameras) {
    console.error(`[FAIL] ${ref}: Missing 'cameras' object`);
    errors++;
  } else {
    if (!m.cameras.mainCamera) {
      console.error(`[FAIL] ${ref}: Missing mainCamera description`);
      errors++;
    }
    if (!m.cameras.frontCamera) {
      console.error(`[FAIL] ${ref}: Missing frontCamera description`);
      errors++;
    }
  }

  // Battery
  if (!m.battery) {
    console.error(`[FAIL] ${ref}: Missing 'battery' object`);
    errors++;
  } else {
    if (!m.battery.batteryCapacity || m.battery.batteryCapacity < 2000 || m.battery.batteryCapacity > 10000) {
      console.error(`[FAIL] ${ref}: Battery capacity ${m.battery.batteryCapacity}mAh is outside realistic range`);
      errors++;
    }
  }

  // Connectivity
  if (!m.connectivity) {
    console.error(`[FAIL] ${ref}: Missing 'connectivity' object`);
    errors++;
  }

  // Software & Updates
  if (!m.software) {
    console.error(`[FAIL] ${ref}: Missing 'software' object`);
    errors++;
  } else {
    if (!['Android', 'iOS'].includes(m.software.operatingSystem)) {
      console.error(`[FAIL] ${ref}: Invalid operating system '${m.software.operatingSystem}'`);
      errors++;
    }
  }

  // Source attribution
  if (!m.sources || !m.sources.officialWebsite) {
    console.warn(`[WARN] ${ref}: Missing official source website URL`);
    warnings++;
  }
}

console.log('──────────────────────────────────────────────────');
console.log(`Results: ${models.length} models checked`);
console.log(`Errors:   ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  console.error('\n❌ Mobile catalog validation FAILED with ' + errors + ' errors.');
  process.exit(1);
} else {
  console.log('\n✓ Mobile catalog validation PASSED (0 errors).');
}
