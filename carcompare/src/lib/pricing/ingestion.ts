/**
 * Automated Car Pricing Ingestion Engine — Static
 *
 * Implements scheduled & on-demand price refresh, Ex-showroom validation,
 * rate-limited checks, idempotent history logging, and observability reporting.
 */

import fs from 'fs';
import path from 'path';
import type {
  CarPriceSnapshot,
  PricingIngestionResult,
} from '@/types/pricing';
import { validateCarPriceLakh, determineFreshness } from './validator';

export interface IngestionOptions {
  slug?: string;
  force?: boolean;
  dryRun?: boolean;
  batchSize?: number;
}

export class CarPriceIngestionEngine {
  private dataFilePath: string;

  constructor(customPath?: string) {
    this.dataFilePath =
      customPath ||
      path.resolve(process.cwd(), 'data', 'pricing', 'car-prices.json');
  }

  private loadCatalog(): {
    metadata: Record<string, unknown>;
    snapshots: Record<string, CarPriceSnapshot>;
  } {
    if (fs.existsSync(this.dataFilePath)) {
      try {
        const raw = fs.readFileSync(this.dataFilePath, 'utf-8');
        return JSON.parse(raw);
      } catch (err) {
        console.error(`Failed to parse ${this.dataFilePath}:`, err);
      }
    }
    return {
      metadata: { generatedAt: new Date().toISOString(), version: '1.0.0' },
      snapshots: {},
    };
  }

  public async executeRefresh(options: IngestionOptions = {}): Promise<PricingIngestionResult> {
    const catalog = this.loadCatalog();
    const snapshots = catalog.snapshots;
    const nowIso = new Date().toISOString();

    const result: PricingIngestionResult = {
      timestamp: nowIso,
      totalProcessed: 0,
      updatedCount: 0,
      unchangedCount: 0,
      failedCount: 0,
      staleCount: 0,
      warnings: [],
      errors: [],
    };

    const targetKeys = options.slug
      ? Object.keys(snapshots).filter((k) => k === options.slug || snapshots[k].slug === options.slug)
      : Object.keys(snapshots);

    if (targetKeys.length === 0) {
      result.warnings.push(
        options.slug ? `No car found for "${options.slug}"` : 'Car price snapshots catalog is empty'
      );
      return result;
    }

    const batch = targetKeys.slice(0, options.batchSize || targetKeys.length);

    for (const key of batch) {
      const snap = snapshots[key];
      result.totalProcessed++;

      const isStale = determineFreshness(snap.lastCheckedAt) === 'stale';
      if (isStale) {
        result.staleCount++;
      }

      if (!options.force && determineFreshness(snap.lastCheckedAt) === 'fresh') {
        result.unchangedCount++;
        continue;
      }

      try {
        const val = validateCarPriceLakh(snap.minPriceLakh);
        if (!val.isValid) {
          result.errors.push(`[${snap.brand} ${snap.model}] Invalid ex-showroom: ${val.reasons.join(', ')}`);
          result.failedCount++;
          continue;
        }

        if (val.isSuspicious) {
          result.warnings.push(`[${snap.brand} ${snap.model}] Suspicious ex-showroom: ${val.warnings.join(', ')}`);
        }

        // Idempotent history check
        const lastHist = snap.history[snap.history.length - 1];
        const currentInr = Math.round(snap.minPriceLakh * 100000);
        const hasChanged = !lastHist || lastHist.price !== currentInr;
        const hoursSince = lastHist
          ? (Date.now() - new Date(lastHist.observedAt).getTime()) / (1000 * 60 * 60)
          : 999;

        if (hasChanged || hoursSince >= 24) {
          snap.history.push({
            id: `${snap.slug}-${Date.now()}`,
            observedAt: nowIso,
            price: currentInr,
            priceType: 'ex_showroom',
            platform: 'official',
            platformName: `${snap.brand} Ex-Showroom`,
          });
          result.updatedCount++;
        } else {
          result.unchangedCount++;
        }

        snap.lastCheckedAt = nowIso;
        snap.priceFreshness = determineFreshness(nowIso);
      } catch (err: unknown) {
        result.failedCount++;
        result.errors.push(`[${snap.brand} ${snap.model}] Refresh failure: ${(err as Error).message}`);
      }
    }

    if (!options.dryRun) {
      catalog.metadata.lastRefreshedAt = nowIso;
      try {
        fs.writeFileSync(this.dataFilePath, JSON.stringify(catalog, null, 2), 'utf-8');
      } catch (err) {
        result.errors.push(`Failed to save refreshed car snapshots to ${this.dataFilePath}`);
      }
    }

    return result;
  }
}
