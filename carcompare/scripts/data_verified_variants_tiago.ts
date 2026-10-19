/**
 * scripts/data_verified_variants_tiago.ts
 *
 * Exhaustive, verified variant database for Tata Tiago (2026 Compact Hatchback)
 * All 6 trim tiers (Smart, Pure, Pure Plus, Pure Plus A, Creative, Creative Plus)
 * across Petrol 1.2L Revotron and 1.2L iCNG Twin-Cylinder Bi-Fuel powertrains
 * with 5MT and 5AMT options (20 total variants).
 *
 * Fully covers all 22 specification categories (Sections A through V) from the
 * master specification schema.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

type TiagoPowertrainType = 'petrol' | 'cng';
type TiagoTransmissionType = '5MT' | '5AMT';

interface TiagoVariantConfig {
  trim: string;
  slug: string;
  name: string;
  fullName: string;
  powertrainType: TiagoPowertrainType;
  transmission: TiagoTransmissionType;
  exShowroom: number;
  exShowroomLakh: number;
  onRoadNashikLakh: number;
  hasAlloys?: boolean;
  has7InchScreen?: boolean;
  hasRearCamera?: boolean;
  hasFATC?: boolean;
  hasPushStart?: boolean;
  hasFogLamps?: boolean;
  hasHeightAdjustSeat?: boolean;
  hasCooledGlovebox?: boolean;
  hasRearWiperDefogger?: boolean;
  hasCentralLocking?: boolean;
  allPowerWindows?: boolean;
  hasElectricallyFoldableORVM?: boolean;
  hasDRLs?: boolean;
  hasProjectorHeadlamps?: boolean;
}

function buildTiagoVariant(cfg: TiagoVariantConfig): CarVariant {
  const isCng = cfg.powertrainType === 'cng';
  const isAmt = cfg.transmission === '5AMT';

  // Powertrain setup
  const fuelType = isCng ? 'CNG' : 'Petrol';
  const engineName = isCng
    ? '1.2L Revotron iCNG Twin-Cylinder Bi-Fuel Engine'
    : '1.2L Revotron 3-Cylinder Naturally Aspirated Petrol';
  const maxPowerBhp = isCng ? 74 : 85;
  const maxTorqueNm = isCng ? 96.5 : 113;
  const powerRpm = 6000;
  const torqueRpm = isCng ? 3500 : 3300;
  const mileageValue = isCng ? (isAmt ? 28.06 : 26.49) : (isAmt ? 19.00 : 19.01);
  const mileageUnit = isCng ? 'km/kg' : 'km/l';
  const bootSpace = isCng ? 180 : 242;
  const kerbWeight = isCng ? 1040 : 982;

  // Equipment flags
  const hasAlloys = !!cfg.hasAlloys;
  const wheelSize = hasAlloys ? 15 : 14;
  const tyreSize = hasAlloys ? '175/60 R15' : '175/65 R14';
  const wheelMaterial = hasAlloys ? 'Alloy' : 'Steel';

  const hasScreen = !!cfg.has7InchScreen;
  const screenSize = hasScreen ? 7.0 : null;
  const speakerCount = hasScreen ? 8 : cfg.trim.includes('Pure') ? 4 : 0;
  const hasAutoClimate = !!cfg.hasFATC;
  const hasPush = !!cfg.hasPushStart;
  const hasRearCam = !!cfg.hasRearCamera;
  const hasFog = !!cfg.hasFogLamps;
  const hasHeightSeat = !!cfg.hasHeightAdjustSeat;
  const hasCooledBox = !!cfg.hasCooledGlovebox;
  const hasWiperDefog = !!cfg.hasRearWiperDefogger;
  const hasCentralLock = cfg.hasCentralLocking !== false;
  const allWindows = cfg.allPowerWindows !== false;
  const hasFoldORVM = !!cfg.hasElectricallyFoldableORVM;
  const hasDRL = !!cfg.hasDRLs;
  const hasProjector = !!cfg.hasProjectorHeadlamps;

  return {
    id: `tata-tiago-${cfg.slug}`,
    modelId: 'tata-tiago',
    generationId: null,
    name: cfg.name,
    fullName: cfg.fullName,
    slug: cfg.slug,
    trim: cfg.trim,
    status: 'active',
    variantStatus: 'verified',
    pricing: {
      exShowroom: cfg.exShowroom,
      exShowroomLakh: cfg.exShowroomLakh,
      currency: 'INR',
    },
    powertrain: {
      fuelType,
      engineName,
      engineDisplacementCC: 1199,
      cylinders: 3,
      aspiration: 'Naturally Aspirated',
      maxPowerBhp,
      maxTorqueNm,
      transmission: isAmt ? 'Automatic' : 'Manual',
      drivetrain: 'FWD',
      batteryCapacityKWh: null,
      electricMotorPowerBhp: null,
      electricRangeKm: null,
    },
    performance: {
      mileageKmpl: isCng ? null : mileageValue,
      mileage: {
        value: mileageValue,
        unit: mileageUnit,
        type: 'ARAI',
        source: 'Tata Motors Official / ARAI Claimed',
        verified: true,
      },
      zeroToHundredSec: isCng ? 15.8 : 14.2,
      topSpeedKmph: isCng ? 150 : 155,
    },
    dimensions: {
      lengthMm: 3765,
      widthMm: 1677,
      heightMm: 1535,
      wheelbaseMm: 2400,
      groundClearanceMm: 170,
      kerbWeightKg: kerbWeight,
      bootSpaceLitres: bootSpace,
      fuelTankLitres: 35,
    },
    extendedPowertrain: {
      maxPowerRpm: powerRpm,
      maxTorqueRpm: torqueRpm,
      valvesPerCylinder: 4,
      engineFamily: 'Revotron 1.2L',
      emissionStandard: 'BS6 Phase 2',
      ethanolCompatibility: true,
      idleStartStop: !isCng,
      gears: 5,
      automaticSubType: isAmt ? 'AMT' : null,
      driveModes: ['City', 'Eco'],
      terrainModes: null,
      lsd: false,
      differentialLock: false,
    },
    suspension: {
      front: 'Independent Lower Wishbone, MacPherson Strut with Coil Spring',
      rear: 'Semi-Independent Closed Profile Twist Beam with Dual Path Strut',
    },
    extendedDimensions: {
      seatingRows: 2,
      numberOfDoors: 5,
      minimumTurningRadiusM: 4.75,
    },
    tyres: {
      frontTyreSize: tyreSize,
      rearTyreSize: tyreSize,
      wheelMaterial,
      spareWheelType: 'Space Saver',
      spareTyreDetails: '155/80 R13 Steel',
      tyreConstruction: 'Tubeless Radial',
    },
    warranty: {
      vehicleWarrantyYears: 3,
      vehicleWarrantyKm: 100000,
      powertrainWarrantyYears: 3,
      powertrainWarrantyKm: 100000,
      extendedWarrantyAvailable: true,
    },
    extendedSafety: {
      rearCollisionAssist: 'not_available',
      highBeamAssist: 'not_available',
      automaticParkLock: 'not_available',
      emergencyBrakeLightFlashing: 'standard',
      antiTheftAlarm: hasCentralLock ? 'standard' : 'not_available',
      corneringBrakeControl: 'standard',
      acousticVehicleAlertingSystem: 'not_available',
      thermalIncidentProtection: isCng ? 'standard' : 'not_available',
      driverAirbag: 'standard',
      frontPassengerAirbag: 'standard',
      curtainAirbags: 'not_available',
      driverSideAirbag: 'not_available',
      frontPassengerSideAirbag: 'not_available',
      otherSideAirbags: 'not_available',
      seatbeltPretensioners: 'standard',
      seatbeltLoadLimiters: 'standard',
      rearMiddleThreePointSeatbelt: 'standard',
      isofixChildSeatAnchors: 'standard',
      childSafetyLocks: 'standard',
      engineImmobiliser: 'standard',
      punctureRepairKit: 'standard',
      tyreInflator: isCng ? 'standard' : 'not_available',
      dashcam: 'not_available',
      ncapTestYear: 2020,
      ncapTestOrganization: 'Global NCAP',
      ncapTestedVariant: 'Tata Tiago Dual Airbag (4-Star Adult Safety)',
    },
    brakes: {
      frontBrakeType: 'Disc',
      rearBrakeType: 'Drum',
      abs: 'standard',
      brakeAssist: 'standard',
      ebd: 'standard',
      corneringBrakeControl: 'standard',
      torqueVectoringBrakeAssist: 'not_available',
      esp: 'standard',
      tractionControl: 'standard',
      hillHoldControl: isAmt ? 'standard' : 'not_available',
      hillDescentControl: 'not_available',
      brakeDiscWiping: 'not_available',
      motorSlipRegulation: 'not_available',
      multiCollisionBraking: 'not_available',
    },
    climate: {
      acType: hasAutoClimate ? 'Automatic Climate Control (FATC)' : 'Manual Air Conditioning',
      frontACZones: 1,
      fanSpeedControl: 'standard',
      heater: 'standard',
      airPurifier: 'not_available',
    },
    doorsAndMirrors: {
      centralLocking: hasCentralLock ? 'standard' : 'not_available',
      centralLockingType: hasPush ? 'Smart Keyless' : hasCentralLock ? 'Remote Key' : null,
      speedSensingDoorLocks: hasCentralLock ? 'standard' : 'not_available',
      insideRearViewMirror: cfg.trim.includes('Creative') ? 'Auto-Dimming' : 'Manual Day/Night',
      vanityMirrors: 'standard',
      extendableSunVisors: 'not_available',
      orvmAdjustment: hasScreen ? 'Electrically Adjustable' : 'Manual Internal',
      orvmFinish: hasAlloys ? 'Glossy Piano Black' : 'Body Coloured',
      antiGlareMirrors: 'not_available',
      memoryORVMs: 'not_available',
      heatedORVMs: 'not_available',
      rainSensingWipers: cfg.trim.includes('Creative Plus') ? 'standard' : 'not_available',
      rearWiper: hasWiperDefog ? 'standard' : 'not_available',
      integratedWasherJets: 'standard',
      rearDefogger: hasWiperDefog ? 'standard' : 'not_available',
      bootOpeningMechanism: 'Electric Tailgate Release Switch',
    },
    sunroofWindows: {
      sunroofType: null,
      remoteSunroofControl: 'not_available',
      powerWindows: 'standard',
      windowSunshades: 'not_available',
    },
    parkingAssist: {
      keylessEntry: hasPush ? 'standard' : 'not_available',
      pushButtonStart: hasPush ? 'standard' : 'not_available',
      cruiseControl: 'not_available',
      adaptiveCruiseControl: 'not_available',
      electronicParkingBrake: 'not_available',
      rearParkingSensors: 'standard',
      frontParkingSensors: 'not_available',
      parkingCamera: hasRearCam ? 'standard' : 'not_available',
      surroundViewCamera: 'not_available',
      parkingAssist: 'not_available',
    },
    storage: {
      bootSpaceLitres: bootSpace,
      internalBootOpener: 'standard',
      frontCupholders: 'standard',
      bottleHoldersInDoors: 'standard',
      frontDoorPockets: 'standard',
      foldableSeatbackTables: 'not_available',
      thirdRowCupholders: 'not_available',
      heatedCooledCupholders: 'not_available',
      cooledGlovebox: hasCooledBox ? 'standard' : 'not_available',
      lockableGlovebox: 'standard',
      driverArmrestStorage: 'not_available',
    },
    seating: {
      driverSeatAdjustmentType: 'Manual',
      driverSeatAdjustmentWays: hasHeightSeat ? 6 : 4,
      driverSeatForwardBack: 'standard',
      driverSeatBackrestAdjust: 'standard',
      driverSeatHeadrestAdjust: 'standard',
      frontPassengerSeatAdjust: '4-Way Manual',
      seatUpholstery: hasAlloys ? 'Premium Knitted Fabric with Tri-Arrow Motif' : 'Fabric',
      frontHeadrests: 'standard',
      rearHeadrests: 'standard',
      deadPedal: 'standard',
      ventilatedFrontSeats: 'not_available',
      massageSeats: 'not_available',
      driverArmrest: 'not_available',
      rearArmrest: 'not_available',
      foldableSeatbackTable: 'not_available',
    },
    instrumentCluster: {
      clusterType: 'Full Digital Instrument Cluster',
      clusterSizeInches: 4.2,
      digitalSpeedometer: 'standard',
      digitalTachometer: 'standard',
      gearIndicator: 'standard',
      gearShiftIndicator: 'standard',
      headsUpDisplay: 'not_available',
      tripMeterCount: 2,
      digitalClock: 'standard',
      averageFuelConsumption: 'standard',
      distanceToEmpty: 'standard',
      lowFuelWarning: 'standard',
      instantaneousFuelConsumption: 'standard',
      averageSpeed: 'standard',
    },
    steering: {
      powerAssistanceType: 'Electric Power Steering (EPS)',
      steeringWheelDesign: 'Flat Bottom 3-Spoke',
      spokes: 3,
      tiltAdjustment: 'standard',
      telescopicAdjustment: 'not_available',
      steeringMountedControls: hasScreen ? 'standard' : 'not_available',
    },
    lighting: {
      headlampType: hasProjector ? 'Projector' : 'Halogen Reflector',
      headlightHeightAdjustment: 'standard',
      drl: hasDRL ? 'standard' : 'not_available',
      fogLights: hasFog ? 'standard' : 'not_available',
      followMeHomeHeadlamps: hasScreen ? 'standard' : 'not_available',
      automaticHeadlamps: cfg.trim.includes('Creative Plus') ? 'standard' : 'not_available',
      sequentialTurnIndicators: 'not_available',
      puddleLamps: 'not_available',
      welcomeGoodbyeLighting: 'not_available',
      taillightType: 'Boomerang LED Signature',
      ledTaillights: 'standard',
      ambientInteriorLighting: 'not_available',
      ambientLightingColours: null,
    },
    connectedCar: {
      connected: 'not_available',
      appName: null,
    },
    styling: {
      exteriorTheme: hasAlloys ? 'Dual-Tone Sporty Hatchback' : 'Standard Body Paint',
      roofType: cfg.trim.includes('Creative Plus') ? 'Contrast Black Roof' : 'Body Coloured',
      interiorTheme: 'Dual-Tone Black & Grey Interior with Elegant Piano Black Accents',
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 2,
        abs: 'standard',
        ebd: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: isAmt ? 'standard' : 'not_available',
        rearParkingSensors: 'standard',
        rearCamera: hasRearCam ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: wheelSize,
        alloyWheels: hasAlloys ? 'standard' : 'not_available',
        ledHeadlights: hasProjector ? 'standard' : 'not_available',
        ledDRLs: hasDRL ? 'standard' : 'not_available',
        sunroof: 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: hasAutoClimate ? 'standard' : 'not_available',
        rearACVents: 'not_available',
      },
      infotainment: {
        touchscreen: hasScreen ? 'standard' : 'not_available',
        infotainmentScreenSizeInches: screenSize,
        speakerCount,
        appleCarPlay: hasScreen ? 'standard' : 'not_available',
        androidAuto: hasScreen ? 'standard' : 'not_available',
        steeringMountedControls: hasScreen ? 'standard' : 'not_available',
      },
      convenience: {
        keylessEntry: hasPush ? 'standard' : 'not_available',
        pushButtonStart: hasPush ? 'standard' : 'not_available',
        powerWindowsFront: 'standard',
        powerWindowsRear: allWindows ? 'standard' : 'not_available',
      },
    }),
    sources: [
      {
        name: 'CarWale Official Automotive Media',
        url: `https://www.carwale.com/tata-cars/tiago/${cfg.trim.toLowerCase().replace(/[^a-z0-9]/g, '-')}/`,
        type: 'reputable',
        checkedAt: '2026-10-17',
      },
      {
        name: 'Tata Motors Official Tiago Brochure',
        url: 'https://cars.tatamotors.com/tiago',
        type: 'official',
        checkedAt: '2026-10-17',
      },
    ],
    lastVerified: '2026-10-17',
  };
}

export const TATA_TIAGO_VARIANTS: CarVariant[] = [
  // =========================================================================
  // 1. TIAGO SMART (2 Variants)
  // =========================================================================
  buildTiagoVariant({
    trim: 'Smart',
    slug: 'smart-petrol-manual',
    name: 'Smart Petrol Manual',
    fullName: 'Tata Tiago Smart 1.2 Revotron Petrol 5MT',
    powertrainType: 'petrol',
    transmission: '5MT',
    exShowroom: 499900,
    exShowroomLakh: 4.99,
    onRoadNashikLakh: 5.66,
    hasCentralLocking: false,
    allPowerWindows: false,
  }),
  buildTiagoVariant({
    trim: 'Smart',
    slug: 'smart-cng-manual',
    name: 'Smart iCNG Manual',
    fullName: 'Tata Tiago Smart 1.2 iCNG Twin-Cylinder 5MT',
    powertrainType: 'cng',
    transmission: '5MT',
    exShowroom: 599900,
    exShowroomLakh: 5.99,
    onRoadNashikLakh: 6.76,
    hasCentralLocking: false,
    allPowerWindows: false,
  }),

  // =========================================================================
  // 2. TIAGO PURE (4 Variants)
  // =========================================================================
  buildTiagoVariant({
    trim: 'Pure',
    slug: 'pure-petrol-manual',
    name: 'Pure Petrol Manual',
    fullName: 'Tata Tiago Pure 1.2 Revotron Petrol 5MT',
    powertrainType: 'petrol',
    transmission: '5MT',
    exShowroom: 584900,
    exShowroomLakh: 5.85,
    onRoadNashikLakh: 6.59,
    hasCentralLocking: true,
    allPowerWindows: true,
  }),
  buildTiagoVariant({
    trim: 'Pure',
    slug: 'pure-petrol-automatic',
    name: 'Pure Petrol Automatic',
    fullName: 'Tata Tiago Pure 1.2 Revotron Petrol 5AMT',
    powertrainType: 'petrol',
    transmission: '5AMT',
    exShowroom: 639900,
    exShowroomLakh: 6.40,
    onRoadNashikLakh: 7.20,
    hasCentralLocking: true,
    allPowerWindows: true,
  }),
  buildTiagoVariant({
    trim: 'Pure',
    slug: 'pure-cng-manual',
    name: 'Pure iCNG Manual',
    fullName: 'Tata Tiago Pure 1.2 iCNG Twin-Cylinder 5MT',
    powertrainType: 'cng',
    transmission: '5MT',
    exShowroom: 669900,
    exShowroomLakh: 6.70,
    onRoadNashikLakh: 7.55,
    hasCentralLocking: true,
    allPowerWindows: true,
  }),
  buildTiagoVariant({
    trim: 'Pure',
    slug: 'pure-cng-automatic',
    name: 'Pure iCNG Automatic',
    fullName: 'Tata Tiago Pure 1.2 iCNG Twin-Cylinder 5AMT',
    powertrainType: 'cng',
    transmission: '5AMT',
    exShowroom: 724900,
    exShowroomLakh: 7.25,
    onRoadNashikLakh: 8.16,
    hasCentralLocking: true,
    allPowerWindows: true,
  }),

  // =========================================================================
  // 3. TIAGO PURE PLUS (4 Variants)
  // =========================================================================
  buildTiagoVariant({
    trim: 'Pure Plus',
    slug: 'pure-plus-petrol-manual',
    name: 'Pure Plus Petrol Manual',
    fullName: 'Tata Tiago Pure Plus 1.2 Revotron Petrol 5MT',
    powertrainType: 'petrol',
    transmission: '5MT',
    exShowroom: 639900,
    exShowroomLakh: 6.40,
    onRoadNashikLakh: 7.20,
    hasCentralLocking: true,
    allPowerWindows: true,
    has7InchScreen: true,
  }),
  buildTiagoVariant({
    trim: 'Pure Plus',
    slug: 'pure-plus-petrol-automatic',
    name: 'Pure Plus Petrol Automatic',
    fullName: 'Tata Tiago Pure Plus 1.2 Revotron Petrol 5AMT',
    powertrainType: 'petrol',
    transmission: '5AMT',
    exShowroom: 694900,
    exShowroomLakh: 6.95,
    onRoadNashikLakh: 7.83,
    hasCentralLocking: true,
    allPowerWindows: true,
    has7InchScreen: true,
  }),
  buildTiagoVariant({
    trim: 'Pure Plus',
    slug: 'pure-plus-cng-manual',
    name: 'Pure Plus iCNG Manual',
    fullName: 'Tata Tiago Pure Plus 1.2 iCNG Twin-Cylinder 5MT',
    powertrainType: 'cng',
    transmission: '5MT',
    exShowroom: 719900,
    exShowroomLakh: 7.20,
    onRoadNashikLakh: 8.13,
    hasCentralLocking: true,
    allPowerWindows: true,
    has7InchScreen: true,
  }),
  buildTiagoVariant({
    trim: 'Pure Plus',
    slug: 'pure-plus-cng-automatic',
    name: 'Pure Plus iCNG Automatic',
    fullName: 'Tata Tiago Pure Plus 1.2 iCNG Twin-Cylinder 5AMT',
    powertrainType: 'cng',
    transmission: '5AMT',
    exShowroom: 774900,
    exShowroomLakh: 7.75,
    onRoadNashikLakh: 8.74,
    hasCentralLocking: true,
    allPowerWindows: true,
    has7InchScreen: true,
  }),

  // =========================================================================
  // 4. TIAGO PURE PLUS A (4 Variants)
  // =========================================================================
  buildTiagoVariant({
    trim: 'Pure Plus A',
    slug: 'pure-plus-a-petrol-manual',
    name: 'Pure Plus A Petrol Manual',
    fullName: 'Tata Tiago Pure Plus A 1.2 Revotron Petrol 5MT',
    powertrainType: 'petrol',
    transmission: '5MT',
    exShowroom: 684900,
    exShowroomLakh: 6.85,
    onRoadNashikLakh: 7.73,
    hasCentralLocking: true,
    allPowerWindows: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasHeightAdjustSeat: true,
  }),
  buildTiagoVariant({
    trim: 'Pure Plus A',
    slug: 'pure-plus-a-petrol-automatic',
    name: 'Pure Plus A Petrol Automatic',
    fullName: 'Tata Tiago Pure Plus A 1.2 Revotron Petrol 5AMT',
    powertrainType: 'petrol',
    transmission: '5AMT',
    exShowroom: 739900,
    exShowroomLakh: 7.40,
    onRoadNashikLakh: 8.36,
    hasCentralLocking: true,
    allPowerWindows: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasHeightAdjustSeat: true,
  }),
  buildTiagoVariant({
    trim: 'Pure Plus A',
    slug: 'pure-plus-a-cng-manual',
    name: 'Pure Plus A iCNG Manual',
    fullName: 'Tata Tiago Pure Plus A 1.2 iCNG Twin-Cylinder 5MT',
    powertrainType: 'cng',
    transmission: '5MT',
    exShowroom: 764900,
    exShowroomLakh: 7.65,
    onRoadNashikLakh: 8.65,
    hasCentralLocking: true,
    allPowerWindows: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasHeightAdjustSeat: true,
  }),
  buildTiagoVariant({
    trim: 'Pure Plus A',
    slug: 'pure-plus-a-cng-automatic',
    name: 'Pure Plus A iCNG Automatic',
    fullName: 'Tata Tiago Pure Plus A 1.2 iCNG Twin-Cylinder 5AMT',
    powertrainType: 'cng',
    transmission: '5AMT',
    exShowroom: 824900,
    exShowroomLakh: 8.25,
    onRoadNashikLakh: 9.30,
    hasCentralLocking: true,
    allPowerWindows: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasHeightAdjustSeat: true,
  }),

  // =========================================================================
  // 5. TIAGO CREATIVE (4 Variants)
  // =========================================================================
  buildTiagoVariant({
    trim: 'Creative',
    slug: 'creative-petrol-manual',
    name: 'Creative Petrol Manual',
    fullName: 'Tata Tiago Creative 1.2 Revotron Petrol 5MT',
    powertrainType: 'petrol',
    transmission: '5MT',
    exShowroom: 734900,
    exShowroomLakh: 7.35,
    onRoadNashikLakh: 8.30,
    hasAlloys: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasFATC: true,
    hasFogLamps: true,
    hasHeightAdjustSeat: true,
    hasCooledGlovebox: true,
    hasRearWiperDefogger: true,
    hasProjectorHeadlamps: true,
    hasDRLs: true,
    hasElectricallyFoldableORVM: true,
  }),
  buildTiagoVariant({
    trim: 'Creative',
    slug: 'creative-petrol-automatic',
    name: 'Creative Petrol Automatic',
    fullName: 'Tata Tiago Creative 1.2 Revotron Petrol 5AMT',
    powertrainType: 'petrol',
    transmission: '5AMT',
    exShowroom: 789900,
    exShowroomLakh: 7.90,
    onRoadNashikLakh: 8.93,
    hasAlloys: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasFATC: true,
    hasFogLamps: true,
    hasHeightAdjustSeat: true,
    hasCooledGlovebox: true,
    hasRearWiperDefogger: true,
    hasProjectorHeadlamps: true,
    hasDRLs: true,
    hasElectricallyFoldableORVM: true,
  }),
  buildTiagoVariant({
    trim: 'Creative',
    slug: 'creative-cng-manual',
    name: 'Creative iCNG Manual',
    fullName: 'Tata Tiago Creative 1.2 iCNG Twin-Cylinder 5MT',
    powertrainType: 'cng',
    transmission: '5MT',
    exShowroom: 819900,
    exShowroomLakh: 8.20,
    onRoadNashikLakh: 9.24,
    hasAlloys: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasFATC: true,
    hasFogLamps: true,
    hasHeightAdjustSeat: true,
    hasCooledGlovebox: true,
    hasRearWiperDefogger: true,
    hasProjectorHeadlamps: true,
    hasDRLs: true,
    hasElectricallyFoldableORVM: true,
  }),
  buildTiagoVariant({
    trim: 'Creative',
    slug: 'creative-cng-automatic',
    name: 'Creative iCNG Automatic',
    fullName: 'Tata Tiago Creative 1.2 iCNG Twin-Cylinder 5AMT',
    powertrainType: 'cng',
    transmission: '5AMT',
    exShowroom: 874900,
    exShowroomLakh: 8.75,
    onRoadNashikLakh: 9.86,
    hasAlloys: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasFATC: true,
    hasFogLamps: true,
    hasHeightAdjustSeat: true,
    hasCooledGlovebox: true,
    hasRearWiperDefogger: true,
    hasProjectorHeadlamps: true,
    hasDRLs: true,
    hasElectricallyFoldableORVM: true,
  }),

  // =========================================================================
  // 6. TIAGO CREATIVE PLUS (2 Variants)
  // =========================================================================
  buildTiagoVariant({
    trim: 'Creative Plus',
    slug: 'creative-plus-petrol-manual',
    name: 'Creative Plus Petrol Manual',
    fullName: 'Tata Tiago Creative Plus 1.2 Revotron Petrol 5MT Dual Tone',
    powertrainType: 'petrol',
    transmission: '5MT',
    exShowroom: 764900,
    exShowroomLakh: 7.65,
    onRoadNashikLakh: 8.65,
    hasAlloys: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasFATC: true,
    hasFogLamps: true,
    hasHeightAdjustSeat: true,
    hasCooledGlovebox: true,
    hasRearWiperDefogger: true,
    hasProjectorHeadlamps: true,
    hasDRLs: true,
    hasElectricallyFoldableORVM: true,
    hasPushStart: true,
  }),
  buildTiagoVariant({
    trim: 'Creative Plus',
    slug: 'creative-plus-petrol-automatic',
    name: 'Creative Plus Petrol Automatic',
    fullName: 'Tata Tiago Creative Plus 1.2 Revotron Petrol 5AMT Dual Tone',
    powertrainType: 'petrol',
    transmission: '5AMT',
    exShowroom: 819900,
    exShowroomLakh: 8.20,
    onRoadNashikLakh: 9.28,
    hasAlloys: true,
    has7InchScreen: true,
    hasRearCamera: true,
    hasFATC: true,
    hasFogLamps: true,
    hasHeightAdjustSeat: true,
    hasCooledGlovebox: true,
    hasRearWiperDefogger: true,
    hasProjectorHeadlamps: true,
    hasDRLs: true,
    hasElectricallyFoldableORVM: true,
    hasPushStart: true,
  }),
];
