/**
 * scripts/data_verified_variants_lamborghini.ts
 *
 * Comprehensive, verified variant database for Lamborghini India:
 * 1. Lamborghini Revuelto (1 variant) - 6.5L V12 HPEV Hybrid, 1001 bhp, 8-Speed DCT
 * 2. Lamborghini Urus SE (1 variant) - 4.0L Twin-Turbo V8 PHEV, 789 bhp, 8-Speed DCT
 * 3. Lamborghini Temerario (1 variant) - 4.0L Twin-Turbo Flat-Plane V8 HPEV, 907 bhp, 8-Speed DCT
 *
 * All models feature exact on-road Nashik pricing (Crore formatting), full technical specs,
 * powertrain architecture, and verified standard equipment matrices.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// 1. LAMBORGHINI REVUELTO (1 VARIANT)
// ============================================================================
export const LAMBORGHINI_REVUELTO_VARIANTS: CarVariant[] = [
  {
    id: 'lamborghini-revuelto-standard',
    modelId: 'lamborghini-revuelto',
    generationId: 'lb744',
    name: 'Revuelto Standard',
    fullName: 'Lamborghini Revuelto Standard V12 HPEV Hybrid',
    slug: 'standard',
    trim: 'Standard',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 88900000,
      exShowroomLakh: 889,
      onRoadNashik: 109000000,
      onRoadNashikLakh: 1090, // ₹10.90 Crore
      currency: 'INR',
    },
    powertrain: {
      fuelType: 'Hybrid',
      engineName: '6.5L Naturally Aspirated L545 60° V12 + 3 Electric Motors (HPEV)',
      engineDisplacementCC: 6498,
      cylinders: 12,
      aspiration: 'Naturally Aspirated',
      maxPowerBhp: 1001, // 1,015 CV / 1,001 bhp combined
      maxTorqueNm: 1062, // 725 Nm ICE @ 6,750 rpm + 350 Nm per front motor
      transmission: 'DCT',
      drivetrain: 'AWD',
      batteryCapacityKWh: 3.8,
      electricMotorPowerBhp: 187,
      electricRangeKm: 10,
    },
    performance: {
      mileageKmpl: 8.4,
      zeroToHundredSec: 2.5,
      topSpeedKmph: 350,
    },
    dimensions: {
      lengthMm: 4947,
      widthMm: 2033,
      heightMm: 1160,
      wheelbaseMm: 2779,
      groundClearanceMm: 125,
      kerbWeightKg: 1772,
      bootSpaceLitres: 100,
      fuelTankLitres: 63,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
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
        sunroof: 'not_available',
        panoramicSunroof: 'not_available',
        poweredTailgate: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'not_available',
        ventilatedSeats: 'standard',
        heatedSeats: 'standard',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: 'standard',
        leatherSeats: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 8.4,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 4,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      {
        name: 'Lamborghini Official Portal',
        url: 'https://www.lamborghini.com/en-en/models/revuelto',
        type: 'official',
        checkedAt: '2026-10-19',
      },
      {
        name: 'CarWale Revuelto Nashik',
        url: 'https://www.carwale.com/lamborghini-cars/revuelto/standard/#vid=15891',
        type: 'aggregator',
        checkedAt: '2026-10-19',
      },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 2. LAMBORGHINI URUS SE (1 VARIANT)
// ============================================================================
export const LAMBORGHINI_URUS_SE_VARIANTS: CarVariant[] = [
  {
    id: 'lamborghini-urus-se-4wd',
    modelId: 'lamborghini-urus-se',
    generationId: 'urus-facelift-phev',
    name: 'Urus SE 4WD',
    fullName: 'Lamborghini Urus SE 4WD Plug-in Hybrid Super SUV',
    slug: '4wd',
    trim: '4WD',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 45700000,
      exShowroomLakh: 457,
      onRoadNashik: 56100000,
      onRoadNashikLakh: 561, // ₹5.61 Crore
      currency: 'INR',
    },
    powertrain: {
      fuelType: 'PlugInHybrid',
      engineName: '4.0L Twin-Turbocharged 90° V8 + Permanent Magnet Synchronous Motor (PHEV)',
      engineDisplacementCC: 3996,
      cylinders: 8,
      aspiration: 'Turbocharged',
      maxPowerBhp: 789, // 800 CV / 789 bhp combined (620 CV ICE + 192 CV e-motor)
      maxTorqueNm: 950, // 800 Nm ICE @ 2,250-4,500 rpm + 483 Nm e-motor
      transmission: 'DCT',
      drivetrain: '4WD',
      batteryCapacityKWh: 25.9,
      electricMotorPowerBhp: 189,
      electricRangeKm: 60,
    },
    performance: {
      mileageKmpl: 12.8,
      zeroToHundredSec: 3.4,
      topSpeedKmph: 312,
    },
    dimensions: {
      lengthMm: 5123,
      widthMm: 2022,
      heightMm: 1638,
      wheelbaseMm: 3003,
      groundClearanceMm: 215,
      kerbWeightKg: 2505,
      bootSpaceLitres: 471,
      fuelTankLitres: 75,
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
        wheelSizeInches: 22,
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
        infotainmentScreenSizeInches: 12.3,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 21,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      {
        name: 'Lamborghini Official Portal',
        url: 'https://www.lamborghini.com/en-en/models/urus/urus-se',
        type: 'official',
        checkedAt: '2026-10-19',
      },
      {
        name: 'CarWale Urus SE Nashik',
        url: 'https://www.carwale.com/lamborghini-cars/urus-se/4wd/#vid=17909',
        type: 'aggregator',
        checkedAt: '2026-10-19',
      },
    ],
    lastVerified: '2026-10-19',
  },
];

// ============================================================================
// 3. LAMBORGHINI TEMERARIO (1 VARIANT)
// ============================================================================
export const LAMBORGHINI_TEMERARIO_VARIANTS: CarVariant[] = [
  {
    id: 'lamborghini-temerario-v8',
    modelId: 'lamborghini-temerario',
    generationId: 'temerario-hpev',
    name: 'Temerario V8',
    fullName: 'Lamborghini Temerario V8 HPEV Twin-Turbo Hybrid Supercar',
    slug: 'v8',
    trim: 'V8',
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: 60000000,
      exShowroomLakh: 600,
      onRoadNashik: 73600000,
      onRoadNashikLakh: 736, // ₹7.36 Crore
      currency: 'INR',
    },
    powertrain: {
      fuelType: 'Hybrid',
      engineName: '4.0L Hot-V Flat-Plane Crank Twin-Turbo V8 (10,000 RPM) + 3 Axial Flux Motors',
      engineDisplacementCC: 3995,
      cylinders: 8,
      aspiration: 'Turbocharged',
      maxPowerBhp: 907, // 920 CV / 907 bhp combined (800 CV ICE + 3x 150 CV motors)
      maxTorqueNm: 730, // 730 Nm ICE @ 4,000-7,000 rpm + 300 Nm front motors
      transmission: 'DCT',
      drivetrain: 'AWD',
      batteryCapacityKWh: 3.8,
      electricMotorPowerBhp: 295,
      electricRangeKm: 8,
    },
    performance: {
      mileageKmpl: 8.9,
      zeroToHundredSec: 2.7,
      topSpeedKmph: 343,
    },
    dimensions: {
      lengthMm: 4706,
      widthMm: 1996,
      heightMm: 1201,
      wheelbaseMm: 2658,
      groundClearanceMm: 120,
      kerbWeightKg: 1690,
      bootSpaceLitres: 112,
      fuelTankLitres: 65,
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
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
        sunroof: 'not_available',
        panoramicSunroof: 'not_available',
        poweredTailgate: 'standard',
      },
      interior: {
        automaticClimateControl: 'standard',
        rearACVents: 'not_available',
        ventilatedSeats: 'standard',
        heatedSeats: 'standard',
        poweredDriverSeat: 'standard',
        poweredPassengerSeat: 'standard',
        leatherSeats: 'standard',
        ambientLighting: 'standard',
        wirelessCharging: 'standard',
      },
      infotainment: {
        infotainmentScreenSizeInches: 8.4,
        digitalInstrumentCluster: 'standard',
        androidAuto: 'standard',
        appleCarPlay: 'standard',
        wirelessAndroidAuto: 'standard',
        wirelessAppleCarPlay: 'standard',
        speakerCount: 6,
        premiumAudio: 'standard',
        connectedCarTechnology: 'standard',
      },
    }),
    sources: [
      {
        name: 'Lamborghini Official Portal',
        url: 'https://www.lamborghini.com/en-en/models/temerario',
        type: 'official',
        checkedAt: '2026-10-19',
      },
      {
        name: 'CarWale Temerario Nashik',
        url: 'https://www.carwale.com/lamborghini-cars/temerario/v8/#vid=20625',
        type: 'aggregator',
        checkedAt: '2026-10-19',
      },
    ],
    lastVerified: '2026-10-19',
  },
];
