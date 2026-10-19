/**
 * scripts/data_verified_variants_hyundai_batch4.ts
 *
 * Comprehensive, verified variant database for Hyundai India Batch 4:
 * 1. Hyundai i20 N Line (5 variants) - 1.0L Turbo GDi Petrol (6MT & 7DCT)
 * 2. Hyundai Venue N Line (6 variants) - 1.0L Turbo GDi Petrol (6MT & 7DCT)
 * 3. Hyundai Creta N Line (4 variants) - 1.5L Turbo GDi Petrol (6MT & 7DCT)
 * 4. Hyundai Creta Electric (29 variants) - 42.0 kWh & 51.4 kWh Long Range (HC / Knight / Lounge)
 * 5. Hyundai Ioniq 5 (1 variant) - 84.0 kWh RWD Ultra-Fast Charging Electric
 *
 * Total: 45 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// 1.0L Turbo Petrol 6MT (i20 N Line & Venue N Line)
const TURBO_1_0_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Smartstream T-GDi 3-Cylinder Turbo Petrol (6-Speed Manual)',
  engineDisplacementCC: 998,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 118,
  maxTorqueNm: 172,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// 1.0L Turbo Petrol 7DCT (i20 N Line & Venue N Line)
const TURBO_1_0_DCT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Smartstream T-GDi 3-Cylinder Turbo Petrol (7-Speed Dual Clutch Transmission)',
  engineDisplacementCC: 998,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 118,
  maxTorqueNm: 172,
  transmission: 'Automatic (DCT)' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// 1.5L Turbo Petrol 6MT (Creta N Line)
const TURBO_1_5_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L Smartstream GDi 4-Cylinder Turbo Petrol (6-Speed Manual)',
  engineDisplacementCC: 1482,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 158,
  maxTorqueNm: 253,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// 1.5L Turbo Petrol 7DCT (Creta N Line)
const TURBO_1_5_DCT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L Smartstream GDi 4-Cylinder Turbo Petrol (7-Speed DCT)',
  engineDisplacementCC: 1482,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 158,
  maxTorqueNm: 253,
  transmission: 'Automatic (DCT)' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// Creta Electric 42 kWh (133 bhp)
const CRETA_EV_42_KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Permanent Magnet Synchronous Motor (42.0 kWh Liquid-Cooled Battery)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 133,
  maxTorqueNm: 255,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 42.0,
  electricMotorPowerBhp: 133,
  electricRangeKm: 420,
};

// Creta Electric 42 kWh High-Spec (169 bhp)
const CRETA_EV_42_KWH_HI = {
  fuelType: 'Electric' as const,
  engineName: 'High-Output Permanent Magnet Synchronous Motor (42.0 kWh Battery)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 169,
  maxTorqueNm: 280,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 42.0,
  electricMotorPowerBhp: 169,
  electricRangeKm: 420,
};

// Creta Electric 51.4 kWh Long Range (169 bhp)
const CRETA_EV_51_4_KWH_LR = {
  fuelType: 'Electric' as const,
  engineName: 'Permanent Magnet Synchronous Motor (51.4 kWh Long Range Battery)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 169,
  maxTorqueNm: 280,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 51.4,
  electricMotorPowerBhp: 169,
  electricRangeKm: 510,
};

// Ioniq 5 84 kWh RWD (225 bhp)
const IONIQ_5_84_KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Rear Ultra-High Performance PMSM Motor (84.0 kWh Battery Pack, 800V Architecture)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 225,
  maxTorqueNm: 350,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 84.0,
  electricMotorPowerBhp: 225,
  electricRangeKm: 631,
};

// ============================================================================
// 1. HYUNDAI i20 N LINE (5 VARIANTS)
// ============================================================================
export const HYUNDAI_I20_N_LINE_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'n6-petrol-turbo-manual', name: 'i20 N Line N6 | Petrol Turbo | Manual', fullName: 'Hyundai i20 N Line N6 1.0 Turbo MT', trim: 'N6', pt: TURBO_1_0_MT, exLakh: 9.99, onRoadLakh: 10.80 },
    { slug: 'n8-petrol-turbo-manual', name: 'i20 N Line N8 | Petrol Turbo | Manual', fullName: 'Hyundai i20 N Line N8 1.0 Turbo MT', trim: 'N8', pt: TURBO_1_0_MT, exLakh: 11.21, onRoadLakh: 12.52 },
    { slug: 'n8-petrol-turbo-manual-dual-tone', name: 'i20 N Line N8 | Petrol Turbo | Manual | Dual Tone', fullName: 'Hyundai i20 N Line N8 1.0 Turbo MT Dual Tone', trim: 'N8 Dual Tone', pt: TURBO_1_0_MT, exLakh: 11.36, onRoadLakh: 12.70 },
    { slug: 'n8-petrol-turbo-automatic', name: 'i20 N Line N8 | Petrol Turbo | Automatic', fullName: 'Hyundai i20 N Line N8 1.0 Turbo DCT', trim: 'N8 DCT', pt: TURBO_1_0_DCT, exLakh: 12.15, onRoadLakh: 13.69 },
    { slug: 'n8-petrol-turbo-automatic-dual-tone', name: 'i20 N Line N8 | Petrol Turbo | Automatic | Dual Tone', fullName: 'Hyundai i20 N Line N8 1.0 Turbo DCT Dual Tone', trim: 'N8 DCT Dual Tone', pt: TURBO_1_0_DCT, exLakh: 12.30, onRoadLakh: 13.87 },
  ].map((iv, idx) => ({
    id: `hyundai-i20-n-line-${iv.slug}`,
    modelId: 'hyundai-i20-n-line',
    generationId: 'bc3-n-line',
    name: iv.name,
    fullName: iv.fullName,
    slug: iv.slug,
    trim: iv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(iv.exLakh * 100000),
      exShowroomLakh: iv.exLakh,
      onRoadNashik: Math.round(iv.onRoadLakh * 100000),
      onRoadNashikLakh: iv.onRoadLakh,
      currency: 'INR',
    },
    powertrain: iv.pt,
    performance: {
      mileageKmpl: 20.0,
      zeroToHundredSec: 9.9,
      topSpeedKmph: 180,
    },
    dimensions: {
      lengthMm: 3995,
      widthMm: 1775,
      heightMm: 1505,
      wheelbaseMm: 2580,
      groundClearanceMm: 170,
      kerbWeightKg: 1040,
      bootSpaceLitres: 311,
      fuelTankLitres: 37,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 16,
        alloyWheels: 'standard',
        ledHeadlights: iv.trim.startsWith('N8') ? 'standard' : 'not_available',
        sunroof: iv.trim.startsWith('N8') ? 'standard' : 'not_available',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        leatherSeats: 'standard',
        wirelessCharging: iv.trim.startsWith('N8') ? 'standard' : 'not_available',
        ambientLighting: iv.trim.startsWith('N8') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: iv.trim.startsWith('N8') ? 10.25 : 8.0,
        digitalInstrumentCluster: 'standard',
        connectedCarTechnology: iv.trim.startsWith('N8') ? 'standard' : 'not_available',
        speakerCount: iv.trim.startsWith('N8') ? 7 : 6,
        premiumAudio: iv.trim.startsWith('N8') ? 'standard' : 'not_available',
      },
    }),
    sources: [
      { name: 'Hyundai India Official', url: 'https://www.hyundai.com/in/en/find-a-car/i20-n-line/highlights', type: 'official' as const, checkedAt: '2026-10-18' },
      { name: 'CarWale i20 N Line Nashik', url: 'https://www.carwale.com/hyundai-cars/i20-n-line/', type: 'aggregator' as const, checkedAt: '2026-10-18' }
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 2. HYUNDAI VENUE N LINE (6 VARIANTS)
// ============================================================================
export const HYUNDAI_VENUE_N_LINE_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'n6-petrol-turbo-manual', name: 'Venue N Line N6 | Petrol Turbo | Manual', fullName: 'Hyundai Venue N Line N6 1.0 Turbo MT', trim: 'N6', pt: TURBO_1_0_MT, exLakh: 12.07, onRoadLakh: 12.61, mileage: 18.74 },
    { slug: 'n6-petrol-turbo-manual-dual-tone', name: 'Venue N Line N6 | Petrol Turbo | Manual | Dual Tone', fullName: 'Hyundai Venue N Line N6 1.0 Turbo MT Dual Tone', trim: 'N6 Dual Tone', pt: TURBO_1_0_MT, exLakh: 12.22, onRoadLakh: 12.82, mileage: 18.74 },
    { slug: 'n6-petrol-turbo-automatic', name: 'Venue N Line N6 | Petrol Turbo | Automatic', fullName: 'Hyundai Venue N Line N6 1.0 Turbo DCT', trim: 'N6 DCT', pt: TURBO_1_0_DCT, exLakh: 12.79, onRoadLakh: 13.66, mileage: 20.0 },
    { slug: 'n6-petrol-turbo-automatic-dual-tone', name: 'Venue N Line N6 | Petrol Turbo | Automatic | Dual Tone', fullName: 'Hyundai Venue N Line N6 1.0 Turbo DCT Dual Tone', trim: 'N6 DCT Dual Tone', pt: TURBO_1_0_DCT, exLakh: 12.94, onRoadLakh: 13.87, mileage: 20.0 },
    { slug: 'n10-petrol-turbo-automatic', name: 'Venue N Line N10 | Petrol Turbo | Automatic', fullName: 'Hyundai Venue N Line N10 1.0 Turbo DCT', trim: 'N10 DCT', pt: TURBO_1_0_DCT, exLakh: 13.75, onRoadLakh: 18.28, mileage: 20.0 },
    { slug: 'n10-petrol-turbo-automatic-dual-tone', name: 'Venue N Line N10 | Petrol Turbo | Automatic | Dual Tone', fullName: 'Hyundai Venue N Line N10 1.0 Turbo DCT Dual Tone', trim: 'N10 DCT Dual Tone', pt: TURBO_1_0_DCT, exLakh: 13.90, onRoadLakh: 18.49, mileage: 20.0 },
  ].map((vv, idx) => ({
    id: `hyundai-venue-n-line-${vv.slug}`,
    modelId: 'hyundai-venue-n-line',
    generationId: 'qx-n-line',
    name: vv.name,
    fullName: vv.fullName,
    slug: vv.slug,
    trim: vv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(vv.exLakh * 100000),
      exShowroomLakh: vv.exLakh,
      onRoadNashik: Math.round(vv.onRoadLakh * 100000),
      onRoadNashikLakh: vv.onRoadLakh,
      currency: 'INR',
    },
    powertrain: vv.pt,
    performance: {
      mileageKmpl: vv.mileage,
      zeroToHundredSec: 10.5,
      topSpeedKmph: 175,
    },
    dimensions: {
      lengthMm: 3995,
      widthMm: 1770,
      heightMm: 1617,
      wheelbaseMm: 2500,
      groundClearanceMm: 195,
      kerbWeightKg: 1110,
      bootSpaceLitres: 350,
      fuelTankLitres: 45,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        tpms: 'standard',
        adasLevel: vv.trim.startsWith('N10') ? 'Level 2' : 'none',
      },
      exterior: {
        wheelSizeInches: 16,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        sunroof: 'standard',
        roofRails: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        leatherSeats: 'standard',
        poweredDriverSeat: vv.trim.startsWith('N10') ? 'standard' : 'not_available',
        wirelessCharging: vv.trim.startsWith('N10') ? 'standard' : 'not_available',
        ambientLighting: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 8.0,
        digitalInstrumentCluster: 'standard',
        connectedCarTechnology: 'standard',
        speakerCount: vv.trim.startsWith('N10') ? 8 : 6,
        premiumAudio: vv.trim.startsWith('N10') ? 'standard' : 'not_available',
      },
    }),
    sources: [
      { name: 'Hyundai India Official', url: 'https://www.hyundai.com/in/en/find-a-car/venue-n-line/highlights', type: 'official' as const, checkedAt: '2026-10-18' },
      { name: 'CarWale Venue N Line Nashik', url: 'https://www.carwale.com/hyundai-cars/venue-n-line/', type: 'aggregator' as const, checkedAt: '2026-10-18' }
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 3. HYUNDAI CRETA N LINE (4 VARIANTS)
// ============================================================================
export const HYUNDAI_CRETA_N_LINE_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'n10-petrol-turbo-manual', name: 'Creta N Line N10 | Petrol Turbo | Manual', fullName: 'Hyundai Creta N Line N10 1.5 Turbo MT', trim: 'N10', pt: TURBO_1_5_MT, exLakh: 19.34, onRoadLakh: 22.50 },
    { slug: 'n10-petrol-turbo-manual-dual-tone', name: 'Creta N Line N10 | Petrol Turbo | Manual | Dual Tone', fullName: 'Hyundai Creta N Line N10 1.5 Turbo MT Dual Tone', trim: 'N10 Dual Tone', pt: TURBO_1_5_MT, exLakh: 19.49, onRoadLakh: 22.68 },
    { slug: 'n10-petrol-turbo-automatic', name: 'Creta N Line N10 | Petrol Turbo | Automatic', fullName: 'Hyundai Creta N Line N10 1.5 Turbo DCT', trim: 'N10 DCT', pt: TURBO_1_5_DCT, exLakh: 20.30, onRoadLakh: 23.57 },
    { slug: 'n10-petrol-turbo-automatic-dual-tone', name: 'Creta N Line N10 | Petrol Turbo | Automatic | Dual Tone', fullName: 'Hyundai Creta N Line N10 1.5 Turbo DCT Dual Tone', trim: 'N10 DCT Dual Tone', pt: TURBO_1_5_DCT, exLakh: 20.60, onRoadLakh: 23.95 },
  ].map((cv, idx) => ({
    id: `hyundai-creta-n-line-${cv.slug}`,
    modelId: 'hyundai-creta-n-line',
    generationId: 'su2-n-line',
    name: cv.name,
    fullName: cv.fullName,
    slug: cv.slug,
    trim: cv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(cv.exLakh * 100000),
      exShowroomLakh: cv.exLakh,
      onRoadNashik: Math.round(cv.onRoadLakh * 100000),
      onRoadNashikLakh: cv.onRoadLakh,
      currency: 'INR',
    },
    powertrain: cv.pt,
    performance: {
      mileageKmpl: 18.2,
      zeroToHundredSec: 8.9,
      topSpeedKmph: 195,
    },
    dimensions: {
      lengthMm: 4330,
      widthMm: 1790,
      heightMm: 1635,
      wheelbaseMm: 2610,
      groundClearanceMm: 190,
      kerbWeightKg: 1280,
      bootSpaceLitres: 433,
      fuelTankLitres: 50,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: 'standard',
        tpms: 'standard',
        adasLevel: 'Level 2',
      },
      exterior: {
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        roofRails: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: 'standard',
        poweredDriverSeat: 'standard',
        leatherSeats: 'standard',
        wirelessCharging: 'standard',
        ambientLighting: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.25,
        digitalInstrumentCluster: 'standard',
        connectedCarTechnology: 'standard',
        speakerCount: 8,
        premiumAudio: 'standard',
      },
    }),
    sources: [
      { name: 'Hyundai India Official', url: 'https://www.hyundai.com/in/en/find-a-car/creta-n-line/highlights', type: 'official' as const, checkedAt: '2026-10-18' },
      { name: 'CarWale Creta N Line Nashik', url: 'https://www.carwale.com/hyundai-cars/creta-n-line/', type: 'aggregator' as const, checkedAt: '2026-10-18' }
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 4. HYUNDAI CRETA ELECTRIC (29 VARIANTS)
// ============================================================================
export const HYUNDAI_CRETA_ELECTRIC_VARIANTS: CarVariant[] = [
  ...[
    // 1. Executive
    { slug: 'executive-42kwh', name: 'Creta Electric Executive | 42.0 kWh', fullName: 'Hyundai Creta Electric Executive 42.0 kWh', trim: 'Executive', pt: CRETA_EV_42_KWH, exLakh: 17.99, onRoadLakh: 19.10 },
    // 2. Executive Tech
    { slug: 'executive-tech-42kwh', name: 'Creta Electric Executive Tech | 42.0 kWh', fullName: 'Hyundai Creta Electric Executive Tech 42.0 kWh', trim: 'Executive Tech', pt: CRETA_EV_42_KWH, exLakh: 18.99, onRoadLakh: 20.12 },
    // 3. Premium
    { slug: 'premium-42kwh', name: 'Creta Electric Premium | 42.0 kWh', fullName: 'Hyundai Creta Electric Premium 42.0 kWh', trim: 'Premium', pt: CRETA_EV_42_KWH, exLakh: 19.99, onRoadLakh: 21.17 },
    { slug: 'premium-42kwh-dual-tone', name: 'Creta Electric Premium | 42.0 kWh | Dual Tone', fullName: 'Hyundai Creta Electric Premium 42.0 kWh Dual Tone', trim: 'Premium Dual Tone', pt: CRETA_EV_42_KWH, exLakh: 20.14, onRoadLakh: 21.33 },
    { slug: 'premium-42kwh-hc', name: 'Creta Electric Premium | 42.0 kWh | (HC)', fullName: 'Hyundai Creta Electric Premium 42.0 kWh (HC)', trim: 'Premium (HC)', pt: CRETA_EV_42_KWH, exLakh: 20.70, onRoadLakh: 21.93 },
    { slug: 'premium-42kwh-dual-tone-hc', name: 'Creta Electric Premium | 42.0 kWh | Dual Tone | (HC)', fullName: 'Hyundai Creta Electric Premium 42.0 kWh Dual Tone (HC)', trim: 'Premium Dual Tone (HC)', pt: CRETA_EV_42_KWH, exLakh: 20.85, onRoadLakh: 22.09 },
    // 4. Excellence
    { slug: 'excellence-42kwh', name: 'Creta Electric Excellence | 42.0 kWh', fullName: 'Hyundai Creta Electric Excellence 42.0 kWh', trim: 'Excellence', pt: CRETA_EV_42_KWH, exLakh: 21.25, onRoadLakh: 22.53 },
    { slug: 'excellence-42kwh-dual-tone', name: 'Creta Electric Excellence | 42.0 kWh | Dual Tone', fullName: 'Hyundai Creta Electric Excellence 42.0 kWh Dual Tone', trim: 'Excellence Dual Tone', pt: CRETA_EV_42_KWH, exLakh: 21.40, onRoadLakh: 22.69 },
    { slug: 'excellence-42kwh-hc', name: 'Creta Electric Excellence | 42.0 kWh | (HC)', fullName: 'Hyundai Creta Electric Excellence 42.0 kWh (HC)', trim: 'Excellence (HC)', pt: CRETA_EV_42_KWH_HI, exLakh: 21.99, onRoadLakh: 23.29 },
    { slug: 'excellence-51-4kwh-dual-tone', name: 'Creta Electric Excellence | 51.4 kWh | Dual Tone', fullName: 'Hyundai Creta Electric Excellence 51.4 kWh Dual Tone', trim: 'Excellence 51.4 Dual Tone', pt: CRETA_EV_51_4_KWH_LR, exLakh: 22.15, onRoadLakh: 23.45 },
    // 5. Excellence Knight Edition
    { slug: 'excellence-knight-42kwh', name: 'Creta Electric Excellence Knight Edition | 42.0 kWh', fullName: 'Hyundai Creta Electric Excellence Knight Edition 42.0 kWh', trim: 'Excellence Knight', pt: CRETA_EV_42_KWH, exLakh: 21.40, onRoadLakh: 22.69 },
    { slug: 'excellence-knight-42kwh-dual-tone', name: 'Creta Electric Excellence Knight Edition | 42.0 kWh | Dual Tone', fullName: 'Hyundai Creta Electric Excellence Knight Edition 42.0 kWh Dual Tone', trim: 'Excellence Knight Dual Tone', pt: CRETA_EV_42_KWH, exLakh: 21.55, onRoadLakh: 22.84 },
    { slug: 'excellence-knight-42kwh-hc', name: 'Creta Electric Excellence Knight Edition | 42.0 kWh | (HC)', fullName: 'Hyundai Creta Electric Excellence Knight Edition 42.0 kWh (HC)', trim: 'Excellence Knight (HC)', pt: CRETA_EV_42_KWH_HI, exLakh: 22.15, onRoadLakh: 23.45 },
    { slug: 'excellence-knight-42kwh-dual-tone-hc', name: 'Creta Electric Excellence Knight Edition | 42.0 kWh | Dual Tone | (HC)', fullName: 'Hyundai Creta Electric Excellence Knight Edition 42.0 kWh Dual Tone (HC)', trim: 'Excellence Knight Dual Tone (HC)', pt: CRETA_EV_42_KWH_HI, exLakh: 22.30, onRoadLakh: 23.61 },
    // 6. Executive (O) LR
    { slug: 'executive-o-lr-51-4kwh', name: 'Creta Electric Executive (O) LR | 51.4 kWh', fullName: 'Hyundai Creta Electric Executive (O) LR 51.4 kWh', trim: 'Executive (O) LR', pt: CRETA_EV_51_4_KWH_LR, exLakh: 19.99, onRoadLakh: 21.17 },
    // 7. Smart (O) LR
    { slug: 'smart-o-lr-51-4kwh', name: 'Creta Electric Smart (O) LR | 51.4 kWh', fullName: 'Hyundai Creta Electric Smart (O) LR 51.4 kWh', trim: 'Smart (O) LR', pt: CRETA_EV_51_4_KWH_LR, exLakh: 21.50, onRoadLakh: 22.77 },
    { slug: 'smart-o-lr-51-4kwh-hc', name: 'Creta Electric Smart (O) LR | 51.4 kWh | (HC)', fullName: 'Hyundai Creta Electric Smart (O) LR 51.4 kWh (HC)', trim: 'Smart (O) LR (HC)', pt: CRETA_EV_51_4_KWH_LR, exLakh: 22.20, onRoadLakh: 23.54 },
    // 8. Excellence LR
    { slug: 'excellence-lr-51-4kwh', name: 'Creta Electric Excellence LR | 51.4 kWh', fullName: 'Hyundai Creta Electric Excellence LR 51.4 kWh', trim: 'Excellence LR', pt: CRETA_EV_51_4_KWH_LR, exLakh: 23.60, onRoadLakh: 25.01 },
    { slug: 'excellence-lr-51-4kwh-dual-tone', name: 'Creta Electric Excellence LR | 51.4 kWh | Dual Tone', fullName: 'Hyundai Creta Electric Excellence LR 51.4 kWh Dual Tone', trim: 'Excellence LR Dual Tone', pt: CRETA_EV_51_4_KWH_LR, exLakh: 23.75, onRoadLakh: 25.16 },
    { slug: 'excellence-lr-51-4kwh-dual-tone-knight', name: 'Creta Electric Excellence LR | 51.4 kWh | Dual Tone | Knight Edition', fullName: 'Hyundai Creta Electric Excellence LR 51.4 kWh Dual Tone Knight', trim: 'Excellence LR Knight Dual Tone', pt: CRETA_EV_51_4_KWH_LR, exLakh: 23.90, onRoadLakh: 25.32 },
    { slug: 'excellence-lr-51-4kwh-lounge', name: 'Creta Electric Excellence LR | 51.4 kWh | Lounge Edition', fullName: 'Hyundai Creta Electric Excellence LR 51.4 kWh Lounge Edition', trim: 'Excellence LR Lounge', pt: CRETA_EV_51_4_KWH_LR, exLakh: 24.25, onRoadLakh: 25.71 },
    { slug: 'excellence-lr-51-4kwh-hc', name: 'Creta Electric Excellence LR | 51.4 kWh | (HC)', fullName: 'Hyundai Creta Electric Excellence LR 51.4 kWh (HC)', trim: 'Excellence LR (HC)', pt: CRETA_EV_51_4_KWH_LR, exLakh: 24.30, onRoadLakh: 25.77 },
    { slug: 'excellence-lr-51-4kwh-dual-tone-lounge', name: 'Creta Electric Excellence LR | 51.4 kWh | Dual Tone | Lounge Edition', fullName: 'Hyundai Creta Electric Excellence LR 51.4 kWh Dual Tone Lounge', trim: 'Excellence LR Lounge Dual Tone', pt: CRETA_EV_51_4_KWH_LR, exLakh: 24.40, onRoadLakh: 25.86 },
    { slug: 'excellence-lr-51-4kwh-dual-tone-hc', name: 'Creta Electric Excellence LR | 51.4 kWh | Dual Tone | (HC)', fullName: 'Hyundai Creta Electric Excellence LR 51.4 kWh Dual Tone (HC)', trim: 'Excellence LR Dual Tone (HC)', pt: CRETA_EV_51_4_KWH_LR, exLakh: 24.45, onRoadLakh: 25.93 },
    { slug: 'excellence-lr-51-4kwh-dual-tone-hc-knight', name: 'Creta Electric Excellence LR | 51.4 kWh | Dual Tone | (HC) Knight Edition', fullName: 'Hyundai Creta Electric Excellence LR 51.4 kWh Dual Tone (HC) Knight', trim: 'Excellence LR Knight Dual Tone (HC)', pt: CRETA_EV_51_4_KWH_LR, exLakh: 24.60, onRoadLakh: 26.08 },
    // 9. Excellence LR Knight Edition
    { slug: 'excellence-lr-knight-51-4kwh', name: 'Creta Electric Excellence LR Knight Edition | 51.4 kWh', fullName: 'Hyundai Creta Electric Excellence LR Knight Edition 51.4 kWh', trim: 'Excellence LR Knight', pt: CRETA_EV_51_4_KWH_LR, exLakh: 23.75, onRoadLakh: 25.16 },
    { slug: 'excellence-lr-knight-51-4kwh-hc', name: 'Creta Electric Excellence LR Knight Edition | 51.4 kWh | (HC)', fullName: 'Hyundai Creta Electric Excellence LR Knight Edition 51.4 kWh (HC)', trim: 'Excellence LR Knight (HC)', pt: CRETA_EV_51_4_KWH_LR, exLakh: 24.45, onRoadLakh: 25.93 },
    // 10. Excellence LR Lounge Edition
    { slug: 'excellence-lr-lounge-51-4kwh-hc', name: 'Creta Electric Excellence LR Lounge Edition | 51.4 kWh | (HC)', fullName: 'Hyundai Creta Electric Excellence LR Lounge 51.4 kWh (HC)', trim: 'Excellence LR Lounge (HC)', pt: CRETA_EV_51_4_KWH_LR, exLakh: 24.95, onRoadLakh: 26.47 },
    { slug: 'excellence-lr-lounge-51-4kwh-dual-tone-hc', name: 'Creta Electric Excellence LR Lounge Edition | 51.4 kWh | Dual Tone | (HC)', fullName: 'Hyundai Creta Electric Excellence LR Lounge Dual Tone (HC)', trim: 'Excellence LR Lounge Dual Tone (HC)', pt: CRETA_EV_51_4_KWH_LR, exLakh: 25.10, onRoadLakh: 26.63 },
  ].map((ev, idx) => ({
    id: `hyundai-creta-electric-${ev.slug}`,
    modelId: 'hyundai-creta-electric',
    generationId: 'su2-electric',
    name: ev.name,
    fullName: ev.fullName,
    slug: ev.slug,
    trim: ev.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(ev.exLakh * 100000),
      exShowroomLakh: ev.exLakh,
      onRoadNashik: Math.round(ev.onRoadLakh * 100000),
      onRoadNashikLakh: ev.onRoadLakh,
      currency: 'INR',
    },
    powertrain: ev.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 7.9,
      topSpeedKmph: 165,
    },
    dimensions: {
      lengthMm: 4330,
      widthMm: 1790,
      heightMm: 1635,
      wheelbaseMm: 2610,
      groundClearanceMm: 190,
      kerbWeightKg: 1540,
      bootSpaceLitres: 433,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: ev.trim.includes('Excellence') ? 'standard' : 'not_available',
        tpms: 'standard',
        adasLevel: ev.trim.includes('Excellence') ? 'Level 2' : 'none',
      },
      exterior: {
        wheelSizeInches: 17,
        alloyWheels: 'standard',
        ledHeadlights: !ev.trim.startsWith('Executive') ? 'standard' : 'not_available',
        sunroof: !ev.trim.startsWith('Executive') ? 'standard' : 'not_available',
        panoramicSunroof: !ev.trim.startsWith('Executive') ? 'standard' : 'not_available',
        roofRails: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: ev.trim.includes('Excellence') ? 'standard' : 'not_available',
        poweredDriverSeat: ev.trim.includes('Excellence') ? 'standard' : 'not_available',
        leatherSeats: !ev.trim.startsWith('Executive') ? 'standard' : 'not_available',
        wirelessCharging: !ev.trim.startsWith('Executive') ? 'standard' : 'not_available',
        ambientLighting: ev.trim.includes('Excellence') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.25,
        digitalInstrumentCluster: 'standard',
        connectedCarTechnology: 'standard',
        speakerCount: ev.trim.includes('Excellence') ? 8 : 6,
        premiumAudio: ev.trim.includes('Excellence') ? 'standard' : 'not_available',
      },
    }),
    sources: [
      { name: 'Hyundai India Official', url: 'https://www.hyundai.com/in/en', type: 'official' as const, checkedAt: '2026-10-18' },
      { name: 'CarWale Creta Electric Nashik', url: 'https://www.carwale.com/hyundai-cars/creta-electric/', type: 'aggregator' as const, checkedAt: '2026-10-18' }
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 5. HYUNDAI IONIQ 5 (1 VARIANT)
// ============================================================================
export const HYUNDAI_IONIQ_5_VARIANTS: CarVariant[] = [
  {
    id: 'hyundai-ioniq-5-rwd-84kwh',
    modelId: 'hyundai-ioniq-5',
    generationId: 'ne-ev',
    name: 'Ioniq 5 RWD | 84.0 kWh',
    fullName: 'Hyundai Ioniq 5 RWD 84.0 kWh Ultra-Fast Charging Electric',
    slug: 'rwd-84kwh',
    trim: 'RWD',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 4699000,
      exShowroomLakh: 46.99,
      onRoadNashik: 5888000,
      onRoadNashikLakh: 58.88,
      currency: 'INR',
    },
    powertrain: IONIQ_5_84_KWH,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 7.3,
      topSpeedKmph: 185,
    },
    dimensions: {
      lengthMm: 4635,
      widthMm: 1890,
      heightMm: 1625,
      wheelbaseMm: 3000,
      groundClearanceMm: 163,
      kerbWeightKg: 1990,
      bootSpaceLitres: 527,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: 'standard',
        tpms: 'standard',
        adasLevel: 'Level 2',
        ncapRating: 5,
      },
      exterior: {
        wheelSizeInches: 20,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        poweredTailgate: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: 'standard',
        heatedSeats: 'standard',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: 'standard',
        leatherSeats: 'standard',
        wirelessCharging: 'standard',
        ambientLighting: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 12.3,
        digitalInstrumentCluster: 'standard',
        connectedCarTechnology: 'standard',
        speakerCount: 8,
        premiumAudio: 'standard',
      },
    }),
    sources: [
      { name: 'Hyundai India Official', url: 'https://www.hyundai.com/in/en/find-a-car/ioniq-5/highlights', type: 'official', checkedAt: '2026-10-18' },
      { name: 'CarWale Ioniq 5 Nashik', url: 'https://www.carwale.com/hyundai-cars/ioniq-5/', type: 'aggregator', checkedAt: '2026-10-18' }
    ],
    lastVerified: '2026-10-18',
  },
];
