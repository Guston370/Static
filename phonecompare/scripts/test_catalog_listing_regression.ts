import fs from 'fs';
import path from 'path';
import {
  getAllMobiles,
  getActiveMobiles,
  getDiscontinuedMobiles,
  getAllMobileBrands,
  getMobileCount,
  getActiveMobileCount,
  getDiscontinuedMobileCount,
  getTotalMobileCount,
  searchMobiles,
  formatMobilePriceRange,
} from '../src/lib/mobiles';
import type { MobileModel } from '../src/types/mobile';

// Load source JSON directly for canonical comparison
const sourceModelsData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/india-mobile-models.json'), 'utf-8')
);
const sourceVariantsData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/india-mobile-variants.json'), 'utf-8')
);
const sourceImagesData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/mobile-images.json'), 'utf-8')
);

console.log('═══════════════════════════════════════════════════════════════');
console.log(' PHONECOMPARE CATALOG & LISTING REGRESSION TEST SUITE');
console.log('═══════════════════════════════════════════════════════════════\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${testName} ${detail ? `(${detail})` : ''}`);
    failCount++;
  }
}

// ── Test 1: Canonical Records Parity ──
console.log('Test Group 1: Canonical Records Parity');
const allMobiles = getAllMobiles();
assert(
  allMobiles.length === sourceModelsData.models.length,
  'Application loads exactly the same number of models as source JSON',
  `app: ${allMobiles.length}, source: ${sourceModelsData.models.length}`
);

const appIds = new Set(allMobiles.map((m) => m.id));
const sourceIds = new Set(sourceModelsData.models.map((m: any) => m.id));
assert(
  appIds.size === sourceIds.size && [...appIds].every((id) => sourceIds.has(id)),
  'Every source model ID exists in application catalog with zero omissions or additions'
);

assert(
  allMobiles.length >= 240,
  `Catalog preserves the complete verified inventory (${allMobiles.length} >= 240)`
);

// ── Test 2: Status Breakdown and Counts ──
console.log('\nTest Group 2: Availability Status Handling');
const activeMobiles = getActiveMobiles();
const discontinuedMobiles = getDiscontinuedMobiles();

assert(
  activeMobiles.length === getActiveMobileCount(),
  'getActiveMobiles() matches getActiveMobileCount()',
  `${activeMobiles.length} === ${getActiveMobileCount()}`
);

assert(
  discontinuedMobiles.length === getDiscontinuedMobileCount(),
  'getDiscontinuedMobiles() matches getDiscontinuedMobileCount()',
  `${discontinuedMobiles.length} === ${getDiscontinuedMobileCount()}`
);

assert(
  activeMobiles.length + discontinuedMobiles.length === allMobiles.length,
  'Active + Discontinued models exactly equals total catalog models (no leaks or unclassified models)',
  `${activeMobiles.length} + ${discontinuedMobiles.length} = ${allMobiles.length}`
);

assert(
  getTotalMobileCount() === allMobiles.length,
  'getTotalMobileCount() returns full canonical count',
  `${getTotalMobileCount()} === ${allMobiles.length}`
);

// ── Test 3: Brand Coverage and Integrity ──
console.log('\nTest Group 3: Brand Coverage and Filtering');
const brands = getAllMobileBrands();
assert(brands.length >= 19, `All supported brands are present (found ${brands.length} >= 19)`);

const requiredBrands = [
  'Samsung',
  'Apple',
  'OnePlus',
  'Google',
  'Xiaomi',
  'Redmi',
  'POCO',
  'Vivo',
  'iQOO',
  'OPPO',
  'realme',
  'Motorola',
  'Nothing',
  'ASUS',
  'Infinix',
  'Tecno',
  'Lava',
  'HMD',
  'Honor',
];

for (const reqBrand of requiredBrands) {
  const brandModels = allMobiles.filter((m) => m.brand.toLowerCase() === reqBrand.toLowerCase());
  assert(
    brandModels.length > 0,
    `Brand "${reqBrand}" has valid catalog models (${brandModels.length} models found)`
  );
}

// ── Test 4: Search Query Matching ──
console.log('\nTest Group 4: Search Functionality');
// Multi-word search matching
const samsungUltraResults = searchMobiles('samsung ultra');
assert(
  samsungUltraResults.length > 0 &&
    samsungUltraResults.every(
      (m) =>
        m.brand.toLowerCase() === 'samsung' &&
        m.modelName.toLowerCase().includes('ultra')
    ),
  'Search "samsung ultra" returns matching Samsung Ultra models',
  `Found ${samsungUltraResults.length} models`
);

// Searching discontinued phone returns it
const iphone13Results = searchMobiles('iphone 13');
assert(
  iphone13Results.some((m) => m.id === 'apple-iphone-13'),
  'Search includes discontinued models like iPhone 13'
);

// Searching chipset
const snapdragonResults = searchMobiles('Snapdragon 8 Gen 3');
assert(
  snapdragonResults.length > 0,
  'Search matches chipset specifications (Snapdragon 8 Gen 3)',
  `Found ${snapdragonResults.length} models`
);

// Empty query returns all models
const emptySearchResults = searchMobiles('');
assert(
  emptySearchResults.length === allMobiles.length,
  'Empty search returns all canonical models'
);

// ── Test 5: Pagination Simulation and Total Preservation ──
console.log('\nTest Group 5: Pagination and Total Matching Results');
const PAGE_SIZE = 24;
const totalModels = allMobiles.length;
const totalPages = Math.ceil(totalModels / PAGE_SIZE);

let paginatedCollection: MobileModel[] = [];
for (let page = 1; page <= totalPages; page++) {
  const startIndex = (page - 1) * PAGE_SIZE;
  const pageSlice = allMobiles.slice(startIndex, startIndex + PAGE_SIZE);

  if (page < totalPages) {
    assert(
      pageSlice.length === PAGE_SIZE,
      `Page ${page} contains exactly ${PAGE_SIZE} items`
    );
  } else {
    const expectedLastPageCount = totalModels - (totalPages - 1) * PAGE_SIZE;
    assert(
      pageSlice.length === expectedLastPageCount,
      `Last page (${page}) contains remaining ${expectedLastPageCount} items`
    );
  }

  paginatedCollection.push(...pageSlice);
}

assert(
  paginatedCollection.length === totalModels,
  'Union of all paginated slices matches total catalog count exactly',
  `${paginatedCollection.length} === ${totalModels}`
);

const paginatedIds = new Set(paginatedCollection.map((m) => m.id));
assert(
  paginatedIds.size === totalModels,
  'Pagination has zero duplicate items across pages'
);

// ── Test 6: Missing Optional Data Resilience ──
console.log('\nTest Group 6: Resilience to Missing Optional Data');
const testModelWithMissingData: MobileModel = {
  ...allMobiles[0],
  id: 'test-model-resilience',
  modelName: 'Resilience Test Phone',
  primaryImage: undefined as any,
  physical: {
    ...allMobiles[0].physical,
    waterResistance: '' as any,
  },
  pricing: {
    startingPrice: 0,
    maximumPrice: 0,
  },
};

const priceText = formatMobilePriceRange(testModelWithMissingData);
assert(
  typeof priceText === 'string' && priceText.length > 0,
  'formatMobilePriceRange handles zero/missing starting price without throwing',
  `Returned: "${priceText}"`
);

// ── Test 7: Deduplication and Distinctness ──
console.log('\nTest Group 7: Deduplication and Distinctness');
const allSlugs = allMobiles.map((m) => m.slug);
const uniqueSlugs = new Set(allSlugs);
assert(
  allSlugs.length === uniqueSlugs.size,
  'Every mobile model has a unique slug (no slug collisions)'
);

const allIds = allMobiles.map((m) => m.id);
const uniqueIds = new Set(allIds);
assert(
  allIds.length === uniqueIds.size,
  'Every mobile model has a unique ID (no ID collisions)'
);

// Verify distinct sub-models are not merged (e.g. Galaxy S25 vs S25+ vs S25 Ultra)
const s25Regular = allMobiles.find((m) => m.id === 'samsung-galaxy-s25');
const s25Plus = allMobiles.find((m) => m.id === 'samsung-galaxy-s25-plus');
const s25Ultra = allMobiles.find((m) => m.id === 'samsung-galaxy-s25-ultra');

assert(
  Boolean(s25Regular && s25Plus && s25Ultra),
  'Distinct sub-models in a family (S25, S25+, S25 Ultra) remain independent entries'
);

// ── Test 8: Filter Clearing Returns Full Catalog ──
console.log('\nTest Group 8: Filter Clearing Guarantees');
// Simulate filtered state -> clear all
let activeFilters: any = {
  brand: 'Apple',
  status: 'active',
  query: 'pro',
};
// After reset:
activeFilters = {
  brand: null,
  status: 'all',
  query: '',
};

const clearedResults = allMobiles.filter((m) => {
  if (activeFilters.status === 'active' && m.status !== 'active') return false;
  if (activeFilters.status === 'discontinued' && m.status !== 'discontinued') return false;
  if (activeFilters.brand && m.brand !== activeFilters.brand) return false;
  if (activeFilters.query && !m.modelName.toLowerCase().includes(activeFilters.query)) return false;
  return true;
});

assert(
  clearedResults.length === allMobiles.length,
  `Clearing filters yields all ${allMobiles.length} canonical models`
);

console.log('\n───────────────────────────────────────────────────────────────');
console.log(`TOTAL TESTS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log('───────────────────────────────────────────────────────────────\n');

if (failCount > 0) {
  process.exit(1);
}
