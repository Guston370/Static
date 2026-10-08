# Static Variant Completeness Audit Report

**Date:** October 7, 2026  
**Market:** Indian Passenger Vehicle Market  
**Scope:** All 206 Active Models  

## 1. Executive Summary

| Metric | Count |
| :--- | :--- |
| **Total Active Models Audited** | **206** |
| **Official Variants Discovered (Ground Truth)** | **620** |
| **Variants Currently Stored in Static** | **251** |
| **Deeply Verified Variants** | **107** |
| **Variants Marked `needs_verification`** | **144** |
| **Models with 100% Complete Lineup** | **31** |
| **Models with Incomplete Lineup** | **175** |
| **Identified Missing Variants** | **425** |
| **Generic Placeholder Variants** | **145** |

## 2. Priority Hierarchy for Data Ingestion

- **COMPLETE (100% Verified Lineup):** 31 models
- **PRIORITY 4 (>80% Lineup Verified):** 10 models
- **PRIORITY 3 (50%–80% Lineup Verified):** 9 models
- **PRIORITY 2 (<50% Lineup Verified):** 12 models
- **PRIORITY 1 (0% Verified / Pure Placeholder):** 144 models

## 3. Model-by-Model Audit (All 206 Models)

| # | Model | Brand | Official | Stored | Verified | Coverage | Status | Missing Trims |
| :- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Alto K10 | Maruti Suzuki | 6 | 1 | 0 | 0% | UNVERIFIED | Std, LXi, VXi... |
| 2 | S-Presso | Maruti Suzuki | 6 | 1 | 0 | 0% | UNVERIFIED | Std, LXi, VXi... |
| 3 | Celerio | Maruti Suzuki | 5 | 1 | 0 | 0% | UNVERIFIED | LXi, VXi, ZXi... |
| 4 | Wagon R | Maruti Suzuki | 6 | 1 | 0 | 0% | UNVERIFIED | LXi 1.0, VXi 1.0, ZXi 1.2... |
| 5 | Swift | Maruti Suzuki | 7 | 5 | 5 | 71% | INCOMPLETE | VXi (O), VXi S-CNG, ZXi S-CNG |
| 6 | Dzire | Maruti Suzuki | 6 | 4 | 4 | 67% | INCOMPLETE | VXi S-CNG, ZXi S-CNG |
| 7 | Brezza | Maruti Suzuki | 7 | 4 | 4 | 57% | INCOMPLETE | LXi S-CNG, VXi S-CNG, ZXi S-CNG |
| 8 | Ertiga | Maruti Suzuki | 6 | 1 | 0 | 0% | UNVERIFIED | LXi, VXi, ZXi... |
| 9 | Eeco | Maruti Suzuki | 4 | 1 | 0 | 0% | UNVERIFIED | 5-Seater Std, 7-Seater Std, 5-Seater AC... |
| 10 | Ignis | Maruti Suzuki | 4 | 1 | 0 | 0% | UNVERIFIED | Sigma, Delta, Zeta... |
| 11 | Baleno | Maruti Suzuki | 6 | 3 | 3 | 50% | INCOMPLETE | Zeta, Delta S-CNG, Zeta S-CNG |
| 12 | Fronx | Maruti Suzuki | 7 | 2 | 2 | 29% | INCOMPLETE | Delta, Delta Plus, Zeta Turbo... |
| 13 | Ciaz | Maruti Suzuki | 4 | 1 | 0 | 0% | UNVERIFIED | Sigma, Delta, Zeta... |
| 14 | Jimny | Maruti Suzuki | 2 | 1 | 0 | 0% | UNVERIFIED | Zeta ALLGRIP PRO, Alpha ALLGRIP PRO |
| 15 | Grand Vitara | Maruti Suzuki | 8 | 2 | 2 | 25% | INCOMPLETE | Delta, Zeta, Delta S-CNG... |
| 16 | XL6 | Maruti Suzuki | 4 | 1 | 0 | 0% | UNVERIFIED | Zeta, Alpha, Alpha Plus... |
| 17 | Invicto | Maruti Suzuki | 3 | 1 | 0 | 0% | UNVERIFIED | Zeta Plus 7-Str, Zeta Plus 8-Str, Alpha Plus 7-Str |
| 18 | Grand i10 Nios | Hyundai | 8 | 1 | 0 | 0% | UNVERIFIED | Era, Magna, Corporate... |
| 19 | Aura | Hyundai | 6 | 1 | 0 | 0% | UNVERIFIED | SX, SX(O), S Hy-CNG Duo... |
| 20 | i20 | Hyundai | 6 | 1 | 0 | 0% | UNVERIFIED | Era, Magna, Sportz... |
| 21 | Exter | Hyundai | 9 | 1 | 0 | 0% | UNVERIFIED | EX(O), S(O), SX... |
| 22 | Venue | Hyundai | 6 | 2 | 2 | 33% | INCOMPLETE | S(O), S Plus |
| 23 | Verna | Hyundai | 6 | 1 | 0 | 0% | UNVERIFIED | EX, SX, SX(O)... |
| 24 | Creta | Hyundai | 7 | 6 | 6 | 86% | INCOMPLETE | S(O), SX Tech |
| 25 | Alcazar | Hyundai | 4 | 1 | 0 | 0% | UNVERIFIED | Executive, Prestige, Platinum... |
| 26 | Tucson | Hyundai | 4 | 1 | 0 | 0% | UNVERIFIED | Platinum Petrol, Signature Petrol, Platinum Diesel... |
| 27 | Ioniq 5 | Hyundai | 1 | 1 | 1 | 100% | INCOMPLETE | Standard Long Range RWD |
| 28 | Tiago | Tata | 7 | 1 | 0 | 0% | UNVERIFIED | XE, XM, XT(O)... |
| 29 | Tigor | Tata | 6 | 1 | 0 | 0% | UNVERIFIED | XE, XM, XZ... |
| 30 | Altroz | Tata | 9 | 1 | 0 | 0% | UNVERIFIED | XE, XM, XM Plus... |
| 31 | Punch | Tata | 7 | 4 | 4 | 57% | INCOMPLETE | Accomplished Plus (S), Creative Plus (S), Adventure iCNG... |
| 32 | Nexon | Tata | 8 | 7 | 7 | 88% | INCOMPLETE | Smart Plus, Pure Plus, Creative Plus... |
| 33 | Curvv | Tata | 6 | 1 | 0 | 0% | UNVERIFIED | Smart, Pure Plus, Creative... |
| 34 | Harrier | Tata | 7 | 2 | 2 | 29% | INCOMPLETE | Pure, Pure Plus, Adventure... |
| 35 | Safari | Tata | 7 | 1 | 0 | 0% | UNVERIFIED | Smart, Pure, Pure Plus... |
| 36 | Tiago.ev | TATA.ev | 5 | 1 | 0 | 0% | UNVERIFIED | XE MR, XT MR, XT LR... |
| 37 | Tigor.ev | TATA.ev | 4 | 1 | 0 | 0% | UNVERIFIED | XE, XT, XZ Plus... |
| 38 | Punch.ev | TATA.ev | 5 | 1 | 0 | 0% | UNVERIFIED | Smart, Smart Plus, Adventure... |
| 39 | Nexon.ev | TATA.ev | 5 | 1 | 0 | 0% | UNVERIFIED | Creative Plus, Fearless, Fearless Plus... |
| 40 | Curvv.ev | TATA.ev | 5 | 1 | 0 | 0% | UNVERIFIED | Creative 45, Accomplished 45, Accomplished 55... |
| 41 | XUV 3XO | Mahindra | 9 | 2 | 2 | 22% | INCOMPLETE | MX2, MX2 Pro, MX3... |
| 42 | Thar | Mahindra | 4 | 1 | 0 | 0% | UNVERIFIED | AX (O) Hard Top RWD, LX Hard Top RWD, AX (O) Convertible 4WD... |
| 43 | Thar Roxx | Mahindra | 6 | 3 | 3 | 50% | INCOMPLETE | MX3, AX3L, AX5L |
| 44 | Bolero | Mahindra | 3 | 1 | 0 | 0% | UNVERIFIED | B4, B6, B6 (O) |
| 45 | Bolero Neo | Mahindra | 4 | 1 | 0 | 0% | UNVERIFIED | N4, N8, N10... |
| 46 | Scorpio Classic | Mahindra | 2 | 1 | 0 | 0% | UNVERIFIED | S11 |
| 47 | Scorpio-N | Mahindra | 6 | 2 | 2 | 33% | INCOMPLETE | Z4, Z6, Z8 Select... |
| 48 | XUV700 | Mahindra | 6 | 3 | 3 | 50% | INCOMPLETE | AX3, AX5 Select, AX7L |
| 49 | XUV400 | Mahindra | 2 | 1 | 0 | 0% | UNVERIFIED | EC Pro, EL Pro |
| 50 | Glanza | Toyota | 6 | 1 | 0 | 0% | UNVERIFIED | V, S E-CNG, G E-CNG |
| 51 | Urban Cruiser Taisor | Toyota | 5 | 1 | 0 | 0% | UNVERIFIED | S Plus, G, V |
| 52 | Urban Cruiser Hyryder | Toyota | 7 | 1 | 0 | 0% | UNVERIFIED | E NeoDrive, S NeoDrive, G NeoDrive... |
| 53 | Rumion | Toyota | 4 | 1 | 0 | 0% | UNVERIFIED | G, V, S E-CNG |
| 54 | Innova Crysta | Toyota | 4 | 1 | 0 | 0% | UNVERIFIED | GX, GX Plus, VX... |
| 55 | Innova Hycross | Toyota | 6 | 2 | 2 | 33% | INCOMPLETE | GX (O), VX Hybrid, VX (O) Hybrid... |
| 56 | Fortuner | Toyota | 8 | 2 | 2 | 25% | INCOMPLETE | 4x2 MT Petrol, 4x2 AT Petrol, 4x2 MT Diesel... |
| 57 | Hilux | Toyota | 3 | 1 | 0 | 0% | UNVERIFIED | Standard 4x4 MT, High 4x4 MT, High 4x4 AT |
| 58 | Camry | Toyota | 1 | 1 | 1 | 100% | INCOMPLETE | 2.5L Hybrid |
| 59 | Vellfire | Toyota | 2 | 1 | 0 | 0% | UNVERIFIED | Hi Grade, VIP Grade |
| 60 | Land Cruiser 300 | Toyota | 1 | 1 | 1 | 100% | INCOMPLETE | ZX Diesel |
| 61 | Sonet | Kia | 8 | 2 | 2 | 25% | INCOMPLETE | HTK, HTK(O), HTK Plus... |
| 62 | Seltos | Kia | 7 | 2 | 2 | 29% | INCOMPLETE | HTK, HTK Plus, HTX... |
| 63 | Carens | Kia | 5 | 1 | 0 | 0% | UNVERIFIED | Premium, Prestige, Prestige Plus... |
| 64 | Carnival | Kia | 2 | 1 | 1 | 50% | INCOMPLETE | Limousine, Limousine Plus |
| 65 | EV6 | Kia | 2 | 1 | 0 | 0% | UNVERIFIED | GT-Line RWD, GT-Line AWD |
| 66 | Amaze | Honda | 3 | 1 | 0 | 0% | UNVERIFIED | VX |
| 67 | City | Honda | 5 | 2 | 2 | 40% | INCOMPLETE | VX, e:HEV ZX Hybrid |
| 68 | Elevate | Honda | 4 | 2 | 2 | 50% | INCOMPLETE | VX |
| 69 | Comet EV | MG | 3 | 1 | 0 | 0% | UNVERIFIED | Executive, Excite, Exclusive |
| 70 | Windsor EV | MG | 3 | 1 | 0 | 0% | UNVERIFIED | Excite, Exclusive, Essence |
| 71 | Astor | MG | 5 | 1 | 0 | 0% | UNVERIFIED | Sprint, Shine, Select... |
| 72 | Hector | MG | 6 | 1 | 0 | 0% | UNVERIFIED | Style, Shine Pro, Select Pro... |
| 73 | Hector Plus | MG | 4 | 1 | 0 | 0% | UNVERIFIED | Select Pro, Smart Pro, Sharp Pro... |
| 74 | ZS EV | MG | 4 | 1 | 0 | 0% | UNVERIFIED | Executive, Excite, Exclusive Plus... |
| 75 | Gloster | MG | 2 | 1 | 0 | 0% | UNVERIFIED | Sharp, Savvy |
| 76 | Kushaq | Skoda | 4 | 1 | 0 | 0% | UNVERIFIED | Classic, Signature, Prestige... |
| 77 | Slavia | Skoda | 4 | 1 | 0 | 0% | UNVERIFIED | Classic, Signature, Prestige... |
| 78 | Kodiaq | Skoda | 3 | 1 | 0 | 0% | UNVERIFIED | Style, Sportline, L&K |
| 79 | Taigun | Volkswagen | 5 | 1 | 0 | 0% | UNVERIFIED | Comfortline, Highline, Topline... |
| 80 | Virtus | Volkswagen | 5 | 2 | 2 | 40% | INCOMPLETE | Highline, Topline, GT Line |
| 81 | Tiguan | Volkswagen | 1 | 1 | 1 | 100% | INCOMPLETE | Elegance 2.0 TSI |
| 82 | Kwid | Renault | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 83 | Triber | Renault | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 84 | Kiger | Renault | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 85 | Magnite | Nissan | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 86 | X-Trail | Nissan | 1 | 1 | 1 | 100% | COMPLETE | None |
| 87 | C3 | Citroën | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 88 | ë-C3 | Citroën | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 89 | C3 Aircross | Citroën | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 90 | Basalt | Citroën | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 91 | C5 Aircross | Citroën | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 92 | Compass | Jeep | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 93 | Meridian | Jeep | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 94 | Wrangler | Jeep | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 95 | Grand Cherokee | Jeep | 1 | 1 | 1 | 100% | COMPLETE | None |
| 96 | Atto 3 | BYD | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 97 | Seal | BYD | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 98 | eMax 7 | BYD | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 99 | Gurkha | Force Motors | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 100 | Trax Cruiser | Force Motors | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 101 | D-Max V-Cross | Isuzu | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 102 | MU-X | Isuzu | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 103 | 2 Series Gran Coupe | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 104 | 3 Series Gran Limousine | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 105 | 5 Series Long Wheelbase | BMW | 1 | 1 | 1 | 100% | COMPLETE | None |
| 106 | 7 Series | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 107 | X1 | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 108 | X5 | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 109 | X7 | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 110 | iX1 | BMW | 1 | 1 | 1 | 100% | COMPLETE | None |
| 111 | i4 | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 112 | iX | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 113 | i7 | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 114 | A-Class Limousine | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 115 | C-Class | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 116 | E-Class Long Wheelbase | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 117 | S-Class | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 118 | GLA | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 119 | GLC | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 120 | GLE | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 121 | GLS | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 122 | G-Class | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 123 | EQS Sedan | Mercedes-Benz | 1 | 1 | 1 | 100% | COMPLETE | None |
| 124 | A4 | Audi | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 125 | A6 | Audi | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 126 | Q3 | Audi | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 127 | Q5 | Audi | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 128 | Q7 | Audi | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 129 | Q8 | Audi | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 130 | EX40 | Volvo | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 131 | EC40 | Volvo | 1 | 1 | 1 | 100% | COMPLETE | None |
| 132 | XC60 | Volvo | 1 | 1 | 1 | 100% | COMPLETE | None |
| 133 | XC90 | Volvo | 1 | 1 | 1 | 100% | COMPLETE | None |
| 134 | Defender | Land Rover | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 135 | Range Rover Velar | Land Rover | 1 | 1 | 1 | 100% | COMPLETE | None |
| 136 | Range Rover Sport | Land Rover | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 137 | Range Rover | Land Rover | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 138 | ES 300h | Lexus | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 139 | NX 350h | Lexus | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 140 | RX 350h / 500h | Lexus | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 141 | LM 350h | Lexus | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 142 | LX 500d / 600 | Lexus | 1 | 1 | 1 | 100% | COMPLETE | None |
| 143 | Cooper S | MINI | 1 | 1 | 1 | 100% | COMPLETE | None |
| 144 | Countryman | MINI | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 145 | F-Pace | Jaguar | 1 | 1 | 1 | 100% | COMPLETE | None |
| 146 | I-Pace | Jaguar | 1 | 1 | 1 | 100% | COMPLETE | None |
| 147 | 911 | Porsche | 2 | 2 | 2 | 100% | INCOMPLETE | Base Specification, Top Specification |
| 148 | 718 Boxster / Cayman | Porsche | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 149 | Macan | Porsche | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 150 | Cayenne | Porsche | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 151 | Panamera | Porsche | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 152 | Taycan | Porsche | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 153 | Roma | Ferrari | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 154 | 296 GTB | Ferrari | 1 | 1 | 1 | 100% | COMPLETE | None |
| 155 | Purosangue | Ferrari | 1 | 1 | 1 | 100% | COMPLETE | None |
| 156 | Urus SE | Lamborghini | 1 | 1 | 1 | 100% | COMPLETE | None |
| 157 | Revuelto | Lamborghini | 1 | 1 | 1 | 100% | COMPLETE | None |
| 158 | Grecale | Maserati | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 159 | MC20 | Maserati | 1 | 1 | 1 | 100% | COMPLETE | None |
| 160 | Vantage | Aston Martin | 1 | 1 | 1 | 100% | COMPLETE | None |
| 161 | DB12 | Aston Martin | 1 | 1 | 1 | 100% | COMPLETE | None |
| 162 | Bentayga | Bentley | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 163 | Continental GT | Bentley | 1 | 1 | 1 | 100% | COMPLETE | None |
| 164 | Ghost | Rolls-Royce | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 165 | Cullinan | Rolls-Royce | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 166 | Spectre | Rolls-Royce | 1 | 1 | 1 | 100% | COMPLETE | None |
| 167 | Eletre | Lotus | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 168 | Artura | McLaren | 1 | 1 | 1 | 100% | COMPLETE | None |
| 169 | 750S | McLaren | 1 | 1 | 1 | 100% | COMPLETE | None |
| 170 | Gravite | Nissan | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 171 | Tekton | Nissan | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 172 | Duster | Renault | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 173 | Kylaq | Skoda | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 174 | EV9 | Kia | 1 | 1 | 1 | 100% | INCOMPLETE | GT-Line AWD |
| 175 | VF 6 | VinFast | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 176 | VF 7 | VinFast | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 177 | VF MPV 7 | VinFast | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 178 | A8 L | Audi | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 179 | Q8 e-tron | Audi | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 180 | e-tron GT | Audi | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 181 | RS5 | Audi | 1 | 1 | 1 | 100% | COMPLETE | None |
| 182 | X3 | BMW | 2 | 2 | 2 | 100% | INCOMPLETE | Base Specification, Top Specification |
| 183 | M2 | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 184 | XM | BMW | 1 | 1 | 1 | 100% | COMPLETE | None |
| 185 | Z4 | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 186 | i5 | BMW | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 187 | GLB | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 188 | EQB | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 189 | EQE SUV | Mercedes-Benz | 1 | 1 | 1 | 100% | COMPLETE | None |
| 190 | EQS SUV | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 191 | CLE | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 192 | AMG GT | Mercedes-Benz | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 193 | Discovery | Land Rover | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 194 | Discovery Sport | Land Rover | 1 | 1 | 1 | 100% | COMPLETE | None |
| 195 | Range Rover Evoque | Land Rover | 1 | 1 | 1 | 100% | COMPLETE | None |
| 196 | LC 500h | Lexus | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 197 | EX30 | Volvo | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 198 | 12Cilindri | Ferrari | 1 | 1 | 1 | 100% | INCOMPLETE | Standard |
| 199 | SF90 Stradale | Ferrari | 1 | 1 | 1 | 100% | COMPLETE | None |
| 200 | Temerario | Lamborghini | 1 | 1 | 1 | 100% | COMPLETE | None |
| 201 | DBX | Aston Martin | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 202 | Flying Spur | Bentley | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 203 | Phantom | Rolls-Royce | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 204 | Emira | Lotus | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 205 | GTS | McLaren | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |
| 206 | GranTurismo | Maserati | 2 | 1 | 0 | 0% | UNVERIFIED | Top Specification |

## 4. Detailed Missing Variants Inventory

### Maruti Suzuki Alto K10 (maruti-suzuki-alto-k10)
- **Official Portal:** [https://www.marutisuzuki.com/arena/alto-k10/price](https://www.marutisuzuki.com/arena/alto-k10/price)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ Std
  - ✗ LXi
  - ✗ VXi
  - ✗ VXi Plus
  - ✗ LXi S-CNG
  - ✗ VXi S-CNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki S-Presso (maruti-suzuki-s-presso)
- **Official Portal:** [https://www.marutisuzuki.com/arena/s-presso](https://www.marutisuzuki.com/arena/s-presso)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ Std
  - ✗ LXi
  - ✗ VXi
  - ✗ VXi Plus
  - ✗ LXi S-CNG
  - ✗ VXi S-CNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki Celerio (maruti-suzuki-celerio)
- **Official Portal:** [https://www.marutisuzuki.com/arena/celerio](https://www.marutisuzuki.com/arena/celerio)
- **Coverage:** 0% (0/5 verified)
- **Missing Official Variants:**
  - ✗ LXi
  - ✗ VXi
  - ✗ ZXi
  - ✗ ZXi Plus
  - ✗ VXi S-CNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki Wagon R (maruti-suzuki-wagon-r)
- **Official Portal:** [https://www.marutisuzuki.com/arena/wagon-r](https://www.marutisuzuki.com/arena/wagon-r)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ LXi 1.0
  - ✗ VXi 1.0
  - ✗ ZXi 1.2
  - ✗ ZXi Plus 1.2
  - ✗ LXi S-CNG
  - ✗ VXi S-CNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki Swift (maruti-suzuki-swift)
- **Official Portal:** [https://www.marutisuzuki.com/arena/swift](https://www.marutisuzuki.com/arena/swift)
- **Coverage:** 71% (5/7 verified)
- **Missing Official Variants:**
  - ✗ VXi (O)
  - ✗ VXi S-CNG
  - ✗ ZXi S-CNG

### Maruti Suzuki Dzire (maruti-suzuki-dzire)
- **Official Portal:** [https://www.marutisuzuki.com/arena/dzire](https://www.marutisuzuki.com/arena/dzire)
- **Coverage:** 67% (4/6 verified)
- **Missing Official Variants:**
  - ✗ VXi S-CNG
  - ✗ ZXi S-CNG

### Maruti Suzuki Brezza (maruti-suzuki-brezza)
- **Official Portal:** [https://www.marutisuzuki.com/arena/brezza](https://www.marutisuzuki.com/arena/brezza)
- **Coverage:** 57% (4/7 verified)
- **Missing Official Variants:**
  - ✗ LXi S-CNG
  - ✗ VXi S-CNG
  - ✗ ZXi S-CNG

### Maruti Suzuki Ertiga (maruti-suzuki-ertiga)
- **Official Portal:** [https://www.marutisuzuki.com/arena/ertiga](https://www.marutisuzuki.com/arena/ertiga)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ LXi
  - ✗ VXi
  - ✗ ZXi
  - ✗ ZXi Plus
  - ✗ VXi S-CNG
  - ✗ ZXi S-CNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki Eeco (maruti-suzuki-eeco)
- **Official Portal:** [https://www.marutisuzuki.com/arena/eeco](https://www.marutisuzuki.com/arena/eeco)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ 5-Seater Std
  - ✗ 7-Seater Std
  - ✗ 5-Seater AC
  - ✗ 5-Seater AC S-CNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki Ignis (maruti-suzuki-ignis)
- **Official Portal:** [https://www.nexaexperience.com/ignis](https://www.nexaexperience.com/ignis)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ Sigma
  - ✗ Delta
  - ✗ Zeta
  - ✗ Alpha
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki Baleno (maruti-suzuki-baleno)
- **Official Portal:** [https://www.nexaexperience.com/baleno](https://www.nexaexperience.com/baleno)
- **Coverage:** 50% (3/6 verified)
- **Missing Official Variants:**
  - ✗ Zeta
  - ✗ Delta S-CNG
  - ✗ Zeta S-CNG

### Maruti Suzuki Fronx (maruti-suzuki-fronx)
- **Official Portal:** [https://www.nexaexperience.com/fronx](https://www.nexaexperience.com/fronx)
- **Coverage:** 29% (2/7 verified)
- **Missing Official Variants:**
  - ✗ Delta
  - ✗ Delta Plus
  - ✗ Zeta Turbo
  - ✗ Alpha Turbo
  - ✗ Sigma S-CNG
  - ✗ Delta S-CNG

### Maruti Suzuki Ciaz (maruti-suzuki-ciaz)
- **Official Portal:** [https://www.nexaexperience.com/ciaz](https://www.nexaexperience.com/ciaz)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ Sigma
  - ✗ Delta
  - ✗ Zeta
  - ✗ Alpha
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki Jimny (maruti-suzuki-jimny)
- **Official Portal:** [https://www.nexaexperience.com/jimny](https://www.nexaexperience.com/jimny)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Zeta ALLGRIP PRO
  - ✗ Alpha ALLGRIP PRO
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki Grand Vitara (maruti-suzuki-grand-vitara)
- **Official Portal:** [https://www.nexaexperience.com/grand-vitara](https://www.nexaexperience.com/grand-vitara)
- **Coverage:** 25% (2/8 verified)
- **Missing Official Variants:**
  - ✗ Delta
  - ✗ Zeta
  - ✗ Delta S-CNG
  - ✗ Zeta S-CNG
  - ✗ Zeta Plus Strong Hybrid
  - ✗ Alpha Plus Strong Hybrid

### Maruti Suzuki XL6 (maruti-suzuki-xl6)
- **Official Portal:** [https://www.nexaexperience.com/xl6](https://www.nexaexperience.com/xl6)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ Zeta
  - ✗ Alpha
  - ✗ Alpha Plus
  - ✗ Zeta S-CNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maruti Suzuki Invicto (maruti-suzuki-invicto)
- **Official Portal:** [https://www.nexaexperience.com/invicto](https://www.nexaexperience.com/invicto)
- **Coverage:** 0% (0/3 verified)
- **Missing Official Variants:**
  - ✗ Zeta Plus 7-Str
  - ✗ Zeta Plus 8-Str
  - ✗ Alpha Plus 7-Str
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Hyundai Grand i10 Nios (hyundai-grand-i10-nios)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/grand-i10-nios](https://www.hyundai.com/in/en/find-a-car/grand-i10-nios)
- **Coverage:** 0% (0/8 verified)
- **Missing Official Variants:**
  - ✗ Era
  - ✗ Magna
  - ✗ Corporate
  - ✗ Sportz Executive
  - ✗ Sportz
  - ✗ Asta
  - ✗ Magna Hy-CNG Duo
  - ✗ Sportz Hy-CNG Duo
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Hyundai Aura (hyundai-aura)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/aura](https://www.hyundai.com/in/en/find-a-car/aura)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ SX
  - ✗ SX(O)
  - ✗ S Hy-CNG Duo
  - ✗ SX Hy-CNG Duo
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Hyundai i20 (hyundai-i20)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/i20](https://www.hyundai.com/in/en/find-a-car/i20)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ Era
  - ✗ Magna
  - ✗ Sportz
  - ✗ Sportz(O)
  - ✗ Asta
  - ✗ Asta(O)
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Hyundai Exter (hyundai-exter)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/exter](https://www.hyundai.com/in/en/find-a-car/exter)
- **Coverage:** 0% (0/9 verified)
- **Missing Official Variants:**
  - ✗ EX(O)
  - ✗ S(O)
  - ✗ SX
  - ✗ SX(O)
  - ✗ SX(O) Connect
  - ✗ S Hy-CNG Duo
  - ✗ SX Hy-CNG Duo
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Hyundai Venue (hyundai-venue)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/venue](https://www.hyundai.com/in/en/find-a-car/venue)
- **Coverage:** 33% (2/6 verified)
- **Missing Official Variants:**
  - ✗ S(O)
  - ✗ S Plus

### Hyundai Verna (hyundai-verna)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/verna](https://www.hyundai.com/in/en/find-a-car/verna)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ EX
  - ✗ SX
  - ✗ SX(O)
  - ✗ SX Turbo
  - ✗ SX(O) Turbo
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Hyundai Creta (hyundai-creta)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/creta](https://www.hyundai.com/in/en/find-a-car/creta)
- **Coverage:** 86% (6/7 verified)
- **Missing Official Variants:**
  - ✗ S(O)
  - ✗ SX Tech

### Hyundai Alcazar (hyundai-alcazar)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/alcazar](https://www.hyundai.com/in/en/find-a-car/alcazar)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ Executive
  - ✗ Prestige
  - ✗ Platinum
  - ✗ Signature
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Hyundai Tucson (hyundai-tucson)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/tucson](https://www.hyundai.com/in/en/find-a-car/tucson)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ Platinum Petrol
  - ✗ Signature Petrol
  - ✗ Platinum Diesel
  - ✗ Signature Diesel AWD
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Hyundai Ioniq 5 (hyundai-ioniq-5)
- **Official Portal:** [https://www.hyundai.com/in/en/find-a-car/ioniq-5](https://www.hyundai.com/in/en/find-a-car/ioniq-5)
- **Coverage:** 100% (1/1 verified)
- **Missing Official Variants:**
  - ✗ Standard Long Range RWD

### Tata Tiago (tata-tiago)
- **Official Portal:** [https://cars.tatamotors.com/tiago/ice.html](https://cars.tatamotors.com/tiago/ice.html)
- **Coverage:** 0% (0/7 verified)
- **Missing Official Variants:**
  - ✗ XE
  - ✗ XM
  - ✗ XT(O)
  - ✗ XT
  - ✗ XZ Plus
  - ✗ XT iCNG
  - ✗ XZ Plus iCNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Tata Tigor (tata-tigor)
- **Official Portal:** [https://cars.tatamotors.com/tigor/ice.html](https://cars.tatamotors.com/tigor/ice.html)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ XE
  - ✗ XM
  - ✗ XZ
  - ✗ XZ Plus
  - ✗ XM iCNG
  - ✗ XZ Plus iCNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Tata Altroz (tata-altroz)
- **Official Portal:** [https://cars.tatamotors.com/altroz/ice.html](https://cars.tatamotors.com/altroz/ice.html)
- **Coverage:** 0% (0/9 verified)
- **Missing Official Variants:**
  - ✗ XE
  - ✗ XM
  - ✗ XM Plus
  - ✗ XT
  - ✗ XZ
  - ✗ XZ Plus (S)
  - ✗ Racer R1
  - ✗ Racer R2
  - ✗ Racer R3
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Tata Punch (tata-punch)
- **Official Portal:** [https://cars.tatamotors.com/punch/ice.html](https://cars.tatamotors.com/punch/ice.html)
- **Coverage:** 57% (4/7 verified)
- **Missing Official Variants:**
  - ✗ Accomplished Plus (S)
  - ✗ Creative Plus (S)
  - ✗ Adventure iCNG
  - ✗ Accomplished iCNG

### Tata Nexon (tata-nexon)
- **Official Portal:** [https://cars.tatamotors.com/nexon/ice.html](https://cars.tatamotors.com/nexon/ice.html)
- **Coverage:** 88% (7/8 verified)
- **Missing Official Variants:**
  - ✗ Smart Plus
  - ✗ Pure Plus
  - ✗ Creative Plus
  - ✗ Fearless Plus S

### Tata Curvv (tata-curvv)
- **Official Portal:** [https://cars.tatamotors.com/curvv/ice.html](https://cars.tatamotors.com/curvv/ice.html)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ Smart
  - ✗ Pure Plus
  - ✗ Creative
  - ✗ Creative Plus S
  - ✗ Accomplished S
  - ✗ Accomplished Plus A
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Tata Harrier (tata-harrier)
- **Official Portal:** [https://cars.tatamotors.com/harrier/ice.html](https://cars.tatamotors.com/harrier/ice.html)
- **Coverage:** 29% (2/7 verified)
- **Missing Official Variants:**
  - ✗ Pure
  - ✗ Pure Plus
  - ✗ Adventure
  - ✗ Adventure Plus

### Tata Safari (tata-safari)
- **Official Portal:** [https://cars.tatamotors.com/safari/ice.html](https://cars.tatamotors.com/safari/ice.html)
- **Coverage:** 0% (0/7 verified)
- **Missing Official Variants:**
  - ✗ Smart
  - ✗ Pure
  - ✗ Pure Plus
  - ✗ Adventure
  - ✗ Adventure Plus
  - ✗ Accomplished
  - ✗ Accomplished Plus
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### TATA.ev Tiago.ev (tata-tiago-ev)
- **Official Portal:** [https://ev.tatamotors.com/tiago-ev](https://ev.tatamotors.com/tiago-ev)
- **Coverage:** 0% (0/5 verified)
- **Missing Official Variants:**
  - ✗ XE MR
  - ✗ XT MR
  - ✗ XT LR
  - ✗ XZ Plus LR
  - ✗ XZ Plus Tech LUX LR
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### TATA.ev Tigor.ev (tata-tigor-ev)
- **Official Portal:** [https://ev.tatamotors.com/tigor-ev](https://ev.tatamotors.com/tigor-ev)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ XE
  - ✗ XT
  - ✗ XZ Plus
  - ✗ XZ Plus LUX
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### TATA.ev Punch.ev (tata-punch-ev)
- **Official Portal:** [https://ev.tatamotors.com/punch-ev](https://ev.tatamotors.com/punch-ev)
- **Coverage:** 0% (0/5 verified)
- **Missing Official Variants:**
  - ✗ Smart
  - ✗ Smart Plus
  - ✗ Adventure
  - ✗ Empowered
  - ✗ Empowered Plus
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### TATA.ev Nexon.ev (tata-nexon-ev)
- **Official Portal:** [https://ev.tatamotors.com/nexon-ev](https://ev.tatamotors.com/nexon-ev)
- **Coverage:** 0% (0/5 verified)
- **Missing Official Variants:**
  - ✗ Creative Plus
  - ✗ Fearless
  - ✗ Fearless Plus
  - ✗ Empowered
  - ✗ Empowered Plus 45
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### TATA.ev Curvv.ev (tata-curvv-ev)
- **Official Portal:** [https://ev.tatamotors.com/curvv-ev](https://ev.tatamotors.com/curvv-ev)
- **Coverage:** 0% (0/5 verified)
- **Missing Official Variants:**
  - ✗ Creative 45
  - ✗ Accomplished 45
  - ✗ Accomplished 55
  - ✗ Accomplished Plus 55
  - ✗ Empowered Plus 55
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mahindra XUV 3XO (mahindra-xuv-3xo)
- **Official Portal:** [https://auto.mahindra.com/suv/xuv3xo](https://auto.mahindra.com/suv/xuv3xo)
- **Coverage:** 22% (2/9 verified)
- **Missing Official Variants:**
  - ✗ MX2
  - ✗ MX2 Pro
  - ✗ MX3
  - ✗ MX3 Pro
  - ✗ AX5
  - ✗ AX5L

### Mahindra Thar (mahindra-thar)
- **Official Portal:** [https://auto.mahindra.com/suv/thar](https://auto.mahindra.com/suv/thar)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ AX (O) Hard Top RWD
  - ✗ LX Hard Top RWD
  - ✗ AX (O) Convertible 4WD
  - ✗ LX Hard Top 4WD
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mahindra Thar Roxx (mahindra-thar-roxx)
- **Official Portal:** [https://auto.mahindra.com/suv/thar-roxx](https://auto.mahindra.com/suv/thar-roxx)
- **Coverage:** 50% (3/6 verified)
- **Missing Official Variants:**
  - ✗ MX3
  - ✗ AX3L
  - ✗ AX5L

### Mahindra Bolero (mahindra-bolero)
- **Official Portal:** [https://auto.mahindra.com/suv/bolero](https://auto.mahindra.com/suv/bolero)
- **Coverage:** 0% (0/3 verified)
- **Missing Official Variants:**
  - ✗ B4
  - ✗ B6
  - ✗ B6 (O)
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mahindra Bolero Neo (mahindra-bolero-neo)
- **Official Portal:** [https://auto.mahindra.com/suv/bolero-neo](https://auto.mahindra.com/suv/bolero-neo)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ N4
  - ✗ N8
  - ✗ N10
  - ✗ N10 (O)
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mahindra Scorpio Classic (mahindra-scorpio-classic)
- **Official Portal:** [https://auto.mahindra.com/suv/scorpio-classic](https://auto.mahindra.com/suv/scorpio-classic)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ S11
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mahindra Scorpio-N (mahindra-scorpio-n)
- **Official Portal:** [https://auto.mahindra.com/suv/scorpio-n](https://auto.mahindra.com/suv/scorpio-n)
- **Coverage:** 33% (2/6 verified)
- **Missing Official Variants:**
  - ✗ Z4
  - ✗ Z6
  - ✗ Z8 Select
  - ✗ Z8L

### Mahindra XUV700 (mahindra-xuv700)
- **Official Portal:** [https://auto.mahindra.com/suv/xuv700](https://auto.mahindra.com/suv/xuv700)
- **Coverage:** 50% (3/6 verified)
- **Missing Official Variants:**
  - ✗ AX3
  - ✗ AX5 Select
  - ✗ AX7L

### Mahindra XUV400 (mahindra-xuv400)
- **Official Portal:** [https://auto.mahindra.com/suv/xuv400](https://auto.mahindra.com/suv/xuv400)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ EC Pro
  - ✗ EL Pro
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Toyota Glanza (toyota-glanza)
- **Official Portal:** [https://www.toyotabharat.com/showroom/glanza](https://www.toyotabharat.com/showroom/glanza)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ V
  - ✗ S E-CNG
  - ✗ G E-CNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Toyota Urban Cruiser Taisor (toyota-urban-cruiser-taisor)
- **Official Portal:** [https://www.toyotabharat.com/showroom/taisor](https://www.toyotabharat.com/showroom/taisor)
- **Coverage:** 0% (0/5 verified)
- **Missing Official Variants:**
  - ✗ S Plus
  - ✗ G
  - ✗ V
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Toyota Urban Cruiser Hyryder (toyota-urban-cruiser-hyryder)
- **Official Portal:** [https://www.toyotabharat.com/showroom/hyryder](https://www.toyotabharat.com/showroom/hyryder)
- **Coverage:** 0% (0/7 verified)
- **Missing Official Variants:**
  - ✗ E NeoDrive
  - ✗ S NeoDrive
  - ✗ G NeoDrive
  - ✗ V NeoDrive
  - ✗ S Strong Hybrid
  - ✗ G Strong Hybrid
  - ✗ V Strong Hybrid
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Toyota Rumion (toyota-rumion)
- **Official Portal:** [https://www.toyotabharat.com/showroom/rumion](https://www.toyotabharat.com/showroom/rumion)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ G
  - ✗ V
  - ✗ S E-CNG
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Toyota Innova Crysta (toyota-innova-crysta)
- **Official Portal:** [https://www.toyotabharat.com/showroom/innova-crysta](https://www.toyotabharat.com/showroom/innova-crysta)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ GX
  - ✗ GX Plus
  - ✗ VX
  - ✗ ZX
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Toyota Innova Hycross (toyota-innova-hycross)
- **Official Portal:** [https://www.toyotabharat.com/showroom/innova-hycross](https://www.toyotabharat.com/showroom/innova-hycross)
- **Coverage:** 33% (2/6 verified)
- **Missing Official Variants:**
  - ✗ GX (O)
  - ✗ VX Hybrid
  - ✗ VX (O) Hybrid
  - ✗ ZX Hybrid
  - ✗ ZX (O) Hybrid

### Toyota Fortuner (toyota-fortuner)
- **Official Portal:** [https://www.toyotabharat.com/showroom/fortuner](https://www.toyotabharat.com/showroom/fortuner)
- **Coverage:** 25% (2/8 verified)
- **Missing Official Variants:**
  - ✗ 4x2 MT Petrol
  - ✗ 4x2 AT Petrol
  - ✗ 4x2 MT Diesel
  - ✗ 4x2 AT Diesel
  - ✗ 4x4 MT Diesel
  - ✗ 4x4 AT Diesel
  - ✗ Legender 4x2

### Toyota Hilux (toyota-hilux)
- **Official Portal:** [https://www.toyotabharat.com/showroom/hilux](https://www.toyotabharat.com/showroom/hilux)
- **Coverage:** 0% (0/3 verified)
- **Missing Official Variants:**
  - ✗ Standard 4x4 MT
  - ✗ High 4x4 MT
  - ✗ High 4x4 AT
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Toyota Camry (toyota-camry)
- **Official Portal:** [https://www.toyotabharat.com/showroom/camry](https://www.toyotabharat.com/showroom/camry)
- **Coverage:** 100% (1/1 verified)
- **Missing Official Variants:**
  - ✗ 2.5L Hybrid

### Toyota Vellfire (toyota-vellfire)
- **Official Portal:** [https://www.toyotabharat.com/showroom/vellfire](https://www.toyotabharat.com/showroom/vellfire)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Hi Grade
  - ✗ VIP Grade
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Toyota Land Cruiser 300 (toyota-land-cruiser-300)
- **Official Portal:** [https://www.toyotabharat.com/showroom/lc300](https://www.toyotabharat.com/showroom/lc300)
- **Coverage:** 100% (1/1 verified)
- **Missing Official Variants:**
  - ✗ ZX Diesel

### Kia Sonet (kia-sonet)
- **Official Portal:** [https://www.kia.com/in/our-vehicles/sonet.html](https://www.kia.com/in/our-vehicles/sonet.html)
- **Coverage:** 25% (2/8 verified)
- **Missing Official Variants:**
  - ✗ HTK
  - ✗ HTK(O)
  - ✗ HTK Plus
  - ✗ HTX
  - ✗ HTX Plus
  - ✗ GTX Plus
  - ✗ X-Line

### Kia Seltos (kia-seltos)
- **Official Portal:** [https://www.kia.com/in/our-vehicles/seltos.html](https://www.kia.com/in/our-vehicles/seltos.html)
- **Coverage:** 29% (2/7 verified)
- **Missing Official Variants:**
  - ✗ HTK
  - ✗ HTK Plus
  - ✗ HTX
  - ✗ HTX Plus
  - ✗ GTX Plus
  - ✗ X-Line

### Kia Carens (kia-carens)
- **Official Portal:** [https://www.kia.com/in/our-vehicles/carens.html](https://www.kia.com/in/our-vehicles/carens.html)
- **Coverage:** 0% (0/5 verified)
- **Missing Official Variants:**
  - ✗ Premium
  - ✗ Prestige
  - ✗ Prestige Plus
  - ✗ Luxury
  - ✗ Luxury Plus
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Kia Carnival (kia-carnival)
- **Official Portal:** [https://www.kia.com/in/our-vehicles/carnival.html](https://www.kia.com/in/our-vehicles/carnival.html)
- **Coverage:** 50% (1/2 verified)
- **Missing Official Variants:**
  - ✗ Limousine
  - ✗ Limousine Plus
- **Incorrect / Placeholder Trims:**
  - ⚠️ Standard (Generic Placeholder)

### Kia EV6 (kia-ev6)
- **Official Portal:** [https://www.kia.com/in/our-vehicles/ev6.html](https://www.kia.com/in/our-vehicles/ev6.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ GT-Line RWD
  - ✗ GT-Line AWD
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Honda Amaze (honda-amaze)
- **Official Portal:** [https://www.hondacarindia.com/honda-amaze](https://www.hondacarindia.com/honda-amaze)
- **Coverage:** 0% (0/3 verified)
- **Missing Official Variants:**
  - ✗ VX
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Honda City (honda-city)
- **Official Portal:** [https://www.hondacarindia.com/honda-city](https://www.hondacarindia.com/honda-city)
- **Coverage:** 40% (2/5 verified)
- **Missing Official Variants:**
  - ✗ VX
  - ✗ e:HEV ZX Hybrid

### Honda Elevate (honda-elevate)
- **Official Portal:** [https://www.hondacarindia.com/honda-elevate](https://www.hondacarindia.com/honda-elevate)
- **Coverage:** 50% (2/4 verified)
- **Missing Official Variants:**
  - ✗ VX

### MG Comet EV (mg-comet-ev)
- **Official Portal:** [https://www.mgmotor.co.in/vehicles/comet-ev](https://www.mgmotor.co.in/vehicles/comet-ev)
- **Coverage:** 0% (0/3 verified)
- **Missing Official Variants:**
  - ✗ Executive
  - ✗ Excite
  - ✗ Exclusive
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### MG Windsor EV (mg-windsor-ev)
- **Official Portal:** [https://www.mgmotor.co.in/vehicles/windsor-ev](https://www.mgmotor.co.in/vehicles/windsor-ev)
- **Coverage:** 0% (0/3 verified)
- **Missing Official Variants:**
  - ✗ Excite
  - ✗ Exclusive
  - ✗ Essence
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### MG Astor (mg-astor)
- **Official Portal:** [https://www.mgmotor.co.in/vehicles/mg-astor](https://www.mgmotor.co.in/vehicles/mg-astor)
- **Coverage:** 0% (0/5 verified)
- **Missing Official Variants:**
  - ✗ Sprint
  - ✗ Shine
  - ✗ Select
  - ✗ Sharp Pro
  - ✗ Savvy Pro
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### MG Hector (mg-hector)
- **Official Portal:** [https://www.mgmotor.co.in/vehicles/mg-hector](https://www.mgmotor.co.in/vehicles/mg-hector)
- **Coverage:** 0% (0/6 verified)
- **Missing Official Variants:**
  - ✗ Style
  - ✗ Shine Pro
  - ✗ Select Pro
  - ✗ Smart Pro
  - ✗ Sharp Pro
  - ✗ Savvy Pro
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### MG Hector Plus (mg-hector-plus)
- **Official Portal:** [https://www.mgmotor.co.in/vehicles/mg-hectorplus](https://www.mgmotor.co.in/vehicles/mg-hectorplus)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ Select Pro
  - ✗ Smart Pro
  - ✗ Sharp Pro
  - ✗ Savvy Pro
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### MG ZS EV (mg-zs-ev)
- **Official Portal:** [https://www.mgmotor.co.in/vehicles/mg-zsev](https://www.mgmotor.co.in/vehicles/mg-zsev)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ Executive
  - ✗ Excite
  - ✗ Exclusive Plus
  - ✗ Essence
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### MG Gloster (mg-gloster)
- **Official Portal:** [https://www.mgmotor.co.in/vehicles/mg-gloster](https://www.mgmotor.co.in/vehicles/mg-gloster)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Sharp
  - ✗ Savvy
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Skoda Kushaq (skoda-kushaq)
- **Official Portal:** [https://www.skoda-auto.co.in/models/kushaq](https://www.skoda-auto.co.in/models/kushaq)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ Classic
  - ✗ Signature
  - ✗ Prestige
  - ✗ Monte Carlo
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Skoda Slavia (skoda-slavia)
- **Official Portal:** [https://www.skoda-auto.co.in/models/slavia](https://www.skoda-auto.co.in/models/slavia)
- **Coverage:** 0% (0/4 verified)
- **Missing Official Variants:**
  - ✗ Classic
  - ✗ Signature
  - ✗ Prestige
  - ✗ Monte Carlo
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Skoda Kodiaq (skoda-kodiaq)
- **Official Portal:** [https://www.skoda-auto.co.in/models/kodiaq](https://www.skoda-auto.co.in/models/kodiaq)
- **Coverage:** 0% (0/3 verified)
- **Missing Official Variants:**
  - ✗ Style
  - ✗ Sportline
  - ✗ L&K
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Volkswagen Taigun (volkswagen-taigun)
- **Official Portal:** [https://www.volkswagen.co.in/en/models/taigun.html](https://www.volkswagen.co.in/en/models/taigun.html)
- **Coverage:** 0% (0/5 verified)
- **Missing Official Variants:**
  - ✗ Comfortline
  - ✗ Highline
  - ✗ Topline
  - ✗ GT Line
  - ✗ GT Plus
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Volkswagen Virtus (volkswagen-virtus)
- **Official Portal:** [https://www.volkswagen.co.in/en/models/virtus.html](https://www.volkswagen.co.in/en/models/virtus.html)
- **Coverage:** 40% (2/5 verified)
- **Missing Official Variants:**
  - ✗ Highline
  - ✗ Topline
  - ✗ GT Line

### Volkswagen Tiguan (volkswagen-tiguan)
- **Official Portal:** [https://www.volkswagen.co.in/en/models/tiguan.html](https://www.volkswagen.co.in/en/models/tiguan.html)
- **Coverage:** 100% (1/1 verified)
- **Missing Official Variants:**
  - ✗ Elegance 2.0 TSI

### Renault Kwid (renault-kwid)
- **Official Portal:** [https://www.renault.co.in/cars/renault-kwid.html](https://www.renault.co.in/cars/renault-kwid.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Renault Triber (renault-triber)
- **Official Portal:** [https://www.renault.co.in/cars/renault-triber.html](https://www.renault.co.in/cars/renault-triber.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Renault Kiger (renault-kiger)
- **Official Portal:** [https://www.renault.co.in/cars/renault-kiger.html](https://www.renault.co.in/cars/renault-kiger.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Nissan Magnite (nissan-magnite)
- **Official Portal:** [https://www.nissan.in/vehicles/new/magnite.html](https://www.nissan.in/vehicles/new/magnite.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Citroën C3 (citroen-c3)
- **Official Portal:** [https://www.citroen.in/c3](https://www.citroen.in/c3)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Citroën ë-C3 (citroen-e-c3)
- **Official Portal:** [https://www.citroen.in/ec3](https://www.citroen.in/ec3)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Citroën C3 Aircross (citroen-c3-aircross)
- **Official Portal:** [https://www.citroen.in/c3-aircross](https://www.citroen.in/c3-aircross)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Citroën Basalt (citroen-basalt)
- **Official Portal:** [https://www.citroen.in/basalt](https://www.citroen.in/basalt)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Citroën C5 Aircross (citroen-c5-aircross)
- **Official Portal:** [https://www.citroen.in/c5-aircross](https://www.citroen.in/c5-aircross)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Jeep Compass (jeep-compass)
- **Official Portal:** [https://www.jeep-india.com/compass.html](https://www.jeep-india.com/compass.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Jeep Meridian (jeep-meridian)
- **Official Portal:** [https://www.jeep-india.com/meridian.html](https://www.jeep-india.com/meridian.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Jeep Wrangler (jeep-wrangler)
- **Official Portal:** [https://www.jeep-india.com/wrangler.html](https://www.jeep-india.com/wrangler.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BYD Atto 3 (byd-atto-3)
- **Official Portal:** [https://bydautoindia.com/byd-atto3](https://bydautoindia.com/byd-atto3)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BYD Seal (byd-seal)
- **Official Portal:** [https://bydautoindia.com/byd-seal](https://bydautoindia.com/byd-seal)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BYD eMax 7 (byd-emax-7)
- **Official Portal:** [https://bydautoindia.com/byd-emax7](https://bydautoindia.com/byd-emax7)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Force Motors Gurkha (force-gurkha)
- **Official Portal:** [https://www.forcegurkha.co.in](https://www.forcegurkha.co.in)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Force Motors Trax Cruiser (force-trax-cruiser)
- **Official Portal:** [https://www.forcemotors.com/vehicle/trax-cruiser](https://www.forcemotors.com/vehicle/trax-cruiser)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Isuzu D-Max V-Cross (isuzu-d-max-v-cross)
- **Official Portal:** [https://isuzu.in/v-cross/](https://isuzu.in/v-cross/)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Isuzu MU-X (isuzu-mu-x)
- **Official Portal:** [https://isuzu.in/mu-x/](https://isuzu.in/mu-x/)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW 2 Series Gran Coupe (bmw-2-series-gran-coupe)
- **Official Portal:** [https://www.bmw.in/en/all-models/2-series/gran-coupe/2020/bmw-2-series-gran-coupe-overview.html](https://www.bmw.in/en/all-models/2-series/gran-coupe/2020/bmw-2-series-gran-coupe-overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW 3 Series Gran Limousine (bmw-3-series-gran-limousine)
- **Official Portal:** [https://www.bmw.in/en/all-models/3-series/gran-limousine/2021/bmw-3-series-gran-limousine-overview.html](https://www.bmw.in/en/all-models/3-series/gran-limousine/2021/bmw-3-series-gran-limousine-overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW 7 Series (bmw-7-series)
- **Official Portal:** [https://www.bmw.in/en/all-models/7-series/sedan/2022/bmw-7-series-sedan-overview.html](https://www.bmw.in/en/all-models/7-series/sedan/2022/bmw-7-series-sedan-overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW X1 (bmw-x1)
- **Official Portal:** [https://www.bmw.in/en/all-models/x-series/X1/2022/bmw-x1-overview.html](https://www.bmw.in/en/all-models/x-series/X1/2022/bmw-x1-overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW X5 (bmw-x5)
- **Official Portal:** [https://www.bmw.in/en/all-models/x-series/X5/2023/bmw-x5-overview.html](https://www.bmw.in/en/all-models/x-series/X5/2023/bmw-x5-overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW X7 (bmw-x7)
- **Official Portal:** [https://www.bmw.in/en/all-models/x-series/X7/2022/bmw-x7-overview.html](https://www.bmw.in/en/all-models/x-series/X7/2022/bmw-x7-overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW i4 (bmw-i4)
- **Official Portal:** [https://www.bmw.in/en/all-models/bmw-i/i4/2021/bmw-i4-overview.html](https://www.bmw.in/en/all-models/bmw-i/i4/2021/bmw-i4-overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW iX (bmw-ix)
- **Official Portal:** [https://www.bmw.in/en/all-models/bmw-i/ix/2021/bmw-ix.html](https://www.bmw.in/en/all-models/bmw-i/ix/2021/bmw-ix.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW i7 (bmw-i7)
- **Official Portal:** [https://www.bmw.in/en/all-models/bmw-i/i7/2022/bmw-i7-sedan-overview.html](https://www.bmw.in/en/all-models/bmw-i/i7/2022/bmw-i7-sedan-overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz A-Class Limousine (mercedes-benz-a-class-limousine)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/saloon/a-class/overview.html](https://www.mercedes-benz.co.in/passengercars/models/saloon/a-class/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz C-Class (mercedes-benz-c-class)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/saloon/c-class/overview.html](https://www.mercedes-benz.co.in/passengercars/models/saloon/c-class/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz E-Class Long Wheelbase (mercedes-benz-e-class-long-wheelbase)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/saloon/e-class/overview.html](https://www.mercedes-benz.co.in/passengercars/models/saloon/e-class/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz S-Class (mercedes-benz-s-class)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/saloon/s-class/overview.html](https://www.mercedes-benz.co.in/passengercars/models/saloon/s-class/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz GLA (mercedes-benz-gla)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/suv/gla/overview.html](https://www.mercedes-benz.co.in/passengercars/models/suv/gla/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz GLC (mercedes-benz-glc)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/suv/glc/overview.html](https://www.mercedes-benz.co.in/passengercars/models/suv/glc/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz GLE (mercedes-benz-gle)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/suv/gle/overview.html](https://www.mercedes-benz.co.in/passengercars/models/suv/gle/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz GLS (mercedes-benz-gls)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/suv/gls/overview.html](https://www.mercedes-benz.co.in/passengercars/models/suv/gls/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz G-Class (mercedes-benz-g-class)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/suv/g-class/overview.html](https://www.mercedes-benz.co.in/passengercars/models/suv/g-class/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Audi A4 (audi-a4)
- **Official Portal:** [https://www.audi.in/in/web/en/models/a4/a4-sedan.html](https://www.audi.in/in/web/en/models/a4/a4-sedan.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Audi A6 (audi-a6)
- **Official Portal:** [https://www.audi.in/in/web/en/models/a6/a6-sedan.html](https://www.audi.in/in/web/en/models/a6/a6-sedan.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Audi Q3 (audi-q3)
- **Official Portal:** [https://www.audi.in/in/web/en/models/q3/q3.html](https://www.audi.in/in/web/en/models/q3/q3.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Audi Q5 (audi-q5)
- **Official Portal:** [https://www.audi.in/in/web/en/models/q5/q5.html](https://www.audi.in/in/web/en/models/q5/q5.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Audi Q7 (audi-q7)
- **Official Portal:** [https://www.audi.in/in/web/en/models/q7/q7.html](https://www.audi.in/in/web/en/models/q7/q7.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Audi Q8 (audi-q8)
- **Official Portal:** [https://www.audi.in/in/web/en/models/q8/q8.html](https://www.audi.in/in/web/en/models/q8/q8.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Volvo EX40 (volvo-ex40)
- **Official Portal:** [https://www.volvocars.com/in/cars/ex40-electric/](https://www.volvocars.com/in/cars/ex40-electric/)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Land Rover Defender (land-rover-defender)
- **Official Portal:** [https://www.landrover.in/defender/index.html](https://www.landrover.in/defender/index.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Land Rover Range Rover Sport (land-rover-range-rover-sport)
- **Official Portal:** [https://www.landrover.in/range-rover/range-rover-sport/index.html](https://www.landrover.in/range-rover/range-rover-sport/index.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Land Rover Range Rover (land-rover-range-rover)
- **Official Portal:** [https://www.landrover.in/range-rover/range-rover/index.html](https://www.landrover.in/range-rover/range-rover/index.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Lexus ES 300h (lexus-es-300h)
- **Official Portal:** [https://www.lexusindia.co.in/en/models/es.html](https://www.lexusindia.co.in/en/models/es.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Lexus NX 350h (lexus-nx-350h)
- **Official Portal:** [https://www.lexusindia.co.in/en/models/nx.html](https://www.lexusindia.co.in/en/models/nx.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Lexus RX 350h / 500h (lexus-rx)
- **Official Portal:** [https://www.lexusindia.co.in/en/models/rx.html](https://www.lexusindia.co.in/en/models/rx.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Lexus LM 350h (lexus-lm-350h)
- **Official Portal:** [https://www.lexusindia.co.in/en/models/lm.html](https://www.lexusindia.co.in/en/models/lm.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### MINI Countryman (mini-countryman)
- **Official Portal:** [https://www.mini.in/en_IN/home/range/mini-countryman.html](https://www.mini.in/en_IN/home/range/mini-countryman.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Porsche 911 (porsche-911)
- **Official Portal:** [https://www.porsche.com/middle-east/_india_/models/911/](https://www.porsche.com/middle-east/_india_/models/911/)
- **Coverage:** 100% (2/2 verified)
- **Missing Official Variants:**
  - ✗ Base Specification
  - ✗ Top Specification

### Porsche 718 Boxster / Cayman (porsche-718)
- **Official Portal:** [https://www.porsche.com/middle-east/_india_/models/718/](https://www.porsche.com/middle-east/_india_/models/718/)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Porsche Macan (porsche-macan)
- **Official Portal:** [https://www.porsche.com/middle-east/_india_/models/macan/](https://www.porsche.com/middle-east/_india_/models/macan/)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Porsche Cayenne (porsche-cayenne)
- **Official Portal:** [https://www.porsche.com/middle-east/_india_/models/cayenne/](https://www.porsche.com/middle-east/_india_/models/cayenne/)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Porsche Panamera (porsche-panamera)
- **Official Portal:** [https://www.porsche.com/middle-east/_india_/models/panamera/](https://www.porsche.com/middle-east/_india_/models/panamera/)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Porsche Taycan (porsche-taycan)
- **Official Portal:** [https://www.porsche.com/middle-east/_india_/models/taycan/](https://www.porsche.com/middle-east/_india_/models/taycan/)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Ferrari Roma (ferrari-roma)
- **Official Portal:** [https://www.ferrari.com/en-IN/auto/ferrari-roma](https://www.ferrari.com/en-IN/auto/ferrari-roma)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maserati Grecale (maserati-grecale)
- **Official Portal:** [https://www.maserati.com/in/en/models/grecale](https://www.maserati.com/in/en/models/grecale)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Bentley Bentayga (bentley-bentayga)
- **Official Portal:** [https://www.bentleymotors.com/en/models/bentayga.html](https://www.bentleymotors.com/en/models/bentayga.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Rolls-Royce Ghost (rolls-royce-ghost)
- **Official Portal:** [https://www.rolls-roycemotorcars.com/en_GB/showroom/ghost.html](https://www.rolls-roycemotorcars.com/en_GB/showroom/ghost.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Rolls-Royce Cullinan (rolls-royce-cullinan)
- **Official Portal:** [https://www.rolls-roycemotorcars.com/en_GB/showroom/cullinan.html](https://www.rolls-roycemotorcars.com/en_GB/showroom/cullinan.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Lotus Eletre (lotus-eletre)
- **Official Portal:** [https://www.lotuscars.com/en-GB/eletre](https://www.lotuscars.com/en-GB/eletre)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Nissan Gravite (nissan-gravite)
- **Official Portal:** [https://www.nissan.in/vehicles/new/gravite.html](https://www.nissan.in/vehicles/new/gravite.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Nissan Tekton (nissan-tekton)
- **Official Portal:** [https://www.nissan.in/vehicles/new/tekton.html](https://www.nissan.in/vehicles/new/tekton.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Renault Duster (renault-duster)
- **Official Portal:** [https://www.renault.co.in/cars/duster.html](https://www.renault.co.in/cars/duster.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Skoda Kylaq (skoda-kylaq)
- **Official Portal:** [https://www.skoda-auto.co.in/models/kylaq/kylaq](https://www.skoda-auto.co.in/models/kylaq/kylaq)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Kia EV9 (kia-ev9)
- **Official Portal:** [https://www.kia.com/in/our-vehicles/ev9.html](https://www.kia.com/in/our-vehicles/ev9.html)
- **Coverage:** 100% (1/1 verified)
- **Missing Official Variants:**
  - ✗ GT-Line AWD

### VinFast VF 6 (vinfast-vf-6)
- **Official Portal:** [https://vinfastauto.in/models/vf6](https://vinfastauto.in/models/vf6)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### VinFast VF 7 (vinfast-vf-7)
- **Official Portal:** [https://vinfastauto.in/models/vf7](https://vinfastauto.in/models/vf7)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### VinFast VF MPV 7 (vinfast-vf-mpv-7)
- **Official Portal:** [https://vinfastauto.in/models/vf-mpv-7](https://vinfastauto.in/models/vf-mpv-7)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Audi A8 L (audi-a8-l)
- **Official Portal:** [https://www.audi.in/in/web/en/models/a8/a8-l.html](https://www.audi.in/in/web/en/models/a8/a8-l.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Audi Q8 e-tron (audi-q8-e-tron)
- **Official Portal:** [https://www.audi.in/in/web/en/models/q8-e-tron/q8-e-tron.html](https://www.audi.in/in/web/en/models/q8-e-tron/q8-e-tron.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Audi e-tron GT (audi-e-tron-gt)
- **Official Portal:** [https://www.audi.in/in/web/en/models/e-tron-gt/e-tron-gt.html](https://www.audi.in/in/web/en/models/e-tron-gt/e-tron-gt.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW X3 (bmw-x3)
- **Official Portal:** [https://www.bmw.in/en/all-models/x-series/X3/2021/bmw-x3-highlights.html](https://www.bmw.in/en/all-models/x-series/X3/2021/bmw-x3-highlights.html)
- **Coverage:** 100% (2/2 verified)
- **Missing Official Variants:**
  - ✗ Base Specification
  - ✗ Top Specification

### BMW M2 (bmw-m2)
- **Official Portal:** [https://www.bmw.in/en/all-models/m-series/m2-coupe/2023/bmw-2-series-m-coupe-highlights.html](https://www.bmw.in/en/all-models/m-series/m2-coupe/2023/bmw-2-series-m-coupe-highlights.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW Z4 (bmw-z4)
- **Official Portal:** [https://www.bmw.in/en/all-models/z-series/z4/2022/bmw-z4-roadster-highlights.html](https://www.bmw.in/en/all-models/z-series/z4/2022/bmw-z4-roadster-highlights.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### BMW i5 (bmw-i5)
- **Official Portal:** [https://www.bmw.in/en/all-models/bmw-i/i5/2023/bmw-i5-highlights.html](https://www.bmw.in/en/all-models/bmw-i/i5/2023/bmw-i5-highlights.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz GLB (mercedes-benz-glb)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/suv/glb/overview.html](https://www.mercedes-benz.co.in/passengercars/models/suv/glb/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz EQB (mercedes-benz-eqb)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/suv/eqb/overview.html](https://www.mercedes-benz.co.in/passengercars/models/suv/eqb/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz EQS SUV (mercedes-benz-eqs-suv)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/suv/eqs/overview.html](https://www.mercedes-benz.co.in/passengercars/models/suv/eqs/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz CLE (mercedes-benz-cle)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/coupe/cle/overview.html](https://www.mercedes-benz.co.in/passengercars/models/coupe/cle/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Mercedes-Benz AMG GT (mercedes-amg-gt)
- **Official Portal:** [https://www.mercedes-benz.co.in/passengercars/models/coupe/amg-gt-coupe/overview.html](https://www.mercedes-benz.co.in/passengercars/models/coupe/amg-gt-coupe/overview.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Land Rover Discovery (land-rover-discovery)
- **Official Portal:** [https://www.landrover.in/discovery/discovery/index.html](https://www.landrover.in/discovery/discovery/index.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Lexus LC 500h (lexus-lc-500h)
- **Official Portal:** [https://www.lexusindia.co.in/en/models/lc/lc-500h.html](https://www.lexusindia.co.in/en/models/lc/lc-500h.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Volvo EX30 (volvo-ex30)
- **Official Portal:** [https://www.volvocars.com/in/cars/ex30-electric/](https://www.volvocars.com/in/cars/ex30-electric/)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Ferrari 12Cilindri (ferrari-12cilindri)
- **Official Portal:** [https://www.ferrari.com/en-IN/auto/12cilindri](https://www.ferrari.com/en-IN/auto/12cilindri)
- **Coverage:** 100% (1/1 verified)
- **Missing Official Variants:**
  - ✗ Standard

### Aston Martin DBX (aston-martin-dbx)
- **Official Portal:** [https://www.astonmartin.com/en/models/dbx707](https://www.astonmartin.com/en/models/dbx707)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Bentley Flying Spur (bentley-flying-spur)
- **Official Portal:** [https://www.bentleymotors.com/en/models/flying-spur.html](https://www.bentleymotors.com/en/models/flying-spur.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Rolls-Royce Phantom (rolls-royce-phantom)
- **Official Portal:** [https://www.rolls-roycemotorcars.com/en_GB/showroom/phantom.html](https://www.rolls-roycemotorcars.com/en_GB/showroom/phantom.html)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Lotus Emira (lotus-emira)
- **Official Portal:** [https://www.lotuscars.com/en-IN/emira](https://www.lotuscars.com/en-IN/emira)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### McLaren GTS (mclaren-gts)
- **Official Portal:** [https://cars.mclaren.com/en/gts](https://cars.mclaren.com/en/gts)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

### Maserati GranTurismo (maserati-granturismo)
- **Official Portal:** [https://www.maserati.com/in/en/models/granturismo](https://www.maserati.com/in/en/models/granturismo)
- **Coverage:** 0% (0/2 verified)
- **Missing Official Variants:**
  - ✗ Top Specification
- **Incorrect / Placeholder Trims:**
  - ⚠️ Base Specification (Generic Placeholder)

