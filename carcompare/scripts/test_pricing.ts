/**
 * Automated Test Suite: Automobile Pricing & On-Road Calculation System
 *
 * Tests:
 * 1. Ex-showroom price bounds & validation
 * 2. Implausible price deviation safeguards
 * 3. On-road price calculator accuracy across Delhi, Mumbai, Bengaluru
 * 4. EV waiver and TCS (Tax Collected at Source) compliance
 * 5. Official portal and CarDekho link validation
 * 6. Variant-level price snapshot resolution
 */

import { validateCarPriceLakh, determineFreshness, formatFreshnessText, PRICE_RULES } from '../src/lib/pricing/validator';
import { calculateOnRoadPrice, MAJOR_INDIAN_CITIES } from '../src/lib/pricing/onroad';
import { getCarPriceSnapshot } from '../src/lib/pricing/service';
import type { Car } from '../src/types/car';

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
  console.log('🚗 Starting Car Pricing & On-Road Test Suite');
  console.log('==============================================');

  // Test 1: Bounds and checks
  console.log('\n--- 1. Ex-Showroom Bounds & Validation ---');
  {
    const missing = validateCarPriceLakh(NaN);
    assert(!missing.isValid, 'Rejects NaN ex-showroom price');

    const tooLow = validateCarPriceLakh(0.8);
    assert(!tooLow.isValid, `Rejects below automobile floor (< ₹${PRICE_RULES.MIN_CAR_EX_SHOWROOM_LAKH}L)`);

    const absurdHigh = validateCarPriceLakh(2500);
    assert(!absurdHigh.isValid, `Rejects above luxury ceiling (> ₹${PRICE_RULES.MAX_CAR_EX_SHOWROOM_LAKH}L)`);

    const validNormal = validateCarPriceLakh(14.5);
    assert(validNormal.isValid, 'Accepts valid mainstream ex-showroom price (₹14.50L)');
  }

  // Test 2: Implausible deviation
  console.log('\n--- 2. Price Deviation Safeguards ---');
  {
    const previousLakh = 12.0;
    // 35% jump from 12L to 16.5L
    const jump = validateCarPriceLakh(16.5, previousLakh);
    assert(jump.isSuspicious, 'Flags suspicious 37.5% price hike vs previous benchmark');
    assert(jump.warnings.some((w) => w.includes('deviates')), 'Provides deviation warning detail');
  }

  // Test 3: On-Road Price Calculator Accuracy
  console.log('\n--- 3. Transparent On-Road Price Calculator ---');
  {
    const exShowroom = 1200000; // ₹12.00 Lakh Petrol car

    // Delhi
    const delhi = calculateOnRoadPrice(exShowroom, 'Petrol', 'delhi');
    assert(delhi.city === 'New Delhi', 'Resolves Delhi rules correctly');
    assert(delhi.rtoRegistration > 100000, 'Calculates RTO registration with MCD fee');
    assert(delhi.tcsTaxCollectedAtSource === 12000, 'Applies mandatory 1% TCS on ex-showroom > 10 Lakhs');
    assert(delhi.totalOnRoad > exShowroom, 'Total on-road is strictly greater than ex-showroom');
    assert(delhi.assumptions.length >= 3, 'Includes transparent calculation assumptions');

    // Bengaluru (High Tax State)
    const blr = calculateOnRoadPrice(exShowroom, 'Petrol', 'bengaluru');
    assert(blr.city === 'Bengaluru', 'Resolves Bengaluru rules');
    assert(blr.rtoRegistration > delhi.rtoRegistration, 'Karnataka RTO is higher than Delhi RTO');

    // EV 0% Road Tax Waiver
    const delhiEV = calculateOnRoadPrice(exShowroom, 'Electric', 'delhi');
    assert(delhiEV.rtoRegistration === MAJOR_INDIAN_CITIES['delhi'].mcdCessOrMunicipal, 'Delhi EV Road Tax is 0% (only municipal fee)');
  }

  // Test 4: TCS Threshold logic
  console.log('\n--- 4. TCS Threshold Logic ---');
  {
    const under10L = calculateOnRoadPrice(850000, 'Petrol', 'delhi');
    assert(under10L.tcsTaxCollectedAtSource === 0, 'Zero TCS when ex-showroom is under ₹10 Lakhs');

    const over10L = calculateOnRoadPrice(1050000, 'Petrol', 'delhi');
    assert(over10L.tcsTaxCollectedAtSource === 10500, '1% TCS applied when ex-showroom exceeds ₹10 Lakhs');
  }

  // Test 5: Car Pricing Snapshot & Verified Links
  console.log('\n--- 5. Car Pricing Snapshot & Source Links ---');
  {
    const mockCar: Car = {
      id: 'tata-nexon',
      slug: 'tata-nexon',
      brand: 'Tata',
      model: 'Nexon',
      displayName: 'Tata Nexon',
      generation: '2023 Facelift',
      launchYear: 2023,
      bodyType: 'Compact SUV',
      seatingCapacity: 5,
      primaryImage: '/images/cars/nexon.jpg',
      images: [],
      pricing: { minPriceLakh: 8.0, maxPriceLakh: 15.80, currency: 'INR' },
      engine: { fuelType: 'Petrol', displacementCC: 1199, cylinders: 3, turbo: true, maxPowerBhp: 118, maxTorqueNm: 170, transmission: 'Manual', drivetrain: 'FWD' },
      dimensions: { lengthMm: 3995, widthMm: 1804, heightMm: 1620, wheelbaseMm: 2498, groundClearanceMm: 208, kerbWeightKg: 1250, bootSpaceLitres: 382, fuelTankLitres: 44, batteryKWh: null },
      performance: { mileageKmpl: 17.44, rangeKm: null, zeroToHundredSec: null, topSpeedKmph: null },
      safety: { ncapRating: 5, airbagsCount: 6, abs: true, ebd: true, esc: true, tractionControl: true, hillStartAssist: true, adas: false, rearParkingCamera: true, tpms: true, rearParkingSensors: true, frontParkingSensors: false },
      features: { sunroof: true, panoramicSunroof: false, ventilatedFrontSeats: true, poweredDriverSeat: false, digitalCluster: true, infotainmentSizeInches: 10.25, appleCarPlay: true, androidAuto: true, wirelessCharging: true, hud: false, ambientLighting: false, connectedCar: true, otaUpdates: true, autoClimate: true, rearACVents: true, keylessEntry: true, pushButtonStart: true, cruiseControl: true, adaptiveCruiseControl: false },
      pros: ['5-star safety rating', 'Segment-leading ground clearance'],
      cons: ['AMT can be jerky', 'Touchscreen UI has occasional glitches'],
      tagline: 'India’s safest compact SUV',
      description: 'Tata Nexon description',
    };

    const snapshot = getCarPriceSnapshot(mockCar);
    assert(snapshot.slug === 'tata-nexon', 'Retrieves snapshot for Tata Nexon');
    assert(snapshot.minPriceLakh === 8.0, 'Matches verified minimum ex-showroom');
    assert(snapshot.sources.length >= 2, 'Contains official portal and CarDekho sources');

    const officialSource = snapshot.sources.find((s) => s.platform === 'official');
    assert(Boolean(officialSource?.isOfficialManufacturer), 'Marks manufacturer portal as official');

    const cardekhoSource = snapshot.sources.find((s) => s.platform === 'cardekho');
    assert(cardekhoSource!.url.includes('cardekho.com'), 'CarDekho link points to cardekho.com');
    assert(snapshot.history.length >= 1, 'Preserves ex-showroom price history log');
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
