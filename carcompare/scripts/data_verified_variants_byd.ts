/**
 * scripts/data_verified_variants_byd.ts
 *
 * Comprehensive, verified variant database for BYD India:
 * 1. BYD Atto 3 (3 variants) - 49.92 kWh & 60.48 kWh Blade Battery (201 bhp, FWD; Dynamic, Premium, Superior)
 * 2. BYD Sealion 7 (4 variants) - 71.8 kWh & 82.56 kWh Blade Battery (228 bhp, 308 bhp 2WD & 523 bhp AWD; Dynamic, Premium, Festive, Performance)
 * 3. BYD Seal (3 variants) - 61.44 kWh & 82.56 kWh CTB Blade Battery (201 bhp RWD, 308 bhp RWD & 523 bhp AWD; Dynamic, Premium, Performance)
 * 4. BYD eMax 7 (6 variants) - 55.4 kWh & 71.8 kWh Blade Battery MPV (161 bhp & 201 bhp; 6 & 7 Seater; Premium, Comfort, Superior)
 *
 * Total: 16 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// Atto 3 49.92 kWh (201 bhp, 310 Nm, 468 km NEDC)
const ATTO_3_49_KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Permanent Magnet Synchronous Motor (49.92 kWh BYD Ultra-Safe Blade Battery, Cell-to-Pack)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 310,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 49.92,
  electricMotorPowerBhp: 201,
  electricRangeKm: 468,
};

// Atto 3 60.48 kWh (201 bhp, 310 Nm, 521 km ARAI)
const ATTO_3_60_KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Permanent Magnet Synchronous Motor (60.48 kWh BYD Ultra-Safe Blade Battery, Cell-to-Pack)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 310,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 60.48,
  electricMotorPowerBhp: 201,
  electricRangeKm: 521,
};

// Sealion 7 Dynamic 71.8 kWh 2WD (228 bhp, 380 Nm, 520 km)
const SEALION_7_DYNAMIC = {
  fuelType: 'Electric' as const,
  engineName: 'Rear PMSM Electric Motor (71.8 kWh Blade Battery, e-Platform 3.0 Evo)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 228,
  maxTorqueNm: 380,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 71.8,
  electricMotorPowerBhp: 228,
  electricRangeKm: 520,
};

// Sealion 7 Premium 82.56 kWh 2WD (308 bhp, 380 Nm, 567 km)
const SEALION_7_PREMIUM = {
  fuelType: 'Electric' as const,
  engineName: 'Rear High-Output PMSM Electric Motor (82.56 kWh Blade Battery, 800V Architecture)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 308,
  maxTorqueNm: 380,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 82.56,
  electricMotorPowerBhp: 308,
  electricRangeKm: 567,
};

// Sealion 7 Performance 82.56 kWh AWD (523 bhp, 690 Nm, 542 km)
const SEALION_7_PERFORMANCE = {
  fuelType: 'Electric' as const,
  engineName: 'Dual Motor Intelligent AWD (82.56 kWh Blade Battery, 800V Architecture)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 523,
  maxTorqueNm: 690,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 82.56,
  electricMotorPowerBhp: 523,
  electricRangeKm: 542,
};

// Seal Dynamic 61.44 kWh RWD (201 bhp, 310 Nm, 510 km)
const SEAL_DYNAMIC = {
  fuelType: 'Electric' as const,
  engineName: 'Rear PMSM Electric Motor (61.44 kWh CTB Cell-to-Body Blade Battery)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 310,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 61.44,
  electricMotorPowerBhp: 201,
  electricRangeKm: 510,
};

// Seal Premium 82.56 kWh RWD (308 bhp, 360 Nm, 650 km)
const SEAL_PREMIUM = {
  fuelType: 'Electric' as const,
  engineName: 'Rear High-Performance PMSM Motor (82.56 kWh CTB Cell-to-Body Blade Battery)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 308,
  maxTorqueNm: 360,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 82.56,
  electricMotorPowerBhp: 308,
  electricRangeKm: 650,
};

// Seal Performance 82.56 kWh AWD (523 bhp, 670 Nm, 580 km)
const SEAL_PERFORMANCE = {
  fuelType: 'Electric' as const,
  engineName: 'Dual-Motor Intelligent All-Wheel Drive (82.56 kWh CTB Blade Battery, iTAC Torque Control)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 523,
  maxTorqueNm: 670,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 82.56,
  electricMotorPowerBhp: 523,
  electricRangeKm: 580,
};

// eMax 7 Premium 55.4 kWh (161 bhp, 310 Nm, 420 km)
const EMAX_7_55_KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Front PMSM Electric Motor (55.4 kWh BYD Blade Battery Pack)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 161,
  maxTorqueNm: 310,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 55.4,
  electricMotorPowerBhp: 161,
  electricRangeKm: 420,
};

// eMax 7 Comfort 71.8 kWh (161 bhp, 310 Nm, 485 km)
const EMAX_7_71_KWH_COMFORT = {
  fuelType: 'Electric' as const,
  engineName: 'Front PMSM Electric Motor (71.8 kWh Long Range Blade Battery Pack)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 161,
  maxTorqueNm: 310,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 71.8,
  electricMotorPowerBhp: 161,
  electricRangeKm: 485,
};

// eMax 7 Superior 71.8 kWh (201 bhp, 310 Nm, 530 km)
const EMAX_7_71_KWH_SUPERIOR = {
  fuelType: 'Electric' as const,
  engineName: 'Front High-Output PMSM Electric Motor (71.8 kWh Long Range Blade Battery Pack)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 310,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 71.8,
  electricMotorPowerBhp: 201,
  electricRangeKm: 530,
};

// ============================================================================
// 1. BYD ATTO 3 (3 VARIANTS)
// ============================================================================
export const BYD_ATTO_3_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'dynamic-49-92kwh', name: 'Atto 3 Dynamic | 49.92 kWh', fullName: 'BYD Atto 3 Dynamic 49.92 kWh Blade Battery Electric', trim: 'Dynamic', pt: ATTO_3_49_KWH, exLakh: 24.99, onRoadLakh: 26.38 },
    { slug: 'premium-60-48kwh', name: 'Atto 3 Premium | 60.48 kWh', fullName: 'BYD Atto 3 Premium 60.48 kWh Blade Battery Electric', trim: 'Premium', pt: ATTO_3_60_KWH, exLakh: 29.85, onRoadLakh: 32.12 },
    { slug: 'superior-60-48kwh', name: 'Atto 3 Superior | 60.48 kWh', fullName: 'BYD Atto 3 Superior 60.48 kWh Blade Battery Electric with ADAS', trim: 'Superior', pt: ATTO_3_60_KWH, exLakh: 33.99, onRoadLakh: 36.45 },
  ].map((a) => ({
    id: `byd-atto-3-${a.slug}`,
    modelId: 'byd-atto-3',
    generationId: 'atto-3-2024',
    name: a.name,
    fullName: a.fullName,
    slug: a.slug,
    trim: a.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(a.exLakh * 100000),
      exShowroomLakh: a.exLakh,
      onRoadNashik: Math.round(a.onRoadLakh * 100000),
      onRoadNashikLakh: a.onRoadLakh,
      currency: 'INR',
    },
    powertrain: a.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 7.3,
      topSpeedKmph: 160,
    },
    dimensions: {
      lengthMm: 4455,
      widthMm: 1875,
      heightMm: 1615,
      wheelbaseMm: 2720,
      groundClearanceMm: 175,
      kerbWeightKg: 1750,
      bootSpaceLitres: 440,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 7,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        hillDescentControl: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: 'standard',
        tpms: 'standard',
        adasLevel: a.trim === 'Superior' ? 'Level 2' : 'none',
        ncapRating: 5,
      },
      exterior: {
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        roofRails: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        poweredTailgate: !a.trim.startsWith('Dynamic') ? 'standard' : 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: a.trim === 'Superior' ? 'standard' : 'not_available',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: !a.trim.startsWith('Dynamic') ? 'standard' : 'not_available',
        leatherSeats: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 12.8,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 8,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'BYD India Official', url: 'https://bydautoindia.com/byd-atto3', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Atto 3 Nashik', url: 'https://www.carwale.com/byd-cars/atto-3/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 2. BYD SEALION 7 (4 VARIANTS)
// ============================================================================
export const BYD_SEALION_7_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'dynamic-2wd-71-8kwh', name: 'Sealion 7 Dynamic | 2WD 71.8 kWh', fullName: 'BYD Sealion 7 Dynamic 71.8 kWh 2WD Electric SUV-Coupe', trim: 'Dynamic', pt: SEALION_7_DYNAMIC, exLakh: 41.50, onRoadLakh: 44.42, zeroToHundred: 6.7, topSpeed: 215 },
    { slug: 'premium-2wd-82-6kwh', name: 'Sealion 7 Premium | 2WD 82.6 kWh', fullName: 'BYD Sealion 7 Premium 82.56 kWh 2WD Long Range Electric SUV', trim: 'Premium', pt: SEALION_7_PREMIUM, exLakh: 49.00, onRoadLakh: 52.80, zeroToHundred: 5.9, topSpeed: 215 },
    { slug: 'festive-edition-2wd-82-6kwh', name: 'Sealion 7 Festive Edition | 2WD 82.6 kWh', fullName: 'BYD Sealion 7 Festive Edition 82.56 kWh 2WD Electric SUV', trim: 'Festive Edition', pt: SEALION_7_PREMIUM, exLakh: 49.70, onRoadLakh: 53.53, zeroToHundred: 5.9, topSpeed: 215 },
    { slug: 'performance-awd-82-6kwh', name: 'Sealion 7 Performance | AWD 82.6 kWh', fullName: 'BYD Sealion 7 Performance 82.56 kWh AWD Dual Motor 523 bhp Electric SUV', trim: 'Performance', pt: SEALION_7_PERFORMANCE, exLakh: 54.90, onRoadLakh: 59.09, zeroToHundred: 4.5, topSpeed: 225 },
  ].map((sl) => ({
    id: `byd-sealion-7-${sl.slug}`,
    modelId: 'byd-sealion-7',
    generationId: 'sealion-7-2025',
    name: sl.name,
    fullName: sl.fullName,
    slug: sl.slug,
    trim: sl.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(sl.exLakh * 100000),
      exShowroomLakh: sl.exLakh,
      onRoadNashik: Math.round(sl.onRoadLakh * 100000),
      onRoadNashikLakh: sl.onRoadLakh,
      currency: 'INR',
    },
    powertrain: sl.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: sl.zeroToHundred,
      topSpeedKmph: sl.topSpeed,
    },
    dimensions: {
      lengthMm: 4830,
      widthMm: 1925,
      heightMm: 1620,
      wheelbaseMm: 2930,
      groundClearanceMm: 180,
      kerbWeightKg: 2150,
      bootSpaceLitres: 500,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 9,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        hillDescentControl: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: 'standard',
        tpms: 'standard',
        adasLevel: 'Level 2',
        ncapRating: 5,
      },
      exterior: {
        wheelSizeInches: sl.trim === 'Performance' ? 20 : 19,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        poweredTailgate: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: 'standard',
        heatedSeats: 'standard',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: 'standard',
        leatherSeats: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 15.6,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 12,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'BYD India Official', url: 'https://bydautoindia.com', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Sealion 7 Nashik', url: 'https://www.carwale.com/byd-cars/sealion-7/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 3. BYD SEAL (3 VARIANTS)
// ============================================================================
export const BYD_SEAL_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'dynamic', name: 'Seal Dynamic', fullName: 'BYD Seal Dynamic 61.44 kWh RWD Electric Luxury Sedan', trim: 'Dynamic', pt: SEAL_DYNAMIC, exLakh: 41.00, onRoadLakh: 43.78, zeroToHundred: 7.5, topSpeed: 180 },
    { slug: 'premium', name: 'Seal Premium', fullName: 'BYD Seal Premium 82.56 kWh RWD Long Range Electric Sedan', trim: 'Premium', pt: SEAL_PREMIUM, exLakh: 45.55, onRoadLakh: 48.92, zeroToHundred: 5.9, topSpeed: 180 },
    { slug: 'performance', name: 'Seal Performance', fullName: 'BYD Seal Performance 82.56 kWh AWD Dual Motor 523 bhp Sedan (3.8s 0-100)', trim: 'Performance', pt: SEAL_PERFORMANCE, exLakh: 53.00, onRoadLakh: 56.73, zeroToHundred: 3.8, topSpeed: 200 },
  ].map((s) => ({
    id: `byd-seal-${s.slug}`,
    modelId: 'byd-seal',
    generationId: 'seal-2024',
    name: s.name,
    fullName: s.fullName,
    slug: s.slug,
    trim: s.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(s.exLakh * 100000),
      exShowroomLakh: s.exLakh,
      onRoadNashik: Math.round(s.onRoadLakh * 100000),
      onRoadNashikLakh: s.onRoadLakh,
      currency: 'INR',
    },
    powertrain: s.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: s.zeroToHundred,
      topSpeedKmph: s.topSpeed,
    },
    dimensions: {
      lengthMm: 4800,
      widthMm: 1875,
      heightMm: 1460,
      wheelbaseMm: 2920,
      groundClearanceMm: 145,
      kerbWeightKg: 2055,
      bootSpaceLitres: 400,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 9,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: 'standard',
        tpms: 'standard',
        adasLevel: 'Level 2',
        ncapRating: 5,
      },
      exterior: {
        wheelSizeInches: s.trim === 'Performance' ? 19 : 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        poweredTailgate: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: 'standard',
        heatedSeats: 'standard',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: 'standard',
        leatherSeats: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 15.6,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 12,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'BYD India Official', url: 'https://bydautoindia.com/byd-seal', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Seal Nashik', url: 'https://www.carwale.com/byd-cars/seal/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 4. BYD eMAX 7 (6 VARIANTS)
// ============================================================================
export const BYD_EMAX_7_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'premium-55-4kwh-6str', name: 'eMax 7 Premium | 55.4 kWh | 6 STR', fullName: 'BYD eMax 7 Premium 55.4 kWh 6-Seater Electric MPV', trim: 'Premium 6 STR', pt: EMAX_7_55_KWH, exLakh: 26.90, onRoadLakh: 28.38 },
    { slug: 'premium-55-4kwh-7str', name: 'eMax 7 Premium | 55.4 kWh | 7 STR', fullName: 'BYD eMax 7 Premium 55.4 kWh 7-Seater Electric MPV', trim: 'Premium 7 STR', pt: EMAX_7_55_KWH, exLakh: 27.50, onRoadLakh: 29.01 },
    { slug: 'comfort-71-8kwh-6str', name: 'eMax 7 Comfort | 71.8 kWh | 6 STR', fullName: 'BYD eMax 7 Comfort 71.8 kWh 6-Seater Electric MPV', trim: 'Comfort 6 STR', pt: EMAX_7_71_KWH_COMFORT, exLakh: 28.10, onRoadLakh: 29.62 },
    { slug: 'comfort-71-8kwh-7str', name: 'eMax 7 Comfort | 71.8 kWh | 7 STR', fullName: 'BYD eMax 7 Comfort 71.8 kWh 7-Seater Electric MPV', trim: 'Comfort 7 STR', pt: EMAX_7_71_KWH_COMFORT, exLakh: 28.50, onRoadLakh: 30.04 },
    { slug: 'superior-71-8kwh-6str', name: 'eMax 7 Superior | 71.8 kWh | 6 STR', fullName: 'BYD eMax 7 Superior 71.8 kWh 6-Seater High-Spec Electric MPV with ADAS', trim: 'Superior 6 STR', pt: EMAX_7_71_KWH_SUPERIOR, exLakh: 29.50, onRoadLakh: 31.09 },
    { slug: 'superior-71-8kwh-7str', name: 'eMax 7 Superior | 71.8 kWh | 7 STR', fullName: 'BYD eMax 7 Superior 71.8 kWh 7-Seater High-Spec Electric MPV with ADAS', trim: 'Superior 7 STR', pt: EMAX_7_71_KWH_SUPERIOR, exLakh: 30.10, onRoadLakh: 31.72 },
  ].map((em) => ({
    id: `byd-emax-7-${em.slug}`,
    modelId: 'byd-emax-7',
    generationId: 'emax-7-2024',
    name: em.name,
    fullName: em.fullName,
    slug: em.slug,
    trim: em.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(em.exLakh * 100000),
      exShowroomLakh: em.exLakh,
      onRoadNashik: Math.round(em.onRoadLakh * 100000),
      onRoadNashikLakh: em.onRoadLakh,
      currency: 'INR',
    },
    powertrain: em.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: em.pt.maxPowerBhp === 201 ? 8.6 : 10.1,
      topSpeedKmph: 180,
    },
    dimensions: {
      lengthMm: 4710,
      widthMm: 1810,
      heightMm: 1690,
      wheelbaseMm: 2800,
      groundClearanceMm: 170,
      kerbWeightKg: 1880,
      bootSpaceLitres: em.name.includes('6 STR') ? 580 : 180,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: !em.trim.startsWith('Premium') ? 'standard' : 'not_available',
        tpms: 'standard',
        adasLevel: em.trim.includes('Superior') ? 'Level 2' : 'none',
      },
      exterior: {
        wheelSizeInches: 17,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        roofRails: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        poweredTailgate: em.trim.includes('Superior') ? 'standard' : 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: em.trim.includes('Superior') ? 'standard' : 'not_available',
        poweredDriverSeat: !em.trim.startsWith('Premium') ? 'standard' : 'not_available',
        leatherSeats: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: !em.trim.startsWith('Premium') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: 12.8,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 6,
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'BYD India Official', url: 'https://bydautoindia.com/byd-emax7', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale eMax 7 Nashik', url: 'https://www.carwale.com/byd-cars/emax-7/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];
