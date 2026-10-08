async function inspectAngles() {
  const url = 'https://www.cardekho.com/ferrari/purosangue/pictures';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    }
  });
  const text = await res.text();
  const matches = [...new Set(text.match(/https:\/\/stimg\.cardekho\.com\/images\/carexteriorimages\/930x620\/[^\s"'<>]+?\.(?:jpg|jpeg|png|webp)/gi) || [])];
  console.log('Unique 930x620 images:', matches.length);
  matches.forEach(m => console.log(m));
}
inspectAngles();
