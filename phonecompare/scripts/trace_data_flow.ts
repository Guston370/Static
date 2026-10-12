import fs from 'fs';
import path from 'path';
import {
  getAllMobiles,
  getActiveMobiles,
  getMobileCount,
  searchMobiles,
  getAllMobileBrands,
  getMobileBrandCount
} from '../src/lib/mobiles';

const modelsData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/india-mobile-models.json'), 'utf-8')
);
const variantsData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/india-mobile-variants.json'), 'utf-8')
);
const imagesData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/mobile-images.json'), 'utf-8')
);

console.log('=== DATA FLOW TRACE ===');
console.log('1. Models in source JSON:', modelsData.models.length);
console.log('   Variants in source JSON:', variantsData.variants.length);
console.log('   Images in source JSON:', imagesData.models.length);

const allMobiles = getAllMobiles();
console.log('2. Models imported/loaded by application (getAllMobiles):', allMobiles.length);

const activeOnly = getActiveMobiles();
const discontinuedOnly = allMobiles.filter(m => m.status === 'discontinued');
console.log('3. Models by status:');
console.log('   - Active:', activeOnly.length);
console.log('   - Discontinued:', discontinuedOnly.length);
console.log('   - Application getMobileCount():', getMobileCount());

const brands = getAllMobileBrands();
console.log('4. Brands count:', brands.length);
console.log('   Brands list:', brands.join(', '));

// Search test
console.log('5. Search filtering:');
console.log('   - searchMobiles(""):', searchMobiles('').length);
console.log('   - searchMobiles("iphone 13"):', searchMobiles('iphone 13').length);
console.log('   - searchMobiles("galaxy s24"):', searchMobiles('galaxy s24').length);

// Missing optional data checks
const missingImages = allMobiles.filter(m => !m.primaryImage || m.primaryImage.includes('placeholder'));
const missingPrices = allMobiles.filter(m => !m.pricing || !m.pricing.startingPrice);
console.log('6. Models with placeholder/missing image:', missingImages.length);
console.log('   Models with missing price:', missingPrices.length);

// Legacy carcompare check
const legacyCarCompareModelsPath = path.resolve(__dirname, '../../carcompare/data/india-mobile-models.json');
if (fs.existsSync(legacyCarCompareModelsPath)) {
  const legacyData = JSON.parse(fs.readFileSync(legacyCarCompareModelsPath, 'utf-8'));
  console.log('=== LEGACY CARCOMPARE DATASET ===');
  console.log('Legacy carcompare models:', legacyData.models.length);
  console.log('Discrepancy (240 - 74):', 240 - legacyData.models.length);
}
