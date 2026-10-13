import os
from common import make_model, make_variants, make_image_entry, write_bundle_ts

def build_apple():
    models = []
    variants = []
    images = []

    apple_specs = [
        # ── iPhone 17 Family ──
        (
            "apple-iphone-17-pro-max", "iPhone 17 Pro Max", "iPhone 17", "active", "2025-09",
            149900, 189900, "Apple A19 Pro (3nm)", 6.9, "LTPO Super Retina XDR OLED", "2868 x 1320", 120,
            ["12GB"], ["256GB", "512GB", "1TB"],
            "Triple (48MP + 48MP + 48MP Periscope)", "48 MP Fusion, f/1.78, OIS", "18 MP TrueDepth",
            4850, 35, True, "iOS", "iOS 19", "iOS 19", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
            "iPhone 17 Pro Max front display",
            "48 MP, f/2.2, 120˚", "48 MP 5x tetraprism, OIS", 25,
            "163.0 x 77.6 x 8.25 mm", 227, "Titanium frame, Ceramic Shield front",
            ["Titanium Black", "Titanium Natural", "Titanium White", "Desert Titanium"],
            [("12GB", "256GB", 149900), ("12GB", "512GB", 169900), ("12GB", "1TB", 189900)]
        ),
        (
            "apple-iphone-17-pro", "iPhone 17 Pro", "iPhone 17", "active", "2025-09",
            124900, 164900, "Apple A19 Pro (3nm)", 6.3, "LTPO Super Retina XDR OLED", "2622 x 1206", 120,
            ["12GB"], ["128GB", "256GB", "512GB", "1TB"],
            "Triple (48MP + 48MP + 48MP Periscope)", "48 MP Fusion, f/1.78, OIS", "18 MP TrueDepth",
            3650, 35, True, "iOS", "iOS 19", "iOS 19", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
            "iPhone 17 Pro front display",
            "48 MP, f/2.2, 120˚", "48 MP 5x tetraprism, OIS", 25,
            "149.6 x 71.5 x 8.25 mm", 199, "Titanium frame, Ceramic Shield front",
            ["Titanium Black", "Titanium Natural", "Titanium White", "Desert Titanium"],
            [("12GB", "128GB", 124900), ("12GB", "256GB", 134900), ("12GB", "512GB", 154900), ("12GB", "1TB", 164900)]
        ),
        (
            "apple-iphone-17-air", "iPhone 17 Air", "iPhone 17", "active", "2025-09",
            94900, 114900, "Apple A19 (3nm)", 6.6, "Super Retina XDR OLED", "2740 x 1260", 120,
            ["8GB"], ["128GB", "256GB", "512GB"],
            "Single 48MP Fusion Camera", "48 MP Fusion, f/1.6, sensor-shift OIS", "18 MP TrueDepth",
            3200, 30, True, "iOS", "iOS 19", "iOS 19", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg",
            "iPhone 17 Air ultra-slim profile view",
            None, None, 20,
            "157.0 x 74.0 x 5.6 mm", 165, "Titanium frame, Ceramic Shield glass",
            ["Silver", "Space Gray", "Champagne Gold"],
            [("8GB", "128GB", 94900), ("8GB", "256GB", 104900), ("8GB", "512GB", 114900)]
        ),
        (
            "apple-iphone-17", "iPhone 17", "iPhone 17", "active", "2025-09",
            79900, 99900, "Apple A19 (3nm)", 6.3, "Super Retina XDR OLED", "2556 x 1179", 120,
            ["8GB"], ["128GB", "256GB", "512GB"],
            "Dual (48MP + 48MP)", "48 MP Fusion, f/1.6, sensor-shift OIS", "18 MP TrueDepth",
            3600, 30, True, "iOS", "iOS 19", "iOS 19", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
            "iPhone 17 front view",
            "48 MP, f/2.2, 120˚", None, 20,
            "147.6 x 71.6 x 7.8 mm", 172, "Aluminum frame, Ceramic Shield glass",
            ["Black", "White", "Pink", "Teal", "Ultramarine"],
            [("8GB", "128GB", 79900), ("8GB", "256GB", 89900), ("8GB", "512GB", 99900)]
        ),

        # ── iPhone 12 Series ──
        (
            "apple-iphone-12-pro-max", "iPhone 12 Pro Max", "iPhone 12", "discontinued", "2020-10",
            129900, 159900, "Apple A14 Bionic (5nm)", 6.7, "Super Retina XDR OLED", "2778 x 1284", 60,
            ["6GB"], ["128GB", "256GB", "512GB"],
            "Triple (12MP + 12MP + 12MP) + LiDAR", "12 MP, f/1.6, 26mm, sensor-shift OIS", "12 MP TrueDepth",
            3687, 20, True, "iOS", "iOS 14", "iOS 14", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
            "iPhone 12 Pro Max Pacific Blue",
            "12 MP, f/2.4, 13mm, 120˚", "12 MP 2.5x Telephoto, f/2.2, 65mm, OIS", 15,
            "160.8 x 78.1 x 7.4 mm", 228, "Stainless steel frame, Ceramic Shield front",
            ["Pacific Blue", "Gold", "Graphite", "Silver"],
            [("6GB", "128GB", 129900), ("6GB", "256GB", 139900), ("6GB", "512GB", 159900)]
        ),
        (
            "apple-iphone-12-pro", "iPhone 12 Pro", "iPhone 12", "discontinued", "2020-10",
            119900, 149900, "Apple A14 Bionic (5nm)", 6.1, "Super Retina XDR OLED", "2532 x 1170", 60,
            ["6GB"], ["128GB", "256GB", "512GB"],
            "Triple (12MP + 12MP + 12MP) + LiDAR", "12 MP, f/1.6, 26mm, dual pixel PDAF, OIS", "12 MP TrueDepth",
            2815, 20, True, "iOS", "iOS 14", "iOS 14", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
            "iPhone 12 Pro Pacific Blue",
            "12 MP, f/2.4, 13mm, 120˚", "12 MP 2x Telephoto, f/2.0, 52mm, OIS", 15,
            "146.7 x 71.5 x 7.4 mm", 189, "Stainless steel frame, Ceramic Shield front",
            ["Pacific Blue", "Gold", "Graphite", "Silver"],
            [("6GB", "128GB", 119900), ("6GB", "256GB", 129900), ("6GB", "512GB", 149900)]
        ),
        (
            "apple-iphone-12-mini", "iPhone 12 mini", "iPhone 12", "discontinued", "2020-10",
            69900, 84900, "Apple A14 Bionic (5nm)", 5.4, "Super Retina XDR OLED", "2340 x 1080", 60,
            ["4GB"], ["64GB", "128GB", "256GB"],
            "Dual (12MP + 12MP)", "12 MP, f/1.6, 26mm, dual pixel PDAF, OIS", "12 MP TrueDepth",
            2227, 20, True, "iOS", "iOS 14", "iOS 14", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
            "iPhone 12 mini Black",
            "12 MP, f/2.4, 13mm, 120˚", None, 12,
            "131.5 x 64.2 x 7.4 mm", 135, "Aluminum frame, Ceramic Shield front",
            ["Black", "White", "Red", "Green", "Blue", "Purple"],
            [("4GB", "64GB", 69900), ("4GB", "128GB", 74900), ("4GB", "256GB", 84900)]
        ),

        # ── iPhone SE (2nd Gen) ──
        (
            "apple-iphone-se-2020", "iPhone SE (2nd Gen)", "iPhone SE", "discontinued", "2020-04",
            42500, 58300, "Apple A13 Bionic (7nm+)", 4.7, "Retina IPS LCD", "1334 x 750", 60,
            ["3GB"], ["64GB", "128GB", "256GB"],
            "Single 12MP Camera", "12 MP, f/1.8 (wide), PDAF, OIS", "7 MP, f/2.2",
            1821, 18, False, "iOS", "iOS 13", "iOS 13", "IP67",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg",
            "iPhone SE 2nd Gen Product RED",
            None, None, 7.5,
            "138.4 x 67.3 x 7.3 mm", 148, "Glass front/back, aluminum frame",
            ["Black", "White", "Red"],
            [("3GB", "64GB", 42500), ("3GB", "128GB", 47800), ("3GB", "256GB", 58300)]
        ),

        # ── iPhone 11 Series ──
        (
            "apple-iphone-11-pro-max", "iPhone 11 Pro Max", "iPhone 11", "discontinued", "2019-09",
            109900, 141900, "Apple A13 Bionic (7nm+)", 6.5, "Super Retina XDR OLED", "2688 x 1242", 60,
            ["4GB"], ["64GB", "256GB", "512GB"],
            "Triple (12MP + 12MP + 12MP)", "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS", "12 MP TrueDepth",
            3969, 18, False, "iOS", "iOS 13", "iOS 13", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg",
            "iPhone 11 Pro Max Midnight Green",
            "12 MP, f/2.4, 13mm, 120˚", "12 MP 2x Telephoto, f/2.0, 52mm, OIS", 10,
            "158.0 x 77.8 x 8.1 mm", 226, "Stainless steel frame, matte glass back",
            ["Midnight Green", "Space Gray", "Silver", "Gold"],
            [("4GB", "64GB", 109900), ("4GB", "256GB", 123900), ("4GB", "512GB", 141900)]
        ),
        (
            "apple-iphone-11-pro", "iPhone 11 Pro", "iPhone 11", "discontinued", "2019-09",
            99900, 131900, "Apple A13 Bionic (7nm+)", 5.8, "Super Retina XDR OLED", "2436 x 1125", 60,
            ["4GB"], ["64GB", "256GB", "512GB"],
            "Triple (12MP + 12MP + 12MP)", "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS", "12 MP TrueDepth",
            3046, 18, False, "iOS", "iOS 13", "iOS 13", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg",
            "iPhone 11 Pro Space Gray",
            "12 MP, f/2.4, 13mm, 120˚", "12 MP 2x Telephoto, f/2.0, 52mm, OIS", 10,
            "144.0 x 71.4 x 8.1 mm", 188, "Stainless steel frame, matte glass back",
            ["Midnight Green", "Space Gray", "Silver", "Gold"],
            [("4GB", "64GB", 99900), ("4GB", "256GB", 113900), ("4GB", "512GB", 131900)]
        ),
        (
            "apple-iphone-11", "iPhone 11", "iPhone 11", "discontinued", "2019-09",
            64900, 79900, "Apple A13 Bionic (7nm+)", 6.1, "Liquid Retina IPS LCD", "1792 x 828", 60,
            ["4GB"], ["64GB", "128GB", "256GB"],
            "Dual (12MP + 12MP)", "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS", "12 MP TrueDepth",
            3110, 18, False, "iOS", "iOS 13", "iOS 13", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
            "iPhone 11 Purple",
            "12 MP, f/2.4, 13mm, 120˚", None, 10,
            "150.9 x 75.7 x 8.3 mm", 194, "Aluminum frame, glass front and back",
            ["Black", "Green", "Yellow", "Purple", "Red", "White"],
            [("4GB", "64GB", 64900), ("4GB", "128GB", 69900), ("4GB", "256GB", 79900)]
        ),

        # ── iPhone XS / XS Max / XR ──
        (
            "apple-iphone-xs-max", "iPhone XS Max", "iPhone XS", "discontinued", "2018-09",
            109900, 144900, "Apple A12 Bionic (7nm)", 6.5, "Super Retina OLED", "2688 x 1242", 60,
            ["4GB"], ["64GB", "256GB", "512GB"],
            "Dual (12MP + 12MP)", "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS", "7 MP TrueDepth",
            3174, 15, False, "iOS", "iOS 12", "iOS 12", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
            "iPhone XS Max Gold",
            None, "12 MP 2x Telephoto, f/2.4, 52mm, OIS", 7.5,
            "157.5 x 77.4 x 7.7 mm", 208, "Stainless steel frame, glass front/back",
            ["Space Gray", "Silver", "Gold"],
            [("4GB", "64GB", 109900), ("4GB", "256GB", 124900), ("4GB", "512GB", 144900)]
        ),
        (
            "apple-iphone-xs", "iPhone XS", "iPhone XS", "discontinued", "2018-09",
            99900, 134900, "Apple A12 Bionic (7nm)", 5.8, "Super Retina OLED", "2436 x 1125", 60,
            ["4GB"], ["64GB", "256GB", "512GB"],
            "Dual (12MP + 12MP)", "12 MP, f/1.8, 26mm, dual pixel PDAF, OIS", "7 MP TrueDepth",
            2658, 15, False, "iOS", "iOS 12", "iOS 12", "IP68",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
            "iPhone XS Space Gray",
            None, "12 MP 2x Telephoto, f/2.4, 52mm, OIS", 7.5,
            "143.6 x 70.9 x 7.7 mm", 177, "Stainless steel frame, glass front/back",
            ["Space Gray", "Silver", "Gold"],
            [("4GB", "64GB", 99900), ("4GB", "256GB", 114900), ("4GB", "512GB", 134900)]
        ),
        (
            "apple-iphone-xr", "iPhone XR", "iPhone XR", "discontinued", "2018-09",
            76900, 91900, "Apple A12 Bionic (7nm)", 6.1, "Liquid Retina IPS LCD", "1792 x 828", 60,
            ["3GB"], ["64GB", "128GB", "256GB"],
            "Single 12MP Camera", "12 MP, f/1.8, 26mm, PDAF, OIS", "7 MP TrueDepth",
            2942, 15, False, "iOS", "iOS 12", "iOS 12", "IP67",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
            "iPhone XR Coral",
            None, None, 7.5,
            "150.9 x 75.7 x 8.3 mm", 194, "Aluminum frame, glass front/back",
            ["Black", "Red", "Yellow", "Blue", "Coral", "White"],
            [("3GB", "64GB", 76900), ("3GB", "128GB", 81900), ("3GB", "256GB", 91900)]
        ),

        # ── iPhone X ──
        (
            "apple-iphone-x", "iPhone X", "iPhone X", "discontinued", "2017-09",
            89000, 102000, "Apple A11 Bionic (10nm)", 5.8, "Super Retina OLED", "2436 x 1125", 60,
            ["3GB"], ["64GB", "256GB"],
            "Dual (12MP + 12MP)", "12 MP, f/1.8, 28mm, dual pixel PDAF, OIS", "7 MP TrueDepth",
            2716, 15, False, "iOS", "iOS 11", "iOS 11", "IP67",
            "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
            "iPhone X Silver anniversary edition",
            None, "12 MP 2x Telephoto, f/2.4, 52mm, OIS", 7.5,
            "143.6 x 70.9 x 7.7 mm", 174, "Stainless steel frame, glass front/back",
            ["Space Gray", "Silver"],
            [("3GB", "64GB", 89000), ("3GB", "256GB", 102000)]
        ),
    ]

    for item in apple_specs:
        (
            model_id, name, gen, status, launch_dt,
            p_start, p_max, chip, d_size, d_type, res, hz,
            rams, stors, cam_setup, main_cam, f_cam,
            bat, chg, has_5g, os_name, ui_name, launch_os, ip,
            img_url, alt, uw, tele, wchg,
            dims, wt, mat, cols, var_cfg
        ) = item

        model = make_model(
            model_id=model_id,
            brand="Apple",
            model_name=name,
            generation=gen,
            status=status,
            launch_date=launch_dt,
            starting_price=p_start,
            max_price=p_max,
            chipset=chip,
            display_size=d_size,
            display_type=d_type,
            resolution=res,
            refresh_rate=hz,
            ram_options=rams,
            storage_options=stors,
            rear_camera_setup=cam_setup,
            main_camera=main_cam,
            front_camera=f_cam,
            battery_capacity=bat,
            wired_charging=chg,
            has_5g=has_5g,
            os=os_name,
            ui=ui_name,
            launch_os=launch_os,
            water_resistance=ip,
            image_url=img_url,
            alt_text=alt,
            ultrawide_camera=uw,
            telephoto_camera=tele,
            wireless_charging=wchg,
            dimensions=dims,
            weight=wt,
            materials=mat,
            colors=cols,
            official_source="https://www.apple.com/in/iphone/",
        )
        models.append(model)
        variants.extend(make_variants(model_id, var_cfg, status, cols))
        images.append(make_image_entry(model_id, name, "Apple", img_url, alt))

    out_file = os.path.join(os.path.dirname(__file__), "..", "mobile_data", "additions_apple.ts")
    write_bundle_ts(out_file, "appleAdditionsBundle", models, variants, images)

if __name__ == "__main__":
    build_apple()
