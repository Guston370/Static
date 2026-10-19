/**
 * scripts/data_verified_variants_citroen.ts
 *
 * Comprehensive, verified variant database for Citroen India:
 * 1. Citroen C3 X (12 variants) - 1.2L PureTech (80 bhp 5MT, 80 bhp CNG 5MT, 109 bhp Turbo 6MT & 6AT)
 * 2. Citroen Basalt X (14 variants) - 1.2L NA (80 bhp 5MT) & 1.2L Turbo (108 bhp 6MT & 6AT; Comfort & Dual Tone)
 * 3. Citroen Aircross X (14 variants) - 1.2L NA & Turbo (5 & 7 Seater; 5MT, 6MT & 6AT; Comfort & Dual Tone)
 * 4. Citroen eC3 X (3 variants) - 29.2 kWh LFP Battery (320 km range, Fast Charging, 56 bhp)
 * 5. Citroen C5 Aircross (1 variant) - 2.0L DW10 FC Turbo Diesel (174 bhp, 400 Nm, 8-Speed Automatic)
 *
 * Total: 44 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// 1.2L PureTech NA Petrol 5MT (80 bhp / 115 Nm)
const PURETECH_1_2_NA_5MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L PureTech 82 3-Cylinder Naturally Aspirated Petrol (5-Speed Manual)',
  engineDisplacementCC: 1198,
  cylinders: 3,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 80,
  maxTorqueNm: 115,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// 1.2L PureTech CNG 5MT (80 bhp / 115 Nm)
const PURETECH_1_2_CNG_5MT = {
  fuelType: 'CNG' as const,
  engineName: '1.2L PureTech Bi-Fuel CNG 3-Cylinder Engine (5-Speed Manual)',
  engineDisplacementCC: 1198,
  cylinders: 3,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 80,
  maxTorqueNm: 115,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// 1.2L PureTech Turbo Petrol 6MT (108 / 109 bhp / 190 Nm)
const PURETECH_1_2_TURBO_6MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L PureTech 110 3-Cylinder Turbocharged Petrol (6-Speed Manual)',
  engineDisplacementCC: 1199,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 109,
  maxTorqueNm: 190,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// 1.2L PureTech Turbo Petrol 6AT (108 / 109 bhp / 205 Nm)
const PURETECH_1_2_TURBO_6AT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L PureTech 110 3-Cylinder Turbocharged Petrol (6-Speed Torque Converter Automatic)',
  engineDisplacementCC: 1199,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 109,
  maxTorqueNm: 205,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// ë-C3 Electric Powertrain (29.2 kWh / 56 bhp / 143 Nm)
const EC3_ELECTRIC = {
  fuelType: 'Electric' as const,
  engineName: 'Permanent Magnet Synchronous Motor (29.2 kWh LFP High-Energy Battery Pack)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 56,
  maxTorqueNm: 143,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 29.2,
  electricMotorPowerBhp: 56,
  electricRangeKm: 320,
};

// C5 Aircross 2.0L Turbo Diesel 8AT (174 bhp / 400 Nm)
const C5_2_0_DIESEL_8AT = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L DW10 FC 4-Cylinder Turbocharged Diesel (8-Speed EAT8 Automatic)',
  engineDisplacementCC: 1997,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 174,
  maxTorqueNm: 400,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// ============================================================================
// 1. CITROEN C3 X (12 VARIANTS)
// ============================================================================
export const CITROEN_C3_X_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'live-petrol-1-2l-manual', name: 'C3 X Live | Petrol 1.2L | 5 Speed Manual', fullName: 'Citroen C3 X Live 1.2L PureTech 5MT', trim: 'Live', pt: PURETECH_1_2_NA_5MT, mileage: 19.3, exLakh: 5.30, onRoadLakh: 5.92 },
    { slug: 'live-cng-1-2l-manual', name: 'C3 X Live | CNG 1.2L | 5 Speed Manual', fullName: 'Citroen C3 X Live 1.2L CNG 5MT', trim: 'Live CNG', pt: PURETECH_1_2_CNG_5MT, mileage: 28.5, exLakh: 5.95, onRoadLakh: 6.69 },
    { slug: 'live-o-petrol-1-2l-manual', name: 'C3 X Live (O) | Petrol 1.2L | 5 Speed Manual', fullName: 'Citroen C3 X Live (O) 1.2L PureTech 5MT', trim: 'Live (O)', pt: PURETECH_1_2_NA_5MT, mileage: 19.3, exLakh: 6.00, onRoadLakh: 6.74 },
    { slug: 'feel-petrol-1-2l-manual', name: 'C3 X Feel | Petrol 1.2L | 5 Speed Manual', fullName: 'Citroen C3 X Feel 1.2L PureTech 5MT', trim: 'Feel', pt: PURETECH_1_2_NA_5MT, mileage: 19.3, exLakh: 6.30, onRoadLakh: 7.09 },
    { slug: 'feel-cng-1-2l-manual', name: 'C3 X Feel | CNG 1.2L | 5 Speed Manual', fullName: 'Citroen C3 X Feel 1.2L CNG 5MT', trim: 'Feel CNG', pt: PURETECH_1_2_CNG_5MT, mileage: 28.5, exLakh: 6.65, onRoadLakh: 7.49 },
    { slug: 'feel-petrol-1-2l-turbo-manual', name: 'C3 X Feel | Petrol 1.2L Turbo | 6 Speed Manual', fullName: 'Citroen C3 X Feel 1.2L Turbo 6MT', trim: 'Feel Turbo', pt: PURETECH_1_2_TURBO_6MT, mileage: 19.3, exLakh: 7.85, onRoadLakh: 8.91 },
    { slug: 'feel-o-petrol-1-2l-manual', name: 'C3 X Feel (O) | Petrol 1.2L | 5 Speed Manual', fullName: 'Citroen C3 X Feel (O) 1.2L PureTech 5MT', trim: 'Feel (O)', pt: PURETECH_1_2_NA_5MT, mileage: 19.3, exLakh: 7.35, onRoadLakh: 8.28 },
    { slug: 'feel-o-cng-1-2l-manual', name: 'C3 X Feel (O) | CNG 1.2L | 5 Speed Manual', fullName: 'Citroen C3 X Feel (O) 1.2L CNG 5MT', trim: 'Feel (O) CNG', pt: PURETECH_1_2_CNG_5MT, mileage: 28.5, exLakh: 7.95, onRoadLakh: 8.99 },
    { slug: 'shine-petrol-1-2l-manual', name: 'C3 X Shine | Petrol 1.2L | 5 Speed Manual', fullName: 'Citroen C3 X Shine 1.2L PureTech 5MT', trim: 'Shine', pt: PURETECH_1_2_NA_5MT, mileage: 19.3, exLakh: 8.15, onRoadLakh: 9.23 },
    { slug: 'shine-cng-1-2l-manual', name: 'C3 X Shine | CNG 1.2L | 5 Speed Manual', fullName: 'Citroen C3 X Shine 1.2L CNG 5MT', trim: 'Shine CNG', pt: PURETECH_1_2_CNG_5MT, mileage: 28.5, exLakh: 8.75, onRoadLakh: 9.92 },
    { slug: 'shine-petrol-1-2l-turbo-manual', name: 'C3 X Shine | Petrol 1.2L Turbo | 6 Speed Manual', fullName: 'Citroen C3 X Shine 1.2L Turbo 6MT', trim: 'Shine Turbo', pt: PURETECH_1_2_TURBO_6MT, mileage: 19.3, exLakh: 9.30, onRoadLakh: 10.54 },
    { slug: 'shine-petrol-1-2l-turbo-automatic', name: 'C3 X Shine | Petrol 1.2L Turbo | Automatic', fullName: 'Citroen C3 X Shine 1.2L Turbo 6AT Automatic', trim: 'Shine Turbo AT', pt: PURETECH_1_2_TURBO_6AT, mileage: 18.3, exLakh: 10.00, onRoadLakh: 11.35 },
  ].map((c) => ({
    id: `citroen-c3-${c.slug}`,
    modelId: 'citroen-c3',
    generationId: 'c3-x-2024',
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
      topSpeedKmph: c.pt.aspiration === 'Turbocharged' ? 180 : 160,
    },
    dimensions: {
      lengthMm: 3981,
      widthMm: 1733,
      heightMm: 1586,
      wheelbaseMm: 2540,
      groundClearanceMm: 180,
      kerbWeightKg: 964,
      bootSpaceLitres: 315,
      fuelTankLitres: c.pt.fuelType === 'CNG' ? 60 : 30,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: c.trim.includes('Shine') ? 'standard' : 'not_available',
        tpms: c.trim.includes('Feel') || c.trim.includes('Shine') ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: c.trim.includes('Shine') ? 15 : 14,
        alloyWheels: c.trim.includes('Shine') ? 'standard' : 'not_available',
        ledHeadlights: c.trim.includes('Shine') ? 'standard' : 'not_available',
        ledDRLs: !c.trim.startsWith('Live') ? 'standard' : 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !c.trim.startsWith('Live') ? 10.25 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !c.trim.startsWith('Live') ? 'standard' : 'not_available',
        appleCarPlay: !c.trim.startsWith('Live') ? 'standard' : 'not_available',
        wirelessAndroidAuto: !c.trim.startsWith('Live') ? 'standard' : 'not_available',
        wirelessAppleCarPlay: !c.trim.startsWith('Live') ? 'standard' : 'not_available',
        speakerCount: c.trim.includes('Shine') ? 6 : 4,
      },
    }),
    sources: [
      { name: 'Citroen India Official', url: 'https://www.citroen.in/c3', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale C3 X Nashik', url: 'https://www.carwale.com/citroen-cars/c3-x/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 2. CITROEN BASALT X (14 VARIANTS)
// ============================================================================
export const CITROEN_BASALT_X_VARIANTS: CarVariant[] = [
  ...[
    // You (3 variants)
    { slug: 'you-petrol-manual', name: 'Basalt X You | Petrol | 5 Speed Manual', fullName: 'Citroen Basalt X You 1.2L PureTech 5MT', trim: 'You', pt: PURETECH_1_2_NA_5MT, mileage: 18.0, exLakh: 7.99, onRoadLakh: 10.04 },
    { slug: 'you-petrol-manual-comfort-edition', name: 'Basalt X You | Petrol | 5 Speed Manual | Comfort Edition', fullName: 'Citroen Basalt X You Comfort Edition 1.2L PureTech 5MT', trim: 'You Comfort', pt: PURETECH_1_2_NA_5MT, mileage: 18.0, exLakh: 8.20, onRoadLakh: 10.27 },
    { slug: 'you-petrol-turbo-manual', name: 'Basalt X You | Petrol Turbo | 6 Speed Manual', fullName: 'Citroen Basalt X You 1.2L Turbo 6MT', trim: 'You Turbo', pt: PURETECH_1_2_TURBO_6MT, mileage: 19.5, exLakh: 9.35, onRoadLakh: 11.70 },
    // Plus (6 variants)
    { slug: 'plus-petrol-manual', name: 'Basalt X Plus | Petrol | 5 Speed Manual', fullName: 'Citroen Basalt X Plus 1.2L PureTech 5MT', trim: 'Plus', pt: PURETECH_1_2_NA_5MT, mileage: 18.0, exLakh: 9.35, onRoadLakh: 11.70 },
    { slug: 'plus-petrol-manual-comfort-edition', name: 'Basalt X Plus | Petrol | 5 Speed Manual | Comfort Edition', fullName: 'Citroen Basalt X Plus Comfort Edition 1.2L PureTech 5MT', trim: 'Plus Comfort', pt: PURETECH_1_2_NA_5MT, mileage: 18.0, exLakh: 9.35, onRoadLakh: 11.70 },
    { slug: 'plus-petrol-turbo-manual', name: 'Basalt X Plus | Petrol Turbo | 6 Speed Manual', fullName: 'Citroen Basalt X Plus 1.2L Turbo 6MT', trim: 'Plus Turbo', pt: PURETECH_1_2_TURBO_6MT, mileage: 19.5, exLakh: 10.99, onRoadLakh: 13.74 },
    { slug: 'plus-petrol-turbo-automatic-comfort-edition', name: 'Basalt X Plus | Petrol Turbo | Automatic (TC) | Comfort Edition', fullName: 'Citroen Basalt X Plus Comfort Edition 1.2L Turbo 6AT', trim: 'Plus Turbo AT Comfort', pt: PURETECH_1_2_TURBO_6AT, mileage: 18.7, exLakh: 10.99, onRoadLakh: 13.74 },
    { slug: 'plus-petrol-turbo-automatic', name: 'Basalt X Plus | Petrol Turbo | Automatic (TC)', fullName: 'Citroen Basalt X Plus 1.2L Turbo 6AT Automatic', trim: 'Plus Turbo AT', pt: PURETECH_1_2_TURBO_6AT, mileage: 18.7, exLakh: 12.15, onRoadLakh: 15.20 },
    { slug: 'plus-petrol-turbo-manual-comfort-edition', name: 'Basalt X Plus | Petrol Turbo | 6 Speed Manual | Comfort Edition', fullName: 'Citroen Basalt X Plus Comfort Edition 1.2L Turbo 6MT', trim: 'Plus Turbo Comfort', pt: PURETECH_1_2_TURBO_6MT, mileage: 19.5, exLakh: 12.15, onRoadLakh: 15.20 },
    // Max (5 variants)
    { slug: 'max-petrol-manual', name: 'Basalt X Max | Petrol | 5 Speed Manual', fullName: 'Citroen Basalt X Max 1.2L PureTech 5MT', trim: 'Max', pt: PURETECH_1_2_NA_5MT, mileage: 18.0, exLakh: 10.78, onRoadLakh: 13.48 },
    { slug: 'max-petrol-turbo-manual', name: 'Basalt X Max | Petrol Turbo | 6 Speed Manual', fullName: 'Citroen Basalt X Max 1.2L Turbo 6MT', trim: 'Max Turbo', pt: PURETECH_1_2_TURBO_6MT, mileage: 19.5, exLakh: 11.98, onRoadLakh: 14.98 },
    { slug: 'max-petrol-turbo-manual-dual-tone', name: 'Basalt X Max | Petrol Turbo | 6 Speed Manual | Dual Tone', fullName: 'Citroen Basalt X Max Dual Tone 1.2L Turbo 6MT', trim: 'Max Turbo Dual Tone', pt: PURETECH_1_2_TURBO_6MT, mileage: 19.5, exLakh: 12.18, onRoadLakh: 15.22 },
    { slug: 'max-petrol-turbo-automatic', name: 'Basalt X Max | Petrol Turbo | Automatic (TC)', fullName: 'Citroen Basalt X Max 1.2L Turbo 6AT Automatic', trim: 'Max Turbo AT', pt: PURETECH_1_2_TURBO_6AT, mileage: 18.7, exLakh: 13.15, onRoadLakh: 16.46 },
    { slug: 'max-petrol-turbo-automatic-dual-tone', name: 'Basalt X Max | Petrol Turbo | Automatic (TC) | Dual Tone', fullName: 'Citroen Basalt X Max Dual Tone 1.2L Turbo 6AT Automatic', trim: 'Max Turbo AT Dual Tone', pt: PURETECH_1_2_TURBO_6AT, mileage: 18.7, exLakh: 13.35, onRoadLakh: 16.70 },
  ].map((b) => ({
    id: `citroen-basalt-${b.slug}`,
    modelId: 'citroen-basalt',
    generationId: 'basalt-x-2024',
    name: b.name,
    fullName: b.fullName,
    slug: b.slug,
    trim: b.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(b.exLakh * 100000),
      exShowroomLakh: b.exLakh,
      onRoadNashik: Math.round(b.onRoadLakh * 100000),
      onRoadNashikLakh: b.onRoadLakh,
      currency: 'INR',
    },
    powertrain: b.pt,
    performance: {
      mileageKmpl: b.mileage,
      zeroToHundredSec: b.pt.aspiration === 'Turbocharged' ? 9.8 : 13.9,
      topSpeedKmph: b.pt.aspiration === 'Turbocharged' ? 185 : 160,
    },
    dimensions: {
      lengthMm: 4352,
      widthMm: 1765,
      heightMm: 1593,
      wheelbaseMm: 2651,
      groundClearanceMm: 180,
      kerbWeightKg: 1085,
      bootSpaceLitres: 470,
      fuelTankLitres: 45,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: !b.trim.startsWith('You') ? 'standard' : 'not_available',
        tpms: 'standard',
        ncapRating: 4,
      },
      exterior: {
        wheelSizeInches: 16,
        alloyWheels: b.trim.includes('Max') ? 'standard' : 'not_available',
        ledHeadlights: b.trim.includes('Max') ? 'standard' : 'not_available',
        ledDRLs: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: b.trim.includes('Max') ? 'standard' : 'not_available',
        rearACVents: !b.trim.startsWith('You') ? 'standard' : 'not_available',
        wirelessCharging: b.trim.includes('Max') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !b.trim.startsWith('You') ? 10.25 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !b.trim.startsWith('You') ? 'standard' : 'not_available',
        appleCarPlay: !b.trim.startsWith('You') ? 'standard' : 'not_available',
        wirelessAndroidAuto: !b.trim.startsWith('You') ? 'standard' : 'not_available',
        wirelessAppleCarPlay: !b.trim.startsWith('You') ? 'standard' : 'not_available',
        speakerCount: 6,
      },
    }),
    sources: [
      { name: 'Citroen India Official', url: 'https://www.citroen.in/basalt', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Basalt X Nashik', url: 'https://www.carwale.com/citroen-cars/basalt-x/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 3. CITROEN AIRCROSS / AIRCROSS X (14 VARIANTS)
// ============================================================================
export const CITROEN_AIRCROSS_VARIANTS: CarVariant[] = [
  ...[
    // You (3 variants)
    { slug: 'you-petrol-manual-5str', name: 'Aircross X You | Petrol | 5 Speed Manual | 5 STR', fullName: 'Citroen Aircross X You 1.2L PureTech 5MT 5 Seater', trim: 'You 5 STR', pt: PURETECH_1_2_NA_5MT, mileage: 17.5, exLakh: 8.49, onRoadLakh: 10.43 },
    { slug: 'you-petrol-manual-5str-comfort-edition', name: 'Aircross X You | Petrol | 5 Speed Manual | 5 STR | Comfort Edition', fullName: 'Citroen Aircross X You Comfort Edition 1.2L PureTech 5MT 5 Seater', trim: 'You 5 STR Comfort', pt: PURETECH_1_2_NA_5MT, mileage: 17.5, exLakh: 8.68, onRoadLakh: 10.66 },
    { slug: 'you-petrol-turbo-manual-7str', name: 'Aircross X You | Petrol Turbo | 6 Speed Manual | 7 STR', fullName: 'Citroen Aircross X You 1.2L Turbo 6MT 7 Seater', trim: 'You 7 STR Turbo', pt: PURETECH_1_2_TURBO_6MT, mileage: 18.5, exLakh: 10.15, onRoadLakh: 12.49 },
    // Plus (4 variants)
    { slug: 'plus-petrol-manual-5str', name: 'Aircross X Plus | Petrol | 5 Speed Manual | 5 STR', fullName: 'Citroen Aircross X Plus 1.2L PureTech 5MT 5 Seater', trim: 'Plus 5 STR', pt: PURETECH_1_2_NA_5MT, mileage: 17.5, exLakh: 9.50, onRoadLakh: 11.70 },
    { slug: 'plus-petrol-manual-5str-comfort-edition', name: 'Aircross X Plus | Petrol | 5 Speed Manual | 5 STR | Comfort Edition', fullName: 'Citroen Aircross X Plus Comfort Edition 1.2L PureTech 5MT 5 Seater', trim: 'Plus 5 STR Comfort', pt: PURETECH_1_2_NA_5MT, mileage: 17.5, exLakh: 9.50, onRoadLakh: 11.70 },
    { slug: 'plus-petrol-turbo-manual-7str', name: 'Aircross X Plus | Petrol Turbo | 6 Speed Manual | 7 STR', fullName: 'Citroen Aircross X Plus 1.2L Turbo 6MT 7 Seater', trim: 'Plus 7 STR Turbo', pt: PURETECH_1_2_TURBO_6MT, mileage: 18.5, exLakh: 11.55, onRoadLakh: 14.23 },
    { slug: 'plus-petrol-turbo-manual-7str-comfort-edition', name: 'Aircross X Plus | Petrol Turbo | 6 Speed Manual | 7 STR | Comfort Edition', fullName: 'Citroen Aircross X Plus Comfort Edition 1.2L Turbo 6MT 7 Seater', trim: 'Plus 7 STR Turbo Comfort', pt: PURETECH_1_2_TURBO_6MT, mileage: 18.5, exLakh: 11.55, onRoadLakh: 14.23 },
    // Max (7 variants)
    { slug: 'max-petrol-manual-5str', name: 'Aircross X Max | Petrol | 5 Speed Manual | 5 STR', fullName: 'Citroen Aircross X Max 1.2L PureTech 5MT 5 Seater', trim: 'Max 5 STR', pt: PURETECH_1_2_NA_5MT, mileage: 17.5, exLakh: 11.20, onRoadLakh: 13.80 },
    { slug: 'max-petrol-turbo-manual-5str', name: 'Aircross X Max | Petrol Turbo | 6 Speed Manual | 5 STR', fullName: 'Citroen Aircross X Max 1.2L Turbo 6MT 5 Seater', trim: 'Max 5 STR Turbo', pt: PURETECH_1_2_TURBO_6MT, mileage: 18.5, exLakh: 11.95, onRoadLakh: 14.74 },
    { slug: 'max-petrol-turbo-manual-7str', name: 'Aircross X Max | Petrol Turbo | 6 Speed Manual | 7 STR', fullName: 'Citroen Aircross X Max 1.2L Turbo 6MT 7 Seater', trim: 'Max 7 STR Turbo', pt: PURETECH_1_2_TURBO_6MT, mileage: 18.5, exLakh: 12.85, onRoadLakh: 15.82 },
    { slug: 'max-petrol-turbo-manual-7str-dual-tone', name: 'Aircross X Max | Petrol Turbo | 6 Speed Manual | 7 STR | Dual Tone', fullName: 'Citroen Aircross X Max Dual Tone 1.2L Turbo 6MT 7 Seater', trim: 'Max 7 STR Turbo DT', pt: PURETECH_1_2_TURBO_6MT, mileage: 18.5, exLakh: 13.05, onRoadLakh: 16.05 },
    { slug: 'max-petrol-turbo-automatic-5str', name: 'Aircross X Max | Petrol Turbo | Automatic (TC) | 5 STR', fullName: 'Citroen Aircross X Max 1.2L Turbo 6AT Automatic 5 Seater', trim: 'Max 5 STR Turbo AT', pt: PURETECH_1_2_TURBO_6AT, mileage: 17.6, exLakh: 13.60, onRoadLakh: 16.75 },
    { slug: 'max-petrol-turbo-automatic-7str', name: 'Aircross X Max | Petrol Turbo | Automatic (TC) | 7 STR', fullName: 'Citroen Aircross X Max 1.2L Turbo 6AT Automatic 7 Seater', trim: 'Max 7 STR Turbo AT', pt: PURETECH_1_2_TURBO_6AT, mileage: 17.6, exLakh: 13.95, onRoadLakh: 17.18 },
    { slug: 'max-petrol-turbo-automatic-7str-dual-tone', name: 'Aircross X Max | Petrol Turbo | Automatic (TC) | 7 STR | Dual Tone', fullName: 'Citroen Aircross X Max Dual Tone 1.2L Turbo 6AT Automatic 7 Seater', trim: 'Max 7 STR Turbo AT DT', pt: PURETECH_1_2_TURBO_6AT, mileage: 17.6, exLakh: 14.15, onRoadLakh: 17.42 },
  ].map((a) => ({
    id: `citroen-c3-aircross-${a.slug}`,
    modelId: 'citroen-c3-aircross',
    generationId: 'aircross-x-2024',
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
      mileageKmpl: a.mileage,
      zeroToHundredSec: a.pt.aspiration === 'Turbocharged' ? 10.4 : 14.2,
      topSpeedKmph: a.pt.aspiration === 'Turbocharged' ? 180 : 160,
    },
    dimensions: {
      lengthMm: 4323,
      widthMm: 1796,
      heightMm: 1669,
      wheelbaseMm: 2671,
      groundClearanceMm: 200,
      kerbWeightKg: 1200,
      bootSpaceLitres: a.name.includes('7 STR') ? 44 : 511,
      fuelTankLitres: 45,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: !a.trim.startsWith('You') ? 'standard' : 'not_available',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 17,
        alloyWheels: a.trim.includes('Max') ? 'standard' : 'not_available',
        ledHeadlights: a.trim.includes('Max') ? 'standard' : 'not_available',
        ledDRLs: 'standard',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: a.trim.includes('Max') ? 'standard' : 'not_available',
        rearACVents: 'standard',
        leatherSeats: a.trim.includes('Max') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !a.trim.startsWith('You') ? 10.25 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !a.trim.startsWith('You') ? 'standard' : 'not_available',
        appleCarPlay: !a.trim.startsWith('You') ? 'standard' : 'not_available',
        wirelessAndroidAuto: !a.trim.startsWith('You') ? 'standard' : 'not_available',
        wirelessAppleCarPlay: !a.trim.startsWith('You') ? 'standard' : 'not_available',
        speakerCount: 6,
      },
    }),
    sources: [
      { name: 'Citroen India Official', url: 'https://www.citroen.in/c3-aircross', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Aircross X Nashik', url: 'https://www.carwale.com/citroen-cars/aircross-x/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 4. CITROEN eC3 X (3 VARIANTS)
// ============================================================================
export const CITROEN_EC3_X_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'live-29-2kwh', name: 'eC3 X Live | 29.2 kWh', fullName: 'Citroen eC3 X Live 29.2 kWh Electric', trim: 'Live', exLakh: 11.61, onRoadLakh: 12.79 },
    { slug: 'live-o-29-2kwh', name: 'eC3 X Live (O) | 29.2 kWh', fullName: 'Citroen eC3 X Live (O) 29.2 kWh Electric', trim: 'Live (O)', exLakh: 11.99, onRoadLakh: 13.17 },
    { slug: 'shine-29-2kwh', name: 'eC3 X Shine | 29.2 kWh', fullName: 'Citroen eC3 X Shine 29.2 kWh Electric', trim: 'Shine', exLakh: 12.85, onRoadLakh: 14.12 },
  ].map((e) => ({
    id: `citroen-e-c3-${e.slug}`,
    modelId: 'citroen-e-c3',
    generationId: 'ec3-x-2024',
    name: e.name,
    fullName: e.fullName,
    slug: e.slug,
    trim: e.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(e.exLakh * 100000),
      exShowroomLakh: e.exLakh,
      onRoadNashik: Math.round(e.onRoadLakh * 100000),
      onRoadNashikLakh: e.onRoadLakh,
      currency: 'INR',
    },
    powertrain: EC3_ELECTRIC,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 15.5,
      topSpeedKmph: 107,
    },
    dimensions: {
      lengthMm: 3981,
      widthMm: 1733,
      heightMm: 1586,
      wheelbaseMm: 2540,
      groundClearanceMm: 170,
      kerbWeightKg: 1316,
      bootSpaceLitres: 315,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        hillAssist: 'standard',
        rearCamera: e.trim.includes('Shine') ? 'standard' : 'not_available',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 15,
        alloyWheels: e.trim.includes('Shine') ? 'standard' : 'not_available',
        ledDRLs: 'standard',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: !e.trim.startsWith('Live') ? 10.25 : null,
        digitalInstrumentCluster: 'standard',
        androidAuto: !e.trim.startsWith('Live') ? 'standard' : 'not_available',
        appleCarPlay: !e.trim.startsWith('Live') ? 'standard' : 'not_available',
        speakerCount: 4,
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Citroen India Official', url: 'https://www.citroen.in/ec3', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale eC3 X Nashik', url: 'https://www.carwale.com/citroen-cars/ec3-x/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 5. CITROEN C5 AIRCROSS (1 VARIANT)
// ============================================================================
export const CITROEN_C5_AIRCROSS_VARIANTS: CarVariant[] = [
  {
    id: 'citroen-c5-aircross-shine',
    modelId: 'citroen-c5-aircross',
    generationId: 'c5-aircross-facelift',
    name: 'C5 Aircross Shine',
    fullName: 'Citroen C5 Aircross Shine 2.0L Diesel 8AT Automatic',
    slug: 'shine',
    trim: 'Shine',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 3767000,
      exShowroomLakh: 37.67,
      onRoadNashik: 4539000,
      onRoadNashikLakh: 45.39,
      currency: 'INR',
    },
    powertrain: C5_2_0_DIESEL_8AT,
    performance: {
      mileageKmpl: 17.5,
      zeroToHundredSec: 9.6,
      topSpeedKmph: 200,
    },
    dimensions: {
      lengthMm: 4500,
      widthMm: 1969,
      heightMm: 1710,
      wheelbaseMm: 2730,
      groundClearanceMm: 230,
      kerbWeightKg: 1685,
      bootSpaceLitres: 580,
      fuelTankLitres: 53,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        hillDescentControl: 'standard',
        rearCamera: 'standard',
        rearParkingSensors: 'standard',
        frontParkingSensors: 'standard',
        tpms: 'standard',
        blindSpotMonitoring: 'standard',
      },
      exterior: {
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        fogLights: 'standard',
        roofRails: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'standard',
        poweredTailgate: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: 'not_available',
        poweredDriverSeat: 'standard',
        leatherSeats: 'standard',
        rearSeatRecline: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        speakerCount: 6,
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Citroen India Official', url: 'https://www.citroen.in/c5-aircross', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale C5 Aircross Nashik', url: 'https://www.carwale.com/citroen-cars/c5-aircross/shine/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];
