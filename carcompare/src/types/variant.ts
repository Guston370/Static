/**
 * types/variant.ts
 *
 * Canonical TypeScript interfaces for Static Variant-Level Architecture:
 * Manufacturer -> Brand -> Model -> Generation -> Variant
 */

import type { FuelType, TransmissionType, DrivetrainType, NCAPRating } from './car';

export type FeatureAvailability = 'standard' | 'optional' | 'not_available';

export interface VariantSource {
  name: string;
  url: string | null;
  type: 'official' | 'reputable';
  checkedAt: string;
}

export interface VariantPricing {
  exShowroom: number | null; // In INR (e.g. 1099900)
  exShowroomLakh: number | null; // In Lakhs (e.g. 10.99)
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
