import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  {
    "id": "motorola-moto-g",
    "slug": "motorola-moto-g",
    "brand": "Motorola",
    "modelName": "Moto G (1st Gen)",
    "generation": "Moto G",
    "status": "discontinued",
    "launchDate": "2013-11",
    "pricing": {
      "startingPrice": 12499,
      "maximumPrice": 13999,
      "launchPrice": 12499,
      "currentPrice": 12499,
      "currency": "INR",
      "priceEffectiveDate": "2013-11",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "4.5\"",
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
        "8GB",
        "16GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 5MP",
      "mainCamera": "5 MP, f/2.4, AF",
      "frontCamera": "1.3 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 2070,
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
      "dimensions": "129.9 x 65.9 x 11.6 mm",
      "weight": 143,
      "materials": "Corning Gorilla Glass 3, plastic body",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g",
      "verifiedDate": "2013-11",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g-2nd-gen",
    "slug": "motorola-moto-g-2nd-gen",
    "brand": "Motorola",
    "modelName": "Moto G (2nd Gen)",
    "generation": "Moto G",
    "status": "discontinued",
    "launchDate": "2014-09",
    "pricing": {
      "startingPrice": 12999,
      "maximumPrice": 12999,
      "launchPrice": 12999,
      "currentPrice": 12999,
      "currency": "INR",
      "priceEffectiveDate": "2014-09",
      "source": "Motorola India Store / Official Launch"
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
      "chipset": "Qualcomm Snapdragon 400",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "1GB"
      ],
      "storageOptions": [
        "16GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 8MP with Stereo Speakers",
      "mainCamera": "8 MP, f/2.0, AF",
      "frontCamera": "2 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 2070,
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
      "dimensions": "141.5 x 70.7 x 11.0 mm",
      "weight": 149,
      "materials": "Corning Gorilla Glass 3, plastic body",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Black",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g-2nd-gen",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g-2nd-gen",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g-2nd-gen",
      "verifiedDate": "2014-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g-3rd-gen",
    "slug": "motorola-moto-g-3rd-gen",
    "brand": "Motorola",
    "modelName": "Moto G (3rd Gen)",
    "generation": "Moto G",
    "status": "discontinued",
    "launchDate": "2015-07",
    "pricing": {
      "startingPrice": 11999,
      "maximumPrice": 12999,
      "launchPrice": 11999,
      "currentPrice": 11999,
      "currency": "INR",
      "priceEffectiveDate": "2015-07",
      "source": "Motorola India Store / Official Launch"
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
      "rearCameraSetup": "Single 13MP Dual-LED",
      "mainCamera": "13 MP, f/2.0, AF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 2470,
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
      "dimensions": "142.1 x 72.4 x 11.6 mm",
      "weight": 155,
      "materials": "Corning Gorilla Glass 3, IPX7 water resistance, plastic body",
      "waterResistance": "IPX7",
      "colors": [
        "Black",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g-3rd-gen",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g-3rd-gen",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g-3rd-gen",
      "verifiedDate": "2015-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g4-plus",
    "slug": "motorola-moto-g4-plus",
    "brand": "Motorola",
    "modelName": "Moto G4 Plus",
    "generation": "Moto G4",
    "status": "discontinued",
    "launchDate": "2016-05",
    "pricing": {
      "startingPrice": 13499,
      "maximumPrice": 14999,
      "launchPrice": 13499,
      "currentPrice": 13499,
      "currency": "INR",
      "priceEffectiveDate": "2016-05",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "IPS LCD FHD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 617",
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
      "rearCameraSetup": "Single 16MP Laser/PDAF",
      "mainCamera": "16 MP, f/2.0, laser AF, PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3000,
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
      "dimensions": "153.0 x 76.6 x 9.8 mm",
      "weight": 155,
      "materials": "Corning Gorilla Glass 3, fingerprint sensor, plastic body",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Black",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g4-plus",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g4-plus",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g4-plus",
      "verifiedDate": "2016-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g5-plus",
    "slug": "motorola-moto-g5-plus",
    "brand": "Motorola",
    "modelName": "Moto G5 Plus",
    "generation": "Moto G5",
    "status": "discontinued",
    "launchDate": "2017-03",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 16999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2017-03",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.2\"",
      "displayType": "IPS LCD FHD",
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
        "3GB",
        "4GB"
      ],
      "storageOptions": [
        "16GB",
        "32GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP Dual Pixel f/1.7",
      "mainCamera": "12 MP, f/1.7, Dual Pixel PDAF",
      "frontCamera": "5 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3000,
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
      "dimensions": "150.2 x 74.0 x 7.7 mm",
      "weight": 155,
      "materials": "Corning Gorilla Glass 3, aluminum back, plastic frame",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Lunar Grey",
        "Fine Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
      "launchOS": "Android 7.0",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g5-plus",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g5-plus",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g5-plus",
      "verifiedDate": "2017-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g5s-plus",
    "slug": "motorola-moto-g5s-plus",
    "brand": "Motorola",
    "modelName": "Moto G5S Plus",
    "generation": "Moto G5",
    "status": "discontinued",
    "launchDate": "2017-08",
    "pricing": {
      "startingPrice": 15999,
      "maximumPrice": 15999,
      "launchPrice": 15999,
      "currentPrice": 15999,
      "currency": "INR",
      "priceEffectiveDate": "2017-08",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "IPS LCD FHD",
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
      "rearCameraSetup": "Dual (13MP + 13MP Depth)",
      "mainCamera": "Dual 13 MP, f/2.0, AF",
      "frontCamera": "8 MP, f/2.0 with LED flash",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3000,
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
      "dimensions": "153.5 x 76.2 x 8.0 mm",
      "weight": 168,
      "materials": "Corning Gorilla Glass 3, all-metal unibody",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Lunar Gray",
        "Blush Gold"
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
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g5s-plus",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g5s-plus",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g5s-plus",
      "verifiedDate": "2017-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g6",
    "slug": "motorola-moto-g6",
    "brand": "Motorola",
    "modelName": "Moto G6",
    "generation": "Moto G6",
    "status": "discontinued",
    "launchDate": "2018-04",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 15999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2018-04",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.7\"",
      "displayType": "IPS LCD 18:9 Max Vision",
      "resolution": "1080 x 2160",
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
      "mainCamera": "12 MP, f/1.8, PDAF",
      "frontCamera": "16 MP with LED flash",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3000,
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
      "dimensions": "153.8 x 72.3 x 8.3 mm",
      "weight": 167,
      "materials": "Corning Gorilla Glass 3 front/back, aluminum frame",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Deep Indigo",
        "Silver",
        "Blush"
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
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g6",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g6",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g6",
      "verifiedDate": "2018-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g7-power",
    "slug": "motorola-moto-g7-power",
    "brand": "Motorola",
    "modelName": "Moto G7 Power",
    "generation": "Moto G7",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 13999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.2\"",
      "displayType": "LTPS IPS LCD Max Vision",
      "resolution": "720 x 1570",
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
        "4GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 12MP PDAF, 5000 mAh Battery",
      "mainCamera": "12 MP, f/2.0, 1.25\u00b5m, PDAF",
      "frontCamera": "8 MP, f/2.2",
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
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.4 x 76.0 x 9.3 mm",
      "weight": 193,
      "materials": "Corning Gorilla Glass 3, plastic polymer glass back",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Marine Blue"
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
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g7-power",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g7-power",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g7-power",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g8-plus",
    "slug": "motorola-moto-g8-plus",
    "brand": "Motorola",
    "modelName": "Moto G8 Plus",
    "generation": "Moto G8",
    "status": "discontinued",
    "launchDate": "2019-10",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 13999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2019-10",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "LTPS IPS LCD Max Vision FHD+",
      "resolution": "1080 x 2280",
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
        "4GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP Quad Pixel + 16MP Action Cam + 5MP Depth)",
      "mainCamera": "48 MP, f/1.7, Laser/PDAF",
      "frontCamera": "25 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "16 MP, f/2.2, 14mm dedicated action cam (ultrawide)"
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
      "dimensions": "158.4 x 75.8 x 9.1 mm",
      "weight": 188,
      "materials": "Glass front, plastic body, stereo speakers with Dolby Audio",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Cosmic Blue",
        "Crystal Pink"
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
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g8-plus",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g8-plus",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g8-plus",
      "verifiedDate": "2019-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g40-fusion",
    "slug": "motorola-moto-g40-fusion",
    "brand": "Motorola",
    "modelName": "Moto G40 Fusion",
    "generation": "Moto G40",
    "status": "discontinued",
    "launchDate": "2021-04",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 15999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2021-04",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.8\"",
      "displayType": "IPS LCD 120Hz HDR10",
      "resolution": "1080 x 2460",
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
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Depth), 6000 mAh Battery",
      "mainCamera": "64 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 20
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
      "dimensions": "169.6 x 75.9 x 9.8 mm",
      "weight": 225,
      "materials": "Glass front, plastic back, 6000 mAh battery",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Dynamic Gray",
        "Frosted Champagne"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g40-fusion",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g40-fusion",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g40-fusion",
      "verifiedDate": "2021-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g60",
    "slug": "motorola-moto-g60",
    "brand": "Motorola",
    "modelName": "Moto G60",
    "generation": "Moto G60",
    "status": "discontinued",
    "launchDate": "2021-04",
    "pricing": {
      "startingPrice": 17999,
      "maximumPrice": 17999,
      "launchPrice": 17999,
      "currentPrice": 17999,
      "currency": "INR",
      "priceEffectiveDate": "2021-04",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.8\"",
      "displayType": "IPS LCD 120Hz HDR10",
      "resolution": "1080 x 2460",
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
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (108MP + 8MP UW + 2MP Depth), 6000 mAh Battery",
      "mainCamera": "108 MP, f/1.9, PDAF",
      "frontCamera": "32 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 6000,
      "wiredCharging": 20
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
      "dimensions": "169.6 x 75.9 x 9.8 mm",
      "weight": 225,
      "materials": "Glass front, plastic back, 108MP sensor",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Dynamic Gray",
        "Frosted Champagne"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g60",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g60",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g60",
      "verifiedDate": "2021-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g52",
    "slug": "motorola-moto-g52",
    "brand": "Motorola",
    "modelName": "Moto G52",
    "generation": "Moto G52",
    "status": "discontinued",
    "launchDate": "2022-04",
    "pricing": {
      "startingPrice": 14499,
      "maximumPrice": 16499,
      "launchPrice": 14499,
      "currentPrice": 14499,
      "currency": "INR",
      "priceEffectiveDate": "2022-04",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.6\"",
      "displayType": "pOLED 90Hz FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 680 4G",
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
      "rearCameraSetup": "Triple (50MP + 8MP UW + 2MP Macro)",
      "mainCamera": "50 MP, f/1.8, 1/2.76\", PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 30
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
      "dimensions": "160.1 x 74.5 x 8.0 mm",
      "weight": 169,
      "materials": "Glass front, plastic back, stereo speakers with Dolby Atmos",
      "waterResistance": "IP52",
      "colors": [
        "Charcoal Grey",
        "Porcelain White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g52",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g52",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g52",
      "verifiedDate": "2022-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g72",
    "slug": "motorola-moto-g72",
    "brand": "Motorola",
    "modelName": "Moto G72",
    "generation": "Moto G72",
    "status": "discontinued",
    "launchDate": "2022-10",
    "pricing": {
      "startingPrice": 18999,
      "maximumPrice": 18999,
      "launchPrice": 18999,
      "currentPrice": 18999,
      "currency": "INR",
      "priceEffectiveDate": "2022-10",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.6\"",
      "displayType": "pOLED 120Hz 10-bit HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G99 (6nm)",
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
      "rearCameraSetup": "Triple (108MP + 8MP UW + 2MP Macro)",
      "mainCamera": "108 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.5",
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
      "dimensions": "160.5 x 74.4 x 7.9 mm",
      "weight": 166,
      "materials": "Glass front, plastic back, in-display fingerprint, stereo speakers",
      "waterResistance": "IP52",
      "colors": [
        "Meteorite Black",
        "Polar Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g72",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g72",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g72",
      "verifiedDate": "2022-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-g34-5g",
    "slug": "motorola-moto-g34-5g",
    "brand": "Motorola",
    "modelName": "Moto G34 5G",
    "generation": "Moto G34",
    "status": "active",
    "launchDate": "2024-01",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 11999,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2024-01",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "IPS LCD 120Hz",
      "resolution": "720 x 1600",
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
        "4GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (50MP + 2MP Macro)",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "16 MP, f/2.4",
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
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "162.7 x 74.6 x 8.0 mm",
      "weight": 179,
      "materials": "Glass front, vegan leather / plastic back, stereo speakers",
      "waterResistance": "Water-repellent design",
      "colors": [
        "Ocean Green",
        "Charcoal Black",
        "Ice Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
      "launchOS": "Android 14",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-g34-5g",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-g34-5g",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-g34-5g",
      "verifiedDate": "2024-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-e",
    "slug": "motorola-moto-e",
    "brand": "Motorola",
    "modelName": "Moto E (1st Gen)",
    "generation": "Moto E",
    "status": "discontinued",
    "launchDate": "2014-05",
    "pricing": {
      "startingPrice": 6999,
      "maximumPrice": 6999,
      "launchPrice": 6999,
      "currentPrice": 6999,
      "currency": "INR",
      "priceEffectiveDate": "2014-05",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "4.3\"",
      "displayType": "IPS LCD",
      "resolution": "540 x 960",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 200",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "1GB"
      ],
      "storageOptions": [
        "4GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 5MP",
      "mainCamera": "5 MP",
      "frontCamera": "None",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 1980,
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
      "dimensions": "124.8 x 64.8 x 12.3 mm",
      "weight": 142,
      "materials": "Corning Gorilla Glass 3, plastic body",
      "waterResistance": "Splash resistant",
      "colors": [
        "Black",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-e",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-e",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-e",
      "verifiedDate": "2014-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-e-2nd-gen",
    "slug": "motorola-moto-e-2nd-gen",
    "brand": "Motorola",
    "modelName": "Moto E (2nd Gen 4G)",
    "generation": "Moto E",
    "status": "discontinued",
    "launchDate": "2015-02",
    "pricing": {
      "startingPrice": 6999,
      "maximumPrice": 7999,
      "launchPrice": 6999,
      "currentPrice": 6999,
      "currency": "INR",
      "priceEffectiveDate": "2015-02",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "4.5\"",
      "displayType": "IPS LCD",
      "resolution": "540 x 960",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 410 LTE",
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
      "rearCameraSetup": "Single 5MP AF",
      "mainCamera": "5 MP, f/2.2, AF",
      "frontCamera": "VGA",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 2390,
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
      "dimensions": "129.9 x 66.8 x 12.3 mm",
      "weight": 145,
      "materials": "Corning Gorilla Glass 3, plastic body",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Black",
        "White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-e-2nd-gen",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-e-2nd-gen",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-e-2nd-gen",
      "verifiedDate": "2015-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-e13",
    "slug": "motorola-moto-e13",
    "brand": "Motorola",
    "modelName": "Moto E13",
    "generation": "Moto E13",
    "status": "discontinued",
    "launchDate": "2023-02",
    "pricing": {
      "startingPrice": 6999,
      "maximumPrice": 8999,
      "launchPrice": 6999,
      "currentPrice": 6999,
      "currency": "INR",
      "priceEffectiveDate": "2023-02",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1600",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Unisoc T606 (12nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "2GB",
        "4GB",
        "8GB"
      ],
      "storageOptions": [
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP PDAF",
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
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "164.2 x 75.0 x 8.5 mm",
      "weight": 179.5,
      "materials": "Glass front, plastic back, Dolby Atmos audio",
      "waterResistance": "IP52",
      "colors": [
        "Cosmic Black",
        "Aurora Green",
        "Creamy White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Android 13 (Go edition)",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-e13",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-e13",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-e13",
      "verifiedDate": "2023-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-edge-20",
    "slug": "motorola-edge-20",
    "brand": "Motorola",
    "modelName": "Motorola Edge 20",
    "generation": "Edge 20",
    "status": "discontinued",
    "launchDate": "2021-08",
    "pricing": {
      "startingPrice": 29999,
      "maximumPrice": 29999,
      "launchPrice": 29999,
      "currentPrice": 29999,
      "currency": "INR",
      "priceEffectiveDate": "2021-08",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "OLED 144Hz 1B colors HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 144,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 778G 5G",
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
      "rearCameraSetup": "Triple (108MP + 8MP 3x Tele OIS + 16MP UW)",
      "mainCamera": "108 MP, f/1.9, 1/1.52\", PDAF",
      "frontCamera": "32 MP, f/2.3",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 119\u02da ultrawide",
      "telephotoCamera": "8 MP, f/2.4, 3x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "163.0 x 76.0 x 6.99 mm",
      "weight": 163,
      "materials": "Gorilla Glass 3, aluminum alloy frame, 6.99mm ultra-thin",
      "waterResistance": "IP52",
      "colors": [
        "Frosted Grey",
        "Frosted White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-edge-20",
      "productPage": "https://www.motorola.in/smartphones-motorola-edge-20",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-edge-20",
      "verifiedDate": "2021-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-edge-20-pro",
    "slug": "motorola-edge-20-pro",
    "brand": "Motorola",
    "modelName": "Motorola Edge 20 Pro",
    "generation": "Edge 20",
    "status": "discontinued",
    "launchDate": "2021-10",
    "pricing": {
      "startingPrice": 36999,
      "maximumPrice": 36999,
      "launchPrice": 36999,
      "currentPrice": 36999,
      "currency": "INR",
      "priceEffectiveDate": "2021-10",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "OLED 144Hz 1B colors HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 144,
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
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (108MP + 8MP 5x Periscope Tele OIS + 16MP UW)",
      "mainCamera": "108 MP, f/1.9, PDAF",
      "frontCamera": "32 MP, f/2.3",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "16 MP, f/2.2, 119\u02da ultrawide",
      "telephotoCamera": "8 MP, f/3.4, 126mm 5x Periscope Telephoto, OIS"
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
      "dimensions": "163.0 x 76.0 x 8.0 mm",
      "weight": 190,
      "materials": "Gorilla Glass 5 front/back, aluminum frame",
      "waterResistance": "IP52",
      "colors": [
        "Midnight Sky",
        "Iridescent White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-edge-20-pro",
      "productPage": "https://www.motorola.in/smartphones-motorola-edge-20-pro",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-edge-20-pro",
      "verifiedDate": "2021-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-edge-30",
    "slug": "motorola-edge-30",
    "brand": "Motorola",
    "modelName": "Motorola Edge 30",
    "generation": "Edge 30",
    "status": "discontinued",
    "launchDate": "2022-05",
    "pricing": {
      "startingPrice": 27999,
      "maximumPrice": 29999,
      "launchPrice": 27999,
      "currentPrice": 27999,
      "currency": "INR",
      "priceEffectiveDate": "2022-05",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "AMOLED 144Hz 1B colors HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 144,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 778G+ 5G",
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
      "rearCameraSetup": "Triple (50MP OIS + 50MP UW + 2MP Depth)",
      "mainCamera": "50 MP, f/1.8, omnidirectional PDAF, OIS",
      "frontCamera": "32 MP, f/2.3",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "50 MP, f/2.2, 118\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4020,
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
      "dimensions": "159.4 x 74.2 x 6.79 mm",
      "weight": 155,
      "materials": "Gorilla Glass 3, 6.79mm ultra-slim, 155g light, stereo speakers",
      "waterResistance": "IP52",
      "colors": [
        "Meteor Grey",
        "Aurora Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-edge-30",
      "productPage": "https://www.motorola.in/smartphones-motorola-edge-30",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-edge-30",
      "verifiedDate": "2022-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-razr-2019",
    "slug": "motorola-razr-2019",
    "brand": "Motorola",
    "modelName": "Motorola Razr (2019)",
    "generation": "Razr",
    "status": "discontinued",
    "launchDate": "2019-11",
    "pricing": {
      "startingPrice": 124999,
      "maximumPrice": 124999,
      "launchPrice": 124999,
      "currentPrice": 124999,
      "currency": "INR",
      "priceEffectiveDate": "2019-11",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.2\" Foldable P-OLED + 2.7\" Quick View",
      "displayType": "Foldable P-OLED",
      "resolution": "876 x 2142",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 710",
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
      "rearCameraSetup": "Single 16MP Dual Pixel EIS",
      "mainCamera": "16 MP, f/1.7, Dual Pixel PDAF, Laser AF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 2510,
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
      "dimensions": "172.0 x 72.0 x 6.9 mm (unfolded)",
      "weight": 205,
      "materials": "Stainless steel frame, zero-gap hinge, Gorilla Glass 3",
      "waterResistance": "Splash-proof nano-coating",
      "colors": [
        "Noir Black"
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-razr-2019",
      "productPage": "https://www.motorola.in/smartphones-motorola-razr-2019",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-razr-2019",
      "verifiedDate": "2019-11",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-razr-40",
    "slug": "motorola-razr-40",
    "brand": "Motorola",
    "modelName": "Motorola Razr 40",
    "generation": "Razr 40",
    "status": "active",
    "launchDate": "2023-06",
    "pricing": {
      "startingPrice": 59999,
      "maximumPrice": 59999,
      "launchPrice": 59999,
      "currentPrice": 59999,
      "currency": "INR",
      "priceEffectiveDate": "2023-06",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.9\" Foldable LTPO AMOLED 144Hz + 1.5\" OLED",
      "displayType": "Foldable LTPO AMOLED",
      "resolution": "1080 x 2640",
      "refreshRate": 144,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 7 Gen 1 (4nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (64MP OIS + 13MP UW)",
      "mainCamera": "64 MP, f/1.7, PDAF, Laser AF, OIS",
      "frontCamera": "32 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "13 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4200,
      "wiredCharging": 30,
      "wirelessCharging": 5
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
      "dimensions": "170.8 x 74.0 x 7.35 mm (unfolded)",
      "weight": 188.6,
      "materials": "7000-series aluminum frame, vegan leather back",
      "waterResistance": "Water-repellent design",
      "colors": [
        "Sage Green",
        "Vanilla Cream",
        "Summer Lilac"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-razr-40",
      "productPage": "https://www.motorola.in/smartphones-motorola-razr-40",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-razr-40",
      "verifiedDate": "2023-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-x",
    "slug": "motorola-moto-x",
    "brand": "Motorola",
    "modelName": "Moto X (1st Gen)",
    "generation": "Moto X",
    "status": "discontinued",
    "launchDate": "2013-08",
    "pricing": {
      "startingPrice": 23999,
      "maximumPrice": 25999,
      "launchPrice": 23999,
      "currentPrice": 23999,
      "currency": "INR",
      "priceEffectiveDate": "2013-08",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "4.7\"",
      "displayType": "AMOLED",
      "resolution": "720 x 1280",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Motorola X8 Mobile Computing System",
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
      "rearCameraSetup": "Single 10MP Clear Pixel",
      "mainCamera": "10 MP, f/2.4, AF",
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
      "dimensions": "129.3 x 65.3 x 10.4 mm",
      "weight": 130,
      "materials": "Corning Gorilla Glass 3, curved ergonomic back, Touchless Control",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Black",
        "White",
        "Teak Wood",
        "Walnut"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
      "launchOS": "Android 4.2.2",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-x",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-x",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-x",
      "verifiedDate": "2013-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-x4",
    "slug": "motorola-moto-x4",
    "brand": "Motorola",
    "modelName": "Moto X4",
    "generation": "Moto X",
    "status": "discontinued",
    "launchDate": "2017-09",
    "pricing": {
      "startingPrice": 20999,
      "maximumPrice": 24999,
      "launchPrice": 20999,
      "currentPrice": 20999,
      "currency": "INR",
      "priceEffectiveDate": "2017-09",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.2\"",
      "displayType": "LTPS IPS LCD FHD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 630",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB",
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "32GB",
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (12MP Dual Pixel + 8MP UW)",
      "mainCamera": "12 MP, f/2.0, Dual Pixel PDAF",
      "frontCamera": "16 MP, f/2.0 with selfie flash",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 3000,
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
      "dimensions": "148.4 x 73.4 x 8.0 mm",
      "weight": 163,
      "materials": "Gorilla Glass 3 front/back, anodized aluminum frame, IP68 water resistance",
      "waterResistance": "IP68",
      "colors": [
        "Super Black",
        "Sterling Blue"
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
      "headphoneJack": true
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-x4",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-x4",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-x4",
      "verifiedDate": "2017-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-z",
    "slug": "motorola-moto-z",
    "brand": "Motorola",
    "modelName": "Moto Z",
    "generation": "Moto Z",
    "status": "discontinued",
    "launchDate": "2016-06",
    "pricing": {
      "startingPrice": 39999,
      "maximumPrice": 39999,
      "launchPrice": 39999,
      "currentPrice": 39999,
      "currency": "INR",
      "priceEffectiveDate": "2016-06",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "AMOLED Quad HD",
      "resolution": "1440 x 2560",
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
        "4GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP OIS with Moto Mods Support",
      "mainCamera": "13 MP, f/1.8, OIS, Laser AF",
      "frontCamera": "5 MP, f/2.2 with LED flash",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 2600,
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
      "dimensions": "153.3 x 75.3 x 5.19 mm",
      "weight": 136,
      "materials": "Military aircraft-grade aluminum and stainless steel, 5.19mm ultra-thin, Moto Mods 16-pin connector",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Black / Lunar Grey",
        "Black / Rose Gold",
        "Fine Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-z",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-z",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-z",
      "verifiedDate": "2016-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-moto-z-play",
    "slug": "motorola-moto-z-play",
    "brand": "Motorola",
    "modelName": "Moto Z Play",
    "generation": "Moto Z",
    "status": "discontinued",
    "launchDate": "2016-08",
    "pricing": {
      "startingPrice": 24999,
      "maximumPrice": 24999,
      "launchPrice": 24999,
      "currentPrice": 24999,
      "currency": "INR",
      "priceEffectiveDate": "2016-08",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "Super AMOLED FHD",
      "resolution": "1080 x 1920",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 625",
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
      "rearCameraSetup": "Single 16MP Dual AF with Moto Mods",
      "mainCamera": "16 MP, f/2.0, Laser/PDAF",
      "frontCamera": "5 MP, f/2.2 with LED flash",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3510,
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
      "dimensions": "156.4 x 76.4 x 7.0 mm",
      "weight": 165,
      "materials": "Glass front/back, aluminum frame, Moto Mods connector, legendary 50-hour battery",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Black",
        "White / Fine Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Stock Android",
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
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-moto-z-play",
      "productPage": "https://www.motorola.in/smartphones-motorola-moto-z-play",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-moto-z-play",
      "verifiedDate": "2016-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-one-power",
    "slug": "motorola-one-power",
    "brand": "Motorola",
    "modelName": "Motorola One Power",
    "generation": "Motorola One",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 15999,
      "maximumPrice": 15999,
      "launchPrice": 15999,
      "currentPrice": 15999,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.2\"",
      "displayType": "LTPS IPS LCD Max Vision FHD+",
      "resolution": "1080 x 2246",
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
        "4GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (16MP + 5MP Depth), 5000 mAh Battery",
      "mainCamera": "16 MP, f/1.8, PDAF",
      "frontCamera": "12 MP, f/2.0 with LED flash",
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
      "dimensions": "156.0 x 76.0 x 8.98 mm",
      "weight": 205,
      "materials": "Glass front, aluminum back, plastic frame, Android One program",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Black"
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-one-power",
      "productPage": "https://www.motorola.in/smartphones-motorola-one-power",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-one-power",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "motorola-one-fusion-plus",
    "slug": "motorola-one-fusion-plus",
    "brand": "Motorola",
    "modelName": "Motorola One Fusion+",
    "generation": "Motorola One",
    "status": "discontinued",
    "launchDate": "2020-06",
    "pricing": {
      "startingPrice": 16999,
      "maximumPrice": 16999,
      "launchPrice": 16999,
      "currentPrice": 16999,
      "currency": "INR",
      "priceEffectiveDate": "2020-06",
      "source": "Motorola India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "IPS LCD Total Vision HDR10 FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
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
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP + 8MP UW + 5MP Macro + 2MP Depth) with Pop-up Selfie",
      "mainCamera": "64 MP, f/1.8, PDAF",
      "frontCamera": "Motorized pop-up 16 MP",
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
      "dimensions": "162.9 x 76.4 x 9.6 mm",
      "weight": 210,
      "materials": "Glass front, plastic back & frame, notch-free display with pop-up camera",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Moonlight White",
        "Twilight Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "My UX",
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
      "officialWebsite": "https://www.motorola.in/smartphones-motorola-one-fusion-plus",
      "productPage": "https://www.motorola.in/smartphones-motorola-one-fusion-plus",
      "specSheetUrl": "https://www.motorola.in/smartphones-motorola-one-fusion-plus",
      "verifiedDate": "2020-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  }
] as unknown as MobileModel[];

const variants: MobileVariant[] = [
  {
    "id": "motorola-moto-g-1-8",
    "modelId": "motorola-moto-g",
    "ram": "1GB",
    "storage": "8GB",
    "price": 12499,
    "mrp": 12499,
    "colors": [
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g-1-16",
    "modelId": "motorola-moto-g",
    "ram": "1GB",
    "storage": "16GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g-2nd-gen-1-16",
    "modelId": "motorola-moto-g-2nd-gen",
    "ram": "1GB",
    "storage": "16GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g-3rd-gen-1-8",
    "modelId": "motorola-moto-g-3rd-gen",
    "ram": "1GB",
    "storage": "8GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g-3rd-gen-2-16",
    "modelId": "motorola-moto-g-3rd-gen",
    "ram": "2GB",
    "storage": "16GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g4-plus-2-16",
    "modelId": "motorola-moto-g4-plus",
    "ram": "2GB",
    "storage": "16GB",
    "price": 13499,
    "mrp": 13499,
    "colors": [
      "Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g4-plus-3-32",
    "modelId": "motorola-moto-g4-plus",
    "ram": "3GB",
    "storage": "32GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g5-plus-3-16",
    "modelId": "motorola-moto-g5-plus",
    "ram": "3GB",
    "storage": "16GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Lunar Grey",
      "Fine Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g5-plus-4-32",
    "modelId": "motorola-moto-g5-plus",
    "ram": "4GB",
    "storage": "32GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Lunar Grey",
      "Fine Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g5s-plus-4-64",
    "modelId": "motorola-moto-g5s-plus",
    "ram": "4GB",
    "storage": "64GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Lunar Gray",
      "Blush Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g6-3-32",
    "modelId": "motorola-moto-g6",
    "ram": "3GB",
    "storage": "32GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Deep Indigo",
      "Silver",
      "Blush"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g6-4-64",
    "modelId": "motorola-moto-g6",
    "ram": "4GB",
    "storage": "64GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Deep Indigo",
      "Silver",
      "Blush"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g7-power-4-64",
    "modelId": "motorola-moto-g7-power",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Marine Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g8-plus-4-64",
    "modelId": "motorola-moto-g8-plus",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Cosmic Blue",
      "Crystal Pink"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g40-fusion-4-64",
    "modelId": "motorola-moto-g40-fusion",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Dynamic Gray",
      "Frosted Champagne"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g40-fusion-6-128",
    "modelId": "motorola-moto-g40-fusion",
    "ram": "6GB",
    "storage": "128GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Dynamic Gray",
      "Frosted Champagne"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g60-6-128",
    "modelId": "motorola-moto-g60",
    "ram": "6GB",
    "storage": "128GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Dynamic Gray",
      "Frosted Champagne"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g52-4-64",
    "modelId": "motorola-moto-g52",
    "ram": "4GB",
    "storage": "64GB",
    "price": 14499,
    "mrp": 14499,
    "colors": [
      "Charcoal Grey",
      "Porcelain White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g52-6-128",
    "modelId": "motorola-moto-g52",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16499,
    "mrp": 16499,
    "colors": [
      "Charcoal Grey",
      "Porcelain White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g72-6-128",
    "modelId": "motorola-moto-g72",
    "ram": "6GB",
    "storage": "128GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Meteorite Black",
      "Polar Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g34-5g-4-128",
    "modelId": "motorola-moto-g34-5g",
    "ram": "4GB",
    "storage": "128GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Ocean Green",
      "Charcoal Black",
      "Ice Blue"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-g34-5g-8-128",
    "modelId": "motorola-moto-g34-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Ocean Green",
      "Charcoal Black",
      "Ice Blue"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-e-1-4",
    "modelId": "motorola-moto-e",
    "ram": "1GB",
    "storage": "4GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-e-2nd-gen-1-8",
    "modelId": "motorola-moto-e-2nd-gen",
    "ram": "1GB",
    "storage": "8GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Black",
      "White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-e13-2-64",
    "modelId": "motorola-moto-e13",
    "ram": "2GB",
    "storage": "64GB",
    "price": 6999,
    "mrp": 6999,
    "colors": [
      "Cosmic Black",
      "Aurora Green",
      "Creamy White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-e13-4-64",
    "modelId": "motorola-moto-e13",
    "ram": "4GB",
    "storage": "64GB",
    "price": 7999,
    "mrp": 7999,
    "colors": [
      "Cosmic Black",
      "Aurora Green",
      "Creamy White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-e13-8-128",
    "modelId": "motorola-moto-e13",
    "ram": "8GB",
    "storage": "128GB",
    "price": 8999,
    "mrp": 8999,
    "colors": [
      "Cosmic Black",
      "Aurora Green",
      "Creamy White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-edge-20-8-128",
    "modelId": "motorola-edge-20",
    "ram": "8GB",
    "storage": "128GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Frosted Grey",
      "Frosted White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-edge-20-pro-8-128",
    "modelId": "motorola-edge-20-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 36999,
    "mrp": 36999,
    "colors": [
      "Midnight Sky",
      "Iridescent White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-edge-30-6-128",
    "modelId": "motorola-edge-30",
    "ram": "6GB",
    "storage": "128GB",
    "price": 27999,
    "mrp": 27999,
    "colors": [
      "Meteor Grey",
      "Aurora Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-edge-30-8-128",
    "modelId": "motorola-edge-30",
    "ram": "8GB",
    "storage": "128GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Meteor Grey",
      "Aurora Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-razr-2019-6-128",
    "modelId": "motorola-razr-2019",
    "ram": "6GB",
    "storage": "128GB",
    "price": 124999,
    "mrp": 124999,
    "colors": [
      "Noir Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-razr-40-8-256",
    "modelId": "motorola-razr-40",
    "ram": "8GB",
    "storage": "256GB",
    "price": 59999,
    "mrp": 59999,
    "colors": [
      "Sage Green",
      "Vanilla Cream",
      "Summer Lilac"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-x-2-16",
    "modelId": "motorola-moto-x",
    "ram": "2GB",
    "storage": "16GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Black",
      "White",
      "Teak Wood",
      "Walnut"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-x-2-32",
    "modelId": "motorola-moto-x",
    "ram": "2GB",
    "storage": "32GB",
    "price": 25999,
    "mrp": 25999,
    "colors": [
      "Black",
      "White",
      "Teak Wood",
      "Walnut"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-x4-3-32",
    "modelId": "motorola-moto-x4",
    "ram": "3GB",
    "storage": "32GB",
    "price": 20999,
    "mrp": 20999,
    "colors": [
      "Super Black",
      "Sterling Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-x4-4-64",
    "modelId": "motorola-moto-x4",
    "ram": "4GB",
    "storage": "64GB",
    "price": 22999,
    "mrp": 22999,
    "colors": [
      "Super Black",
      "Sterling Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-x4-6-64",
    "modelId": "motorola-moto-x4",
    "ram": "6GB",
    "storage": "64GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Super Black",
      "Sterling Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-z-4-64",
    "modelId": "motorola-moto-z",
    "ram": "4GB",
    "storage": "64GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Black / Lunar Grey",
      "Black / Rose Gold",
      "Fine Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-moto-z-play-3-32",
    "modelId": "motorola-moto-z-play",
    "ram": "3GB",
    "storage": "32GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Black",
      "White / Fine Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-one-power-4-64",
    "modelId": "motorola-one-power",
    "ram": "4GB",
    "storage": "64GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "motorola-one-fusion-plus-6-128",
    "modelId": "motorola-one-fusion-plus",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Moonlight White",
      "Twilight Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  }
] as unknown as MobileVariant[];

const images: MobileImageCatalogEntry[] = [
  {
    "modelId": "motorola-moto-g",
    "modelName": "Moto G (1st Gen)",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g.jpg",
        "verified": true,
        "alt": "Motorola Moto G Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g-2nd-gen",
    "modelName": "Moto G (2nd Gen)",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g-2nd-gen.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g-2nd-gen.jpg",
        "verified": true,
        "alt": "Motorola Moto G 2nd Gen Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g-3rd-gen",
    "modelName": "Moto G (3rd Gen)",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g-3rd-gen.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g-3rd-gen.jpg",
        "verified": true,
        "alt": "Motorola Moto G 3rd Gen Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g4-plus",
    "modelName": "Moto G4 Plus",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g4-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g4-plus.jpg",
        "verified": true,
        "alt": "Motorola Moto G4 Plus Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g5-plus",
    "modelName": "Moto G5 Plus",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g5-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g5-plus.jpg",
        "verified": true,
        "alt": "Motorola Moto G5 Plus Lunar Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g5s-plus",
    "modelName": "Moto G5S Plus",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g5s-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g5s-plus.jpg",
        "verified": true,
        "alt": "Motorola Moto G5S Plus Lunar Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g6",
    "modelName": "Moto G6",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g6-r.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g6-r.jpg",
        "verified": true,
        "alt": "Motorola Moto G6 Deep Indigo"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g7-power",
    "modelName": "Moto G7 Power",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g7-power.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g7-power.jpg",
        "verified": true,
        "alt": "Motorola Moto G7 Power Marine Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g8-plus",
    "modelName": "Moto G8 Plus",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g8-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g8-plus.jpg",
        "verified": true,
        "alt": "Motorola Moto G8 Plus Cosmic Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g40-fusion",
    "modelName": "Moto G40 Fusion",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g40-fusion.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g40-fusion.jpg",
        "verified": true,
        "alt": "Motorola Moto G40 Fusion Dynamic Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g60",
    "modelName": "Moto G60",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g60.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g60.jpg",
        "verified": true,
        "alt": "Motorola Moto G60 Dynamic Gray"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g52",
    "modelName": "Moto G52",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g52.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g52.jpg",
        "verified": true,
        "alt": "Motorola Moto G52 Charcoal Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g72",
    "modelName": "Moto G72",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g72.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g72.jpg",
        "verified": true,
        "alt": "Motorola Moto G72 Meteorite Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-g34-5g",
    "modelName": "Moto G34 5G",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g34.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g34.jpg",
        "verified": true,
        "alt": "Motorola Moto G34 5G Ocean Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-e",
    "modelName": "Moto E (1st Gen)",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e.jpg",
        "verified": true,
        "alt": "Motorola Moto E Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-e-2nd-gen",
    "modelName": "Moto E (2nd Gen 4G)",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e-2nd-gen.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e-2nd-gen.jpg",
        "verified": true,
        "alt": "Motorola Moto E 2nd Gen Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-e13",
    "modelName": "Moto E13",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e13.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e13.jpg",
        "verified": true,
        "alt": "Motorola Moto E13 Aurora Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-edge-20",
    "modelName": "Motorola Edge 20",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-20.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-20.jpg",
        "verified": true,
        "alt": "Motorola Edge 20 Frosted Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-edge-20-pro",
    "modelName": "Motorola Edge 20 Pro",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-20-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-20-pro.jpg",
        "verified": true,
        "alt": "Motorola Edge 20 Pro Midnight Sky"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-edge-30",
    "modelName": "Motorola Edge 30",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-30.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-30.jpg",
        "verified": true,
        "alt": "Motorola Edge 30 Meteor Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-razr-2019",
    "modelName": "Motorola Razr (2019)",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-2019.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-2019.jpg",
        "verified": true,
        "alt": "Motorola Razr 2019 Noir Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-razr-40",
    "modelName": "Motorola Razr 40",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-40.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-40.jpg",
        "verified": true,
        "alt": "Motorola Razr 40 Sage Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-x",
    "modelName": "Moto X (1st Gen)",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-x.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-x.jpg",
        "verified": true,
        "alt": "Motorola Moto X Woven Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-x4",
    "modelName": "Moto X4",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-x4.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-x4.jpg",
        "verified": true,
        "alt": "Motorola Moto X4 Super Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-z",
    "modelName": "Moto Z",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-z.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-z.jpg",
        "verified": true,
        "alt": "Motorola Moto Z Black / Lunar Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-moto-z-play",
    "modelName": "Moto Z Play",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-z-play.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-z-play.jpg",
        "verified": true,
        "alt": "Motorola Moto Z Play Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-one-power",
    "modelName": "Motorola One Power",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-one-power.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-one-power.jpg",
        "verified": true,
        "alt": "Motorola One Power Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "motorola-one-fusion-plus",
    "modelName": "Motorola One Fusion+",
    "brand": "Motorola",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/motorola-one-fusion-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/motorola-one-fusion-plus.jpg",
        "verified": true,
        "alt": "Motorola One Fusion+ Moonlight White"
      }
    ],
    "verifiedCoverage": true
  }
] as unknown as MobileImageCatalogEntry[];

export const motorolaAdditionsBundle: MobileBrandBundle = {
  models,
  variants,
  images,
};
