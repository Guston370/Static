/**
 * lib/car-images.ts
 *
 * Data access layer for car image catalog.
 * Source of truth: data/car-images.json
 *
 * Architecture:
 *   - Model-level gallery (4 angles per model)
 *   - Variant-level overrides where exterior differs
 *   - All images referenced by URL, not locally stored
 *   - Images served from original sources (manufacturer CDN, CarWale, CarDekho)
 */

import type { CarImageCatalog, ModelImageEntry, CarImage, ImageAngle } from '@/types/car-images';

// Lazy-loaded singleton catalog
let catalog: CarImageCatalog | null = null;

function loadCatalog(): CarImageCatalog {
  if (!catalog) {
    // In Next.js SSG, this JSON is bundled at build time
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    catalog = require('@data/car-images.json') as CarImageCatalog;
  }
  return catalog;
}

/**
 * Returns the full image entry for a model, or null if not found.
 */
export function getModelImages(modelId: string): ModelImageEntry | null {
  const cat = loadCatalog();
  return cat.models.find((m) => m.modelId === modelId) ?? null;
}

/**
 * Returns the primary display image URL for a model.
 * Falls back to first available image, then default placeholder.
 */
export function getModelPrimaryImageUrl(modelId: string): string {
  const entry = getModelImages(modelId);
  if (!entry) return '/images/cars/default-car.jpg';
  if (entry.primaryImage?.url) return entry.primaryImage.url;
  const first = entry.images[0];
  return first?.url ?? '/images/cars/default-car.jpg';
}

/**
 * Returns an ordered list of images for the 4-angle gallery.
 * Preferred order: front_3_4, rear_3_4, side, front/rear.
 */
const PREFERRED_ANGLES: ImageAngle[] = ['front_3_4', 'rear_3_4', 'side', 'front', 'rear', 'interior'];

export function getModelGalleryImages(modelId: string): CarImage[] {
  const entry = getModelImages(modelId);
  if (!entry) return [];

  // Sort by preferred angle order, deduplicating by angle
  const seen = new Set<ImageAngle>();
  const ordered: CarImage[] = [];
  for (const angle of PREFERRED_ANGLES) {
    const img = entry.images.find((i) => i.angle === angle && !seen.has(i.angle));
    if (img) {
      ordered.push(img);
      seen.add(angle);
    }
  }
  // Append any remaining images not in the preferred list
  entry.images.forEach((img) => {
    if (!seen.has(img.angle)) {
      ordered.push(img);
      seen.add(img.angle);
    }
  });
  return ordered;
}

/**
 * Returns a specific angle image for a model, or null if not available.
 */
export function getModelImageByAngle(modelId: string, angle: ImageAngle): CarImage | null {
  const entry = getModelImages(modelId);
  if (!entry) return null;
  return entry.images.find((i) => i.angle === angle) ?? null;
}

/**
 * Returns catalog-wide image coverage statistics.
 */
export function getImageCoverageStats() {
  const cat = loadCatalog();
  return cat.metadata;
}

/**
 * Returns all models that are missing one or more required angles.
 */
export function getModelsWithMissingImages(): ModelImageEntry[] {
  const cat = loadCatalog();
  return cat.models.filter((m) => m.imageStatus !== 'complete');
}
