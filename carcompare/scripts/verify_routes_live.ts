const ROUTES = [
  'http://localhost:3000/',
  'http://localhost:3000/cars',
  'http://localhost:3000/cars/hyundai-creta',
  'http://localhost:3000/cars/maruti-suzuki-swift',
  'http://localhost:3000/cars/tata-nexon',
  'http://localhost:3000/cars/mahindra-thar-roxx',
  'http://localhost:3000/cars/toyota-innova-hycross',
  'http://localhost:3000/compare',
  'http://localhost:3000/compare?cars=hyundai-creta,tata-nexon',
  'http://localhost:3000/cars/non-existent-car',
];

async function verify() {
  console.log('Testing live routes on http://localhost:3000...\n');
  let failures = 0;

  for (const url of ROUTES) {
    try {
      const res = await fetch(url);
      const is404Expected = url.includes('non-existent');
      const pass = is404Expected ? res.status === 404 : res.status === 200;

      if (pass) {
        console.log(`[PASS] ${res.status} - ${url}`);
      } else {
        console.error(`[FAIL] ${res.status} (expected ${is404Expected ? 404 : 200}) - ${url}`);
        failures++;
      }
    } catch (err: unknown) {
      console.error(`[FAIL] Connection error for ${url}:`, (err as Error).message);
      failures++;
    }
  }

  if (failures > 0) {
    console.error(`\nFAILED: ${failures} routes failed`);
    process.exit(1);
  } else {
    console.log('\nALL ROUTES VERIFIED SUCCESSFULLY (100% Pass)');
  }
}

verify();
