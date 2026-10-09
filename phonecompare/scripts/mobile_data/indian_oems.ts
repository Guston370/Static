import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  // ── LAVA ──
  {
    id: 'lava-agni-3-5g',
    slug: 'lava-agni-3-5g',
    brand: 'Lava',
    modelName: 'Lava Agni 3 5G',
    generation: 'Agni 3',
    status: 'active',
    launchDate: '2024-10',
    pricing: {
      startingPrice: 20999,
      maximumPrice: 24999,
      launchPrice: 20999,
      currentPrice: 20999,
      currency: 'INR',
      priceEffectiveDate: '2025-01',
      source: 'Lava International Official Store',
    },
    display: {
      displaySize: 6.78,
      displayType: '1.5K 120Hz 3D Curved AMOLED with 1.74" Secondary Rear AMOLED',
      resolution: '2652 x 1200 pixels (FHD+)',
      refreshRate: 120,
      peakBrightness: 1200,
      hdr: 'HDR10+',
      protection: 'Double reinforced Schott glass',
      screenToBodyRatio: '92.5%',
    },
    performance: {
      chipset: 'MediaTek Dimensity 7300X (4nm dual-screen chipset)',
      cpu: 'Octa-core (4x2.5 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55)',
      gpu: 'Mali-G615 MC2',
      ramOptions: ['8GB'],
      storageOptions: ['128GB', '256GB'],
      storageType: 'UFS 3.1',
      antutuScore: 680000,
    },
    cameras: {
      rearCameraSetup: 'Triple (50MP + 8MP + 8MP) with Dual-Screen viewfinder',
      mainCamera: '50 MP Sony IMX766, f/1.88, 1/1.56", OIS',
      ultrawideCamera: '8 MP, f/2.2, 119˚',
      telephotoCamera: '8 MP 3x optical telephoto with OIS',
      frontCamera: '16 MP Samsung, f/2.0',
      videoRecording: '4K@30fps, 1080p@60fps (Rear selfie enabled)',
      ois: true,
    },
    battery: {
      batteryCapacity: 5000,
      wiredCharging: 66,
      wirelessCharging: 0,
      reverseCharging: false,
    },
    connectivity: {
      has5G: true,
      has4G: true,
      wifi: 'Wi-Fi 6E',
      bluetooth: 'Bluetooth 5.4',
      nfc: false,
      usb: 'USB Type-C 2.0',
      simConfig: 'Dual SIM',
    },
    physical: {
      dimensions: '163.7 x 75.5 x 8.8 mm',
      weight: 212,
      materials: 'Action Key tactile customizable button, curved glass front and back',
      waterResistance: 'IP64 splash and dust resistant',
      colors: ['Pristine Glass', 'Heather Glass'],
    },
    software: {
      operatingSystem: 'Android',
      ui: 'Clean Bloatware-free Stock Android 14',
      launchOS: 'Android 14',
      promisedMajorUpdates: 3,
      securityUpdatePolicy: '4 years (Agni Mitra home service included)',
    },
    audio: {
      speakers: 'Dual stereo speakers with Dolby Atmos',
      stereo: true,
      headphoneJack: false,
      dolbyAtmos: true,
    },
    security: {
      fingerprint: 'Optical under display',
      faceUnlock: true,
    },
    sources: {
      officialWebsite: 'https://www.lavamobiles.com/smartphones/agni-3',
      productPage: 'https://www.amazon.in/dp/B0DJ26QYGL',
      specSheetUrl: 'https://www.lavamobiles.com/smartphones/agni-3/specs',
      verifiedDate: '2024-10',
    },
  },

  {
    id: 'lava-blaze-curve-5g',
    slug: 'lava-blaze-curve-5g',
    brand: 'Lava',
    modelName: 'Lava Blaze Curve 5G',
    generation: 'Blaze Curve',
    status: 'active',
    launchDate: '2024-03',
    pricing: {
      startingPrice: 17999,
      maximumPrice: 18999,
      launchPrice: 17999,
      currentPrice: 17999,
      currency: 'INR',
      priceEffectiveDate: '2025-01',
      source: 'Lava International Official Store',
    },
    display: {
      displaySize: 6.67,
      displayType: '120Hz 3D Curved AMOLED',
      resolution: '2400 x 1080 pixels (FHD+)',
      refreshRate: 120,
      peakBrightness: 800,
      hdr: 'HDR10+',
      protection: 'Double reinforced Schott glass',
      screenToBodyRatio: '93.0%',
    },
    performance: {
      chipset: 'MediaTek Dimensity 7050 (6nm)',
      cpu: 'Octa-core (2x2.6 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)',
      gpu: 'Mali-G68 MC4',
      ramOptions: ['8GB'],
      storageOptions: ['128GB', '256GB'],
      storageType: 'UFS 3.1',
      antutuScore: 570000,
    },
    cameras: {
      rearCameraSetup: 'Triple (64MP + 8MP + 2MP)',
      mainCamera: '64 MP Sony sensor, f/1.89, EIS',
      ultrawideCamera: '8 MP, f/2.2, 120˚',
      telephotoCamera: 'None (2 MP Macro)',
      frontCamera: '32 MP, f/2.45',
      videoRecording: '4K@30fps, 1080p@60fps',
      ois: false,
    },
    battery: {
      batteryCapacity: 5000,
      wiredCharging: 33,
      wirelessCharging: 0,
      reverseCharging: false,
    },
    connectivity: {
      has5G: true,
      has4G: true,
      wifi: 'Wi-Fi 6',
      bluetooth: 'Bluetooth 5.2',
      nfc: false,
      usb: 'USB Type-C 2.0',
      simConfig: 'Dual SIM',
    },
    physical: {
      dimensions: '161.8 x 74.0 x 8.8 mm',
      weight: 189,
      materials: 'AG Glass 3D curved back, metallic finish frame',
      waterResistance: 'Splash resistant',
      colors: ['Iron Glass', 'Viridian Glass'],
    },
    software: {
      operatingSystem: 'Android',
      ui: 'Clean Android 13 (Upgradable to 14, Zero Ads)',
      launchOS: 'Android 13',
      promisedMajorUpdates: 2,
      securityUpdatePolicy: '3 years',
    },
    audio: {
      speakers: 'Dual stereo speakers with Dolby Atmos',
      stereo: true,
      headphoneJack: false,
      dolbyAtmos: true,
    },
    security: {
      fingerprint: 'Optical under display',
      faceUnlock: true,
    },
    sources: {
      officialWebsite: 'https://www.lavamobiles.com/smartphones/blaze-curve-5g',
      productPage: 'https://www.amazon.in/dp/B0CV18VLLH',
      specSheetUrl: 'https://www.lavamobiles.com/smartphones/blaze-curve-5g/specs',
      verifiedDate: '2024-03',
    },
  },

  // ── HMD ──
  {
    id: 'hmd-skyline',
    slug: 'hmd-skyline',
    brand: 'HMD',
    modelName: 'HMD Skyline',
    generation: 'Skyline',
    status: 'active',
    launchDate: '2024-07',
    pricing: {
      startingPrice: 35999,
      maximumPrice: 35999,
      launchPrice: 35999,
      currentPrice: 35999,
      currency: 'INR',
      priceEffectiveDate: '2025-01',
      source: 'HMD Global India',
    },
    display: {
      displaySize: 6.55,
      displayType: '144Hz pOLED',
      resolution: '2400 x 1080 pixels (FHD+)',
      refreshRate: 144,
      peakBrightness: 1000,
      hdr: 'HDR10',
      protection: 'Corning Gorilla Glass 3',
      screenToBodyRatio: '87.8%',
    },
    performance: {
      chipset: 'Qualcomm Snapdragon 7s Gen 2 (4nm)',
      cpu: 'Octa-core (4x2.40 GHz Cortex-A78 & 4x1.95 GHz Cortex-A55)',
      gpu: 'Adreno 710',
      ramOptions: ['12GB'],
      storageOptions: ['256GB'],
      storageType: 'UFS 2.2',
      antutuScore: 610000,
    },
    cameras: {
      rearCameraSetup: 'Triple (108MP + 50MP + 13MP) with Fabula Design Heritage',
      mainCamera: '108 MP, f/1.8, Hybrid OIS',
      ultrawideCamera: '13 MP, f/2.4',
      telephotoCamera: '50 MP 4x optical capture zoom, f/2.0',
      frontCamera: '50 MP with eye-tracking autofocus',
      videoRecording: '4K@30fps, OZO spatial audio capture',
      ois: true,
    },
    battery: {
      batteryCapacity: 4600,
      wiredCharging: 33,
      wirelessCharging: 15,
      reverseCharging: true,
    },
    connectivity: {
      has5G: true,
      has4G: true,
      wifi: 'Wi-Fi 6E',
      bluetooth: 'Bluetooth 5.2',
      nfc: true,
      usb: 'USB Type-C 2.0',
      simConfig: 'Dual SIM',
    },
    physical: {
      dimensions: '159.8 x 76.0 x 8.9 mm',
      weight: 209.5,
      materials: 'Gen2 self-repairable construction (screws-only back panel), aluminum frame',
      waterResistance: 'IP54 splash resistant',
      colors: ['Neon Pink', 'Topaz Blue', 'Twisted Black'],
    },
    software: {
      operatingSystem: 'Android',
      ui: 'Clean Stock Android 14 with Detox Mode',
      launchOS: 'Android 14',
      promisedMajorUpdates: 2,
      securityUpdatePolicy: '3 years',
    },
    audio: {
      speakers: 'Dual stereo speakers with OZO Playback',
      stereo: true,
      headphoneJack: false,
      dolbyAtmos: false,
    },
    security: {
      fingerprint: 'Side-mounted capacitive',
      faceUnlock: true,
    },
    sources: {
      officialWebsite: 'https://www.hmd.com/en_in/hmd-skyline',
      productPage: 'https://www.amazon.in/dp/B0D9M5R5H4',
      specSheetUrl: 'https://www.hmd.com/en_in/hmd-skyline/specs',
      verifiedDate: '2024-07',
    },
  },

  {
    id: 'hmd-crest-max-5g',
    slug: 'hmd-crest-max-5g',
    brand: 'HMD',
    modelName: 'HMD Crest Max 5G',
    generation: 'Crest',
    status: 'active',
    launchDate: '2024-07',
    pricing: {
      startingPrice: 16499,
      maximumPrice: 16499,
      launchPrice: 16499,
      currentPrice: 16499,
      currency: 'INR',
      priceEffectiveDate: '2025-01',
      source: 'HMD Global India / Amazon India',
    },
    display: {
      displaySize: 6.67,
      displayType: 'FHD+ 90Hz OLED',
      resolution: '2400 x 1080 pixels',
      refreshRate: 90,
      peakBrightness: 800,
      hdr: 'None',
      protection: 'Toughened glass front',
      screenToBodyRatio: '86.5%',
    },
    performance: {
      chipset: 'Unisoc T760 5G (6nm)',
      cpu: 'Octa-core (4x2.2 GHz Cortex-A76 & 4x Cortex-A55)',
      gpu: 'Mali-G57 MC4',
      ramOptions: ['8GB'],
      storageOptions: ['256GB'],
      storageType: 'UFS 2.2',
      antutuScore: 510000,
    },
    cameras: {
      rearCameraSetup: 'Triple (64MP + 5MP + 2MP)',
      mainCamera: '64 MP, f/1.8',
      ultrawideCamera: '5 MP, f/2.2',
      telephotoCamera: 'None (2 MP Macro)',
      frontCamera: '50 MP High-Res Selfie Camera',
      videoRecording: '1080p@60fps',
      ois: false,
    },
    battery: {
      batteryCapacity: 5000,
      wiredCharging: 33,
      wirelessCharging: 0,
      reverseCharging: false,
    },
    connectivity: {
      has5G: true,
      has4G: true,
      wifi: 'Wi-Fi 5',
      bluetooth: 'Bluetooth 5.0',
      nfc: false,
      usb: 'USB Type-C 2.0',
      simConfig: 'Dual SIM',
    },
    physical: {
      dimensions: '163.8 x 76.3 x 8.9 mm',
      weight: 205,
      materials: 'Easy self-repairable construction, premium glass back',
      waterResistance: 'IP52',
      colors: ['Deep Purple', 'Royal Pink', 'Aqua Green'],
    },
    software: {
      operatingSystem: 'Android',
      ui: 'Clean Stock Android 14 (Zero Bloatware)',
      launchOS: 'Android 14',
      promisedMajorUpdates: 2,
      securityUpdatePolicy: '2 years',
    },
    audio: {
      speakers: 'Single speaker',
      stereo: false,
      headphoneJack: true,
      dolbyAtmos: false,
    },
    security: {
      fingerprint: 'Side-mounted capacitive',
      faceUnlock: true,
    },
    sources: {
      officialWebsite: 'https://www.hmd.com/en_in/hmd-crest-max-5g',
      productPage: 'https://www.amazon.in/dp/B0D9M76M54',
      specSheetUrl: 'https://www.hmd.com/en_in/hmd-crest-max-5g/specs',
      verifiedDate: '2024-07',
    },
  },
];

const variants: MobileVariant[] = [
  // Lava Agni 3 5G
  {
    id: 'lava-agni-3-5g-8-128',
    modelId: 'lava-agni-3-5g',
    ram: '8GB',
    storage: '128GB',
    price: 20999,
    mrp: 20999,
    colors: ['Pristine Glass', 'Heather Glass'],
    status: 'active',
    verified: true,
    source: 'Lava International Store',
  },
  {
    id: 'lava-agni-3-5g-8-256',
    modelId: 'lava-agni-3-5g',
    ram: '8GB',
    storage: '256GB',
    price: 24999,
    mrp: 24999,
    colors: ['Pristine Glass', 'Heather Glass'],
    status: 'active',
    verified: true,
    source: 'Lava International Store',
  },

  // Lava Blaze Curve 5G
  {
    id: 'lava-blaze-curve-5g-8-128',
    modelId: 'lava-blaze-curve-5g',
    ram: '8GB',
    storage: '128GB',
    price: 17999,
    mrp: 17999,
    colors: ['Iron Glass', 'Viridian Glass'],
    status: 'active',
    verified: true,
    source: 'Lava International Store',
  },
  {
    id: 'lava-blaze-curve-5g-8-256',
    modelId: 'lava-blaze-curve-5g',
    ram: '8GB',
    storage: '256GB',
    price: 18999,
    mrp: 18999,
    colors: ['Iron Glass', 'Viridian Glass'],
    status: 'active',
    verified: true,
    source: 'Lava International Store',
  },

  // HMD Skyline
  {
    id: 'hmd-skyline-12-256',
    modelId: 'hmd-skyline',
    ram: '12GB',
    storage: '256GB',
    price: 35999,
    mrp: 35999,
    colors: ['Neon Pink', 'Topaz Blue', 'Twisted Black'],
    status: 'active',
    verified: true,
    source: 'HMD Global India',
  },

  // HMD Crest Max 5G
  {
    id: 'hmd-crest-max-5g-8-256',
    modelId: 'hmd-crest-max-5g',
    ram: '8GB',
    storage: '256GB',
    price: 16499,
    mrp: 16499,
    colors: ['Deep Purple', 'Royal Pink', 'Aqua Green'],
    status: 'active',
    verified: true,
    source: 'HMD Global India / Amazon India',
  },
];

const images: MobileImageCatalogEntry[] = [
  {
    "modelId": "lava-agni-3-5g",
    "modelName": "Lava Agni 3 5G",
    "brand": "Lava",
    "verifiedCoverage": true,
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/lava-agni3.jpg",
        "angle": "front",
        "source": "Lava Official (GSMArena CDN)",
        "verified": true,
        "alt": "Lava Agni 3 5G front 1.5K curved AMOLED display"
      },
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/lava/lava-agni3-1.jpg",
        "angle": "back",
        "source": "Lava Official (GSMArena CDN)",
        "verified": true,
        "alt": "Lava Agni 3 5G InstaScreen secondary rear display view"
      },
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/lava/lava-agni3-2.jpg",
        "angle": "side",
        "source": "Lava Official (GSMArena CDN)",
        "verified": true,
        "alt": "Lava Agni 3 5G profile"
      }
    ]
  },
  {
    "modelId": "lava-blaze-curve-5g",
    "modelName": "Lava Blaze Curve 5G",
    "brand": "HMD",
    "verifiedCoverage": true,
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-curve-5g.jpg",
        "angle": "front",
        "source": "Lava Official (GSMArena CDN)",
        "verified": true,
        "alt": "Lava Blaze Curve 5G front 3D curved display"
      },
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/lava/lava-blaze-curve-5g-1.jpg",
        "angle": "back",
        "source": "Lava Official (GSMArena CDN)",
        "verified": true,
        "alt": "Lava Blaze Curve 5G rear glass view"
      },
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/lava/lava-blaze-curve-5g-2.jpg",
        "angle": "side",
        "source": "Lava Official (GSMArena CDN)",
        "verified": true,
        "alt": "Lava Blaze Curve 5G profile"
      }
    ]
  },
  {
    "modelId": "hmd-skyline",
    "modelName": "HMD Skyline",
    "brand": "HMD",
    "verifiedCoverage": true,
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/hmd-skyline.jpg",
        "angle": "front",
        "source": "HMD Official (GSMArena CDN)",
        "verified": true,
        "alt": "HMD Skyline front 144Hz pOLED display"
      },
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/hmd/hmd-skyline-1.jpg",
        "angle": "back",
        "source": "HMD Official (GSMArena CDN)",
        "verified": true,
        "alt": "HMD Skyline Gen2 repairable back view"
      },
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/hmd/hmd-skyline-2.jpg",
        "angle": "side",
        "source": "HMD Official (GSMArena CDN)",
        "verified": true,
        "alt": "HMD Skyline profile"
      }
    ]
  },
  {
    "modelId": "hmd-crest-max-5g",
    "modelName": "HMD Crest Max 5G",
    "brand": "Lava",
    "verifiedCoverage": true,
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/hmd-crest-max.jpg",
        "angle": "front",
        "source": "HMD Official (GSMArena CDN)",
        "verified": true,
        "alt": "HMD Crest Max 5G front display view"
      },
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/hmd/hmd-crest-max-1.jpg",
        "angle": "back",
        "source": "HMD Official (GSMArena CDN)",
        "verified": true,
        "alt": "HMD Crest Max 5G glass back rear view"
      }
    ]
  }
];

export const indianOemsBundle: MobileBrandBundle = {
  models,
  variants,
  images,
};
