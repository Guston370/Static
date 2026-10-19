/**
 * scripts/data_verified_variants_lexus.ts
 *
 * Comprehensive, verified variant database for Lexus India:
 * 1. Lexus ES 350h (2 variants) - 2.5L Self-Charging Hybrid (2494 cc, e-CVT, FWD)
 * 2. Lexus LX 500d (5 variants) - 3.3L Twin-Turbo V6 Diesel (304 bhp, 700 Nm, 10-Speed AT, 4WD; Sumi Black, Walnut, Takanoha, Urban, Overtrail)
 * 3. Lexus LM 350h (2 variants) - 2.5L Self-Charging Hybrid (244 bhp, E-Four AWD, e-CVT; 7-STR VIP & 4-STR Ultra Luxury)
 * 4. Lexus NX 350h (4 variants) - 2.5L Hybrid (188 bhp, E-Four AWD, e-CVT, 17.8 kmpl; Overtrail, Exquisite, Luxury, F-Sport)
 * 5. Lexus RX (3 variants) - 2.5L Hybrid & 2.4L Turbo Hybrid Direct4 (RX 350h Exquisite, Exquisite with Mark Levinson & RX 500h F-Sport Plus)
 * 6. Lexus ES 500e (1 variant) - 74.68 kWh Battery Dual Motor AWD (338 bhp, 580 km range)
 *
 * Total: 17 verified variants with accurate on-road Nashik pricing and complete specifications.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// ES 350h 2.5L Hybrid e-CVT FWD
const LEXUS_ES_350H_HYBRID = {
  fuelType: 'Hybrid' as const,
  engineName: '2.5L 4-Cylinder DOHC 16V VVT-i Petrol Engine + Lexus Hybrid Drive (e-CVT)',
  engineDisplacementCC: 2494,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 215,
  maxTorqueNm: 221,
  transmission: 'CVT' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 1.6,
  electricMotorPowerBhp: 118,
  electricRangeKm: null,
};

// LX 500d 3.3L Twin-Turbo V6 Diesel 10AT 4WD
const LEXUS_LX_500D = {
  fuelType: 'Diesel' as const,
  engineName: '3.3L F33A-FTV Twin-Turbocharged V6 Diesel Engine (10-Speed Direct Shift Automatic)',
  engineDisplacementCC: 3346,
  cylinders: 6,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 304,
  maxTorqueNm: 700,
  transmission: 'Automatic' as const,
  drivetrain: '4WD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

// LM 350h 2.5L Hybrid E-Four e-CVT AWD
const LEXUS_LM_350H = {
  fuelType: 'Hybrid' as const,
  engineName: '2.5L A25A-FXS 4-Cylinder Petrol Engine + Front & Rear Electric Motors (E-Four AWD, e-CVT)',
  engineDisplacementCC: 2487,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 244,
  maxTorqueNm: 239,
  transmission: 'CVT' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 2.0,
  electricMotorPowerBhp: 180,
  electricRangeKm: null,
};

// NX 350h 2.5L Hybrid E-Four e-CVT AWD
const LEXUS_NX_350H = {
  fuelType: 'Hybrid' as const,
  engineName: '2.5L 4-Cylinder DOHC Petrol Engine + High-Output Electric Motors (E-Four AWD, e-CVT)',
  engineDisplacementCC: 2487,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 188,
  maxTorqueNm: 239,
  transmission: 'CVT' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 1.6,
  electricMotorPowerBhp: 180,
  electricRangeKm: null,
};

// RX 350h 2.5L Hybrid e-CVT AWD
const LEXUS_RX_350H = {
  fuelType: 'Hybrid' as const,
  engineName: '2.5L 4-Cylinder In-line Engine + Lexus Hybrid Drive (E-Four AWD, e-CVT)',
  engineDisplacementCC: 2487,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 366,
  maxTorqueNm: 316,
  transmission: 'CVT' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 2.1,
  electricMotorPowerBhp: 180,
  electricRangeKm: null,
};

// RX 500h 2.4L Turbo Hybrid Direct4 AWD
const LEXUS_RX_500H = {
  fuelType: 'Hybrid' as const,
  engineName: '2.4L Turbocharged 4-Cylinder Engine + High-Output eAxle (Direct4 AWD, 6-Speed Automatic)',
  engineDisplacementCC: 2393,
  cylinders: 4,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 366,
  maxTorqueNm: 460,
  transmission: 'Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 2.4,
  electricMotorPowerBhp: 180,
  electricRangeKm: null,
};

// ES 500e 74.7 kWh Dual Motor AWD Electric
const LEXUS_ES_500E = {
  fuelType: 'Electric' as const,
  engineName: 'Dual High-Output Permanent Magnet Synchronous Motors (74.68 kWh Battery Pack, DIRECT4 AWD)',
  engineDisplacementCC: null,
  cylinders: null,
  aspiration: 'Electric Motor' as const,
  maxPowerBhp: 338,
  maxTorqueNm: 438,
  transmission: 'Single-Speed Automatic' as const,
  drivetrain: 'AWD' as const,
  batteryCapacityKWh: 74.68,
  electricMotorPowerBhp: 338,
  electricRangeKm: 580,
};

// ============================================================================
// 1. LEXUS ES 350h (2 VARIANTS)
// ============================================================================
export const LEXUS_ES_350H_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'exquisite', name: 'ES 350h Exquisite | Hybrid | Automatic (e-CVT)', fullName: 'Lexus ES 350h Exquisite 2.5L Hybrid e-CVT', trim: 'Exquisite', exLakh: 64.50, onRoadLakh: 78.58 },
    { slug: 'luxury', name: 'ES 350h Luxury | Hybrid | Automatic (e-CVT)', fullName: 'Lexus ES 350h Luxury 2.5L Hybrid e-CVT', trim: 'Luxury', exLakh: 69.70, onRoadLakh: 85.30 },
  ].map((es) => ({
    id: `lexus-es-350h-${es.slug}`,
    modelId: 'lexus-es-350h',
    generationId: 'es-xz10',
    name: es.name,
    fullName: es.fullName,
    slug: es.slug,
    trim: es.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(es.exLakh * 100000),
      exShowroomLakh: es.exLakh,
      onRoadNashik: Math.round(es.onRoadLakh * 100000),
      onRoadNashikLakh: es.onRoadLakh,
      currency: 'INR',
    },
    powertrain: LEXUS_ES_350H_HYBRID,
    performance: {
      mileageKmpl: 22.5,
      zeroToHundredSec: 8.9,
      topSpeedKmph: 180,
    },
    dimensions: {
      lengthMm: 4975,
      widthMm: 1865,
      heightMm: 1445,
      wheelbaseMm: 2870,
      groundClearanceMm: 153,
      kerbWeightKg: 1680,
      bootSpaceLitres: 454,
      fuelTankLitres: 50,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 10,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: es.trim === 'Luxury' ? 'standard' : 'not_available',
        tpms: 'standard',
        adasLevel: 'Level 2',
      },
      exterior: {
        wheelSizeInches: 18,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: 'standard',
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
        rearSeatRecline: es.trim === 'Luxury' ? 'standard' : 'not_available',
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
        speakerCount: es.trim === 'Luxury' ? 17 : 10,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Lexus India Official', url: 'https://www.lexusindia.co.in/en/models/es.html', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale ES 350h Nashik', url: 'https://www.carwale.com/lexus-cars/es-350h/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 2. LEXUS LX (5 VARIANTS)
// ============================================================================
export const LEXUS_LX_VARIANTS: CarVariant[] = [
  ...[
    { slug: '500d-ash-open-pore-sumi-black', name: 'LX 500d with Ash Open Pore Sumi Black Trim', fullName: 'Lexus LX 500d 3.3L Twin-Turbo Diesel Ash Open Pore Sumi Black 10AT 4WD', trim: 'Ash Open Pore', exLakh: 282.00, onRoadLakh: 317.00 },
    { slug: '500d-walnut-open-pore', name: 'LX 500d with Walnut Open Pore Trim', fullName: 'Lexus LX 500d 3.3L Twin-Turbo Diesel Walnut Open Pore 10AT 4WD', trim: 'Walnut Open Pore', exLakh: 282.00, onRoadLakh: 317.00 },
    { slug: '500d-artwood-takanoha', name: 'LX 500d with Artwood Takanoha', fullName: 'Lexus LX 500d 3.3L Twin-Turbo Diesel Artwood Takanoha 10AT 4WD', trim: 'Artwood Takanoha', exLakh: 284.00, onRoadLakh: 319.00 },
    { slug: '500d-urban', name: 'LX 500d Urban', fullName: 'Lexus LX 500d Urban Edition 3.3L Twin-Turbo Diesel 10AT 4WD', trim: 'Urban', exLakh: 302.00, onRoadLakh: 339.00 },
    { slug: '500d-overtrail', name: 'LX 500d Overtrail', fullName: 'Lexus LX 500d Overtrail Grade 3.3L Twin-Turbo Diesel 10AT 4WD', trim: 'Overtrail', exLakh: 314.00, onRoadLakh: 352.00 },
  ].map((lx) => ({
    id: `lexus-lx-${lx.slug}`,
    modelId: 'lexus-lx',
    generationId: 'lx-j310',
    name: lx.name,
    fullName: lx.fullName,
    slug: lx.slug,
    trim: lx.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(lx.exLakh * 100000),
      exShowroomLakh: lx.exLakh,
      onRoadNashik: Math.round(lx.onRoadLakh * 100000),
      onRoadNashikLakh: lx.onRoadLakh,
      currency: 'INR',
    },
    powertrain: LEXUS_LX_500D,
    performance: {
      mileageKmpl: 6.9,
      zeroToHundredSec: 7.9,
      topSpeedKmph: 210,
    },
    dimensions: {
      lengthMm: 5100,
      widthMm: 1990,
      heightMm: 1895,
      wheelbaseMm: 2850,
      groundClearanceMm: 205,
      kerbWeightKg: 2690,
      bootSpaceLitres: 1109,
      fuelTankLitres: 80,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 10,
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
        wheelSizeInches: 22,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        fogLights: 'standard',
        roofRails: 'standard',
        sunroof: 'standard',
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
        infotainmentScreenSizeInches: 12.3,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 25,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Lexus India Official', url: 'https://www.lexusindia.co.in/en/models/lx.html', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale LX Nashik', url: 'https://www.carwale.com/lexus-cars/lx/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 3. LEXUS LM (2 VARIANTS)
// ============================================================================
export const LEXUS_LM_VARIANTS: CarVariant[] = [
  ...[
    { slug: '350h-7-str-vip', name: 'LM 350h 7 STR VIP', fullName: 'Lexus LM 350h 7-Seater VIP Lounge 2.5L Hybrid E-Four AWD', trim: '7 STR VIP', exLakh: 200.00, onRoadLakh: 260.00 },
    { slug: '350h-4-str-ultra-luxury', name: 'LM 350h 4 STR Ultra Luxury', fullName: 'Lexus LM 350h 4-Seater Ultra Luxury with 48-inch Screen 2.5L Hybrid E-Four AWD', trim: '4 STR Ultra Luxury', exLakh: 250.00, onRoadLakh: 325.00 },
  ].map((lm) => ({
    id: `lexus-lm-${lm.slug}`,
    modelId: 'lexus-lm',
    generationId: 'lm-aw30',
    name: lm.name,
    fullName: lm.fullName,
    slug: lm.slug,
    trim: lm.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(lm.exLakh * 100000),
      exShowroomLakh: lm.exLakh,
      onRoadNashik: Math.round(lm.onRoadLakh * 100000),
      onRoadNashikLakh: lm.onRoadLakh,
      currency: 'INR',
    },
    powertrain: LEXUS_LM_350H,
    performance: {
      mileageKmpl: 19.3,
      zeroToHundredSec: 8.7,
      topSpeedKmph: 190,
    },
    dimensions: {
      lengthMm: 5125,
      widthMm: 1890,
      heightMm: 1955,
      wheelbaseMm: 3000,
      groundClearanceMm: 160,
      kerbWeightKg: 2355,
      bootSpaceLitres: lm.trim.includes('4 STR') ? 752 : 110,
      fuelTankLitres: 60,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 8,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: 'standard',
        tpms: 'standard',
        adasLevel: 'Level 2',
      },
      exterior: {
        wheelSizeInches: 19,
        alloyWheels: 'standard',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        fogLights: 'standard',
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
        infotainmentScreenSizeInches: lm.trim.includes('4 STR') ? 48.0 : 14.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 23,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Lexus India Official', url: 'https://www.lexusindia.co.in/en/models/lm.html', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale LM Nashik', url: 'https://www.carwale.com/lexus-cars/lm/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 4. LEXUS NX (4 VARIANTS)
// ============================================================================
export const LEXUS_NX_VARIANTS: CarVariant[] = [
  ...[
    { slug: '350h-overtrail-grade', name: 'NX 350h Overtrail Grade', fullName: 'Lexus NX 350h Overtrail Grade 2.5L Hybrid E-Four AWD', trim: 'Overtrail', exLakh: 71.17, onRoadLakh: 84.87 },
    { slug: '350h-exquisite', name: 'NX 350h Exquisite', fullName: 'Lexus NX 350h Exquisite 2.5L Hybrid E-Four AWD', trim: 'Exquisite', exLakh: 67.35, onRoadLakh: 85.16 },
    { slug: '350h-luxury', name: 'NX 350h Luxury', fullName: 'Lexus NX 350h Luxury 2.5L Hybrid E-Four AWD', trim: 'Luxury', exLakh: 72.07, onRoadLakh: 85.93 },
    { slug: '350h-f-sport', name: 'NX 350h F-Sport', fullName: 'Lexus NX 350h F-Sport 2.5L Hybrid E-Four AWD', trim: 'F-Sport', exLakh: 74.24, onRoadLakh: 88.49 },
  ].map((nx) => ({
    id: `lexus-nx-${nx.slug}`,
    modelId: 'lexus-nx',
    generationId: 'nx-az20',
    name: nx.name,
    fullName: nx.fullName,
    slug: nx.slug,
    trim: nx.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(nx.exLakh * 100000),
      exShowroomLakh: nx.exLakh,
      onRoadNashik: Math.round(nx.onRoadLakh * 100000),
      onRoadNashikLakh: nx.onRoadLakh,
      currency: 'INR',
    },
    powertrain: LEXUS_NX_350H,
    performance: {
      mileageKmpl: 17.8,
      zeroToHundredSec: 7.7,
      topSpeedKmph: 200,
    },
    dimensions: {
      lengthMm: 4660,
      widthMm: 1865,
      heightMm: 1670,
      wheelbaseMm: 2690,
      groundClearanceMm: 195,
      kerbWeightKg: 1810,
      bootSpaceLitres: 520,
      fuelTankLitres: 55,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 8,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: nx.trim === 'Luxury' || nx.trim === 'F-Sport' ? 'standard' : 'not_available',
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
        panoramicSunroof: nx.trim === 'Luxury' ? 'standard' : 'not_available',
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
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 14.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: nx.trim === 'Luxury' || nx.trim === 'F-Sport' ? 17 : 10,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Lexus India Official', url: 'https://www.lexusindia.co.in/en/models/nx.html', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale NX Nashik', url: 'https://www.carwale.com/lexus-cars/nx/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 5. LEXUS RX (3 VARIANTS)
// ============================================================================
export const LEXUS_RX_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'rx-350h-exquisite', name: 'RX 350h Exquisite | Hybrid 2.5L | Automatic', fullName: 'Lexus RX 350h Exquisite 2.5L Hybrid E-Four e-CVT', trim: 'RX 350h Exquisite', pt: LEXUS_RX_350H, exLakh: 95.80, onRoadLakh: 107.00 },
    { slug: 'rx-350h-exquisite-mark-levinson', name: 'RX 350h Exquisite | Hybrid 2.5L | Automatic | with Mark Levinson Audio', fullName: 'Lexus RX 350h Exquisite with 21-Speaker Mark Levinson Audio 2.5L Hybrid', trim: 'RX 350h ML', pt: LEXUS_RX_350H, exLakh: 98.50, onRoadLakh: 111.00 },
    { slug: 'rx-500h-f-sport-plus', name: 'RX 500h F-Sport Plus | Hybrid 2.4L | Automatic', fullName: 'Lexus RX 500h F-Sport Plus 2.4L Turbo Hybrid Direct4 AWD 6AT', trim: 'RX 500h F-Sport', pt: LEXUS_RX_500H, exLakh: 118.10, onRoadLakh: 130.00 },
  ].map((rx) => ({
    id: `lexus-rx-${rx.slug}`,
    modelId: 'lexus-rx',
    generationId: 'rx-al30',
    name: rx.name,
    fullName: rx.fullName,
    slug: rx.slug,
    trim: rx.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: {
      exShowroom: Math.round(rx.exLakh * 100000),
      exShowroomLakh: rx.exLakh,
      onRoadNashik: Math.round(rx.onRoadLakh * 100000),
      onRoadNashikLakh: rx.onRoadLakh,
      currency: 'INR',
    },
    powertrain: rx.pt,
    performance: {
      mileageKmpl: rx.pt.aspiration === 'Turbocharged' ? 14.5 : 17.5,
      zeroToHundredSec: rx.pt.aspiration === 'Turbocharged' ? 6.2 : 7.9,
      topSpeedKmph: 210,
    },
    dimensions: {
      lengthMm: 4890,
      widthMm: 1920,
      heightMm: 1695,
      wheelbaseMm: 2850,
      groundClearanceMm: 190,
      kerbWeightKg: 2010,
      bootSpaceLitres: 612,
      fuelTankLitres: 65,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 8,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        rearCamera: 'standard',
        threeSixtyCamera: 'standard',
        tpms: 'standard',
        adasLevel: 'Level 2',
      },
      exterior: {
        wheelSizeInches: 21,
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
        infotainmentScreenSizeInches: 14.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: rx.name.includes('Mark Levinson') || rx.trim.includes('500h') ? 21 : 12,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Lexus India Official', url: 'https://www.lexusindia.co.in/en/models/rx.html', type: 'official' as const, checkedAt: '2026-10-19' },
      { name: 'CarWale RX Nashik', url: 'https://www.carwale.com/lexus-cars/rx/', type: 'aggregator' as const, checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  })),
];

// ============================================================================
// 6. LEXUS ES 500e (1 VARIANT)
// ============================================================================
export const LEXUS_ES_500E_VARIANTS: CarVariant[] = [
  {
    id: 'lexus-es-500e-500-e',
    modelId: 'lexus-es-500e',
    generationId: 'es-ev-2025',
    name: 'ES 500e 500 e | AWD 74.7 kWh',
    fullName: 'Lexus ES 500e Dual Motor AWD 74.68 kWh Electric Luxury Sedan',
    slug: '500-e',
    trim: '500 e',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 9500000,
      exShowroomLakh: 95.00,
      onRoadNashik: 10700000,
      onRoadNashikLakh: 107.00, // ₹1.07 Crore
      currency: 'INR',
    },
    powertrain: LEXUS_ES_500E,
    performance: {
      mileageKmpl: null,
      zeroToHundredSec: 5.4,
      topSpeedKmph: 190,
    },
    dimensions: {
      lengthMm: 4990,
      widthMm: 1885,
      heightMm: 1450,
      wheelbaseMm: 2920,
      groundClearanceMm: 155,
      kerbWeightKg: 2150,
      bootSpaceLitres: 480,
      fuelTankLitres: null,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 10,
        abs: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
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
        infotainmentScreenSizeInches: 14.0,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 17,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      { name: 'Lexus India Official', url: 'https://www.lexusindia.co.in', type: 'official', checkedAt: '2026-10-19' },
      { name: 'CarWale ES 500e Nashik', url: 'https://www.carwale.com/lexus-cars/es-500e/', type: 'aggregator', checkedAt: '2026-10-19' },
    ],
    lastVerified: '2026-10-19',
  },
];
