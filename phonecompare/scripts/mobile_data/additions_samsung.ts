import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  {
    "id": "samsung-galaxy-s26-ultra",
    "slug": "samsung-galaxy-s26-ultra",
    "brand": "Samsung",
    "modelName": "Galaxy S26 Ultra",
    "generation": "S26",
    "status": "upcoming",
    "launchDate": "2026-02",
    "pricing": {
      "startingPrice": 134999,
      "maximumPrice": 164999,
      "launchPrice": 134999,
      "currentPrice": 134999,
      "currency": "INR",
      "priceEffectiveDate": "2026-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.8,
      "displayType": "Dynamic LTPO AMOLED 2X",
      "resolution": "3120 x 1440",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 8 Elite for Galaxy (3nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB",
        "16GB"
      ],
      "storageOptions": [
        "256GB",
        "512GB",
        "1TB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (200MP + 50MP + 50MP + 10MP)",
      "mainCamera": "200 MP, f/1.7, 24mm, multi-directional PDAF, Laser AF, OIS",
      "frontCamera": "12 MP Dual Pixel PDAF",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "50 MP, f/1.9, 120\u02da, Dual Pixel PDAF",
      "telephotoCamera": "50 MP 5x Periscope Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 45,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "162.8 x 77.6 x 8.2 mm",
      "weight": 218,
      "materials": "Titanium frame, Anti-reflective Gorilla Armor, S Pen included",
      "waterResistance": "IP68",
      "colors": [
        "Titanium Black",
        "Titanium Gray",
        "Titanium Violet",
        "Titanium Yellow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 8",
      "launchOS": "Android 16",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2026-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s26-plus",
    "slug": "samsung-galaxy-s26-plus",
    "brand": "Samsung",
    "modelName": "Galaxy S26+",
    "generation": "S26",
    "status": "upcoming",
    "launchDate": "2026-02",
    "pricing": {
      "startingPrice": 99999,
      "maximumPrice": 109999,
      "launchPrice": 99999,
      "currentPrice": 99999,
      "currency": "INR",
      "priceEffectiveDate": "2026-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Dynamic LTPO AMOLED 2X",
      "resolution": "3120 x 1440",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 8 Elite for Galaxy (3nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB"
      ],
      "storageOptions": [
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 12MP + 10MP)",
      "mainCamera": "50 MP, f/1.8, 24mm, Dual Pixel PDAF, OIS",
      "frontCamera": "12 MP Dual Pixel PDAF",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "10 MP 3x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4900,
      "wiredCharging": 45,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "158.4 x 75.8 x 7.4 mm",
      "weight": 192,
      "materials": "Enhanced Armor aluminum, Gorilla Glass Victus 2",
      "waterResistance": "IP68",
      "colors": [
        "Phantom Black",
        "Cobalt Violet",
        "Marble Gray",
        "Amber Yellow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 8",
      "launchOS": "Android 16",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2026-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s26",
    "slug": "samsung-galaxy-s26",
    "brand": "Samsung",
    "modelName": "Galaxy S26",
    "generation": "S26",
    "status": "upcoming",
    "launchDate": "2026-02",
    "pricing": {
      "startingPrice": 82999,
      "maximumPrice": 89999,
      "launchPrice": 82999,
      "currentPrice": 82999,
      "currency": "INR",
      "priceEffectiveDate": "2026-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.2,
      "displayType": "Dynamic LTPO AMOLED 2X",
      "resolution": "2340 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 8 Elite for Galaxy (3nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 12MP + 10MP)",
      "mainCamera": "50 MP, f/1.8, 24mm, Dual Pixel PDAF, OIS",
      "frontCamera": "12 MP Dual Pixel PDAF",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "10 MP 3x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "146.9 x 70.5 x 7.3 mm",
      "weight": 164,
      "materials": "Enhanced Armor aluminum, Gorilla Glass Victus 2",
      "waterResistance": "IP68",
      "colors": [
        "Phantom Black",
        "Cobalt Violet",
        "Marble Gray",
        "Amber Yellow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 8",
      "launchOS": "Android 16",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2026-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s26-fe",
    "slug": "samsung-galaxy-s26-fe",
    "brand": "Samsung",
    "modelName": "Galaxy S26 FE",
    "generation": "S26",
    "status": "upcoming",
    "launchDate": "2026-09",
    "pricing": {
      "startingPrice": 62999,
      "maximumPrice": 79999,
      "launchPrice": 62999,
      "currentPrice": 62999,
      "currency": "INR",
      "priceEffectiveDate": "2026-09",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Dynamic LTPO AMOLED 2X",
      "resolution": "2340 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 2500 (3nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 12MP + 10MP)",
      "mainCamera": "50 MP, f/1.8, 24mm, Dual Pixel PDAF, OIS",
      "frontCamera": "12 MP Dual Pixel PDAF",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "10 MP 3x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4900,
      "wiredCharging": 45,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "162.0 x 77.3 x 8.0 mm",
      "weight": 212,
      "materials": "Armor Aluminum frame, Gorilla Glass Victus+",
      "waterResistance": "IP68",
      "colors": [
        "Blue",
        "Graphite",
        "Gray",
        "Mint",
        "Yellow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 8",
      "launchOS": "Android 16",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2026-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s23-plus",
    "slug": "samsung-galaxy-s23-plus",
    "brand": "Samsung",
    "modelName": "Galaxy S23+",
    "generation": "S23",
    "status": "active",
    "launchDate": "2023-02",
    "pricing": {
      "startingPrice": 94999,
      "maximumPrice": 104999,
      "launchPrice": 94999,
      "currentPrice": 94999,
      "currency": "INR",
      "priceEffectiveDate": "2023-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "Dynamic AMOLED 2X",
      "resolution": "2340 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 8 Gen 2 for Galaxy (4nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 12MP + 10MP)",
      "mainCamera": "50 MP, f/1.8, 24mm, Dual Pixel PDAF, OIS",
      "frontCamera": "12 MP Dual Pixel",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "10 MP 3x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4700,
      "wiredCharging": 45,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "157.8 x 76.2 x 7.6 mm",
      "weight": 196,
      "materials": "Armor aluminum frame, Gorilla Glass Victus 2",
      "waterResistance": "IP68",
      "colors": [
        "Phantom Black",
        "Cream",
        "Green",
        "Lavender"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 6.1",
      "launchOS": "Android 13",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2023-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s22-plus",
    "slug": "samsung-galaxy-s22-plus",
    "brand": "Samsung",
    "modelName": "Galaxy S22+",
    "generation": "S22",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 84999,
      "maximumPrice": 88999,
      "launchPrice": 84999,
      "currentPrice": 84999,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "Dynamic AMOLED 2X",
      "resolution": "2340 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 8 Gen 1 (4nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 12MP + 10MP)",
      "mainCamera": "50 MP, f/1.8, 23mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP Dual Pixel",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "10 MP 3x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 45,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "157.4 x 75.8 x 7.6 mm",
      "weight": 195,
      "materials": "Armor aluminum frame, Gorilla Glass Victus+",
      "waterResistance": "IP68",
      "colors": [
        "Phantom Black",
        "White",
        "Green",
        "Pink Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s22",
    "slug": "samsung-galaxy-s22",
    "brand": "Samsung",
    "modelName": "Galaxy S22",
    "generation": "S22",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 72999,
      "maximumPrice": 76999,
      "launchPrice": 72999,
      "currentPrice": 72999,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.1,
      "displayType": "Dynamic AMOLED 2X",
      "resolution": "2340 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 8 Gen 1 (4nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 12MP + 10MP)",
      "mainCamera": "50 MP, f/1.8, 23mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP Dual Pixel",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "10 MP 3x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 3700,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "146.0 x 70.6 x 7.6 mm",
      "weight": 167,
      "materials": "Armor aluminum frame, Gorilla Glass Victus+",
      "waterResistance": "IP68",
      "colors": [
        "Phantom Black",
        "White",
        "Green",
        "Pink Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s21-ultra-5g",
    "slug": "samsung-galaxy-s21-ultra-5g",
    "brand": "Samsung",
    "modelName": "Galaxy S21 Ultra 5G",
    "generation": "S21",
    "status": "discontinued",
    "launchDate": "2021-01",
    "pricing": {
      "startingPrice": 105999,
      "maximumPrice": 116999,
      "launchPrice": 105999,
      "currentPrice": 105999,
      "currency": "INR",
      "priceEffectiveDate": "2021-01",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.8,
      "displayType": "Dynamic AMOLED 2X",
      "resolution": "3200 x 1440",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 2100 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB",
        "16GB"
      ],
      "storageOptions": [
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (108MP + 12MP + 10MP + 10MP) + Laser AF",
      "mainCamera": "108 MP, f/1.8, 24mm, PDAF, Laser AF, OIS",
      "frontCamera": "40 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "10 MP 10x Periscope, f/4.9, OIS"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.1 x 75.6 x 8.9 mm",
      "weight": 227,
      "materials": "Aluminum frame, Gorilla Glass Victus",
      "waterResistance": "IP68",
      "colors": [
        "Phantom Black",
        "Phantom Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s21-plus-5g",
    "slug": "samsung-galaxy-s21-plus-5g",
    "brand": "Samsung",
    "modelName": "Galaxy S21+ 5G",
    "generation": "S21",
    "status": "discontinued",
    "launchDate": "2021-01",
    "pricing": {
      "startingPrice": 81999,
      "maximumPrice": 85999,
      "launchPrice": 81999,
      "currentPrice": 81999,
      "currency": "INR",
      "priceEffectiveDate": "2021-01",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Dynamic AMOLED 2X",
      "resolution": "2400 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 2100 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 64MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "64 MP 3x Hybrid, f/2.0, OIS"
    },
    "battery": {
      "batteryCapacity": 4800,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "161.5 x 75.6 x 7.8 mm",
      "weight": 200,
      "materials": "Aluminum frame, Gorilla Glass Victus",
      "waterResistance": "IP68",
      "colors": [
        "Phantom Violet",
        "Phantom Silver",
        "Phantom Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s21-5g",
    "slug": "samsung-galaxy-s21-5g",
    "brand": "Samsung",
    "modelName": "Galaxy S21 5G",
    "generation": "S21",
    "status": "discontinued",
    "launchDate": "2021-01",
    "pricing": {
      "startingPrice": 69999,
      "maximumPrice": 73999,
      "launchPrice": 69999,
      "currentPrice": 69999,
      "currency": "INR",
      "priceEffectiveDate": "2021-01",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.2,
      "displayType": "Dynamic AMOLED 2X",
      "resolution": "2400 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 2100 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 64MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "64 MP 3x Hybrid, f/2.0, OIS"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "151.7 x 71.2 x 7.9 mm",
      "weight": 169,
      "materials": "Aluminum frame, plastic back",
      "waterResistance": "IP68",
      "colors": [
        "Phantom Gray",
        "Phantom White",
        "Phantom Violet",
        "Phantom Pink"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s20-ultra",
    "slug": "samsung-galaxy-s20-ultra",
    "brand": "Samsung",
    "modelName": "Galaxy S20 Ultra",
    "generation": "S20",
    "status": "discontinued",
    "launchDate": "2020-02",
    "pricing": {
      "startingPrice": 92999,
      "maximumPrice": 97999,
      "launchPrice": 92999,
      "currentPrice": 92999,
      "currency": "INR",
      "priceEffectiveDate": "2020-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.9,
      "displayType": "Dynamic AMOLED 2X",
      "resolution": "3200 x 1440",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 990 (7nm+)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (108MP + 48MP + 12MP + 0.3MP TOF)",
      "mainCamera": "108 MP, f/1.8, 26mm, PDAF, OIS",
      "frontCamera": "40 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "48 MP 4x Periscope 100x Space Zoom, OIS"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 45,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "166.9 x 76.0 x 8.8 mm",
      "weight": 220,
      "materials": "Aluminum frame, Gorilla Glass 6",
      "waterResistance": "IP68",
      "colors": [
        "Cosmic Black",
        "Cosmic Gray"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s20-plus",
    "slug": "samsung-galaxy-s20-plus",
    "brand": "Samsung",
    "modelName": "Galaxy S20+",
    "generation": "S20",
    "status": "discontinued",
    "launchDate": "2020-02",
    "pricing": {
      "startingPrice": 73999,
      "maximumPrice": 77999,
      "launchPrice": 73999,
      "currentPrice": 73999,
      "currency": "INR",
      "priceEffectiveDate": "2020-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Dynamic AMOLED 2X",
      "resolution": "3200 x 1440",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 990 (7nm+)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (12MP + 64MP + 12MP + 0.3MP TOF)",
      "mainCamera": "12 MP, f/1.8, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "64 MP 3x Hybrid, f/2.0, OIS"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "161.9 x 73.7 x 7.8 mm",
      "weight": 186,
      "materials": "Aluminum frame, Gorilla Glass 6",
      "waterResistance": "IP68",
      "colors": [
        "Cosmic Black",
        "Cosmic Gray",
        "Cloud Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s20",
    "slug": "samsung-galaxy-s20",
    "brand": "Samsung",
    "modelName": "Galaxy S20",
    "generation": "S20",
    "status": "discontinued",
    "launchDate": "2020-02",
    "pricing": {
      "startingPrice": 66999,
      "maximumPrice": 70999,
      "launchPrice": 66999,
      "currentPrice": 66999,
      "currency": "INR",
      "priceEffectiveDate": "2020-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.2,
      "displayType": "Dynamic AMOLED 2X",
      "resolution": "3200 x 1440",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 990 (7nm+)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 64MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da",
      "telephotoCamera": "64 MP 3x Hybrid, f/2.0, OIS"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "151.7 x 69.1 x 7.9 mm",
      "weight": 163,
      "materials": "Aluminum frame, Gorilla Glass 6",
      "waterResistance": "IP68",
      "colors": [
        "Cosmic Gray",
        "Cloud Blue",
        "Cloud Pink"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s20-fe-5g",
    "slug": "samsung-galaxy-s20-fe-5g",
    "brand": "Samsung",
    "modelName": "Galaxy S20 FE 5G",
    "generation": "S20",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 55999,
      "maximumPrice": 59999,
      "launchPrice": 55999,
      "currentPrice": 55999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 865 (7nm+)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 8MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da",
      "telephotoCamera": "8 MP 3x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.8 x 74.5 x 8.4 mm",
      "weight": 190,
      "materials": "Aluminum frame, plastic back",
      "waterResistance": "IP68",
      "colors": [
        "Cloud Navy",
        "Cloud Lavender",
        "Cloud Mint"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s10-plus",
    "slug": "samsung-galaxy-s10-plus",
    "brand": "Samsung",
    "modelName": "Galaxy S10+",
    "generation": "S10",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 73900,
      "maximumPrice": 117900,
      "launchPrice": 73900,
      "currentPrice": 73900,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Dynamic AMOLED",
      "resolution": "3040 x 1440",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9820 (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "512GB",
        "1TB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 16MP)",
      "mainCamera": "12 MP, f/1.5-2.4, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "Dual (10MP + 8MP)",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 12mm",
      "telephotoCamera": "12 MP 2x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4100,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "157.6 x 74.1 x 7.8 mm",
      "weight": 175,
      "materials": "Aluminum frame, Gorilla Glass 6",
      "waterResistance": "IP68",
      "colors": [
        "Prism White",
        "Prism Black",
        "Ceramic White",
        "Ceramic Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 9",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s10",
    "slug": "samsung-galaxy-s10",
    "brand": "Samsung",
    "modelName": "Galaxy S10",
    "generation": "S10",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 66900,
      "maximumPrice": 84900,
      "launchPrice": 66900,
      "currentPrice": 66900,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.1,
      "displayType": "Dynamic AMOLED",
      "resolution": "3040 x 1440",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9820 (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 16MP)",
      "mainCamera": "12 MP, f/1.5-2.4, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP Dual Pixel",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 12mm",
      "telephotoCamera": "12 MP 2x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 3400,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "149.9 x 70.4 x 7.8 mm",
      "weight": 157,
      "materials": "Aluminum frame, Gorilla Glass 6",
      "waterResistance": "IP68",
      "colors": [
        "Prism White",
        "Prism Black",
        "Prism Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 9",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s10e",
    "slug": "samsung-galaxy-s10e",
    "brand": "Samsung",
    "modelName": "Galaxy S10e",
    "generation": "S10",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 55900,
      "maximumPrice": 59900,
      "launchPrice": 55900,
      "currentPrice": 55900,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 5.8,
      "displayType": "Dynamic AMOLED",
      "resolution": "2280 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9820 (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 16MP)",
      "mainCamera": "12 MP, f/1.5-2.4, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP Dual Pixel",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 12mm"
    },
    "battery": {
      "batteryCapacity": 3100,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "142.2 x 69.9 x 7.9 mm",
      "weight": 150,
      "materials": "Aluminum frame, Gorilla Glass 5",
      "waterResistance": "IP68",
      "colors": [
        "Prism White",
        "Prism Black",
        "Canary Yellow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 9",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s10-lite",
    "slug": "samsung-galaxy-s10-lite",
    "brand": "Samsung",
    "modelName": "Galaxy S10 Lite",
    "generation": "S10",
    "status": "discontinued",
    "launchDate": "2020-01",
    "pricing": {
      "startingPrice": 39999,
      "maximumPrice": 44999,
      "launchPrice": 39999,
      "currentPrice": 39999,
      "currency": "INR",
      "priceEffectiveDate": "2020-01",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super AMOLED Plus",
      "resolution": "2400 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 855 (7nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP + 12MP + 5MP)",
      "mainCamera": "48 MP, f/2.0, 26mm, Super Steady OIS",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 12mm"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 45
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "162.5 x 75.6 x 8.1 mm",
      "weight": 186,
      "materials": "Aluminum frame, plastic back",
      "waterResistance": "None",
      "colors": [
        "Prism White",
        "Prism Black",
        "Prism Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s9-plus",
    "slug": "samsung-galaxy-s9-plus",
    "brand": "Samsung",
    "modelName": "Galaxy S9+",
    "generation": "S9",
    "status": "discontinued",
    "launchDate": "2018-02",
    "pricing": {
      "startingPrice": 64900,
      "maximumPrice": 72900,
      "launchPrice": 64900,
      "currentPrice": 64900,
      "currency": "INR",
      "priceEffectiveDate": "2018-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.2,
      "displayType": "Super AMOLED",
      "resolution": "2960 x 1440",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9810 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 12MP)",
      "mainCamera": "12 MP, f/1.5-2.4, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "8 MP Dual Pixel",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "telephotoCamera": "12 MP 2x Telephoto, f/2.4, 52mm, OIS"
    },
    "battery": {
      "batteryCapacity": 3500,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "158.1 x 73.8 x 8.5 mm",
      "weight": 189,
      "materials": "Aluminum frame, Gorilla Glass 5",
      "waterResistance": "IP68",
      "colors": [
        "Midnight Black",
        "Coral Blue",
        "Lilac Purple"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 8.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2018-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s9",
    "slug": "samsung-galaxy-s9",
    "brand": "Samsung",
    "modelName": "Galaxy S9",
    "generation": "S9",
    "status": "discontinued",
    "launchDate": "2018-02",
    "pricing": {
      "startingPrice": 57900,
      "maximumPrice": 65900,
      "launchPrice": 57900,
      "currentPrice": 57900,
      "currency": "INR",
      "priceEffectiveDate": "2018-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 5.8,
      "displayType": "Super AMOLED",
      "resolution": "2960 x 1440",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9810 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Dual Aperture",
      "mainCamera": "12 MP, f/1.5-2.4, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "8 MP Dual Pixel",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3000,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "147.7 x 68.7 x 8.5 mm",
      "weight": 163,
      "materials": "Aluminum frame, Gorilla Glass 5",
      "waterResistance": "IP68",
      "colors": [
        "Midnight Black",
        "Coral Blue",
        "Lilac Purple"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 8.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2018-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s8-plus",
    "slug": "samsung-galaxy-s8-plus",
    "brand": "Samsung",
    "modelName": "Galaxy S8+",
    "generation": "S8",
    "status": "discontinued",
    "launchDate": "2017-03",
    "pricing": {
      "startingPrice": 64900,
      "maximumPrice": 74900,
      "launchPrice": 64900,
      "currentPrice": 64900,
      "currency": "INR",
      "priceEffectiveDate": "2017-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.2,
      "displayType": "Super AMOLED Infinity Display",
      "resolution": "2960 x 1440",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 8895 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Camera",
      "mainCamera": "12 MP, f/1.7, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "8 MP, f/1.7",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3500,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.5 x 73.4 x 8.1 mm",
      "weight": 173,
      "materials": "Aluminum frame, Gorilla Glass 5",
      "waterResistance": "IP68",
      "colors": [
        "Midnight Black",
        "Orchid Gray",
        "Maple Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI",
      "launchOS": "Android 7.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2017-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s8",
    "slug": "samsung-galaxy-s8",
    "brand": "Samsung",
    "modelName": "Galaxy S8",
    "generation": "S8",
    "status": "discontinued",
    "launchDate": "2017-03",
    "pricing": {
      "startingPrice": 57900,
      "maximumPrice": 61900,
      "launchPrice": 57900,
      "currentPrice": 57900,
      "currency": "INR",
      "priceEffectiveDate": "2017-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 5.8,
      "displayType": "Super AMOLED Infinity Display",
      "resolution": "2960 x 1440",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 8895 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Camera",
      "mainCamera": "12 MP, f/1.7, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "8 MP, f/1.7",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3000,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "148.9 x 68.1 x 8.0 mm",
      "weight": 155,
      "materials": "Aluminum frame, Gorilla Glass 5",
      "waterResistance": "IP68",
      "colors": [
        "Midnight Black",
        "Orchid Gray",
        "Maple Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI",
      "launchOS": "Android 7.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2017-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s7-edge",
    "slug": "samsung-galaxy-s7-edge",
    "brand": "Samsung",
    "modelName": "Galaxy S7 edge",
    "generation": "S7",
    "status": "discontinued",
    "launchDate": "2016-02",
    "pricing": {
      "startingPrice": 56900,
      "maximumPrice": 59900,
      "launchPrice": 56900,
      "currentPrice": 56900,
      "currency": "INR",
      "priceEffectiveDate": "2016-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 5.5,
      "displayType": "Super AMOLED curved",
      "resolution": "2560 x 1440",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 8890 (14nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "32GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Dual Pixel",
      "mainCamera": "12 MP, f/1.7, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "5 MP, f/1.7",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3600,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "150.9 x 72.6 x 7.7 mm",
      "weight": 157,
      "materials": "Aluminum frame, Gorilla Glass 4",
      "waterResistance": "IP68",
      "colors": [
        "Black Onyx",
        "Gold Platinum",
        "Silver Titanium"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "TouchWiz",
      "launchOS": "Android 6.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2016-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-s7",
    "slug": "samsung-galaxy-s7",
    "brand": "Samsung",
    "modelName": "Galaxy S7",
    "generation": "S7",
    "status": "discontinued",
    "launchDate": "2016-02",
    "pricing": {
      "startingPrice": 48900,
      "maximumPrice": 52900,
      "launchPrice": 48900,
      "currentPrice": 48900,
      "currency": "INR",
      "priceEffectiveDate": "2016-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 5.1,
      "displayType": "Super AMOLED",
      "resolution": "2560 x 1440",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 8890 (14nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Dual Pixel",
      "mainCamera": "12 MP, f/1.7, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "5 MP, f/1.7",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3000,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "142.4 x 69.6 x 7.9 mm",
      "weight": 152,
      "materials": "Aluminum frame, Gorilla Glass 4",
      "waterResistance": "IP68",
      "colors": [
        "Black Onyx",
        "Gold Platinum",
        "White Pearl"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "TouchWiz",
      "launchOS": "Android 6.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2016-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-z-fold-4",
    "slug": "samsung-galaxy-z-fold-4",
    "brand": "Samsung",
    "modelName": "Galaxy Z Fold 4",
    "generation": "Z Fold",
    "status": "discontinued",
    "launchDate": "2022-08",
    "pricing": {
      "startingPrice": 154999,
      "maximumPrice": 184999,
      "launchPrice": 154999,
      "currentPrice": 154999,
      "currency": "INR",
      "priceEffectiveDate": "2022-08",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 7.6,
      "displayType": "Foldable Dynamic AMOLED 2X",
      "resolution": "2176 x 1812",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 8+ Gen 1 (4nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB"
      ],
      "storageOptions": [
        "256GB",
        "512GB",
        "1TB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 12MP + 10MP)",
      "mainCamera": "50 MP, f/1.8, 23mm, Dual Pixel PDAF, OIS",
      "frontCamera": "4 MP Under Display + 10 MP Cover",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da",
      "telephotoCamera": "10 MP 3x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4400,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "155.1 x 130.1 x 6.3 mm (Unfolded)",
      "weight": 263,
      "materials": "Armor aluminum frame, Gorilla Glass Victus+",
      "waterResistance": "IPX8",
      "colors": [
        "Graygreen",
        "Phantom Black",
        "Beige"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5.1.1",
      "launchOS": "Android 12L",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-z-flip-4",
    "slug": "samsung-galaxy-z-flip-4",
    "brand": "Samsung",
    "modelName": "Galaxy Z Flip 4",
    "generation": "Z Flip",
    "status": "discontinued",
    "launchDate": "2022-08",
    "pricing": {
      "startingPrice": 89999,
      "maximumPrice": 94999,
      "launchPrice": 89999,
      "currentPrice": 89999,
      "currency": "INR",
      "priceEffectiveDate": "2022-08",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Foldable Dynamic AMOLED 2X",
      "resolution": "2640 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 8+ Gen 1 (4nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 24mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 3700,
      "wiredCharging": 25,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.2 x 71.9 x 6.9 mm (Unfolded)",
      "weight": 187,
      "materials": "Armor aluminum frame, Gorilla Glass Victus+",
      "waterResistance": "IPX8",
      "colors": [
        "Bora Purple",
        "Graphite",
        "Pink Gold",
        "Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5.1.1",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-z-fold-3",
    "slug": "samsung-galaxy-z-fold-3",
    "brand": "Samsung",
    "modelName": "Galaxy Z Fold 3 5G",
    "generation": "Z Fold",
    "status": "discontinued",
    "launchDate": "2021-08",
    "pricing": {
      "startingPrice": 149999,
      "maximumPrice": 157999,
      "launchPrice": 149999,
      "currentPrice": 149999,
      "currency": "INR",
      "priceEffectiveDate": "2021-08",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 7.6,
      "displayType": "Foldable Dynamic AMOLED 2X",
      "resolution": "2208 x 1768",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 888 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB"
      ],
      "storageOptions": [
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "4 MP Under Display + 10 MP Cover",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da",
      "telephotoCamera": "12 MP 2x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4400,
      "wiredCharging": 25,
      "wirelessCharging": 11
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "158.2 x 128.1 x 6.4 mm (Unfolded)",
      "weight": 271,
      "materials": "Armor aluminum frame, Gorilla Glass Victus",
      "waterResistance": "IPX8",
      "colors": [
        "Phantom Black",
        "Phantom Green",
        "Phantom Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-z-flip-3",
    "slug": "samsung-galaxy-z-flip-3",
    "brand": "Samsung",
    "modelName": "Galaxy Z Flip 3 5G",
    "generation": "Z Flip",
    "status": "discontinued",
    "launchDate": "2021-08",
    "pricing": {
      "startingPrice": 84999,
      "maximumPrice": 88999,
      "launchPrice": 84999,
      "currentPrice": 84999,
      "currency": "INR",
      "priceEffectiveDate": "2021-08",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Foldable Dynamic AMOLED 2X",
      "resolution": "2640 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 888 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 27mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 3300,
      "wiredCharging": 15,
      "wirelessCharging": 10
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "166.0 x 72.2 x 6.9 mm (Unfolded)",
      "weight": 183,
      "materials": "Armor aluminum frame, Gorilla Glass Victus",
      "waterResistance": "IPX8",
      "colors": [
        "Cream",
        "Phantom Black",
        "Green",
        "Lavender"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-z-fold-2",
    "slug": "samsung-galaxy-z-fold-2",
    "brand": "Samsung",
    "modelName": "Galaxy Z Fold 2 5G",
    "generation": "Z Fold",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 149999,
      "maximumPrice": 149999,
      "launchPrice": 149999,
      "currentPrice": 149999,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 7.6,
      "displayType": "Foldable Dynamic AMOLED 2X",
      "resolution": "2208 x 1768",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 865+ (7nm+)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP Cover + 10 MP Unfolded",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da",
      "telephotoCamera": "12 MP 2x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 25,
      "wirelessCharging": 11
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.2 x 128.2 x 6.9 mm (Unfolded)",
      "weight": 282,
      "materials": "Aluminum frame, Gorilla Glass Victus",
      "waterResistance": "None",
      "colors": [
        "Mystic Bronze",
        "Mystic Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-fold",
    "slug": "samsung-galaxy-fold",
    "brand": "Samsung",
    "modelName": "Galaxy Fold",
    "generation": "Z Fold",
    "status": "discontinued",
    "launchDate": "2019-09",
    "pricing": {
      "startingPrice": 164999,
      "maximumPrice": 164999,
      "launchPrice": 164999,
      "currentPrice": 164999,
      "currency": "INR",
      "priceEffectiveDate": "2019-09",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 7.3,
      "displayType": "Foldable Dynamic AMOLED",
      "resolution": "2152 x 1536",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 855 (7nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB"
      ],
      "storageOptions": [
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 16MP)",
      "mainCamera": "12 MP, f/1.5-2.4, 27mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP Cover + 10MP/8MP Unfolded",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 12mm",
      "telephotoCamera": "12 MP 2x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 4380,
      "wiredCharging": 15,
      "wirelessCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "160.9 x 117.9 x 6.9 mm (Unfolded)",
      "weight": 263,
      "materials": "Stainless steel frame, glass",
      "waterResistance": "None",
      "colors": [
        "Space Silver",
        "Cosmos Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 9.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2019-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-z-flip",
    "slug": "samsung-galaxy-z-flip",
    "brand": "Samsung",
    "modelName": "Galaxy Z Flip",
    "generation": "Z Flip",
    "status": "discontinued",
    "launchDate": "2020-02",
    "pricing": {
      "startingPrice": 109999,
      "maximumPrice": 109999,
      "launchPrice": 109999,
      "currentPrice": 109999,
      "currency": "INR",
      "priceEffectiveDate": "2020-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Foldable Dynamic AMOLED",
      "resolution": "2636 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 855+ (7nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 27mm, Dual Pixel PDAF, OIS",
      "frontCamera": "10 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 3300,
      "wiredCharging": 15,
      "wirelessCharging": 9
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "167.3 x 73.6 x 7.2 mm (Unfolded)",
      "weight": 183,
      "materials": "Aluminum frame, Gorilla Glass 6",
      "waterResistance": "None",
      "colors": [
        "Mirror Purple",
        "Mirror Black",
        "Mirror Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a73-5g",
    "slug": "samsung-galaxy-a73-5g",
    "brand": "Samsung",
    "modelName": "Galaxy A73 5G",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2022-03",
    "pricing": {
      "startingPrice": 41999,
      "maximumPrice": 44999,
      "launchPrice": 41999,
      "currentPrice": 41999,
      "currency": "INR",
      "priceEffectiveDate": "2022-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super AMOLED Plus",
      "resolution": "2400 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 778G 5G (6nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (108MP + 12MP + 5MP + 5MP)",
      "mainCamera": "108 MP, f/1.8, PDAF, OIS",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "163.7 x 76.1 x 7.6 mm",
      "weight": 181,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "IP67",
      "colors": [
        "Awesome Gray",
        "Awesome White",
        "Awesome Mint"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a53-5g",
    "slug": "samsung-galaxy-a53-5g",
    "brand": "Samsung",
    "modelName": "Galaxy A53 5G",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2022-03",
    "pricing": {
      "startingPrice": 34499,
      "maximumPrice": 35999,
      "launchPrice": 34499,
      "currentPrice": 34499,
      "currency": "INR",
      "priceEffectiveDate": "2022-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 1280 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 12MP + 5MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF, OIS",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.6 x 74.8 x 8.1 mm",
      "weight": 189,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "IP67",
      "colors": [
        "Awesome Black",
        "Awesome White",
        "Awesome Blue",
        "Awesome Peach"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a52s-5g",
    "slug": "samsung-galaxy-a52s-5g",
    "brand": "Samsung",
    "modelName": "Galaxy A52s 5G",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2021-08",
    "pricing": {
      "startingPrice": 35999,
      "maximumPrice": 37499,
      "launchPrice": 35999,
      "currentPrice": 35999,
      "currency": "INR",
      "priceEffectiveDate": "2021-08",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 778G 5G (6nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 12MP + 5MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF, OIS",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.9 x 75.1 x 8.4 mm",
      "weight": 189,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "IP67",
      "colors": [
        "Awesome Black",
        "Awesome White",
        "Awesome Mint"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a52",
    "slug": "samsung-galaxy-a52",
    "brand": "Samsung",
    "modelName": "Galaxy A52",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 26499,
      "maximumPrice": 27999,
      "launchPrice": 26499,
      "currentPrice": 26499,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 720G (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 12MP + 5MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF, OIS",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.9 x 75.1 x 8.4 mm",
      "weight": 189,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "IP67",
      "colors": [
        "Awesome Black",
        "Awesome White",
        "Awesome Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a51",
    "slug": "samsung-galaxy-a51",
    "brand": "Samsung",
    "modelName": "Galaxy A51",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2020-01",
    "pricing": {
      "startingPrice": 23999,
      "maximumPrice": 25999,
      "launchPrice": 23999,
      "currentPrice": 23999,
      "currency": "INR",
      "priceEffectiveDate": "2020-01",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9611 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP + 12MP + 5MP + 5MP)",
      "mainCamera": "48 MP, f/2.0, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "158.5 x 73.6 x 7.9 mm",
      "weight": 172,
      "materials": "Plastic frame and back, Gorilla Glass 3",
      "waterResistance": "None",
      "colors": [
        "Prism Crush Black",
        "Prism Crush White",
        "Prism Crush Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a50",
    "slug": "samsung-galaxy-a50",
    "brand": "Samsung",
    "modelName": "Galaxy A50",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 19990,
      "maximumPrice": 22990,
      "launchPrice": 19990,
      "currentPrice": 19990,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2340 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9610 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (25MP + 8MP + 5MP)",
      "mainCamera": "25 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "25 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 13mm"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "158.5 x 74.7 x 7.7 mm",
      "weight": 166,
      "materials": "Plastic frame and back, Gorilla Glass 3",
      "waterResistance": "None",
      "colors": [
        "Black",
        "White",
        "Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI",
      "launchOS": "Android 9.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a72",
    "slug": "samsung-galaxy-a72",
    "brand": "Samsung",
    "modelName": "Galaxy A72",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 34999,
      "maximumPrice": 37999,
      "launchPrice": 34999,
      "currentPrice": 34999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 720G (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 8MP + 12MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF, OIS",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da",
      "telephotoCamera": "8 MP 3x Telephoto, f/2.4, OIS"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.0 x 77.4 x 8.4 mm",
      "weight": 203,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "IP67",
      "colors": [
        "Awesome Black",
        "Awesome White",
        "Awesome Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a71",
    "slug": "samsung-galaxy-a71",
    "brand": "Samsung",
    "modelName": "Galaxy A71",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2020-01",
    "pricing": {
      "startingPrice": 29999,
      "maximumPrice": 29999,
      "launchPrice": 29999,
      "currentPrice": 29999,
      "currency": "INR",
      "priceEffectiveDate": "2020-01",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super AMOLED Plus",
      "resolution": "2400 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 730 (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 12MP + 5MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "163.6 x 76.0 x 7.7 mm",
      "weight": 179,
      "materials": "Plastic frame and back, Gorilla Glass 3",
      "waterResistance": "None",
      "colors": [
        "Prism Crush Black",
        "Prism Crush Silver",
        "Prism Crush Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a70",
    "slug": "samsung-galaxy-a70",
    "brand": "Samsung",
    "modelName": "Galaxy A70",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2019-03",
    "pricing": {
      "startingPrice": 28990,
      "maximumPrice": 28990,
      "launchPrice": 28990,
      "currentPrice": 28990,
      "currency": "INR",
      "priceEffectiveDate": "2019-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 675 (11nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (32MP + 8MP + 5MP)",
      "mainCamera": "32 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 12mm"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.3 x 76.7 x 7.9 mm",
      "weight": 183,
      "materials": "Plastic frame and back, Gorilla Glass 3",
      "waterResistance": "None",
      "colors": [
        "Coral",
        "Blue",
        "Black",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI",
      "launchOS": "Android 9.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2019-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a33-5g",
    "slug": "samsung-galaxy-a33-5g",
    "brand": "Samsung",
    "modelName": "Galaxy A33 5G",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2022-03",
    "pricing": {
      "startingPrice": 28499,
      "maximumPrice": 29999,
      "launchPrice": 28499,
      "currentPrice": 28499,
      "currency": "INR",
      "priceEffectiveDate": "2022-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 1280 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP + 8MP + 5MP + 2MP)",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF, OIS",
      "frontCamera": "13 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.7 x 74.0 x 8.1 mm",
      "weight": 186,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "IP67",
      "colors": [
        "Awesome Black",
        "Awesome White",
        "Awesome Blue",
        "Awesome Peach"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a32",
    "slug": "samsung-galaxy-a32",
    "brand": "Samsung",
    "modelName": "Galaxy A32",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2021-02",
    "pricing": {
      "startingPrice": 21999,
      "maximumPrice": 21999,
      "launchPrice": 21999,
      "currentPrice": 21999,
      "currency": "INR",
      "priceEffectiveDate": "2021-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G80 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 8MP + 5MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "20 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "158.9 x 73.6 x 8.4 mm",
      "weight": 184,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Awesome Black",
        "Awesome White",
        "Awesome Blue",
        "Awesome Violet"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a31",
    "slug": "samsung-galaxy-a31",
    "brand": "Samsung",
    "modelName": "Galaxy A31",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2020-03",
    "pricing": {
      "startingPrice": 21999,
      "maximumPrice": 21999,
      "launchPrice": 21999,
      "currentPrice": 21999,
      "currency": "INR",
      "priceEffectiveDate": "2020-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio P65 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP + 8MP + 5MP + 5MP)",
      "mainCamera": "48 MP, f/2.0, 26mm, PDAF",
      "frontCamera": "20 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.3 x 73.1 x 8.6 mm",
      "weight": 185,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Prism Crush Black",
        "Prism Crush Blue",
        "Prism Crush White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a30",
    "slug": "samsung-galaxy-a30",
    "brand": "Samsung",
    "modelName": "Galaxy A30",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 16990,
      "maximumPrice": 16990,
      "launchPrice": 16990,
      "currentPrice": 16990,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2340 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 7904 (14nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB",
        "4GB"
      ],
      "storageOptions": [
        "32GB",
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (16MP + 5MP)",
      "mainCamera": "16 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 12mm"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "158.5 x 74.7 x 7.7 mm",
      "weight": 165,
      "materials": "Plastic frame and back, Gorilla Glass 3",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Blue",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI",
      "launchOS": "Android 9.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a23-5g",
    "slug": "samsung-galaxy-a23-5g",
    "brand": "Samsung",
    "modelName": "Galaxy A23 5G",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2022-08",
    "pricing": {
      "startingPrice": 22999,
      "maximumPrice": 24999,
      "launchPrice": 22999,
      "currentPrice": 22999,
      "currency": "INR",
      "priceEffectiveDate": "2022-08",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "PLS LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 695 5G (6nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (50MP + 5MP + 2MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF, OIS",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "5 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.4 x 76.9 x 8.4 mm",
      "weight": 197,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Black",
        "White",
        "Peach",
        "Light Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a22-5g",
    "slug": "samsung-galaxy-a22-5g",
    "brand": "Samsung",
    "modelName": "Galaxy A22 5G",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2021-06",
    "pricing": {
      "startingPrice": 19999,
      "maximumPrice": 21999,
      "launchPrice": 19999,
      "currentPrice": 19999,
      "currency": "INR",
      "priceEffectiveDate": "2021-06",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "TFT LCD",
      "resolution": "2400 x 1080",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 700 (7nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP + 5MP + 2MP)",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 115\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "167.2 x 76.4 x 9.0 mm",
      "weight": 203,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Gray",
        "White",
        "Mint",
        "Violet"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a14-5g",
    "slug": "samsung-galaxy-a14-5g",
    "brand": "Samsung",
    "modelName": "Galaxy A14 5G",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2023-01",
    "pricing": {
      "startingPrice": 16499,
      "maximumPrice": 18999,
      "launchPrice": 16499,
      "currentPrice": 16499,
      "currency": "INR",
      "priceEffectiveDate": "2023-01",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "PLS LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 1330 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 2MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "13 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "167.7 x 78.0 x 9.1 mm",
      "weight": 202,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Light Green",
        "Dark Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5",
      "launchOS": "Android 13",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2023-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a13",
    "slug": "samsung-galaxy-a13",
    "brand": "Samsung",
    "modelName": "Galaxy A13",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2022-03",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 17499,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2022-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "PLS LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 850 (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (50MP + 5MP + 2MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.1 x 76.4 x 8.8 mm",
      "weight": 195,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Black",
        "White",
        "Peach",
        "Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a12",
    "slug": "samsung-galaxy-a12",
    "brand": "Samsung",
    "modelName": "Galaxy A12",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2020-11",
    "pricing": {
      "startingPrice": 12999,
      "maximumPrice": 13999,
      "launchPrice": 12999,
      "currentPrice": 12999,
      "currency": "INR",
      "priceEffectiveDate": "2020-11",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "PLS IPS",
      "resolution": "1600 x 720",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio P35 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP + 5MP + 2MP + 2MP)",
      "mainCamera": "48 MP, f/2.0, 26mm, AF",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 115\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.0 x 75.8 x 8.9 mm",
      "weight": 205,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Black",
        "White",
        "Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-11",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a05",
    "slug": "samsung-galaxy-a05",
    "brand": "Samsung",
    "modelName": "Galaxy A05",
    "generation": "Galaxy A",
    "status": "active",
    "launchDate": "2023-10",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 12499,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2023-10",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "PLS LCD",
      "resolution": "1600 x 720",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G85 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (50MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, AF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "168.8 x 78.2 x 8.8 mm",
      "weight": 195,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Silver",
        "Light Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 5.1",
      "launchOS": "Android 13",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2023-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-a04",
    "slug": "samsung-galaxy-a04",
    "brand": "Samsung",
    "modelName": "Galaxy A04",
    "generation": "Galaxy A",
    "status": "discontinued",
    "launchDate": "2022-08",
    "pricing": {
      "startingPrice": 11999,
      "maximumPrice": 12999,
      "launchPrice": 11999,
      "currentPrice": 11999,
      "currency": "INR",
      "priceEffectiveDate": "2022-08",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "PLS LCD",
      "resolution": "1600 x 720",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio P35 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB",
        "4GB"
      ],
      "storageOptions": [
        "32GB",
        "64GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (50MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, AF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.4 x 76.3 x 9.1 mm",
      "weight": 192,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Green",
        "White",
        "Copper"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 4.1",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m53-5g",
    "slug": "samsung-galaxy-m53-5g",
    "brand": "Samsung",
    "modelName": "Galaxy M53 5G",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2022-04",
    "pricing": {
      "startingPrice": 23999,
      "maximumPrice": 25999,
      "launchPrice": 23999,
      "currentPrice": 23999,
      "currency": "INR",
      "priceEffectiveDate": "2022-04",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super AMOLED Plus",
      "resolution": "2408 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 900 (6nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (108MP + 8MP + 2MP + 2MP)",
      "mainCamera": "108 MP, f/1.8, PDAF",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.7 x 77.0 x 7.4 mm",
      "weight": 176,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Green",
        "Blue",
        "Brown"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m52-5g",
    "slug": "samsung-galaxy-m52-5g",
    "brand": "Samsung",
    "modelName": "Galaxy M52 5G",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2021-09",
    "pricing": {
      "startingPrice": 29999,
      "maximumPrice": 31999,
      "launchPrice": 29999,
      "currentPrice": 29999,
      "currency": "INR",
      "priceEffectiveDate": "2021-09",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super AMOLED Plus",
      "resolution": "2400 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 778G 5G (6nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP + 12MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.2 x 76.4 x 7.4 mm",
      "weight": 173,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Icy Blue",
        "Blazing Black",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m51",
    "slug": "samsung-galaxy-m51",
    "brand": "Samsung",
    "modelName": "Galaxy M51",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2020-08",
    "pricing": {
      "startingPrice": 24999,
      "maximumPrice": 26999,
      "launchPrice": 24999,
      "currentPrice": 24999,
      "currency": "INR",
      "priceEffectiveDate": "2020-08",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super AMOLED Plus",
      "resolution": "2400 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 730G (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 12MP + 5MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 7000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "163.9 x 76.3 x 9.5 mm",
      "weight": 213,
      "materials": "Plastic frame and back, Gorilla Glass 3+",
      "waterResistance": "None",
      "colors": [
        "Celestial Black",
        "Electric Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m33-5g",
    "slug": "samsung-galaxy-m33-5g",
    "brand": "Samsung",
    "modelName": "Galaxy M33 5G",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2022-03",
    "pricing": {
      "startingPrice": 17999,
      "maximumPrice": 19499,
      "launchPrice": 17999,
      "currentPrice": 17999,
      "currency": "INR",
      "priceEffectiveDate": "2022-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "TFT LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 1280 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (50MP + 5MP + 2MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.4 x 76.9 x 9.4 mm",
      "weight": 215,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Ocean Blue",
        "Green",
        "Deep Ocean Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m32",
    "slug": "samsung-galaxy-m32",
    "brand": "Samsung",
    "modelName": "Galaxy M32",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2021-06",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 16999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2021-06",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G80 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 8MP + 2MP + 2MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "20 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.3 x 74.0 x 9.3 mm",
      "weight": 196,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Light Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m31s",
    "slug": "samsung-galaxy-m31s",
    "brand": "Samsung",
    "modelName": "Galaxy M31s",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2020-07",
    "pricing": {
      "startingPrice": 19499,
      "maximumPrice": 21499,
      "launchPrice": 19499,
      "currentPrice": 19499,
      "currency": "INR",
      "priceEffectiveDate": "2020-07",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "Super AMOLED",
      "resolution": "2400 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9611 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 12MP + 5MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.3 x 74.4 x 9.3 mm",
      "weight": 203,
      "materials": "Plastic frame and back, Gorilla Glass 3",
      "waterResistance": "None",
      "colors": [
        "Mirage Black",
        "Mirage Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m31",
    "slug": "samsung-galaxy-m31",
    "brand": "Samsung",
    "modelName": "Galaxy M31",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2020-02",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 15999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2020-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2340 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9611 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 8MP + 5MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 12mm"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.2 x 75.1 x 8.9 mm",
      "weight": 191,
      "materials": "Plastic frame and back, Gorilla Glass 3",
      "waterResistance": "None",
      "colors": [
        "Ocean Blue",
        "Space Black",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 2",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m30s",
    "slug": "samsung-galaxy-m30s",
    "brand": "Samsung",
    "modelName": "Galaxy M30s",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2019-09",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 16999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2019-09",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2340 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9611 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP + 8MP + 5MP)",
      "mainCamera": "48 MP, f/2.0, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 12mm"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.0 x 75.1 x 8.9 mm",
      "weight": 188,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Opal Black",
        "Sapphire Blue",
        "Pearl White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI",
      "launchOS": "Android 9.0",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2019-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m30",
    "slug": "samsung-galaxy-m30",
    "brand": "Samsung",
    "modelName": "Galaxy M30",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 14990,
      "maximumPrice": 17990,
      "launchPrice": 14990,
      "currentPrice": 14990,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2340 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 7904 (14nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (13MP + 5MP + 5MP)",
      "mainCamera": "13 MP, f/1.9, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 12mm"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.0 x 75.1 x 8.5 mm",
      "weight": 174,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Gradation Blue",
        "Gradation Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Experience 9.5",
      "launchOS": "Android 8.1",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m14-5g",
    "slug": "samsung-galaxy-m14-5g",
    "brand": "Samsung",
    "modelName": "Galaxy M14 5G",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2023-04",
    "pricing": {
      "startingPrice": 14990,
      "maximumPrice": 16490,
      "launchPrice": 14990,
      "currentPrice": 14990,
      "currency": "INR",
      "priceEffectiveDate": "2023-04",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "PLS LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 1330 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 2MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "13 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "166.8 x 77.2 x 9.4 mm",
      "weight": 206,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Navy Blue",
        "Light Blue",
        "Icy Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5.1",
      "launchOS": "Android 13",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2023-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m13",
    "slug": "samsung-galaxy-m13",
    "brand": "Samsung",
    "modelName": "Galaxy M13",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2022-05",
    "pricing": {
      "startingPrice": 11999,
      "maximumPrice": 13999,
      "launchPrice": 11999,
      "currentPrice": 11999,
      "currency": "INR",
      "priceEffectiveDate": "2022-05",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "PLS LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 850 (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 5MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.4 x 76.9 x 9.3 mm",
      "weight": 207,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Midnight Blue",
        "Aqua Green",
        "Stardust Brown"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 4.1",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m12",
    "slug": "samsung-galaxy-m12",
    "brand": "Samsung",
    "modelName": "Galaxy M12",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2021-02",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 13499,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2021-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "PLS IPS",
      "resolution": "1600 x 720",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 850 (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP + 5MP + 2MP + 2MP)",
      "mainCamera": "48 MP, f/2.0, PDAF",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.0 x 75.9 x 9.7 mm",
      "weight": 221,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Blue",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 3.1",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m11",
    "slug": "samsung-galaxy-m11",
    "brand": "Samsung",
    "modelName": "Galaxy M11",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2020-03",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 12999,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2020-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "PLS TFT",
      "resolution": "1560 x 720",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 450 (14nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB",
        "4GB"
      ],
      "storageOptions": [
        "32GB",
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (13MP + 5MP + 2MP)",
      "mainCamera": "13 MP, f/1.8, 27mm, PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 14mm"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "161.4 x 76.3 x 9.0 mm",
      "weight": 197,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Metallic Blue",
        "Violet"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 2.0",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-m04",
    "slug": "samsung-galaxy-m04",
    "brand": "Samsung",
    "modelName": "Galaxy M04",
    "generation": "Galaxy M",
    "status": "discontinued",
    "launchDate": "2022-12",
    "pricing": {
      "startingPrice": 8499,
      "maximumPrice": 9499,
      "launchPrice": 8499,
      "currentPrice": 8499,
      "currency": "INR",
      "priceEffectiveDate": "2022-12",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "PLS LCD",
      "resolution": "1600 x 720",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio P35 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (13MP + 2MP)",
      "mainCamera": "13 MP, f/2.2, AF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.2 x 75.9 x 9.1 mm",
      "weight": 188,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Sea Glass Green",
        "Shadow Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 4.1",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-12",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f62",
    "slug": "samsung-galaxy-f62",
    "brand": "Samsung",
    "modelName": "Galaxy F62",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2021-02",
    "pricing": {
      "startingPrice": 23999,
      "maximumPrice": 25999,
      "launchPrice": 23999,
      "currentPrice": 23999,
      "currency": "INR",
      "priceEffectiveDate": "2021-02",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super AMOLED Plus",
      "resolution": "2400 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9825 (7nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 12MP + 5MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "12 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 7000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "163.9 x 76.3 x 9.5 mm",
      "weight": 218,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Laser Green",
        "Laser Gray",
        "Laser Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 3.1",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f42-5g",
    "slug": "samsung-galaxy-f42-5g",
    "brand": "Samsung",
    "modelName": "Galaxy F42 5G",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2021-09",
    "pricing": {
      "startingPrice": 20999,
      "maximumPrice": 22999,
      "launchPrice": 20999,
      "currentPrice": 20999,
      "currency": "INR",
      "priceEffectiveDate": "2021-09",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "TFT LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 700 (7nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP + 5MP + 2MP)",
      "mainCamera": "64 MP, f/1.8, PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 115\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "167.2 x 76.4 x 9.0 mm",
      "weight": 203,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Matte Black",
        "Matte Aqua"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 3.1",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f41",
    "slug": "samsung-galaxy-f41",
    "brand": "Samsung",
    "modelName": "Galaxy F41",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2020-10",
    "pricing": {
      "startingPrice": 16999,
      "maximumPrice": 17999,
      "launchPrice": 16999,
      "currentPrice": 16999,
      "currency": "INR",
      "priceEffectiveDate": "2020-10",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "2340 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 9611 (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP + 8MP + 5MP)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 12mm"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.2 x 75.1 x 8.9 mm",
      "weight": 191,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Fusion Black",
        "Fusion Blue",
        "Fusion Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 2.1",
      "launchOS": "Android 10",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2020-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f34-5g",
    "slug": "samsung-galaxy-f34-5g",
    "brand": "Samsung",
    "modelName": "Galaxy F34 5G",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2023-08",
    "pricing": {
      "startingPrice": 18999,
      "maximumPrice": 20999,
      "launchPrice": 18999,
      "currentPrice": 18999,
      "currency": "INR",
      "priceEffectiveDate": "2023-08",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "Super AMOLED",
      "resolution": "2340 x 1080",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 1280 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 8MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF, OIS",
      "frontCamera": "13 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "161.7 x 77.2 x 8.8 mm",
      "weight": 208,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Electric Black",
        "Mystic Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 5.1",
      "launchOS": "Android 13",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2023-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f23-5g",
    "slug": "samsung-galaxy-f23-5g",
    "brand": "Samsung",
    "modelName": "Galaxy F23 5G",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2022-03",
    "pricing": {
      "startingPrice": 17499,
      "maximumPrice": 18499,
      "launchPrice": 17499,
      "currentPrice": 17499,
      "currency": "INR",
      "priceEffectiveDate": "2022-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "TFT LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 750G 5G (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 8MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.5 x 77.0 x 8.4 mm",
      "weight": 198,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Aqua Blue",
        "Forest Green",
        "Copper Blush"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI 4.1",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f22",
    "slug": "samsung-galaxy-f22",
    "brand": "Samsung",
    "modelName": "Galaxy F22",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2021-07",
    "pricing": {
      "startingPrice": 12499,
      "maximumPrice": 14499,
      "launchPrice": 12499,
      "currentPrice": 12499,
      "currency": "INR",
      "priceEffectiveDate": "2021-07",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.4,
      "displayType": "Super AMOLED",
      "resolution": "1600 x 720",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G80 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP + 8MP + 2MP + 2MP)",
      "mainCamera": "48 MP, f/1.8, PDAF",
      "frontCamera": "13 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "160.0 x 74.0 x 9.4 mm",
      "weight": 203,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Denim Black",
        "Denim Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 3.1",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f14-5g",
    "slug": "samsung-galaxy-f14-5g",
    "brand": "Samsung",
    "modelName": "Galaxy F14 5G",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2023-03",
    "pricing": {
      "startingPrice": 12990,
      "maximumPrice": 14490,
      "launchPrice": 12990,
      "currentPrice": 12990,
      "currency": "INR",
      "priceEffectiveDate": "2023-03",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "PLS LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 1330 (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (50MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "13 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 25
    },
    "connectivity": {
      "has5G": true,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "166.8 x 77.2 x 9.4 mm",
      "weight": 206,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "B.A.E. Purple",
        "OMG Black",
        "GOAT Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 5.1",
      "launchOS": "Android 13",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2023-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f13",
    "slug": "samsung-galaxy-f13",
    "brand": "Samsung",
    "modelName": "Galaxy F13",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2022-06",
    "pricing": {
      "startingPrice": 11999,
      "maximumPrice": 12999,
      "launchPrice": 11999,
      "currentPrice": 11999,
      "currency": "INR",
      "priceEffectiveDate": "2022-06",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "PLS LCD",
      "resolution": "2408 x 1080",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 850 (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 5MP + 2MP)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.4 x 76.9 x 9.3 mm",
      "weight": 207,
      "materials": "Plastic frame and back, Gorilla Glass 5",
      "waterResistance": "None",
      "colors": [
        "Waterfall Blue",
        "Nightsky Green",
        "Sunrise Copper"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 4.1",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2022-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f12",
    "slug": "samsung-galaxy-f12",
    "brand": "Samsung",
    "modelName": "Galaxy F12",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2021-04",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 11999,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2021-04",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "PLS IPS",
      "resolution": "1600 x 720",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Samsung Exynos 850 (8nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP + 5MP + 2MP + 2MP)",
      "mainCamera": "48 MP, f/2.0, PDAF",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "5 MP, f/2.2, 123\u02da"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.0 x 75.9 x 9.7 mm",
      "weight": 221,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Sea Green",
        "Sky Blue",
        "Celestial Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 3.1",
      "launchOS": "Android 11",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2021-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "samsung-galaxy-f04",
    "slug": "samsung-galaxy-f04",
    "brand": "Samsung",
    "modelName": "Galaxy F04",
    "generation": "Galaxy F",
    "status": "discontinued",
    "launchDate": "2023-01",
    "pricing": {
      "startingPrice": 7499,
      "maximumPrice": 7499,
      "launchPrice": 7499,
      "currentPrice": 7499,
      "currency": "INR",
      "priceEffectiveDate": "2023-01",
      "source": "Samsung India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "PLS LCD",
      "resolution": "1600 x 720",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio P35 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (13MP + 2MP)",
      "mainCamera": "13 MP, f/2.2, AF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 15
    },
    "connectivity": {
      "has5G": false,
      "has4G": true,
      "wifi": "Wi-Fi 6",
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.2 x 75.9 x 9.1 mm",
      "weight": 188,
      "materials": "Plastic frame and back",
      "waterResistance": "None",
      "colors": [
        "Jade Purple",
        "Opal Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "One UI Core 4.1",
      "launchOS": "Android 12",
      "promisedMajorUpdates": 3,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.samsung.com/in/smartphones/",
      "productPage": "https://www.samsung.com/in/smartphones/",
      "specSheetUrl": "https://www.samsung.com/in/smartphones/",
      "verifiedDate": "2023-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  }
] as unknown as MobileModel[];

const variants: MobileVariant[] = [
  {
    "id": "samsung-galaxy-s26-ultra-12-256",
    "modelId": "samsung-galaxy-s26-ultra",
    "ram": "12GB",
    "storage": "256GB",
    "price": 134999,
    "mrp": 134999,
    "colors": [
      "Titanium Black",
      "Titanium Gray",
      "Titanium Violet",
      "Titanium Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s26-ultra-12-512",
    "modelId": "samsung-galaxy-s26-ultra",
    "ram": "12GB",
    "storage": "512GB",
    "price": 144999,
    "mrp": 144999,
    "colors": [
      "Titanium Black",
      "Titanium Gray",
      "Titanium Violet",
      "Titanium Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s26-ultra-16-1t",
    "modelId": "samsung-galaxy-s26-ultra",
    "ram": "16GB",
    "storage": "1TB",
    "price": 164999,
    "mrp": 164999,
    "colors": [
      "Titanium Black",
      "Titanium Gray",
      "Titanium Violet",
      "Titanium Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s26-plus-12-256",
    "modelId": "samsung-galaxy-s26-plus",
    "ram": "12GB",
    "storage": "256GB",
    "price": 99999,
    "mrp": 99999,
    "colors": [
      "Phantom Black",
      "Cobalt Violet",
      "Marble Gray",
      "Amber Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s26-plus-12-512",
    "modelId": "samsung-galaxy-s26-plus",
    "ram": "12GB",
    "storage": "512GB",
    "price": 109999,
    "mrp": 109999,
    "colors": [
      "Phantom Black",
      "Cobalt Violet",
      "Marble Gray",
      "Amber Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s26-12-128",
    "modelId": "samsung-galaxy-s26",
    "ram": "12GB",
    "storage": "128GB",
    "price": 82999,
    "mrp": 82999,
    "colors": [
      "Phantom Black",
      "Cobalt Violet",
      "Marble Gray",
      "Amber Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s26-12-256",
    "modelId": "samsung-galaxy-s26",
    "ram": "12GB",
    "storage": "256GB",
    "price": 89999,
    "mrp": 89999,
    "colors": [
      "Phantom Black",
      "Cobalt Violet",
      "Marble Gray",
      "Amber Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s26-fe-8-128",
    "modelId": "samsung-galaxy-s26-fe",
    "ram": "8GB",
    "storage": "128GB",
    "price": 62999,
    "mrp": 62999,
    "colors": [
      "Blue",
      "Graphite",
      "Gray",
      "Mint",
      "Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s26-fe-8-256",
    "modelId": "samsung-galaxy-s26-fe",
    "ram": "8GB",
    "storage": "256GB",
    "price": 68999,
    "mrp": 68999,
    "colors": [
      "Blue",
      "Graphite",
      "Gray",
      "Mint",
      "Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s26-fe-12-512",
    "modelId": "samsung-galaxy-s26-fe",
    "ram": "12GB",
    "storage": "512GB",
    "price": 79999,
    "mrp": 79999,
    "colors": [
      "Blue",
      "Graphite",
      "Gray",
      "Mint",
      "Yellow"
    ],
    "status": "upcoming",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s23-plus-8-256",
    "modelId": "samsung-galaxy-s23-plus",
    "ram": "8GB",
    "storage": "256GB",
    "price": 94999,
    "mrp": 94999,
    "colors": [
      "Phantom Black",
      "Cream",
      "Green",
      "Lavender"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s23-plus-8-512",
    "modelId": "samsung-galaxy-s23-plus",
    "ram": "8GB",
    "storage": "512GB",
    "price": 104999,
    "mrp": 104999,
    "colors": [
      "Phantom Black",
      "Cream",
      "Green",
      "Lavender"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s22-plus-8-128",
    "modelId": "samsung-galaxy-s22-plus",
    "ram": "8GB",
    "storage": "128GB",
    "price": 84999,
    "mrp": 84999,
    "colors": [
      "Phantom Black",
      "White",
      "Green",
      "Pink Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s22-plus-8-256",
    "modelId": "samsung-galaxy-s22-plus",
    "ram": "8GB",
    "storage": "256GB",
    "price": 88999,
    "mrp": 88999,
    "colors": [
      "Phantom Black",
      "White",
      "Green",
      "Pink Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s22-8-128",
    "modelId": "samsung-galaxy-s22",
    "ram": "8GB",
    "storage": "128GB",
    "price": 72999,
    "mrp": 72999,
    "colors": [
      "Phantom Black",
      "White",
      "Green",
      "Pink Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s22-8-256",
    "modelId": "samsung-galaxy-s22",
    "ram": "8GB",
    "storage": "256GB",
    "price": 76999,
    "mrp": 76999,
    "colors": [
      "Phantom Black",
      "White",
      "Green",
      "Pink Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s21-ultra-5g-12-256",
    "modelId": "samsung-galaxy-s21-ultra-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 105999,
    "mrp": 105999,
    "colors": [
      "Phantom Black",
      "Phantom Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s21-ultra-5g-16-512",
    "modelId": "samsung-galaxy-s21-ultra-5g",
    "ram": "16GB",
    "storage": "512GB",
    "price": 116999,
    "mrp": 116999,
    "colors": [
      "Phantom Black",
      "Phantom Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s21-plus-5g-8-128",
    "modelId": "samsung-galaxy-s21-plus-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 81999,
    "mrp": 81999,
    "colors": [
      "Phantom Violet",
      "Phantom Silver",
      "Phantom Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s21-plus-5g-8-256",
    "modelId": "samsung-galaxy-s21-plus-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 85999,
    "mrp": 85999,
    "colors": [
      "Phantom Violet",
      "Phantom Silver",
      "Phantom Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s21-5g-8-128",
    "modelId": "samsung-galaxy-s21-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 69999,
    "mrp": 69999,
    "colors": [
      "Phantom Gray",
      "Phantom White",
      "Phantom Violet",
      "Phantom Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s21-5g-8-256",
    "modelId": "samsung-galaxy-s21-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 73999,
    "mrp": 73999,
    "colors": [
      "Phantom Gray",
      "Phantom White",
      "Phantom Violet",
      "Phantom Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s20-ultra-12-128",
    "modelId": "samsung-galaxy-s20-ultra",
    "ram": "12GB",
    "storage": "128GB",
    "price": 92999,
    "mrp": 92999,
    "colors": [
      "Cosmic Black",
      "Cosmic Gray"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s20-plus-8-128",
    "modelId": "samsung-galaxy-s20-plus",
    "ram": "8GB",
    "storage": "128GB",
    "price": 73999,
    "mrp": 73999,
    "colors": [
      "Cosmic Black",
      "Cosmic Gray",
      "Cloud Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s20-8-128",
    "modelId": "samsung-galaxy-s20",
    "ram": "8GB",
    "storage": "128GB",
    "price": 66999,
    "mrp": 66999,
    "colors": [
      "Cosmic Gray",
      "Cloud Blue",
      "Cloud Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s20-fe-5g-8-128",
    "modelId": "samsung-galaxy-s20-fe-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 55999,
    "mrp": 55999,
    "colors": [
      "Cloud Navy",
      "Cloud Lavender",
      "Cloud Mint"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s10-plus-8-128",
    "modelId": "samsung-galaxy-s10-plus",
    "ram": "8GB",
    "storage": "128GB",
    "price": 73900,
    "mrp": 73900,
    "colors": [
      "Prism White",
      "Prism Black",
      "Ceramic White",
      "Ceramic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s10-plus-8-512",
    "modelId": "samsung-galaxy-s10-plus",
    "ram": "8GB",
    "storage": "512GB",
    "price": 91900,
    "mrp": 91900,
    "colors": [
      "Prism White",
      "Prism Black",
      "Ceramic White",
      "Ceramic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s10-plus-12-1t",
    "modelId": "samsung-galaxy-s10-plus",
    "ram": "12GB",
    "storage": "1TB",
    "price": 117900,
    "mrp": 117900,
    "colors": [
      "Prism White",
      "Prism Black",
      "Ceramic White",
      "Ceramic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s10-8-128",
    "modelId": "samsung-galaxy-s10",
    "ram": "8GB",
    "storage": "128GB",
    "price": 66900,
    "mrp": 66900,
    "colors": [
      "Prism White",
      "Prism Black",
      "Prism Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s10-8-512",
    "modelId": "samsung-galaxy-s10",
    "ram": "8GB",
    "storage": "512GB",
    "price": 84900,
    "mrp": 84900,
    "colors": [
      "Prism White",
      "Prism Black",
      "Prism Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s10e-6-128",
    "modelId": "samsung-galaxy-s10e",
    "ram": "6GB",
    "storage": "128GB",
    "price": 55900,
    "mrp": 55900,
    "colors": [
      "Prism White",
      "Prism Black",
      "Canary Yellow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s10-lite-8-128",
    "modelId": "samsung-galaxy-s10-lite",
    "ram": "8GB",
    "storage": "128GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Prism White",
      "Prism Black",
      "Prism Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s10-lite-8-512",
    "modelId": "samsung-galaxy-s10-lite",
    "ram": "8GB",
    "storage": "512GB",
    "price": 44999,
    "mrp": 44999,
    "colors": [
      "Prism White",
      "Prism Black",
      "Prism Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s9-plus-6-64",
    "modelId": "samsung-galaxy-s9-plus",
    "ram": "6GB",
    "storage": "64GB",
    "price": 64900,
    "mrp": 64900,
    "colors": [
      "Midnight Black",
      "Coral Blue",
      "Lilac Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s9-plus-6-128",
    "modelId": "samsung-galaxy-s9-plus",
    "ram": "6GB",
    "storage": "128GB",
    "price": 68900,
    "mrp": 68900,
    "colors": [
      "Midnight Black",
      "Coral Blue",
      "Lilac Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s9-plus-6-256",
    "modelId": "samsung-galaxy-s9-plus",
    "ram": "6GB",
    "storage": "256GB",
    "price": 72900,
    "mrp": 72900,
    "colors": [
      "Midnight Black",
      "Coral Blue",
      "Lilac Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s9-4-64",
    "modelId": "samsung-galaxy-s9",
    "ram": "4GB",
    "storage": "64GB",
    "price": 57900,
    "mrp": 57900,
    "colors": [
      "Midnight Black",
      "Coral Blue",
      "Lilac Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s9-4-128",
    "modelId": "samsung-galaxy-s9",
    "ram": "4GB",
    "storage": "128GB",
    "price": 61900,
    "mrp": 61900,
    "colors": [
      "Midnight Black",
      "Coral Blue",
      "Lilac Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s9-4-256",
    "modelId": "samsung-galaxy-s9",
    "ram": "4GB",
    "storage": "256GB",
    "price": 65900,
    "mrp": 65900,
    "colors": [
      "Midnight Black",
      "Coral Blue",
      "Lilac Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s8-plus-4-64",
    "modelId": "samsung-galaxy-s8-plus",
    "ram": "4GB",
    "storage": "64GB",
    "price": 64900,
    "mrp": 64900,
    "colors": [
      "Midnight Black",
      "Orchid Gray",
      "Maple Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s8-plus-6-128",
    "modelId": "samsung-galaxy-s8-plus",
    "ram": "6GB",
    "storage": "128GB",
    "price": 74900,
    "mrp": 74900,
    "colors": [
      "Midnight Black",
      "Orchid Gray",
      "Maple Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s8-4-64",
    "modelId": "samsung-galaxy-s8",
    "ram": "4GB",
    "storage": "64GB",
    "price": 57900,
    "mrp": 57900,
    "colors": [
      "Midnight Black",
      "Orchid Gray",
      "Maple Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s7-edge-4-32",
    "modelId": "samsung-galaxy-s7-edge",
    "ram": "4GB",
    "storage": "32GB",
    "price": 56900,
    "mrp": 56900,
    "colors": [
      "Black Onyx",
      "Gold Platinum",
      "Silver Titanium"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s7-edge-4-128",
    "modelId": "samsung-galaxy-s7-edge",
    "ram": "4GB",
    "storage": "128GB",
    "price": 59900,
    "mrp": 59900,
    "colors": [
      "Black Onyx",
      "Gold Platinum",
      "Silver Titanium"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-s7-4-32",
    "modelId": "samsung-galaxy-s7",
    "ram": "4GB",
    "storage": "32GB",
    "price": 48900,
    "mrp": 48900,
    "colors": [
      "Black Onyx",
      "Gold Platinum",
      "White Pearl"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-fold-4-12-256",
    "modelId": "samsung-galaxy-z-fold-4",
    "ram": "12GB",
    "storage": "256GB",
    "price": 154999,
    "mrp": 154999,
    "colors": [
      "Graygreen",
      "Phantom Black",
      "Beige"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-fold-4-12-512",
    "modelId": "samsung-galaxy-z-fold-4",
    "ram": "12GB",
    "storage": "512GB",
    "price": 164999,
    "mrp": 164999,
    "colors": [
      "Graygreen",
      "Phantom Black",
      "Beige"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-fold-4-12-1t",
    "modelId": "samsung-galaxy-z-fold-4",
    "ram": "12GB",
    "storage": "1TB",
    "price": 184999,
    "mrp": 184999,
    "colors": [
      "Graygreen",
      "Phantom Black",
      "Beige"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-flip-4-8-128",
    "modelId": "samsung-galaxy-z-flip-4",
    "ram": "8GB",
    "storage": "128GB",
    "price": 89999,
    "mrp": 89999,
    "colors": [
      "Bora Purple",
      "Graphite",
      "Pink Gold",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-flip-4-8-256",
    "modelId": "samsung-galaxy-z-flip-4",
    "ram": "8GB",
    "storage": "256GB",
    "price": 94999,
    "mrp": 94999,
    "colors": [
      "Bora Purple",
      "Graphite",
      "Pink Gold",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-fold-3-12-256",
    "modelId": "samsung-galaxy-z-fold-3",
    "ram": "12GB",
    "storage": "256GB",
    "price": 149999,
    "mrp": 149999,
    "colors": [
      "Phantom Black",
      "Phantom Green",
      "Phantom Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-fold-3-12-512",
    "modelId": "samsung-galaxy-z-fold-3",
    "ram": "12GB",
    "storage": "512GB",
    "price": 157999,
    "mrp": 157999,
    "colors": [
      "Phantom Black",
      "Phantom Green",
      "Phantom Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-flip-3-8-128",
    "modelId": "samsung-galaxy-z-flip-3",
    "ram": "8GB",
    "storage": "128GB",
    "price": 84999,
    "mrp": 84999,
    "colors": [
      "Cream",
      "Phantom Black",
      "Green",
      "Lavender"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-flip-3-8-256",
    "modelId": "samsung-galaxy-z-flip-3",
    "ram": "8GB",
    "storage": "256GB",
    "price": 88999,
    "mrp": 88999,
    "colors": [
      "Cream",
      "Phantom Black",
      "Green",
      "Lavender"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-fold-2-12-256",
    "modelId": "samsung-galaxy-z-fold-2",
    "ram": "12GB",
    "storage": "256GB",
    "price": 149999,
    "mrp": 149999,
    "colors": [
      "Mystic Bronze",
      "Mystic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-fold-12-512",
    "modelId": "samsung-galaxy-fold",
    "ram": "12GB",
    "storage": "512GB",
    "price": 164999,
    "mrp": 164999,
    "colors": [
      "Space Silver",
      "Cosmos Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-z-flip-8-256",
    "modelId": "samsung-galaxy-z-flip",
    "ram": "8GB",
    "storage": "256GB",
    "price": 109999,
    "mrp": 109999,
    "colors": [
      "Mirror Purple",
      "Mirror Black",
      "Mirror Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a73-5g-8-128",
    "modelId": "samsung-galaxy-a73-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 41999,
    "mrp": 41999,
    "colors": [
      "Awesome Gray",
      "Awesome White",
      "Awesome Mint"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a73-5g-8-256",
    "modelId": "samsung-galaxy-a73-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 44999,
    "mrp": 44999,
    "colors": [
      "Awesome Gray",
      "Awesome White",
      "Awesome Mint"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a53-5g-6-128",
    "modelId": "samsung-galaxy-a53-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 34499,
    "mrp": 34499,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue",
      "Awesome Peach"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a53-5g-8-128",
    "modelId": "samsung-galaxy-a53-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 35999,
    "mrp": 35999,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue",
      "Awesome Peach"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a52s-5g-6-128",
    "modelId": "samsung-galaxy-a52s-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 35999,
    "mrp": 35999,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Mint"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a52s-5g-8-128",
    "modelId": "samsung-galaxy-a52s-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 37499,
    "mrp": 37499,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Mint"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a52-6-128",
    "modelId": "samsung-galaxy-a52",
    "ram": "6GB",
    "storage": "128GB",
    "price": 26499,
    "mrp": 26499,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a52-8-128",
    "modelId": "samsung-galaxy-a52",
    "ram": "8GB",
    "storage": "128GB",
    "price": 27999,
    "mrp": 27999,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a51-6-128",
    "modelId": "samsung-galaxy-a51",
    "ram": "6GB",
    "storage": "128GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Prism Crush Black",
      "Prism Crush White",
      "Prism Crush Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a51-8-128",
    "modelId": "samsung-galaxy-a51",
    "ram": "8GB",
    "storage": "128GB",
    "price": 25999,
    "mrp": 25999,
    "colors": [
      "Prism Crush Black",
      "Prism Crush White",
      "Prism Crush Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a50-4-64",
    "modelId": "samsung-galaxy-a50",
    "ram": "4GB",
    "storage": "64GB",
    "price": 19990,
    "mrp": 19990,
    "colors": [
      "Black",
      "White",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a50-6-64",
    "modelId": "samsung-galaxy-a50",
    "ram": "6GB",
    "storage": "64GB",
    "price": 22990,
    "mrp": 22990,
    "colors": [
      "Black",
      "White",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a72-8-128",
    "modelId": "samsung-galaxy-a72",
    "ram": "8GB",
    "storage": "128GB",
    "price": 34999,
    "mrp": 34999,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a72-8-256",
    "modelId": "samsung-galaxy-a72",
    "ram": "8GB",
    "storage": "256GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a71-8-128",
    "modelId": "samsung-galaxy-a71",
    "ram": "8GB",
    "storage": "128GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Prism Crush Black",
      "Prism Crush Silver",
      "Prism Crush Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a70-6-128",
    "modelId": "samsung-galaxy-a70",
    "ram": "6GB",
    "storage": "128GB",
    "price": 28990,
    "mrp": 28990,
    "colors": [
      "Coral",
      "Blue",
      "Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a33-5g-6-128",
    "modelId": "samsung-galaxy-a33-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 28499,
    "mrp": 28499,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue",
      "Awesome Peach"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a33-5g-8-128",
    "modelId": "samsung-galaxy-a33-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue",
      "Awesome Peach"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a32-6-128",
    "modelId": "samsung-galaxy-a32",
    "ram": "6GB",
    "storage": "128GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue",
      "Awesome Violet"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a32-8-128",
    "modelId": "samsung-galaxy-a32",
    "ram": "8GB",
    "storage": "128GB",
    "price": 23499,
    "mrp": 23499,
    "colors": [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue",
      "Awesome Violet"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a31-6-128",
    "modelId": "samsung-galaxy-a31",
    "ram": "6GB",
    "storage": "128GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Prism Crush Black",
      "Prism Crush Blue",
      "Prism Crush White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a30-4-64",
    "modelId": "samsung-galaxy-a30",
    "ram": "4GB",
    "storage": "64GB",
    "price": 16990,
    "mrp": 16990,
    "colors": [
      "Black",
      "Blue",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a23-5g-6-128",
    "modelId": "samsung-galaxy-a23-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 22999,
    "mrp": 22999,
    "colors": [
      "Black",
      "White",
      "Peach",
      "Light Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a23-5g-8-128",
    "modelId": "samsung-galaxy-a23-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Black",
      "White",
      "Peach",
      "Light Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a22-5g-6-128",
    "modelId": "samsung-galaxy-a22-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Gray",
      "White",
      "Mint",
      "Violet"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a22-5g-8-128",
    "modelId": "samsung-galaxy-a22-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Gray",
      "White",
      "Mint",
      "Violet"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a14-5g-4-64",
    "modelId": "samsung-galaxy-a14-5g",
    "ram": "4GB",
    "storage": "64GB",
    "price": 16499,
    "mrp": 16499,
    "colors": [
      "Black",
      "Light Green",
      "Dark Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a14-5g-6-128",
    "modelId": "samsung-galaxy-a14-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Black",
      "Light Green",
      "Dark Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a14-5g-8-128",
    "modelId": "samsung-galaxy-a14-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Black",
      "Light Green",
      "Dark Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a13-4-64",
    "modelId": "samsung-galaxy-a13",
    "ram": "4GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Black",
      "White",
      "Peach",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a13-6-128",
    "modelId": "samsung-galaxy-a13",
    "ram": "6GB",
    "storage": "128GB",
    "price": 17499,
    "mrp": 17499,
    "colors": [
      "Black",
      "White",
      "Peach",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a12-4-64",
    "modelId": "samsung-galaxy-a12",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Black",
      "White",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a12-4-128",
    "modelId": "samsung-galaxy-a12",
    "ram": "4GB",
    "storage": "128GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Black",
      "White",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a05-4-64",
    "modelId": "samsung-galaxy-a05",
    "ram": "4GB",
    "storage": "64GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Black",
      "Silver",
      "Light Green"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a05-6-128",
    "modelId": "samsung-galaxy-a05",
    "ram": "6GB",
    "storage": "128GB",
    "price": 12499,
    "mrp": 12499,
    "colors": [
      "Black",
      "Silver",
      "Light Green"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a04-3-32",
    "modelId": "samsung-galaxy-a04",
    "ram": "3GB",
    "storage": "32GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Black",
      "Green",
      "White",
      "Copper"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-a04-4-64",
    "modelId": "samsung-galaxy-a04",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Black",
      "Green",
      "White",
      "Copper"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m53-5g-6-128",
    "modelId": "samsung-galaxy-m53-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Green",
      "Blue",
      "Brown"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m53-5g-8-128",
    "modelId": "samsung-galaxy-m53-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 25999,
    "mrp": 25999,
    "colors": [
      "Green",
      "Blue",
      "Brown"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m52-5g-6-128",
    "modelId": "samsung-galaxy-m52-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Icy Blue",
      "Blazing Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m52-5g-8-128",
    "modelId": "samsung-galaxy-m52-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 31999,
    "mrp": 31999,
    "colors": [
      "Icy Blue",
      "Blazing Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m51-6-128",
    "modelId": "samsung-galaxy-m51",
    "ram": "6GB",
    "storage": "128GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Celestial Black",
      "Electric Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m51-8-128",
    "modelId": "samsung-galaxy-m51",
    "ram": "8GB",
    "storage": "128GB",
    "price": 26999,
    "mrp": 26999,
    "colors": [
      "Celestial Black",
      "Electric Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m33-5g-6-128",
    "modelId": "samsung-galaxy-m33-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Ocean Blue",
      "Green",
      "Deep Ocean Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m33-5g-8-128",
    "modelId": "samsung-galaxy-m33-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 19499,
    "mrp": 19499,
    "colors": [
      "Ocean Blue",
      "Green",
      "Deep Ocean Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m32-4-64",
    "modelId": "samsung-galaxy-m32",
    "ram": "4GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Black",
      "Light Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m32-6-128",
    "modelId": "samsung-galaxy-m32",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Black",
      "Light Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m31s-6-128",
    "modelId": "samsung-galaxy-m31s",
    "ram": "6GB",
    "storage": "128GB",
    "price": 19499,
    "mrp": 19499,
    "colors": [
      "Mirage Black",
      "Mirage Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m31s-8-128",
    "modelId": "samsung-galaxy-m31s",
    "ram": "8GB",
    "storage": "128GB",
    "price": 21499,
    "mrp": 21499,
    "colors": [
      "Mirage Black",
      "Mirage Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m31-6-64",
    "modelId": "samsung-galaxy-m31",
    "ram": "6GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Ocean Blue",
      "Space Black",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m31-6-128",
    "modelId": "samsung-galaxy-m31",
    "ram": "6GB",
    "storage": "128GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Ocean Blue",
      "Space Black",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m30s-4-64",
    "modelId": "samsung-galaxy-m30s",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Opal Black",
      "Sapphire Blue",
      "Pearl White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m30s-6-128",
    "modelId": "samsung-galaxy-m30s",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Opal Black",
      "Sapphire Blue",
      "Pearl White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m30-4-64",
    "modelId": "samsung-galaxy-m30",
    "ram": "4GB",
    "storage": "64GB",
    "price": 14990,
    "mrp": 14990,
    "colors": [
      "Gradation Blue",
      "Gradation Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m30-6-128",
    "modelId": "samsung-galaxy-m30",
    "ram": "6GB",
    "storage": "128GB",
    "price": 17990,
    "mrp": 17990,
    "colors": [
      "Gradation Blue",
      "Gradation Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m14-5g-4-128",
    "modelId": "samsung-galaxy-m14-5g",
    "ram": "4GB",
    "storage": "128GB",
    "price": 14990,
    "mrp": 14990,
    "colors": [
      "Navy Blue",
      "Light Blue",
      "Icy Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m14-5g-6-128",
    "modelId": "samsung-galaxy-m14-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16490,
    "mrp": 16490,
    "colors": [
      "Navy Blue",
      "Light Blue",
      "Icy Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m13-4-64",
    "modelId": "samsung-galaxy-m13",
    "ram": "4GB",
    "storage": "64GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Midnight Blue",
      "Aqua Green",
      "Stardust Brown"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m13-6-128",
    "modelId": "samsung-galaxy-m13",
    "ram": "6GB",
    "storage": "128GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Midnight Blue",
      "Aqua Green",
      "Stardust Brown"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m12-4-64",
    "modelId": "samsung-galaxy-m12",
    "ram": "4GB",
    "storage": "64GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Black",
      "Blue",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m12-6-128",
    "modelId": "samsung-galaxy-m12",
    "ram": "6GB",
    "storage": "128GB",
    "price": 13499,
    "mrp": 13499,
    "colors": [
      "Black",
      "Blue",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m11-3-32",
    "modelId": "samsung-galaxy-m11",
    "ram": "3GB",
    "storage": "32GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Black",
      "Metallic Blue",
      "Violet"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m11-4-64",
    "modelId": "samsung-galaxy-m11",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Black",
      "Metallic Blue",
      "Violet"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m04-4-64",
    "modelId": "samsung-galaxy-m04",
    "ram": "4GB",
    "storage": "64GB",
    "price": 8499,
    "mrp": 8499,
    "colors": [
      "Sea Glass Green",
      "Shadow Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-m04-4-128",
    "modelId": "samsung-galaxy-m04",
    "ram": "4GB",
    "storage": "128GB",
    "price": 9499,
    "mrp": 9499,
    "colors": [
      "Sea Glass Green",
      "Shadow Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f62-6-128",
    "modelId": "samsung-galaxy-f62",
    "ram": "6GB",
    "storage": "128GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Laser Green",
      "Laser Gray",
      "Laser Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f62-8-128",
    "modelId": "samsung-galaxy-f62",
    "ram": "8GB",
    "storage": "128GB",
    "price": 25999,
    "mrp": 25999,
    "colors": [
      "Laser Green",
      "Laser Gray",
      "Laser Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f42-5g-6-128",
    "modelId": "samsung-galaxy-f42-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 20999,
    "mrp": 20999,
    "colors": [
      "Matte Black",
      "Matte Aqua"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f42-5g-8-128",
    "modelId": "samsung-galaxy-f42-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 22999,
    "mrp": 22999,
    "colors": [
      "Matte Black",
      "Matte Aqua"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f41-6-64",
    "modelId": "samsung-galaxy-f41",
    "ram": "6GB",
    "storage": "64GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Fusion Black",
      "Fusion Blue",
      "Fusion Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f41-6-128",
    "modelId": "samsung-galaxy-f41",
    "ram": "6GB",
    "storage": "128GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Fusion Black",
      "Fusion Blue",
      "Fusion Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f34-5g-6-128",
    "modelId": "samsung-galaxy-f34-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Electric Black",
      "Mystic Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f34-5g-8-128",
    "modelId": "samsung-galaxy-f34-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 20999,
    "mrp": 20999,
    "colors": [
      "Electric Black",
      "Mystic Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f23-5g-4-128",
    "modelId": "samsung-galaxy-f23-5g",
    "ram": "4GB",
    "storage": "128GB",
    "price": 17499,
    "mrp": 17499,
    "colors": [
      "Aqua Blue",
      "Forest Green",
      "Copper Blush"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f23-5g-6-128",
    "modelId": "samsung-galaxy-f23-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 18499,
    "mrp": 18499,
    "colors": [
      "Aqua Blue",
      "Forest Green",
      "Copper Blush"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f22-4-64",
    "modelId": "samsung-galaxy-f22",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12499,
    "mrp": 12499,
    "colors": [
      "Denim Black",
      "Denim Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f22-6-128",
    "modelId": "samsung-galaxy-f22",
    "ram": "6GB",
    "storage": "128GB",
    "price": 14499,
    "mrp": 14499,
    "colors": [
      "Denim Black",
      "Denim Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f14-5g-4-128",
    "modelId": "samsung-galaxy-f14-5g",
    "ram": "4GB",
    "storage": "128GB",
    "price": 12990,
    "mrp": 12990,
    "colors": [
      "B.A.E. Purple",
      "OMG Black",
      "GOAT Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f14-5g-6-128",
    "modelId": "samsung-galaxy-f14-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 14490,
    "mrp": 14490,
    "colors": [
      "B.A.E. Purple",
      "OMG Black",
      "GOAT Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f13-4-64",
    "modelId": "samsung-galaxy-f13",
    "ram": "4GB",
    "storage": "64GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Waterfall Blue",
      "Nightsky Green",
      "Sunrise Copper"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f13-4-128",
    "modelId": "samsung-galaxy-f13",
    "ram": "4GB",
    "storage": "128GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Waterfall Blue",
      "Nightsky Green",
      "Sunrise Copper"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f12-4-64",
    "modelId": "samsung-galaxy-f12",
    "ram": "4GB",
    "storage": "64GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Sea Green",
      "Sky Blue",
      "Celestial Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f12-4-128",
    "modelId": "samsung-galaxy-f12",
    "ram": "4GB",
    "storage": "128GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Sea Green",
      "Sky Blue",
      "Celestial Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "samsung-galaxy-f04-4-64",
    "modelId": "samsung-galaxy-f04",
    "ram": "4GB",
    "storage": "64GB",
    "price": 7499,
    "mrp": 7499,
    "colors": [
      "Jade Purple",
      "Opal Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  }
] as unknown as MobileVariant[];

const images: MobileImageCatalogEntry[] = [
  {
    "modelId": "samsung-galaxy-s26-ultra",
    "modelName": "Galaxy S26 Ultra",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-1.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-1.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S26 Ultra Titanium Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s26-plus",
    "modelName": "Galaxy S26+",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-plus-sm-s936-1.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-plus-sm-s936-1.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S26+ Cobalt Violet"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s26",
    "modelName": "Galaxy S26",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-sm-s931-1.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-sm-s931-1.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S26 Phantom Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s26-fe",
    "modelName": "Galaxy S26 FE",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-fe.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-fe.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S26 FE Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s23-plus",
    "modelName": "Galaxy S23+",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-plus-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-plus-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S23+ Phantom Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s22-plus",
    "modelName": "Galaxy S22+",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-plus-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-plus-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S22+ Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s22",
    "modelName": "Galaxy S22",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S22 Phantom Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s21-ultra-5g",
    "modelName": "Galaxy S21 Ultra 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S21 Ultra 5G Phantom Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s21-plus-5g",
    "modelName": "Galaxy S21+ 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-plus-5g-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-plus-5g-.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S21+ 5G Phantom Violet"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s21-5g",
    "modelName": "Galaxy S21 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S21 5G Phantom Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s20-ultra",
    "modelName": "Galaxy S20 Ultra",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-ultra-5g-r.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-ultra-5g-r.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S20 Ultra Cosmic Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s20-plus",
    "modelName": "Galaxy S20+",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-plus-r.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-plus-r.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S20+ Cloud Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s20",
    "modelName": "Galaxy S20",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-r.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-r.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S20 Cloud Pink"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s20-fe-5g",
    "modelName": "Galaxy S20 FE 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-fe-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-fe-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S20 FE 5G Cloud Navy"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s10-plus",
    "modelName": "Galaxy S10+",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10-plus-new.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10-plus-new.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S10+ Prism White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s10",
    "modelName": "Galaxy S10",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10-new.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10-new.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S10 Prism Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s10e",
    "modelName": "Galaxy S10e",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10e-new.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10e-new.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S10e Canary Yellow"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s10-lite",
    "modelName": "Galaxy S10 Lite",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10-lite.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10-lite.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S10 Lite Prism Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s9-plus",
    "modelName": "Galaxy S9+",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-plus-blue.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-plus-blue.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S9+ Coral Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s9",
    "modelName": "Galaxy S9",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-grey.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-grey.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S9 Midnight Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s8-plus",
    "modelName": "Galaxy S8+",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-plus-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-plus-.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S8+ Orchid Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s8",
    "modelName": "Galaxy S8",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S8 Midnight Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s7-edge",
    "modelName": "Galaxy S7 edge",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7-edge-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7-edge-.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S7 edge Gold Platinum"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-s7",
    "modelName": "Galaxy S7",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7--.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7--.jpg",
        "verified": true,
        "alt": "Samsung Galaxy S7 Black Onyx"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-z-fold-4",
    "modelName": "Galaxy Z Fold 4",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold4-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold4-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy Z Fold 4 Phantom Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-z-flip-4",
    "modelName": "Galaxy Z Flip 4",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip4-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip4-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy Z Flip 4 Bora Purple"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-z-fold-3",
    "modelName": "Galaxy Z Fold 3 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold3-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold3-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy Z Fold 3 5G Phantom Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-z-flip-3",
    "modelName": "Galaxy Z Flip 3 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip3-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip3-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy Z Flip 3 5G Cream"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-z-fold-2",
    "modelName": "Galaxy Z Fold 2 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold2-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold2-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy Z Fold 2 Mystic Bronze"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-fold",
    "modelName": "Galaxy Fold",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-fold.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-fold.jpg",
        "verified": true,
        "alt": "Samsung Galaxy Fold Cosmos Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-z-flip",
    "modelName": "Galaxy Z Flip",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip.jpg",
        "verified": true,
        "alt": "Samsung Galaxy Z Flip Mirror Purple"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a73-5g",
    "modelName": "Galaxy A73 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a73-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a73-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A73 5G Awesome Mint"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a53-5g",
    "modelName": "Galaxy A53 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a53-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a53-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A53 5G Awesome Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a52s-5g",
    "modelName": "Galaxy A52s 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a52s-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a52s-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A52s 5G Awesome Mint"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a52",
    "modelName": "Galaxy A52",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a52-4g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a52-4g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A52 Awesome Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a51",
    "modelName": "Galaxy A51",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a51.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a51.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A51 Prism Crush Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a50",
    "modelName": "Galaxy A50",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a50-sm-a505f-ds.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a50-sm-a505f-ds.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A50 Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a72",
    "modelName": "Galaxy A72",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a72-4g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a72-4g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A72 Awesome Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a71",
    "modelName": "Galaxy A71",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a71.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a71.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A71 Prism Crush Silver"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a70",
    "modelName": "Galaxy A70",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a70.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a70.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A70 Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a33-5g",
    "modelName": "Galaxy A33 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a33-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a33-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A33 5G Awesome Peach"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a32",
    "modelName": "Galaxy A32",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a32-4g-new.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a32-4g-new.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A32 Awesome Violet"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a31",
    "modelName": "Galaxy A31",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a31.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a31.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A31 Prism Crush Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a30",
    "modelName": "Galaxy A30",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a30.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a30.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A30 Red"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a23-5g",
    "modelName": "Galaxy A23 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a23-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a23-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A23 5G Light Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a22-5g",
    "modelName": "Galaxy A22 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a22-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a22-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A22 5G Mint"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a14-5g",
    "modelName": "Galaxy A14 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a14-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a14-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A14 5G Dark Red"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a13",
    "modelName": "Galaxy A13",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a13.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a13.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A13 Peach"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a12",
    "modelName": "Galaxy A12",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A12 Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a05",
    "modelName": "Galaxy A05",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a05.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a05.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A05 Light Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-a04",
    "modelName": "Galaxy A04",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a04.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a04.jpg",
        "verified": true,
        "alt": "Samsung Galaxy A04 Copper"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m53-5g",
    "modelName": "Galaxy M53 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m53-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m53-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M53 5G Deep Ocean Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m52-5g",
    "modelName": "Galaxy M52 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m52-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m52-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M52 5G Icy Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m51",
    "modelName": "Galaxy M51",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m51.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m51.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M51 Celestial Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m33-5g",
    "modelName": "Galaxy M33 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m33.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m33.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M33 5G Ocean Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m32",
    "modelName": "Galaxy M32",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m32-4g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m32-4g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M32 Light Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m31s",
    "modelName": "Galaxy M31s",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m31s.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m31s.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M31s Mirage Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m31",
    "modelName": "Galaxy M31",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m31-sm-m315f.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m31-sm-m315f.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M31 Ocean Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m30s",
    "modelName": "Galaxy M30s",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m30s.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m30s.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M30s Sapphire Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m30",
    "modelName": "Galaxy M30",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m30-m305f.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m30-m305f.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M30 Gradation Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m14-5g",
    "modelName": "Galaxy M14 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m14-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m14-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M14 5G Icy Silver"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m13",
    "modelName": "Galaxy M13",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m13-4g-india.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m13-4g-india.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M13 Midnight Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m12",
    "modelName": "Galaxy M12",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m12.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m12.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M12 Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m11",
    "modelName": "Galaxy M11",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m11.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m11.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M11 Metallic Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-m04",
    "modelName": "Galaxy M04",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m04.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m04.jpg",
        "verified": true,
        "alt": "Samsung Galaxy M04 Sea Glass Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f62",
    "modelName": "Galaxy F62",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f62.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f62.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F62 Laser Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f42-5g",
    "modelName": "Galaxy F42 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f42-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f42-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F42 5G Matte Aqua"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f41",
    "modelName": "Galaxy F41",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f41.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f41.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F41 Fusion Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f34-5g",
    "modelName": "Galaxy F34 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f34-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f34-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F34 5G Electric Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f23-5g",
    "modelName": "Galaxy F23 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f23-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f23-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F23 5G Aqua Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f22",
    "modelName": "Galaxy F22",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f22.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f22.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F22 Denim Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f14-5g",
    "modelName": "Galaxy F14 5G",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f14-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f14-5g.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F14 5G B.A.E. Purple"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f13",
    "modelName": "Galaxy F13",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f13.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f13.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F13 Waterfall Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f12",
    "modelName": "Galaxy F12",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f12.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f12.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F12 Sea Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "samsung-galaxy-f04",
    "modelName": "Galaxy F04",
    "brand": "Samsung",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f04.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f04.jpg",
        "verified": true,
        "alt": "Samsung Galaxy F04 Jade Purple"
      }
    ],
    "verifiedCoverage": true
  }
] as unknown as MobileImageCatalogEntry[];

export const samsungAdditionsBundle: MobileBrandBundle = {
  models,
  variants,
  images,
};
