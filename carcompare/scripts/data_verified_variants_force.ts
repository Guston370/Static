/**
 * scripts/data_verified_variants_force.ts
 *
 * Comprehensive, verified variant database for Force Motors India:
 * 1. Force Motors Gurkha (2 variants) - 2.6L FM 2.6 CR Turbo Diesel (138 bhp, 320 Nm; 3-Door 4-STR & 5-Door 7-STR 4x4)
 * 2. Force Motors Trax Cruiser (4 variants) - 2.6L FM 2.6 CR Diesel (90 bhp, 250 Nm; 9 STR & 12 STR; Non-AC & AC)
 *
 * All models feature exact on-road Nashik pricing, comprehensive specifications, and verified equipment.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// Force Gurkha 2.6L CR Turbo Diesel 4x4 5MT
const GURKHA_2_6_DIESEL_4X4 = {
  fuelType: 'Diesel' as const,
  engineName: '2.6L FM 2.6 CR CD 4-Cylinder Turbocharged Diesel (Mercedes-Derived OM616 Family, 5-Speed Manual)',
  engineDisplacementCC: 2596,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 138,
  maxTorqueNm: 320,
  transmission: 'Manual' as const,
  drivetrain: '4WD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// Force Trax Cruiser 2.6L CR Diesel RWD 5MT
const TRAX_CRUISER_2_6_DIESEL = {
  fuelType: 'Diesel' as const,
  engineName: '2.6L FM 2.6 CR 4-Cylinder DI Diesel Engine (5-Speed Manual, Synchromesh G-28/5B)',
  engineDisplacementCC: 2596,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 90,
  maxTorqueNm: 250,
  transmission: 'Manual' as const,
  drivetrain: 'RWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// ============================================================================
// 1. FORCE MOTORS GURKHA (2 VARIANTS)
// ============================================================================
export const FORCE_GURKHA_VARIANTS: CarVariant[] = [
  {
    id: 'force-gurkha-3-door-4-seater',
    modelId: 'force-gurkha',
    generationId: 'gurkha-2024',
    name: 'Gurkha 3 Door | 4 Seater',
    fullName: 'Force Motors Gurkha 3-Door 4-Seater 4x4 2.6L Diesel 5MT',
    slug: '3-door',
    trim: '3 Door (4-Seater)',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 1675000,
      exShowroomLakh: 16.75,
      onRoadNashik: 1985000,
      onRoadNashikLakh: 19.85,
      currency: 'INR',
    },
    powertrain: GURKHA_2_6_DIESEL_4X4,
    performance: {
      mileageKmpl: 12.0,
      zeroToHundredSec: 13.5,
      topSpeedKmph: 140,
    },
    dimensions: {
      lengthMm: 3965,
      widthMm: 1865,
      heightMm: 2080,
      wheelbaseMm: 2400,
      groundClearanceMm: 233,
      kerbWeightKg: 2050,
      bootSpaceLitres: 500,
      fuelTankLitres: 63,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 2,
        abs: 'standard',
        ebd: 'standard',
        esc: 'not_available',
        tractionControl: 'not_available',
        hillAssist: 'standard',
        hillDescentControl: 'not_available',
        rearCamera: 'standard',
        rearParkingSensors: 'standard',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        fogLights: 'standard',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'not_available',
        leatherSeats: 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: 9.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        speakerCount: 4,
      },
    }),
    sources: [
      { name: 'Force Gurkha Official', url: 'https://www.forcegurkha.co.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Gurkha Nashik', url: 'https://www.carwale.com/force-motors-cars/gurkha/3-door/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
  {
    id: 'force-gurkha-5-door-7-seater',
    modelId: 'force-gurkha',
    generationId: 'gurkha-2024',
    name: 'Gurkha 5 Door | 7 Seater',
    fullName: 'Force Motors Gurkha 5-Door 7-Seater 4x4 2.6L Diesel 5MT',
    slug: '5-door',
    trim: '5 Door (7-Seater)',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 1800000,
      exShowroomLakh: 18.00,
      onRoadNashik: 2142000,
      onRoadNashikLakh: 21.42,
      currency: 'INR',
    },
    powertrain: GURKHA_2_6_DIESEL_4X4,
    performance: {
      mileageKmpl: 11.5,
      zeroToHundredSec: 14.2,
      topSpeedKmph: 140,
    },
    dimensions: {
      lengthMm: 4390,
      widthMm: 1865,
      heightMm: 2095,
      wheelbaseMm: 2825,
      groundClearanceMm: 233,
      kerbWeightKg: 2280,
      bootSpaceLitres: 250,
      fuelTankLitres: 63,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 2,
        abs: 'standard',
        ebd: 'standard',
        esc: 'not_available',
        tractionControl: 'not_available',
        hillAssist: 'standard',
        hillDescentControl: 'not_available',
        rearCamera: 'standard',
        rearParkingSensors: 'standard',
        tpms: 'standard',
      },
      exterior: {
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        fogLights: 'standard',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: 'standard',
        rearACVents: 'standard',
        leatherSeats: 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: 9.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        speakerCount: 4,
      },
    }),
    sources: [
      { name: 'Force Gurkha Official', url: 'https://www.forcegurkha.co.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale Gurkha Nashik', url: 'https://www.carwale.com/force-motors-cars/gurkha/5-door/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 2. FORCE MOTORS TRAX CRUISER (4 VARIANTS)
// ============================================================================
export const FORCE_TRAX_CRUISER_VARIANTS: CarVariant[] = [
  ...[
    { slug: '9-str-non-ac', name: 'Trax Cruiser 9 STR | Non-AC', fullName: 'Force Motors Trax Cruiser 9 Seater Non-AC 2.6L Diesel 5MT', trim: '9 STR', exLakh: 13.83, onRoadLakh: 15.43, ac: false },
    { slug: '9-str-ac', name: 'Trax Cruiser 9 STR | AC', fullName: 'Force Motors Trax Cruiser 9 Seater with Dual AC 2.6L Diesel 5MT', trim: '9 STR AC', exLakh: 15.10, onRoadLakh: 16.85, ac: true },
    { slug: '12-str-non-ac', name: 'Trax Cruiser 12 STR | Non-AC', fullName: 'Force Motors Trax Cruiser 12 Seater Non-AC 2.6L Diesel 5MT', trim: '12 STR', exLakh: 13.97, onRoadLakh: 15.58, ac: false },
    { slug: '12-str-ac', name: 'Trax Cruiser 12 STR | AC', fullName: 'Force Motors Trax Cruiser 12 Seater with Dual AC 2.6L Diesel 5MT', trim: '12 STR AC', exLakh: 15.08, onRoadLakh: 16.83, ac: true },
  ].map((tv) => ({
    id: `force-trax-cruiser-${tv.slug}`,
    modelId: 'force-trax-cruiser',
    generationId: 'trax-cruiser-bs6',
    name: tv.name,
    fullName: tv.fullName,
    slug: tv.slug,
    trim: tv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(tv.exLakh * 100000),
      exShowroomLakh: tv.exLakh,
      onRoadNashik: Math.round(tv.onRoadLakh * 100000),
      onRoadNashikLakh: tv.onRoadLakh,
      currency: 'INR',
    },
    powertrain: TRAX_CRUISER_2_6_DIESEL,
    performance: {
      mileageKmpl: 12.5,
      zeroToHundredSec: 19.5,
      topSpeedKmph: 110,
    },
    dimensions: {
      lengthMm: 5120,
      widthMm: 1790,
      heightMm: 2055,
      wheelbaseMm: 3050,
      groundClearanceMm: 190,
      kerbWeightKg: 2180,
      bootSpaceLitres: 420,
      fuelTankLitres: 63.5,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 2,
        abs: 'standard',
        ebd: 'standard',
        rearParkingSensors: 'standard',
      },
      exterior: {
        wheelSizeInches: 15,
        alloyWheels: 'not_available',
        ledHeadlights: 'not_available',
        fogLights: 'not_available',
        roofRails: 'standard',
      },
      interior: {
        airConditioning: tv.ac ? 'standard' : 'not_available',
        rearACVents: tv.ac ? 'standard' : 'not_available',
        leatherSeats: 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: null,
        speakerCount: 0,
      },
    }),
    sources: [
      { name: 'Force Motors Official', url: 'https://www.forcemotors.com/vehicle/trax-cruiser', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Trax Cruiser Nashik', url: 'https://www.carwale.com/force-motors-cars/trax-cruiser/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];
