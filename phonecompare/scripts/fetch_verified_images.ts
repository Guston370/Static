export async function getImagesForPicturesPage(pageSlug: string): Promise<string[]> {
  const url = `https://www.gsmarena.com/${pageSlug}`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    if (!res.ok) return [];
    const html = await res.text();
    // Isolate pictures-list container
    const listMatch = html.match(/<div id="pictures-list"[^>]*>([\s\S]*?)<\/div>/i);
    const content = listMatch ? listMatch[1] : html;
    const matches = content.match(/https:\/\/fdn2?\.gsmarena\.com\/vv\/pics\/[^\s\"']+/g) || [];
    return Array.from(new Set(matches)).filter((u) => !u.includes('-thumb'));
  } catch {
    return [];
  }
}

async function test() {
  const slugs = [
    'samsung_galaxy_s24_ultra-pictures-12771.php',
    'samsung_galaxy_s24-pictures-12773.php',
    'samsung_galaxy_z_fold6-pictures-13166.php',
    'samsung_galaxy_z_flip6-pictures-13167.php',
    'oneplus_12-pictures-12725.php',
    'oneplus_nord_4-pictures-13203.php',
    'xiaomi_14-pictures-12626.php',
    'vivo_v40_pro-pictures-13233.php',
  ];

  for (const s of slugs) {
    const imgs = await getImagesForPicturesPage(s);
    console.log(`${s.split('-')[0]}: ${imgs.length} gallery images found`);
    imgs.slice(0, 4).forEach((img, i) => console.log(`   [${i}] ${img}`));
  }
}

test();
