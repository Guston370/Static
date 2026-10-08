/**
 * types/car-images.ts
 * 
 * Type definitions for the Static car image data layer.
 * 
 * Architecture:
 *   data/car-images.json  — Canonical image catalog (one entry per model)
 *
 * Four angles per model:
 *   front_3_4   — Front three-quarter view
 *   rear_3_4    — Rear three-quarter view
 *   side        — Full side profile
 *   front       — Straight front view
 *   rear        — Straight rear view
 *   interior    — Interior/dashboard view
 */

export type ImageAngle = 'front_3_4' | 'rear_3_4' | 'side' | 'front' | 'rear' | 'interior';

export type ImageSourceTier = 'official' | 'official_press' | 'reputable_media';

export interface CarImage {
  /** Direct URL to the image */
  url: string;
  /** Angle this image represents */
  angle: ImageAngle;
  /** Human-readable alt text */
  alt: string;
  /** Source website/publication name */
  source: string;
  /** Original source page URL */
  sourceUrl: string;
  /** Source tier */
  sourceTier: ImageSourceTier;
  /** Generation this image belongs to, e.g. "2024 facelift" */
  generation: string | null;
  /** ISO date when this image was verified/added */
  verifiedAt: string;
  /** Whether this image URL has been confirmed working */
  urlVerified: boolean;
}

export interface ModelImageEntry {
  /** Must match slug in india-car-models.json */
  modelId: string;
  modelName: string;
  brand: string;
  /** Preferred display image (usually front_3_4) */
  primaryImage: CarImage | null;
  /** All available verified images for this model */
  images: CarImage[];
  /** Official manufacturer page for imagery */
  manufacturerPageUrl: string | null;
  /** Has all 4 required angles covered */
  hasFourAngle: boolean;
  /** ISO date of last audit */
  lastAuditedAt: string;
  /** Coverage status */
  imageStatus: 'complete' | 'partial' | 'missing';
}

export interface CarImageCatalog {
  metadata: {
    lastUpdated: string;
    catalogVersion: string;
    totalModels: number;
    modelsWithImages: number;
    modelsWithFourAngle: number;
    modelsMissingImages: number;
  };
  models: ModelImageEntry[];
}
