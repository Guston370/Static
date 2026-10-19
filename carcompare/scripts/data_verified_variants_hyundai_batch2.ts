/**
 * scripts/data_verified_variants_hyundai_batch2.ts
 *
 * Comprehensive, verified variant database for Hyundai India Batch 2:
 * 1. Hyundai Exter (36 variants) - 1.2L Petrol (MT & AMT) & 1.2L Bi-Fuel CNG
 * 2. Hyundai i20 (15 variants) - 1.2L Kappa Petrol (Manual 82 bhp & IVT 87 bhp)
 * 3. Hyundai Grand i10 Nios (15 variants) - 1.2L Petrol (MT & AMT) & 1.2L CNG
 *
 * Total: 66 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// Exter Powertrains
const EXTER_1_2_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Kappa 4-Cylinder Dual VTVT Petrol Engine (5-Speed Manual)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 82,
  maxTorqueNm: 113.8,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

const EXTER_1_2_PETROL_AMT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Kappa 4-Cylinder Dual VTVT Petrol Engine (Smart Auto AMT)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 82,
  maxTorqueNm: 113.8,
  transmission: 'Automatic (AMT)' as const,
  drivetrain: 'FWD' as const,
};

const EXTER_1_2_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.2L Bi-Fuel Hy-CNG Duo 4-Cylinder Engine (5-Speed Manual)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 68,
  maxTorqueNm: 95.2,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

// i20 Powertrains
const I20_1_2_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Kappa MPi 4-Cylinder Petrol Engine (5-Speed Manual)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 82,
  maxTorqueNm: 114.7,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

const I20_1_2_PETROL_IVT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Kappa MPi 4-Cylinder Petrol Engine (Intelligent Variable Transmission IVT/CVT)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 87,
  maxTorqueNm: 114.7,
  transmission: 'Automatic (CVT)' as const,
  drivetrain: 'FWD' as const,
};

// Grand i10 Nios Powertrains
const NIOS_1_2_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Kappa 4-Cylinder Petrol Engine (5-Speed Manual)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 82,
  maxTorqueNm: 114,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

const NIOS_1_2_PETROL_AMT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Kappa 4-Cylinder Petrol Engine (Smart Auto AMT)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 82,
  maxTorqueNm: 114,
  transmission: 'Automatic (AMT)' as const,
  drivetrain: 'FWD' as const,
};

const NIOS_1_2_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.2L Bi-Fuel Hy-CNG Duo 4-Cylinder Engine (5-Speed Manual)',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 68,
  maxTorqueNm: 95.2,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
};

// ============================================================================
// 1. HYUNDAI EXTER (36 VARIANTS)
// ============================================================================
export const HYUNDAI_EXTER_VARIANTS: CarVariant[] = [
  ...[
    // HX 2 (2 variants)
    { slug: 'hx-2-petrol-manual', name: 'Exter HX 2 | Petrol | Manual', fullName: 'Hyundai Exter HX 2 1.2L Petrol 5MT', trim: 'HX 2', pt: EXTER_1_2_PETROL_MT, exLakh: 6.13, onRoadLakh: 6.86 },
    { slug: 'hx-2-cng-manual', name: 'Exter HX 2 | CNG | Manual', fullName: 'Hyundai Exter HX 2 1.2L Bi-Fuel CNG 5MT', trim: 'HX 2 CNG', pt: EXTER_1_2_CNG_MT, exLakh: 7.15, onRoadLakh: 8.02 },

    // HX 3 (6 variants)
    { slug: 'hx-3-petrol-manual', name: 'Exter HX 3 | Petrol | Manual', fullName: 'Hyundai Exter HX 3 1.2L Petrol 5MT', trim: 'HX 3', pt: EXTER_1_2_PETROL_MT, exLakh: 6.63, onRoadLakh: 7.42 },
    { slug: 'hx-3-petrol-manual-matte', name: 'Exter HX 3 | Petrol | Manual | Matte', fullName: 'Hyundai Exter HX 3 Matte 1.2L Petrol 5MT', trim: 'HX 3 Matte', pt: EXTER_1_2_PETROL_MT, exLakh: 6.79, onRoadLakh: 7.60 },
    { slug: 'hx-3-petrol-automatic', name: 'Exter HX 3 | Petrol | Automatic', fullName: 'Hyundai Exter HX 3 1.2L Petrol Smart Auto AMT', trim: 'HX 3 AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 7.30, onRoadLakh: 8.17 },
    { slug: 'hx-3-petrol-automatic-matte', name: 'Exter HX 3 | Petrol | Automatic | Matte', fullName: 'Hyundai Exter HX 3 Matte 1.2L Petrol Smart Auto AMT', trim: 'HX 3 Matte AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 7.45, onRoadLakh: 8.34 },
    { slug: 'hx-3-cng-manual', name: 'Exter HX 3 | CNG | Manual', fullName: 'Hyundai Exter HX 3 1.2L Bi-Fuel CNG 5MT', trim: 'HX 3 CNG', pt: EXTER_1_2_CNG_MT, exLakh: 7.60, onRoadLakh: 8.52 },
    { slug: 'hx-3-cng-manual-matte', name: 'Exter HX 3 | CNG | Manual | Matte', fullName: 'Hyundai Exter HX 3 Matte 1.2L Bi-Fuel CNG 5MT', trim: 'HX 3 Matte CNG', pt: EXTER_1_2_CNG_MT, exLakh: 7.74, onRoadLakh: 8.68 },

    // HX 4 (4 variants)
    { slug: 'hx-4-petrol-manual', name: 'Exter HX 4 | Petrol | Manual', fullName: 'Hyundai Exter HX 4 1.2L Petrol 5MT', trim: 'HX 4', pt: EXTER_1_2_PETROL_MT, exLakh: 7.64, onRoadLakh: 8.55 },
    { slug: 'hx-4-petrol-manual-matte', name: 'Exter HX 4 | Petrol | Manual | Matte', fullName: 'Hyundai Exter HX 4 Matte 1.2L Petrol 5MT', trim: 'HX 4 Matte', pt: EXTER_1_2_PETROL_MT, exLakh: 7.79, onRoadLakh: 8.72 },
    { slug: 'hx-4-cng-manual', name: 'Exter HX 4 | CNG | Manual', fullName: 'Hyundai Exter HX 4 1.2L Bi-Fuel CNG 5MT', trim: 'HX 4 CNG', pt: EXTER_1_2_CNG_MT, exLakh: 8.45, onRoadLakh: 9.47 },
    { slug: 'hx-4-cng-manual-matte', name: 'Exter HX 4 | CNG | Manual | Matte', fullName: 'Hyundai Exter HX 4 Matte 1.2L Bi-Fuel CNG 5MT', trim: 'HX 4 Matte CNG', pt: EXTER_1_2_CNG_MT, exLakh: 8.60, onRoadLakh: 9.64 },

    // HX 4 Plus (2 variants)
    { slug: 'hx-4-plus-petrol-automatic', name: 'Exter HX 4 Plus | Petrol | Automatic', fullName: 'Hyundai Exter HX 4 Plus 1.2L Petrol Smart Auto AMT', trim: 'HX 4 Plus', pt: EXTER_1_2_PETROL_AMT, exLakh: 8.50, onRoadLakh: 9.52 },
    { slug: 'hx-4-plus-petrol-automatic-matte', name: 'Exter HX 4 Plus | Petrol | Automatic | Matte', fullName: 'Hyundai Exter HX 4 Plus Matte 1.2L Petrol Smart Auto AMT', trim: 'HX 4 Plus Matte', pt: EXTER_1_2_PETROL_AMT, exLakh: 8.65, onRoadLakh: 9.69 },

    // HX 6 (12 variants)
    { slug: 'hx-6-petrol-manual', name: 'Exter HX 6 | Petrol | Manual', fullName: 'Hyundai Exter HX 6 1.2L Petrol 5MT', trim: 'HX 6', pt: EXTER_1_2_PETROL_MT, exLakh: 8.36, onRoadLakh: 9.36 },
    { slug: 'hx-6-petrol-manual-knight', name: 'Exter HX 6 | Petrol | Manual | Knight', fullName: 'Hyundai Exter HX 6 Knight 1.2L Petrol 5MT', trim: 'HX 6 Knight', pt: EXTER_1_2_PETROL_MT, exLakh: 8.55, onRoadLakh: 9.57 },
    { slug: 'hx-6-petrol-manual-dual-tone', name: 'Exter HX 6 | Petrol | Manual | Dual Tone', fullName: 'Hyundai Exter HX 6 1.2L Petrol 5MT Dual Tone', trim: 'HX 6 Dual Tone', pt: EXTER_1_2_PETROL_MT, exLakh: 8.55, onRoadLakh: 9.57 },
    { slug: 'hx-6-petrol-manual-matte', name: 'Exter HX 6 | Petrol | Manual | Matte', fullName: 'Hyundai Exter HX 6 Matte 1.2L Petrol 5MT', trim: 'HX 6 Matte', pt: EXTER_1_2_PETROL_MT, exLakh: 8.55, onRoadLakh: 9.57 },
    { slug: 'hx-6-petrol-automatic', name: 'Exter HX 6 | Petrol | Automatic', fullName: 'Hyundai Exter HX 6 1.2L Petrol Smart Auto AMT', trim: 'HX 6 AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 9.00, onRoadLakh: 10.08 },
    { slug: 'hx-6-cng-manual', name: 'Exter HX 6 | CNG | Manual', fullName: 'Hyundai Exter HX 6 1.2L Bi-Fuel CNG 5MT', trim: 'HX 6 CNG', pt: EXTER_1_2_CNG_MT, exLakh: 9.12, onRoadLakh: 10.22 },
    { slug: 'hx-6-petrol-automatic-knight', name: 'Exter HX 6 | Petrol | Automatic | Knight', fullName: 'Hyundai Exter HX 6 Knight 1.2L Petrol Smart Auto AMT', trim: 'HX 6 Knight AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 9.15, onRoadLakh: 10.25 },
    { slug: 'hx-6-petrol-automatic-dual-tone', name: 'Exter HX 6 | Petrol | Automatic | Dual Tone', fullName: 'Hyundai Exter HX 6 1.2L Petrol Smart Auto AMT Dual Tone', trim: 'HX 6 Dual Tone AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 9.16, onRoadLakh: 10.26 },
    { slug: 'hx-6-petrol-automatic-matte', name: 'Exter HX 6 | Petrol | Automatic | Matte', fullName: 'Hyundai Exter HX 6 Matte 1.2L Petrol Smart Auto AMT', trim: 'HX 6 Matte AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 9.16, onRoadLakh: 10.26 },
    { slug: 'hx-6-cng-manual-knight', name: 'Exter HX 6 | CNG | Manual | Knight', fullName: 'Hyundai Exter HX 6 Knight 1.2L Bi-Fuel CNG 5MT', trim: 'HX 6 Knight CNG', pt: EXTER_1_2_CNG_MT, exLakh: 9.27, onRoadLakh: 10.39 },
    { slug: 'hx-6-cng-manual-dual-tone', name: 'Exter HX 6 | CNG | Manual | Dual Tone', fullName: 'Hyundai Exter HX 6 1.2L Bi-Fuel CNG 5MT Dual Tone', trim: 'HX 6 Dual Tone CNG', pt: EXTER_1_2_CNG_MT, exLakh: 9.27, onRoadLakh: 10.39 },
    { slug: 'hx-6-cng-manual-matte', name: 'Exter HX 6 | CNG | Manual | Matte', fullName: 'Hyundai Exter HX 6 Matte 1.2L Bi-Fuel CNG 5MT', trim: 'HX 6 Matte CNG', pt: EXTER_1_2_CNG_MT, exLakh: 9.27, onRoadLakh: 10.39 },

    // HX 8 (6 variants)
    { slug: 'hx-8-petrol-manual', name: 'Exter HX 8 | Petrol | Manual', fullName: 'Hyundai Exter HX 8 1.2L Petrol 5MT', trim: 'HX 8', pt: EXTER_1_2_PETROL_MT, exLakh: 8.81, onRoadLakh: 9.87 },
    { slug: 'hx-8-petrol-manual-matte', name: 'Exter HX 8 | Petrol | Manual | Matte', fullName: 'Hyundai Exter HX 8 Matte 1.2L Petrol 5MT', trim: 'HX 8 Matte', pt: EXTER_1_2_PETROL_MT, exLakh: 8.96, onRoadLakh: 10.04 },
    { slug: 'hx-8-petrol-automatic', name: 'Exter HX 8 | Petrol | Automatic', fullName: 'Hyundai Exter HX 8 1.2L Petrol Smart Auto AMT', trim: 'HX 8 AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 9.54, onRoadLakh: 10.69 },
    { slug: 'hx-8-cng-manual', name: 'Exter HX 8 | CNG | Manual', fullName: 'Hyundai Exter HX 8 1.2L Bi-Fuel CNG 5MT', trim: 'HX 8 CNG', pt: EXTER_1_2_CNG_MT, exLakh: 9.60, onRoadLakh: 10.75 },
    { slug: 'hx-8-petrol-automatic-matte', name: 'Exter HX 8 | Petrol | Automatic | Matte', fullName: 'Hyundai Exter HX 8 Matte 1.2L Petrol Smart Auto AMT', trim: 'HX 8 Matte AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 9.70, onRoadLakh: 10.86 },
    { slug: 'hx-8-cng-manual-matte', name: 'Exter HX 8 | CNG | Manual | Matte', fullName: 'Hyundai Exter HX 8 Matte 1.2L Bi-Fuel CNG 5MT', trim: 'HX 8 Matte CNG', pt: EXTER_1_2_CNG_MT, exLakh: 9.75, onRoadLakh: 10.92 },

    // HX 10 (4 variants)
    { slug: 'hx-10-petrol-automatic', name: 'Exter HX 10 | Petrol | Automatic', fullName: 'Hyundai Exter HX 10 1.2L Petrol Smart Auto AMT', trim: 'HX 10 AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 9.89, onRoadLakh: 11.08 },
    { slug: 'hx-10-petrol-automatic-knight', name: 'Exter HX 10 | Petrol | Automatic | Knight', fullName: 'Hyundai Exter HX 10 Knight 1.2L Petrol Smart Auto AMT', trim: 'HX 10 Knight AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 10.04, onRoadLakh: 11.25 },
    { slug: 'hx-10-petrol-automatic-dual-tone', name: 'Exter HX 10 | Petrol | Automatic | Dual Tone', fullName: 'Hyundai Exter HX 10 1.2L Petrol Smart Auto AMT Dual Tone', trim: 'HX 10 Dual Tone AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 10.04, onRoadLakh: 11.25 },
    { slug: 'hx-10-petrol-automatic-matte', name: 'Exter HX 10 | Petrol | Automatic | Matte', fullName: 'Hyundai Exter HX 10 Matte 1.2L Petrol Smart Auto AMT', trim: 'HX 10 Matte AMT', pt: EXTER_1_2_PETROL_AMT, exLakh: 10.04, onRoadLakh: 11.25 },
  ].map((ev) => ({
    id: `hyundai-exter-${ev.slug}`,
    modelId: 'hyundai-exter',
    generationId: null,
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
      mileageKmpl: ev.pt.fuelType === 'CNG' ? 27.1 : 19.4,
      mileage: { value: ev.pt.fuelType === 'CNG' ? 27.1 : 19.4, unit: ev.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Hyundai Motor India', verified: true },
      zeroToHundredSec: 13.5,
      topSpeedKmph: 160,
    },
    dimensions: {
      lengthMm: 3815,
      widthMm: 1710,
      heightMm: 1631,
      wheelbaseMm: 2450,
      groundClearanceMm: 185,
      kerbWeightKg: 940,
      bootSpaceLitres: ev.pt.fuelType === 'CNG' ? 280 : 391,
      fuelTankLitres: ev.pt.fuelType === 'CNG' ? 60 : 37,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: ev.trim.includes('6') || ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
        hillAssist: ev.trim.includes('6') || ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
        rearCamera: ev.trim.includes('6') || ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
        tpms: ev.trim.includes('6') || ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: ev.trim.includes('8') || ev.trim.includes('10') ? 15 : 14,
        alloyWheels: ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
        ledHeadlights: ev.trim.includes('6') || ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
        sunroof: ev.trim.includes('6') || ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
        roofRails: !ev.trim.startsWith('HX 2') ? 'standard' : 'not_available',
      },
      interior: {
        automaticClimateControl: ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
        rearACVents: !ev.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        wirelessCharging: ev.trim.includes('10') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !ev.trim.startsWith('HX 2') ? 8.0 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !ev.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        appleCarPlay: !ev.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        connectedCarTechnology: ev.trim.includes('10') ? 'standard' : 'not_available',
      },
      convenience: {
        pushButtonStart: ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
        keylessEntry: !ev.trim.startsWith('HX 2') ? 'standard' : 'not_available',
        cruiseControl: ev.trim.includes('6') || ev.trim.includes('8') || ev.trim.includes('10') ? 'standard' : 'not_available',
        automaticHeadlights: !ev.trim.startsWith('HX 2') ? 'standard' : 'not_available',
      },
    }),
    sources: [
      { name: 'Hyundai India Official Exter Brochure', url: 'https://www.hyundai.com/in/en/find-a-car/exter/highlights', type: 'official' as const, checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  }))
];

// ============================================================================
// 2. HYUNDAI i20 (15 VARIANTS)
// ============================================================================
export const HYUNDAI_I20_VARIANTS: CarVariant[] = [
  ...[
    // Era (1 variant)
    { slug: 'era-petrol-manual', name: 'i20 Era | Petrol | Manual', fullName: 'Hyundai i20 Era 1.2L Petrol 5MT', trim: 'Era', pt: I20_1_2_PETROL_MT, exLakh: 7.04, onRoadLakh: 7.08 },

    // Magna Executive (1 variant)
    { slug: 'magna-executive-petrol-manual', name: 'i20 Magna Executive | Petrol | Manual', fullName: 'Hyundai i20 Magna Executive 1.2L Petrol 5MT', trim: 'Magna Executive', pt: I20_1_2_PETROL_MT, exLakh: 7.40, onRoadLakh: 7.94 },

    // Magna (1 variant)
    { slug: 'magna-petrol-manual', name: 'i20 Magna | Petrol | Manual', fullName: 'Hyundai i20 Magna 1.2L Petrol 5MT', trim: 'Magna', pt: I20_1_2_PETROL_MT, exLakh: 7.75, onRoadLakh: 8.23 },

    // Sportz (2 variants)
    { slug: 'sportz-petrol-manual', name: 'i20 Sportz | Petrol | Manual', fullName: 'Hyundai i20 Sportz 1.2L Petrol 5MT', trim: 'Sportz', pt: I20_1_2_PETROL_MT, exLakh: 8.38, onRoadLakh: 9.15 },
    { slug: 'sportz-petrol-automatic', name: 'i20 Sportz | Petrol | Automatic', fullName: 'Hyundai i20 Sportz 1.2L Petrol IVT/CVT', trim: 'Sportz IVT', pt: I20_1_2_PETROL_IVT, exLakh: 9.43, onRoadLakh: 10.34 },

    // Sportz (O) (2 variants)
    { slug: 'sportz-o-petrol-manual', name: 'i20 Sportz (O) | Petrol | Manual', fullName: 'Hyundai i20 Sportz (O) 1.2L Petrol 5MT', trim: 'Sportz (O)', pt: I20_1_2_PETROL_MT, exLakh: 8.88, onRoadLakh: 9.80 },
    { slug: 'sportz-o-petrol-automatic', name: 'i20 Sportz (O) | Petrol | Automatic', fullName: 'Hyundai i20 Sportz (O) 1.2L Petrol IVT/CVT', trim: 'Sportz (O) IVT', pt: I20_1_2_PETROL_IVT, exLakh: 9.93, onRoadLakh: 10.85 },

    // Sportz (O) Knight Edition (1 variant)
    { slug: 'sportz-o-knight-edition-petrol-manual', name: 'i20 Sportz (O) Knight Edition | Petrol | Manual', fullName: 'Hyundai i20 Sportz (O) Knight 1.2L Petrol 5MT', trim: 'Sportz (O) Knight', pt: I20_1_2_PETROL_MT, exLakh: 9.03, onRoadLakh: 9.90 },

    // Asta (1 variant)
    { slug: 'asta-petrol-manual', name: 'i20 Asta | Petrol | Manual', fullName: 'Hyundai i20 Asta 1.2L Petrol 5MT', trim: 'Asta', pt: I20_1_2_PETROL_MT, exLakh: 9.34, onRoadLakh: 10.17 },

    // Asta (O) (4 variants)
    { slug: 'asta-o-petrol-manual', name: 'i20 Asta (O) | Petrol | Manual', fullName: 'Hyundai i20 Asta (O) 1.2L Petrol 5MT', trim: 'Asta (O)', pt: I20_1_2_PETROL_MT, exLakh: 10.00, onRoadLakh: 10.78 },
    { slug: 'asta-o-petrol-manual-dual-tone', name: 'i20 Asta (O) | Petrol | Manual | Dual Tone', fullName: 'Hyundai i20 Asta (O) 1.2L Petrol 5MT Dual Tone', trim: 'Asta (O) Dual Tone', pt: I20_1_2_PETROL_MT, exLakh: 10.15, onRoadLakh: 10.96 },
    { slug: 'asta-o-petrol-automatic', name: 'i20 Asta (O) | Petrol | Automatic', fullName: 'Hyundai i20 Asta (O) 1.2L Petrol IVT/CVT', trim: 'Asta (O) IVT', pt: I20_1_2_PETROL_IVT, exLakh: 11.21, onRoadLakh: 12.36 },
    { slug: 'asta-o-petrol-automatic-dual-tone', name: 'i20 Asta (O) | Petrol | Automatic | Dual Tone', fullName: 'Hyundai i20 Asta (O) 1.2L Petrol IVT/CVT Dual Tone', trim: 'Asta (O) IVT Dual Tone', pt: I20_1_2_PETROL_IVT, exLakh: 11.36, onRoadLakh: 12.54 },

    // Asta (O) Knight Edition (2 variants)
    { slug: 'asta-o-knight-edition-petrol-automatic', name: 'i20 Asta (O) Knight Edition | Petrol | Automatic', fullName: 'Hyundai i20 Asta (O) Knight 1.2L Petrol IVT/CVT', trim: 'Asta (O) Knight IVT', pt: I20_1_2_PETROL_IVT, exLakh: 11.31, onRoadLakh: 12.47 },
    { slug: 'asta-o-knight-edition-petrol-automatic-dual-tone', name: 'i20 Asta (O) Knight Edition | Petrol | Automatic | Dual Tone', fullName: 'Hyundai i20 Asta (O) Knight 1.2L Petrol IVT/CVT Dual Tone', trim: 'Asta (O) Knight IVT Dual Tone', pt: I20_1_2_PETROL_IVT, exLakh: 11.46, onRoadLakh: 12.65 },
  ].map((iv) => ({
    id: `hyundai-i20-${iv.slug}`,
    modelId: 'hyundai-i20',
    generationId: null,
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
      mileageKmpl: iv.pt.transmission === 'Automatic (CVT)' ? 19.65 : 20.0,
      mileage: { value: iv.pt.transmission === 'Automatic (CVT)' ? 19.65 : 20.0, unit: 'km/l', type: 'ARAI', source: 'ARAI / Hyundai Motor India', verified: true },
      zeroToHundredSec: 12.4,
      topSpeedKmph: 170,
    },
    dimensions: {
      lengthMm: 3995,
      widthMm: 1775,
      heightMm: 1505,
      wheelbaseMm: 2580,
      groundClearanceMm: 170,
      kerbWeightKg: 1010,
      bootSpaceLitres: 311,
      fuelTankLitres: 37,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: iv.trim.startsWith('Sportz') || iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        hillAssist: iv.trim.startsWith('Sportz') || iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        rearCamera: iv.trim.startsWith('Sportz') || iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        tpms: iv.trim.startsWith('Sportz') || iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: iv.trim.startsWith('Asta') ? 16 : 15,
        alloyWheels: iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        ledHeadlights: iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        sunroof: iv.trim.includes('(O)') || iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
      },
      interior: {
        automaticClimateControl: iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        rearACVents: !iv.trim.startsWith('Era') ? 'standard' : 'not_available',
        wirelessCharging: iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        ambientLighting: iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: iv.trim.startsWith('Asta (O)') ? 10.25 : (iv.trim.startsWith('Sportz') || iv.trim.startsWith('Asta') ? 8.0 : null),
        digitalInstrumentCluster: !iv.trim.startsWith('Era') ? 'standard' : 'not_available',
        androidAuto: !iv.trim.startsWith('Era') && !iv.trim.startsWith('Magna') ? 'standard' : 'not_available',
        appleCarPlay: !iv.trim.startsWith('Era') && !iv.trim.startsWith('Magna') ? 'standard' : 'not_available',
        premiumAudio: iv.trim.startsWith('Asta (O)') ? 'standard' : 'not_available',
        connectedCarTechnology: iv.trim.startsWith('Asta (O)') ? 'standard' : 'not_available',
      },
      convenience: {
        pushButtonStart: iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        keylessEntry: !iv.trim.startsWith('Era') ? 'standard' : 'not_available',
        cruiseControl: iv.trim.startsWith('Sportz') || iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        automaticHeadlights: iv.trim.startsWith('Sportz') || iv.trim.startsWith('Asta') ? 'standard' : 'not_available',
      },
    }),
    sources: [
      { name: 'Hyundai India Official i20 Brochure', url: 'https://www.hyundai.com/in/en/find-a-car/i20/highlights', type: 'official' as const, checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  }))
];

// ============================================================================
// 3. HYUNDAI GRAND i10 NIOS (15 VARIANTS)
// ============================================================================
export const HYUNDAI_GRAND_I10_NIOS_VARIANTS: CarVariant[] = [
  ...[
    // Era (1 variant)
    { slug: 'era-petrol-manual', name: 'Grand i10 Nios Era | Petrol | Manual', fullName: 'Hyundai Grand i10 Nios Era 1.2L Petrol 5MT', trim: 'Era', pt: NIOS_1_2_PETROL_MT, exLakh: 5.92, onRoadLakh: 6.62 },

    // Magna (2 variants)
    { slug: 'magna-petrol-manual', name: 'Grand i10 Nios Magna | Petrol | Manual', fullName: 'Hyundai Grand i10 Nios Magna 1.2L Petrol 5MT', trim: 'Magna', pt: NIOS_1_2_PETROL_MT, exLakh: 6.78, onRoadLakh: 7.46 },
    { slug: 'magna-cng-manual', name: 'Grand i10 Nios Magna | CNG | Manual', fullName: 'Hyundai Grand i10 Nios Magna 1.2L Bi-Fuel CNG 5MT', trim: 'Magna CNG', pt: NIOS_1_2_CNG_MT, exLakh: 7.55, onRoadLakh: 8.32 },

    // Corporate (2 variants)
    { slug: 'corporate-petrol-manual', name: 'Grand i10 Nios Corporate | Petrol | Manual', fullName: 'Hyundai Grand i10 Nios Corporate 1.2L Petrol 5MT', trim: 'Corporate', pt: NIOS_1_2_PETROL_MT, exLakh: 7.03, onRoadLakh: 7.72 },
    { slug: 'corporate-petrol-automatic', name: 'Grand i10 Nios Corporate | Petrol | Automatic', fullName: 'Hyundai Grand i10 Nios Corporate 1.2L Petrol Smart Auto AMT', trim: 'Corporate AMT', pt: NIOS_1_2_PETROL_AMT, exLakh: 7.63, onRoadLakh: 8.42 },

    // Sportz (3 variants)
    { slug: 'sportz-petrol-manual', name: 'Grand i10 Nios Sportz | Petrol | Manual', fullName: 'Hyundai Grand i10 Nios Sportz 1.2L Petrol 5MT', trim: 'Sportz', pt: NIOS_1_2_PETROL_MT, exLakh: 7.36, onRoadLakh: 8.10 },
    { slug: 'sportz-petrol-automatic', name: 'Grand i10 Nios Sportz | Petrol | Automatic', fullName: 'Hyundai Grand i10 Nios Sportz 1.2L Petrol Smart Auto AMT', trim: 'Sportz AMT', pt: NIOS_1_2_PETROL_AMT, exLakh: 7.90, onRoadLakh: 8.69 },
    { slug: 'sportz-cng-manual', name: 'Grand i10 Nios Sportz | CNG | Manual', fullName: 'Hyundai Grand i10 Nios Sportz 1.2L Bi-Fuel CNG 5MT', trim: 'Sportz CNG', pt: NIOS_1_2_CNG_MT, exLakh: 8.05, onRoadLakh: 8.87 },

    // Sportz Vibe (2 variants)
    { slug: 'sportz-vibe-petrol-manual', name: 'Grand i10 Nios Sportz Vibe | Petrol | Manual', fullName: 'Hyundai Grand i10 Nios Sportz Vibe 1.2L Petrol 5MT', trim: 'Sportz Vibe', pt: NIOS_1_2_PETROL_MT, exLakh: 7.58, onRoadLakh: 8.36 },
    { slug: 'sportz-vibe-petrol-automatic', name: 'Grand i10 Nios Sportz Vibe | Petrol | Automatic', fullName: 'Hyundai Grand i10 Nios Sportz Vibe 1.2L Petrol Smart Auto AMT', trim: 'Sportz Vibe AMT', pt: NIOS_1_2_PETROL_AMT, exLakh: 8.12, onRoadLakh: 8.96 },

    // Sportz (O) (2 variants)
    { slug: 'sportz-o-petrol-manual', name: 'Grand i10 Nios Sportz (O) | Petrol | Manual', fullName: 'Hyundai Grand i10 Nios Sportz (O) 1.2L Petrol 5MT', trim: 'Sportz (O)', pt: NIOS_1_2_PETROL_MT, exLakh: 7.60, onRoadLakh: 8.38 },
    { slug: 'sportz-o-petrol-automatic', name: 'Grand i10 Nios Sportz (O) | Petrol | Automatic', fullName: 'Hyundai Grand i10 Nios Sportz (O) 1.2L Petrol Smart Auto AMT', trim: 'Sportz (O) AMT', pt: NIOS_1_2_PETROL_AMT, exLakh: 8.16, onRoadLakh: 9.00 },

    // Sportz (O) Vibe (1 variant)
    { slug: 'sportz-o-vibe-petrol-automatic', name: 'Grand i10 Nios Sportz (O) Vibe | Petrol | Automatic', fullName: 'Hyundai Grand i10 Nios Sportz (O) Vibe 1.2L Petrol Smart Auto AMT', trim: 'Sportz (O) Vibe AMT', pt: NIOS_1_2_PETROL_AMT, exLakh: 8.24, onRoadLakh: 9.09 },

    // Asta (2 variants)
    { slug: 'asta-petrol-manual', name: 'Grand i10 Nios Asta | Petrol | Manual', fullName: 'Hyundai Grand i10 Nios Asta 1.2L Petrol 5MT', trim: 'Asta', pt: NIOS_1_2_PETROL_MT, exLakh: 7.99, onRoadLakh: 8.83 },
    { slug: 'asta-petrol-automatic', name: 'Grand i10 Nios Asta | Petrol | Automatic', fullName: 'Hyundai Grand i10 Nios Asta 1.2L Petrol Smart Auto AMT', trim: 'Asta AMT', pt: NIOS_1_2_PETROL_AMT, exLakh: 8.56, onRoadLakh: 9.46 },
  ].map((nv) => ({
    id: `hyundai-grand-i10-nios-${nv.slug}`,
    modelId: 'hyundai-grand-i10-nios',
    generationId: null,
    name: nv.name,
    fullName: nv.fullName,
    slug: nv.slug,
    trim: nv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(nv.exLakh * 100000),
      exShowroomLakh: nv.exLakh,
      onRoadNashik: Math.round(nv.onRoadLakh * 100000),
      onRoadNashikLakh: nv.onRoadLakh,
      currency: 'INR',
    },
    powertrain: nv.pt,
    performance: {
      mileageKmpl: nv.pt.fuelType === 'CNG' ? 27.0 : 20.1,
      mileage: { value: nv.pt.fuelType === 'CNG' ? 27.0 : 20.1, unit: nv.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Hyundai Motor India', verified: true },
      zeroToHundredSec: 13.0,
      topSpeedKmph: 165,
    },
    dimensions: {
      lengthMm: 3815,
      widthMm: 1680,
      heightMm: 1520,
      wheelbaseMm: 2450,
      groundClearanceMm: 165,
      kerbWeightKg: 930,
      bootSpaceLitres: nv.pt.fuelType === 'CNG' ? 200 : 260,
      fuelTankLitres: nv.pt.fuelType === 'CNG' ? 60 : 37,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: nv.trim.startsWith('Sportz') || nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        hillAssist: nv.trim.startsWith('Sportz') || nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        rearCamera: nv.trim.startsWith('Sportz') || nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        tpms: nv.trim.startsWith('Sportz') || nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: nv.trim.startsWith('Asta') ? 15 : 14,
        alloyWheels: nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        ledHeadlights: nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        roofRails: nv.trim.startsWith('Sportz') || nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
      },
      interior: {
        automaticClimateControl: nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        rearACVents: !nv.trim.startsWith('Era') ? 'standard' : 'not_available',
        wirelessCharging: nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !nv.trim.startsWith('Era') ? 8.0 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !nv.trim.startsWith('Era') && !nv.trim.startsWith('Magna') ? 'standard' : 'not_available',
        appleCarPlay: !nv.trim.startsWith('Era') && !nv.trim.startsWith('Magna') ? 'standard' : 'not_available',
      },
      convenience: {
        pushButtonStart: nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        keylessEntry: !nv.trim.startsWith('Era') ? 'standard' : 'not_available',
        cruiseControl: nv.trim.startsWith('Sportz') || nv.trim.startsWith('Asta') ? 'standard' : 'not_available',
        automaticHeadlights: !nv.trim.startsWith('Era') ? 'standard' : 'not_available',
      },
    }),
    sources: [
      { name: 'Hyundai India Official Grand i10 Nios Brochure', url: 'https://www.hyundai.com/in/en/find-a-car/grand-i10-nios/highlights', type: 'official' as const, checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  }))
];
