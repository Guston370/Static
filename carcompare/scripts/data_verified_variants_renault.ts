/**
 * scripts/data_verified_variants_renault.ts
 *
 * Comprehensive, verified variant database for Renault India:
 * 1. Renault Triber (18 variants) - 1.0L Energy Petrol (71 bhp 5MT/AMT), 1.0L CNG (71 bhp 5MT), 1.0L Turbo Petrol (99 bhp 5MT/CVT & Turbo CNG)
 * 2. Renault Duster (22 variants) - 1.0L Turbo (99 bhp 6MT), 1.3L Turbo (160 bhp 6MT/DCT), 1.8L Strong Hybrid (160 bhp AT)
 * 3. Renault Kwid (6 variants) - 1.0L SCe Petrol (68 bhp 5MT/AMT) & 1.0L CNG (68 bhp 5MT)
 * 4. Renault Kiger (23 variants) - 1.0L Energy (71 bhp 5MT/AMT), 1.0L CNG (71 bhp 5MT), 1.0L Turbo (99 bhp 5MT/CVT)
 *
 * Total: 69 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// --- 1.0L Energy NA Petrol (Triber & Kiger) ---
const RENAULT_1_0_NA_5MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Energy 3-Cylinder Naturally Aspirated Petrol (5-Speed Manual)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 71,
  maxTorqueNm: 96,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const RENAULT_1_0_NA_5AMT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Energy 3-Cylinder Naturally Aspirated Petrol (5-Speed EASY-R AMT)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 71,
  maxTorqueNm: 96,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- 1.0L Energy CNG (Triber & Kiger) ---
const RENAULT_1_0_CNG_5MT = {
  fuelType: 'CNG' as const,
  engineName: '1.0L Energy Bi-Fuel CNG 3-Cylinder Engine (5-Speed Manual)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 71,
  maxTorqueNm: 96,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- 1.0L Turbo Petrol (Triber 99 bhp / 180 Nm) ---
const RENAULT_1_0_TURBO_TRIBER_5MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Energy Turbo 3-Cylinder Petrol (5-Speed Manual)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 99,
  maxTorqueNm: 180,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const RENAULT_1_0_TURBO_TRIBER_CVT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Energy Turbo 3-Cylinder Petrol (X-TRONIC CVT)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 99,
  maxTorqueNm: 180,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const RENAULT_1_0_TURBO_CNG_5MT = {
  fuelType: 'CNG' as const,
  engineName: '1.0L Turbo Bi-Fuel CNG Engine (5-Speed Manual)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 99,
  maxTorqueNm: 180,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- 1.0L Turbo Petrol (Kiger 99 bhp / 160 Nm MT, 152 Nm CVT) ---
const RENAULT_1_0_TURBO_KIGER_5MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Turbo 3-Cylinder Petrol (5-Speed Manual)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 99,
  maxTorqueNm: 160,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const RENAULT_1_0_TURBO_KIGER_CVT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Turbo 3-Cylinder Petrol (X-TRONIC CVT)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 99,
  maxTorqueNm: 152,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Kwid 1.0L SCe Petrol & CNG (68 bhp / 91 Nm) ---
const RENAULT_KWID_1_0_5MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L SCe 3-Cylinder Naturally Aspirated Petrol (5-Speed Manual)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 68,
  maxTorqueNm: 91,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const RENAULT_KWID_1_0_AMT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L SCe 3-Cylinder Naturally Aspirated Petrol (5-Speed EASY-R AMT)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 68,
  maxTorqueNm: 91,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const RENAULT_KWID_1_0_CNG = {
  fuelType: 'CNG' as const,
  engineName: '1.0L SCe Bi-Fuel CNG 3-Cylinder Engine (5-Speed Manual)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 68,
  maxTorqueNm: 91,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Duster Engines ---
const RENAULT_DUSTER_1_0_TURBO_6MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L TCe 100 Turbocharged Petrol (6-Speed Manual)',
  engineDisplacementCC: 999,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 99,
  maxTorqueNm: 166,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const RENAULT_DUSTER_1_3_TURBO_6MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.3L TCe 160 4-Cylinder Turbocharged Petrol (6-Speed Manual)',
  engineDisplacementCC: 1332,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 160,
  maxTorqueNm: 280,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const RENAULT_DUSTER_1_3_TURBO_DCT = {
  fuelType: 'Petrol' as const,
  engineName: '1.3L TCe 160 4-Cylinder Turbocharged Petrol (7-Speed EDC DCT Automatic)',
  engineDisplacementCC: 1332,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 160,
  maxTorqueNm: 280,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const RENAULT_DUSTER_1_8_HYBRID_AT = {
  fuelType: 'Hybrid' as const,
  engineName: '1.8L E-Tech Full Hybrid (Electric + Petrol Engine) Automatic',
  engineDisplacementCC: 1798,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 160,
  maxTorqueNm: 208,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 1.2,
  electricMotorPowerBhp: 49,
  electricRangeKm: null,
};

// ============================================================================
// 1. RENAULT TRIBER (18 VARIANTS)
// ============================================================================
export const RENAULT_TRIBER_VARIANTS: CarVariant[] = [
  ...[
    // Triber Authentic
    { slug: 'authentic-petrol-manual', name: 'Triber Authentic | Petrol | Manual', fullName: 'Renault Triber Authentic 1.0L Petrol 5MT', trim: 'Authentic', pt: RENAULT_1_0_NA_5MT, mileage: 19.0, exLakh: 6.00, onRoadLakh: 6.80 },
    { slug: 'authentic-cng-manual', name: 'Triber Authentic | CNG | Manual', fullName: 'Renault Triber Authentic 1.0L CNG 5MT', trim: 'Authentic CNG', pt: RENAULT_1_0_CNG_5MT, mileage: 26.0, exLakh: 6.55, onRoadLakh: 7.42 },
    // Triber Evolution
    { slug: 'evolution-petrol-manual', name: 'Triber Evolution | Petrol | Manual', fullName: 'Renault Triber Evolution 1.0L Petrol 5MT', trim: 'Evolution', pt: RENAULT_1_0_NA_5MT, mileage: 19.0, exLakh: 6.95, onRoadLakh: 7.87 },
    { slug: 'evolution-cng-manual', name: 'Triber Evolution | CNG | Manual', fullName: 'Renault Triber Evolution 1.0L CNG 5MT', trim: 'Evolution CNG', pt: RENAULT_1_0_CNG_5MT, mileage: 26.0, exLakh: 7.47, onRoadLakh: 8.46 },
    { slug: 'evolution-petrol-turbo-manual', name: 'Triber Evolution | Petrol Turbo | Manual', fullName: 'Renault Triber Evolution 1.0L Turbo 5MT', trim: 'Evolution Turbo', pt: RENAULT_1_0_TURBO_TRIBER_5MT, mileage: 21.0, exLakh: 8.07, onRoadLakh: 9.14 },
    // Triber Techno
    { slug: 'techno-petrol-manual', name: 'Triber Techno | Petrol | Manual', fullName: 'Renault Triber Techno 1.0L Petrol 5MT', trim: 'Techno', pt: RENAULT_1_0_NA_5MT, mileage: 19.0, exLakh: 7.66, onRoadLakh: 8.68 },
    { slug: 'techno-cng-manual', name: 'Triber Techno | CNG | Manual', fullName: 'Renault Triber Techno 1.0L CNG 5MT', trim: 'Techno CNG', pt: RENAULT_1_0_CNG_5MT, mileage: 26.0, exLakh: 8.16, onRoadLakh: 9.24 },
    { slug: 'techno-petrol-turbo-manual', name: 'Triber Techno | Petrol Turbo | Manual', fullName: 'Renault Triber Techno 1.0L Turbo 5MT', trim: 'Techno Turbo', pt: RENAULT_1_0_TURBO_TRIBER_5MT, mileage: 21.0, exLakh: 8.80, onRoadLakh: 9.96 },
    { slug: 'techno-turbo-cng-manual', name: 'Triber Techno | Turbo CNG Manual', fullName: 'Renault Triber Techno Turbo CNG 5MT', trim: 'Techno Turbo CNG', pt: RENAULT_1_0_TURBO_CNG_5MT, mileage: 27.0, exLakh: 7.95, onRoadLakh: 9.00 },
    { slug: 'techno-petrol-turbo-cvt', name: 'Triber Techno | Petrol Turbo CVT', fullName: 'Renault Triber Techno 1.0L Turbo CVT', trim: 'Techno Turbo CVT', pt: RENAULT_1_0_TURBO_TRIBER_CVT, mileage: 20.0, exLakh: 8.12, onRoadLakh: 9.20 },
    // Triber Emotion
    { slug: 'emotion-petrol-manual', name: 'Triber Emotion | Petrol | Manual', fullName: 'Renault Triber Emotion 1.0L Petrol 5MT', trim: 'Emotion', pt: RENAULT_1_0_NA_5MT, mileage: 19.0, exLakh: 8.31, onRoadLakh: 9.41 },
    { slug: 'emotion-petrol-manual-dual-tone', name: 'Triber Emotion | Petrol | Manual | Dual Tone', fullName: 'Renault Triber Emotion 1.0L Petrol 5MT Dual Tone', trim: 'Emotion Dual Tone', pt: RENAULT_1_0_NA_5MT, mileage: 19.0, exLakh: 8.52, onRoadLakh: 9.65 },
    { slug: 'emotion-petrol-automatic-amt', name: 'Triber Emotion | Petrol | Automatic (AMT)', fullName: 'Renault Triber Emotion 1.0L Petrol 5-Speed EASY-R AMT', trim: 'Emotion AMT', pt: RENAULT_1_0_NA_5AMT, mileage: 18.2, exLakh: 8.79, onRoadLakh: 9.95 },
    { slug: 'emotion-cng-manual', name: 'Triber Emotion | CNG | Manual', fullName: 'Renault Triber Emotion 1.0L CNG 5MT', trim: 'Emotion CNG', pt: RENAULT_1_0_CNG_5MT, mileage: 26.0, exLakh: 8.80, onRoadLakh: 9.96 },
    { slug: 'emotion-petrol-automatic-amt-dual-tone', name: 'Triber Emotion | Petrol | Automatic (AMT) | Dual Tone', fullName: 'Renault Triber Emotion 1.0L Petrol AMT Dual Tone', trim: 'Emotion AMT Dual Tone', pt: RENAULT_1_0_NA_5AMT, mileage: 18.2, exLakh: 9.00, onRoadLakh: 10.19 },
    { slug: 'emotion-petrol-turbo-manual', name: 'Triber Emotion | Petrol Turbo | Manual', fullName: 'Renault Triber Emotion 1.0L Turbo 5MT', trim: 'Emotion Turbo', pt: RENAULT_1_0_TURBO_TRIBER_5MT, mileage: 21.0, exLakh: 9.26, onRoadLakh: 10.49 },
    { slug: 'emotion-turbo-cng-manual', name: 'Triber Emotion | Turbo CNG Manual', fullName: 'Renault Triber Emotion Turbo CNG 5MT', trim: 'Emotion Turbo CNG', pt: RENAULT_1_0_TURBO_CNG_5MT, mileage: 27.0, exLakh: 8.92, onRoadLakh: 10.10 },
    { slug: 'emotion-petrol-turbo-cvt', name: 'Triber Emotion | Petrol Turbo CVT', fullName: 'Renault Triber Emotion 1.0L Turbo CVT', trim: 'Emotion Turbo CVT', pt: RENAULT_1_0_TURBO_TRIBER_CVT, mileage: 20.0, exLakh: 9.01, onRoadLakh: 10.20 },
  ].map((c) => ({
    id: `renault-triber-${c.slug}`,
    modelId: 'renault-triber',
    generationId: 'triber-2024',
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
      mileageKmpl: c.mileage,
      zeroToHundredSec: c.pt.aspiration === 'Turbocharged' ? 11.2 : 14.5,
      topSpeedKmph: c.pt.aspiration === 'Turbocharged' ? 170 : 150,
    },
    dimensions: {
      lengthMm: 3990,
      widthMm: 1739,
      heightMm: 1643,
      wheelbaseMm: 2636,
      groundClearanceMm: 182,
      kerbWeightKg: 947,
      bootSpaceLitres: 625,
      fuelTankLitres: c.pt.fuelType === 'CNG' ? 60 : 40,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: c.trim.includes('Emotion') ? 4 : 2,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: c.trim.includes('Emotion') || c.trim.includes('Techno') ? 'standard' : 'not_available',
        tpms: c.trim.includes('Emotion') ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: c.trim.includes('Emotion') ? 15 : 14,
        alloyWheels: c.trim.includes('Emotion') ? 'standard' : 'not_available',
        ledDRLs: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
        roofRails: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: c.trim.includes('Emotion') || c.trim.includes('Techno') ? 8.0 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: c.trim.includes('Emotion') || c.trim.includes('Techno') ? 'standard' : 'not_available',
        appleCarPlay: c.trim.includes('Emotion') || c.trim.includes('Techno') ? 'standard' : 'not_available',
        speakerCount: c.trim.includes('Emotion') ? 6 : 4,
      },
    }),
    sources: [
      { name: 'Renault India Official Portal', url: 'https://www.renault.co.in/cars/renault-triber.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Renault Triber Nashik', url: 'https://www.carwale.com/renault-cars/triber/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 2. RENAULT DUSTER (22 VARIANTS)
// ============================================================================
export const RENAULT_DUSTER_VARIANTS: CarVariant[] = [
  ...[
    // Duster Authentic
    { slug: 'authentic-petrol-1-0l-turbo-manual', name: 'Duster Authentic | Petrol 1.0L Turbo | Manual', fullName: 'Renault Duster Authentic 1.0L Turbo 6MT', trim: 'Authentic', pt: RENAULT_DUSTER_1_0_TURBO_6MT, mileage: 19.41, exLakh: 10.49, onRoadLakh: 12.41 },
    // Duster Evolution
    { slug: 'evolution-petrol-1-0l-turbo-manual', name: 'Duster Evolution | Petrol 1.0L Turbo | Manual', fullName: 'Renault Duster Evolution 1.0L Turbo 6MT', trim: 'Evolution 1.0L', pt: RENAULT_DUSTER_1_0_TURBO_6MT, mileage: 19.41, exLakh: 11.69, onRoadLakh: 13.81 },
    { slug: 'evolution-petrol-1-3l-turbo-manual', name: 'Duster Evolution | Petrol 1.3L Turbo | Manual', fullName: 'Renault Duster Evolution 1.3L Turbo 6MT', trim: 'Evolution 1.3L', pt: RENAULT_DUSTER_1_3_TURBO_6MT, mileage: 17.75, exLakh: 13.05, onRoadLakh: 15.40 },
    { slug: 'evolution-petrol-1-3l-turbo-automatic-dct', name: 'Duster Evolution | Petrol 1.3L Turbo | Automatic (DCT)', fullName: 'Renault Duster Evolution 1.3L Turbo 7-Speed DCT', trim: 'Evolution DCT', pt: RENAULT_DUSTER_1_3_TURBO_DCT, mileage: 18.45, exLakh: 14.53, onRoadLakh: 17.15 },
    { slug: 'evolution-hybrid-1-8l-automatic', name: 'Duster Evolution | Hybrid 1.8L | Automatic', fullName: 'Renault Duster Evolution 1.8L Strong Hybrid Automatic', trim: 'Evolution Hybrid', pt: RENAULT_DUSTER_1_8_HYBRID_AT, mileage: 29.0, exLakh: 17.20, onRoadLakh: 20.32 },
    // Duster Adventure
    { slug: 'adventure-petrol-1-0l-turbo-manual', name: 'Duster Adventure | Petrol 1.0L Turbo | Manual', fullName: 'Renault Duster Adventure 1.0L Turbo 6MT', trim: 'Adventure 1.0L', pt: RENAULT_DUSTER_1_0_TURBO_6MT, mileage: 19.41, exLakh: 12.99, onRoadLakh: 15.33 },
    { slug: 'adventure-petrol-1-3l-turbo-manual', name: 'Duster Adventure | Petrol 1.3L Turbo | Manual', fullName: 'Renault Duster Adventure 1.3L Turbo 6MT', trim: 'Adventure 1.3L', pt: RENAULT_DUSTER_1_3_TURBO_6MT, mileage: 17.75, exLakh: 14.04, onRoadLakh: 16.57 },
    { slug: 'adventure-petrol-1-3l-turbo-manual-dual-tone', name: 'Duster Adventure | Petrol 1.3L Turbo | Manual | Dual Tone', fullName: 'Renault Duster Adventure 1.3L Turbo 6MT Dual Tone', trim: 'Adventure Dual Tone', pt: RENAULT_DUSTER_1_3_TURBO_6MT, mileage: 17.75, exLakh: 14.24, onRoadLakh: 16.80 },
    { slug: 'adventure-petrol-1-3l-turbo-automatic-dct', name: 'Duster Adventure | Petrol 1.3L Turbo | Automatic (DCT)', fullName: 'Renault Duster Adventure 1.3L Turbo 7-Speed DCT', trim: 'Adventure DCT', pt: RENAULT_DUSTER_1_3_TURBO_DCT, mileage: 18.45, exLakh: 15.46, onRoadLakh: 18.25 },
    { slug: 'adventure-petrol-1-3l-turbo-automatic-dct-dual-tone', name: 'Duster Adventure | Petrol 1.3L Turbo | Automatic (DCT) | Dual Tone', fullName: 'Renault Duster Adventure 1.3L Turbo DCT Dual Tone', trim: 'Adventure DCT Dual Tone', pt: RENAULT_DUSTER_1_3_TURBO_DCT, mileage: 18.45, exLakh: 15.66, onRoadLakh: 18.48 },
    // Duster Techno Plus
    { slug: 'techno-plus-petrol-1-3l-turbo-manual', name: 'Duster Techno Plus | Petrol 1.3L Turbo | Manual', fullName: 'Renault Duster Techno Plus 1.3L Turbo 6MT', trim: 'Techno Plus', pt: RENAULT_DUSTER_1_3_TURBO_6MT, mileage: 17.75, exLakh: 15.36, onRoadLakh: 18.13 },
    { slug: 'techno-plus-petrol-1-3l-turbo-manual-dual-tone', name: 'Duster Techno Plus | Petrol 1.3L Turbo | Manual | Dual Tone', fullName: 'Renault Duster Techno Plus 1.3L Turbo 6MT Dual Tone', trim: 'Techno Plus Dual Tone', pt: RENAULT_DUSTER_1_3_TURBO_6MT, mileage: 17.75, exLakh: 15.56, onRoadLakh: 18.36 },
    { slug: 'techno-plus-petrol-1-3l-turbo-automatic-dct', name: 'Duster Techno Plus | Petrol 1.3L Turbo | Automatic (DCT)', fullName: 'Renault Duster Techno Plus 1.3L Turbo 7-Speed DCT', trim: 'Techno Plus DCT', pt: RENAULT_DUSTER_1_3_TURBO_DCT, mileage: 18.45, exLakh: 16.74, onRoadLakh: 19.76 },
    { slug: 'techno-plus-petrol-1-3l-turbo-automatic-dct-dual-tone', name: 'Duster Techno Plus | Petrol 1.3L Turbo | Automatic (DCT) | Dual Tone', fullName: 'Renault Duster Techno Plus 1.3L Turbo DCT Dual Tone', trim: 'Techno Plus DCT Dual Tone', pt: RENAULT_DUSTER_1_3_TURBO_DCT, mileage: 18.45, exLakh: 16.95, onRoadLakh: 20.00 },
    // Duster Iconic
    { slug: 'iconic-petrol-1-3l-turbo-manual', name: 'Duster Iconic | Petrol 1.3L Turbo | Manual', fullName: 'Renault Duster Iconic 1.3L Turbo 6MT', trim: 'Iconic', pt: RENAULT_DUSTER_1_3_TURBO_6MT, mileage: 17.75, exLakh: 17.04, onRoadLakh: 20.11 },
    { slug: 'iconic-petrol-1-3l-turbo-manual-dual-tone-launch-edition', name: 'Duster Iconic | Petrol 1.3L Turbo | Manual | Dual Tone | Launch Edition', fullName: 'Renault Duster Iconic 1.3L Turbo 6MT Launch Edition', trim: 'Iconic Launch Edition', pt: RENAULT_DUSTER_1_3_TURBO_6MT, mileage: 17.75, exLakh: 17.24, onRoadLakh: 20.35 },
    { slug: 'iconic-petrol-1-3l-turbo-manual-dual-tone', name: 'Duster Iconic | Petrol 1.3L Turbo | Manual | Dual Tone', fullName: 'Renault Duster Iconic 1.3L Turbo 6MT Dual Tone', trim: 'Iconic Dual Tone', pt: RENAULT_DUSTER_1_3_TURBO_6MT, mileage: 17.75, exLakh: 17.24, onRoadLakh: 20.35 },
    { slug: 'iconic-petrol-1-3l-turbo-automatic-dct', name: 'Duster Iconic | Petrol 1.3L Turbo | Automatic (DCT)', fullName: 'Renault Duster Iconic 1.3L Turbo 7-Speed DCT', trim: 'Iconic DCT', pt: RENAULT_DUSTER_1_3_TURBO_DCT, mileage: 18.45, exLakh: 18.53, onRoadLakh: 21.87 },
    { slug: 'iconic-petrol-1-3l-turbo-automatic-dct-dual-tone-launch-edition', name: 'Duster Iconic | Petrol 1.3L Turbo | Automatic (DCT) | Dual Tone | Launch Edition', fullName: 'Renault Duster Iconic 1.3L Turbo DCT Launch Edition', trim: 'Iconic DCT Launch Edition', pt: RENAULT_DUSTER_1_3_TURBO_DCT, mileage: 18.45, exLakh: 18.73, onRoadLakh: 22.10 },
    { slug: 'iconic-petrol-1-3l-turbo-automatic-dct-dual-tone', name: 'Duster Iconic | Petrol 1.3L Turbo | Automatic (DCT) | Dual Tone', fullName: 'Renault Duster Iconic 1.3L Turbo DCT Dual Tone', trim: 'Iconic DCT Dual Tone', pt: RENAULT_DUSTER_1_3_TURBO_DCT, mileage: 18.45, exLakh: 18.73, onRoadLakh: 22.10 },
    // Duster Techno & Emotion Hybrid
    { slug: 'techno-hybrid-1-8l-automatic', name: 'Duster Techno | Hybrid 1.8L | Automatic', fullName: 'Renault Duster Techno 1.8L Full Hybrid Automatic', trim: 'Techno Hybrid', pt: RENAULT_DUSTER_1_8_HYBRID_AT, mileage: 29.0, exLakh: 19.20, onRoadLakh: 22.66 },
    { slug: 'emotion-hybrid-1-8l-automatic', name: 'Duster Emotion | Hybrid 1.8L | Automatic', fullName: 'Renault Duster Emotion 1.8L Full Hybrid Automatic', trim: 'Emotion Hybrid', pt: RENAULT_DUSTER_1_8_HYBRID_AT, mileage: 29.0, exLakh: 19.70, onRoadLakh: 23.24 },
  ].map((c) => ({
    id: `renault-duster-${c.slug}`,
    modelId: 'renault-duster',
    generationId: 'duster-new-gen-2025',
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
      mileageKmpl: c.mileage,
      zeroToHundredSec: c.pt.fuelType === 'Hybrid' ? 8.9 : (c.pt.engineDisplacementCC === 1332 ? 9.3 : 11.5),
      topSpeedKmph: c.pt.engineDisplacementCC === 1332 ? 190 : 175,
    },
    dimensions: {
      lengthMm: 4343,
      widthMm: 1813,
      heightMm: 1661,
      wheelbaseMm: 2657,
      groundClearanceMm: 217,
      kerbWeightKg: 1280,
      bootSpaceLitres: 472,
      fuelTankLitres: 50,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: c.trim.includes('Iconic') || c.trim.includes('Emotion') ? 18 : 17,
        alloyWheels: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
        ledHeadlights: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
        ledDRLs: 'standard',
        sunroof: c.trim.includes('Iconic') || c.trim.includes('Emotion') || c.trim.includes('Techno Plus') ? 'panoramic' : 'not_available',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: c.trim.includes('Iconic') || c.trim.includes('Emotion') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !c.trim.startsWith('Authentic') ? 10.1 : 7.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
        wirelessAppleCarPlay: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
        speakerCount: c.trim.includes('Iconic') || c.trim.includes('Emotion') ? 6 : 4,
      },
    }),
    sources: [
      { name: 'Renault India Official Portal', url: 'https://www.renault.co.in/cars/renault-duster.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Renault Duster Nashik', url: 'https://www.carwale.com/renault-cars/duster/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 3. RENAULT KWID (6 VARIANTS)
// ============================================================================
export const RENAULT_KWID_VARIANTS: CarVariant[] = [
  ...[
    // Kwid Evolution
    { slug: 'evolution-petrol-manual', name: 'Kwid Evolution | Petrol | Manual', fullName: 'Renault Kwid Evolution 1.0L SCe 5MT', trim: 'Evolution', pt: RENAULT_KWID_1_0_5MT, mileage: 21.7, exLakh: 4.70, onRoadLakh: 5.32 },
    { slug: 'evolution-petrol-automatic', name: 'Kwid Evolution | Petrol | Automatic', fullName: 'Renault Kwid Evolution 1.0L SCe 5-Speed EASY-R AMT', trim: 'Evolution AMT', pt: RENAULT_KWID_1_0_AMT, mileage: 22.0, exLakh: 5.08, onRoadLakh: 5.75 },
    { slug: 'evolution-cng-1-0l-manual', name: 'Kwid Evolution | CNG 1.0L | Manual', fullName: 'Renault Kwid Evolution 1.0L Bi-Fuel CNG 5MT', trim: 'Evolution CNG', pt: RENAULT_KWID_1_0_CNG, mileage: 27.5, exLakh: 5.21, onRoadLakh: 5.89 },
    // Kwid Climber
    { slug: 'climber-petrol-manual', name: 'Kwid Climber | Petrol | Manual', fullName: 'Renault Kwid Climber 1.0L SCe 5MT', trim: 'Climber', pt: RENAULT_KWID_1_0_5MT, mileage: 21.7, exLakh: 5.35, onRoadLakh: 6.05 },
    { slug: 'climber-petrol-automatic', name: 'Kwid Climber | Petrol | Automatic', fullName: 'Renault Kwid Climber 1.0L SCe 5-Speed EASY-R AMT', trim: 'Climber AMT', pt: RENAULT_KWID_1_0_AMT, mileage: 22.0, exLakh: 5.82, onRoadLakh: 6.58 },
    { slug: 'climber-cng-1-0l-manual', name: 'Kwid Climber | CNG 1.0L | Manual', fullName: 'Renault Kwid Climber 1.0L Bi-Fuel CNG 5MT', trim: 'Climber CNG', pt: RENAULT_KWID_1_0_CNG, mileage: 27.5, exLakh: 5.84, onRoadLakh: 6.60 },
  ].map((c) => ({
    id: `renault-kwid-${c.slug}`,
    modelId: 'renault-kwid',
    generationId: 'kwid-facelift-2024',
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
      mileageKmpl: c.mileage,
      zeroToHundredSec: 14.8,
      topSpeedKmph: 150,
    },
    dimensions: {
      lengthMm: 3731,
      widthMm: 1579,
      heightMm: 1474,
      wheelbaseMm: 2422,
      groundClearanceMm: 184,
      kerbWeightKg: 760,
      bootSpaceLitres: 279,
      fuelTankLitres: c.pt.fuelType === 'CNG' ? 55 : 28,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 2,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: c.trim.includes('Climber') ? 'standard' : 'not_available',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 14,
        ledDRLs: 'standard',
        roofRails: c.trim.includes('Climber') ? 'standard' : 'not_available',
      },
      interior: {
        airConditioning: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 8.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        speakerCount: 2,
      },
    }),
    sources: [
      { name: 'Renault India Official Portal', url: 'https://www.renault.co.in/cars/renault-kwid.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Renault Kwid Nashik', url: 'https://www.carwale.com/renault-cars/kwid/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 4. RENAULT KIGER (23 VARIANTS)
// ============================================================================
export const RENAULT_KIGER_VARIANTS: CarVariant[] = [
  ...[
    // Kiger Authentic
    { slug: 'authentic-petrol-manual', name: 'Kiger Authentic | Petrol | Manual', fullName: 'Renault Kiger Authentic 1.0L Energy 5MT', trim: 'Authentic', pt: RENAULT_1_0_NA_5MT, mileage: 19.17, exLakh: 6.00, onRoadLakh: 6.81 },
    { slug: 'authentic-cng-manual', name: 'Kiger Authentic | CNG | Manual', fullName: 'Renault Kiger Authentic 1.0L CNG 5MT', trim: 'Authentic CNG', pt: RENAULT_1_0_CNG_5MT, mileage: 26.5, exLakh: 6.54, onRoadLakh: 7.42 },
    // Kiger Evolution
    { slug: 'evolution-petrol-manual', name: 'Kiger Evolution | Petrol | Manual', fullName: 'Renault Kiger Evolution 1.0L Energy 5MT', trim: 'Evolution', pt: RENAULT_1_0_NA_5MT, mileage: 19.17, exLakh: 6.78, onRoadLakh: 7.70 },
    { slug: 'evolution-petrol-automatic-amt', name: 'Kiger Evolution | Petrol | Automatic (AMT)', fullName: 'Renault Kiger Evolution 1.0L 5-Speed EASY-R AMT', trim: 'Evolution AMT', pt: RENAULT_1_0_NA_5AMT, mileage: 19.83, exLakh: 7.22, onRoadLakh: 8.20 },
    { slug: 'evolution-cng-manual', name: 'Kiger Evolution | CNG | Manual', fullName: 'Renault Kiger Evolution 1.0L CNG 5MT', trim: 'Evolution CNG', pt: RENAULT_1_0_CNG_5MT, mileage: 26.5, exLakh: 7.30, onRoadLakh: 8.29 },
    // Kiger Evolution Plus
    { slug: 'evolution-plus-petrol-manual', name: 'Kiger Evolution Plus | Petrol | Manual', fullName: 'Renault Kiger Evolution Plus 1.0L Energy 5MT', trim: 'Evolution Plus', pt: RENAULT_1_0_NA_5MT, mileage: 19.17, exLakh: 7.22, onRoadLakh: 8.20 },
    { slug: 'evolution-plus-petrol-automatic-amt', name: 'Kiger Evolution Plus | Petrol | Automatic (AMT)', fullName: 'Renault Kiger Evolution Plus 1.0L EASY-R AMT', trim: 'Evolution Plus AMT', pt: RENAULT_1_0_NA_5AMT, mileage: 19.83, exLakh: 7.69, onRoadLakh: 8.73 },
    { slug: 'evolution-plus-petrol-turbo-manual', name: 'Kiger Evolution Plus | Petrol Turbo | Manual', fullName: 'Renault Kiger Evolution Plus 1.0L Turbo 5MT', trim: 'Evolution Plus Turbo', pt: RENAULT_1_0_TURBO_KIGER_5MT, mileage: 20.6, exLakh: 8.14, onRoadLakh: 9.24 },
    // Kiger Techno
    { slug: 'techno-petrol-manual', name: 'Kiger Techno | Petrol | Manual', fullName: 'Renault Kiger Techno 1.0L Energy 5MT', trim: 'Techno', pt: RENAULT_1_0_NA_5MT, mileage: 19.17, exLakh: 7.80, onRoadLakh: 8.86 },
    { slug: 'techno-petrol-manual-dual-tone', name: 'Kiger Techno | Petrol | Manual | Dual Tone', fullName: 'Renault Kiger Techno 1.0L Energy 5MT Dual Tone', trim: 'Techno Dual Tone', pt: RENAULT_1_0_NA_5MT, mileage: 19.17, exLakh: 7.80, onRoadLakh: 8.86 },
    { slug: 'techno-cng-manual', name: 'Kiger Techno | CNG | Manual', fullName: 'Renault Kiger Techno 1.0L CNG 5MT', trim: 'Techno CNG', pt: RENAULT_1_0_CNG_5MT, mileage: 26.5, exLakh: 8.30, onRoadLakh: 9.42 },
    { slug: 'techno-petrol-automatic-amt', name: 'Kiger Techno | Petrol | Automatic (AMT)', fullName: 'Renault Kiger Techno 1.0L EASY-R AMT', trim: 'Techno AMT', pt: RENAULT_1_0_NA_5AMT, mileage: 19.83, exLakh: 8.33, onRoadLakh: 9.46 },
    { slug: 'techno-petrol-automatic-amt-dual-tone', name: 'Kiger Techno | Petrol | Automatic (AMT) | Dual Tone', fullName: 'Renault Kiger Techno 1.0L AMT Dual Tone', trim: 'Techno AMT Dual Tone', pt: RENAULT_1_0_NA_5AMT, mileage: 19.83, exLakh: 8.33, onRoadLakh: 9.46 },
    { slug: 'techno-petrol-turbo-manual', name: 'Kiger Techno | Petrol Turbo | Manual', fullName: 'Renault Kiger Techno 1.0L Turbo 5MT', trim: 'Techno Turbo', pt: RENAULT_1_0_TURBO_KIGER_5MT, mileage: 20.6, exLakh: 8.74, onRoadLakh: 9.92 },
    { slug: 'techno-petrol-turbo-automatic-cvt', name: 'Kiger Techno | Petrol Turbo | Automatic (CVT)', fullName: 'Renault Kiger Techno 1.0L Turbo X-TRONIC CVT', trim: 'Techno CVT', pt: RENAULT_1_0_TURBO_KIGER_CVT, mileage: 18.24, exLakh: 9.65, onRoadLakh: 10.95 },
    { slug: 'techno-petrol-turbo-automatic-cvt-dual-tone', name: 'Kiger Techno | Petrol Turbo | Automatic (CVT) | Dual Tone', fullName: 'Renault Kiger Techno 1.0L Turbo CVT Dual Tone', trim: 'Techno CVT Dual Tone', pt: RENAULT_1_0_TURBO_KIGER_CVT, mileage: 18.24, exLakh: 9.65, onRoadLakh: 10.95 },
    // Kiger Emotion
    { slug: 'emotion-petrol-manual', name: 'Kiger Emotion | Petrol | Manual', fullName: 'Renault Kiger Emotion 1.0L Energy 5MT', trim: 'Emotion', pt: RENAULT_1_0_NA_5MT, mileage: 19.17, exLakh: 8.74, onRoadLakh: 9.92 },
    { slug: 'emotion-petrol-manual-dual-tone', name: 'Kiger Emotion | Petrol | Manual | Dual Tone', fullName: 'Renault Kiger Emotion 1.0L Energy 5MT Dual Tone', trim: 'Emotion Dual Tone', pt: RENAULT_1_0_NA_5MT, mileage: 19.17, exLakh: 8.74, onRoadLakh: 9.92 },
    { slug: 'emotion-cng-manual', name: 'Kiger Emotion | CNG | Manual', fullName: 'Renault Kiger Emotion 1.0L CNG 5MT', trim: 'Emotion CNG', pt: RENAULT_1_0_CNG_5MT, mileage: 26.5, exLakh: 9.20, onRoadLakh: 10.45 },
    { slug: 'emotion-petrol-turbo-manual', name: 'Kiger Emotion | Petrol Turbo | Manual', fullName: 'Renault Kiger Emotion 1.0L Turbo 5MT', trim: 'Emotion Turbo', pt: RENAULT_1_0_TURBO_KIGER_5MT, mileage: 20.6, exLakh: 9.65, onRoadLakh: 10.95 },
    { slug: 'emotion-petrol-turbo-manual-dual-tone', name: 'Kiger Emotion | Petrol Turbo | Manual | Dual Tone', fullName: 'Renault Kiger Emotion 1.0L Turbo 5MT Dual Tone', trim: 'Emotion Turbo Dual Tone', pt: RENAULT_1_0_TURBO_KIGER_5MT, mileage: 20.6, exLakh: 9.65, onRoadLakh: 10.95 },
    { slug: 'emotion-petrol-turbo-automatic-cvt', name: 'Kiger Emotion | Petrol Turbo | Automatic (CVT)', fullName: 'Renault Kiger Emotion 1.0L Turbo X-TRONIC CVT', trim: 'Emotion CVT', pt: RENAULT_1_0_TURBO_KIGER_CVT, mileage: 18.24, exLakh: 10.84, onRoadLakh: 12.31 },
    { slug: 'emotion-petrol-turbo-automatic-cvt-dual-tone', name: 'Kiger Emotion | Petrol Turbo | Automatic (CVT) | Dual Tone', fullName: 'Renault Kiger Emotion 1.0L Turbo CVT Dual Tone', trim: 'Emotion CVT Dual Tone', pt: RENAULT_1_0_TURBO_KIGER_CVT, mileage: 18.24, exLakh: 10.84, onRoadLakh: 12.31 },
  ].map((c) => ({
    id: `renault-kiger-${c.slug}`,
    modelId: 'renault-kiger',
    generationId: 'kiger-facelift-2024',
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
      mileageKmpl: c.mileage,
      zeroToHundredSec: c.pt.aspiration === 'Turbocharged' ? 10.0 : 13.5,
      topSpeedKmph: c.pt.aspiration === 'Turbocharged' ? 180 : 155,
    },
    dimensions: {
      lengthMm: 3991,
      widthMm: 1750,
      heightMm: 1605,
      wheelbaseMm: 2500,
      groundClearanceMm: 205,
      kerbWeightKg: 1012,
      bootSpaceLitres: 405,
      fuelTankLitres: c.pt.fuelType === 'CNG' ? 60 : 40,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: c.trim.includes('Emotion') ? 4 : 2,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: c.trim.includes('Emotion') || c.trim.includes('Techno') ? 'standard' : 'not_available',
        tpms: c.trim.includes('Emotion') ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: 16,
        alloyWheels: c.trim.includes('Emotion') || c.trim.includes('Techno') ? 'standard' : 'not_available',
        ledHeadlights: c.trim.includes('Emotion') ? 'standard' : 'not_available',
        ledDRLs: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !c.trim.startsWith('Authentic') ? 8.0 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
        appleCarPlay: !c.trim.startsWith('Authentic') ? 'standard' : 'not_available',
        wirelessAndroidAuto: c.trim.includes('Emotion') ? 'standard' : 'not_available',
        wirelessAppleCarPlay: c.trim.includes('Emotion') ? 'standard' : 'not_available',
        speakerCount: c.trim.includes('Emotion') ? 8 : 4,
      },
    }),
    sources: [
      { name: 'Renault India Official Portal', url: 'https://www.renault.co.in/cars/renault-kiger.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Renault Kiger Nashik', url: 'https://www.carwale.com/renault-cars/kiger/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];
