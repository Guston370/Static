import os
from common import make_model, make_variants, make_image_entry, write_bundle_ts

def build_google_additions():
    models = []
    variants = []
    images = []

    google_data = [
        # Pixel (1st gen)
        ("google-pixel", "Pixel", "Pixel 1", "discontinued", "2016-10",
         57000, 66000, "Qualcomm Snapdragon 821", '5.0"', "AMOLED", "1080 x 1920", 60,
         ["4GB"], ["32GB", "128GB"], "Single 12.3MP", "12.3MP, f/2.0, 1.55µm, PDAF & laser AF", "8 MP, f/2.4", 2770, 18,
         False, "Android", "Stock Android", "Android 7.1", "IP53",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel.jpg", "Google Pixel Quite Black",
         None, None, 0, "143.8 x 69.5 x 8.5 mm", 143, "Corning Gorilla Glass 4, aluminum body",
         ["Quite Black", "Very Silver"],
         [("4GB", "32GB", 57000), ("4GB", "128GB", 66000)]),

        # Pixel XL
        ("google-pixel-xl", "Pixel XL", "Pixel 1", "discontinued", "2016-10",
         67000, 76000, "Qualcomm Snapdragon 821", '5.5"', "AMOLED", "1440 x 2560", 60,
         ["4GB"], ["32GB", "128GB"], "Single 12.3MP", "12.3MP, f/2.0, 1.55µm, PDAF & laser AF", "8 MP, f/2.4", 3450, 18,
         False, "Android", "Stock Android", "Android 7.1", "IP53",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-xl.jpg", "Google Pixel XL Very Silver",
         None, None, 0, "154.7 x 75.7 x 8.5 mm", 168, "Corning Gorilla Glass 4, aluminum body",
         ["Quite Black", "Very Silver"],
         [("4GB", "32GB", 67000), ("4GB", "128GB", 76000)]),

        # Pixel 2
        ("google-pixel-2", "Pixel 2", "Pixel 2", "discontinued", "2017-10",
         61000, 70000, "Qualcomm Snapdragon 835", '5.0"', "AMOLED", "1080 x 1920", 60,
         ["4GB"], ["64GB", "128GB"], "Single 12.2MP OIS", "12.2MP, f/1.8, 27mm, OIS, dual pixel PDAF", "8 MP, f/2.4", 2700, 18,
         False, "Android", "Stock Android", "Android 8.0", "IP67",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-2.jpg", "Google Pixel 2 Just Black",
         None, None, 0, "145.7 x 69.7 x 7.8 mm", 143, "Corning Gorilla Glass 5, aluminum body",
         ["Just Black", "Clearly White", "Kinda Blue"],
         [("4GB", "64GB", 61000), ("4GB", "128GB", 70000)]),

        # Pixel 2 XL
        ("google-pixel-2-xl", "Pixel 2 XL", "Pixel 2", "discontinued", "2017-10",
         73000, 82000, "Qualcomm Snapdragon 835", '6.0"', "P-OLED", "1440 x 2880", 60,
         ["4GB"], ["64GB", "128GB"], "Single 12.2MP OIS", "12.2MP, f/1.8, 27mm, OIS, dual pixel PDAF", "8 MP, f/2.4", 3520, 18,
         False, "Android", "Stock Android", "Android 8.0", "IP67",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-2-xl.jpg", "Google Pixel 2 XL Black & White",
         None, None, 0, "157.9 x 76.7 x 7.9 mm", 175, "Corning Gorilla Glass 5, aluminum body",
         ["Just Black", "Black & White"],
         [("4GB", "64GB", 73000), ("4GB", "128GB", 82000)]),

        # Pixel 3
        ("google-pixel-3", "Pixel 3", "Pixel 3", "discontinued", "2018-10",
         71000, 80000, "Qualcomm Snapdragon 845", '5.5"', "P-OLED HDR", "1080 x 2160", 60,
         ["4GB"], ["64GB", "128GB"], "Single 12.2MP OIS", "12.2MP, f/1.8, 28mm, OIS, dual pixel PDAF", "Dual 8MP wide + 8MP ultrawide", 2915, 18,
         False, "Android", "Stock Android", "Android 9.0", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3.jpg", "Google Pixel 3 Clearly White",
         None, None, 10, "145.6 x 68.2 x 7.9 mm", 148, "Gorilla Glass 5 front/back, aluminum frame",
         ["Clearly White", "Just Black", "Not Pink"],
         [("4GB", "64GB", 71000), ("4GB", "128GB", 80000)]),

        # Pixel 3 XL
        ("google-pixel-3-xl", "Pixel 3 XL", "Pixel 3", "discontinued", "2018-10",
         83000, 92000, "Qualcomm Snapdragon 845", '6.3"', "P-OLED HDR", "1440 x 2960", 60,
         ["4GB"], ["64GB", "128GB"], "Single 12.2MP OIS", "12.2MP, f/1.8, 28mm, OIS, dual pixel PDAF", "Dual 8MP wide + 8MP ultrawide", 3430, 18,
         False, "Android", "Stock Android", "Android 9.0", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3-xl.jpg", "Google Pixel 3 XL Just Black",
         None, None, 10, "158.0 x 76.7 x 7.9 mm", 184, "Gorilla Glass 5 front/back, aluminum frame",
         ["Clearly White", "Just Black", "Not Pink"],
         [("4GB", "64GB", 83000), ("4GB", "128GB", 92000)]),

        # Pixel 3a
        ("google-pixel-3a", "Pixel 3a", "Pixel 3a", "discontinued", "2019-05",
         39999, 39999, "Qualcomm Snapdragon 670", '5.6"', "OLED", "1080 x 2220", 60,
         ["4GB"], ["64GB"], "Single 12.2MP OIS", "12.2MP, f/1.8, 28mm, OIS, dual pixel PDAF", "8 MP, f/2.0", 3000, 18,
         False, "Android", "Stock Android", "Android 9.0", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3a.jpg", "Google Pixel 3a Clearly White",
         None, None, 0, "151.3 x 70.1 x 8.2 mm", 147, "Asahi Dragontrail Glass, polycarbonate body",
         ["Just Black", "Clearly White", "Purple-ish"],
         [("4GB", "64GB", 39999)]),

        # Pixel 3a XL
        ("google-pixel-3a-xl", "Pixel 3a XL", "Pixel 3a", "discontinued", "2019-05",
         44999, 44999, "Qualcomm Snapdragon 670", '6.0"', "OLED", "1080 x 2160", 60,
         ["4GB"], ["64GB"], "Single 12.2MP OIS", "12.2MP, f/1.8, 28mm, OIS, dual pixel PDAF", "8 MP, f/2.0", 3700, 18,
         False, "Android", "Stock Android", "Android 9.0", "Splash resistant",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3a-xl.jpg", "Google Pixel 3a XL Just Black",
         None, None, 0, "160.1 x 76.1 x 8.2 mm", 167, "Asahi Dragontrail Glass, polycarbonate body",
         ["Just Black", "Clearly White", "Purple-ish"],
         [("4GB", "64GB", 44999)]),

        # Pixel 4
        ("google-pixel-4", "Pixel 4", "Pixel 4", "discontinued", "2019-10",
         64999, 73999, "Qualcomm Snapdragon 855", '5.7"', "P-OLED 90Hz", "1080 x 2280", 90,
         ["6GB"], ["64GB", "128GB"], "Dual (12.2MP + 16MP Tele)", "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF", "8 MP, f/2.0 + TOF 3D", 2800, 18,
         False, "Android", "Stock Android", "Android 10", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4.jpg", "Google Pixel 4 Clearly White",
         None, "16 MP, f/2.4, 2x Telephoto, OIS", 11, "147.1 x 68.8 x 8.2 mm", 162, "Gorilla Glass 5, aluminum frame",
         ["Clearly White", "Just Black", "Oh So Orange"],
         [("6GB", "64GB", 64999), ("6GB", "128GB", 73999)]),

        # Pixel 4 XL
        ("google-pixel-4-xl", "Pixel 4 XL", "Pixel 4", "discontinued", "2019-10",
         74999, 83999, "Qualcomm Snapdragon 855", '6.3"', "P-OLED 90Hz", "1440 x 3040", 90,
         ["6GB"], ["64GB", "128GB"], "Dual (12.2MP + 16MP Tele)", "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF", "8 MP, f/2.0 + TOF 3D", 3700, 18,
         False, "Android", "Stock Android", "Android 10", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4-xl.jpg", "Google Pixel 4 XL Oh So Orange",
         None, "16 MP, f/2.4, 2x Telephoto, OIS", 11, "160.4 x 75.1 x 8.2 mm", 193, "Gorilla Glass 5, aluminum frame",
         ["Clearly White", "Just Black", "Oh So Orange"],
         [("6GB", "64GB", 74999), ("6GB", "128GB", 83999)]),

        # Pixel 4a
        ("google-pixel-4a", "Pixel 4a", "Pixel 4a", "discontinued", "2020-08",
         31999, 31999, "Qualcomm Snapdragon 730G", '5.81"', "OLED HDR", "1080 x 2340", 60,
         ["6GB"], ["128GB"], "Single 12.2MP OIS", "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF", "8 MP, f/2.0", 3140, 18,
         False, "Android", "Stock Android", "Android 10", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a.jpg", "Google Pixel 4a Just Black",
         None, None, 0, "144.0 x 69.4 x 8.2 mm", 143, "Gorilla Glass 3, polycarbonate body",
         ["Just Black", "Barely Blue"],
         [("6GB", "128GB", 31999)]),

        # Pixel 4a 5G
        ("google-pixel-4a-5g", "Pixel 4a 5G", "Pixel 4a", "discontinued", "2020-09",
         39999, 39999, "Qualcomm Snapdragon 765G 5G", '6.2"', "OLED HDR", "1080 x 2340", 60,
         ["6GB"], ["128GB"], "Dual (12.2MP + 16MP Ultrawide)", "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF", "8 MP, f/2.0", 3885, 18,
         True, "Android", "Stock Android", "Android 11", "None",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a-5g.jpg", "Google Pixel 4a 5G Just Black",
         "16 MP, f/2.2, 107˚ ultrawide", None, 0, "153.9 x 74.0 x 8.2 mm", 168, "Gorilla Glass 3, polycarbonate body",
         ["Just Black", "Clearly White"],
         [("6GB", "128GB", 39999)]),

        # Pixel 5
        ("google-pixel-5", "Pixel 5", "Pixel 5", "discontinued", "2020-09",
         54999, 54999, "Qualcomm Snapdragon 765G 5G", '6.0"', "OLED 90Hz HDR10+", "1080 x 2340", 90,
         ["8GB"], ["128GB"], "Dual (12.2MP + 16MP Ultrawide)", "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF", "8 MP, f/2.0", 4080, 18,
         True, "Android", "Stock Android", "Android 11", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg", "Google Pixel 5 Sorta Sage",
         "16 MP, f/2.2, 107˚ ultrawide", None, 12, "144.7 x 70.4 x 8.0 mm", 151, "Corning Gorilla Glass 6, recycled aluminum",
         ["Just Black", "Sorta Sage"],
         [("8GB", "128GB", 54999)]),

        # Pixel 5a 5G
        ("google-pixel-5a-5g", "Pixel 5a 5G", "Pixel 5a", "discontinued", "2021-08",
         39999, 39999, "Qualcomm Snapdragon 765G 5G", '6.34"', "OLED HDR", "1080 x 2400", 60,
         ["6GB"], ["128GB"], "Dual (12.2MP + 16MP Ultrawide)", "12.2MP, f/1.7, 27mm, OIS, dual pixel PDAF", "8 MP, f/2.0", 4680, 18,
         True, "Android", "Stock Android", "Android 11", "IP67",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5a-5g.jpg", "Google Pixel 5a 5G Mostly Black",
         "16 MP, f/2.2, 119˚ ultrawide", None, 0, "154.9 x 73.7 x 7.6 mm", 183, "Gorilla Glass 3, aluminum body",
         ["Mostly Black"],
         [("6GB", "128GB", 39999)]),

        # Pixel 6
        ("google-pixel-6", "Pixel 6", "Pixel 6", "discontinued", "2021-10",
         59999, 69999, "Google Tensor (5nm)", '6.4"', "AMOLED 90Hz HDR10+", "1080 x 2400", 90,
         ["8GB"], ["128GB", "256GB"], "Dual (50MP + 12MP Ultrawide)", "50 MP, f/1.9, 25mm, OIS, omnidirectional PDAF", "8 MP, f/2.0", 4614, 30,
         True, "Android", "Pixel UI", "Android 12", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6.jpg", "Google Pixel 6 Kinda Coral",
         "12 MP, f/2.2, 114˚ ultrawide", None, 21, "158.6 x 74.8 x 8.9 mm", 207, "Gorilla Glass Victus front, Gorilla Glass 6 back",
         ["Stormy Black", "Kinda Coral", "Sorta Seafoam"],
         [("8GB", "128GB", 59999), ("8GB", "256GB", 69999)]),

        # Pixel 6 Pro
        ("google-pixel-6-pro", "Pixel 6 Pro", "Pixel 6", "discontinued", "2021-10",
         84999, 94999, "Google Tensor (5nm)", '6.71"', "LTPO AMOLED 120Hz HDR10+", "1440 x 3120", 120,
         ["12GB"], ["128GB", "256GB"], "Triple (50MP + 48MP 4x Tele + 12MP Ultrawide)", "50 MP, f/1.9, 25mm, OIS, omnidirectional PDAF", "11.1 MP, f/2.2", 5003, 30,
         True, "Android", "Pixel UI", "Android 12", "IP68",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6-pro.jpg", "Google Pixel 6 Pro Cloudy White",
         "12 MP, f/2.2, 114˚ ultrawide", "48 MP, f/3.5, 104mm 4x Telephoto, OIS", 23, "163.9 x 75.9 x 8.9 mm", 210, "Gorilla Glass Victus front/back, aluminum frame",
         ["Stormy Black", "Cloudy White", "Sorta Sunny"],
         [("12GB", "128GB", 84999), ("12GB", "256GB", 94999)]),

        # Pixel Fold
        ("google-pixel-fold", "Pixel Fold", "Pixel Fold", "discontinued", "2023-05",
         149999, 164999, "Google Tensor G2 (5nm)", '7.6" Foldable OLED 120Hz', "Foldable OLED", "1840 x 2208", 120,
         ["12GB"], ["256GB", "512GB"], "Triple (48MP + 10.8MP 5x Tele + 10.8MP Ultrawide)", "48 MP, f/1.7, 25mm, OIS, Dual Pixel PDAF", "9.5 MP cover, 8 MP inner", 4821, 30,
         True, "Android", "Pixel UI", "Android 13", "IPX8",
         "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-fold.jpg", "Google Pixel Fold Obsidian",
         "10.8 MP, f/2.2, 121˚ ultrawide", "10.8 MP, f/3.1, 112mm 5x Telephoto, OIS", 15, "139.7 x 158.7 x 5.8 mm (unfolded)", 283, "Gorilla Glass Victus, steel hinge, aluminum frame",
         ["Obsidian", "Porcelain"],
         [("12GB", "256GB", 149999), ("12GB", "512GB", 164999)]),
    ]

    for item in google_data:
        (
            m_id, m_name, gen, status, l_date, sp, mp, chip, d_sz, d_typ, res, rr,
            rams, storages, r_cam, m_cam, f_cam, bat, chg, h5g, os_name, ui, l_os, ip,
            img_url, alt, uw, tele, wchg, dims, wt, mat, clrs, v_configs
        ) = item

        model = make_model(
            model_id=m_id,
            brand="Google",
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
            official_source=f"https://store.google.com/in/product/{m_id}"
        )
        models.append(model)
        variants.extend(make_variants(m_id, v_configs, status, clrs))
        images.append(make_image_entry(m_id, m_name, "Google", img_url, alt))

    out_file = os.path.join(os.path.dirname(__file__), "..", "mobile_data", "additions_google.ts")
    write_bundle_ts(out_file, "googleAdditionsBundle", models, variants, images)

if __name__ == "__main__":
    build_google_additions()
