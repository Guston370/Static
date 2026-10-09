import * as fs from 'fs';
import * as path from 'path';

async function testUrl(url: string): Promise<{ url: string; status: number; ok: boolean }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return { url, status: res.status, ok: res.ok };
  } catch {
    return { url, status: 0, ok: false };
  }
}

async function run() {
  const imagesFile = path.resolve('data/mobile-images.json');
  const catalog = JSON.parse(fs.readFileSync(imagesFile, 'utf8'));

  const items: { modelId: string; angle: string; url: string }[] = [];
  for (const m of catalog.models) {
    for (const img of m.images) {
      items.push({ modelId: m.modelId, angle: img.angle, url: img.url });
    }
  }

  console.log(`Testing ${items.length} image URLs concurrently...`);

  const results: { modelId: string; angle: string; url: string; status: number; ok: boolean }[] = [];
  const chunkSize = 20;
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    const res = await Promise.all(
      chunk.map(async (item) => {
        const r = await testUrl(item.url);
        return { ...item, status: r.status, ok: r.ok };
      })
    );
    results.push(...res);
  }

  const okCount = results.filter((r) => r.ok).length;
  const fail = results.filter((r) => !r.ok);

  console.log(`Results: ${okCount}/${items.length} OK, ${fail.length} Failed.`);
  if (fail.length > 0) {
    console.log('Failed URLs by model:');
    const grouped = new Map<string, string[]>();
    for (const f of fail) {
      const list = grouped.get(f.modelId) || [];
      list.push(`${f.angle} (${f.status}): ${f.url}`);
      grouped.set(f.modelId, list);
    }
    for (const [modelId, errs] of grouped.entries()) {
      console.log(`  ${modelId}:`);
      errs.forEach((e) => console.log(`     ${e}`));
    }
  }
}

run();
