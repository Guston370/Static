/**
 * lib/featureMatrix.ts
 *
 * Feature normalization dictionary, matrix definitions,
 * and "What do I get for more money?" dynamic diff calculations.
 */

import type { CarVariant, FeatureAvailability } from '@/types/variant';

export interface MatrixFeatureDef {
  id: string;
  category: 'Safety' | 'Exterior' | 'Comfort' | 'Infotainment' | 'Convenience';
  label: string;
  shortLabel?: string;
  getAvailability: (v: CarVariant) => FeatureAvailability;
  getValueDisplay?: (v: CarVariant) => string | null;
}

export const CANONICAL_FEATURES: MatrixFeatureDef[] = [
  // Safety
  {
    id: 'airbags',
    category: 'Safety',
    label: 'Airbags Count',
    getAvailability: (v) => (v.features.safety.airbagsCount ? 'standard' : 'not_available'),
    getValueDisplay: (v) => (v.features.safety.airbagsCount ? `${v.features.safety.airbagsCount} Airbags` : null),
  },
  {
    id: 'esc',
    category: 'Safety',
    label: 'Electronic Stability Control (ESC)',
    shortLabel: 'ESC / ESP',
    getAvailability: (v) => v.features.safety.esc,
  },
  {
    id: 'hillAssist',
    category: 'Safety',
    label: 'Hill Start Assist',
    getAvailability: (v) => v.features.safety.hillAssist,
  },
  {
    id: 'tpms',
    category: 'Safety',
    label: 'Tyre Pressure Monitoring (TPMS)',
    shortLabel: 'TPMS',
    getAvailability: (v) => v.features.safety.tpms,
  },
  {
    id: 'rearCamera',
    category: 'Safety',
    label: 'Rear Parking Camera',
    getAvailability: (v) => v.features.safety.rearCamera,
  },
  {
    id: 'threeSixtyCamera',
    category: 'Safety',
    label: '360-Degree Surround Camera',
    shortLabel: '360° Camera',
    getAvailability: (v) => v.features.safety.threeSixtyCamera,
  },
  {
    id: 'adas',
    category: 'Safety',
    label: 'Level 2 ADAS Suite',
    shortLabel: 'ADAS (Level 2)',
    getAvailability: (v) =>
      v.features.safety.adasLevel && v.features.safety.adasLevel !== 'None' ? 'standard' : 'not_available',
    getValueDisplay: (v) => (v.features.safety.adasLevel && v.features.safety.adasLevel !== 'None' ? v.features.safety.adasLevel : null),
  },
  {
    id: 'blindSpotMonitoring',
    category: 'Safety',
    label: 'Blind Spot Monitoring',
    getAvailability: (v) => v.features.safety.blindSpotMonitoring,
  },

  // Exterior
  {
    id: 'alloyWheels',
    category: 'Exterior',
    label: 'Alloy Wheels',
    getAvailability: (v) => v.features.exterior.alloyWheels,
    getValueDisplay: (v) => (v.features.exterior.wheelSizeInches ? `${v.features.exterior.wheelSizeInches}" Alloys` : null),
  },
  {
    id: 'ledHeadlights',
    category: 'Exterior',
    label: 'LED Projector Headlights',
    shortLabel: 'LED Headlights',
    getAvailability: (v) => v.features.exterior.ledHeadlights,
  },
  {
    id: 'sunroof',
    category: 'Exterior',
    label: 'Electric Sunroof',
    getAvailability: (v) => v.features.exterior.sunroof,
  },
  {
    id: 'panoramicSunroof',
    category: 'Exterior',
    label: 'Panoramic Sunroof',
    getAvailability: (v) => v.features.exterior.panoramicSunroof,
  },
  {
    id: 'poweredTailgate',
    category: 'Exterior',
    label: 'Powered Tailgate',
    getAvailability: (v) => v.features.exterior.poweredTailgate,
  },

  // Comfort & Interior
  {
    id: 'autoClimate',
    category: 'Comfort',
    label: 'Automatic Climate Control',
    shortLabel: 'Auto AC',
    getAvailability: (v) => v.features.interior.automaticClimateControl,
  },
  {
    id: 'rearAC',
    category: 'Comfort',
    label: 'Rear AC Vents',
    getAvailability: (v) => v.features.interior.rearACVents,
  },
  {
    id: 'ventilatedSeats',
    category: 'Comfort',
    label: 'Ventilated Front Seats',
    getAvailability: (v) => v.features.interior.ventilatedSeats,
  },
  {
    id: 'poweredDriverSeat',
    category: 'Comfort',
    label: 'Powered Driver Seat',
    getAvailability: (v) => v.features.interior.poweredDriverSeat,
  },
  {
    id: 'leatherSeats',
    category: 'Comfort',
    label: 'Leatherette / Leather Upholstery',
    shortLabel: 'Leatherette Seats',
    getAvailability: (v) => v.features.interior.leatherSeats,
  },
  {
    id: 'ambientLighting',
    category: 'Comfort',
    label: 'Ambient Cabin Lighting',
    getAvailability: (v) => v.features.interior.ambientLighting,
  },
  {
    id: 'wirelessCharging',
    category: 'Comfort',
    label: 'Wireless Phone Charger',
    getAvailability: (v) => v.features.interior.wirelessCharging,
  },

  // Infotainment
  {
    id: 'infotainmentScreen',
    category: 'Infotainment',
    label: 'Touchscreen Infotainment',
    getAvailability: (v) =>
      v.features.infotainment.infotainmentScreenSizeInches ? 'standard' : 'not_available',
    getValueDisplay: (v) =>
      v.features.infotainment.infotainmentScreenSizeInches
        ? `${v.features.infotainment.infotainmentScreenSizeInches}" Touchscreen`
        : null,
  },
  {
    id: 'digitalCluster',
    category: 'Infotainment',
    label: 'Full Digital Instrument Cluster',
    shortLabel: 'Digital Cluster',
    getAvailability: (v) => v.features.infotainment.digitalInstrumentCluster,
  },
  {
    id: 'wirelessCarPlayAndroid',
    category: 'Infotainment',
    label: 'Wireless Apple CarPlay & Android Auto',
    shortLabel: 'Wireless CP / AA',
    getAvailability: (v) =>
      v.features.infotainment.wirelessAndroidAuto === 'standard' ||
      v.features.infotainment.wirelessAppleCarPlay === 'standard'
        ? 'standard'
        : 'not_available',
  },
  {
    id: 'premiumAudio',
    category: 'Infotainment',
    label: 'Premium Branded Audio System',
    shortLabel: 'Premium Audio',
    getAvailability: (v) => v.features.infotainment.premiumAudio,
  },
  {
    id: 'connectedCar',
    category: 'Infotainment',
    label: 'Connected Car Technology (Telematics)',
    shortLabel: 'Connected Tech',
    getAvailability: (v) => v.features.infotainment.connectedCarTechnology,
  },

  // Convenience
  {
    id: 'keylessEntryPushStart',
    category: 'Convenience',
    label: 'Smart Key with Push Button Start',
    shortLabel: 'Push Start',
    getAvailability: (v) =>
      v.features.convenience.keylessEntry === 'standard' &&
      v.features.convenience.pushButtonStart === 'standard'
        ? 'standard'
        : 'not_available',
  },
  {
    id: 'cruiseControl',
    category: 'Convenience',
    label: 'Cruise Control',
    getAvailability: (v) => v.features.convenience.cruiseControl,
  },
  {
    id: 'autoDimmingIRVM',
    category: 'Convenience',
    label: 'Auto-Dimming Rearview Mirror',
    shortLabel: 'Auto-dim IRVM',
    getAvailability: (v) => v.features.convenience.autoDimmingIRVM,
  },
  {
    id: 'rainSensingWipers',
    category: 'Convenience',
    label: 'Rain Sensing Automatic Wipers',
    shortLabel: 'Auto Wipers',
    getAvailability: (v) => v.features.convenience.rainSensingWipers,
  },
];

/**
 * Calculates what equipment you gain when upgrading from variantA to variantB.
 * "What do I get for more money?"
 */
export interface UpgradeDiff {
  variantA: CarVariant;
  variantB: CarVariant;
  priceDiffLakh: number;
  priceDiffINR: number;
  powerDiffBhp: number;
  torqueDiffNm: number;
  transmissionChanged: boolean;
  addedFeatures: {
    category: string;
    label: string;
    detail?: string | null;
  }[];
}

export function calculateUpgradeDiff(baseVariant: CarVariant, higherVariant: CarVariant): UpgradeDiff {
  const priceA = baseVariant.pricing.exShowroomLakh ?? 0;
  const priceB = higherVariant.pricing.exShowroomLakh ?? 0;
  const priceDiffLakh = +(priceB - priceA).toFixed(2);
  const priceDiffINR = Math.round(priceDiffLakh * 100000);

  const powerA = baseVariant.powertrain.maxPowerBhp ?? 0;
  const powerB = higherVariant.powertrain.maxPowerBhp ?? 0;
  const powerDiffBhp = powerB - powerA;

  const torqueA = baseVariant.powertrain.maxTorqueNm ?? 0;
  const torqueB = higherVariant.powertrain.maxTorqueNm ?? 0;
  const torqueDiffNm = torqueB - torqueA;

  const transmissionChanged = baseVariant.powertrain.transmission !== higherVariant.powertrain.transmission;

  const addedFeatures: UpgradeDiff['addedFeatures'] = [];

  for (const feature of CANONICAL_FEATURES) {
    const statusA = feature.getAvailability(baseVariant);
    const statusB = feature.getAvailability(higherVariant);

    if (statusA === 'not_available' && (statusB === 'standard' || statusB === 'optional')) {
      const detail = feature.getValueDisplay?.(higherVariant) || null;
      addedFeatures.push({
        category: feature.category,
        label: feature.label,
        detail: statusB === 'optional' ? '(Optional)' : detail,
      });
    } else if (feature.getValueDisplay) {
      // Screen size or airbag count upgraded
      const valA = feature.getValueDisplay(baseVariant);
      const valB = feature.getValueDisplay(higherVariant);
      if (valA && valB && valA !== valB) {
        addedFeatures.push({
          category: feature.category,
          label: `${feature.label} upgraded`,
          detail: `${valA} -> ${valB}`,
        });
      }
    }
  }

  return {
    variantA: baseVariant,
    variantB: higherVariant,
    priceDiffLakh,
    priceDiffINR,
    powerDiffBhp,
    torqueDiffNm,
    transmissionChanged,
    addedFeatures,
  };
}
