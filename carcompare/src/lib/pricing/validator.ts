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
  MIN_SMARTPHONE_PRICE: 2000,
  MAX_SMARTPHONE_PRICE: 350000,
  MIN_CAR_EX_SHOWROOM_LAKH: 2.0,   // Lowest budget micro cars
  MAX_CAR_EX_SHOWROOM_LAKH: 1200.0, // Ultra luxury / supercars
  MAX_ALLOWED_DROP_PERCENT: 45,
  MAX_ALLOWED_SPIKE_PERCENT: 40,
  STALE_THRESHOLD_HOURS: 168,      // 7 days
  CACHED_THRESHOLD_HOURS: 24,      // 24 hours
  FRESH_THRESHOLD_HOURS: 12,       // 12 hours
};

export function validateCarPriceLakh(
  priceLakh: number,
  previousPriceLakh?: number
): ValidationResult {
  const reasons: string[] = [];
  const warnings: string[] = [];
  let isSuspicious = false;

  if (priceLakh === undefined || priceLakh === null || isNaN(priceLakh)) {
    reasons.push('Price is missing or NaN');
    return { isValid: false, reasons, isSuspicious, warnings };
  }

  if (priceLakh < PRICE_RULES.MIN_CAR_EX_SHOWROOM_LAKH) {
    reasons.push(`Ex-showroom ₹${priceLakh}L is below plausible automobile floor (₹${PRICE_RULES.MIN_CAR_EX_SHOWROOM_LAKH}L)`);
  }
  if (priceLakh > PRICE_RULES.MAX_CAR_EX_SHOWROOM_LAKH) {
    reasons.push(`Ex-showroom ₹${priceLakh}L exceeds luxury automotive ceiling (₹${PRICE_RULES.MAX_CAR_EX_SHOWROOM_LAKH}L)`);
  }

  if (previousPriceLakh && previousPriceLakh > 0) {
    const diffPercent = Math.abs(priceLakh - previousPriceLakh) / previousPriceLakh * 100;
    if (diffPercent > 25) {
      warnings.push(`Ex-showroom deviates by ${diffPercent.toFixed(1)}% from previous benchmark (₹${previousPriceLakh}L)`);
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

export function validateMobilePrice(
  observed: Partial<MobilePlatformPrice>,
  launchPrice?: number,
  previousPrice?: number
): ValidationResult {
  const reasons: string[] = [];
  const warnings: string[] = [];
  let isSuspicious = false;

  if (observed.price === undefined || observed.price === null || isNaN(observed.price)) {
    reasons.push('Price is missing or NaN');
    return { isValid: false, reasons, isSuspicious, warnings };
  }

  if (observed.price < PRICE_RULES.MIN_SMARTPHONE_PRICE) {
    reasons.push(`Price ₹${observed.price} is below plausible smartphone threshold (₹${PRICE_RULES.MIN_SMARTPHONE_PRICE})`);
  }
  if (observed.price > PRICE_RULES.MAX_SMARTPHONE_PRICE) {
    reasons.push(`Price ₹${observed.price} exceeds maximum plausible smartphone ceiling (₹${PRICE_RULES.MAX_SMARTPHONE_PRICE})`);
  }

  if (observed.currency && observed.currency !== 'INR') {
    reasons.push(`Invalid currency "${observed.currency}", only INR is supported`);
  }

  if (!observed.sourceUrl || !observed.sourceUrl.startsWith('http')) {
    reasons.push('Missing or invalid source URL');
  }

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
