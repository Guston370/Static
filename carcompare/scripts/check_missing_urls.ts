
const SPECIFIC_MAP: Record<string, string> = {
  'mercedes-benz-eqs-sedan': 'https://www.carwale.com/mercedes-benz-cars/eqs/images/',
  'lexus-es-300h': 'https://www.carwale.com/lexus-cars/es/images/',
  'lexus-nx-350h': 'https://www.carwale.com/lexus-cars/nx/images/',
  'lexus-lm-350h': 'https://www.carwale.com/lexus-cars/lm/images/',
  'ferrari-purosangue': 'https://www.carwale.com/ferrari-cars/purosangue/images/',
  'bentley-continental-gt': 'https://www.carwale.com/bentley-cars/continental/images/',
  'mercedes-benz-cle': 'https://www.carwale.com/mercedes-benz-cars/cle-cabriolet/images/',
  'ferrari-12cilindri': 'https://www.carwale.com/ferrari-cars/12-cilindri/images/',
  'ferrari-sf90-stradale': 'https://www.carwale.com/ferrari-cars/sf90-stradale/images/',
  'bentley-flying-spur': 'https://www.carwale.com/bentley-cars/flying-spur/images/',
  'mclaren-gts': 'https://www.carwale.com/mclaren-cars/gt/images/',
};

async function patchMissing() {
  for (const [slug, url] of Object.entries(SPECIFIC_MAP)) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        }
      });
      console.log(slug, 'Status:', res.status);
    } catch (err: unknown) {
      console.log(slug, 'Error:', (err as Error).message);
    }
  }
}
patchMissing();
