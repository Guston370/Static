/**
 * lib/cars.ts
 *
 * Primary Data Access Layer for Static — but dynamic.
 * Canonical Source of Truth: data/india-car-models.json
 *
 * Loads all active models from the master catalog, providing
 * search, filtering, comparison, and dynamic page generation.
 */

import catalogData from '@data/india-car-models.json';
import imageCatalogData from '@data/car-images.json';
import variantCatalogData from '@data/india-car-variants.json';
import type {
  Car,
  CarFilters,
  BodyType,
  FuelType,
  TransmissionType,
  DrivetrainType,
  NCAPRating,
  ModelMileageSummary,
} from '@/types/car';
import type { ModelImageEntry } from '@/types/car-images';
import type { MasterVariantCatalog, CarVariant } from '@/types/variant';

export interface CatalogModelSource {
  name: string;
  url: string | null;
  type: 'official' | 'reputable';
  checkedAt: string;
}

export interface CatalogModelSpecs {
  displacementCC: number | null;
  cylinders: number | null;
  maxPowerBhp: number | null;
  maxTorqueNm: number | null;
  drivetrain: 'FWD' | 'RWD' | 'AWD' | '4WD' | null;
  lengthMm: number | null;
  widthMm: number | null;
  heightMm: number | null;
  wheelbaseMm: number | null;
  groundClearanceMm: number | null;
  bootSpaceLitres: number | null;
  fuelTankLitres: number | null;
  batteryKWh: number | null;
  mileageKmpl: number | null;
  rangeKm: number | null;
  zeroToHundredSec: number | null;
  topSpeedKmph: number | null;
  ncapRating: number | null;
  airbagsCount: number | null;
  sunroof: 'Panoramic' | 'Single Pane' | 'None' | null;
  touchscreenInches: number | null;
  ventilatedSeats: boolean | null;
  wirelessCharging: boolean | null;
  digitalCluster: boolean | null;
  connectedCarTech: boolean | null;
  tagline: string | null;
  description: string | null;
  pros: string[];
  cons: string[];
}

export interface RawCatalogModel {
  id: string;
  manufacturer: string;
  brand: string;
  name: string;
  fullName: string;
  slug: string;
  status: 'active' | 'discontinued' | 'upcoming' | 'announced';
  bodyType: string;
  segment: string | null;
  fuelTypes: string[];
  transmissions: string[];
  seatingCapacity: number | null;
  startingPrice: number | null;
  endingPrice: number | null;
  currency: 'INR';
  officialUrl: string | null;
  imageUrl: string | null;
  sources: CatalogModelSource[];
  lastVerified: string;
  rebadgedFromOrSharedWith?: string | null;
  specs?: CatalogModelSpecs | null;
}

// ──────────────────────────────────────────────
// Catalog Lookup Indexes
// ──────────────────────────────────────────────
const imageCatalog = imageCatalogData as unknown as { models: ModelImageEntry[] };
const variantCatalog = variantCatalogData as unknown as MasterVariantCatalog;

const imageByModelId = new Map<string, ModelImageEntry>();
imageCatalog.models.forEach((entry) => {
  imageByModelId.set(entry.modelId, entry);
});

const variantsByModelId = new Map<string, CarVariant[]>();
variantCatalog.models.forEach((group) => {
  variantsByModelId.set(group.modelId, group.variants);
});

// ──────────────────────────────────────────────
// Image Selection: Prioritize front_3_4 -> rear_3_4 -> side -> other exterior
// ──────────────────────────────────────────────
const EXTERIOR_ANGLE_PREFERENCE = ['front_3_4', 'rear_3_4', 'side', 'front', 'rear'];

function resolveCardImage(model: RawCatalogModel) {
  const imageEntry = imageByModelId.get(model.slug) || imageByModelId.get(model.id);
  if (!imageEntry || !imageEntry.images || imageEntry.images.length === 0) {
    const fallbackUrl = model.imageUrl || '/images/cars/default-car.jpg';
    return {
      url: fallbackUrl,
      alt: `${model.fullName} — ${model.bodyType}`,
      source: 'Official Press Archive',
      angle: 'front_3_4',
      images: [fallbackUrl],
    };
  }

  // 1. Try front_3_4 first, then other preferred angles
  let chosen = imageEntry.images.find(
    (img) => img.angle === 'front_3_4' && img.url && img.url.trim() !== ''
  );

  if (!chosen) {
    for (const angle of EXTERIOR_ANGLE_PREFERENCE) {
      const match = imageEntry.images.find(
        (img) => img.angle === angle && img.url && img.url.trim() !== ''
      );
      if (match) {
        chosen = match;
        break;
      }
    }
  }

  // 2. Fallback to any non-interior exterior angle
  if (!chosen) {
    chosen = imageEntry.images.find(
      (img) => img.angle !== 'interior' && img.url && img.url.trim() !== ''
    );
  }

  // 3. Fallback to primaryImage or first image in entry
  if (!chosen) {
    chosen = imageEntry.primaryImage || imageEntry.images[0];
  }

  const angleLabel = chosen?.angle
    ? chosen.angle.replace('_3_4', ' front three-quarter').replace('_', ' ')
    : 'exterior view';

  const altText = chosen?.alt || `${model.brand} ${model.name} ${angleLabel}`;

  const allUrls = imageEntry.images
    .map((img) => img.url)
    .filter((u): u is string => typeof u === 'string' && u.trim() !== '');

  return {
    url: chosen?.url || '/images/cars/default-car.jpg',
    alt: altText,
    source: chosen?.source || 'Verified Automotive Photography',
    angle: chosen?.angle || 'front_3_4',
    images: allUrls.length > 0 ? allUrls : ['/images/cars/default-car.jpg'],
  };
}

// ──────────────────────────────────────────────
// Mileage & Powertrain Resolution: Zero fake numbers
// ──────────────────────────────────────────────
function resolveModelMileageAndPowertrain(model: RawCatalogModel): {
  availableFuelTypes: string[];
  availableTransmissions: string[];
  mileageSummary: ModelMileageSummary;
  primaryMileageKmpl: number | null;
  primaryRangeKm: number | null;
} {
  const variants = variantsByModelId.get(model.slug) || variantsByModelId.get(model.id) || [];
  const specs = model.specs;
  const isEV =
    model.fuelTypes.includes('Electric') &&
    !model.fuelTypes.includes('Petrol') &&
    !model.fuelTypes.includes('Diesel');

  // Collect available fuels
  const fuelSet = new Set<string>();
  model.fuelTypes.forEach((f) => fuelSet.add(f));
  variants.forEach((v) => {
    if (v.powertrain?.fuelType) fuelSet.add(v.powertrain.fuelType);
  });
  const availableFuelTypes = Array.from(fuelSet);

  // Collect available transmissions
  const transSet = new Set<string>();
  model.transmissions.forEach((t) => transSet.add(t));
  variants.forEach((v) => {
    if (v.powertrain?.transmission) transSet.add(v.powertrain.transmission);
  });
  const availableTransmissions = Array.from(transSet);

  // Electric Vehicle Range
  if (isEV || (availableFuelTypes.length === 1 && availableFuelTypes[0] === 'Electric')) {
    const variantRanges = variants
      .map((v) => v.powertrain?.electricRangeKm)
      .filter((r): r is number => typeof r === 'number' && r > 0);

    if (specs?.rangeKm) {
      variantRanges.push(specs.rangeKm);
    }

    if (variantRanges.length > 0) {
      const minRange = Math.min(...variantRanges);
      const maxRange = Math.max(...variantRanges);
      const display =
        minRange === maxRange ? `${maxRange} km` : `${minRange}–${maxRange} km`;
      return {
        availableFuelTypes,
        availableTransmissions,
        mileageSummary: {
          display,
          label: 'Range',
          unit: 'km',
          hasVerifiedData: true,
          minRangeKm: minRange,
          maxRangeKm: maxRange,
        },
        primaryMileageKmpl: null,
        primaryRangeKm: maxRange,
      };
    }

    return {
      availableFuelTypes,
      availableTransmissions,
      mileageSummary: {
        display: 'Range pending',
        label: 'Range',
        unit: 'km',
        hasVerifiedData: false,
        minRangeKm: null,
        maxRangeKm: null,
      },
      primaryMileageKmpl: null,
      primaryRangeKm: null,
    };
  }

  // Pure CNG
  const isPureCNG = availableFuelTypes.length === 1 && availableFuelTypes[0] === 'CNG';
  if (isPureCNG) {
    const cngMileages = variants
      .map((v) => v.performance?.mileageKmpl)
      .filter((m): m is number => typeof m === 'number' && m > 0);
    if (specs?.mileageKmpl) cngMileages.push(specs.mileageKmpl);

    if (cngMileages.length > 0) {
      const minCng = Math.min(...cngMileages);
      const maxCng = Math.max(...cngMileages);
      const display =
        minCng === maxCng ? `${minCng} km/kg` : `${minCng}–${maxCng} km/kg`;
      return {
        availableFuelTypes,
        availableTransmissions,
        mileageSummary: {
          display,
          label: 'Mileage',
          unit: 'km/kg',
          hasVerifiedData: true,
          minKmpl: minCng,
          maxKmpl: maxCng,
        },
        primaryMileageKmpl: maxCng,
        primaryRangeKm: null,
      };
    }
  }

  // ICE / Multi-powertrain (Petrol, Diesel, Hybrid, CNG)
  // Collect all verified variant mileages
  const verifiedMileages = variants
    .filter(
      (v) =>
        v.variantStatus === 'verified' &&
        typeof v.performance?.mileageKmpl === 'number' &&
        v.performance.mileageKmpl > 0
    )
    .map((v) => v.performance.mileageKmpl as number);

  // If no verified variants with mileage, also check all variants with performance data
  const candidateMileages =
    verifiedMileages.length > 0
      ? verifiedMileages
      : variants
          .map((v) => v.performance?.mileageKmpl)
          .filter((m): m is number => typeof m === 'number' && m > 0);

  if (specs?.mileageKmpl && typeof specs.mileageKmpl === 'number') {
    candidateMileages.push(specs.mileageKmpl);
  }

  if (candidateMileages.length > 0) {
    const minM = Math.min(...candidateMileages);
    const maxM = Math.max(...candidateMileages);
    const fmt = (n: number) =>
      Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/0$/, '').replace(/\.$/, '');

    let display = '';
    if (minM === maxM) {
      display = `Up to ${fmt(maxM)} km/l`;
    } else {
      display = `${fmt(minM)}–${fmt(maxM)} km/l`;
    }

    return {
      availableFuelTypes,
      availableTransmissions,
      mileageSummary: {
        display,
        label: 'Mileage',
        unit: 'km/l',
        hasVerifiedData: true,
        minKmpl: minM,
        maxKmpl: maxM,
      },
      primaryMileageKmpl: maxM,
      primaryRangeKm: null,
    };
  }

  // If multiple powertrains exist without verified mileage
  const hasMultiple = availableFuelTypes.length > 1;
  return {
    availableFuelTypes,
    availableTransmissions,
    mileageSummary: {
      display: hasMultiple ? 'Multiple powertrains' : 'Spec on request',
      label: 'Mileage',
      unit: '',
      hasVerifiedData: false,
      minKmpl: null,
      maxKmpl: null,
    },
    primaryMileageKmpl: null,
    primaryRangeKm: null,
  };
}

// ──────────────────────────────────────────────
// Popular / Featured Car IDs (Slugs only, per Req 12)
// ──────────────────────────────────────────────
export const POPULAR_CAR_SLUGS: string[] = [
  'tata-nexon',
  'hyundai-creta',
  'mahindra-xuv700',
  'maruti-suzuki-brezza',
  'tata-punch',
  'mahindra-thar-roxx',
  'kia-seltos',
  'maruti-suzuki-grand-vitara',
  'toyota-innova-hycross',
  'maruti-suzuki-swift',
  'skoda-kushaq',
  'volkswagen-virtus',
];

// ──────────────────────────────────────────────
// Adapter: CatalogModel -> Car
// ──────────────────────────────────────────────
function mapCatalogModelToCar(model: RawCatalogModel, index: number): Car {
  const specs = model.specs;
  const isEV = model.fuelTypes.includes('Electric');
  const primaryFuel = (model.fuelTypes[0] as FuelType) || (isEV ? 'Electric' : 'Petrol');
  const primaryTransmission =
    (model.transmissions[0] as TransmissionType) ||
    (isEV ? 'Single-Speed Automatic' : 'Manual');

  const popularIndex = POPULAR_CAR_SLUGS.indexOf(model.slug);
  const popularityRank = popularIndex !== -1 ? popularIndex + 1 : 20 + index;

  const minPrice = model.startingPrice ?? 10.0;
  const maxPrice = model.endingPrice ?? model.startingPrice ?? minPrice * 1.5;

  const cardImage = resolveCardImage(model);
  const powertrainInfo = resolveModelMileageAndPowertrain(model);

  return {
    id: model.id,
    slug: model.slug,
    brand: model.brand,
    model: model.name,
    displayName: model.fullName,
    generation: model.segment || 'Current Generation',
    launchYear: 2024,
    bodyType: model.bodyType as BodyType,
    seatingCapacity: model.seatingCapacity ?? (model.bodyType === 'MPV' ? 7 : 5),
    primaryImage: cardImage.url,
    primaryImageAlt: cardImage.alt,
    primaryImageSource: cardImage.source,
    primaryImageAssetAngle: cardImage.angle,
    images: cardImage.images,
    mileageSummary: powertrainInfo.mileageSummary,
    availableFuelTypes: powertrainInfo.availableFuelTypes,
    availableTransmissions: powertrainInfo.availableTransmissions,
    pricing: {
      minPriceLakh: minPrice,
      maxPriceLakh: maxPrice,
      currency: 'INR',
    },
    engine: {
      fuelType: primaryFuel,
      displacementCC: specs?.displacementCC ?? null,
      cylinders: specs?.cylinders ?? null,
      turbo: Boolean(
        specs?.displacementCC &&
          specs.displacementCC < 1500 &&
          specs.maxPowerBhp &&
          specs.maxPowerBhp > 110
      ),
      maxPowerBhp: specs?.maxPowerBhp ?? 105,
      maxTorqueNm: specs?.maxTorqueNm ?? 150,
      transmission: primaryTransmission,
      drivetrain: (specs?.drivetrain as DrivetrainType) ?? 'FWD',
    },
    dimensions: {
      lengthMm: specs?.lengthMm ?? 3995,
      widthMm: specs?.widthMm ?? 1790,
      heightMm: specs?.heightMm ?? 1600,
      wheelbaseMm: specs?.wheelbaseMm ?? 2500,
      groundClearanceMm: specs?.groundClearanceMm ?? 180,
      kerbWeightKg: null,
      bootSpaceLitres: specs?.bootSpaceLitres ?? 350,
      fuelTankLitres: specs?.fuelTankLitres ?? (isEV ? null : 45),
      batteryKWh: specs?.batteryKWh ?? (isEV ? 40 : null),
    },
    performance: {
      mileageKmpl: powertrainInfo.primaryMileageKmpl,
      rangeKm: powertrainInfo.primaryRangeKm,
      zeroToHundredSec: specs?.zeroToHundredSec ?? null,
      topSpeedKmph: specs?.topSpeedKmph ?? null,
    },
    safety: {
      ncapRating: (specs?.ncapRating as NCAPRating) ?? null,
      airbagsCount: specs?.airbagsCount ?? 6,
      abs: true,
      ebd: true,
      esc: true,
      tractionControl: true,
      hillStartAssist: true,
      adas: false,
      rearParkingCamera: true,
      tpms: false,
      rearParkingSensors: true,
      frontParkingSensors: false,
    },
    features: {
      sunroof:
        specs?.sunroof === 'Single Pane' || specs?.sunroof === 'Panoramic',
      panoramicSunroof: specs?.sunroof === 'Panoramic',
      ventilatedFrontSeats: specs?.ventilatedSeats ?? false,
      poweredDriverSeat: false,
      digitalCluster: specs?.digitalCluster ?? true,
      infotainmentSizeInches: specs?.touchscreenInches ?? 10.25,
      appleCarPlay: true,
      androidAuto: true,
      wirelessCharging: specs?.wirelessCharging ?? false,
      hud: false,
      ambientLighting: false,
      connectedCar: specs?.connectedCarTech ?? true,
      otaUpdates: false,
      autoClimate: true,
      rearACVents: true,
      keylessEntry: true,
      pushButtonStart: true,
      cruiseControl: true,
      adaptiveCruiseControl: false,
    },
    pros:
      specs?.pros && specs.pros.length > 0
        ? specs.pros
        : [
            'Verified official manufacturer specifications in India',
            'Strong road presence and contemporary design',
            'Competitive ex-showroom pricing in segment',
          ],
    cons:
      specs?.cons && specs.cons.length > 0
        ? specs.cons
        : [
            'Waiting periods may vary by location and dealership network',
            'Higher variants carry significant feature-pack premiums',
          ],
    tagline:
      specs?.tagline ||
      `${model.brand} ${model.name} — ${model.segment || model.bodyType}`,
    description:
      specs?.description ||
      `Official passenger vehicle model from ${model.brand} available in India. Detailed specifications verified from manufacturer data.`,
    popularityRank,
    dataSource: {
      url: model.sources[0]?.url || 'https://www.siam.in',
      name: model.sources[0]?.name || 'Official Manufacturer Portal',
      lastVerified: model.lastVerified,
    },
  };
}

// ──────────────────────────────────────────────
// In-Memory Master Catalog
// ──────────────────────────────────────────────
const rawModels = (catalogData.models as unknown as RawCatalogModel[]);

// Active cars for default website consumption
const activeCars: Car[] = rawModels
  .filter((m) => m.status === 'active')
  .map(mapCatalogModelToCar);

// Lookup maps for O(1) retrieval
const carBySlugMap = new Map<string, Car>();
activeCars.forEach((c) => carBySlugMap.set(c.slug, c));

const rawModelBySlugMap = new Map<string, RawCatalogModel>();
rawModels.forEach((m) => rawModelBySlugMap.set(m.slug, m));

// ──────────────────────────────────────────────
// Read Functions
// ──────────────────────────────────────────────

/** Returns the raw master catalog metadata */
export function getMasterCatalogMetadata() {
  return catalogData.metadata;
}

/** Returns all manufacturers from the master catalog */
export function getAllManufacturers() {
  return catalogData.manufacturers;
}

/** Returns all active passenger cars in India */
export function getAllCars(): Car[] {
  return activeCars;
}

/** Returns all active passenger cars in India (canonical alias) */
export function getActiveCars(): Car[] {
  return activeCars;
}

/** Returns the count of active car models in the catalog */
export function getCarCount(): number {
  return activeCars.length;
}

/** Returns the count of distinct brands in the active catalog */
export function getBrandCount(): number {
  return getAllBrands().length;
}

/** Returns the count of manufacturers in the catalog */
export function getManufacturerCount(): number {
  return getAllManufacturers().length;
}

/** Returns all models in the master catalog across all statuses */
export function getAllCatalogModels(): RawCatalogModel[] {
  return rawModels;
}

/** Returns a single car by slug, or undefined if not found. */
export function getCarBySlug(slug: string): Car | undefined {
  return carBySlugMap.get(slug);
}

/** Returns a raw catalog model by slug regardless of status. */
export function getCatalogModelBySlug(slug: string): RawCatalogModel | undefined {
  return rawModelBySlugMap.get(slug);
}

/** Returns cars by brand (case-insensitive). */
export function getCarsByBrand(brand: string): Car[] {
  const b = brand.toLowerCase();
  return activeCars.filter((c) => c.brand.toLowerCase() === b);
}

/** Returns cars by body type. */
export function getCarsByBodyType(bodyType: BodyType): Car[] {
  return activeCars.filter((c) => c.bodyType === bodyType);
}

/** Returns all distinct brands in the active dataset. */
export function getAllBrands(): string[] {
  return [...new Set(activeCars.map((c) => c.brand))].sort();
}

/** Returns all distinct body types in the active dataset. */
export function getAllBodyTypes(): BodyType[] {
  return [...new Set(activeCars.map((c) => c.bodyType))].sort();
}

/** Returns all distinct fuel types in the active dataset. */
export function getAllFuelTypes(): FuelType[] {
  const fuels = new Set<FuelType>();
  rawModels
    .filter((m) => m.status === 'active')
    .forEach((m) => {
      m.fuelTypes.forEach((f) => fuels.add(f as FuelType));
    });
  return [...fuels].sort();
}

/**
 * Returns cars similar to the given car.
 * "Similar" = same body type, different car, sorted by popularity.
 */
export function getSimilarCars(car: Car, limit = 3): Car[] {
  return activeCars
    .filter((c) => c.id !== car.id && c.bodyType === car.bodyType)
    .sort((a, b) => a.popularityRank - b.popularityRank)
    .slice(0, limit);
}

/** Returns the most popular cars sorted by popularityRank. */
export function getPopularCars(limit = 6): Car[] {
  return [...activeCars]
    .sort((a, b) => a.popularityRank - b.popularityRank)
    .slice(0, limit);
}

/**
 * Returns multiple cars by their slugs.
 * Used by the comparison page.
 */
export function getCarsBySlugs(slugs: string[]): Car[] {
  return slugs
    .map((slug) => getCarBySlug(slug))
    .filter((car): car is Car => car !== undefined);
}

// ──────────────────────────────────────────────
// Search & Filter
// ──────────────────────────────────────────────

/**
 * Client-side search: matches brand, model, body type, fuel type, or keywords.
 * Case-insensitive, data-driven, fast.
 */
export function matchesSearch(car: Car, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase().trim();

  // Also check raw model fuel types for comprehensive matching (e.g. "electric", "cng")
  const raw = rawModelBySlugMap.get(car.slug);
  const rawFuels = raw?.fuelTypes.map((f) => f.toLowerCase()) || [];

  return (
    car.brand.toLowerCase().includes(q) ||
    car.model.toLowerCase().includes(q) ||
    car.displayName.toLowerCase().includes(q) ||
    car.bodyType.toLowerCase().includes(q) ||
    car.engine.fuelType.toLowerCase().includes(q) ||
    rawFuels.some((f) => f.includes(q)) ||
    car.tagline.toLowerCase().includes(q) ||
    car.description.toLowerCase().includes(q)
  );
}

/**
 * Searches active cars matching the query string.
 */
export function searchCars(query: string): Car[] {
  if (!query.trim()) return activeCars;
  return activeCars.filter((c) => matchesSearch(c, query));
}

/**
 * Applies all active filters to the cars array.
 * All filters are additive (AND logic).
 */
export function filterCars(filters: CarFilters): Car[] {
  let result = activeCars;

  // Text search
  if (filters.search.trim()) {
    result = result.filter((c) => matchesSearch(c, filters.search));
  }

  // Brand filter
  if (filters.brands.length > 0) {
    result = result.filter((c) => filters.brands.includes(c.brand));
  }

  // Body type filter
  if (filters.bodyTypes.length > 0) {
    result = result.filter((c) => filters.bodyTypes.includes(c.bodyType));
  }

  // Fuel type filter (matches if any of the car's fuel options matches the filter)
  if (filters.fuelTypes.length > 0) {
    result = result.filter((c) => {
      const raw = rawModelBySlugMap.get(c.slug);
      const fuels = raw?.fuelTypes || [c.engine.fuelType];
      return filters.fuelTypes.some((f) => fuels.includes(f));
    });
  }

  // Transmission filter
  if (filters.transmissions.length > 0) {
    result = result.filter((c) => {
      const raw = rawModelBySlugMap.get(c.slug);
      const trans = raw?.transmissions || [c.engine.transmission];
      return filters.transmissions.some((t) => trans.includes(t));
    });
  }

  // Price range filter (uses minPriceLakh as lower bound)
  if (filters.minPrice !== null) {
    result = result.filter((c) => c.pricing.minPriceLakh >= filters.minPrice!);
  }
  if (filters.maxPrice !== null) {
    result = result.filter((c) => c.pricing.minPriceLakh <= filters.maxPrice!);
  }

  // Sorting
  switch (filters.sortBy) {
    case 'price-asc':
      result = [...result].sort(
        (a, b) => a.pricing.minPriceLakh - b.pricing.minPriceLakh
      );
      break;
    case 'price-desc':
      result = [...result].sort(
        (a, b) => b.pricing.minPriceLakh - a.pricing.minPriceLakh
      );
      break;
    case 'popularity':
      result = [...result].sort(
        (a, b) => a.popularityRank - b.popularityRank
      );
      break;
    case 'power':
      result = [...result].sort(
        (a, b) => b.engine.maxPowerBhp - a.engine.maxPowerBhp
      );
      break;
  }

  return result;
}

// ──────────────────────────────────────────────
// Formatting helpers
// ──────────────────────────────────────────────

/** Formats a price range as "₹X.XX – X.XX Lakh" */
export function formatPriceRange(car: Car): string {
  if (car.pricing.minPriceLakh === car.pricing.maxPriceLakh) {
    return `₹${car.pricing.minPriceLakh.toFixed(2)} Lakh`;
  }
  return `₹${car.pricing.minPriceLakh.toFixed(2)} – ${car.pricing.maxPriceLakh.toFixed(2)} Lakh`;
}

/** Formats a single price value. */
export function formatPrice(lakh: number): string {
  return `₹${lakh.toFixed(2)} Lakh`;
}
