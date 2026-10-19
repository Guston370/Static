/**
 * scripts/data_verified_variants_audi.ts
 *
 * Comprehensive, verified variant database for Audi India:
 * 1. Audi Q3 (1 variant) - 2.0L 40 TFSI Petrol S-Tronic DCT quattro (₹61.93 Lakh)
 * 2. Audi A4 (4 variants) - 2.0L 40 TFSI Petrol S-Tronic DCT Premium, Premium Plus, Signature, Technology (₹55.90 L - ₹66.46 L)
 * 3. Audi A6 (2 variants) - 2.0L 45 TFSI Petrol S-Tronic DCT Premium Plus, Technology (₹77.06 L - ₹85.14 L)
 * 4. Audi Q7 (4 variants) - 3.0L 55 TFSI V6 Turbo Petrol Tiptronic quattro Premium Plus, Bold, Signature, Technology (₹1.04 Cr - ₹1.14 Cr)
 * 5. Audi S5 Sportback (2 variants) - 3.0L V6 Turbo Petrol Tiptronic quattro Standard & Platinum Edition (₹87.39 L - ₹95.83 L)
 * 6. Audi Q3 Sportback (3 variants) - 2.0L 40 TFSI Petrol S-Tronic DCT Signature, Bold, Technology Plus S-line (₹63.77 L - ₹64.59 L)
 * 7. Audi Q8 (1 variant) - 3.0L 55 TFSI V6 Turbo Petrol Tiptronic quattro (₹1.36 Crore)
 * 8. Audi A8 L (2 variants) - 3.0L 55 TFSI V6 Mild Hybrid Petrol Celebration Edition & Technology (₹1.51 Cr - ₹1.82 Cr)
 * 9. Audi RS5 (1 variant) - 2.9L Twin-Turbo V6 TFSI Petrol Tiptronic quattro (₹1.27 Crore)
 * 10. Audi RS Q8 Performance (1 variant) - 4.0L Twin-Turbo V8 TFSI Petrol Tiptronic quattro (₹2.82 Crore)
 * 11. Audi e-tron GT (2 variants) - Dual Electric Motors S & RS quattro 93.4 kWh (₹1.81 Cr - ₹2.05 Cr)
 * 12. Audi e-tron Sportback (2 variants) - Dual Electric Motors 55 & 55 Technology quattro 95 kWh (₹1.27 Cr - ₹1.33 Cr)
 * 13. Audi e-tron (3 variants) - Dual Electric Motors 50 (71 kWh), 55 & 55 Technology (95 kWh) (₹1.08 Cr - ₹1.31 Cr)
 * 14. Audi Q8 e-tron (2 variants) - Dual Electric Motors 50 (95 kWh) & 55 (114 kWh) quattro (₹1.21 Cr - ₹1.34 Cr)
 * 15. Audi Q8 Sportback e-tron (2 variants) - Dual Electric Motors 50 (95 kWh) & 55 (114 kWh) quattro (₹1.26 Cr - ₹1.39 Cr)
 * 16. Audi SQ8 (1 variant) - 4.0L Twin-Turbo V8 Petrol Tiptronic quattro (₹2.11 Crore)
 *
 * Total: 33 verified variants with exact on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// --- Audi 2.0L 40 TFSI (1984 cc) - 201 bhp / 193 bhp ---
const AUDI_2_0_TFSI_201_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L 4-Cylinder 40 TFSI Turbocharged Petrol (7-Speed S-Tronic DCT quattro AWD)',
  engineDisplacementCC: 1984,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 320,
  transmission: 'DCT' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const AUDI_2_0_TFSI_201_FWD = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L 4-Cylinder 40 TFSI Turbocharged Petrol (7-Speed S-Tronic DCT FWD)',
  engineDisplacementCC: 1984,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 320,
  transmission: 'DCT' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const AUDI_2_0_TFSI_193_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L 4-Cylinder 40 TFSI Turbocharged Petrol (7-Speed S-Tronic DCT quattro AWD)',
  engineDisplacementCC: 1984,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 193,
  maxTorqueNm: 320,
  transmission: 'DCT' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Audi 2.0L 45 TFSI (1984 cc) - 261 bhp ---
const AUDI_2_0_TFSI_261_FWD = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L 4-Cylinder 45 TFSI Turbocharged Petrol + 12V MHEV (7-Speed S-Tronic DCT FWD)',
  engineDisplacementCC: 1984,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 261,
  maxTorqueNm: 370,
  transmission: 'DCT' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Audi 3.0L 55 TFSI V6 (2995 cc) - 335 bhp / 344 bhp / 349 bhp ---
const AUDI_3_0_TFSI_335_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '3.0L V6 55 TFSI Turbocharged Petrol + 48V MHEV (8-Speed Tiptronic quattro AWD)',
  engineDisplacementCC: 2995,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 335,
  maxTorqueNm: 500,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const AUDI_3_0_TFSI_344_MHEV_AWD = {
  fuelType: 'MildHybrid' as const,
  engineName: '3.0L V6 55 TFSI Mild Hybrid Petrol + 48V MHEV (8-Speed Tiptronic quattro AWD)',
  engineDisplacementCC: 2995,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 344,
  maxTorqueNm: 500,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const AUDI_3_0_TFSI_349_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '3.0L V6 TFSI Turbocharged Petrol (8-Speed Tiptronic quattro AWD)',
  engineDisplacementCC: 2994,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 349,
  maxTorqueNm: 500,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Audi 2.9L Twin-Turbo V6 (2894 cc) - 444 bhp ---
const AUDI_2_9_TFSI_444_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '2.9L Twin-Turbocharged V6 TFSI Petrol (8-Speed Tiptronic quattro AWD)',
  engineDisplacementCC: 2894,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 444,
  maxTorqueNm: 600,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Audi 4.0L Twin-Turbo V8 (3996 cc) - 500 bhp / 648 bhp ---
const AUDI_4_0_TFSI_500_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '4.0L Twin-Turbocharged V8 TFSI Petrol (8-Speed Tiptronic quattro AWD)',
  engineDisplacementCC: 3996,
  cylinders: 8,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 500,
  maxTorqueNm: 770,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const AUDI_4_0_TFSI_648_AWD = {
  fuelType: 'Petrol' as const,
  engineName: '4.0L Twin-Turbocharged V8 TFSI Performance Petrol (8-Speed Tiptronic quattro AWD)',
  engineDisplacementCC: 3996,
  cylinders: 8,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 648,
  maxTorqueNm: 850,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Audi Electric Powertrains ---
const AUDI_EV_523_93KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Permanently Excited Dual Synchronous Electric Motors (quattro AWD, 93.4 kWh)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 523,
  maxTorqueNm: 630,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 93.4,
  electricMotorPowerBhp: 523,
  electricRangeKm: 388,
};

const AUDI_EV_637_93KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Permanently Excited Dual Synchronous Electric Motors RS (quattro AWD, 93.4 kWh)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 637,
  maxTorqueNm: 830,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 93.4,
  electricMotorPowerBhp: 637,
  electricRangeKm: 401,
};

const AUDI_EV_308_71KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Dual Asynchronous Electric Motors (quattro AWD, 71 kWh)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 308,
  maxTorqueNm: 540,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 71,
  electricMotorPowerBhp: 308,
  electricRangeKm: 379,
};

const AUDI_EV_402_95KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Dual Asynchronous Electric Motors 55 (quattro AWD, 95 kWh)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 402,
  maxTorqueNm: 664,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 95,
  electricMotorPowerBhp: 402,
  electricRangeKm: 484,
};

const AUDI_EV_335_95KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Dual Asynchronous Electric Motors Q8 50 (quattro AWD, 95 kWh)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 335,
  maxTorqueNm: 664,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 95,
  electricMotorPowerBhp: 335,
  electricRangeKm: 491,
};

const AUDI_EV_402_114KWH = {
  fuelType: 'Electric' as const,
  engineName: 'Dual Asynchronous Electric Motors Q8 55 (quattro AWD, 114 kWh)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 402,
  maxTorqueNm: 664,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 114,
  electricMotorPowerBhp: 402,
  electricRangeKm: 582,
};

// ============================================================================
// 1. AUDI Q3 (1 Variant)
// ============================================================================
export const AUDI_Q3_VARIANTS: CarVariant[] = [
  {
    id: 'audi-q3-nova-petrol-automatic-dct',
    modelId: 'audi-q3',
    generationId: null,
    name: 'Q3 Nova',
    fullName: 'Audi Q3 Nova 40 TFSI quattro DCT',
    slug: 'nova',
    trim: 'Nova',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 4425000,
      exShowroomLakh: 44.25,
      onRoadNashik: 6193000,
      onRoadNashikLakh: 61.93,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_201_AWD,
    performance: { mileageKmpl: 14.93, zeroToHundredSec: 7.3, topSpeedKmph: 222 },
    dimensions: {
      lengthMm: 4484,
      widthMm: 1849,
      heightMm: 1616,
      wheelbaseMm: 2680,
      groundClearanceMm: 170,
      kerbWeightKg: 1695,
      bootSpaceLitres: 530,
      fuelTankLitres: 60,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        tpms: 'standard',
        rearCamera: 'standard',
        frontParkingSensors: 'standard',
        rearParkingSensors: 'standard',
        hillDescentControl: 'standard',
      },
      exterior: {
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        roofRails: 'standard',
        poweredTailgate: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        leatherSeats: 'standard',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.1,
        digitalInstrumentCluster: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 10,
        premiumAudio: 'standard',
      },
      convenience: {
        keylessEntry: 'standard',
        pushButtonStart: 'standard',
        cruiseControl: 'standard',
        autoDimmingIRVM: 'standard',
        rainSensingWipers: 'standard',
        automaticHeadlights: 'standard',
      },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q3/q3.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q3 Nashik', url: 'https://www.carwale.com/audi-cars/q3/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 2. AUDI A4 (4 Variants)
// ============================================================================
const A4_DIMENSIONS = {
  lengthMm: 4762,
  widthMm: 1847,
  heightMm: 1433,
  wheelbaseMm: 2820,
  groundClearanceMm: 145,
  kerbWeightKg: 1555,
  bootSpaceLitres: 460,
  fuelTankLitres: 54,
};

export const AUDI_A4_VARIANTS: CarVariant[] = [
  {
    id: 'audi-a4-premium-40-tfsi',
    modelId: 'audi-a4',
    generationId: null,
    name: 'A4 Premium 40 TFSI',
    fullName: 'Audi A4 Premium 40 TFSI DCT',
    slug: 'premium-40-tfsi',
    trim: 'Premium',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 4602000,
      exShowroomLakh: 46.02,
      onRoadNashik: 5590000,
      onRoadNashikLakh: 55.90,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_201_FWD,
    performance: { mileageKmpl: 17.4, zeroToHundredSec: 7.1, topSpeedKmph: 241 },
    dimensions: A4_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10 },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/a4/a4-sedan.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi A4 Nashik', url: 'https://www.carwale.com/audi-cars/a4/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-a4-premium-plus-40-tfsi',
    modelId: 'audi-a4',
    generationId: null,
    name: 'A4 Premium Plus 40 TFSI',
    fullName: 'Audi A4 Premium Plus 40 TFSI DCT',
    slug: 'premium-plus-40-tfsi',
    trim: 'Premium Plus',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5085000,
      exShowroomLakh: 50.85,
      onRoadNashik: 6176000,
      onRoadNashikLakh: 61.76,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_201_FWD,
    performance: { mileageKmpl: 17.4, zeroToHundredSec: 7.1, topSpeedKmph: 241 },
    dimensions: A4_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/a4/a4-sedan.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi A4 Nashik', url: 'https://www.carwale.com/audi-cars/a4/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-a4-signature-edition',
    modelId: 'audi-a4',
    generationId: null,
    name: 'A4 Signature Edition',
    fullName: 'Audi A4 Signature Edition 40 TFSI DCT',
    slug: 'signature-edition',
    trim: 'Signature Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5296000,
      exShowroomLakh: 52.96,
      onRoadNashik: 6433000,
      onRoadNashikLakh: 64.33,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_201_FWD,
    performance: { mileageKmpl: 17.4, zeroToHundredSec: 7.1, topSpeedKmph: 241 },
    dimensions: A4_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/a4/a4-sedan.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi A4 Nashik', url: 'https://www.carwale.com/audi-cars/a4/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-a4-technology-40-tfsi',
    modelId: 'audi-a4',
    generationId: null,
    name: 'A4 Technology 40 TFSI',
    fullName: 'Audi A4 Technology 40 TFSI DCT',
    slug: 'technology-40-tfsi',
    trim: 'Technology',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5471000,
      exShowroomLakh: 54.71,
      onRoadNashik: 6646000,
      onRoadNashikLakh: 66.46,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_201_FWD,
    performance: { mileageKmpl: 17.4, zeroToHundredSec: 7.1, topSpeedKmph: 241 },
    dimensions: A4_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 19, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/a4/a4-sedan.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi A4 Nashik', url: 'https://www.carwale.com/audi-cars/a4/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 3. AUDI A6 (2 Variants)
// ============================================================================
const A6_DIMENSIONS = {
  lengthMm: 4939,
  widthMm: 1886,
  heightMm: 1457,
  wheelbaseMm: 2924,
  groundClearanceMm: 140,
  kerbWeightKg: 1780,
  bootSpaceLitres: 530,
  fuelTankLitres: 73,
};

export const AUDI_A6_VARIANTS: CarVariant[] = [
  {
    id: 'audi-a6-premium-plus-45-tfsi',
    modelId: 'audi-a6',
    generationId: null,
    name: 'A6 Premium Plus 45 TFSI',
    fullName: 'Audi A6 Premium Plus 45 TFSI DCT',
    slug: 'premium-plus-45-tfsi',
    trim: 'Premium Plus',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 6549000,
      exShowroomLakh: 65.49,
      onRoadNashik: 7706000,
      onRoadNashikLakh: 77.06,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_261_FWD,
    performance: { mileageKmpl: 14.0, zeroToHundredSec: 6.7, topSpeedKmph: 250 },
    dimensions: A6_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/a6/a6-sedan.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi A6 Nashik', url: 'https://www.carwale.com/audi-cars/a6/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-a6-technology-45-tfsi',
    modelId: 'audi-a6',
    generationId: null,
    name: 'A6 Technology 45 TFSI',
    fullName: 'Audi A6 Technology 45 TFSI DCT',
    slug: 'technology-45-tfsi',
    trim: 'Technology',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 7236000,
      exShowroomLakh: 72.36,
      onRoadNashik: 8514000,
      onRoadNashikLakh: 85.14,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_261_FWD,
    performance: { mileageKmpl: 14.0, zeroToHundredSec: 6.7, topSpeedKmph: 250 },
    dimensions: A6_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/a6/a6-sedan.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi A6 Nashik', url: 'https://www.carwale.com/audi-cars/a6/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 4. AUDI Q7 (4 Variants)
// ============================================================================
const Q7_DIMENSIONS = {
  lengthMm: 5064,
  widthMm: 1970,
  heightMm: 1703,
  wheelbaseMm: 2999,
  groundClearanceMm: 205,
  kerbWeightKg: 2165,
  bootSpaceLitres: 740,
  fuelTankLitres: 85,
};

export const AUDI_Q7_VARIANTS: CarVariant[] = [
  {
    id: 'audi-q7-premium-plus',
    modelId: 'audi-q7',
    generationId: null,
    name: 'Q7 Premium Plus',
    fullName: 'Audi Q7 Premium Plus 55 TFSI quattro',
    slug: 'premium-plus',
    trim: 'Premium Plus',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 8866000,
      exShowroomLakh: 88.66,
      onRoadNashik: 10400000,
      onRoadNashikLakh: 104.0,
      currency: 'INR',
    },
    powertrain: AUDI_3_0_TFSI_335_AWD,
    performance: { mileageKmpl: 11.2, zeroToHundredSec: 5.9, topSpeedKmph: 250 },
    dimensions: Q7_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q7/q7.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q7 Nashik', url: 'https://www.carwale.com/audi-cars/q7/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-q7-bold-edition',
    modelId: 'audi-q7',
    generationId: null,
    name: 'Q7 Bold Edition',
    fullName: 'Audi Q7 Bold Edition 55 TFSI quattro',
    slug: 'bold-edition',
    trim: 'Bold Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 9380000,
      exShowroomLakh: 93.80,
      onRoadNashik: 11000000,
      onRoadNashikLakh: 110.0,
      currency: 'INR',
    },
    powertrain: AUDI_3_0_TFSI_335_AWD,
    performance: { mileageKmpl: 11.2, zeroToHundredSec: 5.9, topSpeedKmph: 250 },
    dimensions: Q7_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q7/q7.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q7 Nashik', url: 'https://www.carwale.com/audi-cars/q7/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-q7-signature-edition',
    modelId: 'audi-q7',
    generationId: null,
    name: 'Q7 Signature Edition',
    fullName: 'Audi Q7 Signature Edition 55 TFSI quattro',
    slug: 'signature-edition',
    trim: 'Signature Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 9550000,
      exShowroomLakh: 95.50,
      onRoadNashik: 11200000,
      onRoadNashikLakh: 112.0,
      currency: 'INR',
    },
    powertrain: AUDI_3_0_TFSI_335_AWD,
    performance: { mileageKmpl: 11.2, zeroToHundredSec: 5.9, topSpeedKmph: 250 },
    dimensions: Q7_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q7/q7.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q7 Nashik', url: 'https://www.carwale.com/audi-cars/q7/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-q7-technology',
    modelId: 'audi-q7',
    generationId: null,
    name: 'Q7 Technology',
    fullName: 'Audi Q7 Technology 55 TFSI quattro',
    slug: 'technology',
    trim: 'Technology',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 9784000,
      exShowroomLakh: 97.84,
      onRoadNashik: 11400000,
      onRoadNashikLakh: 114.0,
      currency: 'INR',
    },
    powertrain: AUDI_3_0_TFSI_335_AWD,
    performance: { mileageKmpl: 11.2, zeroToHundredSec: 5.9, topSpeedKmph: 250 },
    dimensions: Q7_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', roofRails: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 19, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q7/q7.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q7 Nashik', url: 'https://www.carwale.com/audi-cars/q7/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 5. AUDI S5 SPORTBACK (2 Variants)
// ============================================================================
const S5_DIMENSIONS = {
  lengthMm: 4765,
  widthMm: 1845,
  heightMm: 1390,
  wheelbaseMm: 2825,
  groundClearanceMm: 120,
  kerbWeightKg: 1760,
  bootSpaceLitres: 465,
  fuelTankLitres: 58,
};

export const AUDI_S5_SPORTBACK_VARIANTS: CarVariant[] = [
  {
    id: 'audi-s5-sportback-3-0-tfsi-quattro',
    modelId: 'audi-s5-sportback',
    generationId: null,
    name: 'S5 Sportback 3.0 TFSI Quattro',
    fullName: 'Audi S5 Sportback 3.0 TFSI quattro Tiptronic',
    slug: '3-0-tfsi-quattro',
    trim: 'Standard',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 7732000,
      exShowroomLakh: 77.32,
      onRoadNashik: 8739000,
      onRoadNashikLakh: 87.39,
      currency: 'INR',
    },
    powertrain: AUDI_3_0_TFSI_349_AWD,
    performance: { mileageKmpl: 10.6, zeroToHundredSec: 4.8, topSpeedKmph: 250 },
    dimensions: S5_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/s5/s5-sportback.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi S5 Sportback Nashik', url: 'https://www.carwale.com/audi-cars/s5-sportback/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-s5-sportback-platinum-edition',
    modelId: 'audi-s5-sportback',
    generationId: null,
    name: 'S5 Sportback Platinum Edition',
    fullName: 'Audi S5 Sportback Platinum Edition 3.0 TFSI quattro',
    slug: 'platinum-edition',
    trim: 'Platinum Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 8479000,
      exShowroomLakh: 84.79,
      onRoadNashik: 9583000,
      onRoadNashikLakh: 95.83,
      currency: 'INR',
    },
    powertrain: AUDI_3_0_TFSI_349_AWD,
    performance: { mileageKmpl: 10.6, zeroToHundredSec: 4.8, topSpeedKmph: 250 },
    dimensions: S5_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 19, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/s5/s5-sportback.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi S5 Sportback Nashik', url: 'https://www.carwale.com/audi-cars/s5-sportback/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 6. AUDI Q3 SPORTBACK (3 Variants)
// ============================================================================
const Q3_SPORTBACK_DIMENSIONS = {
  lengthMm: 4500,
  widthMm: 1843,
  heightMm: 1567,
  wheelbaseMm: 2680,
  groundClearanceMm: 170,
  kerbWeightKg: 1700,
  bootSpaceLitres: 530,
  fuelTankLitres: 60,
};

export const AUDI_Q3_SPORTBACK_VARIANTS: CarVariant[] = [
  {
    id: 'audi-q3-sportback-signature-edition',
    modelId: 'audi-q3-sportback',
    generationId: null,
    name: 'Q3 Sportback Signature Edition',
    fullName: 'Audi Q3 Sportback Signature Edition 40 TFSI quattro',
    slug: 'signature-edition',
    trim: 'Signature Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5360000,
      exShowroomLakh: 53.60,
      onRoadNashik: 6377000,
      onRoadNashikLakh: 63.77,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_193_AWD,
    performance: { mileageKmpl: 14.93, zeroToHundredSec: 7.3, topSpeedKmph: 220 },
    dimensions: Q3_SPORTBACK_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 6, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q3/q3-sportback.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q3 Sportback Nashik', url: 'https://www.carwale.com/audi-cars/q3-sportback/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-q3-sportback-bold-edition',
    modelId: 'audi-q3-sportback',
    generationId: null,
    name: 'Q3 Sportback Bold Edition',
    fullName: 'Audi Q3 Sportback Bold Edition 40 TFSI quattro',
    slug: 'bold-edition',
    trim: 'Bold Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5390000,
      exShowroomLakh: 53.90,
      onRoadNashik: 6414000,
      onRoadNashikLakh: 64.14,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_193_AWD,
    performance: { mileageKmpl: 14.93, zeroToHundredSec: 7.3, topSpeedKmph: 220 },
    dimensions: Q3_SPORTBACK_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 6, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q3/q3-sportback.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q3 Sportback Nashik', url: 'https://www.carwale.com/audi-cars/q3-sportback/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-q3-sportback-technology-plus-s-line',
    modelId: 'audi-q3-sportback',
    generationId: null,
    name: 'Q3 Sportback Technology Plus S-line',
    fullName: 'Audi Q3 Sportback Technology Plus S-line 40 TFSI quattro',
    slug: 'technology-plus-s-line',
    trim: 'Technology Plus S-line',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 5428000,
      exShowroomLakh: 54.28,
      onRoadNashik: 6459000,
      onRoadNashikLakh: 64.59,
      currency: 'INR',
    },
    powertrain: AUDI_2_0_TFSI_193_AWD,
    performance: { mileageKmpl: 14.93, zeroToHundredSec: 7.3, topSpeedKmph: 220 },
    dimensions: Q3_SPORTBACK_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 6, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q3/q3-sportback.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q3 Sportback Nashik', url: 'https://www.carwale.com/audi-cars/q3-sportback/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 7. AUDI Q8 (1 Variant)
// ============================================================================
export const AUDI_Q8_VARIANTS: CarVariant[] = [
  {
    id: 'audi-q8-55-tfsi-quattro',
    modelId: 'audi-q8',
    generationId: null,
    name: 'Q8 55 TFSI quattro',
    fullName: 'Audi Q8 55 TFSI quattro Tiptronic',
    slug: '55-tfsi-quattro',
    trim: '55 TFSI quattro',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 11749000,
      exShowroomLakh: 117.49,
      onRoadNashik: 13600000,
      onRoadNashikLakh: 136.0,
      currency: 'INR',
    },
    powertrain: AUDI_3_0_TFSI_335_AWD,
    performance: { mileageKmpl: 9.8, zeroToHundredSec: 5.9, topSpeedKmph: 250 },
    dimensions: {
      lengthMm: 4986,
      widthMm: 1995,
      heightMm: 1705,
      wheelbaseMm: 2995,
      groundClearanceMm: 220,
      kerbWeightKg: 2170,
      bootSpaceLitres: 605,
      fuelTankLitres: 85,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 17, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q8/q8.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q8 Nashik', url: 'https://www.carwale.com/audi-cars/q8/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 8. AUDI A8 L (2 Variants)
// ============================================================================
const A8_L_DIMENSIONS = {
  lengthMm: 5320,
  widthMm: 1945,
  heightMm: 1488,
  wheelbaseMm: 3128,
  groundClearanceMm: 140,
  kerbWeightKg: 2075,
  bootSpaceLitres: 505,
  fuelTankLitres: 82,
};

export const AUDI_A8_L_VARIANTS: CarVariant[] = [
  {
    id: 'audi-a8-l-celebration-edition',
    modelId: 'audi-a8-l',
    generationId: null,
    name: 'A8 L Celebration Edition',
    fullName: 'Audi A8 L Celebration Edition 55 TFSI quattro',
    slug: 'celebration-edition',
    trim: 'Celebration Edition',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 13400000,
      exShowroomLakh: 134.00,
      onRoadNashik: 15100000,
      onRoadNashikLakh: 151.0,
      currency: 'INR',
    },
    powertrain: AUDI_3_0_TFSI_344_MHEV_AWD,
    performance: { mileageKmpl: 11.7, zeroToHundredSec: 5.7, topSpeedKmph: 250 },
    dimensions: A8_L_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 17, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/a8/a8-l.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi A8 L Nashik', url: 'https://www.carwale.com/audi-cars/a8-l/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-a8-l-technology',
    modelId: 'audi-a8-l',
    generationId: null,
    name: 'A8 L Technology',
    fullName: 'Audi A8 L Technology 55 TFSI quattro',
    slug: 'technology',
    trim: 'Technology',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 16300000,
      exShowroomLakh: 163.00,
      onRoadNashik: 18200000,
      onRoadNashikLakh: 182.0,
      currency: 'INR',
    },
    powertrain: AUDI_3_0_TFSI_344_MHEV_AWD,
    performance: { mileageKmpl: 11.7, zeroToHundredSec: 5.7, topSpeedKmph: 250 },
    dimensions: A8_L_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard', adaptiveCruiseControl: 'standard', adasLevel: 'Level 2' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 23, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', adaptiveCruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/a8/a8-l.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi A8 L Nashik', url: 'https://www.carwale.com/audi-cars/a8-l/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 9. AUDI RS5 (1 Variant)
// ============================================================================
export const AUDI_RS5_VARIANTS: CarVariant[] = [
  {
    id: 'audi-rs5-sportback',
    modelId: 'audi-rs5',
    generationId: null,
    name: 'RS5 Sportback',
    fullName: 'Audi RS5 Sportback 2.9 TFSI quattro Tiptronic',
    slug: 'sportback',
    trim: 'Sportback',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 11300000,
      exShowroomLakh: 113.00,
      onRoadNashik: 12700000,
      onRoadNashikLakh: 127.0,
      currency: 'INR',
    },
    powertrain: AUDI_2_9_TFSI_444_AWD,
    performance: { mileageKmpl: 10.8, zeroToHundredSec: 3.9, topSpeedKmph: 250 },
    dimensions: {
      lengthMm: 4783,
      widthMm: 1866,
      heightMm: 1399,
      wheelbaseMm: 2826,
      groundClearanceMm: 120,
      kerbWeightKg: 1810,
      bootSpaceLitres: 465,
      fuelTankLitres: 58,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 19, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/a5/rs-5-sportback.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi RS5 Nashik', url: 'https://www.carwale.com/audi-cars/rs5/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 10. AUDI RS Q8 PERFORMANCE (1 Variant)
// ============================================================================
export const AUDI_RS_Q8_PERFORMANCE_VARIANTS: CarVariant[] = [
  {
    id: 'audi-rs-q8-performance-4-0l-tfsi',
    modelId: 'audi-rs-q8-performance',
    generationId: null,
    name: 'RS Q8 Performance 4.0L TFSI',
    fullName: 'Audi RS Q8 Performance 4.0L TFSI quattro Tiptronic',
    slug: 'performance-4-0l-tfsi',
    trim: 'Performance',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 24000000,
      exShowroomLakh: 240.00,
      onRoadNashik: 28200000,
      onRoadNashikLakh: 282.0,
      currency: 'INR',
    },
    powertrain: AUDI_4_0_TFSI_648_AWD,
    performance: { mileageKmpl: 8.0, zeroToHundredSec: 3.6, topSpeedKmph: 305 },
    dimensions: {
      lengthMm: 5012,
      widthMm: 1998,
      heightMm: 1694,
      wheelbaseMm: 2998,
      groundClearanceMm: 212,
      kerbWeightKg: 2350,
      bootSpaceLitres: 605,
      fuelTankLitres: 85,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 22, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 23, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q8/rs-q8.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi RS Q8 Performance Nashik', url: 'https://www.carwale.com/audi-cars/rs-q8-performance/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 11. AUDI E-TRON GT (2 Variants)
// ============================================================================
const E_TRON_GT_DIMENSIONS = {
  lengthMm: 4989,
  widthMm: 1964,
  heightMm: 1413,
  wheelbaseMm: 2900,
  groundClearanceMm: 135,
  kerbWeightKg: 2350,
  bootSpaceLitres: 405,
  fuelTankLitres: null,
};

export const AUDI_E_TRON_GT_VARIANTS: CarVariant[] = [
  {
    id: 'audi-e-tron-gt-s',
    modelId: 'audi-e-tron-gt',
    generationId: null,
    name: 'e-tron GT S',
    fullName: 'Audi e-tron GT S quattro Electric',
    slug: 's',
    trim: 'S',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 17200000,
      exShowroomLakh: 172.00,
      onRoadNashik: 18100000,
      onRoadNashikLakh: 181.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_523_93KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 4.1, topSpeedKmph: 245 },
    dimensions: E_TRON_GT_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/e-tron-gt/e-tron-gt.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi e-tron GT Nashik', url: 'https://www.carwale.com/audi-cars/e-tron-gt/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-e-tron-gt-rs',
    modelId: 'audi-e-tron-gt',
    generationId: null,
    name: 'e-tron GT RS',
    fullName: 'Audi RS e-tron GT quattro Electric',
    slug: 'rs',
    trim: 'RS',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 19500000,
      exShowroomLakh: 195.00,
      onRoadNashik: 20500000,
      onRoadNashikLakh: 205.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_637_93KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 3.3, topSpeedKmph: 250 },
    dimensions: E_TRON_GT_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/e-tron-gt/rs-e-tron-gt.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi e-tron GT Nashik', url: 'https://www.carwale.com/audi-cars/e-tron-gt/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 12. AUDI E-TRON SPORTBACK (2 Variants)
// ============================================================================
const E_TRON_SPORTBACK_DIMENSIONS = {
  lengthMm: 4901,
  widthMm: 1935,
  heightMm: 1616,
  wheelbaseMm: 2928,
  groundClearanceMm: 172,
  kerbWeightKg: 2565,
  bootSpaceLitres: 615,
  fuelTankLitres: null,
};

export const AUDI_E_TRON_SPORTBACK_VARIANTS: CarVariant[] = [
  {
    id: 'audi-e-tron-sportback-55',
    modelId: 'audi-e-tron-sportback',
    generationId: null,
    name: 'e-tron Sportback 55',
    fullName: 'Audi e-tron Sportback 55 quattro Electric',
    slug: '55',
    trim: '55',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 11800000,
      exShowroomLakh: 118.00,
      onRoadNashik: 12700000,
      onRoadNashikLakh: 127.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_402_95KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 5.7, topSpeedKmph: 200 },
    dimensions: E_TRON_SPORTBACK_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/e-tron/e-tron-sportback.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi e-tron Sportback Nashik', url: 'https://www.carwale.com/audi-cars/e-tron-sportback/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-e-tron-sportback-55-technology',
    modelId: 'audi-e-tron-sportback',
    generationId: null,
    name: 'e-tron Sportback 55 Technology',
    fullName: 'Audi e-tron Sportback 55 Technology quattro Electric',
    slug: '55-technology',
    trim: '55 Technology',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 12400000,
      exShowroomLakh: 124.00,
      onRoadNashik: 13300000,
      onRoadNashikLakh: 133.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_402_95KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 5.7, topSpeedKmph: 200 },
    dimensions: E_TRON_SPORTBACK_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/e-tron/e-tron-sportback.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi e-tron Sportback Nashik', url: 'https://www.carwale.com/audi-cars/e-tron-sportback/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 13. AUDI E-TRON (3 Variants)
// ============================================================================
const E_TRON_DIMENSIONS = {
  lengthMm: 4901,
  widthMm: 1935,
  heightMm: 1629,
  wheelbaseMm: 2928,
  groundClearanceMm: 172,
  kerbWeightKg: 2565,
  bootSpaceLitres: 660,
  fuelTankLitres: null,
};

export const AUDI_E_TRON_VARIANTS: CarVariant[] = [
  {
    id: 'audi-e-tron-50',
    modelId: 'audi-e-tron',
    generationId: null,
    name: 'e-tron 50',
    fullName: 'Audi e-tron 50 quattro Electric (71 kWh)',
    slug: '50',
    trim: '50',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 10200000,
      exShowroomLakh: 102.00,
      onRoadNashik: 10800000,
      onRoadNashikLakh: 108.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_308_71KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 6.8, topSpeedKmph: 190 },
    dimensions: E_TRON_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 10, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/e-tron/e-tron.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi e-tron Nashik', url: 'https://www.carwale.com/audi-cars/e-tron/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-e-tron-55',
    modelId: 'audi-e-tron',
    generationId: null,
    name: 'e-tron 55',
    fullName: 'Audi e-tron 55 quattro Electric (95 kWh)',
    slug: '55',
    trim: '55',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 11600000,
      exShowroomLakh: 116.00,
      onRoadNashik: 12500000,
      onRoadNashikLakh: 125.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_402_95KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 5.7, topSpeedKmph: 200 },
    dimensions: E_TRON_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/e-tron/e-tron.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi e-tron Nashik', url: 'https://www.carwale.com/audi-cars/e-tron/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-e-tron-55-technology',
    modelId: 'audi-e-tron',
    generationId: null,
    name: 'e-tron 55 Technology',
    fullName: 'Audi e-tron 55 Technology quattro Electric (95 kWh)',
    slug: '55-technology',
    trim: '55 Technology',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 12200000,
      exShowroomLakh: 122.00,
      onRoadNashik: 13100000,
      onRoadNashikLakh: 131.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_402_95KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 5.7, topSpeedKmph: 200 },
    dimensions: E_TRON_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/e-tron/e-tron.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi e-tron Nashik', url: 'https://www.carwale.com/audi-cars/e-tron/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 14. AUDI Q8 E-TRON (2 Variants)
// ============================================================================
const Q8_E_TRON_DIMENSIONS = {
  lengthMm: 4915,
  widthMm: 1937,
  heightMm: 1633,
  wheelbaseMm: 2928,
  groundClearanceMm: 176,
  kerbWeightKg: 2585,
  bootSpaceLitres: 569,
  fuelTankLitres: null,
};

export const AUDI_Q8_E_TRON_VARIANTS: CarVariant[] = [
  {
    id: 'audi-q8-e-tron-50',
    modelId: 'audi-q8-e-tron',
    generationId: null,
    name: 'Q8 e-tron 50',
    fullName: 'Audi Q8 e-tron 50 quattro Electric (95 kWh)',
    slug: '50',
    trim: '50',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 11500000,
      exShowroomLakh: 115.00,
      onRoadNashik: 12100000,
      onRoadNashikLakh: 121.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_335_95KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 6.0, topSpeedKmph: 200 },
    dimensions: Q8_E_TRON_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q8-e-tron/q8-e-tron.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q8 e-tron Nashik', url: 'https://www.carwale.com/audi-cars/q8-e-tron/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-q8-e-tron-55',
    modelId: 'audi-q8-e-tron',
    generationId: null,
    name: 'Q8 e-tron 55',
    fullName: 'Audi Q8 e-tron 55 quattro Electric (114 kWh)',
    slug: '55',
    trim: '55',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 12700000,
      exShowroomLakh: 127.00,
      onRoadNashik: 13400000,
      onRoadNashikLakh: 134.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_402_114KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 5.6, topSpeedKmph: 200 },
    dimensions: Q8_E_TRON_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q8-e-tron/q8-e-tron.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q8 e-tron Nashik', url: 'https://www.carwale.com/audi-cars/q8-e-tron/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 15. AUDI Q8 SPORTBACK E-TRON (2 Variants)
// ============================================================================
const Q8_SPORTBACK_E_TRON_DIMENSIONS = {
  lengthMm: 4915,
  widthMm: 1937,
  heightMm: 1619,
  wheelbaseMm: 2928,
  groundClearanceMm: 176,
  kerbWeightKg: 2585,
  bootSpaceLitres: 528,
  fuelTankLitres: null,
};

export const AUDI_Q8_SPORTBACK_E_TRON_VARIANTS: CarVariant[] = [
  {
    id: 'audi-q8-sportback-e-tron-50',
    modelId: 'audi-q8-sportback-e-tron',
    generationId: null,
    name: 'Q8 Sportback e-tron 50',
    fullName: 'Audi Q8 Sportback e-tron 50 quattro Electric (95 kWh)',
    slug: '50',
    trim: '50',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 11800000,
      exShowroomLakh: 118.00,
      onRoadNashik: 12600000,
      onRoadNashikLakh: 126.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_335_95KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 6.0, topSpeedKmph: 200 },
    dimensions: Q8_SPORTBACK_E_TRON_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q8-e-tron/q8-sportback-e-tron.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q8 Sportback e-tron Nashik', url: 'https://www.carwale.com/audi-cars/q8-sportback-e-tron/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'audi-q8-sportback-e-tron-55',
    modelId: 'audi-q8-sportback-e-tron',
    generationId: null,
    name: 'Q8 Sportback e-tron 55',
    fullName: 'Audi Q8 Sportback e-tron 55 quattro Electric (114 kWh)',
    slug: '55',
    trim: '55',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 13100000,
      exShowroomLakh: 131.00,
      onRoadNashik: 13900000,
      onRoadNashikLakh: 139.0,
      currency: 'INR',
    },
    powertrain: AUDI_EV_402_114KWH,
    performance: { mileageKmpl: null, zeroToHundredSec: 5.6, topSpeedKmph: 200 },
    dimensions: Q8_SPORTBACK_E_TRON_DIMENSIONS,
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', laneKeepAssist: 'standard' },
      exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 16, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q8-e-tron/q8-sportback-e-tron.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi Q8 Sportback e-tron Nashik', url: 'https://www.carwale.com/audi-cars/q8-sportback-e-tron/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 16. AUDI SQ8 (1 Variant)
// ============================================================================
export const AUDI_SQ8_VARIANTS: CarVariant[] = [
  {
    id: 'audi-sq8-4-0-petrol-turbo-automatic',
    modelId: 'audi-sq8',
    generationId: null,
    name: 'SQ8 4.0 Petrol Turbo',
    fullName: 'Audi SQ8 4.0 TFSI quattro Tiptronic',
    slug: '4-0-petrol-turbo-automatic',
    trim: '4.0 TFSI quattro',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 18500000,
      exShowroomLakh: 185.00,
      onRoadNashik: 21100000,
      onRoadNashikLakh: 211.0,
      currency: 'INR',
    },
    powertrain: AUDI_4_0_TFSI_500_AWD,
    performance: { mileageKmpl: 8.5, zeroToHundredSec: 4.1, topSpeedKmph: 250 },
    dimensions: {
      lengthMm: 5006,
      widthMm: 1995,
      heightMm: 1708,
      wheelbaseMm: 2996,
      groundClearanceMm: 215,
      kerbWeightKg: 2270,
      bootSpaceLitres: 605,
      fuelTankLitres: 85,
    },
    features: makeStandardFeatures({
      safety: { airbagsCount: 8, tpms: 'standard', rearCamera: 'standard', threeSixtyCamera: 'standard', rearParkingSensors: 'standard', frontParkingSensors: 'standard', laneDepartureWarning: 'standard', hillDescentControl: 'standard' },
      exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard', ledDRLs: 'standard', sunroof: 'standard', panoramicSunroof: 'standard', poweredTailgate: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
      infotainment: { infotainmentScreenSizeInches: 10.1, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 17, premiumAudio: 'standard', connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
    }),
    sources: [
      { name: 'Audi India Official Portal', url: 'https://www.audi.in/in/web/en/models/q8/sq8.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Audi SQ8 Nashik', url: 'https://www.carwale.com/audi-cars/sq8/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];
