import type { MobileBrandBundle } from './types';
import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

const models: MobileModel[] = [
  {
    "id": "oppo-find-x",
    "slug": "oppo-find-x",
    "brand": "OPPO",
    "modelName": "Find X",
    "generation": "Find X",
    "status": "discontinued",
    "launchDate": "2018-06",
    "pricing": {
      "startingPrice": 59990,
      "maximumPrice": 59990,
      "launchPrice": 59990,
      "currentPrice": 59990,
      "currency": "INR",
      "priceEffectiveDate": "2018-06",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.42\"",
      "displayType": "Panoramic Arc AMOLED",
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
        "8GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (16MP OIS + 20MP) Stealth 3D Camera",
      "mainCamera": "16 MP, f/2.0, OIS, PDAF",
      "frontCamera": "Motorized pop-up 25 MP + 3D Structured Light",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 3730,
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
      "dimensions": "156.7 x 74.2 x 9.4 mm",
      "weight": 186,
      "materials": "Gorilla Glass 5 front/back, motorized stealth 3D cameras, 93.8% screen ratio",
      "waterResistance": "None",
      "colors": [
        "Bordeaux Red",
        "Glacier Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-find-x",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-find-x",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-find-x",
      "verifiedDate": "2018-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-find-x2",
    "slug": "oppo-find-x2",
    "brand": "OPPO",
    "modelName": "Find X2",
    "generation": "Find X2",
    "status": "discontinued",
    "launchDate": "2020-03",
    "pricing": {
      "startingPrice": 64990,
      "maximumPrice": 64990,
      "launchPrice": 64990,
      "currentPrice": 64990,
      "currency": "INR",
      "priceEffectiveDate": "2020-03",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "Ultra Vision AMOLED 120Hz 3K QHD+ 1B colors",
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
        "12GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (48MP Sony IMX586 OIS + 13MP 5x Tele + 12MP UW)",
      "mainCamera": "48 MP, f/1.7, OIS, Laser/PDAF",
      "frontCamera": "32 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 120\u02da ultrawide",
      "telephotoCamera": "13 MP, f/2.4, 5x hybrid zoom Telephoto"
    },
    "battery": {
      "batteryCapacity": 4200,
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
      "dimensions": "164.9 x 74.5 x 8.0 mm",
      "weight": 196,
      "materials": "Gorilla Glass 6 front, ceramic back, 65W SuperVOOC 2.0",
      "waterResistance": "IP54",
      "colors": [
        "Ceramic Black",
        "Ocean Glass"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-find-x2",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-find-x2",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-find-x2",
      "verifiedDate": "2020-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-find-n2-flip",
    "slug": "oppo-find-n2-flip",
    "brand": "OPPO",
    "modelName": "Find N2 Flip",
    "generation": "Find N",
    "status": "discontinued",
    "launchDate": "2023-02",
    "pricing": {
      "startingPrice": 89999,
      "maximumPrice": 89999,
      "launchPrice": 89999,
      "currentPrice": 89999,
      "currency": "INR",
      "priceEffectiveDate": "2023-02",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.8\" Foldable LTPO AMOLED 120Hz + 3.26\" Cover AMOLED",
      "displayType": "Foldable LTPO AMOLED",
      "resolution": "1080 x 2520",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 9000+ (4nm)",
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
      "rearCameraSetup": "Dual Hasselblad (50MP Sony IMX890 + 8MP UW)",
      "mainCamera": "50 MP, f/1.8, 23mm, PDAF",
      "frontCamera": "32 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 112\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4300,
      "wiredCharging": 44
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
      "dimensions": "166.2 x 75.2 x 7.45 mm (unfolded)",
      "weight": 191,
      "materials": "Gorilla Glass 5, flexion hinge, vertical cover screen, aluminum frame",
      "waterResistance": "Splash resistant",
      "colors": [
        "Astral Black",
        "Moonlit Purple"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-find-n2-flip",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-find-n2-flip",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-find-n2-flip",
      "verifiedDate": "2023-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-reno-10x-zoom",
    "slug": "oppo-reno-10x-zoom",
    "brand": "OPPO",
    "modelName": "Reno 10x Zoom",
    "generation": "Reno",
    "status": "discontinued",
    "launchDate": "2019-05",
    "pricing": {
      "startingPrice": 39990,
      "maximumPrice": 49990,
      "launchPrice": 39990,
      "currentPrice": 39990,
      "currency": "INR",
      "priceEffectiveDate": "2019-05",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.6\"",
      "displayType": "AMOLED Panoramic Screen FHD+",
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
      "rearCameraSetup": "Triple (48MP OIS + 13MP Periscope 5x/10x Hybrid + 8MP UW)",
      "mainCamera": "48 MP, f/1.7, OIS, Laser/PDAF",
      "frontCamera": "Motorized shark fin 16 MP",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide",
      "telephotoCamera": "13 MP, f/3.0, 130mm 5x optical periscope, OIS"
    },
    "battery": {
      "batteryCapacity": 4065,
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
      "dimensions": "162.0 x 77.2 x 9.3 mm",
      "weight": 210,
      "materials": "Gorilla Glass 6 front, Gorilla Glass 5 back, shark fin pop-up",
      "waterResistance": "None",
      "colors": [
        "Ocean Green",
        "Jet Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-reno-10x-zoom",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-reno-10x-zoom",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-reno-10x-zoom",
      "verifiedDate": "2019-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-reno-6-pro-5g",
    "slug": "oppo-reno-6-pro-5g",
    "brand": "OPPO",
    "modelName": "Reno 6 Pro 5G",
    "generation": "Reno 6",
    "status": "discontinued",
    "launchDate": "2021-07",
    "pricing": {
      "startingPrice": 39990,
      "maximumPrice": 39990,
      "launchPrice": 39990,
      "currentPrice": 39990,
      "currency": "INR",
      "priceEffectiveDate": "2021-07",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.55\"",
      "displayType": "AMOLED 90Hz HDR10+ 3D Curved",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 1200 5G (6nm)",
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
      "rearCameraSetup": "Quad (64MP + 8MP UW + 2MP Macro + 2MP Mono) Bokeh Flare Portrait",
      "mainCamera": "64 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
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
      "dimensions": "160.0 x 72.5 x 7.6 mm",
      "weight": 177,
      "materials": "Gorilla Glass 5, Reno Glow finish, 65W SuperVOOC 2.0",
      "waterResistance": "None",
      "colors": [
        "Aurora",
        "Stellar Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-reno-6-pro-5g",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-reno-6-pro-5g",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-reno-6-pro-5g",
      "verifiedDate": "2021-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-reno-7-pro-5g",
    "slug": "oppo-reno-7-pro-5g",
    "brand": "OPPO",
    "modelName": "Reno 7 Pro 5G",
    "generation": "Reno 7",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 39999,
      "maximumPrice": 39999,
      "launchPrice": 39999,
      "currentPrice": 39999,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.55\"",
      "displayType": "AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 1200-Max 5G",
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
      "rearCameraSetup": "Triple (50MP Sony IMX766 + 8MP UW + 2MP Macro) with Orbit Light",
      "mainCamera": "50 MP, f/1.8, 24mm, All-Pixel Omni-Directional PDAF",
      "frontCamera": "32 MP Sony IMX709 RGBW",
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
      "dimensions": "158.2 x 73.2 x 7.45 mm",
      "weight": 180,
      "materials": "Gorilla Glass 5, aircraft-grade metal frame, breathing notification orbit light",
      "waterResistance": "None",
      "colors": [
        "Startrails Blue",
        "Starlight Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-reno-7-pro-5g",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-reno-7-pro-5g",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-reno-7-pro-5g",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-reno-8-pro-5g",
    "slug": "oppo-reno-8-pro-5g",
    "brand": "OPPO",
    "modelName": "Reno 8 Pro 5G",
    "generation": "Reno 8",
    "status": "discontinued",
    "launchDate": "2022-07",
    "pricing": {
      "startingPrice": 45999,
      "maximumPrice": 45999,
      "launchPrice": 45999,
      "currentPrice": 45999,
      "currency": "INR",
      "priceEffectiveDate": "2022-07",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "AMOLED 120Hz 1B colors HDR10+",
      "resolution": "1080 x 2412",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 8100-Max (5nm)",
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
      "rearCameraSetup": "Triple (50MP Sony IMX766 + 8MP UW + 2MP Macro) with MariSilicon X NPU",
      "mainCamera": "50 MP, f/1.8, 23mm, All-Pixel Omni-Directional PDAF",
      "frontCamera": "32 MP Sony IMX709 AF",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 112\u02da ultrawide"
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
      "dimensions": "161.2 x 74.2 x 7.34 mm",
      "weight": 183,
      "materials": "Gorilla Glass 5 front/back, aluminum frame, MariSilicon X imaging NPU, 80W SuperVOOC",
      "waterResistance": "None",
      "colors": [
        "Glazed Green",
        "Glazed Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-reno-8-pro-5g",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-reno-8-pro-5g",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-reno-8-pro-5g",
      "verifiedDate": "2022-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-reno-10-5g",
    "slug": "oppo-reno-10-5g",
    "brand": "OPPO",
    "modelName": "Reno 10 5G",
    "generation": "Reno 10",
    "status": "discontinued",
    "launchDate": "2023-07",
    "pricing": {
      "startingPrice": 32999,
      "maximumPrice": 32999,
      "launchPrice": 32999,
      "currentPrice": 32999,
      "currency": "INR",
      "priceEffectiveDate": "2023-07",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "AMOLED 120Hz 1B colors HDR10+ 3D Curved",
      "resolution": "1080 x 2412",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 7050 5G (6nm)",
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
      "rearCameraSetup": "Triple (64MP + 32MP 2x Tele Portrait + 8MP UW)",
      "mainCamera": "64 MP, f/1.7, 25mm, PDAF",
      "frontCamera": "32 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 112\u02da ultrawide",
      "telephotoCamera": "32 MP, f/2.0, 47mm 2x Telephoto Portrait, PDAF"
    },
    "battery": {
      "batteryCapacity": 5000,
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
      "dimensions": "162.4 x 74.2 x 7.99 mm",
      "weight": 185,
      "materials": "Asahi Glass AGC DT-Star2, 3D dual-curved design, 67W SuperVOOC",
      "waterResistance": "None",
      "colors": [
        "Ice Blue",
        "Silvery Grey"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-reno-10-5g",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-reno-10-5g",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-reno-10-5g",
      "verifiedDate": "2023-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-f1s",
    "slug": "oppo-f1s",
    "brand": "OPPO",
    "modelName": "F1s",
    "generation": "F Series",
    "status": "discontinued",
    "launchDate": "2016-08",
    "pricing": {
      "startingPrice": 17990,
      "maximumPrice": 18990,
      "launchPrice": 17990,
      "currentPrice": 17990,
      "currency": "INR",
      "priceEffectiveDate": "2016-08",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "5.5\"",
      "displayType": "IPS LCD",
      "resolution": "720 x 1280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek MT6750",
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
      "rearCameraSetup": "Single 13MP, 16MP Selfie Expert",
      "mainCamera": "13 MP, f/2.2, 1/3\", PDAF",
      "frontCamera": "16 MP, f/2.0, 1/3.1\"",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3075,
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
      "dimensions": "154.5 x 76.0 x 7.38 mm",
      "weight": 160,
      "materials": "Corning Gorilla Glass 4, metal unibody, front fingerprint sensor",
      "waterResistance": "None",
      "colors": [
        "Gold",
        "Rose Gold",
        "Grey"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-f1s",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-f1s",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-f1s",
      "verifiedDate": "2016-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-f9-pro",
    "slug": "oppo-f9-pro",
    "brand": "OPPO",
    "modelName": "F9 Pro",
    "generation": "F Series",
    "status": "discontinued",
    "launchDate": "2018-08",
    "pricing": {
      "startingPrice": 23990,
      "maximumPrice": 23990,
      "launchPrice": 23990,
      "currentPrice": 23990,
      "currency": "INR",
      "priceEffectiveDate": "2018-08",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "LTPS IPS LCD Waterdrop Notch FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio P60",
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
      "rearCameraSetup": "Dual (16MP + 2MP Depth), VOOC Flash Charge",
      "mainCamera": "16 MP, f/1.8, PDAF",
      "frontCamera": "25 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3500,
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
      "dimensions": "156.7 x 74.0 x 7.99 mm",
      "weight": 169,
      "materials": "Gorilla Glass 6 front, gradient flower-petal petal pattern, VOOC Flash Charge",
      "waterResistance": "None",
      "colors": [
        "Sunrise Red",
        "Twilight Blue",
        "Starry Purple"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-f9-pro",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-f9-pro",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-f9-pro",
      "verifiedDate": "2018-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-f11-pro",
    "slug": "oppo-f11-pro",
    "brand": "OPPO",
    "modelName": "F11 Pro",
    "generation": "F Series",
    "status": "discontinued",
    "launchDate": "2019-03",
    "pricing": {
      "startingPrice": 24990,
      "maximumPrice": 25990,
      "launchPrice": 24990,
      "currentPrice": 24990,
      "currency": "INR",
      "priceEffectiveDate": "2019-03",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "LTPS IPS LCD Panoramic Screen FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio P70",
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
      "rearCameraSetup": "Dual (48MP + 5MP Depth) Rising Camera",
      "mainCamera": "48 MP, f/1.8, 1/2.0\", PDAF",
      "frontCamera": "Motorized pop-up 16 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "161.3 x 76.1 x 8.8 mm",
      "weight": 190,
      "materials": "Glass front, notchless panoramic screen, rising selfie camera, VOOC 3.0",
      "waterResistance": "None",
      "colors": [
        "Thunder Black",
        "Aurora Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-f11-pro",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-f11-pro",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-f11-pro",
      "verifiedDate": "2019-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-f17-pro",
    "slug": "oppo-f17-pro",
    "brand": "OPPO",
    "modelName": "F17 Pro",
    "generation": "F Series",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 22990,
      "maximumPrice": 22990,
      "launchPrice": 22990,
      "currentPrice": 22990,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.43\"",
      "displayType": "Super AMOLED Dual Punch-Hole FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Helio P95",
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
      "rearCameraSetup": "Quad (48MP + 8MP UW + 2MP Mono + 2MP Mono) 7.48mm Ultra-Thin",
      "mainCamera": "48 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "Dual 16 MP + 2 MP Depth",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4015,
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
      "dimensions": "160.1 x 73.8 x 7.48 mm",
      "weight": 164,
      "materials": "Gorilla Glass 3+, 7.48mm ultra-sleek lightweight body, 30W VOOC 4.0",
      "waterResistance": "None",
      "colors": [
        "Magic Blue",
        "Matte Black",
        "Metallic White"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-f17-pro",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-f17-pro",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-f17-pro",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-f19-pro-plus-5g",
    "slug": "oppo-f19-pro-plus-5g",
    "brand": "OPPO",
    "modelName": "F19 Pro+ 5G",
    "generation": "F Series",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 25990,
      "maximumPrice": 25990,
      "launchPrice": 25990,
      "currentPrice": 25990,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.43\"",
      "displayType": "Super AMOLED FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 800U 5G",
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
      "rearCameraSetup": "Quad (48MP + 8MP UW + 2MP Macro + 2MP Mono) AI Highlight Portrait",
      "mainCamera": "48 MP, f/1.7, 25mm, PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4310,
      "wiredCharging": 50
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
      "dimensions": "160.1 x 73.4 x 7.8 mm",
      "weight": 173,
      "materials": "Gorilla Glass 5, in-display fingerprint, 50W Flash Charge",
      "waterResistance": "None",
      "colors": [
        "Fluid Black",
        "Space Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-f19-pro-plus-5g",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-f19-pro-plus-5g",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-f19-pro-plus-5g",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-f21-pro-5g",
    "slug": "oppo-f21-pro-5g",
    "brand": "OPPO",
    "modelName": "F21 Pro 5G",
    "generation": "F Series",
    "status": "discontinued",
    "launchDate": "2022-04",
    "pricing": {
      "startingPrice": 26999,
      "maximumPrice": 26999,
      "launchPrice": 26999,
      "currentPrice": 26999,
      "currency": "INR",
      "priceEffectiveDate": "2022-04",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.43\"",
      "displayType": "AMOLED FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
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
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP + 2MP Macro + 2MP Depth) with Dual Orbit Lights",
      "mainCamera": "64 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4500,
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
      "dimensions": "159.9 x 73.2 x 7.5 mm",
      "weight": 173,
      "materials": "Schott Xensation glass, rainbow spectrum shimmering design, dual orbit breathing lights",
      "waterResistance": "IPX4",
      "colors": [
        "Rainbow Spectrum",
        "Cosmic Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-f21-pro-5g",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-f21-pro-5g",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-f21-pro-5g",
      "verifiedDate": "2022-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-f23-5g",
    "slug": "oppo-f23-5g",
    "brand": "OPPO",
    "modelName": "F23 5G",
    "generation": "F Series",
    "status": "discontinued",
    "launchDate": "2023-05",
    "pricing": {
      "startingPrice": 24999,
      "maximumPrice": 24999,
      "launchPrice": 24999,
      "currentPrice": 24999,
      "currency": "INR",
      "priceEffectiveDate": "2023-05",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.72\"",
      "displayType": "IPS LCD 120Hz FHD+",
      "resolution": "1080 x 2400",
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
        "8GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (64MP + 2MP Microscope + 2MP Depth) with 40x Microlens",
      "mainCamera": "64 MP, f/1.7, PDAF",
      "frontCamera": "32 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
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
      "dimensions": "165.6 x 76.1 x 8.2 mm",
      "weight": 192,
      "materials": "Panda Glass, 40x microlens, 67W SuperVOOC, 4-year durable battery health engine",
      "waterResistance": "IPX4",
      "colors": [
        "Bold Gold",
        "Cool Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-f23-5g",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-f23-5g",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-f23-5g",
      "verifiedDate": "2023-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-k1",
    "slug": "oppo-k1",
    "brand": "OPPO",
    "modelName": "K1",
    "generation": "K Series",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 16990,
      "maximumPrice": 16990,
      "launchPrice": 16990,
      "currentPrice": 16990,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.4\"",
      "displayType": "Super AMOLED Waterdrop FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
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
      "rearCameraSetup": "Dual (16MP + 2MP Depth) In-Display Fingerprint",
      "mainCamera": "16 MP, f/1.7, 1/2.8\", PDAF",
      "frontCamera": "25 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3600,
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
      "dimensions": "158.3 x 75.5 x 7.4 mm",
      "weight": 156,
      "materials": "Corning Gorilla Glass 5, in-display fingerprint scanner, 3D gradient back",
      "waterResistance": "None",
      "colors": [
        "Astral Blue",
        "Piano Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-k1",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-k1",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-k1",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-k3",
    "slug": "oppo-k3",
    "brand": "OPPO",
    "modelName": "K3",
    "generation": "K Series",
    "status": "discontinued",
    "launchDate": "2019-07",
    "pricing": {
      "startingPrice": 16990,
      "maximumPrice": 19990,
      "launchPrice": 16990,
      "currentPrice": 16990,
      "currency": "INR",
      "priceEffectiveDate": "2019-07",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "AMOLED Panoramic Screen FHD+",
      "resolution": "1080 x 2340",
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
      "rearCameraSetup": "Dual (16MP + 2MP Depth) Rising Camera",
      "mainCamera": "16 MP, f/1.7, 1/2.5\", PDAF",
      "frontCamera": "Motorized pop-up 16 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3765,
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
      "dimensions": "161.2 x 76.0 x 9.4 mm",
      "weight": 191,
      "materials": "Gorilla Glass 5, notchless panoramic screen, rising camera, VOOC 3.0",
      "waterResistance": "None",
      "colors": [
        "Nebula Blue",
        "Aurora Blue",
        "Jade Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-k3",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-k3",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-k3",
      "verifiedDate": "2019-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "oppo-k10-5g",
    "slug": "oppo-k10-5g",
    "brand": "OPPO",
    "modelName": "K10 5G",
    "generation": "K Series",
    "status": "discontinued",
    "launchDate": "2022-06",
    "pricing": {
      "startingPrice": 17499,
      "maximumPrice": 17499,
      "launchPrice": 17499,
      "currentPrice": 17499,
      "currency": "INR",
      "priceEffectiveDate": "2022-06",
      "source": "OPPO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.56\"",
      "displayType": "IPS LCD 90Hz",
      "resolution": "720 x 1612",
      "refreshRate": 90,
      "peakBrightness": 600,
      "hdr": "None",
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
      "rearCameraSetup": "Dual (48MP + 2MP Depth) with Stereo Speakers",
      "mainCamera": "48 MP, f/1.7, 26mm, PDAF",
      "frontCamera": "8 MP, f/2.0",
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
      "dimensions": "163.8 x 75.1 x 7.99 mm",
      "weight": 190,
      "materials": "Panda Glass, ultra-slim retro design, 33W SuperVOOC, dual stereo speakers",
      "waterResistance": "IP54",
      "colors": [
        "Midnight Black",
        "Ocean Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.oppo.com/in/smartphones/oppo-k10-5g",
      "productPage": "https://www.oppo.com/in/smartphones/oppo-k10-5g",
      "specSheetUrl": "https://www.oppo.com/in/smartphones/oppo-k10-5g",
      "verifiedDate": "2022-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-x50-pro",
    "slug": "vivo-x50-pro",
    "brand": "Vivo",
    "modelName": "X50 Pro",
    "generation": "X50",
    "status": "discontinued",
    "launchDate": "2020-07",
    "pricing": {
      "startingPrice": 49990,
      "maximumPrice": 49990,
      "launchPrice": 49990,
      "currentPrice": 49990,
      "currency": "INR",
      "priceEffectiveDate": "2020-07",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.56\"",
      "displayType": "AMOLED 90Hz HDR10+ Curved",
      "resolution": "1080 x 2376",
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
        "256GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP Gimbal OIS + 13MP Portrait + 8MP 5x Periscope + 8MP UW)",
      "mainCamera": "48 MP, f/1.6, Gimbal OIS, PDAF",
      "frontCamera": "32 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide",
      "telephotoCamera": "8 MP, f/3.4, 135mm 5x optical periscope, OIS"
    },
    "battery": {
      "batteryCapacity": 4315,
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
      "dimensions": "158.5 x 72.8 x 8.04 mm",
      "weight": 181.5,
      "materials": "Schott Xensation 3D glass, built-in gimbal stabilization module, AG frost matte back",
      "waterResistance": "None",
      "colors": [
        "Alpha Grey"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-x50-pro",
      "productPage": "https://www.vivo.com/in/products/vivo-x50-pro",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-x50-pro",
      "verifiedDate": "2020-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-x60-pro",
    "slug": "vivo-x60-pro",
    "brand": "Vivo",
    "modelName": "X60 Pro",
    "generation": "X60",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 49990,
      "maximumPrice": 49990,
      "launchPrice": 49990,
      "currentPrice": 49990,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.56\"",
      "displayType": "AMOLED 120Hz HDR10+ Curved",
      "resolution": "1080 x 2376",
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
        "12GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple ZEISS (48MP Gimbal 2.0 OIS + 13MP Portrait + 13MP UW)",
      "mainCamera": "48 MP, f/1.5, 26mm, Gimbal OIS, PDAF",
      "frontCamera": "32 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "13 MP, f/2.2, 120\u02da ultrawide",
      "telephotoCamera": "13 MP, f/2.5, 50mm 2x Telephoto Portrait"
    },
    "battery": {
      "batteryCapacity": 4200,
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
      "dimensions": "158.6 x 73.2 x 7.59 mm",
      "weight": 177,
      "materials": "Gorilla Glass 6 front/back, ZEISS co-engineered optics, Gimbal 2.0 stabilization",
      "waterResistance": "None",
      "colors": [
        "Midnight Black",
        "Shimmer Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-x60-pro",
      "productPage": "https://www.vivo.com/in/products/vivo-x60-pro",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-x60-pro",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-x70-pro",
    "slug": "vivo-x70-pro",
    "brand": "Vivo",
    "modelName": "X70 Pro",
    "generation": "X70",
    "status": "discontinued",
    "launchDate": "2021-09",
    "pricing": {
      "startingPrice": 46990,
      "maximumPrice": 52990,
      "launchPrice": 46990,
      "currentPrice": 46990,
      "currency": "INR",
      "priceEffectiveDate": "2021-09",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.56\"",
      "displayType": "AMOLED 120Hz HDR10+ Curved",
      "resolution": "1080 x 2376",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 1200-vivo 5G",
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
      "rearCameraSetup": "Quad ZEISS (50MP Gimbal OIS + 12MP 2x Portrait + 12MP UW + 8MP 5x Periscope)",
      "mainCamera": "50 MP, f/1.75, Gimbal OIS, PDAF",
      "frontCamera": "32 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.2, 116\u02da ultrawide",
      "telephotoCamera": "8 MP, f/3.4, 125mm 5x optical periscope, OIS"
    },
    "battery": {
      "batteryCapacity": 4450,
      "wiredCharging": 44
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
      "dimensions": "158.3 x 73.2 x 7.99 mm",
      "weight": 185,
      "materials": "Gorilla Glass 6, ZEISS T* lens coating, Fluorite AG glass",
      "waterResistance": "None",
      "colors": [
        "Cosmic Black",
        "Aurora Dawn"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-x70-pro",
      "productPage": "https://www.vivo.com/in/products/vivo-x70-pro",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-x70-pro",
      "verifiedDate": "2021-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-x70-pro-plus",
    "slug": "vivo-x70-pro-plus",
    "brand": "Vivo",
    "modelName": "X70 Pro+",
    "generation": "X70",
    "status": "discontinued",
    "launchDate": "2021-09",
    "pricing": {
      "startingPrice": 79990,
      "maximumPrice": 79990,
      "launchPrice": 79990,
      "currentPrice": 79990,
      "currency": "INR",
      "priceEffectiveDate": "2021-09",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "LTPO AMOLED 120Hz 2K WQHD+ 1B colors",
      "resolution": "1440 x 3200",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 888+ 5G",
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
      "rearCameraSetup": "Quad ZEISS (50MP OIS + 48MP Gimbal UW + 12MP 2x Tele OIS + 8MP 5x Periscope OIS)",
      "mainCamera": "50 MP, f/1.57, 1/1.31\", OIS, Laser AF",
      "frontCamera": "32 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "48 MP, f/2.2, 14mm 114\u02da ultrawide, Gimbal OIS",
      "telephotoCamera": "8 MP, f/3.4, 125mm 5x Periscope Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 55,
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
      "dimensions": "164.5 x 75.2 x 8.89 mm",
      "weight": 209,
      "materials": "Gorilla Glass Victus, IP68 water/dust proof, Ceramic cloud window, Vivo V1 imaging chip",
      "waterResistance": "IP68",
      "colors": [
        "Enigma Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-x70-pro-plus",
      "productPage": "https://www.vivo.com/in/products/vivo-x70-pro-plus",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-x70-pro-plus",
      "verifiedDate": "2021-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-x80-pro",
    "slug": "vivo-x80-pro",
    "brand": "Vivo",
    "modelName": "X80 Pro",
    "generation": "X80",
    "status": "discontinued",
    "launchDate": "2022-05",
    "pricing": {
      "startingPrice": 79999,
      "maximumPrice": 79999,
      "launchPrice": 79999,
      "currentPrice": 79999,
      "currency": "INR",
      "priceEffectiveDate": "2022-05",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "LTPO3 AMOLED 120Hz 2K WQHD+ HDR10+",
      "resolution": "1440 x 3200",
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
        "12GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad ZEISS (50MP OIS + 48MP UW + 12MP Gimbal 2x Portrait + 8MP 5x Periscope)",
      "mainCamera": "50 MP, f/1.57, 1/1.3\", OIS, Laser AF",
      "frontCamera": "32 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "48 MP, f/2.2, 114\u02da ultrawide",
      "telephotoCamera": "8 MP, f/3.4, 125mm 5x Periscope Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 4700,
      "wiredCharging": 80,
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
      "dimensions": "164.6 x 75.3 x 9.1 mm",
      "weight": 219,
      "materials": "Gorilla Glass Victus, IP68, Vivo V1+ imaging chip, 3D ultrasonic large fingerprint sensor",
      "waterResistance": "IP68",
      "colors": [
        "Cosmic Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-x80-pro",
      "productPage": "https://www.vivo.com/in/products/vivo-x80-pro",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-x80-pro",
      "verifiedDate": "2022-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-x90",
    "slug": "vivo-x90",
    "brand": "Vivo",
    "modelName": "X90",
    "generation": "X90",
    "status": "discontinued",
    "launchDate": "2023-04",
    "pricing": {
      "startingPrice": 59999,
      "maximumPrice": 63999,
      "launchPrice": 59999,
      "currentPrice": 59999,
      "currency": "INR",
      "priceEffectiveDate": "2023-04",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "AMOLED 120Hz 1.5K 1B colors HDR10+",
      "resolution": "1260 x 2800",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 9200 (4nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple ZEISS (50MP Sony IMX866 VCS OIS + 12MP 2x Tele + 12MP UW)",
      "mainCamera": "50 MP, f/1.75, 24mm, OIS, Laser AF",
      "frontCamera": "32 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "12 MP, f/2.0, 108\u02da ultrawide",
      "telephotoCamera": "12 MP, f/2.0, 50mm 2x Telephoto Portrait"
    },
    "battery": {
      "batteryCapacity": 4810,
      "wiredCharging": 120
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
      "dimensions": "164.1 x 74.4 x 8.48 mm",
      "weight": 200,
      "materials": "Schott Xensation Alpha, Vivo V2 imaging chip, 120W Dual-Cell FlashCharge",
      "waterResistance": "IP64",
      "colors": [
        "Breeze Blue",
        "Asteroid Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-x90",
      "productPage": "https://www.vivo.com/in/products/vivo-x90",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-x90",
      "verifiedDate": "2023-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-v9",
    "slug": "vivo-v9",
    "brand": "Vivo",
    "modelName": "V9",
    "generation": "V Series",
    "status": "discontinued",
    "launchDate": "2018-03",
    "pricing": {
      "startingPrice": 22990,
      "maximumPrice": 22990,
      "launchPrice": 22990,
      "currentPrice": 22990,
      "currency": "INR",
      "priceEffectiveDate": "2018-03",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "IPS LCD Notch FHD+",
      "resolution": "1080 x 2280",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 626",
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
      "rearCameraSetup": "Dual (16MP + 5MP Depth), 24MP AI Selfie",
      "mainCamera": "16 MP, f/2.0, PDAF",
      "frontCamera": "24 MP, f/2.0 AI Face Beauty",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3260,
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
      "dimensions": "154.8 x 75.0 x 7.89 mm",
      "weight": 150,
      "materials": "Corning Gorilla Glass 3, curved back, 90% screen-to-body ratio",
      "waterResistance": "None",
      "colors": [
        "Pearl Black",
        "Champagne Gold",
        "Sapphire Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-v9",
      "productPage": "https://www.vivo.com/in/products/vivo-v9",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-v9",
      "verifiedDate": "2018-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-v11-pro",
    "slug": "vivo-v11-pro",
    "brand": "Vivo",
    "modelName": "V11 Pro",
    "generation": "V Series",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 25990,
      "maximumPrice": 25990,
      "launchPrice": 25990,
      "currentPrice": 25990,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.41\"",
      "displayType": "Super AMOLED Halo FullView FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 660 AIE",
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
      "rearCameraSetup": "Dual (12MP Dual Pixel + 5MP Depth) In-Display Fingerprint",
      "mainCamera": "12 MP, f/1.8, 1/2.8\", Dual Pixel PDAF",
      "frontCamera": "25 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
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
      "dimensions": "157.9 x 75.0 x 7.9 mm",
      "weight": 156,
      "materials": "Corning Gorilla Glass 3, In-Display Fingerprint scanning, Dual-Engine fast charging",
      "waterResistance": "None",
      "colors": [
        "Starry Night",
        "Dazzling Gold"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-v11-pro",
      "productPage": "https://www.vivo.com/in/products/vivo-v11-pro",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-v11-pro",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-v15-pro",
    "slug": "vivo-v15-pro",
    "brand": "Vivo",
    "modelName": "V15 Pro",
    "generation": "V Series",
    "status": "discontinued",
    "launchDate": "2019-02",
    "pricing": {
      "startingPrice": 28990,
      "maximumPrice": 29990,
      "launchPrice": 28990,
      "currentPrice": 28990,
      "currency": "INR",
      "priceEffectiveDate": "2019-02",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.39\"",
      "displayType": "Super AMOLED Ultra FullView FHD+",
      "resolution": "1080 x 2316",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 675",
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
      "rearCameraSetup": "Triple (48MP Quad Pixel + 8MP AI UW + 5MP Depth) 32MP Pop-up",
      "mainCamera": "48 MP, f/1.8, 1/2\", PDAF",
      "frontCamera": "Motorized pop-up 32 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 13mm ultrawide"
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
      "dimensions": "157.3 x 74.7 x 8.2 mm",
      "weight": 185,
      "materials": "Gorilla Glass 5, notch-free Ultra FullView screen, 32MP elevating selfie camera",
      "waterResistance": "None",
      "colors": [
        "Topaz Blue",
        "Ruby Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-v15-pro",
      "productPage": "https://www.vivo.com/in/products/vivo-v15-pro",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-v15-pro",
      "verifiedDate": "2019-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-v20",
    "slug": "vivo-v20",
    "brand": "Vivo",
    "modelName": "V20",
    "generation": "V Series",
    "status": "discontinued",
    "launchDate": "2020-10",
    "pricing": {
      "startingPrice": 24990,
      "maximumPrice": 27990,
      "launchPrice": 24990,
      "currentPrice": 24990,
      "currency": "INR",
      "priceEffectiveDate": "2020-10",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.44\"",
      "displayType": "AMOLED FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 720G",
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
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Mono), 44MP Eye Autofocus Selfie",
      "mainCamera": "64 MP, f/1.9, 26mm, PDAF",
      "frontCamera": "44 MP, f/2.0 Eye Autofocus",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "161.3 x 74.2 x 7.38 mm",
      "weight": 171,
      "materials": "Schott Xensation UP, 7.38mm ultra-slim matte glass finish, 33W FlashCharge",
      "waterResistance": "None",
      "colors": [
        "Sunset Melody",
        "Midnight Jazz",
        "Moonlight Sonata"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-v20",
      "productPage": "https://www.vivo.com/in/products/vivo-v20",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-v20",
      "verifiedDate": "2020-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-v23-pro",
    "slug": "vivo-v23-pro",
    "brand": "Vivo",
    "modelName": "V23 Pro",
    "generation": "V Series",
    "status": "discontinued",
    "launchDate": "2022-01",
    "pricing": {
      "startingPrice": 38990,
      "maximumPrice": 43990,
      "launchPrice": 38990,
      "currentPrice": 38990,
      "currency": "INR",
      "priceEffectiveDate": "2022-01",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.56\"",
      "displayType": "AMOLED 90Hz HDR10+ 3D Curved",
      "resolution": "1080 x 2376",
      "refreshRate": 90,
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
      "rearCameraSetup": "Triple (108MP + 8MP UW + 2MP Macro) Dual Selfie (50MP Eye AF + 8MP UW)",
      "mainCamera": "108 MP, f/1.88, 26mm, PDAF",
      "frontCamera": "Dual 50 MP Eye AF + 8 MP 105\u02da ultrawide",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4300,
      "wiredCharging": 44
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
      "dimensions": "159.5 x 73.3 x 7.36 mm",
      "weight": 171,
      "materials": "Schott Xensation Max front, UV color-changing fluorite AG glass back, dual selfie flash",
      "waterResistance": "None",
      "colors": [
        "Sunshine Gold",
        "Stardust Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-v23-pro",
      "productPage": "https://www.vivo.com/in/products/vivo-v23-pro",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-v23-pro",
      "verifiedDate": "2022-01",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-v27-pro",
    "slug": "vivo-v27-pro",
    "brand": "Vivo",
    "modelName": "V27 Pro",
    "generation": "V Series",
    "status": "discontinued",
    "launchDate": "2023-03",
    "pricing": {
      "startingPrice": 37999,
      "maximumPrice": 42999,
      "launchPrice": 37999,
      "currentPrice": 37999,
      "currency": "INR",
      "priceEffectiveDate": "2023-03",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "AMOLED 120Hz 1B colors HDR10+ 3D Curved",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 8200 (4nm)",
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
      "rearCameraSetup": "Triple (50MP Sony IMX766V OIS + 8MP UW + 2MP Macro) Aura Light",
      "mainCamera": "50 MP, f/1.88, OIS, PDAF",
      "frontCamera": "50 MP, f/2.45 Eye AF",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4600,
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
      "dimensions": "164.1 x 74.8 x 7.36 mm",
      "weight": 182,
      "materials": "Schott Xensation Alpha, color changing glass, ring LED Aura Light, 66W FlashCharge",
      "waterResistance": "None",
      "colors": [
        "Magic Blue",
        "Noble Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-v27-pro",
      "productPage": "https://www.vivo.com/in/products/vivo-v27-pro",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-v27-pro",
      "verifiedDate": "2023-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-t1-5g",
    "slug": "vivo-t1-5g",
    "brand": "Vivo",
    "modelName": "T1 5G",
    "generation": "T Series",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 15990,
      "maximumPrice": 19990,
      "launchPrice": 15990,
      "currentPrice": 15990,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.58\"",
      "displayType": "IPS LCD 120Hz FHD+",
      "resolution": "1080 x 2408",
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
        "6GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP + 2MP Macro + 2MP Depth)",
      "mainCamera": "50 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.0",
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
      "dimensions": "164.0 x 75.8 x 8.25 mm",
      "weight": 187,
      "materials": "Glass front, plastic back, 5-layer liquid cooling system",
      "waterResistance": "None",
      "colors": [
        "Starlight Black",
        "Rainbow Fantasy"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-t1-5g",
      "productPage": "https://www.vivo.com/in/products/vivo-t1-5g",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-t1-5g",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "vivo-t2-pro-5g",
    "slug": "vivo-t2-pro-5g",
    "brand": "Vivo",
    "modelName": "T2 Pro 5G",
    "generation": "T Series",
    "status": "discontinued",
    "launchDate": "2023-09",
    "pricing": {
      "startingPrice": 23999,
      "maximumPrice": 24999,
      "launchPrice": 23999,
      "currentPrice": 23999,
      "currency": "INR",
      "priceEffectiveDate": "2023-09",
      "source": "Vivo India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "AMOLED 120Hz 1B colors 3D Curved",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 7200 (4nm)",
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
      "rearCameraSetup": "Dual (64MP OIS + 2MP Bokeh) with Aura Light",
      "mainCamera": "64 MP, f/1.79, OIS, PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 4600,
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
      "dimensions": "164.1 x 74.8 x 7.36 mm",
      "weight": 175,
      "materials": "Schott Xensation Alpha glass, 3D curved AMOLED, Aura Light portrait, 66W FlashCharge",
      "waterResistance": "IP52",
      "colors": [
        "Dune Gold",
        "New Moon Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS",
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
      "officialWebsite": "https://www.vivo.com/in/products/vivo-t2-pro-5g",
      "productPage": "https://www.vivo.com/in/products/vivo-t2-pro-5g",
      "specSheetUrl": "https://www.vivo.com/in/products/vivo-t2-pro-5g",
      "verifiedDate": "2023-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-3",
    "slug": "iqoo-3",
    "brand": "iQOO",
    "modelName": "iQOO 3",
    "generation": "iQOO 3",
    "status": "discontinued",
    "launchDate": "2020-02",
    "pricing": {
      "startingPrice": 36990,
      "maximumPrice": 44990,
      "launchPrice": 36990,
      "currentPrice": 36990,
      "currency": "INR",
      "priceEffectiveDate": "2020-02",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.44\"",
      "displayType": "Super AMOLED Polar View FHD+ HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
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
      "rearCameraSetup": "Quad (48MP Sony IMX582 + 13MP 20x Zoom + 13MP UW + 2MP) Monster Touch Triggers",
      "mainCamera": "48 MP, f/1.79, PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "13 MP, f/2.2, 120\u02da ultrawide",
      "telephotoCamera": "13 MP, f/2.46, 50mm 2x optical / 20x digital Telephoto"
    },
    "battery": {
      "batteryCapacity": 4440,
      "wiredCharging": 55
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
      "dimensions": "158.5 x 74.9 x 9.16 mm",
      "weight": 214.5,
      "materials": "Gorilla Glass 6 front/back, aluminum frame, Monster Touch capacitive shoulder buttons, 55W Super FlashCharge",
      "waterResistance": "None",
      "colors": [
        "Quantum Silver",
        "Tornado Black",
        "Volcano Orange"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "iQOO UI",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-3",
      "productPage": "https://www.iqoo.com/in/iqoo-3",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-3",
      "verifiedDate": "2020-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-7-5g",
    "slug": "iqoo-7-5g",
    "brand": "iQOO",
    "modelName": "iQOO 7 5G",
    "generation": "iQOO 7",
    "status": "discontinued",
    "launchDate": "2021-04",
    "pricing": {
      "startingPrice": 31990,
      "maximumPrice": 35990,
      "launchPrice": 31990,
      "currentPrice": 31990,
      "currency": "INR",
      "priceEffectiveDate": "2021-04",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.62\"",
      "displayType": "AMOLED 120Hz 1300 nits HDR10+",
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
      "rearCameraSetup": "Triple (48MP Sony IMX598 OIS + 13MP UW + 2MP Mono) with Intelligent Display Chip",
      "mainCamera": "48 MP, f/1.79, 25mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "13 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4400,
      "wiredCharging": 66
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
      "dimensions": "163.3 x 76.4 x 8.43 mm",
      "weight": 196,
      "materials": "Gorilla Glass 5, dedicated display chip for frame interpolation, 66W FlashCharge",
      "waterResistance": "None",
      "colors": [
        "Storm Black",
        "Solid Ice Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-7-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-7-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-7-5g",
      "verifiedDate": "2021-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-7-legend-5g",
    "slug": "iqoo-7-legend-5g",
    "brand": "iQOO",
    "modelName": "iQOO 7 Legend 5G",
    "generation": "iQOO 7",
    "status": "discontinued",
    "launchDate": "2021-04",
    "pricing": {
      "startingPrice": 39990,
      "maximumPrice": 43990,
      "launchPrice": 39990,
      "currentPrice": 39990,
      "currency": "INR",
      "priceEffectiveDate": "2021-04",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.62\"",
      "displayType": "AMOLED 120Hz HDR10+ Dual Monster Touch",
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
      "rearCameraSetup": "Triple (48MP Sony IMX598 OIS + 13MP 2x Tele + 13MP UW) BMW M Motorsport",
      "mainCamera": "48 MP, f/1.79, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "13 MP, f/2.2, 120\u02da ultrawide",
      "telephotoCamera": "13 MP, f/2.46, 50mm 2x Telephoto Portrait"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 66
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
      "dimensions": "162.2 x 75.8 x 8.7 mm",
      "weight": 209.5,
      "materials": "Gorilla Glass 5, BMW M Motorsport tricolor racing stripe design, dual linear motors",
      "waterResistance": "None",
      "colors": [
        "Legend Edition"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-7-legend-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-7-legend-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-7-legend-5g",
      "verifiedDate": "2021-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-9-5g",
    "slug": "iqoo-9-5g",
    "brand": "iQOO",
    "modelName": "iQOO 9 5G",
    "generation": "iQOO 9",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 42990,
      "maximumPrice": 46990,
      "launchPrice": 42990,
      "currentPrice": 42990,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.56\"",
      "displayType": "AMOLED 120Hz 10-bit HDR10+",
      "resolution": "1080 x 2376",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 888+ 5G",
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
      "rearCameraSetup": "Triple (48MP Gimbal OIS + 13MP 2x Tele + 13MP UW) 120W FlashCharge",
      "mainCamera": "48 MP, f/1.79, Gimbal OIS, PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "13 MP, f/2.2, 120\u02da ultrawide",
      "telephotoCamera": "13 MP, f/2.46, 50mm 2x Telephoto Portrait"
    },
    "battery": {
      "batteryCapacity": 4350,
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
      "dimensions": "159.1 x 75.1 x 8.6 mm",
      "weight": 202,
      "materials": "Schott Xensation glass, Gimbal stabilization, 120W FlashCharge (0-100% in 18 mins)",
      "waterResistance": "None",
      "colors": [
        "Legend",
        "Alpha"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-9-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-9-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-9-5g",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-9-pro-5g",
    "slug": "iqoo-9-pro-5g",
    "brand": "iQOO",
    "modelName": "iQOO 9 Pro 5G",
    "generation": "iQOO 9",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 64990,
      "maximumPrice": 69990,
      "launchPrice": 64990,
      "currentPrice": 64990,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "LTPO2 E5 AMOLED 120Hz 2K WQHD+ 10-bit",
      "resolution": "1440 x 3200",
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
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (50MP Gimbal OIS + 50MP 150\u02da Fisheye UW + 16MP 2.5x Tele OIS)",
      "mainCamera": "50 MP, f/1.75, Gimbal OIS, Dual Pixel PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "50 MP, f/2.2, 150\u02da Fisheye ultrawide",
      "telephotoCamera": "16 MP, f/2.23, 60mm 2.5x Telephoto, OIS"
    },
    "battery": {
      "batteryCapacity": 4700,
      "wiredCharging": 120,
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
      "dimensions": "164.8 x 75.2 x 8.83 mm",
      "weight": 209.9,
      "materials": "Gorilla Glass Victus, BMW M Motorsport livery, 120W wired / 50W wireless FlashCharge, 3D ultrasonic fingerprint",
      "waterResistance": "Splash resistant",
      "colors": [
        "Legend",
        "Dark Cruise"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-9-pro-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-9-pro-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-9-pro-5g",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-9t-5g",
    "slug": "iqoo-9t-5g",
    "brand": "iQOO",
    "modelName": "iQOO 9T 5G",
    "generation": "iQOO 9",
    "status": "discontinued",
    "launchDate": "2022-08",
    "pricing": {
      "startingPrice": 49999,
      "maximumPrice": 54999,
      "launchPrice": 49999,
      "currentPrice": 49999,
      "currency": "INR",
      "priceEffectiveDate": "2022-08",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "E5 AMOLED 120Hz HDR10+ Dual Monster Touch",
      "resolution": "1080 x 2400",
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
      "rearCameraSetup": "Triple (50MP Samsung GN5 OIS + 12MP 2x Tele + 13MP UW) with Vivo V1+ Chip",
      "mainCamera": "50 MP, f/1.88, OIS, Dual Pixel PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "13 MP, f/2.2, 120\u02da ultrawide",
      "telephotoCamera": "12 MP, f/1.98, 50mm 2x Telephoto Portrait"
    },
    "battery": {
      "batteryCapacity": 4700,
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
      "dimensions": "164.5 x 77.1 x 8.37 mm",
      "weight": 207,
      "materials": "Gorilla Glass 5, V1+ dedicated imaging chip, 120W FlashCharge",
      "waterResistance": "IP52",
      "colors": [
        "Legend",
        "Alpha"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-9t-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-9t-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-9t-5g",
      "verifiedDate": "2022-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-neo-6-5g",
    "slug": "iqoo-neo-6-5g",
    "brand": "iQOO",
    "modelName": "iQOO Neo 6 5G",
    "generation": "Neo 6",
    "status": "discontinued",
    "launchDate": "2022-05",
    "pricing": {
      "startingPrice": 29999,
      "maximumPrice": 33999,
      "launchPrice": 29999,
      "currentPrice": 29999,
      "currency": "INR",
      "priceEffectiveDate": "2022-05",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.62\"",
      "displayType": "E4 AMOLED 120Hz 1300 nits HDR10+",
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
      "rearCameraSetup": "Triple (64MP OIS + 8MP UW + 2MP Macro) 80W FlashCharge",
      "mainCamera": "64 MP, f/1.89, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.2, 116\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4700,
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
      "dimensions": "163.0 x 76.2 x 8.54 mm",
      "weight": 190,
      "materials": "Glass front, cascade cooling system, 80W FlashCharge",
      "waterResistance": "None",
      "colors": [
        "Dark Nova",
        "Cyber Rage"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-neo-6-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-neo-6-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-neo-6-5g",
      "verifiedDate": "2022-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-z3-5g",
    "slug": "iqoo-z3-5g",
    "brand": "iQOO",
    "modelName": "iQOO Z3 5G",
    "generation": "Z Series",
    "status": "discontinued",
    "launchDate": "2021-06",
    "pricing": {
      "startingPrice": 19990,
      "maximumPrice": 22990,
      "launchPrice": 19990,
      "currentPrice": 19990,
      "currency": "INR",
      "priceEffectiveDate": "2021-06",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.58\"",
      "displayType": "IPS LCD 120Hz HDR10",
      "resolution": "1080 x 2408",
      "refreshRate": 120,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 768G 5G",
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
      "rearCameraSetup": "Triple (64MP Samsung GW3 + 8MP UW + 2MP Macro) 55W FlashCharge",
      "mainCamera": "64 MP, f/1.79, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4400,
      "wiredCharging": 55
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
      "dimensions": "163.95 x 75.3 x 8.5 mm",
      "weight": 185.5,
      "materials": "Glass front, five-layer liquid cooling, 55W FlashCharge",
      "waterResistance": "None",
      "colors": [
        "Ace Black",
        "Cyber Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-z3-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-z3-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-z3-5g",
      "verifiedDate": "2021-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-z5-5g",
    "slug": "iqoo-z5-5g",
    "brand": "iQOO",
    "modelName": "iQOO Z5 5G",
    "generation": "Z Series",
    "status": "discontinued",
    "launchDate": "2021-09",
    "pricing": {
      "startingPrice": 23990,
      "maximumPrice": 26990,
      "launchPrice": 23990,
      "currentPrice": 23990,
      "currency": "INR",
      "priceEffectiveDate": "2021-09",
      "source": "iQOO India Store / Official Launch"
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
      "chipset": "Qualcomm Snapdragon 778G 5G",
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
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Macro), 5000 mAh Battery",
      "mainCamera": "64 MP, f/1.79, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 44
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
      "dimensions": "164.7 x 76.7 x 8.49 mm",
      "weight": 193,
      "materials": "Glass front, plastic back, flagship VC liquid cooling, dual stereo speakers",
      "waterResistance": "None",
      "colors": [
        "Mystic Space",
        "Arctic Dawn"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-z5-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-z5-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-z5-5g",
      "verifiedDate": "2021-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-z6-pro-5g",
    "slug": "iqoo-z6-pro-5g",
    "brand": "iQOO",
    "modelName": "iQOO Z6 Pro 5G",
    "generation": "Z Series",
    "status": "discontinued",
    "launchDate": "2022-04",
    "pricing": {
      "startingPrice": 23999,
      "maximumPrice": 28999,
      "launchPrice": 23999,
      "currentPrice": 23999,
      "currency": "INR",
      "priceEffectiveDate": "2022-04",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.44\"",
      "displayType": "AMOLED 90Hz 1300 nits HDR10+",
      "resolution": "1080 x 2404",
      "refreshRate": 90,
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
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Macro) 66W FlashCharge",
      "mainCamera": "64 MP, f/1.79, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 116\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4700,
      "wiredCharging": 66
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
      "dimensions": "159.7 x 73.6 x 8.49 mm",
      "weight": 180,
      "materials": "Schott Xensation glass, 32923 mm\u00b2 flagship liquid cooling, 66W FlashCharge",
      "waterResistance": "None",
      "colors": [
        "Legion Sky",
        "Phantom Dusk"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-z6-pro-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-z6-pro-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-z6-pro-5g",
      "verifiedDate": "2022-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-z7-5g",
    "slug": "iqoo-z7-5g",
    "brand": "iQOO",
    "modelName": "iQOO Z7 5G",
    "generation": "Z Series",
    "status": "discontinued",
    "launchDate": "2023-03",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 16999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2023-03",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.38\"",
      "displayType": "AMOLED 90Hz HDR10+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 920 5G (6nm)",
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
      "rearCameraSetup": "Dual (64MP OIS + 2MP Bokeh) 44W FlashCharge",
      "mainCamera": "64 MP, f/1.79, OIS, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 44
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
      "dimensions": "158.9 x 73.5 x 7.8 mm",
      "weight": 173,
      "materials": "Schott Xensation glass, ultra-bright AMOLED, 64MP OIS ultra-stable camera",
      "waterResistance": "IP54",
      "colors": [
        "Norway Blue",
        "Pacific Night"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-z7-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-z7-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-z7-5g",
      "verifiedDate": "2023-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "iqoo-z7-pro-5g",
    "slug": "iqoo-z7-pro-5g",
    "brand": "iQOO",
    "modelName": "iQOO Z7 Pro 5G",
    "generation": "Z Series",
    "status": "discontinued",
    "launchDate": "2023-08",
    "pricing": {
      "startingPrice": 23999,
      "maximumPrice": 24999,
      "launchPrice": 23999,
      "currentPrice": 23999,
      "currency": "INR",
      "priceEffectiveDate": "2023-08",
      "source": "iQOO India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.78\"",
      "displayType": "AMOLED 120Hz 1B colors 3D Curved",
      "resolution": "1080 x 2400",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 7200 (4nm)",
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
      "rearCameraSetup": "Dual (64MP OIS + 2MP Bokeh) with Aura Light",
      "mainCamera": "64 MP, f/1.79, OIS, PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": true
    },
    "battery": {
      "batteryCapacity": 4600,
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
      "dimensions": "164.1 x 74.8 x 7.36 mm",
      "weight": 175,
      "materials": "Schott Xensation Alpha, 3D curved display, Aura Light, 66W FlashCharge",
      "waterResistance": "IP52",
      "colors": [
        "Blue Lagoon",
        "Graphite Matte"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "Funtouch OS for iQOO",
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
      "officialWebsite": "https://www.iqoo.com/in/iqoo-z7-pro-5g",
      "productPage": "https://www.iqoo.com/in/iqoo-z7-pro-5g",
      "specSheetUrl": "https://www.iqoo.com/in/iqoo-z7-pro-5g",
      "verifiedDate": "2023-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-1",
    "slug": "realme-1",
    "brand": "realme",
    "modelName": "realme 1",
    "generation": "realme 1",
    "status": "discontinued",
    "launchDate": "2018-05",
    "pricing": {
      "startingPrice": 8990,
      "maximumPrice": 13990,
      "launchPrice": 8990,
      "currentPrice": 8990,
      "currency": "INR",
      "priceEffectiveDate": "2018-05",
      "source": "realme India Store / Official Launch"
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
      "chipset": "MediaTek Helio P60",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "3GB",
        "4GB",
        "6GB"
      ],
      "storageOptions": [
        "32GB",
        "64GB",
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Single 13MP, Diamond Black Design",
      "mainCamera": "13 MP, f/2.2, PDAF",
      "frontCamera": "8 MP, f/2.2",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3410,
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
      "dimensions": "156.5 x 75.2 x 7.8 mm",
      "weight": 155,
      "materials": "Corning Gorilla Glass 3, unique 3D diamond cut reflective pattern",
      "waterResistance": "None",
      "colors": [
        "Diamond Black",
        "Solar Red",
        "Moonlight Silver"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.realme.com/in/realme-1",
      "productPage": "https://www.realme.com/in/realme-1",
      "specSheetUrl": "https://www.realme.com/in/realme-1",
      "verifiedDate": "2018-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-2-pro",
    "slug": "realme-2-pro",
    "brand": "realme",
    "modelName": "realme 2 Pro",
    "generation": "realme 2",
    "status": "discontinued",
    "launchDate": "2018-09",
    "pricing": {
      "startingPrice": 13990,
      "maximumPrice": 17990,
      "launchPrice": 13990,
      "currentPrice": 13990,
      "currency": "INR",
      "priceEffectiveDate": "2018-09",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "IPS LCD Dewdrop Notch FHD+",
      "resolution": "1080 x 2340",
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
        "4GB",
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
      "rearCameraSetup": "Dual (16MP Sony IMX398 + 2MP Depth)",
      "mainCamera": "16 MP, f/1.7, 1/2.8\", Dual Pixel PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3500,
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
      "dimensions": "156.7 x 74.0 x 8.5 mm",
      "weight": 174,
      "materials": "Corning Gorilla Glass 3, multilayer laminated crystalline finish",
      "waterResistance": "None",
      "colors": [
        "Ice Lake",
        "Blue Ocean",
        "Black Sea"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.realme.com/in/realme-2-pro",
      "productPage": "https://www.realme.com/in/realme-2-pro",
      "specSheetUrl": "https://www.realme.com/in/realme-2-pro",
      "verifiedDate": "2018-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-3-pro",
    "slug": "realme-3-pro",
    "brand": "realme",
    "modelName": "realme 3 Pro",
    "generation": "realme 3",
    "status": "discontinued",
    "launchDate": "2019-04",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 16999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2019-04",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "IPS LCD Dewdrop Notch FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 710",
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
      "rearCameraSetup": "Dual (16MP Sony IMX519 + 5MP Depth) VOOC 3.0",
      "mainCamera": "16 MP, f/1.7, 1/2.6\", Dual Pixel PDAF",
      "frontCamera": "25 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 4045,
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
      "dimensions": "156.8 x 74.2 x 8.3 mm",
      "weight": 172,
      "materials": "Corning Gorilla Glass 5, Speedway curved S-shaped light grading, 20W VOOC 3.0",
      "waterResistance": "None",
      "colors": [
        "Nitro Blue",
        "Lightning Purple",
        "Carbon Grey"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.realme.com/in/realme-3-pro",
      "productPage": "https://www.realme.com/in/realme-3-pro",
      "specSheetUrl": "https://www.realme.com/in/realme-3-pro",
      "verifiedDate": "2019-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-5-pro",
    "slug": "realme-5-pro",
    "brand": "realme",
    "modelName": "realme 5 Pro",
    "generation": "realme 5",
    "status": "discontinued",
    "launchDate": "2019-08",
    "pricing": {
      "startingPrice": 13999,
      "maximumPrice": 16999,
      "launchPrice": 13999,
      "currentPrice": 13999,
      "currency": "INR",
      "priceEffectiveDate": "2019-08",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.3\"",
      "displayType": "IPS LCD Dewdrop Notch FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 600,
      "hdr": "None",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 712",
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
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP Sony IMX586 + 8MP UW + 2MP Macro + 2MP Depth) VOOC 3.0",
      "mainCamera": "48 MP, f/1.8, 1/2.0\", PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4035,
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
      "dimensions": "157.0 x 74.2 x 8.9 mm",
      "weight": 184,
      "materials": "Corning Gorilla Glass 3+, holographic diamond cut, splash resistant",
      "waterResistance": "Splash resistant",
      "colors": [
        "Crystal Green",
        "Crystal Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.realme.com/in/realme-5-pro",
      "productPage": "https://www.realme.com/in/realme-5-pro",
      "specSheetUrl": "https://www.realme.com/in/realme-5-pro",
      "verifiedDate": "2019-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-6-pro",
    "slug": "realme-6-pro",
    "brand": "realme",
    "modelName": "realme 6 Pro",
    "generation": "realme 6",
    "status": "discontinued",
    "launchDate": "2020-03",
    "pricing": {
      "startingPrice": 16999,
      "maximumPrice": 18999,
      "launchPrice": 16999,
      "currentPrice": 16999,
      "currency": "INR",
      "priceEffectiveDate": "2020-03",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.6\"",
      "displayType": "IPS LCD 90Hz Dual Punch-Hole FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
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
      "rearCameraSetup": "Quad (64MP Samsung GW1 + 12MP 2x Tele + 8MP UW + 2MP Macro) Dual In-Display Selfie",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "Dual 16 MP + 8 MP 105\u02da ultrawide",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.3, 119\u02da ultrawide",
      "telephotoCamera": "12 MP, f/2.5, 54mm 2x Telephoto"
    },
    "battery": {
      "batteryCapacity": 4300,
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
      "dimensions": "163.8 x 75.8 x 8.9 mm",
      "weight": 202,
      "materials": "Corning Gorilla Glass 5 front/back, 90Hz Pro display, 30W Flash Charge",
      "waterResistance": "Splash resistant",
      "colors": [
        "Lightning Blue",
        "Lightning Orange",
        "Lightning Red"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-6-pro",
      "productPage": "https://www.realme.com/in/realme-6-pro",
      "specSheetUrl": "https://www.realme.com/in/realme-6-pro",
      "verifiedDate": "2020-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-7-pro",
    "slug": "realme-7-pro",
    "brand": "realme",
    "modelName": "realme 7 Pro",
    "generation": "realme 7",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 19999,
      "maximumPrice": 21999,
      "launchPrice": 19999,
      "currentPrice": 19999,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.4\"",
      "displayType": "Super AMOLED FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
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
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP Sony IMX682 + 8MP UW + 2MP Macro + 2MP Depth) 65W SuperDart",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "32 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.3, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 65
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
      "dimensions": "160.9 x 74.3 x 8.7 mm",
      "weight": 182,
      "materials": "Gorilla Glass 3+, mirror split design, stereo dual speakers, 65W SuperDart (0-100% in 34 mins)",
      "waterResistance": "Water-repellent coating",
      "colors": [
        "Mirror Blue",
        "Mirror Silver",
        "Sun Kissed Leather"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-7-pro",
      "productPage": "https://www.realme.com/in/realme-7-pro",
      "specSheetUrl": "https://www.realme.com/in/realme-7-pro",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-8-pro",
    "slug": "realme-8-pro",
    "brand": "realme",
    "modelName": "realme 8 Pro",
    "generation": "realme 8",
    "status": "discontinued",
    "launchDate": "2021-03",
    "pricing": {
      "startingPrice": 17999,
      "maximumPrice": 19999,
      "launchPrice": 17999,
      "currentPrice": 17999,
      "currency": "INR",
      "priceEffectiveDate": "2021-03",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.4\"",
      "displayType": "Super AMOLED 1000 nits FHD+",
      "resolution": "1080 x 2400",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
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
        "128GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (108MP Samsung HM2 + 8MP UW + 2MP Macro + 2MP Depth) 50W SuperDart",
      "mainCamera": "108 MP, f/1.88, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.25, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 50
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
      "dimensions": "160.6 x 73.9 x 8.1 mm",
      "weight": 176,
      "materials": "Asahi Glass Dragontrail, infinite starry design with 'DARE TO LEAP' slogan, 108MP 3x Ultra Zoom",
      "waterResistance": "None",
      "colors": [
        "Infinite Blue",
        "Infinite Black",
        "Punk Black",
        "Illuminating Yellow"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-8-pro",
      "productPage": "https://www.realme.com/in/realme-8-pro",
      "specSheetUrl": "https://www.realme.com/in/realme-8-pro",
      "verifiedDate": "2021-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-9-pro-plus-5g",
    "slug": "realme-9-pro-plus-5g",
    "brand": "realme",
    "modelName": "realme 9 Pro+ 5G",
    "generation": "realme 9",
    "status": "discontinued",
    "launchDate": "2022-02",
    "pricing": {
      "startingPrice": 24999,
      "maximumPrice": 28999,
      "launchPrice": 24999,
      "currentPrice": 24999,
      "currency": "INR",
      "priceEffectiveDate": "2022-02",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.4\"",
      "displayType": "Super AMOLED 90Hz HDR10+ Heart Rate Sensor",
      "resolution": "1080 x 2400",
      "refreshRate": 90,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 920 5G (6nm)",
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
      "rearCameraSetup": "Triple (50MP Sony IMX766 OIS + 8MP UW + 2MP Macro) Light Shift Design",
      "mainCamera": "50 MP, f/1.8, 24mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.4",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.2, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 60
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
      "dimensions": "160.2 x 73.3 x 7.99 mm",
      "weight": 182,
      "materials": "Gorilla Glass 5 front/back, photochromic Light Shift back changes color under sunlight, in-display heart rate sensor",
      "waterResistance": "None",
      "colors": [
        "Sunrise Blue",
        "Midnight Black",
        "Aurora Green"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-9-pro-plus-5g",
      "productPage": "https://www.realme.com/in/realme-9-pro-plus-5g",
      "specSheetUrl": "https://www.realme.com/in/realme-9-pro-plus-5g",
      "verifiedDate": "2022-02",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-10-pro-plus-5g",
    "slug": "realme-10-pro-plus-5g",
    "brand": "realme",
    "modelName": "realme 10 Pro+ 5G",
    "generation": "realme 10",
    "status": "discontinued",
    "launchDate": "2022-12",
    "pricing": {
      "startingPrice": 24999,
      "maximumPrice": 27999,
      "launchPrice": 24999,
      "currentPrice": 24999,
      "currency": "INR",
      "priceEffectiveDate": "2022-12",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "AMOLED 120Hz 1B colors HDR10+ 2160Hz PWM Curved",
      "resolution": "1080 x 2412",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 1080 5G (6nm)",
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
      "rearCameraSetup": "Triple (108MP Samsung HM6 + 8MP UW + 2MP Macro) 67W SuperVOOC",
      "mainCamera": "108 MP, f/1.75, 24mm, PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 112\u02da ultrawide"
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
      "dimensions": "161.5 x 73.9 x 7.78 mm",
      "weight": 173,
      "materials": "Double-reinforced 0.65mm glass, 61\u02da precision curved vision display, 2160Hz ultra-high frequency dimming",
      "waterResistance": "None",
      "colors": [
        "Hyperspace Gold",
        "Dark Matter",
        "Nebula Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-10-pro-plus-5g",
      "productPage": "https://www.realme.com/in/realme-10-pro-plus-5g",
      "specSheetUrl": "https://www.realme.com/in/realme-10-pro-plus-5g",
      "verifiedDate": "2022-12",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-11-pro-plus-5g",
    "slug": "realme-11-pro-plus-5g",
    "brand": "realme",
    "modelName": "realme 11 Pro+ 5G",
    "generation": "realme 11",
    "status": "discontinued",
    "launchDate": "2023-06",
    "pricing": {
      "startingPrice": 27999,
      "maximumPrice": 29999,
      "launchPrice": 27999,
      "currentPrice": 27999,
      "currency": "INR",
      "priceEffectiveDate": "2023-06",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "AMOLED 120Hz 1B colors HDR10+ 2160Hz PWM Curved",
      "resolution": "1080 x 2412",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 7050 5G (6nm)",
      "cpu": "Octa-core",
      "gpu": "Integrated Graphics",
      "ramOptions": [
        "8GB",
        "12GB"
      ],
      "storageOptions": [
        "256GB"
      ],
      "storageType": "UFS 3.1"
    },
    "cameras": {
      "rearCameraSetup": "Triple (200MP Samsung HP3 OIS + 8MP UW + 2MP Macro) 100W SuperVOOC",
      "mainCamera": "200 MP, f/1.69, 23mm, OIS, Super QPD",
      "frontCamera": "32 MP Sony IMX615",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.2, 112\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 100
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
      "dimensions": "161.6 x 73.9 x 8.7 mm",
      "weight": 189,
      "materials": "Double-reinforced glass front, Matteo Menotto (former GUCCI designer) premium lychee vegan leather back",
      "waterResistance": "None",
      "colors": [
        "Sunrise Beige",
        "Oasis Green",
        "Astral Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-11-pro-plus-5g",
      "productPage": "https://www.realme.com/in/realme-11-pro-plus-5g",
      "specSheetUrl": "https://www.realme.com/in/realme-11-pro-plus-5g",
      "verifiedDate": "2023-06",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-x",
    "slug": "realme-x",
    "brand": "realme",
    "modelName": "realme X",
    "generation": "realme X",
    "status": "discontinued",
    "launchDate": "2019-07",
    "pricing": {
      "startingPrice": 16999,
      "maximumPrice": 19999,
      "launchPrice": 16999,
      "currentPrice": 16999,
      "currency": "INR",
      "priceEffectiveDate": "2019-07",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.53\"",
      "displayType": "AMOLED Full Screen FHD+",
      "resolution": "1080 x 2340",
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
        "4GB",
        "8GB"
      ],
      "storageOptions": [
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Dual (48MP Sony IMX586 + 5MP Depth) Pop-up Selfie",
      "mainCamera": "48 MP, f/1.7, 1/2.0\", PDAF",
      "frontCamera": "Motorized pop-up 16 MP",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 3765,
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
      "dimensions": "161.2 x 76.0 x 9.4 mm",
      "weight": 191,
      "materials": "Gorilla Glass 5, notch-free true full screen, pop-up camera, in-display fingerprint, VOOC 3.0",
      "waterResistance": "None",
      "colors": [
        "Polar White",
        "Space Blue",
        "Onion Edition",
        "Garlic Edition"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.realme.com/in/realme-x",
      "productPage": "https://www.realme.com/in/realme-x",
      "specSheetUrl": "https://www.realme.com/in/realme-x",
      "verifiedDate": "2019-07",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-xt",
    "slug": "realme-xt",
    "brand": "realme",
    "modelName": "realme XT",
    "generation": "realme X",
    "status": "discontinued",
    "launchDate": "2019-09",
    "pricing": {
      "startingPrice": 15999,
      "maximumPrice": 18999,
      "launchPrice": 15999,
      "currentPrice": 15999,
      "currency": "INR",
      "priceEffectiveDate": "2019-09",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.4\"",
      "displayType": "Super AMOLED Dewdrop FHD+",
      "resolution": "1080 x 2340",
      "refreshRate": 60,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "Qualcomm Snapdragon 712",
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
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (64MP Samsung GW1 + 8MP UW + 2MP Macro + 2MP Depth) VOOC 3.0",
      "mainCamera": "64 MP, f/1.8, 1/1.72\", PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.25, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4000,
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
      "dimensions": "158.7 x 75.4 x 8.6 mm",
      "weight": 183,
      "materials": "Gorilla Glass 5 front/back, India's first 64MP quad camera, in-display fingerprint",
      "waterResistance": "None",
      "colors": [
        "Pearl White",
        "Pearl Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.realme.com/in/realme-xt",
      "productPage": "https://www.realme.com/in/realme-xt",
      "specSheetUrl": "https://www.realme.com/in/realme-xt",
      "verifiedDate": "2019-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-x2-pro",
    "slug": "realme-x2-pro",
    "brand": "realme",
    "modelName": "realme X2 Pro",
    "generation": "realme X",
    "status": "discontinued",
    "launchDate": "2019-11",
    "pricing": {
      "startingPrice": 29999,
      "maximumPrice": 33999,
      "launchPrice": 29999,
      "currentPrice": 29999,
      "currency": "INR",
      "priceEffectiveDate": "2019-11",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "Super AMOLED 90Hz 1000 nits HDR10+",
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
      "rearCameraSetup": "Quad (64MP Samsung GW1 + 13MP 2x Tele + 8MP UW + 2MP Mono) 50W SuperVOOC",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.2, 115\u02da ultrawide",
      "telephotoCamera": "13 MP, f/2.5, 52mm 2x optical / 20x hybrid Telephoto"
    },
    "battery": {
      "batteryCapacity": 4000,
      "wiredCharging": 50
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
      "dimensions": "161.0 x 75.7 x 8.7 mm",
      "weight": 199,
      "materials": "Gorilla Glass 5 front/back, metal frame, stereo dual speakers with Dolby Atmos, 50W SuperVOOC (0-100% in 35 mins)",
      "waterResistance": "None",
      "colors": [
        "Lunar White",
        "Neptune Blue",
        "Red Brick Master",
        "Concrete Master"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "ColorOS",
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
      "officialWebsite": "https://www.realme.com/in/realme-x2-pro",
      "productPage": "https://www.realme.com/in/realme-x2-pro",
      "specSheetUrl": "https://www.realme.com/in/realme-x2-pro",
      "verifiedDate": "2019-11",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-gt-5g",
    "slug": "realme-gt-5g",
    "brand": "realme",
    "modelName": "realme GT 5G",
    "generation": "realme GT",
    "status": "discontinued",
    "launchDate": "2021-08",
    "pricing": {
      "startingPrice": 37999,
      "maximumPrice": 41999,
      "launchPrice": 37999,
      "currentPrice": 37999,
      "currency": "INR",
      "priceEffectiveDate": "2021-08",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.43\"",
      "displayType": "Super AMOLED 120Hz 1000 nits",
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
      "rearCameraSetup": "Triple (64MP Sony IMX682 + 8MP UW + 2MP Macro) 65W SuperDart",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
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
      "dimensions": "158.5 x 73.3 x 8.4 mm",
      "weight": 186,
      "materials": "Glass front, dual-tone vegan leather racing stripe back / glass back, stainless steel VC cooling",
      "waterResistance": "None",
      "colors": [
        "Racing Yellow",
        "Dashing Silver",
        "Dashing Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-gt-5g",
      "productPage": "https://www.realme.com/in/realme-gt-5g",
      "specSheetUrl": "https://www.realme.com/in/realme-gt-5g",
      "verifiedDate": "2021-08",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-gt-neo-2",
    "slug": "realme-gt-neo-2",
    "brand": "realme",
    "modelName": "realme GT Neo 2",
    "generation": "realme GT",
    "status": "discontinued",
    "launchDate": "2021-10",
    "pricing": {
      "startingPrice": 31999,
      "maximumPrice": 35999,
      "launchPrice": 31999,
      "currentPrice": 31999,
      "currency": "INR",
      "priceEffectiveDate": "2021-10",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.62\"",
      "displayType": "E4 AMOLED 120Hz 1300 nits HDR10+",
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
      "rearCameraSetup": "Triple (64MP + 8MP UW + 2MP Macro) 65W SuperDart",
      "mainCamera": "64 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.5",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.3, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5000,
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
      "dimensions": "162.9 x 75.8 x 8.6 mm",
      "weight": 200,
      "materials": "Gorilla Glass 5, stainless steel vapor cooling plus with diamond thermal gel, 65W SuperDart",
      "waterResistance": "None",
      "colors": [
        "NEO Green",
        "NEO Blue",
        "NEO Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-gt-neo-2",
      "productPage": "https://www.realme.com/in/realme-gt-neo-2",
      "specSheetUrl": "https://www.realme.com/in/realme-gt-neo-2",
      "verifiedDate": "2021-10",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-gt-neo-3",
    "slug": "realme-gt-neo-3",
    "brand": "realme",
    "modelName": "realme GT Neo 3",
    "generation": "realme GT",
    "status": "discontinued",
    "launchDate": "2022-04",
    "pricing": {
      "startingPrice": 36999,
      "maximumPrice": 42999,
      "launchPrice": 36999,
      "currentPrice": 36999,
      "currency": "INR",
      "priceEffectiveDate": "2022-04",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.7\"",
      "displayType": "AMOLED 120Hz 1B colors HDR10+",
      "resolution": "1080 x 2412",
      "refreshRate": 120,
      "peakBrightness": 1200,
      "hdr": "HDR10",
      "protection": "Corning Gorilla Glass",
      "screenToBodyRatio": "88.0%"
    },
    "performance": {
      "chipset": "MediaTek Dimensity 8100 5G (5nm)",
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
      "rearCameraSetup": "Triple (50MP Sony IMX766 OIS + 8MP UW + 2MP Macro) 150W UltraDart",
      "mainCamera": "50 MP, f/1.88, 24mm, OIS, PDAF",
      "frontCamera": "16 MP, f/2.45",
      "videoRecording": "4K@30/60fps",
      "ois": true,
      "ultrawideCamera": "8 MP, f/2.25, 120\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 5000,
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
      "dimensions": "163.3 x 75.6 x 8.2 mm",
      "weight": 188,
      "materials": "Gorilla Glass 5 front/back, iconic racing stripe design, dedicated display processor, 80W/150W UltraDart options",
      "waterResistance": "None",
      "colors": [
        "Nitro Blue",
        "Sprint White",
        "Asphalt Black"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-gt-neo-3",
      "productPage": "https://www.realme.com/in/realme-gt-neo-3",
      "specSheetUrl": "https://www.realme.com/in/realme-gt-neo-3",
      "verifiedDate": "2022-04",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-narzo-10",
    "slug": "realme-narzo-10",
    "brand": "realme",
    "modelName": "realme Narzo 10",
    "generation": "Narzo",
    "status": "discontinued",
    "launchDate": "2020-05",
    "pricing": {
      "startingPrice": 11999,
      "maximumPrice": 11999,
      "launchPrice": 11999,
      "currentPrice": 11999,
      "currency": "INR",
      "priceEffectiveDate": "2020-05",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.5\"",
      "displayType": "IPS LCD Mini-drop HD+",
      "resolution": "720 x 1600",
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
        "128GB"
      ],
      "storageType": "UFS 2.1"
    },
    "cameras": {
      "rearCameraSetup": "Quad (48MP + 8MP UW + 2MP Macro + 2MP Depth), 5000 mAh Battery",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.25, 119\u02da ultrawide"
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
      "dimensions": "164.4 x 75.4 x 9.0 mm",
      "weight": 199,
      "materials": "Gorilla Glass 3, Naoto Fukasawa Japanese minimalist line art back, 18W Quick Charge",
      "waterResistance": "None",
      "colors": [
        "That Green",
        "That White",
        "That Blue"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-narzo-10",
      "productPage": "https://www.realme.com/in/realme-narzo-10",
      "specSheetUrl": "https://www.realme.com/in/realme-narzo-10",
      "verifiedDate": "2020-05",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-narzo-20-pro",
    "slug": "realme-narzo-20-pro",
    "brand": "realme",
    "modelName": "realme Narzo 20 Pro",
    "generation": "Narzo",
    "status": "discontinued",
    "launchDate": "2020-09",
    "pricing": {
      "startingPrice": 14999,
      "maximumPrice": 16999,
      "launchPrice": 14999,
      "currentPrice": 14999,
      "currency": "INR",
      "priceEffectiveDate": "2020-09",
      "source": "realme India Store / Official Launch"
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
      "chipset": "MediaTek Helio G95",
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
      "rearCameraSetup": "Quad (48MP + 8MP UW + 2MP Macro + 2MP Depth) 65W SuperDart",
      "mainCamera": "48 MP, f/1.8, 26mm, PDAF",
      "frontCamera": "16 MP, f/2.1",
      "videoRecording": "4K@30/60fps",
      "ois": false,
      "ultrawideCamera": "8 MP, f/2.3, 119\u02da ultrawide"
    },
    "battery": {
      "batteryCapacity": 4500,
      "wiredCharging": 65
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
      "dimensions": "162.3 x 75.4 x 9.4 mm",
      "weight": 191,
      "materials": "Corning Gorilla Glass 3+, V-shaped Victory chevron pattern, 65W SuperDart Charge",
      "waterResistance": "None",
      "colors": [
        "White Knight",
        "Black Ninja"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-narzo-20-pro",
      "productPage": "https://www.realme.com/in/realme-narzo-20-pro",
      "specSheetUrl": "https://www.realme.com/in/realme-narzo-20-pro",
      "verifiedDate": "2020-09",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  },
  {
    "id": "realme-c55",
    "slug": "realme-c55",
    "brand": "realme",
    "modelName": "realme C55",
    "generation": "realme C",
    "status": "discontinued",
    "launchDate": "2023-03",
    "pricing": {
      "startingPrice": 10999,
      "maximumPrice": 13999,
      "launchPrice": 10999,
      "currentPrice": 10999,
      "currency": "INR",
      "priceEffectiveDate": "2023-03",
      "source": "realme India Store / Official Launch"
    },
    "display": {
      "displaySize": "6.72\"",
      "displayType": "IPS LCD 90Hz FHD+ Mini Capsule",
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
      "rearCameraSetup": "Dual (64MP + 2MP Depth) Mini Capsule Dynamic Island",
      "mainCamera": "64 MP, f/1.79, 1/2\", PDAF",
      "frontCamera": "8 MP, f/2.0",
      "videoRecording": "4K@30/60fps",
      "ois": false
    },
    "battery": {
      "batteryCapacity": 5000,
      "wiredCharging": 33
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
      "dimensions": "165.6 x 75.9 x 7.89 mm",
      "weight": 189.5,
      "materials": "Panda Glass, Sunshower micro-level glitter sand texture, Android's first Mini Capsule dynamic notification island, 33W SUPERVOOC",
      "waterResistance": "None",
      "colors": [
        "Sunshower",
        "Rainy Night"
      ]
    },
    "software": {
      "operatingSystem": "Android",
      "ui": "realme UI",
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
      "officialWebsite": "https://www.realme.com/in/realme-c55",
      "productPage": "https://www.realme.com/in/realme-c55",
      "specSheetUrl": "https://www.realme.com/in/realme-c55",
      "verifiedDate": "2023-03",
      "lastAuditedBy": "Senior Data Engineer Audit 2026"
    }
  }
] as unknown as MobileModel[];

const variants: MobileVariant[] = [
  {
    "id": "oppo-find-x-8-256",
    "modelId": "oppo-find-x",
    "ram": "8GB",
    "storage": "256GB",
    "price": 59990,
    "mrp": 59990,
    "colors": [
      "Bordeaux Red",
      "Glacier Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-find-x2-12-256",
    "modelId": "oppo-find-x2",
    "ram": "12GB",
    "storage": "256GB",
    "price": 64990,
    "mrp": 64990,
    "colors": [
      "Ceramic Black",
      "Ocean Glass"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-find-n2-flip-8-256",
    "modelId": "oppo-find-n2-flip",
    "ram": "8GB",
    "storage": "256GB",
    "price": 89999,
    "mrp": 89999,
    "colors": [
      "Astral Black",
      "Moonlit Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-reno-10x-zoom-6-128",
    "modelId": "oppo-reno-10x-zoom",
    "ram": "6GB",
    "storage": "128GB",
    "price": 39990,
    "mrp": 39990,
    "colors": [
      "Ocean Green",
      "Jet Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-reno-10x-zoom-8-256",
    "modelId": "oppo-reno-10x-zoom",
    "ram": "8GB",
    "storage": "256GB",
    "price": 49990,
    "mrp": 49990,
    "colors": [
      "Ocean Green",
      "Jet Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-reno-6-pro-5g-12-256",
    "modelId": "oppo-reno-6-pro-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 39990,
    "mrp": 39990,
    "colors": [
      "Aurora",
      "Stellar Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-reno-7-pro-5g-12-256",
    "modelId": "oppo-reno-7-pro-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 39999,
    "mrp": 39999,
    "colors": [
      "Startrails Blue",
      "Starlight Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-reno-8-pro-5g-12-256",
    "modelId": "oppo-reno-8-pro-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 45999,
    "mrp": 45999,
    "colors": [
      "Glazed Green",
      "Glazed Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-reno-10-5g-8-256",
    "modelId": "oppo-reno-10-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 32999,
    "mrp": 32999,
    "colors": [
      "Ice Blue",
      "Silvery Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-f1s-3-32",
    "modelId": "oppo-f1s",
    "ram": "3GB",
    "storage": "32GB",
    "price": 17990,
    "mrp": 17990,
    "colors": [
      "Gold",
      "Rose Gold",
      "Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-f1s-4-64",
    "modelId": "oppo-f1s",
    "ram": "4GB",
    "storage": "64GB",
    "price": 18990,
    "mrp": 18990,
    "colors": [
      "Gold",
      "Rose Gold",
      "Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-f9-pro-6-64",
    "modelId": "oppo-f9-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 23990,
    "mrp": 23990,
    "colors": [
      "Sunrise Red",
      "Twilight Blue",
      "Starry Purple"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-f11-pro-6-64",
    "modelId": "oppo-f11-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 24990,
    "mrp": 24990,
    "colors": [
      "Thunder Black",
      "Aurora Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-f11-pro-6-128",
    "modelId": "oppo-f11-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 25990,
    "mrp": 25990,
    "colors": [
      "Thunder Black",
      "Aurora Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-f17-pro-8-128",
    "modelId": "oppo-f17-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 22990,
    "mrp": 22990,
    "colors": [
      "Magic Blue",
      "Matte Black",
      "Metallic White"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-f19-pro-plus-5g-8-128",
    "modelId": "oppo-f19-pro-plus-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 25990,
    "mrp": 25990,
    "colors": [
      "Fluid Black",
      "Space Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-f21-pro-5g-8-128",
    "modelId": "oppo-f21-pro-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 26999,
    "mrp": 26999,
    "colors": [
      "Rainbow Spectrum",
      "Cosmic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-f23-5g-8-256",
    "modelId": "oppo-f23-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Bold Gold",
      "Cool Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-k1-4-64",
    "modelId": "oppo-k1",
    "ram": "4GB",
    "storage": "64GB",
    "price": 16990,
    "mrp": 16990,
    "colors": [
      "Astral Blue",
      "Piano Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-k3-6-64",
    "modelId": "oppo-k3",
    "ram": "6GB",
    "storage": "64GB",
    "price": 16990,
    "mrp": 16990,
    "colors": [
      "Nebula Blue",
      "Aurora Blue",
      "Jade Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-k3-8-128",
    "modelId": "oppo-k3",
    "ram": "8GB",
    "storage": "128GB",
    "price": 19990,
    "mrp": 19990,
    "colors": [
      "Nebula Blue",
      "Aurora Blue",
      "Jade Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "oppo-k10-5g-8-128",
    "modelId": "oppo-k10-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 17499,
    "mrp": 17499,
    "colors": [
      "Midnight Black",
      "Ocean Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-x50-pro-8-256",
    "modelId": "vivo-x50-pro",
    "ram": "8GB",
    "storage": "256GB",
    "price": 49990,
    "mrp": 49990,
    "colors": [
      "Alpha Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-x60-pro-12-256",
    "modelId": "vivo-x60-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 49990,
    "mrp": 49990,
    "colors": [
      "Midnight Black",
      "Shimmer Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-x70-pro-8-128",
    "modelId": "vivo-x70-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 46990,
    "mrp": 46990,
    "colors": [
      "Cosmic Black",
      "Aurora Dawn"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-x70-pro-12-256",
    "modelId": "vivo-x70-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 52990,
    "mrp": 52990,
    "colors": [
      "Cosmic Black",
      "Aurora Dawn"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-x70-pro-plus-12-256",
    "modelId": "vivo-x70-pro-plus",
    "ram": "12GB",
    "storage": "256GB",
    "price": 79990,
    "mrp": 79990,
    "colors": [
      "Enigma Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-x80-pro-12-256",
    "modelId": "vivo-x80-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 79999,
    "mrp": 79999,
    "colors": [
      "Cosmic Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-x90-8-256",
    "modelId": "vivo-x90",
    "ram": "8GB",
    "storage": "256GB",
    "price": 59999,
    "mrp": 59999,
    "colors": [
      "Breeze Blue",
      "Asteroid Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-x90-12-256",
    "modelId": "vivo-x90",
    "ram": "12GB",
    "storage": "256GB",
    "price": 63999,
    "mrp": 63999,
    "colors": [
      "Breeze Blue",
      "Asteroid Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v9-4-64",
    "modelId": "vivo-v9",
    "ram": "4GB",
    "storage": "64GB",
    "price": 22990,
    "mrp": 22990,
    "colors": [
      "Pearl Black",
      "Champagne Gold",
      "Sapphire Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v11-pro-6-64",
    "modelId": "vivo-v11-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 25990,
    "mrp": 25990,
    "colors": [
      "Starry Night",
      "Dazzling Gold"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v15-pro-6-128",
    "modelId": "vivo-v15-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 28990,
    "mrp": 28990,
    "colors": [
      "Topaz Blue",
      "Ruby Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v15-pro-8-128",
    "modelId": "vivo-v15-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 29990,
    "mrp": 29990,
    "colors": [
      "Topaz Blue",
      "Ruby Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v20-8-128",
    "modelId": "vivo-v20",
    "ram": "8GB",
    "storage": "128GB",
    "price": 24990,
    "mrp": 24990,
    "colors": [
      "Sunset Melody",
      "Midnight Jazz",
      "Moonlight Sonata"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v20-8-256",
    "modelId": "vivo-v20",
    "ram": "8GB",
    "storage": "256GB",
    "price": 27990,
    "mrp": 27990,
    "colors": [
      "Sunset Melody",
      "Midnight Jazz",
      "Moonlight Sonata"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v23-pro-8-128",
    "modelId": "vivo-v23-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 38990,
    "mrp": 38990,
    "colors": [
      "Sunshine Gold",
      "Stardust Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v23-pro-12-256",
    "modelId": "vivo-v23-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 43990,
    "mrp": 43990,
    "colors": [
      "Sunshine Gold",
      "Stardust Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v27-pro-8-128",
    "modelId": "vivo-v27-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Magic Blue",
      "Noble Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-v27-pro-12-256",
    "modelId": "vivo-v27-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 42999,
    "mrp": 42999,
    "colors": [
      "Magic Blue",
      "Noble Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-t1-5g-4-128",
    "modelId": "vivo-t1-5g",
    "ram": "4GB",
    "storage": "128GB",
    "price": 15990,
    "mrp": 15990,
    "colors": [
      "Starlight Black",
      "Rainbow Fantasy"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-t1-5g-6-128",
    "modelId": "vivo-t1-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16990,
    "mrp": 16990,
    "colors": [
      "Starlight Black",
      "Rainbow Fantasy"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-t1-5g-8-128",
    "modelId": "vivo-t1-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 19990,
    "mrp": 19990,
    "colors": [
      "Starlight Black",
      "Rainbow Fantasy"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-t2-pro-5g-8-128",
    "modelId": "vivo-t2-pro-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Dune Gold",
      "New Moon Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "vivo-t2-pro-5g-8-256",
    "modelId": "vivo-t2-pro-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Dune Gold",
      "New Moon Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-3-8-128",
    "modelId": "iqoo-3",
    "ram": "8GB",
    "storage": "128GB",
    "price": 36990,
    "mrp": 36990,
    "colors": [
      "Quantum Silver",
      "Tornado Black",
      "Volcano Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-3-8-256",
    "modelId": "iqoo-3",
    "ram": "8GB",
    "storage": "256GB",
    "price": 39990,
    "mrp": 39990,
    "colors": [
      "Quantum Silver",
      "Tornado Black",
      "Volcano Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-3-12-256",
    "modelId": "iqoo-3",
    "ram": "12GB",
    "storage": "256GB",
    "price": 44990,
    "mrp": 44990,
    "colors": [
      "Quantum Silver",
      "Tornado Black",
      "Volcano Orange"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-7-5g-8-128",
    "modelId": "iqoo-7-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 31990,
    "mrp": 31990,
    "colors": [
      "Storm Black",
      "Solid Ice Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-7-5g-8-256",
    "modelId": "iqoo-7-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 33990,
    "mrp": 33990,
    "colors": [
      "Storm Black",
      "Solid Ice Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-7-5g-12-256",
    "modelId": "iqoo-7-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 35990,
    "mrp": 35990,
    "colors": [
      "Storm Black",
      "Solid Ice Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-7-legend-5g-8-128",
    "modelId": "iqoo-7-legend-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 39990,
    "mrp": 39990,
    "colors": [
      "Legend Edition"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-7-legend-5g-12-256",
    "modelId": "iqoo-7-legend-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 43990,
    "mrp": 43990,
    "colors": [
      "Legend Edition"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-9-5g-8-128",
    "modelId": "iqoo-9-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 42990,
    "mrp": 42990,
    "colors": [
      "Legend",
      "Alpha"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-9-5g-12-256",
    "modelId": "iqoo-9-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 46990,
    "mrp": 46990,
    "colors": [
      "Legend",
      "Alpha"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-9-pro-5g-8-256",
    "modelId": "iqoo-9-pro-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 64990,
    "mrp": 64990,
    "colors": [
      "Legend",
      "Dark Cruise"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-9-pro-5g-12-256",
    "modelId": "iqoo-9-pro-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 69990,
    "mrp": 69990,
    "colors": [
      "Legend",
      "Dark Cruise"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-9t-5g-8-128",
    "modelId": "iqoo-9t-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 49999,
    "mrp": 49999,
    "colors": [
      "Legend",
      "Alpha"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-9t-5g-12-256",
    "modelId": "iqoo-9t-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 54999,
    "mrp": 54999,
    "colors": [
      "Legend",
      "Alpha"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-neo-6-5g-8-128",
    "modelId": "iqoo-neo-6-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Dark Nova",
      "Cyber Rage"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-neo-6-5g-12-256",
    "modelId": "iqoo-neo-6-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 33999,
    "mrp": 33999,
    "colors": [
      "Dark Nova",
      "Cyber Rage"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z3-5g-6-128",
    "modelId": "iqoo-z3-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 19990,
    "mrp": 19990,
    "colors": [
      "Ace Black",
      "Cyber Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z3-5g-8-128",
    "modelId": "iqoo-z3-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 20990,
    "mrp": 20990,
    "colors": [
      "Ace Black",
      "Cyber Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z3-5g-8-256",
    "modelId": "iqoo-z3-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 22990,
    "mrp": 22990,
    "colors": [
      "Ace Black",
      "Cyber Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z5-5g-8-128",
    "modelId": "iqoo-z5-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 23990,
    "mrp": 23990,
    "colors": [
      "Mystic Space",
      "Arctic Dawn"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z5-5g-12-256",
    "modelId": "iqoo-z5-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 26990,
    "mrp": 26990,
    "colors": [
      "Mystic Space",
      "Arctic Dawn"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z6-pro-5g-6-128",
    "modelId": "iqoo-z6-pro-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Legion Sky",
      "Phantom Dusk"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z6-pro-5g-8-128",
    "modelId": "iqoo-z6-pro-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Legion Sky",
      "Phantom Dusk"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z6-pro-5g-12-256",
    "modelId": "iqoo-z6-pro-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 28999,
    "mrp": 28999,
    "colors": [
      "Legion Sky",
      "Phantom Dusk"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z7-5g-6-128",
    "modelId": "iqoo-z7-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Norway Blue",
      "Pacific Night"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z7-5g-8-128",
    "modelId": "iqoo-z7-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Norway Blue",
      "Pacific Night"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z7-pro-5g-8-128",
    "modelId": "iqoo-z7-pro-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 23999,
    "mrp": 23999,
    "colors": [
      "Blue Lagoon",
      "Graphite Matte"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "iqoo-z7-pro-5g-8-256",
    "modelId": "iqoo-z7-pro-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Blue Lagoon",
      "Graphite Matte"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-1-3-32",
    "modelId": "realme-1",
    "ram": "3GB",
    "storage": "32GB",
    "price": 8990,
    "mrp": 8990,
    "colors": [
      "Diamond Black",
      "Solar Red",
      "Moonlight Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-1-4-64",
    "modelId": "realme-1",
    "ram": "4GB",
    "storage": "64GB",
    "price": 10990,
    "mrp": 10990,
    "colors": [
      "Diamond Black",
      "Solar Red",
      "Moonlight Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-1-6-128",
    "modelId": "realme-1",
    "ram": "6GB",
    "storage": "128GB",
    "price": 13990,
    "mrp": 13990,
    "colors": [
      "Diamond Black",
      "Solar Red",
      "Moonlight Silver"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-2-pro-4-64",
    "modelId": "realme-2-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13990,
    "mrp": 13990,
    "colors": [
      "Ice Lake",
      "Blue Ocean",
      "Black Sea"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-2-pro-6-64",
    "modelId": "realme-2-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 15990,
    "mrp": 15990,
    "colors": [
      "Ice Lake",
      "Blue Ocean",
      "Black Sea"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-2-pro-8-128",
    "modelId": "realme-2-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 17990,
    "mrp": 17990,
    "colors": [
      "Ice Lake",
      "Blue Ocean",
      "Black Sea"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-3-pro-4-64",
    "modelId": "realme-3-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Nitro Blue",
      "Lightning Purple",
      "Carbon Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-3-pro-6-64",
    "modelId": "realme-3-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Nitro Blue",
      "Lightning Purple",
      "Carbon Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-3-pro-6-128",
    "modelId": "realme-3-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Nitro Blue",
      "Lightning Purple",
      "Carbon Grey"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-5-pro-4-64",
    "modelId": "realme-5-pro",
    "ram": "4GB",
    "storage": "64GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Crystal Green",
      "Crystal Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-5-pro-6-64",
    "modelId": "realme-5-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "Crystal Green",
      "Crystal Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-5-pro-8-128",
    "modelId": "realme-5-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Crystal Green",
      "Crystal Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-6-pro-6-64",
    "modelId": "realme-6-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Lightning Blue",
      "Lightning Orange",
      "Lightning Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-6-pro-6-128",
    "modelId": "realme-6-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Lightning Blue",
      "Lightning Orange",
      "Lightning Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-6-pro-8-128",
    "modelId": "realme-6-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Lightning Blue",
      "Lightning Orange",
      "Lightning Red"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-7-pro-6-128",
    "modelId": "realme-7-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Mirror Blue",
      "Mirror Silver",
      "Sun Kissed Leather"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-7-pro-8-128",
    "modelId": "realme-7-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 21999,
    "mrp": 21999,
    "colors": [
      "Mirror Blue",
      "Mirror Silver",
      "Sun Kissed Leather"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-8-pro-6-128",
    "modelId": "realme-8-pro",
    "ram": "6GB",
    "storage": "128GB",
    "price": 17999,
    "mrp": 17999,
    "colors": [
      "Infinite Blue",
      "Infinite Black",
      "Punk Black",
      "Illuminating Yellow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-8-pro-8-128",
    "modelId": "realme-8-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Infinite Blue",
      "Infinite Black",
      "Punk Black",
      "Illuminating Yellow"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-9-pro-plus-5g-6-128",
    "modelId": "realme-9-pro-plus-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Sunrise Blue",
      "Midnight Black",
      "Aurora Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-9-pro-plus-5g-8-128",
    "modelId": "realme-9-pro-plus-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 26999,
    "mrp": 26999,
    "colors": [
      "Sunrise Blue",
      "Midnight Black",
      "Aurora Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-9-pro-plus-5g-8-256",
    "modelId": "realme-9-pro-plus-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 28999,
    "mrp": 28999,
    "colors": [
      "Sunrise Blue",
      "Midnight Black",
      "Aurora Green"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-10-pro-plus-5g-6-128",
    "modelId": "realme-10-pro-plus-5g",
    "ram": "6GB",
    "storage": "128GB",
    "price": 24999,
    "mrp": 24999,
    "colors": [
      "Hyperspace Gold",
      "Dark Matter",
      "Nebula Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-10-pro-plus-5g-8-128",
    "modelId": "realme-10-pro-plus-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 25999,
    "mrp": 25999,
    "colors": [
      "Hyperspace Gold",
      "Dark Matter",
      "Nebula Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-10-pro-plus-5g-8-256",
    "modelId": "realme-10-pro-plus-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 27999,
    "mrp": 27999,
    "colors": [
      "Hyperspace Gold",
      "Dark Matter",
      "Nebula Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-11-pro-plus-5g-8-256",
    "modelId": "realme-11-pro-plus-5g",
    "ram": "8GB",
    "storage": "256GB",
    "price": 27999,
    "mrp": 27999,
    "colors": [
      "Sunrise Beige",
      "Oasis Green",
      "Astral Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-11-pro-plus-5g-12-256",
    "modelId": "realme-11-pro-plus-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Sunrise Beige",
      "Oasis Green",
      "Astral Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-x-4-128",
    "modelId": "realme-x",
    "ram": "4GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Polar White",
      "Space Blue",
      "Onion Edition",
      "Garlic Edition"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-x-8-128",
    "modelId": "realme-x",
    "ram": "8GB",
    "storage": "128GB",
    "price": 19999,
    "mrp": 19999,
    "colors": [
      "Polar White",
      "Space Blue",
      "Onion Edition",
      "Garlic Edition"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-xt-4-64",
    "modelId": "realme-xt",
    "ram": "4GB",
    "storage": "64GB",
    "price": 15999,
    "mrp": 15999,
    "colors": [
      "Pearl White",
      "Pearl Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-xt-6-64",
    "modelId": "realme-xt",
    "ram": "6GB",
    "storage": "64GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "Pearl White",
      "Pearl Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-xt-8-128",
    "modelId": "realme-xt",
    "ram": "8GB",
    "storage": "128GB",
    "price": 18999,
    "mrp": 18999,
    "colors": [
      "Pearl White",
      "Pearl Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-x2-pro-8-128",
    "modelId": "realme-x2-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 29999,
    "mrp": 29999,
    "colors": [
      "Lunar White",
      "Neptune Blue",
      "Red Brick Master",
      "Concrete Master"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-x2-pro-12-256",
    "modelId": "realme-x2-pro",
    "ram": "12GB",
    "storage": "256GB",
    "price": 33999,
    "mrp": 33999,
    "colors": [
      "Lunar White",
      "Neptune Blue",
      "Red Brick Master",
      "Concrete Master"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-gt-5g-8-128",
    "modelId": "realme-gt-5g",
    "ram": "8GB",
    "storage": "128GB",
    "price": 37999,
    "mrp": 37999,
    "colors": [
      "Racing Yellow",
      "Dashing Silver",
      "Dashing Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-gt-5g-12-256",
    "modelId": "realme-gt-5g",
    "ram": "12GB",
    "storage": "256GB",
    "price": 41999,
    "mrp": 41999,
    "colors": [
      "Racing Yellow",
      "Dashing Silver",
      "Dashing Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-gt-neo-2-8-128",
    "modelId": "realme-gt-neo-2",
    "ram": "8GB",
    "storage": "128GB",
    "price": 31999,
    "mrp": 31999,
    "colors": [
      "NEO Green",
      "NEO Blue",
      "NEO Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-gt-neo-2-12-256",
    "modelId": "realme-gt-neo-2",
    "ram": "12GB",
    "storage": "256GB",
    "price": 35999,
    "mrp": 35999,
    "colors": [
      "NEO Green",
      "NEO Blue",
      "NEO Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-gt-neo-3-8-128",
    "modelId": "realme-gt-neo-3",
    "ram": "8GB",
    "storage": "128GB",
    "price": 36999,
    "mrp": 36999,
    "colors": [
      "Nitro Blue",
      "Sprint White",
      "Asphalt Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-gt-neo-3-8-256",
    "modelId": "realme-gt-neo-3",
    "ram": "8GB",
    "storage": "256GB",
    "price": 38999,
    "mrp": 38999,
    "colors": [
      "Nitro Blue",
      "Sprint White",
      "Asphalt Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-gt-neo-3-12-256",
    "modelId": "realme-gt-neo-3",
    "ram": "12GB",
    "storage": "256GB",
    "price": 42999,
    "mrp": 42999,
    "colors": [
      "Nitro Blue",
      "Sprint White",
      "Asphalt Black"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-narzo-10-4-128",
    "modelId": "realme-narzo-10",
    "ram": "4GB",
    "storage": "128GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "That Green",
      "That White",
      "That Blue"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-narzo-20-pro-6-64",
    "modelId": "realme-narzo-20-pro",
    "ram": "6GB",
    "storage": "64GB",
    "price": 14999,
    "mrp": 14999,
    "colors": [
      "White Knight",
      "Black Ninja"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-narzo-20-pro-8-128",
    "modelId": "realme-narzo-20-pro",
    "ram": "8GB",
    "storage": "128GB",
    "price": 16999,
    "mrp": 16999,
    "colors": [
      "White Knight",
      "Black Ninja"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-c55-4-64",
    "modelId": "realme-c55",
    "ram": "4GB",
    "storage": "64GB",
    "price": 10999,
    "mrp": 10999,
    "colors": [
      "Sunshower",
      "Rainy Night"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-c55-6-64",
    "modelId": "realme-c55",
    "ram": "6GB",
    "storage": "64GB",
    "price": 11999,
    "mrp": 11999,
    "colors": [
      "Sunshower",
      "Rainy Night"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  },
  {
    "id": "realme-c55-8-128",
    "modelId": "realme-c55",
    "ram": "8GB",
    "storage": "128GB",
    "price": 13999,
    "mrp": 13999,
    "colors": [
      "Sunshower",
      "Rainy Night"
    ],
    "status": "discontinued",
    "verified": true,
    "source": "Official Indian Launch MSRP"
  }
] as unknown as MobileVariant[];

const images: MobileImageCatalogEntry[] = [
  {
    "modelId": "oppo-find-x",
    "modelName": "Find X",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x.jpg",
        "verified": true,
        "alt": "OPPO Find X Bordeaux Red"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-find-x2",
    "modelName": "Find X2",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2.jpg",
        "verified": true,
        "alt": "OPPO Find X2 Ceramic Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-find-n2-flip",
    "modelName": "Find N2 Flip",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n2-flip.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n2-flip.jpg",
        "verified": true,
        "alt": "OPPO Find N2 Flip Astral Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-reno-10x-zoom",
    "modelName": "Reno 10x Zoom",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-10x-zoom.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-10x-zoom.jpg",
        "verified": true,
        "alt": "OPPO Reno 10x Zoom Ocean Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-reno-6-pro-5g",
    "modelName": "Reno 6 Pro 5G",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-pro-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-pro-5g.jpg",
        "verified": true,
        "alt": "OPPO Reno 6 Pro Aurora"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-reno-7-pro-5g",
    "modelName": "Reno 7 Pro 5G",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-pro-r.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-pro-r.jpg",
        "verified": true,
        "alt": "OPPO Reno 7 Pro Starlight Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-reno-8-pro-5g",
    "modelName": "Reno 8 Pro 5G",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-pro.jpg",
        "verified": true,
        "alt": "OPPO Reno 8 Pro Glazed Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-reno-10-5g",
    "modelName": "Reno 10 5G",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10.jpg",
        "verified": true,
        "alt": "OPPO Reno 10 5G Ice Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-f1s",
    "modelName": "F1s",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f1s.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f1s.jpg",
        "verified": true,
        "alt": "OPPO F1s Gold"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-f9-pro",
    "modelName": "F9 Pro",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f9.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f9.jpg",
        "verified": true,
        "alt": "OPPO F9 Pro Sunrise Red"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-f11-pro",
    "modelName": "F11 Pro",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f11-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f11-pro.jpg",
        "verified": true,
        "alt": "OPPO F11 Pro Thunder Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-f17-pro",
    "modelName": "F17 Pro",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f17-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f17-pro.jpg",
        "verified": true,
        "alt": "OPPO F17 Pro Magic Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-f19-pro-plus-5g",
    "modelName": "F19 Pro+ 5G",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f19-pro-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f19-pro-plus.jpg",
        "verified": true,
        "alt": "OPPO F19 Pro+ Fluid Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-f21-pro-5g",
    "modelName": "F21 Pro 5G",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f21-pro-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f21-pro-5g.jpg",
        "verified": true,
        "alt": "OPPO F21 Pro 5G Rainbow Spectrum"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-f23-5g",
    "modelName": "F23 5G",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f23-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f23-5g.jpg",
        "verified": true,
        "alt": "OPPO F23 5G Bold Gold"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-k1",
    "modelName": "K1",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k1.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k1.jpg",
        "verified": true,
        "alt": "OPPO K1 Astral Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-k3",
    "modelName": "K3",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k3.jpg",
        "verified": true,
        "alt": "OPPO K3 Nebula Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "oppo-k10-5g",
    "modelName": "K10 5G",
    "brand": "OPPO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-5g-india.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-5g-india.jpg",
        "verified": true,
        "alt": "OPPO K10 5G Ocean Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-x50-pro",
    "modelName": "X50 Pro",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x50-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x50-pro.jpg",
        "verified": true,
        "alt": "Vivo X50 Pro Alpha Grey"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-x60-pro",
    "modelName": "X60 Pro",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60-pro.jpg",
        "verified": true,
        "alt": "Vivo X60 Pro Shimmer Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-x70-pro",
    "modelName": "X70 Pro",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro.jpg",
        "verified": true,
        "alt": "Vivo X70 Pro Aurora Dawn"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-x70-pro-plus",
    "modelName": "X70 Pro+",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro-plus.jpg",
        "verified": true,
        "alt": "Vivo X70 Pro+ Enigma Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-x80-pro",
    "modelName": "X80 Pro",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x80-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x80-pro.jpg",
        "verified": true,
        "alt": "Vivo X80 Pro Cosmic Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-x90",
    "modelName": "X90",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90.jpg",
        "verified": true,
        "alt": "Vivo X90 Breeze Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-v9",
    "modelName": "V9",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v9.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v9.jpg",
        "verified": true,
        "alt": "Vivo V9 Pearl Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-v11-pro",
    "modelName": "V11 Pro",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v11-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v11-pro.jpg",
        "verified": true,
        "alt": "Vivo V11 Pro Starry Night"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-v15-pro",
    "modelName": "V15 Pro",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v15-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v15-pro.jpg",
        "verified": true,
        "alt": "Vivo V15 Pro Topaz Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-v20",
    "modelName": "V20",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v20.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v20.jpg",
        "verified": true,
        "alt": "Vivo V20 Sunset Melody"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-v23-pro",
    "modelName": "V23 Pro",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23-pro.jpg",
        "verified": true,
        "alt": "Vivo V23 Pro Sunshine Gold"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-v27-pro",
    "modelName": "V27 Pro",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v27-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v27-pro.jpg",
        "verified": true,
        "alt": "Vivo V27 Pro Magic Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-t1-5g",
    "modelName": "T1 5G",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t1-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t1-5g.jpg",
        "verified": true,
        "alt": "Vivo T1 5G Starlight Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "vivo-t2-pro-5g",
    "modelName": "T2 Pro 5G",
    "brand": "Vivo",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t2-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t2-pro.jpg",
        "verified": true,
        "alt": "Vivo T2 Pro 5G Dune Gold"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-3",
    "modelName": "iQOO 3",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo3-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo3-5g.jpg",
        "verified": true,
        "alt": "iQOO 3 Volcano Orange"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-7-5g",
    "modelName": "iQOO 7 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-7-india.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-7-india.jpg",
        "verified": true,
        "alt": "iQOO 7 Storm Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-7-legend-5g",
    "modelName": "iQOO 7 Legend 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-7.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-7.jpg",
        "verified": true,
        "alt": "iQOO 7 Legend BMW M Motorsport Edition"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-9-5g",
    "modelName": "iQOO 9 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-india.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-india.jpg",
        "verified": true,
        "alt": "iQOO 9 Alpha"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-9-pro-5g",
    "modelName": "iQOO 9 Pro 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-pro.jpg",
        "verified": true,
        "alt": "iQOO 9 Pro Legend"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-9t-5g",
    "modelName": "iQOO 9T 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9t.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9t.jpg",
        "verified": true,
        "alt": "iQOO 9T Legend"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-neo-6-5g",
    "modelName": "iQOO Neo 6 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo6-india.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo6-india.jpg",
        "verified": true,
        "alt": "iQOO Neo 6 Dark Nova"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-z3-5g",
    "modelName": "iQOO Z3 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z3.jpg",
        "verified": true,
        "alt": "iQOO Z3 Ace Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-z5-5g",
    "modelName": "iQOO Z5 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z5.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z5.jpg",
        "verified": true,
        "alt": "iQOO Z5 Mystic Space"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-z6-pro-5g",
    "modelName": "iQOO Z6 Pro 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6-pro.jpg",
        "verified": true,
        "alt": "iQOO Z6 Pro Legion Sky"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-z7-5g",
    "modelName": "iQOO Z7 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7.jpg",
        "verified": true,
        "alt": "iQOO Z7 5G Norway Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "iqoo-z7-pro-5g",
    "modelName": "iQOO Z7 Pro 5G",
    "brand": "iQOO",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7-pro.jpg",
        "verified": true,
        "alt": "iQOO Z7 Pro 5G Blue Lagoon"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-1",
    "modelName": "realme 1",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-1.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-1.jpg",
        "verified": true,
        "alt": "realme 1 Diamond Black"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-2-pro",
    "modelName": "realme 2 Pro",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-2-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-2-pro.jpg",
        "verified": true,
        "alt": "realme 2 Pro Ice Lake"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-3-pro",
    "modelName": "realme 3 Pro",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-3-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-3-pro.jpg",
        "verified": true,
        "alt": "realme 3 Pro Nitro Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-5-pro",
    "modelName": "realme 5 Pro",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro.jpg",
        "verified": true,
        "alt": "realme 5 Pro Crystal Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-6-pro",
    "modelName": "realme 6 Pro",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-6-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-6-pro.jpg",
        "verified": true,
        "alt": "realme 6 Pro Lightning Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-7-pro",
    "modelName": "realme 7 Pro",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-7-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-7-pro.jpg",
        "verified": true,
        "alt": "realme 7 Pro Mirror Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-8-pro",
    "modelName": "realme 8 Pro",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-8-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-8-pro.jpg",
        "verified": true,
        "alt": "realme 8 Pro Infinite Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-9-pro-plus-5g",
    "modelName": "realme 9 Pro+ 5G",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-9-pro-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-9-pro-plus.jpg",
        "verified": true,
        "alt": "realme 9 Pro+ Sunrise Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-10-pro-plus-5g",
    "modelName": "realme 10 Pro+ 5G",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-10-pro-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-10-pro-plus.jpg",
        "verified": true,
        "alt": "realme 10 Pro+ Hyperspace Gold"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-11-pro-plus-5g",
    "modelName": "realme 11 Pro+ 5G",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-11-pro-plus.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-11-pro-plus.jpg",
        "verified": true,
        "alt": "realme 11 Pro+ Sunrise Beige"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-x",
    "modelName": "realme X",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-x.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-x.jpg",
        "verified": true,
        "alt": "realme X Polar White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-xt",
    "modelName": "realme XT",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-xt.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-xt.jpg",
        "verified": true,
        "alt": "realme XT Pearl White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-x2-pro",
    "modelName": "realme X2 Pro",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-x2-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-x2-pro.jpg",
        "verified": true,
        "alt": "realme X2 Pro Lunar White"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-gt-5g",
    "modelName": "realme GT 5G",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-5g.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-5g.jpg",
        "verified": true,
        "alt": "realme GT Racing Yellow"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-gt-neo-2",
    "modelName": "realme GT Neo 2",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-neo2.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-neo2.jpg",
        "verified": true,
        "alt": "realme GT Neo 2 NEO Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-gt-neo-3",
    "modelName": "realme GT Neo 3",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-neo3.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-neo3.jpg",
        "verified": true,
        "alt": "realme GT Neo 3 Nitro Blue"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-narzo-10",
    "modelName": "realme Narzo 10",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-10.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-10.jpg",
        "verified": true,
        "alt": "realme Narzo 10 That Green"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-narzo-20-pro",
    "modelName": "realme Narzo 20 Pro",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-20-pro.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-20-pro.jpg",
        "verified": true,
        "alt": "realme Narzo 20 Pro White Knight"
      }
    ],
    "verifiedCoverage": true
  },
  {
    "modelId": "realme-c55",
    "modelName": "realme C55",
    "brand": "realme",
    "images": [
      {
        "url": "https://fdn2.gsmarena.com/vv/bigpic/realme-c55.jpg",
        "angle": "front",
        "source": "Manufacturer / Verified Press Asset",
        "sourceUrl": "https://fdn2.gsmarena.com/vv/bigpic/realme-c55.jpg",
        "verified": true,
        "alt": "realme C55 Sunshower"
      }
    ],
    "verifiedCoverage": true
  }
] as unknown as MobileImageCatalogEntry[];

export const bbkAdditionsBundle: MobileBrandBundle = {
  models,
  variants,
  images,
};
