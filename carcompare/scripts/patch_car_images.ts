#!/usr/bin/env tsx
/**
 * scripts/patch_car_images.ts
 *
 * Patch tool for updating car-images.json with researched image data.
 *
 * Usage:
 *   tsx scripts/patch_car_images.ts --model <slug> --angle <angle> --url <url> \
 *     --source <name> --source-url <url> --tier <tier> --generation <gen>
 *
 * Or supply a patch JSON file:
 *   tsx scripts/patch_car_images.ts --patch-file <path>
 *
 * Patch file format (array of image patches):
 * [
 *   {
 *     "modelId": "maruti-suzuki-swift",
 *     "angle": "front_3_4",
 *     "url": "https://...",
 *     "alt": "Maruti Suzuki Swift front three-quarter view",
 *     "source": "Maruti Suzuki Official",
 *     "sourceUrl": "https://www.marutisuzuki.com/swift",
 *     "sourceTier": "official",
 *     "generation": "2024 facelift",
 *     "urlVerified": true
 *   }
 * ]
 */

import fs from 'fs';
import path from 'path';

const imagesPath = path.resolve(__dirname, '../data/car-images.json');

type ImageAngle = 'front_3_4' | 'rear_3_4' | 'side' | 'front' | 'rear' | 'interior';
type ImageSourceTier = 'official' | 'official_press' | 'reputable_media';

interface ImagePatch {
  modelId: string;
  angle: ImageAngle;
  url: string;
  alt?: string;
  source: string;
  sourceUrl: string;
  sourceTier: ImageSourceTier;
  generation?: string | null;
  urlVerified?: boolean;
}

const REQUIRED_ANGLES: ImageAngle[] = ['front_3_4', 'rear_3_4', 'side'];
const today = new Date().toISOString().split('T')[0];

function loadCatalog() {
  return JSON.parse(fs.readFileSync(imagesPath, 'utf8'));
}

function saveCatalog(catalog: Record<string, unknown>) {
  fs.writeFileSync(imagesPath, JSON.stringify(catalog, null, 2), 'utf8');
}

function computeStatus(images: { angle: string }[]): 'complete' | 'partial' | 'missing' {
  if (!images || images.length === 0) return 'missing';
  const angles = new Set(images.map(i => i.angle));
  const hasFrontRear = angles.has('front') || angles.has('rear');
  if (REQUIRED_ANGLES.every(a => angles.has(a)) && hasFrontRear) return 'complete';
  return 'partial';
}

function applyPatches(patches: ImagePatch[]) {
  const catalog = loadCatalog();
  let applied = 0;
  let skipped = 0;

  for (const patch of patches) {
    const entry = catalog.models.find((m: { modelId: string }) => m.modelId === patch.modelId);
    if (!entry) {
      console.warn(`[SKIP] Model '${patch.modelId}' not found in catalog`);
      skipped++;
      continue;
    }

    // Check if this angle already exists
    const existingIdx = entry.images.findIndex((i: { angle: string }) => i.angle === patch.angle);
    const newImage = {
      url: patch.url,
      angle: patch.angle,
      alt: patch.alt || `${entry.modelName} ${patch.angle.replace('_', ' ')} view`,
      source: patch.source,
      sourceUrl: patch.sourceUrl,
      sourceTier: patch.sourceTier,
      generation: patch.generation ?? null,
      verifiedAt: today,
      urlVerified: patch.urlVerified ?? false,
    };

    if (existingIdx >= 0) {
      console.log(`[UPDATE] ${patch.modelId} / ${patch.angle}`);
      entry.images[existingIdx] = newImage;
    } else {
      console.log(`[ADD]    ${patch.modelId} / ${patch.angle}`);
      entry.images.push(newImage);
    }

    // Update primaryImage if it's the first image or if it's front_3_4
    if (!entry.primaryImage || patch.angle === 'front_3_4') {
      entry.primaryImage = newImage;
    }

    // Recompute status
    const status = computeStatus(entry.images);
    entry.imageStatus = status;
    entry.hasFourAngle = status === 'complete';
    entry.lastAuditedAt = today;

    applied++;
  }

  // Recompute metadata
  const withImages = catalog.models.filter((m: { images: unknown[] }) => m.images && m.images.length > 0).length;
  const withFour = catalog.models.filter((m: { hasFourAngle: boolean }) => m.hasFourAngle).length;
  const missing = catalog.models.filter((m: { imageStatus: string }) => m.imageStatus === 'missing').length;

  catalog.metadata.lastUpdated = today;
  catalog.metadata.modelsWithImages = withImages;
  catalog.metadata.modelsWithFourAngle = withFour;
  catalog.metadata.modelsMissingImages = missing;

  saveCatalog(catalog);

  console.log(`\nApplied: ${applied} patches, Skipped: ${skipped}`);
  console.log(`Coverage: ${withImages}/${catalog.metadata.totalModels} models with images, ${withFour} with 4-angle coverage`);
}

// Parse command line
const args = process.argv.slice(2);
const patchFileIdx = args.indexOf('--patch-file');

if (patchFileIdx >= 0) {
  const patchFile = args[patchFileIdx + 1];
  if (!patchFile || !fs.existsSync(patchFile)) {
    console.error('ERROR: --patch-file path does not exist');
    process.exit(1);
  }
  const patches: ImagePatch[] = JSON.parse(fs.readFileSync(patchFile, 'utf8'));
  applyPatches(patches);
} else {
  // Single patch from CLI args
  const get = (flag: string) => {
    const idx = args.indexOf(flag);
    return idx >= 0 ? args[idx + 1] : undefined;
  };
  const modelId = get('--model');
  const angle = get('--angle') as ImageAngle;
  const url = get('--url');
  const source = get('--source');
  const sourceUrl = get('--source-url');
  const tier = (get('--tier') || 'reputable_media') as ImageSourceTier;
  const generation = get('--generation') || null;
  const alt = get('--alt');

  if (!modelId || !angle || !url || !source || !sourceUrl) {
    console.error('Usage: tsx scripts/patch_car_images.ts --patch-file <file>');
    console.error('  or:  tsx scripts/patch_car_images.ts --model <slug> --angle <angle> --url <url> --source <name> --source-url <url>');
    process.exit(1);
  }

  applyPatches([{ modelId, angle, url, alt, source, sourceUrl, sourceTier: tier, generation, urlVerified: false }]);
}
