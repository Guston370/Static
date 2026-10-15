export type VehicleType = 'Motorcycle' | 'Scooter' | 'Electric Two-Wheeler';
export type BikeCategory =
  | 'Commuter'
  | 'Sport'
  | 'Cruiser'
  | 'Adventure'
  | 'Touring'
  | 'Scooter'
  | 'Moped'
  | 'Cafe Racer'
  | 'Scrambler';
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

export interface BikeFilters {
  search: string;
  brands: string[];
  vehicleTypes: VehicleType[];
  categories: BikeCategory[];
  fuelTypes: FuelType[];
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
