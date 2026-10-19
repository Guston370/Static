/**
 * scripts/data_verified_variants_jeep.ts
 *
 * Comprehensive, verified variant database for Jeep India:
 * 1. Jeep Compass (16 variants) - 2.0L Multijet II Turbo Diesel (6MT & 9AT; 2WD & AWD)
 * 2. Jeep Meridian (16 variants) - 2.0L Multijet II Turbo Diesel (6MT & 9AT; 5 & 7 Seater; 2WD & AWD)
 * 3. Jeep Wrangler (4 variants) - 2.0L Hurricane Turbo Petrol (8AT; 4WD; Rubicon, Willys 41 & Whitecap Mojito)
 * 4. Jeep Grand Cherokee (2 variants) - 2.0L Turbo Petrol (8AT; Quadra-Trac I 4WD; Limited (O) & Signature Edition)
 *
 * All models feature exact on-road Nashik pricing, comprehensive specifications, and verified equipment.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// Compass 2.0L Diesel 2WD 6MT
const COMPASS_2_0_DIESEL_MT_2WD = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L Multijet II 4-Cylinder Turbocharged Diesel (6-Speed Manual)',
  engineDisplacementCC: 1956,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 172,
  maxTorqueNm: 350,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// Compass 2.0L Diesel 2WD 9AT
const COMPASS_2_0_DIESEL_AT_2WD = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L Multijet II 4-Cylinder Turbocharged Diesel (9-Speed Torque Converter AT)',
  engineDisplacementCC: 1956,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 172,
  maxTorqueNm: 350,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// Compass 2.0L Diesel AWD 9AT
const COMPASS_2_0_DIESEL_AT_AWD = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L Multijet II Turbo Diesel with Jeep Active Drive 4x4 (9-Speed Automatic)',
  engineDisplacementCC: 1956,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 172,
  maxTorqueNm: 350,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// Meridian 2.0L Diesel 2WD 6MT
const MERIDIAN_2_0_DIESEL_MT_2WD = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L Multijet II Turbo Diesel Engine (6-Speed Manual)',
  engineDisplacementCC: 1956,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 168,
  maxTorqueNm: 350,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// Meridian 2.0L Diesel 2WD 9AT
const MERIDIAN_2_0_DIESEL_AT_2WD = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L Multijet II Turbo Diesel Engine (9-Speed Torque Converter Automatic)',
  engineDisplacementCC: 1956,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 168,
  maxTorqueNm: 350,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// Meridian 2.0L Diesel AWD 9AT
const MERIDIAN_2_0_DIESEL_AT_AWD = {
  fuelType: 'Diesel' as const,
  engineName: '2.0L Multijet II Turbo Diesel with Selec-Terrain 4x4 (9-Speed Automatic)',
  engineDisplacementCC: 1956,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 168,
  maxTorqueNm: 350,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// Wrangler 2.0L Petrol Turbo 8AT 4WD
const WRANGLER_2_0_TURBO_4WD = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L Hurricane GME T4 4-Cylinder DOHC Turbo Petrol (8-Speed Automatic, Rock-Trac / Command-Trac 4x4)',
  engineDisplacementCC: 1995,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 268,
  maxTorqueNm: 400,
  transmission: 'Automatic' as const,
  drivetrain: '4WD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// Grand Cherokee 2.0L Petrol Turbo 8AT 4WD
const GRAND_CHEROKEE_2_0_TURBO = {
  fuelType: 'Petrol' as const,
  engineName: '2.0L Turbocharged 4-Cylinder DOHC Petrol with Quadra-Trac I 4WD (8-Speed Automatic)',
  engineDisplacementCC: 1995,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 268,
  maxTorqueNm: 400,
  transmission: 'Automatic' as const,
  drivetrain: '4WD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// ============================================================================
// 1. JEEP COMPASS (16 VARIANTS)
// ============================================================================
export const JEEP_COMPASS_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'sport-2wd-diesel-manual', name: 'Compass Sport | 2WD Diesel 2.0L Turbo | Manual', fullName: 'Jeep Compass Sport 2.0L Diesel 6MT 2WD', trim: 'Sport', pt: COMPASS_2_0_DIESEL_MT_2WD, exLakh: 18.99, onRoadLakh: 21.85 },
    { slug: 'longitude-2wd-diesel-manual', name: 'Compass Longitude | 2WD Diesel 2.0L Turbo | Manual', fullName: 'Jeep Compass Longitude 2.0L Diesel 6MT 2WD', trim: 'Longitude', pt: COMPASS_2_0_DIESEL_MT_2WD, exLakh: 22.39, onRoadLakh: 26.01 },
    { slug: 'longitude-2wd-diesel-automatic', name: 'Compass Longitude | 2WD Diesel 2.0L Turbo | Automatic (TC)', fullName: 'Jeep Compass Longitude 2.0L Diesel 9AT 2WD', trim: 'Longitude AT', pt: COMPASS_2_0_DIESEL_AT_2WD, exLakh: 24.49, onRoadLakh: 28.49 },
    { slug: 'longitude-o-2wd-diesel-manual', name: 'Compass Longitude (O) | 2WD Diesel 2.0L Turbo | Manual', fullName: 'Jeep Compass Longitude (O) 2.0L Diesel 6MT 2WD', trim: 'Longitude (O)', pt: COMPASS_2_0_DIESEL_MT_2WD, exLakh: 24.79, onRoadLakh: 28.81 },
    { slug: 'trail-edition-2wd-diesel-manual', name: 'Compass Trail Edition | 2WD Diesel 2.0L Turbo | Manual', fullName: 'Jeep Compass Trail Edition 2.0L Diesel 6MT 2WD', trim: 'Trail Edition', pt: COMPASS_2_0_DIESEL_MT_2WD, exLakh: 25.09, onRoadLakh: 29.14 },
    { slug: 'limited-o-2wd-diesel-manual', name: 'Compass Limited (O) | 2WD Diesel 2.0L Turbo | Manual', fullName: 'Jeep Compass Limited (O) 2.0L Diesel 6MT 2WD', trim: 'Limited (O)', pt: COMPASS_2_0_DIESEL_MT_2WD, exLakh: 26.09, onRoadLakh: 30.25 },
    { slug: 'longitude-o-2wd-diesel-automatic', name: 'Compass Longitude (O) | 2WD Diesel 2.0L Turbo | Automatic (TC)', fullName: 'Jeep Compass Longitude (O) 2.0L Diesel 9AT 2WD', trim: 'Longitude (O) AT', pt: COMPASS_2_0_DIESEL_AT_2WD, exLakh: 26.99, onRoadLakh: 31.29 },
    { slug: 'trail-edition-2wd-diesel-automatic', name: 'Compass Trail Edition | 2WD Diesel 2.0L Turbo | Automatic (TC)', fullName: 'Jeep Compass Trail Edition 2.0L Diesel 9AT 2WD', trim: 'Trail Edition AT', pt: COMPASS_2_0_DIESEL_AT_2WD, exLakh: 27.10, onRoadLakh: 31.42 },
    { slug: 'model-s-o-2wd-diesel-manual', name: 'Compass Model S (O) | 2WD Diesel 2.0L Turbo | Manual', fullName: 'Jeep Compass Model S (O) 2.0L Diesel 6MT 2WD', trim: 'Model S (O)', pt: COMPASS_2_0_DIESEL_MT_2WD, exLakh: 27.79, onRoadLakh: 32.19 },
    { slug: 'anniversary-edition-2wd-diesel-manual', name: 'Compass Anniversary Edition | 2WD Diesel 2.0L Turbo | Manual', fullName: 'Jeep Compass Anniversary Edition 2.0L Diesel 6MT 2WD', trim: 'Anniversary Edition', pt: COMPASS_2_0_DIESEL_MT_2WD, exLakh: 28.05, onRoadLakh: 32.49 },
    { slug: 'limited-o-2wd-diesel-automatic', name: 'Compass Limited (O) | 2WD Diesel 2.0L Turbo | Automatic (TC)', fullName: 'Jeep Compass Limited (O) 2.0L Diesel 9AT 2WD', trim: 'Limited (O) AT', pt: COMPASS_2_0_DIESEL_AT_2WD, exLakh: 28.29, onRoadLakh: 32.73 },
    { slug: 'track-edition-2wd-diesel-manual', name: 'Compass Track Edition | 2WD Diesel 2.0L Turbo | Manual', fullName: 'Jeep Compass Track Edition 2.0L Diesel 6MT 2WD', trim: 'Track Edition', pt: COMPASS_2_0_DIESEL_MT_2WD, exLakh: 28.35, onRoadLakh: 32.79 },
    { slug: 'model-s-o-2wd-diesel-automatic', name: 'Compass Model S (O) | 2WD Diesel 2.0L Turbo | Automatic (TC)', fullName: 'Jeep Compass Model S (O) 2.0L Diesel 9AT 2WD', trim: 'Model S (O) AT', pt: COMPASS_2_0_DIESEL_AT_2WD, exLakh: 30.19, onRoadLakh: 34.97 },
    { slug: 'track-edition-2wd-diesel-automatic', name: 'Compass Track Edition | 2WD Diesel 2.0L Turbo | Automatic (TC)', fullName: 'Jeep Compass Track Edition 2.0L Diesel 9AT 2WD', trim: 'Track Edition AT', pt: COMPASS_2_0_DIESEL_AT_2WD, exLakh: 30.45, onRoadLakh: 35.27 },
    { slug: 'model-s-o-awd-diesel-automatic', name: 'Compass Model S (O) | AWD Diesel 2.0L Turbo | Automatic (TC)', fullName: 'Jeep Compass Model S (O) 2.0L Diesel 9AT 4x4 AWD', trim: 'Model S (O) AWD', pt: COMPASS_2_0_DIESEL_AT_AWD, exLakh: 32.41, onRoadLakh: 37.43 },
    { slug: 'track-edition-awd-diesel-automatic', name: 'Compass Track Edition | AWD Diesel 2.0L Turbo | Automatic (TC)', fullName: 'Jeep Compass Track Edition 2.0L Diesel 9AT 4x4 AWD', trim: 'Track Edition AWD', pt: COMPASS_2_0_DIESEL_AT_AWD, exLakh: 32.69, onRoadLakh: 37.73 },
  ].map((cv) => ({
    id: `jeep-compass-${cv.slug}`,
    modelId: 'jeep-compass',
    generationId: 'compass-facelift',
    name: cv.name,
    fullName: cv.fullName,
    slug: cv.slug,
    trim: cv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(cv.exLakh * 100000),
      exShowroomLakh: cv.exLakh,
      onRoadNashik: Math.round(cv.onRoadLakh * 100000),
      onRoadNashikLakh: cv.onRoadLakh,
      currency: 'INR',
    },
    powertrain: cv.pt,
    performance: {
      mileageKmpl: cv.pt.transmission === 'Manual' ? 17.1 : 15.3,
      zeroToHundredSec: 9.8,
      topSpeedKmph: 195,
    },
    dimensions: {
      lengthMm: 4405,
      widthMm: 1818,
      heightMm: 1640,
      wheelbaseMm: 2636,
      groundClearanceMm: 208,
      kerbWeightKg: 1535,
      bootSpaceLitres: 438,
      fuelTankLitres: 60,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        hillDescentControl: cv.pt.drivetrain === 'AWD' ? 'standard' : 'not_available',
        rearCamera: !cv.trim.startsWith('Sport') ? 'standard' : 'not_available',
        threeSixtyCamera: cv.trim.includes('Model S') || cv.trim.includes('Track') ? 'standard' : 'not_available',
        tpms: !cv.trim.startsWith('Sport') ? 'standard' : 'not_available',
        adasLevel: cv.trim.includes('Model S') ? 'Level 2' : 'none',
      },
      exterior: {
        wheelSizeInches: cv.trim.includes('Model S') || cv.trim.includes('Track') ? 18 : 17,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        fogLights: !cv.trim.startsWith('Sport') ? 'standard' : 'not_available',
        roofRails: !cv.trim.startsWith('Sport') ? 'standard' : 'not_available',
        sunroof: cv.trim.includes('(O)') || cv.trim.includes('Model S') || cv.trim.includes('Edition') ? 'standard' : 'not_available',
        panoramicSunroof: cv.trim.includes('(O)') || cv.trim.includes('Model S') || cv.trim.includes('Edition') ? 'standard' : 'not_available',
        poweredTailgate: cv.trim.includes('Model S') ? 'standard' : 'not_available',
      },
      interior: {
        automaticClimateControl: !cv.trim.startsWith('Sport') ? 'standard' : 'not_available',
        rearACVents: 'standard',
        ventilatedSeats: cv.trim.includes('Model S') ? 'standard' : 'not_available',
        poweredDriverSeat: cv.trim.includes('Limited') || cv.trim.includes('Model S') ? 'standard' : 'not_available',
        leatherSeats: cv.trim.includes('Limited') || cv.trim.includes('Model S') ? 'standard' : 'not_available',
        ambientLighting: cv.trim.includes('Limited') || cv.trim.includes('Model S') ? 'standard' : 'not_available',
        wirelessCharging: !cv.trim.startsWith('Sport') ? 'standard' : 'not_available',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.1,
        digitalInstrumentCluster: cv.trim.includes('Model S') || cv.trim.includes('Track') ? 'standard' : 'not_available',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: cv.trim.includes('Model S') ? 9 : 6,
        premiumAudio: cv.trim.includes('Model S') ? 'standard' : 'not_available',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Jeep India Official', url: 'https://www.jeep-india.com/compass.html', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Compass Nashik', url: 'https://www.carwale.com/jeep-cars/compass/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 2. JEEP MERIDIAN (16 VARIANTS)
// ============================================================================
export const JEEP_MERIDIAN_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'longitude-2wd-diesel-manual-5str', name: 'Meridian Longitude | 2WD Diesel Turbo | Manual | 5 STR', fullName: 'Jeep Meridian Longitude 2.0L Diesel 6MT 2WD 5 Seater', trim: 'Longitude 5 STR', pt: MERIDIAN_2_0_DIESEL_MT_2WD, exLakh: 24.99, onRoadLakh: 28.45 },
    { slug: 'longitude-plus-2wd-diesel-manual-7str', name: 'Meridian Longitude Plus | 2WD Diesel Turbo | Manual | 7 STR', fullName: 'Jeep Meridian Longitude Plus 2.0L Diesel 6MT 2WD 7 Seater', trim: 'Longitude Plus 7 STR', pt: MERIDIAN_2_0_DIESEL_MT_2WD, exLakh: 27.50, onRoadLakh: 32.01 },
    { slug: 'longitude-2wd-diesel-automatic-5str', name: 'Meridian Longitude | 2WD Diesel Turbo | Automatic | 5 STR', fullName: 'Jeep Meridian Longitude 2.0L Diesel 9AT 2WD 5 Seater', trim: 'Longitude 5 STR AT', pt: MERIDIAN_2_0_DIESEL_AT_2WD, exLakh: 28.99, onRoadLakh: 33.49 },
    { slug: 'longitude-plus-2wd-diesel-automatic-7str', name: 'Meridian Longitude Plus | 2WD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Longitude Plus 2.0L Diesel 9AT 2WD 7 Seater', trim: 'Longitude Plus 7 STR AT', pt: MERIDIAN_2_0_DIESEL_AT_2WD, exLakh: 30.99, onRoadLakh: 35.72 },
    { slug: 'trail-edition-2wd-diesel-manual-7str', name: 'Meridian Trail Edition | 2WD Diesel Turbo | Manual | 7 STR', fullName: 'Jeep Meridian Trail Edition 2.0L Diesel 6MT 2WD 7 Seater', trim: 'Trail Edition 7 STR', pt: MERIDIAN_2_0_DIESEL_MT_2WD, exLakh: 31.99, onRoadLakh: 37.06 },
    { slug: 'limited-o-2wd-diesel-manual-7str', name: 'Meridian Limited (O) | 2WD Diesel Turbo | Manual | 7 STR', fullName: 'Jeep Meridian Limited (O) 2.0L Diesel 6MT 2WD 7 Seater', trim: 'Limited (O) 7 STR', pt: MERIDIAN_2_0_DIESEL_MT_2WD, exLakh: 32.05, onRoadLakh: 37.13 },
    { slug: 'trail-edition-2wd-diesel-automatic-7str', name: 'Meridian Trail Edition | 2WD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Trail Edition 2.0L Diesel 9AT 2WD 7 Seater', trim: 'Trail Edition 7 STR AT', pt: MERIDIAN_2_0_DIESEL_AT_2WD, exLakh: 34.49, onRoadLakh: 40.02 },
    { slug: 'limited-o-2wd-diesel-automatic-7str', name: 'Meridian Limited (O) | 2WD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Limited (O) 2.0L Diesel 9AT 2WD 7 Seater', trim: 'Limited (O) 7 STR AT', pt: MERIDIAN_2_0_DIESEL_AT_2WD, exLakh: 35.79, onRoadLakh: 41.51 },
    { slug: 'trail-edition-awd-diesel-automatic-7str', name: 'Meridian Trail Edition | AWD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Trail Edition 2.0L Diesel 9AT 4x4 AWD 7 Seater', trim: 'Trail Edition AWD', pt: MERIDIAN_2_0_DIESEL_AT_AWD, exLakh: 36.49, onRoadLakh: 42.26 },
    { slug: 'limited-o-awd-diesel-automatic-7str', name: 'Meridian Limited (O) | AWD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Limited (O) 2.0L Diesel 9AT 4x4 AWD 7 Seater', trim: 'Limited (O) AWD', pt: MERIDIAN_2_0_DIESEL_AT_AWD, exLakh: 37.89, onRoadLakh: 43.85 },
    { slug: 'overland-2wd-diesel-automatic-7str', name: 'Meridian Overland | 2WD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Overland 2.0L Diesel 9AT 2WD 7 Seater', trim: 'Overland 7 STR AT', pt: MERIDIAN_2_0_DIESEL_AT_2WD, exLakh: 37.89, onRoadLakh: 43.85 },
    { slug: 'anniversary-edition-2wd-diesel-automatic-7str', name: 'Meridian Anniversary Edition | 2WD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Anniversary Edition 2.0L Diesel 9AT 2WD 7 Seater', trim: 'Anniversary Edition AT', pt: MERIDIAN_2_0_DIESEL_AT_2WD, exLakh: 37.89, onRoadLakh: 43.85 },
    { slug: 'track-edition-2wd-diesel-automatic-7str', name: 'Meridian Track Edition | 2WD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Track Edition 2.0L Diesel 9AT 2WD 7 Seater', trim: 'Track Edition AT', pt: MERIDIAN_2_0_DIESEL_AT_2WD, exLakh: 38.25, onRoadLakh: 44.26 },
    { slug: 'overland-awd-diesel-automatic-7str', name: 'Meridian Overland | AWD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Overland 2.0L Diesel 9AT 4x4 AWD 7 Seater', trim: 'Overland AWD', pt: MERIDIAN_2_0_DIESEL_AT_AWD, exLakh: 39.80, onRoadLakh: 46.10 },
    { slug: 'anniversary-edition-awd-diesel-automatic-7str', name: 'Meridian Anniversary Edition | AWD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Anniversary Edition 2.0L Diesel 9AT 4x4 AWD 7 Seater', trim: 'Anniversary Edition AWD', pt: MERIDIAN_2_0_DIESEL_AT_AWD, exLakh: 39.80, onRoadLakh: 46.10 },
    { slug: 'track-edition-awd-diesel-automatic-7str', name: 'Meridian Track Edition | AWD Diesel Turbo | Automatic | 7 STR', fullName: 'Jeep Meridian Track Edition 2.0L Diesel 9AT 4x4 AWD 7 Seater', trim: 'Track Edition AWD', pt: MERIDIAN_2_0_DIESEL_AT_AWD, exLakh: 40.15, onRoadLakh: 46.50 },
  ].map((mv) => ({
    id: `jeep-meridian-${mv.slug}`,
    modelId: 'jeep-meridian',
    generationId: 'meridian-h6',
    name: mv.name,
    fullName: mv.fullName,
    slug: mv.slug,
    trim: mv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(mv.exLakh * 100000),
      exShowroomLakh: mv.exLakh,
      onRoadNashik: Math.round(mv.onRoadLakh * 100000),
      onRoadNashikLakh: mv.onRoadLakh,
      currency: 'INR',
    },
    powertrain: mv.pt,
    performance: {
      mileageKmpl: mv.pt.transmission === 'Manual' ? 16.2 : 14.8,
      zeroToHundredSec: 10.8,
      topSpeedKmph: 198,
    },
    dimensions: {
      lengthMm: 4769,
      widthMm: 1859,
      heightMm: 1698,
      wheelbaseMm: 2794,
      groundClearanceMm: 203,
      kerbWeightKg: 1770,
      bootSpaceLitres: mv.name.includes('5 STR') ? 481 : 170,
      fuelTankLitres: 60,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        hillDescentControl: mv.pt.drivetrain === 'AWD' ? 'standard' : 'not_available',
        rearCamera: 'standard',
        threeSixtyCamera: mv.trim.includes('Overland') || mv.trim.includes('Track') ? 'standard' : 'not_available',
        tpms: 'standard',
        adasLevel: mv.trim.includes('Overland') ? 'Level 2' : 'none',
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
        poweredTailgate: mv.trim.includes('Limited') || mv.trim.includes('Overland') ? 'standard' : 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: mv.trim.includes('Overland') ? 'standard' : 'not_available',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: mv.trim.includes('Overland') ? 'standard' : 'not_available',
        leatherSeats: 'standard',
        rearSeatRecline: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.1,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: mv.trim.includes('Overland') ? 9 : 6,
        premiumAudio: mv.trim.includes('Overland') ? 'standard' : 'not_available',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Jeep India Official', url: 'https://www.jeep-india.com/meridian.html', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Meridian Nashik', url: 'https://www.carwale.com/jeep-cars/meridian/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 3. JEEP WRANGLER (4 VARIANTS)
// ============================================================================
export const JEEP_WRANGLER_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'unlimited-petrol-turbo-automatic', name: 'Wrangler Unlimited | Petrol Turbo | Automatic (TC)', fullName: 'Jeep Wrangler Unlimited 2.0L Turbo 8AT 4x4', trim: 'Unlimited', mileage: 11.4, exLakh: 67.65, onRoadLakh: 80.47 },
    { slug: 'rubicon-petrol-turbo-automatic', name: 'Wrangler Rubicon | Petrol Turbo | Automatic (TC)', fullName: 'Jeep Wrangler Rubicon 2.0L Turbo 8AT Rock-Trac 4x4 Heavy Duty', trim: 'Rubicon', mileage: 10.6, exLakh: 71.65, onRoadLakh: 85.89 },
    { slug: 'willys-41-special-edition-petrol-turbo-automatic', name: 'Wrangler Willys 41 Special Edition | Petrol Turbo | Automatic (TC)', fullName: 'Jeep Wrangler Willys 41 Special Edition 2.0L Turbo 8AT 4x4', trim: 'Willys 41 Edition', mileage: 10.6, exLakh: 72.15, onRoadLakh: 86.48 },
    { slug: 'whitecap-mojito-limited-edition-petrol-turbo-automatic', name: 'Wrangler Whitecap Mojito Limited Edition | Petrol Turbo | Automatic (TC)', fullName: 'Jeep Wrangler Whitecap Mojito Limited Edition 2.0L Turbo 8AT 4x4', trim: 'Whitecap Mojito Edition', mileage: 10.6, exLakh: 72.89, onRoadLakh: 87.37 },
  ].map((wv) => ({
    id: `jeep-wrangler-${wv.slug}`,
    modelId: 'jeep-wrangler',
    generationId: 'wrangler-jl',
    name: wv.name,
    fullName: wv.fullName,
    slug: wv.slug,
    trim: wv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(wv.exLakh * 100000),
      exShowroomLakh: wv.exLakh,
      onRoadNashik: Math.round(wv.onRoadLakh * 100000),
      onRoadNashikLakh: wv.onRoadLakh,
      currency: 'INR',
    },
    powertrain: WRANGLER_2_0_TURBO_4WD,
    performance: {
      mileageKmpl: wv.mileage,
      zeroToHundredSec: 7.2,
      topSpeedKmph: 180,
    },
    dimensions: {
      lengthMm: 4867,
      widthMm: 1894,
      heightMm: 1848,
      wheelbaseMm: 3007,
      groundClearanceMm: 237,
      kerbWeightKg: 1995,
      bootSpaceLitres: 533,
      fuelTankLitres: 81,
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
        threeSixtyCamera: 'standard',
        tpms: 'standard',
        adasLevel: 'Level 2',
      },
      exterior: {
        wheelSizeInches: 17,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        fogLights: 'standard',
        sunroof: 'standard',
        panoramicSunroof: 'not_available',
        poweredTailgate: 'not_available',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: 'standard',
        leatherSeats: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 12.3,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 9,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Jeep India Official', url: 'https://www.jeep-india.com/wrangler.html', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Wrangler Nashik', url: 'https://www.carwale.com/jeep-cars/wrangler/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 4. JEEP GRAND CHEROKEE (2 VARIANTS)
// ============================================================================
export const JEEP_GRAND_CHEROKEE_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'limited-o-petrol-turbo-automatic', name: 'Grand Cherokee Limited (O) | Petrol Turbo | Automatic', fullName: 'Jeep Grand Cherokee Limited (O) 2.0L Turbo 8AT 4WD', trim: 'Limited (O)', exLakh: 67.50, onRoadLakh: 74.92 },
    { slug: 'signature-edition-petrol-turbo-automatic', name: 'Grand Cherokee Signature Edition | Petrol Turbo | Automatic', fullName: 'Jeep Grand Cherokee Signature Edition 2.0L Turbo 8AT 4WD', trim: 'Signature Edition', exLakh: 68.50, onRoadLakh: 75.92 },
  ].map((gv) => ({
    id: `jeep-grand-cherokee-${gv.slug}`,
    modelId: 'jeep-grand-cherokee',
    generationId: 'grand-cherokee-wl',
    name: gv.name,
    fullName: gv.fullName,
    slug: gv.slug,
    trim: gv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(gv.exLakh * 100000),
      exShowroomLakh: gv.exLakh,
      onRoadNashik: Math.round(gv.onRoadLakh * 100000),
      onRoadNashikLakh: gv.onRoadLakh,
      currency: 'INR',
    },
    powertrain: GRAND_CHEROKEE_2_0_TURBO,
    performance: {
      mileageKmpl: 11.2,
      zeroToHundredSec: 6.9,
      topSpeedKmph: 210,
    },
    dimensions: {
      lengthMm: 4914,
      widthMm: 1968,
      heightMm: 1799,
      wheelbaseMm: 2964,
      groundClearanceMm: 215,
      kerbWeightKg: 2097,
      bootSpaceLitres: 1067,
      fuelTankLitres: 87,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 8,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        hillDescentControl: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: 'standard',
        tpms: 'standard',
        adasLevel: 'Level 2',
      },
      exterior: {
        wheelSizeInches: 20,
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
        ventilatedSeats: 'standard',
        heatedSeats: 'standard',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: 'standard',
        leatherSeats: 'standard',
        rearSeatRecline: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 10.1,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 9,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Jeep India Official', url: 'https://www.jeep-india.com/grand-cherokee.html', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale Grand Cherokee Nashik', url: 'https://www.carwale.com/jeep-cars/grand-cherokee/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];
