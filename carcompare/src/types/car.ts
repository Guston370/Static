// ============================================================
// Car Data Model — Phase 1
// Architecture: Brand → Model → Generation → Variant (future)
// Phase 1 operates at the Model level with variant-ready fields.
// ============================================================

export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'MildHybrid' | 'StrongHybrid' | 'PlugInHybrid' | 'CNG' | 'Petrol+CNG';
export type TransmissionType = 'Manual' | 'Automatic' | 'CVT' | 'DCT' | 'AMT' | 'iMT' | 'Single-Speed Automatic';
export type DrivetrainType = 'FWD' | 'RWD' | 'AWD' | '4WD';
export type BodyType =
  | 'Hatchback'
  | 'Sedan'
  | 'SUV'
  | 'Compact SUV'
  | 'Micro SUV'
  | 'Coupe SUV'
  | 'MPV'
  | 'MUV'
  | 'Coupe'
  | 'Convertible'
  | 'Pickup Truck'
  | 'Van'
  | 'Crossover';
export type NCAPRating = 0 | 1 | 2 | 3 | 4 | 5 | null;

// ----------------------------------------------------------
// Source & Verification Metadata
// Tracks where data came from and when it was last verified.
// ----------------------------------------------------------
export interface DataSource {
  /** Primary source URL for this car's specifications */
  url: string;
  /** Human-readable source name (e.g. "Tata Motors official site") */
  name: string;
  /** ISO date string of when specs were last verified */
  lastVerified: string;
}

// ----------------------------------------------------------
// Engine & Powertrain
// ----------------------------------------------------------
export interface EngineSpecs {
  fuelType: FuelType;
  /** Engine displacement in cc. null for EVs. */
  displacementCC: number | null;
  cylinders: number | null;
  turbo: boolean;
  /** Maximum power in bhp */
  maxPowerBhp: number;
  /** Maximum torque in Nm */
  maxTorqueNm: number;
  transmission: TransmissionType;
  drivetrain: DrivetrainType;
}

// ----------------------------------------------------------
// Dimensions & Capacity
// ----------------------------------------------------------
export interface DimensionSpecs {
  /** Overall length in mm */
  lengthMm: number;
  /** Overall width in mm */
  widthMm: number;
  /** Overall height in mm */
  heightMm: number;
  /** Wheelbase in mm */
  wheelbaseMm: number;
  /** Ground clearance in mm */
  groundClearanceMm: number;
  /** Kerb weight in kg */
  kerbWeightKg: number | null;
  /** Boot space in litres */
  bootSpaceLitres: number;
  /** Fuel tank capacity in litres. null for EVs. */
  fuelTankLitres: number | null;
  /** Battery capacity in kWh. null for non-EVs. */
  batteryKWh: number | null;
}

// ----------------------------------------------------------
// Performance
// ----------------------------------------------------------
export interface PerformanceSpecs {
  /** ARAI/WLTP certified mileage in km/l. null for EVs. */
  mileageKmpl: number | null;
  /** Range in km. null for non-EVs. */
  rangeKm: number | null;
  /** 0 to 100 km/h in seconds. null if unavailable. */
  zeroToHundredSec: number | null;
  /** Top speed in km/h. null if unavailable. */
  topSpeedKmph: number | null;
}

// ----------------------------------------------------------
// Safety
// ----------------------------------------------------------
export interface SafetySpecs {
  /** Global NCAP (or Bharat NCAP) star rating. null = not tested. */
  ncapRating: NCAPRating;
  /** Number of airbags */
  airbagsCount: number;
  abs: boolean;
  ebd: boolean;
  /** Electronic Stability Control */
  esc: boolean;
  tractionControl: boolean;
  hillStartAssist: boolean;
  /** Advanced Driver Assistance Systems */
  adas: boolean;
  /** Rear parking camera */
  rearParkingCamera: boolean;
  /** Tyre Pressure Monitoring System */
  tpms: boolean;
  /** Rear parking sensors */
  rearParkingSensors: boolean;
  /** Front parking sensors */
  frontParkingSensors: boolean;
}

// ----------------------------------------------------------
// Features
// ----------------------------------------------------------
export interface FeatureSpecs {
  sunroof: boolean;
  /** Panoramic sunroof */
  panoramicSunroof: boolean;
  ventilatedFrontSeats: boolean;
  poweredDriverSeat: boolean;
  /** Digital instrument cluster */
  digitalCluster: boolean;
  /** Infotainment screen size in inches. null if not present. */
  infotainmentSizeInches: number | null;
  appleCarPlay: boolean;
  androidAuto: boolean;
  wirelessCharging: boolean;
  /** Heads-up display */
  hud: boolean;
  ambientLighting: boolean;
  /** Connected car features / OTA updates */
  connectedCar: boolean;
  /** Over-the-air software updates */
  otaUpdates: boolean;
  /** Automatic climate control */
  autoClimate: boolean;
  /** Rear AC vents */
  rearACVents: boolean;
  keylessEntry: boolean;
  pushButtonStart: boolean;
  cruiseControl: boolean;
  adaptiveCruiseControl: boolean;
}

// ----------------------------------------------------------
// Pricing
// ----------------------------------------------------------
export interface PricingInfo {
  /** Minimum ex-showroom price in INR (lakhs) */
  minPriceLakh: number;
  /** Maximum ex-showroom price in INR (lakhs) */
  maxPriceLakh: number;
  currency: 'INR';
}

// ----------------------------------------------------------
// Variant (future Phase 2+ use)
// In Phase 1, cars are modelled at the base-variant level.
// This interface is defined now so the architecture is ready.
// ----------------------------------------------------------
export interface CarVariant {
  id: string;
  name: string;
  /** e.g. "XE", "XM", "XZ+", "XZ+ Lux" */
  trim: string;
  priceLakh: number;
  fuelType: FuelType;
  transmission: TransmissionType;
  // Future: override any spec from the parent model
}

// ----------------------------------------------------------
// Generation (future Phase 2+ use)
// ----------------------------------------------------------
export interface CarGeneration {
  generationNumber: number;
  /** e.g. "2023–present" */
  period: string;
  variants: CarVariant[];
}

export interface ModelMileageSummary {
  display: string;
  label: 'Mileage' | 'Range' | 'Efficiency';
  unit: string;
  hasVerifiedData: boolean;
  minKmpl?: number | null;
  maxKmpl?: number | null;
  minRangeKm?: number | null;
  maxRangeKm?: number | null;
}

// ----------------------------------------------------------
// Core Car Model (Phase 1 primary type)
// ----------------------------------------------------------
export interface Car {
  // Identity
  id: string;
  /** URL-safe slug, e.g. "tata-nexon" */
  slug: string;
  brand: string;
  model: string;
  /** Full display name, e.g. "Tata Nexon" */
  displayName: string;
  /** Facelift / generation label, e.g. "2023 Facelift" */
  generation: string;
  launchYear: number;
  bodyType: BodyType;
  seatingCapacity: number;

  // Media
  /**
   * Primary hero image URL from verified real automotive photography (data/car-images.json).
   * Prioritizes front_3_4 view.
   */
  primaryImage: string;
  /** Meaningful descriptive alt text for accessibility */
  primaryImageAlt?: string;
  /** Verified image source credit */
  primaryImageSource?: string;
  /** Camera perspective angle of primary image (e.g. "front_3_4") */
  primaryImageAssetAngle?: string;
  /** Additional gallery images */
  images: string[];

  // Powertrain & Efficiency summary (variant-aware)
  mileageSummary?: ModelMileageSummary;
  availableFuelTypes?: string[];
  availableTransmissions?: string[];

  // Specifications
  pricing: PricingInfo;
  engine: EngineSpecs;
  dimensions: DimensionSpecs;
  performance: PerformanceSpecs;
  safety: SafetySpecs;
  features: FeatureSpecs;

  // Editorial
  pros: string[];
  cons: string[];
  /** Short one-line summary for cards */
  tagline: string;
  /** 2–3 sentence description */
  description: string;

  // Data quality
  dataSource: DataSource;

  /**
   * Phase 1 popularity rank (1 = most popular).
   * Will be replaced by real analytics in Phase 2+.
   */
  popularityRank: number;

  // Future: generations: CarGeneration[];
}

// ----------------------------------------------------------
// Comparison types (used by lib/comparison.ts)
// ----------------------------------------------------------
export type ComparisonCategory =
  | 'performance'
  | 'safety'
  | 'efficiency'
  | 'features'
  | 'practicality'
  | 'value';

export interface CategoryScore {
  category: ComparisonCategory;
  label: string;
  score: number; // 0–10
  maxScore: 10;
  winner: boolean;
}

export interface CarScore {
  carId: string;
  slug: string;
  displayName: string;
  categories: CategoryScore[];
  overallScore: number; // 0–10, weighted average
}

export interface ComparisonResult {
  cars: CarScore[];
  /** slug of the overall winner */
  overallWinner: string;
}

// ----------------------------------------------------------
// Filter & Search types (used by Cars listing page)
// ----------------------------------------------------------
export interface CarFilters {
  search: string;
  brands: string[];
  bodyTypes: BodyType[];
  fuelTypes: FuelType[];
  transmissions: TransmissionType[];
  minPrice: number | null;
  maxPrice: number | null;
  sortBy: 'price-asc' | 'price-desc' | 'popularity' | 'power';
}
