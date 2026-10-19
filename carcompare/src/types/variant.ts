/**
 * types/variant.ts
 *
 * Canonical TypeScript interfaces for Static Variant-Level Architecture:
 * Manufacturer -> Brand -> Model -> Generation -> Variant
 *
 * v2: Extended with comprehensive spec schema (sections A–V).
 * All new fields are optional/nullable for backwards compatibility.
 */

import type { FuelType, TransmissionType, DrivetrainType, NCAPRating } from './car';

export type FeatureAvailability = 'standard' | 'optional' | 'not_available' | 'unknown';

export interface VariantSource {
  name: string;
  url: string | null;
  type: 'official' | 'reputable';
  checkedAt: string;
}

export interface VariantPricing {
  exShowroom: number | null; // In INR (e.g. 1099900)
  exShowroomLakh: number | null; // In Lakhs (e.g. 10.99)
  onRoadNashik?: number | null;
  onRoadNashikLakh?: number | null;
  currency: 'INR';
  priceEffectiveFrom?: string | null;
  priceEffectiveTo?: string | null;
}

export interface VariantPowertrain {
  fuelType: FuelType;
  engineName: string | null;
  engineDisplacementCC: number | null;
  cylinders: number | null;
  aspiration: 'Naturally Aspirated' | 'Turbocharged' | 'Supercharged' | 'Electric Motor' | null;
  maxPowerBhp: number | null;
  maxTorqueNm: number | null;
  transmission: TransmissionType;
  drivetrain: DrivetrainType | null;
  batteryCapacityKWh: number | null;
  electricMotorPowerBhp: number | null;
  electricRangeKm: number | null;
}

export interface VariantMileageDetail {
  value: number;
  unit: 'km/l' | 'km/kg' | 'km';
  type: 'ARAI' | 'WLTP' | 'EPA' | 'manufacturer_claimed' | 'MIDC' | 'real_world';
  source?: string;
  verified: boolean;
}

export interface VariantPerformance {
  mileageKmpl: number | null;
  mileage?: VariantMileageDetail | null;
  zeroToHundredSec: number | null;
  topSpeedKmph: number | null;
}

export interface VariantDimensions {
  lengthMm: number | null;
  widthMm: number | null;
  heightMm: number | null;
  wheelbaseMm: number | null;
  groundClearanceMm: number | null;
  kerbWeightKg: number | null;
  bootSpaceLitres: number | null;
  fuelTankLitres: number | null;
}

export interface VariantSafetyFeatures {
  airbagsCount: number | null;
  abs: FeatureAvailability;
  ebd: FeatureAvailability;
  esc: FeatureAvailability;
  tractionControl: FeatureAvailability;
  hillAssist: FeatureAvailability;
  hillDescentControl: FeatureAvailability;
  tpms: FeatureAvailability;
  rearParkingSensors: FeatureAvailability;
  frontParkingSensors: FeatureAvailability;
  rearCamera: FeatureAvailability;
  threeSixtyCamera: FeatureAvailability;
  blindSpotMonitoring: FeatureAvailability;
  laneDepartureWarning: FeatureAvailability;
  laneKeepAssist: FeatureAvailability;
  adaptiveCruiseControl: FeatureAvailability;
  forwardCollisionWarning: FeatureAvailability;
  autonomousEmergencyBraking: FeatureAvailability;
  adasLevel: 'None' | 'Level 1' | 'Level 2' | null;
  ncapRating: NCAPRating;
}

export interface VariantExteriorFeatures {
  wheelSizeInches: number | null;
  alloyWheels: FeatureAvailability;
  ledHeadlights: FeatureAvailability;
  ledDRLs: FeatureAvailability;
  fogLights: FeatureAvailability;
  roofRails: FeatureAvailability;
  sunroof: FeatureAvailability;
  panoramicSunroof: FeatureAvailability;
  poweredTailgate: FeatureAvailability;
}

export interface VariantInteriorFeatures {
  airConditioning: FeatureAvailability;
  automaticClimateControl: FeatureAvailability;
  rearACVents: FeatureAvailability;
  ventilatedSeats: FeatureAvailability;
  heatedSeats: FeatureAvailability;
  poweredDriverSeat: FeatureAvailability;
  poweredPassengerSeat: FeatureAvailability;
  leatherSeats: FeatureAvailability;
  rearSeatRecline: FeatureAvailability;
  ambientLighting: FeatureAvailability;
  wirelessCharging: FeatureAvailability;
}

export interface VariantInfotainmentFeatures {
  infotainmentScreenSizeInches: number | null;
  digitalInstrumentCluster: FeatureAvailability;
  androidAuto: FeatureAvailability;
  appleCarPlay: FeatureAvailability;
  wirelessAndroidAuto: FeatureAvailability;
  wirelessAppleCarPlay: FeatureAvailability;
  speakerCount: number | null;
  premiumAudio: FeatureAvailability;
  connectedCarTechnology: FeatureAvailability;
  headUpDisplay: FeatureAvailability;
}

export interface VariantConvenienceFeatures {
  keylessEntry: FeatureAvailability;
  pushButtonStart: FeatureAvailability;
  cruiseControl: FeatureAvailability;
  adaptiveCruiseControl: FeatureAvailability;
  autoDimmingIRVM: FeatureAvailability;
  rainSensingWipers: FeatureAvailability;
  automaticHeadlights: FeatureAvailability;
}

export interface VariantFeatures {
  safety: VariantSafetyFeatures;
  exterior: VariantExteriorFeatures;
  interior: VariantInteriorFeatures;
  infotainment: VariantInfotainmentFeatures;
  convenience: VariantConvenienceFeatures;
}

// ----------------------------------------------------------
// Extended Spec Interfaces (v2) — Section A additions
// ----------------------------------------------------------
export interface VariantExtendedPowertrain {
  /** RPM at maximum power, e.g. 6000 */
  maxPowerRpm: number | null;
  /** RPM at maximum torque, e.g. 3400 */
  maxTorqueRpm: number | null;
  /** Valves per cylinder, e.g. 4 */
  valvesPerCylinder: number | null;
  /** Engine family / series name, e.g. "Revotron 1.2" */
  engineFamily: string | null;
  /** Emission standard, e.g. "BS6 Phase 2" */
  emissionStandard: string | null;
  /** E20 / E85 ethanol compatibility */
  ethanolCompatibility: boolean | null;
  /** Idle start-stop system */
  idleStartStop: boolean | null;
  /** Number of gears */
  gears: number | null;
  /** Automatic sub-type, e.g. "Torque Converter", "Dual-Clutch", "CVT" */
  automaticSubType: string | null;
  /** Drive modes, e.g. ["Eco", "City", "Sport"] */
  driveModes: string[] | null;
  /** Terrain modes, e.g. ["Mud", "Sand", "Rock"] */
  terrainModes: string[] | null;
  /** Limited slip differential */
  lsd: boolean | null;
  /** Mechanical or electronic differential lock */
  differentialLock: boolean | null;
}

// ----------------------------------------------------------
// Section C: Suspension
// ----------------------------------------------------------
export interface VariantSuspension {
  /** Front suspension type, e.g. "MacPherson Strut" */
  front: string | null;
  /** Rear suspension type, e.g. "Twist Beam" */
  rear: string | null;
}

// ----------------------------------------------------------
// Section D additions
// ----------------------------------------------------------
export interface VariantExtendedDimensions {
  /** Number of seating rows */
  seatingRows: number | null;
  /** Number of doors */
  numberOfDoors: number | null;
  /** Minimum turning radius in metres */
  minimumTurningRadiusM: number | null;
}

// ----------------------------------------------------------
// Section E: Tyres and Wheels
// ----------------------------------------------------------
export interface VariantTyres {
  /** Front tyre size, e.g. "175/65 R15" */
  frontTyreSize: string | null;
  /** Rear tyre size (if different from front) */
  rearTyreSize: string | null;
  /** Wheel material, e.g. "Alloy", "Steel" */
  wheelMaterial: string | null;
  /** Spare wheel type, e.g. "Full-size", "Space-saver", "None" */
  spareWheelType: string | null;
  /** Spare tyre size or description */
  spareTyreDetails: string | null;
  /** Tyre construction, e.g. "Tubeless Radial" */
  tyreConstruction: string | null;
}

// ----------------------------------------------------------
// Section F: Warranty
// ----------------------------------------------------------
export interface VariantWarranty {
  /** Standard vehicle warranty in years */
  vehicleWarrantyYears: number | null;
  /** Standard vehicle warranty in km */
  vehicleWarrantyKm: number | null;
  /** Powertrain/engine warranty in years (if separately specified) */
  powertrainWarrantyYears: number | null;
  /** Powertrain warranty in km */
  powertrainWarrantyKm: number | null;
  /** Extended warranty available from dealer/manufacturer */
  extendedWarrantyAvailable: boolean | null;
}

// ----------------------------------------------------------
// Section G & H: Extended Safety
// ----------------------------------------------------------
export interface VariantExtendedSafety {
  // ADAS active safety
  rearCollisionAssist: FeatureAvailability;
  highBeamAssist: FeatureAvailability;
  automaticParkLock: FeatureAvailability;
  emergencyBrakeLightFlashing: FeatureAvailability;
  antiTheftAlarm: FeatureAvailability;
  corneringBrakeControl: FeatureAvailability;
  acousticVehicleAlertingSystem: FeatureAvailability;
  thermalIncidentProtection: FeatureAvailability;
  // Passive safety — airbag breakdown
  driverAirbag: FeatureAvailability;
  frontPassengerAirbag: FeatureAvailability;
  curtainAirbags: FeatureAvailability;
  driverSideAirbag: FeatureAvailability;
  frontPassengerSideAirbag: FeatureAvailability;
  otherSideAirbags: FeatureAvailability;
  // Seatbelts & restraints
  seatbeltPretensioners: FeatureAvailability;
  seatbeltLoadLimiters: FeatureAvailability;
  rearMiddleThreePointSeatbelt: FeatureAvailability;
  isofixChildSeatAnchors: FeatureAvailability;
  childSafetyLocks: FeatureAvailability;
  // General passive safety
  engineImmobiliser: FeatureAvailability;
  punctureRepairKit: FeatureAvailability;
  tyreInflator: FeatureAvailability;
  dashcam: FeatureAvailability;
  // NCAP metadata
  ncapTestYear: number | null;
  ncapTestOrganization: string | null;
  /** Exact variant designation tested by NCAP, e.g. "XZ+ 6-Airbag" */
  ncapTestedVariant: string | null;
}

// ----------------------------------------------------------
// Section I: Extended Brakes
// ----------------------------------------------------------
export interface VariantBrakes {
  frontBrakeType: string | null;
  rearBrakeType: string | null;
  abs: FeatureAvailability;
  brakeAssist: FeatureAvailability;
  ebd: FeatureAvailability;
  corneringBrakeControl: FeatureAvailability;
  torqueVectoringBrakeAssist: FeatureAvailability;
  esp: FeatureAvailability;
  tractionControl: FeatureAvailability;
  hillHoldControl: FeatureAvailability;
  hillDescentControl: FeatureAvailability;
  brakeDiscWiping: FeatureAvailability;
  motorSlipRegulation: FeatureAvailability;
  multiCollisionBraking: FeatureAvailability;
}

// ----------------------------------------------------------
// Section J: AC and Climate Control
// ----------------------------------------------------------
export interface VariantClimate {
  acType: string | null;
  frontACZones: number | null;
  fanSpeedControl: FeatureAvailability;
  heater: FeatureAvailability;
  airPurifier: FeatureAvailability;
}

// ----------------------------------------------------------
// Section K: Doors, Mirrors and Wipers
// ----------------------------------------------------------
export interface VariantDoorsAndMirrors {
  centralLocking: FeatureAvailability;
  centralLockingType: string | null;
  speedSensingDoorLocks: FeatureAvailability;
  insideRearViewMirror: string | null;
  vanityMirrors: FeatureAvailability;
  extendableSunVisors: FeatureAvailability;
  orvmAdjustment: string | null;
  orvmFinish: string | null;
  antiGlareMirrors: FeatureAvailability;
  memoryORVMs: FeatureAvailability;
  heatedORVMs: FeatureAvailability;
  rainSensingWipers: FeatureAvailability;
  rearWiper: FeatureAvailability;
  integratedWasherJets: FeatureAvailability;
  rearDefogger: FeatureAvailability;
  bootOpeningMechanism: string | null;
}

// ----------------------------------------------------------
// Section L: Sunroof and Windows
// ----------------------------------------------------------
export interface VariantSunroofWindows {
  sunroofType: string | null;
  remoteSunroofControl: FeatureAvailability;
  powerWindows: FeatureAvailability;
  windowSunshades: FeatureAvailability;
}

// ----------------------------------------------------------
// Section M: Driver Assistance and Parking
// ----------------------------------------------------------
export interface VariantParkingAssist {
  keylessEntry: FeatureAvailability;
  pushButtonStart: FeatureAvailability;
  cruiseControl: FeatureAvailability;
  adaptiveCruiseControl: FeatureAvailability;
  electronicParkingBrake: FeatureAvailability;
  rearParkingSensors: FeatureAvailability;
  frontParkingSensors: FeatureAvailability;
  parkingCamera: FeatureAvailability;
  surroundViewCamera: FeatureAvailability;
  parkingAssist: FeatureAvailability;
}

// ----------------------------------------------------------
// Section N: Storage
// ----------------------------------------------------------
export interface VariantStorage {
  bootSpaceLitres: number | null;
  internalBootOpener: FeatureAvailability;
  frontCupholders: FeatureAvailability;
  bottleHoldersInDoors: FeatureAvailability;
  frontDoorPockets: FeatureAvailability;
  foldableSeatbackTables: FeatureAvailability;
  thirdRowCupholders: FeatureAvailability;
  heatedCooledCupholders: FeatureAvailability;
  cooledGlovebox: FeatureAvailability;
  lockableGlovebox: FeatureAvailability;
  driverArmrestStorage: FeatureAvailability;
}

// ----------------------------------------------------------
// Section O: Seating and Ergonomics
// ----------------------------------------------------------
export interface VariantSeating {
  driverSeatAdjustmentType: string | null;
  driverSeatAdjustmentWays: number | null;
  driverSeatForwardBack: FeatureAvailability;
  driverSeatBackrestAdjust: FeatureAvailability;
  driverSeatHeadrestAdjust: FeatureAvailability;
  frontPassengerSeatAdjust: string | null;
  seatUpholstery: string | null;
  frontHeadrests: FeatureAvailability;
  rearHeadrests: FeatureAvailability;
  deadPedal: FeatureAvailability;
  ventilatedFrontSeats: FeatureAvailability;
  massageSeats: FeatureAvailability;
  driverArmrest: FeatureAvailability;
  rearArmrest: FeatureAvailability;
  foldableSeatbackTable: FeatureAvailability;
}

// ----------------------------------------------------------
// Section Q: Instrument Cluster
// ----------------------------------------------------------
export interface VariantInstrumentCluster {
  clusterType: string | null;
  clusterSizeInches: number | null;
  digitalSpeedometer: FeatureAvailability;
  digitalTachometer: FeatureAvailability;
  gearIndicator: FeatureAvailability;
  gearShiftIndicator: FeatureAvailability;
  headsUpDisplay: FeatureAvailability;
  tripMeterCount: number | null;
  digitalClock: FeatureAvailability;
  averageFuelConsumption: FeatureAvailability;
  distanceToEmpty: FeatureAvailability;
  lowFuelWarning: FeatureAvailability;
  instantaneousFuelConsumption: FeatureAvailability;
  averageSpeed: FeatureAvailability;
}

// ----------------------------------------------------------
// Section R: Steering
// ----------------------------------------------------------
export interface VariantSteering {
  powerAssistanceType: string | null;
  steeringWheelDesign: string | null;
  spokes: number | null;
  tiltAdjustment: FeatureAvailability;
  telescopicAdjustment: FeatureAvailability;
  steeringMountedControls: FeatureAvailability;
}

// ----------------------------------------------------------
// Section S: Lighting
// ----------------------------------------------------------
export interface VariantLighting {
  headlampType: string | null;
  headlightHeightAdjustment: FeatureAvailability;
  drl: FeatureAvailability;
  fogLights: FeatureAvailability;
  followMeHomeHeadlamps: FeatureAvailability;
  automaticHeadlamps: FeatureAvailability;
  sequentialTurnIndicators: FeatureAvailability;
  puddleLamps: FeatureAvailability;
  welcomeGoodbyeLighting: FeatureAvailability;
  taillightType: string | null;
  ledTaillights: FeatureAvailability;
  ambientInteriorLighting: FeatureAvailability;
  ambientLightingColours: number | null;
}

// ----------------------------------------------------------
// Section T: Connected Car
// ----------------------------------------------------------
export interface VariantConnectedCar {
  connected: FeatureAvailability;
  appName: string | null;
  alexaCompatibility: FeatureAvailability;
  summonMode: FeatureAvailability;
  remoteSunroofControl: FeatureAvailability;
  remoteLockUnlock: FeatureAvailability;
}

// ----------------------------------------------------------
// Section U: Design and Styling
// ----------------------------------------------------------
export interface VariantStyling {
  bodyColouredBumpers: FeatureAvailability;
  spoiler: FeatureAvailability;
  roofRails: FeatureAvailability;
  skidPlate: FeatureAvailability;
  bodyKit: FeatureAvailability;
  interiorColourTheme: string | null;
  scuffPlates: FeatureAvailability;
}

// ----------------------------------------------------------
// Section V: Warnings and Alerts
// ----------------------------------------------------------
export interface VariantWarnings {
  overspeedWarning: FeatureAvailability;
  overspeedThresholdKmph: number | null;
  doorAjarWarning: FeatureAvailability;
  seatbeltWarning: FeatureAvailability;
  automaticCrashAlert: FeatureAvailability;
}

export interface CarVariant {
  id: string; // Unique ID, e.g. "hyundai-creta-sx-o-turbo-dct"
  modelId: string; // References model slug, e.g. "hyundai-creta"
  generationId?: string | null;
  name: string; // e.g. "SX(O) 1.5 Turbo DCT"
  fullName: string; // e.g. "Hyundai Creta SX(O) 1.5 Turbo DCT"
  slug: string; // URL-safe slug, e.g. "sx-o-1-5-turbo-dct"
  trim: string; // Trim family: "E", "EX", "S", "SX", "SX(O)"
  status: 'active' | 'discontinued';
  variantStatus: 'verified' | 'needs_verification';
  pricing: VariantPricing;
  powertrain: VariantPowertrain;
  performance: VariantPerformance;
  dimensions?: VariantDimensions | null; // Can inherit from model
  features: VariantFeatures;
  sources: VariantSource[];
  lastVerified: string;
  // v2 extended spec fields — all optional for backwards compatibility
  extendedPowertrain?: VariantExtendedPowertrain | null;
  suspension?: VariantSuspension | null;
  extendedDimensions?: VariantExtendedDimensions | null;
  tyres?: VariantTyres | null;
  warranty?: VariantWarranty | null;
  extendedSafety?: VariantExtendedSafety | null;
  brakes?: VariantBrakes | null;
  climate?: VariantClimate | null;
  doorsAndMirrors?: VariantDoorsAndMirrors | null;
  sunroofWindows?: VariantSunroofWindows | null;
  parkingAssist?: VariantParkingAssist | null;
  storage?: VariantStorage | null;
  seating?: VariantSeating | null;
  instrumentCluster?: VariantInstrumentCluster | null;
  steering?: VariantSteering | null;
  lighting?: VariantLighting | null;
  connectedCar?: VariantConnectedCar | null;
  styling?: VariantStyling | null;
  warnings?: VariantWarnings | null;
}

export interface ModelVariantGroup {
  modelId: string;
  modelName: string;
  brand: string;
  totalVariants: number;
  activeVariants: number;
  priceRangeLakh: {
    min: number;
    max: number;
  };
  trimLadder: string[]; // e.g. ["E", "EX", "S", "SX", "SX(O)"]
  variants: CarVariant[];
}

export interface MasterVariantCatalog {
  metadata: {
    country: string;
    market: string;
    lastUpdated: string;
    catalogVersion: string;
    totalModelsWithVariants: number;
    totalVariants: number;
    activeVariants: number;
    verifiedVariants: number;
    needsVerificationVariants: number;
  };
  models: ModelVariantGroup[];
}

/** Canonical list of high-value equipment items used in feature matrix and "What do I get for more money" */
export interface FeatureMatrixItem {
  key: string;
  category: 'Safety' | 'Exterior' | 'Comfort' | 'Infotainment' | 'Convenience';
  label: string;
  getValue: (variant: CarVariant) => FeatureAvailability | string | number | null;
}
