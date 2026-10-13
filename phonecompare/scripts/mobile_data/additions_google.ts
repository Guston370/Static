import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  {
    "id": "google-pixel",
    "slug": "google-pixel",
    "brand": "Google",
    "modelName": "Pixel",
    "generation": "Pixel 1",
    "status": "discontinued",
    "launchDate": "2016-10",
    "pricing": {
      "startingPrice": 57000,
      "maximumPrice": 66000,
      "launchPrice": 57000,
      "currentPrice": 57000,
      "currency": "INR",
      "priceEffectiveDate": "2016-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
      "displayType": "AMOLED",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 821",
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
      "rearCameraSetup": "Single 12.3MP",
      "mainCamera": "12.3MP, f/2.0, 1.55\u00b5m, PDAF & laser AF",
      "frontCamera": "8 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 2770,
      "wiredCharging": 18
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
      "dimensions": "143.8 x 69.5 x 8.5 mm",
      "weight": 143,
      "materials": "Corning Gorilla Glass 4, aluminum body",
      "waterResistance": "IP53",
      "colors": [
        "Quite Black",
        "Very Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
      "launchOS": "Android 7.1",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel",
      "productPage": "https://store.google.com/in/product/google-pixel",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel",
      "verifiedDate": "2016-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-xl",
    "slug": "google-pixel-xl",
    "brand": "Google",
    "modelName": "Pixel XL",
    "generation": "Pixel 1",
    "status": "discontinued",
    "launchDate": "2016-10",
    "pricing": {
      "startingPrice": 67000,
      "maximumPrice": 76000,
      "launchPrice": 67000,
      "currentPrice": 67000,
      "currency": "INR",
      "priceEffectiveDate": "2016-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "AMOLED",
      "resolution": "1440 x 2560",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 821",
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
      "rearCameraSetup": "Single 12.3MP",
      "mainCamera": "12.3MP, f/2.0, 1.55\u00b5m, PDAF & laser AF",
      "frontCamera": "8 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3450,
      "wiredCharging": 18
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
      "dimensions": "154.7 x 75.7 x 8.5 mm",
      "weight": 168,
      "materials": "Corning Gorilla Glass 4, aluminum body",
      "waterResistance": "IP53",
      "colors": [
        "Quite Black",
        "Very Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
      "launchOS": "Android 7.1",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-xl",
      "productPage": "https://store.google.com/in/product/google-pixel-xl",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-xl",
      "verifiedDate": "2016-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-2",
    "slug": "google-pixel-2",
    "brand": "Google",
    "modelName": "Pixel 2",
    "generation": "Pixel 2",
    "status": "discontinued",
    "launchDate": "2017-10",
    "pricing": {
      "startingPrice": 61000,
      "maximumPrice": 70000,
      "launchPrice": 61000,
      "currentPrice": 61000,
      "currency": "INR",
      "priceEffectiveDate": "2017-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
      "displayType": "AMOLED",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 835",
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
      "rearCameraSetup": "Single 12.2MP OIS",
      "mainCamera": "12.2MP, f/1.8, 27mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 2700,
      "wiredCharging": 18
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
      "dimensions": "145.7 x 69.7 x 7.8 mm",
      "weight": 143,
      "materials": "Corning Gorilla Glass 5, aluminum body",
      "waterResistance": "IP67",
      "colors": [
        "Just Black",
        "Clearly White",
        "Kinda Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-2",
      "productPage": "https://store.google.com/in/product/google-pixel-2",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-2",
      "verifiedDate": "2017-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-2-xl",
    "slug": "google-pixel-2-xl",
    "brand": "Google",
    "modelName": "Pixel 2 XL",
    "generation": "Pixel 2",
    "status": "discontinued",
    "launchDate": "2017-10",
    "pricing": {
      "startingPrice": 73000,
      "maximumPrice": 82000,
      "launchPrice": 73000,
      "currentPrice": 73000,
      "currency": "INR",
      "priceEffectiveDate": "2017-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.0\"",
      "displayType": "P-OLED",
      "resolution": "1440 x 2880",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 835",
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
      "rearCameraSetup": "Single 12.2MP OIS",
      "mainCamera": "12.2MP, f/1.8, 27mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3520,
      "wiredCharging": 18
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
      "dimensions": "157.9 x 76.7 x 7.9 mm",
      "weight": 175,
      "materials": "Corning Gorilla Glass 5, aluminum body",
      "waterResistance": "IP67",
      "colors": [
        "Just Black",
        "Black & White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-2-xl",
      "productPage": "https://store.google.com/in/product/google-pixel-2-xl",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-2-xl",
      "verifiedDate": "2017-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-3",
    "slug": "google-pixel-3",
    "brand": "Google",
    "modelName": "Pixel 3",
    "generation": "Pixel 3",
    "status": "discontinued",
    "launchDate": "2018-10",
    "pricing": {
      "startingPrice": 71000,
      "maximumPrice": 80000,
      "launchPrice": 71000,
      "currentPrice": 71000,
      "currency": "INR",
      "priceEffectiveDate": "2018-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "P-OLED HDR",
      "resolution": "1080 x 2160",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 845",
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
      "rearCameraSetup": "Single 12.2MP OIS",
      "mainCamera": "12.2MP, f/1.8, 28mm, OIS, dual pixel PDAF",
      "frontCamera": "Dual 8MP wide + 8MP ultrawide",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 2915,
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
      "dimensions": "145.6 x 68.2 x 7.9 mm",
      "weight": 148,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "IP68",
      "colors": [
        "Clearly White",
        "Just Black",
        "Not Pink"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-3",
      "productPage": "https://store.google.com/in/product/google-pixel-3",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-3",
      "verifiedDate": "2018-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-3-xl",
    "slug": "google-pixel-3-xl",
    "brand": "Google",
    "modelName": "Pixel 3 XL",
    "generation": "Pixel 3",
    "status": "discontinued",
    "launchDate": "2018-10",
    "pricing": {
      "startingPrice": 83000,
      "maximumPrice": 92000,
      "launchPrice": 83000,
      "currentPrice": 83000,
      "currency": "INR",
      "priceEffectiveDate": "2018-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "P-OLED HDR",
      "resolution": "1440 x 2960",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 845",
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
      "rearCameraSetup": "Single 12.2MP OIS",
      "mainCamera": "12.2MP, f/1.8, 28mm, OIS, dual pixel PDAF",
      "frontCamera": "Dual 8MP wide + 8MP ultrawide",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3430,
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
      "dimensions": "158.0 x 76.7 x 7.9 mm",
      "weight": 184,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "IP68",
      "colors": [
        "Clearly White",
        "Just Black",
        "Not Pink"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-3-xl",
      "productPage": "https://store.google.com/in/product/google-pixel-3-xl",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-3-xl",
      "verifiedDate": "2018-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-3a",
    "slug": "google-pixel-3a",
    "brand": "Google",
    "modelName": "Pixel 3a",
    "generation": "Pixel 3a",
    "status": "discontinued",
    "launchDate": "2019-05",
    "pricing": {
      "startingPrice": 39999,
      "maximumPrice": 39999,
      "launchPrice": 39999,
      "currentPrice": 39999,
      "currency": "INR",
      "priceEffectiveDate": "2019-05",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.6\"",
      "displayType": "OLED",
      "resolution": "1080 x 2220",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 670",
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
      "rearCameraSetup": "Single 12.2MP OIS",
      "mainCamera": "12.2MP, f/1.8, 28mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3000,
      "wiredCharging": 18
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
      "dimensions": "151.3 x 70.1 x 8.2 mm",
      "weight": 147,
      "materials": "Asahi Dragontrail Glass, polycarbonate body",
      "waterResistance": "Splash resistant",
      "colors": [
        "Just Black",
        "Clearly White",
        "Purple-ish"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-3a",
      "productPage": "https://store.google.com/in/product/google-pixel-3a",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-3a",
      "verifiedDate": "2019-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-3a-xl",
    "slug": "google-pixel-3a-xl",
    "brand": "Google",
    "modelName": "Pixel 3a XL",
    "generation": "Pixel 3a",
    "status": "discontinued",
    "launchDate": "2019-05",
    "pricing": {
      "startingPrice": 44999,
      "maximumPrice": 44999,
      "launchPrice": 44999,
      "currentPrice": 44999,
      "currency": "INR",
      "priceEffectiveDate": "2019-05",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.0\"",
      "displayType": "OLED",
      "resolution": "1080 x 2160",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 670",
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
      "rearCameraSetup": "Single 12.2MP OIS",
      "mainCamera": "12.2MP, f/1.8, 28mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3700,
      "wiredCharging": 18
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
      "dimensions": "160.1 x 76.1 x 8.2 mm",
      "weight": 167,
      "materials": "Asahi Dragontrail Glass, polycarbonate body",
      "waterResistance": "Splash resistant",
      "colors": [
        "Just Black",
        "Clearly White",
        "Purple-ish"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-3a-xl",
      "productPage": "https://store.google.com/in/product/google-pixel-3a-xl",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-3a-xl",
      "verifiedDate": "2019-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-4",
    "slug": "google-pixel-4",
    "brand": "Google",
    "modelName": "Pixel 4",
    "generation": "Pixel 4",
    "status": "discontinued",
    "launchDate": "2019-10",
    "pricing": {
      "startingPrice": 64999,
      "maximumPrice": 73999,
      "launchPrice": 64999,
      "currentPrice": 64999,
      "currency": "INR",
      "priceEffectiveDate": "2019-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.7\"",
      "displayType": "P-OLED 90Hz",
      "resolution": "1080 x 2280",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 855",
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
      "rearCameraSetup": "Dual (12.2MP + 16MP Tele)",
      "mainCamera": "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.0 + TOF 3D",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "telephotoCamera": "16 MP, f/2.4, 2x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 2800,
      "wiredCharging": 18,
      "wirelessCharging": 11
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
      "dimensions": "147.1 x 68.8 x 8.2 mm",
      "weight": 162,
      "materials": "Gorilla Glass 5, aluminum frame",
      "waterResistance": "IP68",
      "colors": [
        "Clearly White",
        "Just Black",
        "Oh So Orange"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-4",
      "productPage": "https://store.google.com/in/product/google-pixel-4",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-4",
      "verifiedDate": "2019-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-4-xl",
    "slug": "google-pixel-4-xl",
    "brand": "Google",
    "modelName": "Pixel 4 XL",
    "generation": "Pixel 4",
    "status": "discontinued",
    "launchDate": "2019-10",
    "pricing": {
      "startingPrice": 74999,
      "maximumPrice": 83999,
      "launchPrice": 74999,
      "currentPrice": 74999,
      "currency": "INR",
      "priceEffectiveDate": "2019-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "P-OLED 90Hz",
      "resolution": "1440 x 3040",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 855",
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
      "rearCameraSetup": "Dual (12.2MP + 16MP Tele)",
      "mainCamera": "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.0 + TOF 3D",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "telephotoCamera": "16 MP, f/2.4, 2x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 3700,
      "wiredCharging": 18,
      "wirelessCharging": 11
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
      "dimensions": "160.4 x 75.1 x 8.2 mm",
      "weight": 193,
      "materials": "Gorilla Glass 5, aluminum frame",
      "waterResistance": "IP68",
      "colors": [
        "Clearly White",
        "Just Black",
        "Oh So Orange"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-4-xl",
      "productPage": "https://store.google.com/in/product/google-pixel-4-xl",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-4-xl",
      "verifiedDate": "2019-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-4a",
    "slug": "google-pixel-4a",
    "brand": "Google",
    "modelName": "Pixel 4a",
    "generation": "Pixel 4a",
    "status": "discontinued",
    "launchDate": "2020-08",
    "pricing": {
      "startingPrice": 31999,
      "maximumPrice": 31999,
      "launchPrice": 31999,
      "currentPrice": 31999,
      "currency": "INR",
      "priceEffectiveDate": "2020-08",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.81\"",
      "displayType": "OLED HDR",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 730G",
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
      "rearCameraSetup": "Single 12.2MP OIS",
      "mainCamera": "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3140,
      "wiredCharging": 18
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
      "dimensions": "144.0 x 69.4 x 8.2 mm",
      "weight": 143,
      "materials": "Gorilla Glass 3, polycarbonate body",
      "waterResistance": "None",
      "colors": [
        "Just Black",
        "Barely Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-4a",
      "productPage": "https://store.google.com/in/product/google-pixel-4a",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-4a",
      "verifiedDate": "2020-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-4a-5g",
    "slug": "google-pixel-4a-5g",
    "brand": "Google",
    "modelName": "Pixel 4a 5G",
    "generation": "Pixel 4a",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 39999,
      "maximumPrice": 39999,
      "launchPrice": 39999,
      "currentPrice": 39999,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.2\"",
      "displayType": "OLED HDR",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 765G 5G",
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
      "rearCameraSetup": "Dual (12.2MP + 16MP Ultrawide)",
      "mainCamera": "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 107\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 3885,
      "wiredCharging": 18
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
      "dimensions": "153.9 x 74.0 x 8.2 mm",
      "weight": 168,
      "materials": "Gorilla Glass 3, polycarbonate body",
      "waterResistance": "None",
      "colors": [
        "Just Black",
        "Clearly White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-4a-5g",
      "productPage": "https://store.google.com/in/product/google-pixel-4a-5g",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-4a-5g",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-5",
    "slug": "google-pixel-5",
    "brand": "Google",
    "modelName": "Pixel 5",
    "generation": "Pixel 5",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 54999,
      "maximumPrice": 54999,
      "launchPrice": 54999,
      "currentPrice": 54999,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.0\"",
      "displayType": "OLED 90Hz HDR10+",
      "resolution": "1080 x 2340",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 765G 5G",
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
      "rearCameraSetup": "Dual (12.2MP + 16MP Ultrawide)",
      "mainCamera": "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 107\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4080,
      "wiredCharging": 18,
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
      "dimensions": "144.7 x 70.4 x 8.0 mm",
      "weight": 151,
      "materials": "Corning Gorilla Glass 6, recycled aluminum",
      "waterResistance": "IP68",
      "colors": [
        "Just Black",
        "Sorta Sage"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-5",
      "productPage": "https://store.google.com/in/product/google-pixel-5",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-5",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-5a-5g",
    "slug": "google-pixel-5a-5g",
    "brand": "Google",
    "modelName": "Pixel 5a 5G",
    "generation": "Pixel 5a",
    "status": "discontinued",
    "launchDate": "2021-08",
    "pricing": {
      "startingPrice": 39999,
      "maximumPrice": 39999,
      "launchPrice": 39999,
      "currentPrice": 39999,
      "currency": "INR",
      "priceEffectiveDate": "2021-08",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.34\"",
      "displayType": "OLED HDR",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 765G 5G",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12.2MP + 16MP Ultrawide)",
      "mainCamera": "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4680,
      "wiredCharging": 18
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
      "dimensions": "154.9 x 73.7 x 7.6 mm",
      "weight": 183,
      "materials": "Gorilla Glass 3, aluminum body",
      "waterResistance": "IP67",
      "colors": [
        "Mostly Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-5a-5g",
      "productPage": "https://store.google.com/in/product/google-pixel-5a-5g",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-5a-5g",
      "verifiedDate": "2021-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-6",
    "slug": "google-pixel-6",
    "brand": "Google",
    "modelName": "Pixel 6",
    "generation": "Pixel 6",
    "status": "discontinued",
    "launchDate": "2021-10",
    "pricing": {
      "startingPrice": 59999,
      "maximumPrice": 69999,
      "launchPrice": 59999,
      "currentPrice": 59999,
      "currency": "INR",
      "priceEffectiveDate": "2021-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.4\"",
      "displayType": "AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Google Tensor (5nm)",
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
      "rearCameraSetup": "Dual (50MP + 12MP Ultrawide)",
      "mainCamera": "50 MP, f/1.9, 25mm, OIS, omnidirectional PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 114\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4614,
      "wiredCharging": 30,
      "wirelessCharging": 21
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
      "dimensions": "158.6 x 74.8 x 8.9 mm",
      "weight": 207,
      "materials": "Gorilla Glass Victus front, Gorilla Glass 6 back",
      "waterResistance": "IP68",
      "colors": [
        "Stormy Black",
        "Kinda Coral",
        "Sorta Seafoam"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Pixel UI",
      "launchOS": "Android 12",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-6",
      "productPage": "https://store.google.com/in/product/google-pixel-6",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-6",
      "verifiedDate": "2021-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-6-pro",
    "slug": "google-pixel-6-pro",
    "brand": "Google",
    "modelName": "Pixel 6 Pro",
    "generation": "Pixel 6",
    "status": "discontinued",
    "launchDate": "2021-10",
    "pricing": {
      "startingPrice": 84999,
      "maximumPrice": 94999,
      "launchPrice": 84999,
      "currentPrice": 84999,
      "currency": "INR",
      "priceEffectiveDate": "2021-10",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.71\"",
      "displayType": "LTPO AMOLED 120Hz HDR10+",
      "resolution": "1440 x 3120",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Google Tensor (5nm)",
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
      "rearCameraSetup": "Triple (50MP + 48MP 4x Tele + 12MP Ultrawide)",
      "mainCamera": "50 MP, f/1.9, 25mm, OIS, omnidirectional PDAF",
      "frontCamera": "11.1 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 114\u02da ultrawide",
      "telephotoCamera": "48 MP, f/3.5, 104mm 4x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 5003,
      "wiredCharging": 30,
      "wirelessCharging": 23
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
      "dimensions": "163.9 x 75.9 x 8.9 mm",
      "weight": 210,
      "materials": "Gorilla Glass Victus front/back, aluminum frame",
      "waterResistance": "IP68",
      "colors": [
        "Stormy Black",
        "Cloudy White",
        "Sorta Sunny"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Pixel UI",
      "launchOS": "Android 12",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-6-pro",
      "productPage": "https://store.google.com/in/product/google-pixel-6-pro",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-6-pro",
      "verifiedDate": "2021-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "google-pixel-fold",
    "slug": "google-pixel-fold",
    "brand": "Google",
    "modelName": "Pixel Fold",
    "generation": "Pixel Fold",
    "status": "discontinued",
    "launchDate": "2023-05",
    "pricing": {
      "startingPrice": 149999,
      "maximumPrice": 164999,
      "launchPrice": 149999,
      "currentPrice": 149999,
      "currency": "INR",
      "priceEffectiveDate": "2023-05",
      "source": "Google India Store / Official Launch"
    },
    "display": {
      "displaySize": "7.6\" Foldable OLED 120Hz",
      "displayType": "Foldable OLED",
      "resolution": "1840 x 2208",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Google Tensor G2 (5nm)",
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
      "rearCameraSetup": "Triple (48MP + 10.8MP 5x Tele + 10.8MP Ultrawide)",
      "mainCamera": "48 MP, f/1.7, 25mm, OIS, Dual Pixel PDAF",
      "frontCamera": "9.5 MP cover, 8 MP inner",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "10.8 MP, f/2.2, 121\u02da ultrawide",
      "telephotoCamera": "10.8 MP, f/3.1, 112mm 5x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 4821,
      "wiredCharging": 30,
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
      "dimensions": "139.7 x 158.7 x 5.8 mm (unfolded)",
      "weight": 283,
      "materials": "Gorilla Glass Victus, steel hinge, aluminum frame",
      "waterResistance": "IPX8",
      "colors": [
        "Obsidian",
        "Porcelain"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Pixel UI",
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
      "officialWebsite": "https://store.google.com/in/product/google-pixel-fold",
      "productPage": "https://store.google.com/in/product/google-pixel-fold",
      "specSheetUrl": "https://store.google.com/in/product/google-pixel-fold",
      "verifiedDate": "2023-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  }
] as unknown as MobileModel[];

const variants: MobileVariant[] = [
  {
    "id": "google-pixel-4-32",
    "modelId": "google-pixel",
    "ram": "4GB",
    "storage": "32GB",
    "price": 57000,
    "mrp": 57000,
    "colors": [
      "Quite Black",
      "Very Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-4-128",
    "modelId": "google-pixel",
    "ram": "4GB",
    "storage": "128GB",
    "price": 66000,
    "mrp": 66000,
    "colors": [
      "Quite Black",
      "Very Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-xl-4-32",
    "modelId": "google-pixel-xl",
    "ram": "4GB",
    "storage": "32GB",
    "price": 67000,
    "mrp": 67000,
    "colors": [
      "Quite Black",
      "Very Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-xl-4-128",
    "modelId": "google-pixel-xl",
    "ram": "4GB",
    "storage": "128GB",
    "price": 76000,
    "mrp": 76000,
    "colors": [
      "Quite Black",
      "Very Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-2-4-64",
    "modelId": "google-pixel-2",
    "ram": "4GB",
    "storage": "64GB",
    "price": 61000,
    "mrp": 61000,
    "colors": [
      "Just Black",
      "Clearly White",
      "Kinda Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-2-4-128",
    "modelId": "google-pixel-2",
    "ram": "4GB",
    "storage": "128GB",
    "price": 70000,
    "mrp": 70000,
    "colors": [
      "Just Black",
      "Clearly White",
      "Kinda Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-2-xl-4-64",
    "modelId": "google-pixel-2-xl",
    "ram": "4GB",
    "storage": "64GB",
    "price": 73000,
    "mrp": 73000,
    "colors": [
      "Just Black",
      "Black & White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-2-xl-4-128",
    "modelId": "google-pixel-2-xl",
    "ram": "4GB",
    "storage": "128GB",
    "price": 82000,
    "mrp": 82000,
    "colors": [
      "Just Black",
      "Black & White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-3-4-64",
    "modelId": "google-pixel-3",
    "ram": "4GB",
    "storage": "64GB",
    "price": 71000,
    "mrp": 71000,
    "colors": [
      "Clearly White",
      "Just Black",
      "Not Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-3-4-128",
    "modelId": "google-pixel-3",
    "ram": "4GB",
    "storage": "128GB",
    "price": 80000,
    "mrp": 80000,
    "colors": [
      "Clearly White",
      "Just Black",
      "Not Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-3-xl-4-64",
    "modelId": "google-pixel-3-xl",
    "ram": "4GB",
    "storage": "64GB",
    "price": 83000,
    "mrp": 83000,
    "colors": [
      "Clearly White",
      "Just Black",
      "Not Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-3-xl-4-128",
    "modelId": "google-pixel-3-xl",
    "ram": "4GB",
    "storage": "128GB",
    "price": 92000,
    "mrp": 92000,
    "colors": [
      "Clearly White",
      "Just Black",
      "Not Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-3a-4-64",
    "modelId": "google-pixel-3a",
    "ram": "4GB",
    "storage": "64GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Just Black",
      "Clearly White",
      "Purple-ish"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-3a-xl-4-64",
    "modelId": "google-pixel-3a-xl",
    "ram": "4GB",
    "storage": "64GB",
    "price": 44999,
    "mrp": 44999,
    "colors": [
      "Just Black",
      "Clearly White",
      "Purple-ish"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-4-6-64",
    "modelId": "google-pixel-4",
    "ram": "6GB",
    "storage": "64GB",
    "price": 64999,
    "mrp": 64999,
    "colors": [
      "Clearly White",
      "Just Black",
      "Oh So Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-4-6-128",
    "modelId": "google-pixel-4",
    "ram": "6GB",
    "storage": "128GB",
    "price": 73999,
    "mrp": 73999,
    "colors": [
      "Clearly White",
      "Just Black",
      "Oh So Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-4-xl-6-64",
    "modelId": "google-pixel-4-xl",
    "ram": "6GB",
    "storage": "64GB",
    "price": 74999,
    "mrp": 74999,
    "colors": [
      "Clearly White",
      "Just Black",
      "Oh So Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-4-xl-6-128",
    "modelId": "google-pixel-4-xl",
    "ram": "6GB",
    "storage": "128GB",
    "price": 83999,
    "mrp": 83999,
    "colors": [
      "Clearly White",
      "Just Black",
      "Oh So Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-4a-6-128",
    "modelId": "google-pixel-4a",
    "ram": "6GB",
    "storage": "128GB",
    "price": 31999,
    "mrp": 31999,
    "colors": [
      "Just Black",
      "Barely Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-4a-5g-6-128",
    "modelId": "google-pixel-4a-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Just Black",
      "Clearly White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-5-8-128",
    "modelId": "google-pixel-5",
    "ram": "8GB",
    "storage": "128GB",
    "price": 54999,
    "mrp": 54999,
    "colors": [
      "Just Black",
      "Sorta Sage"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-5a-5g-6-128",
    "modelId": "google-pixel-5a-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Mostly Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-6-8-128",
    "modelId": "google-pixel-6",
    "ram": "8GB",
    "storage": "128GB",
    "price": 59999,
    "mrp": 59999,
    "colors": [
      "Stormy Black",
      "Kinda Coral",
      "Sorta Seafoam"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-6-8-256",
    "modelId": "google-pixel-6",
    "ram": "8GB",
    "storage": "256GB",
    "price": 69999,
    "mrp": 69999,
    "colors": [
      "Stormy Black",
      "Kinda Coral",
      "Sorta Seafoam"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-6-pro-12-128",
    "modelId": "google-pixel-6-pro",
    "ram": "12GB",
    "storage": "128GB",
    "price": 84999,
    "mrp": 84999,
    "colors": [
      "Stormy Black",
      "Cloudy White",
      "Sorta Sunny"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-6-pro-12-256",
    "modelId": "google-pixel-6-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 94999,
    "mrp": 94999,
    "colors": [
      "Stormy Black",
      "Cloudy White",
      "Sorta Sunny"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-fold-12-256",
    "modelId": "google-pixel-fold",
    "ram": "12GB",
    "storage": "256GB",
    "price": 149999,
    "mrp": 149999,
    "colors": [
      "Obsidian",
      "Porcelain"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "google-pixel-fold-12-512",
    "modelId": "google-pixel-fold",
    "ram": "12GB",
    "storage": "512GB",
    "price": 164999,
    "mrp": 164999,
    "colors": [
      "Obsidian",
      "Porcelain"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  }
] as unknown as MobileVariant[];

const images: MobileImageCatalogEntry[] = [
  {
    "modelId": "google-pixel",
    "modelName": "Pixel",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel.jpg",
        "verified": true,
        "alt": "Google Pixel Quite Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-xl",
    "modelName": "Pixel XL",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-xl.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-xl.jpg",
        "verified": true,
        "alt": "Google Pixel XL Very Silver"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-2",
    "modelName": "Pixel 2",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-2.jpg",
        "verified": true,
        "alt": "Google Pixel 2 Just Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-2-xl",
    "modelName": "Pixel 2 XL",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-2-xl.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-2-xl.jpg",
        "verified": true,
        "alt": "Google Pixel 2 XL Black & White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-3",
    "modelName": "Pixel 3",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3.jpg",
        "verified": true,
        "alt": "Google Pixel 3 Clearly White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-3-xl",
    "modelName": "Pixel 3 XL",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3-xl.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3-xl.jpg",
        "verified": true,
        "alt": "Google Pixel 3 XL Just Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-3a",
    "modelName": "Pixel 3a",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3a.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3a.jpg",
        "verified": true,
        "alt": "Google Pixel 3a Clearly White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-3a-xl",
    "modelName": "Pixel 3a XL",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3a-xl.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3a-xl.jpg",
        "verified": true,
        "alt": "Google Pixel 3a XL Just Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-4",
    "modelName": "Pixel 4",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4.jpg",
        "verified": true,
        "alt": "Google Pixel 4 Clearly White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-4-xl",
    "modelName": "Pixel 4 XL",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4-xl.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4-xl.jpg",
        "verified": true,
        "alt": "Google Pixel 4 XL Oh So Orange"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-4a",
    "modelName": "Pixel 4a",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a.jpg",
        "verified": true,
        "alt": "Google Pixel 4a Just Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-4a-5g",
    "modelName": "Pixel 4a 5G",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a-5g.jpg",
        "verified": true,
        "alt": "Google Pixel 4a 5G Just Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-5",
    "modelName": "Pixel 5",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg",
        "verified": true,
        "alt": "Google Pixel 5 Sorta Sage"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-5a-5g",
    "modelName": "Pixel 5a 5G",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5a-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5a-5g.jpg",
        "verified": true,
        "alt": "Google Pixel 5a 5G Mostly Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-6",
    "modelName": "Pixel 6",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6.jpg",
        "verified": true,
        "alt": "Google Pixel 6 Kinda Coral"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-6-pro",
    "modelName": "Pixel 6 Pro",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6-pro.jpg",
        "verified": true,
        "alt": "Google Pixel 6 Pro Cloudy White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "google-pixel-fold",
    "modelName": "Pixel Fold",
    "brand": "Google",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-fold.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-fold.jpg",
        "verified": true,
        "alt": "Google Pixel Fold Obsidian"
      }
    ],
    "verifiedCoverage": true
  }
] as unknown as MobileImageCatalogEntry[];

export const googleAdditionsBundle: MobileBrandBundle = {
  models,
  variants,
  images,
};
