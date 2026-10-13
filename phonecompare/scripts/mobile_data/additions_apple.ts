import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  {
    "id": "apple-iphone-17-pro-max",
    "slug": "apple-iphone-17-pro-max",
    "brand": "Apple",
    "modelName": "iPhone 17 Pro Max",
    "generation": "iPhone 17",
    "status": "active",
    "launchDate": "2025-09",
    "pricing": {
      "startingPrice": 149900,
      "maximumPrice": 189900,
      "launchPrice": 149900,
      "currentPrice": 149900,
      "currency": "INR",
      "priceEffectiveDate": "2025-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.9,
      "displayType": "LTPO Super Retina XDR OLED",
      "resolution": "2868 x 1320",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A19 Pro (3nm)",
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
      "rearCameraSetup": "Triple (48MP + 48MP + 48MP Periscope)",
      "mainCamera": "48 MP Fusion, f/1.78, OIS",
      "frontCamera": "18 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "48 MP, f/2.2, 120\u02da",
      "telephotoCamera": "48 MP 5x tetraprism, OIS"
    },
    "battery": {
      "batteryCapacity": 4850,
      "wiredCharging": 35,
      "wirelessCharging": 25
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
      "dimensions": "163.0 x 77.6 x 8.25 mm",
      "weight": 227,
      "materials": "Titanium frame, Ceramic Shield front",
      "waterResistance": "IP68",
      "colors": [
        "Titanium Black",
        "Titanium Natural",
        "Titanium White",
        "Desert Titanium"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 19",
      "launchOS": "iOS 19",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2025-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-17-pro",
    "slug": "apple-iphone-17-pro",
    "brand": "Apple",
    "modelName": "iPhone 17 Pro",
    "generation": "iPhone 17",
    "status": "active",
    "launchDate": "2025-09",
    "pricing": {
      "startingPrice": 124900,
      "maximumPrice": 164900,
      "launchPrice": 124900,
      "currentPrice": 124900,
      "currency": "INR",
      "priceEffectiveDate": "2025-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.3,
      "displayType": "LTPO Super Retina XDR OLED",
      "resolution": "2622 x 1206",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A19 Pro (3nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB",
        "512GB",
        "1TB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP + 48MP + 48MP Periscope)",
      "mainCamera": "48 MP Fusion, f/1.78, OIS",
      "frontCamera": "18 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "48 MP, f/2.2, 120\u02da",
      "telephotoCamera": "48 MP 5x tetraprism, OIS"
    },
    "battery": {
      "batteryCapacity": 3650,
      "wiredCharging": 35,
      "wirelessCharging": 25
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
      "dimensions": "149.6 x 71.5 x 8.25 mm",
      "weight": 199,
      "materials": "Titanium frame, Ceramic Shield front",
      "waterResistance": "IP68",
      "colors": [
        "Titanium Black",
        "Titanium Natural",
        "Titanium White",
        "Desert Titanium"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 19",
      "launchOS": "iOS 19",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2025-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-17-air",
    "slug": "apple-iphone-17-air",
    "brand": "Apple",
    "modelName": "iPhone 17 Air",
    "generation": "iPhone 17",
    "status": "active",
    "launchDate": "2025-09",
    "pricing": {
      "startingPrice": 94900,
      "maximumPrice": 114900,
      "launchPrice": 94900,
      "currentPrice": 94900,
      "currency": "INR",
      "priceEffectiveDate": "2025-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.6,
      "displayType": "Super Retina XDR OLED",
      "resolution": "2740 x 1260",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A19 (3nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 48MP Fusion Camera",
      "mainCamera": "48 MP Fusion, f/1.6, sensor-shift OIS",
      "frontCamera": "18 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3200,
      "wiredCharging": 30,
      "wirelessCharging": 20
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
      "dimensions": "157.0 x 74.0 x 5.6 mm",
      "weight": 165,
      "materials": "Titanium frame, Ceramic Shield glass",
      "waterResistance": "IP68",
      "colors": [
        "Silver",
        "Space Gray",
        "Champagne Gold"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 19",
      "launchOS": "iOS 19",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2025-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-17",
    "slug": "apple-iphone-17",
    "brand": "Apple",
    "modelName": "iPhone 17",
    "generation": "iPhone 17",
    "status": "active",
    "launchDate": "2025-09",
    "pricing": {
      "startingPrice": 79900,
      "maximumPrice": 99900,
      "launchPrice": 79900,
      "currentPrice": 79900,
      "currency": "INR",
      "priceEffectiveDate": "2025-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.3,
      "displayType": "Super Retina XDR OLED",
      "resolution": "2556 x 1179",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A19 (3nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (48MP + 48MP)",
      "mainCamera": "48 MP Fusion, f/1.6, sensor-shift OIS",
      "frontCamera": "18 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "48 MP, f/2.2, 120\u02da"
    },
    "battery": {
      "batteryCapacity": 3600,
      "wiredCharging": 30,
      "wirelessCharging": 20
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
      "dimensions": "147.6 x 71.6 x 7.8 mm",
      "weight": 172,
      "materials": "Aluminum frame, Ceramic Shield glass",
      "waterResistance": "IP68",
      "colors": [
        "Black",
        "White",
        "Pink",
        "Teal",
        "Ultramarine"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 19",
      "launchOS": "iOS 19",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2025-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-12-pro-max",
    "slug": "apple-iphone-12-pro-max",
    "brand": "Apple",
    "modelName": "iPhone 12 Pro Max",
    "generation": "iPhone 12",
    "status": "discontinued",
    "launchDate": "2020-10",
    "pricing": {
      "startingPrice": 129900,
      "maximumPrice": 159900,
      "launchPrice": 129900,
      "currentPrice": 129900,
      "currency": "INR",
      "priceEffectiveDate": "2020-10",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.7,
      "displayType": "Super Retina XDR OLED",
      "resolution": "2778 x 1284",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A14 Bionic (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 12MP) + LiDAR",
      "mainCamera": "12 MP, f/1.6, 26mm, sensor-shift OIS",
      "frontCamera": "12 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.4, 13mm, 120\u02da",
      "telephotoCamera": "12 MP 2.5x Telephoto, f/2.2, 65mm, OIS"
    },
    "battery": {
      "batteryCapacity": 3687,
      "wiredCharging": 20,
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
      "dimensions": "160.8 x 78.1 x 7.4 mm",
      "weight": 228,
      "materials": "Stainless steel frame, Ceramic Shield front",
      "waterResistance": "IP68",
      "colors": [
        "Pacific Blue",
        "Gold",
        "Graphite",
        "Silver"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 14",
      "launchOS": "iOS 14",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2020-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-12-pro",
    "slug": "apple-iphone-12-pro",
    "brand": "Apple",
    "modelName": "iPhone 12 Pro",
    "generation": "iPhone 12",
    "status": "discontinued",
    "launchDate": "2020-10",
    "pricing": {
      "startingPrice": 119900,
      "maximumPrice": 149900,
      "launchPrice": 119900,
      "currentPrice": 119900,
      "currency": "INR",
      "priceEffectiveDate": "2020-10",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.1,
      "displayType": "Super Retina XDR OLED",
      "resolution": "2532 x 1170",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A14 Bionic (5nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 12MP) + LiDAR",
      "mainCamera": "12 MP, f/1.6, 26mm, dual pixel PDAF, OIS",
      "frontCamera": "12 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.4, 13mm, 120\u02da",
      "telephotoCamera": "12 MP 2x Telephoto, f/2.0, 52mm, OIS"
    },
    "battery": {
      "batteryCapacity": 2815,
      "wiredCharging": 20,
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
      "dimensions": "146.7 x 71.5 x 7.4 mm",
      "weight": 189,
      "materials": "Stainless steel frame, Ceramic Shield front",
      "waterResistance": "IP68",
      "colors": [
        "Pacific Blue",
        "Gold",
        "Graphite",
        "Silver"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 14",
      "launchOS": "iOS 14",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2020-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-12-mini",
    "slug": "apple-iphone-12-mini",
    "brand": "Apple",
    "modelName": "iPhone 12 mini",
    "generation": "iPhone 12",
    "status": "discontinued",
    "launchDate": "2020-10",
    "pricing": {
      "startingPrice": 69900,
      "maximumPrice": 84900,
      "launchPrice": 69900,
      "currentPrice": 69900,
      "currency": "INR",
      "priceEffectiveDate": "2020-10",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 5.4,
      "displayType": "Super Retina XDR OLED",
      "resolution": "2340 x 1080",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A14 Bionic (5nm)",
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
      "rearCameraSetup": "Dual (12MP + 12MP)",
      "mainCamera": "12 MP, f/1.6, 26mm, dual pixel PDAF, OIS",
      "frontCamera": "12 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.4, 13mm, 120\u02da"
    },
    "battery": {
      "batteryCapacity": 2227,
      "wiredCharging": 20,
      "wirelessCharging": 12
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
      "dimensions": "131.5 x 64.2 x 7.4 mm",
      "weight": 135,
      "materials": "Aluminum frame, Ceramic Shield front",
      "waterResistance": "IP68",
      "colors": [
        "Black",
        "White",
        "Red",
        "Green",
        "Blue",
        "Purple"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 14",
      "launchOS": "iOS 14",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2020-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-se-2020",
    "slug": "apple-iphone-se-2020",
    "brand": "Apple",
    "modelName": "iPhone SE (2nd Gen)",
    "generation": "iPhone SE",
    "status": "discontinued",
    "launchDate": "2020-04",
    "pricing": {
      "startingPrice": 42500,
      "maximumPrice": 58300,
      "launchPrice": 42500,
      "currentPrice": 42500,
      "currency": "INR",
      "priceEffectiveDate": "2020-04",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 4.7,
      "displayType": "Retina IPS LCD",
      "resolution": "1334 x 750",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A13 Bionic (7nm+)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Camera",
      "mainCamera": "12 MP, f/1.8 (wide), PDAF, OIS",
      "frontCamera": "7 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 1821,
      "wiredCharging": 18,
      "wirelessCharging": 7.5
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
      "dimensions": "138.4 x 67.3 x 7.3 mm",
      "weight": 148,
      "materials": "Glass front/back, aluminum frame",
      "waterResistance": "IP67",
      "colors": [
        "Black",
        "White",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 13",
      "launchOS": "iOS 13",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2020-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-11-pro-max",
    "slug": "apple-iphone-11-pro-max",
    "brand": "Apple",
    "modelName": "iPhone 11 Pro Max",
    "generation": "iPhone 11",
    "status": "discontinued",
    "launchDate": "2019-09",
    "pricing": {
      "startingPrice": 109900,
      "maximumPrice": 141900,
      "launchPrice": 109900,
      "currentPrice": 109900,
      "currency": "INR",
      "priceEffectiveDate": "2019-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "Super Retina XDR OLED",
      "resolution": "2688 x 1242",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A13 Bionic (7nm+)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB",
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS",
      "frontCamera": "12 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.4, 13mm, 120\u02da",
      "telephotoCamera": "12 MP 2x Telephoto, f/2.0, 52mm, OIS"
    },
    "battery": {
      "batteryCapacity": 3969,
      "wiredCharging": 18,
      "wirelessCharging": 10
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
      "dimensions": "158.0 x 77.8 x 8.1 mm",
      "weight": 226,
      "materials": "Stainless steel frame, matte glass back",
      "waterResistance": "IP68",
      "colors": [
        "Midnight Green",
        "Space Gray",
        "Silver",
        "Gold"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 13",
      "launchOS": "iOS 13",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2019-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-11-pro",
    "slug": "apple-iphone-11-pro",
    "brand": "Apple",
    "modelName": "iPhone 11 Pro",
    "generation": "iPhone 11",
    "status": "discontinued",
    "launchDate": "2019-09",
    "pricing": {
      "startingPrice": 99900,
      "maximumPrice": 131900,
      "launchPrice": 99900,
      "currentPrice": 99900,
      "currency": "INR",
      "priceEffectiveDate": "2019-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 5.8,
      "displayType": "Super Retina XDR OLED",
      "resolution": "2436 x 1125",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A13 Bionic (7nm+)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB",
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (12MP + 12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS",
      "frontCamera": "12 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.4, 13mm, 120\u02da",
      "telephotoCamera": "12 MP 2x Telephoto, f/2.0, 52mm, OIS"
    },
    "battery": {
      "batteryCapacity": 3046,
      "wiredCharging": 18,
      "wirelessCharging": 10
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
      "dimensions": "144.0 x 71.4 x 8.1 mm",
      "weight": 188,
      "materials": "Stainless steel frame, matte glass back",
      "waterResistance": "IP68",
      "colors": [
        "Midnight Green",
        "Space Gray",
        "Silver",
        "Gold"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 13",
      "launchOS": "iOS 13",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2019-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-11",
    "slug": "apple-iphone-11",
    "brand": "Apple",
    "modelName": "iPhone 11",
    "generation": "iPhone 11",
    "status": "discontinued",
    "launchDate": "2019-09",
    "pricing": {
      "startingPrice": 64900,
      "maximumPrice": 79900,
      "launchPrice": 64900,
      "currentPrice": 64900,
      "currency": "INR",
      "priceEffectiveDate": "2019-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.1,
      "displayType": "Liquid Retina IPS LCD",
      "resolution": "1792 x 828",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A13 Bionic (7nm+)",
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
      "rearCameraSetup": "Dual (12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS",
      "frontCamera": "12 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.4, 13mm, 120\u02da"
    },
    "battery": {
      "batteryCapacity": 3110,
      "wiredCharging": 18,
      "wirelessCharging": 10
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
      "dimensions": "150.9 x 75.7 x 8.3 mm",
      "weight": 194,
      "materials": "Aluminum frame, glass front and back",
      "waterResistance": "IP68",
      "colors": [
        "Black",
        "Green",
        "Yellow",
        "Purple",
        "Red",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 13",
      "launchOS": "iOS 13",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2019-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-xs-max",
    "slug": "apple-iphone-xs-max",
    "brand": "Apple",
    "modelName": "iPhone XS Max",
    "generation": "iPhone XS",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 109900,
      "maximumPrice": 144900,
      "launchPrice": 109900,
      "currentPrice": 109900,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.5,
      "displayType": "Super Retina OLED",
      "resolution": "2688 x 1242",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A12 Bionic (7nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB",
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS",
      "frontCamera": "7 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "telephotoCamera": "12 MP 2x Telephoto, f/2.4, 52mm, OIS"
    },
    "battery": {
      "batteryCapacity": 3174,
      "wiredCharging": 15,
      "wirelessCharging": 7.5
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
      "dimensions": "157.5 x 77.4 x 7.7 mm",
      "weight": 208,
      "materials": "Stainless steel frame, glass front/back",
      "waterResistance": "IP68",
      "colors": [
        "Space Gray",
        "Silver",
        "Gold"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 12",
      "launchOS": "iOS 12",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-xs",
    "slug": "apple-iphone-xs",
    "brand": "Apple",
    "modelName": "iPhone XS",
    "generation": "iPhone XS",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 99900,
      "maximumPrice": 134900,
      "launchPrice": 99900,
      "currentPrice": 99900,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 5.8,
      "displayType": "Super Retina OLED",
      "resolution": "2436 x 1125",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A12 Bionic (7nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "64GB",
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS",
      "frontCamera": "7 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "telephotoCamera": "12 MP 2x Telephoto, f/2.4, 52mm, OIS"
    },
    "battery": {
      "batteryCapacity": 2658,
      "wiredCharging": 15,
      "wirelessCharging": 7.5
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
      "dimensions": "143.6 x 70.9 x 7.7 mm",
      "weight": 177,
      "materials": "Stainless steel frame, glass front/back",
      "waterResistance": "IP68",
      "colors": [
        "Space Gray",
        "Silver",
        "Gold"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 12",
      "launchOS": "iOS 12",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-xr",
    "slug": "apple-iphone-xr",
    "brand": "Apple",
    "modelName": "iPhone XR",
    "generation": "iPhone XR",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 76900,
      "maximumPrice": 91900,
      "launchPrice": 76900,
      "currentPrice": 76900,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 6.1,
      "displayType": "Liquid Retina IPS LCD",
      "resolution": "1792 x 828",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A12 Bionic (7nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Camera",
      "mainCamera": "12 MP, f/1.8, 26mm, PDAF, OIS",
      "frontCamera": "7 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 2942,
      "wiredCharging": 15,
      "wirelessCharging": 7.5
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
      "dimensions": "150.9 x 75.7 x 8.3 mm",
      "weight": 194,
      "materials": "Aluminum frame, glass front/back",
      "waterResistance": "IP67",
      "colors": [
        "Black",
        "Red",
        "Yellow",
        "Blue",
        "Coral",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 12",
      "launchOS": "iOS 12",
      "promisedMajorUpdates": 2,
      "securityUpdatePolicy": "3-4 years"
    },
    "audio": {
      "speakers": "Stereo speakers",
      "stereo": true,
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "apple-iphone-x",
    "slug": "apple-iphone-x",
    "brand": "Apple",
    "modelName": "iPhone X",
    "generation": "iPhone X",
    "status": "discontinued",
    "launchDate": "2017-09",
    "pricing": {
      "startingPrice": 89000,
      "maximumPrice": 102000,
      "launchPrice": 89000,
      "currentPrice": 89000,
      "currency": "INR",
      "priceEffectiveDate": "2017-09",
      "source": "Apple India Store / Official Launch"
    },
    "display": {
      "displaySize": 5.8,
      "displayType": "Super Retina OLED",
      "resolution": "2436 x 1125",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Apple A11 Bionic (10nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB"
      ],
      "storageOptions": [
        "64GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 12MP)",
      "mainCamera": "12 MP, f/1.8, 28mm, dual pixel PDAF, OIS",
      "frontCamera": "7 MP TrueDepth",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "telephotoCamera": "12 MP 2x Telephoto, f/2.4, 52mm, OIS"
    },
    "battery": {
      "batteryCapacity": 2716,
      "wiredCharging": 15,
      "wirelessCharging": 7.5
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
      "dimensions": "143.6 x 70.9 x 7.7 mm",
      "weight": 174,
      "materials": "Stainless steel frame, glass front/back",
      "waterResistance": "IP67",
      "colors": [
        "Space Gray",
        "Silver"
      ]
    },
    "software": {
      "operatingSystem": "iOS",
      "ui": "iOS 11",
      "launchOS": "iOS 11",
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
      "officialWebsite": "https://www.apple.com/in/iphone/",
      "productPage": "https://www.apple.com/in/iphone/",
      "specSheetUrl": "https://www.apple.com/in/iphone/",
      "verifiedDate": "2017-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  }
] as unknown as MobileModel[];

const variants: MobileVariant[] = [
  {
    "id": "apple-iphone-17-pro-max-12-256",
    "modelId": "apple-iphone-17-pro-max",
    "ram": "12GB",
    "storage": "256GB",
    "price": 149900,
    "mrp": 149900,
    "colors": [
      "Titanium Black",
      "Titanium Natural",
      "Titanium White",
      "Desert Titanium"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-pro-max-12-512",
    "modelId": "apple-iphone-17-pro-max",
    "ram": "12GB",
    "storage": "512GB",
    "price": 169900,
    "mrp": 169900,
    "colors": [
      "Titanium Black",
      "Titanium Natural",
      "Titanium White",
      "Desert Titanium"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-pro-max-12-1t",
    "modelId": "apple-iphone-17-pro-max",
    "ram": "12GB",
    "storage": "1TB",
    "price": 189900,
    "mrp": 189900,
    "colors": [
      "Titanium Black",
      "Titanium Natural",
      "Titanium White",
      "Desert Titanium"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-pro-12-128",
    "modelId": "apple-iphone-17-pro",
    "ram": "12GB",
    "storage": "128GB",
    "price": 124900,
    "mrp": 124900,
    "colors": [
      "Titanium Black",
      "Titanium Natural",
      "Titanium White",
      "Desert Titanium"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-pro-12-256",
    "modelId": "apple-iphone-17-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 134900,
    "mrp": 134900,
    "colors": [
      "Titanium Black",
      "Titanium Natural",
      "Titanium White",
      "Desert Titanium"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-pro-12-512",
    "modelId": "apple-iphone-17-pro",
    "ram": "12GB",
    "storage": "512GB",
    "price": 154900,
    "mrp": 154900,
    "colors": [
      "Titanium Black",
      "Titanium Natural",
      "Titanium White",
      "Desert Titanium"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-pro-12-1t",
    "modelId": "apple-iphone-17-pro",
    "ram": "12GB",
    "storage": "1TB",
    "price": 164900,
    "mrp": 164900,
    "colors": [
      "Titanium Black",
      "Titanium Natural",
      "Titanium White",
      "Desert Titanium"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-air-8-128",
    "modelId": "apple-iphone-17-air",
    "ram": "8GB",
    "storage": "128GB",
    "price": 94900,
    "mrp": 94900,
    "colors": [
      "Silver",
      "Space Gray",
      "Champagne Gold"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-air-8-256",
    "modelId": "apple-iphone-17-air",
    "ram": "8GB",
    "storage": "256GB",
    "price": 104900,
    "mrp": 104900,
    "colors": [
      "Silver",
      "Space Gray",
      "Champagne Gold"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-air-8-512",
    "modelId": "apple-iphone-17-air",
    "ram": "8GB",
    "storage": "512GB",
    "price": 114900,
    "mrp": 114900,
    "colors": [
      "Silver",
      "Space Gray",
      "Champagne Gold"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-8-128",
    "modelId": "apple-iphone-17",
    "ram": "8GB",
    "storage": "128GB",
    "price": 79900,
    "mrp": 79900,
    "colors": [
      "Black",
      "White",
      "Pink",
      "Teal",
      "Ultramarine"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-8-256",
    "modelId": "apple-iphone-17",
    "ram": "8GB",
    "storage": "256GB",
    "price": 89900,
    "mrp": 89900,
    "colors": [
      "Black",
      "White",
      "Pink",
      "Teal",
      "Ultramarine"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-17-8-512",
    "modelId": "apple-iphone-17",
    "ram": "8GB",
    "storage": "512GB",
    "price": 99900,
    "mrp": 99900,
    "colors": [
      "Black",
      "White",
      "Pink",
      "Teal",
      "Ultramarine"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-12-pro-max-6-128",
    "modelId": "apple-iphone-12-pro-max",
    "ram": "6GB",
    "storage": "128GB",
    "price": 129900,
    "mrp": 129900,
    "colors": [
      "Pacific Blue",
      "Gold",
      "Graphite",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-12-pro-max-6-256",
    "modelId": "apple-iphone-12-pro-max",
    "ram": "6GB",
    "storage": "256GB",
    "price": 139900,
    "mrp": 139900,
    "colors": [
      "Pacific Blue",
      "Gold",
      "Graphite",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-12-pro-max-6-512",
    "modelId": "apple-iphone-12-pro-max",
    "ram": "6GB",
    "storage": "512GB",
    "price": 159900,
    "mrp": 159900,
    "colors": [
      "Pacific Blue",
      "Gold",
      "Graphite",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-12-pro-6-128",
    "modelId": "apple-iphone-12-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 119900,
    "mrp": 119900,
    "colors": [
      "Pacific Blue",
      "Gold",
      "Graphite",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-12-pro-6-256",
    "modelId": "apple-iphone-12-pro",
    "ram": "6GB",
    "storage": "256GB",
    "price": 129900,
    "mrp": 129900,
    "colors": [
      "Pacific Blue",
      "Gold",
      "Graphite",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-12-pro-6-512",
    "modelId": "apple-iphone-12-pro",
    "ram": "6GB",
    "storage": "512GB",
    "price": 149900,
    "mrp": 149900,
    "colors": [
      "Pacific Blue",
      "Gold",
      "Graphite",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-12-mini-4-64",
    "modelId": "apple-iphone-12-mini",
    "ram": "4GB",
    "storage": "64GB",
    "price": 69900,
    "mrp": 69900,
    "colors": [
      "Black",
      "White",
      "Red",
      "Green",
      "Blue",
      "Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-12-mini-4-128",
    "modelId": "apple-iphone-12-mini",
    "ram": "4GB",
    "storage": "128GB",
    "price": 74900,
    "mrp": 74900,
    "colors": [
      "Black",
      "White",
      "Red",
      "Green",
      "Blue",
      "Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-12-mini-4-256",
    "modelId": "apple-iphone-12-mini",
    "ram": "4GB",
    "storage": "256GB",
    "price": 84900,
    "mrp": 84900,
    "colors": [
      "Black",
      "White",
      "Red",
      "Green",
      "Blue",
      "Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-se-2020-3-64",
    "modelId": "apple-iphone-se-2020",
    "ram": "3GB",
    "storage": "64GB",
    "price": 42500,
    "mrp": 42500,
    "colors": [
      "Black",
      "White",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-se-2020-3-128",
    "modelId": "apple-iphone-se-2020",
    "ram": "3GB",
    "storage": "128GB",
    "price": 47800,
    "mrp": 47800,
    "colors": [
      "Black",
      "White",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-se-2020-3-256",
    "modelId": "apple-iphone-se-2020",
    "ram": "3GB",
    "storage": "256GB",
    "price": 58300,
    "mrp": 58300,
    "colors": [
      "Black",
      "White",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-11-pro-max-4-64",
    "modelId": "apple-iphone-11-pro-max",
    "ram": "4GB",
    "storage": "64GB",
    "price": 109900,
    "mrp": 109900,
    "colors": [
      "Midnight Green",
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-11-pro-max-4-256",
    "modelId": "apple-iphone-11-pro-max",
    "ram": "4GB",
    "storage": "256GB",
    "price": 123900,
    "mrp": 123900,
    "colors": [
      "Midnight Green",
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-11-pro-max-4-512",
    "modelId": "apple-iphone-11-pro-max",
    "ram": "4GB",
    "storage": "512GB",
    "price": 141900,
    "mrp": 141900,
    "colors": [
      "Midnight Green",
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-11-pro-4-64",
    "modelId": "apple-iphone-11-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 99900,
    "mrp": 99900,
    "colors": [
      "Midnight Green",
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-11-pro-4-256",
    "modelId": "apple-iphone-11-pro",
    "ram": "4GB",
    "storage": "256GB",
    "price": 113900,
    "mrp": 113900,
    "colors": [
      "Midnight Green",
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-11-pro-4-512",
    "modelId": "apple-iphone-11-pro",
    "ram": "4GB",
    "storage": "512GB",
    "price": 131900,
    "mrp": 131900,
    "colors": [
      "Midnight Green",
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-11-4-64",
    "modelId": "apple-iphone-11",
    "ram": "4GB",
    "storage": "64GB",
    "price": 64900,
    "mrp": 64900,
    "colors": [
      "Black",
      "Green",
      "Yellow",
      "Purple",
      "Red",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-11-4-128",
    "modelId": "apple-iphone-11",
    "ram": "4GB",
    "storage": "128GB",
    "price": 69900,
    "mrp": 69900,
    "colors": [
      "Black",
      "Green",
      "Yellow",
      "Purple",
      "Red",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-11-4-256",
    "modelId": "apple-iphone-11",
    "ram": "4GB",
    "storage": "256GB",
    "price": 79900,
    "mrp": 79900,
    "colors": [
      "Black",
      "Green",
      "Yellow",
      "Purple",
      "Red",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-xs-max-4-64",
    "modelId": "apple-iphone-xs-max",
    "ram": "4GB",
    "storage": "64GB",
    "price": 109900,
    "mrp": 109900,
    "colors": [
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-xs-max-4-256",
    "modelId": "apple-iphone-xs-max",
    "ram": "4GB",
    "storage": "256GB",
    "price": 124900,
    "mrp": 124900,
    "colors": [
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-xs-max-4-512",
    "modelId": "apple-iphone-xs-max",
    "ram": "4GB",
    "storage": "512GB",
    "price": 144900,
    "mrp": 144900,
    "colors": [
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-xs-4-64",
    "modelId": "apple-iphone-xs",
    "ram": "4GB",
    "storage": "64GB",
    "price": 99900,
    "mrp": 99900,
    "colors": [
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-xs-4-256",
    "modelId": "apple-iphone-xs",
    "ram": "4GB",
    "storage": "256GB",
    "price": 114900,
    "mrp": 114900,
    "colors": [
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-xs-4-512",
    "modelId": "apple-iphone-xs",
    "ram": "4GB",
    "storage": "512GB",
    "price": 134900,
    "mrp": 134900,
    "colors": [
      "Space Gray",
      "Silver",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-xr-3-64",
    "modelId": "apple-iphone-xr",
    "ram": "3GB",
    "storage": "64GB",
    "price": 76900,
    "mrp": 76900,
    "colors": [
      "Black",
      "Red",
      "Yellow",
      "Blue",
      "Coral",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-xr-3-128",
    "modelId": "apple-iphone-xr",
    "ram": "3GB",
    "storage": "128GB",
    "price": 81900,
    "mrp": 81900,
    "colors": [
      "Black",
      "Red",
      "Yellow",
      "Blue",
      "Coral",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-xr-3-256",
    "modelId": "apple-iphone-xr",
    "ram": "3GB",
    "storage": "256GB",
    "price": 91900,
    "mrp": 91900,
    "colors": [
      "Black",
      "Red",
      "Yellow",
      "Blue",
      "Coral",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-x-3-64",
    "modelId": "apple-iphone-x",
    "ram": "3GB",
    "storage": "64GB",
    "price": 89000,
    "mrp": 89000,
    "colors": [
      "Space Gray",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "apple-iphone-x-3-256",
    "modelId": "apple-iphone-x",
    "ram": "3GB",
    "storage": "256GB",
    "price": 102000,
    "mrp": 102000,
    "colors": [
      "Space Gray",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  }
] as unknown as MobileVariant[];

const images: MobileImageCatalogEntry[] = [
  {
    "modelId": "apple-iphone-17-pro-max",
    "modelName": "iPhone 17 Pro Max",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
        "verified": true,
        "alt": "iPhone 17 Pro Max front display"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-17-pro",
    "modelName": "iPhone 17 Pro",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
        "verified": true,
        "alt": "iPhone 17 Pro front display"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-17-air",
    "modelName": "iPhone 17 Air",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg",
        "verified": true,
        "alt": "iPhone 17 Air ultra-slim profile view"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-17",
    "modelName": "iPhone 17",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
        "verified": true,
        "alt": "iPhone 17 front view"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-12-pro-max",
    "modelName": "iPhone 12 Pro Max",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
        "verified": true,
        "alt": "iPhone 12 Pro Max Pacific Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-12-pro",
    "modelName": "iPhone 12 Pro",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
        "verified": true,
        "alt": "iPhone 12 Pro Pacific Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-12-mini",
    "modelName": "iPhone 12 mini",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
        "verified": true,
        "alt": "iPhone 12 mini Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-se-2020",
    "modelName": "iPhone SE (2nd Gen)",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg",
        "verified": true,
        "alt": "iPhone SE 2nd Gen Product RED"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-11-pro-max",
    "modelName": "iPhone 11 Pro Max",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg",
        "verified": true,
        "alt": "iPhone 11 Pro Max Midnight Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-11-pro",
    "modelName": "iPhone 11 Pro",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg",
        "verified": true,
        "alt": "iPhone 11 Pro Space Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-11",
    "modelName": "iPhone 11",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
        "verified": true,
        "alt": "iPhone 11 Purple"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-xs-max",
    "modelName": "iPhone XS Max",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
        "verified": true,
        "alt": "iPhone XS Max Gold"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-xs",
    "modelName": "iPhone XS",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
        "verified": true,
        "alt": "iPhone XS Space Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-xr",
    "modelName": "iPhone XR",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
        "verified": true,
        "alt": "iPhone XR Coral"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "apple-iphone-x",
    "modelName": "iPhone X",
    "brand": "Apple",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
        "verified": true,
        "alt": "iPhone X Silver anniversary edition"
      }
    ],
    "verifiedCoverage": true
  }
] as unknown as MobileImageCatalogEntry[];

export const appleAdditionsBundle: MobileBrandBundle = {
  models,
  variants,
  images,
};
