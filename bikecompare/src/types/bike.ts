export type VehicleType = 'Motorcycle' | 'Scooter' | 'Electric Two-Wheeler';
export type BikeCategory =
  | 'Commuter'
  | 'Sport'
  | 'Cruiser'
  | 'Adventure'
  | 'Touring'
  | 'Scooter'
  | 'Cafe Racer'
  | 'Scrambler'
  | 'Moped';
export type FuelType = 'Petrol' | 'Electric' | 'CNG';
export type BikeStatus = 'active' | 'discontinued';

export interface Bike {
  id: string;
  slug: string;
  brand: string;
  model: string;
  series?: string;
  generation?: string;
  status?: BikeStatus;
  launchYear?: number;
  vehicleType: VehicleType;
  category: BikeCategory;
  startingPrice: number;
  maxPrice: number;
  fuelType: FuelType;
  displacementCC: number | null;
  maxPowerBhp: number;
  maxTorqueNm: number;
  transmission: string;
  mileageKmpl: number | null;
  electricRangeKm: number | null;
  batteryKWh: number | null;
  abs: string;
  kerbWeightKg: number;
  fuelTankLitres: number | null;
  tagline: string;
  image: string;
  sourceUrl?: string;
}

export interface BikeVariant {
  id: string;
  bikeId: string;
  modelSlug: string;
  variantName: string;
  price: number;
  status: BikeStatus;
  displacementCC: number | null;
  maxPowerBhp: number;
  maxTorqueNm: number;
  transmission: string;
  mileageKmpl: number | null;
  electricRangeKm: number | null;
  batteryKWh: number | null;
  chargingTimeHours?: number | null;
  brakes: string;
  wheels: string;
  kerbWeightKg: number;
  fuelTankLitres: number | null;
  colors?: string[];
  sourceUrl?: string;
}

export interface BikeImageCatalogEntry {
  modelId: string;
  modelSlug: string;
  brand: string;
  modelName: string;
  primaryImage: {
    url: string;
    source: string;
    sourceTier: 'official' | 'reputable_media' | 'press_kit';
    alt: string;
    verifiedAt: string;
    urlVerified: boolean;
  };
  additionalImages?: Array<{
    url: string;
    angle?: string;
    source?: string;
  }>;
}

export interface BikePriceSnapshot {
  bikeId: string;
  slug: string;
  brand: string;
  model: string;
  exShowroomPriceINR: number;
  maxPriceINR: number;
  estimatedOnRoadDelhiINR: number;
  estimatedOnRoadMumbaiINR: number;
  estimatedOnRoadBengaluruINR: number;
  priceFreshness: 'fresh' | 'historical' | 'unverified';
  lastVerifiedDate: string;
  sources: Array<{
    platform: string;
    label: string;
    url: string;
    isOfficial: boolean;
  }>;
}

export interface BikeFilters {
  search: string;
  brands: string[];
  vehicleTypes: VehicleType[];
  categories: BikeCategory[];
  fuelTypes: FuelType[];
  status?: 'all' | 'active' | 'discontinued';
  minPrice: number;
  maxPrice: number;
  minDisplacementCC: number | null;
  maxDisplacementCC: number | null;
  minPowerBhp: number | null;
  transmissions: string[];
  absTypes: string[];
  minMileage: number | null;
  minElectricRange: number | null;
  sortBy: 'popularity' | 'price-asc' | 'price-desc' | 'power' | 'mileage';
}
