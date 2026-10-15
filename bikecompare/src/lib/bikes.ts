import catalogData from '../../data/india-bike-models.json';
import variantsData from '../../data/india-bike-variants.json';
import imagesData from '../../data/bike-images.json';
import pricesData from '../../data/bike-prices.json';

import type {
  Bike,
  BikeFilters,
  VehicleType,
  BikeCategory,
  FuelType,
  BikeVariant,
  BikeImageCatalogEntry,
  BikePriceSnapshot,
  BikeStatus,
} from '@/types/bike';

const allBikes: Bike[] = catalogData.bikes as unknown as Bike[];
const allVariants: BikeVariant[] = (variantsData.variants || []) as unknown as BikeVariant[];
const allImages: BikeImageCatalogEntry[] = (imagesData.models || []) as unknown as BikeImageCatalogEntry[];
const allPrices: Record<string, BikePriceSnapshot> = (pricesData.snapshots || {}) as unknown as Record<string, BikePriceSnapshot>;

const bikeBySlugMap = new Map<string, Bike>();
const bikeByIdMap = new Map<string, Bike>();
allBikes.forEach((b) => {
  bikeBySlugMap.set(b.slug, b);
  bikeByIdMap.set(b.id, b);
});

const variantsByBikeId = new Map<string, BikeVariant[]>();
allVariants.forEach((v) => {
  const list = variantsByBikeId.get(v.bikeId) || [];
  list.push(v);
  variantsByBikeId.set(v.bikeId, list);
});

const imageByModelId = new Map<string, BikeImageCatalogEntry>();
allImages.forEach((img) => imageByModelId.set(img.modelId, img));

export function getAllBikes(): Bike[] {
  return allBikes;
}

export function getActiveBikes(): Bike[] {
  return allBikes.filter((b) => b.status === 'active' || !b.status);
}

export function getDiscontinuedBikes(): Bike[] {
  return allBikes.filter((b) => b.status === 'discontinued');
}

export function getBikeBySlug(slug: string): Bike | undefined {
  return bikeBySlugMap.get(slug);
}

export function getBikeById(id: string): Bike | undefined {
  return bikeByIdMap.get(id);
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

export function getBikeVariants(bikeId: string): BikeVariant[] {
  return variantsByBikeId.get(bikeId) || [];
}

export function getBikeImageCatalogEntry(bikeId: string): BikeImageCatalogEntry | undefined {
  return imageByModelId.get(bikeId);
}

export function getBikePriceSnapshot(bikeId: string): BikePriceSnapshot | undefined {
  return allPrices[bikeId];
}

export function filterBikes(filters: BikeFilters): Bike[] {
  let result = allBikes;

  // Status Filter (All, Active, Discontinued)
  if (filters.status && filters.status !== 'all') {
    if (filters.status === 'active') {
      result = result.filter((b) => b.status === 'active' || !b.status);
    } else if (filters.status === 'discontinued') {
      result = result.filter((b) => b.status === 'discontinued');
    }
  }

  // Search - tokenized matching across brand, model, series, category, vehicleType, tagline, launchYear
  if (filters.search && filters.search.trim()) {
    const tokens = filters.search.toLowerCase().trim().split(/\s+/).filter(Boolean);
    result = result.filter((b) => {
      const searchTarget = [
        b.brand,
        b.model,
        b.series || '',
        b.generation || '',
        b.category,
        b.vehicleType,
        b.tagline,
        b.launchYear ? b.launchYear.toString() : '',
      ]
        .join(' ')
        .toLowerCase();
      return tokens.every((token) => searchTarget.includes(token));
    });
  }

  // Brands
  if (filters.brands && filters.brands.length > 0) {
    result = result.filter((b) => filters.brands.includes(b.brand));
  }

  // Vehicle Types
  if (filters.vehicleTypes && filters.vehicleTypes.length > 0) {
    result = result.filter((b) => filters.vehicleTypes.includes(b.vehicleType));
  }

  // Categories
  if (filters.categories && filters.categories.length > 0) {
    result = result.filter((b) => filters.categories.includes(b.category));
  }

  // Fuel Types
  if (filters.fuelTypes && filters.fuelTypes.length > 0) {
    result = result.filter((b) => filters.fuelTypes.includes(b.fuelType));
  }

  // Price range
  if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
    result = result.filter((b) => b.startingPrice >= filters.minPrice && b.startingPrice <= filters.maxPrice);
  }

  // Displacement
  if (filters.minDisplacementCC !== null && filters.minDisplacementCC !== undefined) {
    result = result.filter((b) => (b.displacementCC || 0) >= filters.minDisplacementCC!);
  }
  if (filters.maxDisplacementCC !== null && filters.maxDisplacementCC !== undefined) {
    result = result.filter((b) => (b.displacementCC || 0) <= filters.maxDisplacementCC!);
  }

  // Min Power
  if (filters.minPowerBhp !== null && filters.minPowerBhp !== undefined) {
    result = result.filter((b) => b.maxPowerBhp >= filters.minPowerBhp!);
  }

  // ABS / Safety
  if (filters.absTypes && filters.absTypes.length > 0) {
    result = result.filter((b) => filters.absTypes.some((a) => b.abs.toLowerCase().includes(a.toLowerCase())));
  }

  // Mileage
  if (filters.minMileage !== null && filters.minMileage !== undefined) {
    result = result.filter((b) => (b.mileageKmpl || 0) >= filters.minMileage!);
  }

  // Electric Range
  if (filters.minElectricRange !== null && filters.minElectricRange !== undefined) {
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
      result = [...result].sort(
        (a, b) => (b.mileageKmpl || b.electricRangeKm || 0) - (a.mileageKmpl || a.electricRangeKm || 0)
      );
      break;
    case 'popularity':
    default:
      break;
  }

  return result;
}
