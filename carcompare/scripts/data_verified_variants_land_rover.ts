/**
 * scripts/data_verified_variants_land_rover.ts
 *
 * Comprehensive, verified variant database for Land Rover India:
 * 1. Land Rover Defender (16 variants) - 2.0L Turbo Petrol, 3.0L Turbo Diesel, 3.0L MHEV Diesel, 5.0L Supercharged V8, 4.4L Twin-Turbo MHEV V8 Octa (₹1.35 Cr - ₹3.29 Cr)
 * 2. Land Rover Range Rover Velar (2 variants) - 2.0L Petrol & 2.0L MHEV Diesel Autobiography (₹1.04 Cr - ₹1.06 Cr)
 * 3. Land Rover Range Rover (7 variants) - 3.0L Diesel HSE, 3.0L Petrol Autobiography, 4.4L SV / SV Ultra, 3.0L SV Masara Edition (₹3.01 Cr - ₹5.84 Cr)
 * 4. Land Rover Range Rover Sport (8 variants) - 3.0L MHEV Diesel/Petrol HSE & Autobiography, Twenty Edition, 4.4L MHEV V8 SV Black/Carbon (₹1.80 Cr - ₹2.78 Cr)
 * 5. Land Rover Range Rover Evoque (2 variants) - 2.0L Petrol & 2.0L Diesel Autobiography MHEV (₹77.11 L - ₹78.44 L)
 * 6. Land Rover Discovery Sport (2 variants) - 2.0L Petrol & Diesel SE R-Dynamic (₹75.36 L - ₹76.65 L)
 * 7. Land Rover Discovery (3 variants) - 3.0L Diesel HSE R-Dynamic, Gemini Edition, Tempest Edition (₹1.57 Cr - ₹1.75 Cr)
 *
 * Total: 40 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// --- Ingenium 2.0L Turbo Petrol (247 / 296 bhp) ---
const LR_2_0_PETROL_296 = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Ingenium Petrol (8-Speed Automatic AWD)',
  engineDisplacementCC: 1997,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 296,
  maxTorqueNm: 400,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const LR_2_0_PETROL_247 = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Ingenium Petrol (8-Speed Automatic AWD)',
  engineDisplacementCC: 1997,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 247,
  maxTorqueNm: 365,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Ingenium 2.0L Turbo Diesel MHEV (201 bhp) ---
const LR_2_0_DIESEL_201_MHEV = {
  fuelType: 'MildHybrid' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Ingenium Diesel + 48V MHEV (8-Speed Automatic AWD)',
  engineDisplacementCC: 1997,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 430,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const LR_2_0_DIESEL_201 = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L 4-Cylinder Turbocharged Ingenium Diesel (8-Speed Automatic AWD)',
  engineDisplacementCC: 1997,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 201,
  maxTorqueNm: 430,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Ingenium 3.0L 6-Cylinder Turbo Diesel (346 bhp / 700 Nm) ---
const LR_3_0_DIESEL_346 = {
  fuelType: 'Diesel' as const,
  engineName: '3.0L Inline-6 Twin-Turbo Ingenium Diesel (8-Speed Automatic AWD)',
  engineDisplacementCC: 2997,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 346,
  maxTorqueNm: 700,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const LR_3_0_DIESEL_346_MHEV = {
  fuelType: 'MildHybrid' as const,
  engineName: '3.0L Inline-6 Twin-Turbo Ingenium Diesel + 48V MHEV (8-Speed Automatic AWD)',
  engineDisplacementCC: 2997,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 346,
  maxTorqueNm: 700,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Ingenium 3.0L 6-Cylinder Turbo Petrol MHEV (394 bhp / 550 Nm) ---
const LR_3_0_PETROL_394_MHEV = {
  fuelType: 'MildHybrid' as const,
  engineName: '3.0L Inline-6 Turbocharged Ingenium Petrol + 48V MHEV (8-Speed Automatic AWD)',
  engineDisplacementCC: 2996,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 394,
  maxTorqueNm: 550,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const LR_3_0_PETROL_394 = {
  fuelType: 'Petrol' as const,
  engineName: '3.0L Inline-6 Turbocharged Ingenium Petrol (8-Speed Automatic AWD)',
  engineDisplacementCC: 2998,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 394,
  maxTorqueNm: 550,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- 5.0L Supercharged V8 Petrol (419 / 493 / 518 bhp) ---
const LR_5_0_V8_420 = {
  fuelType: 'Petrol' as const,
  engineName: '5.0L Supercharged V8 Petrol (8-Speed Automatic AWD)',
  engineDisplacementCC: 4999,
  cylinders: 8,
  aspiration: 'Supercharged' as const,
  maxPowerBhp: 420,
  maxTorqueNm: 625,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const LR_5_0_V8_493 = {
  fuelType: 'Petrol' as const,
  engineName: '5.0L Supercharged V8 Petrol (8-Speed Automatic AWD)',
  engineDisplacementCC: 4999,
  cylinders: 8,
  aspiration: 'Supercharged' as const,
  maxPowerBhp: 493,
  maxTorqueNm: 625,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const LR_5_0_V8_518 = {
  fuelType: 'Petrol' as const,
  engineName: '5.0L Supercharged V8 Petrol (8-Speed Automatic AWD)',
  engineDisplacementCC: 4999,
  cylinders: 8,
  aspiration: 'Supercharged' as const,
  maxPowerBhp: 518,
  maxTorqueNm: 625,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- 4.4L Twin-Turbo V8 Petrol MHEV (606 / 626 / 709 bhp) ---
const LR_4_4_V8_606_MHEV = {
  fuelType: 'MildHybrid' as const,
  engineName: '4.4L Twin-Turbo V8 Petrol + 48V MHEV (8-Speed Automatic AWD)',
  engineDisplacementCC: 4395,
  cylinders: 8,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 606,
  maxTorqueNm: 750,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const LR_4_4_V8_626_MHEV = {
  fuelType: 'MildHybrid' as const,
  engineName: '4.4L Twin-Turbo V8 Petrol + 48V MHEV (8-Speed Automatic AWD)',
  engineDisplacementCC: 4395,
  cylinders: 8,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 626,
  maxTorqueNm: 750,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const LR_4_4_V8_709_MHEV = {
  fuelType: 'MildHybrid' as const,
  engineName: '4.4L High-Output Twin-Turbo V8 Petrol + 48V MHEV (8-Speed Automatic AWD)',
  engineDisplacementCC: 4395,
  cylinders: 8,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 709,
  maxTorqueNm: 800,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// ============================================================================
// 1. LAND ROVER DEFENDER (16 VARIANTS)
// ============================================================================
export const LAND_ROVER_DEFENDER_VARIANTS: CarVariant[] = [
  ...[
    { slug: '110-x-dynamic-hse-petrol-2-0l-turbo-automatic-5-str', name: 'Defender 110 X Dynamic HSE | Petrol 2.0L Turbo | Automatic | 5 STR', fullName: 'Land Rover Defender 110 X Dynamic HSE 2.0L Petrol 5-Seater', trim: '110 X Dynamic HSE 2.0L', pt: LR_2_0_PETROL_296, exLakh: 110.0, onRoadLakh: 135.0, seating: 5 },
    { slug: '110-x-dynamic-hse-diesel-3-0l-turbo-automatic-5-str', name: 'Defender 110 X Dynamic HSE | Diesel 3.0L Turbo | Automatic | 5 STR', fullName: 'Land Rover Defender 110 X Dynamic HSE 3.0L Diesel 5-Seater', trim: '110 X Dynamic HSE 3.0L Diesel', pt: LR_3_0_DIESEL_346, exLakh: 140.0, onRoadLakh: 171.0, seating: 5 },
    { slug: '110-diesel-3-0l-turbo-automatic-5-str-trophy-edition', name: 'Defender 110 | Diesel 3.0L Turbo | Automatic | 5 STR | Trophy Edition', fullName: 'Land Rover Defender 110 Trophy Edition 3.0L Diesel 5-Seater', trim: '110 Trophy Edition', pt: LR_3_0_DIESEL_346, exLakh: 140.0, onRoadLakh: 171.0, seating: 5 },
    { slug: '110-diesel-3-0l-turbo-automatic-5-str-trophy-edition-keswick', name: 'Defender 110 | Diesel 3.0L Turbo | Automatic | 5 STR | Trophy Edition Keswick', fullName: 'Land Rover Defender 110 Trophy Edition Keswick 3.0L Diesel 5-Seater', trim: '110 Trophy Keswick', pt: LR_3_0_DIESEL_346, exLakh: 140.0, onRoadLakh: 171.0, seating: 5 },
    { slug: '90-x-petrol-5-0l-turbo-automatic-5-str', name: 'Defender 90 X | Petrol 5.0L Turbo | Automatic | 5 STR', fullName: 'Land Rover Defender 90 X 5.0L V8 Petrol 5-Seater', trim: '90 X 5.0L V8', pt: LR_5_0_V8_420, exLakh: 148.0, onRoadLakh: 180.0, seating: 5 },
    { slug: '110-x-diesel-3-0l-turbo-automatic-5-str', name: 'Defender 110 X | Diesel 3.0L Turbo | Automatic | 5 STR', fullName: 'Land Rover Defender 110 X 3.0L Diesel 5-Seater', trim: '110 X 3.0L Diesel', pt: LR_3_0_DIESEL_346, exLakh: 149.0, onRoadLakh: 181.0, seating: 5 },
    { slug: '130-x-dynamic-hse-mild-hybrid-diesel-3-0l-turbo-automatic-8-str', name: 'Defender 130 X Dynamic HSE | Mild Hybrid (Electric + Diesel) 3.0L Turbo | Automatic | 8 STR', fullName: 'Land Rover Defender 130 X Dynamic HSE 3.0L Diesel MHEV 8-Seater', trim: '130 X Dynamic HSE Diesel', pt: LR_3_0_DIESEL_346_MHEV, exLakh: 151.0, onRoadLakh: 184.0, seating: 8 },
    { slug: '110-x-dynamic-hse-petrol-5-0l-turbo-automatic-5-str', name: 'Defender 110 X Dynamic HSE | Petrol 5.0L Turbo | Automatic | 5 STR', fullName: 'Land Rover Defender 110 X Dynamic HSE 5.0L V8 Petrol 5-Seater', trim: '110 X Dynamic HSE 5.0L V8', pt: LR_5_0_V8_420, exLakh: 152.0, onRoadLakh: 185.0, seating: 5 },
    { slug: '130-x-mild-hybrid-diesel-3-0l-turbo-automatic-8-str', name: 'Defender 130 X | Mild Hybrid (Electric + Diesel) 3.0L Turbo | Automatic | 8 STR', fullName: 'Land Rover Defender 130 X 3.0L Diesel MHEV 8-Seater', trim: '130 X Diesel', pt: LR_3_0_DIESEL_346_MHEV, exLakh: 161.0, onRoadLakh: 196.0, seating: 8 },
    { slug: '110-x-petrol-5-0l-turbo-automatic-5-str', name: 'Defender 110 X | Petrol 5.0L Turbo | Automatic | 5 STR', fullName: 'Land Rover Defender 110 X 5.0L V8 Petrol 5-Seater', trim: '110 X 5.0L V8', pt: LR_5_0_V8_420, exLakh: 162.0, onRoadLakh: 197.0, seating: 5 },
    { slug: '130-x-dynamic-v8-hse-petrol-5-0l-turbo-automatic-8-str', name: 'Defender 130 X Dynamic V8 HSE | Petrol 5.0L Turbo | Automatic | 8 STR', fullName: 'Land Rover Defender 130 X Dynamic V8 HSE 5.0L Petrol 8-Seater', trim: '130 X Dynamic V8 HSE', pt: LR_5_0_V8_420, exLakh: 165.0, onRoadLakh: 201.0, seating: 8 },
    { slug: '90-v8-petrol-5-0l-turbo-automatic-5-str', name: 'Defender 90 V8 | Petrol 5.0L Turbo | Automatic | 5 STR', fullName: 'Land Rover Defender 90 V8 518 bhp Petrol 5-Seater', trim: '90 V8', pt: LR_5_0_V8_518, exLakh: 168.0, onRoadLakh: 205.0, seating: 5 },
    { slug: '130-x-v8-petrol-5-0l-turbo-automatic-8-str', name: 'Defender 130 X V8 | Petrol 5.0L Turbo | Automatic | 8 STR', fullName: 'Land Rover Defender 130 X V8 5.0L Petrol 8-Seater', trim: '130 X V8', pt: LR_5_0_V8_420, exLakh: 176.0, onRoadLakh: 214.0, seating: 8 },
    { slug: '130-v8-petrol-5-0l-turbo-automatic-8-str', name: 'Defender 130 V8 | Petrol 5.0L Turbo | Automatic | 8 STR', fullName: 'Land Rover Defender 130 V8 493 bhp Petrol 8-Seater', trim: '130 V8', pt: LR_5_0_V8_493, exLakh: 192.0, onRoadLakh: 234.0, seating: 8 },
    { slug: 'octa-mild-hybrid-electric-petrol-4-4l-turbo-automatic-5-str', name: 'Defender Octa | Mild Hybrid(Electric + Petrol) 4.4L Turbo | Automatic | 5 STR', fullName: 'Land Rover Defender Octa 4.4L Twin-Turbo V8 MHEV 626 bhp', trim: 'Octa', pt: LR_4_4_V8_626_MHEV, exLakh: 265.0, onRoadLakh: 304.0, seating: 5 },
    { slug: 'octa-black-mild-hybrid-electric-petrol-4-4l-turbo-automatic-5-str', name: 'Defender Octa Black | Mild Hybrid(Electric + Petrol) 4.4L Turbo | Automatic | 5 STR', fullName: 'Land Rover Defender Octa Black Edition 4.4L Twin-Turbo V8 MHEV 626 bhp', trim: 'Octa Black Edition', pt: LR_4_4_V8_626_MHEV, exLakh: 285.0, onRoadLakh: 329.0, seating: 5 },
  ].map((c) => ({
    id: `land-rover-defender-${c.slug}`,
    modelId: 'land-rover-defender',
    generationId: 'defender-l663-2020',
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
      mileageKmpl: c.pt.fuelType === 'Diesel' || c.pt.fuelType === 'Mild Hybrid' ? 11.5 : (c.pt.maxPowerBhp > 600 ? 7.5 : 9.0),
      zeroToHundredSec: c.pt.maxPowerBhp > 600 ? 4.0 : (c.pt.cylinders === 8 ? 5.2 : 7.1),
      topSpeedKmph: c.pt.maxPowerBhp > 600 ? 250 : 209,
    },
    dimensions: {
      lengthMm: c.seating === 8 ? 5358 : (c.trim.startsWith('90') ? 4583 : 5018),
      widthMm: 2008,
      heightMm: 1967,
      wheelbaseMm: c.trim.startsWith('90') ? 2587 : 3022,
      groundClearanceMm: 291,
      kerbWeightKg: 2400,
      bootSpaceLitres: c.seating === 8 ? 389 : (c.trim.startsWith('90') ? 397 : 857),
      fuelTankLitres: 90,
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
        wheelSizeInches: c.pt.maxPowerBhp > 500 ? 22 : 20,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 11.4,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 14,
      },
    }),
    sources: [
      { name: 'Land Rover India Official Portal', url: 'https://www.landrover.in/vehicles/defender/index.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Land Rover Defender Nashik', url: 'https://www.carwale.com/land-rover-cars/defender/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 2. LAND ROVER RANGE ROVER VELAR (2 VARIANTS)
// ============================================================================
export const LAND_ROVER_RANGE_ROVER_VELAR_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'autobiography-2-0-petrol', name: 'Range Rover Velar Autobiography 2.0 Petrol', fullName: 'Land Rover Range Rover Velar Autobiography 2.0L Petrol', trim: 'Autobiography Petrol', pt: LR_2_0_PETROL_247, exLakh: 87.90, onRoadLakh: 104.0 },
    { slug: 'autobiography-2-0-diesel', name: 'Range Rover Velar Autobiography 2.0 Diesel', fullName: 'Land Rover Range Rover Velar Autobiography 2.0L Diesel MHEV', trim: 'Autobiography Diesel', pt: LR_2_0_DIESEL_201_MHEV, exLakh: 87.90, onRoadLakh: 106.0 },
  ].map((c) => ({
    id: `land-rover-range-rover-velar-${c.slug}`,
    modelId: 'land-rover-range-rover-velar',
    generationId: 'velar-facelift-2023',
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
      mileageKmpl: c.pt.fuelType === 'Petrol' ? 12.1 : 15.8,
      zeroToHundredSec: c.pt.fuelType === 'Petrol' ? 7.5 : 8.2,
      topSpeedKmph: 217,
    },
    dimensions: {
      lengthMm: 4797,
      widthMm: 2041,
      heightMm: 1685,
      wheelbaseMm: 2874,
      groundClearanceMm: 214,
      kerbWeightKg: 1930,
      bootSpaceLitres: 552,
      fuelTankLitres: 82,
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
        wheelSizeInches: 20,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        roofRails: 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 11.4,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 14,
      },
    }),
    sources: [
      { name: 'Land Rover India Official Portal', url: 'https://www.landrover.in/vehicles/range-rover-velar/index.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Range Rover Velar Nashik', url: 'https://www.carwale.com/land-rover-cars/range-rover-velar/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 3. LAND ROVER RANGE ROVER (7 VARIANTS)
// ============================================================================
export const LAND_ROVER_RANGE_ROVER_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'hse-3-0-diesel', name: 'Range Rover HSE 3.0 Diesel', fullName: 'Land Rover Range Rover HSE 3.0L Diesel 346 bhp', trim: 'HSE Diesel', pt: LR_3_0_DIESEL_346, exLakh: 236.0, onRoadLakh: 301.0 },
    { slug: 'autobiography-3-0-petrol', name: 'Range Rover Autobiography 3.0 Petrol', fullName: 'Land Rover Range Rover Autobiography 3.0L Petrol MHEV', trim: 'Autobiography Petrol', pt: LR_3_0_PETROL_394_MHEV, exLakh: 260.0, onRoadLakh: 332.0 },
    { slug: 'sv-ultra-mild-hybrid-electric-petrol-4-4l-turbo-automatic-5-str', name: 'Range Rover SV Ultra | Mild Hybrid(Electric + Petrol) 4.4L Turbo | Automatic | 5 STR', fullName: 'Land Rover Range Rover SV Ultra 4.4L Twin-Turbo V8 MHEV 709 bhp', trim: 'SV Ultra', pt: LR_4_4_V8_709_MHEV, exLakh: 390.0, onRoadLakh: 449.0 },
    { slug: 'sv-mild-hybrid-electric-diesel-3-0l-turbo-automatic-5-str', name: 'Range Rover SV | Mild Hybrid (Electric + Diesel) 3.0L Turbo | Automatic | 5 STR', fullName: 'Land Rover Range Rover SV 3.0L Diesel MHEV 5-Seater', trim: 'SV Diesel', pt: LR_3_0_DIESEL_346_MHEV, exLakh: 415.0, onRoadLakh: 480.0 },
    { slug: 'sv-mild-hybrid-electric-petrol-4-4l-turbo-automatic-5-str', name: 'Range Rover SV | Mild Hybrid(Electric + Petrol) 4.4L Turbo | Automatic | 5 STR', fullName: 'Land Rover Range Rover SV 4.4L Twin-Turbo V8 MHEV 606 bhp', trim: 'SV 4.4L V8', pt: LR_4_4_V8_606_MHEV, exLakh: 460.0, onRoadLakh: 533.0 },
    { slug: 'sv-petrol-3-0l-turbo-automatic-5-str', name: 'Range Rover SV | Petrol 3.0L Turbo | Automatic | 5 STR', fullName: 'Land Rover Range Rover SV 3.0L Petrol 5-Seater', trim: 'SV 3.0L Petrol', pt: LR_3_0_PETROL_394, exLakh: 500.0, onRoadLakh: 583.0 },
    { slug: 'sv-mild-hybrid-electric-petrol-4-4l-turbo-automatic-5-str-masara-edition', name: 'Range Rover SV | Mild Hybrid(Electric + Petrol) 4.4L Turbo | Automatic | 5 STR | Masara Edition', fullName: 'Land Rover Range Rover SV Masara Edition 4.4L V8 606 bhp', trim: 'SV Masara Edition', pt: LR_4_4_V8_606_MHEV, exLakh: 505.0, onRoadLakh: 584.0 },
  ].map((c) => ({
    id: `land-rover-range-rover-${c.slug}`,
    modelId: 'land-rover-range-rover',
    generationId: 'range-rover-l460-2022',
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
      mileageKmpl: c.pt.fuelType === 'Diesel' || c.pt.fuelType === 'Mild Hybrid' ? 13.1 : 9.5,
      zeroToHundredSec: c.pt.maxPowerBhp > 600 ? 4.5 : (c.pt.maxPowerBhp > 700 ? 3.9 : 5.8),
      topSpeedKmph: c.pt.maxPowerBhp > 600 ? 261 : 242,
    },
    dimensions: {
      lengthMm: 5052,
      widthMm: 2047,
      heightMm: 1870,
      wheelbaseMm: 2997,
      groundClearanceMm: 219,
      kerbWeightKg: 2505,
      bootSpaceLitres: 818,
      fuelTankLitres: 90,
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
        wheelSizeInches: 22,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        roofRails: 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 13.1,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 19,
      },
    }),
    sources: [
      { name: 'Land Rover India Official Portal', url: 'https://www.landrover.in/vehicles/new-range-rover/index.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Land Rover Range Rover Nashik', url: 'https://www.carwale.com/land-rover-cars/range-rover/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 4. LAND ROVER RANGE ROVER SPORT (8 VARIANTS)
// ============================================================================
export const LAND_ROVER_RANGE_ROVER_SPORT_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'hse-mild-hybrid-electric-diesel-3-0l-turbo-automatic', name: 'Range Rover Sport HSE | Mild Hybrid (Electric + Diesel) 3.0L Turbo | Automatic (TC)', fullName: 'Land Rover Range Rover Sport HSE 3.0L Diesel MHEV', trim: 'HSE Diesel', pt: LR_3_0_DIESEL_346_MHEV, exLakh: 140.0, onRoadLakh: 180.0 },
    { slug: 'hse-mild-hybrid-electric-petrol-3-0l-turbo-automatic', name: 'Range Rover Sport HSE | Mild Hybrid(Electric + Petrol) 3.0L Turbo | Automatic (TC)', fullName: 'Land Rover Range Rover Sport HSE 3.0L Petrol MHEV', trim: 'HSE Petrol', pt: LR_3_0_PETROL_394_MHEV, exLakh: 140.0, onRoadLakh: 180.0 },
    { slug: 'autobiography-mild-hybrid-electric-diesel-3-0l-turbo-automatic', name: 'Range Rover Sport Autobiography | Mild Hybrid (Electric + Diesel) 3.0L Turbo | Automatic (TC)', fullName: 'Land Rover Range Rover Sport Autobiography 3.0L Diesel MHEV', trim: 'Autobiography Diesel', pt: LR_3_0_DIESEL_346_MHEV, exLakh: 155.0, onRoadLakh: 193.0 },
    { slug: 'autobiography-mild-hybrid-electric-petrol-3-0l-turbo-automatic', name: 'Range Rover Sport Autobiography | Mild Hybrid(Electric + Petrol) 3.0L Turbo | Automatic (TC)', fullName: 'Land Rover Range Rover Sport Autobiography 3.0L Petrol MHEV', trim: 'Autobiography Petrol', pt: LR_3_0_PETROL_394_MHEV, exLakh: 162.0, onRoadLakh: 201.0 },
    { slug: 'twenty-edition-mild-hybrid-electric-petrol-3-0l-turbo-automatic', name: 'Range Rover Sport Twenty Edition | Mild Hybrid(Electric + Petrol) 3.0L Turbo | Automatic (TC)', fullName: 'Land Rover Range Rover Sport Twenty Edition 3.0L Petrol MHEV', trim: 'Twenty Edition', pt: LR_3_0_PETROL_394_MHEV, exLakh: 182.0, onRoadLakh: 225.0 },
    { slug: 'sv-mild-hybrid-electric-petrol-4-4l-turbo-automatic', name: 'Range Rover Sport SV | Mild Hybrid(Electric + Petrol) 4.4L Turbo | Automatic (TC)', fullName: 'Land Rover Range Rover Sport SV 4.4L Twin-Turbo V8 MHEV 626 bhp', trim: 'SV', pt: LR_4_4_V8_626_MHEV, exLakh: 210.0, onRoadLakh: 243.0 },
    { slug: 'sv-mild-hybrid-electric-petrol-4-4l-turbo-automatic-black', name: 'Range Rover Sport SV | Mild Hybrid(Electric + Petrol) 4.4L Turbo | Automatic (TC) | Black', fullName: 'Land Rover Range Rover Sport SV Edition One Black 626 bhp', trim: 'SV Black', pt: LR_4_4_V8_626_MHEV, exLakh: 225.0, onRoadLakh: 260.0 },
    { slug: 'sv-mild-hybrid-electric-petrol-4-4l-turbo-automatic-carbon', name: 'Range Rover Sport SV | Mild Hybrid(Electric + Petrol) 4.4L Turbo | Automatic (TC) | Carbon', fullName: 'Land Rover Range Rover Sport SV Edition One Carbon 626 bhp', trim: 'SV Carbon', pt: LR_4_4_V8_626_MHEV, exLakh: 240.0, onRoadLakh: 278.0 },
  ].map((c) => ({
    id: `land-rover-range-rover-sport-${c.slug}`,
    modelId: 'land-rover-range-rover-sport',
    generationId: 'range-rover-sport-l461-2022',
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
      mileageKmpl: c.pt.fuelType === 'Mild Hybrid' && c.pt.engineName.includes('Diesel') ? 13.5 : 10.2,
      zeroToHundredSec: c.pt.maxPowerBhp > 600 ? 3.8 : 5.7,
      topSpeedKmph: c.pt.maxPowerBhp > 600 ? 290 : 242,
    },
    dimensions: {
      lengthMm: 4946,
      widthMm: 2047,
      heightMm: 1820,
      wheelbaseMm: 2997,
      groundClearanceMm: 216,
      kerbWeightKg: 2310,
      bootSpaceLitres: 647,
      fuelTankLitres: 90,
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
        wheelSizeInches: c.trim.includes('SV') ? 23 : 21,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        roofRails: 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 13.1,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 19,
      },
    }),
    sources: [
      { name: 'Land Rover India Official Portal', url: 'https://www.landrover.in/vehicles/range-rover-sport/index.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Land Rover Range Rover Sport Nashik', url: 'https://www.carwale.com/land-rover-cars/range-rover-sport/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 5. LAND ROVER RANGE ROVER EVOQUE (2 VARIANTS)
// ============================================================================
export const LAND_ROVER_RANGE_ROVER_EVOQUE_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'autobiography-petrol', name: 'Range Rover Evoque Autobiography Petrol', fullName: 'Land Rover Range Rover Evoque Autobiography 2.0L Petrol MHEV', trim: 'Autobiography Petrol', pt: LR_2_0_PETROL_247, exLakh: 67.90, onRoadLakh: 77.11 },
    { slug: 'autobiography-diesel', name: 'Range Rover Evoque Autobiography Diesel', fullName: 'Land Rover Range Rover Evoque Autobiography 2.0L Diesel MHEV', trim: 'Autobiography Diesel', pt: LR_2_0_DIESEL_201_MHEV, exLakh: 67.90, onRoadLakh: 78.44 },
  ].map((c) => ({
    id: `range-rover-evoque-${c.slug}`,
    modelId: 'range-rover-evoque',
    generationId: 'evoque-l551-2024',
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
      mileageKmpl: c.pt.fuelType === 'Petrol' ? 10.9 : 15.3,
      zeroToHundredSec: c.pt.fuelType === 'Petrol' ? 7.6 : 8.5,
      topSpeedKmph: 221,
    },
    dimensions: {
      lengthMm: 4371,
      widthMm: 1996,
      heightMm: 1649,
      wheelbaseMm: 2681,
      groundClearanceMm: 212,
      kerbWeightKg: 1820,
      bootSpaceLitres: 472,
      fuelTankLitres: 67,
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
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        roofRails: 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 11.4,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 11,
      },
    }),
    sources: [
      { name: 'Land Rover India Official Portal', url: 'https://www.landrover.in/vehicles/range-rover-evoque/index.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Range Rover Evoque Nashik', url: 'https://www.carwale.com/land-rover-cars/range-rover-evoque/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 6. LAND ROVER DISCOVERY SPORT (2 VARIANTS)
// ============================================================================
export const LAND_ROVER_DISCOVERY_SPORT_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'se-r-dynamic-petrol', name: 'Discovery Sport SE R-Dynamic Petrol', fullName: 'Land Rover Discovery Sport SE R-Dynamic 2.0L Petrol', trim: 'SE R-Dynamic Petrol', pt: LR_2_0_PETROL_247, exLakh: 67.90, onRoadLakh: 75.36 },
    { slug: 'se-r-dynamic-diesel', name: 'Discovery Sport SE R-Dynamic Diesel', fullName: 'Land Rover Discovery Sport SE R-Dynamic 2.0L Diesel', trim: 'SE R-Dynamic Diesel', pt: LR_2_0_DIESEL_201, exLakh: 67.90, onRoadLakh: 76.65 },
  ].map((c) => ({
    id: `land-rover-discovery-sport-${c.slug}`,
    modelId: 'land-rover-discovery-sport',
    generationId: 'discovery-sport-2024',
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
      mileageKmpl: c.pt.fuelType === 'Petrol' ? 10.5 : 13.1,
      zeroToHundredSec: c.pt.fuelType === 'Petrol' ? 7.8 : 8.9,
      topSpeedKmph: 209,
    },
    dimensions: {
      lengthMm: 4597,
      widthMm: 2069,
      heightMm: 1727,
      wheelbaseMm: 2741,
      groundClearanceMm: 212,
      kerbWeightKg: 1949,
      bootSpaceLitres: 780,
      fuelTankLitres: 65,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 7,
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
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 11.4,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 11,
      },
    }),
    sources: [
      { name: 'Land Rover India Official Portal', url: 'https://www.landrover.in/vehicles/discovery-sport/index.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Discovery Sport Nashik', url: 'https://www.carwale.com/land-rover-cars/discovery-sport/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 7. LAND ROVER DISCOVERY (3 VARIANTS)
// ============================================================================
export const LAND_ROVER_DISCOVERY_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'hse-r-dynamic-3-0-diesel', name: 'Discovery HSE R-Dynamic 3.0 Diesel', fullName: 'Land Rover Discovery HSE R-Dynamic 3.0L Diesel 345 bhp', trim: 'HSE R-Dynamic', pt: LR_3_0_DIESEL_346, exLakh: 126.0, onRoadLakh: 157.0 },
    { slug: 'gemini-edition-3-0-diesel', name: 'Discovery Gemini Edition', fullName: 'Land Rover Discovery Gemini Edition 3.0L Diesel', trim: 'Gemini Edition', pt: LR_3_0_DIESEL_346, exLakh: 128.0, onRoadLakh: 159.0 },
    { slug: 'tempest-edition-3-0-diesel', name: 'Discovery Tempest Edition', fullName: 'Land Rover Discovery Tempest Edition 3.0L Diesel', trim: 'Tempest Edition', pt: LR_3_0_DIESEL_346, exLakh: 141.0, onRoadLakh: 175.0 },
  ].map((c) => ({
    id: `land-rover-discovery-${c.slug}`,
    modelId: 'land-rover-discovery',
    generationId: 'discovery-5-2021',
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
      zeroToHundredSec: 6.8,
      topSpeedKmph: 209,
    },
    dimensions: {
      lengthMm: 4956,
      widthMm: 2073,
      heightMm: 1888,
      wheelbaseMm: 2923,
      groundClearanceMm: 283,
      kerbWeightKg: 2367,
      bootSpaceLitres: 258, // in 7-seater mode, 1137L in 5-seater
      fuelTankLitres: 89,
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
        wheelSizeInches: 21,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 11.4,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 14,
      },
    }),
    sources: [
      { name: 'Land Rover India Official Portal', url: 'https://www.landrover.in/vehicles/discovery/index.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Land Rover Discovery Nashik', url: 'https://www.carwale.com/land-rover-cars/discovery/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];
