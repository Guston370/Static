import os
from common import make_model, make_variants, make_image_entry, write_bundle_ts

def build_bbk():
    models = []
    variants = []
    images = []

    # ══════════════════════════════════════════════════════════════
    # 1. OPPO
    # ══════════════════════════════════════════════════════════════
    oppo_data = [
        # Find Series
        ("oppo-find-x", "Find X", "Find X", "discontinued", "2018-06",
         59990, 59990, "Qualcomm Snapdragon 845", '6.42"', "Panoramic Arc AMOLED", "1080 x 2340", 60,
         ["8GB"], ["256GB"], "Dual (16MP OIS + 20MP) Stealth 3D Camera", "16 MP, f/2.0, OIS, PDAF", "Motorized pop-up 25 MP + 3D Structured Light", 3730, 20,
         False, "Android", "ColorOS", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x.jpg", "OPPO Find X Bordeaux Red",
         None, None, 0, "156.7 x 74.2 x 9.4 mm", 186, "Gorilla Glass 5 front/back, motorized stealth 3D cameras, 93.8% screen ratio",
         ["Bordeaux Red", "Glacier Blue"], [("8GB", "256GB", 59990)]),

        ("oppo-find-x2", "Find X2", "Find X2", "discontinued", "2020-03",
         64990, 64990, "Qualcomm Snapdragon 865 5G", '6.7"', "Ultra Vision AMOLED 120Hz 3K QHD+ 1B colors", "1440 x 3168", 120,
         ["12GB"], ["256GB"], "Triple (48MP Sony IMX586 OIS + 13MP 5x Tele + 12MP UW)", "48 MP, f/1.7, OIS, Laser/PDAF", "32 MP, f/2.4", 4200, 65,
         True, "Android", "ColorOS", "Android 10", "IP54",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2.jpg", "OPPO Find X2 Ceramic Black",
         "12 MP, f/2.2, 120˚ ultrawide", "13 MP, f/2.4, 5x hybrid zoom Telephoto", 0, "164.9 x 74.5 x 8.0 mm", 196, "Gorilla Glass 6 front, ceramic back, 65W SuperVOOC 2.0",
         ["Ceramic Black", "Ocean Glass"], [("12GB", "256GB", 64990)]),

        ("oppo-find-n2-flip", "Find N2 Flip", "Find N", "discontinued", "2023-02",
         89999, 89999, "MediaTek Dimensity 9000+ (4nm)", '6.8" Foldable LTPO AMOLED 120Hz + 3.26" Cover AMOLED', "Foldable LTPO AMOLED", "1080 x 2520", 120,
         ["8GB"], ["256GB"], "Dual Hasselblad (50MP Sony IMX890 + 8MP UW)", "50 MP, f/1.8, 23mm, PDAF", "32 MP, f/2.4", 4300, 44,
         True, "Android", "ColorOS", "Android 13", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n2-flip.jpg", "OPPO Find N2 Flip Astral Black",
         "8 MP, f/2.2, 112˚ ultrawide", None, 0, "166.2 x 75.2 x 7.45 mm (unfolded)", 191, "Gorilla Glass 5, flexion hinge, vertical cover screen, aluminum frame",
         ["Astral Black", "Moonlit Purple"], [("8GB", "256GB", 89999)]),

        # Reno Series
        ("oppo-reno-10x-zoom", "Reno 10x Zoom", "Reno", "discontinued", "2019-05",
         39990, 49990, "Qualcomm Snapdragon 855", '6.6"', "AMOLED Panoramic Screen FHD+", "1080 x 2340", 60,
         ["6GB", "8GB"], ["128GB", "256GB"], "Triple (48MP OIS + 13MP Periscope 5x/10x Hybrid + 8MP UW)", "48 MP, f/1.7, OIS, Laser/PDAF", "Motorized shark fin 16 MP", 4065, 20,
         False, "Android", "ColorOS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-10x-zoom.jpg", "OPPO Reno 10x Zoom Ocean Green",
         "8 MP, f/2.2, 120˚ ultrawide", "13 MP, f/3.0, 130mm 5x optical periscope, OIS", 0, "162.0 x 77.2 x 9.3 mm", 210, "Gorilla Glass 6 front, Gorilla Glass 5 back, shark fin pop-up",
         ["Ocean Green", "Jet Black"], [("6GB", "128GB", 39990), ("8GB", "256GB", 49990)]),

        ("oppo-reno-6-pro-5g", "Reno 6 Pro 5G", "Reno 6", "discontinued", "2021-07",
         39990, 39990, "MediaTek Dimensity 1200 5G (6nm)", '6.55"', "AMOLED 90Hz HDR10+ 3D Curved", "1080 x 2400", 90,
         ["12GB"], ["256GB"], "Quad (64MP + 8MP UW + 2MP Macro + 2MP Mono) Bokeh Flare Portrait", "64 MP, f/1.7, 26mm, PDAF", "32 MP, f/2.4", 4500, 65,
         True, "Android", "ColorOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-pro-5g.jpg", "OPPO Reno 6 Pro Aurora",
         "8 MP, f/2.2, 120˚ ultrawide", None, 0, "160.0 x 72.5 x 7.6 mm", 177, "Gorilla Glass 5, Reno Glow finish, 65W SuperVOOC 2.0",
         ["Aurora", "Stellar Black"], [("12GB", "256GB", 39990)]),

        ("oppo-reno-7-pro-5g", "Reno 7 Pro 5G", "Reno 7", "discontinued", "2022-02",
         39999, 39999, "MediaTek Dimensity 1200-Max 5G", '6.55"', "AMOLED 90Hz HDR10+", "1080 x 2400", 90,
         ["12GB"], ["256GB"], "Triple (50MP Sony IMX766 + 8MP UW + 2MP Macro) with Orbit Light", "50 MP, f/1.8, 24mm, All-Pixel Omni-Directional PDAF", "32 MP Sony IMX709 RGBW", 4500, 65,
         True, "Android", "ColorOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-pro-r.jpg", "OPPO Reno 7 Pro Starlight Black",
         "8 MP, f/2.2, 119˚ ultrawide", None, 0, "158.2 x 73.2 x 7.45 mm", 180, "Gorilla Glass 5, aircraft-grade metal frame, breathing notification orbit light",
         ["Startrails Blue", "Starlight Black"], [("12GB", "256GB", 39999)]),

        ("oppo-reno-8-pro-5g", "Reno 8 Pro 5G", "Reno 8", "discontinued", "2022-07",
         45999, 45999, "MediaTek Dimensity 8100-Max (5nm)", '6.7"', "AMOLED 120Hz 1B colors HDR10+", "1080 x 2412", 120,
         ["12GB"], ["256GB"], "Triple (50MP Sony IMX766 + 8MP UW + 2MP Macro) with MariSilicon X NPU", "50 MP, f/1.8, 23mm, All-Pixel Omni-Directional PDAF", "32 MP Sony IMX709 AF", 4500, 80,
         True, "Android", "ColorOS", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-pro.jpg", "OPPO Reno 8 Pro Glazed Green",
         "8 MP, f/2.2, 112˚ ultrawide", None, 0, "161.2 x 74.2 x 7.34 mm", 183, "Gorilla Glass 5 front/back, aluminum frame, MariSilicon X imaging NPU, 80W SuperVOOC",
         ["Glazed Green", "Glazed Black"], [("12GB", "256GB", 45999)]),

        ("oppo-reno-10-5g", "Reno 10 5G", "Reno 10", "discontinued", "2023-07",
         32999, 32999, "MediaTek Dimensity 7050 5G (6nm)", '6.7"', "AMOLED 120Hz 1B colors HDR10+ 3D Curved", "1080 x 2412", 120,
         ["8GB"], ["256GB"], "Triple (64MP + 32MP 2x Tele Portrait + 8MP UW)", "64 MP, f/1.7, 25mm, PDAF", "32 MP, f/2.4", 5000, 67,
         True, "Android", "ColorOS", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10.jpg", "OPPO Reno 10 5G Ice Blue",
         "8 MP, f/2.2, 112˚ ultrawide", "32 MP, f/2.0, 47mm 2x Telephoto Portrait, PDAF", 0, "162.4 x 74.2 x 7.99 mm", 185, "Asahi Glass AGC DT-Star2, 3D dual-curved design, 67W SuperVOOC",
         ["Ice Blue", "Silvery Grey"], [("8GB", "256GB", 32999)]),

        # F Series
        ("oppo-f1s", "F1s", "F Series", "discontinued", "2016-08",
         17990, 18990, "MediaTek MT6750", '5.5"', "IPS LCD", "720 x 1280", 60,
         ["3GB", "4GB"], ["32GB", "64GB"], "Single 13MP, 16MP Selfie Expert", "13 MP, f/2.2, 1/3\", PDAF", "16 MP, f/2.0, 1/3.1\"", 3075, 10,
         False, "Android", "ColorOS", "Android 5.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-f1s.jpg", "OPPO F1s Gold",
         None, None, 0, "154.5 x 76.0 x 7.38 mm", 160, "Corning Gorilla Glass 4, metal unibody, front fingerprint sensor",
         ["Gold", "Rose Gold", "Grey"], [("3GB", "32GB", 17990), ("4GB", "64GB", 18990)]),

        ("oppo-f9-pro", "F9 Pro", "F Series", "discontinued", "2018-08",
         23990, 23990, "MediaTek Helio P60", '6.3"', "LTPS IPS LCD Waterdrop Notch FHD+", "1080 x 2340", 60,
         ["6GB"], ["64GB"], "Dual (16MP + 2MP Depth), VOOC Flash Charge", "16 MP, f/1.8, PDAF", "25 MP, f/2.0", 3500, 20,
         False, "Android", "ColorOS", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-f9.jpg", "OPPO F9 Pro Sunrise Red",
         None, None, 0, "156.7 x 74.0 x 7.99 mm", 169, "Gorilla Glass 6 front, gradient flower-petal petal pattern, VOOC Flash Charge",
         ["Sunrise Red", "Twilight Blue", "Starry Purple"], [("6GB", "64GB", 23990)]),

        ("oppo-f11-pro", "F11 Pro", "F Series", "discontinued", "2019-03",
         24990, 25990, "MediaTek Helio P70", '6.53"', "LTPS IPS LCD Panoramic Screen FHD+", "1080 x 2340", 60,
         ["6GB"], ["64GB", "128GB"], "Dual (48MP + 5MP Depth) Rising Camera", "48 MP, f/1.8, 1/2.0\", PDAF", "Motorized pop-up 16 MP", 4000, 20,
         False, "Android", "ColorOS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-f11-pro.jpg", "OPPO F11 Pro Thunder Black",
         None, None, 0, "161.3 x 76.1 x 8.8 mm", 190, "Glass front, notchless panoramic screen, rising selfie camera, VOOC 3.0",
         ["Thunder Black", "Aurora Green"], [("6GB", "64GB", 24990), ("6GB", "128GB", 25990)]),

        ("oppo-f17-pro", "F17 Pro", "F Series", "discontinued", "2020-09",
         22990, 22990, "MediaTek Helio P95", '6.43"', "Super AMOLED Dual Punch-Hole FHD+", "1080 x 2400", 60,
         ["8GB"], ["128GB"], "Quad (48MP + 8MP UW + 2MP Mono + 2MP Mono) 7.48mm Ultra-Thin", "48 MP, f/1.7, 26mm, PDAF", "Dual 16 MP + 2 MP Depth", 4015, 30,
         False, "Android", "ColorOS", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-f17-pro.jpg", "OPPO F17 Pro Magic Blue",
         "8 MP, f/2.2, 119˚ ultrawide", None, 0, "160.1 x 73.8 x 7.48 mm", 164, "Gorilla Glass 3+, 7.48mm ultra-sleek lightweight body, 30W VOOC 4.0",
         ["Magic Blue", "Matte Black", "Metallic White"], [("8GB", "128GB", 22990)]),

        ("oppo-f19-pro-plus-5g", "F19 Pro+ 5G", "F Series", "discontinued", "2021-03",
         25990, 25990, "MediaTek Dimensity 800U 5G", '6.43"', "Super AMOLED FHD+", "1080 x 2400", 60,
         ["8GB"], ["128GB"], "Quad (48MP + 8MP UW + 2MP Macro + 2MP Mono) AI Highlight Portrait", "48 MP, f/1.7, 25mm, PDAF", "16 MP, f/2.4", 4310, 50,
         True, "Android", "ColorOS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-f19-pro-plus.jpg", "OPPO F19 Pro+ Fluid Black",
         "8 MP, f/2.2, 119˚ ultrawide", None, 0, "160.1 x 73.4 x 7.8 mm", 173, "Gorilla Glass 5, in-display fingerprint, 50W Flash Charge",
         ["Fluid Black", "Space Silver"], [("8GB", "128GB", 25990)]),

        ("oppo-f21-pro-5g", "F21 Pro 5G", "F Series", "discontinued", "2022-04",
         26999, 26999, "Qualcomm Snapdragon 695 5G", '6.43"', "AMOLED FHD+", "1080 x 2400", 60,
         ["8GB"], ["128GB"], "Triple (64MP + 2MP Macro + 2MP Depth) with Dual Orbit Lights", "64 MP, f/1.7, 26mm, PDAF", "16 MP, f/2.4", 4500, 33,
         True, "Android", "ColorOS", "Android 12", "IPX4",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-f21-pro-5g.jpg", "OPPO F21 Pro 5G Rainbow Spectrum",
         None, None, 0, "159.9 x 73.2 x 7.5 mm", 173, "Schott Xensation glass, rainbow spectrum shimmering design, dual orbit breathing lights",
         ["Rainbow Spectrum", "Cosmic Black"], [("8GB", "128GB", 26999)]),

        ("oppo-f23-5g", "F23 5G", "F Series", "discontinued", "2023-05",
         24999, 24999, "Qualcomm Snapdragon 695 5G", '6.72"', "IPS LCD 120Hz FHD+", "1080 x 2400", 120,
         ["8GB"], ["256GB"], "Triple (64MP + 2MP Microscope + 2MP Depth) with 40x Microlens", "64 MP, f/1.7, PDAF", "32 MP, f/2.4", 5000, 67,
         True, "Android", "ColorOS", "Android 13", "IPX4",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-f23-5g.jpg", "OPPO F23 5G Bold Gold",
         None, None, 0, "165.6 x 76.1 x 8.2 mm", 192, "Panda Glass, 40x microlens, 67W SuperVOOC, 4-year durable battery health engine",
         ["Bold Gold", "Cool Black"], [("8GB", "256GB", 24999)]),

        # K Series
        ("oppo-k1", "K1", "K Series", "discontinued", "2019-02",
         16990, 16990, "Qualcomm Snapdragon 660", '6.4"', "Super AMOLED Waterdrop FHD+", "1080 x 2340", 60,
         ["4GB"], ["64GB"], "Dual (16MP + 2MP Depth) In-Display Fingerprint", "16 MP, f/1.7, 1/2.8\", PDAF", "25 MP, f/2.0", 3600, 10,
         False, "Android", "ColorOS", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-k1.jpg", "OPPO K1 Astral Blue",
         None, None, 0, "158.3 x 75.5 x 7.4 mm", 156, "Corning Gorilla Glass 5, in-display fingerprint scanner, 3D gradient back",
         ["Astral Blue", "Piano Black"], [("4GB", "64GB", 16990)]),

        ("oppo-k3", "K3", "K Series", "discontinued", "2019-07",
         16990, 19990, "Qualcomm Snapdragon 710", '6.5"', "AMOLED Panoramic Screen FHD+", "1080 x 2340", 60,
         ["6GB", "8GB"], ["64GB", "128GB"], "Dual (16MP + 2MP Depth) Rising Camera", "16 MP, f/1.7, 1/2.5\", PDAF", "Motorized pop-up 16 MP", 3765, 20,
         False, "Android", "ColorOS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-k3.jpg", "OPPO K3 Nebula Blue",
         None, None, 0, "161.2 x 76.0 x 9.4 mm", 191, "Gorilla Glass 5, notchless panoramic screen, rising camera, VOOC 3.0",
         ["Nebula Blue", "Aurora Blue", "Jade Black"], [("6GB", "64GB", 16990), ("8GB", "128GB", 19990)]),

        ("oppo-k10-5g", "K10 5G", "K Series", "discontinued", "2022-06",
         17499, 17499, "MediaTek Dimensity 810 5G (6nm)", '6.56"', "IPS LCD 90Hz", "720 x 1612", 90,
         ["8GB"], ["128GB"], "Dual (48MP + 2MP Depth) with Stereo Speakers", "48 MP, f/1.7, 26mm, PDAF", "8 MP, f/2.0", 5000, 33,
         True, "Android", "ColorOS", "Android 12", "IP54",
         "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-5g-india.jpg", "OPPO K10 5G Ocean Blue",
         None, None, 0, "163.8 x 75.1 x 7.99 mm", 190, "Panda Glass, ultra-slim retro design, 33W SuperVOOC, dual stereo speakers",
         ["Midnight Black", "Ocean Blue"], [("8GB", "128GB", 17499)]),
    ]

    for item in oppo_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="OPPO", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.oppo.com/in/smartphones/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "OPPO", img_url, alt))

    # ══════════════════════════════════════════════════════════════
    # 2. VIVO
    # ══════════════════════════════════════════════════════════════
    vivo_data = [
        # X Series
        ("vivo-x50-pro", "X50 Pro", "X50", "discontinued", "2020-07",
         49990, 49990, "Qualcomm Snapdragon 765G 5G", '6.56"', "AMOLED 90Hz HDR10+ Curved", "1080 x 2376", 90,
         ["8GB"], ["256GB"], "Quad (48MP Gimbal OIS + 13MP Portrait + 8MP 5x Periscope + 8MP UW)", "48 MP, f/1.6, Gimbal OIS, PDAF", "32 MP, f/2.5", 4315, 33,
         True, "Android", "Funtouch OS", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-x50-pro.jpg", "Vivo X50 Pro Alpha Grey",
         "8 MP, f/2.2, 120˚ ultrawide", "8 MP, f/3.4, 135mm 5x optical periscope, OIS", 0, "158.5 x 72.8 x 8.04 mm", 181.5, "Schott Xensation 3D glass, built-in gimbal stabilization module, AG frost matte back",
         ["Alpha Grey"], [("8GB", "256GB", 49990)]),

        ("vivo-x60-pro", "X60 Pro", "X60", "discontinued", "2021-03",
         49990, 49990, "Qualcomm Snapdragon 870 5G", '6.56"', "AMOLED 120Hz HDR10+ Curved", "1080 x 2376", 120,
         ["12GB"], ["256GB"], "Triple ZEISS (48MP Gimbal 2.0 OIS + 13MP Portrait + 13MP UW)", "48 MP, f/1.5, 26mm, Gimbal OIS, PDAF", "32 MP, f/2.5", 4200, 33,
         True, "Android", "Funtouch OS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60-pro.jpg", "Vivo X60 Pro Shimmer Blue",
         "13 MP, f/2.2, 120˚ ultrawide", "13 MP, f/2.5, 50mm 2x Telephoto Portrait", 0, "158.6 x 73.2 x 7.59 mm", 177, "Gorilla Glass 6 front/back, ZEISS co-engineered optics, Gimbal 2.0 stabilization",
         ["Midnight Black", "Shimmer Blue"], [("12GB", "256GB", 49990)]),

        ("vivo-x70-pro", "X70 Pro", "X70", "discontinued", "2021-09",
         46990, 52990, "MediaTek Dimensity 1200-vivo 5G", '6.56"', "AMOLED 120Hz HDR10+ Curved", "1080 x 2376", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Quad ZEISS (50MP Gimbal OIS + 12MP 2x Portrait + 12MP UW + 8MP 5x Periscope)", "50 MP, f/1.75, Gimbal OIS, PDAF", "32 MP, f/2.5", 4450, 44,
         True, "Android", "Funtouch OS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro.jpg", "Vivo X70 Pro Aurora Dawn",
         "12 MP, f/2.2, 116˚ ultrawide", "8 MP, f/3.4, 125mm 5x optical periscope, OIS", 0, "158.3 x 73.2 x 7.99 mm", 185, "Gorilla Glass 6, ZEISS T* lens coating, Fluorite AG glass",
         ["Cosmic Black", "Aurora Dawn"], [("8GB", "128GB", 46990), ("12GB", "256GB", 52990)]),

        ("vivo-x70-pro-plus", "X70 Pro+", "X70", "discontinued", "2021-09",
         79990, 79990, "Qualcomm Snapdragon 888+ 5G", '6.78"', "LTPO AMOLED 120Hz 2K WQHD+ 1B colors", "1440 x 3200", 120,
         ["12GB"], ["256GB"], "Quad ZEISS (50MP OIS + 48MP Gimbal UW + 12MP 2x Tele OIS + 8MP 5x Periscope OIS)", "50 MP, f/1.57, 1/1.31\", OIS, Laser AF", "32 MP, f/2.5", 4500, 55,
         True, "Android", "Funtouch OS", "Android 11", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro-plus.jpg", "Vivo X70 Pro+ Enigma Black",
         "48 MP, f/2.2, 14mm 114˚ ultrawide, Gimbal OIS", "8 MP, f/3.4, 125mm 5x Periscope Telephoto, OIS", 50, "164.5 x 75.2 x 8.89 mm", 209, "Gorilla Glass Victus, IP68 water/dust proof, Ceramic cloud window, Vivo V1 imaging chip",
         ["Enigma Black"], [("12GB", "256GB", 79990)]),

        ("vivo-x80-pro", "X80 Pro", "X80", "discontinued", "2022-05",
         79999, 79999, "Qualcomm Snapdragon 8 Gen 1 (4nm)", '6.78"', "LTPO3 AMOLED 120Hz 2K WQHD+ HDR10+", "1440 x 3200", 120,
         ["12GB"], ["256GB"], "Quad ZEISS (50MP OIS + 48MP UW + 12MP Gimbal 2x Portrait + 8MP 5x Periscope)", "50 MP, f/1.57, 1/1.3\", OIS, Laser AF", "32 MP, f/2.5", 4700, 80,
         True, "Android", "Funtouch OS", "Android 12", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-x80-pro.jpg", "Vivo X80 Pro Cosmic Black",
         "48 MP, f/2.2, 114˚ ultrawide", "8 MP, f/3.4, 125mm 5x Periscope Telephoto, OIS", 50, "164.6 x 75.3 x 9.1 mm", 219, "Gorilla Glass Victus, IP68, Vivo V1+ imaging chip, 3D ultrasonic large fingerprint sensor",
         ["Cosmic Black"], [("12GB", "256GB", 79999)]),

        ("vivo-x90", "X90", "X90", "discontinued", "2023-04",
         59999, 63999, "MediaTek Dimensity 9200 (4nm)", '6.78"', "AMOLED 120Hz 1.5K 1B colors HDR10+", "1260 x 2800", 120,
         ["8GB", "12GB"], ["256GB"], "Triple ZEISS (50MP Sony IMX866 VCS OIS + 12MP 2x Tele + 12MP UW)", "50 MP, f/1.75, 24mm, OIS, Laser AF", "32 MP, f/2.45", 4810, 120,
         True, "Android", "Funtouch OS", "Android 13", "IP64",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90.jpg", "Vivo X90 Breeze Blue",
         "12 MP, f/2.0, 108˚ ultrawide", "12 MP, f/2.0, 50mm 2x Telephoto Portrait", 0, "164.1 x 74.4 x 8.48 mm", 200, "Schott Xensation Alpha, Vivo V2 imaging chip, 120W Dual-Cell FlashCharge",
         ["Breeze Blue", "Asteroid Black"], [("8GB", "256GB", 59999), ("12GB", "256GB", 63999)]),

        # V Series
        ("vivo-v9", "V9", "V Series", "discontinued", "2018-03",
         22990, 22990, "Qualcomm Snapdragon 626", '6.3"', "IPS LCD Notch FHD+", "1080 x 2280", 60,
         ["4GB"], ["64GB"], "Dual (16MP + 5MP Depth), 24MP AI Selfie", "16 MP, f/2.0, PDAF", "24 MP, f/2.0 AI Face Beauty", 3260, 10,
         False, "Android", "Funtouch OS", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-v9.jpg", "Vivo V9 Pearl Black",
         None, None, 0, "154.8 x 75.0 x 7.89 mm", 150, "Corning Gorilla Glass 3, curved back, 90% screen-to-body ratio",
         ["Pearl Black", "Champagne Gold", "Sapphire Blue"], [("4GB", "64GB", 22990)]),

        ("vivo-v11-pro", "V11 Pro", "V Series", "discontinued", "2018-09",
         25990, 25990, "Qualcomm Snapdragon 660 AIE", '6.41"', "Super AMOLED Halo FullView FHD+", "1080 x 2340", 60,
         ["6GB"], ["64GB"], "Dual (12MP Dual Pixel + 5MP Depth) In-Display Fingerprint", "12 MP, f/1.8, 1/2.8\", Dual Pixel PDAF", "25 MP, f/2.0", 3400, 18,
         False, "Android", "Funtouch OS", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-v11-pro.jpg", "Vivo V11 Pro Starry Night",
         None, None, 0, "157.9 x 75.0 x 7.9 mm", 156, "Corning Gorilla Glass 3, In-Display Fingerprint scanning, Dual-Engine fast charging",
         ["Starry Night", "Dazzling Gold"], [("6GB", "64GB", 25990)]),

        ("vivo-v15-pro", "V15 Pro", "V Series", "discontinued", "2019-02",
         28990, 29990, "Qualcomm Snapdragon 675", '6.39"', "Super AMOLED Ultra FullView FHD+", "1080 x 2316", 60,
         ["6GB", "8GB"], ["128GB"], "Triple (48MP Quad Pixel + 8MP AI UW + 5MP Depth) 32MP Pop-up", "48 MP, f/1.8, 1/2\", PDAF", "Motorized pop-up 32 MP", 3700, 18,
         False, "Android", "Funtouch OS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-v15-pro.jpg", "Vivo V15 Pro Topaz Blue",
         "8 MP, f/2.2, 13mm ultrawide", None, 0, "157.3 x 74.7 x 8.2 mm", 185, "Gorilla Glass 5, notch-free Ultra FullView screen, 32MP elevating selfie camera",
         ["Topaz Blue", "Ruby Red"], [("6GB", "128GB", 28990), ("8GB", "128GB", 29990)]),

        ("vivo-v20", "V20", "V Series", "discontinued", "2020-10",
         24990, 27990, "Qualcomm Snapdragon 720G", '6.44"', "AMOLED FHD+", "1080 x 2400", 60,
         ["8GB"], ["128GB", "256GB"], "Triple (64MP + 8MP UW + 2MP Mono), 44MP Eye Autofocus Selfie", "64 MP, f/1.9, 26mm, PDAF", "44 MP, f/2.0 Eye Autofocus", 4000, 33,
         False, "Android", "Funtouch OS", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-v20.jpg", "Vivo V20 Sunset Melody",
         "8 MP, f/2.2, 120˚ ultrawide", None, 0, "161.3 x 74.2 x 7.38 mm", 171, "Schott Xensation UP, 7.38mm ultra-slim matte glass finish, 33W FlashCharge",
         ["Sunset Melody", "Midnight Jazz", "Moonlight Sonata"], [("8GB", "128GB", 24990), ("8GB", "256GB", 27990)]),

        ("vivo-v23-pro", "V23 Pro", "V Series", "discontinued", "2022-01",
         38990, 43990, "MediaTek Dimensity 1200 5G", '6.56"', "AMOLED 90Hz HDR10+ 3D Curved", "1080 x 2376", 90,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (108MP + 8MP UW + 2MP Macro) Dual Selfie (50MP Eye AF + 8MP UW)", "108 MP, f/1.88, 26mm, PDAF", "Dual 50 MP Eye AF + 8 MP 105˚ ultrawide", 4300, 44,
         True, "Android", "Funtouch OS", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23-pro.jpg", "Vivo V23 Pro Sunshine Gold",
         "8 MP, f/2.2, 120˚ ultrawide", None, 0, "159.5 x 73.3 x 7.36 mm", 171, "Schott Xensation Max front, UV color-changing fluorite AG glass back, dual selfie flash",
         ["Sunshine Gold", "Stardust Black"], [("8GB", "128GB", 38990), ("12GB", "256GB", 43990)]),

        ("vivo-v27-pro", "V27 Pro", "V Series", "discontinued", "2023-03",
         37999, 42999, "MediaTek Dimensity 8200 (4nm)", '6.78"', "AMOLED 120Hz 1B colors HDR10+ 3D Curved", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (50MP Sony IMX766V OIS + 8MP UW + 2MP Macro) Aura Light", "50 MP, f/1.88, OIS, PDAF", "50 MP, f/2.45 Eye AF", 4600, 66,
         True, "Android", "Funtouch OS", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-v27-pro.jpg", "Vivo V27 Pro Magic Blue",
         "8 MP, f/2.2, 120˚ ultrawide", None, 0, "164.1 x 74.8 x 7.36 mm", 182, "Schott Xensation Alpha, color changing glass, ring LED Aura Light, 66W FlashCharge",
         ["Magic Blue", "Noble Black"], [("8GB", "128GB", 37999), ("12GB", "256GB", 42999)]),

        # T Series
        ("vivo-t1-5g", "T1 5G", "T Series", "discontinued", "2022-02",
         15990, 19990, "Qualcomm Snapdragon 695 5G", '6.58"', "IPS LCD 120Hz FHD+", "1080 x 2408", 120,
         ["4GB", "6GB", "8GB"], ["128GB"], "Triple (50MP + 2MP Macro + 2MP Depth)", "50 MP, f/1.8, 26mm, PDAF", "16 MP, f/2.0", 5000, 18,
         True, "Android", "Funtouch OS", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-t1-5g.jpg", "Vivo T1 5G Starlight Black",
         None, None, 0, "164.0 x 75.8 x 8.25 mm", 187, "Glass front, plastic back, 5-layer liquid cooling system",
         ["Starlight Black", "Rainbow Fantasy"], [("4GB", "128GB", 15990), ("6GB", "128GB", 16990), ("8GB", "128GB", 19990)]),

        ("vivo-t2-pro-5g", "T2 Pro 5G", "T Series", "discontinued", "2023-09",
         23999, 24999, "MediaTek Dimensity 7200 (4nm)", '6.78"', "AMOLED 120Hz 1B colors 3D Curved", "1080 x 2400", 120,
         ["8GB"], ["128GB", "256GB"], "Dual (64MP OIS + 2MP Bokeh) with Aura Light", "64 MP, f/1.79, OIS, PDAF", "16 MP, f/2.45", 4600, 66,
         True, "Android", "Funtouch OS", "Android 13", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-t2-pro.jpg", "Vivo T2 Pro 5G Dune Gold",
         None, None, 0, "164.1 x 74.8 x 7.36 mm", 175, "Schott Xensation Alpha glass, 3D curved AMOLED, Aura Light portrait, 66W FlashCharge",
         ["Dune Gold", "New Moon Black"], [("8GB", "128GB", 23999), ("8GB", "256GB", 24999)]),
    ]

    for item in vivo_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="Vivo", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.vivo.com/in/products/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "Vivo", img_url, alt))

    # ══════════════════════════════════════════════════════════════
    # 3. iQOO (Must be STRICTLY Brand: "iQOO" - independent brand)
    # ══════════════════════════════════════════════════════════════
    iqoo_data = [
        # Numbered Flagships
        ("iqoo-3", "iQOO 3", "iQOO 3", "discontinued", "2020-02",
         36990, 44990, "Qualcomm Snapdragon 865 5G", '6.44"', "Super AMOLED Polar View FHD+ HDR10+", "1080 x 2400", 60,
         ["8GB", "12GB"], ["128GB", "256GB"], "Quad (48MP Sony IMX582 + 13MP 20x Zoom + 13MP UW + 2MP) Monster Touch Triggers", "48 MP, f/1.79, PDAF", "16 MP, f/2.45", 4440, 55,
         True, "Android", "iQOO UI", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo3-5g.jpg", "iQOO 3 Volcano Orange",
         "13 MP, f/2.2, 120˚ ultrawide", "13 MP, f/2.46, 50mm 2x optical / 20x digital Telephoto", 0, "158.5 x 74.9 x 9.16 mm", 214.5, "Gorilla Glass 6 front/back, aluminum frame, Monster Touch capacitive shoulder buttons, 55W Super FlashCharge",
         ["Quantum Silver", "Tornado Black", "Volcano Orange"],
         [("8GB", "128GB", 36990), ("8GB", "256GB", 39990), ("12GB", "256GB", 44990)]),

        ("iqoo-7-5g", "iQOO 7 5G", "iQOO 7", "discontinued", "2021-04",
         31990, 35990, "Qualcomm Snapdragon 870 5G", '6.62"', "AMOLED 120Hz 1300 nits HDR10+", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (48MP Sony IMX598 OIS + 13MP UW + 2MP Mono) with Intelligent Display Chip", "48 MP, f/1.79, 25mm, OIS, PDAF", "16 MP, f/2.0", 4400, 66,
         True, "Android", "Funtouch OS for iQOO", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-7-india.jpg", "iQOO 7 Storm Black",
         "13 MP, f/2.2, 120˚ ultrawide", None, 0, "163.3 x 76.4 x 8.43 mm", 196, "Gorilla Glass 5, dedicated display chip for frame interpolation, 66W FlashCharge",
         ["Storm Black", "Solid Ice Blue"],
         [("8GB", "128GB", 31990), ("8GB", "256GB", 33990), ("12GB", "256GB", 35990)]),

        ("iqoo-7-legend-5g", "iQOO 7 Legend 5G", "iQOO 7", "discontinued", "2021-04",
         39990, 43990, "Qualcomm Snapdragon 888 5G", '6.62"', "AMOLED 120Hz HDR10+ Dual Monster Touch", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (48MP Sony IMX598 OIS + 13MP 2x Tele + 13MP UW) BMW M Motorsport", "48 MP, f/1.79, OIS, PDAF", "16 MP, f/2.0", 4000, 66,
         True, "Android", "Funtouch OS for iQOO", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-7.jpg", "iQOO 7 Legend BMW M Motorsport Edition",
         "13 MP, f/2.2, 120˚ ultrawide", "13 MP, f/2.46, 50mm 2x Telephoto Portrait", 0, "162.2 x 75.8 x 8.7 mm", 209.5, "Gorilla Glass 5, BMW M Motorsport tricolor racing stripe design, dual linear motors",
         ["Legend Edition"],
         [("8GB", "128GB", 39990), ("12GB", "256GB", 43990)]),

        ("iqoo-9-5g", "iQOO 9 5G", "iQOO 9", "discontinued", "2022-02",
         42990, 46990, "Qualcomm Snapdragon 888+ 5G", '6.56"', "AMOLED 120Hz 10-bit HDR10+", "1080 x 2376", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (48MP Gimbal OIS + 13MP 2x Tele + 13MP UW) 120W FlashCharge", "48 MP, f/1.79, Gimbal OIS, PDAF", "16 MP, f/2.45", 4350, 120,
         True, "Android", "Funtouch OS for iQOO", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-india.jpg", "iQOO 9 Alpha",
         "13 MP, f/2.2, 120˚ ultrawide", "13 MP, f/2.46, 50mm 2x Telephoto Portrait", 0, "159.1 x 75.1 x 8.6 mm", 202, "Schott Xensation glass, Gimbal stabilization, 120W FlashCharge (0-100% in 18 mins)",
         ["Legend", "Alpha"],
         [("8GB", "128GB", 42990), ("12GB", "256GB", 46990)]),

        ("iqoo-9-pro-5g", "iQOO 9 Pro 5G", "iQOO 9", "discontinued", "2022-02",
         64990, 69990, "Qualcomm Snapdragon 8 Gen 1 (4nm)", '6.78"', "LTPO2 E5 AMOLED 120Hz 2K WQHD+ 10-bit", "1440 x 3200", 120,
         ["8GB", "12GB"], ["256GB"], "Triple (50MP Gimbal OIS + 50MP 150˚ Fisheye UW + 16MP 2.5x Tele OIS)", "50 MP, f/1.75, Gimbal OIS, Dual Pixel PDAF", "16 MP, f/2.45", 4700, 120,
         True, "Android", "Funtouch OS for iQOO", "Android 12", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-pro.jpg", "iQOO 9 Pro Legend",
         "50 MP, f/2.2, 150˚ Fisheye ultrawide", "16 MP, f/2.23, 60mm 2.5x Telephoto, OIS", 50, "164.8 x 75.2 x 8.83 mm", 209.9, "Gorilla Glass Victus, BMW M Motorsport livery, 120W wired / 50W wireless FlashCharge, 3D ultrasonic fingerprint",
         ["Legend", "Dark Cruise"],
         [("8GB", "256GB", 64990), ("12GB", "256GB", 69990)]),

        ("iqoo-9t-5g", "iQOO 9T 5G", "iQOO 9", "discontinued", "2022-08",
         49999, 54999, "Qualcomm Snapdragon 8+ Gen 1 (4nm)", '6.78"', "E5 AMOLED 120Hz HDR10+ Dual Monster Touch", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (50MP Samsung GN5 OIS + 12MP 2x Tele + 13MP UW) with Vivo V1+ Chip", "50 MP, f/1.88, OIS, Dual Pixel PDAF", "16 MP, f/2.45", 4700, 120,
         True, "Android", "Funtouch OS for iQOO", "Android 12", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9t.jpg", "iQOO 9T Legend",
         "13 MP, f/2.2, 120˚ ultrawide", "12 MP, f/1.98, 50mm 2x Telephoto Portrait", 0, "164.5 x 77.1 x 8.37 mm", 207, "Gorilla Glass 5, V1+ dedicated imaging chip, 120W FlashCharge",
         ["Legend", "Alpha"],
         [("8GB", "128GB", 49999), ("12GB", "256GB", 54999)]),

        # Neo Series
        ("iqoo-neo-6-5g", "iQOO Neo 6 5G", "Neo 6", "discontinued", "2022-05",
         29999, 33999, "Qualcomm Snapdragon 870 5G", '6.62"', "E4 AMOLED 120Hz 1300 nits HDR10+", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (64MP OIS + 8MP UW + 2MP Macro) 80W FlashCharge", "64 MP, f/1.89, OIS, PDAF", "16 MP, f/2.0", 4700, 80,
         True, "Android", "Funtouch OS for iQOO", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo6-india.jpg", "iQOO Neo 6 Dark Nova",
         "8 MP, f/2.2, 116˚ ultrawide", None, 0, "163.0 x 76.2 x 8.54 mm", 190, "Glass front, cascade cooling system, 80W FlashCharge",
         ["Dark Nova", "Cyber Rage"],
         [("8GB", "128GB", 29999), ("12GB", "256GB", 33999)]),

        # Z Series
        ("iqoo-z3-5g", "iQOO Z3 5G", "Z Series", "discontinued", "2021-06",
         19990, 22990, "Qualcomm Snapdragon 768G 5G", '6.58"', "IPS LCD 120Hz HDR10", "1080 x 2408", 120,
         ["6GB", "8GB"], ["128GB", "256GB"], "Triple (64MP Samsung GW3 + 8MP UW + 2MP Macro) 55W FlashCharge", "64 MP, f/1.79, PDAF", "16 MP, f/2.0", 4400, 55,
         True, "Android", "Funtouch OS for iQOO", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z3.jpg", "iQOO Z3 Ace Black",
         "8 MP, f/2.2, 120˚ ultrawide", None, 0, "163.95 x 75.3 x 8.5 mm", 185.5, "Glass front, five-layer liquid cooling, 55W FlashCharge",
         ["Ace Black", "Cyber Blue"],
         [("6GB", "128GB", 19990), ("8GB", "128GB", 20990), ("8GB", "256GB", 22990)]),

        ("iqoo-z5-5g", "iQOO Z5 5G", "Z Series", "discontinued", "2021-09",
         23990, 26990, "Qualcomm Snapdragon 778G 5G", '6.67"', "IPS LCD 120Hz HDR10", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (64MP + 8MP UW + 2MP Macro), 5000 mAh Battery", "64 MP, f/1.79, 26mm, PDAF", "16 MP, f/2.45", 5000, 44,
         True, "Android", "Funtouch OS for iQOO", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z5.jpg", "iQOO Z5 Mystic Space",
         "8 MP, f/2.2, 120˚ ultrawide", None, 0, "164.7 x 76.7 x 8.49 mm", 193, "Glass front, plastic back, flagship VC liquid cooling, dual stereo speakers",
         ["Mystic Space", "Arctic Dawn"],
         [("8GB", "128GB", 23990), ("12GB", "256GB", 26990)]),

        ("iqoo-z6-pro-5g", "iQOO Z6 Pro 5G", "Z Series", "discontinued", "2022-04",
         23999, 28999, "Qualcomm Snapdragon 778G 5G", '6.44"', "AMOLED 90Hz 1300 nits HDR10+", "1080 x 2404", 90,
         ["6GB", "8GB", "12GB"], ["128GB", "256GB"], "Triple (64MP + 8MP UW + 2MP Macro) 66W FlashCharge", "64 MP, f/1.79, 26mm, PDAF", "16 MP, f/2.0", 4700, 66,
         True, "Android", "Funtouch OS for iQOO", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6-pro.jpg", "iQOO Z6 Pro Legion Sky",
         "8 MP, f/2.2, 116˚ ultrawide", None, 0, "159.7 x 73.6 x 8.49 mm", 180, "Schott Xensation glass, 32923 mm² flagship liquid cooling, 66W FlashCharge",
         ["Legion Sky", "Phantom Dusk"],
         [("6GB", "128GB", 23999), ("8GB", "128GB", 24999), ("12GB", "256GB", 28999)]),

        ("iqoo-z7-5g", "iQOO Z7 5G", "Z Series", "discontinued", "2023-03",
         14999, 16999, "MediaTek Dimensity 920 5G (6nm)", '6.38"', "AMOLED 90Hz HDR10+", "1080 x 2400", 90,
         ["6GB", "8GB"], ["128GB"], "Dual (64MP OIS + 2MP Bokeh) 44W FlashCharge", "64 MP, f/1.79, OIS, PDAF", "16 MP, f/2.0", 4500, 44,
         True, "Android", "Funtouch OS for iQOO", "Android 13", "IP54",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7.jpg", "iQOO Z7 5G Norway Blue",
         None, None, 0, "158.9 x 73.5 x 7.8 mm", 173, "Schott Xensation glass, ultra-bright AMOLED, 64MP OIS ultra-stable camera",
         ["Norway Blue", "Pacific Night"],
         [("6GB", "128GB", 14999), ("8GB", "128GB", 16999)]),

        ("iqoo-z7-pro-5g", "iQOO Z7 Pro 5G", "Z Series", "discontinued", "2023-08",
         23999, 24999, "MediaTek Dimensity 7200 (4nm)", '6.78"', "AMOLED 120Hz 1B colors 3D Curved", "1080 x 2400", 120,
         ["8GB"], ["128GB", "256GB"], "Dual (64MP OIS + 2MP Bokeh) with Aura Light", "64 MP, f/1.79, OIS, PDAF", "16 MP, f/2.45", 4600, 66,
         True, "Android", "Funtouch OS for iQOO", "Android 13", "IP52",
         "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7-pro.jpg", "iQOO Z7 Pro 5G Blue Lagoon",
         None, None, 0, "164.1 x 74.8 x 7.36 mm", 175, "Schott Xensation Alpha, 3D curved display, Aura Light, 66W FlashCharge",
         ["Blue Lagoon", "Graphite Matte"],
         [("8GB", "128GB", 23999), ("8GB", "256GB", 24999)]),
    ]

    for item in iqoo_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="iQOO", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.iqoo.com/in/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "iQOO", img_url, alt))

    # ══════════════════════════════════════════════════════════════
    # 4. REALME
    # ══════════════════════════════════════════════════════════════
    realme_data = [
        # Numbered & Pro
        ("realme-1", "realme 1", "realme 1", "discontinued", "2018-05",
         8990, 13990, "MediaTek Helio P60", '6.0"', "IPS LCD 18:9 FHD+", "1080 x 2160", 60,
         ["3GB", "4GB", "6GB"], ["32GB", "64GB", "128GB"], "Single 13MP, Diamond Black Design", "13 MP, f/2.2, PDAF", "8 MP, f/2.2", 3410, 10,
         False, "Android", "ColorOS", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-1.jpg", "realme 1 Diamond Black",
         None, None, 0, "156.5 x 75.2 x 7.8 mm", 155, "Corning Gorilla Glass 3, unique 3D diamond cut reflective pattern",
         ["Diamond Black", "Solar Red", "Moonlight Silver"],
         [("3GB", "32GB", 8990), ("4GB", "64GB", 10990), ("6GB", "128GB", 13990)]),

        ("realme-2-pro", "realme 2 Pro", "realme 2", "discontinued", "2018-09",
         13990, 17990, "Qualcomm Snapdragon 660 AIE", '6.3"', "IPS LCD Dewdrop Notch FHD+", "1080 x 2340", 60,
         ["4GB", "6GB", "8GB"], ["64GB", "128GB"], "Dual (16MP Sony IMX398 + 2MP Depth)", "16 MP, f/1.7, 1/2.8\", Dual Pixel PDAF", "16 MP, f/2.0", 3500, 10,
         False, "Android", "ColorOS", "Android 8.1", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-2-pro.jpg", "realme 2 Pro Ice Lake",
         None, None, 0, "156.7 x 74.0 x 8.5 mm", 174, "Corning Gorilla Glass 3, multilayer laminated crystalline finish",
         ["Ice Lake", "Blue Ocean", "Black Sea"],
         [("4GB", "64GB", 13990), ("6GB", "64GB", 15990), ("8GB", "128GB", 17990)]),

        ("realme-3-pro", "realme 3 Pro", "realme 3", "discontinued", "2019-04",
         13999, 16999, "Qualcomm Snapdragon 710", '6.3"', "IPS LCD Dewdrop Notch FHD+", "1080 x 2340", 60,
         ["4GB", "6GB"], ["64GB", "128GB"], "Dual (16MP Sony IMX519 + 5MP Depth) VOOC 3.0", "16 MP, f/1.7, 1/2.6\", Dual Pixel PDAF", "25 MP, f/2.0", 4045, 20,
         False, "Android", "ColorOS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-3-pro.jpg", "realme 3 Pro Nitro Blue",
         None, None, 0, "156.8 x 74.2 x 8.3 mm", 172, "Corning Gorilla Glass 5, Speedway curved S-shaped light grading, 20W VOOC 3.0",
         ["Nitro Blue", "Lightning Purple", "Carbon Grey"],
         [("4GB", "64GB", 13999), ("6GB", "64GB", 15999), ("6GB", "128GB", 16999)]),

        ("realme-5-pro", "realme 5 Pro", "realme 5", "discontinued", "2019-08",
         13999, 16999, "Qualcomm Snapdragon 712", '6.3"', "IPS LCD Dewdrop Notch FHD+", "1080 x 2340", 60,
         ["4GB", "6GB", "8GB"], ["64GB", "128GB"], "Quad (48MP Sony IMX586 + 8MP UW + 2MP Macro + 2MP Depth) VOOC 3.0", "48 MP, f/1.8, 1/2.0\", PDAF", "16 MP, f/2.0", 4035, 20,
         False, "Android", "ColorOS", "Android 9.0", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro.jpg", "realme 5 Pro Crystal Green",
         "8 MP, f/2.2, 119˚ ultrawide", None, 0, "157.0 x 74.2 x 8.9 mm", 184, "Corning Gorilla Glass 3+, holographic diamond cut, splash resistant",
         ["Crystal Green", "Crystal Blue"],
         [("4GB", "64GB", 13999), ("6GB", "64GB", 14999), ("8GB", "128GB", 16999)]),

        ("realme-6-pro", "realme 6 Pro", "realme 6", "discontinued", "2020-03",
         16999, 18999, "Qualcomm Snapdragon 720G", '6.6"', "IPS LCD 90Hz Dual Punch-Hole FHD+", "1080 x 2400", 90,
         ["6GB", "8GB"], ["64GB", "128GB"], "Quad (64MP Samsung GW1 + 12MP 2x Tele + 8MP UW + 2MP Macro) Dual In-Display Selfie", "64 MP, f/1.8, 26mm, PDAF", "Dual 16 MP + 8 MP 105˚ ultrawide", 4300, 30,
         False, "Android", "realme UI", "Android 10", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-6-pro.jpg", "realme 6 Pro Lightning Blue",
         "8 MP, f/2.3, 119˚ ultrawide", "12 MP, f/2.5, 54mm 2x Telephoto", 0, "163.8 x 75.8 x 8.9 mm", 202, "Corning Gorilla Glass 5 front/back, 90Hz Pro display, 30W Flash Charge",
         ["Lightning Blue", "Lightning Orange", "Lightning Red"],
         [("6GB", "64GB", 16999), ("6GB", "128GB", 17999), ("8GB", "128GB", 18999)]),

        ("realme-7-pro", "realme 7 Pro", "realme 7", "discontinued", "2020-09",
         19999, 21999, "Qualcomm Snapdragon 720G", '6.4"', "Super AMOLED FHD+", "1080 x 2400", 60,
         ["6GB", "8GB"], ["128GB"], "Quad (64MP Sony IMX682 + 8MP UW + 2MP Macro + 2MP Depth) 65W SuperDart", "64 MP, f/1.8, 26mm, PDAF", "32 MP, f/2.5", 4500, 65,
         False, "Android", "realme UI", "Android 10", "Water-repellent coating",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-7-pro.jpg", "realme 7 Pro Mirror Blue",
         "8 MP, f/2.3, 119˚ ultrawide", None, 0, "160.9 x 74.3 x 8.7 mm", 182, "Gorilla Glass 3+, mirror split design, stereo dual speakers, 65W SuperDart (0-100% in 34 mins)",
         ["Mirror Blue", "Mirror Silver", "Sun Kissed Leather"],
         [("6GB", "128GB", 19999), ("8GB", "128GB", 21999)]),

        ("realme-8-pro", "realme 8 Pro", "realme 8", "discontinued", "2021-03",
         17999, 19999, "Qualcomm Snapdragon 720G", '6.4"', "Super AMOLED 1000 nits FHD+", "1080 x 2400", 60,
         ["6GB", "8GB"], ["128GB"], "Quad (108MP Samsung HM2 + 8MP UW + 2MP Macro + 2MP Depth) 50W SuperDart", "108 MP, f/1.88, 26mm, PDAF", "16 MP, f/2.45", 4500, 50,
         False, "Android", "realme UI", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-8-pro.jpg", "realme 8 Pro Infinite Blue",
         "8 MP, f/2.25, 119˚ ultrawide", None, 0, "160.6 x 73.9 x 8.1 mm", 176, "Asahi Glass Dragontrail, infinite starry design with 'DARE TO LEAP' slogan, 108MP 3x Ultra Zoom",
         ["Infinite Blue", "Infinite Black", "Punk Black", "Illuminating Yellow"],
         [("6GB", "128GB", 17999), ("8GB", "128GB", 19999)]),

        ("realme-9-pro-plus-5g", "realme 9 Pro+ 5G", "realme 9", "discontinued", "2022-02",
         24999, 28999, "MediaTek Dimensity 920 5G (6nm)", '6.4"', "Super AMOLED 90Hz HDR10+ Heart Rate Sensor", "1080 x 2400", 90,
         ["6GB", "8GB"], ["128GB", "256GB"], "Triple (50MP Sony IMX766 OIS + 8MP UW + 2MP Macro) Light Shift Design", "50 MP, f/1.8, 24mm, OIS, PDAF", "16 MP, f/2.4", 4500, 60,
         True, "Android", "realme UI", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-9-pro-plus.jpg", "realme 9 Pro+ Sunrise Blue",
         "8 MP, f/2.2, 119˚ ultrawide", None, 0, "160.2 x 73.3 x 7.99 mm", 182, "Gorilla Glass 5 front/back, photochromic Light Shift back changes color under sunlight, in-display heart rate sensor",
         ["Sunrise Blue", "Midnight Black", "Aurora Green"],
         [("6GB", "128GB", 24999), ("8GB", "128GB", 26999), ("8GB", "256GB", 28999)]),

        ("realme-10-pro-plus-5g", "realme 10 Pro+ 5G", "realme 10", "discontinued", "2022-12",
         24999, 27999, "MediaTek Dimensity 1080 5G (6nm)", '6.7"', "AMOLED 120Hz 1B colors HDR10+ 2160Hz PWM Curved", "1080 x 2412", 120,
         ["6GB", "8GB"], ["128GB", "256GB"], "Triple (108MP Samsung HM6 + 8MP UW + 2MP Macro) 67W SuperVOOC", "108 MP, f/1.75, 24mm, PDAF", "16 MP, f/2.45", 5000, 67,
         True, "Android", "realme UI", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-10-pro-plus.jpg", "realme 10 Pro+ Hyperspace Gold",
         "8 MP, f/2.2, 112˚ ultrawide", None, 0, "161.5 x 73.9 x 7.78 mm", 173, "Double-reinforced 0.65mm glass, 61˚ precision curved vision display, 2160Hz ultra-high frequency dimming",
         ["Hyperspace Gold", "Dark Matter", "Nebula Blue"],
         [("6GB", "128GB", 24999), ("8GB", "128GB", 25999), ("8GB", "256GB", 27999)]),

        ("realme-11-pro-plus-5g", "realme 11 Pro+ 5G", "realme 11", "discontinued", "2023-06",
         27999, 29999, "MediaTek Dimensity 7050 5G (6nm)", '6.7"', "AMOLED 120Hz 1B colors HDR10+ 2160Hz PWM Curved", "1080 x 2412", 120,
         ["8GB", "12GB"], ["256GB"], "Triple (200MP Samsung HP3 OIS + 8MP UW + 2MP Macro) 100W SuperVOOC", "200 MP, f/1.69, 23mm, OIS, Super QPD", "32 MP Sony IMX615", 5000, 100,
         True, "Android", "realme UI", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-11-pro-plus.jpg", "realme 11 Pro+ Sunrise Beige",
         "8 MP, f/2.2, 112˚ ultrawide", None, 0, "161.6 x 73.9 x 8.7 mm", 189, "Double-reinforced glass front, Matteo Menotto (former GUCCI designer) premium lychee vegan leather back",
         ["Sunrise Beige", "Oasis Green", "Astral Black"],
         [("8GB", "256GB", 27999), ("12GB", "256GB", 29999)]),

        # X & GT Series
        ("realme-x", "realme X", "realme X", "discontinued", "2019-07",
         16999, 19999, "Qualcomm Snapdragon 710", '6.53"', "AMOLED Full Screen FHD+", "1080 x 2340", 60,
         ["4GB", "8GB"], ["128GB"], "Dual (48MP Sony IMX586 + 5MP Depth) Pop-up Selfie", "48 MP, f/1.7, 1/2.0\", PDAF", "Motorized pop-up 16 MP", 3765, 20,
         False, "Android", "ColorOS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-x.jpg", "realme X Polar White",
         None, None, 0, "161.2 x 76.0 x 9.4 mm", 191, "Gorilla Glass 5, notch-free true full screen, pop-up camera, in-display fingerprint, VOOC 3.0",
         ["Polar White", "Space Blue", "Onion Edition", "Garlic Edition"],
         [("4GB", "128GB", 16999), ("8GB", "128GB", 19999)]),

        ("realme-xt", "realme XT", "realme X", "discontinued", "2019-09",
         15999, 18999, "Qualcomm Snapdragon 712", '6.4"', "Super AMOLED Dewdrop FHD+", "1080 x 2340", 60,
         ["4GB", "6GB", "8GB"], ["64GB", "128GB"], "Quad (64MP Samsung GW1 + 8MP UW + 2MP Macro + 2MP Depth) VOOC 3.0", "64 MP, f/1.8, 1/1.72\", PDAF", "16 MP, f/2.0", 4000, 20,
         False, "Android", "ColorOS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-xt.jpg", "realme XT Pearl White",
         "8 MP, f/2.25, 119˚ ultrawide", None, 0, "158.7 x 75.4 x 8.6 mm", 183, "Gorilla Glass 5 front/back, India's first 64MP quad camera, in-display fingerprint",
         ["Pearl White", "Pearl Blue"],
         [("4GB", "64GB", 15999), ("6GB", "64GB", 16999), ("8GB", "128GB", 18999)]),

        ("realme-x2-pro", "realme X2 Pro", "realme X", "discontinued", "2019-11",
         29999, 33999, "Qualcomm Snapdragon 855+", '6.5"', "Super AMOLED 90Hz 1000 nits HDR10+", "1080 x 2400", 90,
         ["8GB", "12GB"], ["128GB", "256GB"], "Quad (64MP Samsung GW1 + 13MP 2x Tele + 8MP UW + 2MP Mono) 50W SuperVOOC", "64 MP, f/1.8, 26mm, PDAF", "16 MP, f/2.0", 4000, 50,
         False, "Android", "ColorOS", "Android 9.0", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-x2-pro.jpg", "realme X2 Pro Lunar White",
         "8 MP, f/2.2, 115˚ ultrawide", "13 MP, f/2.5, 52mm 2x optical / 20x hybrid Telephoto", 0, "161.0 x 75.7 x 8.7 mm", 199, "Gorilla Glass 5 front/back, metal frame, stereo dual speakers with Dolby Atmos, 50W SuperVOOC (0-100% in 35 mins)",
         ["Lunar White", "Neptune Blue", "Red Brick Master", "Concrete Master"],
         [("8GB", "128GB", 29999), ("12GB", "256GB", 33999)]),

        ("realme-gt-5g", "realme GT 5G", "realme GT", "discontinued", "2021-08",
         37999, 41999, "Qualcomm Snapdragon 888 5G", '6.43"', "Super AMOLED 120Hz 1000 nits", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (64MP Sony IMX682 + 8MP UW + 2MP Macro) 65W SuperDart", "64 MP, f/1.8, 26mm, PDAF", "16 MP, f/2.5", 4500, 65,
         True, "Android", "realme UI", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-5g.jpg", "realme GT Racing Yellow",
         "8 MP, f/2.3, 119˚ ultrawide", None, 0, "158.5 x 73.3 x 8.4 mm", 186, "Glass front, dual-tone vegan leather racing stripe back / glass back, stainless steel VC cooling",
         ["Racing Yellow", "Dashing Silver", "Dashing Blue"],
         [("8GB", "128GB", 37999), ("12GB", "256GB", 41999)]),

        ("realme-gt-neo-2", "realme GT Neo 2", "realme GT", "discontinued", "2021-10",
         31999, 35999, "Qualcomm Snapdragon 870 5G", '6.62"', "E4 AMOLED 120Hz 1300 nits HDR10+", "1080 x 2400", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (64MP + 8MP UW + 2MP Macro) 65W SuperDart", "64 MP, f/1.8, 26mm, PDAF", "16 MP, f/2.5", 5000, 65,
         True, "Android", "realme UI", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-neo2.jpg", "realme GT Neo 2 NEO Green",
         "8 MP, f/2.3, 119˚ ultrawide", None, 0, "162.9 x 75.8 x 8.6 mm", 200, "Gorilla Glass 5, stainless steel vapor cooling plus with diamond thermal gel, 65W SuperDart",
         ["NEO Green", "NEO Blue", "NEO Black"],
         [("8GB", "128GB", 31999), ("12GB", "256GB", 35999)]),

        ("realme-gt-neo-3", "realme GT Neo 3", "realme GT", "discontinued", "2022-04",
         36999, 42999, "MediaTek Dimensity 8100 5G (5nm)", '6.7"', "AMOLED 120Hz 1B colors HDR10+", "1080 x 2412", 120,
         ["8GB", "12GB"], ["128GB", "256GB"], "Triple (50MP Sony IMX766 OIS + 8MP UW + 2MP Macro) 150W UltraDart", "50 MP, f/1.88, 24mm, OIS, PDAF", "16 MP, f/2.45", 5000, 80,
         True, "Android", "realme UI", "Android 12", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-neo3.jpg", "realme GT Neo 3 Nitro Blue",
         "8 MP, f/2.25, 120˚ ultrawide", None, 0, "163.3 x 75.6 x 8.2 mm", 188, "Gorilla Glass 5 front/back, iconic racing stripe design, dedicated display processor, 80W/150W UltraDart options",
         ["Nitro Blue", "Sprint White", "Asphalt Black"],
         [("8GB", "128GB", 36999), ("8GB", "256GB", 38999), ("12GB", "256GB", 42999)]),

        # Narzo Series
        ("realme-narzo-10", "realme Narzo 10", "Narzo", "discontinued", "2020-05",
         11999, 11999, "MediaTek Helio G80", '6.5"', "IPS LCD Mini-drop HD+", "720 x 1600", 60,
         ["4GB"], ["128GB"], "Quad (48MP + 8MP UW + 2MP Macro + 2MP Depth), 5000 mAh Battery", "48 MP, f/1.8, 26mm, PDAF", "16 MP, f/2.0", 5000, 18,
         False, "Android", "realme UI", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-10.jpg", "realme Narzo 10 That Green",
         "8 MP, f/2.25, 119˚ ultrawide", None, 0, "164.4 x 75.4 x 9.0 mm", 199, "Gorilla Glass 3, Naoto Fukasawa Japanese minimalist line art back, 18W Quick Charge",
         ["That Green", "That White", "That Blue"], [("4GB", "128GB", 11999)]),

        ("realme-narzo-20-pro", "realme Narzo 20 Pro", "Narzo", "discontinued", "2020-09",
         14999, 16999, "MediaTek Helio G95", '6.5"', "IPS LCD 90Hz FHD+", "1080 x 2400", 90,
         ["6GB", "8GB"], ["64GB", "128GB"], "Quad (48MP + 8MP UW + 2MP Macro + 2MP Depth) 65W SuperDart", "48 MP, f/1.8, 26mm, PDAF", "16 MP, f/2.1", 4500, 65,
         False, "Android", "realme UI", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-20-pro.jpg", "realme Narzo 20 Pro White Knight",
         "8 MP, f/2.3, 119˚ ultrawide", None, 0, "162.3 x 75.4 x 9.4 mm", 191, "Corning Gorilla Glass 3+, V-shaped Victory chevron pattern, 65W SuperDart Charge",
         ["White Knight", "Black Ninja"],
         [("6GB", "64GB", 14999), ("8GB", "128GB", 16999)]),

        ("realme-c55", "realme C55", "realme C", "discontinued", "2023-03",
         10999, 13999, "MediaTek Helio G88", '6.72"', "IPS LCD 90Hz FHD+ Mini Capsule", "1080 x 2400", 90,
         ["4GB", "6GB", "8GB"], ["64GB", "128GB"], "Dual (64MP + 2MP Depth) Mini Capsule Dynamic Island", "64 MP, f/1.79, 1/2\", PDAF", "8 MP, f/2.0", 5000, 33,
         False, "Android", "realme UI", "Android 13", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/realme-c55.jpg", "realme C55 Sunshower",
         None, None, 0, "165.6 x 75.9 x 7.89 mm", 189.5, "Panda Glass, Sunshower micro-level glitter sand texture, Android's first Mini Capsule dynamic notification island, 33W SUPERVOOC",
         ["Sunshower", "Rainy Night"],
         [("4GB", "64GB", 10999), ("6GB", "64GB", 11999), ("8GB", "128GB", 13999)]),
    ]

    for item in realme_data:
        m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr, rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip, img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs = item
        model = make_model(
            model_id=m_id, brand="realme", model_name=m_name, generation=gen, status=status, launch_date=l_date,
            starting_price=sp, max_price=mp, chipset=chip, display_size=d_sz, display_type=d_typ, resolution=res, refresh_rate=rr,
            ram_options=rams, storage_options=storages, rear_camera_setup=r_cam, main_camera=m_cam, front_camera=f_cam,
            battery_capacity=bat, wired_charging=chg, has_5g=h5g, os=os_name, ui=ui, launch_os=l_os, water_resistance=ip,
            image_url=img_url, alt_text=alt, ultrawide_camera=uw, telephoto_camera=tele, wireless_charging=wchg,
            dimensions=dims, weight=wt, materials=mat, colors=clrs, official_source=f"https://www.realme.com/in/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "realme", img_url, alt))

    out_file = os.path.join(os.path.dirname(__file__), "..", "mobile_data", "additions_bbk.ts")
    write_bundle_ts(out_file, "bbkAdditionsBundle", models, variants, images)

if __name__ == "__main__":
    build_bbk()
