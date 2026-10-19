/**
 * scripts/data_verified_variants_hyundai_batch3.ts
 *
 * Comprehensive, verified variant database for Hyundai India Batch 3:
 * 1. Hyundai Verna (33 variants) - 1.5L MPi Petrol (MT & CVT) and 1.5L Turbo GDi (MT & DCT)
 * 2. Hyundai Aura (9 variants) - 1.2L Kappa Petrol (MT & AMT) and 1.2L Bi-Fuel CNG
 * 3. Hyundai Alcazar (20 variants) - 1.5L Turbo Petrol & 1.5L Diesel; 6MT, 7DCT & 6AT; 5, 6 & 7 Seater
 *
 * Total: 62 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// Verna Powertrains
const VERNA_1_5_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L Smartstream MPi 4-Cylinder Petrol Engine (6-Speed Manual)',
  engineDisplacementCC: 1497,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 113,
  maxTorqueNm: 143.8,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

const VERNA_1_5_PETROL_CVT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L Smartstream MPi 4-Cylinder IVT (CVT) Petrol Engine',
  engineDisplacementCC: 1497,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 113,
  maxTorqueNm: 143.8,
  transmission: 'Automatic (CVT)' as const,
  drivetrain: 'FWD' as const,
};

const VERNA_1_5_TURBO_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L Turbo GDi 4-Cylinder Petrol Engine (6-Speed Manual)',
  engineDisplacementCC: 1482,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 157,
  maxTorqueNm: 253,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

const VERNA_1_5_TURBO_DCT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L Turbo GDi 4-Cylinder Petrol Engine (7-Speed Dual Clutch DCT)',
  engineDisplacementCC: 1482,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 157,
  maxTorqueNm: 253,
  transmission: 'Automatic (DCT)' as const,
  drivetrain: 'FWD' as const,
};

// Aura Powertrains
const AURA_1_2_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Kappa MPi 4-Cylinder Petrol Engine (5-Speed Manual)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 82,
  maxTorqueNm: 114,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

const AURA_1_2_PETROL_AMT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Kappa MPi 4-Cylinder Petrol Engine (Smart Auto AMT)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 82,
  maxTorqueNm: 114,
  transmission: 'Automatic (AMT)' as const,
  drivetrain: 'FWD' as const,
};

const AURA_1_2_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.2L Bi-Fuel CNG 4-Cylinder Engine (5-Speed Manual)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 68,
  maxTorqueNm: 95,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

// Alcazar Powertrains
const ALCAZAR_1_5_TURBO_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L Turbo GDi 4-Cylinder Petrol Engine (6-Speed Manual)',
  engineDisplacementCC: 1482,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 158,
  maxTorqueNm: 253,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

const ALCAZAR_1_5_TURBO_DCT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L Turbo GDi 4-Cylinder Petrol Engine (7-Speed Dual Clutch DCT)',
  engineDisplacementCC: 1482,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 158,
  maxTorqueNm: 253,
  transmission: 'Automatic (DCT)' as const,
  drivetrain: 'FWD' as const,
};

const ALCAZAR_1_5_DIESEL_MT = {
  fuelType: 'Diesel' as const,
  engineName: '1.5L U2 CRDi 4-Cylinder Turbocharged Diesel Engine (6-Speed Manual)',
  engineDisplacementCC: 1493,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 114,
  maxTorqueNm: 250,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

const ALCAZAR_1_5_DIESEL_AT = {
  fuelType: 'Diesel' as const,
  engineName: '1.5L U2 CRDi 4-Cylinder Turbocharged Diesel Engine (6-Speed Torque Converter AT)',
  engineDisplacementCC: 1493,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 114,
  maxTorqueNm: 250,
  transmission: 'Automatic (TC)' as const,
  drivetrain: 'FWD' as const,
};

// ============================================================================
// 1. HYUNDAI VERNA (33 VARIANTS)
// ============================================================================
export const HYUNDAI_VERNA_VARIANTS: CarVariant[] = [
  ...[
    // HX 2 (1 variant)
    { slug: 'hx-2-petrol-1-5l-manual', name: 'Verna HX 2 | Petrol 1.5L | Manual', fullName: 'Hyundai Verna HX 2 1.5L MPi 6MT', trim: 'HX 2', pt: VERNA_1_5_PETROL_MT, exLakh: 11.00, onRoadLakh: 13.07 },

    // HX 4 (2 variants)
    { slug: 'hx-4-petrol-1-5l-manual', name: 'Verna HX 4 | Petrol 1.5L | Manual', fullName: 'Hyundai Verna HX 4 1.5L MPi 6MT', trim: 'HX 4', pt: VERNA_1_5_PETROL_MT, exLakh: 12.24, onRoadLakh: 14.55 },
    { slug: 'hx-4-petrol-1-5l-manual-matte', name: 'Verna HX 4 | Petrol 1.5L | Manual | Matte', fullName: 'Hyundai Verna HX 4 Matte 1.5L MPi 6MT', trim: 'HX 4 Matte', pt: VERNA_1_5_PETROL_MT, exLakh: 12.39, onRoadLakh: 14.73 },

    // HX 6 (6 variants)
    { slug: 'hx-6-petrol-1-5l-manual', name: 'Verna HX 6 | Petrol 1.5L | Manual', fullName: 'Hyundai Verna HX 6 1.5L MPi 6MT', trim: 'HX 6', pt: VERNA_1_5_PETROL_MT, exLakh: 13.16, onRoadLakh: 15.65 },
    { slug: 'hx-6-petrol-1-5l-manual-dual-tone', name: 'Verna HX 6 | Petrol 1.5L | Manual | Dual Tone', fullName: 'Hyundai Verna HX 6 1.5L MPi 6MT Dual Tone', trim: 'HX 6 Dual Tone', pt: VERNA_1_5_PETROL_MT, exLakh: 13.31, onRoadLakh: 15.82 },
    { slug: 'hx-6-petrol-1-5l-manual-matte', name: 'Verna HX 6 | Petrol 1.5L | Manual | Matte', fullName: 'Hyundai Verna HX 6 Matte 1.5L MPi 6MT', trim: 'HX 6 Matte', pt: VERNA_1_5_PETROL_MT, exLakh: 13.31, onRoadLakh: 15.82 },
    { slug: 'hx-6-petrol-1-5l-automatic-cvt', name: 'Verna HX 6 | Petrol 1.5L | Automatic (CVT)', fullName: 'Hyundai Verna HX 6 1.5L MPi IVT/CVT', trim: 'HX 6 CVT', pt: VERNA_1_5_PETROL_CVT, exLakh: 14.35, onRoadLakh: 17.06 },
    { slug: 'hx-6-petrol-1-5l-automatic-cvt-dual-tone', name: 'Verna HX 6 | Petrol 1.5L | Automatic (CVT) | Dual Tone', fullName: 'Hyundai Verna HX 6 1.5L MPi IVT/CVT Dual Tone', trim: 'HX 6 CVT Dual Tone', pt: VERNA_1_5_PETROL_CVT, exLakh: 14.50, onRoadLakh: 17.24 },
    { slug: 'hx-6-petrol-1-5l-automatic-cvt-matte', name: 'Verna HX 6 | Petrol 1.5L | Automatic (CVT) | Matte', fullName: 'Hyundai Verna HX 6 Matte 1.5L MPi IVT/CVT', trim: 'HX 6 CVT Matte', pt: VERNA_1_5_PETROL_CVT, exLakh: 14.50, onRoadLakh: 17.24 },

    // HX 6 Plus (6 variants)
    { slug: 'hx-6-plus-petrol-1-5l-manual', name: 'Verna HX 6 Plus | Petrol 1.5L | Manual', fullName: 'Hyundai Verna HX 6 Plus 1.5L MPi 6MT', trim: 'HX 6 Plus', pt: VERNA_1_5_PETROL_MT, exLakh: 13.77, onRoadLakh: 16.37 },
    { slug: 'hx-6-plus-petrol-1-5l-manual-dual-tone', name: 'Verna HX 6 Plus | Petrol 1.5L | Manual | Dual Tone', fullName: 'Hyundai Verna HX 6 Plus 1.5L MPi 6MT Dual Tone', trim: 'HX 6 Plus Dual Tone', pt: VERNA_1_5_PETROL_MT, exLakh: 13.92, onRoadLakh: 16.55 },
    { slug: 'hx-6-plus-petrol-1-5l-manual-matte', name: 'Verna HX 6 Plus | Petrol 1.5L | Manual | Matte', fullName: 'Hyundai Verna HX 6 Plus Matte 1.5L MPi 6MT', trim: 'HX 6 Plus Matte', pt: VERNA_1_5_PETROL_MT, exLakh: 13.92, onRoadLakh: 16.55 },
    { slug: 'hx-6-plus-petrol-1-5l-automatic-cvt', name: 'Verna HX 6 Plus | Petrol 1.5L | Automatic (CVT)', fullName: 'Hyundai Verna HX 6 Plus 1.5L MPi IVT/CVT', trim: 'HX 6 Plus CVT', pt: VERNA_1_5_PETROL_CVT, exLakh: 15.00, onRoadLakh: 17.83 },
    { slug: 'hx-6-plus-petrol-1-5l-automatic-cvt-dual-tone', name: 'Verna HX 6 Plus | Petrol 1.5L | Automatic (CVT) | Dual Tone', fullName: 'Hyundai Verna HX 6 Plus 1.5L MPi IVT/CVT Dual Tone', trim: 'HX 6 Plus CVT Dual Tone', pt: VERNA_1_5_PETROL_CVT, exLakh: 15.15, onRoadLakh: 18.00 },
    { slug: 'hx-6-plus-petrol-1-5l-automatic-cvt-matte', name: 'Verna HX 6 Plus | Petrol 1.5L | Automatic (CVT) | Matte', fullName: 'Hyundai Verna HX 6 Plus Matte 1.5L MPi IVT/CVT', trim: 'HX 6 Plus CVT Matte', pt: VERNA_1_5_PETROL_CVT, exLakh: 15.15, onRoadLakh: 18.00 },

    // HX 8 (12 variants)
    { slug: 'hx-8-petrol-1-5l-manual', name: 'Verna HX 8 | Petrol 1.5L | Manual', fullName: 'Hyundai Verna HX 8 1.5L MPi 6MT', trim: 'HX 8', pt: VERNA_1_5_PETROL_MT, exLakh: 14.82, onRoadLakh: 17.62 },
    { slug: 'hx-8-petrol-1-5l-manual-dual-tone', name: 'Verna HX 8 | Petrol 1.5L | Manual | Dual Tone', fullName: 'Hyundai Verna HX 8 1.5L MPi 6MT Dual Tone', trim: 'HX 8 Dual Tone', pt: VERNA_1_5_PETROL_MT, exLakh: 15.01, onRoadLakh: 17.84 },
    { slug: 'hx-8-petrol-1-5l-manual-matte', name: 'Verna HX 8 | Petrol 1.5L | Manual | Matte', fullName: 'Hyundai Verna HX 8 Matte 1.5L MPi 6MT', trim: 'HX 8 Matte', pt: VERNA_1_5_PETROL_MT, exLakh: 15.01, onRoadLakh: 17.84 },
    { slug: 'hx-8-petrol-1-5l-automatic-cvt', name: 'Verna HX 8 | Petrol 1.5L | Automatic (CVT)', fullName: 'Hyundai Verna HX 8 1.5L MPi IVT/CVT', trim: 'HX 8 CVT', pt: VERNA_1_5_PETROL_CVT, exLakh: 16.05, onRoadLakh: 19.08 },
    { slug: 'hx-8-petrol-1-5l-automatic-cvt-dual-tone', name: 'Verna HX 8 | Petrol 1.5L | Automatic (CVT) | Dual Tone', fullName: 'Hyundai Verna HX 8 1.5L MPi IVT/CVT Dual Tone', trim: 'HX 8 CVT Dual Tone', pt: VERNA_1_5_PETROL_CVT, exLakh: 16.20, onRoadLakh: 19.25 },
    { slug: 'hx-8-petrol-1-5l-automatic-cvt-matte', name: 'Verna HX 8 | Petrol 1.5L | Automatic (CVT) | Matte', fullName: 'Hyundai Verna HX 8 Matte 1.5L MPi IVT/CVT', trim: 'HX 8 CVT Matte', pt: VERNA_1_5_PETROL_CVT, exLakh: 16.20, onRoadLakh: 19.25 },
    { slug: 'hx-8-petrol-1-5l-turbo-manual', name: 'Verna HX 8 | Petrol 1.5L Turbo | Manual', fullName: 'Hyundai Verna HX 8 1.5L Turbo GDi 6MT', trim: 'HX 8 Turbo', pt: VERNA_1_5_TURBO_MT, exLakh: 16.24, onRoadLakh: 19.30 },
    { slug: 'hx-8-petrol-1-5l-turbo-manual-dual-tone', name: 'Verna HX 8 | Petrol 1.5L Turbo | Manual | Dual Tone', fullName: 'Hyundai Verna HX 8 1.5L Turbo GDi 6MT Dual Tone', trim: 'HX 8 Turbo Dual Tone', pt: VERNA_1_5_TURBO_MT, exLakh: 16.38, onRoadLakh: 19.47 },
    { slug: 'hx-8-petrol-1-5l-turbo-manual-matte', name: 'Verna HX 8 | Petrol 1.5L Turbo | Manual | Matte', fullName: 'Hyundai Verna HX 8 Matte 1.5L Turbo GDi 6MT', trim: 'HX 8 Turbo Matte', pt: VERNA_1_5_TURBO_MT, exLakh: 16.38, onRoadLakh: 19.47 },
    { slug: 'hx-8-petrol-1-5l-turbo-automatic-dct', name: 'Verna HX 8 | Petrol 1.5L Turbo | Automatic (DCT)', fullName: 'Hyundai Verna HX 8 1.5L Turbo GDi 7DCT', trim: 'HX 8 Turbo DCT', pt: VERNA_1_5_TURBO_DCT, exLakh: 17.55, onRoadLakh: 20.86 },
    { slug: 'hx-8-petrol-1-5l-turbo-automatic-dct-dual-tone', name: 'Verna HX 8 | Petrol 1.5L Turbo | Automatic (DCT) | Dual Tone', fullName: 'Hyundai Verna HX 8 1.5L Turbo GDi 7DCT Dual Tone', trim: 'HX 8 Turbo DCT Dual Tone', pt: VERNA_1_5_TURBO_DCT, exLakh: 17.70, onRoadLakh: 21.04 },
    { slug: 'hx-8-petrol-1-5l-turbo-automatic-dct-matte', name: 'Verna HX 8 | Petrol 1.5L Turbo | Automatic (DCT) | Matte', fullName: 'Hyundai Verna HX 8 Matte 1.5L Turbo GDi 7DCT', trim: 'HX 8 Turbo DCT Matte', pt: VERNA_1_5_TURBO_DCT, exLakh: 17.70, onRoadLakh: 21.04 },

    // HX 10 (6 variants)
    { slug: 'hx-10-petrol-1-5l-automatic-cvt', name: 'Verna HX 10 | Petrol 1.5L | Automatic (CVT)', fullName: 'Hyundai Verna HX 10 1.5L MPi IVT/CVT', trim: 'HX 10 CVT', pt: VERNA_1_5_PETROL_CVT, exLakh: 17.10, onRoadLakh: 20.32 },
    { slug: 'hx-10-petrol-1-5l-automatic-cvt-dual-tone', name: 'Verna HX 10 | Petrol 1.5L | Automatic (CVT) | Dual Tone', fullName: 'Hyundai Verna HX 10 1.5L MPi IVT/CVT Dual Tone', trim: 'HX 10 CVT Dual Tone', pt: VERNA_1_5_PETROL_CVT, exLakh: 17.24, onRoadLakh: 20.49 },
    { slug: 'hx-10-petrol-1-5l-automatic-cvt-matte', name: 'Verna HX 10 | Petrol 1.5L | Automatic (CVT) | Matte', fullName: 'Hyundai Verna HX 10 Matte 1.5L MPi IVT/CVT', trim: 'HX 10 CVT Matte', pt: VERNA_1_5_PETROL_CVT, exLakh: 17.24, onRoadLakh: 20.49 },
    { slug: 'hx-10-petrol-1-5l-turbo-automatic-dct', name: 'Verna HX 10 | Petrol 1.5L Turbo | Automatic (DCT)', fullName: 'Hyundai Verna HX 10 1.5L Turbo GDi 7DCT', trim: 'HX 10 Turbo DCT', pt: VERNA_1_5_TURBO_DCT, exLakh: 18.18, onRoadLakh: 21.60 },
    { slug: 'hx-10-petrol-1-5l-turbo-automatic-dct-dual-tone', name: 'Verna HX 10 | Petrol 1.5L Turbo | Automatic (DCT) | Dual Tone', fullName: 'Hyundai Verna HX 10 1.5L Turbo GDi 7DCT Dual Tone', trim: 'HX 10 Turbo DCT Dual Tone', pt: VERNA_1_5_TURBO_DCT, exLakh: 18.33, onRoadLakh: 21.78 },
    { slug: 'hx-10-petrol-1-5l-turbo-automatic-dct-matte', name: 'Verna HX 10 | Petrol 1.5L Turbo | Automatic (DCT) | Matte', fullName: 'Hyundai Verna HX 10 Matte 1.5L Turbo GDi 7DCT', trim: 'HX 10 Turbo DCT Matte', pt: VERNA_1_5_TURBO_DCT, exLakh: 18.33, onRoadLakh: 21.78 },
  ].map((vv) => ({
    id: `hyundai-verna-${vv.slug}`,
    modelId: 'hyundai-verna',
    generationId: null,
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
      mileageKmpl: vv.pt.aspiration === 'Turbocharged' ? 20.6 : 18.6,
      zeroToHundredSec: vv.pt.aspiration === 'Turbocharged' ? 8.1 : 10.8,
      topSpeedKmph: vv.pt.aspiration === 'Turbocharged' ? 210 : 190,
    },
    dimensions: {
      lengthMm: 4535,
      widthMm: 1765,
      heightMm: 1475,
      wheelbaseMm: 2670,
      groundClearanceMm: 170,
      kerbWeightKg: 1140,
      bootSpaceLitres: 528,
      fuelTankLitres: 45,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        tpms: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        adasLevel: vv.trim.includes('10') ? 'Level 2' : (vv.trim.includes('8') ? 'Level 2' : 'none'),
        ncapRating: 5,
      },
      exterior: {
        wheelSizeInches: vv.trim.includes('8') || vv.trim.includes('10') ? 16 : 15,
        alloyWheels: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        ledHeadlights: vv.trim.includes('6') || vv.trim.includes('8') || vv.trim.includes('10') ? 'standard' : 'not_available',
        sunroof: vv.trim.includes('6') || vv.trim.includes('8') || vv.trim.includes('10') ? 'standard' : 'not_available',
      },
      interior: {
        automaticClimateControl: vv.trim.includes('6') || vv.trim.includes('8') || vv.trim.includes('10') ? 'standard' : 'not_available',
        rearACVents: 'standard',
        ventilatedSeats: vv.trim.includes('8') || vv.trim.includes('10') ? 'standard' : 'not_available',
        poweredDriverSeat: vv.trim.includes('10') ? 'standard' : 'not_available',
        leatherSeats: vv.trim.includes('10') ? 'standard' : 'not_available',
        wirelessCharging: vv.trim.includes('6') || vv.trim.includes('8') || vv.trim.includes('10') ? 'standard' : 'not_available',
        ambientLighting: vv.trim.includes('6') || vv.trim.includes('8') || vv.trim.includes('10') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: vv.trim.includes('8') || vv.trim.includes('10') ? 10.25 : (!vv.trim.startsWith('HX 2') ? 8.0 : null),
        digitalInstrumentCluster: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        androidAuto: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        appleCarPlay: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        premiumAudio: vv.trim.includes('10') ? 'standard' : 'not_available',
        connectedCarTechnology: vv.trim.includes('8') || vv.trim.includes('10') ? 'standard' : 'not_available',
      },
      convenience: {
        pushButtonStart: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        keylessEntry: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        cruiseControl: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        autoDimmingIRVM: vv.trim.includes('8') || vv.trim.includes('10') ? 'standard' : 'not_available',
        automaticHeadlights: !vv.trim.startsWith('HX 2') ? 'standard' : 'not_available',
      },
    }),
    sources: [
      { name: 'Hyundai India Official Verna Brochure', url: 'https://www.hyundai.com/in/en/find-a-car/verna/highlights', type: 'official' as const, checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  }))
];

// ============================================================================
// 2. HYUNDAI AURA (9 VARIANTS)
// ============================================================================
export const HYUNDAI_AURA_VARIANTS: CarVariant[] = [
  ...[
    // Aura E (1 variant)
    { slug: 'e-petrol-manual', name: 'Aura E | Petrol | Manual', fullName: 'Hyundai Aura E 1.2L Petrol 5MT Base', trim: 'E', pt: AURA_1_2_PETROL_MT, exLakh: 6.49, onRoadLakh: 7.08, airbags: 4 },

    // Aura S (2 variants)
    { slug: 's-petrol-manual', name: 'Aura S | Petrol | Manual', fullName: 'Hyundai Aura S 1.2L Petrol 5MT Mid', trim: 'S', pt: AURA_1_2_PETROL_MT, exLakh: 7.33, onRoadLakh: 8.13, airbags: 6 },
    { slug: 's-cng-manual', name: 'Aura S | CNG | Manual', fullName: 'Hyundai Aura S 1.2L Bi-Fuel CNG 5MT Mid', trim: 'S CNG', pt: AURA_1_2_CNG_MT, exLakh: 8.24, onRoadLakh: 8.93, airbags: 6 },

    // Aura Corporate (2 variants)
    { slug: 'corporate-petrol-manual', name: 'Aura Corporate | Petrol | Manual', fullName: 'Hyundai Aura Corporate 1.2L Petrol 5MT', trim: 'Corporate', pt: AURA_1_2_PETROL_MT, exLakh: 7.35, onRoadLakh: 8.14, airbags: 6 },
    { slug: 'corporate-cng-manual', name: 'Aura Corporate | CNG | Manual', fullName: 'Hyundai Aura Corporate 1.2L Bi-Fuel CNG 5MT', trim: 'Corporate CNG', pt: AURA_1_2_CNG_MT, exLakh: 8.35, onRoadLakh: 9.03, airbags: 6 },

    // Aura SX (2 variants)
    { slug: 'sx-petrol-manual', name: 'Aura SX | Petrol | Manual', fullName: 'Hyundai Aura SX 1.2L Petrol 5MT', trim: 'SX', pt: AURA_1_2_PETROL_MT, exLakh: 8.15, onRoadLakh: 9.03, airbags: 6 },
    { slug: 'sx-cng-manual', name: 'Aura SX | CNG | Manual', fullName: 'Hyundai Aura SX 1.2L Bi-Fuel CNG 5MT', trim: 'SX CNG', pt: AURA_1_2_CNG_MT, exLakh: 9.05, onRoadLakh: 9.83, airbags: 6 },

    // Aura SX Plus (1 variant)
    { slug: 'sx-plus-petrol-automatic', name: 'Aura SX Plus | Petrol | Automatic', fullName: 'Hyundai Aura SX Plus 1.2L Petrol Smart Auto AMT', trim: 'SX Plus AMT', pt: AURA_1_2_PETROL_AMT, exLakh: 8.87, onRoadLakh: 9.81, airbags: 6 },

    // Aura SX (O) (1 variant)
    { slug: 'sx-o-petrol-manual', name: 'Aura SX (O) | Petrol | Manual', fullName: 'Hyundai Aura SX (O) 1.2L Petrol 5MT Top', trim: 'SX (O)', pt: AURA_1_2_PETROL_MT, exLakh: 8.90, onRoadLakh: 9.59, airbags: 6 },
  ].map((av) => ({
    id: `hyundai-aura-${av.slug}`,
    modelId: 'hyundai-aura',
    generationId: null,
    name: av.name,
    fullName: av.fullName,
    slug: av.slug,
    trim: av.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(av.exLakh * 100000),
      exShowroomLakh: av.exLakh,
      onRoadNashik: Math.round(av.onRoadLakh * 100000),
      onRoadNashikLakh: av.onRoadLakh,
      currency: 'INR',
    },
    powertrain: av.pt,
    performance: {
      mileageKmpl: av.pt.fuelType === 'CNG' ? 28.0 : 20.5,
      mileage: { value: av.pt.fuelType === 'CNG' ? 28.0 : 20.5, unit: av.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Hyundai Motor India', verified: true },
      zeroToHundredSec: 13.0,
      topSpeedKmph: 165,
    },
    dimensions: {
      lengthMm: 3995,
      widthMm: 1680,
      heightMm: 1520,
      wheelbaseMm: 2450,
      groundClearanceMm: 165,
      kerbWeightKg: 950,
      bootSpaceLitres: av.pt.fuelType === 'CNG' ? 250 : 402,
      fuelTankLitres: av.pt.fuelType === 'CNG' ? 65 : 37,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: av.airbags,
        abs: 'standard',
        esc: !av.trim.startsWith('E') ? 'standard' : 'not_available',
        hillAssist: !av.trim.startsWith('E') ? 'standard' : 'not_available',
        rearCamera: av.trim.startsWith('SX') ? 'standard' : 'not_available',
        tpms: !av.trim.startsWith('E') ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: av.trim.startsWith('SX') ? 15 : 14,
        alloyWheels: av.trim.startsWith('SX') ? 'standard' : 'not_available',
        ledHeadlights: av.trim.startsWith('SX') ? 'standard' : 'not_available',
      },
      interior: {
        automaticClimateControl: av.trim.startsWith('SX') ? 'standard' : 'not_available',
        rearACVents: !av.trim.startsWith('E') ? 'standard' : 'not_available',
        wirelessCharging: av.trim.includes('(O)') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !av.trim.startsWith('E') ? 8.0 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !av.trim.startsWith('E') ? 'standard' : 'not_available',
        appleCarPlay: !av.trim.startsWith('E') ? 'standard' : 'not_available',
      },
      convenience: {
        pushButtonStart: av.trim.startsWith('SX') ? 'standard' : 'not_available',
        keylessEntry: !av.trim.startsWith('E') ? 'standard' : 'not_available',
        cruiseControl: av.trim.startsWith('SX') ? 'standard' : 'not_available',
      },
    }),
    sources: [
      { name: 'Hyundai India Official Aura Brochure', url: 'https://www.hyundai.com/in/en/find-a-car/aura/highlights', type: 'official' as const, checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  }))
];

// ============================================================================
// 3. HYUNDAI ALCAZAR (20 VARIANTS)
// ============================================================================
export const HYUNDAI_ALCAZAR_VARIANTS: CarVariant[] = [
  ...[
    // Executive (2 variants)
    { slug: 'executive-petrol-1-5l-turbo-6mt-7str', name: 'Alcazar Executive | Petrol 1.5L Turbo | 6 Speed Manual | 7 STR', fullName: 'Hyundai Alcazar Executive 1.5L Turbo GDi 6MT 7-Seater', trim: 'Executive', pt: ALCAZAR_1_5_TURBO_MT, exLakh: 14.99, onRoadLakh: 17.17, seats: 7 },
    { slug: 'executive-diesel-1-5l-turbo-6mt-7str', name: 'Alcazar Executive | Diesel 1.5L Turbo | 6 Speed Manual | 7 STR', fullName: 'Hyundai Alcazar Executive 1.5L CRDi 6MT 7-Seater', trim: 'Executive Diesel', pt: ALCAZAR_1_5_DIESEL_MT, exLakh: 15.99, onRoadLakh: 18.69, seats: 7 },

    // Prestige (2 variants)
    { slug: 'prestige-petrol-1-5l-turbo-6mt-7str', name: 'Alcazar Prestige | Petrol 1.5L Turbo | 6 Speed Manual | 7 STR', fullName: 'Hyundai Alcazar Prestige 1.5L Turbo GDi 6MT 7-Seater', trim: 'Prestige', pt: ALCAZAR_1_5_TURBO_MT, exLakh: 17.18, onRoadLakh: 19.85, seats: 7 },
    { slug: 'prestige-petrol-1-5l-turbo-automatic-dct-7str', name: 'Alcazar Prestige | Petrol 1.5L Turbo | Automatic (DCT) | 7 STR', fullName: 'Hyundai Alcazar Prestige 1.5L Turbo GDi 7DCT 7-Seater', trim: 'Prestige DCT', pt: ALCAZAR_1_5_TURBO_DCT, exLakh: 18.50, onRoadLakh: 21.33, seats: 7 },

    // Corporate (2 variants)
    { slug: 'corporate-diesel-1-5l-turbo-6mt-7str', name: 'Alcazar Corporate | Diesel 1.5L Turbo | 6 Speed Manual | 7 STR', fullName: 'Hyundai Alcazar Corporate 1.5L CRDi 6MT 7-Seater', trim: 'Corporate Diesel', pt: ALCAZAR_1_5_DIESEL_MT, exLakh: 17.90, onRoadLakh: 20.94, seats: 7 },
    { slug: 'corporate-diesel-1-5l-turbo-automatic-tc-7str', name: 'Alcazar Corporate | Diesel 1.5L Turbo | Automatic (TC) | 7 STR', fullName: 'Hyundai Alcazar Corporate 1.5L CRDi 6AT 7-Seater', trim: 'Corporate Diesel AT', pt: ALCAZAR_1_5_DIESEL_AT, exLakh: 19.30, onRoadLakh: 22.57, seats: 7 },

    // Platinum (2 variants)
    { slug: 'platinum-petrol-1-5l-turbo-6mt-7str', name: 'Alcazar Platinum | Petrol 1.5L Turbo | 6 Speed Manual | 7 STR', fullName: 'Hyundai Alcazar Platinum 1.5L Turbo GDi 6MT 7-Seater', trim: 'Platinum', pt: ALCAZAR_1_5_TURBO_MT, exLakh: 19.46, onRoadLakh: 22.42, seats: 7 },
    { slug: 'platinum-diesel-1-5l-turbo-6mt-7str', name: 'Alcazar Platinum | Diesel 1.5L Turbo | 6 Speed Manual | 7 STR', fullName: 'Hyundai Alcazar Platinum 1.5L CRDi 6MT 7-Seater', trim: 'Platinum Diesel', pt: ALCAZAR_1_5_DIESEL_MT, exLakh: 19.51, onRoadLakh: 22.81, seats: 7 },

    // Signature (10 variants)
    { slug: 'signature-petrol-1-5l-turbo-automatic-dct-7str', name: 'Alcazar Signature | Petrol 1.5L Turbo | Automatic (DCT) | 7 STR', fullName: 'Hyundai Alcazar Signature 1.5L Turbo GDi 7DCT 7-Seater', trim: 'Signature', pt: ALCAZAR_1_5_TURBO_DCT, exLakh: 21.20, onRoadLakh: 24.91, seats: 7 },
    { slug: 'signature-petrol-1-5l-turbo-automatic-dct-7str-dual-tone', name: 'Alcazar Signature | Petrol 1.5L Turbo | Automatic (DCT) | 7 STR | Dual Tone', fullName: 'Hyundai Alcazar Signature 1.5L Turbo GDi 7DCT 7-Seater Dual Tone', trim: 'Signature Dual Tone', pt: ALCAZAR_1_5_TURBO_DCT, exLakh: 21.35, onRoadLakh: 25.08, seats: 7 },
    { slug: 'signature-petrol-1-5l-turbo-automatic-dct-6str', name: 'Alcazar Signature | Petrol 1.5L Turbo | Automatic (DCT) | 6 STR', fullName: 'Hyundai Alcazar Signature 1.5L Turbo GDi 7DCT 6-Seater (Captain Seats)', trim: 'Signature 6-Seater', pt: ALCAZAR_1_5_TURBO_DCT, exLakh: 21.40, onRoadLakh: 25.13, seats: 6 },
    { slug: 'signature-petrol-1-5l-turbo-automatic-dct-6str-dual-tone', name: 'Alcazar Signature | Petrol 1.5L Turbo | Automatic (DCT) | 6 STR | Dual Tone', fullName: 'Hyundai Alcazar Signature 1.5L Turbo GDi 7DCT 6-Seater Dual Tone', trim: 'Signature 6-Seater Dual Tone', pt: ALCAZAR_1_5_TURBO_DCT, exLakh: 21.55, onRoadLakh: 25.31, seats: 6 },
    { slug: 'signature-diesel-1-5l-turbo-automatic-tc-7str', name: 'Alcazar Signature | Diesel 1.5L Turbo | Automatic (TC) | 7 STR', fullName: 'Hyundai Alcazar Signature 1.5L CRDi 6AT 7-Seater', trim: 'Signature Diesel', pt: ALCAZAR_1_5_DIESEL_AT, exLakh: 21.40, onRoadLakh: 25.33, seats: 7 },
    { slug: 'signature-diesel-1-5l-turbo-automatic-tc-7str-dual-tone', name: 'Alcazar Signature | Diesel 1.5L Turbo | Automatic (TC) | 7 STR | Dual Tone', fullName: 'Hyundai Alcazar Signature 1.5L CRDi 6AT 7-Seater Dual Tone', trim: 'Signature Diesel Dual Tone', pt: ALCAZAR_1_5_DIESEL_AT, exLakh: 21.55, onRoadLakh: 25.51, seats: 7 },
    { slug: 'signature-diesel-1-5l-turbo-automatic-tc-6str', name: 'Alcazar Signature | Diesel 1.5L Turbo | Automatic (TC) | 6 STR', fullName: 'Hyundai Alcazar Signature 1.5L CRDi 6AT 6-Seater (Captain Seats)', trim: 'Signature Diesel 6-Seater', pt: ALCAZAR_1_5_DIESEL_AT, exLakh: 21.60, onRoadLakh: 25.56, seats: 6 },
    { slug: 'signature-diesel-1-5l-turbo-automatic-tc-6str-dual-tone', name: 'Alcazar Signature | Diesel 1.5L Turbo | Automatic (TC) | 6 STR | Dual Tone', fullName: 'Hyundai Alcazar Signature 1.5L CRDi 6AT 6-Seater Dual Tone', trim: 'Signature Diesel 6-Seater Dual Tone', pt: ALCAZAR_1_5_DIESEL_AT, exLakh: 21.75, onRoadLakh: 25.74, seats: 6 },
    { slug: 'signature-diesel-1-5l-turbo-automatic-tc-5str-lounge', name: 'Alcazar Signature | Diesel 1.5L Turbo | Automatic (TC) | 5 STR | Lounge Edition', fullName: 'Hyundai Alcazar Signature Lounge Edition 1.5L Diesel 6AT 5-Seater', trim: 'Signature Lounge', pt: ALCAZAR_1_5_DIESEL_AT, exLakh: 22.30, onRoadLakh: 26.41, seats: 5 },
    { slug: 'signature-diesel-1-5l-turbo-automatic-tc-5str-dual-tone-lounge', name: 'Alcazar Signature | Diesel 1.5L Turbo | Automatic (TC) | 5 STR | Dual Tone | Lounge Edition', fullName: 'Hyundai Alcazar Signature Lounge Edition 1.5L Diesel 6AT 5-Seater Dual Tone', trim: 'Signature Lounge Dual Tone', pt: ALCAZAR_1_5_DIESEL_AT, exLakh: 22.45, onRoadLakh: 26.59, seats: 5 },

    // Signature Knight (2 variants)
    { slug: 'signature-knight-petrol-1-5l-turbo-automatic-dct-7str', name: 'Alcazar Signature Knight | Petrol 1.5L Turbo | Automatic (DCT) | 7 STR', fullName: 'Hyundai Alcazar Signature Knight 1.5L Turbo GDi 7DCT 7-Seater', trim: 'Signature Knight', pt: ALCAZAR_1_5_TURBO_DCT, exLakh: 21.34, onRoadLakh: 25.07, seats: 7 },
    { slug: 'signature-knight-diesel-1-5l-turbo-automatic-tc-7str', name: 'Alcazar Signature Knight | Diesel 1.5L Turbo | Automatic (TC) | 7 STR', fullName: 'Hyundai Alcazar Signature Knight 1.5L CRDi 6AT 7-Seater', trim: 'Signature Knight Diesel', pt: ALCAZAR_1_5_DIESEL_AT, exLakh: 21.54, onRoadLakh: 25.50, seats: 7 },
  ].map((av) => ({
    id: `hyundai-alcazar-${av.slug}`,
    modelId: 'hyundai-alcazar',
    generationId: null,
    name: av.name,
    fullName: av.fullName,
    slug: av.slug,
    trim: av.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(av.exLakh * 100000),
      exShowroomLakh: av.exLakh,
      onRoadNashik: Math.round(av.onRoadLakh * 100000),
      onRoadNashikLakh: av.onRoadLakh,
      currency: 'INR',
    },
    powertrain: av.pt,
    performance: {
      mileageKmpl: av.pt.fuelType === 'Diesel' ? 20.4 : 17.5,
      mileage: { value: av.pt.fuelType === 'Diesel' ? 20.4 : 17.5, unit: 'km/l', type: 'ARAI', source: 'ARAI / Hyundai Motor India', verified: true },
      zeroToHundredSec: av.pt.fuelType === 'Petrol' ? 9.2 : 11.5,
      topSpeedKmph: 190,
    },
    dimensions: {
      lengthMm: 4560,
      widthMm: 1800,
      heightMm: 1710,
      wheelbaseMm: 2760,
      groundClearanceMm: 200,
      kerbWeightKg: av.pt.fuelType === 'Diesel' ? 1435 : 1370,
      bootSpaceLitres: 180,
      fuelTankLitres: 50,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: av.trim.includes('Signature') ? 'standard' : 'not_available',
        blindSpotMonitoring: av.trim.includes('Signature') ? 'standard' : 'not_available',
        laneKeepAssist: av.trim.includes('Signature') ? 'standard' : 'not_available',
        adaptiveCruiseControl: av.trim.includes('Signature') ? 'standard' : 'not_available',
        adasLevel: av.trim.includes('Signature') ? 'Level 2' : 'none',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        panoramicSunroof: !av.trim.startsWith('Executive') ? 'standard' : 'not_available',
        sunroof: !av.trim.startsWith('Executive') ? 'standard' : 'not_available',
        roofRails: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: av.trim.includes('Signature') || av.trim.includes('Platinum') ? 'standard' : 'not_available',
        poweredDriverSeat: av.trim.includes('Signature') ? 'standard' : 'not_available',
        wirelessCharging: 'standard',
        ambientLighting: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.25,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        premiumAudio: av.trim.includes('Signature') ? 'standard' : 'not_available',
        connectedCarTechnology: 'standard',
      },
      convenience: {
        pushButtonStart: 'standard',
        keylessEntry: 'standard',
        cruiseControl: 'standard',
        adaptiveCruiseControl: av.trim.includes('Signature') ? 'standard' : 'not_available',
        autoDimmingIRVM: 'standard',
        rainSensingWipers: av.trim.includes('Signature') ? 'standard' : 'not_available',
        automaticHeadlights: 'standard',
      },
    }),
    sources: [
      { name: 'Hyundai India Official Alcazar Brochure', url: 'https://www.hyundai.com/in/en/find-a-car/alcazar/highlights', type: 'official' as const, checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  }))
];
