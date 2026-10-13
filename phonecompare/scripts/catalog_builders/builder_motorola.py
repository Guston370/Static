import os
from common import make_model, make_variants, make_image_entry, write_bundle_ts

def build_motorola_additions():
    models = []
    variants = []
    images = []

    motorola_data = [
        # ════════ Historical Moto G Series ════════
        ("motorola-moto-g", "Moto G (1st Gen)", "Moto G", "discontinued", "2013-11",
         12499, 13999, "Qualcomm Snapdragon 400", '4.5"', "IPS LCD", "720 x 1280", 60,
         ["1GB"], ["8GB", "16GB"], "Single 5MP", "5 MP, f/2.4, AF", "1.3 MP", 2070, 5,
         False, "Android", "Stock Android", "Android 4.3", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g.jpg", "Motorola Moto G Black",
         None, None, 0, "129.9 x 65.9 x 11.6 mm", 143, "Corning Gorilla Glass 3, plastic body",
         ["Black"], [("1GB", "8GB", 12499), ("1GB", "16GB", 13999)]),

        ("motorola-moto-g-2nd-gen", "Moto G (2nd Gen)", "Moto G", "discontinued", "2014-09",
         12999, 12999, "Qualcomm Snapdragon 400", '5.0"', "IPS LCD", "720 x 1280", 60,
         ["1GB"], ["16GB"], "Single 8MP with Stereo Speakers", "8 MP, f/2.0, AF", "2 MP", 2070, 5,
         False, "Android", "Stock Android", "Android 4.4.4", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g-2nd-gen.jpg", "Motorola Moto G 2nd Gen Black",
         None, None, 0, "141.5 x 70.7 x 11.0 mm", 149, "Corning Gorilla Glass 3, plastic body",
         ["Black", "White"], [("1GB", "16GB", 12999)]),

        ("motorola-moto-g-3rd-gen", "Moto G (3rd Gen)", "Moto G", "discontinued", "2015-07",
         11999, 12999, "Qualcomm Snapdragon 410", '5.0"', "IPS LCD", "720 x 1280", 60,
         ["1GB", "2GB"], ["8GB", "16GB"], "Single 13MP Dual-LED", "13 MP, f/2.0, AF", "5 MP, f/2.2", 2470, 10,
         False, "Android", "Stock Android", "Android 5.1.1", "IPX7",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g-3rd-gen.jpg", "Motorola Moto G 3rd Gen Black",
         None, None, 0, "142.1 x 72.4 x 11.6 mm", 155, "Corning Gorilla Glass 3, IPX7 water resistance, plastic body",
         ["Black", "White"], [("1GB", "8GB", 11999), ("2GB", "16GB", 12999)]),

        ("motorola-moto-g4-plus", "Moto G4 Plus", "Moto G4", "discontinued", "2016-05",
         13499, 14999, "Qualcomm Snapdragon 617", '5.5"', "IPS LCD FHD", "1080 x 1920", 60,
         ["2GB", "3GB"], ["16GB", "32GB"], "Single 16MP Laser/PDAF", "16 MP, f/2.0, laser AF, PDAF", "5 MP, f/2.2", 3000, 15,
         False, "Android", "Stock Android", "Android 6.0.1", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g4-plus.jpg", "Motorola Moto G4 Plus Black",
         None, None, 0, "153.0 x 76.6 x 9.8 mm", 155, "Corning Gorilla Glass 3, fingerprint sensor, plastic body",
         ["Black", "White"], [("2GB", "16GB", 13499), ("3GB", "32GB", 14999)]),

        ("motorola-moto-g5-plus", "Moto G5 Plus", "Moto G5", "discontinued", "2017-03",
         14999, 16999, "Qualcomm Snapdragon 625", '5.2"', "IPS LCD FHD", "1080 x 1920", 60,
         ["3GB", "4GB"], ["16GB", "32GB"], "Single 12MP Dual Pixel f/1.7", "12 MP, f/1.7, Dual Pixel PDAF", "5 MP, f/2.2", 3000, 15,
         False, "Android", "Stock Android", "Android 7.0", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g5-plus.jpg", "Motorola Moto G5 Plus Lunar Grey",
         None, None, 0, "150.2 x 74.0 x 7.7 mm", 155, "Corning Gorilla Glass 3, aluminum back, plastic frame",
         ["Lunar Grey", "Fine Gold"], [("3GB", "16GB", 14999), ("4GB", "32GB", 16999)]),

        ("motorola-moto-g5s-plus", "Moto G5S Plus", "Moto G5", "discontinued", "2017-08",
         15999, 15999, "Qualcomm Snapdragon 625", '5.5"', "IPS LCD FHD", "1080 x 1920", 60,
         ["4GB"], ["64GB"], "Dual (13MP + 13MP Depth)", "Dual 13 MP, f/2.0, AF", "8 MP, f/2.0 with LED flash", 3000, 15,
         False, "Android", "Stock Android", "Android 7.1", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g5s-plus.jpg", "Motorola Moto G5S Plus Lunar Gray",
         None, None, 0, "153.5 x 76.2 x 8.0 mm", 168, "Corning Gorilla Glass 3, all-metal unibody",
         ["Lunar Gray", "Blush Gold"], [("4GB", "64GB", 15999)]),

        ("motorola-moto-g6", "Moto G6", "Moto G6", "discontinued", "2018-04",
         13999, 15999, "Qualcomm Snapdragon 450", '5.7"', "IPS LCD 18:9 Max Vision", "1080 x 2160", 60,
         ["3GB", "4GB"], ["32GB", "64GB"], "Dual (12MP + 5MP Depth)", "12 MP, f/1.8, PDAF", "16 MP with LED flash", 3000, 15,
         False, "Android", "Stock Android", "Android 8.0", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g6-r.jpg", "Motorola Moto G6 Deep Indigo",
         None, None, 0, "153.8 x 72.3 x 8.3 mm", 167, "Corning Gorilla Glass 3 front/back, aluminum frame",
         ["Deep Indigo", "Silver", "Blush"], [("3GB", "32GB", 13999), ("4GB", "64GB", 15999)]),

        ("motorola-moto-g7-power", "Moto G7 Power", "Moto G7", "discontinued", "2019-02",
         13999, 13999, "Qualcomm Snapdragon 632", '6.2"', "LTPS IPS LCD Max Vision", "720 x 1570", 60,
         ["4GB"], ["64GB"], "Single 12MP PDAF, 5000 mAh Battery", "12 MP, f/2.0, 1.25µm, PDAF", "8 MP, f/2.2", 5000, 15,
         False, "Android", "Stock Android", "Android 9.0", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g7-power.jpg", "Motorola Moto G7 Power Marine Blue",
         None, None, 0, "159.4 x 76.0 x 9.3 mm", 193, "Corning Gorilla Glass 3, plastic polymer glass back",
         ["Marine Blue"], [("4GB", "64GB", 13999)]),

        ("motorola-moto-g8-plus", "Moto G8 Plus", "Moto G8", "discontinued", "2019-10",
         13999, 13999, "Qualcomm Snapdragon 665", '6.3"', "LTPS IPS LCD Max Vision FHD+", "1080 x 2280", 60,
         ["4GB"], ["64GB"], "Triple (48MP Quad Pixel + 16MP Action Cam + 5MP Depth)", "48 MP, f/1.7, Laser/PDAF", "25 MP, f/2.0", 4000, 15,
         False, "Android", "Stock Android", "Android 9.0", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g8-plus.jpg", "Motorola Moto G8 Plus Cosmic Blue",
         "16 MP, f/2.2, 14mm dedicated action cam (ultrawide)", None, 0, "158.4 x 75.8 x 9.1 mm", 188, "Glass front, plastic body, stereo speakers with Dolby Audio",
         ["Cosmic Blue", "Crystal Pink"], [("4GB", "64GB", 13999)]),

        ("motorola-moto-g40-fusion", "Moto G40 Fusion", "Moto G40", "discontinued", "2021-04",
         13999, 15999, "Qualcomm Snapdragon 732G", '6.8"', "IPS LCD 120Hz HDR10", "1080 x 2460", 120,
         ["4GB", "6GB"], ["64GB", "128GB"], "Triple (64MP + 8MP UW + 2MP Depth), 6000 mAh Battery", "64 MP, f/1.7, 26mm, PDAF", "16 MP, f/2.2", 6000, 20,
         False, "Android", "My UX", "Android 11", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g40-fusion.jpg", "Motorola Moto G40 Fusion Dynamic Gray",
         "8 MP, f/2.2, 118˚ ultrawide", None, 0, "169.6 x 75.9 x 9.8 mm", 225, "Glass front, plastic back, 6000 mAh battery",
         ["Dynamic Gray", "Frosted Champagne"], [("4GB", "64GB", 13999), ("6GB", "128GB", 15999)]),

        ("motorola-moto-g60", "Moto G60", "Moto G60", "discontinued", "2021-04",
         17999, 17999, "Qualcomm Snapdragon 732G", '6.8"', "IPS LCD 120Hz HDR10", "1080 x 2460", 120,
         ["6GB"], ["128GB"], "Triple (108MP + 8MP UW + 2MP Depth), 6000 mAh Battery", "108 MP, f/1.9, PDAF", "32 MP, f/2.2", 6000, 20,
         False, "Android", "My UX", "Android 11", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g60.jpg", "Motorola Moto G60 Dynamic Gray",
         "8 MP, f/2.2, 118˚ ultrawide", None, 0, "169.6 x 75.9 x 9.8 mm", 225, "Glass front, plastic back, 108MP sensor",
         ["Dynamic Gray", "Frosted Champagne"], [("6GB", "128GB", 17999)]),

        ("motorola-moto-g52", "Moto G52", "Moto G52", "discontinued", "2022-04",
         14499, 16499, "Qualcomm Snapdragon 680 4G", '6.6"', "pOLED 90Hz FHD+", "1080 x 2400", 90,
         ["4GB", "6GB"], ["64GB", "128GB"], "Triple (50MP + 8MP UW + 2MP Macro)", "50 MP, f/1.8, 1/2.76\", PDAF", "16 MP, f/2.5", 5000, 30,
         False, "Android", "My UX", "Android 12", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g52.jpg", "Motorola Moto G52 Charcoal Grey",
         "8 MP, f/2.2, 118˚ ultrawide", None, 0, "160.1 x 74.5 x 8.0 mm", 169, "Glass front, plastic back, stereo speakers with Dolby Atmos",
         ["Charcoal Grey", "Porcelain White"], [("4GB", "64GB", 14499), ("6GB", "128GB", 16499)]),

        ("motorola-moto-g72", "Moto G72", "Moto G72", "discontinued", "2022-10",
         18999, 18999, "MediaTek Helio G99 (6nm)", '6.6"', "pOLED 120Hz 10-bit HDR10+", "1080 x 2400", 120,
         ["6GB"], ["128GB"], "Triple (108MP + 8MP UW + 2MP Macro)", "108 MP, f/1.7, 26mm, PDAF", "16 MP, f/2.5", 5000, 33,
         False, "Android", "My UX", "Android 12", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g72.jpg", "Motorola Moto G72 Meteorite Black",
         "8 MP, f/2.2, 118˚ ultrawide", None, 0, "160.5 x 74.4 x 7.9 mm", 166, "Glass front, plastic back, in-display fingerprint, stereo speakers",
         ["Meteorite Black", "Polar Blue"], [("6GB", "128GB", 18999)]),

        ("motorola-moto-g34-5g", "Moto G34 5G", "Moto G34", "active", "2024-01",
         10999, 11999, "Qualcomm Snapdragon 695 5G", '6.5"', "IPS LCD 120Hz", "720 x 1600", 120,
         ["4GB", "8GB"], ["128GB"], "Dual (50MP + 2MP Macro)", "50 MP, f/1.8, PDAF", "16 MP, f/2.4", 5000, 18,
         True, "Android", "My UX", "Android 14", "Water-repellent design",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g34.jpg", "Motorola Moto G34 5G Ocean Green",
         None, None, 0, "162.7 x 74.6 x 8.0 mm", 179, "Glass front, vegan leather / plastic back, stereo speakers",
         ["Ocean Green", "Charcoal Black", "Ice Blue"], [("4GB", "128GB", 10999), ("8GB", "128GB", 11999)]),

        # ════════ Moto E Series ════════
        ("motorola-moto-e", "Moto E (1st Gen)", "Moto E", "discontinued", "2014-05",
         6999, 6999, "Qualcomm Snapdragon 200", '4.3"', "IPS LCD", "540 x 960", 60,
         ["1GB"], ["4GB"], "Single 5MP", "5 MP", "None", 1980, 5,
         False, "Android", "Stock Android", "Android 4.4.2", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e.jpg", "Motorola Moto E Black",
         None, None, 0, "124.8 x 64.8 x 12.3 mm", 142, "Corning Gorilla Glass 3, plastic body",
         ["Black", "White"], [("1GB", "4GB", 6999)]),

        ("motorola-moto-e-2nd-gen", "Moto E (2nd Gen 4G)", "Moto E", "discontinued", "2015-02",
         6999, 7999, "Qualcomm Snapdragon 410 LTE", '4.5"', "IPS LCD", "540 x 960", 60,
         ["1GB"], ["8GB"], "Single 5MP AF", "5 MP, f/2.2, AF", "VGA", 2390, 5,
         False, "Android", "Stock Android", "Android 5.0.2", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e-2nd-gen.jpg", "Motorola Moto E 2nd Gen Black",
         None, None, 0, "129.9 x 66.8 x 12.3 mm", 145, "Corning Gorilla Glass 3, plastic body",
         ["Black", "White"], [("1GB", "8GB", 6999)]),

        ("motorola-moto-e13", "Moto E13", "Moto E13", "discontinued", "2023-02",
         6999, 8999, "Unisoc T606 (12nm)", '6.5"', "IPS LCD", "720 x 1600", 60,
         ["2GB", "4GB", "8GB"], ["64GB", "128GB"], "Single 13MP PDAF", "13 MP, f/2.2, PDAF", "5 MP, f/2.2", 5000, 10,
         False, "Android", "Android 13 (Go edition)", "Android 13", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e13.jpg", "Motorola Moto E13 Aurora Green",
         None, None, 0, "164.2 x 75.0 x 8.5 mm", 179.5, "Glass front, plastic back, Dolby Atmos audio",
         ["Cosmic Black", "Aurora Green", "Creamy White"],
         [("2GB", "64GB", 6999), ("4GB", "64GB", 7999), ("8GB", "128GB", 8999)]),

        # ════════ Edge Historical Series ════════
        ("motorola-edge-20", "Motorola Edge 20", "Edge 20", "discontinued", "2021-08",
         29999, 29999, "Qualcomm Snapdragon 778G 5G", '6.7"', "OLED 144Hz 1B colors HDR10+", "1080 x 2400", 144,
         ["8GB"], ["128GB"], "Triple (108MP + 8MP 3x Tele OIS + 16MP UW)", "108 MP, f/1.9, 1/1.52\", PDAF", "32 MP, f/2.3", 4000, 30,
         True, "Android", "My UX", "Android 11", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-20.jpg", "Motorola Edge 20 Frosted Grey",
         "16 MP, f/2.2, 119˚ ultrawide", "8 MP, f/2.4, 3x Telephoto, OIS", 0, "163.0 x 76.0 x 6.99 mm", 163, "Gorilla Glass 3, aluminum alloy frame, 6.99mm ultra-thin",
         ["Frosted Grey", "Frosted White"], [("8GB", "128GB", 29999)]),

        ("motorola-edge-20-pro", "Motorola Edge 20 Pro", "Edge 20", "discontinued", "2021-10",
         36999, 36999, "Qualcomm Snapdragon 870 5G", '6.7"', "OLED 144Hz 1B colors HDR10+", "1080 x 2400", 144,
         ["8GB"], ["128GB"], "Triple (108MP + 8MP 5x Periscope Tele OIS + 16MP UW)", "108 MP, f/1.9, PDAF", "32 MP, f/2.3", 4500, 30,
         True, "Android", "My UX", "Android 11", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-20-pro.jpg", "Motorola Edge 20 Pro Midnight Sky",
         "16 MP, f/2.2, 119˚ ultrawide", "8 MP, f/3.4, 126mm 5x Periscope Telephoto, OIS", 0, "163.0 x 76.0 x 8.0 mm", 190, "Gorilla Glass 5 front/back, aluminum frame",
         ["Midnight Sky", "Iridescent White"], [("8GB", "128GB", 36999)]),

        ("motorola-edge-30", "Motorola Edge 30", "Edge 30", "discontinued", "2022-05",
         27999, 29999, "Qualcomm Snapdragon 778G+ 5G", '6.5"', "AMOLED 144Hz 1B colors HDR10+", "1080 x 2400", 144,
         ["6GB", "8GB"], ["128GB"], "Triple (50MP OIS + 50MP UW + 2MP Depth)", "50 MP, f/1.8, omnidirectional PDAF, OIS", "32 MP, f/2.3", 4020, 33,
         True, "Android", "My UX", "Android 12", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-30.jpg", "Motorola Edge 30 Meteor Grey",
         "50 MP, f/2.2, 118˚ ultrawide", None, 0, "159.4 x 74.2 x 6.79 mm", 155, "Gorilla Glass 3, 6.79mm ultra-slim, 155g light, stereo speakers",
         ["Meteor Grey", "Aurora Green"], [("6GB", "128GB", 27999), ("8GB", "128GB", 29999)]),

        # ════════ Razr Clamshell Foldables Historical ════════
        ("motorola-razr-2019", "Motorola Razr (2019)", "Razr", "discontinued", "2019-11",
         124999, 124999, "Qualcomm Snapdragon 710", '6.2" Foldable P-OLED + 2.7" Quick View', "Foldable P-OLED", "876 x 2142", 60,
         ["6GB"], ["128GB"], "Single 16MP Dual Pixel EIS", "16 MP, f/1.7, Dual Pixel PDAF, Laser AF", "5 MP, f/2.0", 2510, 15,
         False, "Android", "Stock Android", "Android 9.0", "Splash-proof nano-coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-2019.jpg", "Motorola Razr 2019 Noir Black",
         None, None, 0, "172.0 x 72.0 x 6.9 mm (unfolded)", 205, "Stainless steel frame, zero-gap hinge, Gorilla Glass 3",
         ["Noir Black"], [("6GB", "128GB", 124999)]),

        ("motorola-razr-40", "Motorola Razr 40", "Razr 40", "active", "2023-06",
         59999, 59999, "Qualcomm Snapdragon 7 Gen 1 (4nm)", '6.9" Foldable LTPO AMOLED 144Hz + 1.5" OLED', "Foldable LTPO AMOLED", "1080 x 2640", 144,
         ["8GB"], ["256GB"], "Dual (64MP OIS + 13MP UW)", "64 MP, f/1.7, PDAF, Laser AF, OIS", "32 MP, f/2.4", 4200, 30,
         True, "Android", "My UX", "Android 13", "Water-repellent design",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-40.jpg", "Motorola Razr 40 Sage Green",
         "13 MP, f/2.2, 120˚ ultrawide", None, 5, "170.8 x 74.0 x 7.35 mm (unfolded)", 188.6, "7000-series aluminum frame, vegan leather back",
         ["Sage Green", "Vanilla Cream", "Summer Lilac"], [("8GB", "256GB", 59999)]),

        # ════════ Moto X, Z, C, One Historical ════════
        ("motorola-moto-x", "Moto X (1st Gen)", "Moto X", "discontinued", "2013-08",
         23999, 25999, "Motorola X8 Mobile Computing System", '4.7"', "AMOLED", "720 x 1280", 60,
         ["2GB"], ["16GB", "32GB"], "Single 10MP Clear Pixel", "10 MP, f/2.4, AF", "2 MP", 2200, 10,
         False, "Android", "Stock Android", "Android 4.2.2", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-x.jpg", "Motorola Moto X Woven Black",
         None, None, 0, "129.3 x 65.3 x 10.4 mm", 130, "Corning Gorilla Glass 3, curved ergonomic back, Touchless Control",
         ["Black", "White", "Teak Wood", "Walnut"], [("2GB", "16GB", 23999), ("2GB", "32GB", 25999)]),

        ("motorola-moto-x4", "Moto X4", "Moto X", "discontinued", "2017-09",
         20999, 24999, "Qualcomm Snapdragon 630", '5.2"', "LTPS IPS LCD FHD", "1080 x 1920", 60,
         ["3GB", "4GB", "6GB"], ["32GB", "64GB"], "Dual (12MP Dual Pixel + 8MP UW)", "12 MP, f/2.0, Dual Pixel PDAF", "16 MP, f/2.0 with selfie flash", 3000, 15,
         False, "Android", "Stock Android", "Android 7.1", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-x4.jpg", "Motorola Moto X4 Super Black",
         "8 MP, f/2.2, 120˚ ultrawide", None, 0, "148.4 x 73.4 x 8.0 mm", 163, "Gorilla Glass 3 front/back, anodized aluminum frame, IP68 water resistance",
         ["Super Black", "Sterling Blue"],
         [("3GB", "32GB", 20999), ("4GB", "64GB", 22999), ("6GB", "64GB", 24999)]),

        ("motorola-moto-z", "Moto Z", "Moto Z", "discontinued", "2016-06",
         39999, 39999, "Qualcomm Snapdragon 820", '5.5"', "AMOLED Quad HD", "1440 x 2560", 60,
         ["4GB"], ["64GB"], "Single 13MP OIS with Moto Mods Support", "13 MP, f/1.8, OIS, Laser AF", "5 MP, f/2.2 with LED flash", 2600, 15,
         False, "Android", "Stock Android", "Android 6.0.1", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-z.jpg", "Motorola Moto Z Black / Lunar Grey",
         None, None, 0, "153.3 x 75.3 x 5.19 mm", 136, "Military aircraft-grade aluminum and stainless steel, 5.19mm ultra-thin, Moto Mods 16-pin connector",
         ["Black / Lunar Grey", "Black / Rose Gold", "Fine Gold"], [("4GB", "64GB", 39999)]),

        ("motorola-moto-z-play", "Moto Z Play", "Moto Z", "discontinued", "2016-08",
         24999, 24999, "Qualcomm Snapdragon 625", '5.5"', "Super AMOLED FHD", "1080 x 1920", 60,
         ["3GB"], ["32GB"], "Single 16MP Dual AF with Moto Mods", "16 MP, f/2.0, Laser/PDAF", "5 MP, f/2.2 with LED flash", 3510, 15,
         False, "Android", "Stock Android", "Android 6.0.1", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-z-play.jpg", "Motorola Moto Z Play Black",
         None, None, 0, "156.4 x 76.4 x 7.0 mm", 165, "Glass front/back, aluminum frame, Moto Mods connector, legendary 50-hour battery",
         ["Black", "White / Fine Gold"], [("3GB", "32GB", 24999)]),

        ("motorola-one-power", "Motorola One Power", "Motorola One", "discontinued", "2018-09",
         15999, 15999, "Qualcomm Snapdragon 636", '6.2"', "LTPS IPS LCD Max Vision FHD+", "1080 x 2246", 60,
         ["4GB"], ["64GB"], "Dual (16MP + 5MP Depth), 5000 mAh Battery", "16 MP, f/1.8, PDAF", "12 MP, f/2.0 with LED flash", 5000, 18,
         False, "Android", "Android One", "Android 8.1", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-one-power.jpg", "Motorola One Power Black",
         None, None, 0, "156.0 x 76.0 x 8.98 mm", 205, "Glass front, aluminum back, plastic frame, Android One program",
         ["Black"], [("4GB", "64GB", 15999)]),

        ("motorola-one-fusion-plus", "Motorola One Fusion+", "Motorola One", "discontinued", "2020-06",
         16999, 16999, "Qualcomm Snapdragon 730G", '6.5"', "IPS LCD Total Vision HDR10 FHD+", "1080 x 2340", 60,
         ["6GB"], ["128GB"], "Quad (64MP + 8MP UW + 5MP Macro + 2MP Depth) with Pop-up Selfie", "64 MP, f/1.8, PDAF", "Motorized pop-up 16 MP", 5000, 18,
         False, "Android", "My UX", "Android 10", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/motorola-one-fusion-plus.jpg", "Motorola One Fusion+ Moonlight White",
         "8 MP, f/2.2, 118˚ ultrawide", None, 0, "162.9 x 76.4 x 9.6 mm", 210, "Glass front, plastic back & frame, notch-free display with pop-up camera",
         ["Moonlight White", "Twilight Blue"], [("6GB", "128GB", 16999)]),
    ]

    for item in motorola_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="Motorola", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.motorola.in/smartphones-{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "Motorola", img_url, alt))

    out_file = os.path.join(os.path.dirname(__file__), "..", "mobile_data", "additions_motorola.ts")
    write_bundle_ts(out_file, "motorolaAdditionsBundle", models, variants, images)

if __name__ == "__main__":
    build_motorola_additions()
