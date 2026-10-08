async function test() {
  const r1 = await fetch('http://localhost:3000/cars/hyundai-creta');
  const t1 = await r1.text();
  console.log('CRETA PAGE STATUS:', r1.status);
  console.log('Has "Hyundai Creta":', t1.includes('Hyundai Creta'));
  console.log('Has variants mention:', t1.includes('variant'));
  console.log('Has "VARIANT PRICE LADDER":', t1.includes('Variant Price Ladder'));
  console.log('Has "FEATURE COMPARISON MATRIX":', t1.includes('Variant Feature Comparison Matrix'));
  console.log('Has "SX(O)":', t1.includes('SX(O)'));
  console.log('Has "Panoramic Sunroof":', t1.includes('Panoramic Sunroof'));
  console.log('Has "What do you get for":', t1.includes('What do you get for'));

  const r2 = await fetch('http://localhost:3000/compare?cars=hyundai-creta,kia-seltos');
  console.log('\nCOMPARE PAGE STATUS:', r2.status);
  const t2 = await r2.text();
  console.log('Compare page rendered successfully, length:', t2.length);

  const r3 = await fetch('http://localhost:3000/cars/tata-nexon');
  console.log('\nNEXON PAGE STATUS:', r3.status);
  const t3 = await r3.text();
  console.log('Has "Tata Nexon":', t3.includes('Tata Nexon'));
  console.log('Has "Creative+":', t3.includes('Creative+'));
  console.log('Has "Fearless+":', t3.includes('Fearless+'));

  const r4 = await fetch('http://localhost:3000/cars/mahindra-xuv700');
  console.log('\nXUV700 PAGE STATUS:', r4.status);
  const t4 = await r4.text();
  console.log('Has "Mahindra XUV700":', t4.includes('Mahindra XUV700'));
  console.log('Has "AX7 Luxury":', t4.includes('AX7 Luxury'));
}
test();
