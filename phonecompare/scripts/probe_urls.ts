import { checkUrl } from './probe_image_batch';

const candidates = process.argv.slice(2);

async function run() {
  const results = await Promise.all(
    candidates.map(async (url) => {
      const ok = await checkUrl(url);
      return { url, ok };
    })
  );

  for (const r of results) {
    console.log(`${r.ok ? 'OK' : 'FAIL'} ${r.url}`);
  }
}

run();
