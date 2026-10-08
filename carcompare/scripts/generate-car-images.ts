import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';

const targetDir = path.join(process.cwd(), 'public', 'images', 'cars');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const cars = [
  {
    filename: 'tata-nexon.jpg',
    name: 'Tata Nexon',
    badge: '5-STAR GNCAP',
    tag: 'Compact SUV · 120 PS Turbo',
    gradStart: '#0f2042',
    gradEnd: '#1e3a8a',
    accent: '#3b82f6',
    icon: '🚙',
  },
  {
    filename: 'hyundai-creta.jpg',
    name: 'Hyundai Creta',
    badge: 'BESTSELLER',
    tag: 'Mid-Size SUV · Panoramic Sunroof',
    gradStart: '#051937',
    gradEnd: '#004d7a',
    accent: '#008793',
    icon: '🚙',
  },
  {
    filename: 'tata-punch.jpg',
    name: 'Tata Punch',
    badge: '5-STAR SAFETY',
    tag: 'Micro SUV · 187mm Clearance',
    gradStart: '#064e3b',
    gradEnd: '#047857',
    accent: '#10b981',
    icon: '🚙',
  },
  {
    filename: 'mahindra-xuv700.jpg',
    name: 'Mahindra XUV700',
    badge: '200 PS · ADAS L2',
    tag: 'Premium 7-Seater SUV',
    gradStart: '#4c0519',
    gradEnd: '#9f1239',
    accent: '#f43f5e',
    icon: '🚙',
  },
  {
    filename: 'kia-seltos.jpg',
    name: 'Kia Seltos',
    badge: 'TURBO GDi',
    tag: 'Connected Tech SUV · Dual Screen',
    gradStart: '#18181b',
    gradEnd: '#27272a',
    accent: '#e11d48',
    icon: '🚙',
  },
  {
    filename: 'maruti-swift.jpg',
    name: 'Maruti Suzuki Swift',
    badge: '25.75 KM/L',
    tag: 'Sporty Hatchback · Z-Series Dual Jet',
    gradStart: '#7f1d1d',
    gradEnd: '#b91c1c',
    accent: '#f97316',
    icon: '🚗',
  },
  {
    filename: 'honda-city.jpg',
    name: 'Honda City',
    badge: 'VTEC BENCHMARK',
    tag: 'Executive Sedan · Supreme Comfort',
    gradStart: '#1e293b',
    gradEnd: '#334155',
    accent: '#64748b',
    icon: '🚘',
  },
  {
    filename: 'tata-nexon-ev.jpg',
    name: 'Tata Nexon.ev',
    badge: '465 KM RANGE',
    tag: 'Zero Emission · V2L / V2V Capable',
    gradStart: '#022c22',
    gradEnd: '#065f46',
    accent: '#34d399',
    icon: '⚡',
  },
  {
    filename: 'default-car.jpg',
    name: 'Static',
    badge: 'VERIFIED MODEL',
    tag: 'Indian Passenger Car Specification Database',
    gradStart: '#0f172a',
    gradEnd: '#1e293b',
    accent: '#c1382a',
    icon: '🚗',
  },
];

export async function generateImages() {
  for (const car of cars) {
    const svg = `
      <svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg-${car.filename}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${car.gradStart}" />
            <stop offset="100%" stop-color="${car.gradEnd}" />
          </linearGradient>
          <radialGradient id="glow-${car.filename}" cx="75%" cy="30%" r="60%">
            <stop offset="0%" stop-color="${car.accent}" stop-opacity="0.35" />
            <stop offset="100%" stop-color="${car.accent}" stop-opacity="0" />
          </radialGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          </pattern>
        </defs>

        <!-- Base Background -->
        <rect width="800" height="450" fill="url(#bg-${car.filename})" />
        <rect width="800" height="450" fill="url(#glow-${car.filename})" />
        <rect width="800" height="450" fill="url(#grid)" />

        <!-- Accent Horizon Line -->
        <line x1="60" y1="360" x2="740" y2="360" stroke="${car.accent}" stroke-width="2" stroke-opacity="0.4" />
        <circle cx="740" cy="360" r="4" fill="${car.accent}" />

        <!-- Badge -->
        <rect x="60" y="55" width="${car.badge.length * 9 + 24}" height="28" rx="6" fill="rgba(255,255,255,0.12)" stroke="${car.accent}" stroke-width="1" />
        <text x="72" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#ffffff" letter-spacing="1.5">${car.badge}</text>

        <!-- Icon Silhouette Art -->
        <g transform="translate(520, 110)">
          <circle cx="100" cy="100" r="90" fill="rgba(255,255,255,0.05)" stroke="${car.accent}" stroke-width="1.5" stroke-dasharray="4 6" />
          <text x="100" y="125" font-size="80" text-anchor="middle">${car.icon}</text>
        </g>

        <!-- Car Name & Tagline -->
        <text x="60" y="270" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-1">${car.name}</text>
        <text x="60" y="315" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="500" fill="rgba(255,255,255,0.75)">${car.tag}</text>

        <!-- Watermark / Footer branding -->
        <text x="60" y="405" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="rgba(255,255,255,0.4)" letter-spacing="2">STATIC — BUT DYNAMIC · VERIFIED SPECIFICATIONS</text>
      </svg>
    `;

    const destPath = path.join(targetDir, car.filename);
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(destPath);
  }
}
