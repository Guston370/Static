/**
 * Mobile Platform Data Layer — Static
 *
 * Provides querying, filtering, comparisons, transparent winner scoring,
 * and upgrade difference analysis for Indian mobile phones.
 */

import modelsData from '../../data/india-mobile-models.json';
import variantsData from '../../data/india-mobile-variants.json';
import imagesData from '../../data/mobile-images.json';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
  MobileImageItem,
} from '@/types/mobile';

const modelsCatalog = modelsData.models as unknown as MobileModel[];
const variantsCatalog = variantsData.variants as unknown as MobileVariant[];
const imagesCatalog = imagesData.models as unknown as MobileImageCatalogEntry[];

// Image lookup map
const imagesMap = new Map<string, MobileImageCatalogEntry>();
imagesCatalog.forEach((entry) => {
  imagesMap.set(entry.modelId, entry);
});

// Variants lookup map
const variantsByModelMap = new Map<string, MobileVariant[]>();
variantsCatalog.forEach((variant) => {
  const existing = variantsByModelMap.get(variant.modelId) || [];
  existing.push(variant);
  variantsByModelMap.set(variant.modelId, existing);
});

/**
 * Resolve primary card image for a mobile
 */
export function resolveMobileCardImage(model: MobileModel): { url: string; alt: string; angle: string } {
  const entry = imagesMap.get(model.id);
  if (entry && entry.images.length > 0) {
    // Priority: front > display > back > first available
    const front = entry.images.find((img) => img.angle === 'front');
    if (front) return { url: front.url, alt: front.alt, angle: 'Front' };

    const display = entry.images.find((img) => img.angle === 'display');
    if (display) return { url: display.url, alt: display.alt, angle: 'Display' };

    const first = entry.images[0];
    return { url: first.url, alt: first.alt, angle: first.angle };
  }

  return {
    url: '/images/phone-placeholder.png',
    alt: `${model.brand} ${model.modelName}`,
    angle: 'Front',
  };
}

/**
 * Get all mobile models with primary image attached
 */
export function getAllMobiles(): MobileModel[] {
  return modelsCatalog.map((m) => {
    const img = resolveMobileCardImage(m);
    return {
      ...m,
      primaryImage: img.url,
      primaryImageAlt: img.alt,
    };
  });
}

/**
 * Get mobile by slug
 */
export function getMobileBySlug(slug: string): MobileModel | undefined {
  const found = modelsCatalog.find((m) => m.slug === slug || m.id === slug);
  if (!found) return undefined;
  const img = resolveMobileCardImage(found);
  return {
    ...found,
    primaryImage: img.url,
    primaryImageAlt: img.alt,
  };
}

/**
 * Get variants for a model
 */
export function getMobileVariants(modelId: string): MobileVariant[] {
  return variantsByModelMap.get(modelId) || [];
}

/**
 * Get image gallery for a model
 */
export function getMobileImages(modelId: string): MobileImageItem[] {
  const entry = imagesMap.get(modelId);
  return entry ? entry.images : [];
}

/**
 * Get popular mobiles for homepage
 */
export function getPopularMobiles(limit = 6): MobileModel[] {
  const popularSlugs = [
    'samsung-galaxy-s25-ultra',
    'apple-iphone-16',
    'oneplus-13',
    'google-pixel-9-pro-xl',
    'xiaomi-14-ultra',
    'iqoo-13',
    'vivo-v40-pro',
    'motorola-edge-50-ultra',
  ];

  const all = getAllMobiles();
  const popular = popularSlugs
    .map((slug) => all.find((m) => m.slug === slug))
    .filter((m): m is MobileModel => m !== undefined);

  if (popular.length < limit) {
    const remaining = all.filter((m) => !popular.includes(m));
    return [...popular, ...remaining].slice(0, limit);
  }

  return popular.slice(0, limit);
}

/**
 * Get all mobile brands
 */
export function getAllMobileBrands(): string[] {
  const brands = new Set(modelsCatalog.map((m) => m.brand));
  return Array.from(brands).sort();
}

/**
 * Get counts
 */
export function getMobileCount(): number {
  return modelsCatalog.filter((m) => m.status === 'active').length;
}

export function getMobileBrandCount(): number {
  return getAllMobileBrands().length;
}

/**
 * Format currency in Indian numbering format: e.g. ₹54,999 or ₹1,29,999
 */
export function formatMobilePrice(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}

/**
 * Format price range or starting price
 */
export function formatMobilePriceRange(model: MobileModel): string {
  if (model.pricing.startingPrice === model.pricing.maximumPrice) {
    return formatMobilePrice(model.pricing.startingPrice);
  }
  return `${formatMobilePrice(model.pricing.startingPrice)} – ${formatMobilePrice(model.pricing.maximumPrice)}`;
}

/**
 * Get similar mobiles based on price range
 */
export function getSimilarMobiles(mobile: MobileModel, limit = 3): MobileModel[] {
  const all = getAllMobiles().filter((m) => m.id !== mobile.id);
  const targetPrice = mobile.pricing.startingPrice;

  // Sort by price proximity
  return all
    .sort((a, b) => {
      const diffA = Math.abs(a.pricing.startingPrice - targetPrice);
      const diffB = Math.abs(b.pricing.startingPrice - targetPrice);
      return diffA - diffB;
    })
    .slice(0, limit);
}

// ═══════════════════════════════════════════════════════════════════════════════
// "WHAT DO I GET FOR MORE MONEY?" — UPGRADE ANALYSIS
// ═══════════════════════════════════════════════════════════════════════════════

export interface MobileUpgradeDifference {
  priceDelta: number;
  baseModelName: string;
  upgradedModelName: string;
  upgrades: string[];
}

export function calculateUpgradeDifference(
  base: MobileModel,
  upgraded: MobileModel
): MobileUpgradeDifference | null {
  const priceDelta = upgraded.pricing.startingPrice - base.pricing.startingPrice;
  if (priceDelta <= 0) return null;

  const upgrades: string[] = [];

  // 1. Display
  if (upgraded.display.refreshRate > base.display.refreshRate) {
    upgrades.push(`Faster ${upgraded.display.refreshRate}Hz display (vs ${base.display.refreshRate}Hz)`);
  }
  if (upgraded.display.peakBrightness > base.display.peakBrightness + 300) {
    upgrades.push(`Significantly brighter screen: ${upgraded.display.peakBrightness} nits (vs ${base.display.peakBrightness} nits)`);
  }
  if (upgraded.display.resolution.includes('2K') || upgraded.display.resolution.includes('WQHD+')) {
    if (!base.display.resolution.includes('2K') && !base.display.resolution.includes('WQHD+')) {
      upgrades.push(`Sharper ${upgraded.display.resolution.split(' ')[0]} resolution display`);
    }
  }

  // 2. Performance
  if (upgraded.performance.chipset !== base.performance.chipset) {
    upgrades.push(`Higher-tier processor: ${upgraded.performance.chipset}`);
  }
  if ((upgraded.performance.antutuScore || 0) > (base.performance.antutuScore || 0) + 200000) {
    const pct = Math.round((((upgraded.performance.antutuScore || 0) - (base.performance.antutuScore || 0)) / (base.performance.antutuScore || 1)) * 100);
    upgrades.push(`~${pct}% higher raw benchmark computing performance`);
  }

  // 3. Cameras
  if (upgraded.cameras.telephotoCamera && !base.cameras.telephotoCamera) {
    upgrades.push(`Dedicated optical zoom telephoto camera (${upgraded.cameras.telephotoCamera.split(',')[0]})`);
  } else if (upgraded.cameras.telephotoCamera && base.cameras.telephotoCamera) {
    if (upgraded.cameras.telephotoCamera.includes('periscope') && !base.cameras.telephotoCamera.includes('periscope')) {
      upgrades.push(`Periscope ultra-long range optical zoom telephoto lens`);
    }
  }

  if (upgraded.cameras.mainCamera.includes('1-inch') || upgraded.cameras.mainCamera.includes('200 MP')) {
    if (!base.cameras.mainCamera.includes('1-inch') && !base.cameras.mainCamera.includes('200 MP')) {
      upgrades.push(`Larger flagship primary camera sensor with superior low-light sensitivity`);
    }
  }

  // 4. Battery & Charging
  if (upgraded.battery.wiredCharging >= base.battery.wiredCharging + 20) {
    upgrades.push(`Faster wired charging: ${upgraded.battery.wiredCharging}W (vs ${base.battery.wiredCharging}W)`);
  }
  if (upgraded.battery.wirelessCharging && !base.battery.wirelessCharging) {
    upgrades.push(`Wireless charging support (${upgraded.battery.wirelessCharging}W)`);
  }
  if (upgraded.battery.batteryCapacity >= base.battery.batteryCapacity + 500) {
    upgrades.push(`Larger battery capacity: ${upgraded.battery.batteryCapacity}mAh (vs ${base.battery.batteryCapacity}mAh)`);
  }

  // 5. Build
  if (upgraded.physical.materials.toLowerCase().includes('titanium') && !base.physical.materials.toLowerCase().includes('titanium')) {
    upgrades.push(`Aerospace Grade 5 Titanium construction`);
  }
  if (upgraded.physical.waterResistance.includes('IP68') && !base.physical.waterResistance.includes('IP68')) {
    upgrades.push(`Full IP68 waterproof submergence rating`);
  }

  // 6. Software
  if (upgraded.software.promisedMajorUpdates > base.software.promisedMajorUpdates) {
    upgrades.push(`Longer software support: ${upgraded.software.promisedMajorUpdates} major OS upgrades (vs ${base.software.promisedMajorUpdates})`);
  }

  return {
    priceDelta,
    baseModelName: `${base.brand} ${base.modelName}`,
    upgradedModelName: `${upgraded.brand} ${upgraded.modelName}`,
    upgrades: upgrades.length > 0 ? upgrades : ['Higher overall flagship tier hardware and finish'],
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY-LEVEL TRANSPARENT WINNER SCORING
// ═══════════════════════════════════════════════════════════════════════════════

export interface CategoryWinner {
  category: string;
  winnerModelId: string;
  winnerName: string;
  reason: string;
}

export function evaluateMobileComparisonWinners(mobiles: MobileModel[]): CategoryWinner[] {
  if (mobiles.length < 2) return [];

  const winners: CategoryWinner[] = [];

  // 1. DISPLAY WINNER
  // Score: refreshRate, peakBrightness, resolution
  let bestDisplay = mobiles[0];
  let bestDisplayScore = 0;
  for (const m of mobiles) {
    const is2K = m.display.resolution.includes('2K') || m.display.resolution.includes('WQHD+') || m.display.resolution.includes('3120') || m.display.resolution.includes('3200') || m.display.resolution.includes('2868');
    const score = (m.display.refreshRate * 20) + (m.display.peakBrightness * 0.5) + (is2K ? 500 : 0);
    if (score > bestDisplayScore) {
      bestDisplayScore = score;
      bestDisplay = m;
    }
  }
  winners.push({
    category: 'Display',
    winnerModelId: bestDisplay.id,
    winnerName: `${bestDisplay.brand} ${bestDisplay.modelName}`,
    reason: `${bestDisplay.display.refreshRate}Hz refresh rate, ${bestDisplay.display.peakBrightness} nits peak brightness, and sharp ${bestDisplay.display.displayType} panel.`,
  });

  // 2. PERFORMANCE WINNER
  let bestPerf = mobiles[0];
  let bestPerfScore = 0;
  for (const m of mobiles) {
    const score = m.performance.antutuScore || (m.performance.geekbenchMulti ? m.performance.geekbenchMulti * 250 : 1000000);
    if (score > bestPerfScore) {
      bestPerfScore = score;
      bestPerf = m;
    }
  }
  winners.push({
    category: 'Performance',
    winnerModelId: bestPerf.id,
    winnerName: `${bestPerf.brand} ${bestPerf.modelName}`,
    reason: `Powered by ${bestPerf.performance.chipset} with leading compute and graphics processing benchmarks.`,
  });

  // 3. CAMERA WINNER
  // Telephoto periscope, sensor size, MP, OIS
  let bestCamera = mobiles[0];
  let bestCameraScore = 0;
  for (const m of mobiles) {
    let score = m.cameras.ois ? 300 : 0;
    if (m.cameras.telephotoCamera) {
      score += m.cameras.telephotoCamera.includes('periscope') ? 500 : 300;
    }
    if (m.cameras.mainCamera.includes('1-inch') || m.cameras.mainCamera.includes('200 MP')) score += 400;
    if (m.cameras.rearCameraSetup.toLowerCase().includes('quad')) score += 200;
    if (m.cameras.frontCamera.includes('4K60')) score += 150;

    if (score > bestCameraScore) {
      bestCameraScore = score;
      bestCamera = m;
    }
  }
  winners.push({
    category: 'Camera',
    winnerModelId: bestCamera.id,
    winnerName: `${bestCamera.brand} ${bestCamera.modelName}`,
    reason: `${bestCamera.cameras.rearCameraSetup} with advanced optical zoom and versatile sensor tuning.`,
  });

  // 4. BATTERY & CHARGING WINNER
  let bestBattery = mobiles[0];
  let bestBatteryScore = 0;
  for (const m of mobiles) {
    const score = m.battery.batteryCapacity + (m.battery.wiredCharging * 20) + ((m.battery.wirelessCharging || 0) * 15);
    if (score > bestBatteryScore) {
      bestBatteryScore = score;
      bestBattery = m;
    }
  }
  winners.push({
    category: 'Battery & Charging',
    winnerModelId: bestBattery.id,
    winnerName: `${bestBattery.brand} ${bestBattery.modelName}`,
    reason: `${bestBattery.battery.batteryCapacity}mAh capacity paired with ${bestBattery.battery.wiredCharging}W fast charging speed.`,
  });

  // 5. SOFTWARE & SUPPORT WINNER
  let bestSoftware = mobiles[0];
  let bestSoftwareScore = 0;
  for (const m of mobiles) {
    const score = (m.software.promisedMajorUpdates * 100);
    if (score > bestSoftwareScore) {
      bestSoftwareScore = score;
      bestSoftware = m;
    }
  }
  winners.push({
    category: 'Software & Updates',
    winnerModelId: bestSoftware.id,
    winnerName: `${bestSoftware.brand} ${bestSoftware.modelName}`,
    reason: `Guaranteed ${bestSoftware.software.promisedMajorUpdates} years of major OS updates and ${bestSoftware.software.securityUpdatePolicy}.`,
  });

  // 6. VALUE FOR MONEY WINNER
  // Evaluates performance-to-price ratio
  let bestValue = mobiles[0];
  let bestValueRatio = 0;
  for (const m of mobiles) {
    const perf = m.performance.antutuScore || 1000000;
    const ratio = (perf / m.pricing.startingPrice);
    if (ratio > bestValueRatio) {
      bestValueRatio = ratio;
      bestValue = m;
    }
  }
  winners.push({
    category: 'Value for Money',
    winnerModelId: bestValue.id,
    winnerName: `${bestValue.brand} ${bestValue.modelName}`,
    reason: `Highest hardware performance and feature density delivered per Rupee spent (starting at ${formatMobilePrice(bestValue.pricing.startingPrice)}).`,
  });

  return winners;
}
