import { extractImagesFromHtml } from './test_extract_images';

async function test() {
  try {
    const res = await fetch('https://www.carwale.com/tata-cars/nexon/images/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      }
    });
    const text = await res.text();
    const extracted = extractImagesFromHtml(text);
    console.log('Extracted Nexon images:', extracted);
  } catch (err: unknown) {
    console.error('Fetch error:', (err as Error).message);
  }
}
test();
