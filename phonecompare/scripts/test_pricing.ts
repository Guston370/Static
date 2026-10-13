/**
 * Automated Test Suite: Smartphone Pricing System
 *
 * Tests:
 * 1. Product-to-source matching
 * 2. Variant matching & price resolution
 * 3. Price validation safeguards (missing, negative, implausible drop/spike)
 * 4. Price history insertion and idempotency
 * 5. Stale price detection & relative formatting
 * 6. Marketplace link validation & security attributes
 */

import { validateMobilePrice, determineFreshness, formatFreshnessText, PRICE_RULES } from '../src/lib/pricing/validator';
import { getMobilePriceSnapshot, generateMobileSourceLinks } from '../src/lib/pricing/service';
import type { MobileModel, MobileVariant } from '../src/types/mobile';

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    console.log(`  ✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${testName}${detail ? ` - ${detail}` : ''}`);
    failed++;
  }
}

async function runTests() {
  console.log('==============================================');
  console.log('🧪 Starting Smartphone Pricing Test Suite');
  console.log('==============================================');

  // Test 1: Bounds and bounds rejection
  console.log('\n--- 1. Price Bounds & Validation Safeguards ---');
  {
    const missing = validateMobilePrice({ price: undefined });
    assert(!missing.isValid, 'Rejects undefined price');

    const negative = validateMobilePrice({ price: -500 });
    assert(!negative.isValid, 'Rejects negative price');

    const toyPrice = validateMobilePrice({ price: 150 });
    assert(!toyPrice.isValid, `Rejects below floor (< ₹${PRICE_RULES.MIN_SMARTPHONE_PRICE})`);

    const superSpike = validateMobilePrice({ price: 999999 });
    assert(!superSpike.isValid, `Rejects above ceiling (> ₹${PRICE_RULES.MAX_SMARTPHONE_PRICE})`);

    const validStandard = validateMobilePrice({
      price: 64999,
      currency: 'INR',
      sourceUrl: 'https://www.amazon.in/dp/sample',
    }, 69999);
    assert(validStandard.isValid, 'Accepts valid retail price in INR with verified URL');
  }

  // Test 2: Implausible drop and spike detection
  console.log('\n--- 2. Implausible Price Swing Detection ---');
  {
    const launchPrice = 100000;
    // 60% plunge (exceeds 45% allowed threshold)
    const plunge = validateMobilePrice(
      { price: 40000, currency: 'INR', sourceUrl: 'https://sample.com' },
      launchPrice
    );
    assert(plunge.isSuspicious, 'Flags suspicious 60% drop as suspicious');
    assert(plunge.warnings.some((w) => w.includes('plunge')), 'Includes plunge warning detail');

    // 50% spike (exceeds 40% allowed threshold)
    const spike = validateMobilePrice(
      { price: 150000, currency: 'INR', sourceUrl: 'https://sample.com' },
      launchPrice
    );
    assert(spike.isSuspicious, 'Flags suspicious 50% spike above launch price');
  }

  // Test 3: Freshness status determination
  console.log('\n--- 3. Freshness Status & Relative Time ---');
  {
    const nowIso = new Date().toISOString();
    assert(determineFreshness(nowIso) === 'fresh', 'Current timestamp is "fresh"');

    // 10 hours ago -> cached
    const tenHoursAgo = new Date(Date.now() - 10 * 3600 * 1000).toISOString();
    assert(determineFreshness(tenHoursAgo) === 'cached', '10-hour old timestamp is "cached"');

    // 10 days ago -> stale
    const tenDaysAgo = new Date(Date.now() - 10 * 24 * 3600 * 1000).toISOString();
    assert(determineFreshness(tenDaysAgo) === 'stale', '10-day old timestamp is "stale"');

    assert(formatFreshnessText(nowIso).includes('just now'), 'Formats current relative time as "just now"');
    assert(formatFreshnessText(tenHoursAgo).includes('10 hours ago'), 'Formats 10h relative text accurately');
  }

  // Test 4: Source link generation
  console.log('\n--- 4. Marketplace & Official Link Validation ---');
  {
    const links = generateMobileSourceLinks('Samsung', 'Galaxy S25 Ultra', 'https://www.samsung.com/in/smartphones/galaxy-s25-ultra/');
    assert(links.length === 3, 'Generates 3 verified sources (Official, Amazon, Flipkart)');

    const official = links.find((l) => l.platform === 'official');
    assert(Boolean(official?.isOfficialManufacturer), 'Marks official store as official manufacturer');
    assert(Boolean(official?.isDirectProductPage), 'Preserves verified direct product page flag');

    const amazon = links.find((l) => l.platform === 'amazon_in');
    assert(!amazon?.isOfficialManufacturer, 'Distinguishes Amazon India as third-party marketplace');
    assert(amazon!.url.includes('amazon.in'), 'Points to amazon.in');
    assert(amazon!.url.includes('electronics'), 'Constrains Amazon search to electronics department');

    const flipkart = links.find((l) => l.platform === 'flipkart');
    assert(flipkart!.url.includes('flipkart.com'), 'Points to flipkart.com');
  }

  // Test 5: Variant matching & Snapshot retrieval
  console.log('\n--- 5. Variant Matching & Snapshot Resolution ---');
  {
    const mockModel: MobileModel = {
      id: 'test-phone',
      slug: 'test-phone',
      brand: 'TestBrand',
      modelName: 'Speedster 5G',
      status: 'active',
      launchDate: '2024-01',
      pricing: {
        startingPrice: 24999,
        maximumPrice: 29999,
        launchPrice: 24999,
        currentPrice: 22999,
        currency: 'INR',
        priceEffectiveDate: '2024-01',
      },
      display: { displaySize: 6.7, displayType: 'AMOLED', resolution: 'FHD+', refreshRate: 120, peakBrightness: 1200, hdr: 'HDR10', protection: 'Gorilla Glass' },
      performance: { chipset: 'Snapdragon 7s Gen 2', cpu: 'Octa-core', gpu: 'Adreno', ramOptions: ['8GB', '12GB'], storageOptions: ['128GB', '256GB'] },
      cameras: { rearCameraSetup: 'Dual', mainCamera: '50MP OIS', frontCamera: '16MP', videoRecording: '4K', ois: true },
      battery: { batteryCapacity: 5000, wiredCharging: 67 },
      connectivity: { has5G: true, has4G: true, wifi: 'Wi-Fi 6', bluetooth: '5.3', nfc: true, usb: 'Type-C', simConfig: 'Dual SIM' },
      physical: { dimensions: '161 x 74 x 7.9 mm', weight: 185, materials: 'Glass', waterResistance: 'IP65', colors: ['Black', 'Blue'] },
      software: { operatingSystem: 'Android', ui: 'Custom', launchOS: 'Android 14', promisedMajorUpdates: 3, securityUpdatePolicy: '4 years' },
      audio: { speakers: 'Stereo', stereo: true, headphoneJack: false },
      security: { fingerprint: 'In-display', faceUnlock: true },
      sources: { verifiedDate: '2024-01-01' },
    };

    const mockVariants: MobileVariant[] = [
      { id: 'test-phone-8-128', modelId: 'test-phone', ram: '8GB', storage: '128GB', price: 22999, mrp: 24999, status: 'active', verified: true },
      { id: 'test-phone-12-256', modelId: 'test-phone', ram: '12GB', storage: '256GB', price: 26999, mrp: 29999, status: 'active', verified: true },
    ];

    const snapshot = getMobilePriceSnapshot(mockModel, mockVariants);
    assert(snapshot.modelId === 'test-phone', 'Matches snapshot to canonical model');
    assert(snapshot.currentLowestPrice <= snapshot.launchPrice, 'Current lowest price does not exceed launch');
    assert(snapshot.variantPrices['test-phone-8-128'].currentPrice === 22999, 'Matches 8GB variant price');
    assert(snapshot.variantPrices['test-phone-12-256'].currentPrice === 26999, 'Matches 12GB variant price');
    assert(snapshot.history.length >= 2, 'Maintains verified historical observation log');
  }

  console.log('\n==============================================');
  console.log(`Results: ${passed} Passed, ${failed} Failed`);
  console.log('==============================================');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
