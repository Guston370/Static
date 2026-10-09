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

async function probePhone(brand: string, bases: string[]) {
  console.log(`\n=== Probing ${brand} ===`);
  for (const base of bases) {
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
  await probePhone('vivo', [
    'vivo-x100-pro',
    'vivo-x100',
    'vivo-v40-pro',
    'vivo-v40',
    'vivo-v30-pro',
    'vivo-v30',
    'vivo-t3-ultra',
    'vivo-t3-pro',
    'vivo-t3x',
    'vivo-t3',
    'vivo-y300',
    'vivo-y200',
    'vivo-iqoo-13',
    'vivo-iqoo-12',
    'vivo-iqoo-neo9-pro',
    'vivo-iqoo-z9s-pro',
    'vivo-iqoo-z9-turbo',
    'vivo-iqoo-z9x',
  ]);

  await probePhone('oppo', [
    'oppo-find-x8-pro',
    'oppo-find-x8',
    'oppo-reno12-pro',
    'oppo-reno12',
    'oppo-reno11-pro',
    'oppo-f27-pro-plus',
    'oppo-f27',
    'oppo-k12x-5g',
    'oppo-a3-pro',
  ]);

  await probePhone('realme', [
    'realme-gt7-pro',
    'realme-gt-6',
    'realme-gt-6t',
    'realme-13-pro-plus',
    'realme-13-pro',
    'realme-13-plus',
    'realme-13',
    'realme-12-pro-plus',
    'realme-narzo-70-pro',
    'realme-narzo-70x',
    'realme-c65',
  ]);

  await probePhone('infinix', [
    'infinix-gt-20-pro',
    'infinix-zero-40-5g',
    'infinix-note-40-pro-plus',
    'infinix-note-40-pro',
    'infinix-hot-50-5g',
  ]);

  await probePhone('tecno', [
    'tecno-phantom-v-fold2',
    'tecno-camon-30-premier',
    'tecno-camon-30-pro',
    'tecno-pova-6-pro',
    'tecno-spark-20-pro-plus',
  ]);

  await probePhone('lava', [
    'lava-agni-3',
    'lava-agni-2',
    'lava-blaze-curve-5g',
    'lava-blaze-curve',
    'lava-blaze-x',
    'lava-storm-5g',
    'lava-yuva-3-pro',
  ]);

  await probePhone('hmd', [
    'hmd-skyline',
    'hmd-crest-max',
    'hmd-crest',
    'hmd-fusion',
    'hmd-pulse-pro',
  ]);
}

run();
