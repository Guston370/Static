import { NextRequest, NextResponse } from 'next/server';
import { CarPriceIngestionEngine } from '@/lib/pricing/ingestion';

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
    const engine = new CarPriceIngestionEngine();

    const result = await engine.executeRefresh({
      slug: body.slug,
      force: Boolean(body.force),
      dryRun: Boolean(body.dryRun),
      batchSize: body.batchSize,
    });

    return NextResponse.json({
      success: true,
      message: 'Car price refresh executed successfully',
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
  const url = new URL(req.url);
  const token = url.searchParams.get('token');
  const secret = process.env.PRICING_CRON_SECRET || process.env.CRON_SECRET || 'dev_pricing_secret_key';

  if (process.env.NODE_ENV === 'production' && token !== secret) {
    return NextResponse.json(
      { error: 'Unauthorized: Valid token parameter required' },
      { status: 401 }
    );
  }

  const engine = new CarPriceIngestionEngine();
  const result = await engine.executeRefresh({
    force: url.searchParams.get('force') === 'true',
    batchSize: url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : undefined,
  });

  return NextResponse.json({
    success: true,
    message: 'Cron car price refresh completed',
    result,
  });
}
