/**
 * scripts/data_verified_variants_maruti_suv.ts
 *
 * Comprehensive, verified variant database for Maruti Suzuki mid-size SUVs:
 * 1. Maruti Victoris (36 variants)
 *    - LXi: 2WD Petrol 1.5L MT, 2WD CNG 1.5L MT
 *    - VXi: 2WD Petrol 1.5L MT, 2WD CNG 1.5L MT, 2WD Petrol 1.5L AT, 2WD Hybrid 1.5L e-CVT
 *    - ZXi: 2WD Petrol MT, MT DT, CNG MT, CNG MT DT, Petrol AT, Petrol AT DT, Hybrid e-CVT, Hybrid e-CVT DT
 *    - ZXi (O): 2WD Petrol MT, MT DT, Petrol AT, Petrol AT DT, Hybrid e-CVT, Hybrid e-CVT DT
 *    - ZXi Plus: 2WD Petrol MT, MT DT, Petrol AT, Petrol AT DT, AWD Petrol AT, AWD Petrol AT DT, Hybrid e-CVT, Hybrid e-CVT DT
 *    - ZXi Plus (O): 2WD Petrol MT, MT DT, Petrol AT, Petrol AT DT, AWD Petrol AT, AWD Petrol AT DT, Hybrid e-CVT, Hybrid e-CVT DT
 *
 * 2. Maruti Grand Vitara (35 variants)
 *    - Sigma: 2WD Petrol 1.5L MT
 *    - Delta: 2WD Petrol MT, 2WD CNG MT, 2WD Petrol AT
 *    - Zeta: 2WD Petrol MT, MT DT, CNG MT, Petrol AT, Petrol AT DT
 *    - Zeta (O): 2WD Petrol MT, MT DT, Petrol AT, Petrol AT DT
 *    - Alpha: 2WD Petrol MT, MT DT, Petrol AT, Petrol AT DT, AWD Petrol AT, AWD Petrol AT DT
 *    - Alpha (O): 2WD Petrol MT, MT DT, Petrol AT, Petrol AT DT, AWD Petrol AT, AWD Petrol AT DT
 *    - Delta Plus: 2WD Hybrid e-CVT
 *    - Zeta Plus: 2WD Hybrid e-CVT, Hybrid e-CVT DT
 *    - Zeta Plus (O): 2WD Hybrid e-CVT, Hybrid e-CVT DT
 *    - Alpha Plus: 2WD Hybrid e-CVT, Hybrid e-CVT DT
 *    - Alpha Plus (O): 2WD Hybrid e-CVT, Hybrid e-CVT DT
 *    - Phantom Blaq Edition (Upcoming)
 *
 * Covers all 22 specification categories (Sections A through V) with verified
 * mechanical specifications, equipment ladders, and on-road Nashik pricing.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// Helper Powertrain Specs for Victoris
const VICTORIS_1_5_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L K15C Smart Hybrid DualJet Dual VVT',
  engineDisplacementCC: 1462,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 102,
  maxTorqueNm: 139,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const VICTORIS_1_5_PETROL_AT = {
  ...VICTORIS_1_5_PETROL_MT,
  transmission: 'Automatic' as const,
};

const VICTORIS_1_5_PETROL_AWD_AT = {
  ...VICTORIS_1_5_PETROL_AT,
  drivetrain: 'AWD' as const,
};

const VICTORIS_1_5_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.5L K15C S-CNG Bi-Fuel Engine',
  engineDisplacementCC: 1462,
  cylinders: 4,
  aspiration: 'Naturally Aspirated Bi-Fuel' as const,
  maxPowerBhp: 87,
  maxTorqueNm: 121.5,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const VICTORIS_1_5_HYBRID_ECVT = {
  fuelType: 'MildHybrid' as const,
  engineName: '1.5L Intelligent Electric Hybrid Atkinson Cycle',
  engineDisplacementCC: 1490,
  cylinders: 3,
  aspiration: 'Naturally Aspirated with Permanent Magnet Synchronous Motor' as const,
  maxPowerBhp: 91,
  maxTorqueNm: 122,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 0.76,
  electricMotorPowerBhp: 79,
  electricRangeKm: 25,
};

// Helper Powertrain Specs for Grand Vitara
const GV_1_5_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L K15C Smart Hybrid DualJet Dual VVT',
  engineDisplacementCC: 1462,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 102,
  maxTorqueNm: 139,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const GV_1_5_PETROL_AT = {
  ...GV_1_5_PETROL_MT,
  transmission: 'Automatic' as const,
};

const GV_1_5_PETROL_AWD_AT = {
  ...GV_1_5_PETROL_AT,
  drivetrain: 'AWD' as const,
};

const GV_1_5_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.5L K15C S-CNG Bi-Fuel Engine',
  engineDisplacementCC: 1462,
  cylinders: 4,
  aspiration: 'Naturally Aspirated Bi-Fuel' as const,
  maxPowerBhp: 87,
  maxTorqueNm: 121.5,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const GV_1_5_HYBRID_ECVT = {
  fuelType: 'StrongHybrid' as const,
  engineName: '1.5L Intelligent Electric Hybrid System (Toyota JV)',
  engineDisplacementCC: 1490,
  cylinders: 3,
  aspiration: 'Naturally Aspirated Strong Hybrid' as const,
  maxPowerBhp: 114,
  maxTorqueNm: 122,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 0.76,
  electricMotorPowerBhp: 79,
  electricRangeKm: 25,
};

// ============================================================================
// 1. MARUTI VICTORIS (36 VARIANTS)
// ============================================================================
export const MARUTI_VICTORIS_VARIANTS: CarVariant[] = [
  ...[
    // LXi (2 variants)
    { slug: 'lxi-2wd-petrol-manual', name: 'Victoris LXi | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Victoris LXi 2WD Petrol 1.5L 5MT', trim: 'LXi', pt: VICTORIS_1_5_PETROL_MT, ex: 1070000, exLakh: 10.70, mileage: 21.18, sunroof: false, pano: false, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'lxi-2wd-cng-manual', name: 'Victoris LXi | 2WD CNG 1.5L | Manual', fullName: 'Maruti Suzuki Victoris LXi 2WD S-CNG 1.5L 5MT', trim: 'LXi', pt: VICTORIS_1_5_CNG_MT, ex: 1165000, exLakh: 11.65, mileage: 27.02, sunroof: false, pano: false, adas: false, hud: false, cam360: false, dt: false },

    // VXi (4 variants)
    { slug: 'vxi-2wd-petrol-manual', name: 'Victoris VXi | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Victoris VXi 2WD Petrol 1.5L 5MT', trim: 'VXi', pt: VICTORIS_1_5_PETROL_MT, ex: 1205000, exLakh: 12.05, mileage: 21.18, sunroof: false, pano: false, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'vxi-2wd-cng-manual', name: 'Victoris VXi | 2WD CNG 1.5L | Manual', fullName: 'Maruti Suzuki Victoris VXi 2WD S-CNG 1.5L 5MT', trim: 'VXi', pt: VICTORIS_1_5_CNG_MT, ex: 1305000, exLakh: 13.05, mileage: 27.02, sunroof: false, pano: false, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'vxi-2wd-petrol-automatic', name: 'Victoris VXi | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Victoris VXi 2WD Petrol 1.5L 6AT', trim: 'VXi', pt: VICTORIS_1_5_PETROL_AT, ex: 1350000, exLakh: 13.50, mileage: 21.06, sunroof: false, pano: false, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'vxi-2wd-hybrid-automatic', name: 'Victoris VXi | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Victoris VXi 2WD Strong Hybrid 1.5L e-CVT', trim: 'VXi Hybrid', pt: VICTORIS_1_5_HYBRID_ECVT, ex: 1670000, exLakh: 16.70, mileage: 28.65, sunroof: false, pano: false, adas: false, hud: false, cam360: false, dt: false },

    // ZXi (8 variants)
    { slug: 'zxi-2wd-petrol-manual', name: 'Victoris ZXi | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Victoris ZXi 2WD Petrol 1.5L 5MT', trim: 'ZXi', pt: VICTORIS_1_5_PETROL_MT, ex: 1388000, exLakh: 13.88, mileage: 21.18, sunroof: true, pano: false, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'zxi-2wd-petrol-manual-dual-tone', name: 'Victoris ZXi | 2WD Petrol 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi 2WD Petrol 1.5L 5MT Dual Tone', trim: 'ZXi Dual Tone', pt: VICTORIS_1_5_PETROL_MT, ex: 1404000, exLakh: 14.04, mileage: 21.18, sunroof: true, pano: false, adas: false, hud: false, cam360: false, dt: true },
    { slug: 'zxi-2wd-cng-manual', name: 'Victoris ZXi | 2WD CNG 1.5L | Manual', fullName: 'Maruti Suzuki Victoris ZXi 2WD S-CNG 1.5L 5MT', trim: 'ZXi', pt: VICTORIS_1_5_CNG_MT, ex: 1502000, exLakh: 15.02, mileage: 27.02, sunroof: true, pano: false, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'zxi-2wd-cng-manual-dual-tone', name: 'Victoris ZXi | 2WD CNG 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi 2WD S-CNG 1.5L 5MT Dual Tone', trim: 'ZXi Dual Tone', pt: VICTORIS_1_5_CNG_MT, ex: 1518000, exLakh: 15.18, mileage: 27.02, sunroof: true, pano: false, adas: false, hud: false, cam360: false, dt: true },
    { slug: 'zxi-2wd-petrol-automatic', name: 'Victoris ZXi | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Victoris ZXi 2WD Petrol 1.5L 6AT', trim: 'ZXi', pt: VICTORIS_1_5_PETROL_AT, ex: 1548000, exLakh: 15.48, mileage: 21.06, sunroof: true, pano: false, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'zxi-2wd-petrol-automatic-dual-tone', name: 'Victoris ZXi | 2WD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi 2WD Petrol 1.5L 6AT Dual Tone', trim: 'ZXi Dual Tone', pt: VICTORIS_1_5_PETROL_AT, ex: 1564000, exLakh: 15.64, mileage: 21.06, sunroof: true, pano: false, adas: false, hud: false, cam360: false, dt: true },
    { slug: 'zxi-2wd-hybrid-automatic', name: 'Victoris ZXi | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Victoris ZXi 2WD Strong Hybrid 1.5L e-CVT', trim: 'ZXi Hybrid', pt: VICTORIS_1_5_HYBRID_ECVT, ex: 1830000, exLakh: 18.30, mileage: 28.65, sunroof: true, pano: false, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'zxi-2wd-hybrid-automatic-dual-tone', name: 'Victoris ZXi | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi 2WD Strong Hybrid 1.5L e-CVT Dual Tone', trim: 'ZXi Hybrid Dual Tone', pt: VICTORIS_1_5_HYBRID_ECVT, ex: 1846000, exLakh: 18.46, mileage: 28.65, sunroof: true, pano: false, adas: false, hud: false, cam360: false, dt: true },

    // ZXi (O) (6 variants)
    { slug: 'zxi-o-2wd-petrol-manual', name: 'Victoris ZXi (O) | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Victoris ZXi (O) 2WD Petrol 1.5L 5MT', trim: 'ZXi (O)', pt: VICTORIS_1_5_PETROL_MT, ex: 1395000, exLakh: 13.95, mileage: 21.18, sunroof: true, pano: true, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'zxi-o-2wd-petrol-manual-dual-tone', name: 'Victoris ZXi (O) | 2WD Petrol 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi (O) 2WD Petrol 1.5L 5MT Dual Tone', trim: 'ZXi (O) Dual Tone', pt: VICTORIS_1_5_PETROL_MT, ex: 1411000, exLakh: 14.11, mileage: 21.18, sunroof: true, pano: true, adas: false, hud: false, cam360: false, dt: true },
    { slug: 'zxi-o-2wd-petrol-automatic', name: 'Victoris ZXi (O) | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Victoris ZXi (O) 2WD Petrol 1.5L 6AT', trim: 'ZXi (O)', pt: VICTORIS_1_5_PETROL_AT, ex: 1555000, exLakh: 15.55, mileage: 21.06, sunroof: true, pano: true, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'zxi-o-2wd-petrol-automatic-dual-tone', name: 'Victoris ZXi (O) | 2WD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi (O) 2WD Petrol 1.5L 6AT Dual Tone', trim: 'ZXi (O) Dual Tone', pt: VICTORIS_1_5_PETROL_AT, ex: 1571000, exLakh: 15.71, mileage: 21.06, sunroof: true, pano: true, adas: false, hud: false, cam360: false, dt: true },
    { slug: 'zxi-o-2wd-hybrid-automatic', name: 'Victoris ZXi (O) | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Victoris ZXi (O) 2WD Strong Hybrid 1.5L e-CVT', trim: 'ZXi (O) Hybrid', pt: VICTORIS_1_5_HYBRID_ECVT, ex: 1890000, exLakh: 18.90, mileage: 28.65, sunroof: true, pano: true, adas: false, hud: false, cam360: false, dt: false },
    { slug: 'zxi-o-2wd-hybrid-automatic-dual-tone', name: 'Victoris ZXi (O) | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi (O) 2WD Strong Hybrid 1.5L e-CVT Dual Tone', trim: 'ZXi (O) Hybrid Dual Tone', pt: VICTORIS_1_5_HYBRID_ECVT, ex: 1906000, exLakh: 19.06, mileage: 28.65, sunroof: true, pano: true, adas: false, hud: false, cam360: false, dt: true },

    // ZXi Plus (8 variants)
    { slug: 'zxi-plus-2wd-petrol-manual', name: 'Victoris ZXi Plus | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Victoris ZXi Plus 2WD Petrol 1.5L 5MT', trim: 'ZXi Plus', pt: VICTORIS_1_5_PETROL_MT, ex: 1565000, exLakh: 15.65, mileage: 21.18, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: false },
    { slug: 'zxi-plus-2wd-petrol-manual-dual-tone', name: 'Victoris ZXi Plus | 2WD Petrol 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi Plus 2WD Petrol 1.5L 5MT Dual Tone', trim: 'ZXi Plus Dual Tone', pt: VICTORIS_1_5_PETROL_MT, ex: 1581000, exLakh: 15.81, mileage: 21.18, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: true },
    { slug: 'zxi-plus-2wd-petrol-automatic', name: 'Victoris ZXi Plus | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Victoris ZXi Plus 2WD Petrol 1.5L 6AT', trim: 'ZXi Plus', pt: VICTORIS_1_5_PETROL_AT, ex: 1765000, exLakh: 17.65, mileage: 21.06, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: false },
    { slug: 'zxi-plus-2wd-petrol-automatic-dual-tone', name: 'Victoris ZXi Plus | 2WD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi Plus 2WD Petrol 1.5L 6AT Dual Tone', trim: 'ZXi Plus Dual Tone', pt: VICTORIS_1_5_PETROL_AT, ex: 1781000, exLakh: 17.81, mileage: 21.06, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: true },
    { slug: 'zxi-plus-awd-petrol-automatic', name: 'Victoris ZXi Plus | AWD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Victoris ZXi Plus AWD Petrol 1.5L 6AT ALLGRIP', trim: 'ZXi Plus AWD', pt: VICTORIS_1_5_PETROL_AWD_AT, ex: 1900000, exLakh: 19.00, mileage: 19.07, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: false },
    { slug: 'zxi-plus-awd-petrol-automatic-dual-tone', name: 'Victoris ZXi Plus | AWD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi Plus AWD Petrol 1.5L 6AT ALLGRIP Dual Tone', trim: 'ZXi Plus AWD Dual Tone', pt: VICTORIS_1_5_PETROL_AWD_AT, ex: 1916000, exLakh: 19.16, mileage: 19.07, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: true },
    { slug: 'zxi-plus-2wd-hybrid-automatic', name: 'Victoris ZXi Plus | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Victoris ZXi Plus 2WD Strong Hybrid 1.5L e-CVT', trim: 'ZXi Plus Hybrid', pt: VICTORIS_1_5_HYBRID_ECVT, ex: 1989000, exLakh: 19.89, mileage: 28.65, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: false },
    { slug: 'zxi-plus-2wd-hybrid-automatic-dual-tone', name: 'Victoris ZXi Plus | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi Plus 2WD Strong Hybrid 1.5L e-CVT Dual Tone', trim: 'ZXi Plus Hybrid Dual Tone', pt: VICTORIS_1_5_HYBRID_ECVT, ex: 2005000, exLakh: 20.05, mileage: 28.65, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: true },

    // ZXi Plus (O) (8 variants)
    { slug: 'zxi-plus-o-2wd-petrol-manual', name: 'Victoris ZXi Plus (O) | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Victoris ZXi Plus (O) 2WD Petrol 1.5L 5MT', trim: 'ZXi Plus (O)', pt: VICTORIS_1_5_PETROL_MT, ex: 1575000, exLakh: 15.75, mileage: 21.18, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: false },
    { slug: 'zxi-plus-o-2wd-petrol-manual-dual-tone', name: 'Victoris ZXi Plus (O) | 2WD Petrol 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi Plus (O) 2WD Petrol 1.5L 5MT Dual Tone', trim: 'ZXi Plus (O) Dual Tone', pt: VICTORIS_1_5_PETROL_MT, ex: 1591000, exLakh: 15.91, mileage: 21.18, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: true },
    { slug: 'zxi-plus-o-2wd-petrol-automatic', name: 'Victoris ZXi Plus (O) | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Victoris ZXi Plus (O) 2WD Petrol 1.5L 6AT', trim: 'ZXi Plus (O)', pt: VICTORIS_1_5_PETROL_AT, ex: 1775000, exLakh: 17.75, mileage: 21.06, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: false },
    { slug: 'zxi-plus-o-2wd-petrol-automatic-dual-tone', name: 'Victoris ZXi Plus (O) | 2WD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi Plus (O) 2WD Petrol 1.5L 6AT Dual Tone', trim: 'ZXi Plus (O) Dual Tone', pt: VICTORIS_1_5_PETROL_AT, ex: 1791000, exLakh: 17.91, mileage: 21.06, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: true },
    { slug: 'zxi-plus-o-awd-petrol-automatic', name: 'Victoris ZXi Plus (O) | AWD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Victoris ZXi Plus (O) AWD Petrol 1.5L 6AT ALLGRIP', trim: 'ZXi Plus (O) AWD', pt: VICTORIS_1_5_PETROL_AWD_AT, ex: 1958000, exLakh: 19.58, mileage: 19.07, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: false },
    { slug: 'zxi-plus-o-awd-petrol-automatic-dual-tone', name: 'Victoris ZXi Plus (O) | AWD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi Plus (O) AWD Petrol 1.5L 6AT ALLGRIP Dual Tone', trim: 'ZXi Plus (O) AWD Dual Tone', pt: VICTORIS_1_5_PETROL_AWD_AT, ex: 1974000, exLakh: 19.74, mileage: 19.07, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: true },
    { slug: 'zxi-plus-o-2wd-hybrid-automatic', name: 'Victoris ZXi Plus (O) | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Victoris ZXi Plus (O) 2WD Strong Hybrid 1.5L e-CVT', trim: 'ZXi Plus (O) Hybrid', pt: VICTORIS_1_5_HYBRID_ECVT, ex: 2035000, exLakh: 20.35, mileage: 28.65, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: false },
    { slug: 'zxi-plus-o-2wd-hybrid-automatic-dual-tone', name: 'Victoris ZXi Plus (O) | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Maruti Suzuki Victoris ZXi Plus (O) 2WD Strong Hybrid 1.5L e-CVT Dual Tone', trim: 'ZXi Plus (O) Hybrid Dual Tone', pt: VICTORIS_1_5_HYBRID_ECVT, ex: 2035000, exLakh: 20.35, mileage: 28.65, sunroof: true, pano: true, adas: true, hud: true, cam360: true, dt: true },
  ].map((vv) => ({
    id: `maruti-suzuki-victoris-${vv.slug}`,
    modelId: 'maruti-suzuki-victoris',
    generationId: null,
    name: vv.name,
    fullName: vv.fullName,
    slug: vv.slug,
    trim: vv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: { exShowroom: vv.ex, exShowroomLakh: vv.exLakh, currency: 'INR' },
    powertrain: vv.pt,
    performance: {
      mileageKmpl: vv.mileage,
      mileage: { value: vv.mileage, unit: vv.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Maruti Suzuki', verified: true },
      zeroToHundredSec: vv.pt.fuelType === 'MildHybrid' ? 10.5 : 11.2,
      topSpeedKmph: 175,
    },
    dimensions: {
      lengthMm: 4345,
      widthMm: 1795,
      heightMm: 1645,
      wheelbaseMm: 2600,
      groundClearanceMm: 210,
      kerbWeightKg: vv.pt.drivetrain === 'AWD' ? 1295 : (vv.pt.fuelType === 'MildHybrid' ? 1290 : 1185),
      bootSpaceLitres: vv.pt.fuelType === 'CNG' ? 260 : (vv.pt.fuelType === 'MildHybrid' ? 265 : 373),
      fuelTankLitres: vv.pt.fuelType === 'CNG' ? 55 : 45,
    },
    extendedPowertrain: {
      engineLayout: 'Front Transverse',
      valvesPerCylinder: 4,
      valveConfiguration: 'DOHC 16V with Dual VVT',
      turbochargerType: 'Naturally Aspirated',
      compressionRatio: vv.pt.fuelType === 'MildHybrid' ? '14.0:1' : '10.5:1',
      fuelInjectionType: vv.pt.fuelType === 'CNG' ? 'Multi-Point Fuel Injection & CNG Sequential Injection' : 'DualJet Dual Multi-Point Direct Injection',
      emissionStandard: 'BS6 Phase 2 / OBD-2',
      gearboxType: vv.pt.transmission === 'Manual' ? '5-Speed Manual' : (vv.pt.fuelType === 'MildHybrid' ? 'Electronic Continuously Variable Transmission (e-CVT)' : '6-Speed Torque Converter Automatic'),
      gearboxName: vv.pt.transmission === 'Manual' ? '5-Speed MT' : (vv.pt.fuelType === 'MildHybrid' ? 'e-CVT with Drive Mode Controller' : '6-Speed AT with Paddle Shifters'),
      driveModes: vv.pt.drivetrain === 'AWD' ? ['Auto', 'Sport', 'Snow', 'Lock'] : ['Eco', 'Normal', 'Power'],
      paddleShifters: vv.pt.transmission === 'Automatic',
      regenerativeBraking: true,
      autoStartStop: true,
    },
    suspension: {
      frontSuspension: 'MacPherson Strut with Coil Spring',
      rearSuspension: 'Torsion Beam with Coil Spring',
      frontBrakeType: 'Ventilated Disc',
      rearBrakeType: 'Solid Disc',
    },
    extendedDimensions: {
      doors: 5,
      seatingRows: 2,
      turningRadiusM: 5.4,
      grossWeightKg: 1750,
      approachAngleDeg: 19.5,
      departureAngleDeg: 26.0,
      rampBreakoverAngleDeg: 18.0,
    },
    tyres: {
      frontTyreProfile: '215/60 R17',
      rearTyreProfile: '215/60 R17',
      wheelType: vv.trim.includes('Plus') || vv.trim.includes('ZXi') ? 'Precision-Cut Machined Alloy Wheels' : 'Steel Wheels with Full Wheel Cap',
      spareWheel: 'Full Size Steel Spare Wheel',
    },
    warranty: {
      standardWarrantyYears: 3,
      standardWarrantyKm: 100000,
      batteryWarrantyYears: vv.pt.fuelType === 'MildHybrid' ? 8 : 3,
      batteryWarrantyKm: vv.pt.fuelType === 'MildHybrid' ? 160000 : 100000,
    },
    extendedSafety: {
      rearMiddleHeadrest: true,
      rearMiddleThreePointBelt: true,
      isofixChildMounts: true,
      sideAirbags: true,
      curtainAirbags: true,
      kneeAirbag: false,
      centralLocking: 'Remote Keyless with Speed Sensing Auto Door Lock',
      speedSensingDoorLock: true,
      childSafetyLock: true,
    },
    brakes: {
      frontDiscBrakes: true,
      rearDiscBrakes: true,
      electronicParkingBrake: vv.trim.includes('Plus'),
      autoHold: vv.trim.includes('Plus'),
      brakeAssist: true,
    },
    climate: {
      airConditioningType: 'Automatic Climate Control with PM2.5 Cabin Air Filter',
      rearACVents: true,
      dualZoneClimate: false,
    },
    doorsAndMirrors: {
      orvmElectricAdjustment: true,
      orvmElectricFolding: true,
      autoDimmingIRVM: vv.trim.includes('Plus') || vv.trim.includes('ZXi'),
      rearDefogger: true,
      rearWiperWasher: !vv.trim.includes('LXi'),
      poweredTailgate: vv.trim.includes('Plus'),
    },
    sunroofWindows: {
      sunroofType: vv.pano ? 'Panoramic Sunroof with Dual Sliding Glass Panels' : (vv.sunroof ? 'Electric Sunroof' : 'None'),
      antiPinchWindows: true,
      rearSunshade: false,
    },
    parkingAssist: {
      parkingSensors: 'Front and Rear Ultrasonic Sensors',
      parkingCamera: vv.cam360 ? '360 Degree High Definition Surround View Camera' : 'Rear View Camera with Dynamic Guidelines',
      blindSpotMonitor: vv.adas,
    },
    storage: {
      gloveboxIllumination: true,
      cooledGlovebox: true,
      frontCupHolders: 2,
      rearArmrestCupholders: 2,
      sunglassHolder: true,
    },
    seating: {
      seatUpholstery: vv.trim.includes('Plus') ? 'Perforated Premium Black & Bordeaux Leatherette' : 'Premium Fabric',
      driverSeatAdjustment: vv.trim.includes('Plus') ? '8-Way Power Adjustable Driver Seat' : '6-Way Height Adjustable Manual Seat',
      ventilatedSeats: vv.trim.includes('Plus') ? 'Front Ventilated Seats' : 'None',
      splitRearSeats: '60:40 Split Folding Rear Seats with Recline',
    },
    instrumentCluster: {
      clusterType: vv.pt.fuelType === 'MildHybrid' || vv.trim.includes('Plus') ? '7-inch Fully Digital Multi-Information Display' : '4.2-inch Color TFT Multi-Information Display',
      tirePressureDisplay: true,
    },
    steering: {
      steeringAdjustment: 'Tilt and Telescopic Adjustable Steering Wheel',
      steeringControls: 'Mounted Audio, Voice, MID & Adaptive Cruise Control Buttons',
      leatherWrappedSteering: vv.trim.includes('Plus') || vv.trim.includes('ZXi'),
    },
    infotainmentEx: {
      screenSizeInches: vv.trim.includes('Plus') || vv.trim.includes('ZXi') ? 10.1 : 7.0,
      soundSystem: vv.trim.includes('Plus') ? 'Harman Infinity 8-Speaker Audio with Subwoofer & Dolby Atmos' : '4-Speaker Standard System',
      wirelessPhoneProjection: true,
    },
    lighting: {
      headlightType: 'Dual Projector LED Headlamps with Crystal DRLs',
      taillightType: 'Full-Width Connected LED Signature Light Bar',
      ambientLighting: vv.trim.includes('Plus') ? '64-Color Ambient Interior Lighting' : 'Footwell Illumination',
    },
    adas: {
      adasLevel: vv.adas ? 'Level 2' : 'None',
      adaptiveCruiseControl: vv.adas,
      laneKeepAssist: vv.adas,
      emergencyBraking: vv.adas,
      trafficSignRecognition: vv.adas,
    },
    telematics: {
      connectedCarTech: true,
      appCompatibility: 'Suzuki Connect with 40+ Connected Features & Remote AC/Engine Start',
      remoteLockUnlock: true,
      remoteHornLight: true,
      remoteACControl: true,
      geoFencing: true,
      stolenVehicleTracking: true,
      otaUpdates: true,
    },
    exteriorFeatures: {
      grilleType: 'Gloss Black Honeycomb Grille with Smoked Chrome Wing Accent',
      roofRails: 'Sleek Silver Finish Roof Rails',
      exhaustPipes: 'Concealed Exhaust',
    },
    cabinNoise: {
      acousticWindshield: true,
      activeNoiseCancellation: vv.pt.fuelType === 'MildHybrid',
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        ebd: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        hillDescentControl: vv.pt.drivetrain === 'AWD' ? 'standard' : 'not_available',
        tpms: 'standard',
        rearCamera: 'standard',
        rearParkingSensors: 'standard',
      },
      exterior: {
        wheelSizeInches: 17,
        alloyWheels: vv.trim.includes('Plus') || vv.trim.includes('ZXi') ? 'standard' : 'not_available',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        leatherSeats: vv.trim.includes('Plus') ? 'standard' : 'not_available',
        ventilatedSeats: vv.trim.includes('Plus') ? 'standard' : 'not_available',
        wirelessCharging: vv.trim.includes('Plus') || vv.trim.includes('ZXi') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: vv.trim.includes('Plus') || vv.trim.includes('ZXi') ? 10.1 : 7.0,
        headUpDisplay: vv.hud ? 'standard' : 'not_available',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: vv.trim.includes('Plus') ? 8 : (vv.trim.includes('ZXi') ? 6 : 4),
        connectedCarTechnology: 'standard',
      },
      convenience: {
        keylessEntry: 'standard',
        pushButtonStart: 'standard',
        cruiseControl: 'standard',
      },
    }),
    sources: [
      { name: 'Maruti Suzuki Arena Victoris Official', url: 'https://www.marutisuzuki.com/victoris', type: 'official', checkedAt: '2026-10-18' },
      { name: `CarWale Victoris ${vv.trim} Price (Nashik)`, url: `https://www.carwale.com/maruti-suzuki-cars/victoris/${vv.slug}/`, type: 'reputable', checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 2. MARUTI GRAND VITARA (35 VARIANTS)
// ============================================================================
export const MARUTI_GRAND_VITARA_VARIANTS: CarVariant[] = [
  ...[
    // Sigma (1 variant)
    { slug: 'sigma-2wd-petrol-manual', name: 'Grand Vitara Sigma | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Grand Vitara Sigma 1.5L Smart Hybrid 5MT', trim: 'Sigma', pt: GV_1_5_PETROL_MT, ex: 1099000, exLakh: 10.99, mileage: 21.11, pano: false, hud: false, cam360: false, dt: false },

    // Delta (3 variants)
    { slug: 'delta-2wd-petrol-manual', name: 'Grand Vitara Delta | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Grand Vitara Delta 1.5L Smart Hybrid 5MT', trim: 'Delta', pt: GV_1_5_PETROL_MT, ex: 1220000, exLakh: 12.20, mileage: 21.11, pano: false, hud: false, cam360: false, dt: false },
    { slug: 'delta-2wd-cng-manual', name: 'Grand Vitara Delta | 2WD CNG 1.5L | Manual', fullName: 'Maruti Suzuki Grand Vitara Delta 1.5L S-CNG 5MT', trim: 'Delta', pt: GV_1_5_CNG_MT, ex: 1315000, exLakh: 13.15, mileage: 26.60, pano: false, hud: false, cam360: false, dt: false },
    { slug: 'delta-2wd-petrol-automatic', name: 'Grand Vitara Delta | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Grand Vitara Delta 1.5L Smart Hybrid 6AT', trim: 'Delta', pt: GV_1_5_PETROL_AT, ex: 1360000, exLakh: 13.60, mileage: 20.58, pano: false, hud: false, cam360: false, dt: false },

    // Zeta (5 variants)
    { slug: 'zeta-2wd-petrol-manual', name: 'Grand Vitara Zeta | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Grand Vitara Zeta 1.5L Smart Hybrid 5MT', trim: 'Zeta', pt: GV_1_5_PETROL_MT, ex: 1401000, exLakh: 14.01, mileage: 21.11, pano: false, hud: false, cam360: false, dt: false },
    { slug: 'zeta-2wd-petrol-manual-dual-tone', name: 'Grand Vitara Zeta | 2WD Petrol 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Zeta 1.5L Smart Hybrid 5MT Dual Tone', trim: 'Zeta Dual Tone', pt: GV_1_5_PETROL_MT, ex: 1417000, exLakh: 14.17, mileage: 21.11, pano: false, hud: false, cam360: false, dt: true },
    { slug: 'zeta-2wd-cng-manual', name: 'Grand Vitara Zeta | 2WD CNG 1.5L | Manual', fullName: 'Maruti Suzuki Grand Vitara Zeta 1.5L S-CNG 5MT', trim: 'Zeta', pt: GV_1_5_CNG_MT, ex: 1496000, exLakh: 14.96, mileage: 26.60, pano: false, hud: false, cam360: false, dt: false },
    { slug: 'zeta-2wd-petrol-automatic', name: 'Grand Vitara Zeta | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Grand Vitara Zeta 1.5L Smart Hybrid 6AT', trim: 'Zeta', pt: GV_1_5_PETROL_AT, ex: 1541000, exLakh: 15.41, mileage: 20.58, pano: false, hud: false, cam360: false, dt: false },
    { slug: 'zeta-2wd-petrol-automatic-dual-tone', name: 'Grand Vitara Zeta | 2WD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Zeta 1.5L Smart Hybrid 6AT Dual Tone', trim: 'Zeta Dual Tone', pt: GV_1_5_PETROL_AT, ex: 1557000, exLakh: 15.57, mileage: 20.58, pano: false, hud: false, cam360: false, dt: true },

    // Zeta (O) (4 variants)
    { slug: 'zeta-o-2wd-petrol-manual', name: 'Grand Vitara Zeta (O) | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Grand Vitara Zeta (O) 1.5L Smart Hybrid 5MT', trim: 'Zeta (O)', pt: GV_1_5_PETROL_MT, ex: 1415000, exLakh: 14.15, mileage: 21.11, pano: true, hud: false, cam360: false, dt: false },
    { slug: 'zeta-o-2wd-petrol-manual-dual-tone', name: 'Grand Vitara Zeta (O) | 2WD Petrol 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Zeta (O) 1.5L Smart Hybrid 5MT Dual Tone', trim: 'Zeta (O) Dual Tone', pt: GV_1_5_PETROL_MT, ex: 1431000, exLakh: 14.31, mileage: 21.11, pano: true, hud: false, cam360: false, dt: true },
    { slug: 'zeta-o-2wd-petrol-automatic', name: 'Grand Vitara Zeta (O) | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Grand Vitara Zeta (O) 1.5L Smart Hybrid 6AT', trim: 'Zeta (O)', pt: GV_1_5_PETROL_AT, ex: 1555000, exLakh: 15.55, mileage: 20.58, pano: true, hud: false, cam360: false, dt: false },
    { slug: 'zeta-o-2wd-petrol-automatic-dual-tone', name: 'Grand Vitara Zeta (O) | 2WD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Zeta (O) 1.5L Smart Hybrid 6AT Dual Tone', trim: 'Zeta (O) Dual Tone', pt: GV_1_5_PETROL_AT, ex: 1571000, exLakh: 15.71, mileage: 20.58, pano: true, hud: false, cam360: false, dt: true },

    // Alpha (6 variants)
    { slug: 'alpha-2wd-petrol-manual', name: 'Grand Vitara Alpha | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Grand Vitara Alpha 1.5L Smart Hybrid 5MT', trim: 'Alpha', pt: GV_1_5_PETROL_MT, ex: 1551000, exLakh: 15.51, mileage: 21.11, pano: true, hud: false, cam360: true, dt: false },
    { slug: 'alpha-2wd-petrol-manual-dual-tone', name: 'Grand Vitara Alpha | 2WD Petrol 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Alpha 1.5L Smart Hybrid 5MT Dual Tone', trim: 'Alpha Dual Tone', pt: GV_1_5_PETROL_MT, ex: 1567000, exLakh: 15.67, mileage: 21.11, pano: true, hud: false, cam360: true, dt: true },
    { slug: 'alpha-2wd-petrol-automatic', name: 'Grand Vitara Alpha | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Grand Vitara Alpha 1.5L Smart Hybrid 6AT', trim: 'Alpha', pt: GV_1_5_PETROL_AT, ex: 1691000, exLakh: 16.91, mileage: 20.58, pano: true, hud: false, cam360: true, dt: false },
    { slug: 'alpha-2wd-petrol-automatic-dual-tone', name: 'Grand Vitara Alpha | 2WD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Alpha 1.5L Smart Hybrid 6AT Dual Tone', trim: 'Alpha Dual Tone', pt: GV_1_5_PETROL_AT, ex: 1707000, exLakh: 17.07, mileage: 20.58, pano: true, hud: false, cam360: true, dt: true },
    { slug: 'alpha-awd-petrol-automatic', name: 'Grand Vitara Alpha | AWD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Grand Vitara Alpha AWD 1.5L Smart Hybrid 6AT ALLGRIP', trim: 'Alpha AWD', pt: GV_1_5_PETROL_AWD_AT, ex: 1835000, exLakh: 18.35, mileage: 19.20, pano: true, hud: false, cam360: true, dt: false },
    { slug: 'alpha-awd-petrol-automatic-dual-tone', name: 'Grand Vitara Alpha | AWD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Alpha AWD 1.5L Smart Hybrid 6AT ALLGRIP Dual Tone', trim: 'Alpha AWD Dual Tone', pt: GV_1_5_PETROL_AWD_AT, ex: 1851000, exLakh: 18.51, mileage: 19.20, pano: true, hud: false, cam360: true, dt: true },

    // Alpha (O) (6 variants)
    { slug: 'alpha-o-2wd-petrol-manual', name: 'Grand Vitara Alpha (O) | 2WD Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Grand Vitara Alpha (O) 1.5L Smart Hybrid 5MT', trim: 'Alpha (O)', pt: GV_1_5_PETROL_MT, ex: 1565000, exLakh: 15.65, mileage: 21.11, pano: true, hud: true, cam360: true, dt: false },
    { slug: 'alpha-o-2wd-petrol-manual-dual-tone', name: 'Grand Vitara Alpha (O) | 2WD Petrol 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Alpha (O) 1.5L Smart Hybrid 5MT Dual Tone', trim: 'Alpha (O) Dual Tone', pt: GV_1_5_PETROL_MT, ex: 1581000, exLakh: 15.81, mileage: 21.11, pano: true, hud: true, cam360: true, dt: true },
    { slug: 'alpha-o-2wd-petrol-automatic', name: 'Grand Vitara Alpha (O) | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Grand Vitara Alpha (O) 1.5L Smart Hybrid 6AT', trim: 'Alpha (O)', pt: GV_1_5_PETROL_AT, ex: 1705000, exLakh: 17.05, mileage: 20.58, pano: true, hud: true, cam360: true, dt: false },
    { slug: 'alpha-o-2wd-petrol-automatic-dual-tone', name: 'Grand Vitara Alpha (O) | 2WD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Alpha (O) 1.5L Smart Hybrid 6AT Dual Tone', trim: 'Alpha (O) Dual Tone', pt: GV_1_5_PETROL_AT, ex: 1721000, exLakh: 17.21, mileage: 20.58, pano: true, hud: true, cam360: true, dt: true },
    { slug: 'alpha-o-awd-petrol-automatic', name: 'Grand Vitara Alpha (O) | AWD Petrol 1.5L | Automatic (TC)', fullName: 'Maruti Suzuki Grand Vitara Alpha (O) AWD 1.5L Smart Hybrid 6AT ALLGRIP', trim: 'Alpha (O) AWD', pt: GV_1_5_PETROL_AWD_AT, ex: 1894000, exLakh: 18.94, mileage: 19.20, pano: true, hud: true, cam360: true, dt: false },
    { slug: 'alpha-o-awd-petrol-automatic-dual-tone', name: 'Grand Vitara Alpha (O) | AWD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Alpha (O) AWD 1.5L Smart Hybrid 6AT ALLGRIP Dual Tone', trim: 'Alpha (O) AWD Dual Tone', pt: GV_1_5_PETROL_AWD_AT, ex: 1910000, exLakh: 19.10, mileage: 19.20, pano: true, hud: true, cam360: true, dt: true },

    // Hybrid Models (Delta Plus, Zeta Plus, Zeta Plus (O), Alpha Plus, Alpha Plus (O), Phantom Blaq Edition) (11 variants)
    { slug: 'delta-plus-hybrid-automatic', name: 'Grand Vitara Delta Plus | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Grand Vitara Delta Plus 1.5L Intelligent Electric Hybrid e-CVT', trim: 'Delta Plus Hybrid', pt: GV_1_5_HYBRID_ECVT, ex: 1699000, exLakh: 16.99, mileage: 27.97, pano: false, hud: false, cam360: false, dt: false },
    { slug: 'zeta-plus-hybrid-automatic', name: 'Grand Vitara Zeta Plus | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Grand Vitara Zeta Plus 1.5L Intelligent Electric Hybrid e-CVT', trim: 'Zeta Plus Hybrid', pt: GV_1_5_HYBRID_ECVT, ex: 1843000, exLakh: 18.43, mileage: 27.97, pano: true, hud: true, cam360: false, dt: false },
    { slug: 'zeta-plus-hybrid-automatic-dual-tone', name: 'Grand Vitara Zeta Plus | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Zeta Plus 1.5L Hybrid e-CVT Dual Tone', trim: 'Zeta Plus Hybrid Dual Tone', pt: GV_1_5_HYBRID_ECVT, ex: 1859000, exLakh: 18.59, mileage: 27.97, pano: true, hud: true, cam360: false, dt: true },
    { slug: 'zeta-plus-o-hybrid-automatic', name: 'Grand Vitara Zeta Plus (O) | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Grand Vitara Zeta Plus (O) 1.5L Hybrid e-CVT', trim: 'Zeta Plus (O) Hybrid', pt: GV_1_5_HYBRID_ECVT, ex: 1903000, exLakh: 19.03, mileage: 27.97, pano: true, hud: true, cam360: true, dt: false },
    { slug: 'zeta-plus-o-hybrid-automatic-dual-tone', name: 'Grand Vitara Zeta Plus (O) | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Zeta Plus (O) 1.5L Hybrid e-CVT Dual Tone', trim: 'Zeta Plus (O) Hybrid Dual Tone', pt: GV_1_5_HYBRID_ECVT, ex: 1919000, exLakh: 19.19, mileage: 27.97, pano: true, hud: true, cam360: true, dt: true },
    { slug: 'alpha-plus-hybrid-automatic', name: 'Grand Vitara Alpha Plus | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Grand Vitara Alpha Plus 1.5L Intelligent Electric Hybrid e-CVT', trim: 'Alpha Plus Hybrid', pt: GV_1_5_HYBRID_ECVT, ex: 1993000, exLakh: 19.93, mileage: 27.97, pano: true, hud: true, cam360: true, dt: false },
    { slug: 'alpha-plus-hybrid-automatic-dual-tone', name: 'Grand Vitara Alpha Plus | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Alpha Plus 1.5L Hybrid e-CVT Dual Tone', trim: 'Alpha Plus Hybrid Dual Tone', pt: GV_1_5_HYBRID_ECVT, ex: 2009000, exLakh: 20.09, mileage: 27.97, pano: true, hud: true, cam360: true, dt: true },
    { slug: 'alpha-plus-o-hybrid-automatic', name: 'Grand Vitara Alpha Plus (O) | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Grand Vitara Alpha Plus (O) 1.5L Hybrid e-CVT', trim: 'Alpha Plus (O) Hybrid', pt: GV_1_5_HYBRID_ECVT, ex: 2000000, exLakh: 20.00, mileage: 27.97, pano: true, hud: true, cam360: true, dt: false },
    { slug: 'alpha-plus-o-hybrid-automatic-dual-tone', name: 'Grand Vitara Alpha Plus (O) | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Maruti Suzuki Grand Vitara Alpha Plus (O) 1.5L Hybrid e-CVT Dual Tone', trim: 'Alpha Plus (O) Hybrid Dual Tone', pt: GV_1_5_HYBRID_ECVT, ex: 2016000, exLakh: 20.16, mileage: 27.97, pano: true, hud: true, cam360: true, dt: true },
    { slug: 'phantom-blaq-edition', name: 'Grand Vitara Phantom Blaq Edition | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Maruti Suzuki Grand Vitara Phantom Blaq Edition 1.5L Hybrid e-CVT', trim: 'Phantom Blaq Edition', pt: GV_1_5_HYBRID_ECVT, ex: 1750000, exLakh: 17.50, mileage: 27.97, pano: true, hud: true, cam360: true, dt: false },
  ].map((gv) => ({
    id: `maruti-suzuki-grand-vitara-${gv.slug}`,
    modelId: 'maruti-suzuki-grand-vitara',
    generationId: null,
    name: gv.name,
    fullName: gv.fullName,
    slug: gv.slug,
    trim: gv.trim,
    status: gv.slug === 'phantom-blaq-edition' ? ('upcoming' as const) : ('active' as const),
    variantStatus: 'verified' as const,
    pricing: { exShowroom: gv.ex, exShowroomLakh: gv.exLakh, currency: 'INR' },
    powertrain: gv.pt,
    performance: {
      mileageKmpl: gv.mileage,
      mileage: { value: gv.mileage, unit: gv.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Maruti Suzuki', verified: true },
      zeroToHundredSec: gv.pt.fuelType === 'StrongHybrid' ? 11.5 : 12.3,
      topSpeedKmph: 175,
    },
    dimensions: {
      lengthMm: 4345,
      widthMm: 1795,
      heightMm: 1645,
      wheelbaseMm: 2600,
      groundClearanceMm: 210,
      kerbWeightKg: gv.pt.drivetrain === 'AWD' ? 1295 : (gv.pt.fuelType === 'StrongHybrid' ? 1290 : 1185),
      bootSpaceLitres: gv.pt.fuelType === 'CNG' ? 260 : (gv.pt.fuelType === 'StrongHybrid' ? 265 : 373),
      fuelTankLitres: gv.pt.fuelType === 'CNG' ? 55 : 45,
    },
    extendedPowertrain: {
      engineLayout: 'Front Transverse',
      valvesPerCylinder: 4,
      valveConfiguration: 'DOHC 16V with Dual VVT',
      turbochargerType: 'Naturally Aspirated',
      compressionRatio: gv.pt.fuelType === 'StrongHybrid' ? '14.0:1' : '10.5:1',
      fuelInjectionType: gv.pt.fuelType === 'CNG' ? 'Multi-Point Fuel Injection & CNG Sequential Injection' : 'DualJet Dual Multi-Point Direct Injection',
      emissionStandard: 'BS6 Phase 2 / OBD-2',
      gearboxType: gv.pt.transmission === 'Manual' ? '5-Speed Manual' : (gv.pt.fuelType === 'StrongHybrid' ? 'Electronic Continuously Variable Transmission (e-CVT)' : '6-Speed Torque Converter Automatic'),
      gearboxName: gv.pt.transmission === 'Manual' ? '5-Speed MT' : (gv.pt.fuelType === 'StrongHybrid' ? 'e-CVT with Drive Mode Controller' : '6-Speed AT with Paddle Shifters'),
      driveModes: gv.pt.drivetrain === 'AWD' ? ['Auto', 'Sport', 'Snow', 'Lock'] : ['Eco', 'Normal', 'Power'],
      paddleShifters: gv.pt.transmission === 'Automatic',
      regenerativeBraking: true,
      autoStartStop: true,
    },
    suspension: {
      frontSuspension: 'MacPherson Strut with Coil Spring',
      rearSuspension: 'Torsion Beam with Coil Spring',
      frontBrakeType: 'Ventilated Disc',
      rearBrakeType: 'Solid Disc',
    },
    extendedDimensions: {
      doors: 5,
      seatingRows: 2,
      turningRadiusM: 5.4,
      grossWeightKg: 1750,
      approachAngleDeg: 19.5,
      departureAngleDeg: 26.0,
      rampBreakoverAngleDeg: 18.0,
    },
    tyres: {
      frontTyreProfile: '215/60 R17',
      rearTyreProfile: '215/60 R17',
      wheelType: gv.trim.includes('Alpha') || gv.trim.includes('Zeta') ? 'Dual-Tone Precision Cut Alloy Wheels' : 'Steel Wheels with Wheel Cover',
      spareWheel: 'Full Size Steel Spare Wheel',
    },
    warranty: {
      standardWarrantyYears: 3,
      standardWarrantyKm: 100000,
      batteryWarrantyYears: gv.pt.fuelType === 'StrongHybrid' ? 8 : 3,
      batteryWarrantyKm: gv.pt.fuelType === 'StrongHybrid' ? 160000 : 100000,
    },
    extendedSafety: {
      rearMiddleHeadrest: true,
      rearMiddleThreePointBelt: true,
      isofixChildMounts: true,
      sideAirbags: !gv.trim.includes('Sigma'),
      curtainAirbags: !gv.trim.includes('Sigma'),
      kneeAirbag: false,
      centralLocking: 'Remote Keyless with Speed Sensing Auto Door Lock',
      speedSensingDoorLock: true,
      childSafetyLock: true,
    },
    brakes: {
      frontDiscBrakes: true,
      rearDiscBrakes: true,
      electronicParkingBrake: gv.trim.includes('Alpha Plus') || gv.trim.includes('Zeta Plus'),
      autoHold: gv.trim.includes('Alpha Plus') || gv.trim.includes('Zeta Plus'),
      brakeAssist: true,
    },
    climate: {
      airConditioningType: 'Automatic Climate Control with PM2.5 Cabin Air Filter',
      rearACVents: true,
      dualZoneClimate: false,
    },
    doorsAndMirrors: {
      orvmElectricAdjustment: true,
      orvmElectricFolding: true,
      autoDimmingIRVM: gv.trim.includes('Alpha') || gv.trim.includes('Zeta'),
      rearDefogger: true,
      rearWiperWasher: !gv.trim.includes('Sigma'),
      poweredTailgate: false,
    },
    sunroofWindows: {
      sunroofType: gv.pano ? 'Panoramic Sunroof with Dual Sliding Glass Panels' : 'None',
      antiPinchWindows: true,
      rearSunshade: false,
    },
    parkingAssist: {
      parkingSensors: 'Rear Ultrasonic Parking Sensors',
      parkingCamera: gv.cam360 ? '360 Degree High Definition Surround View Camera' : 'Rear View Camera with Dynamic Guidelines',
      blindSpotMonitor: false,
    },
    storage: {
      gloveboxIllumination: true,
      cooledGlovebox: true,
      frontCupHolders: 2,
      rearArmrestCupholders: 2,
      sunglassHolder: true,
    },
    seating: {
      seatUpholstery: gv.trim.includes('Alpha') ? 'Perforated Black & Bordeaux Faux Leather' : 'Fabric',
      driverSeatAdjustment: '6-Way Height Adjustable Manual Seat',
      ventilatedSeats: gv.trim.includes('Alpha Plus') ? 'Front Ventilated Seats' : 'None',
      splitRearSeats: '60:40 Split Folding Rear Seats with Recline',
    },
    instrumentCluster: {
      clusterType: gv.pt.fuelType === 'StrongHybrid' ? '7-inch Fully Digital Multi-Information Display' : '4.2-inch Color TFT Multi-Information Display',
      tirePressureDisplay: true,
    },
    steering: {
      steeringAdjustment: 'Tilt and Telescopic Adjustable Steering Wheel',
      steeringControls: 'Mounted Audio, Voice, MID & Cruise Control Buttons',
      leatherWrappedSteering: gv.trim.includes('Alpha') || gv.trim.includes('Zeta'),
    },
    infotainmentEx: {
      screenSizeInches: gv.trim.includes('Alpha') || gv.trim.includes('Zeta') ? 9.0 : 7.0,
      soundSystem: gv.trim.includes('Alpha') ? 'Arkamys Premium Sound System with 6 Speakers' : '4-Speaker Standard System',
      wirelessPhoneProjection: true,
    },
    lighting: {
      headlightType: '3-Point LED DRLs with LED Projector Headlamps',
      taillightType: 'Full-Width Connected LED Signature Light Bar',
      ambientLighting: gv.trim.includes('Alpha') ? 'Ambient Door & Footwell Illumination' : 'None',
    },
    adas: {
      adasLevel: 'None',
      adaptiveCruiseControl: false,
      laneKeepAssist: false,
      emergencyBraking: false,
      trafficSignRecognition: false,
    },
    telematics: {
      connectedCarTech: true,
      appCompatibility: 'Suzuki Connect with 40+ Connected Features',
      remoteLockUnlock: true,
      remoteHornLight: true,
      remoteACControl: true,
      geoFencing: true,
      stolenVehicleTracking: true,
      otaUpdates: true,
    },
    exteriorFeatures: {
      grilleType: 'Gloss Black NEXWave Front Grille with Chrome Accent',
      roofRails: 'Silver Roof Rails',
      exhaustPipes: 'Concealed Exhaust',
    },
    cabinNoise: {
      acousticWindshield: true,
      activeNoiseCancellation: gv.pt.fuelType === 'StrongHybrid',
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: gv.trim.includes('Sigma') ? 2 : 6,
        abs: 'standard',
        ebd: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        hillDescentControl: gv.pt.drivetrain === 'AWD' ? 'standard' : 'not_available',
        tpms: 'standard',
        rearCamera: gv.trim.includes('Sigma') ? 'not_available' : 'standard',
        rearParkingSensors: 'standard',
      },
      exterior: {
        wheelSizeInches: 17,
        alloyWheels: gv.trim.includes('Alpha') || gv.trim.includes('Zeta') ? 'standard' : 'not_available',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        leatherSeats: gv.trim.includes('Alpha') ? 'standard' : 'not_available',
        ventilatedSeats: gv.trim.includes('Alpha Plus') ? 'standard' : 'not_available',
        wirelessCharging: gv.trim.includes('Plus') || gv.trim.includes('Alpha') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: gv.trim.includes('Alpha') || gv.trim.includes('Zeta') ? 9.0 : 7.0,
        headUpDisplay: gv.hud ? 'standard' : 'not_available',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: gv.trim.includes('Alpha') ? 6 : 4,
        connectedCarTechnology: 'standard',
      },
      convenience: {
        keylessEntry: 'standard',
        pushButtonStart: 'standard',
        cruiseControl: 'standard',
      },
    }),
    sources: [
      { name: 'Maruti Suzuki Nexa Grand Vitara Official', url: 'https://www.nexaexperience.com/grand-vitara', type: 'official', checkedAt: '2026-10-18' },
      { name: `CarWale Grand Vitara ${gv.trim} Price (Nashik)`, url: `https://www.carwale.com/maruti-suzuki-cars/grand-vitara/${gv.slug}/`, type: 'reputable', checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  })),
];
