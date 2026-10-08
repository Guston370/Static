/**
 * scripts/update_car_catalog.ts
 *
 * Maintenance workflow for updating the Indian passenger-car catalog:
 * 1. Reads existing data/india-car-models.json
 * 2. Pulls freshly discovered models
 * 3. Compares incoming records against existing verified records
 * 4. Detects new models, changed statuses, and potential duplicates
 * 5. Preserves existing verified specs and audits
 * 6. Generates a comprehensive change report
 * 7. Runs validateCatalog() before replacing the production catalog
 *
 * Usage: npm run update:cars
 */

import * as fs from 'fs';
import * as path from 'path';
import { buildMasterCatalog, MasterCatalogData } from './build_master_catalog';
import { validateCatalog } from './validate_car_catalog';

export function updateCatalog() {
  const catalogPath = path.join(__dirname, '..', 'data', 'india-car-models.json');

  console.log('CAR CATALOG UPDATE WORKFLOW');
  console.log('───────────────────────────');

  let existingCatalog: MasterCatalogData | null = null;
  if (fs.existsSync(catalogPath)) {
    existingCatalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    console.log(`Loaded existing catalog with ${existingCatalog?.models.length} models.`);
  }

  // 1. Generate incoming fresh catalog
  const freshCatalog = buildMasterCatalog();

  // 2. Diffing & Change Detection
  const existingMap = new Map(existingCatalog?.models.map((m) => [m.id, m]) || []);
  const newModels: string[] = [];
  const statusChanged: string[] = [];
  const potentiallyDiscontinued: string[] = [];
  const possibleDuplicates: string[] = [];

  const seenNormalizedNames = new Set<string>();

  for (const freshModel of freshCatalog.models) {
    const existing = existingMap.get(freshModel.id);

    // Duplicate check
    const norm = `${freshModel.brand} ${freshModel.name}`
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
    if (seenNormalizedNames.has(norm)) {
      possibleDuplicates.push(`${freshModel.fullName} (${freshModel.slug})`);
    } else {
      seenNormalizedNames.add(norm);
    }

    if (!existing) {
      newModels.push(`+ ${freshModel.fullName} [${freshModel.status.toUpperCase()}]`);
    } else {
      // Preserve rich specs if fresh does not have them
      if (!freshModel.specs?.maxPowerBhp && existing.specs?.maxPowerBhp) {
        freshModel.specs = existing.specs;
      }
      if (existing.status !== freshModel.status) {
        statusChanged.push(`~ ${freshModel.fullName}: ${existing.status} ➔ ${freshModel.status}`);
      }
    }
  }

  // Detect models that existed previously but are not in fresh active list
  const freshIds = new Set(freshCatalog.models.map((m) => m.id));
  if (existingCatalog) {
    for (const oldModel of existingCatalog.models) {
      if (!freshIds.has(oldModel.id)) {
        potentiallyDiscontinued.push(`- ${oldModel.fullName} (marked for review, not deleted)`);
        // Never destructively delete: preserve into catalog with status flagged
        freshCatalog.models.push({
          ...oldModel,
          status: 'discontinued',
          lastVerified: freshCatalog.metadata.lastUpdated,
        });
      }
    }
  }

  // 3. Write staging file and validate before replacing production
  const stagingPath = path.join(__dirname, '..', 'data', 'india-car-models.staging.json');
  fs.writeFileSync(stagingPath, JSON.stringify(freshCatalog, null, 2), 'utf8');

  console.log('\nRunning validation on staging catalog...');
  const valResult = validateCatalog(stagingPath);

  if (!valResult.valid) {
    console.error('✖ Staging validation failed! Production catalog was NOT modified.');
    valResult.errors.forEach((e) => console.error(`  - ${e}`));
    fs.unlinkSync(stagingPath);
    process.exit(1);
  }

  // 4. Overwrite production catalog
  fs.copyFileSync(stagingPath, catalogPath);
  fs.unlinkSync(stagingPath);

  // 5. Output Change Report
  console.log('\nCAR CATALOG UPDATE REPORT');
  console.log('─────────────────────────');
  console.log(`New models added:          ${newModels.length}`);
  if (newModels.length > 0) {
    newModels.slice(0, 10).forEach((m) => console.log(`  ${m}`));
    if (newModels.length > 10) console.log(`  ... and ${newModels.length - 10} more`);
  }

  console.log(`Status changes:            ${statusChanged.length}`);
  statusChanged.forEach((s) => console.log(`  ${s}`));

  console.log(`Potentially discontinued:  ${potentiallyDiscontinued.length}`);
  potentiallyDiscontinued.forEach((p) => console.log(`  ${p}`));

  console.log(`Possible duplicates noted: ${possibleDuplicates.length}`);
  possibleDuplicates.forEach((d) => console.log(`  ! Review: ${d}`));

  console.log('\n✔ Master catalog updated successfully at:');
  console.log(`  ${catalogPath}\n`);
}

if (require.main === module) {
  updateCatalog();
}
