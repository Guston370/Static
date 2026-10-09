// Map of modelId to known GSMArena pictures page slug or exact picture URLs
export const modelImageSources: Record<string, string[]> = {
  // Samsung
  'samsung-galaxy-s25-ultra': [
    'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-1.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-2.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-3.jpg',
  ],
  'samsung-galaxy-s25-plus': [
    'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-plus.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-plus-1.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-plus-2.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-plus-3.jpg',
  ],
  'samsung-galaxy-s25': [
    'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-1.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-2.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-3.jpg',
  ],
  'samsung-galaxy-s24-ultra': [
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-2.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-3.jpg',
  ],
  'samsung-galaxy-s24': [
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-sm-s921-0.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-sm-s921-1.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-sm-s921-2.jpg',
    'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-sm-s921-3.jpg',
  ],
};

async function testUrl(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function run() {
  for (const [id, urls] of Object.entries(modelImageSources)) {
    console.log(`Checking ${id}:`);
    for (const u of urls) {
      const ok = await testUrl(u);
      console.log(`   ${ok ? '✓ 200' : '✗ FAIL'} ${u}`);
    }
  }
}

run();
