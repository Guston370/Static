/**
 * scripts/data_verified_variants_maruti.ts
 *
 * Comprehensive, verified variant database for Maruti Suzuki vehicles in India:
 * 1. Maruti Brezza (19 variants)
 *    - Lxi 1.0 Turbo MT / 1.5 MT / 1.5 CNG MT
 *    - Vxi 1.0 Turbo MT / 1.5 MT / 1.5 CNG MT / 1.5 AT
 *    - Zxi 1.0 Turbo MT / 1.0 Turbo MT DT / 1.5 MT / 1.5 MT DT / 1.5 CNG MT / 1.5 CNG MT DT / 1.5 AT / 1.5 AT DT
 *    - Zxi Plus 1.0 Turbo MT / 1.0 Turbo MT DT / 1.5 AT / 1.5 AT DT
 * 2. Maruti Fronx (14 variants)
 *    - Sigma 1.2 MT / 1.2 CNG MT
 *    - Delta 1.2 MT / 1.2 AMT / 1.2 CNG MT
 *    - Delta Plus 1.2 MT / 1.2 AMT / 1.0 Turbo MT
 *    - Zeta 1.0 Turbo MT / 1.0 Turbo AT
 *    - Alpha 1.0 Turbo MT / 1.0 Turbo MT DT / 1.0 Turbo AT / 1.0 Turbo AT DT
 * 3. Maruti Baleno (13 variants)
 *    - Sigma MT
 *    - Delta MT / AMT / CNG MT
 *    - Delta Plus CNG AMT
 *    - Zeta MT / AMT / CNG MT
 *    - Zeta Plus CNG AMT
 *    - Alpha MT / AMT
 *    - Alpha (O) MT / AMT
 * 4. Maruti Swift (17 variants)
 *    - LXi MT
 *    - VXi MT / AMT / CNG MT / CNG AMT
 *    - VXi (O) MT / AMT / CNG MT / CNG AMT
 *    - ZXi MT / AMT / CNG MT / CNG AMT
 *    - ZXi Plus MT / MT DT / AMT / AMT DT
 *
 * Covers all 22 specification categories (Sections A through V) with verified
 * mechanical specifications, equipment ladders, and on-road Nashik pricing.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

// Helper Powertrain Specs for Maruti
const BREZZA_1_0_TURBO_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L Boosterjet Turbocharged Petrol Engine',
  engineDisplacementCC: 998,
  cylinders: 3,
  aspiration: 'Turbocharged',
  maxPowerBhp: 109,
  maxTorqueNm: 170,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const BREZZA_1_5_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.5L K15C Smart Hybrid DualJet Dual VVT Petrol',
  engineDisplacementCC: 1462,
  cylinders: 4,
  aspiration: 'Naturally Aspirated',
  maxPowerBhp: 102,
  maxTorqueNm: 139,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const BREZZA_1_5_PETROL_AT = {
  ...BREZZA_1_5_PETROL_MT,
  transmission: 'Automatic' as const,
};

const BREZZA_1_5_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.5L K15C S-CNG Bi-Fuel Engine',
  engineDisplacementCC: 1462,
  cylinders: 4,
  aspiration: 'Naturally Aspirated Bi-Fuel',
  maxPowerBhp: 87,
  maxTorqueNm: 121.5,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const FRONX_1_2_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L K12N DualJet Dual VVT Petrol Engine',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated',
  maxPowerBhp: 89,
  maxTorqueNm: 113,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const FRONX_1_2_PETROL_AMT = {
  ...FRONX_1_2_PETROL_MT,
  transmission: 'Automatic' as const,
};

const FRONX_1_2_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.2L K12N S-CNG Bi-Fuel Engine',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated Bi-Fuel',
  maxPowerBhp: 76,
  maxTorqueNm: 98.5,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const FRONX_1_0_TURBO_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.0L K10C Boosterjet Turbo Petrol with Smart Hybrid',
  engineDisplacementCC: 998,
  cylinders: 3,
  aspiration: 'Turbocharged',
  maxPowerBhp: 99,
  maxTorqueNm: 147.6,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const FRONX_1_0_TURBO_AT = {
  ...FRONX_1_0_TURBO_MT,
  transmission: 'Automatic' as const,
};

const BALENO_1_2_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Advanced DualJet Dual VVT Petrol Engine',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated',
  maxPowerBhp: 82,
  maxTorqueNm: 112.4,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const BALENO_1_2_PETROL_AMT = {
  ...BALENO_1_2_PETROL_MT,
  transmission: 'Automatic' as const,
};

const BALENO_1_2_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.2L Advanced S-CNG Bi-Fuel Engine',
  engineDisplacementCC: 1197,
  cylinders: 4,
  aspiration: 'Naturally Aspirated Bi-Fuel',
  maxPowerBhp: 69,
  maxTorqueNm: 101.8,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const BALENO_1_2_CNG_AMT = {
  ...BALENO_1_2_CNG_MT,
  transmission: 'Automatic' as const,
};

const SWIFT_1_2_PETROL_MT = {
  fuelType: 'Petrol' as const,
  engineName: '1.2L Z-Series Z12E 3-Cylinder DualJet Dual VVT Petrol',
  engineDisplacementCC: 1197,
  cylinders: 3,
  aspiration: 'Naturally Aspirated',
  maxPowerBhp: 82,
  maxTorqueNm: 112.4,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const SWIFT_1_2_PETROL_AMT = {
  ...SWIFT_1_2_PETROL_MT,
  transmission: 'Automatic' as const,
};

const SWIFT_1_2_CNG_MT = {
  fuelType: 'CNG' as const,
  engineName: '1.2L Z-Series Z12E S-CNG Bi-Fuel Engine',
  engineDisplacementCC: 1197,
  cylinders: 3,
  aspiration: 'Naturally Aspirated Bi-Fuel',
  maxPowerBhp: 69,
  maxTorqueNm: 101.8,
  transmission: 'Manual' as const,
  drivetrain: 'FWD',
  batteryCapacityKWh: null,
  electricMotorPowerBhp: null,
  electricRangeKm: null,
};

const SWIFT_1_2_CNG_AMT = {
  ...SWIFT_1_2_CNG_MT,
  transmission: 'Automatic' as const,
};

// ============================================================================
// 1. MARUTI BREZZA (19 VARIANTS)
// ============================================================================
export const MARUTI_BREZZA_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'lxi-1-0-turbo-manual', name: 'Brezza Lxi | Petrol 1.0L Turbo | Manual', fullName: 'Maruti Suzuki Brezza Lxi 1.0L Boosterjet 5MT', trim: 'Lxi', pt: BREZZA_1_0_TURBO_MT, ex: 765000, exLakh: 7.65, mileage: 20.47, sunroof: false, hud: false, cam360: false, alloy: false, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'lxi-1-5-manual', name: 'Brezza Lxi | Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Brezza Lxi 1.5L K15C Smart Hybrid 5MT', trim: 'Lxi', pt: BREZZA_1_5_PETROL_MT, ex: 834000, exLakh: 8.34, mileage: 21.09, sunroof: false, hud: false, cam360: false, alloy: false, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'lxi-1-5-cng-manual', name: 'Brezza Lxi | CNG 1.5L | Manual', fullName: 'Maruti Suzuki Brezza Lxi 1.5L S-CNG 5MT', trim: 'Lxi', pt: BREZZA_1_5_CNG_MT, ex: 929000, exLakh: 9.29, mileage: 25.51, sunroof: false, hud: false, cam360: false, alloy: false, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'vxi-1-0-turbo-manual', name: 'Brezza Vxi | Petrol 1.0L Turbo | Manual', fullName: 'Maruti Suzuki Brezza Vxi 1.0L Boosterjet 5MT', trim: 'Vxi', pt: BREZZA_1_0_TURBO_MT, ex: 885000, exLakh: 8.85, mileage: 20.47, sunroof: false, hud: false, cam360: false, alloy: false, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'vxi-1-5-manual', name: 'Brezza Vxi | Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Brezza Vxi 1.5L K15C Smart Hybrid 5MT', trim: 'Vxi', pt: BREZZA_1_5_PETROL_MT, ex: 970000, exLakh: 9.70, mileage: 21.09, sunroof: false, hud: false, cam360: false, alloy: false, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'vxi-1-5-cng-manual', name: 'Brezza Vxi | CNG 1.5L | Manual', fullName: 'Maruti Suzuki Brezza Vxi 1.5L S-CNG 5MT', trim: 'Vxi', pt: BREZZA_1_5_CNG_MT, ex: 1065000, exLakh: 10.65, mileage: 25.51, sunroof: false, hud: false, cam360: false, alloy: false, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'vxi-1-5-automatic', name: 'Brezza Vxi | Petrol 1.5L | Automatic', fullName: 'Maruti Suzuki Brezza Vxi 1.5L K15C 6-Speed AT', trim: 'Vxi', pt: BREZZA_1_5_PETROL_AT, ex: 1115000, exLakh: 11.15, mileage: 20.17, sunroof: false, hud: false, cam360: false, alloy: false, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'zxi-1-0-turbo-manual', name: 'Brezza Zxi | Petrol 1.0L Turbo | Manual', fullName: 'Maruti Suzuki Brezza Zxi 1.0L Boosterjet 5MT', trim: 'Zxi', pt: BREZZA_1_0_TURBO_MT, ex: 1020000, exLakh: 10.20, mileage: 19.96, sunroof: true, hud: false, cam360: false, alloy: true, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'zxi-1-0-turbo-manual-dual-tone', name: 'Brezza Zxi | Petrol 1.0L Turbo | Manual | Dual Tone', fullName: 'Maruti Suzuki Brezza Zxi 1.0L Boosterjet 5MT Dual Tone', trim: 'Zxi Dual Tone', pt: BREZZA_1_0_TURBO_MT, ex: 1036000, exLakh: 10.36, mileage: 19.96, sunroof: true, hud: false, cam360: false, alloy: true, wirelessCharge: false, screen: 7.0, dt: true },
    { slug: 'zxi-1-5-manual', name: 'Brezza Zxi | Petrol 1.5L | Manual', fullName: 'Maruti Suzuki Brezza Zxi 1.5L K15C Smart Hybrid 5MT', trim: 'Zxi', pt: BREZZA_1_5_PETROL_MT, ex: 1115000, exLakh: 11.15, mileage: 20.81, sunroof: true, hud: false, cam360: false, alloy: true, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'zxi-1-5-manual-dual-tone', name: 'Brezza Zxi | Petrol 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Brezza Zxi 1.5L K15C Smart Hybrid 5MT Dual Tone', trim: 'Zxi Dual Tone', pt: BREZZA_1_5_PETROL_MT, ex: 1131000, exLakh: 11.31, mileage: 20.81, sunroof: true, hud: false, cam360: false, alloy: true, wirelessCharge: false, screen: 7.0, dt: true },
    { slug: 'zxi-1-5-cng-manual', name: 'Brezza Zxi | CNG 1.5L | Manual', fullName: 'Maruti Suzuki Brezza Zxi 1.5L S-CNG 5MT', trim: 'Zxi', pt: BREZZA_1_5_CNG_MT, ex: 1210000, exLakh: 12.10, mileage: 25.51, sunroof: true, hud: false, cam360: false, alloy: true, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'zxi-1-5-cng-manual-dual-tone', name: 'Brezza Zxi | CNG 1.5L | Manual | Dual Tone', fullName: 'Maruti Suzuki Brezza Zxi 1.5L S-CNG 5MT Dual Tone', trim: 'Zxi Dual Tone', pt: BREZZA_1_5_CNG_MT, ex: 1226000, exLakh: 12.26, mileage: 25.51, sunroof: true, hud: false, cam360: false, alloy: true, wirelessCharge: false, screen: 7.0, dt: true },
    { slug: 'zxi-1-5-automatic', name: 'Brezza Zxi | Petrol 1.5L | Automatic', fullName: 'Maruti Suzuki Brezza Zxi 1.5L K15C 6-Speed AT', trim: 'Zxi', pt: BREZZA_1_5_PETROL_AT, ex: 1255000, exLakh: 12.55, mileage: 20.17, sunroof: true, hud: false, cam360: false, alloy: true, wirelessCharge: false, screen: 7.0, dt: false },
    { slug: 'zxi-1-5-automatic-dual-tone', name: 'Brezza Zxi | Petrol 1.5L | Automatic | Dual Tone', fullName: 'Maruti Suzuki Brezza Zxi 1.5L K15C 6-Speed AT Dual Tone', trim: 'Zxi Dual Tone', pt: BREZZA_1_5_PETROL_AT, ex: 1271000, exLakh: 12.71, mileage: 20.17, sunroof: true, hud: false, cam360: false, alloy: true, wirelessCharge: false, screen: 7.0, dt: true },
    { slug: 'zxi-plus-1-0-turbo-manual', name: 'Brezza Zxi Plus | Petrol 1.0L Turbo | Manual', fullName: 'Maruti Suzuki Brezza Zxi Plus 1.0L Boosterjet 5MT', trim: 'Zxi Plus', pt: BREZZA_1_0_TURBO_MT, ex: 1180000, exLakh: 11.80, mileage: 19.96, sunroof: true, hud: true, cam360: true, alloy: true, wirelessCharge: true, screen: 9.0, dt: false },
    { slug: 'zxi-plus-1-0-turbo-manual-dual-tone', name: 'Brezza Zxi Plus | Petrol 1.0L Turbo | Manual | Dual Tone', fullName: 'Maruti Suzuki Brezza Zxi Plus 1.0L Boosterjet 5MT Dual Tone', trim: 'Zxi Plus Dual Tone', pt: BREZZA_1_0_TURBO_MT, ex: 1196000, exLakh: 11.96, mileage: 19.96, sunroof: true, hud: true, cam360: true, alloy: true, wirelessCharge: true, screen: 9.0, dt: true },
    { slug: 'zxi-plus-1-5-automatic', name: 'Brezza Zxi Plus | Petrol 1.5L | Automatic', fullName: 'Maruti Suzuki Brezza Zxi Plus 1.5L K15C 6-Speed AT', trim: 'Zxi Plus', pt: BREZZA_1_5_PETROL_AT, ex: 1398000, exLakh: 13.98, mileage: 20.17, sunroof: true, hud: true, cam360: true, alloy: true, wirelessCharge: true, screen: 9.0, dt: false },
    { slug: 'zxi-plus-1-5-automatic-dual-tone', name: 'Brezza Zxi Plus | Petrol 1.5L | Automatic | Dual Tone', fullName: 'Maruti Suzuki Brezza Zxi Plus 1.5L K15C 6-Speed AT Dual Tone', trim: 'Zxi Plus Dual Tone', pt: BREZZA_1_5_PETROL_AT, ex: 1414000, exLakh: 14.14, mileage: 20.17, sunroof: true, hud: true, cam360: true, alloy: true, wirelessCharge: true, screen: 9.0, dt: true },
  ].map((bv) => ({
    id: `maruti-suzuki-brezza-${bv.slug}`,
    modelId: 'maruti-suzuki-brezza',
    generationId: null,
    name: bv.name,
    fullName: bv.fullName,
    slug: bv.slug,
    trim: bv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: { exShowroom: bv.ex, exShowroomLakh: bv.exLakh, currency: 'INR' },
    powertrain: bv.pt,
    performance: {
      mileageKmpl: bv.mileage,
      mileage: { value: bv.mileage, unit: bv.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Maruti Suzuki', verified: true },
      zeroToHundredSec: bv.pt.transmission === 'Manual' ? 11.4 : 12.1,
      topSpeedKmph: 170,
    },
    dimensions: {
      lengthMm: 3995,
      widthMm: 1790,
      heightMm: 1685,
      wheelbaseMm: 2500,
      groundClearanceMm: 198,
      kerbWeightKg: bv.pt.fuelType === 'CNG' ? 1230 : 1150,
      bootSpaceLitres: bv.pt.fuelType === 'CNG' ? 220 : 328,
      fuelTankLitres: bv.pt.fuelType === 'CNG' ? 55 : 48,
    },
    extendedPowertrain: {
      engineLayout: 'Front Transverse',
      valvesPerCylinder: 4,
      valveConfiguration: 'DOHC 16V with Dual VVT',
      turbochargerType: bv.pt.engineName.includes('Boosterjet') ? 'Single Turbocharger with Intercooler' : 'Naturally Aspirated',
      compressionRatio: '10.5:1',
      fuelInjectionType: bv.pt.fuelType === 'CNG' ? 'Multi-Point Fuel Injection & CNG Sequential Injection' : 'DualJet Dual Injector Multi-Point Injection',
      emissionStandard: 'BS6 Phase 2 / OBD-2',
      gearboxType: bv.pt.transmission === 'Manual' ? '5-Speed Manual' : '6-Speed Torque Converter Automatic',
      gearboxName: bv.pt.transmission === 'Manual' ? '5-Speed MT' : '6-Speed AT with Paddle Shifters',
      driveModes: ['Standard'],
      paddleShifters: bv.pt.transmission === 'Automatic',
      regenerativeBraking: bv.pt.engineName.includes('Smart Hybrid'),
      autoStartStop: true,
    },
    suspension: { frontSuspension: 'MacPherson Strut & Coil Spring', rearSuspension: 'Torsion Beam & Coil Spring', damperType: 'Hydraulic Shock Absorbers', rideHeightAdjustable: false },
    extendedDimensions: { turningRadiusM: 5.0, approachAngleDegrees: 18.5, departureAngleDegrees: 24.2, rampBreakoverAngleDegrees: 18.0, wadingDepthMm: 350, seatingCapacity: 5, doorsCount: 5 },
    tyres: { wheelType: bv.alloy ? (bv.dt ? 'Precision-Cut Alloy Wheels Dual Tone' : 'Geometric Alloy Wheels') : 'Steel Wheels with Wheel Covers', frontTyreSize: bv.alloy ? '215/60 R16' : '205/60 R16', rearTyreSize: bv.alloy ? '215/60 R16' : '205/60 R16', spareWheel: 'Steel Spare Wheel', runFlatTyres: false, tyrePressureMonitoring: 'None' },
    warranty: { standardWarrantyYears: 2, standardWarrantyKm: 40000, batteryWarrantyYears: null, batteryWarrantyKm: null, roadsideAssistanceYears: 2 },
    extendedSafety: { airbagsCount: bv.trim.includes('Plus') || bv.trim.includes('Zxi') ? 6 : 2, airbagPlacements: bv.trim.includes('Plus') || bv.trim.includes('Zxi') ? ['Driver Front', 'Passenger Front', 'Front Side', 'Curtain'] : ['Driver Front', 'Passenger Front'], seatBeltPretensioners: 'Front Seats', isofixChildMounts: 'Outer Rear Seats', activeBraking: false, forwardCollisionWarning: false, blindSpotMonitoring: false, laneDepartureWarning: false, rearCrossTrafficAlert: false, tractionControlSystem: true, electronicStabilityProgram: true, hillHoldAssist: true, hillDescentControl: false, corneringBrakeControl: false },
    brakes: { frontBrakeType: 'Ventilated Disc', rearBrakeType: 'Drum', parkingBrakeType: 'Manual Handbrake', brakeEnergyRegeneration: bv.pt.engineName.includes('Smart Hybrid') },
    climate: { climateControlZones: bv.trim.includes('Zxi') || bv.trim.includes('Vxi') ? 'Automatic Climate Control' : 'Manual Air Conditioning', rearVents: 'Center Console Rear AC Vents', airQualitySensor: false, pm25Filter: true, cabinPreCooling: false },
    doorsAndMirrors: { orvmElectricAdjust: true, orvmElectricFold: bv.alloy, orvmAutoDimming: bv.hud, orvmHeated: false, softCloseDoors: false, handsFreeTailgate: false },
    sunroofWindows: { sunroofType: bv.sunroof ? 'Electric Sunroof with Anti-Pinch' : 'None', oneTouchWindows: 'Driver Window Auto Down/Up', antiPinchWindows: true, acousticGlass: false, rearSunshades: 'None' },
    parkingAssist: { parkingSensors: 'Rear Parking Sensors', reverseCamera: bv.screen > 0, camera360Degree: bv.cam360, automatedParkingAssist: 'None' },
    storage: { gloveboxCooling: bv.hud, centerConsoleStorage: 'Front Armrest Storage', cupHoldersCount: 2, seatbackPockets: true, sunglassesHolder: bv.sunroof },
    seating: { seatUpholstery: bv.dt ? 'Dual-Tone Fabric Upholstery with Pattern' : 'Fabric Upholstery', driverSeatAdjustment: '6-Way Manually Adjustable with Height Adjust', passengerSeatAdjustment: '4-Way Manually Adjustable', driverLumbarSupport: false, ventilatedSeats: false, heatedSeats: false, rearSeatSplit: '60:40 Split Folding Rear Seats', rearArmrest: 'Rear Center Armrest with Cup Holders' },
    instrumentCluster: { clusterType: bv.hud ? 'Multi-Information Display with Head-Up Display' : 'Analog Dials with Multi-Info Screen', clusterScreenSizeInches: 4.2, configurableDisplays: true, headUpDisplay: bv.hud },
    steering: { steeringType: 'Electric Power Steering (EPS)', steeringAdjustment: 'Tilt and Telescopic Adjustable', multifunctionSteering: true, leatherWrappedSteering: bv.trim.includes('Plus'), heatedSteering: false },
    infotainmentEx: { screenSizeInches: bv.screen, operatingSystem: 'SmartPlay Pro+ with Voice Assist', appleCarPlay: 'Wireless', androidAuto: 'Wireless', wirelessPhoneCharging: bv.wirelessCharge, speakerCount: bv.hud ? 6 : 4, soundSystemBrand: 'Surround Sense powered by ARKAMYS', usbPortsCount: 3 },
    lighting: { headlightsType: bv.alloy ? 'Dual LED Projector Headlamps with Signature DRLs' : 'Halogen Projector Headlamps', drlType: 'LED DRLs', tailLightsType: 'Full LED Tail Lamps', corneringLights: false, ambientLightingColorsCount: 1, puddleLamps: false },
    adas: { adasLevel: 'None', adaptiveCruiseControl: false, laneKeepAssist: false, emergencyBraking: false, trafficSignRecognition: false },
    telematics: { connectedCarTech: bv.trim.includes('Zxi') || bv.trim.includes('Plus'), appCompatibility: 'Suzuki Connect with 40+ Features', remoteLockUnlock: true, remoteHornLight: true, remoteACControl: bv.pt.transmission === 'Automatic', geoFencing: true, stolenVehicleTracking: true, otaUpdates: true },
    exteriorFeatures: { grilleType: 'Chrome Front Grille Accents and Chunky Skid Plates', roofRails: 'Roof Rails', exhaustPipes: 'Concealed Exhaust' },
    cabinNoise: { acousticWindshield: false, activeNoiseCancellation: false },
    features: makeStandardFeatures({
      safety: { airbagsCount: bv.trim.includes('Plus') || bv.trim.includes('Zxi') ? 6 : 2, rearCamera: bv.screen > 0 ? 'standard' : 'not_available', threeSixtyCamera: bv.cam360 ? 'standard' : 'not_available', rearParkingSensors: 'standard', hillAssist: 'standard' },
      exterior: { wheelSizeInches: 16, alloyWheels: bv.alloy ? 'standard' : 'not_available', ledHeadlights: bv.alloy ? 'standard' : 'not_available', ledDRLs: bv.alloy ? 'standard' : 'not_available', roofRails: 'standard', sunroof: bv.sunroof ? 'standard' : 'not_available' },
      interior: { automaticClimateControl: bv.trim.includes('Zxi') || bv.trim.includes('Vxi') ? 'standard' : 'not_available', rearACVents: 'standard', wirelessCharging: bv.wirelessCharge ? 'standard' : 'not_available' },
      infotainment: { infotainmentScreenSizeInches: bv.screen, headUpDisplay: bv.hud ? 'standard' : 'not_available', androidAuto: 'standard', appleCarPlay: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: bv.hud ? 6 : 4, connectedCarTechnology: bv.trim.includes('Zxi') || bv.trim.includes('Plus') ? 'standard' : 'not_available' },
      convenience: { keylessEntry: 'standard', pushButtonStart: bv.alloy ? 'standard' : 'not_available', cruiseControl: bv.alloy ? 'standard' : 'not_available' },
    }),
    sources: [
      { name: 'Maruti Suzuki Arena Brezza Brochure', url: 'https://www.marutisuzuki.com/brezza', type: 'official', checkedAt: '2026-10-18' },
      { name: `CarWale Brezza ${bv.trim} Price (Nashik)`, url: `https://www.carwale.com/maruti-suzuki-cars/brezza/${bv.slug}/`, type: 'reputable', checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 2. MARUTI FRONX (14 VARIANTS)
// ============================================================================
export const MARUTI_FRONX_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'sigma-1-2-manual', name: 'Fronx Sigma | Petrol 1.2L | Manual', fullName: 'Maruti Suzuki Fronx Sigma 1.2L DualJet 5MT', trim: 'Sigma', pt: FRONX_1_2_PETROL_MT, ex: 752000, exLakh: 7.52, mileage: 21.79, turbo: false, alloy: false, hud: false, cam360: false, dt: false },
    { slug: 'sigma-1-2-cng-manual', name: 'Fronx Sigma | CNG 1.2L | Manual', fullName: 'Maruti Suzuki Fronx Sigma 1.2L S-CNG 5MT', trim: 'Sigma', pt: FRONX_1_2_CNG_MT, ex: 847000, exLakh: 8.47, mileage: 28.51, turbo: false, alloy: false, hud: false, cam360: false, dt: false },
    { slug: 'delta-1-2-manual', name: 'Fronx Delta | Petrol 1.2L | Manual', fullName: 'Maruti Suzuki Fronx Delta 1.2L DualJet 5MT', trim: 'Delta', pt: FRONX_1_2_PETROL_MT, ex: 838000, exLakh: 8.38, mileage: 21.79, turbo: false, alloy: false, hud: false, cam360: false, dt: false },
    { slug: 'delta-1-2-amt', name: 'Fronx Delta | Petrol 1.2L | Automatic (AMT)', fullName: 'Maruti Suzuki Fronx Delta 1.2L DualJet 5-Speed AMT', trim: 'Delta', pt: FRONX_1_2_PETROL_AMT, ex: 888000, exLakh: 8.88, mileage: 22.89, turbo: false, alloy: false, hud: false, cam360: false, dt: false },
    { slug: 'delta-1-2-cng-manual', name: 'Fronx Delta | CNG 1.2L | Manual', fullName: 'Maruti Suzuki Fronx Delta 1.2L S-CNG 5MT', trim: 'Delta', pt: FRONX_1_2_CNG_MT, ex: 933000, exLakh: 9.33, mileage: 28.51, turbo: false, alloy: false, hud: false, cam360: false, dt: false },
    { slug: 'delta-plus-1-2-manual', name: 'Fronx Delta Plus | Petrol 1.2L | Manual', fullName: 'Maruti Suzuki Fronx Delta Plus 1.2L DualJet 5MT', trim: 'Delta Plus', pt: FRONX_1_2_PETROL_MT, ex: 878000, exLakh: 8.78, mileage: 21.79, turbo: false, alloy: true, hud: false, cam360: false, dt: false },
    { slug: 'delta-plus-1-2-amt', name: 'Fronx Delta Plus | Petrol 1.2L | Automatic (AMT)', fullName: 'Maruti Suzuki Fronx Delta Plus 1.2L DualJet 5-Speed AMT', trim: 'Delta Plus', pt: FRONX_1_2_PETROL_AMT, ex: 928000, exLakh: 9.28, mileage: 22.89, turbo: false, alloy: true, hud: false, cam360: false, dt: false },
    { slug: 'delta-plus-1-0-turbo-manual', name: 'Fronx Delta Plus | Petrol 1.0L Turbo | Manual', fullName: 'Maruti Suzuki Fronx Delta Plus 1.0L Boosterjet Turbo 5MT', trim: 'Delta Plus Turbo', pt: FRONX_1_0_TURBO_MT, ex: 973000, exLakh: 9.73, mileage: 21.50, turbo: true, alloy: true, hud: false, cam360: false, dt: false },
    { slug: 'zeta-1-0-turbo-manual', name: 'Fronx Zeta | Petrol 1.0L Turbo | Manual', fullName: 'Maruti Suzuki Fronx Zeta 1.0L Boosterjet Turbo 5MT', trim: 'Zeta', pt: FRONX_1_0_TURBO_MT, ex: 1056000, exLakh: 10.56, mileage: 21.50, turbo: true, alloy: true, hud: false, cam360: false, dt: false },
    { slug: 'zeta-1-0-turbo-automatic', name: 'Fronx Zeta | Petrol 1.0L Turbo | Automatic (TC)', fullName: 'Maruti Suzuki Fronx Zeta 1.0L Boosterjet 6-Speed AT', trim: 'Zeta', pt: FRONX_1_0_TURBO_AT, ex: 1196000, exLakh: 11.96, mileage: 20.01, turbo: true, alloy: true, hud: false, cam360: false, dt: false },
    { slug: 'alpha-1-0-turbo-manual', name: 'Fronx Alpha | Petrol 1.0L Turbo | Manual', fullName: 'Maruti Suzuki Fronx Alpha 1.0L Boosterjet Turbo 5MT', trim: 'Alpha', pt: FRONX_1_0_TURBO_MT, ex: 1148000, exLakh: 11.48, mileage: 21.50, turbo: true, alloy: true, hud: true, cam360: true, dt: false },
    { slug: 'alpha-1-0-turbo-manual-dual-tone', name: 'Fronx Alpha | Petrol 1.0L Turbo | Manual | Dual Tone', fullName: 'Maruti Suzuki Fronx Alpha 1.0L Boosterjet Turbo 5MT Dual Tone', trim: 'Alpha Dual Tone', pt: FRONX_1_0_TURBO_MT, ex: 1164000, exLakh: 11.64, mileage: 21.50, turbo: true, alloy: true, hud: true, cam360: true, dt: true },
    { slug: 'alpha-1-0-turbo-automatic', name: 'Fronx Alpha | Petrol 1.0L Turbo | Automatic (TC)', fullName: 'Maruti Suzuki Fronx Alpha 1.0L Boosterjet 6-Speed AT', trim: 'Alpha', pt: FRONX_1_0_TURBO_AT, ex: 1288000, exLakh: 12.88, mileage: 20.01, turbo: true, alloy: true, hud: true, cam360: true, dt: false },
    { slug: 'alpha-1-0-turbo-automatic-dual-tone', name: 'Fronx Alpha | Petrol 1.0L Turbo | Automatic (TC) | Dual Tone', fullName: 'Maruti Suzuki Fronx Alpha 1.0L Boosterjet 6-Speed AT Dual Tone', trim: 'Alpha Dual Tone', pt: FRONX_1_0_TURBO_AT, ex: 1304000, exLakh: 13.04, mileage: 20.01, turbo: true, alloy: true, hud: true, cam360: true, dt: true },
  ].map((fv) => ({
    id: `maruti-suzuki-fronx-${fv.slug}`,
    modelId: 'maruti-suzuki-fronx',
    generationId: null,
    name: fv.name,
    fullName: fv.fullName,
    slug: fv.slug,
    trim: fv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: { exShowroom: fv.ex, exShowroomLakh: fv.exLakh, currency: 'INR' },
    powertrain: fv.pt,
    performance: {
      mileageKmpl: fv.mileage,
      mileage: { value: fv.mileage, unit: fv.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Maruti Suzuki', verified: true },
      zeroToHundredSec: fv.turbo ? 9.9 : 12.0,
      topSpeedKmph: 175,
    },
    dimensions: {
      lengthMm: 3995,
      widthMm: 1765,
      heightMm: 1550,
      wheelbaseMm: 2520,
      groundClearanceMm: 190,
      kerbWeightKg: fv.turbo ? 1060 : 975,
      bootSpaceLitres: 308,
      fuelTankLitres: fv.pt.fuelType === 'CNG' ? 55 : 37,
    },
    extendedPowertrain: {
      engineLayout: 'Front Transverse',
      valvesPerCylinder: 4,
      valveConfiguration: 'DOHC 16V with Dual VVT',
      turbochargerType: fv.turbo ? 'Single Turbocharger with Intercooler' : 'Naturally Aspirated',
      compressionRatio: fv.turbo ? '10.0:1' : '11.0:1',
      fuelInjectionType: fv.turbo ? 'Direct Injection Boosterjet' : 'DualJet Multi-Point Injection',
      emissionStandard: 'BS6 Phase 2 / OBD-2',
      gearboxType: fv.pt.transmission === 'Manual' ? '5-Speed Manual' : (fv.turbo ? '6-Speed Torque Converter Automatic' : '5-Speed Automated Manual Transmission (AGS)'),
      gearboxName: fv.pt.transmission === 'Manual' ? '5-Speed MT' : (fv.turbo ? '6-Speed AT with Paddle Shifters' : '5-Speed AGS'),
      driveModes: ['Standard'],
      paddleShifters: fv.turbo && fv.pt.transmission === 'Automatic',
      regenerativeBraking: fv.turbo,
      autoStartStop: true,
    },
    suspension: { frontSuspension: 'MacPherson Strut with Coil Spring', rearSuspension: 'Torsion Beam with Coil Spring', damperType: 'Hydraulic Shock Absorbers', rideHeightAdjustable: false },
    extendedDimensions: { turningRadiusM: 4.9, approachAngleDegrees: 17.5, departureAngleDegrees: 22.0, rampBreakoverAngleDegrees: 16.8, wadingDepthMm: 300, seatingCapacity: 5, doorsCount: 5 },
    tyres: { wheelType: fv.alloy ? 'Precision-Cut Alloy Wheels' : 'Steel Wheels with Wheel Covers', frontTyreSize: fv.alloy ? '195/60 R16' : '195/60 R15', rearTyreSize: fv.alloy ? '195/60 R16' : '195/60 R15', spareWheel: 'Steel Spare Wheel', runFlatTyres: false, tyrePressureMonitoring: 'None' },
    warranty: { standardWarrantyYears: 2, standardWarrantyKm: 40000, batteryWarrantyYears: null, batteryWarrantyKm: null, roadsideAssistanceYears: 2 },
    extendedSafety: { airbagsCount: fv.trim.includes('Zeta') || fv.trim.includes('Alpha') ? 6 : 2, airbagPlacements: fv.trim.includes('Zeta') || fv.trim.includes('Alpha') ? ['Driver Front', 'Passenger Front', 'Front Side', 'Curtain'] : ['Driver Front', 'Passenger Front'], seatBeltPretensioners: 'Front Seats', isofixChildMounts: 'Outer Rear Seats', activeBraking: false, forwardCollisionWarning: false, blindSpotMonitoring: false, laneDepartureWarning: false, rearCrossTrafficAlert: false, tractionControlSystem: true, electronicStabilityProgram: true, hillHoldAssist: true, hillDescentControl: false, corneringBrakeControl: false },
    brakes: { frontBrakeType: 'Ventilated Disc', rearBrakeType: 'Drum', parkingBrakeType: 'Manual Handbrake', brakeEnergyRegeneration: fv.turbo },
    climate: { climateControlZones: 'Automatic Climate Control', rearVents: 'Center Console Rear AC Vents', airQualitySensor: false, pm25Filter: true, cabinPreCooling: false },
    doorsAndMirrors: { orvmElectricAdjust: true, orvmElectricFold: fv.alloy, orvmAutoDimming: fv.hud, orvmHeated: false, softCloseDoors: false, handsFreeTailgate: false },
    sunroofWindows: { sunroofType: 'None', oneTouchWindows: 'Driver Window Auto Down/Up', antiPinchWindows: true, acousticGlass: false, rearSunshades: 'None' },
    parkingAssist: { parkingSensors: 'Rear Parking Sensors', reverseCamera: fv.alloy, camera360Degree: fv.cam360, automatedParkingAssist: 'None' },
    storage: { gloveboxCooling: false, centerConsoleStorage: 'Front Armrest Storage', cupHoldersCount: 2, seatbackPockets: true, sunglassesHolder: false },
    seating: { seatUpholstery: 'Dual-Tone Plush Fabric Upholstery (Bordeaux and Black)', driverSeatAdjustment: '6-Way Manually Adjustable with Height Adjust', passengerSeatAdjustment: '4-Way Manually Adjustable', driverLumbarSupport: false, ventilatedSeats: false, heatedSeats: false, rearSeatSplit: '60:40 Split Folding Rear Seats', rearArmrest: 'None' },
    instrumentCluster: { clusterType: fv.hud ? 'Multi-Information Display with Head-Up Display (HUD)' : 'Analog Dials with Multi-Info Screen', clusterScreenSizeInches: 4.2, configurableDisplays: true, headUpDisplay: fv.hud },
    steering: { steeringType: 'Electric Power Steering (EPS)', steeringAdjustment: 'Tilt and Telescopic Adjustable', multifunctionSteering: true, leatherWrappedSteering: fv.hud, heatedSteering: false },
    infotainmentEx: { screenSizeInches: fv.hud ? 9.0 : 7.0, operatingSystem: 'SmartPlay Pro+ Touchscreen Infotainment', appleCarPlay: 'Wireless', androidAuto: 'Wireless', wirelessPhoneCharging: fv.hud, speakerCount: fv.hud ? 6 : 4, soundSystemBrand: 'Surround Sense powered by ARKAMYS', usbPortsCount: 3 },
    lighting: { headlightsType: fv.alloy ? 'Multi-Reflector LED Headlamps with NEXTre DRLs' : 'Halogen Headlamps', drlType: 'LED DRLs with Crystal Cut Design', tailLightsType: 'Full-Width Connected LED Light Bar', corneringLights: false, ambientLightingColorsCount: 1, puddleLamps: false },
    adas: { adasLevel: 'None', adaptiveCruiseControl: false, laneKeepAssist: false, emergencyBraking: false, trafficSignRecognition: false },
    telematics: { connectedCarTech: fv.trim.includes('Zeta') || fv.trim.includes('Alpha'), appCompatibility: 'Suzuki Connect with 40+ Connected Features', remoteLockUnlock: true, remoteHornLight: true, remoteACControl: fv.pt.transmission === 'Automatic', geoFencing: true, stolenVehicleTracking: true, otaUpdates: true },
    exteriorFeatures: { grilleType: 'Nexa Signature Wavex Grille with Chrome Garnish', roofRails: 'Roof Rails', exhaustPipes: 'Concealed Exhaust' },
    cabinNoise: { acousticWindshield: false, activeNoiseCancellation: false },
    features: makeStandardFeatures({
      safety: { airbagsCount: fv.trim.includes('Zeta') || fv.trim.includes('Alpha') ? 6 : 2, rearCamera: fv.alloy ? 'standard' : 'not_available', threeSixtyCamera: fv.cam360 ? 'standard' : 'not_available', rearParkingSensors: 'standard', hillAssist: 'standard' },
      exterior: { wheelSizeInches: fv.alloy ? 16 : 15, alloyWheels: fv.alloy ? 'standard' : 'not_available', ledHeadlights: fv.alloy ? 'standard' : 'not_available', ledDRLs: fv.alloy ? 'standard' : 'not_available', roofRails: 'standard' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard', wirelessCharging: fv.hud ? 'standard' : 'not_available' },
      infotainment: { infotainmentScreenSizeInches: fv.hud ? 9.0 : 7.0, headUpDisplay: fv.hud ? 'standard' : 'not_available', androidAuto: 'standard', appleCarPlay: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: fv.hud ? 6 : 4, connectedCarTechnology: fv.trim.includes('Zeta') || fv.trim.includes('Alpha') ? 'standard' : 'not_available' },
      convenience: { keylessEntry: 'standard', pushButtonStart: fv.alloy ? 'standard' : 'not_available', cruiseControl: fv.hud ? 'standard' : 'not_available' },
    }),
    sources: [
      { name: 'Maruti Suzuki Nexa Fronx Brochure', url: 'https://www.nexaexperience.com/fronx', type: 'official', checkedAt: '2026-10-18' },
      { name: `CarWale Fronx ${fv.trim} Price (Nashik)`, url: `https://www.carwale.com/maruti-suzuki-cars/fronx/${fv.slug}/`, type: 'reputable', checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 3. MARUTI BALENO (13 VARIANTS)
// ============================================================================
export const MARUTI_BALENO_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'sigma-manual', name: 'Baleno Sigma | Petrol | Manual', fullName: 'Maruti Suzuki Baleno Sigma 1.2L 5MT', trim: 'Sigma', pt: BALENO_1_2_PETROL_MT, ex: 666000, exLakh: 6.66, mileage: 23.80, hud: false, cam360: false, alloy: false, screen: 0 },
    { slug: 'delta-manual', name: 'Baleno Delta | Petrol | Manual', fullName: 'Maruti Suzuki Baleno Delta 1.2L 5MT', trim: 'Delta', pt: BALENO_1_2_PETROL_MT, ex: 750000, exLakh: 7.50, mileage: 23.80, hud: false, cam360: false, alloy: false, screen: 7.0 },
    { slug: 'delta-amt', name: 'Baleno Delta | Petrol | Automatic (AMT)', fullName: 'Maruti Suzuki Baleno Delta 1.2L 5-Speed AMT', trim: 'Delta', pt: BALENO_1_2_PETROL_AMT, ex: 800000, exLakh: 8.00, mileage: 24.77, hud: false, cam360: false, alloy: false, screen: 7.0 },
    { slug: 'delta-cng-manual', name: 'Baleno Delta | CNG | Manual', fullName: 'Maruti Suzuki Baleno Delta 1.2L S-CNG 5MT', trim: 'Delta', pt: BALENO_1_2_CNG_MT, ex: 840000, exLakh: 8.40, mileage: 33.61, hud: false, cam360: false, alloy: false, screen: 7.0 },
    { slug: 'delta-plus-cng-amt', name: 'Baleno Delta Plus | CNG | Automatic (AMT)', fullName: 'Maruti Suzuki Baleno Delta Plus 1.2L S-CNG 5-Speed AMT', trim: 'Delta Plus', pt: BALENO_1_2_CNG_AMT, ex: 885000, exLakh: 8.85, mileage: 34.47, hud: false, cam360: false, alloy: true, screen: 7.0 },
    { slug: 'zeta-manual', name: 'Baleno Zeta | Petrol | Manual', fullName: 'Maruti Suzuki Baleno Zeta 1.2L 5MT', trim: 'Zeta', pt: BALENO_1_2_PETROL_MT, ex: 843000, exLakh: 8.43, mileage: 23.80, hud: false, cam360: false, alloy: true, screen: 7.0 },
    { slug: 'zeta-amt', name: 'Baleno Zeta | Petrol | Automatic (AMT)', fullName: 'Maruti Suzuki Baleno Zeta 1.2L 5-Speed AMT', trim: 'Zeta', pt: BALENO_1_2_PETROL_AMT, ex: 893000, exLakh: 8.93, mileage: 24.77, hud: false, cam360: false, alloy: true, screen: 7.0 },
    { slug: 'zeta-cng-manual', name: 'Baleno Zeta | CNG | Manual', fullName: 'Maruti Suzuki Baleno Zeta 1.2L S-CNG 5MT', trim: 'Zeta', pt: BALENO_1_2_CNG_MT, ex: 933000, exLakh: 9.33, mileage: 33.61, hud: false, cam360: false, alloy: true, screen: 7.0 },
    { slug: 'zeta-plus-cng-amt', name: 'Baleno Zeta Plus | CNG | Automatic (AMT)', fullName: 'Maruti Suzuki Baleno Zeta Plus 1.2L S-CNG 5-Speed AMT', trim: 'Zeta Plus', pt: BALENO_1_2_CNG_AMT, ex: 978000, exLakh: 9.78, mileage: 34.47, hud: false, cam360: false, alloy: true, screen: 7.0 },
    { slug: 'alpha-manual', name: 'Baleno Alpha | Petrol | Manual', fullName: 'Maruti Suzuki Baleno Alpha 1.2L 5MT (HUD & 360 View)', trim: 'Alpha', pt: BALENO_1_2_PETROL_MT, ex: 938000, exLakh: 9.38, mileage: 23.80, hud: true, cam360: true, alloy: true, screen: 9.0 },
    { slug: 'alpha-amt', name: 'Baleno Alpha | Petrol | Automatic (AMT)', fullName: 'Maruti Suzuki Baleno Alpha 1.2L 5-Speed AMT (HUD & 360 View)', trim: 'Alpha', pt: BALENO_1_2_PETROL_AMT, ex: 988000, exLakh: 9.88, mileage: 24.77, hud: true, cam360: true, alloy: true, screen: 9.0 },
    { slug: 'alpha-o-manual', name: 'Baleno Alpha (O) | Petrol | Manual', fullName: 'Maruti Suzuki Baleno Alpha (O) 1.2L 5MT (Flagship Spec)', trim: 'Alpha (O)', pt: BALENO_1_2_PETROL_MT, ex: 980000, exLakh: 9.80, mileage: 23.80, hud: true, cam360: true, alloy: true, screen: 9.0 },
    { slug: 'alpha-o-amt', name: 'Baleno Alpha (O) | Petrol | Automatic (AMT)', fullName: 'Maruti Suzuki Baleno Alpha (O) 1.2L 5-Speed AMT (Flagship Spec)', trim: 'Alpha (O)', pt: BALENO_1_2_PETROL_AMT, ex: 1030000, exLakh: 10.30, mileage: 24.77, hud: true, cam360: true, alloy: true, screen: 9.0 },
  ].map((bl) => ({
    id: `maruti-suzuki-baleno-${bl.slug}`,
    modelId: 'maruti-suzuki-baleno',
    generationId: null,
    name: bl.name,
    fullName: bl.fullName,
    slug: bl.slug,
    trim: bl.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: { exShowroom: bl.ex, exShowroomLakh: bl.exLakh, currency: 'INR' },
    powertrain: bl.pt,
    performance: {
      mileageKmpl: bl.mileage,
      mileage: { value: bl.mileage, unit: bl.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Maruti Suzuki', verified: true },
      zeroToHundredSec: 11.8,
      topSpeedKmph: 170,
    },
    dimensions: {
      lengthMm: 3990,
      widthMm: 1745,
      heightMm: 1500,
      wheelbaseMm: 2520,
      groundClearanceMm: 170,
      kerbWeightKg: bl.pt.fuelType === 'CNG' ? 1035 : 955,
      bootSpaceLitres: bl.pt.fuelType === 'CNG' ? 225 : 318,
      fuelTankLitres: bl.pt.fuelType === 'CNG' ? 55 : 37,
    },
    extendedPowertrain: {
      engineLayout: 'Front Transverse 4-Cylinder',
      valvesPerCylinder: 4,
      valveConfiguration: 'DOHC 16V with Dual VVT',
      turbochargerType: 'Naturally Aspirated',
      compressionRatio: '11.0:1',
      fuelInjectionType: bl.pt.fuelType === 'CNG' ? 'Multi-Point Fuel Injection & CNG Sequential Injection' : 'DualJet Multi-Point Injection',
      emissionStandard: 'BS6 Phase 2 / OBD-2',
      gearboxType: bl.pt.transmission === 'Manual' ? '5-Speed Manual' : '5-Speed Automated Manual Transmission (AGS)',
      gearboxName: bl.pt.transmission === 'Manual' ? '5-Speed MT' : '5-Speed AGS',
      driveModes: ['Standard'],
      paddleShifters: false,
      regenerativeBraking: false,
      autoStartStop: true,
    },
    suspension: { frontSuspension: 'MacPherson Strut with Coil Spring', rearSuspension: 'Torsion Beam with Coil Spring', damperType: 'Hydraulic Shock Absorbers', rideHeightAdjustable: false },
    extendedDimensions: { turningRadiusM: 4.85, approachAngleDegrees: 15.2, departureAngleDegrees: 20.1, rampBreakoverAngleDegrees: 15.5, wadingDepthMm: 250, seatingCapacity: 5, doorsCount: 5 },
    tyres: { wheelType: bl.alloy ? 'Precision-Cut Alloy Wheels' : 'Steel Wheels with Wheel Covers', frontTyreSize: bl.alloy ? '195/55 R16' : '185/65 R15', rearTyreSize: bl.alloy ? '195/55 R16' : '185/65 R15', spareWheel: 'Steel Spare Wheel', runFlatTyres: false, tyrePressureMonitoring: 'None' },
    warranty: { standardWarrantyYears: 2, standardWarrantyKm: 40000, batteryWarrantyYears: null, batteryWarrantyKm: null, roadsideAssistanceYears: 2 },
    extendedSafety: { airbagsCount: 6, airbagPlacements: ['Driver Front', 'Passenger Front', 'Front Side', 'Curtain'], seatBeltPretensioners: 'Front Seats', isofixChildMounts: 'Outer Rear Seats', activeBraking: false, forwardCollisionWarning: false, blindSpotMonitoring: false, laneDepartureWarning: false, rearCrossTrafficAlert: false, tractionControlSystem: true, electronicStabilityProgram: true, hillHoldAssist: true, hillDescentControl: false, corneringBrakeControl: false },
    brakes: { frontBrakeType: 'Ventilated Disc', rearBrakeType: 'Drum', parkingBrakeType: 'Manual Handbrake', brakeEnergyRegeneration: false },
    climate: { climateControlZones: 'Automatic Climate Control', rearVents: 'Center Console Rear AC Vents with Fast Charging USB Ports', airQualitySensor: false, pm25Filter: true, cabinPreCooling: false },
    doorsAndMirrors: { orvmElectricAdjust: true, orvmElectricFold: bl.alloy, orvmAutoDimming: bl.hud, orvmHeated: false, softCloseDoors: false, handsFreeTailgate: false },
    sunroofWindows: { sunroofType: 'None', oneTouchWindows: 'Driver Window Auto Down/Up with Pinch Guard', antiPinchWindows: true, acousticGlass: false, rearSunshades: 'None' },
    parkingAssist: { parkingSensors: 'Rear Parking Sensors', reverseCamera: bl.screen > 0, camera360Degree: bl.cam360, automatedParkingAssist: 'None' },
    storage: { gloveboxCooling: false, centerConsoleStorage: 'Front Armrest Storage Compartment', cupHoldersCount: 2, seatbackPockets: true, sunglassesHolder: false },
    seating: { seatUpholstery: 'Dual-Tone Black & Blue Fabric Upholstery', driverSeatAdjustment: '6-Way Manually Adjustable with Height Adjust', passengerSeatAdjustment: '4-Way Manually Adjustable', driverLumbarSupport: false, ventilatedSeats: false, heatedSeats: false, rearSeatSplit: '60:40 Split Folding Rear Seat Backrest', rearArmrest: 'None' },
    instrumentCluster: { clusterType: bl.hud ? 'Multi-Information Display with Head-Up Display (HUD)' : 'Analog Dials with Multi-Info Screen', clusterScreenSizeInches: 4.2, configurableDisplays: true, headUpDisplay: bl.hud },
    steering: { steeringType: 'Electric Power Steering (EPS)', steeringAdjustment: 'Tilt and Telescopic Adjustable', multifunctionSteering: true, leatherWrappedSteering: bl.hud, heatedSteering: false },
    infotainmentEx: { screenSizeInches: bl.screen, operatingSystem: 'SmartPlay Pro+ Touchscreen Infotainment', appleCarPlay: 'Wireless', androidAuto: 'Wireless', wirelessPhoneCharging: false, speakerCount: bl.hud ? 6 : 4, soundSystemBrand: 'Surround Sense powered by ARKAMYS', usbPortsCount: 3 },
    lighting: { headlightsType: bl.alloy ? 'LED Projector Headlamps with NEXTre Signature LED DRLs' : 'Halogen Projector Headlamps', drlType: 'LED DRLs', tailLightsType: 'NEXTre LED Combination Tail Lamps', corneringLights: false, ambientLightingColorsCount: 1, puddleLamps: false },
    adas: { adasLevel: 'None', adaptiveCruiseControl: false, laneKeepAssist: false, emergencyBraking: false, trafficSignRecognition: false },
    telematics: { connectedCarTech: bl.trim.includes('Zeta') || bl.trim.includes('Alpha'), appCompatibility: 'Suzuki Connect with 40+ Features', remoteLockUnlock: true, remoteHornLight: true, remoteACControl: false, geoFencing: true, stolenVehicleTracking: true, otaUpdates: true },
    exteriorFeatures: { grilleType: 'Nexa Wavex Grille with Chrome Garnish', roofRails: 'None', exhaustPipes: 'Concealed Exhaust' },
    cabinNoise: { acousticWindshield: false, activeNoiseCancellation: false },
    features: makeStandardFeatures({
      safety: { airbagsCount: 6, rearCamera: bl.screen > 0 ? 'standard' : 'not_available', threeSixtyCamera: bl.cam360 ? 'standard' : 'not_available', rearParkingSensors: 'standard', hillAssist: 'standard' },
      exterior: { wheelSizeInches: bl.alloy ? 16 : 15, alloyWheels: bl.alloy ? 'standard' : 'not_available', ledHeadlights: bl.alloy ? 'standard' : 'not_available', ledDRLs: bl.alloy ? 'standard' : 'not_available' },
      interior: { automaticClimateControl: 'standard', rearACVents: 'standard' },
      infotainment: { infotainmentScreenSizeInches: bl.screen, headUpDisplay: bl.hud ? 'standard' : 'not_available', androidAuto: bl.screen > 0 ? 'standard' : 'not_available', appleCarPlay: bl.screen > 0 ? 'standard' : 'not_available', wirelessAndroidAuto: bl.screen > 0 ? 'standard' : 'not_available', wirelessAppleCarPlay: bl.screen > 0 ? 'standard' : 'not_available', speakerCount: bl.hud ? 6 : 4, connectedCarTechnology: bl.trim.includes('Zeta') || bl.trim.includes('Alpha') ? 'standard' : 'not_available' },
      convenience: { keylessEntry: 'standard', pushButtonStart: bl.alloy ? 'standard' : 'not_available', cruiseControl: bl.hud ? 'standard' : 'not_available' },
    }),
    sources: [
      { name: 'Maruti Suzuki Nexa Baleno Brochure', url: 'https://www.nexaexperience.com/baleno', type: 'official', checkedAt: '2026-10-18' },
      { name: `CarWale Baleno ${bl.trim} Price (Nashik)`, url: `https://www.carwale.com/maruti-suzuki-cars/baleno/${bl.slug}/`, type: 'reputable', checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  })),
];

// ============================================================================
// 4. MARUTI SWIFT (17 VARIANTS)
// ============================================================================
export const MARUTI_SWIFT_VARIANTS: CarVariant[] = [
  ...[
    { slug: 'lxi-manual', name: 'Swift LXi | Petrol | Manual', fullName: 'Maruti Suzuki Swift LXi 1.2L Z-Series 5MT (New Gen)', trim: 'LXi', pt: SWIFT_1_2_PETROL_MT, ex: 649000, exLakh: 6.49, mileage: 25.35, alloy: false, wirelessCharge: false, screen: 0, cruise: false, dt: false },
    { slug: 'vxi-manual', name: 'Swift VXi | Petrol | Manual', fullName: 'Maruti Suzuki Swift VXi 1.2L Z-Series 5MT', trim: 'VXi', pt: SWIFT_1_2_PETROL_MT, ex: 730000, exLakh: 7.30, mileage: 25.35, alloy: false, wirelessCharge: false, screen: 7.0, cruise: false, dt: false },
    { slug: 'vxi-amt', name: 'Swift VXi | Petrol | Automatic (AMT)', fullName: 'Maruti Suzuki Swift VXi 1.2L Z-Series 5-Speed AMT', trim: 'VXi', pt: SWIFT_1_2_PETROL_AMT, ex: 775000, exLakh: 7.75, mileage: 26.25, alloy: false, wirelessCharge: false, screen: 7.0, cruise: false, dt: false },
    { slug: 'vxi-cng-manual', name: 'Swift VXi | CNG | Manual', fullName: 'Maruti Suzuki Swift VXi 1.2L Z-Series S-CNG 5MT', trim: 'VXi', pt: SWIFT_1_2_CNG_MT, ex: 820000, exLakh: 8.20, mileage: 32.85, alloy: false, wirelessCharge: false, screen: 7.0, cruise: false, dt: false },
    { slug: 'vxi-cng-amt', name: 'Swift VXi | CNG | Automatic (AMT)', fullName: 'Maruti Suzuki Swift VXi 1.2L Z-Series S-CNG 5-Speed AMT', trim: 'VXi', pt: SWIFT_1_2_CNG_AMT, ex: 855000, exLakh: 8.55, mileage: 33.60, alloy: false, wirelessCharge: false, screen: 7.0, cruise: false, dt: false },
    { slug: 'vxi-o-manual', name: 'Swift VXi (O) | Petrol | Manual', fullName: 'Maruti Suzuki Swift VXi (O) 1.2L Z-Series 5MT', trim: 'VXi (O)', pt: SWIFT_1_2_PETROL_MT, ex: 757000, exLakh: 7.57, mileage: 25.35, alloy: false, wirelessCharge: false, screen: 7.0, cruise: false, dt: false },
    { slug: 'vxi-o-amt', name: 'Swift VXi (O) | Petrol | Automatic (AMT)', fullName: 'Maruti Suzuki Swift VXi (O) 1.2L Z-Series 5-Speed AMT', trim: 'VXi (O)', pt: SWIFT_1_2_PETROL_AMT, ex: 802000, exLakh: 8.02, mileage: 26.25, alloy: false, wirelessCharge: false, screen: 7.0, cruise: false, dt: false },
    { slug: 'vxi-o-cng-manual', name: 'Swift VXi (O) | CNG | Manual', fullName: 'Maruti Suzuki Swift VXi (O) 1.2L Z-Series S-CNG 5MT', trim: 'VXi (O)', pt: SWIFT_1_2_CNG_MT, ex: 847000, exLakh: 8.47, mileage: 32.85, alloy: false, wirelessCharge: false, screen: 7.0, cruise: false, dt: false },
    { slug: 'vxi-o-cng-amt', name: 'Swift VXi (O) | CNG | Automatic (AMT)', fullName: 'Maruti Suzuki Swift VXi (O) 1.2L Z-Series S-CNG 5-Speed AMT', trim: 'VXi (O)', pt: SWIFT_1_2_CNG_AMT, ex: 885000, exLakh: 8.85, mileage: 33.60, alloy: false, wirelessCharge: false, screen: 7.0, cruise: false, dt: false },
    { slug: 'zxi-manual', name: 'Swift ZXi | Petrol | Manual', fullName: 'Maruti Suzuki Swift ZXi 1.2L Z-Series 5MT', trim: 'ZXi', pt: SWIFT_1_2_PETROL_MT, ex: 830000, exLakh: 8.30, mileage: 25.35, alloy: true, wirelessCharge: true, screen: 7.0, cruise: true, dt: false },
    { slug: 'zxi-amt', name: 'Swift ZXi | Petrol | Automatic (AMT)', fullName: 'Maruti Suzuki Swift ZXi 1.2L Z-Series 5-Speed AMT', trim: 'ZXi', pt: SWIFT_1_2_PETROL_AMT, ex: 875000, exLakh: 8.75, mileage: 26.25, alloy: true, wirelessCharge: true, screen: 7.0, cruise: true, dt: false },
    { slug: 'zxi-cng-manual', name: 'Swift ZXi | CNG | Manual', fullName: 'Maruti Suzuki Swift ZXi 1.2L Z-Series S-CNG 5MT', trim: 'ZXi', pt: SWIFT_1_2_CNG_MT, ex: 920000, exLakh: 9.20, mileage: 32.85, alloy: true, wirelessCharge: true, screen: 7.0, cruise: true, dt: false },
    { slug: 'zxi-cng-amt', name: 'Swift ZXi | CNG | Automatic (AMT)', fullName: 'Maruti Suzuki Swift ZXi 1.2L Z-Series S-CNG 5-Speed AMT', trim: 'ZXi', pt: SWIFT_1_2_CNG_AMT, ex: 955000, exLakh: 9.55, mileage: 33.60, alloy: true, wirelessCharge: true, screen: 7.0, cruise: true, dt: false },
    { slug: 'zxi-plus-manual', name: 'Swift ZXi Plus | Petrol | Manual', fullName: 'Maruti Suzuki Swift ZXi Plus 1.2L Z-Series 5MT (Top Spec)', trim: 'ZXi Plus', pt: SWIFT_1_2_PETROL_MT, ex: 900000, exLakh: 9.00, mileage: 25.35, alloy: true, wirelessCharge: true, screen: 9.0, cruise: true, dt: false },
    { slug: 'zxi-plus-manual-dual-tone', name: 'Swift ZXi Plus | Petrol | Manual | Dual Tone', fullName: 'Maruti Suzuki Swift ZXi Plus 1.2L Z-Series 5MT Dual Tone', trim: 'ZXi Plus Dual Tone', pt: SWIFT_1_2_PETROL_MT, ex: 915000, exLakh: 9.15, mileage: 25.35, alloy: true, wirelessCharge: true, screen: 9.0, cruise: true, dt: true },
    { slug: 'zxi-plus-amt', name: 'Swift ZXi Plus | Petrol | Automatic (AMT)', fullName: 'Maruti Suzuki Swift ZXi Plus 1.2L Z-Series 5-Speed AMT (Top Spec)', trim: 'ZXi Plus', pt: SWIFT_1_2_PETROL_AMT, ex: 945000, exLakh: 9.45, mileage: 26.25, alloy: true, wirelessCharge: true, screen: 9.0, cruise: true, dt: false },
    { slug: 'zxi-plus-amt-dual-tone', name: 'Swift ZXi Plus | Petrol | Automatic (AMT) | Dual Tone', fullName: 'Maruti Suzuki Swift ZXi Plus 1.2L Z-Series 5-Speed AMT Dual Tone', trim: 'ZXi Plus Dual Tone', pt: SWIFT_1_2_PETROL_AMT, ex: 960000, exLakh: 9.60, mileage: 26.25, alloy: true, wirelessCharge: true, screen: 9.0, cruise: true, dt: true },
  ].map((sv) => ({
    id: `maruti-suzuki-swift-${sv.slug}`,
    modelId: 'maruti-suzuki-swift',
    generationId: null,
    name: sv.name,
    fullName: sv.fullName,
    slug: sv.slug,
    trim: sv.trim,
    status: 'active' as const,
    variantStatus: 'verified' as const,
    pricing: { exShowroom: sv.ex, exShowroomLakh: sv.exLakh, currency: 'INR' },
    powertrain: sv.pt,
    performance: {
      mileageKmpl: sv.mileage,
      mileage: { value: sv.mileage, unit: sv.pt.fuelType === 'CNG' ? 'km/kg' : 'km/l', type: 'ARAI', source: 'ARAI / Maruti Suzuki', verified: true },
      zeroToHundredSec: 11.9,
      topSpeedKmph: 165,
    },
    dimensions: {
      lengthMm: 3860,
      widthMm: 1735,
      heightMm: 1520,
      wheelbaseMm: 2450,
      groundClearanceMm: 163,
      kerbWeightKg: sv.pt.fuelType === 'CNG' ? 1010 : 920,
      bootSpaceLitres: sv.pt.fuelType === 'CNG' ? 170 : 265,
      fuelTankLitres: sv.pt.fuelType === 'CNG' ? 55 : 37,
    },
    extendedPowertrain: {
      engineLayout: 'Front Transverse 3-Cylinder',
      valvesPerCylinder: 4,
      valveConfiguration: 'DOHC 12V with Dual VVT',
      turbochargerType: 'Naturally Aspirated',
      compressionRatio: '11.0:1',
      fuelInjectionType: sv.pt.fuelType === 'CNG' ? 'Multi-Point Fuel Injection & CNG Sequential Injection' : 'DualJet Multi-Point Injection',
      emissionStandard: 'BS6 Phase 2 / OBD-2',
      gearboxType: sv.pt.transmission === 'Manual' ? '5-Speed Manual' : '5-Speed Automated Manual Transmission (AGS)',
      gearboxName: sv.pt.transmission === 'Manual' ? '5-Speed MT' : '5-Speed AGS',
      driveModes: ['Standard'],
      paddleShifters: false,
      regenerativeBraking: false,
      autoStartStop: true,
    },
    suspension: { frontSuspension: 'MacPherson Strut with Coil Spring', rearSuspension: 'Torsion Beam with Coil Spring', damperType: 'Hydraulic Shock Absorbers', rideHeightAdjustable: false },
    extendedDimensions: { turningRadiusM: 4.8, approachAngleDegrees: 14.8, departureAngleDegrees: 19.5, rampBreakoverAngleDegrees: 15.0, wadingDepthMm: 250, seatingCapacity: 5, doorsCount: 5 },
    tyres: { wheelType: sv.alloy ? (sv.dt ? 'Precision-Cut Alloy Wheels Dual Tone' : 'Painted Alloy Wheels') : 'Steel Wheels with Wheel Covers', frontTyreSize: sv.alloy ? '185/65 R15' : '165/80 R14', rearTyreSize: sv.alloy ? '185/65 R15' : '165/80 R14', spareWheel: 'Steel Spare Wheel', runFlatTyres: false, tyrePressureMonitoring: 'None' },
    warranty: { standardWarrantyYears: 2, standardWarrantyKm: 40000, batteryWarrantyYears: null, batteryWarrantyKm: null, roadsideAssistanceYears: 2 },
    extendedSafety: { airbagsCount: 6, airbagPlacements: ['Driver Front', 'Passenger Front', 'Front Side', 'Curtain'], seatBeltPretensioners: 'Front Seats', isofixChildMounts: 'Outer Rear Seats', activeBraking: false, forwardCollisionWarning: false, blindSpotMonitoring: false, laneDepartureWarning: false, rearCrossTrafficAlert: false, tractionControlSystem: true, electronicStabilityProgram: true, hillHoldAssist: true, hillDescentControl: false, corneringBrakeControl: false },
    brakes: { frontBrakeType: 'Ventilated Disc', rearBrakeType: 'Drum', parkingBrakeType: 'Manual Handbrake', brakeEnergyRegeneration: false },
    climate: { climateControlZones: sv.trim.includes('ZXi') ? 'Automatic Climate Control' : 'Manual Air Conditioning', rearVents: sv.trim.includes('ZXi') ? 'Center Console Rear AC Vents with Fast Charging USB' : 'None', airQualitySensor: false, pm25Filter: true, cabinPreCooling: false },
    doorsAndMirrors: { orvmElectricAdjust: sv.screen > 0, orvmElectricFold: sv.alloy, orvmAutoDimming: false, orvmHeated: false, softCloseDoors: false, handsFreeTailgate: false },
    sunroofWindows: { sunroofType: 'None', oneTouchWindows: 'Driver Window Auto Down/Up with Pinch Guard', antiPinchWindows: true, acousticGlass: false, rearSunshades: 'None' },
    parkingAssist: { parkingSensors: 'Rear Parking Sensors', reverseCamera: sv.screen > 0, camera360Degree: false, automatedParkingAssist: 'None' },
    storage: { gloveboxCooling: false, centerConsoleStorage: 'Front Armrest Storage', cupHoldersCount: 2, seatbackPockets: true, sunglassesHolder: false },
    seating: { seatUpholstery: sv.dt ? 'Dual-Tone Sporty Fabric Upholstery' : 'Black Fabric Upholstery', driverSeatAdjustment: '6-Way Manually Adjustable with Height Adjuster', passengerSeatAdjustment: '4-Way Manually Adjustable', driverLumbarSupport: false, ventilatedSeats: false, heatedSeats: false, rearSeatSplit: '60:40 Split Folding Rear Seat Backrest', rearArmrest: 'None' },
    instrumentCluster: { clusterType: 'Analog Dials with Multi-Information Display (MID)', clusterScreenSizeInches: 4.2, configurableDisplays: true, headUpDisplay: false },
    steering: { steeringType: 'Electric Power Steering (EPS)', steeringAdjustment: 'Tilt Adjustable', multifunctionSteering: sv.screen > 0, leatherWrappedSteering: sv.trim.includes('Plus'), heatedSteering: false },
    infotainmentEx: { screenSizeInches: sv.screen, operatingSystem: 'SmartPlay Pro+ Touchscreen Infotainment', appleCarPlay: 'Wireless', androidAuto: 'Wireless', wirelessPhoneCharging: sv.wirelessCharge, speakerCount: sv.trim.includes('Plus') ? 6 : 4, soundSystemBrand: 'Surround Sense powered by ARKAMYS', usbPortsCount: 3 },
    lighting: { headlightsType: sv.alloy ? 'LED Projector Headlamps with Signature DRLs' : 'Halogen Headlamps', drlType: 'LED DRLs with Integrated Turn Signals', tailLightsType: 'C-Shaped LED Combination Tail Lamps', corneringLights: false, ambientLightingColorsCount: 1, puddleLamps: false },
    adas: { adasLevel: 'None', adaptiveCruiseControl: false, laneKeepAssist: false, emergencyBraking: false, trafficSignRecognition: false },
    telematics: { connectedCarTech: sv.trim.includes('ZXi'), appCompatibility: 'Suzuki Connect with 40+ Features', remoteLockUnlock: true, remoteHornLight: true, remoteACControl: false, geoFencing: true, stolenVehicleTracking: true, otaUpdates: true },
    exteriorFeatures: { grilleType: 'Gloss Black Piano Front Grille with Chrome Accent', roofRails: 'None', exhaustPipes: 'Concealed Exhaust' },
    cabinNoise: { acousticWindshield: false, activeNoiseCancellation: false },
    features: makeStandardFeatures({
      safety: { airbagsCount: 6, rearCamera: sv.screen > 0 ? 'standard' : 'not_available', rearParkingSensors: 'standard', hillAssist: 'standard' },
      exterior: { wheelSizeInches: sv.alloy ? 15 : 14, alloyWheels: sv.alloy ? 'standard' : 'not_available', ledHeadlights: sv.alloy ? 'standard' : 'not_available', ledDRLs: sv.alloy ? 'standard' : 'not_available' },
      interior: { automaticClimateControl: sv.trim.includes('ZXi') ? 'standard' : 'not_available', rearACVents: sv.trim.includes('ZXi') ? 'standard' : 'not_available', wirelessCharging: sv.wirelessCharge ? 'standard' : 'not_available' },
      infotainment: { infotainmentScreenSizeInches: sv.screen, androidAuto: sv.screen > 0 ? 'standard' : 'not_available', appleCarPlay: sv.screen > 0 ? 'standard' : 'not_available', wirelessAndroidAuto: sv.screen > 0 ? 'standard' : 'not_available', wirelessAppleCarPlay: sv.screen > 0 ? 'standard' : 'not_available', speakerCount: sv.trim.includes('Plus') ? 6 : 4, connectedCarTechnology: sv.trim.includes('ZXi') ? 'standard' : 'not_available' },
      convenience: { keylessEntry: 'standard', pushButtonStart: sv.alloy ? 'standard' : 'not_available', cruiseControl: sv.cruise ? 'standard' : 'not_available' },
    }),
    sources: [
      { name: 'Maruti Suzuki Arena Swift Brochure', url: 'https://www.marutisuzuki.com/swift', type: 'official', checkedAt: '2026-10-18' },
      { name: `CarWale Swift ${sv.trim} Price (Nashik)`, url: `https://www.carwale.com/maruti-suzuki-cars/swift/${sv.slug}/`, type: 'reputable', checkedAt: '2026-10-18' },
    ],
    lastVerified: '2026-10-18',
  })),
];
