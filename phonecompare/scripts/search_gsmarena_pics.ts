async function findPicturesForSearch(query: string): Promise<string[]> {
  try {
    const searchUrl = `https://www.gsmarena.com/res.php3?sSearch=${encodeURIComponent(query)}`;
    const res = await fetch(searchUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    if (!res.ok) return [];
    const html = await res.text();
    // Match first search result link e.g. <a href="samsung_galaxy_s24_ultra-12771.php">
    const match = html.match(/href="([a-z0-9_]+)-([0-9]+)\.php"/i);
    if (!match) return [];
    const pageSlug = `${match[1]}-pictures-${match[2]}.php`;
    const picRes = await fetch(`https://www.gsmarena.com/${pageSlug}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    if (!picRes.ok) return [];
    const picHtml = await picRes.text();
    const listMatch = picHtml.match(/<div id="pictures-list"[^>]*>([\s\S]*?)<\/div>/i);
    const content = listMatch ? listMatch[1] : picHtml;
    // Extract images that belong to the device brand
    const brand = match[1].split('_')[0];
    const regex = new RegExp(`https:\\/\\/fdn2?\\.gsmarena\\.com\\/vv\\/pics\\/${brand}\\/[^\\s"']+\\.jpg`, 'gi');
    const pics = content.match(regex) || [];
    return Array.from(new Set(pics)).filter((p) => !p.includes('-thumb'));
  } catch {
    return [];
  }
}

async function test() {
  const models = [
    'Galaxy S24 Ultra',
    'Galaxy S24',
    'Galaxy Z Fold6',
    'Galaxy Z Flip6',
    'Galaxy A55',
    'Galaxy M35',
    'OnePlus 12',
    'OnePlus Nord 4',
    'OnePlus 12R',
    'Xiaomi 14',
    'Redmi Note 13 Pro',
    'Vivo X100 Pro',
    'iQOO 12',
    'Realme GT 6',
  ];

  for (const m of models) {
    const pics = await findPicturesForSearch(m);
    console.log(`=== ${m} === (${pics.length} pics)`);
    pics.slice(0, 4).forEach((p, i) => console.log(`   [${i}] ${p}`));
  }
}

test();
