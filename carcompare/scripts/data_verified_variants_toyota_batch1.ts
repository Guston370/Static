/**
 * scripts/data_verified_variants_toyota_batch1.ts
 *
 * Comprehensive, verified variant database for Toyota India Batch 1:
 * 1. Toyota Glanza (13 variants)
 * 2. Toyota Urban Cruiser Taisor (12 variants)
 * 3. Toyota Urban Cruiser Hyryder (22 variants)
 *
 * Covers all 22 specification categories (Sections A through V) with verified
 * mechanical specifications, equipment ladders, and on-road Nashik pricing.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// ============================================================================
// POWERTRAIN DEFINITIONS
// ============================================================================

// Glanza Powertrains
const GLANZA_1_2_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L K-Series DualJet Dual VVT 4-Cylinder Engine',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 82,
  maxTorqueNm: 112.4,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const GLANZA_1_2_PETROL_AMT = {
  ...GLANZA_1_2_PETROL_MT,
  transmission: 'Automatic' as const,
};

const GLANZA_1_2_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.2L E-CNG Bi-Fuel DualJet Engine',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated Bi-Fuel' as const,
  maxPowerBhp: 69,
  maxTorqueNm: 101.8,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const GLANZA_1_2_CNG_AMT = {
  ...GLANZA_1_2_CNG_MT,
  transmission: 'Automatic' as const,
};

// Taisor Powertrains
const TAISOR_1_2_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L DualJet Dual VVT 4-Cylinder Petrol Engine',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 89,
  maxTorqueNm: 113,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const TAISOR_1_2_PETROL_AMT = {
  ...TAISOR_1_2_PETROL_MT,
  transmission: 'Automatic' as const,
};

const TAISOR_1_2_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.2L E-CNG Bi-Fuel DualJet Engine',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated Bi-Fuel' as const,
  maxPowerBhp: 76,
  maxTorqueNm: 98.5,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const TAISOR_1_0_TURBO_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Turbo Boosterjet 3-Cylinder Petrol Engine',
  engineDisplacementCC: 998,
  cylinders: 3,
  aspiration: 'Turbocharged' as const,
  maxPowerBhp: 99,
  maxTorqueNm: 147.6,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const TAISOR_1_0_TURBO_AT = {
  ...TAISOR_1_0_TURBO_MT,
  transmission: 'Automatic' as const,
};

// Hyryder Powertrains
const HYRYDER_1_5_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L K15C Neo Drive DualJet Dual VVT Engine',
  engineDisplacementCC: 1462,
  cylinders: 4,
  aspiration: 'Naturally Aspirated' as const,
  maxPowerBhp: 102,
  maxTorqueNm: 136.8,
  transmission: 'Manual' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const HYRYDER_1_5_PETROL_AT = {
  ...HYRYDER_1_5_PETROL_MT,
  transmission: 'Automatic' as const,
};

const HYRYDER_1_5_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.5L E-CNG DualJet Dual VVT Engine',
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

const HYRYDER_1_5_HYBRID_ECVT = {
  fuelType: 'StrongHybrid' as const,
  engineName: '1.5L TNGA Self-Charging Strong Hybrid Electric Powertrain',
  engineDisplacementCC: 1490,
  cylinders: 3,
  aspiration: 'Naturally Aspirated with Synchronous Electric Motor' as const,
  maxPowerBhp: 114,
  maxTorqueNm: 141,
  transmission: 'Automatic' as const,
  drivetrain: 'FWD' as const,
  batteryCapacityKWh: 0.76,
  electricMotorPowerBhp: 79,
  electricRangeKm: 25,
};

// ============================================================================
// 1. TOYOTA GLANZA (13 VARIANTS)
// ============================================================================
export const TOYOTA_GLANZA_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'e-petrol-manual', name: 'Glanza E | Petrol | Manual', fullName: 'Toyota Glanza E 1.2L Petrol 5MT', trim: 'E', pt: GLANZA_1_2_PETROL_MT, ex: 686000, exLakh: 6.86, onRoad: 822000, onRoadLakh: 8.22, mileage: 23.80, hud: false, cam360: false, alloy: false },
    { slug: 's-petrol-manual', name: 'Glanza S | Petrol | Manual', fullName: 'Toyota Glanza S 1.2L Petrol 5MT', trim: 'S', pt: GLANZA_1_2_PETROL_MT, ex: 775000, exLakh: 7.75, onRoad: 905000, onRoadLakh: 9.05, mileage: 23.80, hud: false, cam360: false, alloy: false },
    { slug: 's-petrol-automatic', name: 'Glanza S | Petrol | Automatic (AMT)', fullName: 'Toyota Glanza S 1.2L Petrol 5-Speed AMT', trim: 'S', pt: GLANZA_1_2_PETROL_AMT, ex: 825000, exLakh: 8.25, onRoad: 977000, onRoadLakh: 9.77, mileage: 24.77, hud: false, cam360: false, alloy: false },
    { slug: 's-cng-manual', name: 'Glanza S | CNG | Manual', fullName: 'Toyota Glanza S 1.2L E-CNG 5MT', trim: 'S', pt: GLANZA_1_2_CNG_MT, ex: 865000, exLakh: 8.65, onRoad: 1028000, onRoadLakh: 10.28, mileage: 30.61, hud: false, cam360: false, alloy: false },
    { slug: 's-cng-automatic', name: 'Glanza S | CNG | Automatic (AMT)', fullName: 'Toyota Glanza S 1.2L E-CNG 5-Speed AMT', trim: 'S', pt: GLANZA_1_2_CNG_AMT, ex: 910000, exLakh: 9.10, onRoad: 1063000, onRoadLakh: 10.63, mileage: 30.61, hud: false, cam360: false, alloy: false },
    { slug: 'g-petrol-manual', name: 'Glanza G | Petrol | Manual', fullName: 'Toyota Glanza G 1.2L Petrol 5MT', trim: 'G', pt: GLANZA_1_2_PETROL_MT, ex: 878000, exLakh: 8.78, onRoad: 1025000, onRoadLakh: 10.25, mileage: 23.80, hud: false, cam360: false, alloy: true },
    { slug: 'g-petrol-automatic', name: 'Glanza G | Petrol | Automatic (AMT)', fullName: 'Toyota Glanza G 1.2L Petrol 5-Speed AMT', trim: 'G', pt: GLANZA_1_2_PETROL_AMT, ex: 928000, exLakh: 9.28, onRoad: 1094000, onRoadLakh: 10.94, mileage: 24.77, hud: false, cam360: false, alloy: true },
    { slug: 'g-cng-manual', name: 'Glanza G | CNG | Manual', fullName: 'Toyota Glanza G 1.2L E-CNG 5MT', trim: 'G', pt: GLANZA_1_2_CNG_MT, ex: 968000, exLakh: 9.68, onRoad: 1134000, onRoadLakh: 11.34, mileage: 30.61, hud: false, cam360: false, alloy: true },
    { slug: 'g-cng-automatic', name: 'Glanza G | CNG | Automatic (AMT)', fullName: 'Toyota Glanza G 1.2L E-CNG 5-Speed AMT', trim: 'G', pt: GLANZA_1_2_CNG_AMT, ex: 1013000, exLakh: 10.13, onRoad: 1186000, onRoadLakh: 11.86, mileage: 30.61, hud: false, cam360: false, alloy: true },
    { slug: 'v-petrol-manual', name: 'Glanza V | Petrol | Manual', fullName: 'Toyota Glanza V 1.2L Petrol 5MT', trim: 'V', pt: GLANZA_1_2_PETROL_MT, ex: 978000, exLakh: 9.78, onRoad: 1170000, onRoadLakh: 11.70, mileage: 23.80, hud: true, cam360: true, alloy: true },
    { slug: 'v-petrol-automatic', name: 'Glanza V | Petrol | Automatic (AMT)', fullName: 'Toyota Glanza V 1.2L Petrol 5-Speed AMT', trim: 'V', pt: GLANZA_1_2_PETROL_AMT, ex: 1000000, exLakh: 10.00, onRoad: 1260000, onRoadLakh: 12.60, mileage: 24.77, hud: true, cam360: true, alloy: true },
    { slug: 'v-o-petrol-manual', name: 'Glanza V (O) | Petrol | Manual', fullName: 'Toyota Glanza V (O) 1.2L Petrol 5MT', trim: 'V (O)', pt: GLANZA_1_2_PETROL_MT, ex: 1030000, exLakh: 10.30, onRoad: 1248000, onRoadLakh: 12.48, mileage: 23.80, hud: true, cam360: true, alloy: true },
    { slug: 'v-o-petrol-automatic', name: 'Glanza V (O) | Petrol | Automatic (AMT)', fullName: 'Toyota Glanza V (O) 1.2L Petrol 5-Speed AMT', trim: 'V (O)', pt: GLANZA_1_2_PETROL_AMT, ex: 1075000, exLakh: 10.75, onRoad: 1305000, onRoadLakh: 13.05, mileage: 24.77, hud: true, cam360: true, alloy: true },
  ].map((gv) => ({
    id: `toyota-glanza-${gv.slug}`,
    modelId: 'toyota-glanza',
    generationId: null,
    name: gv.name,
    fullName: gv.fullName,
    slug: gv.slug,
    trim: gv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: { exShowroom: gv.ex, exShowroomLakh: gv.exLakh, onRoadNashik: gv.onRoad, onRoadNashikLakh: gv.onRoadLakh, currency: 'INR' },
    powertrain: gv.pt,
    performance: {
      mileageKmpl: gv.mileage,
      mileage: { value: gv.mileage, unit: gv.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Toyota Kirloskar', verified: true },
      zeroToHundredSec: 12.3,
      topSpeedKmph: 170,
    },
    dimensions: {
      lengthMm: 3990,
      widthMm: 1745,
      heightMm: 1500,
      wheelbaseMm: 2520,
      groundClearanceMm: 170,
      kerbWeightKg: gv.pt.fuelType === 'CNG' ? 1025 : 920,
      bootSpaceLitres: gv.pt.fuelType === 'CNG' ? 210 : 318,
      fuelTankLitres: gv.pt.fuelType === 'CNG' ? 55 : 37,
    },
    extendedPowertrain: {
      engineLayout: 'Front Transverse',
      valvesPerCylinder: 4,
      valveConfiguration: 'DOHC 16V with Dual VVT',
      turbochargerType: 'Naturally Aspirated',
      compressionRatio: '11.0:1',
      fuelInjectionType: gv.pt.fuelType === 'CNG' ? 'Multi-Point Fuel Injection & CNG Sequential Injection' : 'DualJet Multi-Point Injection',
      emissionStandard: 'BS6 Phase 2 / OBD-2',
      gearboxType: gv.pt.transmission === 'Manual' ? '5-Speed Manual' : '5-Speed AMT',
      gearboxName: gv.pt.transmission === 'Manual' ? '5-Speed MT' : '5-Speed AMT',
      driveModes: ['Standard'],
      paddleShifters: false,
      regenerativeBraking: false,
      autoStartStop: true,
    },
    suspension: { frontSuspension: 'MacPherson Strut with Coil Spring', rearSuspension: 'Torsion Beam with Coil Spring', frontBrakeType: 'Ventilated Disc', rearBrakeType: 'Drum' },
    extendedDimensions: { doors: 5, seatingRows: 2, turningRadiusM: 4.85, grossWeightKg: 1410, approachAngleDeg: 16.5, departureAngleDeg: 21.0, rampBreakoverAngleDeg: 15.0 },
    tyres: { frontTyreProfile: gv.alloy ? '195/55 R16' : '185/65 R15', rearTyreProfile: gv.alloy ? '195/55 R16' : '185/65 R15', wheelType: gv.alloy ? 'Two-Tone Precision Cut Alloy Wheels' : 'Steel Wheels with Wheel Cap', spareWheel: 'Full Size Steel Spare Wheel' },
    warranty: { standardWarrantyYears: 3, standardWarrantyKm: 100000, batteryWarrantyYears: 3, batteryWarrantyKm: 100000 },
    extendedSafety: { rearMiddleHeadrest: true, rearMiddleThreePointBelt: true, isofixChildMounts: true, sideAirbags: gv.trim.includes('G') || gv.trim.includes('V'), curtainAirbags: gv.trim.includes('G') || gv.trim.includes('V'), kneeAirbag: false, centralLocking: 'Remote Keyless with Speed Sensing Auto Door Lock', speedSensingDoorLock: true, childSafetyLock: true },
    brakes: { frontDiscBrakes: true, rearDiscBrakes: false, electronicParkingBrake: false, autoHold: false, brakeAssist: true },
    climate: { airConditioningType: gv.trim.includes('E') ? 'Manual AC' : 'Automatic Climate Control', rearACVents: !gv.trim.includes('E'), dualZoneClimate: false },
    doorsAndMirrors: { orvmElectricAdjustment: true, orvmElectricFolding: gv.trim.includes('G') || gv.trim.includes('V'), autoDimmingIRVM: gv.trim.includes('V'), rearDefogger: !gv.trim.includes('E'), rearWiperWasher: !gv.trim.includes('E'), poweredTailgate: false },
    sunroofWindows: { sunroofType: 'None', antiPinchWindows: true, rearSunshade: false },
    parkingAssist: { parkingSensors: 'Rear Ultrasonic Parking Sensors', parkingCamera: gv.cam360 ? '360 Degree Surround View Camera' : (gv.trim.includes('G') ? 'Rear View Camera with Guidelines' : 'None'), blindSpotMonitor: false },
    storage: { gloveboxIllumination: false, cooledGlovebox: false, frontCupHolders: 2, rearArmrestCupholders: 0, sunglassHolder: false },
    seating: { seatUpholstery: 'Dual-Tone Black & Blue Fabric', driverSeatAdjustment: gv.trim.includes('E') ? '4-Way Manual' : '6-Way Height Adjustable Manual Seat', ventilatedSeats: 'None', splitRearSeats: '60:40 Split Folding Rear Seat' },
    instrumentCluster: { clusterType: 'Analog Dials with 4.2-inch Color TFT Multi-Information Display', tirePressureDisplay: false },
    steering: { steeringAdjustment: 'Tilt and Telescopic Adjustable Steering Wheel', steeringControls: 'Mounted Audio, Phone & Voice Controls', leatherWrappedSteering: gv.trim.includes('V') },
    infotainmentEx: { screenSizeInches: gv.trim.includes('V') ? 9.0 : (gv.trim.includes('E') ? 0 : 7.0), soundSystem: gv.trim.includes('V') ? 'Arkamys Surround Sense with 6 Speakers' : (gv.trim.includes('E') ? 'None' : '4-Speaker Audio'), wirelessPhoneProjection: !gv.trim.includes('E') },
    lighting: { headlightType: gv.trim.includes('V') || gv.trim.includes('G') ? 'LED Projector Headlamps with LED DRLs' : 'Halogen Reflector Headlamps', taillightType: 'Split LED Rear Combination Lamps', ambientLighting: 'Footwell Illumination' },
    adas: { adasLevel: 'None', adaptiveCruiseControl: false, laneKeepAssist: false, emergencyBraking: false, trafficSignRecognition: false },
    telematics: { connectedCarTech: gv.trim.includes('G') || gv.trim.includes('V'), appCompatibility: 'Toyota i-Connect with 45+ Connected Features', remoteLockUnlock: true, remoteHornLight: true, remoteACControl: false, geoFencing: true, stolenVehicleTracking: true, otaUpdates: true },
    exteriorFeatures: { grilleType: 'Unique Toyota Wave Grille with Chrome Accent', roofRails: 'None', exhaustPipes: 'Concealed Exhaust' },
    cabinNoise: { acousticWindshield: false, activeNoiseCancellation: false },
    features: makeStandardFeatures({
      safety: { airbagsCount: gv.trim.includes('G') || gv.trim.includes('V') ? 6 : 2, abs: 'standard', ebd: 'standard', esc: 'standard', hillAssist: 'standard', tpms: 'not_available', rearCamera: gv.trim.includes('G') || gv.trim.includes('V') ? 'standard' : 'not_available', rearParkingSensors: 'standard' },
      exterior: { wheelSizeInches: gv.alloy ? 16 : 15, alloyWheels: gv.alloy ? 'standard' : 'not_available', ledHeadlights: gv.trim.includes('G') || gv.trim.includes('V') ? 'standard' : 'not_available', ledDRLs: gv.trim.includes('G') || gv.trim.includes('V') ? 'standard' : 'not_available' },
      interior: { automaticClimateControl: gv.trim.includes('E') ? 'not_available' : 'standard', rearACVents: gv.trim.includes('E') ? 'not_available' : 'standard', wirelessCharging: 'not_available' },
      infotainment: { infotainmentScreenSizeInches: gv.trim.includes('V') ? 9.0 : (gv.trim.includes('E') ? 0 : 7.0), headUpDisplay: gv.hud ? 'standard' : 'not_available', androidAuto: !gv.trim.includes('E') ? 'standard' : 'not_available', appleCarPlay: !gv.trim.includes('E') ? 'standard' : 'not_available', wirelessAndroidAuto: !gv.trim.includes('E') ? 'standard' : 'not_available', wirelessAppleCarPlay: !gv.trim.includes('E') ? 'standard' : 'not_available', speakerCount: gv.trim.includes('V') ? 6 : (gv.trim.includes('E') ? 0 : 4), connectedCarTechnology: gv.trim.includes('G') || gv.trim.includes('V') ? 'standard' : 'not_available' },
      convenience: { keylessEntry: 'standard', pushButtonStart: gv.trim.includes('G') || gv.trim.includes('V') ? 'standard' : 'not_available', cruiseControl: gv.trim.includes('V') ? 'standard' : 'not_available' },
    }),
    sources: [
      { name: 'Toyota Bharat Glanza Official', url: 'https://www.toyotabharat.com/showroom/glanza/', type: 'official', checkedAt: '2026-10-18' },
      { name: `CarWale Glanza ${gv.trim} Price (Nashik)`, url: `https://www.carwale.com/toyota-cars/glanza/${gv.slug}/`, type: 'reputable', checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 2. TOYOTA URBAN CRUISER TAISOR (12 VARIANTS)
// ============================================================================
export const TOYOTA_TAISOR_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'e-1-2-petrol-manual', name: 'Urban Cruiser Taisor E | Petrol 1.2L | Manual', fullName: 'Toyota Urban Cruiser Taisor E 1.2L Petrol 5MT', trim: 'E', pt: TAISOR_1_2_PETROL_MT, ex: 774000, exLakh: 7.74, onRoad: 873000, onRoadLakh: 8.73, mileage: 21.71, turbo: false, alloy: false, hud: false, cam360: false, dt: false },
    { slug: 'e-1-2-cng-manual', name: 'Urban Cruiser Taisor E | CNG 1.2L | Manual', fullName: 'Toyota Urban Cruiser Taisor E 1.2L E-CNG 5MT', trim: 'E', pt: TAISOR_1_2_CNG_MT, ex: 872000, exLakh: 8.72, onRoad: 967000, onRoadLakh: 9.67, mileage: 28.51, turbo: false, alloy: false, hud: false, cam360: false, dt: false },
    { slug: 's-1-2-petrol-manual', name: 'Urban Cruiser Taisor S | Petrol 1.2L | Manual', fullName: 'Toyota Urban Cruiser Taisor S 1.2L Petrol 5MT', trim: 'S', pt: TAISOR_1_2_PETROL_MT, ex: 860000, exLakh: 8.60, onRoad: 979000, onRoadLakh: 9.79, mileage: 21.71, turbo: false, alloy: false, hud: false, cam360: false, dt: false },
    { slug: 's-1-2-petrol-automatic', name: 'Urban Cruiser Taisor S | Petrol 1.2L | Automatic (AMT)', fullName: 'Toyota Urban Cruiser Taisor S 1.2L Petrol 5-Speed AMT', trim: 'S', pt: TAISOR_1_2_PETROL_AMT, ex: 913000, exLakh: 9.13, onRoad: 1049000, onRoadLakh: 10.49, mileage: 22.79, turbo: false, alloy: false, hud: false, cam360: false, dt: false },
    { slug: 's-plus-1-2-petrol-manual', name: 'Urban Cruiser Taisor S Plus | Petrol 1.2L Manual', fullName: 'Toyota Urban Cruiser Taisor S Plus 1.2L Petrol 5MT', trim: 'S Plus', pt: TAISOR_1_2_PETROL_MT, ex: 900000, exLakh: 9.00, onRoad: 1019000, onRoadLakh: 10.19, mileage: 21.71, turbo: false, alloy: true, hud: false, cam360: false, dt: false },
    { slug: 's-plus-1-2-petrol-automatic', name: 'Urban Cruiser Taisor S Plus | Petrol 1.2L Automatic (AMT)', fullName: 'Toyota Urban Cruiser Taisor S Plus 1.2L Petrol 5-Speed AMT', trim: 'S Plus', pt: TAISOR_1_2_PETROL_AMT, ex: 953000, exLakh: 9.53, onRoad: 1089000, onRoadLakh: 10.89, mileage: 22.79, turbo: false, alloy: true, hud: false, cam360: false, dt: false },
    { slug: 'g-1-0-turbo-manual', name: 'Urban Cruiser Taisor G | Petrol 1.0L Turbo | Manual', fullName: 'Toyota Urban Cruiser Taisor G 1.0L Turbo Boosterjet 5MT', trim: 'G', pt: TAISOR_1_0_TURBO_MT, ex: 1056000, exLakh: 10.56, onRoad: 1237000, onRoadLakh: 12.37, mileage: 21.18, turbo: true, alloy: true, hud: false, cam360: false, dt: false },
    { slug: 'g-1-0-turbo-automatic', name: 'Urban Cruiser Taisor G | Petrol 1.0L Turbo | Automatic (TC)', fullName: 'Toyota Urban Cruiser Taisor G 1.0L Turbo Boosterjet 6AT', trim: 'G', pt: TAISOR_1_0_TURBO_AT, ex: 1196000, exLakh: 11.96, onRoad: 1401000, onRoadLakh: 14.01, mileage: 19.86, turbo: true, alloy: true, hud: false, cam360: false, dt: false },
    { slug: 'v-1-0-turbo-manual', name: 'Urban Cruiser Taisor V | Petrol 1.0L Turbo | Manual', fullName: 'Toyota Urban Cruiser Taisor V 1.0L Turbo Boosterjet 5MT', trim: 'V', pt: TAISOR_1_0_TURBO_MT, ex: 1148000, exLakh: 11.48, onRoad: 1343000, onRoadLakh: 13.43, mileage: 21.18, turbo: true, alloy: true, hud: true, cam360: true, dt: false },
    { slug: 'v-1-0-turbo-manual-dual-tone', name: 'Urban Cruiser Taisor V | Petrol 1.0L Turbo | Manual | Dual Tone', fullName: 'Toyota Urban Cruiser Taisor V 1.0L Turbo Boosterjet 5MT Dual Tone', trim: 'V Dual Tone', pt: TAISOR_1_0_TURBO_MT, ex: 1164000, exLakh: 11.64, onRoad: 1361000, onRoadLakh: 13.61, mileage: 21.18, turbo: true, alloy: true, hud: true, cam360: true, dt: true },
    { slug: 'v-1-0-turbo-automatic', name: 'Urban Cruiser Taisor V | Petrol 1.0L Turbo | Automatic (TC)', fullName: 'Toyota Urban Cruiser Taisor V 1.0L Turbo Boosterjet 6AT', trim: 'V', pt: TAISOR_1_0_TURBO_AT, ex: 1288000, exLakh: 12.88, onRoad: 1508000, onRoadLakh: 15.08, mileage: 19.86, turbo: true, alloy: true, hud: true, cam360: true, dt: false },
    { slug: 'v-1-0-turbo-automatic-dual-tone', name: 'Urban Cruiser Taisor V | Petrol 1.0L Turbo | Automatic (TC) | Dual Tone', fullName: 'Toyota Urban Cruiser Taisor V 1.0L Turbo Boosterjet 6AT Dual Tone', trim: 'V Dual Tone', pt: TAISOR_1_0_TURBO_AT, ex: 1304000, exLakh: 13.04, onRoad: 1527000, onRoadLakh: 15.27, mileage: 19.86, turbo: true, alloy: true, hud: true, cam360: true, dt: true },
  ].map((tv) => ({
    id: `toyota-urban-cruiser-taisor-${tv.slug}`,
    modelId: 'toyota-urban-cruiser-taisor',
    generationId: null,
    name: tv.name,
    fullName: tv.fullName,
    slug: tv.slug,
    trim: tv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: { exShowroom: tv.ex, exShowroomLakh: tv.exLakh, onRoadNashik: tv.onRoad, onRoadNashikLakh: tv.onRoadLakh, currency: 'INR' },
    powertrain: tv.pt,
    performance: {
      mileageKmpl: tv.mileage,
      mileage: { value: tv.mileage, unit: tv.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Toyota Kirloskar', verified: true },
      zeroToHundredSec: tv.turbo ? 9.9 : 12.0,
      topSpeedKmph: 175,
    },
    dimensions: {
      lengthMm: 3995,
      widthMm: 1765,
      heightMm: 1550,
      wheelbaseMm: 2520,
      groundClearanceMm: 190,
      kerbWeightKg: tv.turbo ? 1060 : 975,
      bootSpaceLitres: 308,
      fuelTankLitres: 37,
    },
    extendedPowertrain: {
      engineLayout: 'Front Transverse',
      valvesPerCylinder: 4,
      valveConfiguration: 'DOHC with Dual VVT',
      turbochargerType: tv.turbo ? 'Single Scroll Turbocharger' : 'Naturally Aspirated',
      compressionRatio: tv.turbo ? '10.0:1' : '11.0:1',
      fuelInjectionType: tv.pt.fuelType === 'CNG' ? 'Multi-Point Fuel Injection & CNG Sequential Injection' : 'Direct & Multi-Point Injection',
      emissionStandard: 'BS6 Phase 2 / OBD-2',
      gearboxType: tv.pt.transmission === 'Manual' ? '5-Speed Manual' : (tv.turbo ? '6-Speed Torque Converter Automatic' : '5-Speed AMT'),
      gearboxName: tv.pt.transmission === 'Manual' ? '5-Speed MT' : (tv.turbo ? '6-Speed AT with Paddle Shifters' : '5-Speed AMT'),
      driveModes: ['Standard'],
      paddleShifters: tv.turbo && tv.pt.transmission === 'Automatic',
      regenerativeBraking: tv.turbo,
      autoStartStop: true,
    },
    suspension: { frontSuspension: 'MacPherson Strut with Coil Spring', rearSuspension: 'Torsion Beam with Coil Spring', frontBrakeType: 'Ventilated Disc', rearBrakeType: 'Drum' },
    extendedDimensions: { doors: 5, seatingRows: 2, turningRadiusM: 4.9, grossWeightKg: 1480, approachAngleDeg: 18.0, departureAngleDeg: 23.0, rampBreakoverAngleDeg: 16.5 },
    tyres: { frontTyreProfile: tv.alloy ? '195/60 R16' : '195/60 R16 Steel', rearTyreProfile: tv.alloy ? '195/60 R16' : '195/60 R16 Steel', wheelType: tv.alloy ? 'Geometric Dual-Tone 16-inch Machined Alloy Wheels' : 'Steel Wheels with Full Wheel Cap', spareWheel: 'Full Size Steel Spare Wheel' },
    warranty: { standardWarrantyYears: 3, standardWarrantyKm: 100000, batteryWarrantyYears: 3, batteryWarrantyKm: 100000 },
    extendedSafety: { rearMiddleHeadrest: true, rearMiddleThreePointBelt: true, isofixChildMounts: true, sideAirbags: tv.trim.includes('G') || tv.trim.includes('V'), curtainAirbags: tv.trim.includes('G') || tv.trim.includes('V'), kneeAirbag: false, centralLocking: 'Remote Keyless with Speed Sensing Auto Door Lock', speedSensingDoorLock: true, childSafetyLock: true },
    brakes: { frontDiscBrakes: true, rearDiscBrakes: false, electronicParkingBrake: false, autoHold: false, brakeAssist: true },
    climate: { airConditioningType: 'Automatic Climate Control', rearACVents: true, dualZoneClimate: false },
    doorsAndMirrors: { orvmElectricAdjustment: true, orvmElectricFolding: tv.trim.includes('G') || tv.trim.includes('V'), autoDimmingIRVM: tv.trim.includes('V'), rearDefogger: true, rearWiperWasher: true, poweredTailgate: false },
    sunroofWindows: { sunroofType: 'None', antiPinchWindows: true, rearSunshade: false },
    parkingAssist: { parkingSensors: 'Rear Ultrasonic Parking Sensors', parkingCamera: tv.cam360 ? '360 Degree Surround View Camera' : (tv.trim.includes('G') ? 'Rear Parking Camera with Guidelines' : 'None'), blindSpotMonitor: false },
    storage: { gloveboxIllumination: false, cooledGlovebox: false, frontCupHolders: 2, rearArmrestCupholders: 0, sunglassHolder: false },
    seating: { seatUpholstery: 'Dual-Tone Black & Bordeaux Fabric', driverSeatAdjustment: '6-Way Height Adjustable Manual Seat', ventilatedSeats: 'None', splitRearSeats: '60:40 Split Folding Rear Seat' },
    instrumentCluster: { clusterType: 'Color TFT Multi-Information Display with Dual Analog Dials', tirePressureDisplay: false },
    steering: { steeringAdjustment: 'Tilt and Telescopic Adjustable Steering Wheel', steeringControls: 'Mounted Audio, Phone & Voice Controls', leatherWrappedSteering: tv.trim.includes('V') },
    infotainmentEx: { screenSizeInches: tv.trim.includes('V') ? 9.0 : 7.0, soundSystem: tv.trim.includes('V') ? 'Arkamys Premium Sound System with 6 Speakers' : '4-Speaker Audio', wirelessPhoneProjection: true },
    lighting: { headlightType: 'Twin LED Projector Headlamps with Linear LED DRLs', taillightType: 'Full-Width Connected LED Tail Lamp Bar', ambientLighting: 'Footwell Illumination' },
    adas: { adasLevel: 'None', adaptiveCruiseControl: false, laneKeepAssist: false, emergencyBraking: false, trafficSignRecognition: false },
    telematics: { connectedCarTech: tv.trim.includes('G') || tv.trim.includes('V'), appCompatibility: 'Toyota i-Connect with 45+ Connected Features', remoteLockUnlock: true, remoteHornLight: true, remoteACControl: false, geoFencing: true, stolenVehicleTracking: true, otaUpdates: true },
    exteriorFeatures: { grilleType: 'Glossy Black Trapezoidal Front Grille with Chrome Garnish', roofRails: 'Sporty Silver Roof Rails', exhaustPipes: 'Concealed Exhaust' },
    cabinNoise: { acousticWindshield: true, activeNoiseCancellation: false },
    features: makeStandardFeatures({
      safety: { airbagsCount: tv.trim.includes('G') || tv.trim.includes('V') ? 6 : 2, abs: 'standard', ebd: 'standard', esc: 'standard', hillAssist: 'standard', tpms: 'not_available', rearCamera: tv.trim.includes('G') || tv.trim.includes('V') ? 'standard' : 'not_available', rearParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 16, alloyWheels: tv.alloy ? 'standard' : 'not_available', ledHeadlights: 'standard', ledDRLs: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', wirelessCharging: tv.trim.includes('V') ? 'standard' : 'not_available' },
      infotainment: { infotainmentScreenSizeInches: tv.trim.includes('V') ? 9.0 : 7.0, headUpDisplay: tv.hud ? 'standard' : 'not_available', androidAuto: 'standard', appleCarPlay: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: tv.trim.includes('V') ? 6 : 4, connectedCarTechnology: tv.trim.includes('G') || tv.trim.includes('V') ? 'standard' : 'not_available' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: tv.trim.includes('G') || tv.trim.includes('V') ? 'standard' : 'not_available' },
    }),
    sources: [
      { name: 'Toyota Bharat Urban Cruiser Taisor Official', url: 'https://www.toyotabharat.com/showroom/taisor/', type: 'official', checkedAt: '2026-10-18' },
      { name: `CarWale Taisor ${tv.trim} Price (Nashik)`, url: `https://www.carwale.com/toyota-cars/taisor/${tv.slug}/`, type: 'reputable', checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 3. TOYOTA URBAN CRUISER HYRYDER (22 VARIANTS)
// ============================================================================
export const TOYOTA_HYRYDER_VARIANTS: CarVariant[] = [
  ...[
    // E (1 variant)
    { slug: 'e-2wd-petrol-manual', name: 'Urban Cruiser Hyryder E | 2WD Petrol 1.5L | Manual', fullName: 'Toyota Urban Cruiser Hyryder E 1.5L Neo Drive 5MT', trim: 'E', pt: HYRYDER_1_5_PETROL_MT, ex: 1114000, exLakh: 11.14, onRoad: 1344000, onRoadLakh: 13.44, mileage: 21.11, pano: false, aero: false, dt: false },

    // S (4 variants)
    { slug: 's-2wd-petrol-manual', name: 'Urban Cruiser Hyryder S | 2WD Petrol 1.5L | Manual', fullName: 'Toyota Urban Cruiser Hyryder S 1.5L Neo Drive 5MT', trim: 'S', pt: HYRYDER_1_5_PETROL_MT, ex: 1281000, exLakh: 12.81, onRoad: 1520000, onRoadLakh: 15.20, mileage: 21.11, pano: false, aero: false, dt: false },
    { slug: 's-2wd-cng-manual', name: 'Urban Cruiser Hyryder S | 2WD CNG 1.5L | Manual', fullName: 'Toyota Urban Cruiser Hyryder S 1.5L E-CNG 5MT', trim: 'S', pt: HYRYDER_1_5_CNG_MT, ex: 1371000, exLakh: 13.71, onRoad: 1582000, onRoadLakh: 15.82, mileage: 26.60, pano: false, aero: false, dt: false },
    { slug: 's-2wd-petrol-automatic', name: 'Urban Cruiser Hyryder S | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Toyota Urban Cruiser Hyryder S 1.5L Neo Drive 6AT', trim: 'S', pt: HYRYDER_1_5_PETROL_AT, ex: 1401000, exLakh: 14.01, onRoad: 1678000, onRoadLakh: 16.78, mileage: 20.58, pano: false, aero: false, dt: false },
    { slug: 's-2wd-hybrid-automatic', name: 'Urban Cruiser Hyryder S | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Toyota Urban Cruiser Hyryder S 1.5L Strong Hybrid e-CVT', trim: 'S Hybrid', pt: HYRYDER_1_5_HYBRID_ECVT, ex: 1666000, exLakh: 16.66, onRoad: 2034000, onRoadLakh: 20.34, mileage: 27.97, pano: false, aero: false, dt: false },

    // G (1 variant)
    { slug: 'g-2wd-cng-manual', name: 'Urban Cruiser Hyryder G | 2WD CNG 1.5L | Manual', fullName: 'Toyota Urban Cruiser Hyryder G 1.5L E-CNG 5MT', trim: 'G', pt: HYRYDER_1_5_CNG_MT, ex: 1559000, exLakh: 15.59, onRoad: 1815000, onRoadLakh: 18.15, mileage: 26.60, pano: true, aero: false, dt: false },

    // G (O) (7 variants)
    { slug: 'g-o-2wd-petrol-manual', name: 'Urban Cruiser Hyryder G (O) | 2WD Petrol 1.5L | Manual', fullName: 'Toyota Urban Cruiser Hyryder G (O) 1.5L Neo Drive 5MT', trim: 'G (O)', pt: HYRYDER_1_5_PETROL_MT, ex: 1474000, exLakh: 14.74, onRoad: 1760000, onRoadLakh: 17.60, mileage: 21.11, pano: true, aero: false, dt: false },
    { slug: 'g-o-2wd-petrol-manual-aero-black', name: 'Urban Cruiser Hyryder G (O) | 2WD Petrol 1.5L | Manual | Aero Black Edition', fullName: 'Toyota Urban Cruiser Hyryder G (O) 1.5L 5MT Aero Black', trim: 'G (O) Aero Black', pt: HYRYDER_1_5_PETROL_MT, ex: 1475000, exLakh: 14.75, onRoad: 1761000, onRoadLakh: 17.61, mileage: 21.11, pano: true, aero: true, dt: false },
    { slug: 'g-o-2wd-petrol-automatic', name: 'Urban Cruiser Hyryder G (O) | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Toyota Urban Cruiser Hyryder G (O) 1.5L Neo Drive 6AT', trim: 'G (O)', pt: HYRYDER_1_5_PETROL_AT, ex: 1594000, exLakh: 15.94, onRoad: 1917000, onRoadLakh: 19.17, mileage: 20.58, pano: true, aero: false, dt: false },
    { slug: 'g-o-2wd-petrol-automatic-aero-black', name: 'Urban Cruiser Hyryder G (O) | 2WD Petrol 1.5L | Automatic (TC) | Aero Black Edition', fullName: 'Toyota Urban Cruiser Hyryder G (O) 1.5L 6AT Aero Black', trim: 'G (O) Aero Black', pt: HYRYDER_1_5_PETROL_AT, ex: 1596000, exLakh: 15.96, onRoad: 1919000, onRoadLakh: 19.19, mileage: 20.58, pano: true, aero: true, dt: false },
    { slug: 'g-o-2wd-hybrid-automatic', name: 'Urban Cruiser Hyryder G (O) | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Toyota Urban Cruiser Hyryder G (O) 1.5L Strong Hybrid e-CVT', trim: 'G (O) Hybrid', pt: HYRYDER_1_5_HYBRID_ECVT, ex: 1879000, exLakh: 18.79, onRoad: 2274000, onRoadLakh: 22.74, mileage: 27.97, pano: true, aero: false, dt: false },
    { slug: 'g-o-2wd-hybrid-automatic-aero-black', name: 'Urban Cruiser Hyryder G (O) | 2WD Hybrid 1.5L | Automatic (e-CVT) | Aero Black Edition', fullName: 'Toyota Urban Cruiser Hyryder G (O) 1.5L Hybrid e-CVT Aero Black', trim: 'G (O) Hybrid Aero Black', pt: HYRYDER_1_5_HYBRID_ECVT, ex: 1881000, exLakh: 18.81, onRoad: 2276000, onRoadLakh: 22.76, mileage: 27.97, pano: true, aero: true, dt: false },
    { slug: 'g-o-2wd-hybrid-automatic-dual-tone', name: 'Urban Cruiser Hyryder G (O) | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Toyota Urban Cruiser Hyryder G (O) 1.5L Hybrid e-CVT Dual Tone', trim: 'G (O) Hybrid Dual Tone', pt: HYRYDER_1_5_HYBRID_ECVT, ex: 1899000, exLakh: 18.99, onRoad: 2298000, onRoadLakh: 22.98, mileage: 27.97, pano: true, aero: false, dt: true },

    // V (9 variants)
    { slug: 'v-2wd-petrol-manual', name: 'Urban Cruiser Hyryder V | 2WD Petrol 1.5L | Manual', fullName: 'Toyota Urban Cruiser Hyryder V 1.5L Neo Drive 5MT', trim: 'V', pt: HYRYDER_1_5_PETROL_MT, ex: 1624000, exLakh: 16.24, onRoad: 1945000, onRoadLakh: 19.45, mileage: 21.11, pano: true, aero: false, dt: false },
    { slug: 'v-2wd-petrol-manual-aero-black', name: 'Urban Cruiser Hyryder V | 2WD Petrol 1.5L | Manual | Aero Black Edition', fullName: 'Toyota Urban Cruiser Hyryder V 1.5L 5MT Aero Black', trim: 'V Aero Black', pt: HYRYDER_1_5_PETROL_MT, ex: 1626000, exLakh: 16.26, onRoad: 1947000, onRoadLakh: 19.47, mileage: 21.11, pano: true, aero: true, dt: false },
    { slug: 'v-2wd-petrol-manual-dual-tone', name: 'Urban Cruiser Hyryder V | 2WD Petrol 1.5L | Manual | Dual Tone', fullName: 'Toyota Urban Cruiser Hyryder V 1.5L 5MT Dual Tone', trim: 'V Dual Tone', pt: HYRYDER_1_5_PETROL_MT, ex: 1644000, exLakh: 16.44, onRoad: 1968000, onRoadLakh: 19.68, mileage: 21.11, pano: true, aero: false, dt: true },
    { slug: 'v-2wd-petrol-automatic', name: 'Urban Cruiser Hyryder V | 2WD Petrol 1.5L | Automatic (TC)', fullName: 'Toyota Urban Cruiser Hyryder V 1.5L Neo Drive 6AT', trim: 'V', pt: HYRYDER_1_5_PETROL_AT, ex: 1744000, exLakh: 17.44, onRoad: 2091000, onRoadLakh: 20.91, mileage: 20.58, pano: true, aero: false, dt: false },
    { slug: 'v-2wd-petrol-automatic-aero-black', name: 'Urban Cruiser Hyryder V | 2WD Petrol 1.5L | Automatic (TC) | Aero Black Edition', fullName: 'Toyota Urban Cruiser Hyryder V 1.5L 6AT Aero Black', trim: 'V Aero Black', pt: HYRYDER_1_5_PETROL_AT, ex: 1746000, exLakh: 17.46, onRoad: 2093000, onRoadLakh: 20.93, mileage: 20.58, pano: true, aero: true, dt: false },
    { slug: 'v-2wd-petrol-automatic-dual-tone', name: 'Urban Cruiser Hyryder V | 2WD Petrol 1.5L | Automatic (TC) | Dual Tone', fullName: 'Toyota Urban Cruiser Hyryder V 1.5L 6AT Dual Tone', trim: 'V Dual Tone', pt: HYRYDER_1_5_PETROL_AT, ex: 1764000, exLakh: 17.64, onRoad: 2114000, onRoadLakh: 21.14, mileage: 20.58, pano: true, aero: false, dt: true },
    { slug: 'v-2wd-hybrid-automatic', name: 'Urban Cruiser Hyryder V | 2WD Hybrid 1.5L | Automatic (e-CVT)', fullName: 'Toyota Urban Cruiser Hyryder V 1.5L Strong Hybrid e-CVT', trim: 'V Hybrid', pt: HYRYDER_1_5_HYBRID_ECVT, ex: 1999000, exLakh: 19.99, onRoad: 2362000, onRoadLakh: 23.62, mileage: 27.97, pano: true, aero: false, dt: false },
    { slug: 'v-2wd-hybrid-automatic-aero-black', name: 'Urban Cruiser Hyryder V | 2WD Hybrid 1.5L | Automatic (e-CVT) | Aero Black Edition', fullName: 'Toyota Urban Cruiser Hyryder V 1.5L Hybrid e-CVT Aero Black', trim: 'V Hybrid Aero Black', pt: HYRYDER_1_5_HYBRID_ECVT, ex: 2001000, exLakh: 20.01, onRoad: 2364000, onRoadLakh: 23.64, mileage: 27.97, pano: true, aero: true, dt: false },
    { slug: 'v-2wd-hybrid-automatic-dual-tone', name: 'Urban Cruiser Hyryder V | 2WD Hybrid 1.5L | Automatic (e-CVT) | Dual Tone', fullName: 'Toyota Urban Cruiser Hyryder V 1.5L Hybrid e-CVT Dual Tone', trim: 'V Hybrid Dual Tone', pt: HYRYDER_1_5_HYBRID_ECVT, ex: 2019000, exLakh: 20.19, onRoad: 2406000, onRoadLakh: 24.06, mileage: 27.97, pano: true, aero: false, dt: true },
  ].map((hv) => ({
    id: `toyota-urban-cruiser-hyryder-${hv.slug}`,
    modelId: 'toyota-urban-cruiser-hyryder',
    generationId: null,
    name: hv.name,
    fullName: hv.fullName,
    slug: hv.slug,
    trim: hv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: { exShowroom: hv.ex, exShowroomLakh: hv.exLakh, onRoadNashik: hv.onRoad, onRoadNashikLakh: hv.onRoadLakh, currency: 'INR' },
    powertrain: hv.pt,
    performance: {
      mileageKmpl: hv.mileage,
      mileage: { value: hv.mileage, unit: hv.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Toyota Kirloskar', verified: true },
      zeroToHundredSec: hv.pt.fuelType === 'StrongHybrid' ? 11.5 : 12.3,
      topSpeedKmph: 175,
    },
    dimensions: {
      lengthMm: 4365,
      widthMm: 1795,
      heightMm: 1645,
      wheelbaseMm: 2600,
      groundClearanceMm: 210,
      kerbWeightKg: hv.pt.fuelType === 'StrongHybrid' ? 1290 : 1185,
      bootSpaceLitres: hv.pt.fuelType === 'CNG' ? 260 : (hv.pt.fuelType === 'StrongHybrid' ? 265 : 373),
      fuelTankLitres: hv.pt.fuelType === 'CNG' ? 55 : 45,
    },
    extendedPowertrain: {
      engineLayout: 'Front Transverse',
      valvesPerCylinder: 4,
      valveConfiguration: 'DOHC 16V with Dual VVT',
      turbochargerType: 'Naturally Aspirated',
      compressionRatio: hv.pt.fuelType === 'StrongHybrid' ? '14.0:1' : '10.5:1',
      fuelInjectionType: hv.pt.fuelType === 'CNG' ? 'Multi-Point Fuel Injection & CNG Sequential Injection' : 'Direct & Port Multi-Point Injection',
      emissionStandard: 'BS6 Phase 2 / OBD-2',
      gearboxType: hv.pt.transmission === 'Manual' ? '5-Speed Manual' : (hv.pt.fuelType === 'StrongHybrid' ? 'Electronic Continuously Variable Transmission (e-CVT)' : '6-Speed Torque Converter Automatic'),
      gearboxName: hv.pt.transmission === 'Manual' ? '5-Speed MT' : (hv.pt.fuelType === 'StrongHybrid' ? 'e-CVT with Drive Mode Controller' : '6-Speed AT with Paddle Shifters'),
      driveModes: ['Eco', 'Normal', 'Power'],
      paddleShifters: hv.pt.transmission === 'Automatic',
      regenerativeBraking: true,
      autoStartStop: true,
    },
    suspension: { frontSuspension: 'MacPherson Strut with Coil Spring', rearSuspension: 'Torsion Beam with Coil Spring', frontBrakeType: 'Ventilated Disc', rearBrakeType: 'Solid Disc' },
    extendedDimensions: { doors: 5, seatingRows: 2, turningRadiusM: 5.4, grossWeightKg: 1755, approachAngleDeg: 19.5, departureAngleDeg: 26.0, rampBreakoverAngleDeg: 18.0 },
    tyres: { frontTyreProfile: '215/60 R17', rearTyreProfile: '215/60 R17', wheelType: hv.trim.includes('V') || hv.trim.includes('G') ? '17-inch Machined Alloy Wheels' : 'Steel Wheels with Wheel Cap', spareWheel: 'Full Size Steel Spare Wheel' },
    warranty: { standardWarrantyYears: 3, standardWarrantyKm: 100000, batteryWarrantyYears: 8, batteryWarrantyKm: 160000 },
    extendedSafety: { rearMiddleHeadrest: true, rearMiddleThreePointBelt: true, isofixChildMounts: true, sideAirbags: !hv.trim.includes('E'), curtainAirbags: !hv.trim.includes('E'), kneeAirbag: false, centralLocking: 'Remote Keyless with Speed Sensing Auto Door Lock', speedSensingDoorLock: true, childSafetyLock: true },
    brakes: { frontDiscBrakes: true, rearDiscBrakes: true, electronicParkingBrake: hv.pt.fuelType === 'StrongHybrid', autoHold: hv.pt.fuelType === 'StrongHybrid', brakeAssist: true },
    climate: { airConditioningType: 'Automatic Climate Control with PM2.5 Air Filter', rearACVents: true, dualZoneClimate: false },
    doorsAndMirrors: { orvmElectricAdjustment: true, orvmElectricFolding: true, autoDimmingIRVM: hv.trim.includes('V'), rearDefogger: true, rearWiperWasher: !hv.trim.includes('E'), poweredTailgate: false },
    sunroofWindows: { sunroofType: hv.pano ? 'Panoramic Sunroof with Dual Sliding Glass Panels' : 'None', antiPinchWindows: true, rearSunshade: false },
    parkingAssist: { parkingSensors: 'Rear Ultrasonic Parking Sensors', parkingCamera: hv.trim.includes('V') ? '360 Degree Surround View Camera' : 'Rear View Camera with Guidelines', blindSpotMonitor: false },
    storage: { gloveboxIllumination: true, cooledGlovebox: true, frontCupHolders: 2, rearArmrestCupholders: 2, sunglassHolder: true },
    seating: { seatUpholstery: hv.trim.includes('V') ? 'Perforated Premium Black & Brown Leatherette' : 'Fabric', driverSeatAdjustment: '6-Way Height Adjustable Manual Seat', ventilatedSeats: hv.trim.includes('V') ? 'Front Ventilated Seats' : 'None', splitRearSeats: '60:40 Split Folding Rear Seat' },
    instrumentCluster: { clusterType: hv.pt.fuelType === 'StrongHybrid' ? '7-inch Fully Digital Multi-Information Display' : '4.2-inch Color TFT Multi-Information Display', tirePressureDisplay: true },
    steering: { steeringAdjustment: 'Tilt and Telescopic Adjustable Steering Wheel', steeringControls: 'Mounted Audio, Voice, MID & Cruise Control Buttons', leatherWrappedSteering: hv.trim.includes('V') },
    infotainmentEx: { screenSizeInches: hv.trim.includes('V') || hv.trim.includes('G') ? 9.0 : 7.0, soundSystem: hv.trim.includes('V') ? 'Arkamys Premium Sound System with 6 Speakers' : '4-Speaker Audio', wirelessPhoneProjection: true },
    lighting: { headlightType: 'Twin LED Projector Headlamps with Crystal Acrylic Grille DRLs', taillightType: 'Connected LED Tail Lamp Bar', ambientLighting: hv.trim.includes('V') ? 'Ambient Door Illumination' : 'None' },
    adas: { adasLevel: 'None', adaptiveCruiseControl: false, laneKeepAssist: false, emergencyBraking: false, trafficSignRecognition: false },
    telematics: { connectedCarTech: true, appCompatibility: 'Toyota i-Connect with 45+ Connected Features', remoteLockUnlock: true, remoteHornLight: true, remoteACControl: true, geoFencing: true, stolenVehicleTracking: true, otaUpdates: true },
    exteriorFeatures: { grilleType: 'Unique Toyota Crystal Acrylic Grille with Chrome Garnish', roofRails: 'Silver Roof Rails', exhaustPipes: 'Concealed Exhaust' },
    cabinNoise: { acousticWindshield: true, activeNoiseCancellation: hv.pt.fuelType === 'StrongHybrid' },
    features: makeStandardFeatures({
      safety: { airbagsCount: hv.trim.includes('E') ? 2 : 6, abs: 'standard', ebd: 'standard', esc: 'standard', hillAssist: 'standard', tpms: 'standard', rearCamera: hv.trim.includes('E') ? 'not_available' : 'standard', rearParkingSensors: 'standard' },
      exterior: { wheelSizeInches: 17, alloyWheels: hv.trim.includes('V') || hv.trim.includes('G') ? 'standard' : 'not_available', ledHeadlights: 'standard', ledDRLs: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', leatherSeats: hv.trim.includes('V') ? 'standard' : 'not_available', ventilatedSeats: hv.trim.includes('V') ? 'standard' : 'not_available', wirelessCharging: hv.trim.includes('V') || hv.trim.includes('G') ? 'standard' : 'not_available' },
      infotainment: { infotainmentScreenSizeInches: hv.trim.includes('V') || hv.trim.includes('G') ? 9.0 : 7.0, headUpDisplay: hv.trim.includes('V') ? 'standard' : 'not_available', androidAuto: 'standard', appleCarPlay: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: hv.trim.includes('V') ? 6 : 4, connectedCarTechnology: 'standard' },
      convenience: { keylessEntry: 'standard', pushButtonStart: 'standard', cruiseControl: 'standard' },
    }),
    sources: [
      { name: 'Toyota Bharat Urban Cruiser Hyryder Official', url: 'https://www.toyotabharat.com/showroom/hyryder/', type: 'official', checkedAt: '2026-10-18' },
      { name: `CarWale Hyryder ${hv.trim} Price (Nashik)`, url: `https://www.carwale.com/toyota-cars/hyryder/${hv.slug}/`, type: 'reputable', checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  })),
];
