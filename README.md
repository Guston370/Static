# Static — but dynamic

Multi-category comparison platform for the Indian consumer market.

Static provides transparent, independent, side-by-side comparison for passenger cars and smartphones with verified manufacturer specifications, official Indian pricing, and formula-based category winners.

---

## Projects

### 1. CarCompare
- **Location:** `carcompare/`
- **Purpose:** Indian passenger vehicle comparison platform covering 206 active models across 38 brands, 251 verified powertrain and trim variants, and real 4-angle vehicle photography.

### 2. PhoneCompare
- **Location:** `phonecompare/`
- **Purpose:** Indian smartphone comparison platform covering 74 active smartphone models across 19 officially active brands, 153 verified RAM/storage configurations, and real multi-angle product photography.

---

## System Requirements

- **Node.js**: v18.18.0 or newer (v20+ recommended)
- **npm**: v9.0.0 or newer
- **Operating System**: Windows, macOS, or Linux

---

## Environment Variables

Both applications run out of the box without mandatory third-party API keys:

- `NEXT_PUBLIC_SITE_URL`: (Optional) Base URL for canonical links and OpenGraph metadata (defaults to `http://localhost:3000`).

---

## Quick Start — Development

### Run CarCompare

```bash
cd carcompare
npm install
npm run dev
```

Opens at `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied).

### Run PhoneCompare

```bash
cd phonecompare
npm install
npm run dev
```

Opens at `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied).

---

## Production Build & Run

### CarCompare

```bash
cd carcompare
npm run lint
npm run build
npm start
```

### PhoneCompare

```bash
cd phonecompare
npm run lint
npm run build
npm start
```

---

## Verification & Data Integrity Audits

### CarCompare (Automotive Suite)

```bash
cd carcompare

# Model catalog integrity (status, specs, sources)
npm run validate:cars

# Variant & trim pricing integrity
npm run validate:variants

# Multi-angle vehicle photography validation
npm run validate:images

# Market coverage audit
npm run audit:cars

# Variant completeness audit
npm run audit:variants
```

### PhoneCompare (Smartphone Suite)

```bash
cd phonecompare

# Smartphone model catalog validation
npm run validate:mobiles

# Smartphone RAM/storage variant validation
npm run validate:mobile-variants

# Multi-angle smartphone image validation
npm run validate:mobile-images

# Independent Indian smartphone market audit
npm run audit:mobiles

# Variant completeness priority queue audit
npm run audit:mobile-variants
```

---

## Project Structure

```text
Static/
├── .gitignore
├── README.md
│
├── carcompare/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── eslint.config.mjs
│   ├── postcss.config.mjs
│   ├── data/
│   │   ├── india-car-models.json
│   │   ├── india-car-variants.json
│   │   └── car-images.json
│   ├── scripts/
│   │   ├── validate_car_catalog.ts
│   │   ├── validate_variants.ts
│   │   ├── validate_car_images.ts
│   │   ├── audit_car_catalog.ts
│   │   └── audit_variants.ts
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── globals.css
│   │   │   ├── cars/
│   │   │   └── compare/
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   └── public/
│
└── phonecompare/
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    ├── eslint.config.mjs
    ├── postcss.config.mjs
    ├── data/
    │   ├── india-mobile-models.json
    │   ├── india-mobile-variants.json
    │   └── mobile-images.json
    ├── scripts/
    │   ├── validate_mobile_catalog.ts
    │   ├── validate_mobile_variants.ts
    │   ├── validate_mobile_images.ts
    │   ├── audit_mobile_catalog.ts
    │   └── audit_mobile_variants.ts
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx
    │   │   ├── layout.tsx
    │   │   ├── globals.css
    │   │   └── mobiles/
    │   │       ├── page.tsx
    │   │       ├── compare/
    │   │       └── [slug]/
    │   ├── components/
    │   ├── lib/
    │   ├── context/
    │   └── types/
    └── public/
```
