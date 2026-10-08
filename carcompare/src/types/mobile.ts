/**
 * Mobile Platform Data Models — Static
 *
 * Dedicated domain types for smartphones officially sold in India.
 * Kept completely decoupled from the Car data domain.
 */

export type MobileStatus = 'active' | 'discontinued' | 'upcoming';

export interface MobilePricing {
  startingPrice: number; // in INR (current ex-showroom/store starting price)
  maximumPrice: number; // in INR (top variant price)
  launchPrice?: number; // launch MSRP in INR
  currentPrice?: number; // current official price in INR
  currency: 'INR';
  priceEffectiveDate: string; // ISO date YYYY-MM
  source?: string;
}

export interface MobileDisplay {
  displaySize: number; // in inches e.g. 6.7
  displayType: string; // e.g. 'Dynamic LTPO AMOLED 2X', 'Super Retina XDR OLED'
  resolution: string; // e.g. '3120 x 1440 pixels (QHD+)'
  refreshRate: number; // in Hz e.g. 120
  peakBrightness: number; // in nits e.g. 2600
  hdr: string; // e.g. 'HDR10+, Dolby Vision'
  protection: string; // e.g. 'Corning Gorilla Armor'
  screenToBodyRatio?: string; // e.g. '89.8%'
}

export interface MobilePerformance {
  chipset: string; // e.g. 'Snapdragon 8 Elite' or 'Apple A18 Pro'
  cpu: string; // e.g. 'Octa-core (2x4.32 GHz Oryon & 6x3.53 GHz Oryon)'
  gpu: string; // e.g. 'Adreno 830' or 'Apple 6-core GPU'
  ramOptions: string[]; // e.g. ['12GB', '16GB']
  storageOptions: string[]; // e.g. ['256GB', '512GB', '1TB']
  storageType?: string; // e.g. 'UFS 4.0' or 'NVMe'
  antutuScore?: number; // e.g. 2800000 (verified benchmark if available)
  geekbenchSingle?: number; // e.g. 3200
  geekbenchMulti?: number; // e.g. 9800
}

export interface MobileCameras {
  rearCameraSetup: string; // e.g. 'Quad (200MP + 50MP + 50MP + 10MP)'
  mainCamera: string; // e.g. '200 MP, f/1.7, 24mm (wide), 1/1.3", multi-directional PDAF, Laser AF, OIS'
  ultrawideCamera?: string; // e.g. '50 MP, f/1.9, 120˚'
  telephotoCamera?: string; // e.g. '50 MP periscope telephoto, 5x optical zoom, OIS'
  macroCamera?: string;
  frontCamera: string; // e.g. '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF'
  videoRecording: string; // e.g. '8K@30fps, 4K@60/120fps, HDR10+'
  ois: boolean;
}

export interface MobileBattery {
  batteryCapacity: number; // in mAh e.g. 5000
  wiredCharging: number; // in W e.g. 45
  wirelessCharging?: number; // in W e.g. 15
  reverseCharging?: boolean;
}

export interface MobileConnectivity {
  has5G: boolean;
  has4G: boolean;
  wifi: string; // e.g. 'Wi-Fi 7 (802.11be)'
  bluetooth: string; // e.g. 'Bluetooth 5.4'
  nfc: boolean;
  usb: string; // e.g. 'USB Type-C 3.2, DisplayPort, OTG'
  simConfig: string; // e.g. 'Dual SIM (Nano-SIM and eSIM)'
}

export interface MobilePhysical {
  dimensions: string; // e.g. '162.3 x 79.0 x 8.6 mm'
  weight: number; // in grams e.g. 232
  materials: string; // e.g. 'Titanium frame, Gorilla Armor glass back'
  waterResistance: string; // e.g. 'IP68 (dust/water resistant up to 1.5m for 30 min)'
  colors: string[];
}

export interface MobileSoftware {
  operatingSystem: 'Android' | 'iOS';
  ui: string; // e.g. 'One UI 7' or 'iOS 18'
  launchOS: string; // e.g. 'Android 15' or 'iOS 18'
  promisedMajorUpdates: number; // in years e.g. 7
  securityUpdatePolicy: string; // e.g. '7 years of security patches'
}

export interface MobileAudio {
  speakers: string; // e.g. 'Stereo speakers'
  stereo: boolean;
  headphoneJack: boolean;
  dolbyAtmos?: boolean;
}

export interface MobileSecurity {
  fingerprint: string; // e.g. 'Ultrasonic under display' or 'Optical under display' or 'Side-mounted' or 'None'
  faceUnlock: boolean;
  biometricNotes?: string;
}

export interface MobileSourceMetadata {
  officialWebsite?: string;
  productPage?: string;
  specSheetUrl?: string;
  verifiedDate: string;
  lastAuditedBy?: string;
}

export interface MobileModel {
  id: string; // e.g. 'samsung-galaxy-s25-ultra'
  slug: string; // e.g. 'samsung-galaxy-s25-ultra'
  brand: string; // e.g. 'Samsung'
  modelName: string; // e.g. 'Galaxy S25 Ultra'
  generation?: string; // e.g. 'S25'
  status: MobileStatus;
  launchDate: string; // YYYY-MM
  pricing: MobilePricing;
  display: MobileDisplay;
  performance: MobilePerformance;
  cameras: MobileCameras;
  battery: MobileBattery;
  connectivity: MobileConnectivity;
  physical: MobilePhysical;
  software: MobileSoftware;
  audio: MobileAudio;
  security: MobileSecurity;
  keyHighlights?: string[];
  pros?: string[];
  cons?: string[];
  sources: MobileSourceMetadata;
  // Image metadata populated at runtime
  primaryImage?: string;
  primaryImageAlt?: string;
}

export interface MobileVariant {
  id: string; // e.g. 'samsung-galaxy-s25-ultra-12-256'
  modelId: string; // references MobileModel.id
  ram: string; // e.g. '12GB'
  storage: string; // e.g. '256GB'
  price: number; // in INR
  mrp?: number; // Launch MRP
  colors: string[];
  status: MobileStatus;
  verified: boolean;
  source?: string;
}

export interface MobileImageItem {
  url: string;
  angle: 'front' | 'back' | 'side' | 'display' | 'angle' | 'detail';
  source: string;
  sourceUrl: string;
  verified: boolean;
  alt: string;
}

export interface MobileImageCatalogEntry {
  modelId: string;
  modelName: string;
  brand: string;
  images: MobileImageItem[];
  verifiedCoverage: boolean; // has at least front + back
}
