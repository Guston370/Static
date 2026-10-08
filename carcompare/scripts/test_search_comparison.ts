/**
 * scripts/test_search_comparison.ts
 *
 * Automated verification of:
 * 1. Search across brands, models, fuels
 * 2. Car page dynamic generation
 * 3. Comparison engine with any two models
 */

import { getAllCars, getCarBySlug, matchesSearch, getCarsBySlugs } from '../src/lib/cars';
import { compareCars } from '../src/lib/comparison';

console.log('TESTING MASTER CATALOG SEARCH & COMPARISON');
console.log('──────────────────────────────────────────');

const allCars = getAllCars();
console.log(`Loaded ${allCars.length} active cars from master catalog.`);

// Test Search queries
const testQueries = [
  'BMW',
  'Tata',
  'Hyundai',
  'Porsche',
  'Ferrari',
  'Mercedes',
  'electric',
  'diesel',
  'Creta',
  '911',
];

for (const q of testQueries) {
  const matched = allCars.filter((c) => matchesSearch(c, q));
  console.log(`Search "${q}": found ${matched.length} models (e.g. ${matched.slice(0, 3).map((m) => m.displayName).join(', ')})`);
  if (matched.length === 0) {
    console.error(`FAILED: Search for "${q}" returned 0 results!`);
    process.exit(1);
  }
}

// Test Dynamic Car Pages
const testSlugs = [
  'tata-nexon',
  'hyundai-creta',
  'bmw-x3',
  'porsche-911',
  'ferrari-12cilindri',
  'mahindra-thar-roxx',
];
for (const slug of testSlugs) {
  const car = getCarBySlug(slug);
  if (!car) {
    console.error(`FAILED: Car slug "${slug}" not found in catalog!`);
    process.exit(1);
  }
  console.log(`Car lookup "${slug}": OK (${car.displayName} - ${car.pricing.minPriceLakh}L)`);
}

// Test Comparison Engine
const comparisonPairs = [
  ['tata-nexon', 'bmw-x3'],
  ['porsche-911', 'ferrari-12cilindri'],
  ['tata-nexon', 'hyundai-creta'],
  ['maruti-suzuki-swift', 'bmw-3-series-gran-limousine'],
  ['mahindra-xuv700', 'toyota-innova-hycross'],
];

for (const [slugA, slugB] of comparisonPairs) {
  const selected = getCarsBySlugs([slugA, slugB]);
  if (selected.length !== 2) {
    console.error(`FAILED: Could not find both cars for comparison: ${slugA}, ${slugB}`);
    process.exit(1);
  }
  const result = compareCars(selected);
  const winnerCar = selected.find(c => c.slug === result.overallWinner);
  const winnerScore = result.cars.find(c => c.slug === result.overallWinner);
  console.log(`Comparison "${selected[0].displayName}" vs "${selected[1].displayName}": OK (Winner: ${winnerCar?.displayName}, Score: ${winnerScore?.overallScore.toFixed(1)}/10)`);
}

console.log('──────────────────────────────────────────');
console.log('ALL SEARCH & COMPARISON VERIFICATIONS PASSED');
