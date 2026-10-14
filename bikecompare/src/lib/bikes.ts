import catalogData from '../../data/india-bike-models.json';
import type { Bike, BikeFilters, VehicleType, BikeCategory, FuelType } from '@/types/bike';

const allBikes: Bike[] = catalogData.bikes as unknown as Bike[];

const bikeBySlugMap = new Map<string, Bike>();
allBikes.forEach((b) => bikeBySlugMap.set(b.slug, b));

export function getAllBikes(): Bike[] {
  return allBikes;
}

export function getBikeBySlug(slug: string): Bike | undefined {
  return bikeBySlugMap.get(slug);
}

export function getBikesBySlugs(slugs: string[]): Bike[] {
  return slugs.map((s) => getBikeBySlug(s)).filter((b): b is Bike => b !== undefined);
}

export function getAllBrands(): string[] {
  return [...new Set(allBikes.map((b) => b.brand))].sort();
}

export function getAllVehicleTypes(): VehicleType[] {
  return [...new Set(allBikes.map((b) => b.vehicleType))];
}

export function getAllCategories(): BikeCategory[] {
  return [...new Set(allBikes.map((b) => b.category))];
}

export function getAllFuelTypes(): FuelType[] {
  return [...new Set(allBikes.map((b) => b.fuelType))];
}

export function filterBikes(filters: BikeFilters): Bike[] {
  let result = allBikes;

  // Search
  if (filters.search.trim()) {
    const q = filters.search.toLowerCase().trim();
    result = result.filter(
      (b) =>
        b.brand.toLowerCase().includes(q) ||
        b.model.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.vehicleType.toLowerCase().includes(q) ||
        b.tagline.toLowerCase().includes(q)
    );
  }

  // Brands
  if (filters.brands.length > 0) {
    result = result.filter((b) => filters.brands.includes(b.brand));
  }

  // Vehicle Types
  if (filters.vehicleTypes.length > 0) {
    result = result.filter((b) => filters.vehicleTypes.includes(b.vehicleType));
  }

  // Categories
  if (filters.categories.length > 0) {
    result = result.filter((b) => filters.categories.includes(b.category));
  }

  // Fuel Types
  if (filters.fuelTypes.length > 0) {
    result = result.filter((b) => filters.fuelTypes.includes(b.fuelType));
  }

  // Price range
  result = result.filter((b) => b.startingPrice >= filters.minPrice && b.startingPrice <= filters.maxPrice);

  // Displacement
  if (filters.minDisplacementCC !== null) {
    result = result.filter((b) => (b.displacementCC || 0) >= filters.minDisplacementCC!);
  }
  if (filters.maxDisplacementCC !== null) {
    result = result.filter((b) => (b.displacementCC || 0) <= filters.maxDisplacementCC!);
  }

  // Min Power
  if (filters.minPowerBhp !== null) {
    result = result.filter((b) => b.maxPowerBhp >= filters.minPowerBhp!);
  }

  // ABS
  if (filters.absTypes && filters.absTypes.length > 0) {
    result = result.filter((b) => filters.absTypes.some((a) => b.abs.toLowerCase().includes(a.toLowerCase())));
  }

  // Mileage
  if (filters.minMileage !== null) {
    result = result.filter((b) => (b.mileageKmpl || 0) >= filters.minMileage!);
  }

  // Electric Range
  if (filters.minElectricRange !== null) {
    result = result.filter((b) => (b.electricRangeKm || 0) >= filters.minElectricRange!);
  }

  // Sort
  switch (filters.sortBy) {
    case 'price-asc':
      result = [...result].sort((a, b) => a.startingPrice - b.startingPrice);
      break;
    case 'price-desc':
      result = [...result].sort((a, b) => b.startingPrice - a.startingPrice);
      break;
    case 'power':
      result = [...result].sort((a, b) => b.maxPowerBhp - a.maxPowerBhp);
      break;
    case 'mileage':
      result = [...result].sort((a, b) => (b.mileageKmpl || b.electricRangeKm || 0) - (a.mileageKmpl || a.electricRangeKm || 0));
      break;
    case 'popularity':
    default:
      break;
  }

  return result;
}
