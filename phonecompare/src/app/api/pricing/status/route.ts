import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { determineFreshness } from '@/lib/pricing/validator';

export async function GET() {
  try {
    const dataPath = path.resolve(process.cwd(), 'data', 'pricing', 'mobile-prices.json');
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json({
        status: 'uninitialized',
        message: 'No pricing snapshots found on disk',
      });
    }

    const raw = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const snapshots = raw.snapshots || {};
    const keys = Object.keys(snapshots);

    let freshCount = 0;
    let cachedCount = 0;
    let staleCount = 0;

    keys.forEach((k) => {
      const f = determineFreshness(snapshots[k].lastCheckedAt);
      if (f === 'fresh') freshCount++;
      else if (f === 'cached') cachedCount++;
      else staleCount++;
    });

    return NextResponse.json({
      status: 'operational',
      totalModelsTracked: keys.length,
      coverage: {
        fresh: freshCount,
        cached: cachedCount,
        stale: staleCount,
      },
      lastRefreshedAt: raw.metadata?.lastRefreshedAt || raw.metadata?.generatedAt,
      sampleModel: keys[0] ? snapshots[keys[0]] : null,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { status: 'error', error: (error as Error).message },
      { status: 500 }
    );
  }
}
