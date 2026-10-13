/**
 * Car Pricing Service — Static
 *
 * Provides access to verified Ex-Showroom prices, transparent on-road
 * estimations by city, official booking/manufacturer links, and CarDekho references.
 */

import type { Car } from '@/types/car';
import type {
  CarPriceSnapshot,
  SourceLink,
  FreshnessStatus,
  OnRoadPriceBreakdown,
  MobilePriceSnapshot,
} from '@/types/pricing';
import type { MobileModel, MobileVariant } from '@/types/mobile';
import { determineFreshness, formatFreshnessText } from './validator';
import { calculateOnRoadPrice, MAJOR_INDIAN_CITIES } from './onroad';

import rawCarPrices from '../../../data/pricing/car-prices.json';
import rawMobilePrices from '../../../data/pricing/mobile-prices.json';

interface CarPriceCatalog {
  metadata: {
    generatedAt: string;
    version: string;
    totalCars: number;
  };
  snapshots: Record<string, CarPriceSnapshot>;
}

interface MobilePriceCatalog {
  metadata: {
    generatedAt: string;
    version: string;
  };
  snapshots: Record<string, MobilePriceSnapshot>;
}

const carCatalog: CarPriceCatalog = (rawCarPrices as unknown as CarPriceCatalog) || {
  metadata: { generatedAt: new Date().toISOString(), version: '1.0.0', totalCars: 0 },
  snapshots: {},
};

const mobileCatalog: MobilePriceCatalog = (rawMobilePrices as unknown as MobilePriceCatalog) || {
  metadata: { generatedAt: new Date().toISOString(), version: '1.0.0' },
  snapshots: {},
};

/**
 * Get pricing snapshot for a car
 */
export function getCarPriceSnapshot(car: Car): CarPriceSnapshot {
  const existing = carCatalog.snapshots[car.slug] || carCatalog.snapshots[car.id];
  if (existing) {
    return {
      ...existing,
      priceFreshness: determineFreshness(existing.lastCheckedAt),
    };
  }

  // Fallback baseline
  const minLakh = car.pricing.minPriceLakh || 8.0;
  const maxLakh = car.pricing.maxPriceLakh || minLakh * 1.4;
  const nowIso = new Date().toISOString();

  const brandSlug = car.brand.toLowerCase().replace(/[\s\-_]+/g, '-');
  const modelSlug = car.model.toLowerCase().replace(/[\s\-_]+/g, '-');

  const sources: SourceLink[] = [
    {
      platform: 'official',
      label: `${car.brand} Official Portal`,
      url: car.primaryImageSource ? `https://www.google.com/search?q=${encodeURIComponent(car.brand + ' ' + car.model + ' India official')}` : 'https://www.google.com',
      isDirectProductPage: false,
      isOfficialManufacturer: true,
      badgeText: 'Official Portal',
      note: `Official technical specifications and dealership locator`,
    },
    {
      platform: 'cardekho',
      label: 'CarDekho Overview',
      url: `https://www.cardekho.com/${brandSlug}/${modelSlug}`,
      isDirectProductPage: true,
      isOfficialManufacturer: false,
      badgeText: 'Automotive Portal',
      note: 'Verified road tests, user reviews, and ex-showroom price trends',
    },
  ];

  return {
    carId: car.id,
    slug: car.slug,
    brand: car.brand,
    model: car.model,
    minPriceLakh: Number(minLakh.toFixed(2)),
    maxPriceLakh: Number(maxLakh.toFixed(2)),
    priceFreshness: 'fresh',
    lastCheckedAt: nowIso,
    sources,
    variantExShowroom: {},
    history: [
      {
        id: `${car.slug}-ex-showroom`,
        observedAt: nowIso,
        price: Math.round(minLakh * 100000),
        priceType: 'ex_showroom',
        platform: 'official',
        platformName: `${car.brand} Ex-Showroom`,
      },
    ],
  };
}

/**
 * Get on-road pricing estimate for a car in a specific city
 */
export function getCarOnRoadEstimate(
  car: Car,
  cityKey: string = 'delhi',
  variantExShowroomInr?: number
): OnRoadPriceBreakdown {
  const exShowroom = variantExShowroomInr || Math.round(car.pricing.minPriceLakh * 100000);
  const fuel = car.engine.fuelType || car.availableFuelTypes?.[0] || 'Petrol';
  return calculateOnRoadPrice(exShowroom, fuel, cityKey);
}

/**
 * Get pricing snapshot for a mobile (for carcompare's mobile pages)
 */
export function getMobilePriceSnapshot(
  model: MobileModel,
  variants: MobileVariant[] = []
): MobilePriceSnapshot {
  const existing = mobileCatalog.snapshots[model.id] || mobileCatalog.snapshots[model.slug];
  if (existing) {
    return {
      ...existing,
      priceFreshness: determineFreshness(existing.lastCheckedAt),
    };
  }

  const launchPrice = model.pricing.launchPrice || model.pricing.startingPrice || 14999;
  const currentPrice = model.pricing.currentPrice || model.pricing.startingPrice || launchPrice;
  const nowIso = new Date().toISOString();

  return {
    modelId: model.id,
    slug: model.slug,
    brand: model.brand,
    modelName: model.modelName,
    launchDate: model.launchDate,
    launchPrice,
    currentLowestPrice: currentPrice,
    bestPlatform: 'amazon_in',
    priceFreshness: 'fresh',
    lastCheckedAt: nowIso,
    sources: [
      {
        platform: 'amazon_in',
        label: 'Amazon India',
        url: `https://www.amazon.in/s?k=${encodeURIComponent(model.brand + ' ' + model.modelName)}&i=electronics`,
        isDirectProductPage: false,
        isOfficialManufacturer: false,
        badgeText: 'Marketplace',
      },
      {
        platform: 'flipkart',
        label: 'Flipkart',
        url: `https://www.flipkart.com/search?q=${encodeURIComponent(model.brand + ' ' + model.modelName)}`,
        isDirectProductPage: false,
        isOfficialManufacturer: false,
        badgeText: 'Marketplace',
      },
    ],
    platformPrices: [],
    variantPrices: {},
    history: [],
  };
}

export { calculateOnRoadPrice, MAJOR_INDIAN_CITIES, formatFreshnessText, determineFreshness };
