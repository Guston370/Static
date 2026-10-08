const URLs = [
  'https://www.carwale.com/bentley-cars/continental-gt/images/',
  'https://www.carwale.com/bentley-cars/continental-gt/',
  'https://www.carwale.com/bentley-cars/flying-spur/',
  'https://www.carwale.com/ferrari-cars/sf90-stradale/',
  'https://www.carwale.com/ferrari-cars/sf90/',
  'https://www.carwale.com/ferrari-cars/purosangue/',
  'https://www.carwale.com/ferrari-cars/12cilindri/',
];

async function check() {
  for (const u of URLs) {
    try {
      const res = await fetch(u, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        }
      });
      console.log(u, '=>', res.status);
    } catch (e: unknown) {
      console.log(u, '=> error', (e as Error).message);
    }
  }
}
check();
