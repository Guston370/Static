/**
 * scripts/data_verified_variants_mercedes.ts
 *
 * Comprehensive, verified variant database for Mercedes-Benz India:
 * 1. Mercedes-Benz G-Class (1 variant) - G 450d AMG Line 3.0L Diesel (₹3.49 Crore)
 * 2. Mercedes-Benz Maybach S-Class (1 variant) - S 580e Plug-in Hybrid (₹3.78 Crore)
 * 3. Mercedes-Benz C-Class (4 variants) - C 200, C 200 Celebration, C 220d, C 300 (₹72.52 L - ₹79.64 L)
 * 4. Mercedes-Benz GLA (3 variants) - GLA 200, GLA 220d 4MATIC, GLA 220d AMG Line 4MATIC (₹61.44 L - ₹66.60 L)
 * 5. Mercedes-Benz GLS (4 variants) - GLS 450 AMG Line/Night, GLS 450d AMG Line/Night (₹1.63 Cr - ₹1.72 Cr)
 * 6. Mercedes-Benz GLC (2 variants) - GLC 300 4MATIC & GLC 220d 4MATIC (₹91.44 L - ₹93.01 L)
 * 7. Mercedes-Benz E-Class (4 variants) - E200 LWB, E200 Celebration, E220d LWB, E450 4MATIC LWB AMG Line (₹97.01 L - ₹1.13 Cr)
 * 8. Mercedes-Benz CLA EV (3 variants) - 200 Progressive (58 kWh), 250 Plus AMG Line & Launch Edition (85.5 kWh) (₹59.47 L - ₹67.57 L)
 * 9. Mercedes-Benz GLE (5 variants) - GLE AMG Line, 300d Night, 450 LWB/Night, 450d LWB (₹1.21 Cr - ₹1.41 Cr)
 * 10. Mercedes-Benz S-Class (2 variants) - S 450e Launch Edition & MANUFAKTUR Edition (₹2.60 Cr - ₹2.82 Cr)
 * 11. Mercedes-Benz AMG CLE (1 variant) - AMG CLE 53 4MATIC Plus Coupe (₹1.57 Crore)
 * 12. Mercedes-Benz V-Class (2 variants) - V 300 Petrol & V 300 d Diesel (₹1.66 Cr - ₹1.69 Cr)
 * 13. Mercedes-Benz Maybach GLS (2 variants) - Maybach GLS 600 4MATIC & Celebration Edition (₹3.25 Cr - ₹4.85 Cr)
 * 14. Mercedes-Benz AMG G-Class (2 variants) - AMG G 63 Offroad Pro & AMG G 63 (₹4.49 Cr - ₹4.69 Cr)
 * 15. Mercedes-Benz AMG GLA35 (1 variant) - AMG GLA35 4MATIC (₹75.75 Lakh)
 * 16. Mercedes-Benz CLE Cabriolet (1 variant) - CLE Cabriolet 300 AMG Line (₹1.37 Crore)
 * 17. Mercedes-Benz AMG GLC43 Coupe (1 variant) - AMG GLC43 Coupe 4MATIC AWD (₹1.26 Crore)
 *
 * Total: 39 verified variants with exact on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// --- Mercedes-Benz 1.3L & 1.5L Turbo Powertrains ---
const MB_1_3_PETROL_161_FWD = {
  fuelType: 'Petrol' as const,
  engineName: '1.3L 4-Cylinder Turbocharged Petrol (7-Speed Dual Clutch DCT FWD)',
  engineDisplacementCC: 1332,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 161,
  maxTorqueNm: 270,
  transmission: 'DCT' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const MB_1_5_MHEV_PETROL_201_RWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '1.5L 4-Cylinder Turbocharged Petrol + 48V Integrated Starter Generator (9G-Tronic Automatic RWD)',
  engineDisplacementCC: 1496,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 300,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

// --- Mercedes-Benz 2.0L 4-Cylinder Petrol / Diesel Powertrains ---
const MB_2_0_MHEV_PETROL_201_RWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Petrol + 48V MHEV (9G-Tronic Automatic RWD)',
  engineDisplacementCC: 1999,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 320,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 23,
  electricRangeKm: null,
};

const MB_2_0_MHEV_PETROL_228_RWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Petrol + 48V MHEV (9G-Tronic Automatic RWD)',
  engineDisplacementCC: 1999,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 228,
  maxTorqueNm: 370,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

const MB_2_0_MHEV_PETROL_255_RWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Petrol + 48V MHEV (9G-Tronic Automatic RWD)',
  engineDisplacementCC: 1999,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 255,
  maxTorqueNm: 400,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 23,
  electricRangeKm: null,
};

const MB_2_0_PETROL_255_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Petrol + 48V MHEV (9G-Tronic 4MATIC AWD)',
  engineDisplacementCC: 1999,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 255,
  maxTorqueNm: 400,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 23,
  electricRangeKm: null,
};

const MB_2_0_PETROL_302_AMG_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L 4-Cylinder AMG Turbocharged Petrol (AMG SPEEDSHIFT DCT 8G 4MATIC AWD)',
  engineDisplacementCC: 1991,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 302,
  maxTorqueNm: 400,
  transmission: 'DCT' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const MB_2_0_PETROL_416_AMG_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L 4-Cylinder AMG Turbocharged Petrol with Electric Exhaust Gas Turbo (AMG SPEEDSHIFT MCT 9G 4MATIC AWD)',
  engineDisplacementCC: 1991,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 416,
  maxTorqueNm: 500,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 14,
  electricRangeKm: null,
};

const MB_2_0_DIESEL_188_AWD = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Diesel (8-Speed Dual Clutch DCT 4MATIC AWD)',
  engineDisplacementCC: 1950,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 188,
  maxTorqueNm: 400,
  transmission: 'DCT' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const MB_2_0_DIESEL_233_RWD = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L 4-Cylinder OM654 Turbocharged Diesel (9G-Tronic Automatic RWD)',
  engineDisplacementCC: 1951,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 233,
  maxTorqueNm: 500,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const MB_2_0_MHEV_DIESEL_197_RWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Diesel + 48V MHEV (9G-Tronic Automatic RWD)',
  engineDisplacementCC: 1993,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 197,
  maxTorqueNm: 440,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

const MB_2_0_MHEV_DIESEL_194_RWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Diesel + 48V MHEV (9G-Tronic Automatic RWD)',
  engineDisplacementCC: 1993,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 194,
  maxTorqueNm: 440,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

const MB_2_0_DIESEL_194_AWD = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Diesel + 48V MHEV (9G-Tronic 4MATIC AWD)',
  engineDisplacementCC: 1993,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 194,
  maxTorqueNm: 440,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

const MB_2_0_MHEV_DIESEL_265_AWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Diesel + 48V MHEV (9G-Tronic 4MATIC AWD)',
  engineDisplacementCC: 1993,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 265,
  maxTorqueNm: 550,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

// --- Mercedes-Benz 3.0L Inline-6 Powertrains ---
const MB_3_0_DIESEL_362_AWD = {
  fuelType: 'Diesel' as const,
  engineName: '3.0L Inline-6 OM656M Turbocharged Diesel + 48V MHEV (9G-Tronic 4MATIC AWD)',
  engineDisplacementCC: 2989,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 362,
  maxTorqueNm: 750,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

const MB_3_0_MHEV_DIESEL_362_AWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '3.0L Inline-6 OM656M Turbocharged Diesel + 48V MHEV (9G-Tronic 4MATIC AWD)',
  engineDisplacementCC: 2989,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 362,
  maxTorqueNm: 750,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

const MB_3_0_PETROL_375_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '3.0L Inline-6 M256 Turbocharged Petrol + 48V MHEV (9G-Tronic 4MATIC AWD)',
  engineDisplacementCC: 2999,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 375,
  maxTorqueNm: 500,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

const MB_3_0_MHEV_PETROL_375_AWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '3.0L Inline-6 M256 Turbocharged Petrol + 48V MHEV (9G-Tronic 4MATIC AWD)',
  engineDisplacementCC: 2999,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 375,
  maxTorqueNm: 500,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 20,
  electricRangeKm: null,
};

const MB_3_0_MHEV_PETROL_442_AMG_AWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '3.0L Inline-6 AMG Turbocharged Petrol + Electric Auxiliary Compressor (AMG SPEEDSHIFT TCT 9G 4MATIC+ AWD)',
  engineDisplacementCC: 2999,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 442,
  maxTorqueNm: 560,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 23,
  electricRangeKm: null,
};

// --- Mercedes-Benz Plug-in Hybrids ---
const MB_3_0_PHEV_577_MAYBACH = {
  fuelType: 'PlugInHybrid' as const,
  engineName: '3.0L Inline-6 Turbocharged Petrol + Electric Motor Plug-in Hybrid (9G-Tronic Automatic RWD)',
  engineDisplacementCC: 2998,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 577,
  maxTorqueNm: 750,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 28.6,
  electricMotorPowerBhp: 150,
  electricRangeKm: 100,
};

const MB_3_0_PHEV_429_S_CLASS = {
  fuelType: 'PlugInHybrid' as const,
  engineName: '3.0L Inline-6 Turbocharged Petrol + Electric Motor Plug-in Hybrid (9G-Tronic Automatic RWD)',
  engineDisplacementCC: 2999,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 429,
  maxTorqueNm: 650,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 28.6,
  electricMotorPowerBhp: 150,
  electricRangeKm: 100,
};

// --- Mercedes-Benz 4.0L Twin-Turbo V8 Powertrains ---
const MB_4_0_MHEV_V8_550_MAYBACH_AWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '4.0L Twin-Turbocharged V8 Petrol + 48V EQ Boost (9G-Tronic 4MATIC AWD)',
  engineDisplacementCC: 3982,
  cylinders: 8,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 550,
  maxTorqueNm: 730,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: 22,
  electricRangeKm: null,
};

const MB_4_0_PETROL_V8_577_AMG_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '4.0L Twin-Turbocharged AMG V8 Petrol (AMG SPEEDSHIFT PLUS 9G-TRONIC DCT AWD)',
  engineDisplacementCC: 3982,
  cylinders: 8,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 577,
  maxTorqueNm: 850,
  transmission: 'DCT' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Mercedes-Benz CLA Electric Powertrains ---
const MB_EV_221_58KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Permanently Excited Synchronous Electric Motor (Automatic RWD, 58.0 kWh)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 221,
  maxTorqueNm: 350,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 58.0,
  electricMotorPowerBhp: 221,
  electricRangeKm: 542,
};

const MB_EV_268_85KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Permanently Excited Synchronous Electric Motor 250 Plus (Automatic RWD, 85.5 kWh)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 268,
  maxTorqueNm: 400,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 85.5,
  electricMotorPowerBhp: 268,
  electricRangeKm: 792,
};

// ============================================================================
// 1. MERCEDES-BENZ G-CLASS (1 Variant)
// ============================================================================
export const MERCEDES_G_CLASS_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-g-class-g-450d-amg-line',
    modelId: 'mercedes-benz-g-class',
    generationId: null,
    name: 'G 450d AMG Line',
    fullName: 'Mercedes-Benz G-Class G 450d AMG Line 4MATIC',
    slug: 'g-450d-amg-line',
    trim: 'AMG Line',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 28500000,
      exShowroomLakh: 285.0,
      onRoadNashik: 34900000,
      onRoadNashikLakh: 349.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_DIESEL_362_AWD,
    performance: { mileageKmpl: 11.2, zeroToHundredSec: 5.8, topSpeedKmph: 210 },
    dimensions: {
      lengthMm: 4825,
      widthMm: 1931,
      heightMm: 1969,
      wheelbaseMm: 2890,
      groundClearanceMm: 241,
      kerbWeightKg: 2555,
      bootSpaceLitres: 667,
      fuelTankLitres: 100,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/g-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz G-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/g-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 2. MERCEDES-BENZ MAYBACH S-CLASS (1 Variant)
// ============================================================================
export const MERCEDES_MAYBACH_S_CLASS_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-maybach-s-class-s-580e',
    modelId: 'mercedes-benz-maybach-s-class',
    generationId: null,
    name: 'Maybach S-Class S 580e',
    fullName: 'Mercedes-Benz Maybach S-Class S 580e Plug-in Hybrid',
    slug: 's-580e',
    trim: 'S 580e',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 31000000,
      exShowroomLakh: 310.0,
      onRoadNashik: 37800000,
      onRoadNashikLakh: 378.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_PHEV_577_MAYBACH,
    performance: { mileageKmpl: 34.48, zeroToHundredSec: 5.1, topSpeedKmph: 250 },
    dimensions: {
      lengthMm: 5469,
      widthMm: 1921,
      heightMm: 1510,
      wheelbaseMm: 3396,
      groundClearanceMm: 130,
      kerbWeightKg: 2420,
      bootSpaceLitres: 505,
      fuelTankLitres: 65,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 13, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adaptiveCruiseControl: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.8, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 30, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/maybach-s-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz Maybach S-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/maybach-s-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 3. MERCEDES-BENZ C-CLASS (4 Variants)
// ============================================================================
const C_CLASS_DIMENSIONS = {
  lengthMm: 4751,
  widthMm: 1820,
  heightMm: 1438,
  wheelbaseMm: 2865,
  groundClearanceMm: 157,
  kerbWeightKg: 1650,
  bootSpaceLitres: 455,
  fuelTankLitres: 66,
};

export const MERCEDES_C_CLASS_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-c-class-c-200',
    modelId: 'mercedes-benz-c-class',
    generationId: null,
    name: 'C-Class C 200',
    fullName: 'Mercedes-Benz C-Class C 200 Mild Hybrid Automatic',
    slug: 'c-200',
    trim: 'C 200',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 6185000,
      exShowroomLakh: 61.85,
      onRoadNashik: 7252000,
      onRoadNashikLakh: 72.52,
      currency: 'INR',
    },
    powertrain: MB_1_5_MHEV_PETROL_201_RWD,
    performance: { mileageKmpl: 16.9, zeroToHundredSec: 7.3, topSpeedKmph: 246 },
    dimensions: C_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 9, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/c-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz C-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/c-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-c-class-c-200-celebration-edition',
    modelId: 'mercedes-benz-c-class',
    generationId: null,
    name: 'C-Class C 200 Celebration Edition',
    fullName: 'Mercedes-Benz C-Class C 200 Celebration Edition',
    slug: 'c-200-celebration-edition',
    trim: 'Celebration Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 6300000,
      exShowroomLakh: 63.0,
      onRoadNashik: 7393000,
      onRoadNashikLakh: 73.93,
      currency: 'INR',
    },
    powertrain: MB_1_5_MHEV_PETROL_201_RWD,
    performance: { mileageKmpl: 16.9, zeroToHundredSec: 7.3, topSpeedKmph: 246 },
    dimensions: C_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 9, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/c-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz C-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/c-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-c-class-c-220d',
    modelId: 'mercedes-benz-c-class',
    generationId: null,
    name: 'C-Class C 220d',
    fullName: 'Mercedes-Benz C-Class C 220d Mild Hybrid Automatic',
    slug: 'c-220d',
    trim: 'C 220d',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 6310000,
      exShowroomLakh: 63.1,
      onRoadNashik: 7404000,
      onRoadNashikLakh: 74.04,
      currency: 'INR',
    },
    powertrain: MB_2_0_MHEV_DIESEL_197_RWD,
    performance: { mileageKmpl: 23.0, zeroToHundredSec: 7.3, topSpeedKmph: 245 },
    dimensions: C_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 9, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/c-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz C-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/c-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-c-class-c-300',
    modelId: 'mercedes-benz-c-class',
    generationId: null,
    name: 'C-Class C 300',
    fullName: 'Mercedes-Benz C-Class C 300 AMG Line Mild Hybrid',
    slug: 'c-300',
    trim: 'C 300',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 6900000,
      exShowroomLakh: 69.0,
      onRoadNashik: 7964000,
      onRoadNashikLakh: 79.64,
      currency: 'INR',
    },
    powertrain: MB_2_0_MHEV_PETROL_255_RWD,
    performance: { mileageKmpl: 14.4, zeroToHundredSec: 6.0, topSpeedKmph: 250 },
    dimensions: C_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/c-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz C-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/c-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 4. MERCEDES-BENZ GLA (3 Variants)
// ============================================================================
const GLA_DIMENSIONS = {
  lengthMm: 4410,
  widthMm: 1834,
  heightMm: 1611,
  wheelbaseMm: 2729,
  groundClearanceMm: 183,
  kerbWeightKg: 1570,
  bootSpaceLitres: 425,
  fuelTankLitres: 52,
};

export const MERCEDES_GLA_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-gla-200',
    modelId: 'mercedes-benz-gla',
    generationId: null,
    name: 'GLA 200',
    fullName: 'Mercedes-Benz GLA 200 Automatic DCT',
    slug: '200',
    trim: 'GLA 200',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5175000,
      exShowroomLakh: 51.75,
      onRoadNashik: 6144000,
      onRoadNashikLakh: 61.44,
      currency: 'INR',
    },
    powertrain: MB_1_3_PETROL_161_FWD,
    performance: { mileageKmpl: 17.4, zeroToHundredSec: 8.7, topSpeedKmph: 210 },
    dimensions: GLA_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.25, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 6, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gla/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLA Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gla/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-gla-220d-4matic',
    modelId: 'mercedes-benz-gla',
    generationId: null,
    name: 'GLA 220d 4MATIC',
    fullName: 'Mercedes-Benz GLA 220d 4MATIC Automatic DCT',
    slug: '220d-4matic',
    trim: 'GLA 220d 4MATIC',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5600000,
      exShowroomLakh: 56.0,
      onRoadNashik: 6420000,
      onRoadNashikLakh: 64.20,
      currency: 'INR',
    },
    powertrain: MB_2_0_DIESEL_188_AWD,
    performance: { mileageKmpl: 18.9, zeroToHundredSec: 7.4, topSpeedKmph: 219 },
    dimensions: GLA_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.25, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 6, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gla/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLA Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gla/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-gla-220d-amg-line-4matic',
    modelId: 'mercedes-benz-gla',
    generationId: null,
    name: 'GLA 220d AMG Line 4MATIC',
    fullName: 'Mercedes-Benz GLA 220d AMG Line 4MATIC DCT',
    slug: '220d-amg-line-4matic',
    trim: 'AMG Line',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5815000,
      exShowroomLakh: 58.15,
      onRoadNashik: 6660000,
      onRoadNashikLakh: 66.60,
      currency: 'INR',
    },
    powertrain: MB_2_0_DIESEL_188_AWD,
    performance: { mileageKmpl: 18.9, zeroToHundredSec: 7.4, topSpeedKmph: 219 },
    dimensions: GLA_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.25, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gla/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLA Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gla/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 5. MERCEDES-BENZ GLS (4 Variants)
// ============================================================================
const GLS_DIMENSIONS = {
  lengthMm: 5209,
  widthMm: 1956,
  heightMm: 1823,
  wheelbaseMm: 3135,
  groundClearanceMm: 200,
  kerbWeightKg: 2560,
  bootSpaceLitres: 890,
  fuelTankLitres: 90,
};

export const MERCEDES_GLS_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-gls-450-4matic-amg-line',
    modelId: 'mercedes-benz-gls',
    generationId: null,
    name: 'GLS 450 4MATIC AMG Line',
    fullName: 'Mercedes-Benz GLS 450 4MATIC AMG Line Automatic',
    slug: '450-4matic-amg-line',
    trim: 'AMG Line',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 13225000,
      exShowroomLakh: 132.25,
      onRoadNashik: 16300000,
      onRoadNashikLakh: 163.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_PETROL_375_AWD,
    performance: { mileageKmpl: 10.2, zeroToHundredSec: 6.2, topSpeedKmph: 250 },
    dimensions: GLS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 13, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gls/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLS Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gls/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-gls-450-4matic-night-edition',
    modelId: 'mercedes-benz-gls',
    generationId: null,
    name: 'GLS 450 4MATIC Night Edition',
    fullName: 'Mercedes-Benz GLS 450 4MATIC Night Edition',
    slug: '450-4matic-night-edition',
    trim: 'Night Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 13550000,
      exShowroomLakh: 135.5,
      onRoadNashik: 16700000,
      onRoadNashikLakh: 167.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_PETROL_375_AWD,
    performance: { mileageKmpl: 10.2, zeroToHundredSec: 6.2, topSpeedKmph: 250 },
    dimensions: GLS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 13, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gls/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLS Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gls/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-gls-450d-4matic-amg-line',
    modelId: 'mercedes-benz-gls',
    generationId: null,
    name: 'GLS 450d 4MATIC AMG Line',
    fullName: 'Mercedes-Benz GLS 450d 4MATIC AMG Line Automatic',
    slug: '450d-4matic-amg-line',
    trim: 'AMG Line',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 13725000,
      exShowroomLakh: 137.25,
      onRoadNashik: 16900000,
      onRoadNashikLakh: 169.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_DIESEL_362_AWD,
    performance: { mileageKmpl: 11.5, zeroToHundredSec: 6.1, topSpeedKmph: 250 },
    dimensions: GLS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 13, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gls/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLS Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gls/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-gls-450d-4matic-night-edition',
    modelId: 'mercedes-benz-gls',
    generationId: null,
    name: 'GLS 450d 4MATIC Night Edition',
    fullName: 'Mercedes-Benz GLS 450d 4MATIC Night Edition',
    slug: '450d-4matic-night-edition',
    trim: 'Night Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 13975000,
      exShowroomLakh: 139.75,
      onRoadNashik: 17200000,
      onRoadNashikLakh: 172.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_DIESEL_362_AWD,
    performance: { mileageKmpl: 11.5, zeroToHundredSec: 6.1, topSpeedKmph: 250 },
    dimensions: GLS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 13, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gls/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLS Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gls/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 6. MERCEDES-BENZ GLC (2 Variants)
// ============================================================================
const GLC_DIMENSIONS = {
  lengthMm: 4716,
  widthMm: 1890,
  heightMm: 1640,
  wheelbaseMm: 2888,
  groundClearanceMm: 180,
  kerbWeightKg: 1925,
  bootSpaceLitres: 620,
  fuelTankLitres: 62,
};

export const MERCEDES_GLC_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-glc-300-4matic',
    modelId: 'mercedes-benz-glc',
    generationId: null,
    name: 'GLC 300 4MATIC',
    fullName: 'Mercedes-Benz GLC 300 4MATIC Automatic',
    slug: '300-4matic',
    trim: 'GLC 300',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 7615000,
      exShowroomLakh: 76.15,
      onRoadNashik: 9144000,
      onRoadNashikLakh: 91.44,
      currency: 'INR',
    },
    powertrain: MB_2_0_PETROL_255_AWD,
    performance: { mileageKmpl: 14.7, zeroToHundredSec: 6.2, topSpeedKmph: 240 },
    dimensions: GLC_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/glc/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLC Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/glc/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-glc-220d-4matic',
    modelId: 'mercedes-benz-glc',
    generationId: null,
    name: 'GLC 220d 4MATIC',
    fullName: 'Mercedes-Benz GLC 220d 4MATIC Automatic',
    slug: '220d-4matic',
    trim: 'GLC 220d',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 7745000,
      exShowroomLakh: 77.45,
      onRoadNashik: 9301000,
      onRoadNashikLakh: 93.01,
      currency: 'INR',
    },
    powertrain: MB_2_0_DIESEL_194_AWD,
    performance: { mileageKmpl: 19.4, zeroToHundredSec: 8.0, topSpeedKmph: 219 },
    dimensions: GLC_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/glc/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLC Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/glc/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 7. MERCEDES-BENZ E-CLASS (4 Variants)
// ============================================================================
const E_CLASS_DIMENSIONS = {
  lengthMm: 5092,
  widthMm: 1880,
  heightMm: 1493,
  wheelbaseMm: 3094,
  groundClearanceMm: 140,
  kerbWeightKg: 1820,
  bootSpaceLitres: 540,
  fuelTankLitres: 66,
};

export const MERCEDES_E_CLASS_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-e-class-e200-lwb',
    modelId: 'mercedes-benz-e-class',
    generationId: null,
    name: 'E-Class E200 LWB',
    fullName: 'Mercedes-Benz E-Class E200 LWB Automatic',
    slug: 'e200-lwb',
    trim: 'E200 LWB',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 7850000,
      exShowroomLakh: 78.5,
      onRoadNashik: 9701000,
      onRoadNashikLakh: 97.01,
      currency: 'INR',
    },
    powertrain: MB_2_0_MHEV_PETROL_201_RWD,
    performance: { mileageKmpl: 15.0, zeroToHundredSec: 7.5, topSpeedKmph: 240 },
    dimensions: E_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 14.4, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 17, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/e-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz E-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/e-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-e-class-e200-lwb-celebration-edition',
    modelId: 'mercedes-benz-e-class',
    generationId: null,
    name: 'E-Class E200 LWB Celebration Edition',
    fullName: 'Mercedes-Benz E-Class E200 LWB Celebration Edition',
    slug: 'e200-lwb-celebration-edition',
    trim: 'Celebration Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 7990000,
      exShowroomLakh: 79.9,
      onRoadNashik: 9842000,
      onRoadNashikLakh: 98.42,
      currency: 'INR',
    },
    powertrain: MB_2_0_MHEV_PETROL_201_RWD,
    performance: { mileageKmpl: 15.0, zeroToHundredSec: 7.5, topSpeedKmph: 240 },
    dimensions: E_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 14.4, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 17, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/e-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz E-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/e-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-e-class-e220d-lwb',
    modelId: 'mercedes-benz-e-class',
    generationId: null,
    name: 'E-Class E220d LWB',
    fullName: 'Mercedes-Benz E-Class E220d LWB Automatic',
    slug: 'e220d-lwb',
    trim: 'E220d LWB',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 8150000,
      exShowroomLakh: 81.5,
      onRoadNashik: 10100000,
      onRoadNashikLakh: 101.0,
      currency: 'INR',
    },
    powertrain: MB_2_0_MHEV_DIESEL_194_RWD,
    performance: { mileageKmpl: 21.0, zeroToHundredSec: 7.6, topSpeedKmph: 238 },
    dimensions: E_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 14.4, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 17, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/e-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz E-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/e-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-e-class-450-4matic-lwb-amg-line',
    modelId: 'mercedes-benz-e-class',
    generationId: null,
    name: 'E-Class 450 4MATIC LWB AMG Line',
    fullName: 'Mercedes-Benz E-Class E 450 4MATIC LWB AMG Line',
    slug: '450-4matic-lwb-amg-line',
    trim: 'AMG Line',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 9250000,
      exShowroomLakh: 92.5,
      onRoadNashik: 11300000,
      onRoadNashikLakh: 113.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_MHEV_PETROL_375_AWD,
    performance: { mileageKmpl: 12.0, zeroToHundredSec: 4.5, topSpeedKmph: 250 },
    dimensions: E_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 14.4, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 21, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/e-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz E-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/e-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 8. MERCEDES-BENZ CLA EV (3 Variants)
// ============================================================================
const CLA_EV_DIMENSIONS = {
  lengthMm: 4740,
  widthMm: 1860,
  heightMm: 1440,
  wheelbaseMm: 2800,
  groundClearanceMm: 145,
  kerbWeightKg: 1950,
  bootSpaceLitres: 460,
  fuelTankLitres: null,
};

export const MERCEDES_CLA_EV_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-cla-ev-200-progressive',
    modelId: 'mercedes-benz-cla-ev',
    generationId: null,
    name: 'CLA EV 200 Progressive',
    fullName: 'Mercedes-Benz CLA EV 200 Progressive (58.0 kWh)',
    slug: '200-progressive',
    trim: 'Progressive',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5200000,
      exShowroomLakh: 52.0,
      onRoadNashik: 5947000,
      onRoadNashikLakh: 59.47,
      currency: 'INR',
    },
    powertrain: MB_EV_221_58KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 6.8, topSpeedKmph: 210 },
    dimensions: CLA_EV_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/cla/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz CLA EV Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/cla-ev/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-cla-ev-250-plus-amg-line',
    modelId: 'mercedes-benz-cla-ev',
    generationId: null,
    name: 'CLA EV 250 Plus AMG Line',
    fullName: 'Mercedes-Benz CLA EV 250 Plus AMG Line (85.5 kWh)',
    slug: '250-plus-amg-line',
    trim: 'AMG Line',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5600000,
      exShowroomLakh: 56.0,
      onRoadNashik: 6390000,
      onRoadNashikLakh: 63.90,
      currency: 'INR',
    },
    powertrain: MB_EV_268_85KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 5.9, topSpeedKmph: 220 },
    dimensions: CLA_EV_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 12, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/cla/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz CLA EV Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/cla-ev/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-cla-ev-250-plus-launch-edition',
    modelId: 'mercedes-benz-cla-ev',
    generationId: null,
    name: 'CLA EV 250 Plus Launch Edition',
    fullName: 'Mercedes-Benz CLA EV 250 Plus Launch Edition (85.5 kWh)',
    slug: '250-plus-launch-edition',
    trim: 'Launch Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5950000,
      exShowroomLakh: 59.5,
      onRoadNashik: 6757000,
      onRoadNashikLakh: 67.57,
      currency: 'INR',
    },
    powertrain: MB_EV_268_85KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 5.9, topSpeedKmph: 220 },
    dimensions: CLA_EV_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/cla/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz CLA EV Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/cla-ev/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 9. MERCEDES-BENZ GLE (5 Variants)
// ============================================================================
const GLE_DIMENSIONS = {
  lengthMm: 4924,
  widthMm: 2010,
  heightMm: 1797,
  wheelbaseMm: 2995,
  groundClearanceMm: 200,
  kerbWeightKg: 2320,
  bootSpaceLitres: 630,
  fuelTankLitres: 85,
};

export const MERCEDES_GLE_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-gle-amg-line',
    modelId: 'mercedes-benz-gle',
    generationId: null,
    name: 'GLE AMG Line',
    fullName: 'Mercedes-Benz GLE 300d 4MATIC AMG Line Automatic',
    slug: 'amg-line',
    trim: 'AMG Line',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 9785000,
      exShowroomLakh: 97.85,
      onRoadNashik: 12100000,
      onRoadNashikLakh: 121.0,
      currency: 'INR',
    },
    powertrain: MB_2_0_MHEV_DIESEL_265_AWD,
    performance: { mileageKmpl: 14.0, zeroToHundredSec: 6.9, topSpeedKmph: 225 },
    dimensions: GLE_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 13, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gle/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLE Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gle/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-gle-300d-4matic-lwb-night-edition',
    modelId: 'mercedes-benz-gle',
    generationId: null,
    name: 'GLE 300d 4MATIC LWB Night Edition',
    fullName: 'Mercedes-Benz GLE 300d 4MATIC LWB Night Edition',
    slug: '300d-4matic-lwb-night-edition',
    trim: 'Night Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 10300000,
      exShowroomLakh: 103.0,
      onRoadNashik: 12700000,
      onRoadNashikLakh: 127.0,
      currency: 'INR',
    },
    powertrain: MB_2_0_MHEV_DIESEL_265_AWD,
    performance: { mileageKmpl: 14.0, zeroToHundredSec: 6.9, topSpeedKmph: 225 },
    dimensions: GLE_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 13, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gle/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLE Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gle/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-gle-450-4matic-lwb',
    modelId: 'mercedes-benz-gle',
    generationId: null,
    name: 'GLE 450 4MATIC LWB',
    fullName: 'Mercedes-Benz GLE 450 4MATIC LWB Automatic',
    slug: '450-4matic-lwb',
    trim: 'GLE 450',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 10700000,
      exShowroomLakh: 107.0,
      onRoadNashik: 13200000,
      onRoadNashikLakh: 132.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_MHEV_PETROL_375_AWD,
    performance: { mileageKmpl: 11.0, zeroToHundredSec: 5.6, topSpeedKmph: 250 },
    dimensions: GLE_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 13, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gle/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLE Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gle/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-gle-450-4matic-lwb-night-edition',
    modelId: 'mercedes-benz-gle',
    generationId: null,
    name: 'GLE 450 4MATIC LWB Night Edition',
    fullName: 'Mercedes-Benz GLE 450 4MATIC LWB Night Edition',
    slug: '450-4matic-lwb-night-edition',
    trim: 'Night Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 10950000,
      exShowroomLakh: 109.5,
      onRoadNashik: 13500000,
      onRoadNashikLakh: 135.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_MHEV_PETROL_375_AWD,
    performance: { mileageKmpl: 11.0, zeroToHundredSec: 5.6, topSpeedKmph: 250 },
    dimensions: GLE_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 13, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gle/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLE Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gle/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-gle-450d-4matic-lwb',
    modelId: 'mercedes-benz-gle',
    generationId: null,
    name: 'GLE 450d 4MATIC LWB',
    fullName: 'Mercedes-Benz GLE 450d 4MATIC LWB Automatic',
    slug: '450d-4matic-lwb',
    trim: 'GLE 450d',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 11700000,
      exShowroomLakh: 117.0,
      onRoadNashik: 14100000,
      onRoadNashikLakh: 141.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_MHEV_DIESEL_362_AWD,
    performance: { mileageKmpl: 13.5, zeroToHundredSec: 5.6, topSpeedKmph: 250 },
    dimensions: GLE_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 13, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gle/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz GLE Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/gle/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 10. MERCEDES-BENZ S-CLASS (2 Variants)
// ============================================================================
const S_CLASS_DIMENSIONS = {
  lengthMm: 5289,
  widthMm: 1954,
  heightMm: 1503,
  wheelbaseMm: 3216,
  groundClearanceMm: 130,
  kerbWeightKg: 2280,
  bootSpaceLitres: 550,
  fuelTankLitres: 65,
};

export const MERCEDES_S_CLASS_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-s-class-s-450e-launch-edition',
    modelId: 'mercedes-benz-s-class',
    generationId: null,
    name: 'S-Class S 450e Launch Edition',
    fullName: 'Mercedes-Benz S-Class S 450e Plug-in Hybrid Launch Edition',
    slug: 's-450e-launch-edition',
    trim: 'Launch Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 21000000,
      exShowroomLakh: 210.0,
      onRoadNashik: 26000000,
      onRoadNashikLakh: 260.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_PHEV_429_S_CLASS,
    performance: { mileageKmpl: 28.0, zeroToHundredSec: 5.2, topSpeedKmph: 250 },
    dimensions: S_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 10, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adaptiveCruiseControl: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.8, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/s-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz S-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/s-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-s-class-s-450e-manufaktur-edition',
    modelId: 'mercedes-benz-s-class',
    generationId: null,
    name: 'S-Class S 450e MANUFAKTUR Edition',
    fullName: 'Mercedes-Benz S-Class S 450e MANUFAKTUR Edition Plug-in Hybrid',
    slug: 's-450e-manufaktur-edition',
    trim: 'MANUFAKTUR Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 22800000,
      exShowroomLakh: 228.0,
      onRoadNashik: 28200000,
      onRoadNashikLakh: 282.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_PHEV_429_S_CLASS,
    performance: { mileageKmpl: 28.0, zeroToHundredSec: 5.2, topSpeedKmph: 250 },
    dimensions: S_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 10, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adaptiveCruiseControl: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.8, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 31, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/saloon/s-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz S-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/s-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 11. MERCEDES-BENZ AMG CLE (1 Variant)
// ============================================================================
export const MERCEDES_AMG_CLE_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-amg-cle-53-4matic-plus-coupe',
    modelId: 'mercedes-benz-amg-cle',
    generationId: null,
    name: 'AMG CLE 53 4MATIC Plus Coupe',
    fullName: 'Mercedes-AMG CLE 53 4MATIC+ Coupe',
    slug: '53-4matic-plus-coupe',
    trim: 'AMG 53',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 13500000,
      exShowroomLakh: 135.0,
      onRoadNashik: 15700000,
      onRoadNashikLakh: 157.0,
      currency: 'INR',
    },
    powertrain: MB_3_0_MHEV_PETROL_442_AMG_AWD,
    performance: { mileageKmpl: 10.3, zeroToHundredSec: 4.2, topSpeedKmph: 250 },
    dimensions: {
      lengthMm: 4850,
      widthMm: 1860,
      heightMm: 1428,
      wheelbaseMm: 2865,
      groundClearanceMm: 130,
      kerbWeightKg: 1980,
      bootSpaceLitres: 420,
      fuelTankLitres: 65,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 17, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/coupe/cle/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz AMG CLE Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/amg-cle/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 12. MERCEDES-BENZ V-CLASS (2 Variants)
// ============================================================================
const V_CLASS_DIMENSIONS = {
  lengthMm: 5140,
  widthMm: 1928,
  heightMm: 1880,
  wheelbaseMm: 3200,
  groundClearanceMm: 160,
  kerbWeightKg: 2150,
  bootSpaceLitres: 1030,
  fuelTankLitres: 70,
};

export const MERCEDES_V_CLASS_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-v-class-v-300',
    modelId: 'mercedes-benz-v-class',
    generationId: null,
    name: 'V-Class V 300',
    fullName: 'Mercedes-Benz V-Class V 300 Mild Hybrid Automatic',
    slug: 'v-300',
    trim: 'V 300',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 13800000,
      exShowroomLakh: 138.0,
      onRoadNashik: 16600000,
      onRoadNashikLakh: 166.0,
      currency: 'INR',
    },
    powertrain: MB_2_0_MHEV_PETROL_228_RWD,
    performance: { mileageKmpl: 11.5, zeroToHundredSec: 7.4, topSpeedKmph: 220 },
    dimensions: V_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 6, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/mpv/v-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz V-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/v-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-v-class-v-300-d',
    modelId: 'mercedes-benz-v-class',
    generationId: null,
    name: 'V-Class V 300 d',
    fullName: 'Mercedes-Benz V-Class V 300 d Diesel Automatic',
    slug: 'v-300-d',
    trim: 'V 300 d',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 14000000,
      exShowroomLakh: 140.0,
      onRoadNashik: 16900000,
      onRoadNashikLakh: 169.0,
      currency: 'INR',
    },
    powertrain: MB_2_0_DIESEL_233_RWD,
    performance: { mileageKmpl: 14.5, zeroToHundredSec: 7.8, topSpeedKmph: 220 },
    dimensions: V_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 6, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/mpv/v-class/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz V-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/v-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 13. MERCEDES-BENZ MAYBACH GLS (2 Variants)
// ============================================================================
const MAYBACH_GLS_DIMENSIONS = {
  lengthMm: 5208,
  widthMm: 2030,
  heightMm: 1838,
  wheelbaseMm: 3135,
  groundClearanceMm: 200,
  kerbWeightKg: 2785,
  bootSpaceLitres: 520,
  fuelTankLitres: 90,
};

export const MERCEDES_MAYBACH_GLS_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-maybach-gls-600-4matic',
    modelId: 'mercedes-benz-maybach-gls',
    generationId: null,
    name: 'Maybach GLS 600 4MATIC',
    fullName: 'Mercedes-Maybach GLS 600 4MATIC Automatic',
    slug: '600-4matic',
    trim: 'Maybach 600',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 26500000,
      exShowroomLakh: 265.0,
      onRoadNashik: 32500000,
      onRoadNashikLakh: 325.0,
      currency: 'INR',
    },
    powertrain: MB_4_0_MHEV_V8_550_MAYBACH_AWD,
    performance: { mileageKmpl: 8.5, zeroToHundredSec: 4.9, topSpeedKmph: 250 },
    dimensions: MAYBACH_GLS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adaptiveCruiseControl: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 22, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 27, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/maybach-gls/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz Maybach GLS Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/maybach-gls/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-maybach-gls-600-4matic-celebration-edition',
    modelId: 'mercedes-benz-maybach-gls',
    generationId: null,
    name: 'Maybach GLS 600 4MATIC Celebration Edition',
    fullName: 'Mercedes-Maybach GLS 600 4MATIC Celebration Edition',
    slug: '600-4matic-celebration-edition',
    trim: 'Celebration Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 39500000,
      exShowroomLakh: 395.0,
      onRoadNashik: 48500000,
      onRoadNashikLakh: 485.0,
      currency: 'INR',
    },
    powertrain: MB_4_0_MHEV_V8_550_MAYBACH_AWD,
    performance: { mileageKmpl: 8.5, zeroToHundredSec: 4.9, topSpeedKmph: 250 },
    dimensions: MAYBACH_GLS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adaptiveCruiseControl: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 23, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 27, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/maybach-gls/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz Maybach GLS Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/maybach-gls/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 14. MERCEDES-BENZ AMG G-CLASS (2 Variants)
// ============================================================================
const AMG_G_CLASS_DIMENSIONS = {
  lengthMm: 4873,
  widthMm: 1984,
  heightMm: 1966,
  wheelbaseMm: 2890,
  groundClearanceMm: 241,
  kerbWeightKg: 2560,
  bootSpaceLitres: 667,
  fuelTankLitres: 100,
};

export const MERCEDES_AMG_G_CLASS_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-amg-g-class-g-63-offroad-pro',
    modelId: 'mercedes-benz-amg-g-class',
    generationId: null,
    name: 'AMG G-Class G 63 Offroad Pro',
    fullName: 'Mercedes-AMG G-Class G 63 Offroad Pro Automatic',
    slug: 'g-63-offroad-pro',
    trim: 'Offroad Pro',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 36500000,
      exShowroomLakh: 365.0,
      onRoadNashik: 44900000,
      onRoadNashikLakh: 449.0,
      currency: 'INR',
    },
    powertrain: MB_4_0_PETROL_V8_577_AMG_AWD,
    performance: { mileageKmpl: 6.8, zeroToHundredSec: 4.5, topSpeedKmph: 220 },
    dimensions: AMG_G_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/g-class/amg.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz AMG G-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/amg-g-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'mercedes-benz-amg-g-class-g-63',
    modelId: 'mercedes-benz-amg-g-class',
    generationId: null,
    name: 'AMG G-Class G 63',
    fullName: 'Mercedes-AMG G-Class G 63 Automatic',
    slug: 'g-63',
    trim: 'AMG G 63',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 38500000,
      exShowroomLakh: 385.0,
      onRoadNashik: 46900000,
      onRoadNashikLakh: 469.0,
      currency: 'INR',
    },
    powertrain: MB_4_0_PETROL_V8_577_AMG_AWD,
    performance: { mileageKmpl: 6.8, zeroToHundredSec: 4.5, topSpeedKmph: 220 },
    dimensions: AMG_G_CLASS_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 9, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard' },
      exterior: { wheelSizeInches: 22, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/g-class/amg.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz AMG G-Class Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/amg-g-class/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 15. MERCEDES-BENZ AMG GLA35 (1 Variant)
// ============================================================================
export const MERCEDES_AMG_GLA35_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-amg-gla35-4matic',
    modelId: 'mercedes-benz-amg-gla35',
    generationId: null,
    name: 'AMG GLA35 4MATIC',
    fullName: 'Mercedes-AMG GLA35 4MATIC DCT',
    slug: '4matic',
    trim: 'GLA 35 4MATIC',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 6350000,
      exShowroomLakh: 63.5,
      onRoadNashik: 7575000,
      onRoadNashikLakh: 75.75,
      currency: 'INR',
    },
    powertrain: MB_2_0_PETROL_302_AMG_AWD,
    performance: { mileageKmpl: 13.4, zeroToHundredSec: 5.2, topSpeedKmph: 250 },
    dimensions: {
      lengthMm: 4436,
      widthMm: 1849,
      heightMm: 1588,
      wheelbaseMm: 2729,
      groundClearanceMm: 180,
      kerbWeightKg: 1680,
      bootSpaceLitres: 435,
      fuelTankLitres: 51,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 7, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.25, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 12, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/suv/gla/amg.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz AMG GLA35 Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/amg-gla35/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 16. MERCEDES-BENZ CLE CABRIOLET (1 Variant)
// ============================================================================
export const MERCEDES_CLE_CABRIOLET_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-cle-cabriolet-300-amg-line',
    modelId: 'mercedes-benz-cle-cabriolet',
    generationId: null,
    name: 'CLE Cabriolet 300 AMG Line',
    fullName: 'Mercedes-Benz CLE Cabriolet 300 AMG Line Automatic',
    slug: '300-amg-line',
    trim: '300 AMG Line',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 11000000,
      exShowroomLakh: 110.0,
      onRoadNashik: 13700000,
      onRoadNashikLakh: 137.0,
      currency: 'INR',
    },
    powertrain: MB_2_0_MHEV_PETROL_255_RWD,
    performance: { mileageKmpl: 13.5, zeroToHundredSec: 6.3, topSpeedKmph: 250 },
    dimensions: {
      lengthMm: 4850,
      widthMm: 1861,
      heightMm: 1424,
      wheelbaseMm: 2865,
      groundClearanceMm: 130,
      kerbWeightKg: 1950,
      bootSpaceLitres: 385,
      fuelTankLitres: 66,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'not_available' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ventilatedSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 17, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/cabriolet/cle/overview.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz CLE Cabriolet Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/cle-cabriolet/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 17. MERCEDES-BENZ AMG GLC43 COUPE (1 Variant)
// ============================================================================
export const MERCEDES_AMG_GLC43_COUPE_VARIANTS: CarVariant[] = [
  {
    id: 'mercedes-benz-amg-glc43-coupe-4matic-awd',
    modelId: 'mercedes-benz-amg-glc43-coupe',
    generationId: null,
    name: 'AMG GLC43 Coupe 4MATIC AWD',
    fullName: 'Mercedes-AMG GLC43 Coupe 4MATIC AWD',
    slug: '4matic-awd',
    trim: 'GLC 43 Coupe',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 10400000,
      exShowroomLakh: 104.0,
      onRoadNashik: 12600000,
      onRoadNashikLakh: 126.0,
      currency: 'INR',
    },
    powertrain: MB_2_0_PETROL_416_AMG_AWD,
    performance: { mileageKmpl: 10.5, zeroToHundredSec: 4.8, topSpeedKmph: 250 },
    dimensions: {
      lengthMm: 4792,
      widthMm: 1920,
      heightMm: 1603,
      wheelbaseMm: 2888,
      groundClearanceMm: 160,
      kerbWeightKg: 1995,
      bootSpaceLitres: 545,
      fuelTankLitres: 62,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 11.9, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 15, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Mercedes-Benz India Official Portal', url: 'https://www.mercedes-benz.co.in/passengercars/models/coupe/glc/amg.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Mercedes-Benz AMG GLC43 Coupe Nashik', url: 'https://www.carwale.com/mercedes-benz-cars/amg-glc43-coupe/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];
