import os
from common import make_model, make_variants, make_image_entry, write_bundle_ts

def build_others():
    models = []
    variants = []
    images = []

    # ══════════════════════════════════════════════════════════════
    # 1. ASUS
    # ══════════════════════════════════════════════════════════════
    asus_data = [
        ("asus-rog-phone", "ROG Phone (1st Gen)", "ROG Phone", "discontinued", "2018-10",
         69999, 69999, "Qualcomm Snapdragon 845 Speed-Binned (2.96 GHz)", '6.0"', "AMOLED 90Hz 1ms HDR", "1080 x 2160", 90,
         ["8GB"], ["128GB"], "Dual (12MP Sony IMX363 + 8MP 120˚ UW) AirTriggers", "12 MP, f/1.8, 24mm, Dual Pixel PDAF, 4-axis OIS", "8 MP, f/2.0", 4000, 30,
         False, "Android", "ROG Gaming UI", "Android 8.1", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-.jpg", "ASUS ROG Phone Black",
         "8 MP, 12mm 120˚ ultrawide", None, 0, "158.8 x 76.2 x 8.3 mm", 200, "Gorilla Glass 6 front, Gorilla Glass 5 back, 3D vapor-chamber cooling, dual front-facing stereo speakers, ultrasonic AirTriggers",
         ["Black"], [("8GB", "128GB", 69999)]),

        ("asus-rog-phone-ii", "ROG Phone II", "ROG Phone", "discontinued", "2019-09",
         37999, 59999, "Qualcomm Snapdragon 855+ (2.96 GHz)", '6.59"', "AMOLED 120Hz 1ms 10-bit HDR10", "1080 x 2340", 120,
         ["8GB", "12GB"], ["128GB", "512GB"], "Dual (48MP Sony IMX586 + 13MP 125˚ UW), 6000 mAh Monster Battery", "48 MP, f/1.8, 26mm, PDAF, Laser AF", "24 MP, f/2.2", 6000, 30,
         False, "Android", "ROG UI", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-2.jpg", "ASUS ROG Phone II Matte Black",
         "13 MP, f/2.4, 11mm 125˚ ultrawide", None, 0, "171.0 x 77.6 x 9.5 mm", 240, "Gorilla Glass 6 front/back, RGB illuminated rear ROG logo, 6000 mAh battery, dual front stereo speakers with DTS:X Ultra",
         ["Matte Black", "Glossy Black"], [("8GB", "128GB", 37999), ("12GB", "512GB", 59999)]),

        ("asus-rog-phone-3", "ROG Phone 3", "ROG Phone", "discontinued", "2020-07",
         49999, 57999, "Qualcomm Snapdragon 865+ 5G (3.1 GHz)", '6.59"', "AMOLED 144Hz 1ms 10-bit HDR10+", "1080 x 2340", 144,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (64MP Sony IMX686 + 13MP UW + 5MP Macro) AirTrigger 3", "64 MP, f/1.8, 26mm, PDAF", "24 MP, f/2.0", 6000, 30,
         True, "Android", "ROG UI", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-3.jpg", "ASUS ROG Phone 3 Black Glare",
         "13 MP, f/2.4, 125˚ ultrawide", None, 0, "171.0 x 78.0 x 9.85 mm", 240, "Gorilla Glass 6 front, Gorilla Glass 3 back, GameCool 3 3D vapor chamber, AirTrigger 3 ultrasonic sensors",
         ["Black Glare"], [("8GB", "128GB", 49999), ("12GB", "256GB", 57999)]),

        ("asus-rog-phone-5", "ROG Phone 5", "ROG Phone", "discontinued", "2021-03",
         49999, 57999, "Qualcomm Snapdragon 888 5G", '6.78"', "Samsung E4 AMOLED 144Hz 1ms HDR10+", "1080 x 2448", 144,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (64MP Sony IMX686 + 13MP UW + 5MP Macro) 65W HyperCharge", "64 MP, f/1.8, 26mm, PDAF", "24 MP, f/2.5", 6000, 65,
         True, "Android", "ROG UI", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5.jpg", "ASUS ROG Phone 5 Phantom Black",
         "13 MP, f/2.4, 125˚ ultrawide", None, 0, "172.8 x 77.3 x 10.3 mm", 238, "Gorilla Glass Victus front, Gorilla Glass 3 back, dot-matrix Aura RGB lighting, dual Cirrus Logic amp stereo speakers",
         ["Phantom Black", "Storm White"], [("8GB", "128GB", 49999), ("12GB", "256GB", 57999)]),

        ("asus-zenfone-5z", "Zenfone 5Z", "Zenfone 5", "discontinued", "2018-07",
         29999, 36999, "Qualcomm Snapdragon 845", '6.2"', "IPS LCD All-Screen FHD+", "1080 x 2246", 60,
         ["6GB", "8GB"], ["64GB", "128GB", "256GB"], "Dual (12MP Sony IMX363 OIS + 8MP 120˚ UW) AI Cameras", "12 MP, f/1.8, 24mm, 4-axis OIS, Dual Pixel PDAF", "8 MP, f/2.0", 3300, 18,
         False, "Android", "ZenUI", "Android 8.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-5z-zs620kl-.jpg", "ASUS Zenfone 5Z Midnight Blue",
         "8 MP, f/2.0, 12mm 120˚ ultrawide", None, 0, "153.0 x 75.7 x 7.7 mm", 165, "Gorilla Glass front/back, aerospace-grade aluminum frame, concentric circle reflective spun-metal finish",
         ["Midnight Blue", "Meteor Silver"], [("6GB", "64GB", 29999), ("6GB", "128GB", 32999), ("8GB", "256GB", 36999)]),

        ("asus-6z", "ASUS 6z", "ASUS 6", "discontinued", "2019-06",
         31999, 39999, "Qualcomm Snapdragon 855", '6.4"', "IPS LCD NanoEdge FHD+ Notchless", "1080 x 2340", 60,
         ["6GB", "8GB"], ["64GB", "128GB", "256GB"], "Dual Motorized Flip Camera (48MP Sony IMX586 + 13MP UW), 5000 mAh Battery", "48 MP, f/1.8, 26mm, Laser/PDAF", "Motorized flip-up main module acts as selfie camera", 5000, 18,
         False, "Android", "ZenUI", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-6-zs630kl.jpg", "ASUS 6z Midnight Black",
         "13 MP, f/2.4, 11mm 125˚ ultrawide", None, 0, "159.1 x 75.4 x 9.2 mm", 190, "Gorilla Glass 6 front, Gorilla Glass 3 back, liquid metal motorized flip camera module with custom stepper motor",
         ["Midnight Black", "Twilight Silver"], [("6GB", "64GB", 31999), ("6GB", "128GB", 34999), ("8GB", "256GB", 39999)]),

        ("asus-zenfone-max-pro-m1", "Zenfone Max Pro M1", "Zenfone Max", "discontinued", "2018-04",
         10999, 14999, "Qualcomm Snapdragon 636", '5.99"', "IPS LCD 18:9 Full View FHD+", "1080 x 2160", 60,
         ["3GB", "4GB", "6GB"], ["32GB", "64GB"], "Dual (13MP/16MP + 5MP Depth), 5000 mAh Battery", "13 MP, f/2.2, PDAF", "8 MP with softlight LED flash", 5000, 10,
         False, "Android", "Pure Stock Android", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-max-pro-m1.jpg", "ASUS Zenfone Max Pro M1 Deepsea Black",
         None, None, 0, "159.0 x 76.0 x 8.45 mm", 180, "2.5D curved glass front, aluminum metal body, 5000 mAh 2-day battery, 5-magnet speaker",
         ["Deepsea Black", "Meteor Silver"], [("3GB", "32GB", 10999), ("4GB", "64GB", 12999), ("6GB", "64GB", 14999)]),

        ("asus-zenfone-max-pro-m2", "Zenfone Max Pro M2", "Zenfone Max", "discontinued", "2018-12",
         12999, 16999, "Qualcomm Snapdragon 660 AIE", '6.26"', "IPS LCD Notch FHD+", "1080 x 2280", 60,
         ["3GB", "4GB", "6GB"], ["32GB", "64GB"], "Dual (12MP Sony IMX486 + 5MP Depth) Gorilla Glass 6", "12 MP, f/1.8, 1/2.9\", PDAF", "13 MP, f/2.0 with LED flash", 5000, 10,
         False, "Android", "Pure Stock Android", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-max-pro-m2.jpg", "ASUS Zenfone Max Pro M2 Blue",
         None, None, 0, "157.9 x 75.5 x 8.5 mm", 175, "Corning Gorilla Glass 6, dynamic wave pattern back, 5000 mAh battery, NXP smart amplifier",
         ["Blue", "Titanium"], [("3GB", "32GB", 12999), ("4GB", "64GB", 14999), ("6GB", "64GB", 16999)]),
    ]

    for item in asus_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="ASUS", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.asus.com/in/mobile-handhelds/phones/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "ASUS", img_url, alt))

    # ══════════════════════════════════════════════════════════════
    # 2. INFINIX
    # ══════════════════════════════════════════════════════════════
    infinix_data = [
        ("infinix-zero-8i", "Zero 8i", "Zero", "discontinued", "2020-12",
         14999, 14999, "MediaTek Helio G90T", '6.85"', "IPS LCD 90Hz Dual Punch-Hole FHD+", "1080 x 2460", 90,
         ["8GB"], ["128GB"], "Quad (48MP + 8MP UW + 2MP Depth + AI Lens) Dual Front (16MP + 8MP UW)", "48 MP, f/1.8, PDAF", "Dual 16 MP + 8 MP 105˚ ultrawide", 4500, 33,
         False, "Android", "XOS", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-8i.jpg", "Infinix Zero 8i Silver Diamond",
         "8 MP, f/2.2, 119˚ ultrawide", None, 0, "168.7 x 76.1 x 9.1 mm", 210.5, "Glass front, gem-cut diamond design back, 33W fast charge",
         ["Silver Diamond", "Black Diamond"], [("8GB", "128GB", 14999)]),

        ("infinix-zero-5g", "Zero 5G", "Zero", "discontinued", "2022-02",
         19999, 19999, "MediaTek Dimensity 900 5G (6nm)", '6.78"', "IPS LCD 120Hz FHD+", "1080 x 2460", 120,
         ["8GB"], ["128GB"], "Triple (48MP + 13MP 2x Tele + 2MP Bokeh) Uni-Curve Design", "48 MP, f/1.8, 26mm, PDAF", "16 MP, f/2.0 with dual front flash", 5000, 33,
         True, "Android", "XOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg", "Infinix Zero 5G Cosmic Black",
         None, "13 MP, f/2.5, 50mm 2x Telephoto", 0, "168.7 x 76.5 x 8.77 mm", 199, "Glass front, uni-curve fluid camera bump design, 33W Safe Fast Charge",
         ["Cosmic Black", "Horizon Blue", "Skylight Orange"], [("8GB", "128GB", 19999)]),

        ("infinix-zero-20", "Zero 20", "Zero", "discontinued", "2022-12",
         15999, 15999, "MediaTek Helio G99 (6nm)", '6.7"', "AMOLED 90Hz FHD+", "1080 x 2400", 90,
         ["8GB"], ["128GB"], "Triple (108MP + 13MP UW + 2MP) with World's First 60MP OIS Front Camera", "108 MP, f/1.75, PDAF", "60 MP, OIS, AF with dual front LED flash", 4500, 45,
         False, "Android", "XOS", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-20.jpg", "Infinix Zero 20 Space Grey",
         "13 MP, f/2.2, AF ultrawide", None, 0, "164.4 x 76.7 x 7.98 mm", 196, "Glass front, flat aluminum frame, 60MP world-first OIS vlogging selfie camera, 45W TÜV certified charge",
         ["Space Grey", "Glitter Gold", "Green Fantasy"], [("8GB", "128GB", 15999)]),

        ("infinix-note-12-pro-5g", "Note 12 Pro 5G", "Note 12", "discontinued", "2022-07",
         17999, 17999, "MediaTek Dimensity 810 5G (6nm)", '6.7"', "AMOLED FHD+", "1080 x 2400", 60,
         ["8GB"], ["128GB"], "Triple (108MP Samsung HM6 + 2MP Macro + 2MP Depth)", "108 MP, f/1.75, PDAF", "16 MP, f/2.0 with dual LED flash", 5000, 33,
         True, "Android", "XOS", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-12-pro-5g.jpg", "Infinix Note 12 Pro 5G Force Black",
         None, None, 0, "164.7 x 76.9 x 7.98 mm", 188, "Corning Gorilla Glass 3, 7.98mm ultra-sleek, dual stereo speakers with DTS",
         ["Force Black", "Snowfall White"], [("8GB", "128GB", 17999)]),

        ("infinix-note-40-pro-5g", "Note 40 Pro 5G", "Note 40", "active", "2024-04",
         21999, 21999, "MediaTek Dimensity 7020 5G (6nm)", '6.78"', "AMOLED 120Hz 1B colors 3D Curved 2160Hz PWM", "1080 x 2436", 120,
         ["8GB"], ["256GB"], "Triple (108MP OIS 3x Lossless Zoom + 2MP Macro + 2MP Depth) Active Halo AI Lighting", "108 MP, f/1.75, OIS, PDAF", "32 MP, f/2.2 with dual LED flash", 5000, 45,
         True, "Android", "XOS", "Android 14", "IP53",
         "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro.jpg", "Infinix Note 40 Pro 5G Vintage Green",
         None, None, 20, "164.3 x 74.5 x 8.09 mm", 190, "Corning Gorilla Glass 5, vegan leather back, Active Halo pulsating AI lights, 45W All-Round FastCharge 2.0 + 20W Wireless MagCharge, Sound by JBL",
         ["Vintage Green", "Titan Gold"], [("8GB", "256GB", 21999)]),

        ("infinix-hot-10", "Hot 10", "Hot", "discontinued", "2020-10",
         9999, 10999, "MediaTek Helio G70", '6.78"', "IPS LCD Pin-Hole HD+", "720 x 1640", 60,
         ["4GB", "6GB"], ["64GB", "128GB"], "Quad (16MP + 2MP Macro + 2MP Depth + Low Light), 5200 mAh Battery", "16 MP, f/1.85, PDAF", "8 MP with dual flash", 5200, 10,
         False, "Android", "XOS", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10.jpg", "Infinix Hot 10 Obsidian Black",
         None, None, 0, "171.1 x 77.6 x 8.85 mm", 204, "Glass front, laser engraved pattern plastic back, DTS audio processing",
         ["Obsidian Black", "Amber Red", "Moonlight Jade", "Ocean Wave"], [("4GB", "64GB", 9999), ("6GB", "128GB", 10999)]),
    ]

    for item in infinix_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="Infinix", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.infinixmobiles.in/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "Infinix", img_url, alt))

    # ══════════════════════════════════════════════════════════════
    # 3. TECNO
    # ══════════════════════════════════════════════════════════════
    tecno_data = [
        ("tecno-phantom-x", "Phantom X", "Phantom", "discontinued", "2021-07",
         25999, 25999, "MediaTek Helio G95", '6.7"', "Super AMOLED 90Hz 3D Borderless Curved FHD+", "1080 x 2340", 90,
         ["8GB"], ["256GB"], "Triple (50MP 1/1.3\" + 13MP 50mm Portrait + 8MP 120˚ UW) Dual Selfie (48MP + 8MP UW)", "50 MP, f/1.85, 1/1.3\", Dual Pixel PDAF, Laser AF", "Dual 48 MP + 8 MP 105˚ ultrawide", 4700, 33,
         False, "Android", "HiOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x.jpg", "Tecno Phantom X Starry Night Blue",
         "8 MP, f/2.25, 120˚ ultrawide", "13 MP, f/2.4, 50mm 2x optical Telephoto Portrait", 0, "163.5 x 73.8 x 8.7 mm", 201, "Corning Gorilla Glass 5 front/back, silk glass texture, 33W flash charge",
         ["Starry Night Blue", "Monet Summer"], [("8GB", "256GB", 25999)]),

        ("tecno-phantom-x2-pro-5g", "Phantom X2 Pro 5G", "Phantom", "discontinued", "2023-01",
         49999, 49999, "MediaTek Dimensity 9000 5G (4nm)", '6.8"', "AMOLED 120Hz Unibody Double-Curved FHD+", "1080 x 2400", 120,
         ["12GB"], ["256GB"], "Triple (50MP Retractable Portrait 2.5x optical + 50MP Wide + 13MP UW)", "50 MP, f/1.65, 1/1.3\", PDAF", "32 MP, f/2.45", 5160, 45,
         True, "Android", "HiOS", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x2-pro.jpg", "Tecno Phantom X2 Pro Mars Orange",
         "13 MP, f/2.2, PDAF ultrawide", "50 MP, f/1.49, 65mm 2.5x retractable optical Telephoto portrait lens", 0, "164.6 x 72.7 x 8.9 mm", 201, "Gorilla Glass Victus front, world-first 100% recycled ocean plastic eco-friendly fiber back, motorized retractable portrait lens",
         ["Mars Orange", "Stardust Grey"], [("12GB", "256GB", 49999)]),

        ("tecno-camon-20-premier-5g", "Camon 20 Premier 5G", "Camon 20", "discontinued", "2023-06",
         29999, 29999, "MediaTek Dimensity 8050 5G (6nm)", '6.67"', "AMOLED 120Hz FHD+", "1080 x 2400", 120,
         ["8GB"], ["512GB"], "Triple (50MP RGBW Sensor-Shift OIS + 108MP UW/Macro + 2MP Bokeh) Leather Back", "50 MP, f/1.77, 23mm, Sensor-Shift OIS, Laser AF", "32 MP with micro-slit dual front flash", 5000, 45,
         True, "Android", "HiOS", "Android 13", "IP53",
         "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-20-premier.jpg", "Tecno Camon 20 Premier Dark Welkin",
         "108 MP, f/2.2, 13mm 115˚ ultrawide / macro, PDAF", None, 0, "161.9 x 74.3 x 7.8 mm", 202.5, "Glass front, Tyson Fury ceramic camera ring, polygon aesthetic luxury leather back",
         ["Dark Welkin", "Serenity Blue"], [("8GB", "512GB", 29999)]),

        ("tecno-pova-3", "Pova 3", "Pova", "discontinued", "2022-06",
         11499, 12999, "MediaTek Helio G88", '6.9"', "IPS LCD 90Hz FHD+", "1080 x 2460", 90,
         ["4GB", "6GB"], ["64GB", "128GB"], "Triple (50MP + 2MP Depth + AI Lens) Massive 7000 mAh Monster Battery", "50 MP, f/1.8, PDAF", "8 MP with dual LED flash", 7000, 33,
         False, "Android", "HiOS", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-3.jpg", "Tecno Pova 3 Electric Blue",
         None, None, 0, "173.1 x 78.5 x 9.44 mm", 230, "Glass front, Luminous back line with LED notification strip, massive 7000 mAh battery, dual stereo speakers with DTS",
         ["Electric Blue", "Tech Silver", "Eco Black"], [("4GB", "64GB", 11499), ("6GB", "128GB", 12999)]),
    ]

    for item in tecno_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="Tecno", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.tecno-mobile.in/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "Tecno", img_url, alt))

    # ══════════════════════════════════════════════════════════════
    # 4. LAVA
    # ══════════════════════════════════════════════════════════════
    lava_data = [
        ("lava-blaze-pro", "Blaze Pro", "Blaze", "discontinued", "2022-09",
         10499, 10499, "MediaTek Helio G37", '6.5"', "IPS LCD 90Hz HD+", "720 x 1600", 90,
         ["4GB"], ["64GB"], "Triple (50MP + 2MP Macro + VGA) Frost Glass Back", "50 MP, f/1.8, PDAF", "8 MP with screen flash", 5000, 10,
         False, "Android", "Clean Stock Android", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-pro.jpg", "Lava Blaze Pro Glass Green",
         None, None, 0, "164.75 x 76.3 x 8.9 mm", 193, "Frosted glass back, clean ad-free stock Android, free service at home",
         ["Glass Green", "Glass Gold", "Glass Blue", "Glass Orange"], [("4GB", "64GB", 10499)]),

        ("lava-blaze-2-5g", "Blaze 2 5G", "Blaze", "discontinued", "2023-11",
         9999, 10999, "MediaTek Dimensity 6020 5G (7nm)", '6.56"', "IPS LCD 90Hz HD+", "720 x 1600", 90,
         ["4GB", "6GB"], ["64GB", "128GB"], "Dual (50MP + VGA) with Ring Light Notification", "50 MP, f/1.8, PDAF", "8 MP with screen flash", 5000, 18,
         True, "Android", "Clean Stock Android", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-2-5g.jpg", "Lava Blaze 2 5G Glass Black",
         None, None, 0, "164.2 x 76.0 x 8.45 mm", 203, "Premium glass back, circular camera island with breathing ring light notification, no bloatware",
         ["Glass Black", "Glass Blue", "Glass Lavender"], [("4GB", "64GB", 9999), ("6GB", "128GB", 10999)]),

        ("lava-blaze-3-5g", "Blaze 3 5G", "Blaze", "active", "2024-09",
         9999, 11499, "MediaTek Dimensity 6300 5G (6nm)", '6.56"', "IPS LCD 90Hz Punch-Hole HD+", "720 x 1600", 90,
         ["6GB"], ["128GB"], "Dual (50MP + 2MP AI) Vibe Light Studio Lighting", "50 MP, f/1.8, PDAF", "8 MP with screen flash", 5000, 18,
         True, "Android", "Clean Stock Android", "Android 14", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-3-5g.jpg", "Lava Blaze 3 5G Glass Gold",
         None, None, 0, "164.3 x 76.2 x 8.6 mm", 201, "Glass back, Vibe Light dedicated warm/cool halo for portraits, no ads, no bloatware",
         ["Glass Gold", "Glass Blue"], [("6GB", "128GB", 9999)]),

        ("lava-yuva-5g", "Yuva 5G", "Yuva", "active", "2024-05",
         9499, 9999, "Unisoc T750 5G (6nm)", '6.52"', "IPS LCD 90Hz Punch-Hole HD+", "720 x 1600", 90,
         ["4GB"], ["64GB", "128GB"], "Dual (50MP + 2MP AI) Glass Back 5G", "50 MP, f/1.8, PDAF", "8 MP", 5000, 18,
         True, "Android", "Clean Stock Android", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/lava-yuva-5g.jpg", "Lava Yuva 5G Mystic Blue",
         None, None, 0, "164.0 x 75.8 x 8.9 mm", 198, "AG glass back design, clean stock Android experience, side fingerprint",
         ["Mystic Blue", "Mystic Green"], [("4GB", "64GB", 9499), ("4GB", "128GB", 9999)]),
    ]

    for item in lava_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="Lava", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.lavamobiles.com/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "Lava", img_url, alt))

    # ══════════════════════════════════════════════════════════════
    # 5. NOKIA (Strictly Brand: "Nokia" - distinct from HMD)
    # ══════════════════════════════════════════════════════════════
    nokia_data = [
        ("nokia-8", "Nokia 8", "Nokia 8", "discontinued", "2017-08",
         36999, 36999, "Qualcomm Snapdragon 835", '5.3"', "IPS LCD QHD 700 nits", "1440 x 2560", 60,
         ["4GB"], ["64GB"], "Dual ZEISS (13MP RGB OIS + 13MP Mono) Dual-Sight 'Bothie' Mode", "13 MP, f/2.0, 1.12µm, OIS, Laser/PDAF", "13 MP, f/2.0 ZEISS with PDAF", 3090, 18,
         False, "Android", "Pure Android", "Android 7.1.1", "IP54",
         "https://fdn2.gsmarena.com/vv/bigpic/nokia-8-.jpg", "Nokia 8 Polished Blue",
         None, "13 MP, f/2.0 monochrome sensor", 0, "151.5 x 73.7 x 7.9 mm", 160, "Corning Gorilla Glass 5, 6000-series aluminum unibody, Nokia OZO 360˚ spatial audio recording",
         ["Polished Blue", "Tempered Blue", "Steel", "Polished Copper"], [("4GB", "64GB", 36999)]),

        ("nokia-8-sirocco", "Nokia 8 Sirocco", "Nokia 8", "discontinued", "2018-02",
         49999, 49999, "Qualcomm Snapdragon 835", '5.5"', "pOLED 2K QHD Curved", "1440 x 2560", 60,
         ["6GB"], ["128GB"], "Dual ZEISS (12MP 2PD + 13MP 2x Tele) Qi Wireless Charging", "12 MP, f/1.75, 25mm, Dual Pixel PDAF", "5 MP, f/2.0", 3260, 18,
         False, "Android", "Android One", "Android 8.0", "IP67",
         "https://fdn2.gsmarena.com/vv/bigpic/nokia-8-sirocco.jpg", "Nokia 8 Sirocco Black",
         None, "13 MP, f/2.6, 2x optical Telephoto", 5, "140.9 x 73.0 x 7.5 mm", 177, "Gorilla Glass 5 front/back, single machined stainless steel frame (2.5x stronger than 6000 series aluminum), Qi wireless charging",
         ["Black"], [("6GB", "128GB", 49999)]),

        ("nokia-7-plus", "Nokia 7 Plus", "Nokia 7", "discontinued", "2018-02",
         25999, 25999, "Qualcomm Snapdragon 660", '6.0"', "IPS LCD 18:9 FHD+", "1080 x 2160", 60,
         ["4GB"], ["64GB"], "Dual ZEISS (12MP 2PD + 13MP 2x Tele) Ceramic Feel Coating", "12 MP, f/1.75, 25mm, 1.4µm, Dual Pixel PDAF", "16 MP, f/2.0 ZEISS", 3800, 18,
         False, "Android", "Android One", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/nokia-7-plus-.jpg", "Nokia 7 Plus Black / Copper",
         None, "13 MP, f/2.6, 1.0µm, 2x Telephoto", 0, "158.4 x 75.6 x 8.0 mm", 183, "Corning Gorilla Glass 3, solid 6000-series aluminum block with copper diamond-cut edges and 6-layer ceramic paint finish",
         ["Black / Copper", "White / Copper"], [("4GB", "64GB", 25999)]),

        ("nokia-6", "Nokia 6 (1st Gen)", "Nokia 6", "discontinued", "2017-01",
         14999, 14999, "Qualcomm Snapdragon 430", '5.5"', "IPS LCD FHD", "1080 x 1920", 60,
         ["3GB"], ["32GB"], "Single 16MP PDAF, Dual Stereo Speakers with Dolby Atmos", "16 MP, f/2.0, 1.0µm, PDAF", "8 MP, f/2.0", 3000, 10,
         False, "Android", "Pure Android", "Android 7.1.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/nokia-6-2017.jpg", "Nokia 6 Matte Black",
         None, None, 0, "154.0 x 75.8 x 7.85 mm", 169, "Corning Gorilla Glass 3, machined from a single solid block of 6000 series aluminum in 55 minutes, dual stereo speakers",
         ["Matte Black", "Silver", "Tempered Blue", "Copper"], [("3GB", "32GB", 14999)]),

        ("nokia-6-dot-1-plus", "Nokia 6.1 Plus", "Nokia 6", "discontinued", "2018-08",
         15999, 15999, "Qualcomm Snapdragon 636", '5.8"', "IPS LCD 19:9 Notch FHD+", "1080 x 2280", 60,
         ["4GB", "6GB"], ["64GB"], "Dual (16MP + 5MP Depth) Glass Body", "16 MP, f/2.0, 1.0µm, PDAF", "16 MP, f/2.0", 3060, 18,
         False, "Android", "Android One", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/nokia-61-plus.jpg", "Nokia 6.1 Plus Gloss Black",
         None, None, 0, "147.2 x 70.98 x 7.99 mm", 151, "Corning Gorilla Glass 3 front/back, aluminum frame, 93% glass surface, Android One guaranteed updates",
         ["Gloss Black", "Gloss White", "Gloss Midnight Blue"], [("4GB", "64GB", 15999), ("6GB", "64GB", 17999)]),

        ("nokia-g42-5g", "Nokia G42 5G", "Nokia G", "active", "2023-06",
         12599, 13999, "Qualcomm Snapdragon 480+ 5G (8nm)", '6.56"', "IPS LCD 90Hz HD+", "720 x 1612", 90,
         ["6GB", "8GB"], ["128GB", "256GB"], "Triple (50MP + 2MP Macro + 2MP Depth) QuickFix Self-Repairable", "50 MP, f/1.8, PDAF", "8 MP", 5000, 20,
         True, "Android", "Clean Android", "Android 13", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/nokia-g42.jpg", "Nokia G42 5G So Purple",
         None, None, 0, "165.0 x 75.8 x 8.55 mm", 193.8, "Corning Gorilla Glass 3, 65% recycled plastic back, QuickFix design allows easy screen/battery replacement with iFixit guides",
         ["So Purple", "So Grey", "So Pink"], [("6GB", "128GB", 12599), ("8GB", "256GB", 13999)]),
    ]

    for item in nokia_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="Nokia", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.hmd.com/en_in/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "Nokia", img_url, alt))

    # ══════════════════════════════════════════════════════════════
    # 6. HONOR (Brand: "Honor")
    # ══════════════════════════════════════════════════════════════
    honor_data = [
        ("honor-7x", "Honor 7X", "Honor 7", "discontinued", "2017-10",
         12999, 15999, "HiSilicon Kirin 659 (16nm)", '5.93"', "IPS LCD 18:9 FullView FHD+", "1080 x 2160", 60,
         ["4GB"], ["32GB", "64GB"], "Dual (16MP + 2MP Depth) All-Metal Unibody", "16 MP, f/2.2, 26mm, PDAF", "8 MP", 3340, 10,
         False, "Android", "EMUI", "Android 7.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg", "Honor 7X Blue",
         None, None, 0, "156.5 x 75.3 x 7.6 mm", 165, "Corning Gorilla Glass, all-metal unibody with antenna bands, rear fingerprint scanner",
         ["Blue", "Black", "Gold", "Red"], [("4GB", "32GB", 12999), ("4GB", "64GB", 15999)]),

        ("honor-8x", "Honor 8X", "Honor 8", "discontinued", "2018-09",
         14999, 18999, "HiSilicon Kirin 710 (12nm)", '6.5"', "IPS LCD Borderless FullView FHD+", "1080 x 2340", 60,
         ["4GB", "6GB"], ["64GB", "128GB"], "Dual (20MP + 2MP Depth) 2.5D Aurora Glass", "20 MP, f/1.8, 27mm, PDAF", "16 MP, f/2.0", 3750, 10,
         False, "Android", "EMUI", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-8x.jpg", "Honor 8X Blue",
         None, None, 0, "160.4 x 76.6 x 7.8 mm", 175, "2.5D aurora glass back with dual-texture visual effect, COF advanced packaging with 4.25mm ultra-narrow bottom chin",
         ["Blue", "Black", "Red"], [("4GB", "64GB", 14999), ("6GB", "64GB", 16999), ("6GB", "128GB", 18999)]),

        ("honor-play", "Honor Play", "Honor Play", "discontinued", "2018-08",
         19999, 23999, "HiSilicon Kirin 970 Flagship NPU (10nm)", '6.3"', "IPS LCD Notch FHD+ GPU Turbo", "1080 x 2340", 60,
         ["4GB", "6GB"], ["64GB"], "Dual (16MP + 2MP Depth) 4D Smart Gaming Shock", "16 MP, f/2.2, PDAF", "16 MP, f/2.0", 3750, 18,
         False, "Android", "EMUI", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-play-.jpg", "Honor Play Navy Blue",
         None, None, 0, "157.9 x 74.3 x 7.48 mm", 176, "All-metal unibody, flagship Kirin 970 NPU, GPU Turbo 60FPS sustained gaming, 4D haptic vibration",
         ["Navy Blue", "Midnight Black", "Ultra Violet"], [("4GB", "64GB", 19999), ("6GB", "64GB", 23999)]),

        ("honor-view-20", "Honor View 20", "Honor View", "discontinued", "2019-01",
         37999, 45999, "HiSilicon Kirin 980 Dual-NPU (7nm)", '6.4"', "IPS LCD In-Screen All-View Display FHD+", "1080 x 2310", 60,
         ["6GB", "8GB"], ["128GB", "256GB"], "Dual (48MP Sony IMX586 + TOF 3D) World's First In-Display Camera", "48 MP, f/1.8, 1/2.0\", PDAF", "25 MP in-screen selfie camera", 4000, 40,
         False, "Android", "Magic UI", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-view-20.jpg", "Honor View 20 Phantom Blue",
         None, "TOF 3D stereo camera sensor", 0, "156.9 x 75.4 x 8.1 mm", 180, "Aurora nanotexture V-shape gradient back, Kirin 980 7nm dual NPU, 40W SuperCharge",
         ["Phantom Blue", "Phantom Red", "Midnight Black", "Sapphire Blue"], [("6GB", "128GB", 37999), ("8GB", "256GB", 45999)]),

        ("honor-90-5g", "Honor 90 5G", "Honor 90", "active", "2023-09",
         37999, 39999, "Qualcomm Snapdragon 7 Gen 1 Accelerated Edition (4nm)", '6.7"', "AMOLED 120Hz 1.5K Quad-Curved 3840Hz Risk-Free PWM", "1200 x 2664", 120,
         ["8GB", "12GB"], ["256GB", "512GB"], "Triple (200MP 1/1.4\" + 12MP UW/Macro + 2MP Depth), 50MP 4K Selfie", "200 MP, f/1.9, 1/1.4\", PDAF", "50 MP, f/2.4 100˚ ultrawide 4K selfie", 5000, 66,
         True, "Android", "MagicOS", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/honor-90.jpg", "Honor 90 5G Diamond Silver",
         "12 MP, f/2.2, 112˚ ultrawide / macro, AF", None, 0, "161.9 x 74.1 x 7.8 mm", 183, "Quad-curved floating screen, world-first TÜV Rheinland certified 3840Hz risk-free PWM dimming, 66W Honor SuperCharge",
         ["Diamond Silver", "Emerald Green", "Midnight Black"], [("8GB", "256GB", 37999), ("12GB", "512GB", 39999)]),
    ]

    for item in honor_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="Honor", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.explorehonor.com/in/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "Honor", img_url, alt))

    # ══════════════════════════════════════════════════════════════
    # 7. ITEL
    # ══════════════════════════════════════════════════════════════
    itel_data = [
        ("itel-s23-plus", "S23+", "S Series", "discontinued", "2023-09",
         13999, 13999, "Unisoc T616 (12nm)", '6.78"', "3D Curved AMOLED FHD+ 500 nits", "1080 x 2400", 60,
         ["8GB"], ["256GB"], "Dual (50MP + 0.08MP AI) 32MP Front In-Display Fingerprint", "50 MP, f/1.6, AF", "32 MP, f/2.0", 5000, 18,
         False, "Android", "itelOS", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/itel-s23-plus.jpg", "Itel S23+ Elemental Blue",
         None, None, 0, "165.0 x 75.0 x 7.9 mm", 178, "Corning Gorilla Glass 5, 3D curved 59˚ double-curved AMOLED, in-display fingerprint scanner, Aivana voice assistant",
         ["Elemental Blue", "Lake Cyan"], [("8GB", "256GB", 13999)]),

        ("itel-p55-plus", "P55+", "P Series", "active", "2024-02",
         9999, 10999, "Unisoc T606 (12nm)", '6.6"', "IPS LCD 90Hz Punch-Hole Dynamic Bar HD+", "720 x 1612", 90,
         ["8GB"], ["128GB", "256GB"], "Dual (50MP + 0.08MP AI) with 45W Hyper Charge", "50 MP, f/1.6, AF", "8 MP with front flash", 5000, 45,
         False, "Android", "itelOS", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/itel-p55-plus.jpg", "Itel P55+ Royal Green",
         None, None, 0, "164.0 x 75.6 x 8.0 mm", 187, "Two-tone stitching vegan leather back, Dynamic Bar interactive notch, 45W PowerCharge (0-100% in 45 mins)",
         ["Royal Green", "Galaxy Blue", "Meteor Purple"], [("8GB", "128GB", 9999), ("8GB", "256GB", 10999)]),

        ("itel-p40-plus", "P40+", "P Series", "discontinued", "2023-07",
         8099, 8099, "Unisoc T606 (12nm)", '6.8"', "IPS LCD 90Hz Punch-Hole HD+", "720 x 1640", 90,
         ["4GB"], ["128GB"], "Dual (13MP + AI) Massive 7000 mAh Power Monster", "13 MP, f/1.8, AF", "8 MP with flash", 7000, 18,
         False, "Android", "itelOS", "Android 12 (Go edition)", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/itel-p40-plus.jpg", "Itel P40+ Force Black",
         None, None, 0, "170.8 x 77.8 x 9.3 mm", 220, "Glass front, ray textured plastic back, massive 7000 mAh battery with 41-day standby, 18W Type-C fast charge",
         ["Force Black", "Ice Cyan"], [("4GB", "128GB", 8099)]),
    ]

    for item in itel_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="Itel", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.itel-india.com/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "Itel", img_url, alt))

    out_file = os.path.join(os.path.dirname(__file__), "..", "mobile_data", "additions_others.ts")
    write_bundle_ts(out_file, "othersAdditionsBundle", models, variants, images)

if __name__ == "__main__":
    build_others()
