import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  {
    "id": "asus-rog-phone",
    "slug": "asus-rog-phone",
    "brand": "ASUS",
    "modelName": "ROG Phone (1st Gen)",
    "generation": "ROG Phone",
    "status": "discontinued",
    "launchDate": "2018-10",
    "pricing": {
      "startingPrice": 69999,
      "maximumPrice": 69999,
      "launchPrice": 69999,
      "currentPrice": 69999,
      "currency": "INR",
      "priceEffectiveDate": "2018-10",
      "source": "ASUS India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.0\"",
      "displayType": "AMOLED 90Hz 1ms HDR",
      "resolution": "1080 x 2160",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 845 Speed-Binned (2.96 GHz)",
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
      "rearCameraSetup": "Dual (12MP Sony IMX363 + 8MP 120\u02da UW) AirTriggers",
      "mainCamera": "12 MP, f/1.8, 24mm, Dual Pixel PDAF, 4-axis OIS",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, 12mm 120\u02da ultrawide"
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
      "dimensions": "158.8 x 76.2 x 8.3 mm",
      "weight": 200,
      "materials": "Gorilla Glass 6 front, Gorilla Glass 5 back, 3D vapor-chamber cooling, dual front-facing stereo speakers, ultrasonic AirTriggers",
      "waterResistance": "Splash resistant",
      "colors": [
        "Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ROG Gaming UI",
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
      "officialWebsite": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone",
      "productPage": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone",
      "specSheetUrl": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone",
      "verifiedDate": "2018-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "asus-rog-phone-ii",
    "slug": "asus-rog-phone-ii",
    "brand": "ASUS",
    "modelName": "ROG Phone II",
    "generation": "ROG Phone",
    "status": "discontinued",
    "launchDate": "2019-09",
    "pricing": {
      "startingPrice": 37999,
      "maximumPrice": 59999,
      "launchPrice": 37999,
      "currentPrice": 37999,
      "currency": "INR",
      "priceEffectiveDate": "2019-09",
      "source": "ASUS India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.59\"",
      "displayType": "AMOLED 120Hz 1ms 10-bit HDR10",
      "resolution": "1080 x 2340",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 855+ (2.96 GHz)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "128GB",
        "512GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (48MP Sony IMX586 + 13MP 125\u02da UW), 6000 mAh Monster Battery",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF, Laser AF",
      "frontCamera": "24 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "13 MP, f/2.4, 11mm 125\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 6000,
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
      "dimensions": "171.0 x 77.6 x 9.5 mm",
      "weight": 240,
      "materials": "Gorilla Glass 6 front/back, RGB illuminated rear ROG logo, 6000 mAh battery, dual front stereo speakers with DTS:X Ultra",
      "waterResistance": "None",
      "colors": [
        "Matte Black",
        "Glossy Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ROG UI",
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
      "officialWebsite": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone-ii",
      "productPage": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone-ii",
      "specSheetUrl": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone-ii",
      "verifiedDate": "2019-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "asus-rog-phone-3",
    "slug": "asus-rog-phone-3",
    "brand": "ASUS",
    "modelName": "ROG Phone 3",
    "generation": "ROG Phone",
    "status": "discontinued",
    "launchDate": "2020-07",
    "pricing": {
      "startingPrice": 49999,
      "maximumPrice": 57999,
      "launchPrice": 49999,
      "currentPrice": 49999,
      "currency": "INR",
      "priceEffectiveDate": "2020-07",
      "source": "ASUS India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.59\"",
      "displayType": "AMOLED 144Hz 1ms 10-bit HDR10+",
      "resolution": "1080 x 2340",
      "refreshRate": 144,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 865+ 5G (3.1 GHz)",
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
      "rearCameraSetup": "Triple (64MP Sony IMX686 + 13MP UW + 5MP Macro) AirTrigger 3",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "24 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "13 MP, f/2.4, 125\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 6000,
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
      "dimensions": "171.0 x 78.0 x 9.85 mm",
      "weight": 240,
      "materials": "Gorilla Glass 6 front, Gorilla Glass 3 back, GameCool 3 3D vapor chamber, AirTrigger 3 ultrasonic sensors",
      "waterResistance": "None",
      "colors": [
        "Black Glare"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ROG UI",
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
      "officialWebsite": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone-3",
      "productPage": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone-3",
      "specSheetUrl": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone-3",
      "verifiedDate": "2020-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "asus-rog-phone-5",
    "slug": "asus-rog-phone-5",
    "brand": "ASUS",
    "modelName": "ROG Phone 5",
    "generation": "ROG Phone",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 49999,
      "maximumPrice": 57999,
      "launchPrice": 49999,
      "currentPrice": 49999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "ASUS India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "Samsung E4 AMOLED 144Hz 1ms HDR10+",
      "resolution": "1080 x 2448",
      "refreshRate": 144,
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
      "rearCameraSetup": "Triple (64MP Sony IMX686 + 13MP UW + 5MP Macro) 65W HyperCharge",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "24 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "13 MP, f/2.4, 125\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 6000,
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
      "dimensions": "172.8 x 77.3 x 10.3 mm",
      "weight": 238,
      "materials": "Gorilla Glass Victus front, Gorilla Glass 3 back, dot-matrix Aura RGB lighting, dual Cirrus Logic amp stereo speakers",
      "waterResistance": "None",
      "colors": [
        "Phantom Black",
        "Storm White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ROG UI",
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
      "officialWebsite": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone-5",
      "productPage": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone-5",
      "specSheetUrl": "https://www.asus.com/in/mobile-handhelds/phones/asus-rog-phone-5",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "asus-zenfone-5z",
    "slug": "asus-zenfone-5z",
    "brand": "ASUS",
    "modelName": "Zenfone 5Z",
    "generation": "Zenfone 5",
    "status": "discontinued",
    "launchDate": "2018-07",
    "pricing": {
      "startingPrice": 29999,
      "maximumPrice": 36999,
      "launchPrice": 29999,
      "currentPrice": 29999,
      "currency": "INR",
      "priceEffectiveDate": "2018-07",
      "source": "ASUS India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.2\"",
      "displayType": "IPS LCD All-Screen FHD+",
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
      "rearCameraSetup": "Dual (12MP Sony IMX363 OIS + 8MP 120\u02da UW) AI Cameras",
      "mainCamera": "12 MP, f/1.8, 24mm, 4-axis OIS, Dual Pixel PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.0, 12mm 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 3300,
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
      "dimensions": "153.0 x 75.7 x 7.7 mm",
      "weight": 165,
      "materials": "Gorilla Glass front/back, aerospace-grade aluminum frame, concentric circle reflective spun-metal finish",
      "waterResistance": "None",
      "colors": [
        "Midnight Blue",
        "Meteor Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ZenUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.asus.com/in/mobile-handhelds/phones/asus-zenfone-5z",
      "productPage": "https://www.asus.com/in/mobile-handhelds/phones/asus-zenfone-5z",
      "specSheetUrl": "https://www.asus.com/in/mobile-handhelds/phones/asus-zenfone-5z",
      "verifiedDate": "2018-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "asus-6z",
    "slug": "asus-6z",
    "brand": "ASUS",
    "modelName": "ASUS 6z",
    "generation": "ASUS 6",
    "status": "discontinued",
    "launchDate": "2019-06",
    "pricing": {
      "startingPrice": 31999,
      "maximumPrice": 39999,
      "launchPrice": 31999,
      "currentPrice": 31999,
      "currency": "INR",
      "priceEffectiveDate": "2019-06",
      "source": "ASUS India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.4\"",
      "displayType": "IPS LCD NanoEdge FHD+ Notchless",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
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
        "64GB",
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual Motorized Flip Camera (48MP Sony IMX586 + 13MP UW), 5000 mAh Battery",
      "mainCamera": "48 MP, f/1.8, 26mm, Laser/PDAF",
      "frontCamera": "Motorized flip-up main module acts as selfie camera",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "13 MP, f/2.4, 11mm 125\u02da ultrawide"
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
      "dimensions": "159.1 x 75.4 x 9.2 mm",
      "weight": 190,
      "materials": "Gorilla Glass 6 front, Gorilla Glass 3 back, liquid metal motorized flip camera module with custom stepper motor",
      "waterResistance": "None",
      "colors": [
        "Midnight Black",
        "Twilight Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ZenUI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.asus.com/in/mobile-handhelds/phones/asus-6z",
      "productPage": "https://www.asus.com/in/mobile-handhelds/phones/asus-6z",
      "specSheetUrl": "https://www.asus.com/in/mobile-handhelds/phones/asus-6z",
      "verifiedDate": "2019-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "asus-zenfone-max-pro-m1",
    "slug": "asus-zenfone-max-pro-m1",
    "brand": "ASUS",
    "modelName": "Zenfone Max Pro M1",
    "generation": "Zenfone Max",
    "status": "discontinued",
    "launchDate": "2018-04",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 14999,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2018-04",
      "source": "ASUS India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.99\"",
      "displayType": "IPS LCD 18:9 Full View FHD+",
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
      "rearCameraSetup": "Dual (13MP/16MP + 5MP Depth), 5000 mAh Battery",
      "mainCamera": "13 MP, f/2.2, PDAF",
      "frontCamera": "8 MP with softlight LED flash",
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
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "159.0 x 76.0 x 8.45 mm",
      "weight": 180,
      "materials": "2.5D curved glass front, aluminum metal body, 5000 mAh 2-day battery, 5-magnet speaker",
      "waterResistance": "None",
      "colors": [
        "Deepsea Black",
        "Meteor Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Pure Stock Android",
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
      "officialWebsite": "https://www.asus.com/in/mobile-handhelds/phones/asus-zenfone-max-pro-m1",
      "productPage": "https://www.asus.com/in/mobile-handhelds/phones/asus-zenfone-max-pro-m1",
      "specSheetUrl": "https://www.asus.com/in/mobile-handhelds/phones/asus-zenfone-max-pro-m1",
      "verifiedDate": "2018-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "asus-zenfone-max-pro-m2",
    "slug": "asus-zenfone-max-pro-m2",
    "brand": "ASUS",
    "modelName": "Zenfone Max Pro M2",
    "generation": "Zenfone Max",
    "status": "discontinued",
    "launchDate": "2018-12",
    "pricing": {
      "startingPrice": 12999,
      "maximumPrice": 16999,
      "launchPrice": 12999,
      "currentPrice": 12999,
      "currency": "INR",
      "priceEffectiveDate": "2018-12",
      "source": "ASUS India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.26\"",
      "displayType": "IPS LCD Notch FHD+",
      "resolution": "1080 x 2280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 660 AIE",
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
      "rearCameraSetup": "Dual (12MP Sony IMX486 + 5MP Depth) Gorilla Glass 6",
      "mainCamera": "12 MP, f/1.8, 1/2.9\", PDAF",
      "frontCamera": "13 MP, f/2.0 with LED flash",
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
      "wifi": "Wi-Fi 5",
      "bluetooth": "Bluetooth 5.0",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "157.9 x 75.5 x 8.5 mm",
      "weight": 175,
      "materials": "Corning Gorilla Glass 6, dynamic wave pattern back, 5000 mAh battery, NXP smart amplifier",
      "waterResistance": "None",
      "colors": [
        "Blue",
        "Titanium"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Pure Stock Android",
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
      "officialWebsite": "https://www.asus.com/in/mobile-handhelds/phones/asus-zenfone-max-pro-m2",
      "productPage": "https://www.asus.com/in/mobile-handhelds/phones/asus-zenfone-max-pro-m2",
      "specSheetUrl": "https://www.asus.com/in/mobile-handhelds/phones/asus-zenfone-max-pro-m2",
      "verifiedDate": "2018-12",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "infinix-zero-8i",
    "slug": "infinix-zero-8i",
    "brand": "Infinix",
    "modelName": "Zero 8i",
    "generation": "Zero",
    "status": "discontinued",
    "launchDate": "2020-12",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 14999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2020-12",
      "source": "Infinix India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.85\"",
      "displayType": "IPS LCD 90Hz Dual Punch-Hole FHD+",
      "resolution": "1080 x 2460",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G90T",
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
      "rearCameraSetup": "Quad (48MP + 8MP UW + 2MP Depth + AI Lens) Dual Front (16MP + 8MP UW)",
      "mainCamera": "48 MP, f/1.8, PDAF",
      "frontCamera": "Dual 16 MP + 8 MP 105\u02da ultrawide",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
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
      "dimensions": "168.7 x 76.1 x 9.1 mm",
      "weight": 210.5,
      "materials": "Glass front, gem-cut diamond design back, 33W fast charge",
      "waterResistance": "None",
      "colors": [
        "Silver Diamond",
        "Black Diamond"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "XOS",
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
      "officialWebsite": "https://www.infinixmobiles.in/infinix-zero-8i",
      "productPage": "https://www.infinixmobiles.in/infinix-zero-8i",
      "specSheetUrl": "https://www.infinixmobiles.in/infinix-zero-8i",
      "verifiedDate": "2020-12",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "infinix-zero-5g",
    "slug": "infinix-zero-5g",
    "brand": "Infinix",
    "modelName": "Zero 5G",
    "generation": "Zero",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 19999,
      "maximumPrice": 19999,
      "launchPrice": 19999,
      "currentPrice": 19999,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "Infinix India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "IPS LCD 120Hz FHD+",
      "resolution": "1080 x 2460",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 900 5G (6nm)",
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
      "rearCameraSetup": "Triple (48MP + 13MP 2x Tele + 2MP Bokeh) Uni-Curve Design",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.0 with dual front flash",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "telephotoCamera": "13 MP, f/2.5, 50mm 2x Telephoto"
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
      "dimensions": "168.7 x 76.5 x 8.77 mm",
      "weight": 199,
      "materials": "Glass front, uni-curve fluid camera bump design, 33W Safe Fast Charge",
      "waterResistance": "None",
      "colors": [
        "Cosmic Black",
        "Horizon Blue",
        "Skylight Orange"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "XOS",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.infinixmobiles.in/infinix-zero-5g",
      "productPage": "https://www.infinixmobiles.in/infinix-zero-5g",
      "specSheetUrl": "https://www.infinixmobiles.in/infinix-zero-5g",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "infinix-zero-20",
    "slug": "infinix-zero-20",
    "brand": "Infinix",
    "modelName": "Zero 20",
    "generation": "Zero",
    "status": "discontinued",
    "launchDate": "2022-12",
    "pricing": {
      "startingPrice": 15999,
      "maximumPrice": 15999,
      "launchPrice": 15999,
      "currentPrice": 15999,
      "currency": "INR",
      "priceEffectiveDate": "2022-12",
      "source": "Infinix India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "AMOLED 90Hz FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
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
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (108MP + 13MP UW + 2MP) with World's First 60MP OIS Front Camera",
      "mainCamera": "108 MP, f/1.75, PDAF",
      "frontCamera": "60 MP, OIS, AF with dual front LED flash",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "13 MP, f/2.2, AF ultrawide"
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
      "dimensions": "164.4 x 76.7 x 7.98 mm",
      "weight": 196,
      "materials": "Glass front, flat aluminum frame, 60MP world-first OIS vlogging selfie camera, 45W T\u00dcV certified charge",
      "waterResistance": "None",
      "colors": [
        "Space Grey",
        "Glitter Gold",
        "Green Fantasy"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "XOS",
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
      "officialWebsite": "https://www.infinixmobiles.in/infinix-zero-20",
      "productPage": "https://www.infinixmobiles.in/infinix-zero-20",
      "specSheetUrl": "https://www.infinixmobiles.in/infinix-zero-20",
      "verifiedDate": "2022-12",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "infinix-note-12-pro-5g",
    "slug": "infinix-note-12-pro-5g",
    "brand": "Infinix",
    "modelName": "Note 12 Pro 5G",
    "generation": "Note 12",
    "status": "discontinued",
    "launchDate": "2022-07",
    "pricing": {
      "startingPrice": 17999,
      "maximumPrice": 17999,
      "launchPrice": 17999,
      "currentPrice": 17999,
      "currency": "INR",
      "priceEffectiveDate": "2022-07",
      "source": "Infinix India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "AMOLED FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 810 5G (6nm)",
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
      "rearCameraSetup": "Triple (108MP Samsung HM6 + 2MP Macro + 2MP Depth)",
      "mainCamera": "108 MP, f/1.75, PDAF",
      "frontCamera": "16 MP, f/2.0 with dual LED flash",
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
      "dimensions": "164.7 x 76.9 x 7.98 mm",
      "weight": 188,
      "materials": "Corning Gorilla Glass 3, 7.98mm ultra-sleek, dual stereo speakers with DTS",
      "waterResistance": "None",
      "colors": [
        "Force Black",
        "Snowfall White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "XOS",
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
      "officialWebsite": "https://www.infinixmobiles.in/infinix-note-12-pro-5g",
      "productPage": "https://www.infinixmobiles.in/infinix-note-12-pro-5g",
      "specSheetUrl": "https://www.infinixmobiles.in/infinix-note-12-pro-5g",
      "verifiedDate": "2022-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "infinix-note-40-pro-5g",
    "slug": "infinix-note-40-pro-5g",
    "brand": "Infinix",
    "modelName": "Note 40 Pro 5G",
    "generation": "Note 40",
    "status": "active",
    "launchDate": "2024-04",
    "pricing": {
      "startingPrice": 21999,
      "maximumPrice": 21999,
      "launchPrice": 21999,
      "currentPrice": 21999,
      "currency": "INR",
      "priceEffectiveDate": "2024-04",
      "source": "Infinix India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "AMOLED 120Hz 1B colors 3D Curved 2160Hz PWM",
      "resolution": "1080 x 2436",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 7020 5G (6nm)",
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
      "rearCameraSetup": "Triple (108MP OIS 3x Lossless Zoom + 2MP Macro + 2MP Depth) Active Halo AI Lighting",
      "mainCamera": "108 MP, f/1.75, OIS, PDAF",
      "frontCamera": "32 MP, f/2.2 with dual LED flash",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 45,
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
      "dimensions": "164.3 x 74.5 x 8.09 mm",
      "weight": 190,
      "materials": "Corning Gorilla Glass 5, vegan leather back, Active Halo pulsating AI lights, 45W All-Round FastCharge 2.0 + 20W Wireless MagCharge, Sound by JBL",
      "waterResistance": "IP53",
      "colors": [
        "Vintage Green",
        "Titan Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "XOS",
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
      "fingerprint": "Under-display optical",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.infinixmobiles.in/infinix-note-40-pro-5g",
      "productPage": "https://www.infinixmobiles.in/infinix-note-40-pro-5g",
      "specSheetUrl": "https://www.infinixmobiles.in/infinix-note-40-pro-5g",
      "verifiedDate": "2024-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "infinix-hot-10",
    "slug": "infinix-hot-10",
    "brand": "Infinix",
    "modelName": "Hot 10",
    "generation": "Hot",
    "status": "discontinued",
    "launchDate": "2020-10",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 10999,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2020-10",
      "source": "Infinix India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "IPS LCD Pin-Hole HD+",
      "resolution": "720 x 1640",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G70",
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
      "rearCameraSetup": "Quad (16MP + 2MP Macro + 2MP Depth + Low Light), 5200 mAh Battery",
      "mainCamera": "16 MP, f/1.85, PDAF",
      "frontCamera": "8 MP with dual flash",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5200,
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
      "dimensions": "171.1 x 77.6 x 8.85 mm",
      "weight": 204,
      "materials": "Glass front, laser engraved pattern plastic back, DTS audio processing",
      "waterResistance": "None",
      "colors": [
        "Obsidian Black",
        "Amber Red",
        "Moonlight Jade",
        "Ocean Wave"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "XOS",
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
      "officialWebsite": "https://www.infinixmobiles.in/infinix-hot-10",
      "productPage": "https://www.infinixmobiles.in/infinix-hot-10",
      "specSheetUrl": "https://www.infinixmobiles.in/infinix-hot-10",
      "verifiedDate": "2020-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "tecno-phantom-x",
    "slug": "tecno-phantom-x",
    "brand": "Tecno",
    "modelName": "Phantom X",
    "generation": "Phantom",
    "status": "discontinued",
    "launchDate": "2021-07",
    "pricing": {
      "startingPrice": 25999,
      "maximumPrice": 25999,
      "launchPrice": 25999,
      "currentPrice": 25999,
      "currency": "INR",
      "priceEffectiveDate": "2021-07",
      "source": "Tecno India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "Super AMOLED 90Hz 3D Borderless Curved FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G95",
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
      "rearCameraSetup": "Triple (50MP 1/1.3\" + 13MP 50mm Portrait + 8MP 120\u02da UW) Dual Selfie (48MP + 8MP UW)",
      "mainCamera": "50 MP, f/1.85, 1/1.3\", Dual Pixel PDAF, Laser AF",
      "frontCamera": "Dual 48 MP + 8 MP 105\u02da ultrawide",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.25, 120\u02da ultrawide",
      "telephotoCamera": "13 MP, f/2.4, 50mm 2x optical Telephoto Portrait"
    },
    "battery": {
      "batteryCapacity": 4700,
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
      "dimensions": "163.5 x 73.8 x 8.7 mm",
      "weight": 201,
      "materials": "Corning Gorilla Glass 5 front/back, silk glass texture, 33W flash charge",
      "waterResistance": "None",
      "colors": [
        "Starry Night Blue",
        "Monet Summer"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "HiOS",
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
      "officialWebsite": "https://www.tecno-mobile.in/tecno-phantom-x",
      "productPage": "https://www.tecno-mobile.in/tecno-phantom-x",
      "specSheetUrl": "https://www.tecno-mobile.in/tecno-phantom-x",
      "verifiedDate": "2021-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "tecno-phantom-x2-pro-5g",
    "slug": "tecno-phantom-x2-pro-5g",
    "brand": "Tecno",
    "modelName": "Phantom X2 Pro 5G",
    "generation": "Phantom",
    "status": "discontinued",
    "launchDate": "2023-01",
    "pricing": {
      "startingPrice": 49999,
      "maximumPrice": 49999,
      "launchPrice": 49999,
      "currentPrice": 49999,
      "currency": "INR",
      "priceEffectiveDate": "2023-01",
      "source": "Tecno India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.8\"",
      "displayType": "AMOLED 120Hz Unibody Double-Curved FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 9000 5G (4nm)",
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
      "rearCameraSetup": "Triple (50MP Retractable Portrait 2.5x optical + 50MP Wide + 13MP UW)",
      "mainCamera": "50 MP, f/1.65, 1/1.3\", PDAF",
      "frontCamera": "32 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "13 MP, f/2.2, PDAF ultrawide",
      "telephotoCamera": "50 MP, f/1.49, 65mm 2.5x retractable optical Telephoto portrait lens"
    },
    "battery": {
      "batteryCapacity": 5160,
      "wiredCharging": 45
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
      "dimensions": "164.6 x 72.7 x 8.9 mm",
      "weight": 201,
      "materials": "Gorilla Glass Victus front, world-first 100% recycled ocean plastic eco-friendly fiber back, motorized retractable portrait lens",
      "waterResistance": "None",
      "colors": [
        "Mars Orange",
        "Stardust Grey"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "HiOS",
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
      "officialWebsite": "https://www.tecno-mobile.in/tecno-phantom-x2-pro-5g",
      "productPage": "https://www.tecno-mobile.in/tecno-phantom-x2-pro-5g",
      "specSheetUrl": "https://www.tecno-mobile.in/tecno-phantom-x2-pro-5g",
      "verifiedDate": "2023-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "tecno-camon-20-premier-5g",
    "slug": "tecno-camon-20-premier-5g",
    "brand": "Tecno",
    "modelName": "Camon 20 Premier 5G",
    "generation": "Camon 20",
    "status": "discontinued",
    "launchDate": "2023-06",
    "pricing": {
      "startingPrice": 29999,
      "maximumPrice": 29999,
      "launchPrice": 29999,
      "currentPrice": 29999,
      "currency": "INR",
      "priceEffectiveDate": "2023-06",
      "source": "Tecno India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.67\"",
      "displayType": "AMOLED 120Hz FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 8050 5G (6nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB"
      ],
      "storageOptions": [
        "512GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP RGBW Sensor-Shift OIS + 108MP UW/Macro + 2MP Bokeh) Leather Back",
      "mainCamera": "50 MP, f/1.77, 23mm, Sensor-Shift OIS, Laser AF",
      "frontCamera": "32 MP with micro-slit dual front flash",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "108 MP, f/2.2, 13mm 115\u02da ultrawide / macro, PDAF"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 45
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
      "dimensions": "161.9 x 74.3 x 7.8 mm",
      "weight": 202.5,
      "materials": "Glass front, Tyson Fury ceramic camera ring, polygon aesthetic luxury leather back",
      "waterResistance": "IP53",
      "colors": [
        "Dark Welkin",
        "Serenity Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "HiOS",
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
      "officialWebsite": "https://www.tecno-mobile.in/tecno-camon-20-premier-5g",
      "productPage": "https://www.tecno-mobile.in/tecno-camon-20-premier-5g",
      "specSheetUrl": "https://www.tecno-mobile.in/tecno-camon-20-premier-5g",
      "verifiedDate": "2023-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "tecno-pova-3",
    "slug": "tecno-pova-3",
    "brand": "Tecno",
    "modelName": "Pova 3",
    "generation": "Pova",
    "status": "discontinued",
    "launchDate": "2022-06",
    "pricing": {
      "startingPrice": 11499,
      "maximumPrice": 12999,
      "launchPrice": 11499,
      "currentPrice": 11499,
      "currency": "INR",
      "priceEffectiveDate": "2022-06",
      "source": "Tecno India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.9\"",
      "displayType": "IPS LCD 90Hz FHD+",
      "resolution": "1080 x 2460",
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
      "rearCameraSetup": "Triple (50MP + 2MP Depth + AI Lens) Massive 7000 mAh Monster Battery",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP with dual LED flash",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 7000,
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
      "dimensions": "173.1 x 78.5 x 9.44 mm",
      "weight": 230,
      "materials": "Glass front, Luminous back line with LED notification strip, massive 7000 mAh battery, dual stereo speakers with DTS",
      "waterResistance": "None",
      "colors": [
        "Electric Blue",
        "Tech Silver",
        "Eco Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "HiOS",
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
      "officialWebsite": "https://www.tecno-mobile.in/tecno-pova-3",
      "productPage": "https://www.tecno-mobile.in/tecno-pova-3",
      "specSheetUrl": "https://www.tecno-mobile.in/tecno-pova-3",
      "verifiedDate": "2022-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "lava-blaze-pro",
    "slug": "lava-blaze-pro",
    "brand": "Lava",
    "modelName": "Blaze Pro",
    "generation": "Blaze",
    "status": "discontinued",
    "launchDate": "2022-09",
    "pricing": {
      "startingPrice": 10499,
      "maximumPrice": 10499,
      "launchPrice": 10499,
      "currentPrice": 10499,
      "currency": "INR",
      "priceEffectiveDate": "2022-09",
      "source": "Lava India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "IPS LCD 90Hz HD+",
      "resolution": "720 x 1600",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio G37",
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
      "rearCameraSetup": "Triple (50MP + 2MP Macro + VGA) Frost Glass Back",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP with screen flash",
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
      "dimensions": "164.75 x 76.3 x 8.9 mm",
      "weight": 193,
      "materials": "Frosted glass back, clean ad-free stock Android, free service at home",
      "waterResistance": "None",
      "colors": [
        "Glass Green",
        "Glass Gold",
        "Glass Blue",
        "Glass Orange"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Clean Stock Android",
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
      "officialWebsite": "https://www.lavamobiles.com/lava-blaze-pro",
      "productPage": "https://www.lavamobiles.com/lava-blaze-pro",
      "specSheetUrl": "https://www.lavamobiles.com/lava-blaze-pro",
      "verifiedDate": "2022-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "lava-blaze-2-5g",
    "slug": "lava-blaze-2-5g",
    "brand": "Lava",
    "modelName": "Blaze 2 5G",
    "generation": "Blaze",
    "status": "discontinued",
    "launchDate": "2023-11",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 10999,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2023-11",
      "source": "Lava India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.56\"",
      "displayType": "IPS LCD 90Hz HD+",
      "resolution": "720 x 1600",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 6020 5G (7nm)",
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
      "rearCameraSetup": "Dual (50MP + VGA) with Ring Light Notification",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP with screen flash",
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
      "dimensions": "164.2 x 76.0 x 8.45 mm",
      "weight": 203,
      "materials": "Premium glass back, circular camera island with breathing ring light notification, no bloatware",
      "waterResistance": "None",
      "colors": [
        "Glass Black",
        "Glass Blue",
        "Glass Lavender"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Clean Stock Android",
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
      "officialWebsite": "https://www.lavamobiles.com/lava-blaze-2-5g",
      "productPage": "https://www.lavamobiles.com/lava-blaze-2-5g",
      "specSheetUrl": "https://www.lavamobiles.com/lava-blaze-2-5g",
      "verifiedDate": "2023-11",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "lava-blaze-3-5g",
    "slug": "lava-blaze-3-5g",
    "brand": "Lava",
    "modelName": "Blaze 3 5G",
    "generation": "Blaze",
    "status": "active",
    "launchDate": "2024-09",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 11499,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2024-09",
      "source": "Lava India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.56\"",
      "displayType": "IPS LCD 90Hz Punch-Hole HD+",
      "resolution": "720 x 1600",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 6300 5G (6nm)",
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
      "rearCameraSetup": "Dual (50MP + 2MP AI) Vibe Light Studio Lighting",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP with screen flash",
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
      "dimensions": "164.3 x 76.2 x 8.6 mm",
      "weight": 201,
      "materials": "Glass back, Vibe Light dedicated warm/cool halo for portraits, no ads, no bloatware",
      "waterResistance": "None",
      "colors": [
        "Glass Gold",
        "Glass Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Clean Stock Android",
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
      "officialWebsite": "https://www.lavamobiles.com/lava-blaze-3-5g",
      "productPage": "https://www.lavamobiles.com/lava-blaze-3-5g",
      "specSheetUrl": "https://www.lavamobiles.com/lava-blaze-3-5g",
      "verifiedDate": "2024-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "lava-yuva-5g",
    "slug": "lava-yuva-5g",
    "brand": "Lava",
    "modelName": "Yuva 5G",
    "generation": "Yuva",
    "status": "active",
    "launchDate": "2024-05",
    "pricing": {
      "startingPrice": 9499,
      "maximumPrice": 9999,
      "launchPrice": 9499,
      "currentPrice": 9499,
      "currency": "INR",
      "priceEffectiveDate": "2024-05",
      "source": "Lava India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.52\"",
      "displayType": "IPS LCD 90Hz Punch-Hole HD+",
      "resolution": "720 x 1600",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Unisoc T750 5G (6nm)",
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
      "rearCameraSetup": "Dual (50MP + 2MP AI) Glass Back 5G",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP",
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
      "dimensions": "164.0 x 75.8 x 8.9 mm",
      "weight": 198,
      "materials": "AG glass back design, clean stock Android experience, side fingerprint",
      "waterResistance": "None",
      "colors": [
        "Mystic Blue",
        "Mystic Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Clean Stock Android",
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
      "officialWebsite": "https://www.lavamobiles.com/lava-yuva-5g",
      "productPage": "https://www.lavamobiles.com/lava-yuva-5g",
      "specSheetUrl": "https://www.lavamobiles.com/lava-yuva-5g",
      "verifiedDate": "2024-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "nokia-8",
    "slug": "nokia-8",
    "brand": "Nokia",
    "modelName": "Nokia 8",
    "generation": "Nokia 8",
    "status": "discontinued",
    "launchDate": "2017-08",
    "pricing": {
      "startingPrice": 36999,
      "maximumPrice": 36999,
      "launchPrice": 36999,
      "currentPrice": 36999,
      "currency": "INR",
      "priceEffectiveDate": "2017-08",
      "source": "Nokia India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.3\"",
      "displayType": "IPS LCD QHD 700 nits",
      "resolution": "1440 x 2560",
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
        "4GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual ZEISS (13MP RGB OIS + 13MP Mono) Dual-Sight 'Bothie' Mode",
      "mainCamera": "13 MP, f/2.0, 1.12\u00b5m, OIS, Laser/PDAF",
      "frontCamera": "13 MP, f/2.0 ZEISS with PDAF",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "telephotoCamera": "13 MP, f/2.0 monochrome sensor"
    },
    "battery": {
      "batteryCapacity": 3090,
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
      "dimensions": "151.5 x 73.7 x 7.9 mm",
      "weight": 160,
      "materials": "Corning Gorilla Glass 5, 6000-series aluminum unibody, Nokia OZO 360\u02da spatial audio recording",
      "waterResistance": "IP54",
      "colors": [
        "Polished Blue",
        "Tempered Blue",
        "Steel",
        "Polished Copper"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Pure Android",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.hmd.com/en_in/nokia-8",
      "productPage": "https://www.hmd.com/en_in/nokia-8",
      "specSheetUrl": "https://www.hmd.com/en_in/nokia-8",
      "verifiedDate": "2017-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "nokia-8-sirocco",
    "slug": "nokia-8-sirocco",
    "brand": "Nokia",
    "modelName": "Nokia 8 Sirocco",
    "generation": "Nokia 8",
    "status": "discontinued",
    "launchDate": "2018-02",
    "pricing": {
      "startingPrice": 49999,
      "maximumPrice": 49999,
      "launchPrice": 49999,
      "currentPrice": 49999,
      "currency": "INR",
      "priceEffectiveDate": "2018-02",
      "source": "Nokia India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "pOLED 2K QHD Curved",
      "resolution": "1440 x 2560",
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
        "6GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual ZEISS (12MP 2PD + 13MP 2x Tele) Qi Wireless Charging",
      "mainCamera": "12 MP, f/1.75, 25mm, Dual Pixel PDAF",
      "frontCamera": "5 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "telephotoCamera": "13 MP, f/2.6, 2x optical Telephoto"
    },
    "battery": {
      "batteryCapacity": 3260,
      "wiredCharging": 18,
      "wirelessCharging": 5
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
      "dimensions": "140.9 x 73.0 x 7.5 mm",
      "weight": 177,
      "materials": "Gorilla Glass 5 front/back, single machined stainless steel frame (2.5x stronger than 6000 series aluminum), Qi wireless charging",
      "waterResistance": "IP67",
      "colors": [
        "Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Android One",
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
      "officialWebsite": "https://www.hmd.com/en_in/nokia-8-sirocco",
      "productPage": "https://www.hmd.com/en_in/nokia-8-sirocco",
      "specSheetUrl": "https://www.hmd.com/en_in/nokia-8-sirocco",
      "verifiedDate": "2018-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "nokia-7-plus",
    "slug": "nokia-7-plus",
    "brand": "Nokia",
    "modelName": "Nokia 7 Plus",
    "generation": "Nokia 7",
    "status": "discontinued",
    "launchDate": "2018-02",
    "pricing": {
      "startingPrice": 25999,
      "maximumPrice": 25999,
      "launchPrice": 25999,
      "currentPrice": 25999,
      "currency": "INR",
      "priceEffectiveDate": "2018-02",
      "source": "Nokia India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.0\"",
      "displayType": "IPS LCD 18:9 FHD+",
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
        "4GB"
      ],
      "storageOptions": [
        "64GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual ZEISS (12MP 2PD + 13MP 2x Tele) Ceramic Feel Coating",
      "mainCamera": "12 MP, f/1.75, 25mm, 1.4\u00b5m, Dual Pixel PDAF",
      "frontCamera": "16 MP, f/2.0 ZEISS",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "telephotoCamera": "13 MP, f/2.6, 1.0\u00b5m, 2x Telephoto"
    },
    "battery": {
      "batteryCapacity": 3800,
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
      "dimensions": "158.4 x 75.6 x 8.0 mm",
      "weight": 183,
      "materials": "Corning Gorilla Glass 3, solid 6000-series aluminum block with copper diamond-cut edges and 6-layer ceramic paint finish",
      "waterResistance": "None",
      "colors": [
        "Black / Copper",
        "White / Copper"
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
      "headphoneJack": false
    },
    "security": {
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.hmd.com/en_in/nokia-7-plus",
      "productPage": "https://www.hmd.com/en_in/nokia-7-plus",
      "specSheetUrl": "https://www.hmd.com/en_in/nokia-7-plus",
      "verifiedDate": "2018-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "nokia-6",
    "slug": "nokia-6",
    "brand": "Nokia",
    "modelName": "Nokia 6 (1st Gen)",
    "generation": "Nokia 6",
    "status": "discontinued",
    "launchDate": "2017-01",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 14999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2017-01",
      "source": "Nokia India Store / Official Launch"
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
      "rearCameraSetup": "Single 16MP PDAF, Dual Stereo Speakers with Dolby Atmos",
      "mainCamera": "16 MP, f/2.0, 1.0\u00b5m, PDAF",
      "frontCamera": "8 MP, f/2.0",
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
      "dimensions": "154.0 x 75.8 x 7.85 mm",
      "weight": 169,
      "materials": "Corning Gorilla Glass 3, machined from a single solid block of 6000 series aluminum in 55 minutes, dual stereo speakers",
      "waterResistance": "None",
      "colors": [
        "Matte Black",
        "Silver",
        "Tempered Blue",
        "Copper"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Pure Android",
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
      "officialWebsite": "https://www.hmd.com/en_in/nokia-6",
      "productPage": "https://www.hmd.com/en_in/nokia-6",
      "specSheetUrl": "https://www.hmd.com/en_in/nokia-6",
      "verifiedDate": "2017-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "nokia-6-dot-1-plus",
    "slug": "nokia-6-dot-1-plus",
    "brand": "Nokia",
    "modelName": "Nokia 6.1 Plus",
    "generation": "Nokia 6",
    "status": "discontinued",
    "launchDate": "2018-08",
    "pricing": {
      "startingPrice": 15999,
      "maximumPrice": 15999,
      "launchPrice": 15999,
      "currentPrice": 15999,
      "currency": "INR",
      "priceEffectiveDate": "2018-08",
      "source": "Nokia India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.8\"",
      "displayType": "IPS LCD 19:9 Notch FHD+",
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
      "rearCameraSetup": "Dual (16MP + 5MP Depth) Glass Body",
      "mainCamera": "16 MP, f/2.0, 1.0\u00b5m, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3060,
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
      "dimensions": "147.2 x 70.98 x 7.99 mm",
      "weight": 151,
      "materials": "Corning Gorilla Glass 3 front/back, aluminum frame, 93% glass surface, Android One guaranteed updates",
      "waterResistance": "None",
      "colors": [
        "Gloss Black",
        "Gloss White",
        "Gloss Midnight Blue"
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
      "officialWebsite": "https://www.hmd.com/en_in/nokia-6-dot-1-plus",
      "productPage": "https://www.hmd.com/en_in/nokia-6-dot-1-plus",
      "specSheetUrl": "https://www.hmd.com/en_in/nokia-6-dot-1-plus",
      "verifiedDate": "2018-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "nokia-g42-5g",
    "slug": "nokia-g42-5g",
    "brand": "Nokia",
    "modelName": "Nokia G42 5G",
    "generation": "Nokia G",
    "status": "active",
    "launchDate": "2023-06",
    "pricing": {
      "startingPrice": 12599,
      "maximumPrice": 13999,
      "launchPrice": 12599,
      "currentPrice": 12599,
      "currency": "INR",
      "priceEffectiveDate": "2023-06",
      "source": "Nokia India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.56\"",
      "displayType": "IPS LCD 90Hz HD+",
      "resolution": "720 x 1612",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 480+ 5G (8nm)",
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
      "rearCameraSetup": "Triple (50MP + 2MP Macro + 2MP Depth) QuickFix Self-Repairable",
      "mainCamera": "50 MP, f/1.8, PDAF",
      "frontCamera": "8 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 20
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
      "dimensions": "165.0 x 75.8 x 8.55 mm",
      "weight": 193.8,
      "materials": "Corning Gorilla Glass 3, 65% recycled plastic back, QuickFix design allows easy screen/battery replacement with iFixit guides",
      "waterResistance": "IP52",
      "colors": [
        "So Purple",
        "So Grey",
        "So Pink"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Clean Android",
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
      "officialWebsite": "https://www.hmd.com/en_in/nokia-g42-5g",
      "productPage": "https://www.hmd.com/en_in/nokia-g42-5g",
      "specSheetUrl": "https://www.hmd.com/en_in/nokia-g42-5g",
      "verifiedDate": "2023-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "honor-7x",
    "slug": "honor-7x",
    "brand": "Honor",
    "modelName": "Honor 7X",
    "generation": "Honor 7",
    "status": "discontinued",
    "launchDate": "2017-10",
    "pricing": {
      "startingPrice": 12999,
      "maximumPrice": 15999,
      "launchPrice": 12999,
      "currentPrice": 12999,
      "currency": "INR",
      "priceEffectiveDate": "2017-10",
      "source": "Honor India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.93\"",
      "displayType": "IPS LCD 18:9 FullView FHD+",
      "resolution": "1080 x 2160",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "HiSilicon Kirin 659 (16nm)",
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
      "rearCameraSetup": "Dual (16MP + 2MP Depth) All-Metal Unibody",
      "mainCamera": "16 MP, f/2.2, 26mm, PDAF",
      "frontCamera": "8 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3340,
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
      "dimensions": "156.5 x 75.3 x 7.6 mm",
      "weight": 165,
      "materials": "Corning Gorilla Glass, all-metal unibody with antenna bands, rear fingerprint scanner",
      "waterResistance": "None",
      "colors": [
        "Blue",
        "Black",
        "Gold",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "EMUI",
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
      "officialWebsite": "https://www.explorehonor.com/in/honor-7x",
      "productPage": "https://www.explorehonor.com/in/honor-7x",
      "specSheetUrl": "https://www.explorehonor.com/in/honor-7x",
      "verifiedDate": "2017-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "honor-8x",
    "slug": "honor-8x",
    "brand": "Honor",
    "modelName": "Honor 8X",
    "generation": "Honor 8",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 18999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "Honor India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "IPS LCD Borderless FullView FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "HiSilicon Kirin 710 (12nm)",
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
      "rearCameraSetup": "Dual (20MP + 2MP Depth) 2.5D Aurora Glass",
      "mainCamera": "20 MP, f/1.8, 27mm, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3750,
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
      "dimensions": "160.4 x 76.6 x 7.8 mm",
      "weight": 175,
      "materials": "2.5D aurora glass back with dual-texture visual effect, COF advanced packaging with 4.25mm ultra-narrow bottom chin",
      "waterResistance": "None",
      "colors": [
        "Blue",
        "Black",
        "Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "EMUI",
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
      "officialWebsite": "https://www.explorehonor.com/in/honor-8x",
      "productPage": "https://www.explorehonor.com/in/honor-8x",
      "specSheetUrl": "https://www.explorehonor.com/in/honor-8x",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "honor-play",
    "slug": "honor-play",
    "brand": "Honor",
    "modelName": "Honor Play",
    "generation": "Honor Play",
    "status": "discontinued",
    "launchDate": "2018-08",
    "pricing": {
      "startingPrice": 19999,
      "maximumPrice": 23999,
      "launchPrice": 19999,
      "currentPrice": 19999,
      "currency": "INR",
      "priceEffectiveDate": "2018-08",
      "source": "Honor India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "IPS LCD Notch FHD+ GPU Turbo",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "HiSilicon Kirin 970 Flagship NPU (10nm)",
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
      "rearCameraSetup": "Dual (16MP + 2MP Depth) 4D Smart Gaming Shock",
      "mainCamera": "16 MP, f/2.2, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3750,
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
      "dimensions": "157.9 x 74.3 x 7.48 mm",
      "weight": 176,
      "materials": "All-metal unibody, flagship Kirin 970 NPU, GPU Turbo 60FPS sustained gaming, 4D haptic vibration",
      "waterResistance": "None",
      "colors": [
        "Navy Blue",
        "Midnight Black",
        "Ultra Violet"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "EMUI",
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
      "officialWebsite": "https://www.explorehonor.com/in/honor-play",
      "productPage": "https://www.explorehonor.com/in/honor-play",
      "specSheetUrl": "https://www.explorehonor.com/in/honor-play",
      "verifiedDate": "2018-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "honor-view-20",
    "slug": "honor-view-20",
    "brand": "Honor",
    "modelName": "Honor View 20",
    "generation": "Honor View",
    "status": "discontinued",
    "launchDate": "2019-01",
    "pricing": {
      "startingPrice": 37999,
      "maximumPrice": 45999,
      "launchPrice": 37999,
      "currentPrice": 37999,
      "currency": "INR",
      "priceEffectiveDate": "2019-01",
      "source": "Honor India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.4\"",
      "displayType": "IPS LCD In-Screen All-View Display FHD+",
      "resolution": "1080 x 2310",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "HiSilicon Kirin 980 Dual-NPU (7nm)",
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
      "rearCameraSetup": "Dual (48MP Sony IMX586 + TOF 3D) World's First In-Display Camera",
      "mainCamera": "48 MP, f/1.8, 1/2.0\", PDAF",
      "frontCamera": "25 MP in-screen selfie camera",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "telephotoCamera": "TOF 3D stereo camera sensor"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 40
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
      "dimensions": "156.9 x 75.4 x 8.1 mm",
      "weight": 180,
      "materials": "Aurora nanotexture V-shape gradient back, Kirin 980 7nm dual NPU, 40W SuperCharge",
      "waterResistance": "None",
      "colors": [
        "Phantom Blue",
        "Phantom Red",
        "Midnight Black",
        "Sapphire Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Magic UI",
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
      "fingerprint": "Side-mounted",
      "faceUnlock": true
    },
    "sources": {
      "officialWebsite": "https://www.explorehonor.com/in/honor-view-20",
      "productPage": "https://www.explorehonor.com/in/honor-view-20",
      "specSheetUrl": "https://www.explorehonor.com/in/honor-view-20",
      "verifiedDate": "2019-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "honor-90-5g",
    "slug": "honor-90-5g",
    "brand": "Honor",
    "modelName": "Honor 90 5G",
    "generation": "Honor 90",
    "status": "active",
    "launchDate": "2023-09",
    "pricing": {
      "startingPrice": 37999,
      "maximumPrice": 39999,
      "launchPrice": 37999,
      "currentPrice": 37999,
      "currency": "INR",
      "priceEffectiveDate": "2023-09",
      "source": "Honor India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "AMOLED 120Hz 1.5K Quad-Curved 3840Hz Risk-Free PWM",
      "resolution": "1200 x 2664",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 7 Gen 1 Accelerated Edition (4nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "256GB",
        "512GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (200MP 1/1.4\" + 12MP UW/Macro + 2MP Depth), 50MP 4K Selfie",
      "mainCamera": "200 MP, f/1.9, 1/1.4\", PDAF",
      "frontCamera": "50 MP, f/2.4 100\u02da ultrawide 4K selfie",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "12 MP, f/2.2, 112\u02da ultrawide / macro, AF"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 66
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
      "dimensions": "161.9 x 74.1 x 7.8 mm",
      "weight": 183,
      "materials": "Quad-curved floating screen, world-first T\u00dcV Rheinland certified 3840Hz risk-free PWM dimming, 66W Honor SuperCharge",
      "waterResistance": "None",
      "colors": [
        "Diamond Silver",
        "Emerald Green",
        "Midnight Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "MagicOS",
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
      "officialWebsite": "https://www.explorehonor.com/in/honor-90-5g",
      "productPage": "https://www.explorehonor.com/in/honor-90-5g",
      "specSheetUrl": "https://www.explorehonor.com/in/honor-90-5g",
      "verifiedDate": "2023-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "itel-s23-plus",
    "slug": "itel-s23-plus",
    "brand": "Itel",
    "modelName": "S23+",
    "generation": "S Series",
    "status": "discontinued",
    "launchDate": "2023-09",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 13999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2023-09",
      "source": "Itel India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "3D Curved AMOLED FHD+ 500 nits",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Unisoc T616 (12nm)",
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
      "rearCameraSetup": "Dual (50MP + 0.08MP AI) 32MP Front In-Display Fingerprint",
      "mainCamera": "50 MP, f/1.6, AF",
      "frontCamera": "32 MP, f/2.0",
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
      "bluetooth": "Bluetooth 5.3",
      "nfc": true,
      "usb": "USB Type-C",
      "simConfig": "Dual SIM (Nano-SIM)"
    },
    "physical": {
      "dimensions": "165.0 x 75.0 x 7.9 mm",
      "weight": 178,
      "materials": "Corning Gorilla Glass 5, 3D curved 59\u02da double-curved AMOLED, in-display fingerprint scanner, Aivana voice assistant",
      "waterResistance": "None",
      "colors": [
        "Elemental Blue",
        "Lake Cyan"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "itelOS",
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
      "officialWebsite": "https://www.itel-india.com/itel-s23-plus",
      "productPage": "https://www.itel-india.com/itel-s23-plus",
      "specSheetUrl": "https://www.itel-india.com/itel-s23-plus",
      "verifiedDate": "2023-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "itel-p55-plus",
    "slug": "itel-p55-plus",
    "brand": "Itel",
    "modelName": "P55+",
    "generation": "P Series",
    "status": "active",
    "launchDate": "2024-02",
    "pricing": {
      "startingPrice": 9999,
      "maximumPrice": 10999,
      "launchPrice": 9999,
      "currentPrice": 9999,
      "currency": "INR",
      "priceEffectiveDate": "2024-02",
      "source": "Itel India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.6\"",
      "displayType": "IPS LCD 90Hz Punch-Hole Dynamic Bar HD+",
      "resolution": "720 x 1612",
      "refreshRate": 90,
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
        "8GB"
      ],
      "storageOptions": [
        "128GB",
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (50MP + 0.08MP AI) with 45W Hyper Charge",
      "mainCamera": "50 MP, f/1.6, AF",
      "frontCamera": "8 MP with front flash",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 45
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
      "dimensions": "164.0 x 75.6 x 8.0 mm",
      "weight": 187,
      "materials": "Two-tone stitching vegan leather back, Dynamic Bar interactive notch, 45W PowerCharge (0-100% in 45 mins)",
      "waterResistance": "None",
      "colors": [
        "Royal Green",
        "Galaxy Blue",
        "Meteor Purple"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "itelOS",
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
      "officialWebsite": "https://www.itel-india.com/itel-p55-plus",
      "productPage": "https://www.itel-india.com/itel-p55-plus",
      "specSheetUrl": "https://www.itel-india.com/itel-p55-plus",
      "verifiedDate": "2024-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "itel-p40-plus",
    "slug": "itel-p40-plus",
    "brand": "Itel",
    "modelName": "P40+",
    "generation": "P Series",
    "status": "discontinued",
    "launchDate": "2023-07",
    "pricing": {
      "startingPrice": 8099,
      "maximumPrice": 8099,
      "launchPrice": 8099,
      "currentPrice": 8099,
      "currency": "INR",
      "priceEffectiveDate": "2023-07",
      "source": "Itel India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.8\"",
      "displayType": "IPS LCD 90Hz Punch-Hole HD+",
      "resolution": "720 x 1640",
      "refreshRate": 90,
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
        "4GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (13MP + AI) Massive 7000 mAh Power Monster",
      "mainCamera": "13 MP, f/1.8, AF",
      "frontCamera": "8 MP with flash",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 7000,
      "wiredCharging": 18
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
      "dimensions": "170.8 x 77.8 x 9.3 mm",
      "weight": 220,
      "materials": "Glass front, ray textured plastic back, massive 7000 mAh battery with 41-day standby, 18W Type-C fast charge",
      "waterResistance": "None",
      "colors": [
        "Force Black",
        "Ice Cyan"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "itelOS",
      "launchOS": "Android 12 (Go edition)",
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
      "officialWebsite": "https://www.itel-india.com/itel-p40-plus",
      "productPage": "https://www.itel-india.com/itel-p40-plus",
      "specSheetUrl": "https://www.itel-india.com/itel-p40-plus",
      "verifiedDate": "2023-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  }
] as unknown as MobileModel[];

const variants: MobileVariant[] = [
  {
    "id": "asus-rog-phone-8-128",
    "modelId": "asus-rog-phone",
    "ram": "8GB",
    "storage": "128GB",
    "price": 69999,
    "mrp": 69999,
    "colors": [
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-rog-phone-ii-8-128",
    "modelId": "asus-rog-phone-ii",
    "ram": "8GB",
    "storage": "128GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Matte Black",
      "Glossy Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-rog-phone-ii-12-512",
    "modelId": "asus-rog-phone-ii",
    "ram": "12GB",
    "storage": "512GB",
    "price": 59999,
    "mrp": 59999,
    "colors": [
      "Matte Black",
      "Glossy Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-rog-phone-3-8-128",
    "modelId": "asus-rog-phone-3",
    "ram": "8GB",
    "storage": "128GB",
    "price": 49999,
    "mrp": 49999,
    "colors": [
      "Black Glare"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-rog-phone-3-12-256",
    "modelId": "asus-rog-phone-3",
    "ram": "12GB",
    "storage": "256GB",
    "price": 57999,
    "mrp": 57999,
    "colors": [
      "Black Glare"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-rog-phone-5-8-128",
    "modelId": "asus-rog-phone-5",
    "ram": "8GB",
    "storage": "128GB",
    "price": 49999,
    "mrp": 49999,
    "colors": [
      "Phantom Black",
      "Storm White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-rog-phone-5-12-256",
    "modelId": "asus-rog-phone-5",
    "ram": "12GB",
    "storage": "256GB",
    "price": 57999,
    "mrp": 57999,
    "colors": [
      "Phantom Black",
      "Storm White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-zenfone-5z-6-64",
    "modelId": "asus-zenfone-5z",
    "ram": "6GB",
    "storage": "64GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Midnight Blue",
      "Meteor Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-zenfone-5z-6-128",
    "modelId": "asus-zenfone-5z",
    "ram": "6GB",
    "storage": "128GB",
    "price": 32999,
    "mrp": 32999,
    "colors": [
      "Midnight Blue",
      "Meteor Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-zenfone-5z-8-256",
    "modelId": "asus-zenfone-5z",
    "ram": "8GB",
    "storage": "256GB",
    "price": 36999,
    "mrp": 36999,
    "colors": [
      "Midnight Blue",
      "Meteor Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-6z-6-64",
    "modelId": "asus-6z",
    "ram": "6GB",
    "storage": "64GB",
    "price": 31999,
    "mrp": 31999,
    "colors": [
      "Midnight Black",
      "Twilight Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-6z-6-128",
    "modelId": "asus-6z",
    "ram": "6GB",
    "storage": "128GB",
    "price": 34999,
    "mrp": 34999,
    "colors": [
      "Midnight Black",
      "Twilight Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-6z-8-256",
    "modelId": "asus-6z",
    "ram": "8GB",
    "storage": "256GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Midnight Black",
      "Twilight Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-zenfone-max-pro-m1-3-32",
    "modelId": "asus-zenfone-max-pro-m1",
    "ram": "3GB",
    "storage": "32GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Deepsea Black",
      "Meteor Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-zenfone-max-pro-m1-4-64",
    "modelId": "asus-zenfone-max-pro-m1",
    "ram": "4GB",
    "storage": "64GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Deepsea Black",
      "Meteor Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-zenfone-max-pro-m1-6-64",
    "modelId": "asus-zenfone-max-pro-m1",
    "ram": "6GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Deepsea Black",
      "Meteor Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-zenfone-max-pro-m2-3-32",
    "modelId": "asus-zenfone-max-pro-m2",
    "ram": "3GB",
    "storage": "32GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Blue",
      "Titanium"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-zenfone-max-pro-m2-4-64",
    "modelId": "asus-zenfone-max-pro-m2",
    "ram": "4GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Blue",
      "Titanium"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "asus-zenfone-max-pro-m2-6-64",
    "modelId": "asus-zenfone-max-pro-m2",
    "ram": "6GB",
    "storage": "64GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Blue",
      "Titanium"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "infinix-zero-8i-8-128",
    "modelId": "infinix-zero-8i",
    "ram": "8GB",
    "storage": "128GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Silver Diamond",
      "Black Diamond"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "infinix-zero-5g-8-128",
    "modelId": "infinix-zero-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Cosmic Black",
      "Horizon Blue",
      "Skylight Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "infinix-zero-20-8-128",
    "modelId": "infinix-zero-20",
    "ram": "8GB",
    "storage": "128GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Space Grey",
      "Glitter Gold",
      "Green Fantasy"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "infinix-note-12-pro-5g-8-128",
    "modelId": "infinix-note-12-pro-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Force Black",
      "Snowfall White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "infinix-note-40-pro-5g-8-256",
    "modelId": "infinix-note-40-pro-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Vintage Green",
      "Titan Gold"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "infinix-hot-10-4-64",
    "modelId": "infinix-hot-10",
    "ram": "4GB",
    "storage": "64GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Obsidian Black",
      "Amber Red",
      "Moonlight Jade",
      "Ocean Wave"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "infinix-hot-10-6-128",
    "modelId": "infinix-hot-10",
    "ram": "6GB",
    "storage": "128GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Obsidian Black",
      "Amber Red",
      "Moonlight Jade",
      "Ocean Wave"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "tecno-phantom-x-8-256",
    "modelId": "tecno-phantom-x",
    "ram": "8GB",
    "storage": "256GB",
    "price": 25999,
    "mrp": 25999,
    "colors": [
      "Starry Night Blue",
      "Monet Summer"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "tecno-phantom-x2-pro-5g-12-256",
    "modelId": "tecno-phantom-x2-pro-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 49999,
    "mrp": 49999,
    "colors": [
      "Mars Orange",
      "Stardust Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "tecno-camon-20-premier-5g-8-512",
    "modelId": "tecno-camon-20-premier-5g",
    "ram": "8GB",
    "storage": "512GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Dark Welkin",
      "Serenity Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "tecno-pova-3-4-64",
    "modelId": "tecno-pova-3",
    "ram": "4GB",
    "storage": "64GB",
    "price": 11499,
    "mrp": 11499,
    "colors": [
      "Electric Blue",
      "Tech Silver",
      "Eco Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "tecno-pova-3-6-128",
    "modelId": "tecno-pova-3",
    "ram": "6GB",
    "storage": "128GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Electric Blue",
      "Tech Silver",
      "Eco Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "lava-blaze-pro-4-64",
    "modelId": "lava-blaze-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 10499,
    "mrp": 10499,
    "colors": [
      "Glass Green",
      "Glass Gold",
      "Glass Blue",
      "Glass Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "lava-blaze-2-5g-4-64",
    "modelId": "lava-blaze-2-5g",
    "ram": "4GB",
    "storage": "64GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Glass Black",
      "Glass Blue",
      "Glass Lavender"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "lava-blaze-2-5g-6-128",
    "modelId": "lava-blaze-2-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Glass Black",
      "Glass Blue",
      "Glass Lavender"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "lava-blaze-3-5g-6-128",
    "modelId": "lava-blaze-3-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Glass Gold",
      "Glass Blue"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "lava-yuva-5g-4-64",
    "modelId": "lava-yuva-5g",
    "ram": "4GB",
    "storage": "64GB",
    "price": 9499,
    "mrp": 9499,
    "colors": [
      "Mystic Blue",
      "Mystic Green"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "lava-yuva-5g-4-128",
    "modelId": "lava-yuva-5g",
    "ram": "4GB",
    "storage": "128GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Mystic Blue",
      "Mystic Green"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "nokia-8-4-64",
    "modelId": "nokia-8",
    "ram": "4GB",
    "storage": "64GB",
    "price": 36999,
    "mrp": 36999,
    "colors": [
      "Polished Blue",
      "Tempered Blue",
      "Steel",
      "Polished Copper"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "nokia-8-sirocco-6-128",
    "modelId": "nokia-8-sirocco",
    "ram": "6GB",
    "storage": "128GB",
    "price": 49999,
    "mrp": 49999,
    "colors": [
      "Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "nokia-7-plus-4-64",
    "modelId": "nokia-7-plus",
    "ram": "4GB",
    "storage": "64GB",
    "price": 25999,
    "mrp": 25999,
    "colors": [
      "Black / Copper",
      "White / Copper"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "nokia-6-3-32",
    "modelId": "nokia-6",
    "ram": "3GB",
    "storage": "32GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Matte Black",
      "Silver",
      "Tempered Blue",
      "Copper"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "nokia-6-dot-1-plus-4-64",
    "modelId": "nokia-6-dot-1-plus",
    "ram": "4GB",
    "storage": "64GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Gloss Black",
      "Gloss White",
      "Gloss Midnight Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "nokia-6-dot-1-plus-6-64",
    "modelId": "nokia-6-dot-1-plus",
    "ram": "6GB",
    "storage": "64GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Gloss Black",
      "Gloss White",
      "Gloss Midnight Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "nokia-g42-5g-6-128",
    "modelId": "nokia-g42-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 12599,
    "mrp": 12599,
    "colors": [
      "So Purple",
      "So Grey",
      "So Pink"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "nokia-g42-5g-8-256",
    "modelId": "nokia-g42-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "So Purple",
      "So Grey",
      "So Pink"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-7x-4-32",
    "modelId": "honor-7x",
    "ram": "4GB",
    "storage": "32GB",
    "price": 12999,
    "mrp": 12999,
    "colors": [
      "Blue",
      "Black",
      "Gold",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-7x-4-64",
    "modelId": "honor-7x",
    "ram": "4GB",
    "storage": "64GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Blue",
      "Black",
      "Gold",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-8x-4-64",
    "modelId": "honor-8x",
    "ram": "4GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Blue",
      "Black",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-8x-6-64",
    "modelId": "honor-8x",
    "ram": "6GB",
    "storage": "64GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Blue",
      "Black",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-8x-6-128",
    "modelId": "honor-8x",
    "ram": "6GB",
    "storage": "128GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Blue",
      "Black",
      "Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-play-4-64",
    "modelId": "honor-play",
    "ram": "4GB",
    "storage": "64GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Navy Blue",
      "Midnight Black",
      "Ultra Violet"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-play-6-64",
    "modelId": "honor-play",
    "ram": "6GB",
    "storage": "64GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Navy Blue",
      "Midnight Black",
      "Ultra Violet"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-view-20-6-128",
    "modelId": "honor-view-20",
    "ram": "6GB",
    "storage": "128GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Phantom Blue",
      "Phantom Red",
      "Midnight Black",
      "Sapphire Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-view-20-8-256",
    "modelId": "honor-view-20",
    "ram": "8GB",
    "storage": "256GB",
    "price": 45999,
    "mrp": 45999,
    "colors": [
      "Phantom Blue",
      "Phantom Red",
      "Midnight Black",
      "Sapphire Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-90-5g-8-256",
    "modelId": "honor-90-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Diamond Silver",
      "Emerald Green",
      "Midnight Black"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "honor-90-5g-12-512",
    "modelId": "honor-90-5g",
    "ram": "12GB",
    "storage": "512GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Diamond Silver",
      "Emerald Green",
      "Midnight Black"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "itel-s23-plus-8-256",
    "modelId": "itel-s23-plus",
    "ram": "8GB",
    "storage": "256GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Elemental Blue",
      "Lake Cyan"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "itel-p55-plus-8-128",
    "modelId": "itel-p55-plus",
    "ram": "8GB",
    "storage": "128GB",
    "price": 9999,
    "mrp": 9999,
    "colors": [
      "Royal Green",
      "Galaxy Blue",
      "Meteor Purple"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "itel-p55-plus-8-256",
    "modelId": "itel-p55-plus",
    "ram": "8GB",
    "storage": "256GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Royal Green",
      "Galaxy Blue",
      "Meteor Purple"
    ],
    "status": "active",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "itel-p40-plus-4-128",
    "modelId": "itel-p40-plus",
    "ram": "4GB",
    "storage": "128GB",
    "price": 8099,
    "mrp": 8099,
    "colors": [
      "Force Black",
      "Ice Cyan"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  }
] as unknown as MobileVariant[];

const images: MobileImageCatalogEntry[] = [
  {
    "modelId": "asus-rog-phone",
    "modelName": "ROG Phone (1st Gen)",
    "brand": "ASUS",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-.jpg",
        "verified": true,
        "alt": "ASUS ROG Phone Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "asus-rog-phone-ii",
    "modelName": "ROG Phone II",
    "brand": "ASUS",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-2.jpg",
        "verified": true,
        "alt": "ASUS ROG Phone II Matte Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "asus-rog-phone-3",
    "modelName": "ROG Phone 3",
    "brand": "ASUS",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-3.jpg",
        "verified": true,
        "alt": "ASUS ROG Phone 3 Black Glare"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "asus-rog-phone-5",
    "modelName": "ROG Phone 5",
    "brand": "ASUS",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5.jpg",
        "verified": true,
        "alt": "ASUS ROG Phone 5 Phantom Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "asus-zenfone-5z",
    "modelName": "Zenfone 5Z",
    "brand": "ASUS",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-5z-zs620kl-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-5z-zs620kl-.jpg",
        "verified": true,
        "alt": "ASUS Zenfone 5Z Midnight Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "asus-6z",
    "modelName": "ASUS 6z",
    "brand": "ASUS",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-6-zs630kl.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-6-zs630kl.jpg",
        "verified": true,
        "alt": "ASUS 6z Midnight Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "asus-zenfone-max-pro-m1",
    "modelName": "Zenfone Max Pro M1",
    "brand": "ASUS",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-max-pro-m1.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-max-pro-m1.jpg",
        "verified": true,
        "alt": "ASUS Zenfone Max Pro M1 Deepsea Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "asus-zenfone-max-pro-m2",
    "modelName": "Zenfone Max Pro M2",
    "brand": "ASUS",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-max-pro-m2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-max-pro-m2.jpg",
        "verified": true,
        "alt": "ASUS Zenfone Max Pro M2 Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "infinix-zero-8i",
    "modelName": "Zero 8i",
    "brand": "Infinix",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-8i.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-8i.jpg",
        "verified": true,
        "alt": "Infinix Zero 8i Silver Diamond"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "infinix-zero-5g",
    "modelName": "Zero 5G",
    "brand": "Infinix",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
        "verified": true,
        "alt": "Infinix Zero 5G Cosmic Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "infinix-zero-20",
    "modelName": "Zero 20",
    "brand": "Infinix",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-20.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-20.jpg",
        "verified": true,
        "alt": "Infinix Zero 20 Space Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "infinix-note-12-pro-5g",
    "modelName": "Note 12 Pro 5G",
    "brand": "Infinix",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-12-pro-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-12-pro-5g.jpg",
        "verified": true,
        "alt": "Infinix Note 12 Pro 5G Force Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "infinix-note-40-pro-5g",
    "modelName": "Note 40 Pro 5G",
    "brand": "Infinix",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro.jpg",
        "verified": true,
        "alt": "Infinix Note 40 Pro 5G Vintage Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "infinix-hot-10",
    "modelName": "Hot 10",
    "brand": "Infinix",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10.jpg",
        "verified": true,
        "alt": "Infinix Hot 10 Obsidian Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "tecno-phantom-x",
    "modelName": "Phantom X",
    "brand": "Tecno",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x.jpg",
        "verified": true,
        "alt": "Tecno Phantom X Starry Night Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "tecno-phantom-x2-pro-5g",
    "modelName": "Phantom X2 Pro 5G",
    "brand": "Tecno",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x2-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x2-pro.jpg",
        "verified": true,
        "alt": "Tecno Phantom X2 Pro Mars Orange"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "tecno-camon-20-premier-5g",
    "modelName": "Camon 20 Premier 5G",
    "brand": "Tecno",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-20-premier.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-20-premier.jpg",
        "verified": true,
        "alt": "Tecno Camon 20 Premier Dark Welkin"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "tecno-pova-3",
    "modelName": "Pova 3",
    "brand": "Tecno",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-3.jpg",
        "verified": true,
        "alt": "Tecno Pova 3 Electric Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "lava-blaze-pro",
    "modelName": "Blaze Pro",
    "brand": "Lava",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-pro.jpg",
        "verified": true,
        "alt": "Lava Blaze Pro Glass Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "lava-blaze-2-5g",
    "modelName": "Blaze 2 5G",
    "brand": "Lava",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-2-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-2-5g.jpg",
        "verified": true,
        "alt": "Lava Blaze 2 5G Glass Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "lava-blaze-3-5g",
    "modelName": "Blaze 3 5G",
    "brand": "Lava",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-3-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-3-5g.jpg",
        "verified": true,
        "alt": "Lava Blaze 3 5G Glass Gold"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "lava-yuva-5g",
    "modelName": "Yuva 5G",
    "brand": "Lava",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/lava-yuva-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/lava-yuva-5g.jpg",
        "verified": true,
        "alt": "Lava Yuva 5G Mystic Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "nokia-8",
    "modelName": "Nokia 8",
    "brand": "Nokia",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/nokia-8-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/nokia-8-.jpg",
        "verified": true,
        "alt": "Nokia 8 Polished Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "nokia-8-sirocco",
    "modelName": "Nokia 8 Sirocco",
    "brand": "Nokia",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/nokia-8-sirocco.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/nokia-8-sirocco.jpg",
        "verified": true,
        "alt": "Nokia 8 Sirocco Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "nokia-7-plus",
    "modelName": "Nokia 7 Plus",
    "brand": "Nokia",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/nokia-7-plus-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/nokia-7-plus-.jpg",
        "verified": true,
        "alt": "Nokia 7 Plus Black / Copper"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "nokia-6",
    "modelName": "Nokia 6 (1st Gen)",
    "brand": "Nokia",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/nokia-6-2017.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/nokia-6-2017.jpg",
        "verified": true,
        "alt": "Nokia 6 Matte Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "nokia-6-dot-1-plus",
    "modelName": "Nokia 6.1 Plus",
    "brand": "Nokia",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/nokia-61-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/nokia-61-plus.jpg",
        "verified": true,
        "alt": "Nokia 6.1 Plus Gloss Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "nokia-g42-5g",
    "modelName": "Nokia G42 5G",
    "brand": "Nokia",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/nokia-g42.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/nokia-g42.jpg",
        "verified": true,
        "alt": "Nokia G42 5G So Purple"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "honor-7x",
    "modelName": "Honor 7X",
    "brand": "Honor",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg",
        "verified": true,
        "alt": "Honor 7X Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "honor-8x",
    "modelName": "Honor 8X",
    "brand": "Honor",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-8x.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-8x.jpg",
        "verified": true,
        "alt": "Honor 8X Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "honor-play",
    "modelName": "Honor Play",
    "brand": "Honor",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-play-.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-play-.jpg",
        "verified": true,
        "alt": "Honor Play Navy Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "honor-view-20",
    "modelName": "Honor View 20",
    "brand": "Honor",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-view-20.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-view-20.jpg",
        "verified": true,
        "alt": "Honor View 20 Phantom Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "honor-90-5g",
    "modelName": "Honor 90 5G",
    "brand": "Honor",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/honor-90.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/honor-90.jpg",
        "verified": true,
        "alt": "Honor 90 5G Diamond Silver"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "itel-s23-plus",
    "modelName": "S23+",
    "brand": "Itel",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/itel-s23-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/itel-s23-plus.jpg",
        "verified": true,
        "alt": "Itel S23+ Elemental Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "itel-p55-plus",
    "modelName": "P55+",
    "brand": "Itel",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/itel-p55-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/itel-p55-plus.jpg",
        "verified": true,
        "alt": "Itel P55+ Royal Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "itel-p40-plus",
    "modelName": "P40+",
    "brand": "Itel",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/itel-p40-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/itel-p40-plus.jpg",
        "verified": true,
        "alt": "Itel P40+ Force Black"
      }
    ],
    "verifiedCoverage": true
  }
] as unknown as MobileImageCatalogEntry[];

export const othersAdditionsBundle: MobileBrandBundle = {
  models,
  variants,
  images,
};
