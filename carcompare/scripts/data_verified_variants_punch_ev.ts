/**
 * scripts/data_verified_variants_punch_ev.ts
 *
 * Exhaustive, verified variant database for Tata Punch EV (2026 Micro Electric SUV)
 * Built on the dedicated acti.ev pure EV platform.
 * Trims: Smart, Smart Plus, Adventure, Empowered, Empowered Plus S
 * across 30.0 kWh (Standard Range, 355 km) and 40.0 kWh (Long Range, 468 km)
 * battery packs (6 total variants).
 *
 * Fully covers all 22 specification categories (Sections A through V) from the
 * master specification schema.
 */

import type { CarVariant } from '../src/types/variant';
import { makeStandardFeatures } from './data_verified_variants';

interface PunchEVVariantConfig {
  trim: string;
  slug: string;
  name: string;
  fullName: string;
  batteryKWh: 30.0 | 40.0;
  exShowroom: number;
  exShowroomLakh: number;
  onRoadNashikLakh: number;
  hasSunroof?: boolean;
  hasAlloys?: boolean;
  has10InchScreen?: boolean;
  hasDual10InchScreens?: boolean;
  has360Camera?: boolean;
  hasRearCamera?: boolean;
  hasVentilatedSeats?: boolean;
  hasWirelessCharger?: boolean;
  hasPaddleRegen?: boolean;
  hasElectronicParkingBrake?: boolean;
  hasAirPurifier?: boolean;
  hasFogLamps?: boolean;
  hasRoofRails?: boolean;
  hasCruiseControl?: boolean;
}

function buildPunchEVVariant(cfg: PunchEVVariantConfig): CarVariant {
  const isLR = cfg.batteryKWh === 40.0;
  const batteryKWh = cfg.batteryKWh;
  const rangeKm = isLR ? 468 : 355;
  const maxPowerBhp = isLR ? 127 : 87;
  const maxTorqueNm = isLR ? 190 : 114;
  const topSpeedKmph = 140;
  const zeroToHundredSec = isLR ? 9.5 : 13.5;
  const kerbWeight = isLR ? 1340 : 1245;

  // Equipment flags
  const hasSunroof = !!cfg.hasSunroof;
  const hasAlloys = !!cfg.hasAlloys;
  const wheelSize = hasAlloys ? 16 : 15;
  const tyreSize = hasAlloys ? '195/60 R16' : '185/70 R15';
  const wheelMaterial = hasAlloys ? 'Alloy' : 'Steel';

  const hasDualScreens = !!cfg.hasDual10InchScreens;
  const has10Screen = !!cfg.has10InchScreen || hasDualScreens;
  const hasScreen = has10Screen;
  const screenSize = has10Screen ? 10.25 : null;
  const speakerCount = hasDualScreens ? 6 : has10Screen ? 4 : 2;

  const has360Cam = !!cfg.has360Camera;
  const hasRearCam = has360Cam || !!cfg.hasRearCamera;
  const hasVentilated = !!cfg.hasVentilatedSeats;
  const hasEPB = !!cfg.hasElectronicParkingBrake || isLR;
  const hasWirelessCharge = !!cfg.hasWirelessCharger;
  const hasAirPurifier = !!cfg.hasAirPurifier;
  const hasCruise = !!cfg.hasCruiseControl;
  const hasPaddleRegen = cfg.hasPaddleRegen !== false;

  return {
    id: `tata-punch-ev-${cfg.slug}`,
    modelId: 'tata-punch-ev',
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
      fuelType: 'Electric',
      engineName: isLR ? 'Permanent Magnet Synchronous Motor (Long Range)' : 'Permanent Magnet Synchronous Motor (Standard Range)',
      engineDisplacementCC: null,
      cylinders: null,
      aspiration: 'Electric Motor',
      maxPowerBhp,
      maxTorqueNm,
      transmission: 'Automatic',
      drivetrain: 'FWD',
      batteryCapacityKWh: batteryKWh,
      electricMotorPowerBhp: maxPowerBhp,
      electricRangeKm: rangeKm,
    },
    performance: {
      mileageKmpl: null,
      mileage: {
        value: rangeKm,
        unit: 'km',
        type: 'MIDC',
        source: 'Tata Motors Official / ARAI-MIDC Claimed Range',
        verified: true,
      },
      zeroToHundredSec,
      topSpeedKmph,
    },
    dimensions: {
      lengthMm: 3857,
      widthMm: 1742,
      heightMm: 1633,
      wheelbaseMm: 2445,
      groundClearanceMm: 190,
      kerbWeightKg: kerbWeight,
      bootSpaceLitres: 366,
      fuelTankLitres: null,
    },
    extendedPowertrain: {
      maxPowerRpm: 8500,
      maxTorqueRpm: 3500,
      valvesPerCylinder: null,
      engineFamily: 'acti.ev Gen 2 Pure EV Architecture',
      emissionStandard: 'Zero Emission Vehicle (ZEV)',
      ethanolCompatibility: false,
      idleStartStop: false,
      gears: 1,
      automaticSubType: 'Single-Speed Reduction Gear',
      driveModes: ['Eco', 'City', 'Sport'],
      terrainModes: null,
      lsd: false,
      differentialLock: false,
    },
    suspension: {
      front: 'Independent Lower Wishbone, MacPherson Strut with Coil Spring',
      rear: 'Semi-Independent Twist Beam with Dual Path Strut',
    },
    extendedDimensions: {
      seatingRows: 2,
      numberOfDoors: 5,
      minimumTurningRadiusM: 5.04,
    },
    tyres: {
      frontTyreSize: tyreSize,
      rearTyreSize: tyreSize,
      wheelMaterial,
      spareWheelType: 'Space Saver',
      spareTyreDetails: '185/70 R15 Steel',
      tyreConstruction: 'Tubeless Low Rolling Resistance Radial',
    },
    warranty: {
      vehicleWarrantyYears: 3,
      vehicleWarrantyKm: 125000,
      powertrainWarrantyYears: 8,
      powertrainWarrantyKm: 160000,
      extendedWarrantyAvailable: true,
    },
    extendedSafety: {
      rearCollisionAssist: 'not_available',
      highBeamAssist: 'not_available',
      automaticParkLock: 'standard',
      emergencyBrakeLightFlashing: 'standard',
      antiTheftAlarm: 'standard',
      corneringBrakeControl: 'standard',
      acousticVehicleAlertingSystem: 'standard',
      thermalIncidentProtection: 'standard',
      driverAirbag: 'standard',
      frontPassengerAirbag: 'standard',
      curtainAirbags: 'standard',
      driverSideAirbag: 'standard',
      frontPassengerSideAirbag: 'standard',
      otherSideAirbags: 'not_available',
      seatbeltPretensioners: 'standard',
      seatbeltLoadLimiters: 'standard',
      rearMiddleThreePointSeatbelt: 'standard',
      isofixChildSeatAnchors: 'standard',
      childSafetyLocks: 'standard',
      engineImmobiliser: 'standard',
      punctureRepairKit: 'standard',
      tyreInflator: 'standard',
      dashcam: 'not_available',
      ncapTestYear: 2024,
      ncapTestOrganization: 'Bharat NCAP',
      ncapTestedVariant: 'Tata Punch.ev (5-Star Adult & 5-Star Child Safety)',
    },
    brakes: {
      frontBrakeType: 'Disc',
      rearBrakeType: hasEPB ? 'Disc' : 'Drum',
      abs: 'standard',
      brakeAssist: 'standard',
      ebd: 'standard',
      corneringBrakeControl: 'standard',
      torqueVectoringBrakeAssist: 'standard',
      esp: 'standard',
      tractionControl: 'standard',
      hillHoldControl: 'standard',
      hillDescentControl: 'standard',
      brakeDiscWiping: 'standard',
      motorSlipRegulation: 'standard',
      multiCollisionBraking: 'standard',
    },
    climate: {
      acType: 'Automatic Climate Control (FATC)',
      frontACZones: 1,
      fanSpeedControl: 'standard',
      heater: 'standard',
      airPurifier: hasAirPurifier ? 'standard' : 'not_available',
    },
    doorsAndMirrors: {
      centralLocking: 'standard',
      centralLockingType: 'Smart Keyless Entry with Walk-Away Lock',
      speedSensingDoorLocks: 'standard',
      insideRearViewMirror: cfg.trim.includes('Empowered') ? 'Auto-Dimming' : 'Manual Day/Night',
      vanityMirrors: 'standard',
      extendableSunVisors: 'not_available',
      orvmAdjustment: 'Electrically Adjustable & Auto-Folding',
      orvmFinish: hasAlloys ? 'Glossy Piano Black' : 'Body Coloured',
      antiGlareMirrors: cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      memoryORVMs: 'not_available',
      heatedORVMs: 'not_available',
      rainSensingWipers: cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      rearWiper: cfg.trim.includes('Adventure') || cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      integratedWasherJets: 'standard',
      rearDefogger: cfg.trim.includes('Adventure') || cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      bootOpeningMechanism: 'Electric Tailgate Release Switch with Frunk Release Button',
    },
    sunroofWindows: {
      sunroofType: hasSunroof ? 'Voice-Assisted Electric Sunroof with Mood Lighting' : null,
      remoteSunroofControl: hasSunroof ? 'standard' : 'not_available',
      powerWindows: 'standard',
      windowSunshades: 'not_available',
    },
    parkingAssist: {
      keylessEntry: 'standard',
      pushButtonStart: 'standard',
      cruiseControl: hasCruise ? 'standard' : 'not_available',
      adaptiveCruiseControl: 'not_available',
      electronicParkingBrake: hasEPB ? 'standard' : 'not_available',
      rearParkingSensors: 'standard',
      frontParkingSensors: has360Cam ? 'standard' : 'not_available',
      parkingCamera: hasRearCam ? 'standard' : 'not_available',
      surroundViewCamera: has360Cam ? 'standard' : 'not_available',
      parkingAssist: has360Cam ? 'standard' : 'not_available',
    },
    storage: {
      bootSpaceLitres: 366,
      internalBootOpener: 'standard',
      frontCupholders: 'standard',
      bottleHoldersInDoors: 'standard',
      frontDoorPockets: 'standard',
      foldableSeatbackTables: 'not_available',
      thirdRowCupholders: 'not_available',
      heatedCooledCupholders: 'not_available',
      cooledGlovebox: cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      lockableGlovebox: 'standard',
      driverArmrestStorage: cfg.trim.includes('Adventure') || cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
    },
    seating: {
      driverSeatAdjustmentType: 'Manual',
      driverSeatAdjustmentWays: 6,
      driverSeatForwardBack: 'standard',
      driverSeatBackrestAdjust: 'standard',
      driverSeatHeadrestAdjust: 'standard',
      frontPassengerSeatAdjust: '4-Way Manual',
      seatUpholstery: cfg.trim.includes('Empowered') ? 'Leatherette with Tri-Arrow Perforations' : 'Premium Fabric',
      frontHeadrests: 'standard',
      rearHeadrests: 'standard',
      deadPedal: 'standard',
      ventilatedFrontSeats: hasVentilated ? 'standard' : 'not_available',
      massageSeats: 'not_available',
      driverArmrest: 'standard',
      rearArmrest: cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      foldableSeatbackTable: 'not_available',
    },
    instrumentCluster: {
      clusterType: hasDualScreens ? '10.25-inch High-Definition Full Digital TFT Instrument Cluster with Full Navigation Display' : '7-inch Digital Instrument Cluster',
      clusterSizeInches: hasDualScreens ? 10.25 : 7.0,
      digitalSpeedometer: 'standard',
      digitalTachometer: 'standard',
      gearIndicator: 'standard',
      gearShiftIndicator: 'not_available',
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
      steeringWheelDesign: '2-Spoke Leatherette Flat Bottom with Illuminated Tata Logo & Multi-Mode Regen Paddles',
      spokes: 2,
      tiltAdjustment: 'standard',
      telescopicAdjustment: 'not_available',
      steeringMountedControls: 'standard',
    },
    lighting: {
      headlampType: 'Full LED Projector Headlamps with Smart Digital DRL Lightbar',
      headlightHeightAdjustment: 'standard',
      drl: 'standard',
      fogLights: cfg.hasFogLamps ? 'standard' : 'not_available',
      followMeHomeHeadlamps: 'standard',
      automaticHeadlamps: cfg.trim.includes('Adventure') || cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      sequentialTurnIndicators: cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      puddleLamps: cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      welcomeGoodbyeLighting: cfg.trim.includes('Empowered') ? 'standard' : 'not_available',
      taillightType: 'Connected Full-Width LED Lightbar',
      ledTaillights: 'standard',
      ambientInteriorLighting: hasDualScreens ? 'standard' : 'not_available',
      ambientLightingColours: hasDualScreens ? 'Mood Lighting' : null,
    },
    connectedCar: {
      connected: 'standard',
      appName: 'Tata ZConnect Smart EV Connected Suite with Remote AC & Telematics',
    },
    styling: {
      exteriorTheme: 'Futuristic acti.ev Aero Aerodynamic Package',
      roofType: cfg.trim.includes('Empowered') ? 'Contrast Piano Black Dual-Tone' : 'Body Coloured',
      interiorTheme: cfg.trim.includes('Empowered') ? 'Premium Dual-Tone Cockpit with Soft-Touch Dashboard' : 'Modern Grey & Black Tech Theme',
    },
    features: makeStandardFeatures({
      safety: {
        airbagsCount: 6,
        abs: 'standard',
        ebd: 'standard',
        esc: 'standard',
        tractionControl: 'standard',
        hillAssist: 'standard',
        hillDescentControl: 'standard',
        tpms: 'standard',
        rearParkingSensors: 'standard',
        rearCamera: hasRearCam ? 'standard' : 'not_available',
        threeSixtyCamera: has360Cam ? 'standard' : 'not_available',
      },
      exterior: {
        wheelSizeInches: wheelSize,
        alloyWheels: hasAlloys ? 'standard' : 'not_available',
        ledHeadlights: 'standard',
        ledDRLs: 'standard',
        sunroof: hasSunroof ? 'single_pane' : 'not_available',
      },
      interior: {
        airConditioning: 'standard',
        automaticClimateControl: 'standard',
        rearACVents: 'standard',
        ventilatedSeats: hasVentilated ? 'standard' : 'not_available',
      },
      infotainment: {
        touchscreen: hasScreen ? 'standard' : 'not_available',
        infotainmentScreenSizeInches: screenSize,
        speakerCount,
        appleCarPlay: hasScreen ? 'standard' : 'not_available',
        androidAuto: hasScreen ? 'standard' : 'not_available',
        wirelessAppleCarPlay: has10Screen ? 'standard' : 'not_available',
        wirelessAndroidAuto: has10Screen ? 'standard' : 'not_available',
        digitalInstrumentCluster: 'standard',
        steeringMountedControls: 'standard',
      },
      convenience: {
        keylessEntry: 'standard',
        pushButtonStart: 'standard',
        cruiseControl: hasCruise ? 'standard' : 'not_available',
        wirelessCharging: hasWirelessCharge ? 'standard' : 'not_available',
        powerWindowsFront: 'standard',
        powerWindowsRear: 'standard',
      },
    }),
    sources: [
      {
        name: 'CarWale Official Automotive Media',
        url: `https://www.carwale.com/tata-cars/punch-ev/${cfg.trim.toLowerCase().replace(/[^a-z0-9]/g, '-')}/`,
        type: 'reputable',
        checkedAt: '2026-10-17',
      },
      {
        name: 'TATA.ev Official Punch.ev Brochure',
        url: 'https://ev.tatamotors.com/punch-ev',
        type: 'official',
        checkedAt: '2026-10-17',
      },
    ],
    lastVerified: '2026-10-17',
  };
}

export const TATA_PUNCH_EV_VARIANTS: CarVariant[] = [
  // =========================================================================
  // 1. PUNCH EV SMART (1 Variant)
  // =========================================================================
  buildPunchEVVariant({
    trim: 'Smart',
    slug: 'smart-30-kwh',
    name: 'Smart 30.0 kWh',
    fullName: 'Tata Punch EV Smart 30.0 kWh Fast Charging',
    batteryKWh: 30.0,
    exShowroom: 999000,
    exShowroomLakh: 9.99,
    onRoadNashikLakh: 10.29,
    hasAlloys: false,
    hasSunroof: false,
  }),

  // =========================================================================
  // 2. PUNCH EV SMART PLUS (2 Variants)
  // =========================================================================
  buildPunchEVVariant({
    trim: 'Smart Plus',
    slug: 'smart-plus-30-kwh',
    name: 'Smart Plus 30.0 kWh',
    fullName: 'Tata Punch EV Smart Plus 30.0 kWh Fast Charging',
    batteryKWh: 30.0,
    exShowroom: 1069000,
    exShowroomLakh: 10.69,
    onRoadNashikLakh: 11.02,
    has10InchScreen: true,
    hasRearCamera: true,
    hasAlloys: false,
    hasSunroof: false,
  }),
  buildPunchEVVariant({
    trim: 'Smart Plus',
    slug: 'smart-plus-40-kwh',
    name: 'Smart Plus 40.0 kWh Long Range',
    fullName: 'Tata Punch EV Smart Plus 40.0 kWh Long Range Fast Charging',
    batteryKWh: 40.0,
    exShowroom: 1159000,
    exShowroomLakh: 11.59,
    onRoadNashikLakh: 11.91,
    has10InchScreen: true,
    hasRearCamera: true,
    hasAlloys: false,
    hasElectronicParkingBrake: true,
    hasSunroof: false,
  }),

  // =========================================================================
  // 3. PUNCH EV ADVENTURE (1 Variant)
  // =========================================================================
  buildPunchEVVariant({
    trim: 'Adventure',
    slug: 'adventure-40-kwh',
    name: 'Adventure 40.0 kWh Long Range',
    fullName: 'Tata Punch EV Adventure 40.0 kWh Long Range Fast Charging',
    batteryKWh: 40.0,
    exShowroom: 1239000,
    exShowroomLakh: 12.39,
    onRoadNashikLakh: 12.70,
    has10InchScreen: true,
    hasRearCamera: true,
    hasCruiseControl: true,
    hasElectronicParkingBrake: true,
    hasFogLamps: true,
    hasRoofRails: true,
    hasAlloys: false,
    hasSunroof: false,
  }),

  // =========================================================================
  // 4. PUNCH EV EMPOWERED (1 Variant)
  // =========================================================================
  buildPunchEVVariant({
    trim: 'Empowered',
    slug: 'empowered-40-kwh',
    name: 'Empowered 40.0 kWh Long Range',
    fullName: 'Tata Punch EV Empowered 40.0 kWh Long Range Fast Charging',
    batteryKWh: 40.0,
    exShowroom: 1319000,
    exShowroomLakh: 13.19,
    onRoadNashikLakh: 13.48,
    hasAlloys: true,
    hasDual10InchScreens: true,
    has360Camera: true,
    hasAirPurifier: true,
    hasWirelessCharger: true,
    hasCruiseControl: true,
    hasElectronicParkingBrake: true,
    hasFogLamps: true,
    hasRoofRails: true,
    hasSunroof: false,
  }),

  // =========================================================================
  // 5. PUNCH EV EMPOWERED PLUS S (1 Variant)
  // =========================================================================
  buildPunchEVVariant({
    trim: 'Empowered Plus S',
    slug: 'empowered-plus-s-40-kwh',
    name: 'Empowered Plus S 40.0 kWh Long Range',
    fullName: 'Tata Punch EV Empowered Plus S 40.0 kWh Long Range with Sunroof',
    batteryKWh: 40.0,
    exShowroom: 1349000,
    exShowroomLakh: 13.49,
    onRoadNashikLakh: 13.79,
    hasSunroof: true,
    hasAlloys: true,
    hasDual10InchScreens: true,
    has360Camera: true,
    hasVentilatedSeats: true,
    hasAirPurifier: true,
    hasWirelessCharger: true,
    hasCruiseControl: true,
    hasElectronicParkingBrake: true,
    hasFogLamps: true,
    hasRoofRails: true,
  }),
];
