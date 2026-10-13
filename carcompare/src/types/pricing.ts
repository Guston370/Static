/**
 * Unified Pricing Domain Types — Static
 *
 * Provides strict discrimination between price types, multi-platform listings,
 * verification freshness, price history, and external source links.
 */

export type CurrencyCode = 'INR';

export type MobilePriceType =
  | 'launch_msrp'          // Official launch MSRP in India
  | 'current_retail'       // Current standard retail price
  | 'platform_listed'      // Platform-specific listing price (Amazon / Flipkart / etc.)
  | 'offer_effective'      // Active promotional offer price
  | 'bank_discounted'      // Price after verified bank card discount (labeled separately)
  | 'exchange_adjusted';   // Price with estimated exchange bonus (labeled separately)

export type CarPriceType =
  | 'ex_showroom'          // Standard factory ex-showroom price (variant-specific)
  | 'on_road_estimate'     // City-specific on-road price with transparent fee breakdown
  | 'manufacturer_mrp'     // Official manufacturer-listed price
  | 'dealer_quote';        // Verified dealer quote (where available)

export type FreshnessStatus = 'live' | 'fresh' | 'cached' | 'stale';

export type PlatformId =
  | 'official'
  | 'amazon_in'
  | 'flipkart'
  | 'cardekho'
  | 'croma'
  | 'reliance_digital';

export interface SourceLink {
  platform: PlatformId;
  label: string;
  url: string;
  isDirectProductPage: boolean; // true = verified deep link, false = verified search link
  isOfficialManufacturer: boolean; // true = official brand site, false = third-party
  badgeText?: string;
  note?: string;
}

export interface MobilePlatformPrice {
  platform: PlatformId;
  platformName: string;
  price: number;
  mrp?: number;
  priceType: MobilePriceType;
  currency: CurrencyCode;
  availability: 'in_stock' | 'out_of_stock' | 'pre_order' | 'check_site';
  observedAt: string; // ISO timestamp
  sourceUrl: string;
  isDirectProductPage: boolean;
  seller?: string;
  offerNote?: string;
  verified: boolean;
}

export interface PriceHistoryRecord {
  id: string;
  observedAt: string; // ISO timestamp
  price: number;
  priceType: MobilePriceType | CarPriceType;
  platform: PlatformId;
  platformName: string;
  variantId?: string;
  variantName?: string;
  availability?: string;
  sourceUrl?: string;
}

export interface MobilePriceSnapshot {
  modelId: string;
  slug: string;
  brand: string;
  modelName: string;
  launchDate: string;
  launchPrice: number;
  currentLowestPrice: number;
  bestPlatform: PlatformId;
  priceFreshness: FreshnessStatus;
  lastCheckedAt: string; // ISO timestamp
  sources: SourceLink[];
  platformPrices: MobilePlatformPrice[];
  variantPrices: Record<
    string,
    {
      variantId: string;
      ram: string;
      storage: string;
      launchPrice: number;
      currentPrice: number;
      mrp?: number;
      platformPrices: MobilePlatformPrice[];
    }
  >;
  history: PriceHistoryRecord[];
  notes?: string;
}

export interface CityRtoRule {
  city: string;
  state: string;
  code: string;
  roadTaxRatePetrol: number; // Percentage (e.g. 0.10 for 10%)
  roadTaxRateDiesel: number;
  roadTaxRateEV: number;
  roadTaxRateCNG: number;
  mcdCessOrMunicipal: number; // Flat fee in INR
  fastagCharge: number;       // Flat fee in INR (usually ~600)
  hypothecationFee: number;   // Flat fee in INR
  notes: string;
}

export interface OnRoadPriceBreakdown {
  city: string;
  state: string;
  fuelType: string;
  exShowroom: number;
  rtoRegistration: number;
  insuranceComprehensive: number;
  tcsTaxCollectedAtSource: number; // 1% for ex-showroom > 10 Lakhs
  fastagAndGovtFees: number;
  totalOnRoad: number;
  totalOnRoadLakh: number;
  assumptions: string[];
}

export interface CarPriceSnapshot {
  carId: string;
  slug: string;
  brand: string;
  model: string;
  minPriceLakh: number;
  maxPriceLakh: number;
  priceFreshness: FreshnessStatus;
  lastCheckedAt: string; // ISO timestamp
  sources: SourceLink[];
  variantExShowroom: Record<
    string,
    {
      variantId: string;
      name: string;
      slug: string;
      exShowroom: number;
      exShowroomLakh: number;
      fuelType: string;
      transmission: string;
      lastVerified: string;
    }
  >;
  history: PriceHistoryRecord[];
}

export interface PricingIngestionResult {
  timestamp: string;
  totalProcessed: number;
  updatedCount: number;
  unchangedCount: number;
  failedCount: number;
  staleCount: number;
  warnings: string[];
  errors: string[];
}
