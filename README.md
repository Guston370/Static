# Static — but dynamic

Multi-category comparison platform for the Indian consumer market.

Static provides transparent, independent, side-by-side comparison for passenger cars, smartphones, and two-wheelers with verified manufacturer specifications, official Indian pricing, and formula-based category winners.

---

## Projects

### 1. CarCompare (Main Portal & Automotive)
- **Location:** `carcompare/`
- **Public URL:** `/` (Main Portal) and `/cars` (Catalogue)
- **Default Dev Port:** `3000`
- **Purpose:** Indian passenger vehicle comparison platform covering 206 active models across 38 brands, 251 verified powertrain and trim variants, and real 4-angle vehicle photography.

### 2. PhoneCompare (Smartphones)
- **Location:** `phonecompare/`
- **Public URL:** `/mobiles`
- **Default Dev Port:** `3001`
- **Purpose:** Indian smartphone comparison platform covering 74 active smartphone models across 19 officially active brands, 153 verified RAM/storage configurations, and real multi-angle product photography.

### 3. BikeCompare (Motorcycles & Scooters)
- **Location:** `bikecompare/`
- **Public URL:** `/bikes`
- **Default Dev Port:** `3002`
- **Purpose:** Indian two-wheeler comparison platform covering verified motorcycles, electric scooters, displacement/battery benchmarks, real-world mileage, and braking safety.

---

## Routing & Deployment Architecture

The repository uses a multi-application micro-frontend architecture unified via `vercel.json`:

```text
Request URL            Target Service        Asset Prefix / Rewrites
/                      carcompare (portal)   /_next/*
/cars                  carcompare            /_next/*
/cars/[slug]           carcompare            /_next/*
/compare               carcompare            /_next/*
/mobiles               phonecompare          /mobiles/_next/*
/mobiles/[slug]        phonecompare          /mobiles/_next/*
/mobiles/compare       phonecompare          /mobiles/_next/*
/bikes                 bikecompare           /bikes/_next/*
/bikes/[slug]          bikecompare           /bikes/_next/*
/bikes/compare         bikecompare           /bikes/_next/*
```

In addition, `carcompare` hosts native mirror routes for `/bikes` and `/mobiles` so running only the root portal dev server locally provides seamless navigation across all three categories.

---

## System Requirements

- **Node.js**: v18.18.0 or newer (v20+ recommended)
- **npm**: v9.0.0 or newer
- **Operating System**: Windows, macOS, or Linux

---

## Environment Variables

All applications run out of the box without mandatory third-party API keys:

- `NEXT_PUBLIC_SITE_URL`: (Optional) Base URL for canonical links and OpenGraph metadata (defaults to `http://localhost:3000`).

---

## Quick Start — Local Development

Run each application in separate terminal windows:

### Run CarCompare (Port 3000)

```bash
cd carcompare
npm install
npm run dev -- -p 3000
```
Opens at `http://localhost:3000` (Main portal, `/cars`, `/compare`).

### Run PhoneCompare (Port 3001)

```bash
cd phonecompare
npm install
npm run dev -- -p 3001
```
Opens at `http://localhost:3001` (`/mobiles`, `/mobiles/compare`).

### Run BikeCompare (Port 3002)

```bash
cd bikecompare
npm install
npm run dev -- -p 3002
```
Opens at `http://localhost:3002` (`/bikes`, `/bikes/compare`).

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

### BikeCompare

```bash
cd bikecompare
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

## Theme & Design System

The platform features a customized Neumorphic design system with complete light and dark theme synchronization:
- **Semantic CSS Variables:** Standardized across all applications (`--background`, `--surface`, `--surface-raised`, `--surface-inset`, `--foreground`, `--muted-foreground`, `--border`, `--accent`, `--card`, `--input`, `--shadow-raised`, `--shadow-inset`, `--hero-bg`, `--hero-text`).
- **Synchronized Theme Toggle:** Updates `localStorage` key `'theme'` and broadcasts `static-theme-change` custom events.
- **Flash-Free Initial Rendering:** Inline `<script>` in each `layout.tsx` sets `.dark` class, `data-theme="dark"`, and `style.colorScheme` immediately before first paint.
- **Native Input Styling:** `<select>`, `<option>`, range sliders, and text inputs automatically adapt to dark mode with full contrast.

---

## Project Structure

```text
Static/
├── .gitignore
├── README.md
├── vercel.json
│
├── carcompare/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── data/
│   │   ├── india-car-models.json
│   │   ├── india-car-variants.json
│   │   ├── india-mobile-models.json
│   │   └── india-bike-models.json
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx          # Main Static Portal
│   │   │   ├── layout.tsx
│   │   │   ├── globals.css
│   │   │   ├── cars/             # Car listing & details
│   │   │   ├── compare/          # Car comparison
│   │   │   ├── mobiles/          # Smartphone portal mirror
│   │   │   └── bikes/            # Bike portal mirror
│   │   ├── components/
│   │   ├── context/
│   │   └── lib/
│
├── phonecompare/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── data/
│   │   ├── india-mobile-models.json
│   │   └── india-mobile-variants.json
│   ├── src/
│   │   ├── app/
│   │   │   ├── mobiles/          # Smartphone catalogue & compare
│   │   │   └── not-found.tsx
│   │   ├── components/
│   │   ├── context/
│   │   └── lib/
│
└── bikecompare/
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    ├── data/
    │   └── india-bike-models.json
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx
    │   │   ├── bikes/            # Two-wheeler catalogue & compare
    │   │   └── not-found.tsx
    │   ├── components/
    │   ├── context/
    │   └── lib/
```
