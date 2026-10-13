/**
 * Pricing Validation and Safeguards — Static
 *
 * Enforces data integrity rules to ensure no empty, malformed,
 * implausible, or unverified price enters the active snapshot.
 */

import type { MobilePlatformPrice, FreshnessStatus } from '@/types/pricing';

export interface ValidationResult {
  isValid: boolean;
  reasons: string[];
  isSuspicious: boolean;
  warnings: string[];
}

export const PRICE_RULES = {
  MIN_SMARTPHONE_PRICE: 2000,      // Below ₹2,000 is likely accessory/toy
  MAX_SMARTPHONE_PRICE: 350000,    // Foldables top out around ₹2.5L
  MAX_ALLOWED_DROP_PERCENT: 45,    // More than 45% drop from launch is suspicious unless refurbished
  MAX_ALLOWED_SPIKE_PERCENT: 40,   // More than 40% jump above launch MRP is suspicious
  STALE_THRESHOLD_HOURS: 168,      // 7 days (168 hours) -> marked as stale
  CACHED_THRESHOLD_HOURS: 24,      // 24 hours -> marked as cached
  FRESH_THRESHOLD_HOURS: 6,        // Within 6 hours -> fresh
};

/**
 * Validates a newly observed platform price against historical launch and sanity rules
 */
export function validateMobilePrice(
  observed: Partial<MobilePlatformPrice>,
  launchPrice?: number,
  previousPrice?: number
): ValidationResult {
  const reasons: string[] = [];
  const warnings: string[] = [];
  let isSuspicious = false;

  // 1. Mandatory number check
  if (observed.price === undefined || observed.price === null || isNaN(observed.price)) {
    reasons.push('Price is missing or NaN');
    return { isValid: false, reasons, isSuspicious, warnings };
  }

  // 2. Bound checks
  if (observed.price < PRICE_RULES.MIN_SMARTPHONE_PRICE) {
    reasons.push(`Price ₹${observed.price} is below plausible smartphone threshold (₹${PRICE_RULES.MIN_SMARTPHONE_PRICE})`);
  }
  if (observed.price > PRICE_RULES.MAX_SMARTPHONE_PRICE) {
    reasons.push(`Price ₹${observed.price} exceeds maximum plausible smartphone ceiling (₹${PRICE_RULES.MAX_SMARTPHONE_PRICE})`);
  }

  // 3. Currency check
  if (observed.currency && observed.currency !== 'INR') {
    reasons.push(`Invalid currency "${observed.currency}", only INR is supported`);
  }

  // 4. Source URL check
  if (!observed.sourceUrl || !observed.sourceUrl.startsWith('http')) {
    reasons.push('Missing or invalid source URL');
  }

  // 5. Plausibility vs Launch Price
  if (launchPrice && launchPrice > 0) {
    const dropPercent = ((launchPrice - observed.price) / launchPrice) * 100;
    const spikePercent = ((observed.price - launchPrice) / launchPrice) * 100;

    if (dropPercent > PRICE_RULES.MAX_ALLOWED_DROP_PERCENT) {
      warnings.push(`Sudden price plunge of ${dropPercent.toFixed(1)}% vs launch price (₹${launchPrice})`);
      isSuspicious = true;
    }
    if (spikePercent > PRICE_RULES.MAX_ALLOWED_SPIKE_PERCENT) {
      warnings.push(`Sudden price spike of ${spikePercent.toFixed(1)}% above launch price (₹${launchPrice})`);
      isSuspicious = true;
    }
  }

  // 6. Plausibility vs Previous Verified Price
  if (previousPrice && previousPrice > 0) {
    const change = Math.abs(observed.price - previousPrice) / previousPrice * 100;
    if (change > 35) {
      warnings.push(`Observation deviates by ${change.toFixed(1)}% from previous verified price (₹${previousPrice})`);
      isSuspicious = true;
    }
  }

  return {
    isValid: reasons.length === 0,
    reasons,
    isSuspicious,
    warnings,
  };
}

/**
 * Determine freshness classification based on observation timestamp
 */
export function determineFreshness(observedAtIso: string): FreshnessStatus {
  if (!observedAtIso) return 'stale';

  const observed = new Date(observedAtIso).getTime();
  const now = Date.now();
  const diffHours = (now - observed) / (1000 * 60 * 60);

  if (isNaN(diffHours) || diffHours < 0) return 'stale';
  if (diffHours <= PRICE_RULES.FRESH_THRESHOLD_HOURS) return 'fresh';
  if (diffHours <= PRICE_RULES.CACHED_THRESHOLD_HOURS) return 'cached';
  return 'stale';
}

/**
 * Format relative freshness text (e.g. "Checked 3 hours ago" or "Verified Oct 12, 2026")
 */
export function formatFreshnessText(observedAtIso: string): string {
  if (!observedAtIso) return 'Verification pending';

  const observed = new Date(observedAtIso);
  const diffHours = Math.round((Date.now() - observed.getTime()) / (1000 * 60 * 60));

  if (diffHours < 1) return 'Verified just now';
  if (diffHours === 1) return 'Verified 1 hour ago';
  if (diffHours < 24) return `Verified ${diffHours} hours ago`;
  const diffDays = Math.round(diffHours / 24);
  if (diffDays === 1) return 'Verified yesterday';
  if (diffDays < 7) return `Verified ${diffDays} days ago`;

  return `Cached: ${observed.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}`;
}
