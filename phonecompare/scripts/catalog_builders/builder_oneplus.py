import os
from common import make_model, make_variants, make_image_entry, write_bundle_ts

def build_oneplus_additions():
    models = []
    variants = []
    images = []

    oneplus_data = [
        # OnePlus One
        ("oneplus-one", "OnePlus One", "OnePlus 1", "discontinued", "2014-04",
         21999, 21999, "Qualcomm Snapdragon 801", '5.5"', "IPS LCD", "1080 x 1920", 60,
         ["3GB"], ["16GB", "64GB"], "Single 13MP", "13 MP, f/2.0, AF", "5 MP, f/2.0", 3100, 10,
         False, "Android", "CyanogenOS / OxygenOS", "Android 4.4.2", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-one.jpg", "OnePlus One Sandstone Black",
         None, None, 0, "152.9 x 75.9 x 8.9 mm", 162, "Corning Gorilla Glass 3, magnesium frame",
         ["Silk White", "Sandstone Black"],
         [("3GB", "16GB", 18999), ("3GB", "64GB", 21999)]),

        # OnePlus 2
        ("oneplus-2", "OnePlus 2", "OnePlus 2", "discontinued", "2015-07",
         24999, 24999, "Qualcomm Snapdragon 810", '5.5"', "IPS-NEO LCD", "1080 x 1920", 60,
         ["3GB", "4GB"], ["16GB", "64GB"], "Single 13MP OIS", "13 MP, f/2.0, OIS, laser AF", "5 MP, f/2.4", 3300, 10,
         False, "Android", "OxygenOS", "Android 5.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-two.jpg", "OnePlus 2 Sandstone Black",
         None, None, 0, "151.8 x 74.9 x 9.9 mm", 175, "Gorilla Glass 3, magnesium alloy frame",
         ["Sandstone Black"],
         [("3GB", "16GB", 22999), ("4GB", "64GB", 24999)]),

        # OnePlus X
        ("oneplus-x", "OnePlus X", "OnePlus X", "discontinued", "2015-10",
         16999, 16999, "Qualcomm Snapdragon 801", '5.0"', "AMOLED", "1080 x 1920", 60,
         ["3GB"], ["16GB"], "Single 13MP", "13 MP, f/2.2, PDAF", "8 MP, f/2.4", 2525, 10,
         False, "Android", "OxygenOS", "Android 5.1.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-x.jpg", "OnePlus X Onyx",
         None, None, 0, "140.0 x 69.0 x 6.9 mm", 138, "Gorilla Glass 3 front/back, metal frame",
         ["Onyx", "Champagne"],
         [("3GB", "16GB", 16999)]),

        # OnePlus 3
        ("oneplus-3", "OnePlus 3", "OnePlus 3", "discontinued", "2016-06",
         27999, 27999, "Qualcomm Snapdragon 820", '5.5"', "Optic AMOLED", "1080 x 1920", 60,
         ["6GB"], ["64GB"], "Single 16MP OIS", "16 MP, f/2.0, OIS, PDAF", "8 MP, f/2.0", 3000, 20,
         False, "Android", "OxygenOS", "Android 6.0.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-3.jpg", "OnePlus 3 Graphite",
         None, None, 0, "152.7 x 74.7 x 7.4 mm", 158, "Gorilla Glass 4, anodized aluminum body",
         ["Graphite", "Soft Gold"],
         [("6GB", "64GB", 27999)]),

        # OnePlus 3T
        ("oneplus-3t", "OnePlus 3T", "OnePlus 3", "discontinued", "2016-11",
         29999, 34999, "Qualcomm Snapdragon 821", '5.5"', "Optic AMOLED", "1080 x 1920", 60,
         ["6GB"], ["64GB", "128GB"], "Single 16MP OIS", "16 MP, f/2.0, OIS, PDAF", "16 MP, f/2.0", 3400, 20,
         False, "Android", "OxygenOS", "Android 6.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-3t.jpg", "OnePlus 3T Gunmetal",
         None, None, 0, "152.7 x 74.7 x 7.4 mm", 158, "Gorilla Glass 4, anodized aluminum body",
         ["Gunmetal", "Soft Gold", "Midnight Black"],
         [("6GB", "64GB", 29999), ("6GB", "128GB", 34999)]),

        # OnePlus 5
        ("oneplus-5", "OnePlus 5", "OnePlus 5", "discontinued", "2017-06",
         32999, 37999, "Qualcomm Snapdragon 835", '5.5"', "Optic AMOLED", "1080 x 1920", 60,
         ["6GB", "8GB"], ["64GB", "128GB"], "Dual (16MP + 20MP Tele)", "16 MP, f/1.7, 24mm, EIS", "16 MP, f/2.0", 3300, 20,
         False, "Android", "OxygenOS", "Android 7.1.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-5.jpg", "OnePlus 5 Midnight Black",
         None, "20 MP, f/2.6, 1.6x Telephoto", 0, "154.2 x 74.1 x 7.3 mm", 153, "Gorilla Glass 5, aluminum unibody",
         ["Midnight Black", "Slate Gray", "Soft Gold"],
         [("6GB", "64GB", 32999), ("8GB", "128GB", 37999)]),

        # OnePlus 5T
        ("oneplus-5t", "OnePlus 5T", "OnePlus 5", "discontinued", "2017-11",
         32999, 37999, "Qualcomm Snapdragon 835", '6.01"', "Optic AMOLED", "1080 x 2160", 60,
         ["6GB", "8GB"], ["64GB", "128GB"], "Dual (16MP + 20MP Low Light)", "16 MP, f/1.7, 27mm, EIS", "16 MP, f/2.0", 3300, 20,
         False, "Android", "OxygenOS", "Android 7.1.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-5t.jpg", "OnePlus 5T Midnight Black",
         None, None, 0, "156.1 x 75.0 x 7.3 mm", 162, "Gorilla Glass 5, aluminum unibody",
         ["Midnight Black", "Lava Red", "Sandstone White"],
         [("6GB", "64GB", 32999), ("8GB", "128GB", 37999)]),

        # OnePlus 6
        ("oneplus-6", "OnePlus 6", "OnePlus 6", "discontinued", "2018-05",
         34999, 43999, "Qualcomm Snapdragon 845", '6.28"', "Optic AMOLED", "1080 x 2280", 60,
         ["6GB", "8GB"], ["64GB", "128GB", "256GB"], "Dual (16MP OIS + 20MP)", "16 MP, f/1.7, 25mm, OIS, PDAF", "16 MP, f/2.0", 3300, 20,
         False, "Android", "OxygenOS", "Android 8.1", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-6.jpg", "OnePlus 6 Mirror Black",
         None, None, 0, "155.7 x 75.4 x 7.8 mm", 177, "Gorilla Glass 5 front/back, aluminum frame",
         ["Mirror Black", "Midnight Black", "Silk White"],
         [("6GB", "64GB", 34999), ("8GB", "128GB", 39999), ("8GB", "256GB", 43999)]),

        # OnePlus 6T
        ("oneplus-6t", "OnePlus 6T", "OnePlus 6", "discontinued", "2018-10",
         37999, 45999, "Qualcomm Snapdragon 845", '6.41"', "Optic AMOLED", "1080 x 2340", 60,
         ["6GB", "8GB"], ["128GB", "256GB"], "Dual (16MP OIS + 20MP)", "16 MP, f/1.7, 25mm, OIS, PDAF", "16 MP, f/2.0", 3700, 20,
         False, "Android", "OxygenOS", "Android 9.0", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-6t-midnight-black.jpg", "OnePlus 6T Mirror Black",
         None, None, 0, "157.5 x 74.8 x 8.2 mm", 185, "Gorilla Glass 6 front, Gorilla Glass 5 back",
         ["Mirror Black", "Midnight Black", "Thunder Purple"],
         [("6GB", "128GB", 37999), ("8GB", "128GB", 41999), ("8GB", "256GB", 45999)]),

        # OnePlus 7
        ("oneplus-7", "OnePlus 7", "OnePlus 7", "discontinued", "2019-05",
         32999, 37999, "Qualcomm Snapdragon 855", '6.41"', "Optic AMOLED", "1080 x 2340", 60,
         ["6GB", "8GB"], ["128GB", "256GB"], "Dual (48MP OIS + 5MP Depth)", "48 MP, f/1.7, 28mm, OIS, PDAF", "16 MP, f/2.0", 3700, 20,
         False, "Android", "OxygenOS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7.jpg", "OnePlus 7 Mirror Gray",
         None, None, 0, "157.7 x 74.8 x 8.2 mm", 182, "Gorilla Glass 6 front, glass back, aluminum frame",
         ["Mirror Gray", "Red"],
         [("6GB", "128GB", 32999), ("8GB", "256GB", 37999)]),

        # OnePlus 7 Pro
        ("oneplus-7-pro", "OnePlus 7 Pro", "OnePlus 7", "discontinued", "2019-05",
         48999, 57999, "Qualcomm Snapdragon 855", '6.67"', "Fluid AMOLED 90Hz HDR10+", "1440 x 3120", 90,
         ["6GB", "8GB", "12GB"], ["128GB", "256GB"], "Triple (48MP OIS + 8MP 3x Tele + 16MP UW)", "48 MP, f/1.6, 26mm, OIS, Laser/PDAF", "Motorized pop-up 16 MP", 4000, 30,
         False, "Android", "OxygenOS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7-pro-r.jpg", "OnePlus 7 Pro Nebula Blue",
         "16 MP, f/2.2, 14mm ultrawide", "8 MP, f/2.4, 78mm 3x Telephoto, OIS", 0, "162.6 x 75.9 x 8.8 mm", 206, "Gorilla Glass 5 front/back, aluminum frame",
         ["Nebula Blue", "Mirror Gray", "Almond"],
         [("6GB", "128GB", 48999), ("8GB", "256GB", 52999), ("12GB", "256GB", 57999)]),

        # OnePlus 7T
        ("oneplus-7t", "OnePlus 7T", "OnePlus 7", "discontinued", "2019-09",
         37999, 39999, "Qualcomm Snapdragon 855+", '6.55"', "Fluid AMOLED 90Hz HDR10+", "1080 x 2400", 90,
         ["8GB"], ["128GB", "256GB"], "Triple (48MP OIS + 12MP 2x Tele + 16MP UW)", "48 MP, f/1.6, 26mm, OIS, PDAF", "16 MP, f/2.0", 3800, 30,
         False, "Android", "OxygenOS", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7t-1.jpg", "OnePlus 7T Glacier Blue",
         "16 MP, f/2.2, 17mm ultrawide", "12 MP, f/2.2, 51mm 2x Telephoto", 0, "160.9 x 74.4 x 8.1 mm", 190, "Gorilla Glass 5 front/back, aluminum frame",
         ["Frosted Silver", "Glacier Blue"],
         [("8GB", "128GB", 37999), ("8GB", "256GB", 39999)]),

        # OnePlus 7T Pro
        ("oneplus-7t-pro", "OnePlus 7T Pro", "OnePlus 7", "discontinued", "2019-10",
         53999, 58999, "Qualcomm Snapdragon 855+", '6.67"', "Fluid AMOLED 90Hz HDR10+", "1440 x 3120", 90,
         ["8GB", "12GB"], ["256GB"], "Triple (48MP OIS + 8MP 3x Tele + 16MP UW)", "48 MP, f/1.6, 26mm, OIS, Laser/PDAF", "Motorized pop-up 16 MP", 4085, 30,
         False, "Android", "OxygenOS", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-7t-pro.jpg", "OnePlus 7T Pro Haze Blue",
         "16 MP, f/2.2, 13mm ultrawide", "8 MP, f/2.4, 78mm 3x Telephoto, OIS", 0, "162.6 x 75.9 x 8.8 mm", 206, "Gorilla Glass 5 front/back, aluminum frame",
         ["Haze Blue", "McLaren Edition"],
         [("8GB", "256GB", 53999), ("12GB", "256GB", 58999)]),

        # OnePlus 8
        ("oneplus-8", "OnePlus 8", "OnePlus 8", "discontinued", "2020-04",
         41999, 49999, "Qualcomm Snapdragon 865 5G", '6.55"', "Fluid AMOLED 90Hz HDR10+", "1080 x 2400", 90,
         ["6GB", "8GB", "12GB"], ["128GB", "256GB"], "Triple (48MP OIS + 16MP UW + 2MP Macro)", "48 MP, f/1.8, 25mm, OIS, PDAF", "16 MP, f/2.0", 4300, 30,
         True, "Android", "OxygenOS", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8.jpg", "OnePlus 8 Glacial Green",
         "16 MP, f/2.2, 14mm ultrawide", None, 0, "160.2 x 72.9 x 8.0 mm", 180, "Gorilla Glass 5 front/back, aluminum frame",
         ["Onyx Black", "Glacial Green", "Interstellar Glow"],
         [("6GB", "128GB", 41999), ("8GB", "128GB", 44999), ("12GB", "256GB", 49999)]),

        # OnePlus 8 Pro
        ("oneplus-8-pro", "OnePlus 8 Pro", "OnePlus 8", "discontinued", "2020-04",
         54999, 59999, "Qualcomm Snapdragon 865 5G", '6.78"', "Fluid AMOLED 120Hz QHD+ HDR10+", "1440 x 3168", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Quad (48MP OIS + 8MP 3x Tele + 48MP UW + 5MP Color)", "48 MP, f/1.8, 25mm, OIS, omnidirectional PDAF", "16 MP, f/2.5", 4510, 30,
         True, "Android", "OxygenOS", "Android 10", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8-pro.jpg", "OnePlus 8 Pro Glacial Green",
         "48 MP, f/2.2, 14mm ultrawide", "8 MP, f/2.4, 3x Telephoto, OIS", 30, "165.3 x 74.4 x 8.5 mm", 199, "Gorilla Glass 5 front/back, aluminum frame",
         ["Onyx Black", "Glacial Green", "Ultramarine Blue"],
         [("8GB", "128GB", 54999), ("12GB", "256GB", 59999)]),

        # OnePlus 8T
        ("oneplus-8t", "OnePlus 8T", "OnePlus 8", "discontinued", "2020-10",
         42999, 45999, "Qualcomm Snapdragon 865 5G", '6.55"', "Fluid AMOLED 120Hz HDR10+", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Quad (48MP OIS + 16MP UW + 5MP Macro + 2MP Mono)", "48 MP, f/1.7, 26mm, OIS, PDAF", "16 MP, f/2.4", 4500, 65,
         True, "Android", "OxygenOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-8t-5g.jpg", "OnePlus 8T Aquamarine Green",
         "16 MP, f/2.2, 14mm ultrawide", None, 0, "160.7 x 74.1 x 8.4 mm", 188, "Gorilla Glass 5 front/back, aluminum frame",
         ["Aquamarine Green", "Lunar Silver"],
         [("8GB", "128GB", 42999), ("12GB", "256GB", 45999)]),

        # OnePlus 9
        ("oneplus-9", "OnePlus 9", "OnePlus 9", "discontinued", "2021-03",
         49999, 54999, "Qualcomm Snapdragon 888 5G", '6.55"', "Fluid AMOLED 120Hz HDR10+", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple Hasselblad (48MP + 50MP UW + 2MP Mono)", "48 MP, f/1.8, 23mm, omnidirectional PDAF", "16 MP, f/2.4", 4500, 65,
         True, "Android", "OxygenOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-.jpg", "OnePlus 9 Winter Mist",
         "50 MP, f/2.2, 14mm ultrawide", None, 15, "160.0 x 74.2 x 8.7 mm", 192, "Gorilla Glass 5 front/back, plastic frame",
         ["Winter Mist", "Arctic Sky", "Astral Black"],
         [("8GB", "128GB", 49999), ("12GB", "256GB", 54999)]),

        # OnePlus 9 Pro
        ("oneplus-9-pro", "OnePlus 9 Pro", "OnePlus 9", "discontinued", "2021-03",
         64999, 69999, "Qualcomm Snapdragon 888 5G", '6.7"', "LTPO Fluid2 AMOLED 120Hz QHD+", "1440 x 3216", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Quad Hasselblad (48MP OIS + 8MP 3.3x Tele + 50MP UW + 2MP)", "48 MP, f/1.8, 23mm, OIS, omnidirectional PDAF, Laser AF", "16 MP, f/2.4", 4500, 65,
         True, "Android", "OxygenOS", "Android 11", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg", "OnePlus 9 Pro Morning Mist",
         "50 MP, f/2.2, 14mm ultrawide", "8 MP, f/2.4, 77mm 3.3x Telephoto, OIS", 50, "163.2 x 73.6 x 8.7 mm", 197, "Gorilla Glass 5 front/back, aluminum frame",
         ["Morning Mist", "Pine Green", "Stellar Black"],
         [("8GB", "128GB", 64999), ("12GB", "256GB", 69999)]),

        # OnePlus 9R
        ("oneplus-9r", "OnePlus 9R", "OnePlus 9", "discontinued", "2021-03",
         39999, 43999, "Qualcomm Snapdragon 870 5G", '6.55"', "Fluid AMOLED 120Hz HDR10+", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Quad (48MP OIS + 16MP UW + 5MP Macro + 2MP Mono)", "48 MP, f/1.7, 26mm, OIS, PDAF", "16 MP, f/2.4", 4500, 65,
         True, "Android", "OxygenOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9r.jpg", "OnePlus 9R Carbon Black",
         "16 MP, f/2.2, 14mm ultrawide", None, 0, "161.0 x 74.1 x 8.4 mm", 189, "Gorilla Glass 5 front/back, aluminum frame",
         ["Carbon Black", "Lake Blue"],
         [("8GB", "128GB", 39999), ("12GB", "256GB", 43999)]),

        # OnePlus 9RT
        ("oneplus-9rt", "OnePlus 9RT", "OnePlus 9", "discontinued", "2021-10",
         42999, 46999, "Qualcomm Snapdragon 888 5G", '6.62"', "AMOLED 120Hz HDR10+", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (50MP OIS + 16MP UW + 2MP Macro)", "50 MP, f/1.8, 24mm, OIS, PDAF", "16 MP, f/2.4", 4500, 65,
         True, "Android", "OxygenOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9rt-5g.jpg", "OnePlus 9RT Hacker Black",
         "16 MP, f/2.2, 14mm ultrawide", None, 0, "162.2 x 74.6 x 8.3 mm", 198, "Gorilla Glass 5 front/back, aluminum frame",
         ["Hacker Black", "Nano Silver"],
         [("8GB", "128GB", 42999), ("12GB", "256GB", 46999)]),

        # OnePlus Nord (Original)
        ("oneplus-nord", "OnePlus Nord", "Nord", "discontinued", "2020-07",
         24999, 29999, "Qualcomm Snapdragon 765G 5G", '6.44"', "Fluid AMOLED 90Hz HDR10+", "1080 x 2400", 90,
         ["6GB", "8GB", "12GB"], ["64GB", "128GB", "256GB"], "Quad (48MP OIS + 8MP UW + 5MP Depth + 2MP Macro)", "48 MP, f/1.8, 26mm, OIS, PDAF", "Dual 32 MP + 8 MP Ultrawide", 4115, 30,
         True, "Android", "OxygenOS", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-.jpg", "OnePlus Nord Blue Marble",
         "8 MP, f/2.3, 119˚ ultrawide", None, 0, "158.3 x 73.3 x 8.2 mm", 184, "Gorilla Glass 5 front/back, plastic frame",
         ["Blue Marble", "Gray Onyx", "Gray Ash"],
         [("6GB", "64GB", 24999), ("8GB", "128GB", 27999), ("12GB", "256GB", 29999)]),

        # OnePlus Nord 2 5G
        ("oneplus-nord-2-5g", "OnePlus Nord 2 5G", "Nord 2", "discontinued", "2021-07",
         27999, 34999, "MediaTek Dimensity 1200-AI", '6.43"', "Fluid AMOLED 90Hz HDR10+", "1080 x 2400", 90,
         ["6GB", "8GB", "12GB"], ["128GB", "256GB"], "Triple (50MP OIS + 8MP UW + 2MP Mono)", "50 MP, f/1.9, 24mm, OIS, PDAF", "32 MP, f/2.5", 4500, 65,
         True, "Android", "OxygenOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-2-5g.jpg", "OnePlus Nord 2 Gray Sierra",
         "8 MP, f/2.3, 119˚ ultrawide", None, 0, "158.9 x 73.2 x 8.3 mm", 189, "Gorilla Glass 5 front/back, plastic frame",
         ["Gray Sierra", "Blue Haze", "Green Wood"],
         [("6GB", "128GB", 27999), ("8GB", "128GB", 29999), ("12GB", "256GB", 34999)]),

        # OnePlus Nord 2T 5G
        ("oneplus-nord-2t-5g", "OnePlus Nord 2T 5G", "Nord 2", "discontinued", "2022-05",
         28999, 33999, "MediaTek Dimensity 1300", '6.43"', "AMOLED 90Hz HDR10+", "1080 x 2400", 90,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (50MP OIS + 8MP UW + 2MP Mono)", "50 MP, f/1.9, 24mm, OIS, PDAF", "32 MP, f/2.4", 4500, 80,
         True, "Android", "OxygenOS", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-2t.jpg", "OnePlus Nord 2T Jade Fog",
         "8 MP, f/2.2, 120˚ ultrawide", None, 0, "159.1 x 73.2 x 8.2 mm", 190, "Gorilla Glass 5 front, plastic frame",
         ["Jade Fog", "Gray Shadow"],
         [("8GB", "128GB", 28999), ("12GB", "256GB", 33999)]),

        # OnePlus Nord CE 5G
        ("oneplus-nord-ce-5g", "OnePlus Nord CE 5G", "Nord CE", "discontinued", "2021-06",
         22999, 27999, "Qualcomm Snapdragon 750G 5G", '6.43"', "Fluid AMOLED 90Hz", "1080 x 2400", 90,
         ["6GB", "8GB", "12GB"], ["128GB", "256GB"], "Triple (64MP + 8MP UW + 2MP Mono)", "64 MP, f/1.8, 26mm, PDAF", "16 MP, f/2.5", 4500, 30,
         True, "Android", "OxygenOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-5g.jpg", "OnePlus Nord CE Blue Void",
         "8 MP, f/2.3, 119˚ ultrawide", None, 0, "159.2 x 73.5 x 7.9 mm", 170, "Glass front, plastic back & frame",
         ["Blue Void", "Charcoal Ink", "Silver Ray"],
         [("6GB", "128GB", 22999), ("8GB", "128GB", 24999), ("12GB", "256GB", 27999)]),

        # OnePlus Nord CE 2 5G
        ("oneplus-nord-ce-2-5g", "OnePlus Nord CE 2 5G", "Nord CE", "discontinued", "2022-02",
         23999, 24999, "MediaTek Dimensity 900", '6.43"', "AMOLED 90Hz HDR10+", "1080 x 2400", 90,
         ["6GB", "8GB"], ["128GB"], "Triple (64MP + 8MP UW + 2MP Macro)", "64 MP, f/1.7, 26mm, PDAF", "16 MP, f/2.4", 4500, 65,
         True, "Android", "OxygenOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-2-5g.jpg", "OnePlus Nord CE 2 Bahama Blue",
         "8 MP, f/2.2, 119˚ ultrawide", None, 0, "160.6 x 73.2 x 7.8 mm", 173, "Gorilla Glass 5 front, plastic back",
         ["Bahama Blue", "Gray Mirror"],
         [("6GB", "128GB", 23999), ("8GB", "128GB", 24999)]),

        # OnePlus Nord CE 2 Lite 5G
        ("oneplus-nord-ce-2-lite-5g", "OnePlus Nord CE 2 Lite 5G", "Nord CE", "discontinued", "2022-04",
         19999, 21999, "Qualcomm Snapdragon 695 5G", '6.59"', "IPS LCD 120Hz", "1080 x 2412", 120,
         ["6GB", "8GB"], ["128GB"], "Triple (64MP + 2MP Macro + 2MP Depth)", "64 MP, f/1.7, 26mm, PDAF", "16 MP, f/2.0", 5000, 33,
         True, "Android", "OxygenOS", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-2-lite-5g.jpg", "OnePlus Nord CE 2 Lite Black Dusk",
         None, None, 0, "164.3 x 75.6 x 8.5 mm", 195, "Glass front, plastic back & frame",
         ["Black Dusk", "Blue Tide"],
         [("6GB", "128GB", 19999), ("8GB", "128GB", 21999)]),
    ]

    for item in oneplus_data:
        (
            m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr,
            rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip,
            img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs
        ) = item

        model = make_model(
            model_id=m_id,
            brand="OnePlus",
            model_name=m_name,
            generation=gen,
            status=status,
            launch_date=l_date,
            starting_price=sp,
            max_price=mp,
            chipset=chip,
            display_size=d_sz,
            display_type=d_typ,
            resolution=res,
            refresh_rate=rr,
            ram_options=rams,
            storage_options=storages,
            rear_camera_setup=r_cam,
            main_camera=m_cam,
            front_camera=f_cam,
            battery_capacity=bat,
            wired_charging=chg,
            has_5g=h5g,
            os=os_name,
            ui=ui,
            launch_os=l_os,
            water_resistance=ip,
            image_url=img_url,
            alt_text=alt,
            ultrawide_camera=uw,
            telephoto_camera=tele,
            wireless_charging=wchg,
            dimensions=dims,
            weight=wt,
            materials=mat,
            colors=clrs,
            official_source=f"https://www.oneplus.in/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "OnePlus", img_url, alt))

    out_file = os.path.join(os.path.dirname(__file__), "..", "mobile_data", "additions_oneplus.ts")
    write_bundle_ts(out_file, "oneplusAdditionsBundle", models, variants, images)

if __name__ == "__main__":
    build_oneplus_additions()
