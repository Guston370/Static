import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  {
    id: 'cmf-phone-1',
    slug: 'cmf-phone-1',
    brand: 'CMF',
    modelName: 'CMF Phone 1',
    generation: 'Phone 1',
    status: 'active',
    launchDate: '2024-07',
    pricing: {
      startingPrice: 15999,
      maximumPrice: 17999,
      launchPrice: 15999,
      currentPrice: 15999,
      currency: 'INR',
      priceEffectiveDate: '2025-01',
      source: 'CMF by Nothing India / Flipkart',
    },
    display: {
      displaySize: 6.67,
      displayType: 'Super AMOLED, 120Hz, HDR10+, 2000 nits peak',
      resolution: '2400 x 1080 pixels (FHD+)',
      refreshRate: 120,
      peakBrightness: 2000,
      hdr: 'HDR10+',
      protection: 'Custom Toughened Glass',
      screenToBodyRatio: '87.1%',
    },
    performance: {
      chipset: 'MediaTek Dimensity 7300 5G (4nm)',
      cpu: 'Octa-core (4x2.5 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55)',
      gpu: 'Mali-G615 MC2',
      ramOptions: ['6GB', '8GB'],
      storageOptions: ['128GB'],
      storageType: 'UFS 2.2',
      antutuScore: 660000,
    },
    cameras: {
      rearCameraSetup: 'Dual (50MP Sony + 2MP Portrait sensor)',
      mainCamera: '50 MP Sony, f/1.8, EIS',
      ultrawideCamera: 'None',
      telephotoCamera: 'None',
      frontCamera: '16 MP, f/2.0, 1080p@60fps',
      videoRecording: '4K@30fps, 1080p@60fps',
      ois: false,
    },
    battery: {
      batteryCapacity: 5000,
      wiredCharging: 33,
      wirelessCharging: 0,
      reverseCharging: true,
    },
    connectivity: {
      has5G: true,
      has4G: true,
      wifi: 'Wi-Fi 6',
      bluetooth: 'Bluetooth 5.3',
      nfc: false,
      usb: 'USB Type-C 2.0',
      simConfig: 'Hybrid Dual SIM',
    },
    physical: {
      dimensions: '164 x 77 x 8 mm (Standard) / 9 mm (Vegan Leather)',
      weight: 197,
      materials: 'Modular polycarbonate or vegan leather case with stainless steel screws and Accessory Point',
      waterResistance: 'IP52 splash resistant',
      colors: ['Black', 'Light Green', 'Orange', 'Blue'],
    },
    software: {
      operatingSystem: 'Android',
      ui: 'Nothing OS 2.6',
      launchOS: 'Android 14',
      promisedMajorUpdates: 2,
      securityUpdatePolicy: '3 years',
    },
    audio: {
      speakers: 'Single bottom loudspeaker with Ultra Volume Mode',
      stereo: false,
      headphoneJack: false,
      dolbyAtmos: false,
    },
    security: {
      fingerprint: 'In-display optical',
      faceUnlock: true,
    },
    sources: {
      officialWebsite: 'https://in.nothing.tech/pages/cmf-phone-1',
      productPage: 'https://www.flipkart.com/cmf-phone-1-store',
      specSheetUrl: 'https://in.nothing.tech/pages/cmf-phone-1',
      verifiedDate: '2024-07',
    },
  },
];

const variants: MobileVariant[] = [
  {
    id: 'cmf-phone-1-6gb-128gb',
    modelId: 'cmf-phone-1',
    name: 'CMF Phone 1 (6GB RAM, 128GB)',
    ram: '6GB',
    storage: '128GB',
    color: 'Black',
    price: 15999,
    currency: 'INR',
    status: 'active',
    verified: true,
  },
  {
    id: 'cmf-phone-1-8gb-128gb',
    modelId: 'cmf-phone-1',
    name: 'CMF Phone 1 (8GB RAM, 128GB)',
    ram: '8GB',
    storage: '128GB',
    color: 'Orange',
    price: 17999,
    currency: 'INR',
    status: 'active',
    verified: true,
  },
];

const images: MobileImageCatalogEntry[] = [
  {
    modelId: 'cmf-phone-1',
    modelName: 'CMF Phone 1',
    brand: 'CMF',
    verifiedCoverage: true,
    images: [
      {
        url: 'https://fdn2.gsmarena.com/vv/pics/nothing/nothing-cmf-phone-1-01.jpg',
        angle: 'front',
        source: 'CMF Official (GSMArena CDN)',
        sourceUrl: 'https://in.nothing.tech/pages/cmf-phone-1',
        verified: true,
        alt: 'CMF Phone 1 front AMOLED display view',
      },
      {
        url: 'https://fdn2.gsmarena.com/vv/pics/nothing/nothing-cmf-phone-1-02.jpg',
        angle: 'back',
        source: 'CMF Official (GSMArena CDN)',
        sourceUrl: 'https://in.nothing.tech/pages/cmf-phone-1',
        verified: true,
        alt: 'CMF Phone 1 interchangeable modular case rear view',
      },
      {
        url: 'https://fdn2.gsmarena.com/vv/pics/nothing/nothing-cmf-phone-1-03.jpg',
        angle: 'side',
        source: 'CMF Official (GSMArena CDN)',
        sourceUrl: 'https://in.nothing.tech/pages/cmf-phone-1',
        verified: true,
        alt: 'CMF Phone 1 profile and Accessory Point view',
      },
    ],
  },
];

export const cmfBundle: MobileBrandBundle = {
  brand: 'CMF',
  models,
  variants,
  images,
};
