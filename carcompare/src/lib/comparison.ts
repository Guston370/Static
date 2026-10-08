/**
 * lib/comparison.ts
 *
 * Scoring engine for car comparisons.
 * All scoring logic lives here — completely independent from UI.
 *
 * Scoring philosophy:
 * - Each category produces a score 0–10 using normalized formulas.
 * - Scores are derived purely from structured spec data.
 * - No hard-coded per-car values.
 * - Transparent: caller can inspect category breakdown.
 *
 * IMPORTANT: These are "Platform Scores" — not official ratings.
 * They are clearly labelled as such in the UI.
 *
 * Phase 2+: weights can be user-configurable (personalized scoring).
 */

import type {
  Car,
  CarScore,
  CategoryScore,
  ComparisonCategory,
  ComparisonResult,
} from '@/types/car';

// ──────────────────────────────────────────────
// Default category weights (must sum to 1.0)
// ──────────────────────────────────────────────
export const DEFAULT_WEIGHTS: Record<ComparisonCategory, number> = {
  performance: 0.20,
  safety: 0.25,
  efficiency: 0.20,
  features: 0.15,
  practicality: 0.10,
  value: 0.10,
};

export const CATEGORY_LABELS: Record<ComparisonCategory, string> = {
  performance: 'Performance',
  safety: 'Safety',
  efficiency: 'Efficiency',
  features: 'Features',
  practicality: 'Practicality',
  value: 'Value for Money',
};

// ──────────────────────────────────────────────
// Utility
// ──────────────────────────────────────────────

/**
 * Normalizes a value within a range [min, max] to 0–10.
 * Higher is better (default). Set invert=true when lower is better.
 */
function normalize(
  value: number,
  min: number,
  max: number,
  invert = false
): number {
  if (max === min) return 5; // all cars equal
  const ratio = (value - min) / (max - min);
  const normalized = invert ? 1 - ratio : ratio;
  return Math.round(Math.min(10, Math.max(0, normalized * 10)) * 10) / 10;
}

/**
 * Counts boolean true values in an object.
 */
function countTrue(obj: Record<string, boolean | number | string | null | undefined>): number {
  return Object.values(obj).filter((v) => v === true).length;
}

// ──────────────────────────────────────────────
// Category scoring functions
// Each function receives ALL compared cars so it can normalize
// against the actual comparison set, not global extremes.
// ──────────────────────────────────────────────

function scorePerformance(car: Car, allCars: Car[]): number {
  // Factors: power-to-weight ratio, torque, acceleration (lower is better)
  const powers = allCars.map((c) => c.engine.maxPowerBhp);
  const torques = allCars.map((c) => c.engine.maxTorqueNm);
  const accs = allCars
    .map((c) => c.performance.zeroToHundredSec ?? 15)
    .filter(Number.isFinite);

  const powerScore = normalize(
    car.engine.maxPowerBhp,
    Math.min(...powers),
    Math.max(...powers)
  );
  const torqueScore = normalize(
    car.engine.maxTorqueNm,
    Math.min(...torques),
    Math.max(...torques)
  );
  const accScore = normalize(
    car.performance.zeroToHundredSec ?? 15,
    Math.min(...accs),
    Math.max(...accs),
    true // lower 0–100 time is better
  );

  // Transmission bonus: Automatic/DCT/CVT get slight boost for performance feel
  const transmissionBonus =
    ['Automatic', 'DCT'].includes(car.engine.transmission) ? 0.5 : 0;

  return Math.min(10, (powerScore * 0.4 + torqueScore * 0.3 + accScore * 0.3) + transmissionBonus);
}

function scoreSafety(car: Car): number {
  const safety = car.safety;

  // NCAP: 0–5 stars → 0–10 points (weight: 4 points)
  const ncapScore = safety.ncapRating !== null ? safety.ncapRating * 0.8 : 0;

  // Airbags: 2→1pt, 4→2pt, 6→3pt, 7+→4pt (weight: 2 points)
  const airbagScore = Math.min(2, safety.airbagsCount / 3.5);

  // Boolean safety features (weight: 4 points total)
  const boolFeatures = [
    safety.abs,
    safety.ebd,
    safety.esc,
    safety.tractionControl,
    safety.hillStartAssist,
    safety.adas,
    safety.rearParkingCamera,
    safety.tpms,
  ];
  const boolScore = (boolFeatures.filter(Boolean).length / boolFeatures.length) * 4;

  return Math.min(10, ncapScore + airbagScore + boolScore);
}

function scoreEfficiency(car: Car, allCars: Car[]): number {
  if (car.engine.fuelType === 'Electric') {
    // EVs: scored on range
    const ranges = allCars
      .filter((c) => c.performance.rangeKm !== null)
      .map((c) => c.performance.rangeKm as number);

    if (ranges.length === 0) return 8; // default good EV score
    const minRange = Math.min(...ranges);
    const maxRange = Math.max(...ranges);
    const rangeScore = normalize(car.performance.rangeKm ?? 0, minRange, maxRange);
    return Math.min(10, rangeScore * 0.8 + 2); // EVs get +2 base for zero emissions
  }

  // ICE: scored on mileage
  const mileages = allCars
    .filter((c) => c.performance.mileageKmpl !== null)
    .map((c) => c.performance.mileageKmpl as number);

  if (mileages.length === 0) return 5;
  const mileage = car.performance.mileageKmpl ?? 0;
  return normalize(mileage, Math.min(...mileages), Math.max(...mileages));
}

function scoreFeatures(car: Car): number {
  const f = car.features;

  // Tiered feature scoring
  // Tier 1 (high value): panoramic sunroof, ADAS, HUD, ventilated seats, wireless charging
  const tier1 = [
    f.panoramicSunroof,
    f.ventilatedFrontSeats,
    f.wirelessCharging,
    f.hud,
    f.connectedCar,
    f.adaptiveCruiseControl,
    f.otaUpdates,
  ];

  // Tier 2 (standard): sunroof, digital cluster, carplay, ambient lighting
  const tier2 = [
    f.sunroof,
    f.digitalCluster,
    f.appleCarPlay,
    f.androidAuto,
    f.ambientLighting,
    f.autoClimate,
    f.keylessEntry,
    f.pushButtonStart,
    f.cruiseControl,
    f.rearACVents,
    f.poweredDriverSeat,
  ];

  const tier1Score = (tier1.filter(Boolean).length / tier1.length) * 5;
  const tier2Score = (tier2.filter(Boolean).length / tier2.length) * 3;

  // Infotainment size bonus (up to 2 points)
  const infoScore = f.infotainmentSizeInches
    ? Math.min(2, (f.infotainmentSizeInches / 12) * 2)
    : 0;

  return Math.min(10, tier1Score + tier2Score + infoScore);
}

function scorePracticality(car: Car, allCars: Car[]): number {
  // Boot space, seating, ground clearance
  const boots = allCars.map((c) => c.dimensions.bootSpaceLitres);
  const clearances = allCars.map((c) => c.dimensions.groundClearanceMm);

  const bootScore = normalize(
    car.dimensions.bootSpaceLitres,
    Math.min(...boots),
    Math.max(...boots)
  );
  const clearanceScore = normalize(
    car.dimensions.groundClearanceMm,
    Math.min(...clearances),
    Math.max(...clearances)
  );
  const seatingBonus = car.seatingCapacity >= 7 ? 1.5 : car.seatingCapacity >= 6 ? 0.75 : 0;

  return Math.min(10, bootScore * 4 + clearanceScore * 3 + seatingBonus + 2.5);
}

function scoreValue(car: Car): number {
  // Value = features + safety relative to price
  // Simple approach: feature count / (price in lakhs) — normalized
  const f = car.features;
  const s = car.safety;

  const featureCount = countTrue(f as unknown as Record<string, boolean | number | string | null | undefined>);
  const safetyCount = [s.abs, s.ebd, s.esc, s.adas, s.tpms, s.airbagsCount >= 6].filter(Boolean).length;

  const totalPoints = featureCount + safetyCount * 1.5;
  const avgPrice = (car.pricing.minPriceLakh + car.pricing.maxPriceLakh) / 2;

  // Value ratio: points per lakh spent
  const valueRatio = totalPoints / avgPrice;

  // Normalize to 0–10 using reasonable bounds (0.5–2.5 ratio range)
  return normalize(valueRatio, 0.5, 2.5);
}

// ──────────────────────────────────────────────
// Main scoring function
// ──────────────────────────────────────────────

/**
 * Scores a single car within the context of all compared cars.
 * All scores are relative to the comparison set.
 */
function scoreCarInContext(
  car: Car,
  allCars: Car[],
  weights: Record<ComparisonCategory, number>
): CarScore {
  const categoryScores: Omit<CategoryScore, 'winner'>[] = [
    {
      category: 'performance',
      label: CATEGORY_LABELS.performance,
      score: Math.round(scorePerformance(car, allCars) * 10) / 10,
      maxScore: 10,
    },
    {
      category: 'safety',
      label: CATEGORY_LABELS.safety,
      score: Math.round(scoreSafety(car) * 10) / 10,
      maxScore: 10,
    },
    {
      category: 'efficiency',
      label: CATEGORY_LABELS.efficiency,
      score: Math.round(scoreEfficiency(car, allCars) * 10) / 10,
      maxScore: 10,
    },
    {
      category: 'features',
      label: CATEGORY_LABELS.features,
      score: Math.round(scoreFeatures(car) * 10) / 10,
      maxScore: 10,
    },
    {
      category: 'practicality',
      label: CATEGORY_LABELS.practicality,
      score: Math.round(scorePracticality(car, allCars) * 10) / 10,
      maxScore: 10,
    },
    {
      category: 'value',
      label: CATEGORY_LABELS.value,
      score: Math.round(scoreValue(car) * 10) / 10,
      maxScore: 10,
    },
  ];

  // Weighted overall score
  const overallScore =
    Math.round(
      categoryScores.reduce(
        (sum, cs) => sum + cs.score * weights[cs.category],
        0
      ) * 10
    ) / 10;

  return {
    carId: car.id,
    slug: car.slug,
    displayName: car.displayName,
    categories: categoryScores.map((cs) => ({ ...cs, winner: false })),
    overallScore,
  };
}

/**
 * Runs the full comparison for a set of cars.
 * Returns scores with category winners annotated.
 *
 * @param cars   The cars to compare (2–5)
 * @param weights Optional custom weights (defaults to DEFAULT_WEIGHTS)
 */
export function compareCars(
  cars: Car[],
  weights: Record<ComparisonCategory, number> = DEFAULT_WEIGHTS
): ComparisonResult {
  if (cars.length < 2) {
    throw new Error('At least 2 cars are required for comparison.');
  }

  // Score each car in the context of all compared cars
  const scores = cars.map((car) => scoreCarInContext(car, cars, weights));

  // Determine category winners
  const categories: ComparisonCategory[] = [
    'performance',
    'safety',
    'efficiency',
    'features',
    'practicality',
    'value',
  ];

  for (const category of categories) {
    const categoryScores = scores.map((s) =>
      s.categories.find((cs) => cs.category === category)
    );

    const maxScore = Math.max(
      ...categoryScores.map((cs) => cs?.score ?? 0)
    );

    // Mark winner(s) — ties are possible
    for (const carScore of scores) {
      const cs = carScore.categories.find((c) => c.category === category);
      if (cs && cs.score === maxScore) {
        cs.winner = true;
      }
    }
  }

  // Overall winner
  const maxOverall = Math.max(...scores.map((s) => s.overallScore));
  const overallWinner = scores.find((s) => s.overallScore === maxOverall)?.slug ?? '';

  return { cars: scores, overallWinner };
}

/**
 * Returns the category score for a specific car and category.
 */
export function getCategoryScore(
  result: ComparisonResult,
  carSlug: string,
  category: ComparisonCategory
): CategoryScore | undefined {
  const carScore = result.cars.find((c) => c.slug === carSlug);
  return carScore?.categories.find((cs) => cs.category === category);
}
