async function testCardekho() {
  const url = 'https://www.cardekho.com/ferrari/purosangue/pictures';
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      }
    });
    console.log('Status:', res.status);
    const text = await res.text();
    console.log('Length:', text.length);
    const matches = text.match(/https:\/\/[^\s"'<>]+?(?:stimg\.cardekho\.com|cardekho)[^\s"'<>]+?\.(?:jpg|jpeg|png|webp)/gi);
    console.log('Images found:', matches ? matches.length : 0);
    if (matches) {
      console.log('Sample:', matches.slice(0, 5));
    }
  } catch (e: unknown) {
    console.error('Error:', (e as Error).message);
  }
}
testCardekho();
