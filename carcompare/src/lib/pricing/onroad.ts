/**
 * Transparent Indian On-Road Price Calculator — Static
 *
 * Computes location-specific on-road cost breakdowns for cars in India:
 * Ex-Showroom + RTO (Road Tax) + 1yr OD + 3yr TP Insurance + TCS + FASTag / Reg Fees.
 *
 * Explicit assumptions are stated on every quote to avoid misleading pricing.
 */

import type { CityRtoRule, OnRoadPriceBreakdown } from '@/types/pricing';

export const MAJOR_INDIAN_CITIES: Record<string, CityRtoRule> = {
  delhi: {
    city: 'New Delhi',
    state: 'Delhi (NCT)',
    code: 'DL',
    roadTaxRatePetrol: 0.10, // 10% average (7-12.5% slab)
    roadTaxRateDiesel: 0.125, // 12.5% average (8.75-15% slab)
    roadTaxRateEV: 0.00,     // Delhi EV Policy 100% road tax waiver
    roadTaxRateCNG: 0.09,
    mcdCessOrMunicipal: 4000,
    fastagCharge: 600,
    hypothecationFee: 1500,
    notes: 'Includes MCD Parking/Municipal charges. Zero road tax applied under Delhi EV Policy.',
  },
  mumbai: {
    city: 'Mumbai',
    state: 'Maharashtra',
    code: 'MH',
    roadTaxRatePetrol: 0.12,
    roadTaxRateDiesel: 0.14,
    roadTaxRateEV: 0.00, // 0% RTO for individual EV registration
    roadTaxRateCNG: 0.10,
    mcdCessOrMunicipal: 2500,
    fastagCharge: 600,
    hypothecationFee: 1500,
    notes: 'Maharashtra Motor Vehicles Department rates for individual private registration.',
  },
  bengaluru: {
    city: 'Bengaluru',
    state: 'Karnataka',
    code: 'KA',
    roadTaxRatePetrol: 0.155, // Karnataka has highest RTO slab in India (14-18.87%)
    roadTaxRateDiesel: 0.155,
    roadTaxRateEV: 0.04,     // Reduced cess
    roadTaxRateCNG: 0.15,
    mcdCessOrMunicipal: 2000,
    fastagCharge: 600,
    hypothecationFee: 1500,
    notes: 'Karnataka High-Tax slab for individual ownership including Infrastructure Cess.',
  },
  hyderabad: {
    city: 'Hyderabad',
    state: 'Telangana',
    code: 'TG',
    roadTaxRatePetrol: 0.13,
    roadTaxRateDiesel: 0.14,
    roadTaxRateEV: 0.00, // Telangana EV policy waiver
    roadTaxRateCNG: 0.12,
    mcdCessOrMunicipal: 1500,
    fastagCharge: 600,
    hypothecationFee: 1500,
    notes: 'Telangana Life Tax rates for non-commercial individual passenger vehicles.',
  },
  chennai: {
    city: 'Chennai',
    state: 'Tamil Nadu',
    code: 'TN',
    roadTaxRatePetrol: 0.12,
    roadTaxRateDiesel: 0.13,
    roadTaxRateEV: 0.00,
    roadTaxRateCNG: 0.11,
    mcdCessOrMunicipal: 1500,
    fastagCharge: 600,
    hypothecationFee: 1500,
    notes: 'Tamil Nadu Transport Department life tax schedule for individual owners.',
  },
  pune: {
    city: 'Pune',
    state: 'Maharashtra',
    code: 'MH',
    roadTaxRatePetrol: 0.12,
    roadTaxRateDiesel: 0.14,
    roadTaxRateEV: 0.00,
    roadTaxRateCNG: 0.10,
    mcdCessOrMunicipal: 2000,
    fastagCharge: 600,
    hypothecationFee: 1500,
    notes: 'Pune RTO (MH-12) individual private passenger vehicle registration rates.',
  },
  kolkata: {
    city: 'Kolkata',
    state: 'West Bengal',
    code: 'WB',
    roadTaxRatePetrol: 0.10,
    roadTaxRateDiesel: 0.11,
    roadTaxRateEV: 0.00,
    roadTaxRateCNG: 0.09,
    mcdCessOrMunicipal: 2000,
    fastagCharge: 600,
    hypothecationFee: 1500,
    notes: 'West Bengal Motor Vehicles RTO life tax schedule.',
  },
};

/**
 * Calculates estimated on-road price with full transparent itemization
 *
 * @param exShowroomInr - Ex-showroom price in INR (e.g. 1150000)
 * @param fuelType - 'Petrol' | 'Diesel' | 'Electric' | 'CNG' | 'Hybrid'
 * @param cityKey - key from MAJOR_INDIAN_CITIES (e.g. 'delhi', 'mumbai', 'bengaluru')
 */
export function calculateOnRoadPrice(
  exShowroomInr: number,
  fuelType: string,
  cityKey: string = 'delhi'
): OnRoadPriceBreakdown {
  const cityRule = MAJOR_INDIAN_CITIES[cityKey.toLowerCase()] || MAJOR_INDIAN_CITIES['delhi'];
  const normFuel = (fuelType || 'Petrol').toLowerCase();

  // 1. Determine RTO Road Tax Percentage
  let taxRate = cityRule.roadTaxRatePetrol;
  if (normFuel.includes('electric') || normFuel.includes('ev')) {
    taxRate = cityRule.roadTaxRateEV;
  } else if (normFuel.includes('diesel')) {
    taxRate = cityRule.roadTaxRateDiesel;
  } else if (normFuel.includes('cng')) {
    taxRate = cityRule.roadTaxRateCNG;
  } else if (normFuel.includes('hybrid')) {
    taxRate = Math.max(0.08, cityRule.roadTaxRatePetrol * 0.85); // Some concessions in certain states
  }

  // Adjust for luxury slabs (> 20 Lakhs typically attracts higher slab)
  if (exShowroomInr > 2000000 && taxRate > 0) {
    taxRate += 0.02; // +2% high value slab
  }

  const rtoRegistration = Math.round(exShowroomInr * taxRate + cityRule.mcdCessOrMunicipal);

  // 2. Comprehensive Insurance (1 Year Own Damage + 3 Year Mandatory Third Party)
  // Standard market rate is ~3.5% of Ex-Showroom price for cars under 20L, tapering to 2.8% for luxury
  const insuranceRate = exShowroomInr > 3000000 ? 0.028 : exShowroomInr > 1500000 ? 0.032 : 0.038;
  const insuranceComprehensive = Math.round(exShowroomInr * insuranceRate + 4500); // base third-party bundle

  // 3. Tax Collected at Source (TCS) — Mandatory 1% under Income Tax Act for Ex-Showroom > 10 Lakhs
  const tcsTaxCollectedAtSource = exShowroomInr > 1000000 ? Math.round(exShowroomInr * 0.01) : 0;

  // 4. FASTag, Smart Card & Automated Inspection charges
  const fastagAndGovtFees = cityRule.fastagCharge + 1200; // FASTag + Smart card RC fee

  const totalOnRoad = Math.round(
    exShowroomInr + rtoRegistration + insuranceComprehensive + tcsTaxCollectedAtSource + fastagAndGovtFees
  );
  const totalOnRoadLakh = Number((totalOnRoad / 100000).toFixed(2));

  const assumptions = [
    `RTO calculation based on ${cityRule.city}, ${cityRule.state} individual private registration`,
    `Includes mandatory 1-year Own Damage + 3-year Third Party comprehensive insurance estimate`,
    tcsTaxCollectedAtSource > 0 ? `1% TCS applicable for vehicle ex-showroom exceeding ₹10 Lakhs (Sec 206C 1F)` : 'No TCS (Ex-showroom under ₹10 Lakhs)',
    'Excludes optional dealer accessories, extended warranties, and zero-depreciation riders',
  ];

  return {
    city: cityRule.city,
    state: cityRule.state,
    fuelType,
    exShowroom: exShowroomInr,
    rtoRegistration,
    insuranceComprehensive,
    tcsTaxCollectedAtSource,
    fastagAndGovtFees,
    totalOnRoad,
    totalOnRoadLakh,
    assumptions,
  };
}
