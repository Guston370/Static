/**
 * scripts/validate_car_catalog.ts
 *
 * Validates data/india-car-models.json against strict rules:
 * - Duplicate IDs / Slugs
 * - Missing required fields (manufacturer, brand, name, fullName)
 * - Invalid status (must be active, discontinued, upcoming, announced)
 * - Invalid body types
 * - Invalid fuel types
 * - Invalid URLs
 * - Missing sources
 * - Pricing validity (min <= max, positive)
 * - ISO Date validity
 *
 * Usage: npm run validate:cars
 */

import * as fs from 'fs';
import * as path from 'path';

interface ModelSource {
  name: string;
  url: string | null;
  type: string;
  checkedAt: string;
}

interface CatalogModel {
  id: string;
  manufacturer: string;
  brand: string;
  name: string;
  fullName: string;
  slug: string;
  status: string;
  bodyType: string;
  segment?: string | null;
  fuelTypes: string[];
  transmissions?: string[];
  startingPrice?: number | null;
  endingPrice?: number | null;
  officialUrl?: string | null;
  sources?: ModelSource[];
  lastVerified?: string;
}

interface MasterCatalog {
  metadata: {
    country: string;
    market: string;
    lastUpdated: string;
    catalogVersion: string;
    totalManufacturers: number;
    totalBrands: number;
    totalModels: number;
    activeModels: number;
    discontinuedModels: number;
    upcomingModels: number;
  };
  manufacturers: Array<{ id: string; name: string }>;
  brands: Array<{ id: string; name: string }>;
  models: CatalogModel[];
}

export function validateCatalog(catalogPath?: string): {
  valid: boolean;
  errors: string[];
  warnings: string[];
  summary: {
    manufacturers: number;
    brands: number;
    totalModels: number;
    activeModels: number;
    discontinuedModels: number;
    upcomingModels: number;
    validModels: number;
    warningCount: number;
    errorCount: number;
    duplicateModels: number;
    missingSources: number;
    missingOfficialUrls: number;
  };
} {
  const filePath =
    catalogPath || path.join(__dirname, '..', 'data', 'india-car-models.json');

  if (!fs.existsSync(filePath)) {
    throw new Error(`Catalog file not found at: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const catalog: MasterCatalog = JSON.parse(raw);

  const errors: string[] = [];
  const warnings: string[] = [];

  const validStatuses = new Set(['active', 'discontinued', 'upcoming', 'announced']);
  const validBodyTypes = new Set([
    'Hatchback',
    'Sedan',
    'SUV',
    'Compact SUV',
    'Micro SUV',
    'Coupe SUV',
    'MPV',
    'MUV',
    'Coupe',
    'Convertible',
    'Pickup Truck',
    'Van',
    'Crossover',
  ]);
  const validFuelTypes = new Set([
    'Petrol',
    'Diesel',
    'Electric',
    'Hybrid',
    'MildHybrid',
    'StrongHybrid',
    'PlugInHybrid',
    'CNG',
    'Petrol+CNG',
    'LPG',
  ]);

  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
  const seenFullNames = new Set<string>();

  let duplicateCount = 0;
  let missingSourceCount = 0;
  let missingOfficialUrlCount = 0;
  let validModelCount = 0;

  for (const m of catalog.models) {
    let hasModelError = false;

    // 1. Identity & Duplicate check
    if (!m.id) {
      errors.push(`Model missing ID: ${JSON.stringify(m)}`);
      hasModelError = true;
    } else if (seenIds.has(m.id)) {
      errors.push(`Duplicate ID detected: "${m.id}"`);
      duplicateCount++;
      hasModelError = true;
    } else {
      seenIds.add(m.id);
    }

    if (!m.slug) {
      errors.push(`Model missing slug: "${m.fullName || m.name}"`);
      hasModelError = true;
    } else if (seenSlugs.has(m.slug)) {
      errors.push(`Duplicate slug detected: "${m.slug}"`);
      duplicateCount++;
      hasModelError = true;
    } else {
      seenSlugs.add(m.slug);
    }

    const normalizedName = `${m.brand} ${m.name}`
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
    if (seenFullNames.has(normalizedName)) {
      warnings.push(`Possible duplicate model name: "${m.brand} ${m.name}"`);
    } else {
      seenFullNames.add(normalizedName);
    }

    // 2. Required fields
    if (!m.manufacturer) {
      errors.push(`[${m.slug}] Missing manufacturer`);
      hasModelError = true;
    }
    if (!m.brand) {
      errors.push(`[${m.slug}] Missing brand`);
      hasModelError = true;
    }
    if (!m.name) {
      errors.push(`[${m.slug}] Missing model name`);
      hasModelError = true;
    }

    // 3. Status check
    if (!m.status || !validStatuses.has(m.status)) {
      errors.push(`[${m.slug}] Invalid status: "${m.status}". Must be one of: ${[...validStatuses].join(', ')}`);
      hasModelError = true;
    }

    // 4. Body type check
    if (!m.bodyType || !validBodyTypes.has(m.bodyType)) {
      warnings.push(`[${m.slug}] Non-standard body type: "${m.bodyType}"`);
    }

    // 5. Fuel types check
    if (!m.fuelTypes || m.fuelTypes.length === 0) {
      warnings.push(`[${m.slug}] No fuel types specified`);
    } else {
      for (const f of m.fuelTypes) {
        if (!validFuelTypes.has(f)) {
          warnings.push(`[${m.slug}] Unknown fuel type: "${f}"`);
        }
      }
    }

    // 6. Pricing check
    if (m.startingPrice !== null && m.startingPrice !== undefined) {
      if (typeof m.startingPrice !== 'number' || m.startingPrice <= 0) {
        errors.push(`[${m.slug}] Invalid starting price: ${m.startingPrice}`);
        hasModelError = true;
      }
    }
    if (m.endingPrice !== null && m.endingPrice !== undefined && m.startingPrice !== null && m.startingPrice !== undefined) {
      if (m.endingPrice < m.startingPrice) {
        errors.push(`[${m.slug}] Ending price (${m.endingPrice}) is lower than starting price (${m.startingPrice})`);
        hasModelError = true;
      }
    }

    // 7. Sources check
    if (!m.sources || m.sources.length === 0) {
      warnings.push(`[${m.slug}] Missing source verification records`);
      missingSourceCount++;
    }

    // 8. Official URL check
    if (!m.officialUrl) {
      missingOfficialUrlCount++;
    } else if (!m.officialUrl.startsWith('http://') && !m.officialUrl.startsWith('https://')) {
      errors.push(`[${m.slug}] Invalid officialUrl: "${m.officialUrl}"`);
      hasModelError = true;
    }

    // 9. Date check
    if (m.lastVerified) {
      const isValidDate = !isNaN(Date.parse(m.lastVerified));
      if (!isValidDate) {
        errors.push(`[${m.slug}] Invalid lastVerified date format: "${m.lastVerified}"`);
        hasModelError = true;
      }
    }

    if (!hasModelError) {
      validModelCount++;
    }
  }

  const activeCount = catalog.models.filter((m) => m.status === 'active').length;
  const discCount = catalog.models.filter((m) => m.status === 'discontinued').length;
  const upcCount = catalog.models.filter((m) => m.status === 'upcoming' || m.status === 'announced').length;

  const summary = {
    manufacturers: catalog.manufacturers.length,
    brands: catalog.brands.length,
    totalModels: catalog.models.length,
    activeModels: activeCount,
    discontinuedModels: discCount,
    upcomingModels: upcCount,
    validModels: validModelCount,
    warningCount: warnings.length,
    errorCount: errors.length,
    duplicateModels: duplicateCount,
    missingSources: missingSourceCount,
    missingOfficialUrls: missingOfficialUrlCount,
  };

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    summary,
  };
}

export function runValidation() {
  const result = validateCatalog();
  const s = result.summary;

  console.log('INDIAN CAR CATALOG VALIDATION');
  console.log('─────────────────────────────');
  console.log(`Manufacturers:       ${s.manufacturers}`);
  console.log(`Brands:              ${s.brands}`);
  console.log(`Total models:        ${s.totalModels}`);
  console.log(`Active models:       ${s.activeModels}`);
  console.log(`Discontinued models: ${s.discontinuedModels}`);
  console.log(`Upcoming models:     ${s.upcomingModels}`);
  console.log('');
  console.log(`Valid:               ${s.validModels}`);
  console.log(`Warnings:            ${s.warningCount}`);
  console.log(`Errors:              ${s.errorCount}`);
  console.log('');
  console.log(`Duplicate models:    ${s.duplicateModels}`);
  console.log(`Missing sources:     ${s.missingSources}`);
  console.log(`Missing official URLs: ${s.missingOfficialUrls}`);
  console.log('─────────────────────────────');

  if (result.errors.length > 0) {
    console.error('\nERRORS FOUND:');
    result.errors.forEach((e) => console.error(`✖ ${e}`));
    process.exit(1);
  } else {
    console.log('STATUS: VALIDATION PASSED (Zero Errors)\n');
    process.exit(0);
  }
}

if (require.main === module) {
  runValidation();
}
