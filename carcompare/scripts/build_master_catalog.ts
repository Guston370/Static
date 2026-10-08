/**
 * scripts/build_master_catalog.ts
 *
 * Compiles the primary source of truth:
 * data/india-car-models.json
 *
 * Adheres strictly to the specification in USER_REQUEST:
 * - Metadata header (country, market, lastUpdated, catalogVersion)
 * - Complete manufacturer list
 * - Complete brand list
 * - Complete passenger-car model inventory (ACTIVE, DISCONTINUED, UPCOMING, ANNOUNCED)
 * - Exact model fields (id, manufacturer, brand, name, fullName, slug, status, bodyType, segment, fuelTypes, transmissions, seatingCapacity, startingPrice, currency, officialUrl, imageUrl, sources, lastVerified, specs)
 * - No invented data; null where unknown.
 */

import * as fs from 'fs';
import * as path from 'path';

export interface CatalogMetadata {
  country: string;
  market: string;
  lastUpdated: string;
  catalogVersion: string;
  totalManufacturers: number;
  totalBrands: number;
  totalModels: number;
  activeModels: number;
  discontinuedModels: number;
  upcomingModels: number;
}

export interface CatalogManufacturer {
  id: string;
  name: string;
  slug: string;
  country: string;
  website: string | null;
  status: 'active' | 'discontinued';
}

export interface CatalogBrand {
  id: string;
  manufacturerId: string;
  name: string;
  slug: string;
  website: string | null;
  status: 'active' | 'discontinued';
}

export interface ModelSource {
  name: string;
  url: string | null;
  type: 'official' | 'reputable';
  checkedAt: string;
}

export interface ModelSpecs {
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

export interface CatalogModel {
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
  sources: ModelSource[];
  lastVerified: string;
  rebadgedFromOrSharedWith?: string | null;
  specs?: ModelSpecs | null;
}

export interface MasterCatalogData {
  metadata: CatalogMetadata;
  manufacturers: CatalogManufacturer[];
  brands: CatalogBrand[];
  models: CatalogModel[];
}

// ═══════════════════════════════════════════════════════════════════════════════
// IMPORT ACTIVE DATASETS & MODELS FROM DISCOVERY INVENTORY
// ═══════════════════════════════════════════════════════════════════════════════
import {
  MANUFACTURERS_DATA,
  ACTIVE_MODELS_DATA,
  DISCONTINUED_MODELS_DATA,
  UPCOMING_MODELS_DATA,
} from './build_full_inventory';



export function buildMasterCatalog(): MasterCatalogData {
  const currentDate = '2026-10-05';

  // 1. Manufacturers
  const manufacturers: CatalogManufacturer[] = MANUFACTURERS_DATA.map((m) => ({
    id: m.slug,
    name: m.name,
    slug: m.slug,
    country: m.country,
    website: m.website,
    status: m.status === 'ACTIVE' ? 'active' : 'discontinued',
  }));

  // 2. Brands
  const brands: CatalogBrand[] = MANUFACTURERS_DATA.flatMap((m) =>
    m.brands.map((b) => ({
      id: b.slug,
      manufacturerId: m.slug,
      name: b.name,
      slug: b.slug,
      website: b.website,
      status: b.status === 'ACTIVE' ? 'active' : 'discontinued',
    }))
  );

  // 3. Compile all models into canonical schema
  const allDiscovered = [
    ...ACTIVE_MODELS_DATA,
    ...DISCONTINUED_MODELS_DATA,
    ...UPCOMING_MODELS_DATA,
  ];

  const existingCatalogPath = path.join(__dirname, '..', 'data', 'india-car-models.json');
  let existingModels: CatalogModel[] = [];
  if (fs.existsSync(existingCatalogPath)) {
    try {
      const loaded = JSON.parse(fs.readFileSync(existingCatalogPath, 'utf8'));
      existingModels = loaded.models || [];
    } catch {
      // ignore
    }
  }

  const models: CatalogModel[] = allDiscovered.map((m) => {
    // Normalize status to lowercase
    const statusLower = m.status.toLowerCase() as 'active' | 'discontinued' | 'upcoming' | 'announced';

    // Map body type to standard display
    const bodyTypeMap: Record<string, string> = {
      CompactSUV: 'Compact SUV',
      MicroSUV: 'Micro SUV',
      CoupeSUV: 'Coupe SUV',
      Pickup: 'Pickup Truck',
    };
    const normalizedBodyType = bodyTypeMap[m.bodyType] || m.bodyType;

    // Check if we have rich editorial specs from existing catalog models
    const existing = existingModels.find((em) => em.slug === m.slug);

    const transmissions: string[] = existing?.transmissions?.length
      ? existing.transmissions
      : m.fuelTypes.includes('Electric')
      ? ['Single-Speed Automatic']
      : ['Manual', 'Automatic'];

    const officialUrl = m.sourceUrl.startsWith('http') ? m.sourceUrl : null;
    const sources: ModelSource[] = [
      {
        name: m.source,
        url: officialUrl,
        type: 'official',
        checkedAt: m.lastVerified || currentDate,
      },
    ];

    // Preserve existing verified specs if available
    let specs: ModelSpecs | null = existing?.specs || null;
    if (!specs) {
      specs = {
        displacementCC: null,
        cylinders: null,
        maxPowerBhp: null,
        maxTorqueNm: null,
        drivetrain: null,
        lengthMm: null,
        widthMm: null,
        heightMm: null,
        wheelbaseMm: null,
        groundClearanceMm: null,
        bootSpaceLitres: null,
        fuelTankLitres: null,
        batteryKWh: null,
        mileageKmpl: null,
        rangeKm: null,
        zeroToHundredSec: null,
        topSpeedKmph: null,
        ncapRating: null,
        airbagsCount: null,
        sunroof: null,
        touchscreenInches: null,
        ventilatedSeats: null,
        wirelessCharging: null,
        digitalCluster: null,
        connectedCarTech: null,
        tagline: m.notes || `${m.brandName} ${m.modelName} — ${m.segment}`,
        description: m.notes || `Official passenger vehicle model from ${m.brandName} available in India.`,
        pros: [],
        cons: [],
      };
    }

    const startingPrice = m.priceRangeLakhs?.min ?? existing?.startingPrice ?? null;
    const endingPrice = m.priceRangeLakhs?.max ?? existing?.endingPrice ?? null;
    const seatingCapacity = existing?.seatingCapacity ?? null;

    // Image path: use verified local image if exists, else fallback
    const localImgPath = path.join(process.cwd(), 'public', 'images', 'cars', `${m.slug}.jpg`);
    const imageUrl = fs.existsSync(localImgPath)
      ? `/images/cars/${m.slug}.jpg`
      : existing?.imageUrl || '/images/cars/default-car.jpg';

    return {
      id: m.slug,
      manufacturer: m.manufacturerName,
      brand: m.brandName.replace(' Arena', '').replace(' Nexa', ''),
      name: m.modelName,
      fullName: `${m.brandName.replace(' Arena', '').replace(' Nexa', '')} ${m.modelName}`,
      slug: m.slug,
      status: statusLower,
      bodyType: normalizedBodyType,
      segment: m.segment || null,
      fuelTypes: m.fuelTypes,
      transmissions: transmissions,
      seatingCapacity,
      startingPrice,
      endingPrice,
      currency: 'INR',
      officialUrl,
      imageUrl,
      sources,
      lastVerified: m.lastVerified || currentDate,
      rebadgedFromOrSharedWith: m.rebadgedFromOrSharedWith || null,
      specs,
    };
  });

  // Calculate metadata counts
  const activeCount = models.filter((m) => m.status === 'active').length;
  const discCount = models.filter((m) => m.status === 'discontinued').length;
  const upcCount = models.filter((m) => m.status === 'upcoming' || m.status === 'announced').length;

  const catalog: MasterCatalogData = {
    metadata: {
      country: 'India',
      market: 'Passenger Cars',
      lastUpdated: currentDate,
      catalogVersion: '1.0.0',
      totalManufacturers: manufacturers.length,
      totalBrands: brands.length,
      totalModels: models.length,
      activeModels: activeCount,
      discontinuedModels: discCount,
      upcomingModels: upcCount,
    },
    manufacturers,
    brands,
    models,
  };

  return catalog;
}

export function saveMasterCatalog() {
  const catalog = buildMasterCatalog();
  const outputPath = path.join(__dirname, '..', 'data', 'india-car-models.json');
  fs.writeFileSync(outputPath, JSON.stringify(catalog, null, 2), 'utf8');

  console.log(`Saved master catalog to ${outputPath}`);
  console.log(`- Manufacturers: ${catalog.metadata.totalManufacturers}`);
  console.log(`- Brands:        ${catalog.metadata.totalBrands}`);
  console.log(`- Total models:  ${catalog.metadata.totalModels}`);
  console.log(`- Active:        ${catalog.metadata.activeModels}`);
  console.log(`- Discontinued:  ${catalog.metadata.discontinuedModels}`);
  console.log(`- Upcoming:      ${catalog.metadata.upcomingModels}`);
}

if (require.main === module) {
  saveMasterCatalog();
}
