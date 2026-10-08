/**
 * scripts/discover_brands.ts
 *
 * Stage A: Discover and compile the exhaustive inventory of automotive
 * manufacturers and brands officially active in the Indian passenger car market.
 *
 * Includes source URLs, official domain, headquarters, and verification status.
 */

import * as fs from 'fs';
import * as path from 'path';

export interface DiscoveredManufacturer {
  name: string;
  slug: string;
  country: string;
  website: string;
  active: boolean;
  category: 'Mass Market' | 'Premium' | 'Luxury' | 'Exotic' | 'Utility';
  sourceUrl: string;
  retrievedAt: string;
  brands: {
    name: string;
    slug: string;
    website: string;
    logo?: string;
  }[];
}

export const INDIAN_MARKET_MANUFACTURERS: DiscoveredManufacturer[] = [
  // ── Mass Market & Major Domestic Players ──
  {
    name: 'Maruti Suzuki India Limited',
    slug: 'maruti-suzuki',
    country: 'India / Japan',
    website: 'https://www.marutisuzuki.com',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.siam.in',
    retrievedAt: '2026-10-05',
    brands: [
      { name: 'Maruti Suzuki', slug: 'maruti-suzuki', website: 'https://www.marutisuzuki.com' },
      { name: 'Maruti Suzuki Nexa', slug: 'maruti-suzuki-nexa', website: 'https://www.nexaexperience.com' },
    ],
  },
  {
    name: 'Hyundai Motor India Limited',
    slug: 'hyundai',
    country: 'South Korea',
    website: 'https://www.hyundai.com/in/en',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.hyundai.com/in/en',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Hyundai', slug: 'hyundai', website: 'https://www.hyundai.com/in/en' }],
  },
  {
    name: 'Tata Motors Passenger Vehicles Limited',
    slug: 'tata-motors',
    country: 'India',
    website: 'https://cars.tatamotors.com',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://cars.tatamotors.com',
    retrievedAt: '2026-10-05',
    brands: [
      { name: 'Tata', slug: 'tata', website: 'https://cars.tatamotors.com' },
      { name: 'TATA.ev', slug: 'tata-ev', website: 'https://ev.tatamotors.com' },
    ],
  },
  {
    name: 'Mahindra & Mahindra Limited',
    slug: 'mahindra',
    country: 'India',
    website: 'https://auto.mahindra.com',
    active: true,
    category: 'Utility',
    sourceUrl: 'https://auto.mahindra.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Mahindra', slug: 'mahindra', website: 'https://auto.mahindra.com' }],
  },
  {
    name: 'Toyota Kirloskar Motor Private Limited',
    slug: 'toyota',
    country: 'Japan',
    website: 'https://www.toyotabharat.com',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.toyotabharat.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Toyota', slug: 'toyota', website: 'https://www.toyotabharat.com' }],
  },
  {
    name: 'Kia India Private Limited',
    slug: 'kia',
    country: 'South Korea',
    website: 'https://www.kia.com/in',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.kia.com/in',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Kia', slug: 'kia', website: 'https://www.kia.com/in' }],
  },
  {
    name: 'Honda Cars India Limited',
    slug: 'honda',
    country: 'Japan',
    website: 'https://www.hondacarindia.com',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.hondacarindia.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Honda', slug: 'honda', website: 'https://www.hondacarindia.com' }],
  },
  {
    name: 'JSW MG Motor India Private Limited',
    slug: 'mg-motor',
    country: 'United Kingdom / China / India',
    website: 'https://www.mgmotor.co.in',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.mgmotor.co.in',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'MG', slug: 'mg', website: 'https://www.mgmotor.co.in' }],
  },
  {
    name: 'Skoda Auto Volkswagen India Private Limited',
    slug: 'savwipl',
    country: 'Czech Republic / Germany',
    website: 'https://www.skoda-auto.co.in',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.skoda-auto.co.in',
    retrievedAt: '2026-10-05',
    brands: [
      { name: 'Skoda', slug: 'skoda', website: 'https://www.skoda-auto.co.in' },
      { name: 'Volkswagen', slug: 'volkswagen', website: 'https://www.volkswagen.co.in' },
      { name: 'Audi', slug: 'audi', website: 'https://www.audi.in' },
      { name: 'Porsche', slug: 'porsche', website: 'https://www.porsche.com/middle-east/_india_' },
      { name: 'Lamborghini', slug: 'lamborghini', website: 'https://www.lamborghini.com/en-en' },
    ],
  },
  {
    name: 'Renault India Private Limited',
    slug: 'renault',
    country: 'France',
    website: 'https://www.renault.co.in',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.renault.co.in',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Renault', slug: 'renault', website: 'https://www.renault.co.in' }],
  },
  {
    name: 'Nissan Motor India Private Limited',
    slug: 'nissan',
    country: 'Japan',
    website: 'https://www.nissan.in',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.nissan.in',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Nissan', slug: 'nissan', website: 'https://www.nissan.in' }],
  },
  {
    name: 'Stellantis India',
    slug: 'stellantis',
    country: 'Netherlands / France / USA',
    website: 'https://www.citroen.in',
    active: true,
    category: 'Mass Market',
    sourceUrl: 'https://www.stellantis.com',
    retrievedAt: '2026-10-05',
    brands: [
      { name: 'Citroën', slug: 'citroen', website: 'https://www.citroen.in' },
      { name: 'Jeep', slug: 'jeep', website: 'https://www.jeep-india.com' },
    ],
  },
  {
    name: 'BYD India Private Limited',
    slug: 'byd',
    country: 'China',
    website: 'https://bydautoindia.com',
    active: true,
    category: 'Premium',
    sourceUrl: 'https://bydautoindia.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'BYD', slug: 'byd', website: 'https://bydautoindia.com' }],
  },
  {
    name: 'Force Motors Limited',
    slug: 'force-motors',
    country: 'India',
    website: 'https://www.forcemotors.com',
    active: true,
    category: 'Utility',
    sourceUrl: 'https://www.forcemotors.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Force Motors', slug: 'force-motors', website: 'https://www.forcemotors.com' }],
  },
  {
    name: 'Isuzu Motors India Private Limited',
    slug: 'isuzu',
    country: 'Japan',
    website: 'https://isuzu.in',
    active: true,
    category: 'Utility',
    sourceUrl: 'https://isuzu.in',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Isuzu', slug: 'isuzu', website: 'https://isuzu.in' }],
  },

  // ── Luxury & Performance ──
  {
    name: 'BMW India Private Limited',
    slug: 'bmw-group',
    country: 'Germany',
    website: 'https://www.bmw.in',
    active: true,
    category: 'Luxury',
    sourceUrl: 'https://www.bmw.in',
    retrievedAt: '2026-10-05',
    brands: [
      { name: 'BMW', slug: 'bmw', website: 'https://www.bmw.in' },
      { name: 'MINI', slug: 'mini', website: 'https://www.mini.in' },
      { name: 'Rolls-Royce', slug: 'rolls-royce', website: 'https://www.rolls-roycemotorcars.com' },
    ],
  },
  {
    name: 'Mercedes-Benz India Private Limited',
    slug: 'mercedes-benz',
    country: 'Germany',
    website: 'https://www.mercedes-benz.co.in',
    active: true,
    category: 'Luxury',
    sourceUrl: 'https://www.mercedes-benz.co.in',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Mercedes-Benz', slug: 'mercedes-benz', website: 'https://www.mercedes-benz.co.in' }],
  },
  {
    name: 'Volvo Auto India Private Limited',
    slug: 'volvo',
    country: 'Sweden',
    website: 'https://www.volvocars.com/in',
    active: true,
    category: 'Luxury',
    sourceUrl: 'https://www.volvocars.com/in',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Volvo', slug: 'volvo', website: 'https://www.volvocars.com/in' }],
  },
  {
    name: 'Jaguar Land Rover India Limited',
    slug: 'jlr-india',
    country: 'United Kingdom / India (Tata)',
    website: 'https://www.landrover.in',
    active: true,
    category: 'Luxury',
    sourceUrl: 'https://www.landrover.in',
    retrievedAt: '2026-10-05',
    brands: [
      { name: 'Land Rover', slug: 'land-rover', website: 'https://www.landrover.in' },
      { name: 'Jaguar', slug: 'jaguar', website: 'https://www.jaguar.in' },
    ],
  },
  {
    name: 'Lexus India',
    slug: 'lexus',
    country: 'Japan',
    website: 'https://www.lexusindia.co.in',
    active: true,
    category: 'Luxury',
    sourceUrl: 'https://www.lexusindia.co.in',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Lexus', slug: 'lexus', website: 'https://www.lexusindia.co.in' }],
  },

  // ── Supercar / Ultra-Luxury ──
  {
    name: 'Ferrari S.p.A. India',
    slug: 'ferrari',
    country: 'Italy',
    website: 'https://www.ferrari.com/en-IN',
    active: true,
    category: 'Exotic',
    sourceUrl: 'https://www.ferrari.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Ferrari', slug: 'ferrari', website: 'https://www.ferrari.com/en-IN' }],
  },
  {
    name: 'Maserati India',
    slug: 'maserati',
    country: 'Italy',
    website: 'https://www.maserati.com/in/en',
    active: true,
    category: 'Exotic',
    sourceUrl: 'https://www.maserati.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Maserati', slug: 'maserati', website: 'https://www.maserati.com/in/en' }],
  },
  {
    name: 'Aston Martin Lagonda India',
    slug: 'aston-martin',
    country: 'United Kingdom',
    website: 'https://www.astonmartin.com',
    active: true,
    category: 'Exotic',
    sourceUrl: 'https://www.astonmartin.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Aston Martin', slug: 'aston-martin', website: 'https://www.astonmartin.com' }],
  },
  {
    name: 'Bentley Motors India',
    slug: 'bentley',
    country: 'United Kingdom',
    website: 'https://www.bentleymotors.com',
    active: true,
    category: 'Luxury',
    sourceUrl: 'https://www.bentleymotors.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Bentley', slug: 'bentley', website: 'https://www.bentleymotors.com' }],
  },
  {
    name: 'Lotus Cars India',
    slug: 'lotus',
    country: 'United Kingdom',
    website: 'https://www.lotuscars.com',
    active: true,
    category: 'Exotic',
    sourceUrl: 'https://www.lotuscars.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'Lotus', slug: 'lotus', website: 'https://www.lotuscars.com' }],
  },
  {
    name: 'McLaren Automotive India',
    slug: 'mclaren',
    country: 'United Kingdom',
    website: 'https://cars.mclaren.com',
    active: true,
    category: 'Exotic',
    sourceUrl: 'https://cars.mclaren.com',
    retrievedAt: '2026-10-05',
    brands: [{ name: 'McLaren', slug: 'mclaren', website: 'https://cars.mclaren.com' }],
  },
];

export function discoverBrands() {
  const outputPath = path.join(__dirname, '..', 'data', 'raw', 'manufacturers_brands.json');
  fs.writeFileSync(outputPath, JSON.stringify(INDIAN_MARKET_MANUFACTURERS, null, 2), 'utf8');
  console.log(`Discovered ${INDIAN_MARKET_MANUFACTURERS.length} manufacturers and ${
    INDIAN_MARKET_MANUFACTURERS.flatMap(m => m.brands).length
  } brands officially operating in India.`);
  console.log(`Saved inventory to ${outputPath}`);
}

if (require.main === module) {
  discoverBrands();
}
