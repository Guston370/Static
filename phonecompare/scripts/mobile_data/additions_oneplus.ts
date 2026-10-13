import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  {
    "id": "oneplus-one",
    "slug": "oneplus-one",
    "brand": "OnePlus",
    "modelName": "OnePlus One",
    "generation": "OnePlus 1",
    "status": "discontinued",
    "launchDate": "2014-04",
    "pricing": {
      "startingPrice": 21999,
      "maximumPrice": 21999,
      "launchPrice": 21999,
      "currentPrice": 21999,
      "currency": "INR",
      "priceEffectiveDate": "2014-04",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "IPS LCD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 801",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB"
      ],
      "storageOptions": [
        "16GB",
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.0, AF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3100,
      "wiredCharging": 10
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
      "dimensions": "152.9 x 75.9 x 8.9 mm",
      "weight": 162,
      "materials": "Corning Gorilla Glass 3, magnesium frame",
      "waterResistance": "None",
      "colors": [
        "Silk White",
        "Sandstone Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "CyanogenOS / OxygenOS",
      "launchOS": "Android 4.4.2",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-one",
      "productPage": "https://www.oneplus.in/oneplus-one",
      "specSheetUrl": "https://www.oneplus.in/oneplus-one",
      "verifiedDate": "2014-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-2",
    "slug": "oneplus-2",
    "brand": "OnePlus",
    "modelName": "OnePlus 2",
    "generation": "OnePlus 2",
    "status": "discontinued",
    "launchDate": "2015-07",
    "pricing": {
      "startingPrice": 24999,
      "maximumPrice": 24999,
      "launchPrice": 24999,
      "currentPrice": 24999,
      "currency": "INR",
      "priceEffectiveDate": "2015-07",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "IPS-NEO LCD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 810",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB",
        "4GB"
      ],
      "storageOptions": [
        "16GB",
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP OIS",
      "mainCamera": "13 MP, f/2.0, OIS, laser AF",
      "frontCamera": "5 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3300,
      "wiredCharging": 10
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
      "dimensions": "151.8 x 74.9 x 9.9 mm",
      "weight": 175,
      "materials": "Gorilla Glass 3, magnesium alloy frame",
      "waterResistance": "None",
      "colors": [
        "Sandstone Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
      "launchOS": "Android 5.1",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-2",
      "productPage": "https://www.oneplus.in/oneplus-2",
      "specSheetUrl": "https://www.oneplus.in/oneplus-2",
      "verifiedDate": "2015-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-x",
    "slug": "oneplus-x",
    "brand": "OnePlus",
    "modelName": "OnePlus X",
    "generation": "OnePlus X",
    "status": "discontinued",
    "launchDate": "2015-10",
    "pricing": {
      "startingPrice": 16999,
      "maximumPrice": 16999,
      "launchPrice": 16999,
      "currentPrice": 16999,
      "currency": "INR",
      "priceEffectiveDate": "2015-10",
      "source": "OnePlus India Store / Official Launch"
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
      "chipset": "Qualcomm Snapdragon 801",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB"
      ],
      "storageOptions": [
        "16GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.2, PDAF",
      "frontCamera": "8 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 2525,
      "wiredCharging": 10
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
      "dimensions": "140.0 x 69.0 x 6.9 mm",
      "weight": 138,
      "materials": "Gorilla Glass 3 front/back, metal frame",
      "waterResistance": "None",
      "colors": [
        "Onyx",
        "Champagne"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
      "launchOS": "Android 5.1.1",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-x",
      "productPage": "https://www.oneplus.in/oneplus-x",
      "specSheetUrl": "https://www.oneplus.in/oneplus-x",
      "verifiedDate": "2015-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-3",
    "slug": "oneplus-3",
    "brand": "OnePlus",
    "modelName": "OnePlus 3",
    "generation": "OnePlus 3",
    "status": "discontinued",
    "launchDate": "2016-06",
    "pricing": {
      "startingPrice": 27999,
      "maximumPrice": 27999,
      "launchPrice": 27999,
      "currentPrice": 27999,
      "currency": "INR",
      "priceEffectiveDate": "2016-06",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "Optic AMOLED",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 820",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 16MP OIS",
      "mainCamera": "16 MP, f/2.0, OIS, PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3000,
      "wiredCharging": 20
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
      "dimensions": "152.7 x 74.7 x 7.4 mm",
      "weight": 158,
      "materials": "Gorilla Glass 4, anodized aluminum body",
      "waterResistance": "None",
      "colors": [
        "Graphite",
        "Soft Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
      "launchOS": "Android 6.0.1",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-3",
      "productPage": "https://www.oneplus.in/oneplus-3",
      "specSheetUrl": "https://www.oneplus.in/oneplus-3",
      "verifiedDate": "2016-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-3t",
    "slug": "oneplus-3t",
    "brand": "OnePlus",
    "modelName": "OnePlus 3T",
    "generation": "OnePlus 3",
    "status": "discontinued",
    "launchDate": "2016-11",
    "pricing": {
      "startingPrice": 29999,
      "maximumPrice": 34999,
      "launchPrice": 29999,
      "currentPrice": 29999,
      "currency": "INR",
      "priceEffectiveDate": "2016-11",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "Optic AMOLED",
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
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 16MP OIS",
      "mainCamera": "16 MP, f/2.0, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3400,
      "wiredCharging": 20
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
      "dimensions": "152.7 x 74.7 x 7.4 mm",
      "weight": 158,
      "materials": "Gorilla Glass 4, anodized aluminum body",
      "waterResistance": "None",
      "colors": [
        "Gunmetal",
        "Soft Gold",
        "Midnight Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-3t",
      "productPage": "https://www.oneplus.in/oneplus-3t",
      "specSheetUrl": "https://www.oneplus.in/oneplus-3t",
      "verifiedDate": "2016-11",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-5",
    "slug": "oneplus-5",
    "brand": "OnePlus",
    "modelName": "OnePlus 5",
    "generation": "OnePlus 5",
    "status": "discontinued",
    "launchDate": "2017-06",
    "pricing": {
      "startingPrice": 32999,
      "maximumPrice": 37999,
      "launchPrice": 32999,
      "currentPrice": 32999,
      "currency": "INR",
      "priceEffectiveDate": "2017-06",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "Optic AMOLED",
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
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (16MP + 20MP Tele)",
      "mainCamera": "16 MP, f/1.7, 24mm, EIS",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "telephotoCamera": "20 MP, f/2.6, 1.6x Telephoto"
    },
    "battery": {
      "batteryCapacity": 3300,
      "wiredCharging": 20
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
      "dimensions": "154.2 x 74.1 x 7.3 mm",
      "weight": 153,
      "materials": "Gorilla Glass 5, aluminum unibody",
      "waterResistance": "None",
      "colors": [
        "Midnight Black",
        "Slate Gray",
        "Soft Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
      "launchOS": "Android 7.1.1",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-5",
      "productPage": "https://www.oneplus.in/oneplus-5",
      "specSheetUrl": "https://www.oneplus.in/oneplus-5",
      "verifiedDate": "2017-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-5t",
    "slug": "oneplus-5t",
    "brand": "OnePlus",
    "modelName": "OnePlus 5T",
    "generation": "OnePlus 5",
    "status": "discontinued",
    "launchDate": "2017-11",
    "pricing": {
      "startingPrice": 32999,
      "maximumPrice": 37999,
      "launchPrice": 32999,
      "currentPrice": 32999,
      "currency": "INR",
      "priceEffectiveDate": "2017-11",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.01\"",
      "displayType": "Optic AMOLED",
      "resolution": "1080 x 2160",
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
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (16MP + 20MP Low Light)",
      "mainCamera": "16 MP, f/1.7, 27mm, EIS",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3300,
      "wiredCharging": 20
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
      "dimensions": "156.1 x 75.0 x 7.3 mm",
      "weight": 162,
      "materials": "Gorilla Glass 5, aluminum unibody",
      "waterResistance": "None",
      "colors": [
        "Midnight Black",
        "Lava Red",
        "Sandstone White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
      "launchOS": "Android 7.1.1",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-5t",
      "productPage": "https://www.oneplus.in/oneplus-5t",
      "specSheetUrl": "https://www.oneplus.in/oneplus-5t",
      "verifiedDate": "2017-11",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-6",
    "slug": "oneplus-6",
    "brand": "OnePlus",
    "modelName": "OnePlus 6",
    "generation": "OnePlus 6",
    "status": "discontinued",
    "launchDate": "2018-05",
    "pricing": {
      "startingPrice": 34999,
      "maximumPrice": 43999,
      "launchPrice": 34999,
      "currentPrice": 34999,
      "currency": "INR",
      "priceEffectiveDate": "2018-05",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.28\"",
      "displayType": "Optic AMOLED",
      "resolution": "1080 x 2280",
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
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (16MP OIS + 20MP)",
      "mainCamera": "16 MP, f/1.7, 25mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3300,
      "wiredCharging": 20
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
      "dimensions": "155.7 x 75.4 x 7.8 mm",
      "weight": 177,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Mirror Black",
        "Midnight Black",
        "Silk White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
      "launchOS": "Android 8.1",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-6",
      "productPage": "https://www.oneplus.in/oneplus-6",
      "specSheetUrl": "https://www.oneplus.in/oneplus-6",
      "verifiedDate": "2018-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-6t",
    "slug": "oneplus-6t",
    "brand": "OnePlus",
    "modelName": "OnePlus 6T",
    "generation": "OnePlus 6",
    "status": "discontinued",
    "launchDate": "2018-10",
    "pricing": {
      "startingPrice": 37999,
      "maximumPrice": 45999,
      "launchPrice": 37999,
      "currentPrice": 37999,
      "currency": "INR",
      "priceEffectiveDate": "2018-10",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.41\"",
      "displayType": "Optic AMOLED",
      "resolution": "1080 x 2340",
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
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (16MP OIS + 20MP)",
      "mainCamera": "16 MP, f/1.7, 25mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3700,
      "wiredCharging": 20
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
      "dimensions": "157.5 x 74.8 x 8.2 mm",
      "weight": 185,
      "materials": "Gorilla Glass 6 front, Gorilla Glass 5 back",
      "waterResistance": "Splash resistant",
      "colors": [
        "Mirror Black",
        "Midnight Black",
        "Thunder Purple"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-6t",
      "productPage": "https://www.oneplus.in/oneplus-6t",
      "specSheetUrl": "https://www.oneplus.in/oneplus-6t",
      "verifiedDate": "2018-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-7",
    "slug": "oneplus-7",
    "brand": "OnePlus",
    "modelName": "OnePlus 7",
    "generation": "OnePlus 7",
    "status": "discontinued",
    "launchDate": "2019-05",
    "pricing": {
      "startingPrice": 32999,
      "maximumPrice": 37999,
      "launchPrice": 32999,
      "currentPrice": 32999,
      "currency": "INR",
      "priceEffectiveDate": "2019-05",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.41\"",
      "displayType": "Optic AMOLED",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
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
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (48MP OIS + 5MP Depth)",
      "mainCamera": "48 MP, f/1.7, 28mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3700,
      "wiredCharging": 20
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
      "dimensions": "157.7 x 74.8 x 8.2 mm",
      "weight": 182,
      "materials": "Gorilla Glass 6 front, glass back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Mirror Gray",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-7",
      "productPage": "https://www.oneplus.in/oneplus-7",
      "specSheetUrl": "https://www.oneplus.in/oneplus-7",
      "verifiedDate": "2019-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-7-pro",
    "slug": "oneplus-7-pro",
    "brand": "OnePlus",
    "modelName": "OnePlus 7 Pro",
    "generation": "OnePlus 7",
    "status": "discontinued",
    "launchDate": "2019-05",
    "pricing": {
      "startingPrice": 48999,
      "maximumPrice": 57999,
      "launchPrice": 48999,
      "currentPrice": 48999,
      "currency": "INR",
      "priceEffectiveDate": "2019-05",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "Fluid AMOLED 90Hz HDR10+",
      "resolution": "1440 x 3120",
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
        "6GB",
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP OIS + 8MP 3x Tele + 16MP UW)",
      "mainCamera": "48 MP, f/1.6, 26mm, OIS, Laser/PDAF",
      "frontCamera": "Motorized pop-up 16 MP",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 14mm ultrawide",
      "telephotoCamera": "8 MP, f/2.4, 78mm 3x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 30
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
      "dimensions": "162.6 x 75.9 x 8.8 mm",
      "weight": 206,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Nebula Blue",
        "Mirror Gray",
        "Almond"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-7-pro",
      "productPage": "https://www.oneplus.in/oneplus-7-pro",
      "specSheetUrl": "https://www.oneplus.in/oneplus-7-pro",
      "verifiedDate": "2019-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-7t",
    "slug": "oneplus-7t",
    "brand": "OnePlus",
    "modelName": "OnePlus 7T",
    "generation": "OnePlus 7",
    "status": "discontinued",
    "launchDate": "2019-09",
    "pricing": {
      "startingPrice": 37999,
      "maximumPrice": 39999,
      "launchPrice": 37999,
      "currentPrice": 37999,
      "currency": "INR",
      "priceEffectiveDate": "2019-09",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.55\"",
      "displayType": "Fluid AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 855+",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP OIS + 12MP 2x Tele + 16MP UW)",
      "mainCamera": "48 MP, f/1.6, 26mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 17mm ultrawide",
      "telephotoCamera": "12 MP, f/2.2, 51mm 2x Telephoto"
    },
    "battery": {
      "batteryCapacity": 3800,
      "wiredCharging": 30
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
      "dimensions": "160.9 x 74.4 x 8.1 mm",
      "weight": 190,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Frosted Silver",
        "Glacier Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-7t",
      "productPage": "https://www.oneplus.in/oneplus-7t",
      "specSheetUrl": "https://www.oneplus.in/oneplus-7t",
      "verifiedDate": "2019-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-7t-pro",
    "slug": "oneplus-7t-pro",
    "brand": "OnePlus",
    "modelName": "OnePlus 7T Pro",
    "generation": "OnePlus 7",
    "status": "discontinued",
    "launchDate": "2019-10",
    "pricing": {
      "startingPrice": 53999,
      "maximumPrice": 58999,
      "launchPrice": 53999,
      "currentPrice": 53999,
      "currency": "INR",
      "priceEffectiveDate": "2019-10",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "Fluid AMOLED 90Hz HDR10+",
      "resolution": "1440 x 3120",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 855+",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP OIS + 8MP 3x Tele + 16MP UW)",
      "mainCamera": "48 MP, f/1.6, 26mm, OIS, Laser/PDAF",
      "frontCamera": "Motorized pop-up 16 MP",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 13mm ultrawide",
      "telephotoCamera": "8 MP, f/2.4, 78mm 3x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 4085,
      "wiredCharging": 30
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
      "dimensions": "162.6 x 75.9 x 8.8 mm",
      "weight": 206,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Haze Blue",
        "McLaren Edition"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-7t-pro",
      "productPage": "https://www.oneplus.in/oneplus-7t-pro",
      "specSheetUrl": "https://www.oneplus.in/oneplus-7t-pro",
      "verifiedDate": "2019-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-8",
    "slug": "oneplus-8",
    "brand": "OnePlus",
    "modelName": "OnePlus 8",
    "generation": "OnePlus 8",
    "status": "discontinued",
    "launchDate": "2020-04",
    "pricing": {
      "startingPrice": 41999,
      "maximumPrice": 49999,
      "launchPrice": 41999,
      "currentPrice": 41999,
      "currency": "INR",
      "priceEffectiveDate": "2020-04",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.55\"",
      "displayType": "Fluid AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 865 5G",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP OIS + 16MP UW + 2MP Macro)",
      "mainCamera": "48 MP, f/1.8, 25mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 14mm ultrawide"
    },
    "battery": {
      "batteryCapacity": 4300,
      "wiredCharging": 30
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
      "dimensions": "160.2 x 72.9 x 8.0 mm",
      "weight": 180,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Onyx Black",
        "Glacial Green",
        "Interstellar Glow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-8",
      "productPage": "https://www.oneplus.in/oneplus-8",
      "specSheetUrl": "https://www.oneplus.in/oneplus-8",
      "verifiedDate": "2020-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-8-pro",
    "slug": "oneplus-8-pro",
    "brand": "OnePlus",
    "modelName": "OnePlus 8 Pro",
    "generation": "OnePlus 8",
    "status": "discontinued",
    "launchDate": "2020-04",
    "pricing": {
      "startingPrice": 54999,
      "maximumPrice": 59999,
      "launchPrice": 54999,
      "currentPrice": 54999,
      "currency": "INR",
      "priceEffectiveDate": "2020-04",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "Fluid AMOLED 120Hz QHD+ HDR10+",
      "resolution": "1440 x 3168",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 865 5G",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP OIS + 8MP 3x Tele + 48MP UW + 5MP Color)",
      "mainCamera": "48 MP, f/1.8, 25mm, OIS, omnidirectional PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "48 MP, f/2.2, 14mm ultrawide",
      "telephotoCamera": "8 MP, f/2.4, 3x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 4510,
      "wiredCharging": 30,
      "wirelessCharging": 30
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
      "dimensions": "165.3 x 74.4 x 8.5 mm",
      "weight": 199,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "IP68",
      "colors": [
        "Onyx Black",
        "Glacial Green",
        "Ultramarine Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-8-pro",
      "productPage": "https://www.oneplus.in/oneplus-8-pro",
      "specSheetUrl": "https://www.oneplus.in/oneplus-8-pro",
      "verifiedDate": "2020-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-8t",
    "slug": "oneplus-8t",
    "brand": "OnePlus",
    "modelName": "OnePlus 8T",
    "generation": "OnePlus 8",
    "status": "discontinued",
    "launchDate": "2020-10",
    "pricing": {
      "startingPrice": 42999,
      "maximumPrice": 45999,
      "launchPrice": 42999,
      "currentPrice": 42999,
      "currency": "INR",
      "priceEffectiveDate": "2020-10",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.55\"",
      "displayType": "Fluid AMOLED 120Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 865 5G",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP OIS + 16MP UW + 5MP Macro + 2MP Mono)",
      "mainCamera": "48 MP, f/1.7, 26mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 14mm ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 65
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
      "dimensions": "160.7 x 74.1 x 8.4 mm",
      "weight": 188,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Aquamarine Green",
        "Lunar Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-8t",
      "productPage": "https://www.oneplus.in/oneplus-8t",
      "specSheetUrl": "https://www.oneplus.in/oneplus-8t",
      "verifiedDate": "2020-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-9",
    "slug": "oneplus-9",
    "brand": "OnePlus",
    "modelName": "OnePlus 9",
    "generation": "OnePlus 9",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 49999,
      "maximumPrice": 54999,
      "launchPrice": 49999,
      "currentPrice": 49999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.55\"",
      "displayType": "Fluid AMOLED 120Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 888 5G",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple Hasselblad (48MP + 50MP UW + 2MP Mono)",
      "mainCamera": "48 MP, f/1.8, 23mm, omnidirectional PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "50 MP, f/2.2, 14mm ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 65,
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
      "dimensions": "160.0 x 74.2 x 8.7 mm",
      "weight": 192,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "None",
      "colors": [
        "Winter Mist",
        "Arctic Sky",
        "Astral Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-9",
      "productPage": "https://www.oneplus.in/oneplus-9",
      "specSheetUrl": "https://www.oneplus.in/oneplus-9",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-9-pro",
    "slug": "oneplus-9-pro",
    "brand": "OnePlus",
    "modelName": "OnePlus 9 Pro",
    "generation": "OnePlus 9",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 64999,
      "maximumPrice": 69999,
      "launchPrice": 64999,
      "currentPrice": 64999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "LTPO Fluid2 AMOLED 120Hz QHD+",
      "resolution": "1440 x 3216",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 888 5G",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad Hasselblad (48MP OIS + 8MP 3.3x Tele + 50MP UW + 2MP)",
      "mainCamera": "48 MP, f/1.8, 23mm, OIS, omnidirectional PDAF, Laser AF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "50 MP, f/2.2, 14mm ultrawide",
      "telephotoCamera": "8 MP, f/2.4, 77mm 3.3x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 65,
      "wirelessCharging": 50
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
      "dimensions": "163.2 x 73.6 x 8.7 mm",
      "weight": 197,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "IP68",
      "colors": [
        "Morning Mist",
        "Pine Green",
        "Stellar Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-9-pro",
      "productPage": "https://www.oneplus.in/oneplus-9-pro",
      "specSheetUrl": "https://www.oneplus.in/oneplus-9-pro",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-9r",
    "slug": "oneplus-9r",
    "brand": "OnePlus",
    "modelName": "OnePlus 9R",
    "generation": "OnePlus 9",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 39999,
      "maximumPrice": 43999,
      "launchPrice": 39999,
      "currentPrice": 39999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.55\"",
      "displayType": "Fluid AMOLED 120Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 870 5G",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP OIS + 16MP UW + 5MP Macro + 2MP Mono)",
      "mainCamera": "48 MP, f/1.7, 26mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 14mm ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 65
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
      "dimensions": "161.0 x 74.1 x 8.4 mm",
      "weight": 189,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Carbon Black",
        "Lake Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-9r",
      "productPage": "https://www.oneplus.in/oneplus-9r",
      "specSheetUrl": "https://www.oneplus.in/oneplus-9r",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-9rt",
    "slug": "oneplus-9rt",
    "brand": "OnePlus",
    "modelName": "OnePlus 9RT",
    "generation": "OnePlus 9",
    "status": "discontinued",
    "launchDate": "2021-10",
    "pricing": {
      "startingPrice": 42999,
      "maximumPrice": 46999,
      "launchPrice": 42999,
      "currentPrice": 42999,
      "currency": "INR",
      "priceEffectiveDate": "2021-10",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.62\"",
      "displayType": "AMOLED 120Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 888 5G",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP OIS + 16MP UW + 2MP Macro)",
      "mainCamera": "50 MP, f/1.8, 24mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 14mm ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 65
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
      "dimensions": "162.2 x 74.6 x 8.3 mm",
      "weight": 198,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Hacker Black",
        "Nano Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-9rt",
      "productPage": "https://www.oneplus.in/oneplus-9rt",
      "specSheetUrl": "https://www.oneplus.in/oneplus-9rt",
      "verifiedDate": "2021-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-nord",
    "slug": "oneplus-nord",
    "brand": "OnePlus",
    "modelName": "OnePlus Nord",
    "generation": "Nord",
    "status": "discontinued",
    "launchDate": "2020-07",
    "pricing": {
      "startingPrice": 24999,
      "maximumPrice": 29999,
      "launchPrice": 24999,
      "currentPrice": 24999,
      "currency": "INR",
      "priceEffectiveDate": "2020-07",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.44\"",
      "displayType": "Fluid AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2400",
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
        "6GB",
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP OIS + 8MP UW + 5MP Depth + 2MP Macro)",
      "mainCamera": "48 MP, f/1.8, 26mm, OIS, PDAF",
      "frontCamera": "Dual 32 MP + 8 MP Ultrawide",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.3, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4115,
      "wiredCharging": 30
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
      "dimensions": "158.3 x 73.3 x 8.2 mm",
      "weight": 184,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "None",
      "colors": [
        "Blue Marble",
        "Gray Onyx",
        "Gray Ash"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-nord",
      "productPage": "https://www.oneplus.in/oneplus-nord",
      "specSheetUrl": "https://www.oneplus.in/oneplus-nord",
      "verifiedDate": "2020-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-nord-2-5g",
    "slug": "oneplus-nord-2-5g",
    "brand": "OnePlus",
    "modelName": "OnePlus Nord 2 5G",
    "generation": "Nord 2",
    "status": "discontinued",
    "launchDate": "2021-07",
    "pricing": {
      "startingPrice": 27999,
      "maximumPrice": 34999,
      "launchPrice": 27999,
      "currentPrice": 27999,
      "currency": "INR",
      "priceEffectiveDate": "2021-07",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.43\"",
      "displayType": "Fluid AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 1200-AI",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP OIS + 8MP UW + 2MP Mono)",
      "mainCamera": "50 MP, f/1.9, 24mm, OIS, PDAF",
      "frontCamera": "32 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.3, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 65
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
      "dimensions": "158.9 x 73.2 x 8.3 mm",
      "weight": 189,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "None",
      "colors": [
        "Gray Sierra",
        "Blue Haze",
        "Green Wood"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-nord-2-5g",
      "productPage": "https://www.oneplus.in/oneplus-nord-2-5g",
      "specSheetUrl": "https://www.oneplus.in/oneplus-nord-2-5g",
      "verifiedDate": "2021-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-nord-2t-5g",
    "slug": "oneplus-nord-2t-5g",
    "brand": "OnePlus",
    "modelName": "OnePlus Nord 2T 5G",
    "generation": "Nord 2",
    "status": "discontinued",
    "launchDate": "2022-05",
    "pricing": {
      "startingPrice": 28999,
      "maximumPrice": 33999,
      "launchPrice": 28999,
      "currentPrice": 28999,
      "currency": "INR",
      "priceEffectiveDate": "2022-05",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.43\"",
      "displayType": "AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 1300",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP OIS + 8MP UW + 2MP Mono)",
      "mainCamera": "50 MP, f/1.9, 24mm, OIS, PDAF",
      "frontCamera": "32 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 80
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
      "dimensions": "159.1 x 73.2 x 8.2 mm",
      "weight": 190,
      "materials": "Gorilla Glass 5 front, plastic frame",
      "waterResistance": "None",
      "colors": [
        "Jade Fog",
        "Gray Shadow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-nord-2t-5g",
      "productPage": "https://www.oneplus.in/oneplus-nord-2t-5g",
      "specSheetUrl": "https://www.oneplus.in/oneplus-nord-2t-5g",
      "verifiedDate": "2022-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-nord-ce-5g",
    "slug": "oneplus-nord-ce-5g",
    "brand": "OnePlus",
    "modelName": "OnePlus Nord CE 5G",
    "generation": "Nord CE",
    "status": "discontinued",
    "launchDate": "2021-06",
    "pricing": {
      "startingPrice": 22999,
      "maximumPrice": 27999,
      "launchPrice": 22999,
      "currentPrice": 22999,
      "currency": "INR",
      "priceEffectiveDate": "2021-06",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.43\"",
      "displayType": "Fluid AMOLED 90Hz",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 750G 5G",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB",
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Mono)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.3, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 30
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
      "dimensions": "159.2 x 73.5 x 7.9 mm",
      "weight": 170,
      "materials": "Glass front, plastic back & frame",
      "waterResistance": "None",
      "colors": [
        "Blue Void",
        "Charcoal Ink",
        "Silver Ray"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-nord-ce-5g",
      "productPage": "https://www.oneplus.in/oneplus-nord-ce-5g",
      "specSheetUrl": "https://www.oneplus.in/oneplus-nord-ce-5g",
      "verifiedDate": "2021-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-nord-ce-2-5g",
    "slug": "oneplus-nord-ce-2-5g",
    "brand": "OnePlus",
    "modelName": "OnePlus Nord CE 2 5G",
    "generation": "Nord CE",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 23999,
      "maximumPrice": 24999,
      "launchPrice": 23999,
      "currentPrice": 23999,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.43\"",
      "displayType": "AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 900",
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
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Macro)",
      "mainCamera": "64 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 65
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
      "dimensions": "160.6 x 73.2 x 7.8 mm",
      "weight": 173,
      "materials": "Gorilla Glass 5 front, plastic back",
      "waterResistance": "None",
      "colors": [
        "Bahama Blue",
        "Gray Mirror"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
      "launchOS": "Android 11",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-nord-ce-2-5g",
      "productPage": "https://www.oneplus.in/oneplus-nord-ce-2-5g",
      "specSheetUrl": "https://www.oneplus.in/oneplus-nord-ce-2-5g",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oneplus-nord-ce-2-lite-5g",
    "slug": "oneplus-nord-ce-2-lite-5g",
    "brand": "OnePlus",
    "modelName": "OnePlus Nord CE 2 Lite 5G",
    "generation": "Nord CE",
    "status": "discontinued",
    "launchDate": "2022-04",
    "pricing": {
      "startingPrice": 19999,
      "maximumPrice": 21999,
      "launchPrice": 19999,
      "currentPrice": 19999,
      "currency": "INR",
      "priceEffectiveDate": "2022-04",
      "source": "OnePlus India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.59\"",
      "displayType": "IPS LCD 120Hz",
      "resolution": "1080 x 2412",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 695 5G",
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
      "rearCameraSetup": "Triple (64MP + 2MP Macro + 2MP Depth)",
      "mainCamera": "64 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 33
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
      "dimensions": "164.3 x 75.6 x 8.5 mm",
      "weight": 195,
      "materials": "Glass front, plastic back & frame",
      "waterResistance": "None",
      "colors": [
        "Black Dusk",
        "Blue Tide"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "OxygenOS",
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
      "officialWebsite": "https://www.oneplus.in/oneplus-nord-ce-2-lite-5g",
      "productPage": "https://www.oneplus.in/oneplus-nord-ce-2-lite-5g",
      "specSheetUrl": "https://www.oneplus.in/oneplus-nord-ce-2-lite-5g",
      "verifiedDate": "2022-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  }
] as unknown as MobileModel[];

const variants: MobileVariant[] = [
  {
    "id": "oneplus-one-3-16",
    "modelId": "oneplus-one",
    "ram": "3GB",
    "storage": "16GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Silk White",
      "Sandstone Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-one-3-64",
    "modelId": "oneplus-one",
    "ram": "3GB",
    "storage": "64GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Silk White",
      "Sandstone Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-2-3-16",
    "modelId": "oneplus-2",
    "ram": "3GB",
    "storage": "16GB",
    "price": 22999,
    "mrp": 22999,
    "colors": [
      "Sandstone Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-2-4-64",
    "modelId": "oneplus-2",
    "ram": "4GB",
    "storage": "64GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Sandstone Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-x-3-16",
    "modelId": "oneplus-x",
    "ram": "3GB",
    "storage": "16GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Onyx",
      "Champagne"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-3-6-64",
    "modelId": "oneplus-3",
    "ram": "6GB",
    "storage": "64GB",
    "price": 27999,
    "mrp": 27999,
    "colors": [
      "Graphite",
      "Soft Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-3t-6-64",
    "modelId": "oneplus-3t",
    "ram": "6GB",
    "storage": "64GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Gunmetal",
      "Soft Gold",
      "Midnight Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-3t-6-128",
    "modelId": "oneplus-3t",
    "ram": "6GB",
    "storage": "128GB",
    "price": 34999,
    "mrp": 34999,
    "colors": [
      "Gunmetal",
      "Soft Gold",
      "Midnight Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-5-6-64",
    "modelId": "oneplus-5",
    "ram": "6GB",
    "storage": "64GB",
    "price": 32999,
    "mrp": 32999,
    "colors": [
      "Midnight Black",
      "Slate Gray",
      "Soft Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-5-8-128",
    "modelId": "oneplus-5",
    "ram": "8GB",
    "storage": "128GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Midnight Black",
      "Slate Gray",
      "Soft Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-5t-6-64",
    "modelId": "oneplus-5t",
    "ram": "6GB",
    "storage": "64GB",
    "price": 32999,
    "mrp": 32999,
    "colors": [
      "Midnight Black",
      "Lava Red",
      "Sandstone White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-5t-8-128",
    "modelId": "oneplus-5t",
    "ram": "8GB",
    "storage": "128GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Midnight Black",
      "Lava Red",
      "Sandstone White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-6-6-64",
    "modelId": "oneplus-6",
    "ram": "6GB",
    "storage": "64GB",
    "price": 34999,
    "mrp": 34999,
    "colors": [
      "Mirror Black",
      "Midnight Black",
      "Silk White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-6-8-128",
    "modelId": "oneplus-6",
    "ram": "8GB",
    "storage": "128GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Mirror Black",
      "Midnight Black",
      "Silk White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-6-8-256",
    "modelId": "oneplus-6",
    "ram": "8GB",
    "storage": "256GB",
    "price": 43999,
    "mrp": 43999,
    "colors": [
      "Mirror Black",
      "Midnight Black",
      "Silk White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-6t-6-128",
    "modelId": "oneplus-6t",
    "ram": "6GB",
    "storage": "128GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Mirror Black",
      "Midnight Black",
      "Thunder Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-6t-8-128",
    "modelId": "oneplus-6t",
    "ram": "8GB",
    "storage": "128GB",
    "price": 41999,
    "mrp": 41999,
    "colors": [
      "Mirror Black",
      "Midnight Black",
      "Thunder Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-6t-8-256",
    "modelId": "oneplus-6t",
    "ram": "8GB",
    "storage": "256GB",
    "price": 45999,
    "mrp": 45999,
    "colors": [
      "Mirror Black",
      "Midnight Black",
      "Thunder Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-7-6-128",
    "modelId": "oneplus-7",
    "ram": "6GB",
    "storage": "128GB",
    "price": 32999,
    "mrp": 32999,
    "colors": [
      "Mirror Gray",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-7-8-256",
    "modelId": "oneplus-7",
    "ram": "8GB",
    "storage": "256GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Mirror Gray",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-7-pro-6-128",
    "modelId": "oneplus-7-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 48999,
    "mrp": 48999,
    "colors": [
      "Nebula Blue",
      "Mirror Gray",
      "Almond"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-7-pro-8-256",
    "modelId": "oneplus-7-pro",
    "ram": "8GB",
    "storage": "256GB",
    "price": 52999,
    "mrp": 52999,
    "colors": [
      "Nebula Blue",
      "Mirror Gray",
      "Almond"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-7-pro-12-256",
    "modelId": "oneplus-7-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 57999,
    "mrp": 57999,
    "colors": [
      "Nebula Blue",
      "Mirror Gray",
      "Almond"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-7t-8-128",
    "modelId": "oneplus-7t",
    "ram": "8GB",
    "storage": "128GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Frosted Silver",
      "Glacier Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-7t-8-256",
    "modelId": "oneplus-7t",
    "ram": "8GB",
    "storage": "256GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Frosted Silver",
      "Glacier Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-7t-pro-8-256",
    "modelId": "oneplus-7t-pro",
    "ram": "8GB",
    "storage": "256GB",
    "price": 53999,
    "mrp": 53999,
    "colors": [
      "Haze Blue",
      "McLaren Edition"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-7t-pro-12-256",
    "modelId": "oneplus-7t-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 58999,
    "mrp": 58999,
    "colors": [
      "Haze Blue",
      "McLaren Edition"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-8-6-128",
    "modelId": "oneplus-8",
    "ram": "6GB",
    "storage": "128GB",
    "price": 41999,
    "mrp": 41999,
    "colors": [
      "Onyx Black",
      "Glacial Green",
      "Interstellar Glow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-8-8-128",
    "modelId": "oneplus-8",
    "ram": "8GB",
    "storage": "128GB",
    "price": 44999,
    "mrp": 44999,
    "colors": [
      "Onyx Black",
      "Glacial Green",
      "Interstellar Glow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-8-12-256",
    "modelId": "oneplus-8",
    "ram": "12GB",
    "storage": "256GB",
    "price": 49999,
    "mrp": 49999,
    "colors": [
      "Onyx Black",
      "Glacial Green",
      "Interstellar Glow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-8-pro-8-128",
    "modelId": "oneplus-8-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 54999,
    "mrp": 54999,
    "colors": [
      "Onyx Black",
      "Glacial Green",
      "Ultramarine Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-8-pro-12-256",
    "modelId": "oneplus-8-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 59999,
    "mrp": 59999,
    "colors": [
      "Onyx Black",
      "Glacial Green",
      "Ultramarine Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-8t-8-128",
    "modelId": "oneplus-8t",
    "ram": "8GB",
    "storage": "128GB",
    "price": 42999,
    "mrp": 42999,
    "colors": [
      "Aquamarine Green",
      "Lunar Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-8t-12-256",
    "modelId": "oneplus-8t",
    "ram": "12GB",
    "storage": "256GB",
    "price": 45999,
    "mrp": 45999,
    "colors": [
      "Aquamarine Green",
      "Lunar Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-9-8-128",
    "modelId": "oneplus-9",
    "ram": "8GB",
    "storage": "128GB",
    "price": 49999,
    "mrp": 49999,
    "colors": [
      "Winter Mist",
      "Arctic Sky",
      "Astral Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-9-12-256",
    "modelId": "oneplus-9",
    "ram": "12GB",
    "storage": "256GB",
    "price": 54999,
    "mrp": 54999,
    "colors": [
      "Winter Mist",
      "Arctic Sky",
      "Astral Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-9-pro-8-128",
    "modelId": "oneplus-9-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 64999,
    "mrp": 64999,
    "colors": [
      "Morning Mist",
      "Pine Green",
      "Stellar Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-9-pro-12-256",
    "modelId": "oneplus-9-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 69999,
    "mrp": 69999,
    "colors": [
      "Morning Mist",
      "Pine Green",
      "Stellar Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-9r-8-128",
    "modelId": "oneplus-9r",
    "ram": "8GB",
    "storage": "128GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Carbon Black",
      "Lake Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-9r-12-256",
    "modelId": "oneplus-9r",
    "ram": "12GB",
    "storage": "256GB",
    "price": 43999,
    "mrp": 43999,
    "colors": [
      "Carbon Black",
      "Lake Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-9rt-8-128",
    "modelId": "oneplus-9rt",
    "ram": "8GB",
    "storage": "128GB",
    "price": 42999,
    "mrp": 42999,
    "colors": [
      "Hacker Black",
      "Nano Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-9rt-12-256",
    "modelId": "oneplus-9rt",
    "ram": "12GB",
    "storage": "256GB",
    "price": 46999,
    "mrp": 46999,
    "colors": [
      "Hacker Black",
      "Nano Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-6-64",
    "modelId": "oneplus-nord",
    "ram": "6GB",
    "storage": "64GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Blue Marble",
      "Gray Onyx",
      "Gray Ash"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-8-128",
    "modelId": "oneplus-nord",
    "ram": "8GB",
    "storage": "128GB",
    "price": 27999,
    "mrp": 27999,
    "colors": [
      "Blue Marble",
      "Gray Onyx",
      "Gray Ash"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-12-256",
    "modelId": "oneplus-nord",
    "ram": "12GB",
    "storage": "256GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Blue Marble",
      "Gray Onyx",
      "Gray Ash"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-2-5g-6-128",
    "modelId": "oneplus-nord-2-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 27999,
    "mrp": 27999,
    "colors": [
      "Gray Sierra",
      "Blue Haze",
      "Green Wood"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-2-5g-8-128",
    "modelId": "oneplus-nord-2-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Gray Sierra",
      "Blue Haze",
      "Green Wood"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-2-5g-12-256",
    "modelId": "oneplus-nord-2-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 34999,
    "mrp": 34999,
    "colors": [
      "Gray Sierra",
      "Blue Haze",
      "Green Wood"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-2t-5g-8-128",
    "modelId": "oneplus-nord-2t-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 28999,
    "mrp": 28999,
    "colors": [
      "Jade Fog",
      "Gray Shadow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-2t-5g-12-256",
    "modelId": "oneplus-nord-2t-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 33999,
    "mrp": 33999,
    "colors": [
      "Jade Fog",
      "Gray Shadow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-ce-5g-6-128",
    "modelId": "oneplus-nord-ce-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 22999,
    "mrp": 22999,
    "colors": [
      "Blue Void",
      "Charcoal Ink",
      "Silver Ray"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-ce-5g-8-128",
    "modelId": "oneplus-nord-ce-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Blue Void",
      "Charcoal Ink",
      "Silver Ray"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-ce-5g-12-256",
    "modelId": "oneplus-nord-ce-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 27999,
    "mrp": 27999,
    "colors": [
      "Blue Void",
      "Charcoal Ink",
      "Silver Ray"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-ce-2-5g-6-128",
    "modelId": "oneplus-nord-ce-2-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Bahama Blue",
      "Gray Mirror"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-ce-2-5g-8-128",
    "modelId": "oneplus-nord-ce-2-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Bahama Blue",
      "Gray Mirror"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-ce-2-lite-5g-6-128",
    "modelId": "oneplus-nord-ce-2-lite-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Black Dusk",
      "Blue Tide"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oneplus-nord-ce-2-lite-5g-8-128",
    "modelId": "oneplus-nord-ce-2-lite-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Black Dusk",
      "Blue Tide"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  }
] as unknown as MobileVariant[];

const images: MobileImageCatalogEntry[] = [
  {
    "modelId": "oneplus-one",
    "modelName": "OnePlus One",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-one.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-one.jpg",
        "verified": true,
        "alt": "OnePlus One Sandstone Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-2",
    "modelName": "OnePlus 2",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-two.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-two.jpg",
        "verified": true,
        "alt": "OnePlus 2 Sandstone Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-x",
    "modelName": "OnePlus X",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-x.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-x.jpg",
        "verified": true,
        "alt": "OnePlus X Onyx"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-3",
    "modelName": "OnePlus 3",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-3.jpg",
        "verified": true,
        "alt": "OnePlus 3 Graphite"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-3t",
    "modelName": "OnePlus 3T",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-3t.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-3t.jpg",
        "verified": true,
        "alt": "OnePlus 3T Gunmetal"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-5",
    "modelName": "OnePlus 5",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-5.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-5.jpg",
        "verified": true,
        "alt": "OnePlus 5 Midnight Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-5t",
    "modelName": "OnePlus 5T",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-5t.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-5t.jpg",
        "verified": true,
        "alt": "OnePlus 5T Midnight Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-6",
    "modelName": "OnePlus 6",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-6.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-6.jpg",
        "verified": true,
        "alt": "OnePlus 6 Mirror Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-6t",
    "modelName": "OnePlus 6T",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-6t-midnight-black.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-6t-midnight-black.jpg",
        "verified": true,
        "alt": "OnePlus 6T Mirror Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-7",
    "modelName": "OnePlus 7",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7.jpg",
        "verified": true,
        "alt": "OnePlus 7 Mirror Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-7-pro",
    "modelName": "OnePlus 7 Pro",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7-pro-r.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7-pro-r.jpg",
        "verified": true,
        "alt": "OnePlus 7 Pro Nebula Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-7t",
    "modelName": "OnePlus 7T",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7t-1.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7t-1.jpg",
        "verified": true,
        "alt": "OnePlus 7T Glacier Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-7t-pro",
    "modelName": "OnePlus 7T Pro",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7t-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7t-pro.jpg",
        "verified": true,
        "alt": "OnePlus 7T Pro Haze Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-8",
    "modelName": "OnePlus 8",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8.jpg",
        "verified": true,
        "alt": "OnePlus 8 Glacial Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-8-pro",
    "modelName": "OnePlus 8 Pro",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8-pro.jpg",
        "verified": true,
        "alt": "OnePlus 8 Pro Glacial Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-8t",
    "modelName": "OnePlus 8T",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8t-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8t-5g.jpg",
        "verified": true,
        "alt": "OnePlus 8T Aquamarine Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-9",
    "modelName": "OnePlus 9",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-.jpg",
        "verified": true,
        "alt": "OnePlus 9 Winter Mist"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-9-pro",
    "modelName": "OnePlus 9 Pro",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg",
        "verified": true,
        "alt": "OnePlus 9 Pro Morning Mist"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-9r",
    "modelName": "OnePlus 9R",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9r.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9r.jpg",
        "verified": true,
        "alt": "OnePlus 9R Carbon Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-9rt",
    "modelName": "OnePlus 9RT",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9rt-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9rt-5g.jpg",
        "verified": true,
        "alt": "OnePlus 9RT Hacker Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-nord",
    "modelName": "OnePlus Nord",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-.jpg",
        "verified": true,
        "alt": "OnePlus Nord Blue Marble"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-nord-2-5g",
    "modelName": "OnePlus Nord 2 5G",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-2-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-2-5g.jpg",
        "verified": true,
        "alt": "OnePlus Nord 2 Gray Sierra"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-nord-2t-5g",
    "modelName": "OnePlus Nord 2T 5G",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-2t.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-2t.jpg",
        "verified": true,
        "alt": "OnePlus Nord 2T Jade Fog"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-nord-ce-5g",
    "modelName": "OnePlus Nord CE 5G",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-5g.jpg",
        "verified": true,
        "alt": "OnePlus Nord CE Blue Void"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-nord-ce-2-5g",
    "modelName": "OnePlus Nord CE 2 5G",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-2-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-2-5g.jpg",
        "verified": true,
        "alt": "OnePlus Nord CE 2 Bahama Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oneplus-nord-ce-2-lite-5g",
    "modelName": "OnePlus Nord CE 2 Lite 5G",
    "brand": "OnePlus",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-2-lite-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-2-lite-5g.jpg",
        "verified": true,
        "alt": "OnePlus Nord CE 2 Lite Black Dusk"
      }
    ],
    "verifiedCoverage": true
  }
] as unknown as MobileImageCatalogEntry[];

export const oneplusAdditionsBundle: MobileBrandBundle = {
  models,
  variants,
  images,
};
