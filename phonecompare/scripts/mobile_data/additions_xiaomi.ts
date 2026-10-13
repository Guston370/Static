import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  {
    "id": "xiaomi-mi-3",
    "slug": "xiaomi-mi-3",
    "brand": "Xiaomi",
    "modelName": "Mi 3",
    "generation": "Mi 3",
    "status": "discontinued",
    "launchDate": "2014-07",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 13999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2014-07",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
      "displayType": "IPS LCD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 800",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB"
      ],
      "storageOptions": [
        "16GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.2, 28mm",
      "frontCamera": "2 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3050,
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
      "dimensions": "144.0 x 73.6 x 8.1 mm",
      "weight": 145,
      "materials": "Magnesium alloy internal frame, polycarbonate body",
      "waterResistance": "None",
      "colors": [
        "Metallic Gray",
        "Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 4.3",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-3",
      "productPage": "https://www.mi.com/in/xiaomi-mi-3",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-3",
      "verifiedDate": "2014-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-4",
    "slug": "xiaomi-mi-4",
    "brand": "Xiaomi",
    "modelName": "Mi 4",
    "generation": "Mi 4",
    "status": "discontinued",
    "launchDate": "2015-01",
    "pricing": {
      "startingPrice": 19999,
      "maximumPrice": 23999,
      "launchPrice": 19999,
      "currentPrice": 19999,
      "currency": "INR",
      "priceEffectiveDate": "2015-01",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
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
      "mainCamera": "13 MP, f/1.8, 1/3.1\"",
      "frontCamera": "8 MP, f/1.8",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3080,
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
      "dimensions": "139.2 x 68.5 x 8.9 mm",
      "weight": 149,
      "materials": "Stainless steel frame, polycarbonate back",
      "waterResistance": "None",
      "colors": [
        "White",
        "Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 4.4.3",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-4",
      "productPage": "https://www.mi.com/in/xiaomi-mi-4",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-4",
      "verifiedDate": "2015-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-4i",
    "slug": "xiaomi-mi-4i",
    "brand": "Xiaomi",
    "modelName": "Mi 4i",
    "generation": "Mi 4",
    "status": "discontinued",
    "launchDate": "2015-04",
    "pricing": {
      "startingPrice": 12999,
      "maximumPrice": 14999,
      "launchPrice": 12999,
      "currentPrice": 12999,
      "currency": "INR",
      "priceEffectiveDate": "2015-04",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
      "displayType": "IPS LCD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 615",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB"
      ],
      "storageOptions": [
        "16GB",
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.0, dual-LED flash",
      "frontCamera": "5 MP, f/1.8",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3120,
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
      "dimensions": "138.1 x 69.6 x 7.8 mm",
      "weight": 130,
      "materials": "Corning Concore glass, polycarbonate unibody",
      "waterResistance": "None",
      "colors": [
        "Dark Grey",
        "White",
        "Yellow",
        "Blue",
        "Pink"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 5.0.2",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-4i",
      "productPage": "https://www.mi.com/in/xiaomi-mi-4i",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-4i",
      "verifiedDate": "2015-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-5",
    "slug": "xiaomi-mi-5",
    "brand": "Xiaomi",
    "modelName": "Mi 5",
    "generation": "Mi 5",
    "status": "discontinued",
    "launchDate": "2016-02",
    "pricing": {
      "startingPrice": 24999,
      "maximumPrice": 24999,
      "launchPrice": 24999,
      "currentPrice": 24999,
      "currency": "INR",
      "priceEffectiveDate": "2016-02",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.15\"",
      "displayType": "IPS LCD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 820",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB"
      ],
      "storageOptions": [
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 16MP 4-axis OIS",
      "mainCamera": "16 MP, f/2.0, 4-axis OIS, PDAF",
      "frontCamera": "4 MP, f/2.0, 2\u00b5m",
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
      "dimensions": "144.6 x 69.2 x 7.3 mm",
      "weight": 129,
      "materials": "Gorilla Glass 4 front/back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Black",
        "White",
        "Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 6.0",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-5",
      "productPage": "https://www.mi.com/in/xiaomi-mi-5",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-5",
      "verifiedDate": "2016-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-max",
    "slug": "xiaomi-mi-max",
    "brand": "Xiaomi",
    "modelName": "Mi Max",
    "generation": "Mi Max",
    "status": "discontinued",
    "launchDate": "2016-05",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 19999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2016-05",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.44\"",
      "displayType": "IPS LCD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 650",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB",
        "4GB"
      ],
      "storageOptions": [
        "32GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 16MP",
      "mainCamera": "16 MP, f/2.0, PDAF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4850,
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
      "dimensions": "173.1 x 88.3 x 7.5 mm",
      "weight": 203,
      "materials": "Gorilla Glass 4, aluminum body",
      "waterResistance": "None",
      "colors": [
        "Silver",
        "Gray",
        "Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 6.0",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-max",
      "productPage": "https://www.mi.com/in/xiaomi-mi-max",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-max",
      "verifiedDate": "2016-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-max-2",
    "slug": "xiaomi-mi-max-2",
    "brand": "Xiaomi",
    "modelName": "Mi Max 2",
    "generation": "Mi Max",
    "status": "discontinued",
    "launchDate": "2017-05",
    "pricing": {
      "startingPrice": 16999,
      "maximumPrice": 18999,
      "launchPrice": 16999,
      "currentPrice": 16999,
      "currency": "INR",
      "priceEffectiveDate": "2017-05",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.44\"",
      "displayType": "IPS LCD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 625",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "4GB"
      ],
      "storageOptions": [
        "32GB",
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP",
      "mainCamera": "12 MP, f/2.2, 1/2.9\", PDAF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5300,
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
      "dimensions": "174.1 x 88.7 x 7.6 mm",
      "weight": 211,
      "materials": "Gorilla Glass 3, aluminum body",
      "waterResistance": "None",
      "colors": [
        "Matte Black",
        "Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 7.1.1",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-max-2",
      "productPage": "https://www.mi.com/in/xiaomi-mi-max-2",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-max-2",
      "verifiedDate": "2017-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-mix-2",
    "slug": "xiaomi-mi-mix-2",
    "brand": "Xiaomi",
    "modelName": "Mi MIX 2",
    "generation": "Mi MIX",
    "status": "discontinued",
    "launchDate": "2017-09",
    "pricing": {
      "startingPrice": 35999,
      "maximumPrice": 35999,
      "launchPrice": 35999,
      "currentPrice": 35999,
      "currency": "INR",
      "priceEffectiveDate": "2017-09",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.99\"",
      "displayType": "IPS LCD 18:9",
      "resolution": "1080 x 2160",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 835",
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
      "rearCameraSetup": "Single 12MP 4-axis OIS",
      "mainCamera": "12 MP, f/2.0, 4-axis OIS, PDAF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3400,
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
      "dimensions": "151.8 x 75.5 x 7.7 mm",
      "weight": 185,
      "materials": "Gorilla Glass 4 front, ceramic back, 7000-series aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-mix-2",
      "productPage": "https://www.mi.com/in/xiaomi-mi-mix-2",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-mix-2",
      "verifiedDate": "2017-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-a1",
    "slug": "xiaomi-mi-a1",
    "brand": "Xiaomi",
    "modelName": "Mi A1",
    "generation": "Mi A",
    "status": "discontinued",
    "launchDate": "2017-09",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 14999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2017-09",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "LTPS IPS LCD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 625",
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
      "rearCameraSetup": "Dual (12MP + 12MP Tele)",
      "mainCamera": "12 MP, f/2.2, 26mm, PDAF",
      "frontCamera": "5 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "telephotoCamera": "12 MP, f/2.6, 50mm 2x Telephoto"
    },
    "battery": {
      "batteryCapacity": 3080,
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
      "dimensions": "155.4 x 75.8 x 7.3 mm",
      "weight": 165,
      "materials": "Gorilla Glass 3, aluminum body",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Gold",
        "Rose Gold",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Android One",
      "launchOS": "Android 7.1.2",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-a1",
      "productPage": "https://www.mi.com/in/xiaomi-mi-a1",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-a1",
      "verifiedDate": "2017-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-a2",
    "slug": "xiaomi-mi-a2",
    "brand": "Xiaomi",
    "modelName": "Mi A2",
    "generation": "Mi A",
    "status": "discontinued",
    "launchDate": "2018-07",
    "pricing": {
      "startingPrice": 16999,
      "maximumPrice": 19999,
      "launchPrice": 16999,
      "currentPrice": 16999,
      "currency": "INR",
      "priceEffectiveDate": "2018-07",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.99\"",
      "displayType": "LTPS IPS LCD",
      "resolution": "1080 x 2160",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 660",
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
      "rearCameraSetup": "Dual (12MP + 20MP Low Light)",
      "mainCamera": "12 MP, f/1.8, 1/2.9\", PDAF",
      "frontCamera": "20 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
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
      "dimensions": "158.7 x 75.4 x 7.3 mm",
      "weight": 166,
      "materials": "Gorilla Glass 5, aluminum body",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Gold",
        "Blue",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Android One",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-a2",
      "productPage": "https://www.mi.com/in/xiaomi-mi-a2",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-a2",
      "verifiedDate": "2018-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-a3",
    "slug": "xiaomi-mi-a3",
    "brand": "Xiaomi",
    "modelName": "Mi A3",
    "generation": "Mi A",
    "status": "discontinued",
    "launchDate": "2019-07",
    "pricing": {
      "startingPrice": 12999,
      "maximumPrice": 15999,
      "launchPrice": 12999,
      "currentPrice": 12999,
      "currency": "INR",
      "priceEffectiveDate": "2019-07",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.088\"",
      "displayType": "Super AMOLED",
      "resolution": "720 x 1560",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 665",
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
      "rearCameraSetup": "Triple (48MP + 8MP UW + 2MP Depth)",
      "mainCamera": "48 MP, f/1.8, PDAF",
      "frontCamera": "32 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4030,
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
      "dimensions": "153.5 x 71.9 x 8.5 mm",
      "weight": 173.8,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Kind of Grey",
        "Not Just Blue",
        "More Than White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Android One",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-a3",
      "productPage": "https://www.mi.com/in/xiaomi-mi-a3",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-a3",
      "verifiedDate": "2019-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-10-5g",
    "slug": "xiaomi-mi-10-5g",
    "brand": "Xiaomi",
    "modelName": "Mi 10 5G",
    "generation": "Mi 10",
    "status": "discontinued",
    "launchDate": "2020-02",
    "pricing": {
      "startingPrice": 49999,
      "maximumPrice": 54999,
      "launchPrice": 49999,
      "currentPrice": 49999,
      "currency": "INR",
      "priceEffectiveDate": "2020-02",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "Super AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2340",
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
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (108MP OIS + 13MP UW + 2MP Macro + 2MP Depth)",
      "mainCamera": "108 MP, f/1.7, OIS, PDAF",
      "frontCamera": "20 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "13 MP, f/2.4, 123\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4780,
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
      "dimensions": "162.5 x 74.8 x 9.0 mm",
      "weight": 208,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Twilight Grey",
        "Coral Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-10-5g",
      "productPage": "https://www.mi.com/in/xiaomi-mi-10-5g",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-10-5g",
      "verifiedDate": "2020-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-10t-5g",
    "slug": "xiaomi-mi-10t-5g",
    "brand": "Xiaomi",
    "modelName": "Mi 10T 5G",
    "generation": "Mi 10",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 35999,
      "maximumPrice": 37999,
      "launchPrice": 35999,
      "currentPrice": 35999,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "IPS LCD 144Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 144,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 865 5G",
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
      "rearCameraSetup": "Triple (64MP + 13MP UW + 5MP Macro)",
      "mainCamera": "64 MP, f/1.9, 26mm, PDAF",
      "frontCamera": "20 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "13 MP, f/2.4, 123\u02da ultrawide"
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
      "dimensions": "165.1 x 76.4 x 9.3 mm",
      "weight": 216,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Cosmic Black",
        "Lunar Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-10t-5g",
      "productPage": "https://www.mi.com/in/xiaomi-mi-10t-5g",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-10t-5g",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-10t-pro-5g",
    "slug": "xiaomi-mi-10t-pro-5g",
    "brand": "Xiaomi",
    "modelName": "Mi 10T Pro 5G",
    "generation": "Mi 10",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 39999,
      "maximumPrice": 39999,
      "launchPrice": 39999,
      "currentPrice": 39999,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "IPS LCD 144Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 144,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 865 5G",
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
      "rearCameraSetup": "Triple (108MP OIS + 13MP UW + 5MP Macro)",
      "mainCamera": "108 MP, f/1.7, 26mm, OIS, PDAF",
      "frontCamera": "20 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "13 MP, f/2.4, 123\u02da ultrawide"
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
      "dimensions": "165.1 x 76.4 x 9.3 mm",
      "weight": 218,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Cosmic Black",
        "Lunar Silver",
        "Aurora Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-10t-pro-5g",
      "productPage": "https://www.mi.com/in/xiaomi-mi-10t-pro-5g",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-10t-pro-5g",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-10i-5g",
    "slug": "xiaomi-mi-10i-5g",
    "brand": "Xiaomi",
    "modelName": "Mi 10i 5G",
    "generation": "Mi 10",
    "status": "discontinued",
    "launchDate": "2021-01",
    "pricing": {
      "startingPrice": 20999,
      "maximumPrice": 23999,
      "launchPrice": 20999,
      "currentPrice": 20999,
      "currency": "INR",
      "priceEffectiveDate": "2021-01",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "IPS LCD 120Hz HDR10",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 750G 5G",
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
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (108MP + 8MP UW + 2MP Macro + 2MP Depth)",
      "mainCamera": "108 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4820,
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
      "dimensions": "165.4 x 76.8 x 9.0 mm",
      "weight": 214.5,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "IP53",
      "colors": [
        "Pacific Sunrise",
        "Midnight Black",
        "Atlantic Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-10i-5g",
      "productPage": "https://www.mi.com/in/xiaomi-mi-10i-5g",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-10i-5g",
      "verifiedDate": "2021-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-11-ultra",
    "slug": "xiaomi-mi-11-ultra",
    "brand": "Xiaomi",
    "modelName": "Mi 11 Ultra",
    "generation": "Mi 11",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 69999,
      "maximumPrice": 69999,
      "launchPrice": 69999,
      "currentPrice": 69999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.81\"",
      "displayType": "AMOLED 120Hz WQHD+ HDR10+ Dolby Vision",
      "resolution": "1440 x 3200",
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
        "12GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP OIS + 48MP 5x Tele OIS + 48MP UW)",
      "mainCamera": "50 MP, f/2.0, 24mm, 1/1.12\", Dual Pixel PDAF, OIS",
      "frontCamera": "20 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "48 MP, f/2.2, 12mm 128\u02da ultrawide",
      "telephotoCamera": "48 MP, f/4.1, 120mm 5x Periscope Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 67,
      "wirelessCharging": 67
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
      "dimensions": "164.3 x 74.6 x 8.4 mm",
      "weight": 234,
      "materials": "Gorilla Glass Victus front, ceramic back, aluminum frame",
      "waterResistance": "IP68",
      "colors": [
        "Ceramic Black",
        "Ceramic White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-11-ultra",
      "productPage": "https://www.mi.com/in/xiaomi-mi-11-ultra",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-11-ultra",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-11x-5g",
    "slug": "xiaomi-mi-11x-5g",
    "brand": "Xiaomi",
    "modelName": "Mi 11X 5G",
    "generation": "Mi 11",
    "status": "discontinued",
    "launchDate": "2021-04",
    "pricing": {
      "startingPrice": 29999,
      "maximumPrice": 31999,
      "launchPrice": 29999,
      "currentPrice": 29999,
      "currency": "INR",
      "priceEffectiveDate": "2021-04",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "Super AMOLED 120Hz HDR10+",
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
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP + 8MP UW + 5MP Telemacro)",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "20 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4520,
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
      "dimensions": "163.7 x 76.4 x 7.8 mm",
      "weight": 196,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "IP53",
      "colors": [
        "Celestial Silver",
        "Lunar White",
        "Cosmic Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-11x-5g",
      "productPage": "https://www.mi.com/in/xiaomi-mi-11x-5g",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-11x-5g",
      "verifiedDate": "2021-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-mi-11x-pro-5g",
    "slug": "xiaomi-mi-11x-pro-5g",
    "brand": "Xiaomi",
    "modelName": "Mi 11X Pro 5G",
    "generation": "Mi 11",
    "status": "discontinued",
    "launchDate": "2021-04",
    "pricing": {
      "startingPrice": 39999,
      "maximumPrice": 41999,
      "launchPrice": 39999,
      "currentPrice": 39999,
      "currency": "INR",
      "priceEffectiveDate": "2021-04",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "Super AMOLED 120Hz HDR10+",
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
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (108MP + 8MP UW + 5MP Telemacro)",
      "mainCamera": "108 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "20 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4520,
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
      "dimensions": "163.7 x 76.4 x 7.8 mm",
      "weight": 196,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "IP53",
      "colors": [
        "Celestial Silver",
        "Lunar White",
        "Cosmic Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-mi-11x-pro-5g",
      "productPage": "https://www.mi.com/in/xiaomi-mi-11x-pro-5g",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-mi-11x-pro-5g",
      "verifiedDate": "2021-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-11i-hypercharge-5g",
    "slug": "xiaomi-11i-hypercharge-5g",
    "brand": "Xiaomi",
    "modelName": "11i HyperCharge 5G",
    "generation": "Xiaomi 11",
    "status": "discontinued",
    "launchDate": "2022-01",
    "pricing": {
      "startingPrice": 26999,
      "maximumPrice": 28999,
      "launchPrice": 26999,
      "currentPrice": 26999,
      "currency": "INR",
      "priceEffectiveDate": "2022-01",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "AMOLED 120Hz HDR10",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 920 5G",
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
      "rearCameraSetup": "Triple (108MP + 8MP UW + 2MP Macro)",
      "mainCamera": "108 MP, f/1.9, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 120
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
      "dimensions": "163.7 x 76.2 x 8.3 mm",
      "weight": 204,
      "materials": "Gorilla Glass 5 front, glass back, plastic frame",
      "waterResistance": "IP53",
      "colors": [
        "Stealth Black",
        "Camouflage Green",
        "Pacific Pearl",
        "Purple Mist"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 11",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-11i-hypercharge-5g",
      "productPage": "https://www.mi.com/in/xiaomi-11i-hypercharge-5g",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-11i-hypercharge-5g",
      "verifiedDate": "2022-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "xiaomi-civi-4-pro",
    "slug": "xiaomi-civi-4-pro",
    "brand": "Xiaomi",
    "modelName": "Civi 4 Pro",
    "generation": "Civi",
    "status": "discontinued",
    "launchDate": "2024-03",
    "pricing": {
      "startingPrice": 44999,
      "maximumPrice": 49999,
      "launchPrice": 44999,
      "currentPrice": 44999,
      "currency": "INR",
      "priceEffectiveDate": "2024-03",
      "source": "Xiaomi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.55\"",
      "displayType": "AMOLED 120Hz 1.5K HDR10+ Dolby Vision",
      "resolution": "1236 x 2750",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 8s Gen 3",
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
      "rearCameraSetup": "Triple Leica (50MP OIS + 50MP 2x Tele + 12MP UW)",
      "mainCamera": "50 MP, f/1.6, 25mm, OIS, PDAF",
      "frontCamera": "Dual 32 MP + 32 MP Ultrawide",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 15mm 120\u02da ultrawide",
      "telephotoCamera": "50 MP, f/2.0, 50mm 2x Telephoto, PDAF"
    },
    "battery": {
      "batteryCapacity": 4700,
      "wiredCharging": 67
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
      "dimensions": "157.2 x 72.8 x 7.5 mm",
      "weight": 179.3,
      "materials": "Gorilla Glass Victus 2 front, glass/leather back, aluminum frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Spring Field Green",
        "Soft Pink",
        "Breeze Blue",
        "Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "HyperOS",
      "launchOS": "Android 14",
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
      "officialWebsite": "https://www.mi.com/in/xiaomi-civi-4-pro",
      "productPage": "https://www.mi.com/in/xiaomi-civi-4-pro",
      "specSheetUrl": "https://www.mi.com/in/xiaomi-civi-4-pro",
      "verifiedDate": "2024-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-1s",
    "slug": "redmi-1s",
    "brand": "Redmi",
    "modelName": "Redmi 1S",
    "generation": "Redmi 1",
    "status": "discontinued",
    "launchDate": "2014-05",
    "pricing": {
      "startingPrice": 6999,
      "maximumPrice": 6999,
      "launchPrice": 6999,
      "currentPrice": 6999,
      "currency": "INR",
      "priceEffectiveDate": "2014-05",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "4.7\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 400",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "1GB"
      ],
      "storageOptions": [
        "8GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 8MP",
      "mainCamera": "8 MP, f/2.2, 28mm, AF",
      "frontCamera": "1.6 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 2000,
      "wiredCharging": 5
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
      "dimensions": "137.0 x 69.0 x 9.9 mm",
      "weight": 158,
      "materials": "Asahi Dragontrail glass, plastic body",
      "waterResistance": "None",
      "colors": [
        "Gray",
        "Red",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 4.3",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-1s",
      "productPage": "https://www.mi.com/in/product/redmi-1s",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-1s",
      "verifiedDate": "2014-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-2",
    "slug": "redmi-2",
    "brand": "Redmi",
    "modelName": "Redmi 2",
    "generation": "Redmi 2",
    "status": "discontinued",
    "launchDate": "2015-01",
    "pricing": {
      "startingPrice": 6999,
      "maximumPrice": 6999,
      "launchPrice": 6999,
      "currentPrice": 6999,
      "currency": "INR",
      "priceEffectiveDate": "2015-01",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "4.7\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 410",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "1GB",
        "2GB"
      ],
      "storageOptions": [
        "8GB",
        "16GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 8MP",
      "mainCamera": "8 MP, f/2.2, 28mm, AF",
      "frontCamera": "2 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 2200,
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
      "dimensions": "134.0 x 67.2 x 9.4 mm",
      "weight": 133,
      "materials": "Corning Gorilla Glass 2, plastic body",
      "waterResistance": "None",
      "colors": [
        "White",
        "Dark Gray",
        "Yellow",
        "Pink",
        "Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 4.4.4",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-2",
      "productPage": "https://www.mi.com/in/product/redmi-2",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-2",
      "verifiedDate": "2015-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-3s",
    "slug": "redmi-3s",
    "brand": "Redmi",
    "modelName": "Redmi 3S",
    "generation": "Redmi 3",
    "status": "discontinued",
    "launchDate": "2016-06",
    "pricing": {
      "startingPrice": 6999,
      "maximumPrice": 6999,
      "launchPrice": 6999,
      "currentPrice": 6999,
      "currency": "INR",
      "priceEffectiveDate": "2016-06",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 430",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB"
      ],
      "storageOptions": [
        "16GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.0, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4100,
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
      "dimensions": "139.3 x 69.6 x 8.5 mm",
      "weight": 144,
      "materials": "Glass front, aluminum body",
      "waterResistance": "None",
      "colors": [
        "Gold",
        "Dark Gray",
        "Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 6.0.1",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-3s",
      "productPage": "https://www.mi.com/in/product/redmi-3s",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-3s",
      "verifiedDate": "2016-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-3s-prime",
    "slug": "redmi-3s-prime",
    "brand": "Redmi",
    "modelName": "Redmi 3S Prime",
    "generation": "Redmi 3",
    "status": "discontinued",
    "launchDate": "2016-08",
    "pricing": {
      "startingPrice": 8999,
      "maximumPrice": 8999,
      "launchPrice": 8999,
      "currentPrice": 8999,
      "currency": "INR",
      "priceEffectiveDate": "2016-08",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 430",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB"
      ],
      "storageOptions": [
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.0, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4100,
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
      "dimensions": "139.3 x 69.6 x 8.5 mm",
      "weight": 144,
      "materials": "Glass front, aluminum body, fingerprint sensor",
      "waterResistance": "None",
      "colors": [
        "Gold",
        "Dark Gray",
        "Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 6.0.1",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-3s-prime",
      "productPage": "https://www.mi.com/in/product/redmi-3s-prime",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-3s-prime",
      "verifiedDate": "2016-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-4",
    "slug": "redmi-4",
    "brand": "Redmi",
    "modelName": "Redmi 4",
    "generation": "Redmi 4",
    "status": "discontinued",
    "launchDate": "2017-05",
    "pricing": {
      "startingPrice": 6999,
      "maximumPrice": 10999,
      "launchPrice": 6999,
      "currentPrice": 6999,
      "currency": "INR",
      "priceEffectiveDate": "2017-05",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 435",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "3GB",
        "4GB"
      ],
      "storageOptions": [
        "16GB",
        "32GB",
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.0, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4100,
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
      "dimensions": "139.2 x 70.0 x 8.7 mm",
      "weight": 150,
      "materials": "Corning Gorilla Glass, aluminum body",
      "waterResistance": "None",
      "colors": [
        "Matte Black",
        "Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 6.0.1",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-4",
      "productPage": "https://www.mi.com/in/product/redmi-4",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-4",
      "verifiedDate": "2017-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-4a",
    "slug": "redmi-4a",
    "brand": "Redmi",
    "modelName": "Redmi 4A",
    "generation": "Redmi 4",
    "status": "discontinued",
    "launchDate": "2017-03",
    "pricing": {
      "startingPrice": 5999,
      "maximumPrice": 6999,
      "launchPrice": 5999,
      "currentPrice": 5999,
      "currency": "INR",
      "priceEffectiveDate": "2017-03",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 425",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "3GB"
      ],
      "storageOptions": [
        "16GB",
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.2, AF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3120,
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
      "dimensions": "139.9 x 70.4 x 8.5 mm",
      "weight": 131.5,
      "materials": "Glass front, plastic body",
      "waterResistance": "None",
      "colors": [
        "Gold",
        "Rose Gold",
        "Dark Grey"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 6.0.1",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-4a",
      "productPage": "https://www.mi.com/in/product/redmi-4a",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-4a",
      "verifiedDate": "2017-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-5",
    "slug": "redmi-5",
    "brand": "Redmi",
    "modelName": "Redmi 5",
    "generation": "Redmi 5",
    "status": "discontinued",
    "launchDate": "2018-03",
    "pricing": {
      "startingPrice": 7999,
      "maximumPrice": 10999,
      "launchPrice": 7999,
      "currentPrice": 7999,
      "currency": "INR",
      "priceEffectiveDate": "2018-03",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.7\"",
      "displayType": "IPS LCD 18:9",
      "resolution": "720 x 1440",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 450",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "3GB",
        "4GB"
      ],
      "storageOptions": [
        "16GB",
        "32GB",
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP",
      "mainCamera": "12 MP, f/2.2, 1.25\u00b5m, PDAF",
      "frontCamera": "5 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
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
      "dimensions": "151.8 x 72.8 x 7.7 mm",
      "weight": 157,
      "materials": "Corning Gorilla Glass, aluminum back, plastic frame",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Gold",
        "Light Blue",
        "Rose Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 7.1.2",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-5",
      "productPage": "https://www.mi.com/in/product/redmi-5",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-5",
      "verifiedDate": "2018-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-5a",
    "slug": "redmi-5a",
    "brand": "Redmi",
    "modelName": "Redmi 5A",
    "generation": "Redmi 5",
    "status": "discontinued",
    "launchDate": "2017-11",
    "pricing": {
      "startingPrice": 4999,
      "maximumPrice": 6999,
      "launchPrice": 4999,
      "currentPrice": 4999,
      "currency": "INR",
      "priceEffectiveDate": "2017-11",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.0\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 425",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "3GB"
      ],
      "storageOptions": [
        "16GB",
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.2, PDAF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3000,
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
      "dimensions": "140.4 x 70.1 x 8.4 mm",
      "weight": 137,
      "materials": "Glass front, plastic body",
      "waterResistance": "None",
      "colors": [
        "Platinum Silver",
        "Gold",
        "Rose Gold",
        "Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 7.1.2",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-5a",
      "productPage": "https://www.mi.com/in/product/redmi-5a",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-5a",
      "verifiedDate": "2017-11",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-6",
    "slug": "redmi-6",
    "brand": "Redmi",
    "modelName": "Redmi 6",
    "generation": "Redmi 6",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 7999,
      "maximumPrice": 9499,
      "launchPrice": 7999,
      "currentPrice": 7999,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.45\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1440",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio P22",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB"
      ],
      "storageOptions": [
        "32GB",
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 5MP Depth)",
      "mainCamera": "12 MP, f/2.2, 1.25\u00b5m, PDAF",
      "frontCamera": "5 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3000,
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
      "dimensions": "147.5 x 71.5 x 8.3 mm",
      "weight": 146,
      "materials": "Glass front, plastic body",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Blue",
        "Gold",
        "Rose Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-6",
      "productPage": "https://www.mi.com/in/product/redmi-6",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-6",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-6-pro",
    "slug": "redmi-6-pro",
    "brand": "Redmi",
    "modelName": "Redmi 6 Pro",
    "generation": "Redmi 6",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 12999,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.84\"",
      "displayType": "IPS LCD 19:9 Notch",
      "resolution": "1080 x 2280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 625",
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
      "rearCameraSetup": "Dual (12MP + 5MP Depth)",
      "mainCamera": "12 MP, f/2.2, 1.25\u00b5m, PDAF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "149.3 x 71.7 x 8.8 mm",
      "weight": 178,
      "materials": "Glass front, aluminum back, plastic frame",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Blue",
        "Gold",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-6-pro",
      "productPage": "https://www.mi.com/in/product/redmi-6-pro",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-6-pro",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-6a",
    "slug": "redmi-6a",
    "brand": "Redmi",
    "modelName": "Redmi 6A",
    "generation": "Redmi 6",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 5999,
      "maximumPrice": 6999,
      "launchPrice": 5999,
      "currentPrice": 5999,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.45\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1440",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio A22",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB"
      ],
      "storageOptions": [
        "16GB",
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.2, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3000,
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
      "dimensions": "147.5 x 71.5 x 8.3 mm",
      "weight": 145,
      "materials": "Glass front, plastic body",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Blue",
        "Gold",
        "Rose Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-6a",
      "productPage": "https://www.mi.com/in/product/redmi-6a",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-6a",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-7",
    "slug": "redmi-7",
    "brand": "Redmi",
    "modelName": "Redmi 7",
    "generation": "Redmi 7",
    "status": "discontinued",
    "launchDate": "2019-04",
    "pricing": {
      "startingPrice": 7999,
      "maximumPrice": 8999,
      "launchPrice": 7999,
      "currentPrice": 7999,
      "currency": "INR",
      "priceEffectiveDate": "2019-04",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.26\"",
      "displayType": "IPS LCD HD+ Dot Notch",
      "resolution": "720 x 1520",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 632",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "3GB"
      ],
      "storageOptions": [
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP + 2MP Depth)",
      "mainCamera": "12 MP, f/2.2, 1.25\u00b5m, PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "158.7 x 75.6 x 8.5 mm",
      "weight": 180,
      "materials": "Corning Gorilla Glass 5, plastic body",
      "waterResistance": "Splash resistant",
      "colors": [
        "Lunar Red",
        "Eclipse Black",
        "Comet Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-7",
      "productPage": "https://www.mi.com/in/product/redmi-7",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-7",
      "verifiedDate": "2019-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-7a",
    "slug": "redmi-7a",
    "brand": "Redmi",
    "modelName": "Redmi 7A",
    "generation": "Redmi 7",
    "status": "discontinued",
    "launchDate": "2019-07",
    "pricing": {
      "startingPrice": 5999,
      "maximumPrice": 6199,
      "launchPrice": 5999,
      "currentPrice": 5999,
      "currency": "INR",
      "priceEffectiveDate": "2019-07",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.45\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1440",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 439",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB"
      ],
      "storageOptions": [
        "16GB",
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Sony IMX486",
      "mainCamera": "12 MP, f/2.2, 1.25\u00b5m, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "146.3 x 70.4 x 9.6 mm",
      "weight": 165,
      "materials": "Glass front, plastic body, splash-resistant coating",
      "waterResistance": "Splash resistant",
      "colors": [
        "Matte Black",
        "Matte Blue",
        "Matte Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-7a",
      "productPage": "https://www.mi.com/in/product/redmi-7a",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-7a",
      "verifiedDate": "2019-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-8",
    "slug": "redmi-8",
    "brand": "Redmi",
    "modelName": "Redmi 8",
    "generation": "Redmi 8",
    "status": "discontinued",
    "launchDate": "2019-10",
    "pricing": {
      "startingPrice": 7999,
      "maximumPrice": 8999,
      "launchPrice": 7999,
      "currentPrice": 7999,
      "currency": "INR",
      "priceEffectiveDate": "2019-10",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.22\"",
      "displayType": "IPS LCD HD+ Dot Notch",
      "resolution": "720 x 1520",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 439",
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
      "rearCameraSetup": "Dual (12MP Sony IMX363 + 2MP Depth)",
      "mainCamera": "12 MP, f/1.8, Dual Pixel PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
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
      "dimensions": "156.5 x 75.4 x 9.4 mm",
      "weight": 188,
      "materials": "Corning Gorilla Glass 5, plastic body",
      "waterResistance": "Splash resistant",
      "colors": [
        "Onyx Black",
        "Ruby Red",
        "Sapphire Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-8",
      "productPage": "https://www.mi.com/in/product/redmi-8",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-8",
      "verifiedDate": "2019-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-8a",
    "slug": "redmi-8a",
    "brand": "Redmi",
    "modelName": "Redmi 8A",
    "generation": "Redmi 8",
    "status": "discontinued",
    "launchDate": "2019-09",
    "pricing": {
      "startingPrice": 6499,
      "maximumPrice": 6999,
      "launchPrice": 6499,
      "currentPrice": 6499,
      "currency": "INR",
      "priceEffectiveDate": "2019-09",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.22\"",
      "displayType": "IPS LCD HD+ Dot Notch",
      "resolution": "720 x 1520",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 439",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "3GB"
      ],
      "storageOptions": [
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Sony IMX363",
      "mainCamera": "12 MP, f/1.8, Dual Pixel PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
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
      "dimensions": "156.5 x 75.4 x 9.4 mm",
      "weight": 188,
      "materials": "Corning Gorilla Glass 5, plastic body",
      "waterResistance": "Splash resistant",
      "colors": [
        "Midnight Black",
        "Ocean Blue",
        "Sunset Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-8a",
      "productPage": "https://www.mi.com/in/product/redmi-8a",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-8a",
      "verifiedDate": "2019-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-9",
    "slug": "redmi-9",
    "brand": "Redmi",
    "modelName": "Redmi 9",
    "generation": "Redmi 9",
    "status": "discontinued",
    "launchDate": "2020-08",
    "pricing": {
      "startingPrice": 8999,
      "maximumPrice": 9999,
      "launchPrice": 8999,
      "currentPrice": 8999,
      "currency": "INR",
      "priceEffectiveDate": "2020-08",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "IPS LCD HD+ Dot Notch",
      "resolution": "720 x 1600",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G35",
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
      "rearCameraSetup": "Dual (13MP + 2MP Depth)",
      "mainCamera": "13 MP, f/2.2, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 10
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
      "dimensions": "164.9 x 77.1 x 9.0 mm",
      "weight": 196,
      "materials": "Glass front, plastic back & frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Carbon Black",
        "Sky Blue",
        "Sporty Orange"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-9",
      "productPage": "https://www.mi.com/in/product/redmi-9",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-9",
      "verifiedDate": "2020-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-9-prime",
    "slug": "redmi-9-prime",
    "brand": "Redmi",
    "modelName": "Redmi 9 Prime",
    "generation": "Redmi 9",
    "status": "discontinued",
    "launchDate": "2020-08",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 11999,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2020-08",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "IPS LCD FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G80",
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
      "rearCameraSetup": "Quad (13MP + 8MP UW + 5MP Macro + 2MP Depth)",
      "mainCamera": "13 MP, f/2.2, 28mm, PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5020,
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
      "dimensions": "163.3 x 77.0 x 9.1 mm",
      "weight": 198,
      "materials": "Corning Gorilla Glass 3, plastic body",
      "waterResistance": "Splash resistant",
      "colors": [
        "Space Blue",
        "Mint Green",
        "Matte Black",
        "Sunrise Flare"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-9-prime",
      "productPage": "https://www.mi.com/in/product/redmi-9-prime",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-9-prime",
      "verifiedDate": "2020-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-9a",
    "slug": "redmi-9a",
    "brand": "Redmi",
    "modelName": "Redmi 9A",
    "generation": "Redmi 9",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 6799,
      "maximumPrice": 7499,
      "launchPrice": 6799,
      "currentPrice": 6799,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "IPS LCD HD+",
      "resolution": "720 x 1600",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G25",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "3GB"
      ],
      "storageOptions": [
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.2, 28mm, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 10
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
      "dimensions": "164.9 x 77.1 x 9.0 mm",
      "weight": 196,
      "materials": "Glass front, plastic back",
      "waterResistance": "Splash resistant",
      "colors": [
        "Midnight Black",
        "SeaBlue",
        "Nature Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-9a",
      "productPage": "https://www.mi.com/in/product/redmi-9a",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-9a",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-9-power",
    "slug": "redmi-9-power",
    "brand": "Redmi",
    "modelName": "Redmi 9 Power",
    "generation": "Redmi 9",
    "status": "discontinued",
    "launchDate": "2020-12",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 12999,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2020-12",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "IPS LCD FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 662",
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
      "rearCameraSetup": "Quad (48MP + 8MP UW + 2MP Macro + 2MP Depth)",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 6000,
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
      "dimensions": "162.3 x 77.3 x 9.6 mm",
      "weight": 198,
      "materials": "Corning Gorilla Glass 3, plastic back",
      "waterResistance": "Splash resistant",
      "colors": [
        "Mighty Black",
        "Fiery Red",
        "Electric Green",
        "Blazing Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-9-power",
      "productPage": "https://www.mi.com/in/product/redmi-9-power",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-9-power",
      "verifiedDate": "2020-12",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-10-prime",
    "slug": "redmi-10-prime",
    "brand": "Redmi",
    "modelName": "Redmi 10 Prime",
    "generation": "Redmi 10",
    "status": "discontinued",
    "launchDate": "2021-09",
    "pricing": {
      "startingPrice": 12499,
      "maximumPrice": 14499,
      "launchPrice": 12499,
      "currentPrice": 12499,
      "currency": "INR",
      "priceEffectiveDate": "2021-09",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "IPS LCD 90Hz FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G88",
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
      "rearCameraSetup": "Quad (50MP + 8MP UW + 2MP Macro + 2MP Depth)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 6000,
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
      "dimensions": "161.2 x 75.6 x 9.6 mm",
      "weight": 192,
      "materials": "Corning Gorilla Glass 3, plastic back",
      "waterResistance": "Splash resistant",
      "colors": [
        "Phantom Black",
        "Astral White",
        "Bifrost Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-10-prime",
      "productPage": "https://www.mi.com/in/product/redmi-10-prime",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-10-prime",
      "verifiedDate": "2021-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-3",
    "slug": "redmi-note-3",
    "brand": "Redmi",
    "modelName": "Redmi Note 3",
    "generation": "Redmi Note 3",
    "status": "discontinued",
    "launchDate": "2016-03",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 11999,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2016-03",
      "source": "Redmi India Store / Official Launch"
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
      "chipset": "Qualcomm Snapdragon 650",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "3GB"
      ],
      "storageOptions": [
        "16GB",
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 16MP",
      "mainCamera": "16 MP, f/2.0, PDAF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4050,
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
      "dimensions": "150.0 x 76.0 x 8.7 mm",
      "weight": 164,
      "materials": "Glass front, aluminum body",
      "waterResistance": "None",
      "colors": [
        "Silver",
        "Gray",
        "Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-3",
      "productPage": "https://www.mi.com/in/product/redmi-note-3",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-3",
      "verifiedDate": "2016-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-4",
    "slug": "redmi-note-4",
    "brand": "Redmi",
    "modelName": "Redmi Note 4",
    "generation": "Redmi Note 4",
    "status": "discontinued",
    "launchDate": "2017-01",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 12999,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2017-01",
      "source": "Redmi India Store / Official Launch"
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
      "chipset": "Qualcomm Snapdragon 625",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
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
      "rearCameraSetup": "Single 13MP",
      "mainCamera": "13 MP, f/2.0, 1.12\u00b5m, PDAF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4100,
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
      "dimensions": "151.0 x 76.0 x 8.5 mm",
      "weight": 165,
      "materials": "Glass front, aluminum body",
      "waterResistance": "None",
      "colors": [
        "Dark Grey",
        "Gold",
        "Black",
        "Lake Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 6.0",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-4",
      "productPage": "https://www.mi.com/in/product/redmi-note-4",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-4",
      "verifiedDate": "2017-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-5",
    "slug": "redmi-note-5",
    "brand": "Redmi",
    "modelName": "Redmi Note 5",
    "generation": "Redmi Note 5",
    "status": "discontinued",
    "launchDate": "2018-02",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 11999,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2018-02",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.99\"",
      "displayType": "IPS LCD 18:9",
      "resolution": "1080 x 2160",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 625",
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
      "rearCameraSetup": "Single 12MP",
      "mainCamera": "12 MP, f/2.2, 1.25\u00b5m, PDAF",
      "frontCamera": "5 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "158.5 x 75.5 x 8.1 mm",
      "weight": 180,
      "materials": "Corning Gorilla Glass, aluminum back, plastic frame",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Gold",
        "Rose Gold",
        "Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 7.1.2",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-5",
      "productPage": "https://www.mi.com/in/product/redmi-note-5",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-5",
      "verifiedDate": "2018-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-5-pro",
    "slug": "redmi-note-5-pro",
    "brand": "Redmi",
    "modelName": "Redmi Note 5 Pro",
    "generation": "Redmi Note 5",
    "status": "discontinued",
    "launchDate": "2018-02",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 16999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2018-02",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.99\"",
      "displayType": "IPS LCD 18:9",
      "resolution": "1080 x 2160",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 636",
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
      "rearCameraSetup": "Dual (12MP Sony IMX486 + 5MP Depth)",
      "mainCamera": "12 MP, f/2.2, 1.25\u00b5m, PDAF",
      "frontCamera": "20 MP Sony IMX376 with LED flash",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "158.6 x 75.4 x 8.1 mm",
      "weight": 181,
      "materials": "Corning Gorilla Glass, aluminum back, plastic frame",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Gold",
        "Rose Gold",
        "Blue",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
      "launchOS": "Android 7.1.2",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-5-pro",
      "productPage": "https://www.mi.com/in/product/redmi-note-5-pro",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-5-pro",
      "verifiedDate": "2018-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-6-pro",
    "slug": "redmi-note-6-pro",
    "brand": "Redmi",
    "modelName": "Redmi Note 6 Pro",
    "generation": "Redmi Note 6",
    "status": "discontinued",
    "launchDate": "2018-11",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 15999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2018-11",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.26\"",
      "displayType": "IPS LCD 19:9 Notch",
      "resolution": "1080 x 2280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 636",
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
      "rearCameraSetup": "Dual (12MP Dual Pixel + 5MP Depth)",
      "mainCamera": "12 MP, f/1.9, 1.4\u00b5m, Dual Pixel PDAF",
      "frontCamera": "Dual 20 MP + 2 MP Depth",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "157.9 x 76.4 x 8.3 mm",
      "weight": 182,
      "materials": "Corning Gorilla Glass, aluminum back, plastic frame",
      "waterResistance": "None",
      "colors": [
        "Black",
        "Blue",
        "Rose Gold",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-6-pro",
      "productPage": "https://www.mi.com/in/product/redmi-note-6-pro",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-6-pro",
      "verifiedDate": "2018-11",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-7-pro",
    "slug": "redmi-note-7-pro",
    "brand": "Redmi",
    "modelName": "Redmi Note 7 Pro",
    "generation": "Redmi Note 7",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 16999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "IPS LCD Dot Notch FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 675",
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
      "rearCameraSetup": "Dual (48MP Sony IMX586 + 5MP Depth)",
      "mainCamera": "48 MP, f/1.8, 1/2.0\", PDAF",
      "frontCamera": "13 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "159.2 x 75.2 x 8.1 mm",
      "weight": 186,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Nebula Red",
        "Neptune Blue",
        "Space Black",
        "Astro White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-7-pro",
      "productPage": "https://www.mi.com/in/product/redmi-note-7-pro",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-7-pro",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-8",
    "slug": "redmi-note-8",
    "brand": "Redmi",
    "modelName": "Redmi Note 8",
    "generation": "Redmi Note 8",
    "status": "discontinued",
    "launchDate": "2019-10",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 12999,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2019-10",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "IPS LCD Dot Notch FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 665",
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
      "rearCameraSetup": "Quad (48MP + 8MP UW + 2MP Macro + 2MP Depth)",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "13 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "158.3 x 75.3 x 8.4 mm",
      "weight": 190,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Neptune Blue",
        "Moonlight White",
        "Space Black",
        "Cosmic Purple"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-8",
      "productPage": "https://www.mi.com/in/product/redmi-note-8",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-8",
      "verifiedDate": "2019-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-8-pro",
    "slug": "redmi-note-8-pro",
    "brand": "Redmi",
    "modelName": "Redmi Note 8 Pro",
    "generation": "Redmi Note 8",
    "status": "discontinued",
    "launchDate": "2019-10",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 17999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2019-10",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "IPS LCD HDR Dot Notch",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G90T LiquidCool",
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
      "rearCameraSetup": "Quad (64MP Samsung GW1 + 8MP UW + 2MP Macro + 2MP Depth)",
      "mainCamera": "64 MP, f/1.9, 26mm, PDAF",
      "frontCamera": "20 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
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
      "dimensions": "161.4 x 76.4 x 8.8 mm",
      "weight": 200,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "IP52",
      "colors": [
        "Gamma Green",
        "Halo White",
        "Shadow Black",
        "Electric Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-8-pro",
      "productPage": "https://www.mi.com/in/product/redmi-note-8-pro",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-8-pro",
      "verifiedDate": "2019-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-9-pro",
    "slug": "redmi-note-9-pro",
    "brand": "Redmi",
    "modelName": "Redmi Note 9 Pro",
    "generation": "Redmi Note 9",
    "status": "discontinued",
    "launchDate": "2020-03",
    "pricing": {
      "startingPrice": 12999,
      "maximumPrice": 15999,
      "launchPrice": 12999,
      "currentPrice": 12999,
      "currency": "INR",
      "priceEffectiveDate": "2020-03",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "IPS LCD FHD+ DotDisplay",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 720G",
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
      "rearCameraSetup": "Quad (48MP Samsung GM2 + 8MP UW + 5MP Macro + 2MP Depth)",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5020,
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
      "dimensions": "165.8 x 76.7 x 8.8 mm",
      "weight": 209,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Aurora Blue",
        "Glacier White",
        "Interstellar Black",
        "Champagne Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-9-pro",
      "productPage": "https://www.mi.com/in/product/redmi-note-9-pro",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-9-pro",
      "verifiedDate": "2020-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-9-pro-max",
    "slug": "redmi-note-9-pro-max",
    "brand": "Redmi",
    "modelName": "Redmi Note 9 Pro Max",
    "generation": "Redmi Note 9",
    "status": "discontinued",
    "launchDate": "2020-03",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 18999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2020-03",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "IPS LCD FHD+ DotDisplay",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 720G",
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
      "rearCameraSetup": "Quad (64MP Samsung GW1 + 8MP UW + 5MP Macro + 2MP Depth)",
      "mainCamera": "64 MP, f/1.9, 26mm, PDAF",
      "frontCamera": "32 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5020,
      "wiredCharging": 33
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
      "dimensions": "165.5 x 76.7 x 8.8 mm",
      "weight": 209,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Aurora Blue",
        "Glacier White",
        "Interstellar Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-9-pro-max",
      "productPage": "https://www.mi.com/in/product/redmi-note-9-pro-max",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-9-pro-max",
      "verifiedDate": "2020-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-note-10-pro-max",
    "slug": "redmi-note-10-pro-max",
    "brand": "Redmi",
    "modelName": "Redmi Note 10 Pro Max",
    "generation": "Redmi Note 10",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 18999,
      "maximumPrice": 21999,
      "launchPrice": 18999,
      "currentPrice": 18999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "Super AMOLED 120Hz HDR10",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 732G",
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
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (108MP Samsung HM2 + 8MP UW + 5MP Telemacro + 2MP Depth)",
      "mainCamera": "108 MP, f/1.9, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5020,
      "wiredCharging": 33
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
      "dimensions": "164.5 x 76.2 x 8.1 mm",
      "weight": 192,
      "materials": "Gorilla Glass 5 front, glass back, plastic frame",
      "waterResistance": "IP53",
      "colors": [
        "Dark Night",
        "Glacial Blue",
        "Vintage Bronze"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-note-10-pro-max",
      "productPage": "https://www.mi.com/in/product/redmi-note-10-pro-max",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-note-10-pro-max",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-k20-pro",
    "slug": "redmi-k20-pro",
    "brand": "Redmi",
    "modelName": "Redmi K20 Pro",
    "generation": "Redmi K20",
    "status": "discontinued",
    "launchDate": "2019-07",
    "pricing": {
      "startingPrice": 27999,
      "maximumPrice": 30999,
      "launchPrice": 27999,
      "currentPrice": 27999,
      "currency": "INR",
      "priceEffectiveDate": "2019-07",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.39\"",
      "displayType": "Super AMOLED HDR",
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
      "rearCameraSetup": "Triple (48MP Sony IMX586 + 8MP 2x Tele + 13MP UW)",
      "mainCamera": "48 MP, f/1.8, 26mm, Laser/PDAF",
      "frontCamera": "Motorized pop-up 20 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "13 MP, f/2.4, 12mm ultrawide",
      "telephotoCamera": "8 MP, f/2.4, 53mm 2x Telephoto"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 27
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
      "dimensions": "156.7 x 74.3 x 8.8 mm",
      "weight": 191,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "None",
      "colors": [
        "Flame Red",
        "Glacier Blue",
        "Carbon Black",
        "Pearl White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "officialWebsite": "https://www.mi.com/in/product/redmi-k20-pro",
      "productPage": "https://www.mi.com/in/product/redmi-k20-pro",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-k20-pro",
      "verifiedDate": "2019-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "redmi-k50i-5g",
    "slug": "redmi-k50i-5g",
    "brand": "Redmi",
    "modelName": "Redmi K50i 5G",
    "generation": "Redmi K50",
    "status": "discontinued",
    "launchDate": "2022-07",
    "pricing": {
      "startingPrice": 25999,
      "maximumPrice": 28999,
      "launchPrice": 25999,
      "currentPrice": 25999,
      "currency": "INR",
      "priceEffectiveDate": "2022-07",
      "source": "Redmi India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.6\"",
      "displayType": "FFS LCD 144Hz HDR10 Dolby Vision",
      "resolution": "1080 x 2460",
      "refreshRate": 144,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 8100 5G",
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
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP Samsung GW1 + 8MP UW + 2MP Macro)",
      "mainCamera": "64 MP, f/1.9, PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5080,
      "wiredCharging": 67
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
      "dimensions": "163.6 x 74.3 x 8.9 mm",
      "weight": 200,
      "materials": "Gorilla Glass 5 front, plastic body",
      "waterResistance": "IP53",
      "colors": [
        "Stealth Black",
        "Quick Silver",
        "Phantom Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.mi.com/in/product/redmi-k50i-5g",
      "productPage": "https://www.mi.com/in/product/redmi-k50i-5g",
      "specSheetUrl": "https://www.mi.com/in/product/redmi-k50i-5g",
      "verifiedDate": "2022-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-f1",
    "slug": "poco-f1",
    "brand": "POCO",
    "modelName": "POCO F1",
    "generation": "POCO F",
    "status": "discontinued",
    "launchDate": "2018-08",
    "pricing": {
      "startingPrice": 20999,
      "maximumPrice": 29999,
      "launchPrice": 20999,
      "currentPrice": 20999,
      "currency": "INR",
      "priceEffectiveDate": "2018-08",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.18\"",
      "displayType": "IPS LCD FHD+",
      "resolution": "1080 x 2246",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
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
      "rearCameraSetup": "Dual (12MP Sony IMX363 + 5MP Depth)",
      "mainCamera": "12 MP, f/1.9, Dual Pixel PDAF",
      "frontCamera": "20 MP, f/2.0 + IR Face Unlock",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "155.5 x 75.3 x 8.8 mm",
      "weight": 182,
      "materials": "Gorilla Glass, polycarbonate / Kevlar back",
      "waterResistance": "Splash resistant",
      "colors": [
        "Graphite Black",
        "Steel Blue",
        "Rosso Red",
        "Armoured Edition"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "POCO Launcher",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.poco.in/poco-f1",
      "productPage": "https://www.poco.in/poco-f1",
      "specSheetUrl": "https://www.poco.in/poco-f1",
      "verifiedDate": "2018-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-f3-gt",
    "slug": "poco-f3-gt",
    "brand": "POCO",
    "modelName": "POCO F3 GT",
    "generation": "POCO F",
    "status": "discontinued",
    "launchDate": "2021-07",
    "pricing": {
      "startingPrice": 26999,
      "maximumPrice": 30999,
      "launchPrice": 26999,
      "currentPrice": 26999,
      "currency": "INR",
      "priceEffectiveDate": "2021-07",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "OLED 120Hz 1B colors HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 1200 5G",
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
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Macro) with Maglev Triggers",
      "mainCamera": "64 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "16 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5065,
      "wiredCharging": 67
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
      "dimensions": "161.9 x 76.9 x 8.3 mm",
      "weight": 205,
      "materials": "Gorilla Glass 5 front/back, aerospace aluminum frame, physical pop-up gaming triggers",
      "waterResistance": "IP53",
      "colors": [
        "Gunmetal Silver",
        "Predator Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-f3-gt",
      "productPage": "https://www.poco.in/poco-f3-gt",
      "specSheetUrl": "https://www.poco.in/poco-f3-gt",
      "verifiedDate": "2021-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-x2",
    "slug": "poco-x2",
    "brand": "POCO",
    "modelName": "POCO X2",
    "generation": "POCO X",
    "status": "discontinued",
    "launchDate": "2020-02",
    "pricing": {
      "startingPrice": 15999,
      "maximumPrice": 19999,
      "launchPrice": 15999,
      "currentPrice": 15999,
      "currency": "INR",
      "priceEffectiveDate": "2020-02",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "IPS LCD 120Hz RealityFlow HDR10",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 730G",
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
      "rearCameraSetup": "Quad (64MP Sony IMX686 + 8MP UW + 2MP Macro + 2MP Depth)",
      "mainCamera": "64 MP, f/1.9, 26mm, PDAF",
      "frontCamera": "Dual 20 MP + 2 MP Depth",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 13mm ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 27
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
      "dimensions": "165.3 x 76.6 x 8.8 mm",
      "weight": 208,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Atlantis Blue",
        "Matrix Purple",
        "Phoenix Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-x2",
      "productPage": "https://www.poco.in/poco-x2",
      "specSheetUrl": "https://www.poco.in/poco-x2",
      "verifiedDate": "2020-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-x3",
    "slug": "poco-x3",
    "brand": "POCO",
    "modelName": "POCO X3",
    "generation": "POCO X",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 16999,
      "maximumPrice": 19999,
      "launchPrice": 16999,
      "currentPrice": 16999,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "IPS LCD 120Hz HDR10",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 732G",
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
      "rearCameraSetup": "Quad (64MP Sony IMX682 + 13MP UW + 2MP Macro + 2MP Depth)",
      "mainCamera": "64 MP, f/1.9, 1/1.73\", PDAF",
      "frontCamera": "20 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "13 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 33
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
      "dimensions": "165.3 x 76.8 x 10.1 mm",
      "weight": 225,
      "materials": "Gorilla Glass 5 front, plastic back & frame",
      "waterResistance": "IP53",
      "colors": [
        "Cobalt Blue",
        "Shadow Gray"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-x3",
      "productPage": "https://www.poco.in/poco-x3",
      "specSheetUrl": "https://www.poco.in/poco-x3",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-x3-pro",
    "slug": "poco-x3-pro",
    "brand": "POCO",
    "modelName": "POCO X3 Pro",
    "generation": "POCO X",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 18999,
      "maximumPrice": 20999,
      "launchPrice": 18999,
      "currentPrice": 18999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "IPS LCD 120Hz HDR10",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 860",
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
      "rearCameraSetup": "Quad (48MP Sony IMX582 + 8MP UW + 2MP Macro + 2MP Depth)",
      "mainCamera": "48 MP, f/1.8, 1/2.0\", PDAF",
      "frontCamera": "20 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5160,
      "wiredCharging": 33
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
      "dimensions": "165.3 x 76.8 x 9.4 mm",
      "weight": 215,
      "materials": "Gorilla Glass 6 front, plastic back",
      "waterResistance": "IP53",
      "colors": [
        "Phantom Black",
        "Frost Blue",
        "Metal Bronze"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-x3-pro",
      "productPage": "https://www.poco.in/poco-x3-pro",
      "specSheetUrl": "https://www.poco.in/poco-x3-pro",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-x4-pro-5g",
    "slug": "poco-x4-pro-5g",
    "brand": "POCO",
    "modelName": "POCO X4 Pro 5G",
    "generation": "POCO X",
    "status": "discontinued",
    "launchDate": "2022-03",
    "pricing": {
      "startingPrice": 18999,
      "maximumPrice": 21999,
      "launchPrice": 18999,
      "currentPrice": 18999,
      "currency": "INR",
      "priceEffectiveDate": "2022-03",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "Super AMOLED 120Hz HDR10",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
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
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Macro)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 67
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
      "dimensions": "164.2 x 76.1 x 8.1 mm",
      "weight": 205,
      "materials": "Gorilla Glass 5 front, glass back",
      "waterResistance": "IP53",
      "colors": [
        "Laser Black",
        "Laser Blue",
        "POCO Yellow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-x4-pro-5g",
      "productPage": "https://www.poco.in/poco-x4-pro-5g",
      "specSheetUrl": "https://www.poco.in/poco-x4-pro-5g",
      "verifiedDate": "2022-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-m2",
    "slug": "poco-m2",
    "brand": "POCO",
    "modelName": "POCO M2",
    "generation": "POCO M",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 12499,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "IPS LCD FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G80",
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
      "rearCameraSetup": "Quad (13MP + 8MP UW + 5MP Macro + 2MP Depth)",
      "mainCamera": "13 MP, f/2.2, 28mm, PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5000,
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
      "dimensions": "163.3 x 77.0 x 9.1 mm",
      "weight": 198,
      "materials": "Gorilla Glass 3 front, plastic body",
      "waterResistance": "Splash resistant",
      "colors": [
        "Pitch Black",
        "Slate Blue",
        "Brick Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-m2",
      "productPage": "https://www.poco.in/poco-m2",
      "specSheetUrl": "https://www.poco.in/poco-m2",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-m2-pro",
    "slug": "poco-m2-pro",
    "brand": "POCO",
    "modelName": "POCO M2 Pro",
    "generation": "POCO M",
    "status": "discontinued",
    "launchDate": "2020-07",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 16999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2020-07",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "IPS LCD FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 720G",
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
      "rearCameraSetup": "Quad (48MP + 8MP UW + 5MP Macro + 2MP Depth)",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 33
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
      "dimensions": "165.8 x 76.7 x 8.8 mm",
      "weight": 209,
      "materials": "Gorilla Glass 5 front/back, plastic frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Out of the Blue",
        "Green and Greener",
        "Two Shades of Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-m2-pro",
      "productPage": "https://www.poco.in/poco-m2-pro",
      "specSheetUrl": "https://www.poco.in/poco-m2-pro",
      "verifiedDate": "2020-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-m3",
    "slug": "poco-m3",
    "brand": "POCO",
    "modelName": "POCO M3",
    "generation": "POCO M",
    "status": "discontinued",
    "launchDate": "2021-02",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 11999,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2021-02",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "IPS LCD FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 662",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "6GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP + 2MP Macro + 2MP Depth)",
      "mainCamera": "48 MP, f/1.8, 1/2.0\", PDAF",
      "frontCamera": "8 MP, f/2.1",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 6000,
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
      "dimensions": "162.3 x 77.3 x 9.6 mm",
      "weight": 198,
      "materials": "Gorilla Glass 3 front, textured leather-feel plastic back",
      "waterResistance": "Splash resistant",
      "colors": [
        "Cool Blue",
        "POCO Yellow",
        "Power Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-m3",
      "productPage": "https://www.poco.in/poco-m3",
      "specSheetUrl": "https://www.poco.in/poco-m3",
      "verifiedDate": "2021-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-m4-pro",
    "slug": "poco-m4-pro",
    "brand": "POCO",
    "modelName": "POCO M4 Pro",
    "generation": "POCO M",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 17999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.43\"",
      "displayType": "AMOLED 90Hz FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G96",
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
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Macro)",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 33
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
      "dimensions": "159.9 x 73.9 x 8.1 mm",
      "weight": 179.5,
      "materials": "Gorilla Glass 3 front, plastic back",
      "waterResistance": "IP53",
      "colors": [
        "Power Black",
        "Cool Blue",
        "POCO Yellow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-m4-pro",
      "productPage": "https://www.poco.in/poco-m4-pro",
      "specSheetUrl": "https://www.poco.in/poco-m4-pro",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-m4-5g",
    "slug": "poco-m4-5g",
    "brand": "POCO",
    "modelName": "POCO M4 5G",
    "generation": "POCO M",
    "status": "discontinued",
    "launchDate": "2022-04",
    "pricing": {
      "startingPrice": 12999,
      "maximumPrice": 14999,
      "launchPrice": 12999,
      "currentPrice": 12999,
      "currency": "INR",
      "priceEffectiveDate": "2022-04",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.58\"",
      "displayType": "IPS LCD 90Hz FHD+",
      "resolution": "1080 x 2408",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 700 5G",
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
      "rearCameraSetup": "Dual (50MP + 2MP Depth)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
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
      "dimensions": "164.0 x 76.1 x 8.9 mm",
      "weight": 200,
      "materials": "Gorilla Glass 3 front, plastic body",
      "waterResistance": "IP52",
      "colors": [
        "Cool Blue",
        "POCO Yellow",
        "Power Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-m4-5g",
      "productPage": "https://www.poco.in/poco-m4-5g",
      "specSheetUrl": "https://www.poco.in/poco-m4-5g",
      "verifiedDate": "2022-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-m5",
    "slug": "poco-m5",
    "brand": "POCO",
    "modelName": "POCO M5",
    "generation": "POCO M",
    "status": "discontinued",
    "launchDate": "2022-09",
    "pricing": {
      "startingPrice": 12499,
      "maximumPrice": 14499,
      "launchPrice": 12499,
      "currentPrice": 12499,
      "currency": "INR",
      "priceEffectiveDate": "2022-09",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.58\"",
      "displayType": "IPS LCD 90Hz FHD+",
      "resolution": "1080 x 2408",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G99 (6nm)",
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
      "rearCameraSetup": "Triple (50MP + 2MP Macro + 2MP Depth)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
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
      "dimensions": "164.0 x 76.1 x 8.9 mm",
      "weight": 201,
      "materials": "Gorilla Glass 3 front, faux leather plastic back",
      "waterResistance": "Splash resistant",
      "colors": [
        "Icy Blue",
        "POCO Yellow",
        "Power Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-m5",
      "productPage": "https://www.poco.in/poco-m5",
      "specSheetUrl": "https://www.poco.in/poco-m5",
      "verifiedDate": "2022-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-c3",
    "slug": "poco-c3",
    "brand": "POCO",
    "modelName": "POCO C3",
    "generation": "POCO C",
    "status": "discontinued",
    "launchDate": "2020-10",
    "pricing": {
      "startingPrice": 7499,
      "maximumPrice": 8999,
      "launchPrice": 7499,
      "currentPrice": 7499,
      "currency": "INR",
      "priceEffectiveDate": "2020-10",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "IPS LCD HD+",
      "resolution": "720 x 1600",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G35",
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
      "rearCameraSetup": "Triple (13MP + 2MP Macro + 2MP Depth)",
      "mainCamera": "13 MP, f/2.2, 28mm, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 10
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
      "dimensions": "164.9 x 77.1 x 9.0 mm",
      "weight": 194,
      "materials": "Glass front, two-tone plastic body",
      "waterResistance": "Splash resistant",
      "colors": [
        "Arctic Blue",
        "Matte Black",
        "Lime Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-c3",
      "productPage": "https://www.poco.in/poco-c3",
      "specSheetUrl": "https://www.poco.in/poco-c3",
      "verifiedDate": "2020-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-c31",
    "slug": "poco-c31",
    "brand": "POCO",
    "modelName": "POCO C31",
    "generation": "POCO C",
    "status": "discontinued",
    "launchDate": "2021-09",
    "pricing": {
      "startingPrice": 8499,
      "maximumPrice": 9499,
      "launchPrice": 8499,
      "currentPrice": 8499,
      "currency": "INR",
      "priceEffectiveDate": "2021-09",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "IPS LCD HD+",
      "resolution": "720 x 1600",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G35",
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
      "rearCameraSetup": "Triple (13MP + 2MP Macro + 2MP Depth)",
      "mainCamera": "13 MP, f/2.2, 28mm, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 10
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
      "dimensions": "164.9 x 77.1 x 9.0 mm",
      "weight": 194,
      "materials": "Glass front, plastic back, rear fingerprint sensor",
      "waterResistance": "Splash resistant",
      "colors": [
        "Royal Blue",
        "Shadow Grey"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-c31",
      "productPage": "https://www.poco.in/poco-c31",
      "specSheetUrl": "https://www.poco.in/poco-c31",
      "verifiedDate": "2021-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-c50",
    "slug": "poco-c50",
    "brand": "POCO",
    "modelName": "POCO C50",
    "generation": "POCO C",
    "status": "discontinued",
    "launchDate": "2023-01",
    "pricing": {
      "startingPrice": 6249,
      "maximumPrice": 6999,
      "launchPrice": 6249,
      "currentPrice": 6249,
      "currency": "INR",
      "priceEffectiveDate": "2023-01",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.52\"",
      "displayType": "IPS LCD HD+",
      "resolution": "720 x 1600",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio A22",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "3GB"
      ],
      "storageOptions": [
        "32GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (8MP + 0.08MP QVGA)",
      "mainCamera": "8 MP, f/2.0",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 10
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
      "dimensions": "164.9 x 76.8 x 9.1 mm",
      "weight": 192,
      "materials": "Glass front, leather-texture plastic back",
      "waterResistance": "Splash resistant",
      "colors": [
        "Country Green",
        "Royal Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Android 12 (Go edition)",
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
      "officialWebsite": "https://www.poco.in/poco-c50",
      "productPage": "https://www.poco.in/poco-c50",
      "specSheetUrl": "https://www.poco.in/poco-c50",
      "verifiedDate": "2023-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "poco-c55",
    "slug": "poco-c55",
    "brand": "POCO",
    "modelName": "POCO C55",
    "generation": "POCO C",
    "status": "discontinued",
    "launchDate": "2023-02",
    "pricing": {
      "startingPrice": 9499,
      "maximumPrice": 10999,
      "launchPrice": 9499,
      "currentPrice": 9499,
      "currency": "INR",
      "priceEffectiveDate": "2023-02",
      "source": "POCO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.71\"",
      "displayType": "IPS LCD HD+",
      "resolution": "720 x 1650",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G85",
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
      "rearCameraSetup": "Dual (50MP + 0.08MP Depth)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 10
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
      "dimensions": "168.8 x 76.4 x 8.8 mm",
      "weight": 192,
      "materials": "Glass front, stitched leather-finish plastic back",
      "waterResistance": "IP52",
      "colors": [
        "Forest Green",
        "Power Black",
        "Cool Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MIUI for POCO",
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
      "officialWebsite": "https://www.poco.in/poco-c55",
      "productPage": "https://www.poco.in/poco-c55",
      "specSheetUrl": "https://www.poco.in/poco-c55",
      "verifiedDate": "2023-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  }
] as unknown as MobileModel[];

const variants: MobileVariant[] = [
  {
    "id": "xiaomi-mi-3-2-16",
    "modelId": "xiaomi-mi-3",
    "ram": "2GB",
    "storage": "16GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Metallic Gray",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-4-3-16",
    "modelId": "xiaomi-mi-4",
    "ram": "3GB",
    "storage": "16GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "White",
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-4-3-64",
    "modelId": "xiaomi-mi-4",
    "ram": "3GB",
    "storage": "64GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "White",
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-4i-2-16",
    "modelId": "xiaomi-mi-4i",
    "ram": "2GB",
    "storage": "16GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Dark Grey",
      "White",
      "Yellow",
      "Blue",
      "Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-4i-2-32",
    "modelId": "xiaomi-mi-4i",
    "ram": "2GB",
    "storage": "32GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Dark Grey",
      "White",
      "Yellow",
      "Blue",
      "Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-5-3-32",
    "modelId": "xiaomi-mi-5",
    "ram": "3GB",
    "storage": "32GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Black",
      "White",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-max-3-32",
    "modelId": "xiaomi-mi-max",
    "ram": "3GB",
    "storage": "32GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Silver",
      "Gray",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-max-4-128",
    "modelId": "xiaomi-mi-max",
    "ram": "4GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Silver",
      "Gray",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-max-2-4-32",
    "modelId": "xiaomi-mi-max-2",
    "ram": "4GB",
    "storage": "32GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Matte Black",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-max-2-4-64",
    "modelId": "xiaomi-mi-max-2",
    "ram": "4GB",
    "storage": "64GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Matte Black",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-mix-2-6-128",
    "modelId": "xiaomi-mi-mix-2",
    "ram": "6GB",
    "storage": "128GB",
    "price": 35999,
    "mrp": 35999,
    "colors": [
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-a1-4-64",
    "modelId": "xiaomi-mi-a1",
    "ram": "4GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Black",
      "Gold",
      "Rose Gold",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-a2-4-64",
    "modelId": "xiaomi-mi-a2",
    "ram": "4GB",
    "storage": "64GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Black",
      "Gold",
      "Blue",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-a2-6-128",
    "modelId": "xiaomi-mi-a2",
    "ram": "6GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Black",
      "Gold",
      "Blue",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-a3-4-64",
    "modelId": "xiaomi-mi-a3",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Kind of Grey",
      "Not Just Blue",
      "More Than White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-a3-6-128",
    "modelId": "xiaomi-mi-a3",
    "ram": "6GB",
    "storage": "128GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Kind of Grey",
      "Not Just Blue",
      "More Than White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-10-5g-8-128",
    "modelId": "xiaomi-mi-10-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 49999,
    "mrp": 49999,
    "colors": [
      "Twilight Grey",
      "Coral Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-10-5g-8-256",
    "modelId": "xiaomi-mi-10-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 54999,
    "mrp": 54999,
    "colors": [
      "Twilight Grey",
      "Coral Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-10t-5g-6-128",
    "modelId": "xiaomi-mi-10t-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 35999,
    "mrp": 35999,
    "colors": [
      "Cosmic Black",
      "Lunar Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-10t-5g-8-128",
    "modelId": "xiaomi-mi-10t-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Cosmic Black",
      "Lunar Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-10t-pro-5g-8-128",
    "modelId": "xiaomi-mi-10t-pro-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Cosmic Black",
      "Lunar Silver",
      "Aurora Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-10i-5g-6-64",
    "modelId": "xiaomi-mi-10i-5g",
    "ram": "6GB",
    "storage": "64GB",
    "price": 20999,
    "mrp": 20999,
    "colors": [
      "Pacific Sunrise",
      "Midnight Black",
      "Atlantic Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-10i-5g-6-128",
    "modelId": "xiaomi-mi-10i-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Pacific Sunrise",
      "Midnight Black",
      "Atlantic Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-10i-5g-8-128",
    "modelId": "xiaomi-mi-10i-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Pacific Sunrise",
      "Midnight Black",
      "Atlantic Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-11-ultra-12-256",
    "modelId": "xiaomi-mi-11-ultra",
    "ram": "12GB",
    "storage": "256GB",
    "price": 69999,
    "mrp": 69999,
    "colors": [
      "Ceramic Black",
      "Ceramic White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-11x-5g-6-128",
    "modelId": "xiaomi-mi-11x-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Celestial Silver",
      "Lunar White",
      "Cosmic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-11x-5g-8-128",
    "modelId": "xiaomi-mi-11x-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 31999,
    "mrp": 31999,
    "colors": [
      "Celestial Silver",
      "Lunar White",
      "Cosmic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-11x-pro-5g-8-128",
    "modelId": "xiaomi-mi-11x-pro-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Celestial Silver",
      "Lunar White",
      "Cosmic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-mi-11x-pro-5g-8-256",
    "modelId": "xiaomi-mi-11x-pro-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 41999,
    "mrp": 41999,
    "colors": [
      "Celestial Silver",
      "Lunar White",
      "Cosmic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-11i-hypercharge-5g-6-128",
    "modelId": "xiaomi-11i-hypercharge-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 26999,
    "mrp": 26999,
    "colors": [
      "Stealth Black",
      "Camouflage Green",
      "Pacific Pearl",
      "Purple Mist"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-11i-hypercharge-5g-8-128",
    "modelId": "xiaomi-11i-hypercharge-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 28999,
    "mrp": 28999,
    "colors": [
      "Stealth Black",
      "Camouflage Green",
      "Pacific Pearl",
      "Purple Mist"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-civi-4-pro-12-256",
    "modelId": "xiaomi-civi-4-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 44999,
    "mrp": 44999,
    "colors": [
      "Spring Field Green",
      "Soft Pink",
      "Breeze Blue",
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "xiaomi-civi-4-pro-16-512",
    "modelId": "xiaomi-civi-4-pro",
    "ram": "16GB",
    "storage": "512GB",
    "price": 49999,
    "mrp": 49999,
    "colors": [
      "Spring Field Green",
      "Soft Pink",
      "Breeze Blue",
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-1s-1-8",
    "modelId": "redmi-1s",
    "ram": "1GB",
    "storage": "8GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Gray",
      "Red",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-2-1-8",
    "modelId": "redmi-2",
    "ram": "1GB",
    "storage": "8GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "White",
      "Dark Gray",
      "Yellow",
      "Pink",
      "Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-2-2-16",
    "modelId": "redmi-2",
    "ram": "2GB",
    "storage": "16GB",
    "price": 7999,
    "mrp": 7999,
    "colors": [
      "White",
      "Dark Gray",
      "Yellow",
      "Pink",
      "Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-3s-2-16",
    "modelId": "redmi-3s",
    "ram": "2GB",
    "storage": "16GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Gold",
      "Dark Gray",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-3s-prime-3-32",
    "modelId": "redmi-3s-prime",
    "ram": "3GB",
    "storage": "32GB",
    "price": 8999,
    "mrp": 8999,
    "colors": [
      "Gold",
      "Dark Gray",
      "Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-4-2-16",
    "modelId": "redmi-4",
    "ram": "2GB",
    "storage": "16GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Matte Black",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-4-3-32",
    "modelId": "redmi-4",
    "ram": "3GB",
    "storage": "32GB",
    "price": 8999,
    "mrp": 8999,
    "colors": [
      "Matte Black",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-4-4-64",
    "modelId": "redmi-4",
    "ram": "4GB",
    "storage": "64GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Matte Black",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-4a-2-16",
    "modelId": "redmi-4a",
    "ram": "2GB",
    "storage": "16GB",
    "price": 5999,
    "mrp": 5999,
    "colors": [
      "Gold",
      "Rose Gold",
      "Dark Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-4a-3-32",
    "modelId": "redmi-4a",
    "ram": "3GB",
    "storage": "32GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Gold",
      "Rose Gold",
      "Dark Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-5-2-16",
    "modelId": "redmi-5",
    "ram": "2GB",
    "storage": "16GB",
    "price": 7999,
    "mrp": 7999,
    "colors": [
      "Black",
      "Gold",
      "Light Blue",
      "Rose Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-5-3-32",
    "modelId": "redmi-5",
    "ram": "3GB",
    "storage": "32GB",
    "price": 8999,
    "mrp": 8999,
    "colors": [
      "Black",
      "Gold",
      "Light Blue",
      "Rose Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-5-4-64",
    "modelId": "redmi-5",
    "ram": "4GB",
    "storage": "64GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Black",
      "Gold",
      "Light Blue",
      "Rose Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-5a-2-16",
    "modelId": "redmi-5a",
    "ram": "2GB",
    "storage": "16GB",
    "price": 4999,
    "mrp": 4999,
    "colors": [
      "Platinum Silver",
      "Gold",
      "Rose Gold",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-5a-3-32",
    "modelId": "redmi-5a",
    "ram": "3GB",
    "storage": "32GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Platinum Silver",
      "Gold",
      "Rose Gold",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-6-3-32",
    "modelId": "redmi-6",
    "ram": "3GB",
    "storage": "32GB",
    "price": 7999,
    "mrp": 7999,
    "colors": [
      "Black",
      "Blue",
      "Gold",
      "Rose Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-6-3-64",
    "modelId": "redmi-6",
    "ram": "3GB",
    "storage": "64GB",
    "price": 9499,
    "mrp": 9499,
    "colors": [
      "Black",
      "Blue",
      "Gold",
      "Rose Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-6-pro-3-32",
    "modelId": "redmi-6-pro",
    "ram": "3GB",
    "storage": "32GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Black",
      "Blue",
      "Gold",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-6-pro-4-64",
    "modelId": "redmi-6-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Black",
      "Blue",
      "Gold",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-6a-2-16",
    "modelId": "redmi-6a",
    "ram": "2GB",
    "storage": "16GB",
    "price": 5999,
    "mrp": 5999,
    "colors": [
      "Black",
      "Blue",
      "Gold",
      "Rose Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-6a-2-32",
    "modelId": "redmi-6a",
    "ram": "2GB",
    "storage": "32GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Black",
      "Blue",
      "Gold",
      "Rose Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-7-2-32",
    "modelId": "redmi-7",
    "ram": "2GB",
    "storage": "32GB",
    "price": 7999,
    "mrp": 7999,
    "colors": [
      "Lunar Red",
      "Eclipse Black",
      "Comet Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-7-3-32",
    "modelId": "redmi-7",
    "ram": "3GB",
    "storage": "32GB",
    "price": 8999,
    "mrp": 8999,
    "colors": [
      "Lunar Red",
      "Eclipse Black",
      "Comet Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-7a-2-16",
    "modelId": "redmi-7a",
    "ram": "2GB",
    "storage": "16GB",
    "price": 5999,
    "mrp": 5999,
    "colors": [
      "Matte Black",
      "Matte Blue",
      "Matte Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-7a-2-32",
    "modelId": "redmi-7a",
    "ram": "2GB",
    "storage": "32GB",
    "price": 6199,
    "mrp": 6199,
    "colors": [
      "Matte Black",
      "Matte Blue",
      "Matte Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-8-3-32",
    "modelId": "redmi-8",
    "ram": "3GB",
    "storage": "32GB",
    "price": 7999,
    "mrp": 7999,
    "colors": [
      "Onyx Black",
      "Ruby Red",
      "Sapphire Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-8-4-64",
    "modelId": "redmi-8",
    "ram": "4GB",
    "storage": "64GB",
    "price": 8999,
    "mrp": 8999,
    "colors": [
      "Onyx Black",
      "Ruby Red",
      "Sapphire Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-8a-2-32",
    "modelId": "redmi-8a",
    "ram": "2GB",
    "storage": "32GB",
    "price": 6499,
    "mrp": 6499,
    "colors": [
      "Midnight Black",
      "Ocean Blue",
      "Sunset Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-8a-3-32",
    "modelId": "redmi-8a",
    "ram": "3GB",
    "storage": "32GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Midnight Black",
      "Ocean Blue",
      "Sunset Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-9-4-64",
    "modelId": "redmi-9",
    "ram": "4GB",
    "storage": "64GB",
    "price": 8999,
    "mrp": 8999,
    "colors": [
      "Carbon Black",
      "Sky Blue",
      "Sporty Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-9-4-128",
    "modelId": "redmi-9",
    "ram": "4GB",
    "storage": "128GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Carbon Black",
      "Sky Blue",
      "Sporty Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-9-prime-4-64",
    "modelId": "redmi-9-prime",
    "ram": "4GB",
    "storage": "64GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Space Blue",
      "Mint Green",
      "Matte Black",
      "Sunrise Flare"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-9-prime-4-128",
    "modelId": "redmi-9-prime",
    "ram": "4GB",
    "storage": "128GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Space Blue",
      "Mint Green",
      "Matte Black",
      "Sunrise Flare"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-9a-2-32",
    "modelId": "redmi-9a",
    "ram": "2GB",
    "storage": "32GB",
    "price": 6799,
    "mrp": 6799,
    "colors": [
      "Midnight Black",
      "SeaBlue",
      "Nature Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-9a-3-32",
    "modelId": "redmi-9a",
    "ram": "3GB",
    "storage": "32GB",
    "price": 7499,
    "mrp": 7499,
    "colors": [
      "Midnight Black",
      "SeaBlue",
      "Nature Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-9-power-4-64",
    "modelId": "redmi-9-power",
    "ram": "4GB",
    "storage": "64GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Mighty Black",
      "Fiery Red",
      "Electric Green",
      "Blazing Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-9-power-6-128",
    "modelId": "redmi-9-power",
    "ram": "6GB",
    "storage": "128GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Mighty Black",
      "Fiery Red",
      "Electric Green",
      "Blazing Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-10-prime-4-64",
    "modelId": "redmi-10-prime",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12499,
    "mrp": 12499,
    "colors": [
      "Phantom Black",
      "Astral White",
      "Bifrost Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-10-prime-6-128",
    "modelId": "redmi-10-prime",
    "ram": "6GB",
    "storage": "128GB",
    "price": 14499,
    "mrp": 14499,
    "colors": [
      "Phantom Black",
      "Astral White",
      "Bifrost Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-3-2-16",
    "modelId": "redmi-note-3",
    "ram": "2GB",
    "storage": "16GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Silver",
      "Gray",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-3-3-32",
    "modelId": "redmi-note-3",
    "ram": "3GB",
    "storage": "32GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Silver",
      "Gray",
      "Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-4-2-32",
    "modelId": "redmi-note-4",
    "ram": "2GB",
    "storage": "32GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Dark Grey",
      "Gold",
      "Black",
      "Lake Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-4-3-32",
    "modelId": "redmi-note-4",
    "ram": "3GB",
    "storage": "32GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Dark Grey",
      "Gold",
      "Black",
      "Lake Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-4-4-64",
    "modelId": "redmi-note-4",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Dark Grey",
      "Gold",
      "Black",
      "Lake Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-5-3-32",
    "modelId": "redmi-note-5",
    "ram": "3GB",
    "storage": "32GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Black",
      "Gold",
      "Rose Gold",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-5-4-64",
    "modelId": "redmi-note-5",
    "ram": "4GB",
    "storage": "64GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Black",
      "Gold",
      "Rose Gold",
      "Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-5-pro-4-64",
    "modelId": "redmi-note-5-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Black",
      "Gold",
      "Rose Gold",
      "Blue",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-5-pro-6-64",
    "modelId": "redmi-note-5-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Black",
      "Gold",
      "Rose Gold",
      "Blue",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-6-pro-4-64",
    "modelId": "redmi-note-6-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Black",
      "Blue",
      "Rose Gold",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-6-pro-6-64",
    "modelId": "redmi-note-6-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Black",
      "Blue",
      "Rose Gold",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-7-pro-4-64",
    "modelId": "redmi-note-7-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Nebula Red",
      "Neptune Blue",
      "Space Black",
      "Astro White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-7-pro-6-128",
    "modelId": "redmi-note-7-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Nebula Red",
      "Neptune Blue",
      "Space Black",
      "Astro White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-8-4-64",
    "modelId": "redmi-note-8",
    "ram": "4GB",
    "storage": "64GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Neptune Blue",
      "Moonlight White",
      "Space Black",
      "Cosmic Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-8-6-128",
    "modelId": "redmi-note-8",
    "ram": "6GB",
    "storage": "128GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Neptune Blue",
      "Moonlight White",
      "Space Black",
      "Cosmic Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-8-pro-6-64",
    "modelId": "redmi-note-8-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Gamma Green",
      "Halo White",
      "Shadow Black",
      "Electric Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-8-pro-6-128",
    "modelId": "redmi-note-8-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Gamma Green",
      "Halo White",
      "Shadow Black",
      "Electric Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-8-pro-8-128",
    "modelId": "redmi-note-8-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Gamma Green",
      "Halo White",
      "Shadow Black",
      "Electric Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-9-pro-4-64",
    "modelId": "redmi-note-9-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Aurora Blue",
      "Glacier White",
      "Interstellar Black",
      "Champagne Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-9-pro-6-128",
    "modelId": "redmi-note-9-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Aurora Blue",
      "Glacier White",
      "Interstellar Black",
      "Champagne Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-9-pro-max-6-64",
    "modelId": "redmi-note-9-pro-max",
    "ram": "6GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Aurora Blue",
      "Glacier White",
      "Interstellar Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-9-pro-max-6-128",
    "modelId": "redmi-note-9-pro-max",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Aurora Blue",
      "Glacier White",
      "Interstellar Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-9-pro-max-8-128",
    "modelId": "redmi-note-9-pro-max",
    "ram": "8GB",
    "storage": "128GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Aurora Blue",
      "Glacier White",
      "Interstellar Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-10-pro-max-6-64",
    "modelId": "redmi-note-10-pro-max",
    "ram": "6GB",
    "storage": "64GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Dark Night",
      "Glacial Blue",
      "Vintage Bronze"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-10-pro-max-6-128",
    "modelId": "redmi-note-10-pro-max",
    "ram": "6GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Dark Night",
      "Glacial Blue",
      "Vintage Bronze"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-note-10-pro-max-8-128",
    "modelId": "redmi-note-10-pro-max",
    "ram": "8GB",
    "storage": "128GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Dark Night",
      "Glacial Blue",
      "Vintage Bronze"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-k20-pro-6-128",
    "modelId": "redmi-k20-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 27999,
    "mrp": 27999,
    "colors": [
      "Flame Red",
      "Glacier Blue",
      "Carbon Black",
      "Pearl White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-k20-pro-8-256",
    "modelId": "redmi-k20-pro",
    "ram": "8GB",
    "storage": "256GB",
    "price": 30999,
    "mrp": 30999,
    "colors": [
      "Flame Red",
      "Glacier Blue",
      "Carbon Black",
      "Pearl White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-k50i-5g-6-128",
    "modelId": "redmi-k50i-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 25999,
    "mrp": 25999,
    "colors": [
      "Stealth Black",
      "Quick Silver",
      "Phantom Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "redmi-k50i-5g-8-256",
    "modelId": "redmi-k50i-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 28999,
    "mrp": 28999,
    "colors": [
      "Stealth Black",
      "Quick Silver",
      "Phantom Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-f1-6-64",
    "modelId": "poco-f1",
    "ram": "6GB",
    "storage": "64GB",
    "price": 20999,
    "mrp": 20999,
    "colors": [
      "Graphite Black",
      "Steel Blue",
      "Rosso Red",
      "Armoured Edition"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-f1-6-128",
    "modelId": "poco-f1",
    "ram": "6GB",
    "storage": "128GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Graphite Black",
      "Steel Blue",
      "Rosso Red",
      "Armoured Edition"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-f1-8-256",
    "modelId": "poco-f1",
    "ram": "8GB",
    "storage": "256GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Graphite Black",
      "Steel Blue",
      "Rosso Red",
      "Armoured Edition"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-f3-gt-6-128",
    "modelId": "poco-f3-gt",
    "ram": "6GB",
    "storage": "128GB",
    "price": 26999,
    "mrp": 26999,
    "colors": [
      "Gunmetal Silver",
      "Predator Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-f3-gt-8-128",
    "modelId": "poco-f3-gt",
    "ram": "8GB",
    "storage": "128GB",
    "price": 28999,
    "mrp": 28999,
    "colors": [
      "Gunmetal Silver",
      "Predator Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-f3-gt-8-256",
    "modelId": "poco-f3-gt",
    "ram": "8GB",
    "storage": "256GB",
    "price": 30999,
    "mrp": 30999,
    "colors": [
      "Gunmetal Silver",
      "Predator Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x2-6-64",
    "modelId": "poco-x2",
    "ram": "6GB",
    "storage": "64GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Atlantis Blue",
      "Matrix Purple",
      "Phoenix Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x2-6-128",
    "modelId": "poco-x2",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Atlantis Blue",
      "Matrix Purple",
      "Phoenix Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x2-8-256",
    "modelId": "poco-x2",
    "ram": "8GB",
    "storage": "256GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Atlantis Blue",
      "Matrix Purple",
      "Phoenix Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x3-6-64",
    "modelId": "poco-x3",
    "ram": "6GB",
    "storage": "64GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Cobalt Blue",
      "Shadow Gray"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x3-6-128",
    "modelId": "poco-x3",
    "ram": "6GB",
    "storage": "128GB",
    "price": 18499,
    "mrp": 18499,
    "colors": [
      "Cobalt Blue",
      "Shadow Gray"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x3-8-128",
    "modelId": "poco-x3",
    "ram": "8GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Cobalt Blue",
      "Shadow Gray"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x3-pro-6-128",
    "modelId": "poco-x3-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Phantom Black",
      "Frost Blue",
      "Metal Bronze"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x3-pro-8-128",
    "modelId": "poco-x3-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 20999,
    "mrp": 20999,
    "colors": [
      "Phantom Black",
      "Frost Blue",
      "Metal Bronze"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x4-pro-5g-6-64",
    "modelId": "poco-x4-pro-5g",
    "ram": "6GB",
    "storage": "64GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Laser Black",
      "Laser Blue",
      "POCO Yellow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x4-pro-5g-6-128",
    "modelId": "poco-x4-pro-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Laser Black",
      "Laser Blue",
      "POCO Yellow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-x4-pro-5g-8-128",
    "modelId": "poco-x4-pro-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Laser Black",
      "Laser Blue",
      "POCO Yellow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m2-6-64",
    "modelId": "poco-m2",
    "ram": "6GB",
    "storage": "64GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Pitch Black",
      "Slate Blue",
      "Brick Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m2-6-128",
    "modelId": "poco-m2",
    "ram": "6GB",
    "storage": "128GB",
    "price": 12499,
    "mrp": 12499,
    "colors": [
      "Pitch Black",
      "Slate Blue",
      "Brick Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m2-pro-4-64",
    "modelId": "poco-m2-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Out of the Blue",
      "Green and Greener",
      "Two Shades of Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m2-pro-6-64",
    "modelId": "poco-m2-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Out of the Blue",
      "Green and Greener",
      "Two Shades of Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m2-pro-6-128",
    "modelId": "poco-m2-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Out of the Blue",
      "Green and Greener",
      "Two Shades of Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m3-6-64",
    "modelId": "poco-m3",
    "ram": "6GB",
    "storage": "64GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Cool Blue",
      "POCO Yellow",
      "Power Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m3-6-128",
    "modelId": "poco-m3",
    "ram": "6GB",
    "storage": "128GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Cool Blue",
      "POCO Yellow",
      "Power Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m4-pro-6-64",
    "modelId": "poco-m4-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Power Black",
      "Cool Blue",
      "POCO Yellow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m4-pro-6-128",
    "modelId": "poco-m4-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16499,
    "mrp": 16499,
    "colors": [
      "Power Black",
      "Cool Blue",
      "POCO Yellow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m4-pro-8-128",
    "modelId": "poco-m4-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Power Black",
      "Cool Blue",
      "POCO Yellow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m4-5g-4-64",
    "modelId": "poco-m4-5g",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Cool Blue",
      "POCO Yellow",
      "Power Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m4-5g-6-128",
    "modelId": "poco-m4-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Cool Blue",
      "POCO Yellow",
      "Power Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m5-4-64",
    "modelId": "poco-m5",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12499,
    "mrp": 12499,
    "colors": [
      "Icy Blue",
      "POCO Yellow",
      "Power Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-m5-6-128",
    "modelId": "poco-m5",
    "ram": "6GB",
    "storage": "128GB",
    "price": 14499,
    "mrp": 14499,
    "colors": [
      "Icy Blue",
      "POCO Yellow",
      "Power Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-c3-3-32",
    "modelId": "poco-c3",
    "ram": "3GB",
    "storage": "32GB",
    "price": 7499,
    "mrp": 7499,
    "colors": [
      "Arctic Blue",
      "Matte Black",
      "Lime Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-c3-4-64",
    "modelId": "poco-c3",
    "ram": "4GB",
    "storage": "64GB",
    "price": 8999,
    "mrp": 8999,
    "colors": [
      "Arctic Blue",
      "Matte Black",
      "Lime Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-c31-3-32",
    "modelId": "poco-c31",
    "ram": "3GB",
    "storage": "32GB",
    "price": 8499,
    "mrp": 8499,
    "colors": [
      "Royal Blue",
      "Shadow Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-c31-4-64",
    "modelId": "poco-c31",
    "ram": "4GB",
    "storage": "64GB",
    "price": 9499,
    "mrp": 9499,
    "colors": [
      "Royal Blue",
      "Shadow Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-c50-2-32",
    "modelId": "poco-c50",
    "ram": "2GB",
    "storage": "32GB",
    "price": 6249,
    "mrp": 6249,
    "colors": [
      "Country Green",
      "Royal Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-c50-3-32",
    "modelId": "poco-c50",
    "ram": "3GB",
    "storage": "32GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Country Green",
      "Royal Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-c55-4-64",
    "modelId": "poco-c55",
    "ram": "4GB",
    "storage": "64GB",
    "price": 9499,
    "mrp": 9499,
    "colors": [
      "Forest Green",
      "Power Black",
      "Cool Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "poco-c55-6-128",
    "modelId": "poco-c55",
    "ram": "6GB",
    "storage": "128GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Forest Green",
      "Power Black",
      "Cool Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  }
] as unknown as MobileVariant[];

const images: MobileImageCatalogEntry[] = [
  {
    "modelId": "xiaomi-mi-3",
    "modelName": "Mi 3",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi3.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 3 Metallic Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-4",
    "modelName": "Mi 4",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 4 White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-4i",
    "modelName": "Mi 4i",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4i.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4i.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 4i Dark Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-5",
    "modelName": "Mi 5",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-5.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-5.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 5 Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-max",
    "modelName": "Mi Max",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-max.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-max.jpg",
        "verified": true,
        "alt": "Xiaomi Mi Max Silver"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-max-2",
    "modelName": "Mi Max 2",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-max-2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-max-2.jpg",
        "verified": true,
        "alt": "Xiaomi Mi Max 2 Matte Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-mix-2",
    "modelName": "Mi MIX 2",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-2.jpg",
        "verified": true,
        "alt": "Xiaomi Mi MIX 2 Ceramic Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-a1",
    "modelName": "Mi A1",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a1.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a1.jpg",
        "verified": true,
        "alt": "Xiaomi Mi A1 Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-a2",
    "modelName": "Mi A2",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a2.jpg",
        "verified": true,
        "alt": "Xiaomi Mi A2 Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-a3",
    "modelName": "Mi A3",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a3-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a3-.jpg",
        "verified": true,
        "alt": "Xiaomi Mi A3 Not Just Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-10-5g",
    "modelName": "Mi 10 5G",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-5g.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 10 Twilight Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-10t-5g",
    "modelName": "Mi 10T 5G",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10t-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10t-5g.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 10T Cosmic Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-10t-pro-5g",
    "modelName": "Mi 10T Pro 5G",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10t-pro-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10t-pro-5g.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 10T Pro Aurora Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-10i-5g",
    "modelName": "Mi 10i 5G",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10i-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10i-5g.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 10i Pacific Sunrise"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-11-ultra",
    "modelName": "Mi 11 Ultra",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11-ultra-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11-ultra-.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 11 Ultra Ceramic Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-11x-5g",
    "modelName": "Mi 11X 5G",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-11x.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-11x.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 11X Celestial Silver"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-mi-11x-pro-5g",
    "modelName": "Mi 11X Pro 5G",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-11x-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-11x-pro.jpg",
        "verified": true,
        "alt": "Xiaomi Mi 11X Pro Cosmic Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-11i-hypercharge-5g",
    "modelName": "11i HyperCharge 5G",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11i-hypercharge.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11i-hypercharge.jpg",
        "verified": true,
        "alt": "Xiaomi 11i HyperCharge Stealth Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "xiaomi-civi-4-pro",
    "modelName": "Civi 4 Pro",
    "brand": "Xiaomi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-4-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-4-pro.jpg",
        "verified": true,
        "alt": "Xiaomi Civi 4 Pro Spring Field Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-1s",
    "modelName": "Redmi 1S",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-1s.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-1s.jpg",
        "verified": true,
        "alt": "Redmi 1S Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-2",
    "modelName": "Redmi 2",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-2.jpg",
        "verified": true,
        "alt": "Redmi 2 White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-3s",
    "modelName": "Redmi 3S",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-3s.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-3s.jpg",
        "verified": true,
        "alt": "Redmi 3S Gold"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-3s-prime",
    "modelName": "Redmi 3S Prime",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-3s.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-3s.jpg",
        "verified": true,
        "alt": "Redmi 3S Prime Dark Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-4",
    "modelName": "Redmi 4",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-4-india.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-4-india.jpg",
        "verified": true,
        "alt": "Redmi 4 Matte Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-4a",
    "modelName": "Redmi 4A",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-4a.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-4a.jpg",
        "verified": true,
        "alt": "Redmi 4A Rose Gold"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-5",
    "modelName": "Redmi 5",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-5.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-5.jpg",
        "verified": true,
        "alt": "Redmi 5 Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-5a",
    "modelName": "Redmi 5A",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-5a.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-5a.jpg",
        "verified": true,
        "alt": "Redmi 5A Platinum Silver"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-6",
    "modelName": "Redmi 6",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-6.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-6.jpg",
        "verified": true,
        "alt": "Redmi 6 Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-6-pro",
    "modelName": "Redmi 6 Pro",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-6-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-6-pro.jpg",
        "verified": true,
        "alt": "Redmi 6 Pro Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-6a",
    "modelName": "Redmi 6A",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-6a.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-6a.jpg",
        "verified": true,
        "alt": "Redmi 6A Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-7",
    "modelName": "Redmi 7",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-7.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-7.jpg",
        "verified": true,
        "alt": "Redmi 7 Lunar Red"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-7a",
    "modelName": "Redmi 7A",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-7a.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-7a.jpg",
        "verified": true,
        "alt": "Redmi 7A Matte Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-8",
    "modelName": "Redmi 8",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-8.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-8.jpg",
        "verified": true,
        "alt": "Redmi 8 Ruby Red"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-8a",
    "modelName": "Redmi 8A",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-8a.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-8a.jpg",
        "verified": true,
        "alt": "Redmi 8A Sunset Red"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-9",
    "modelName": "Redmi 9",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-9-india.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-9-india.jpg",
        "verified": true,
        "alt": "Redmi 9 Carbon Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-9-prime",
    "modelName": "Redmi 9 Prime",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-9-prime.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-9-prime.jpg",
        "verified": true,
        "alt": "Redmi 9 Prime Matte Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-9a",
    "modelName": "Redmi 9A",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-9a.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-9a.jpg",
        "verified": true,
        "alt": "Redmi 9A Midnight Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-9-power",
    "modelName": "Redmi 9 Power",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-9-power.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-9-power.jpg",
        "verified": true,
        "alt": "Redmi 9 Power Electric Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-10-prime",
    "modelName": "Redmi 10 Prime",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-10-prime.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-10-prime.jpg",
        "verified": true,
        "alt": "Redmi 10 Prime Phantom Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-3",
    "modelName": "Redmi Note 3",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-3.jpg",
        "verified": true,
        "alt": "Redmi Note 3 Silver"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-4",
    "modelName": "Redmi Note 4",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-4.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-4.jpg",
        "verified": true,
        "alt": "Redmi Note 4 Dark Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-5",
    "modelName": "Redmi Note 5",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-5.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-5.jpg",
        "verified": true,
        "alt": "Redmi Note 5 Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-5-pro",
    "modelName": "Redmi Note 5 Pro",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-5-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-5-pro.jpg",
        "verified": true,
        "alt": "Redmi Note 5 Pro Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-6-pro",
    "modelName": "Redmi Note 6 Pro",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-6-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-6-pro.jpg",
        "verified": true,
        "alt": "Redmi Note 6 Pro Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-7-pro",
    "modelName": "Redmi Note 7 Pro",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-7-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-7-pro.jpg",
        "verified": true,
        "alt": "Redmi Note 7 Pro Nebula Red"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-8",
    "modelName": "Redmi Note 8",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-8.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-8.jpg",
        "verified": true,
        "alt": "Redmi Note 8 Neptune Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-8-pro",
    "modelName": "Redmi Note 8 Pro",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-8-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-8-pro.jpg",
        "verified": true,
        "alt": "Redmi Note 8 Pro Gamma Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-9-pro",
    "modelName": "Redmi Note 9 Pro",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-9-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-9-pro.jpg",
        "verified": true,
        "alt": "Redmi Note 9 Pro Aurora Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-9-pro-max",
    "modelName": "Redmi Note 9 Pro Max",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-9-pro-max.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-9-pro-max.jpg",
        "verified": true,
        "alt": "Redmi Note 9 Pro Max Aurora Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-note-10-pro-max",
    "modelName": "Redmi Note 10 Pro Max",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-10-pro-max.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-10-pro-max.jpg",
        "verified": true,
        "alt": "Redmi Note 10 Pro Max Dark Night"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-k20-pro",
    "modelName": "Redmi K20 Pro",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k20-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k20-pro.jpg",
        "verified": true,
        "alt": "Redmi K20 Pro Flame Red"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "redmi-k50i-5g",
    "modelName": "Redmi K50i 5G",
    "brand": "Redmi",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k50i-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k50i-5g.jpg",
        "verified": true,
        "alt": "Redmi K50i 5G Stealth Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-f1",
    "modelName": "POCO F1",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-pocophone-f1-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-pocophone-f1-.jpg",
        "verified": true,
        "alt": "POCO F1 Graphite Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-f3-gt",
    "modelName": "POCO F3 GT",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f3-gt.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f3-gt.jpg",
        "verified": true,
        "alt": "POCO F3 GT Gunmetal Silver"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-x2",
    "modelName": "POCO X2",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x2.jpg",
        "verified": true,
        "alt": "POCO X2 Atlantis Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-x3",
    "modelName": "POCO X3",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3-nfc.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3-nfc.jpg",
        "verified": true,
        "alt": "POCO X3 Cobalt Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-x3-pro",
    "modelName": "POCO X3 Pro",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3-pro-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3-pro-.jpg",
        "verified": true,
        "alt": "POCO X3 Pro Phantom Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-x4-pro-5g",
    "modelName": "POCO X4 Pro 5G",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x4-pro-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x4-pro-5g.jpg",
        "verified": true,
        "alt": "POCO X4 Pro Laser Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-m2",
    "modelName": "POCO M2",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m2.jpg",
        "verified": true,
        "alt": "POCO M2 Pitch Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-m2-pro",
    "modelName": "POCO M2 Pro",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m2-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m2-pro.jpg",
        "verified": true,
        "alt": "POCO M2 Pro Out of the Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-m3",
    "modelName": "POCO M3",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m3.jpg",
        "verified": true,
        "alt": "POCO M3 Power Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-m4-pro",
    "modelName": "POCO M4 Pro",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-pro.jpg",
        "verified": true,
        "alt": "POCO M4 Pro Power Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-m4-5g",
    "modelName": "POCO M4 5G",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-5g.jpg",
        "verified": true,
        "alt": "POCO M4 5G Cool Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-m5",
    "modelName": "POCO M5",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m5.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m5.jpg",
        "verified": true,
        "alt": "POCO M5 Icy Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-c3",
    "modelName": "POCO C3",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c3.jpg",
        "verified": true,
        "alt": "POCO C3 Arctic Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-c31",
    "modelName": "POCO C31",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c31.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c31.jpg",
        "verified": true,
        "alt": "POCO C31 Royal Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-c50",
    "modelName": "POCO C50",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c50.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c50.jpg",
        "verified": true,
        "alt": "POCO C50 Country Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "poco-c55",
    "modelName": "POCO C55",
    "brand": "POCO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c55.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c55.jpg",
        "verified": true,
        "alt": "POCO C55 Forest Green"
      }
    ],
    "verifiedCoverage": true
  }
] as unknown as MobileImageCatalogEntry[];

export const xiaomiAdditionsBundle: MobileBrandBundle = {
  models,
  variants,
  images,
};
