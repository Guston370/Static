/**
 * scripts/data_verified_variants_mg.ts
 *
 * Comprehensive, verified variant database for MG India (Morris Garages):
 * 1. MG Hector Tomahawk EV (4 variants) - 69.2 kWh Battery (517 km, 201 bhp, 5 & 7 STR)
 * 2. MG Windsor EV (6 variants) - 38.0 kWh & 52.9 kWh Battery (331 - 449 km, 134 bhp)
 * 3. MG Hector (9 variants) - 1.5L Turbo Petrol (141 bhp, 250 Nm, 6MT & CVT; Style, Select, Smart, Sharp, Savvy, Snowstorm, Blackstorm)
 * 4. MG Majestor (3 variants) - 2.0L Twin-Turbo Diesel (212 bhp, 478.5 Nm, 8-Speed AT, 2WD & 4WD, 6 & 7 STR)
 * 5. MG Comet EV (5 variants) - 17.3 & 17.4 kWh Battery (230 km, 41 bhp, Fast Charging)
 * 6. MG Cyberster (2 variants) - 77.0 kWh Dual Motor AWD (503 bhp, 0-100 in 3.2s)
 * 7. MG Hector Tomahawk PHEV (2 variants) - 1.5L Turbo + Plug-in Hybrid (101 bhp + Electric Motor, Automatic)
 * 8. MG M9 (2 variants) - 90.0 kWh Battery Ultra-Luxury Electric MPV (548 km, 242 bhp)
 * 9. MG ZS EV (7 variants) - 50.3 kWh Battery (461 km, 174 bhp, Fast Charging; Executive, Excite Pro, Exclusive Plus, Essence, 100-Year)
 * 10. MG Astor (11 variants) - 1.5L VTi-TECH Petrol (108 bhp, 144 Nm, 5MT & CVT; Sprint, Shine, Select, Sharp Pro, Savvy Pro)
 * 11. MG Hector Plus (6 variants) - 1.5L Turbo Petrol (141 bhp, 250 Nm, 6MT & CVT, 6 & 7 STR; Sharp Pro, Savvy Pro)
 *
 * Total: 57 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// --- 1. MG Hector Tomahawk EV (69.2 kWh / 201 bhp) ---
const MG_HECTOR_TOMAHAWK_EV = {
  fuelType: 'Electric' as const,
  engineName: 'Permanent Magnet Synchronous Motor + 69.2 kWh Lithium-Ion Battery (Automatic Single-Speed)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 310,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 69.2,
  electricMotorPowerBhp: 201,
  electricRangeKm: 517,
};

// --- 2. MG Windsor EV (38.0 kWh / 52.9 kWh, 134 bhp) ---
const MG_WINDSOR_EV_38 = {
  fuelType: 'Electric' as const,
  engineName: 'Permanent Magnet Synchronous Motor + 38.0 kWh LFP Battery (Automatic Single-Speed)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 134,
  maxTorqueNm: 200,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 38.0,
  electricMotorPowerBhp: 134,
  electricRangeKm: 331,
};

const MG_WINDSOR_EV_53 = {
  fuelType: 'Electric' as const,
  engineName: 'Permanent Magnet Synchronous Motor + 52.9 kWh Prismatic Battery (Automatic Single-Speed)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 134,
  maxTorqueNm: 200,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 52.9,
  electricMotorPowerBhp: 134,
  electricRangeKm: 449,
};

// --- 3. MG Hector 1.5L Turbo Petrol (141 bhp / 250 Nm) ---
const MG_HECTOR_1_5_TURBO_6MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L 4-Cylinder Turbocharged Intercooled Petrol (6-Speed Manual)',
  engineDisplacementCC: 1451,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 141,
  maxTorqueNm: 250,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const MG_HECTOR_1_5_TURBO_CVT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L 4-Cylinder Turbocharged Intercooled Petrol (CVT Automatic)',
  engineDisplacementCC: 1451,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 141,
  maxTorqueNm: 250,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- 4. MG Majestor 2.0L Twin-Turbo Diesel (212 bhp / 478.5 Nm) ---
const MG_MAJESTOR_2_0_DIESEL_2WD_8AT = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L Twin-Turbo 4-Cylinder Diesel (8-Speed Automatic, 2WD)',
  engineDisplacementCC: 1996,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 212,
  maxTorqueNm: 478.5,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const MG_MAJESTOR_2_0_DIESEL_4WD_8AT = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L Twin-Turbo 4-Cylinder Diesel (8-Speed Automatic with BorgWarner 4WD)',
  engineDisplacementCC: 1996,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 212,
  maxTorqueNm: 478.5,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- 5. MG Comet EV (17.3 / 17.4 kWh, 41 bhp) ---
const MG_COMET_EV_17 = {
  fuelType: 'Electric' as const,
  engineName: 'Single Electric Motor + 17.3 kWh Prismatic Battery (Automatic)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 41,
  maxTorqueNm: 110,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 17.3,
  electricMotorPowerBhp: 41,
  electricRangeKm: 230,
};

const MG_COMET_EV_FC_17 = {
  fuelType: 'Electric' as const,
  engineName: 'Single Electric Motor + 17.4 kWh Battery with Fast Charging Support (Automatic)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 41,
  maxTorqueNm: 110,
  transmission: 'Automatic' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: 17.4,
  electricMotorPowerBhp: 41,
  electricRangeKm: 230,
};

// --- 6. MG Cyberster (77 kWh, 503 bhp Dual Motor AWD) ---
const MG_CYBERSTER_77_AWD = {
  fuelType: 'Electric' as const,
  engineName: 'Dual Permanent Magnet Synchronous Motors + 77.0 kWh Ultra-Thin Battery (AWD Automatic)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 503,
  maxTorqueNm: 725,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 77.0,
  electricMotorPowerBhp: 503,
  electricRangeKm: 509,
};

// --- 7. MG Hector Tomahawk PHEV ---
const MG_HECTOR_TOMAHAWK_PHEV = {
  fuelType: 'Hybrid' as const,
  engineName: '1.5L Turbo Petrol + Dedicated Electric Motor Plug-in Hybrid (e-CVT Automatic)',
  engineDisplacementCC: 1498,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 101,
  maxTorqueNm: 125,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 21.4,
  electricMotorPowerBhp: 180,
  electricRangeKm: 110,
};

// --- 8. MG M9 (90 kWh, 242 bhp) ---
const MG_M9_EV = {
  fuelType: 'Electric' as const,
  engineName: 'Electric Motor + 90.0 kWh Ternary Lithium Battery (Automatic Single-Speed)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 242,
  maxTorqueNm: 350,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 90.0,
  electricMotorPowerBhp: 242,
  electricRangeKm: 548,
};

// --- 9. MG ZS EV (50.3 kWh, 174 bhp) ---
const MG_ZS_EV_50 = {
  fuelType: 'Electric' as const,
  engineName: 'Permanent Magnet Synchronous Motor + 50.3 kWh Prismatic Battery (Automatic)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 174,
  maxTorqueNm: 280,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 50.3,
  electricMotorPowerBhp: 174,
  electricRangeKm: 461,
};

// --- 10. MG Astor 1.5L NA Petrol (108 bhp / 144 Nm) ---
const MG_ASTOR_1_5_NA_5MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L VTi-TECH 4-Cylinder Naturally Aspirated Petrol (5-Speed Manual)',
  engineDisplacementCC: 1498,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 108,
  maxTorqueNm: 144,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const MG_ASTOR_1_5_NA_CVT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L VTi-TECH 4-Cylinder Naturally Aspirated Petrol (CVT Automatic with 8-Step Mode)',
  engineDisplacementCC: 1498,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 108,
  maxTorqueNm: 144,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// ============================================================================
// 1. MG HECTOR TOMAHAWK EV (4 VARIANTS)
// ============================================================================
export const MG_HECTOR_TOMAHAWK_EV_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'excite-69-2-kwh-7-str', name: 'Hector Tomahawk EV Excite | 69.2 kWh | 7 STR', fullName: 'MG Hector Tomahawk EV Excite 69.2 kWh 7-Seater', trim: 'Excite 7 STR', pt: MG_HECTOR_TOMAHAWK_EV, exLakh: 19.99, onRoadLakh: 20.81, seating: 7 },
    { slug: 'exclusive-69-2-kwh-7-str', name: 'Hector Tomahawk EV Exclusive | 69.2 kWh | 7 STR', fullName: 'MG Hector Tomahawk EV Exclusive 69.2 kWh 7-Seater', trim: 'Exclusive 7 STR', pt: MG_HECTOR_TOMAHAWK_EV, exLakh: 22.49, onRoadLakh: 23.43, seating: 7 },
    { slug: 'essence-69-2-kwh-5-str', name: 'Hector Tomahawk EV Essence | 69.2 kWh | 5 STR', fullName: 'MG Hector Tomahawk EV Essence 69.2 kWh 5-Seater', trim: 'Essence 5 STR', pt: MG_HECTOR_TOMAHAWK_EV, exLakh: 23.49, onRoadLakh: 24.48, seating: 5 },
    { slug: 'essence-69-2-kwh-7-str', name: 'Hector Tomahawk EV Essence | 69.2 kWh | 7 STR', fullName: 'MG Hector Tomahawk EV Essence 69.2 kWh 7-Seater', trim: 'Essence 7 STR', pt: MG_HECTOR_TOMAHAWK_EV, exLakh: 23.99, onRoadLakh: 25.00, seating: 7 },
  ].map((c) => ({
    id: `mg-hector-tomahawk-ev-${c.slug}`,
    modelId: 'mg-hector-tomahawk-ev',
    generationId: 'tomahawk-ev-2025',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 8.2,
      topSpeedKmph: 175,
    },
    dimensions: {
      lengthMm: 4699,
      widthMm: 1835,
      heightMm: 1760,
      wheelbaseMm: 2750,
      groundClearanceMm: 195,
      kerbWeightKg: 1850,
      bootSpaceLitres: c.seating === 5 ? 587 : 155,
      fuelTankLitres: null,
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
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'panoramic',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: c.trim.includes('Essence') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: 14.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 8,
      },
    }),
    sources: [
      { name: 'MG India Official', url: 'https://www.mgmotor.co.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Hector Tomahawk EV Nashik', url: 'https://www.carwale.com/mg-cars/hector-tomahawk-ev/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 2. MG WINDSOR EV (6 VARIANTS)
// ============================================================================
export const MG_WINDSOR_EV_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'excite-38-kwh', name: 'Windsor EV Excite | 38.0 kWh', fullName: 'MG Windsor EV Excite 38 kWh', trim: 'Excite', pt: MG_WINDSOR_EV_38, exLakh: 14.99, onRoadLakh: 15.58 },
    { slug: 'exclusive-38-kwh', name: 'Windsor EV Exclusive | 38.0 kWh', fullName: 'MG Windsor EV Exclusive 38 kWh', trim: 'Exclusive', pt: MG_WINDSOR_EV_38, exLakh: 16.35, onRoadLakh: 16.98 },
    { slug: 'essence-38-kwh', name: 'Windsor EV Essence | 38.0 kWh', fullName: 'MG Windsor EV Essence 38 kWh', trim: 'Essence', pt: MG_WINDSOR_EV_38, exLakh: 17.35, onRoadLakh: 18.03 },
    { slug: 'exclusive-pro-52-9-kwh', name: 'Windsor EV Exclusive Pro | 52.9 kWh', fullName: 'MG Windsor EV Exclusive Pro 52.9 kWh', trim: 'Exclusive Pro', pt: MG_WINDSOR_EV_53, exLakh: 18.25, onRoadLakh: 18.97 },
    { slug: 'indulge-edition-38-kwh', name: 'Windsor EV Indulge Edition | 38.0 kWh', fullName: 'MG Windsor EV Indulge Edition 38 kWh', trim: 'Indulge Edition', pt: MG_WINDSOR_EV_38, exLakh: 18.35, onRoadLakh: 19.07 },
    { slug: 'essence-pro-52-9-kwh', name: 'Windsor EV Essence Pro | 52.9 kWh', fullName: 'MG Windsor EV Essence Pro 52.9 kWh', trim: 'Essence Pro', pt: MG_WINDSOR_EV_53, exLakh: 19.35, onRoadLakh: 20.12 },
  ].map((c) => ({
    id: `mg-windsor-ev-${c.slug}`,
    modelId: 'mg-windsor-ev',
    generationId: 'windsor-2024',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 9.8,
      topSpeedKmph: 155,
    },
    dimensions: {
      lengthMm: 4295,
      widthMm: 1850,
      heightMm: 1677,
      wheelbaseMm: 2700,
      groundClearanceMm: 186,
      kerbWeightKg: 1540,
      bootSpaceLitres: 604,
      fuelTankLitres: null,
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
        wheelSizeInches: 18,
        alloyWheels: !c.trim.startsWith('Excite') ? 'standard' : 'not_available',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: !c.trim.startsWith('Excite') ? 'panoramic' : 'not_available', // Aero Lounge glass roof
        roofRails: 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: c.trim.includes('Essence') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: 15.6,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: c.trim.includes('Essence') ? 9 : 6,
      },
    }),
    sources: [
      { name: 'MG India Official Portal', url: 'https://www.mgmotor.co.in/vehicles/windsorev', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG Windsor EV Nashik', url: 'https://www.carwale.com/mg-cars/windsor-ev/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 3. MG HECTOR (9 VARIANTS)
// ============================================================================
export const MG_HECTOR_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'style-petrol-turbo-manual', name: 'Hector Style | Petrol Turbo | Manual', fullName: 'MG Hector Style 1.5L Turbo 6MT', trim: 'Style', pt: MG_HECTOR_1_5_TURBO_6MT, exLakh: 13.99, onRoadLakh: 14.23 },
    { slug: 'select-pro-petrol-turbo-manual', name: 'Hector Select Pro | Petrol Turbo | Manual', fullName: 'MG Hector Select Pro 1.5L Turbo 6MT', trim: 'Select Pro', pt: MG_HECTOR_1_5_TURBO_6MT, exLakh: 15.30, onRoadLakh: 17.51 },
    { slug: 'smart-pro-petrol-turbo-manual', name: 'Hector Smart Pro | Petrol Turbo | Manual', fullName: 'MG Hector Smart Pro 1.5L Turbo 6MT', trim: 'Smart Pro', pt: MG_HECTOR_1_5_TURBO_6MT, exLakh: 16.35, onRoadLakh: 18.72 },
    { slug: 'smart-pro-petrol-turbo-automatic-cvt', name: 'Hector Smart Pro | Petrol Turbo | Automatic (CVT)', fullName: 'MG Hector Smart Pro 1.5L Turbo CVT', trim: 'Smart Pro CVT', pt: MG_HECTOR_1_5_TURBO_CVT, exLakh: 17.55, onRoadLakh: 20.12 },
    { slug: 'sharp-pro-petrol-turbo-manual', name: 'Hector Sharp Pro | Petrol Turbo | Manual', fullName: 'MG Hector Sharp Pro 1.5L Turbo 6MT', trim: 'Sharp Pro', pt: MG_HECTOR_1_5_TURBO_6MT, exLakh: 18.05, onRoadLakh: 20.71 },
    { slug: 'sharp-pro-petrol-turbo-automatic-cvt', name: 'Hector Sharp Pro | Petrol Turbo | Automatic (CVT)', fullName: 'MG Hector Sharp Pro 1.5L Turbo CVT', trim: 'Sharp Pro CVT', pt: MG_HECTOR_1_5_TURBO_CVT, exLakh: 19.18, onRoadLakh: 21.99 },
    { slug: 'savvy-pro-petrol-turbo-automatic-cvt', name: 'Hector Savvy Pro | Petrol Turbo | Automatic (CVT)', fullName: 'MG Hector Savvy Pro 1.5L Turbo CVT ADAS', trim: 'Savvy Pro CVT', pt: MG_HECTOR_1_5_TURBO_CVT, exLakh: 20.08, onRoadLakh: 23.04 },
    { slug: 'snowstorm-petrol-turbo-automatic-cvt', name: 'Hector Snowstorm | Petrol Turbo | Automatic (CVT)', fullName: 'MG Hector Snowstorm Edition 1.5L Turbo CVT', trim: 'Snowstorm', pt: MG_HECTOR_1_5_TURBO_CVT, exLakh: 20.60, onRoadLakh: 23.63 },
    { slug: 'blackstorm-petrol-turbo-automatic-cvt', name: 'Hector Blackstorm | Petrol Turbo | Automatic (CVT)', fullName: 'MG Hector Blackstorm Edition 1.5L Turbo CVT', trim: 'Blackstorm', pt: MG_HECTOR_1_5_TURBO_CVT, exLakh: 20.60, onRoadLakh: 23.63 },
  ].map((c) => ({
    id: `mg-hector-${c.slug}`,
    modelId: 'mg-hector',
    generationId: 'hector-facelift-2023',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: 13.8,
      zeroToHundredSec: 10.5,
      topSpeedKmph: 180,
    },
    dimensions: {
      lengthMm: 4699,
      widthMm: 1835,
      heightMm: 1760,
      wheelbaseMm: 2750,
      groundClearanceMm: 192,
      kerbWeightKg: 1540,
      bootSpaceLitres: 587,
      fuelTankLitres: 60,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: !c.trim.startsWith('Style') ? 'standard' : 'not_available',
        tpms: !c.trim.startsWith('Style') ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: 18,
        alloyWheels: !c.trim.startsWith('Style') ? 'standard' : 'not_available',
        ledHeadlights: !c.trim.startsWith('Style') ? 'standard' : 'not_available',
        ledDRLs: 'standard',
        sunroof: c.trim.includes('Sharp') || c.trim.includes('Savvy') || c.trim.includes('storm') ? 'panoramic' : 'not_available',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: c.trim.includes('Sharp') || c.trim.includes('Savvy') || c.trim.includes('storm') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: 14.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 8,
      },
    }),
    sources: [
      { name: 'MG India Official Portal', url: 'https://www.mgmotor.co.in/vehicles/mghector', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG Hector Nashik', url: 'https://www.carwale.com/mg-cars/hector/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 4. MG MAJESTOR (3 VARIANTS)
// ============================================================================
export const MG_MAJESTOR_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'savvy-2wd-diesel-2-0l-turbo-automatic-6-str', name: 'Majestor Savvy | 2WD Diesel 2.0L Turbo | Automatic | 6 STR', fullName: 'MG Majestor Savvy 2.0L Twin-Turbo 2WD 8AT 6-Seater', trim: 'Savvy 2WD 6 STR', pt: MG_MAJESTOR_2_0_DIESEL_2WD_8AT, exLakh: 43.50, onRoadLakh: 51.58, seating: 6 },
    { slug: 'savvy-2wd-diesel-2-0l-turbo-automatic-7-str', name: 'Majestor Savvy | 2WD Diesel 2.0L Turbo | Automatic | 7 STR', fullName: 'MG Majestor Savvy 2.0L Twin-Turbo 2WD 8AT 7-Seater', trim: 'Savvy 2WD 7 STR', pt: MG_MAJESTOR_2_0_DIESEL_2WD_8AT, exLakh: 43.50, onRoadLakh: 51.58, seating: 7 },
    { slug: 'savvy-4wd-diesel-2-0l-turbo-automatic-7-str', name: 'Majestor Savvy | 4WD Diesel 2.0L Turbo | Automatic | 7 STR', fullName: 'MG Majestor Savvy 2.0L Twin-Turbo 4WD 8AT 7-Seater', trim: 'Savvy 4WD 7 STR', pt: MG_MAJESTOR_2_0_DIESEL_4WD_8AT, exLakh: 46.00, onRoadLakh: 54.58, seating: 7 },
  ].map((c) => ({
    id: `mg-majestor-${c.slug}`,
    modelId: 'mg-majestor',
    generationId: 'majestor-2025',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: 12.0,
      zeroToHundredSec: 10.8,
      topSpeedKmph: 190,
    },
    dimensions: {
      lengthMm: 4985,
      widthMm: 1926,
      heightMm: 1867,
      wheelbaseMm: 2950,
      groundClearanceMm: 210,
      kerbWeightKg: 2200,
      bootSpaceLitres: 343,
      fuelTankLitres: 75,
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
        wheelSizeInches: 19,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'panoramic',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 12.3,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 12,
      },
    }),
    sources: [
      { name: 'MG India Official', url: 'https://www.mgmotor.co.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG Majestor Nashik', url: 'https://www.carwale.com/mg-cars/majestor/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 5. MG COMET EV (5 VARIANTS)
// ============================================================================
export const MG_COMET_EV_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'executive-17-3-kwh', name: 'Comet EV Executive | 17.3 kWh', fullName: 'MG Comet EV Executive 17.3 kWh', trim: 'Executive', pt: MG_COMET_EV_17, exLakh: 6.99, onRoadLakh: 8.20 },
    { slug: 'excite-17-3-kwh', name: 'Comet EV Excite | 17.3 kWh', fullName: 'MG Comet EV Excite 17.3 kWh', trim: 'Excite', pt: MG_COMET_EV_17, exLakh: 7.99, onRoadLakh: 9.37 },
    { slug: 'excite-fc-17-4-kwh', name: 'Comet EV Excite FC | 17.4 kWh', fullName: 'MG Comet EV Excite Fast Charging 17.4 kWh', trim: 'Excite FC', pt: MG_COMET_EV_FC_17, exLakh: 8.24, onRoadLakh: 9.65 },
    { slug: 'exclusive-17-3-kwh', name: 'Comet EV Exclusive | 17.3 kWh | Dual Tone', fullName: 'MG Comet EV Exclusive Dual Tone 17.3 kWh', trim: 'Exclusive Dual Tone', pt: MG_COMET_EV_17, exLakh: 8.79, onRoadLakh: 10.30 },
    { slug: 'exclusive-fc-17-4-kwh', name: 'Comet EV Exclusive FC | 17.4 kWh | Dual Tone', fullName: 'MG Comet EV Exclusive FC Dual Tone 17.4 kWh', trim: 'Exclusive FC Dual Tone', pt: MG_COMET_EV_FC_17, exLakh: 9.14, onRoadLakh: 10.68 },
  ].map((c) => ({
    id: `mg-comet-ev-${c.slug}`,
    modelId: 'mg-comet-ev',
    generationId: 'comet-2023',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 15.0,
      topSpeedKmph: 100,
    },
    dimensions: {
      lengthMm: 2974,
      widthMm: 1505,
      heightMm: 1640,
      wheelbaseMm: 2010,
      groundClearanceMm: 165,
      kerbWeightKg: 815,
      bootSpaceLitres: null,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 2,
        abs: 'standard',
        esc: 'not_available',
        hillAssist: 'standard',
        rearCamera: c.trim.includes('Exclusive') ? 'standard' : 'not_available',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 12,
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
      },
      interior: {
        airConditioning: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: !c.trim.startsWith('Executive') ? 10.25 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !c.trim.startsWith('Executive') ? 'standard' : 'not_available',
        appleCarPlay: !c.trim.startsWith('Executive') ? 'standard' : 'not_available',
        wirelessAndroidAuto: !c.trim.startsWith('Executive') ? 'standard' : 'not_available',
        wirelessAppleCarPlay: !c.trim.startsWith('Executive') ? 'standard' : 'not_available',
        speakerCount: 2,
      },
    }),
    sources: [
      { name: 'MG India Official Portal', url: 'https://www.mgmotor.co.in/vehicles/comet-ev', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG Comet EV Nashik', url: 'https://www.carwale.com/mg-cars/comet-ev/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 6. MG CYBERSTER (2 VARIANTS)
// ============================================================================
export const MG_CYBERSTER_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'gt-77-kwh', name: 'Cyberster GT | 77.0 kWh | Dual Tone', fullName: 'MG Cyberster GT Dual Motor AWD 77 kWh', trim: 'GT', pt: MG_CYBERSTER_77_AWD, exLakh: 79.00, onRoadLakh: 87.20 },
    { slug: 'couture-edition-77-kwh', name: 'Cyberster Couture Edition | 77.0 kWh | Dual Tone', fullName: 'MG Cyberster Couture Edition Dual Motor AWD 77 kWh', trim: 'Couture Edition', pt: MG_CYBERSTER_77_AWD, exLakh: 83.75, onRoadLakh: 92.43 },
  ].map((c) => ({
    id: `mg-cyberster-${c.slug}`,
    modelId: 'mg-cyberster',
    generationId: 'cyberster-2025',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 3.2,
      topSpeedKmph: 200,
    },
    dimensions: {
      lengthMm: 4535,
      widthMm: 1913,
      heightMm: 1329,
      wheelbaseMm: 2690,
      groundClearanceMm: 110,
      kerbWeightKg: 1985,
      bootSpaceLitres: 249,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 4,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 20,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.25,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        speakerCount: 8,
      },
    }),
    sources: [
      { name: 'MG India Official', url: 'https://www.mgmotor.co.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG Cyberster Nashik', url: 'https://www.carwale.com/mg-cars/cyberster/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 7. MG HECTOR TOMAHAWK PHEV (2 VARIANTS)
// ============================================================================
export const MG_HECTOR_TOMAHAWK_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'exclusive-phev-automatic', name: 'Hector Tomahawk PHEV Exclusive | Plug-in Hybrid | Automatic', fullName: 'MG Hector Tomahawk PHEV Exclusive Plug-in Hybrid', trim: 'Exclusive PHEV', pt: MG_HECTOR_TOMAHAWK_PHEV, exLakh: 27.50, onRoadLakh: 30.54 },
    { slug: 'essence-phev-automatic', name: 'Hector Tomahawk PHEV Essence | Plug-in Hybrid | Automatic', fullName: 'MG Hector Tomahawk PHEV Essence Plug-in Hybrid', trim: 'Essence PHEV', pt: MG_HECTOR_TOMAHAWK_PHEV, exLakh: 29.80, onRoadLakh: 33.01 },
  ].map((c) => ({
    id: `mg-hector-tomahawk-${c.slug}`,
    modelId: 'mg-hector-tomahawk',
    generationId: 'tomahawk-phev-2025',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: 24.5,
      zeroToHundredSec: 8.5,
      topSpeedKmph: 185,
    },
    dimensions: {
      lengthMm: 4699,
      widthMm: 1835,
      heightMm: 1760,
      wheelbaseMm: 2750,
      groundClearanceMm: 195,
      kerbWeightKg: 1780,
      bootSpaceLitres: 500,
      fuelTankLitres: 52,
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
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'panoramic',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 14.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 8,
      },
    }),
    sources: [
      { name: 'MG India Official', url: 'https://www.mgmotor.co.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG Hector Tomahawk Nashik', url: 'https://www.carwale.com/mg-cars/hector-tomahawk/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 8. MG M9 (2 VARIANTS)
// ============================================================================
export const MG_M9_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'presidential-limo-90-kwh', name: 'M9 Presidential Limo | 90.0 kWh', fullName: 'MG M9 Presidential Limo 90 kWh Ultra-Luxury MPV', trim: 'Presidential Limo', pt: MG_M9_EV, exLakh: 76.50, onRoadLakh: 84.28 },
    { slug: 'couture-edition-90-kwh', name: 'M9 Couture Edition | 90.0 kWh', fullName: 'MG M9 Couture Edition 90 kWh Ultra-Luxury MPV', trim: 'Couture Edition', pt: MG_M9_EV, exLakh: 81.50, onRoadLakh: 89.76 },
  ].map((c) => ({
    id: `mg-m9-${c.slug}`,
    modelId: 'mg-m9',
    generationId: 'm9-2025',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 7.9,
      topSpeedKmph: 180,
    },
    dimensions: {
      lengthMm: 5270,
      widthMm: 2000,
      heightMm: 1840,
      wheelbaseMm: 3200,
      groundClearanceMm: 160,
      kerbWeightKg: 2530,
      bootSpaceLitres: 466,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 8,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 19,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'panoramic',
        roofRails: 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 12.3,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        speakerCount: 12,
      },
    }),
    sources: [
      { name: 'MG India Official', url: 'https://www.mgmotor.co.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG M9 Nashik', url: 'https://www.carwale.com/mg-cars/m9/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 9. MG ZS EV (7 VARIANTS)
// ============================================================================
export const MG_ZS_EV_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'executive-50-3-kwh', name: 'ZS EV Executive | 50.3 kWh', fullName: 'MG ZS EV Executive 50.3 kWh', trim: 'Executive', pt: MG_ZS_EV_50, exLakh: 18.98, onRoadLakh: 19.15 },
    { slug: 'excite-pro-50-3-kwh', name: 'ZS EV Excite Pro | 50.3 kWh', fullName: 'MG ZS EV Excite Pro 50.3 kWh', trim: 'Excite Pro', pt: MG_ZS_EV_50, exLakh: 19.78, onRoadLakh: 19.94 },
    { slug: 'exclusive-plus-50-3-kwh-dark-grey', name: 'ZS EV Exclusive Plus | 50.3 kWh | Dark Grey', fullName: 'MG ZS EV Exclusive Plus 50.3 kWh Dark Grey', trim: 'Exclusive Plus', pt: MG_ZS_EV_50, exLakh: 20.80, onRoadLakh: 20.99 },
    { slug: 'exclusive-plus-50-3-kwh-dual-tone-iconic-ivory', name: 'ZS EV Exclusive Plus | 50.3 kWh | Dual Tone | Iconic Ivory', fullName: 'MG ZS EV Exclusive Plus Dual Tone Ivory 50.3 kWh', trim: 'Exclusive Plus Dual Tone', pt: MG_ZS_EV_50, exLakh: 20.80, onRoadLakh: 20.99 },
    { slug: '100-year-50-3-kwh-dual-tone', name: 'ZS EV 100-Year | 50.3 kWh | Dual Tone', fullName: 'MG ZS EV 100-Year Limited Edition 50.3 kWh', trim: '100-Year Edition', pt: MG_ZS_EV_50, exLakh: 20.80, onRoadLakh: 20.99 },
    { slug: 'essence-50-3-kwh-dark-grey', name: 'ZS EV Essence | 50.3 kWh | Dark Grey', fullName: 'MG ZS EV Essence 50.3 kWh Dark Grey', trim: 'Essence Dark Grey', pt: MG_ZS_EV_50, exLakh: 21.85, onRoadLakh: 22.04 },
    { slug: 'essence-50-3-kwh-iconic-ivory', name: 'ZS EV Essence | 50.3 kWh | Iconic Ivory', fullName: 'MG ZS EV Essence 50.3 kWh Iconic Ivory', trim: 'Essence Ivory', pt: MG_ZS_EV_50, exLakh: 21.85, onRoadLakh: 22.04 },
  ].map((c) => ({
    id: `mg-zs-ev-${c.slug}`,
    modelId: 'mg-zs-ev',
    generationId: 'zs-ev-facelift-2022',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 8.5,
      topSpeedKmph: 175,
    },
    dimensions: {
      lengthMm: 4323,
      widthMm: 1809,
      heightMm: 1649,
      wheelbaseMm: 2581,
      groundClearanceMm: 177,
      kerbWeightKg: 1570,
      bootSpaceLitres: 470,
      fuelTankLitres: null,
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
        wheelSizeInches: 17,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: !c.trim.startsWith('Executive') ? 'panoramic' : 'not_available',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.1,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 6,
      },
    }),
    sources: [
      { name: 'MG India Official Portal', url: 'https://www.mgmotor.co.in/vehicles/zsev', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG ZS EV Nashik', url: 'https://www.carwale.com/mg-cars/zs-ev/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 10. MG ASTOR (11 VARIANTS)
// ============================================================================
export const MG_ASTOR_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'sprint-petrol-1-5l-manual-ivory', name: 'Astor Sprint | Petrol 1.5L | Manual | Ivory', fullName: 'MG Astor Sprint 1.5L Petrol 5MT Ivory', trim: 'Sprint', pt: MG_ASTOR_1_5_NA_5MT, exLakh: 9.98, onRoadLakh: 11.42 },
    { slug: 'shine-petrol-1-5l-manual-ivory', name: 'Astor Shine | Petrol 1.5L | Manual | Ivory', fullName: 'MG Astor Shine 1.5L Petrol 5MT Ivory', trim: 'Shine', pt: MG_ASTOR_1_5_NA_5MT, exLakh: 11.68, onRoadLakh: 13.43 },
    { slug: 'select-petrol-1-5l-manual-ivory', name: 'Astor Select | Petrol 1.5L | Manual | Ivory', fullName: 'MG Astor Select 1.5L Petrol 5MT Ivory', trim: 'Select MT', pt: MG_ASTOR_1_5_NA_5MT, exLakh: 12.75, onRoadLakh: 14.66 },
    { slug: 'select-petrol-1-5l-automatic-cvt-ivory', name: 'Astor Select | Petrol 1.5L | Automatic (CVT) | Ivory', fullName: 'MG Astor Select 1.5L Petrol CVT Ivory', trim: 'Select CVT', pt: MG_ASTOR_1_5_NA_CVT, exLakh: 13.93, onRoadLakh: 16.02 },
    { slug: 'sharp-pro-petrol-1-5l-manual-ivory', name: 'Astor Sharp Pro | Petrol 1.5L | Manual | Ivory', fullName: 'MG Astor Sharp Pro 1.5L Petrol 5MT Ivory', trim: 'Sharp Pro MT', pt: MG_ASTOR_1_5_NA_5MT, exLakh: 13.73, onRoadLakh: 15.79 },
    { slug: 'sharp-pro-petrol-1-5l-automatic-cvt-ivory', name: 'Astor Sharp Pro | Petrol 1.5L | Automatic (CVT) | Ivory', fullName: 'MG Astor Sharp Pro 1.5L Petrol CVT Ivory', trim: 'Sharp Pro CVT', pt: MG_ASTOR_1_5_NA_CVT, exLakh: 14.89, onRoadLakh: 17.13 },
    { slug: 'sharp-pro-petrol-1-5l-automatic-cvt-dual-tone-ivory', name: 'Astor Sharp Pro | Petrol 1.5L | Automatic (CVT) | Dual Tone | Ivory', fullName: 'MG Astor Sharp Pro 1.5L CVT Dual Tone Ivory', trim: 'Sharp Pro Dual Tone', pt: MG_ASTOR_1_5_NA_CVT, exLakh: 15.10, onRoadLakh: 17.37 },
    { slug: 'savvy-pro-petrol-1-5l-automatic-cvt-ivory', name: 'Astor Savvy Pro | Petrol 1.5L | Automatic (CVT) | Ivory', fullName: 'MG Astor Savvy Pro 1.5L CVT Ivory ADAS', trim: 'Savvy Pro Ivory', pt: MG_ASTOR_1_5_NA_CVT, exLakh: 15.68, onRoadLakh: 18.04 },
    { slug: 'savvy-pro-petrol-1-5l-automatic-cvt-sangria', name: 'Astor Savvy Pro | Petrol 1.5L | Automatic (CVT) | Sangria', fullName: 'MG Astor Savvy Pro 1.5L CVT Sangria Red ADAS', trim: 'Savvy Pro Sangria', pt: MG_ASTOR_1_5_NA_CVT, exLakh: 15.68, onRoadLakh: 18.04 },
    { slug: 'savvy-pro-petrol-1-5l-automatic-cvt-dual-tone-ivory', name: 'Astor Savvy Pro | Petrol 1.5L | Automatic (CVT) | Dual Tone | Ivory', fullName: 'MG Astor Savvy Pro 1.5L CVT Dual Tone Ivory ADAS', trim: 'Savvy Pro Dual Tone Ivory', pt: MG_ASTOR_1_5_NA_CVT, exLakh: 15.89, onRoadLakh: 18.28 },
    { slug: 'savvy-pro-petrol-1-5l-automatic-cvt-dual-tone-sangria', name: 'Astor Savvy Pro | Petrol 1.5L | Automatic (CVT) | Dual Tone | Sangria', fullName: 'MG Astor Savvy Pro 1.5L CVT Dual Tone Sangria ADAS', trim: 'Savvy Pro Dual Tone Sangria', pt: MG_ASTOR_1_5_NA_CVT, exLakh: 15.89, onRoadLakh: 18.28 },
  ].map((c) => ({
    id: `mg-astor-${c.slug}`,
    modelId: 'mg-astor',
    generationId: 'astor-2021',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: 15.4,
      zeroToHundredSec: 13.2,
      topSpeedKmph: 170,
    },
    dimensions: {
      lengthMm: 4323,
      widthMm: 1809,
      heightMm: 1650,
      wheelbaseMm: 2585,
      groundClearanceMm: 180,
      kerbWeightKg: 1320,
      bootSpaceLitres: 488,
      fuelTankLitres: 48,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: c.trim.includes('Savvy') || c.trim.includes('Sharp') ? 6 : 2,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: !c.trim.startsWith('Sprint') ? 'standard' : 'not_available',
        tpms: !c.trim.startsWith('Sprint') ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: 17,
        alloyWheels: !c.trim.startsWith('Sprint') ? 'standard' : 'not_available',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: c.trim.includes('Select') || c.trim.includes('Sharp') || c.trim.includes('Savvy') ? 'panoramic' : 'not_available',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: c.trim.includes('Savvy') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.1,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 6,
      },
    }),
    sources: [
      { name: 'MG India Official Portal', url: 'https://www.mgmotor.co.in/vehicles/mgastor', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG Astor Nashik', url: 'https://www.carwale.com/mg-cars/astor/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 11. MG HECTOR PLUS (6 VARIANTS)
// ============================================================================
export const MG_HECTOR_PLUS_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'sharp-pro-1-5-turbo-petrol-6-str', name: 'Hector Plus Sharp Pro | 1.5 Turbo Petrol 6 STR', fullName: 'MG Hector Plus Sharp Pro 1.5L Turbo 6MT 6-Seater', trim: 'Sharp Pro 6 STR', pt: MG_HECTOR_1_5_TURBO_6MT, exLakh: 15.00, onRoadLakh: 17.29, seating: 6 },
    { slug: 'sharp-pro-1-5-turbo-petrol-cvt-6-str', name: 'Hector Plus Sharp Pro | 1.5 Turbo Petrol CVT 6 STR', fullName: 'MG Hector Plus Sharp Pro 1.5L Turbo CVT 6-Seater', trim: 'Sharp Pro CVT 6 STR', pt: MG_HECTOR_1_5_TURBO_CVT, exLakh: 16.15, onRoadLakh: 18.60, seating: 6 },
    { slug: 'savvy-pro-1-5-turbo-petrol-cvt-6-str', name: 'Hector Plus Savvy Pro | 1.5 Turbo Petrol CVT 6 STR', fullName: 'MG Hector Plus Savvy Pro 1.5L Turbo CVT 6-Seater ADAS', trim: 'Savvy Pro CVT 6 STR', pt: MG_HECTOR_1_5_TURBO_CVT, exLakh: 17.00, onRoadLakh: 19.50, seating: 6 },
    { slug: 'sharp-pro-petrol-turbo-manual-7-str', name: 'Hector Plus Sharp Pro | Petrol Turbo | Manual | 7 STR', fullName: 'MG Hector Plus Sharp Pro 1.5L Turbo 6MT 7-Seater', trim: 'Sharp Pro 7 STR', pt: MG_HECTOR_1_5_TURBO_6MT, exLakh: 18.55, onRoadLakh: 21.29, seating: 7 },
    { slug: 'sharp-pro-petrol-turbo-cvt-automatic-7-str', name: 'Hector Plus Sharp Pro | Petrol Turbo | CVT Speed Automatic (CVT) | 7 STR', fullName: 'MG Hector Plus Sharp Pro 1.5L Turbo CVT 7-Seater', trim: 'Sharp Pro CVT 7 STR', pt: MG_HECTOR_1_5_TURBO_CVT, exLakh: 19.68, onRoadLakh: 22.58, seating: 7 },
    { slug: 'savvy-pro-petrol-turbo-cvt-automatic-7-str', name: 'Hector Plus Savvy Pro | Petrol Turbo | CVT Speed Automatic (CVT) | 7 STR', fullName: 'MG Hector Plus Savvy Pro 1.5L Turbo CVT 7-Seater ADAS', trim: 'Savvy Pro CVT 7 STR', pt: MG_HECTOR_1_5_TURBO_CVT, exLakh: 20.60, onRoadLakh: 23.63, seating: 7 },
  ].map((c) => ({
    id: `mg-hector-plus-${c.slug}`,
    modelId: 'mg-hector-plus',
    generationId: 'hector-plus-2023',
    name: c.name,
    fullName: c.fullName,
    slug: c.slug,
    trim: c.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(c.exLakh * 100000),
      exShowroomLakh: c.exLakh,
      onRoadNashik: Math.round(c.onRoadLakh * 100000),
      onRoadNashikLakh: c.onRoadLakh,
      currency: 'INR',
    },
    powertrain: c.pt,
    performance: {
      mileageKmpl: 13.5,
      zeroToHundredSec: 10.9,
      topSpeedKmph: 180,
    },
    dimensions: {
      lengthMm: 4720,
      widthMm: 1835,
      heightMm: 1760,
      wheelbaseMm: 2750,
      groundClearanceMm: 192,
      kerbWeightKg: 1590,
      bootSpaceLitres: 155,
      fuelTankLitres: 60,
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
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'panoramic',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 14.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 8,
      },
    }),
    sources: [
      { name: 'MG India Official Portal', url: 'https://www.mgmotor.co.in/vehicles/mghectorplus', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale MG Hector Plus Nashik', url: 'https://www.carwale.com/mg-cars/hector-plus/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];
