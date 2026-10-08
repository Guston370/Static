import fs from 'fs';

interface ImageMatch {
  url: string;
  angle: 'front_3_4' | 'rear_3_4' | 'side' | 'front' | 'rear' | 'interior';
}

export function extractImagesFromHtml(html: string): ImageMatch[] {
  // Normalize escaped unicode
  const cleanHtml = html.replace(/\\u0026/g, '&');
  const regex = /https:\/\/imgd\.aeplcdn\.com\/[^\s"'<>]+?\.(?:png|jpg|jpeg|webp)(?:\?[^"'<>\s]*)?/gi;
  const matches = cleanHtml.match(regex) || [];
  const unique = [...new Set(matches)];

  const results: ImageMatch[] = [];
  const anglesFound = new Set<string>();

  for (const url of unique) {
    // Standardize URL resolution to 1056x594 or 664x374
    const standardizedUrl = url.replace(/https:\/\/imgd\.aeplcdn\.com\/\d+x\d+\//, 'https://imgd.aeplcdn.com/1056x594/');

    if ((url.includes('front-three-quarter') || url.includes('right-front-three-quarter') || url.includes('left-front-three-quarter')) && !anglesFound.has('front_3_4')) {
      results.push({ url: standardizedUrl, angle: 'front_3_4' });
      anglesFound.add('front_3_4');
    } else if ((url.includes('rear-three-quarter') || url.includes('right-rear-three-quarter') || url.includes('left-rear-three-quarter')) && !anglesFound.has('rear_3_4')) {
      results.push({ url: standardizedUrl, angle: 'rear_3_4' });
      anglesFound.add('rear_3_4');
    } else if ((url.includes('side-view') || url.includes('right-side') || url.includes('left-side')) && !anglesFound.has('side')) {
      results.push({ url: standardizedUrl, angle: 'side' });
      anglesFound.add('side');
    } else if ((url.includes('front-view') || url.includes('front-fascia')) && !anglesFound.has('front')) {
      results.push({ url: standardizedUrl, angle: 'front' });
      anglesFound.add('front');
    } else if ((url.includes('rear-view') || url.includes('rear-fascia')) && !anglesFound.has('rear')) {
      results.push({ url: standardizedUrl, angle: 'rear' });
      anglesFound.add('rear');
    } else if ((url.includes('dashboard') || url.includes('steering-wheel')) && !anglesFound.has('interior')) {
      results.push({ url: standardizedUrl, angle: 'interior' });
      anglesFound.add('interior');
    }
  }

  return results;
}

const testContent = fs.readFileSync('C:/Users/adij7/.gemini/antigravity-ide/brain/7a25a955-3529-453f-823c-57dd5f59f02a/.system_generated/steps/1856/content.md', 'utf8');
const extracted = extractImagesFromHtml(testContent);
console.log('Extracted angles for Creta:', extracted);
