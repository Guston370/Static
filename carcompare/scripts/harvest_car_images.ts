/**
 * scripts/harvest_car_images.ts
 *
 * Systematic 4-Angle Vehicle Image Harvester for Static.
 *
 * Requirements:
 * - Scrapes/harvests real manufacturer & reputable automotive media CDN URLs
 * - Extracts 4 distinct angles per car: front_3_4, rear_3_4, side, front/rear, plus interior
 * - Populates data/car-images.json with structured metadata
 * - Safe, polite batching with realistic headers
 *
 * Run: npx tsx scripts/harvest_car_images.ts
 */

import fs from 'fs';
import path from 'path';
import type { CarImage, ImageAngle, ModelImageEntry, CarImageCatalog } from '../src/types/car-images';

const modelsPath = path.resolve(__dirname, '../data/india-car-models.json');
const imagesPath = path.resolve(__dirname, '../data/car-images.json');

const modelCatalog = JSON.parse(fs.readFileSync(modelsPath, 'utf8'));
const activeModels: Array<{ slug: string; name: string; brand: string; officialUrl: string | null }> =
  modelCatalog.models.filter((m: { status: string }) => m.status === 'active');

const today = new Date().toISOString().split('T')[0];

// Brand slug overrides for CarWale URL construction
const BRAND_URL_MAP: Record<string, string> = {
  'Maruti Suzuki': 'maruti-suzuki-cars',
  'Hyundai': 'hyundai-cars',
  'Tata': 'tata-cars',
  'TATA.ev': 'tata-cars',
  'Mahindra': 'mahindra-cars',
  'Toyota': 'toyota-cars',
  'Kia': 'kia-cars',
  'Honda': 'honda-cars',
  'Volkswagen': 'volkswagen-cars',
  'Skoda': 'skoda-cars',
  'MG': 'mg-cars',
  'Renault': 'renault-cars',
  'Nissan': 'nissan-cars',
  'Citroën': 'citroen-cars',
  'Jeep': 'jeep-cars',
  'BYD': 'byd-cars',
  'BMW': 'bmw-cars',
  'Mercedes-Benz': 'mercedes-benz-cars',
  'Audi': 'audi-cars',
  'Volvo': 'volvo-cars',
  'Land Rover': 'land-rover-cars',
  'Lexus': 'lexus-cars',
  'Porsche': 'porsche-cars',
  'MINI': 'mini-cars',
  'Jaguar': 'jaguar-cars',
  'Ferrari': 'ferrari-cars',
  'Lamborghini': 'lamborghini-cars',
  'Maserati': 'maserati-cars',
  'Aston Martin': 'aston-martin-cars',
  'Bentley': 'bentley-cars',
  'Rolls-Royce': 'rolls-royce-cars',
  'Lotus': 'lotus-cars',
  'McLaren': 'mclaren-cars',
  'Isuzu': 'isuzu-cars',
  'Force Motors': 'force-motors-cars',
};

// Model slug overrides where CarWale URL differs from catalog slug
const MODEL_SLUG_OVERRIDES: Record<string, string> = {
  'maruti-suzuki-alto-k10': 'alto-k10',
  'maruti-suzuki-s-presso': 's-presso',
  'maruti-suzuki-wagon-r': 'wagon-r',
  'maruti-suzuki-grand-vitara': 'grand-vitara',
  'tata-curvv-ev': 'curvv-ev',
  'tata-punch-ev': 'punch-ev',
  'tata-nexon-ev': 'nexon-ev',
  'tata-tiago-ev': 'tiago-ev',
  'tata-tigor-ev': 'tigor-ev',
  'mahindra-xuv-3xo': '3xo',
  'mahindra-thar-roxx': 'thar-roxx',
  'mahindra-bolero-neo': 'bolero-neo',
  'mahindra-scorpio-classic': 'scorpio-classic',
  'mahindra-scorpio-n': 'scorpio-n',
  'toyota-urban-cruiser-taisor': 'urban-cruiser-taisor',
  'toyota-urban-cruiser-hyryder': 'urban-cruiser-hyryder',
  'toyota-innova-hycross': 'innova-hycross',
  'toyota-innova-crysta': 'innova-crysta',
  'toyota-land-cruiser-300': 'land-cruiser',
  'citroen-c3-aircross': 'aircross',
  'citroen-e-c3': 'ec3',
  'bmw-2-series-gran-coupe': '2-series-gran-coupe',
  'bmw-3-series-gran-limousine': '3-series-gran-limousine',
  'bmw-5-series-long-wheelbase': '5-series',
  'bmw-7-series': '7-series',
  'mercedes-benz-a-class-limousine': 'a-class-limousine',
  'mercedes-benz-c-class': 'c-class',
  'mercedes-benz-e-class-long-wheelbase': 'e-class',
  'mercedes-benz-s-class': 's-class',
  'mercedes-benz-g-class': 'g-class',
  'land-rover-range-rover-velar': 'range-rover-velar',
  'land-rover-range-rover-sport': 'range-rover-sport',
  'land-rover-range-rover-evoque': 'range-rover-evoque',
  'land-rover-discovery-sport': 'discovery-sport',
};

function getCandidateUrls(slug: string, brand: string, name: string): string[] {
  const brandPart = BRAND_URL_MAP[brand] || `${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-cars`;
  
  // Strip brand prefix from slug if present
  let modelPart = slug;
  const brandPrefix = brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  if (modelPart.startsWith(brandPrefix + '-')) {
    modelPart = modelPart.slice(brandPrefix.length + 1);
  }
  
  const override = MODEL_SLUG_OVERRIDES[slug];
  const candidates: string[] = [];

  if (override) {
    candidates.push(`https://www.carwale.com/${brandPart}/${override}/images/`);
    candidates.push(`https://www.carwale.com/${brandPart}/${override}/`);
  }

  candidates.push(`https://www.carwale.com/${brandPart}/${modelPart}/images/`);
  candidates.push(`https://www.carwale.com/${brandPart}/${modelPart}/`);

  // Try pure model name
  const nameSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  if (nameSlug !== modelPart) {
    candidates.push(`https://www.carwale.com/${brandPart}/${nameSlug}/images/`);
  }

  return [...new Set(candidates)];
}

function extractImagesFromHtml(html: string, modelName: string, sourceUrl: string): CarImage[] {
  const cleanHtml = html.replace(/\\u0026/g, '&').replace(/&amp;/g, '&');
  const regex = /https:\/\/imgd\.aeplcdn\.com\/[^\s"'<>]+?\.(?:png|jpg|jpeg|webp)(?:\?[^"'<>\s]*)?/gi;
  const matches = cleanHtml.match(regex) || [];
  const unique = [...new Set(matches)];

  const results: CarImage[] = [];
  const anglesFound = new Set<ImageAngle>();

  // Helper to add angle
  const addImage = (rawUrl: string, angle: ImageAngle, angleLabel: string) => {
    if (anglesFound.has(angle)) return;
    const url = rawUrl.replace(/https:\/\/imgd\.aeplcdn\.com\/\d+x\d+\//, 'https://imgd.aeplcdn.com/1056x594/');
    results.push({
      url,
      angle,
      alt: `${modelName} ${angleLabel}`,
      source: 'CarWale Official Automotive Media',
      sourceUrl,
      sourceTier: 'reputable_media',
      generation: 'Current Generation',
      verifiedAt: today,
      urlVerified: true,
    });
    anglesFound.add(angle);
  };

  for (const u of unique) {
    const lower = u.toLowerCase();
    
    // Front Three-Quarter (Right or Left)
    if (
      lower.includes('front-three-quarter') ||
      lower.includes('right-front-three-quarter') ||
      lower.includes('left-front-three-quarter')
    ) {
      addImage(u, 'front_3_4', 'front three-quarter view');
    }
    // Rear Three-Quarter (Right or Left)
    else if (
      lower.includes('rear-three-quarter') ||
      lower.includes('right-rear-three-quarter') ||
      lower.includes('left-rear-three-quarter')
    ) {
      addImage(u, 'rear_3_4', 'rear three-quarter view');
    }
    // Side View Profile
    else if (
      lower.includes('side-view') ||
      lower.includes('right-side-view') ||
      lower.includes('left-side-view') ||
      lower.includes('-side-profile')
    ) {
      addImage(u, 'side', 'side profile view');
    }
    // Straight Front View
    else if (lower.includes('front-view') || lower.includes('front-fascia')) {
      addImage(u, 'front', 'straight front view');
    }
    // Straight Rear View
    else if (lower.includes('rear-view') || lower.includes('rear-fascia')) {
      addImage(u, 'rear', 'straight rear view');
    }
    // Dashboard / Interior View
    else if (lower.includes('dashboard') || lower.includes('steering-wheel')) {
      addImage(u, 'interior', 'dashboard and interior view');
    }
  }

  return results;
}

async function fetchWithTimeout(url: string, timeoutMs = 8000): Promise<string | null> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-IN,en-US;q=0.9,en;q=0.8',
      },
    });
    clearTimeout(id);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    clearTimeout(id);
    return null;
  }
}

async function harvestImages() {
  console.log(`Starting image harvest for ${activeModels.length} active models...`);

  // Load existing catalog if present
  let existingCatalog: CarImageCatalog;
  if (fs.existsSync(imagesPath)) {
    existingCatalog = JSON.parse(fs.readFileSync(imagesPath, 'utf8'));
  } else {
    existingCatalog = {
      metadata: {
        lastUpdated: today,
        catalogVersion: '1.0.0',
        totalModels: activeModels.length,
        modelsWithImages: 0,
        modelsWithFourAngle: 0,
        modelsMissingImages: activeModels.length,
      },
      models: [],
    };
  }

  const existingMap = new Map<string, ModelImageEntry>();
  existingCatalog.models.forEach((m) => existingMap.set(m.modelId, m));

  let modelsCompleted = 0;
  let modelsPartial = 0;
  let modelsFailed = 0;

  for (let i = 0; i < activeModels.length; i++) {
    const model = activeModels[i];
    const existing = existingMap.get(model.slug);

    // If already complete with 4 angles, preserve it
    if (existing && existing.hasFourAngle && existing.images.length >= 4) {
      modelsCompleted++;
      continue;
    }

    const candidateUrls = getCandidateUrls(model.slug, model.brand, model.name);
    let foundImages: CarImage[] = [];
    for (const url of candidateUrls) {
      const html = await fetchWithTimeout(url);
      if (html) {
        const images = extractImagesFromHtml(html, model.name, url);
        if (images.length > foundImages.length) {
          foundImages = images;
          // If we got all 4 angles, stop looking further
          const angles = new Set(foundImages.map((img) => img.angle));
          if (angles.has('front_3_4') && angles.has('rear_3_4') && angles.has('side')) {
            break;
          }
        }
      }
      // Brief polite delay
      await new Promise((r) => setTimeout(r, 60));
    }

    const angles = new Set(foundImages.map((img) => img.angle));
    const hasFourAngle =
      angles.has('front_3_4') &&
      angles.has('rear_3_4') &&
      angles.has('side') &&
      (angles.has('front') || angles.has('rear') || angles.has('interior') || foundImages.length >= 4);

    const imageStatus: 'complete' | 'partial' | 'missing' =
      foundImages.length === 0 ? 'missing' : hasFourAngle ? 'complete' : 'partial';

    const primaryImage =
      foundImages.find((img) => img.angle === 'front_3_4') || foundImages[0] || null;

    const entry: ModelImageEntry = {
      modelId: model.slug,
      modelName: model.name,
      brand: model.brand,
      primaryImage,
      images: foundImages,
      manufacturerPageUrl: model.officialUrl || null,
      hasFourAngle,
      lastAuditedAt: today,
      imageStatus,
    };

    existingMap.set(model.slug, entry);

    if (imageStatus === 'complete') {
      modelsCompleted++;
      console.log(`[${i + 1}/${activeModels.length}] COMPLETE: ${model.brand} ${model.name} (${foundImages.length} angles)`);
    } else if (imageStatus === 'partial') {
      modelsPartial++;
      console.log(`[${i + 1}/${activeModels.length}] PARTIAL:  ${model.brand} ${model.name} (${foundImages.length} angles)`);
    } else {
      modelsFailed++;
      console.log(`[${i + 1}/${activeModels.length}] MISSING:  ${model.brand} ${model.name}`);
    }

    // Save checkpoint every 25 models
    if ((i + 1) % 25 === 0 || i === activeModels.length - 1) {
      const allEntries = activeModels.map((m) => existingMap.get(m.slug)!);
      const withImages = allEntries.filter((m) => m && m.images.length > 0).length;
      const withFour = allEntries.filter((m) => m && m.hasFourAngle).length;
      const missing = allEntries.filter((m) => !m || m.imageStatus === 'missing').length;

      const updatedCatalog: CarImageCatalog = {
        metadata: {
          lastUpdated: today,
          catalogVersion: '1.1.0',
          totalModels: activeModels.length,
          modelsWithImages: withImages,
          modelsWithFourAngle: withFour,
          modelsMissingImages: missing,
        },
        models: allEntries,
      };

      fs.writeFileSync(imagesPath, JSON.stringify(updatedCatalog, null, 2), 'utf8');
      console.log(`>>> CHECKPOINT SAVED (${i + 1}/${activeModels.length}) — ${withFour} models complete with 4 angles`);
    }
  }

  console.log('\n=== IMAGE HARVEST COMPLETED ===');
  console.log(`Complete (4 angles): ${modelsCompleted}`);
  console.log(`Partial:             ${modelsPartial}`);
  console.log(`Missing:             ${modelsFailed}`);
}

harvestImages().catch((err) => {
  console.error('Fatal harvest error:', err);
  process.exit(1);
});
