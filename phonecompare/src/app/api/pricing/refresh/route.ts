import { NextRequest, NextResponse } from 'next/server';
import { PriceIngestionEngine } from '@/lib/pricing/ingestion';

/**
 * Scheduled / Administrative Price Refresh Endpoint
 *
 * Can be triggered via:
 * - Vercel Cron
 * - External cron-job.org / GitHub Actions / curl
 *
 * Headers required:
 * Authorization: Bearer <PRICING_CRON_SECRET>
 */
export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const secret = process.env.PRICING_CRON_SECRET || process.env.CRON_SECRET || 'dev_pricing_secret_key';

    if (process.env.NODE_ENV === 'production') {
      const token = authHeader?.replace(/^Bearer\s+/i, '');
      if (!token || token !== secret) {
        return NextResponse.json(
          { error: 'Unauthorized: Valid administrative bearer token required' },
          { status: 401 }
        );
      }
    }

    const body = await req.json().catch(() => ({}));
    const engine = new PriceIngestionEngine();

    const result = await engine.executeRefresh({
      modelIdOrSlug: body.modelIdOrSlug,
      force: Boolean(body.force),
      dryRun: Boolean(body.dryRun),
      batchSize: body.batchSize,
    });

    return NextResponse.json({
      success: true,
      message: 'Automated price refresh executed successfully',
      result,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // Allow GET for Vercel Cron invocation with query token verification
  const url = new URL(req.url);
  const token = url.searchParams.get('token');
  const secret = process.env.PRICING_CRON_SECRET || process.env.CRON_SECRET || 'dev_pricing_secret_key';

  if (process.env.NODE_ENV === 'production' && token !== secret) {
    return NextResponse.json(
      { error: 'Unauthorized: Valid token parameter required' },
      { status: 401 }
    );
  }

  const engine = new PriceIngestionEngine();
  const result = await engine.executeRefresh({
    force: url.searchParams.get('force') === 'true',
    batchSize: url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : undefined,
  });

  return NextResponse.json({
    success: true,
    message: 'Cron price refresh completed',
    result,
  });
}
