/**
 * CLI Administration Tool: CarCompare Pricing Ingestion & Observability
 *
 * Usage:
 *   npx tsx scripts/pricing_admin.ts --refresh
 *   npx tsx scripts/pricing_admin.ts --refresh --slug tata-nexon
 *   npx tsx scripts/pricing_admin.ts --status
 *   npx tsx scripts/pricing_admin.ts --stale
 *   npx tsx scripts/pricing_admin.ts --force
 */

import { CarPriceIngestionEngine } from '../src/lib/pricing/ingestion';
import fs from 'fs';
import path from 'path';
import { determineFreshness } from '../src/lib/pricing/validator';

async function main() {
  const args = process.argv.slice(2);
  const dataPath = path.resolve(__dirname, '..', 'data', 'pricing', 'car-prices.json');
  const engine = new CarPriceIngestionEngine(dataPath);

  if (args.includes('--status') || args.length === 0) {
    if (!fs.existsSync(dataPath)) {
      console.log('No car pricing data found at', dataPath);
      return;
    }
    const raw = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const snapshots = raw.snapshots || {};
    const keys = Object.keys(snapshots);

    let fresh = 0;
    let cached = 0;
    let stale = 0;

    keys.forEach((k) => {
      const f = determineFreshness(snapshots[k].lastCheckedAt);
      if (f === 'fresh') fresh++;
      else if (f === 'cached') cached++;
      else stale++;
    });

    console.log('==============================================');
    console.log('🚗 CarCompare Pricing System Status');
    console.log('==============================================');
    console.log(`Total Cars Tracked:  ${keys.length}`);
    console.log(`Fresh (<12 hours):   ${fresh}`);
    console.log(`Cached (12-24h):     ${cached}`);
    console.log(`Stale (>7 days):     ${stale}`);
    console.log(`Last Refreshed:      ${raw.metadata?.lastRefreshedAt || raw.metadata?.generatedAt}`);
    console.log('==============================================');
    return;
  }

  if (args.includes('--stale')) {
    const raw = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const snapshots = raw.snapshots || {};
    const staleList: string[] = [];

    Object.keys(snapshots).forEach((k) => {
      if (determineFreshness(snapshots[k].lastCheckedAt) === 'stale') {
        staleList.push(`${snapshots[k].brand} ${snapshots[k].model} (${k})`);
      }
    });

    console.log(`Stale Cars (${staleList.length}):`);
    staleList.slice(0, 20).forEach((item) => console.log(' -', item));
    if (staleList.length > 20) {
      console.log(` ... and ${staleList.length - 20} more`);
    }
    return;
  }

  if (args.includes('--refresh')) {
    const force = args.includes('--force');
    const dryRun = args.includes('--dry-run');
    let slug: string | undefined;

    const slugIdx = args.indexOf('--slug');
    if (slugIdx !== -1 && args[slugIdx + 1]) {
      slug = args[slugIdx + 1];
    }

    console.log(`Initiating car price refresh (force: ${force}, dryRun: ${dryRun}, target: ${slug || 'ALL'})...`);
    const result = await engine.executeRefresh({
      slug,
      force,
      dryRun,
    });

    console.log('----------------------------------------------');
    console.log('Refresh Summary:');
    console.log(`Processed: ${result.totalProcessed}`);
    console.log(`Updated:   ${result.updatedCount}`);
    console.log(`Unchanged: ${result.unchangedCount}`);
    console.log(`Failed:    ${result.failedCount}`);
    if (result.warnings.length > 0) {
      console.log(`Warnings (${result.warnings.length}):`);
      result.warnings.slice(0, 5).forEach((w) => console.log(' ⚠️', w));
    }
    if (result.errors.length > 0) {
      console.log(`Errors (${result.errors.length}):`);
      result.errors.slice(0, 5).forEach((e) => console.log(' ❌', e));
    }
    console.log('----------------------------------------------');
  }
}

main().catch(console.error);
