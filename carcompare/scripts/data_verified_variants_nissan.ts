/**
 * scripts/data_verified_variants_nissan.ts
 *
 * Comprehensive, verified variant database for Nissan India:
 * 1. Nissan Magnite (48 variants) - 1.0L B4D NA Petrol (71 bhp 5MT/AMT), 1.0L CNG (71 bhp 5MT/AMT), 1.0L HRA0 Turbo (99 bhp 5MT/CVT)
 * 2. Nissan Tekton (12 variants) - 1.0L Turbo T160 (99 bhp 6MT), 1.3L Turbo T280 (161 bhp 6MT/7-DCT)
 * 3. Nissan Gravite (13 variants) - 1.0L Petrol (71 bhp 5MT/AMT) & 1.0L CNG (71 bhp 5MT) 7-Seater Modular Family Vehicle
 * 4. Nissan X-Trail (1 variant) - 1.5L 12V Mild-Hybrid VC-Turbo Petrol (161 bhp, 300 Nm, X-Tronic CVT)
 *
 * Total: 74 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// --- Magnite 1.0L B4D NA Petrol (71 bhp / 96 Nm) ---
const NISSAN_1_0_NA_5MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L B4D Dual VVT 3-Cylinder Naturally Aspirated Petrol (5-Speed Manual)',
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

const NISSAN_1_0_NA_5AMT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L B4D Dual VVT 3-Cylinder Petrol (EZ-Shift 5-Speed AMT)',
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

// --- Magnite 1.0L B4D CNG (71 bhp / 96 Nm) ---
const NISSAN_1_0_CNG_5MT = {
  fuelType: 'CNG' as const,
  engineName: '1.0L B4D Bi-Fuel CNG 3-Cylinder Engine (5-Speed Manual)',
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

const NISSAN_1_0_CNG_5AMT = {
  fuelType: 'CNG' as const,
  engineName: '1.0L B4D Bi-Fuel CNG 3-Cylinder Engine (EZ-Shift 5-Speed AMT)',
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

// --- Magnite 1.0L HRA0 Turbo Petrol (99 bhp / 160 Nm MT, 152 Nm CVT) ---
const NISSAN_1_0_TURBO_5MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L HRA0 Turbocharged 3-Cylinder Petrol (5-Speed Manual)',
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

const NISSAN_1_0_TURBO_CVT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L HRA0 Turbocharged 3-Cylinder Petrol (X-Tronic CVT Automatic)',
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

// --- Tekton Engines (T160 1.0L Turbo & T280 1.3L Turbo) ---
const NISSAN_TEKTON_1_0_TURBO_6MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Turbo T160 3-Cylinder Petrol (6-Speed Manual)',
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

const NISSAN_TEKTON_1_3_TURBO_6MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.3L Turbo T280 4-Cylinder Petrol (6-Speed Manual)',
  engineDisplacementCC: 1332,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 161,
  maxTorqueNm: 280,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const NISSAN_TEKTON_1_3_TURBO_DCT = {
  fuelType: 'Petrol' as const,
  engineName: '1.3L Turbo T280 4-Cylinder Petrol (7-Speed Dual-Clutch DCT Automatic)',
  engineDisplacementCC: 1332,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 161,
  maxTorqueNm: 280,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// --- Gravite Engines ---
const NISSAN_GRAVITE_1_0_5MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Dual VVT 3-Cylinder Petrol (5-Speed Manual)',
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

const NISSAN_GRAVITE_1_0_AMT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Dual VVT 3-Cylinder Petrol (5-Speed EZ-Shift AMT)',
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

const NISSAN_GRAVITE_1_0_CNG_5MT = {
  fuelType: 'CNG' as const,
  engineName: '1.0L Bi-Fuel CNG 3-Cylinder Engine (5-Speed Manual)',
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

// --- X-Trail 1.5L VC-Turbo Mild Hybrid ---
const NISSAN_XTRAIL_1_5_HYBRID_CVT = {
  fuelType: 'Hybrid' as const,
  engineName: '1.5L KR15DDT 3-Cylinder Variable Compression Turbo (VC-Turbo) + 12V Mild-Hybrid (X-Tronic CVT)',
  engineDisplacementCC: 1498,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 161,
  maxTorqueNm: 300,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 0.8,
  electricMotorPowerBhp: 10,
  electricRangeKm: null,
};

// ============================================================================
// 1. NISSAN MAGNITE (48 VARIANTS)
// ============================================================================
export const NISSAN_MAGNITE_VARIANTS: CarVariant[] = [
  ...[
    // Visia (4 variants)
    { slug: 'visia-petrol-manual', name: 'Magnite Visia | Petrol | Manual', fullName: 'Nissan Magnite Visia 1.0L Petrol 5MT', trim: 'Visia', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 5.99, onRoadLakh: 6.67 },
    { slug: 'visia-cng-manual', name: 'Magnite Visia | CNG | Manual', fullName: 'Nissan Magnite Visia 1.0L CNG 5MT', trim: 'Visia CNG', pt: NISSAN_1_0_CNG_5MT, mileage: 26.5, exLakh: 6.49, onRoadLakh: 7.22 },
    { slug: 'visia-petrol-automatic-amt', name: 'Magnite Visia | Petrol | Automatic (AMT)', fullName: 'Nissan Magnite Visia 1.0L Petrol EZ-Shift AMT', trim: 'Visia AMT', pt: NISSAN_1_0_NA_5AMT, mileage: 19.7, exLakh: 6.60, onRoadLakh: 7.37 },
    { slug: 'visia-cng-automatic-amt', name: 'Magnite Visia | CNG | Automatic (AMT)', fullName: 'Nissan Magnite Visia 1.0L CNG EZ-Shift AMT', trim: 'Visia CNG AMT', pt: NISSAN_1_0_CNG_5AMT, mileage: 26.5, exLakh: 7.08, onRoadLakh: 7.89 },

    // Visia Plus (2 variants)
    { slug: 'visia-plus-petrol-manual', name: 'Magnite Visia Plus | Petrol | Manual', fullName: 'Nissan Magnite Visia Plus 1.0L Petrol 5MT', trim: 'Visia Plus', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 6.55, onRoadLakh: 7.32 },
    { slug: 'visia-plus-cng-manual', name: 'Magnite Visia Plus | CNG | Manual', fullName: 'Nissan Magnite Visia Plus 1.0L CNG 5MT', trim: 'Visia Plus CNG', pt: NISSAN_1_0_CNG_5MT, mileage: 26.5, exLakh: 7.05, onRoadLakh: 7.85 },

    // Acenta (5 variants)
    { slug: 'acenta-petrol-manual', name: 'Magnite Acenta | Petrol | Manual', fullName: 'Nissan Magnite Acenta 1.0L Petrol 5MT', trim: 'Acenta', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 7.19, onRoadLakh: 8.02 },
    { slug: 'acenta-cng-manual', name: 'Magnite Acenta | CNG | Manual', fullName: 'Nissan Magnite Acenta 1.0L CNG 5MT', trim: 'Acenta CNG', pt: NISSAN_1_0_CNG_5MT, mileage: 26.5, exLakh: 7.65, onRoadLakh: 8.53 },
    { slug: 'acenta-petrol-automatic-amt', name: 'Magnite Acenta | Petrol | Automatic (AMT)', fullName: 'Nissan Magnite Acenta 1.0L Petrol EZ-Shift AMT', trim: 'Acenta AMT', pt: NISSAN_1_0_NA_5AMT, mileage: 19.7, exLakh: 7.75, onRoadLakh: 8.65 },
    { slug: 'acenta-cng-automatic-amt', name: 'Magnite Acenta | CNG | Automatic (AMT)', fullName: 'Nissan Magnite Acenta 1.0L CNG EZ-Shift AMT', trim: 'Acenta CNG AMT', pt: NISSAN_1_0_CNG_5AMT, mileage: 26.5, exLakh: 8.20, onRoadLakh: 9.14 },
    { slug: 'acenta-petrol-turbo-automatic-cvt', name: 'Magnite Acenta | Petrol Turbo | Automatic (CVT)', fullName: 'Nissan Magnite Acenta 1.0L Turbo X-Tronic CVT', trim: 'Acenta Turbo CVT', pt: NISSAN_1_0_TURBO_CVT, mileage: 17.9, exLakh: 9.72, onRoadLakh: 10.84 },

    // N-Connecta (11 variants)
    { slug: 'n-connecta-petrol-manual', name: 'Magnite N-Connecta | Petrol | Manual', fullName: 'Nissan Magnite N-Connecta 1.0L Petrol 5MT', trim: 'N-Connecta', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 7.84, onRoadLakh: 8.74 },
    { slug: 'n-connecta-petrol-manual-dual-tone', name: 'Magnite N-Connecta | Petrol | Manual | Dual Tone', fullName: 'Nissan Magnite N-Connecta 1.0L Petrol 5MT Dual Tone', trim: 'N-Connecta Dual Tone', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 8.02, onRoadLakh: 8.94 },
    { slug: 'n-connecta-cng-manual', name: 'Magnite N-Connecta | CNG | Manual', fullName: 'Nissan Magnite N-Connecta 1.0L CNG 5MT', trim: 'N-Connecta CNG', pt: NISSAN_1_0_CNG_5MT, mileage: 26.5, exLakh: 8.28, onRoadLakh: 9.23 },
    { slug: 'n-connecta-cng-manual-b4d', name: 'Magnite N-Connecta | CNG | Manual | B4D', fullName: 'Nissan Magnite N-Connecta 1.0L B4D CNG 5MT', trim: 'N-Connecta CNG B4D', pt: NISSAN_1_0_CNG_5MT, mileage: 26.5, exLakh: 8.41, onRoadLakh: 9.38 },
    { slug: 'n-connecta-petrol-automatic-amt', name: 'Magnite N-Connecta | Petrol | Automatic (AMT)', fullName: 'Nissan Magnite N-Connecta 1.0L Petrol EZ-Shift AMT', trim: 'N-Connecta AMT', pt: NISSAN_1_0_NA_5AMT, mileage: 19.7, exLakh: 8.43, onRoadLakh: 9.40 },
    { slug: 'n-connecta-petrol-automatic-amt-dual-tone', name: 'Magnite N-Connecta | Petrol | Automatic (AMT) | Dual Tone', fullName: 'Nissan Magnite N-Connecta 1.0L Petrol AMT Dual Tone', trim: 'N-Connecta AMT Dual Tone', pt: NISSAN_1_0_NA_5AMT, mileage: 19.7, exLakh: 8.61, onRoadLakh: 9.60 },
    { slug: 'n-connecta-cng-automatic-amt', name: 'Magnite N-Connecta | CNG | Automatic (AMT)', fullName: 'Nissan Magnite N-Connecta 1.0L CNG EZ-Shift AMT', trim: 'N-Connecta CNG AMT', pt: NISSAN_1_0_CNG_5AMT, mileage: 26.5, exLakh: 8.86, onRoadLakh: 9.88 },
    { slug: 'n-connecta-petrol-manual-hra0', name: 'Magnite N-Connecta | Petrol | Manual | HRAO', fullName: 'Nissan Magnite N-Connecta 1.0L Turbo HRA0 5MT', trim: 'N-Connecta Turbo', pt: NISSAN_1_0_TURBO_5MT, mileage: 19.9, exLakh: 9.22, onRoadLakh: 10.28 },
    { slug: 'n-connecta-petrol-manual-dual-tone-hra0', name: 'Magnite N-Connecta | Petrol | Manual | Dual Tone | HRAO', fullName: 'Nissan Magnite N-Connecta 1.0L Turbo 5MT Dual Tone', trim: 'N-Connecta Turbo Dual Tone', pt: NISSAN_1_0_TURBO_5MT, mileage: 19.9, exLakh: 9.39, onRoadLakh: 10.47 },
    { slug: 'n-connecta-petrol-turbo-automatic-cvt', name: 'Magnite N-Connecta | Petrol Turbo | Automatic (CVT)', fullName: 'Nissan Magnite N-Connecta 1.0L Turbo X-Tronic CVT', trim: 'N-Connecta Turbo CVT', pt: NISSAN_1_0_TURBO_CVT, mileage: 17.9, exLakh: 10.17, onRoadLakh: 11.34 },
    { slug: 'n-connecta-petrol-turbo-automatic-cvt-dual-tone', name: 'Magnite N-Connecta | Petrol Turbo | Automatic (CVT) | Dual Tone', fullName: 'Nissan Magnite N-Connecta 1.0L Turbo CVT Dual Tone', trim: 'N-Connecta Turbo CVT Dual Tone', pt: NISSAN_1_0_TURBO_CVT, mileage: 17.9, exLakh: 10.35, onRoadLakh: 11.54 },

    // Kuro Edition (4 variants)
    { slug: 'kuro-edition-petrol-manual-b4d', name: 'Magnite Kuro Edition | Petrol | Manual | B4D', fullName: 'Nissan Magnite Kuro Edition 1.0L B4D 5MT', trim: 'Kuro Edition', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 8.20, onRoadLakh: 9.14 },
    { slug: 'kuro-edition-petrol-automatic-amt-ez-shift', name: 'Magnite Kuro Edition | Petrol | Automatic (AMT) | EZ-SHIFT', fullName: 'Nissan Magnite Kuro Edition 1.0L EZ-Shift AMT', trim: 'Kuro Edition AMT', pt: NISSAN_1_0_NA_5AMT, mileage: 19.7, exLakh: 8.80, onRoadLakh: 9.81 },
    { slug: 'kuro-edition-petrol-turbo-manual-hra0', name: 'Magnite Kuro Edition | Petrol Turbo | Manual | HRAO', fullName: 'Nissan Magnite Kuro Edition 1.0L Turbo HRA0 5MT', trim: 'Kuro Edition Turbo', pt: NISSAN_1_0_TURBO_5MT, mileage: 19.9, exLakh: 9.58, onRoadLakh: 10.68 },
    { slug: 'kuro-edition-petrol-turbo-automatic-cvt-hra0', name: 'Magnite Kuro Edition | Petrol Turbo | Automatic (CVT) | HRAO', fullName: 'Nissan Magnite Kuro Edition 1.0L Turbo X-Tronic CVT', trim: 'Kuro Edition Turbo CVT', pt: NISSAN_1_0_TURBO_CVT, mileage: 17.9, exLakh: 10.43, onRoadLakh: 11.63 },

    // Tekna (11 variants)
    { slug: 'tekna-petrol-manual', name: 'Magnite Tekna | Petrol | Manual', fullName: 'Nissan Magnite Tekna 1.0L Petrol 5MT', trim: 'Tekna', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 8.82, onRoadLakh: 9.84 },
    { slug: 'tekna-petrol-manual-dual-tone', name: 'Magnite Tekna | Petrol | Manual | Dual Tone', fullName: 'Nissan Magnite Tekna 1.0L Petrol 5MT Dual Tone', trim: 'Tekna Dual Tone', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 8.99, onRoadLakh: 10.03 },
    { slug: 'tekna-cng-manual', name: 'Magnite Tekna | CNG | Manual', fullName: 'Nissan Magnite Tekna 1.0L CNG 5MT', trim: 'Tekna CNG', pt: NISSAN_1_0_CNG_5MT, mileage: 26.5, exLakh: 9.24, onRoadLakh: 10.30 },
    { slug: 'tekna-cng-manual-b4d', name: 'Magnite Tekna | CNG | Manual | B4D', fullName: 'Nissan Magnite Tekna 1.0L B4D CNG 5MT', trim: 'Tekna CNG B4D', pt: NISSAN_1_0_CNG_5MT, mileage: 26.5, exLakh: 9.37, onRoadLakh: 10.45 },
    { slug: 'tekna-petrol-automatic-amt', name: 'Magnite Tekna | Petrol | Automatic (AMT)', fullName: 'Nissan Magnite Tekna 1.0L Petrol EZ-Shift AMT', trim: 'Tekna AMT', pt: NISSAN_1_0_NA_5AMT, mileage: 19.7, exLakh: 9.39, onRoadLakh: 10.47 },
    { slug: 'tekna-petrol-automatic-amt-dual-tone', name: 'Magnite Tekna | Petrol | Automatic (AMT) | Dual Tone', fullName: 'Nissan Magnite Tekna 1.0L Petrol AMT Dual Tone', trim: 'Tekna AMT Dual Tone', pt: NISSAN_1_0_NA_5AMT, mileage: 19.7, exLakh: 9.57, onRoadLakh: 10.67 },
    { slug: 'tekna-cng-automatic-amt', name: 'Magnite Tekna | CNG | Automatic (AMT)', fullName: 'Nissan Magnite Tekna 1.0L CNG EZ-Shift AMT', trim: 'Tekna CNG AMT', pt: NISSAN_1_0_CNG_5AMT, mileage: 26.5, exLakh: 9.79, onRoadLakh: 10.92 },
    { slug: 'tekna-petrol-turbo-manual', name: 'Magnite Tekna | Petrol Turbo | Manual', fullName: 'Nissan Magnite Tekna 1.0L Turbo 5MT', trim: 'Tekna Turbo', pt: NISSAN_1_0_TURBO_5MT, mileage: 19.9, exLakh: 10.03, onRoadLakh: 11.19 },
    { slug: 'tekna-petrol-turbo-manual-dual-tone', name: 'Magnite Tekna | Petrol Turbo | Manual | Dual Tone', fullName: 'Nissan Magnite Tekna 1.0L Turbo 5MT Dual Tone', trim: 'Tekna Turbo Dual Tone', pt: NISSAN_1_0_TURBO_5MT, mileage: 19.9, exLakh: 10.21, onRoadLakh: 11.39 },
    { slug: 'tekna-petrol-turbo-automatic-cvt', name: 'Magnite Tekna | Petrol Turbo | Automatic (CVT)', fullName: 'Nissan Magnite Tekna 1.0L Turbo X-Tronic CVT', trim: 'Tekna Turbo CVT', pt: NISSAN_1_0_TURBO_CVT, mileage: 17.9, exLakh: 11.34, onRoadLakh: 12.65 },
    { slug: 'tekna-petrol-turbo-automatic-cvt-dual-tone', name: 'Magnite Tekna | Petrol Turbo | Automatic (CVT) | Dual Tone', fullName: 'Nissan Magnite Tekna 1.0L Turbo CVT Dual Tone', trim: 'Tekna Turbo CVT Dual Tone', pt: NISSAN_1_0_TURBO_CVT, mileage: 17.9, exLakh: 11.51, onRoadLakh: 12.84 },

    // Tekna Plus (11 variants)
    { slug: 'tekna-plus-petrol-manual', name: 'Magnite Tekna Plus | Petrol | Manual', fullName: 'Nissan Magnite Tekna Plus 1.0L Petrol 5MT', trim: 'Tekna Plus', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 9.16, onRoadLakh: 10.22 },
    { slug: 'tekna-plus-petrol-manual-dual-tone', name: 'Magnite Tekna Plus | Petrol | Manual | Dual Tone', fullName: 'Nissan Magnite Tekna Plus 1.0L Petrol 5MT Dual Tone', trim: 'Tekna Plus Dual Tone', pt: NISSAN_1_0_NA_5MT, mileage: 19.4, exLakh: 9.33, onRoadLakh: 10.41 },
    { slug: 'tekna-plus-cng-manual', name: 'Magnite Tekna Plus | CNG | Manual', fullName: 'Nissan Magnite Tekna Plus 1.0L CNG 5MT', trim: 'Tekna Plus CNG', pt: NISSAN_1_0_CNG_5MT, mileage: 26.5, exLakh: 9.57, onRoadLakh: 10.67 },
    { slug: 'tekna-plus-cng-manual-b4d', name: 'Magnite Tekna Plus | CNG | Manual | B4D', fullName: 'Nissan Magnite Tekna Plus 1.0L B4D CNG 5MT', trim: 'Tekna Plus CNG B4D', pt: NISSAN_1_0_CNG_5MT, mileage: 26.5, exLakh: 9.69, onRoadLakh: 10.81 },
    { slug: 'tekna-plus-petrol-automatic-amt', name: 'Magnite Tekna Plus | Petrol | Automatic (AMT)', fullName: 'Nissan Magnite Tekna Plus 1.0L Petrol EZ-Shift AMT', trim: 'Tekna Plus AMT', pt: NISSAN_1_0_NA_5AMT, mileage: 19.7, exLakh: 9.73, onRoadLakh: 10.85 },
    { slug: 'tekna-plus-petrol-automatic-amt-dual-tone', name: 'Magnite Tekna Plus | Petrol | Automatic (AMT) | Dual Tone', fullName: 'Nissan Magnite Tekna Plus 1.0L AMT Dual Tone', trim: 'Tekna Plus AMT Dual Tone', pt: NISSAN_1_0_NA_5AMT, mileage: 19.7, exLakh: 9.90, onRoadLakh: 11.04 },
    { slug: 'tekna-plus-cng-automatic-amt', name: 'Magnite Tekna Plus | CNG | Automatic (AMT)', fullName: 'Nissan Magnite Tekna Plus 1.0L CNG EZ-Shift AMT', trim: 'Tekna Plus CNG AMT', pt: NISSAN_1_0_CNG_5AMT, mileage: 26.5, exLakh: 10.11, onRoadLakh: 11.28 },
    { slug: 'tekna-plus-petrol-turbo-manual', name: 'Magnite Tekna Plus | Petrol Turbo | Manual', fullName: 'Nissan Magnite Tekna Plus 1.0L Turbo 5MT', trim: 'Tekna Plus Turbo', pt: NISSAN_1_0_TURBO_5MT, mileage: 19.9, exLakh: 10.38, onRoadLakh: 11.58 },
    { slug: 'tekna-plus-petrol-turbo-manual-dual-tone', name: 'Magnite Tekna Plus | Petrol Turbo | Manual | Dual Tone', fullName: 'Nissan Magnite Tekna Plus 1.0L Turbo 5MT Dual Tone', trim: 'Tekna Plus Turbo Dual Tone', pt: NISSAN_1_0_TURBO_5MT, mileage: 19.9, exLakh: 10.74, onRoadLakh: 11.98 },
    { slug: 'tekna-plus-petrol-turbo-automatic-cvt', name: 'Magnite Tekna Plus | Petrol Turbo | Automatic (CVT)', fullName: 'Nissan Magnite Tekna Plus 1.0L Turbo X-Tronic CVT', trim: 'Tekna Plus Turbo CVT', pt: NISSAN_1_0_TURBO_CVT, mileage: 17.9, exLakh: 11.65, onRoadLakh: 13.00 },
    { slug: 'tekna-plus-petrol-turbo-automatic-cvt-dual-tone', name: 'Magnite Tekna Plus | Petrol Turbo | Automatic (CVT) | Dual Tone', fullName: 'Nissan Magnite Tekna Plus 1.0L Turbo CVT Dual Tone', trim: 'Tekna Plus Turbo CVT Dual Tone', pt: NISSAN_1_0_TURBO_CVT, mileage: 17.9, exLakh: 11.82, onRoadLakh: 13.19 },
  ].map((c) => ({
    id: `nissan-magnite-${c.slug}`,
    modelId: 'nissan-magnite',
    generationId: 'magnite-facelift-2024',
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
      zeroToHundredSec: c.pt.aspiration === 'Turbocharged' ? 10.2 : 14.1,
      topSpeedKmph: c.pt.aspiration === 'Turbocharged' ? 175 : 155,
    },
    dimensions: {
      lengthMm: 3994,
      widthMm: 1758,
      heightMm: 1572,
      wheelbaseMm: 2500,
      groundClearanceMm: 205,
      kerbWeightKg: 939,
      bootSpaceLitres: 336,
      fuelTankLitres: c.pt.fuelType === 'CNG' ? 60 : 40,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6, // 6 airbags standard on all variants across Magnite facelift
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: c.trim.includes('Tekna') ? 16 : 15,
        alloyWheels: c.trim.includes('Tekna') || c.trim.includes('N-Connecta') || c.trim.includes('Kuro') ? 'standard' : 'not_available',
        ledHeadlights: c.trim.includes('Tekna') || c.trim.includes('Kuro') ? 'standard' : 'not_available',
        ledDRLs: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !c.trim.startsWith('Visia') ? 8.0 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        appleCarPlay: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        wirelessAndroidAuto: c.trim.includes('Tekna') || c.trim.includes('N-Connecta') ? 'standard' : 'not_available',
        wirelessAppleCarPlay: c.trim.includes('Tekna') || c.trim.includes('N-Connecta') ? 'standard' : 'not_available',
        speakerCount: c.trim.includes('Tekna Plus') ? 6 : 4,
      },
    }),
    sources: [
      { name: 'Nissan India Official Portal', url: 'https://www.nissan.in/vehicles/new/magnite.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Nissan Magnite Nashik', url: 'https://www.carwale.com/nissan-cars/magnite/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 2. NISSAN TEKTON (12 VARIANTS)
// ============================================================================
export const NISSAN_TEKTON_VARIANTS: CarVariant[] = [
  ...[
    // Visia
    { slug: 'visia-petrol-1-0l-turbo-manual-t160', name: 'Tekton Visia | Petrol 1.0L Turbo | Manual | T160', fullName: 'Nissan Tekton Visia 1.0L Turbo T160 6MT', trim: 'Visia', pt: NISSAN_TEKTON_1_0_TURBO_6MT, mileage: 19.41, exLakh: 10.49, onRoadLakh: 12.48 },
    // Visia Plus
    { slug: 'visia-plus-petrol-1-0l-turbo-manual-t160', name: 'Tekton Visia Plus | Petrol 1.0L Turbo | Manual | T160', fullName: 'Nissan Tekton Visia Plus 1.0L Turbo T160 6MT', trim: 'Visia Plus', pt: NISSAN_TEKTON_1_0_TURBO_6MT, mileage: 19.41, exLakh: 11.13, onRoadLakh: 13.24 },
    // Acenta
    { slug: 'acenta-petrol-1-0l-turbo-manual-t160', name: 'Tekton Acenta | Petrol 1.0L Turbo | Manual | T160', fullName: 'Nissan Tekton Acenta 1.0L Turbo T160 6MT', trim: 'Acenta T160', pt: NISSAN_TEKTON_1_0_TURBO_6MT, mileage: 19.41, exLakh: 11.77, onRoadLakh: 14.00 },
    { slug: 'acenta-petrol-1-3l-turbo-automatic-dct-t280', name: 'Tekton Acenta | Petrol 1.3L Turbo | Automatic (DCT) | T280', fullName: 'Nissan Tekton Acenta 1.3L Turbo T280 7-Speed DCT', trim: 'Acenta T280 DCT', pt: NISSAN_TEKTON_1_3_TURBO_DCT, mileage: 18.45, exLakh: 14.92, onRoadLakh: 17.74 },
    // N-Connecta
    { slug: 'n-connecta-petrol-1-0l-turbo-manual-t160', name: 'Tekton N-Connecta | Petrol 1.0L Turbo | Manual | T160', fullName: 'Nissan Tekton N-Connecta 1.0L Turbo T160 6MT', trim: 'N-Connecta T160', pt: NISSAN_TEKTON_1_0_TURBO_6MT, mileage: 19.41, exLakh: 13.64, onRoadLakh: 16.22 },
    { slug: 'n-connecta-petrol-1-3l-turbo-manual-t280', name: 'Tekton N-Connecta | Petrol 1.3L Turbo | Manual | T280', fullName: 'Nissan Tekton N-Connecta 1.3L Turbo T280 6MT', trim: 'N-Connecta T280 MT', pt: NISSAN_TEKTON_1_3_TURBO_6MT, mileage: 17.75, exLakh: 14.92, onRoadLakh: 17.74 },
    { slug: 'n-connecta-petrol-1-3l-turbo-automatic-dct-t280', name: 'Tekton N-Connecta | Petrol 1.3L Turbo | Automatic (DCT) | T280', fullName: 'Nissan Tekton N-Connecta 1.3L Turbo T280 7-Speed DCT', trim: 'N-Connecta T280 DCT', pt: NISSAN_TEKTON_1_3_TURBO_DCT, mileage: 18.45, exLakh: 16.42, onRoadLakh: 19.53 },
    // Tekna
    { slug: 'tekna-petrol-1-0l-turbo-manual-t160', name: 'Tekton Tekna | Petrol 1.0L Turbo | Manual | T160', fullName: 'Nissan Tekton Tekna 1.0L Turbo T160 6MT', trim: 'Tekna T160', pt: NISSAN_TEKTON_1_0_TURBO_6MT, mileage: 19.41, exLakh: 15.34, onRoadLakh: 18.25 },
    { slug: 'tekna-petrol-1-3l-turbo-manual-t280', name: 'Tekton Tekna | Petrol 1.3L Turbo | Manual | T280', fullName: 'Nissan Tekton Tekna 1.3L Turbo T280 6MT', trim: 'Tekna T280 MT', pt: NISSAN_TEKTON_1_3_TURBO_6MT, mileage: 17.75, exLakh: 16.32, onRoadLakh: 19.41 },
    { slug: 'tekna-petrol-1-3l-turbo-automatic-dct-t280', name: 'Tekton Tekna | Petrol 1.3L Turbo | Automatic (DCT) | T280', fullName: 'Nissan Tekton Tekna 1.3L Turbo T280 7-Speed DCT', trim: 'Tekna T280 DCT', pt: NISSAN_TEKTON_1_3_TURBO_DCT, mileage: 18.45, exLakh: 17.70, onRoadLakh: 21.05 },
    // Tekna Plus
    { slug: 'tekna-plus-petrol-1-0l-turbo-manual-t160', name: 'Tekton Tekna Plus | Petrol 1.0L Turbo | Manual | T160', fullName: 'Nissan Tekton Tekna Plus 1.0L Turbo T160 6MT', trim: 'Tekna Plus T160', pt: NISSAN_TEKTON_1_0_TURBO_6MT, mileage: 19.41, exLakh: 16.42, onRoadLakh: 19.53 },
    { slug: 'tekna-plus-petrol-1-3l-turbo-automatic-dct-t280', name: 'Tekton Tekna Plus | Petrol 1.3L Turbo | Automatic (DCT) | T280', fullName: 'Nissan Tekton Tekna Plus 1.3L Turbo T280 7-Speed DCT', trim: 'Tekna Plus T280 DCT', pt: NISSAN_TEKTON_1_3_TURBO_DCT, mileage: 18.45, exLakh: 18.48, onRoadLakh: 21.98 },
  ].map((c) => ({
    id: `nissan-tekton-${c.slug}`,
    modelId: 'nissan-tekton',
    generationId: 'tekton-2025',
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
      zeroToHundredSec: c.pt.engineDisplacementCC === 1332 ? 9.2 : 11.5,
      topSpeedKmph: c.pt.engineDisplacementCC === 1332 ? 190 : 175,
    },
    dimensions: {
      lengthMm: 4345,
      widthMm: 1815,
      heightMm: 1660,
      wheelbaseMm: 2657,
      groundClearanceMm: 215,
      kerbWeightKg: 1290,
      bootSpaceLitres: 470,
      fuelTankLitres: 50,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: c.trim.includes('Tekna') ? 18 : 17,
        alloyWheels: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        ledHeadlights: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        ledDRLs: 'standard',
        sunroof: c.trim.includes('Tekna') ? 'panoramic' : 'not_available',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        ventilatedFrontSeats: c.trim.includes('Tekna') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !c.trim.startsWith('Visia') ? 10.1 : 7.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        wirelessAppleCarPlay: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        speakerCount: c.trim.includes('Tekna Plus') ? 6 : 4,
      },
    }),
    sources: [
      { name: 'Nissan India Official Portal', url: 'https://www.nissan.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Nissan Tekton Nashik', url: 'https://www.carwale.com/nissan-cars/tekton/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 3. NISSAN GRAVITE (13 VARIANTS)
// ============================================================================
export const NISSAN_GRAVITE_VARIANTS: CarVariant[] = [
  ...[
    // Visia
    { slug: 'visia-petrol-1-0l-manual', name: 'Gravite Visia | Petrol 1.0L | Manual', fullName: 'Nissan Gravite Visia 1.0L Petrol 5MT', trim: 'Visia', pt: NISSAN_GRAVITE_1_0_5MT, mileage: 19.3, exLakh: 6.05, onRoadLakh: 6.86 },
    { slug: 'visia-cng-1-0l-manual', name: 'Gravite Visia | CNG 1.0L | Manual', fullName: 'Nissan Gravite Visia 1.0L CNG 5MT', trim: 'Visia CNG', pt: NISSAN_GRAVITE_1_0_CNG_5MT, mileage: 19.3, exLakh: 6.50, onRoadLakh: 7.37 },

    // Acenta
    { slug: 'acenta-petrol-1-0l-manual', name: 'Gravite Acenta | Petrol 1.0L | Manual', fullName: 'Nissan Gravite Acenta 1.0L Petrol 5MT', trim: 'Acenta', pt: NISSAN_GRAVITE_1_0_5MT, mileage: 19.3, exLakh: 7.02, onRoadLakh: 7.96 },
    { slug: 'acenta-cng-1-0l-manual', name: 'Gravite Acenta | CNG 1.0L | Manual', fullName: 'Nissan Gravite Acenta 1.0L CNG 5MT', trim: 'Acenta CNG', pt: NISSAN_GRAVITE_1_0_CNG_5MT, mileage: 19.3, exLakh: 7.44, onRoadLakh: 8.43 },

    // N-Connecta
    { slug: 'n-connecta-petrol-1-0l-manual', name: 'Gravite N-Connecta | Petrol 1.0L | Manual', fullName: 'Nissan Gravite N-Connecta 1.0L Petrol 5MT', trim: 'N-Connecta', pt: NISSAN_GRAVITE_1_0_5MT, mileage: 19.3, exLakh: 7.74, onRoadLakh: 8.77 },
    { slug: 'n-connecta-cng-1-0l-manual', name: 'Gravite N-Connecta | CNG 1.0L | Manual', fullName: 'Nissan Gravite N-Connecta 1.0L CNG 5MT', trim: 'N-Connecta CNG', pt: NISSAN_GRAVITE_1_0_CNG_5MT, mileage: 19.3, exLakh: 8.13, onRoadLakh: 9.21 },
    { slug: 'n-connecta-petrol-1-0l-automatic', name: 'Gravite N-Connecta | Petrol 1.0L | Automatic', fullName: 'Nissan Gravite N-Connecta 1.0L EZ-Shift AMT', trim: 'N-Connecta AMT', pt: NISSAN_GRAVITE_1_0_AMT, mileage: 19.6, exLakh: 8.32, onRoadLakh: 9.43 },

    // Tekna
    { slug: 'tekna-petrol-1-0l-manual', name: 'Gravite Tekna | Petrol 1.0L | Manual', fullName: 'Nissan Gravite Tekna 1.0L Petrol 5MT', trim: 'Tekna', pt: NISSAN_GRAVITE_1_0_5MT, mileage: 19.3, exLakh: 8.45, onRoadLakh: 9.58 },
    { slug: 'tekna-cng-1-0l-manual', name: 'Gravite Tekna | CNG 1.0L | Manual', fullName: 'Nissan Gravite Tekna 1.0L CNG 5MT', trim: 'Tekna CNG', pt: NISSAN_GRAVITE_1_0_CNG_5MT, mileage: 19.3, exLakh: 8.84, onRoadLakh: 10.02 },
    { slug: 'tekna-petrol-1-0l-automatic', name: 'Gravite Tekna | Petrol 1.0L | Automatic', fullName: 'Nissan Gravite Tekna 1.0L EZ-Shift AMT', trim: 'Tekna AMT', pt: NISSAN_GRAVITE_1_0_AMT, mileage: 19.6, exLakh: 9.03, onRoadLakh: 10.23 },

    // Tekna LE
    { slug: 'tekna-le-petrol-1-0l-manual', name: 'Gravite Tekna LE | Petrol 1.0L | Manual', fullName: 'Nissan Gravite Tekna LE 1.0L Petrol 5MT', trim: 'Tekna LE', pt: NISSAN_GRAVITE_1_0_5MT, mileage: 19.3, exLakh: 8.78, onRoadLakh: 9.95 },
    { slug: 'tekna-le-cng-1-0l-manual', name: 'Gravite Tekna LE | CNG 1.0L | Manual', fullName: 'Nissan Gravite Tekna LE 1.0L CNG 5MT', trim: 'Tekna LE CNG', pt: NISSAN_GRAVITE_1_0_CNG_5MT, mileage: 19.3, exLakh: 9.28, onRoadLakh: 10.52 },
    { slug: 'tekna-le-petrol-1-0l-automatic', name: 'Gravite Tekna LE | Petrol 1.0L | Automatic', fullName: 'Nissan Gravite Tekna LE 1.0L EZ-Shift AMT', trim: 'Tekna LE AMT', pt: NISSAN_GRAVITE_1_0_AMT, mileage: 19.6, exLakh: 9.35, onRoadLakh: 10.59 },
  ].map((c) => ({
    id: `nissan-gravite-${c.slug}`,
    modelId: 'nissan-gravite',
    generationId: 'gravite-2025',
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
      zeroToHundredSec: 14.6,
      topSpeedKmph: 150,
    },
    dimensions: {
      lengthMm: 3990,
      widthMm: 1739,
      heightMm: 1643,
      wheelbaseMm: 2636,
      groundClearanceMm: 182,
      kerbWeightKg: 950,
      bootSpaceLitres: 625,
      fuelTankLitres: c.pt.fuelType === 'CNG' ? 60 : 40,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6, // Visia offers six airbags with ESP
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 15,
        alloyWheels: c.trim.includes('Tekna') ? 'standard' : 'not_available',
        ledHeadlights: c.trim.includes('Tekna') ? 'standard' : 'not_available',
        ledDRLs: 'standard',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: !c.trim.startsWith('Visia') ? 'standard' : 'not_available', // second- and third-row AC vents
      },
      infotainment: {
        infotainmentScreenSizeInches: !c.trim.startsWith('Visia') ? 8.0 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        appleCarPlay: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        wirelessAndroidAuto: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        wirelessAppleCarPlay: !c.trim.startsWith('Visia') ? 'standard' : 'not_available',
        speakerCount: c.trim.includes('Tekna') ? 6 : 4,
      },
    }),
    sources: [
      { name: 'Nissan India Official Portal', url: 'https://www.nissan.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Nissan Gravite Nashik', url: 'https://www.carwale.com/nissan-cars/gravite/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 4. NISSAN X-TRAIL (1 VARIANT)
// ============================================================================
export const NISSAN_XTRAIL_VARIANTS: CarVariant[] = [
  {
    id: 'nissan-x-trail-mild-hybrid-cvt',
    modelId: 'nissan-x-trail',
    generationId: 'x-trail-t33-2024',
    name: 'X-Trail Mild Hybrid CVT',
    fullName: 'Nissan X-Trail 1.5L VC-Turbo Mild Hybrid X-Tronic CVT',
    slug: 'mild-hybrid-cvt',
    trim: 'Mild Hybrid CVT',
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: 4992000,
      exShowroomLakh: 49.92,
      onRoadNashik: 5720000,
      onRoadNashikLakh: 57.20,
      currency: 'INR',
    },
    powertrain: NISSAN_XTRAIL_1_5_HYBRID_CVT,
    performance: {
      mileageKmpl: 13.7,
      zeroToHundredSec: 9.6,
      topSpeedKmph: 195,
    },
    dimensions: {
      lengthMm: 4680,
      widthMm: 1840,
      heightMm: 1725,
      wheelbaseMm: 2705,
      groundClearanceMm: 210,
      kerbWeightKg: 1665,
      bootSpaceLitres: 585,
      fuelTankLitres: 55,
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
        wheelSizeInches: 20,
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
        speakerCount: 8,
      },
    }),
    sources: [
      { name: 'Nissan India Official Portal', url: 'https://www.nissan.in/vehicles/new/x-trail.html', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Nissan X-Trail Nashik', url: 'https://www.carwale.com/nissan-cars/x-trail/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];
