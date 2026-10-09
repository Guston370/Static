export async function checkUrl(url: string): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return res.status === 200;
  } catch {
    return false;
  }
}

export async function findBestImage(brand: string, bases: string[]): Promise<string | null> {
  for (const b of bases) {
    const urls = [
      `https://fdn2.gsmarena.com/vv/bigpic/${b}.jpg`,
      `https://fdn2.gsmarena.com/vv/pics/${brand}/${b}-0.jpg`,
      `https://fdn2.gsmarena.com/vv/pics/${brand}/${b}-1.jpg`,
      `https://fdn2.gsmarena.com/vv/pics/${brand}/${b}-00.jpg`,
    ];
    for (const u of urls) {
      if (await checkUrl(u)) return u;
    }
  }
  return null;
}
