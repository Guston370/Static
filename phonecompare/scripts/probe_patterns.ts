async function checkUrl(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    return res.status === 200;
  } catch {
    return false;
  }
}

async function probePhone(brand: string, basePatterns: string[]) {
  console.log(`\nTesting probe patterns for ${brand}...`);
  for (const base of basePatterns) {
    const bigpic = `https://fdn2.gsmarena.com/vv/bigpic/${base}.jpg`;
    const pic0 = `https://fdn2.gsmarena.com/vv/pics/${brand}/${base}-0.jpg`;
    const pic1 = `https://fdn2.gsmarena.com/vv/pics/${brand}/${base}-1.jpg`;
    const pic2 = `https://fdn2.gsmarena.com/vv/pics/${brand}/${base}-2.jpg`;
    const pic3 = `https://fdn2.gsmarena.com/vv/pics/${brand}/${base}-3.jpg`;
    const pic01 = `https://fdn2.gsmarena.com/vv/pics/${brand}/${base}-01.jpg`;
    const pic02 = `https://fdn2.gsmarena.com/vv/pics/${brand}/${base}-02.jpg`;

    const checks = await Promise.all([
      checkUrl(bigpic),
      checkUrl(pic0),
      checkUrl(pic1),
      checkUrl(pic2),
      checkUrl(pic3),
      checkUrl(pic01),
      checkUrl(pic02),
    ]);

    const working = [
      checks[0] ? `bigpic: ${bigpic}` : null,
      checks[1] ? `pic0: ${pic0}` : null,
      checks[2] ? `pic1: ${pic1}` : null,
      checks[3] ? `pic2: ${pic2}` : null,
      checks[4] ? `pic3: ${pic3}` : null,
      checks[5] ? `pic01: ${pic01}` : null,
      checks[6] ? `pic02: ${pic02}` : null,
    ].filter(Boolean);

    if (working.length > 0) {
      console.log(`[FOUND ${working.length}] ${base}:`);
      working.forEach((w) => console.log(`   ${w}`));
    } else {
      console.log(`[NONE] ${base}`);
    }
  }
}

async function run() {
  await probePhone('samsung', [
    'samsung-galaxy-s24-ultra-5g-sm-s928',
    'samsung-galaxy-s24-5g-sm-s921',
    'samsung-galaxy-s24-plus-5g-sm-s926',
    'samsung-galaxy-s24-fe',
    'samsung-galaxy-s23-5g',
    'samsung-galaxy-s23',
    'samsung-galaxy-z-fold6',
    'samsung-galaxy-z-flip6',
    'samsung-galaxy-a55',
    'samsung-galaxy-a35',
    'samsung-galaxy-a16',
    'samsung-galaxy-a06',
    'samsung-galaxy-m35',
    'samsung-galaxy-m15',
    'samsung-galaxy-m05',
    'samsung-galaxy-f55',
  ]);

  await probePhone('google', [
    'google-pixel-9-pro-xl',
    'google-pixel-9-pro',
    'google-pixel-9',
    'google-pixel-9-pro-fold',
    'google-pixel-8a',
    'google-pixel-8-pro',
    'google-pixel-8',
    'google-pixel-7a',
  ]);

  await probePhone('oneplus', [
    'oneplus-12',
    'oneplus-12r',
    'oneplus-11',
    'oneplus-open',
    'oneplus-nord-4',
    'oneplus-nord-ce4',
    'oneplus-nord-ce4-lite',
  ]);

  await probePhone('xiaomi', [
    'xiaomi-14-ultra',
    'xiaomi-14',
    'xiaomi-14-civi',
    'xiaomi-redmi-note-13-pro-plus',
    'xiaomi-redmi-note-13-pro',
    'xiaomi-redmi-note-13',
    'xiaomi-redmi-13-5g',
    'xiaomi-redmi-a3',
    'xiaomi-poco-f6-pro',
    'xiaomi-poco-f6',
    'xiaomi-poco-x6-pro',
    'xiaomi-poco-m6-plus',
  ]);
}

run();
