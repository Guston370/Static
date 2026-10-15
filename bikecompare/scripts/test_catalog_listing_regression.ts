import * as fs from 'fs';
import * as path from 'path';
import type { Bike } from '../src/types/bike';

const catalogPath = path.resolve(__dirname, '../data/india-bike-models.json');
const catalogData = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const bikes: Bike[] = catalogData.bikes || [];

interface CatalogListingTestFilters {
  brand?: string;
  category?: string;
  vehicleType?: string;
  fuelType?: string;
  status?: 'all' | 'active' | 'discontinued';
  priceRange?: [number, number];
  searchQuery?: string;
}

console.log(`\n===============================================================`);
console.log(` CATALOG LISTING, FILTERING & REGRESSION TEST SUITE`);
console.log(`===============================================================\n`);

let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`  [FAIL] ${message}`);
    failedTests++;
  }
}

// Emulate filter logic from src/components/BikeFilters.tsx and src/lib/bikes.ts
function applyFilters(items: Bike[], filters: CatalogListingTestFilters): Bike[] {
  return items.filter((bike) => {
    // Status filter
    if (filters.status && filters.status !== 'all') {
      const bikeStatus = bike.status || 'active';
      if (bikeStatus !== filters.status) return false;
    }

    // Vehicle Type
    if (filters.vehicleType && filters.vehicleType !== 'all') {
      if (bike.vehicleType !== filters.vehicleType) return false;
    }

    // Brand filter
    if (filters.brand && filters.brand !== 'all') {
      if (bike.brand.toLowerCase() !== filters.brand.toLowerCase()) return false;
    }

    // Fuel Type filter
    if (filters.fuelType && filters.fuelType !== 'all') {
      if (bike.fuelType.toLowerCase() !== filters.fuelType.toLowerCase()) return false;
    }

    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (bike.category.toLowerCase() !== filters.category.toLowerCase()) return false;
    }

    // Price range filter
    if (filters.priceRange && (bike.startingPrice < filters.priceRange[0] || bike.startingPrice > filters.priceRange[1])) {
      return false;
    }

    // Search query
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase().trim();
      const tokens = q.split(/\s+/).filter(Boolean);
      const searchableText = `${bike.brand} ${bike.model} ${bike.series || ''} ${bike.generation || ''} ${bike.category} ${bike.fuelType} ${bike.tagline}`.toLowerCase();
      const matchesAllTokens = tokens.every((token: string) => searchableText.includes(token));
      if (!matchesAllTokens) return false;
    }

    return true;
  });
}

// ── TEST SUITE ──

console.log(`Test Group 1: Default Catalog Discovery`);
const defaultFilters: CatalogListingTestFilters = {
  brand: 'all',
  category: 'all',
  vehicleType: 'all',
  fuelType: 'all',
  status: 'all',
  priceRange: [0, 3500000],
  searchQuery: '',
};

const allDiscovered = applyFilters(bikes, defaultFilters);
assert(allDiscovered.length === 162, `Default filter discovers 100% of models: 162 found`);

console.log(`\nTest Group 2: Status Availability Filtering`);
const activeOnly = applyFilters(bikes, { ...defaultFilters, status: 'active' });
assert(activeOnly.length === 141, `Active filter discovers exactly 141 models`);

const discontinuedOnly = applyFilters(bikes, { ...defaultFilters, status: 'discontinued' });
assert(discontinuedOnly.length === 21, `Discontinued filter discovers exactly 21 historical models`);
assert(activeOnly.length + discontinuedOnly.length === 162, `Active + Discontinued partition catalog completely (141 + 21 = 162)`);

console.log(`\nTest Group 3: Vehicle Type Filtering`);
const motorcycles = applyFilters(bikes, { ...defaultFilters, vehicleType: 'Motorcycle' });
const scooters = applyFilters(bikes, { ...defaultFilters, vehicleType: 'Scooter' });
const evs = applyFilters(bikes, { ...defaultFilters, vehicleType: 'Electric Two-Wheeler' });
assert(motorcycles.length === 111, `Motorcycle filter returns 111 models`);
assert(scooters.length === 25, `Scooter filter returns 25 models`);
assert(evs.length === 26, `Electric Two-Wheeler filter returns 26 models`);
assert(motorcycles.length + scooters.length + evs.length === 162, `All vehicle types sum to 162 (111 + 25 + 26)`);

console.log(`\nTest Group 4: Powertrain & Fuel Filtering`);
const petrols = applyFilters(bikes, { ...defaultFilters, fuelType: 'Petrol' });
const cngs = applyFilters(bikes, { ...defaultFilters, fuelType: 'CNG' });
const electrics = applyFilters(bikes, { ...defaultFilters, fuelType: 'Electric' });
assert(petrols.length === 135, `Petrol filter returns 135 models`);
assert(cngs.length === 1, `CNG filter returns 1 model (Bajaj Freedom 125 CNG)`);
assert(electrics.length === 26, `Electric filter returns 26 models`);

console.log(`\nTest Group 5: Price Range Bounds Sensitivity`);
// Test lowest priced bike (TVS XL100 at 44,999) is NOT clipped
const budgetCommuters = applyFilters(bikes, { ...defaultFilters, priceRange: [40000, 50000] });
assert(budgetCommuters.length >= 1, `Budget commuter range [40k, 50k] finds TVS XL100: ${budgetCommuters.map(b => b.model).join(', ')}`);

// Test halo superbike range (e.g. BMW S 1000 RR, Ducati Panigale V4, Hayabusa at 16L - 25L)
const haloSuperbikes = applyFilters(bikes, { ...defaultFilters, priceRange: [1500000, 3500000] });
assert(haloSuperbikes.length >= 3, `Halo superbike range [15L, 35L] finds halo models: ${haloSuperbikes.map(b => b.model).join(', ')}`);

console.log(`\nTest Group 6: Tokenized Multi-Token Search Queries`);
const searchQueries = [
  { q: 'splendor', expectedMin: 2, desc: 'Hero Splendor family' },
  { q: 'pulsar ns', expectedMin: 3, desc: 'Bajaj Pulsar NS series' },
  { q: 'activa 6g', expectedMin: 1, desc: 'Honda Activa 6G' },
  { q: 'royal enfield bullet', expectedMin: 2, desc: 'Royal Enfield Bullet models' },
  { q: 'hayabusa', expectedMin: 1, desc: 'Suzuki Hayabusa flagship' },
  { q: 'panigale', expectedMin: 1, desc: 'Ducati Panigale V4' },
  { q: 'ather 450', expectedMin: 3, desc: 'Ather 450 series' },
  { q: 'chetak', expectedMin: 2, desc: 'Chetak EV & 2-Stroke classic' },
  { q: 'rx 100', expectedMin: 1, desc: 'Yamaha RX 100 historical legend' },
  { q: 'rd 350', expectedMin: 1, desc: 'Yamaha RD 350 historical legend' },
  { q: 'freedom cng', expectedMin: 1, desc: 'Bajaj Freedom CNG' },
];

for (const { q, expectedMin, desc } of searchQueries) {
  const res = applyFilters(bikes, { ...defaultFilters, searchQuery: q });
  assert(res.length >= expectedMin, `Search "${q}" (${desc}) found ${res.length} matches (>= ${expectedMin})`);
}

console.log(`\nTest Group 7: Pagination Integrity Simulation`);
const PAGE_SIZE = 24;
const totalPages = Math.ceil(bikes.length / PAGE_SIZE);
assert(totalPages === 7, `162 models at 24/page yields 7 pages`);

const paginatedIds = new Set<string>();
let totalServed = 0;

for (let p = 1; p <= totalPages; p++) {
  const startIndex = (p - 1) * PAGE_SIZE;
  const pageSlice = bikes.slice(startIndex, startIndex + PAGE_SIZE);
  totalServed += pageSlice.length;
  for (const b of pageSlice) {
    assert(!paginatedIds.has(b.id), `Page ${p}: Model '${b.id}' has not appeared on earlier pages`);
    paginatedIds.add(b.id);
  }
}

assert(totalServed === 162, `Pagination serves exactly 162 items in total`);
assert(paginatedIds.size === 162, `All 162 served items are unique across pages`);

console.log(`\nTest Group 8: Sorting Order Invariants`);
// Price Low to High
const sortedLowToHigh = [...bikes].sort((a, b) => a.startingPrice - b.startingPrice);
let isAscending = true;
for (let i = 1; i < sortedLowToHigh.length; i++) {
  if (sortedLowToHigh[i].startingPrice < sortedLowToHigh[i - 1].startingPrice) {
    isAscending = false;
    break;
  }
}
assert(isAscending, `Price low-to-high sort maintains monotonic non-decreasing order (₹${sortedLowToHigh[0].startingPrice} -> ₹${sortedLowToHigh[sortedLowToHigh.length - 1].startingPrice})`);

// Power High to Low
const sortedPowerDesc = [...bikes].sort((a, b) => b.maxPowerBhp - a.maxPowerBhp);
let isDescPower = true;
for (let i = 1; i < sortedPowerDesc.length; i++) {
  if (sortedPowerDesc[i].maxPowerBhp > sortedPowerDesc[i - 1].maxPowerBhp) {
    isDescPower = false;
    break;
  }
}
assert(isDescPower, `Power high-to-low sort maintains monotonic non-increasing order (${sortedPowerDesc[0].model} ${sortedPowerDesc[0].maxPowerBhp} bhp -> ${sortedPowerDesc[sortedPowerDesc.length - 1].model} ${sortedPowerDesc[sortedPowerDesc.length - 1].maxPowerBhp} bhp)`);

console.log(`\n===============================================================`);
console.log(` REGRESSION TEST SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log(`===============================================================\n`);

if (failedTests > 0) {
  console.error(`❌ REGRESSION SUITE FAILED with ${failedTests} failures.`);
  process.exit(1);
} else {
  console.log(`✅ ALL ${passedTests} REGRESSION & INTEGRITY TESTS PASSED!`);
}
