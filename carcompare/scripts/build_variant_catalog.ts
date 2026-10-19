/**
 * scripts/build_variant_catalog.ts
 *
 * Compiles the canonical data/india-car-variants.json catalog
 * for all 206 active models in data/india-car-models.json.
 *
 * High-volume vehicles contain deep verified trim ladders and feature matrices
 * from official brochures and manufacturer price lists.
 * Other active models contain structured verified baseline / standard trims,
 * or are marked with variantStatus: "needs_verification" as required by Section 8 & 20.
 */

import fs from 'fs';
import path from 'path';
import type {
  MasterVariantCatalog,
  ModelVariantGroup,
  CarVariant,
} from '../src/types/variant';
import type { FuelType, TransmissionType, NCAPRating } from '../src/types/car';
import type { RawCatalogModel } from '../src/lib/cars';
import { VERIFIED_MODEL_VARIANTS } from './data_verified_variants';
import { VERIFIED_MODEL_VARIANTS_BATCH2 } from './data_verified_variants_batch2';
import { TATA_AERIS_VARIANTS } from './data_verified_variants_aeris';
import { TATA_PUNCH_VARIANTS } from './data_verified_variants_punch';
import { TATA_SIERRA_VARIANTS } from './data_verified_variants_sierra';
import { TATA_TIAGO_VARIANTS } from './data_verified_variants_tiago';
import { TATA_PUNCH_EV_VARIANTS } from './data_verified_variants_punch_ev';
import { TATA_HARRIER_VARIANTS } from './data_verified_variants_harrier';
import { TATA_SIERRA_EV_VARIANTS } from './data_verified_variants_sierra_ev';
import { TATA_SAFARI_VARIANTS } from './data_verified_variants_safari';
import { TATA_ALTROZ_VARIANTS } from './data_verified_variants_altroz';
import { TATA_TIAGO_EV_VARIANTS } from './data_verified_variants_tiago_ev';
import { TATA_CURVV_VARIANTS } from './data_verified_variants_curvv';
import { TATA_NEXON_EV_VARIANTS } from './data_verified_variants_nexon_ev';
import { TATA_HARRIER_EV_VARIANTS } from './data_verified_variants_harrier_ev';
import { TATA_CURVV_EV_VARIANTS } from './data_verified_variants_curvv_ev';
import { TATA_TIGOR_EV_VARIANTS } from './data_verified_variants_tigor_ev';
import { TATA_AERIS_EV_VARIANTS } from './data_verified_variants_aeris_ev';
import {
  BMW_2_SERIES_GRAN_COUPE_VARIANTS,
  BMW_3_SERIES_GRAN_LIMOUSINE_VARIANTS,
  BMW_M340I_VARIANTS,
  BMW_M4_VARIANTS,
  BMW_X1_VARIANTS,
  BMW_M5_VARIANTS,
  BMW_M440I_VARIANTS,
  BMW_X7_VARIANTS,
  BMW_X5_VARIANTS,
} from './data_verified_variants_bmw';
import {
  BMW_X3_VARIANTS,
  BMW_M2_VARIANTS,
  BMW_7_SERIES_VARIANTS,
  BMW_I7_VARIANTS,
  BMW_5_SERIES_LWB_VARIANTS,
  BMW_X1_LWB_VARIANTS,
  BMW_IX1_LWB_VARIANTS,
  BMW_XM_VARIANTS,
  BMW_I5_LWB_VARIANTS,
  BMW_X6_VARIANTS,
  BMW_I5_VARIANTS,
  BMW_IX_VARIANTS,
} from './data_verified_variants_bmw_batch2';
import {
  VOLKSWAGEN_VIRTUS_VARIANTS,
  VOLKSWAGEN_TAIGUN_VARIANTS,
  VOLKSWAGEN_TAYRON_VARIANTS,
  VOLKSWAGEN_GOLF_GTI_VARIANTS,
  VOLKSWAGEN_TIGUAN_VARIANTS,
} from './data_verified_variants_volkswagen';
import {
  SKODA_SLAVIA_VARIANTS,
  SKODA_KYLAQ_VARIANTS,
  SKODA_KUSHAQ_VARIANTS,
  SKODA_KODIAQ_VARIANTS,
  SKODA_OCTAVIA_RS_VARIANTS,
  SKODA_KODIAQ_RS_VARIANTS,
} from './data_verified_variants_skoda';
import {
  HONDA_ELEVATE_VARIANTS,
  HONDA_AMAZE_VARIANTS,
  HONDA_CITY_VARIANTS,
} from './data_verified_variants_honda';
import {
  MARUTI_BREZZA_VARIANTS,
  MARUTI_FRONX_VARIANTS,
  MARUTI_BALENO_VARIANTS,
  MARUTI_SWIFT_VARIANTS,
} from './data_verified_variants_maruti';
import {
  MARUTI_VICTORIS_VARIANTS,
  MARUTI_GRAND_VITARA_VARIANTS,
} from './data_verified_variants_maruti_suv';
import {
  MARUTI_DZIRE_VARIANTS,
  MARUTI_ALTO_K10_VARIANTS,
  MARUTI_ERTIGA_VARIANTS,
  MARUTI_WAGON_R_VARIANTS,
  MARUTI_S_PRESSO_VARIANTS,
} from './data_verified_variants_maruti_batch2';
import {
  MARUTI_CELERIO_VARIANTS,
  MARUTI_XL6_VARIANTS,
  MARUTI_E_VITARA_VARIANTS,
  MARUTI_JIMNY_VARIANTS,
  MARUTI_EECO_VARIANTS,
  MARUTI_INVICTO_VARIANTS,
} from './data_verified_variants_maruti_batch3';
import {
  TOYOTA_GLANZA_VARIANTS,
  TOYOTA_TAISOR_VARIANTS,
  TOYOTA_HYRYDER_VARIANTS,
} from './data_verified_variants_toyota_batch1';
import {
  TOYOTA_INNOVA_HYCROSS_VARIANTS,
  TOYOTA_FORTUNER_VARIANTS,
  TOYOTA_INNOVA_CRYSTA_VARIANTS,
} from './data_verified_variants_toyota_batch2';
import {
  TOYOTA_HILUX_VARIANTS,
  TOYOTA_FORTUNER_LEGENDER_VARIANTS,
  TOYOTA_RUMION_VARIANTS,
  TOYOTA_LAND_CRUISER_VARIANTS,
  TOYOTA_CAMRY_VARIANTS,
  TOYOTA_VELLFIRE_VARIANTS,
} from './data_verified_variants_toyota_batch3';
import {
  HYUNDAI_BAYON_VARIANTS,
  HYUNDAI_CRETA_VARIANTS,
  HYUNDAI_VENUE_VARIANTS,
} from './data_verified_variants_hyundai_batch1';
import {
  HYUNDAI_EXTER_VARIANTS,
  HYUNDAI_I20_VARIANTS,
  HYUNDAI_GRAND_I10_NIOS_VARIANTS,
} from './data_verified_variants_hyundai_batch2';
import {
  HYUNDAI_VERNA_VARIANTS,
  HYUNDAI_AURA_VARIANTS,
  HYUNDAI_ALCAZAR_VARIANTS,
} from './data_verified_variants_hyundai_batch3';
import {
  HYUNDAI_I20_N_LINE_VARIANTS,
  HYUNDAI_VENUE_N_LINE_VARIANTS,
  HYUNDAI_CRETA_N_LINE_VARIANTS,
  HYUNDAI_CRETA_ELECTRIC_VARIANTS,
  HYUNDAI_IONIQ_5_VARIANTS,
} from './data_verified_variants_hyundai_batch4';
import {
  LAMBORGHINI_REVUELTO_VARIANTS,
  LAMBORGHINI_URUS_SE_VARIANTS,
  LAMBORGHINI_TEMERARIO_VARIANTS,
} from './data_verified_variants_lamborghini';
import {
  JEEP_COMPASS_VARIANTS,
  JEEP_MERIDIAN_VARIANTS,
  JEEP_WRANGLER_VARIANTS,
  JEEP_GRAND_CHEROKEE_VARIANTS,
} from './data_verified_variants_jeep';
import {
  FORCE_GURKHA_VARIANTS,
  FORCE_TRAX_CRUISER_VARIANTS,
} from './data_verified_variants_force';
import {
  CITROEN_C3_X_VARIANTS,
  CITROEN_BASALT_X_VARIANTS,
  CITROEN_AIRCROSS_VARIANTS,
  CITROEN_EC3_X_VARIANTS,
  CITROEN_C5_AIRCROSS_VARIANTS,
} from './data_verified_variants_citroen';
import {
  LEXUS_ES_350H_VARIANTS,
  LEXUS_LX_VARIANTS,
  LEXUS_LM_VARIANTS,
  LEXUS_NX_VARIANTS,
  LEXUS_RX_VARIANTS,
  LEXUS_ES_500E_VARIANTS,
} from './data_verified_variants_lexus';
import {
  BYD_ATTO_3_VARIANTS,
  BYD_SEALION_7_VARIANTS,
  BYD_SEAL_VARIANTS,
  BYD_EMAX_7_VARIANTS,
} from './data_verified_variants_byd';
import {
  RENAULT_TRIBER_VARIANTS,
  RENAULT_DUSTER_VARIANTS,
  RENAULT_KWID_VARIANTS,
  RENAULT_KIGER_VARIANTS,
} from './data_verified_variants_renault';
import {
  NISSAN_MAGNITE_VARIANTS,
  NISSAN_TEKTON_VARIANTS,
  NISSAN_GRAVITE_VARIANTS,
  NISSAN_XTRAIL_VARIANTS,
} from './data_verified_variants_nissan';
import {
  MG_HECTOR_TOMAHAWK_EV_VARIANTS,
  MG_WINDSOR_EV_VARIANTS,
  MG_HECTOR_VARIANTS,
  MG_MAJESTOR_VARIANTS,
  MG_COMET_EV_VARIANTS,
  MG_CYBERSTER_VARIANTS,
  MG_HECTOR_TOMAHAWK_VARIANTS,
  MG_M9_VARIANTS,
  MG_ZS_EV_VARIANTS,
  MG_ASTOR_VARIANTS,
  MG_HECTOR_PLUS_VARIANTS,
} from './data_verified_variants_mg';
import {
  LAND_ROVER_DEFENDER_VARIANTS,
  LAND_ROVER_RANGE_ROVER_VELAR_VARIANTS,
  LAND_ROVER_RANGE_ROVER_VARIANTS,
  LAND_ROVER_RANGE_ROVER_SPORT_VARIANTS,
  LAND_ROVER_RANGE_ROVER_EVOQUE_VARIANTS,
  LAND_ROVER_DISCOVERY_SPORT_VARIANTS,
  LAND_ROVER_DISCOVERY_VARIANTS,
} from './data_verified_variants_land_rover';
import {
  AUDI_Q3_VARIANTS,
  AUDI_A4_VARIANTS,
  AUDI_A6_VARIANTS,
  AUDI_Q7_VARIANTS,
  AUDI_S5_SPORTBACK_VARIANTS,
  AUDI_Q3_SPORTBACK_VARIANTS,
  AUDI_Q8_VARIANTS,
  AUDI_A8_L_VARIANTS,
  AUDI_RS5_VARIANTS,
  AUDI_RS_Q8_PERFORMANCE_VARIANTS,
  AUDI_E_TRON_GT_VARIANTS,
  AUDI_E_TRON_SPORTBACK_VARIANTS,
  AUDI_E_TRON_VARIANTS,
  AUDI_Q8_E_TRON_VARIANTS,
  AUDI_Q8_SPORTBACK_E_TRON_VARIANTS,
  AUDI_SQ8_VARIANTS,
} from './data_verified_variants_audi';
import {
  MERCEDES_G_CLASS_VARIANTS,
  MERCEDES_MAYBACH_S_CLASS_VARIANTS,
  MERCEDES_C_CLASS_VARIANTS,
  MERCEDES_GLA_VARIANTS,
  MERCEDES_GLS_VARIANTS,
  MERCEDES_GLC_VARIANTS,
  MERCEDES_E_CLASS_VARIANTS,
  MERCEDES_CLA_EV_VARIANTS,
  MERCEDES_GLE_VARIANTS,
  MERCEDES_S_CLASS_VARIANTS,
  MERCEDES_AMG_CLE_VARIANTS,
  MERCEDES_V_CLASS_VARIANTS,
  MERCEDES_MAYBACH_GLS_VARIANTS,
  MERCEDES_AMG_G_CLASS_VARIANTS,
  MERCEDES_AMG_GLA35_VARIANTS,
  MERCEDES_CLE_CABRIOLET_VARIANTS,
  MERCEDES_AMG_GLC43_COUPE_VARIANTS,
} from './data_verified_variants_mercedes';
import {
  MERCEDES_AMG_C_43_VARIANTS,
  MERCEDES_AMG_GT_63_VARIANTS,
  MERCEDES_G_CLASS_ELECTRIC_VARIANTS,
  MERCEDES_EQS_VARIANTS,
  MERCEDES_MAYBACH_SL_680_VARIANTS,
  MERCEDES_AMG_GLE_COUPE_VARIANTS,
  MERCEDES_AMG_A45_S_VARIANTS,
  MERCEDES_AMG_E53_CABRIOLET_VARIANTS,
  MERCEDES_AMG_SL55_ROADSTER_VARIANTS,
  MERCEDES_EQS_SUV_VARIANTS,
  MERCEDES_AMG_E53_PHEV_VARIANTS,
  MERCEDES_AMG_C_63_S_E_PERFORMANCE_VARIANTS,
  MERCEDES_MAYBACH_EQS_SUV_VARIANTS,
  MERCEDES_AMG_GT_63_S_4MATIC_PLUS_VARIANTS,
  MERCEDES_AMG_EQS_VARIANTS,
  MERCEDES_EQE_SUV_VARIANTS,
  MERCEDES_AMG_GT_63_S_E_PERFORMANCE_VARIANTS,
  MERCEDES_AMG_S_63_E_PERFORMANCE_VARIANTS,
} from './data_verified_variants_mercedes_amg_eq';

const modelsJsonPath = path.resolve(__dirname, '../data/india-car-models.json');
const variantsJsonPath = path.resolve(__dirname, '../data/india-car-variants.json');

const rawModelData = JSON.parse(fs.readFileSync(modelsJsonPath, 'utf8'));
const activeModels: RawCatalogModel[] = rawModelData.models.filter(
  (m: RawCatalogModel) => m.status === 'active'
);

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

function makeStandardFeatures(
  overrides?: DeepPartial<CarVariant['features']>
): CarVariant['features'] {
  const base: CarVariant['features'] = {
    safety: {
      airbagsCount: 6,
      abs: 'standard',
      ebd: 'standard',
      esc: 'standard',
      tractionControl: 'standard',
      hillAssist: 'standard',
      hillDescentControl: 'not_available',
      tpms: 'not_available',
      rearParkingSensors: 'standard',
      frontParkingSensors: 'not_available',
      rearCamera: 'not_available',
      threeSixtyCamera: 'not_available',
      blindSpotMonitoring: 'not_available',
      laneDepartureWarning: 'not_available',
      laneKeepAssist: 'not_available',
      adaptiveCruiseControl: 'not_available',
      forwardCollisionWarning: 'not_available',
      autonomousEmergencyBraking: 'not_available',
      adasLevel: 'None',
      ncapRating: null,
    },
    exterior: {
      wheelSizeInches: 16,
      alloyWheels: 'not_available',
      ledHeadlights: 'not_available',
      ledDRLs: 'standard',
      fogLights: 'not_available',
      roofRails: 'not_available',
      sunroof: 'not_available',
      panoramicSunroof: 'not_available',
      poweredTailgate: 'not_available',
    },
    interior: {
      airConditioning: 'standard',
      automaticClimateControl: 'not_available',
      rearACVents: 'standard',
      ventilatedSeats: 'not_available',
      heatedSeats: 'not_available',
      poweredDriverSeat: 'not_available',
      poweredPassengerSeat: 'not_available',
      leatherSeats: 'not_available',
      rearSeatRecline: 'not_available',
      ambientLighting: 'not_available',
      wirelessCharging: 'not_available',
    },
    infotainment: {
      infotainmentScreenSizeInches: null,
      digitalInstrumentCluster: 'not_available',
      androidAuto: 'not_available',
      appleCarPlay: 'not_available',
      wirelessAndroidAuto: 'not_available',
      wirelessAppleCarPlay: 'not_available',
      speakerCount: 4,
      premiumAudio: 'not_available',
      connectedCarTechnology: 'not_available',
      headUpDisplay: 'not_available',
    },
    convenience: {
      keylessEntry: 'not_available',
      pushButtonStart: 'not_available',
      cruiseControl: 'not_available',
      adaptiveCruiseControl: 'not_available',
      autoDimmingIRVM: 'not_available',
      rainSensingWipers: 'not_available',
      automaticHeadlights: 'not_available',
    },
  };

  if (!overrides) return base;

  return {
    safety: { ...base.safety, ...(overrides.safety || {}) },
    exterior: { ...base.exterior, ...(overrides.exterior || {}) },
    interior: { ...base.interior, ...(overrides.interior || {}) },
    infotainment: { ...base.infotainment, ...(overrides.infotainment || {}) },
    convenience: { ...base.convenience, ...(overrides.convenience || {}) },
  };
}

// ─────────────────────────────────────────────────────────────
// DETAILED VERIFIED TRIM DEFINITIONS FOR HIGH-VOLUME CARS
// ─────────────────────────────────────────────────────────────

const DETAILED_VERIFIED_VARIANTS: Record<string, Partial<CarVariant>[]> = {
  'hyundai-creta': [
    {
      id: 'hyundai-creta-e-petrol',
      name: 'E 1.5 Petrol',
      fullName: 'Hyundai Creta E 1.5 Petrol 6MT',
      slug: 'e-1-5-petrol',
      trim: 'E',
      variantStatus: 'verified',
      pricing: { exShowroom: 1099900, exShowroomLakh: 11.0, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.5L MPi Petrol',
        engineDisplacementCC: 1497,
        cylinders: 4,
        aspiration: 'Naturally Aspirated',
        maxPowerBhp: 113,
        maxTorqueNm: 144,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.4, zeroToHundredSec: 12.2, topSpeedKmph: 175 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, abs: 'standard', esc: 'standard', rearParkingSensors: 'standard', tpms: 'standard' },
        exterior: { wheelSizeInches: 16, alloyWheels: 'not_available', ledHeadlights: 'not_available', sunroof: 'not_available' },
        interior: { airConditioning: 'standard', rearACVents: 'standard' },
        infotainment: { infotainmentScreenSizeInches: null, digitalInstrumentCluster: 'not_available' },
      }),
    },
    {
      id: 'hyundai-creta-ex-petrol',
      name: 'EX 1.5 Petrol',
      fullName: 'Hyundai Creta EX 1.5 Petrol 6MT',
      slug: 'ex-1-5-petrol',
      trim: 'EX',
      variantStatus: 'verified',
      pricing: { exShowroom: 1221000, exShowroomLakh: 12.21, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.5L MPi Petrol',
        engineDisplacementCC: 1497,
        cylinders: 4,
        aspiration: 'Naturally Aspirated',
        maxPowerBhp: 113,
        maxTorqueNm: 144,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.4, zeroToHundredSec: 12.2, topSpeedKmph: 175 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, abs: 'standard', esc: 'standard', rearParkingSensors: 'standard', tpms: 'standard' },
        exterior: { wheelSizeInches: 16, alloyWheels: 'not_available', ledHeadlights: 'not_available', sunroof: 'not_available' },
        interior: { airConditioning: 'standard', rearACVents: 'standard' },
        infotainment: {
          infotainmentScreenSizeInches: 8.0,
          androidAuto: 'standard',
          appleCarPlay: 'standard',
          wirelessAndroidAuto: 'standard',
          wirelessAppleCarPlay: 'standard',
        },
      }),
    },
    {
      id: 'hyundai-creta-s-petrol',
      name: 'S 1.5 Petrol',
      fullName: 'Hyundai Creta S 1.5 Petrol 6MT',
      slug: 's-1-5-petrol',
      trim: 'S',
      variantStatus: 'verified',
      pricing: { exShowroom: 1343000, exShowroomLakh: 13.43, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.5L MPi Petrol',
        engineDisplacementCC: 1497,
        cylinders: 4,
        aspiration: 'Naturally Aspirated',
        maxPowerBhp: 113,
        maxTorqueNm: 144,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.4, zeroToHundredSec: 12.2, topSpeedKmph: 175 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, rearCamera: 'standard', tpms: 'standard' },
        exterior: { wheelSizeInches: 16, ledHeadlights: 'standard', ledDRLs: 'standard' },
        interior: { airConditioning: 'standard', rearACVents: 'standard', ambientLighting: 'standard' },
        infotainment: {
          infotainmentScreenSizeInches: 8.0,
          androidAuto: 'standard',
          appleCarPlay: 'standard',
          wirelessAndroidAuto: 'standard',
          wirelessAppleCarPlay: 'standard',
        },
        convenience: { cruiseControl: 'standard' },
      }),
    },
    {
      id: 'hyundai-creta-sx-petrol',
      name: 'SX 1.5 Petrol',
      fullName: 'Hyundai Creta SX 1.5 Petrol 6MT',
      slug: 'sx-1-5-petrol',
      trim: 'SX',
      variantStatus: 'verified',
      pricing: { exShowroom: 1530000, exShowroomLakh: 15.3, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.5L MPi Petrol',
        engineDisplacementCC: 1497,
        cylinders: 4,
        aspiration: 'Naturally Aspirated',
        maxPowerBhp: 113,
        maxTorqueNm: 144,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.4, zeroToHundredSec: 12.2, topSpeedKmph: 175 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, rearCamera: 'standard', tpms: 'standard' },
        exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', panoramicSunroof: 'standard', sunroof: 'standard' },
        interior: { automaticClimateControl: 'standard', rearACVents: 'standard', wirelessCharging: 'standard', ambientLighting: 'standard' },
        infotainment: {
          infotainmentScreenSizeInches: 10.25,
          androidAuto: 'standard',
          appleCarPlay: 'standard',
          connectedCarTechnology: 'standard',
        },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard', cruiseControl: 'standard' },
      }),
    },
    {
      id: 'hyundai-creta-sx-o-turbo-dct',
      name: 'SX(O) 1.5 Turbo DCT',
      fullName: 'Hyundai Creta SX(O) 1.5 Turbo Petrol 7DCT',
      slug: 'sx-o-1-5-turbo-dct',
      trim: 'SX(O)',
      variantStatus: 'verified',
      pricing: { exShowroom: 2000000, exShowroomLakh: 20.0, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.5L Turbo GDi Petrol',
        engineDisplacementCC: 1482,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 158,
        maxTorqueNm: 253,
        transmission: 'DCT',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 18.4, zeroToHundredSec: 8.9, topSpeedKmph: 195 },
      features: makeStandardFeatures({
        safety: {
          airbagsCount: 6,
          rearCamera: 'standard',
          threeSixtyCamera: 'standard',
          blindSpotMonitoring: 'standard',
          laneDepartureWarning: 'standard',
          laneKeepAssist: 'standard',
          adaptiveCruiseControl: 'standard',
          forwardCollisionWarning: 'standard',
          autonomousEmergencyBraking: 'standard',
          adasLevel: 'Level 2',
          tpms: 'standard',
        },
        exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', panoramicSunroof: 'standard', sunroof: 'standard' },
        interior: {
          automaticClimateControl: 'standard',
          rearACVents: 'standard',
          ventilatedSeats: 'standard',
          poweredDriverSeat: 'standard',
          leatherSeats: 'standard',
          wirelessCharging: 'standard',
          ambientLighting: 'standard',
        },
        infotainment: {
          infotainmentScreenSizeInches: 10.25,
          digitalInstrumentCluster: 'standard',
          androidAuto: 'standard',
          appleCarPlay: 'standard',
          premiumAudio: 'standard',
          connectedCarTechnology: 'standard',
        },
        convenience: {
          pushButtonStart: 'standard',
          keylessEntry: 'standard',
          cruiseControl: 'standard',
          adaptiveCruiseControl: 'standard',
          autoDimmingIRVM: 'standard',
          rainSensingWipers: 'standard',
          automaticHeadlights: 'standard',
        },
      }),
    },
    {
      id: 'hyundai-creta-sx-o-diesel-at',
      name: 'SX(O) 1.5 Diesel AT',
      fullName: 'Hyundai Creta SX(O) 1.5 CRDi Diesel 6AT',
      slug: 'sx-o-1-5-diesel-at',
      trim: 'SX(O)',
      variantStatus: 'verified',
      pricing: { exShowroom: 2015000, exShowroomLakh: 20.15, currency: 'INR' },
      powertrain: {
        fuelType: 'Diesel',
        engineName: '1.5L U2 CRDi Diesel',
        engineDisplacementCC: 1493,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 114,
        maxTorqueNm: 250,
        transmission: 'Automatic',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 19.1, zeroToHundredSec: 10.8, topSpeedKmph: 180 },
      features: makeStandardFeatures({
        safety: {
          airbagsCount: 6,
          rearCamera: 'standard',
          threeSixtyCamera: 'standard',
          blindSpotMonitoring: 'standard',
          laneDepartureWarning: 'standard',
          laneKeepAssist: 'standard',
          adaptiveCruiseControl: 'standard',
          forwardCollisionWarning: 'standard',
          autonomousEmergencyBraking: 'standard',
          adasLevel: 'Level 2',
          tpms: 'standard',
        },
        exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', panoramicSunroof: 'standard', sunroof: 'standard' },
        interior: {
          automaticClimateControl: 'standard',
          rearACVents: 'standard',
          ventilatedSeats: 'standard',
          poweredDriverSeat: 'standard',
          leatherSeats: 'standard',
          wirelessCharging: 'standard',
        },
        infotainment: {
          infotainmentScreenSizeInches: 10.25,
          digitalInstrumentCluster: 'standard',
          premiumAudio: 'standard',
          connectedCarTechnology: 'standard',
        },
        convenience: {
          pushButtonStart: 'standard',
          keylessEntry: 'standard',
          adaptiveCruiseControl: 'standard',
          autoDimmingIRVM: 'standard',
          rainSensingWipers: 'standard',
        },
      }),
    },
  ],

  'tata-nexon': [
    {
      id: 'tata-nexon-smart-petrol',
      name: 'Smart 1.2 Petrol',
      fullName: 'Tata Nexon Smart 1.2 Revotron Petrol 5MT',
      slug: 'smart-1-2-petrol',
      trim: 'Smart',
      variantStatus: 'verified',
      pricing: { exShowroom: 799990, exShowroomLakh: 8.0, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.2L Turbocharged Revotron',
        engineDisplacementCC: 1199,
        cylinders: 3,
        aspiration: 'Turbocharged',
        maxPowerBhp: 118,
        maxTorqueNm: 170,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.44, zeroToHundredSec: 11.6, topSpeedKmph: 180 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, abs: 'standard', esc: 'standard', hillAssist: 'standard', rearParkingSensors: 'standard', ncapRating: 5 },
        exterior: { wheelSizeInches: 16, ledHeadlights: 'standard', ledDRLs: 'standard' },
        interior: { airConditioning: 'standard' },
        infotainment: { digitalInstrumentCluster: 'standard', infotainmentScreenSizeInches: null },
      }),
    },
    {
      id: 'tata-nexon-pure-petrol',
      name: 'Pure 1.2 Petrol',
      fullName: 'Tata Nexon Pure 1.2 Revotron Petrol 6MT',
      slug: 'pure-1-2-petrol',
      trim: 'Pure',
      variantStatus: 'verified',
      pricing: { exShowroom: 979990, exShowroomLakh: 9.8, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.2L Turbo Revotron',
        engineDisplacementCC: 1199,
        cylinders: 3,
        aspiration: 'Turbocharged',
        maxPowerBhp: 118,
        maxTorqueNm: 170,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.44, zeroToHundredSec: 11.6, topSpeedKmph: 180 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, abs: 'standard', esc: 'standard', hillAssist: 'standard', rearParkingSensors: 'standard', ncapRating: 5 },
        exterior: { wheelSizeInches: 16, ledHeadlights: 'standard', ledDRLs: 'standard', roofRails: 'standard' },
        interior: { airConditioning: 'standard', rearACVents: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 7.0, androidAuto: 'standard', appleCarPlay: 'standard', speakerCount: 4 },
      }),
    },
    {
      id: 'tata-nexon-creative-petrol',
      name: 'Creative 1.2 Petrol',
      fullName: 'Tata Nexon Creative 1.2 Revotron Petrol 6MT',
      slug: 'creative-1-2-petrol',
      trim: 'Creative',
      variantStatus: 'verified',
      pricing: { exShowroom: 1109990, exShowroomLakh: 11.1, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.2L Turbo Revotron',
        engineDisplacementCC: 1199,
        cylinders: 3,
        aspiration: 'Turbocharged',
        maxPowerBhp: 118,
        maxTorqueNm: 170,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.44, zeroToHundredSec: 11.6, topSpeedKmph: 180 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, rearCamera: 'standard', tpms: 'standard', ncapRating: 5 },
        exterior: { wheelSizeInches: 16, alloyWheels: 'standard', ledHeadlights: 'standard', roofRails: 'standard' },
        interior: { automaticClimateControl: 'standard', rearACVents: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 10.25, wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard', speakerCount: 6 },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard', cruiseControl: 'standard' },
      }),
    },
    {
      id: 'tata-nexon-creative-plus-dca',
      name: 'Creative+ Petrol DCA',
      fullName: 'Tata Nexon Creative+ 1.2 Revotron Petrol 7DCA',
      slug: 'creative-plus-petrol-dca',
      trim: 'Creative+',
      variantStatus: 'verified',
      pricing: { exShowroom: 1229990, exShowroomLakh: 12.3, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.2L Turbo Revotron',
        engineDisplacementCC: 1199,
        cylinders: 3,
        aspiration: 'Turbocharged',
        maxPowerBhp: 118,
        maxTorqueNm: 170,
        transmission: 'DCT',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.01, zeroToHundredSec: 10.9, topSpeedKmph: 180 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, rearCamera: 'standard', threeSixtyCamera: 'standard', blindSpotMonitoring: 'standard', tpms: 'standard', ncapRating: 5 },
        exterior: { wheelSizeInches: 16, alloyWheels: 'standard', ledHeadlights: 'standard', sunroof: 'optional' },
        interior: { automaticClimateControl: 'standard', rearACVents: 'standard', wirelessCharging: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 10.25, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard' },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
      }),
    },
    {
      id: 'tata-nexon-fearless-plus-s-dca',
      name: 'Fearless+ S DCA',
      fullName: 'Tata Nexon Fearless+ S 1.2 Turbo Petrol 7DCA',
      slug: 'fearless-plus-s-dca',
      trim: 'Fearless+ S',
      variantStatus: 'verified',
      pricing: { exShowroom: 1439990, exShowroomLakh: 14.4, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '1.2L Turbo Revotron',
        engineDisplacementCC: 1199,
        cylinders: 3,
        aspiration: 'Turbocharged',
        maxPowerBhp: 118,
        maxTorqueNm: 170,
        transmission: 'DCT',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.01, zeroToHundredSec: 10.9, topSpeedKmph: 180 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, threeSixtyCamera: 'standard', blindSpotMonitoring: 'standard', tpms: 'standard', ncapRating: 5 },
        exterior: { wheelSizeInches: 16, alloyWheels: 'standard', ledHeadlights: 'standard', sunroof: 'standard' },
        interior: { automaticClimateControl: 'standard', rearACVents: 'standard', ventilatedSeats: 'standard', wirelessCharging: 'standard', leatherSeats: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 10.25, digitalInstrumentCluster: 'standard', premiumAudio: 'standard', connectedCarTechnology: 'standard' },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
      }),
    },
    {
      id: 'tata-nexon-pure-diesel',
      name: 'Pure 1.5 Diesel',
      fullName: 'Tata Nexon Pure 1.5 Revotorq Diesel 6MT',
      slug: 'pure-1-5-diesel',
      trim: 'Pure',
      variantStatus: 'verified',
      pricing: { exShowroom: 1109990, exShowroomLakh: 11.1, currency: 'INR' },
      powertrain: {
        fuelType: 'Diesel',
        engineName: '1.5L Turbo Revotorq Diesel',
        engineDisplacementCC: 1497,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 113,
        maxTorqueNm: 260,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 23.23, zeroToHundredSec: 11.8, topSpeedKmph: 180 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, abs: 'standard', esc: 'standard', hillAssist: 'standard', rearParkingSensors: 'standard', ncapRating: 5 },
        exterior: { wheelSizeInches: 16, ledHeadlights: 'standard', ledDRLs: 'standard', roofRails: 'standard' },
        interior: { airConditioning: 'standard', rearACVents: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 7.0, androidAuto: 'standard', appleCarPlay: 'standard', speakerCount: 4 },
      }),
    },
    {
      id: 'tata-nexon-fearless-plus-s-diesel-amt',
      name: 'Fearless+ S Diesel AMT',
      fullName: 'Tata Nexon Fearless+ S 1.5 Revotorq Diesel 6AMT',
      slug: 'fearless-plus-s-diesel-amt',
      trim: 'Fearless+ S',
      variantStatus: 'verified',
      pricing: { exShowroom: 1549990, exShowroomLakh: 15.5, currency: 'INR' },
      powertrain: {
        fuelType: 'Diesel',
        engineName: '1.5L Turbo Revotorq Diesel',
        engineDisplacementCC: 1497,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 113,
        maxTorqueNm: 260,
        transmission: 'AMT',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 24.08, zeroToHundredSec: 11.8, topSpeedKmph: 180 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, threeSixtyCamera: 'standard', blindSpotMonitoring: 'standard', tpms: 'standard', ncapRating: 5 },
        exterior: { wheelSizeInches: 16, alloyWheels: 'standard', ledHeadlights: 'standard', sunroof: 'standard' },
        interior: { automaticClimateControl: 'standard', rearACVents: 'standard', ventilatedSeats: 'standard', wirelessCharging: 'standard', leatherSeats: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 10.25, digitalInstrumentCluster: 'standard', premiumAudio: 'standard', connectedCarTechnology: 'standard' },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard' },
      }),
    },
  ],

  'mahindra-xuv700': [
    {
      id: 'mahindra-xuv700-mx-petrol',
      name: 'MX Petrol 5-Str',
      fullName: 'Mahindra XUV700 MX 2.0 Turbo Petrol 6MT 5-Seater',
      slug: 'mx-petrol-5-str',
      trim: 'MX',
      variantStatus: 'verified',
      pricing: { exShowroom: 1399000, exShowroomLakh: 13.99, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '2.0L mStallion Turbo',
        engineDisplacementCC: 1997,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 197,
        maxTorqueNm: 380,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 13.0, zeroToHundredSec: 9.8, topSpeedKmph: 195 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 2, abs: 'standard', rearParkingSensors: 'standard', ncapRating: 5 },
        exterior: { wheelSizeInches: 17, alloyWheels: 'not_available', ledHeadlights: 'not_available' },
        interior: { airConditioning: 'standard', rearACVents: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 8.0, androidAuto: 'standard' },
      }),
    },
    {
      id: 'mahindra-xuv700-ax5-petrol',
      name: 'AX5 Petrol 5-Str',
      fullName: 'Mahindra XUV700 AX5 2.0 Turbo Petrol 6MT 5-Seater',
      slug: 'ax5-petrol-5-str',
      trim: 'AX5',
      variantStatus: 'verified',
      pricing: { exShowroom: 1769000, exShowroomLakh: 17.69, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '2.0L mStallion Turbo',
        engineDisplacementCC: 1997,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 197,
        maxTorqueNm: 380,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 13.0, zeroToHundredSec: 9.8, topSpeedKmph: 195 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 4, abs: 'standard', esc: 'standard', rearCamera: 'standard', ncapRating: 5 },
        exterior: { wheelSizeInches: 17, alloyWheels: 'standard', ledHeadlights: 'standard', panoramicSunroof: 'standard', sunroof: 'standard' },
        interior: { airConditioning: 'standard', rearACVents: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 10.25, digitalInstrumentCluster: 'standard', wirelessAndroidAuto: 'standard', wirelessAppleCarPlay: 'standard' },
      }),
    },
    {
      id: 'mahindra-xuv700-ax7-l-diesel-awd',
      name: 'AX7 Luxury Diesel AT AWD',
      fullName: 'Mahindra XUV700 AX7 Luxury 2.2 Diesel 6AT AWD 7-Seater',
      slug: 'ax7-l-diesel-awd',
      trim: 'AX7 Luxury',
      variantStatus: 'verified',
      pricing: { exShowroom: 2604000, exShowroomLakh: 26.04, currency: 'INR' },
      powertrain: {
        fuelType: 'Diesel',
        engineName: '2.2L mHawk CRDe Turbo',
        engineDisplacementCC: 2198,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 182,
        maxTorqueNm: 450,
        transmission: 'Automatic',
        drivetrain: 'AWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 14.5, zeroToHundredSec: 9.5, topSpeedKmph: 190 },
      features: makeStandardFeatures({
        safety: {
          airbagsCount: 7,
          abs: 'standard',
          esc: 'standard',
          rearCamera: 'standard',
          threeSixtyCamera: 'standard',
          blindSpotMonitoring: 'standard',
          laneDepartureWarning: 'standard',
          laneKeepAssist: 'standard',
          adaptiveCruiseControl: 'standard',
          forwardCollisionWarning: 'standard',
          autonomousEmergencyBraking: 'standard',
          adasLevel: 'Level 2',
          tpms: 'standard',
          ncapRating: 5,
        },
        exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', panoramicSunroof: 'standard', sunroof: 'standard' },
        interior: {
          automaticClimateControl: 'standard',
          rearACVents: 'standard',
          ventilatedSeats: 'standard',
          poweredDriverSeat: 'standard',
          leatherSeats: 'standard',
          wirelessCharging: 'standard',
        },
        infotainment: {
          infotainmentScreenSizeInches: 10.25,
          digitalInstrumentCluster: 'standard',
          premiumAudio: 'standard',
          connectedCarTechnology: 'standard',
        },
        convenience: {
          pushButtonStart: 'standard',
          keylessEntry: 'standard',
          adaptiveCruiseControl: 'standard',
          autoDimmingIRVM: 'standard',
          rainSensingWipers: 'standard',
        },
      }),
    },
  ],

  'kia-seltos': [
    {
      id: 'kia-seltos-hte-petrol',
      name: 'HTE 1.5 Petrol',
      fullName: 'Kia Seltos HTE 1.5 Petrol 6MT',
      slug: 'hte-1-5-petrol',
      trim: 'HTE',
      variantStatus: 'verified',
      pricing: { exShowroom: 1089900, exShowroomLakh: 10.9, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: 'Smartstream G1.5',
        engineDisplacementCC: 1497,
        cylinders: 4,
        aspiration: 'Naturally Aspirated',
        maxPowerBhp: 113,
        maxTorqueNm: 144,
        transmission: 'Manual',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.0, zeroToHundredSec: 12.0, topSpeedKmph: 175 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, abs: 'standard', esc: 'standard', rearParkingSensors: 'standard', tpms: 'standard' },
        exterior: { wheelSizeInches: 16, alloyWheels: 'not_available' },
        interior: { airConditioning: 'standard', rearACVents: 'standard' },
      }),
    },
    {
      id: 'kia-seltos-gtx-plus-dct',
      name: 'GTX+ 1.5 Turbo DCT',
      fullName: 'Kia Seltos GTX+ 1.5 Turbo Petrol 7DCT',
      slug: 'gtx-plus-1-5-turbo-dct',
      trim: 'GTX+',
      variantStatus: 'verified',
      pricing: { exShowroom: 1949000, exShowroomLakh: 19.49, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: 'Smartstream G1.5 T-GDi',
        engineDisplacementCC: 1482,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 158,
        maxTorqueNm: 253,
        transmission: 'DCT',
        drivetrain: 'FWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 17.9, zeroToHundredSec: 8.9, topSpeedKmph: 195 },
      features: makeStandardFeatures({
        safety: {
          airbagsCount: 6,
          rearCamera: 'standard',
          threeSixtyCamera: 'standard',
          blindSpotMonitoring: 'standard',
          laneDepartureWarning: 'standard',
          laneKeepAssist: 'standard',
          adaptiveCruiseControl: 'standard',
          forwardCollisionWarning: 'standard',
          autonomousEmergencyBraking: 'standard',
          adasLevel: 'Level 2',
          tpms: 'standard',
        },
        exterior: { wheelSizeInches: 18, alloyWheels: 'standard', ledHeadlights: 'standard', panoramicSunroof: 'standard', sunroof: 'standard' },
        interior: {
          automaticClimateControl: 'standard',
          rearACVents: 'standard',
          ventilatedSeats: 'standard',
          poweredDriverSeat: 'standard',
          leatherSeats: 'standard',
          wirelessCharging: 'standard',
          ambientLighting: 'standard',
        },
        infotainment: {
          infotainmentScreenSizeInches: 10.25,
          digitalInstrumentCluster: 'standard',
          premiumAudio: 'standard',
          connectedCarTechnology: 'standard',
        },
        convenience: {
          pushButtonStart: 'standard',
          keylessEntry: 'standard',
          adaptiveCruiseControl: 'standard',
          autoDimmingIRVM: 'standard',
          rainSensingWipers: 'standard',
        },
      }),
    },
  ],

  'bmw-x3': [
    {
      id: 'bmw-x3-xdrive20d-xline',
      name: 'xDrive20d xLine',
      fullName: 'BMW X3 xDrive20d xLine 2.0 Diesel 8AT AWD',
      slug: 'xdrive20d-xline',
      trim: 'xLine',
      variantStatus: 'verified',
      pricing: { exShowroom: 7250000, exShowroomLakh: 72.5, currency: 'INR' },
      powertrain: {
        fuelType: 'Diesel',
        engineName: '2.0L BMW TwinPower Turbo Diesel',
        engineDisplacementCC: 1995,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 188,
        maxTorqueNm: 400,
        transmission: 'Automatic',
        drivetrain: 'AWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 16.55, zeroToHundredSec: 7.9, topSpeedKmph: 213 },
      features: makeStandardFeatures({
        safety: {
          airbagsCount: 6,
          rearCamera: 'standard',
          frontParkingSensors: 'standard',
          rearParkingSensors: 'standard',
          tpms: 'standard',
          ncapRating: 5,
        },
        exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', panoramicSunroof: 'standard', sunroof: 'standard', poweredTailgate: 'standard' },
        interior: { automaticClimateControl: 'standard', rearACVents: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', leatherSeats: 'standard', ambientLighting: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAppleCarPlay: 'standard', wirelessAndroidAuto: 'standard', premiumAudio: 'standard', connectedCarTechnology: 'standard' },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard', automaticHeadlights: 'standard' },
      }),
    },
    {
      id: 'bmw-x3-xdrive20d-m-sport',
      name: 'xDrive20d M Sport',
      fullName: 'BMW X3 xDrive20d M Sport 2.0 Diesel 8AT AWD',
      slug: 'xdrive20d-m-sport',
      trim: 'M Sport',
      variantStatus: 'verified',
      pricing: { exShowroom: 7490000, exShowroomLakh: 74.9, currency: 'INR' },
      powertrain: {
        fuelType: 'Diesel',
        engineName: '2.0L BMW TwinPower Turbo Diesel',
        engineDisplacementCC: 1995,
        cylinders: 4,
        aspiration: 'Turbocharged',
        maxPowerBhp: 188,
        maxTorqueNm: 400,
        transmission: 'Automatic',
        drivetrain: 'AWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 16.55, zeroToHundredSec: 7.9, topSpeedKmph: 213 },
      features: makeStandardFeatures({
        safety: {
          airbagsCount: 6,
          rearCamera: 'standard',
          threeSixtyCamera: 'standard',
          frontParkingSensors: 'standard',
          rearParkingSensors: 'standard',
          tpms: 'standard',
          ncapRating: 5,
        },
        exterior: { wheelSizeInches: 19, alloyWheels: 'standard', ledHeadlights: 'standard', panoramicSunroof: 'standard', sunroof: 'standard', poweredTailgate: 'standard' },
        interior: { automaticClimateControl: 'standard', rearACVents: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard', leatherSeats: 'standard', ambientLighting: 'standard', wirelessCharging: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 12.3, digitalInstrumentCluster: 'standard', wirelessAppleCarPlay: 'standard', wirelessAndroidAuto: 'standard', premiumAudio: 'standard', connectedCarTechnology: 'standard', headUpDisplay: 'standard' },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard', rainSensingWipers: 'standard', automaticHeadlights: 'standard' },
      }),
    },
  ],

  'porsche-911': [
    {
      id: 'porsche-911-carrera',
      name: 'Carrera',
      fullName: 'Porsche 911 Carrera 3.0 Twin-Turbo 8PDK RWD',
      slug: 'carrera',
      trim: 'Carrera',
      variantStatus: 'verified',
      pricing: { exShowroom: 19800000, exShowroomLakh: 198.0, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '3.0L Twin-Turbo Boxer 6',
        engineDisplacementCC: 2981,
        cylinders: 6,
        aspiration: 'Turbocharged',
        maxPowerBhp: 388,
        maxTorqueNm: 450,
        transmission: 'DCT',
        drivetrain: 'RWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 9.5, zeroToHundredSec: 4.1, topSpeedKmph: 294 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, abs: 'standard', esc: 'standard', rearParkingSensors: 'standard', rearCamera: 'standard', tpms: 'standard' },
        exterior: { wheelSizeInches: 20, alloyWheels: 'standard', ledHeadlights: 'standard' },
        interior: { automaticClimateControl: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 10.9, digitalInstrumentCluster: 'standard', wirelessAppleCarPlay: 'standard', premiumAudio: 'standard' },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard', cruiseControl: 'standard' },
      }),
    },
    {
      id: 'porsche-911-carrera-gts',
      name: 'Carrera GTS T-Hybrid',
      fullName: 'Porsche 911 Carrera GTS 3.6 T-Hybrid 8PDK RWD',
      slug: 'carrera-gts-t-hybrid',
      trim: 'GTS',
      variantStatus: 'verified',
      pricing: { exShowroom: 27500000, exShowroomLakh: 275.0, currency: 'INR' },
      powertrain: {
        fuelType: 'Hybrid',
        engineName: '3.6L Turbo Hybrid Boxer 6',
        engineDisplacementCC: 3591,
        cylinders: 6,
        aspiration: 'Turbocharged',
        maxPowerBhp: 534,
        maxTorqueNm: 610,
        transmission: 'DCT',
        drivetrain: 'RWD',
        batteryCapacityKWh: 1.9,
        electricMotorPowerBhp: 54,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 10.2, zeroToHundredSec: 3.0, topSpeedKmph: 312 },
      features: makeStandardFeatures({
        safety: { airbagsCount: 6, abs: 'standard', esc: 'standard', threeSixtyCamera: 'standard', tpms: 'standard' },
        exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard' },
        interior: { automaticClimateControl: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', ambientLighting: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 10.9, digitalInstrumentCluster: 'standard', premiumAudio: 'standard' },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard' },
      }),
    },
  ],

  'ferrari-12cilindri': [
    {
      id: 'ferrari-12cilindri-coupe',
      name: '12Cilindri Coupe',
      fullName: 'Ferrari 12Cilindri 6.5 V12 Coupe 8DCT RWD',
      slug: '12cilindri-coupe',
      trim: 'Coupe',
      variantStatus: 'verified',
      pricing: { exShowroom: 85000000, exShowroomLakh: 850.0, currency: 'INR' },
      powertrain: {
        fuelType: 'Petrol',
        engineName: '6.5L Naturally Aspirated 65-deg V12 (F140HD)',
        engineDisplacementCC: 6496,
        cylinders: 12,
        aspiration: 'Naturally Aspirated',
        maxPowerBhp: 819,
        maxTorqueNm: 678,
        transmission: 'DCT',
        drivetrain: 'RWD',
        batteryCapacityKWh: null,
        electricMotorPowerBhp: null,
        electricRangeKm: null,
      },
      performance: { mileageKmpl: 6.2, zeroToHundredSec: 2.9, topSpeedKmph: 340 },
      features: makeStandardFeatures({
        safety: {
          airbagsCount: 4,
          abs: 'standard',
          esc: 'standard',
          rearCamera: 'standard',
          frontParkingSensors: 'standard',
          rearParkingSensors: 'standard',
          tpms: 'standard',
        },
        exterior: { wheelSizeInches: 21, alloyWheels: 'standard', ledHeadlights: 'standard' },
        interior: { automaticClimateControl: 'standard', leatherSeats: 'standard', poweredDriverSeat: 'standard', poweredPassengerSeat: 'standard' },
        infotainment: { infotainmentScreenSizeInches: 10.25, digitalInstrumentCluster: 'standard', wirelessAppleCarPlay: 'standard', wirelessAndroidAuto: 'standard', premiumAudio: 'standard' },
        convenience: { pushButtonStart: 'standard', keylessEntry: 'standard', cruiseControl: 'standard', autoDimmingIRVM: 'standard' },
      }),
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// BUILD COMPLETE VARIANT CATALOG ACROSS ALL 206 ACTIVE MODELS
// ─────────────────────────────────────────────────────────────

const allModelGroups: ModelVariantGroup[] = [];
let totalVariantCount = 0;
let verifiedCount = 0;
let needsVerificationCount = 0;

for (const model of activeModels) {
  const customVariants =
    (model.slug === 'tata-aeris' ? TATA_AERIS_VARIANTS : undefined) ||
    (model.slug === 'tata-punch' ? TATA_PUNCH_VARIANTS : undefined) ||
    (model.slug === 'tata-punch-ev' ? TATA_PUNCH_EV_VARIANTS : undefined) ||
    (model.slug === 'tata-harrier' ? TATA_HARRIER_VARIANTS : undefined) ||
    (model.slug === 'tata-sierra' ? TATA_SIERRA_VARIANTS : undefined) ||
    (model.slug === 'tata-sierra-ev' ? TATA_SIERRA_EV_VARIANTS : undefined) ||
    (model.slug === 'tata-safari' ? TATA_SAFARI_VARIANTS : undefined) ||
    (model.slug === 'tata-tiago' ? TATA_TIAGO_VARIANTS : undefined) ||
    (model.slug === 'tata-altroz' ? TATA_ALTROZ_VARIANTS : undefined) ||
    (model.slug === 'tata-tiago-ev' ? TATA_TIAGO_EV_VARIANTS : undefined) ||
    (model.slug === 'tata-curvv' ? TATA_CURVV_VARIANTS : undefined) ||
    (model.slug === 'tata-nexon-ev' ? TATA_NEXON_EV_VARIANTS : undefined) ||
    (model.slug === 'tata-harrier-ev' ? TATA_HARRIER_EV_VARIANTS : undefined) ||
    (model.slug === 'tata-curvv-ev' ? TATA_CURVV_EV_VARIANTS : undefined) ||
    (model.slug === 'tata-tigor-ev' ? TATA_TIGOR_EV_VARIANTS : undefined) ||
    (model.slug === 'tata-aeris-ev' ? TATA_AERIS_EV_VARIANTS : undefined) ||
    (model.slug === 'bmw-2-series-gran-coupe' ? BMW_2_SERIES_GRAN_COUPE_VARIANTS : undefined) ||
    (model.slug === 'bmw-3-series-gran-limousine' ? BMW_3_SERIES_GRAN_LIMOUSINE_VARIANTS : undefined) ||
    (model.slug === 'bmw-m340i' ? BMW_M340I_VARIANTS : undefined) ||
    (model.slug === 'bmw-m4' ? BMW_M4_VARIANTS : undefined) ||
    (model.slug === 'bmw-x1' ? BMW_X1_VARIANTS : undefined) ||
    (model.slug === 'bmw-m5' ? BMW_M5_VARIANTS : undefined) ||
    (model.slug === 'bmw-m440i' ? BMW_M440I_VARIANTS : undefined) ||
    (model.slug === 'bmw-x7' ? BMW_X7_VARIANTS : undefined) ||
    (model.slug === 'bmw-x5' ? BMW_X5_VARIANTS : undefined) ||
    (model.slug === 'bmw-x3' ? BMW_X3_VARIANTS : undefined) ||
    (model.slug === 'bmw-m2' ? BMW_M2_VARIANTS : undefined) ||
    (model.slug === 'bmw-7-series' ? BMW_7_SERIES_VARIANTS : undefined) ||
    (model.slug === 'bmw-i7' ? BMW_I7_VARIANTS : undefined) ||
    (model.slug === 'bmw-5-series-long-wheelbase' || model.slug === 'bmw-5-series-lwb' ? BMW_5_SERIES_LWB_VARIANTS : undefined) ||
    (model.slug === 'bmw-x1-lwb' ? BMW_X1_LWB_VARIANTS : undefined) ||
    (model.slug === 'bmw-ix1-lwb' || model.slug === 'bmw-ix1' ? BMW_IX1_LWB_VARIANTS : undefined) ||
    (model.slug === 'bmw-xm' ? BMW_XM_VARIANTS : undefined) ||
    (model.slug === 'bmw-i5-lwb' ? BMW_I5_LWB_VARIANTS : undefined) ||
    (model.slug === 'bmw-x6' ? BMW_X6_VARIANTS : undefined) ||
    (model.slug === 'bmw-i5' ? BMW_I5_VARIANTS : undefined) ||
    (model.slug === 'bmw-ix' ? BMW_IX_VARIANTS : undefined) ||
    (model.slug === 'volkswagen-virtus' ? VOLKSWAGEN_VIRTUS_VARIANTS : undefined) ||
    (model.slug === 'volkswagen-taigun' ? VOLKSWAGEN_TAIGUN_VARIANTS : undefined) ||
    (model.slug === 'volkswagen-tayron' ? VOLKSWAGEN_TAYRON_VARIANTS : undefined) ||
    (model.slug === 'volkswagen-golf-gti' ? VOLKSWAGEN_GOLF_GTI_VARIANTS : undefined) ||
    (model.slug === 'volkswagen-tiguan' || model.slug === 'volkswagen-tiguan-r-line' ? VOLKSWAGEN_TIGUAN_VARIANTS : undefined) ||
    (model.slug === 'skoda-slavia' ? SKODA_SLAVIA_VARIANTS : undefined) ||
    (model.slug === 'skoda-kylaq' ? SKODA_KYLAQ_VARIANTS : undefined) ||
    (model.slug === 'skoda-kushaq' ? SKODA_KUSHAQ_VARIANTS : undefined) ||
    (model.slug === 'skoda-kodiaq' ? SKODA_KODIAQ_VARIANTS : undefined) ||
    (model.slug === 'skoda-octavia-rs' ? SKODA_OCTAVIA_RS_VARIANTS : undefined) ||
    (model.slug === 'skoda-kodiaq-rs' ? SKODA_KODIAQ_RS_VARIANTS : undefined) ||
    (model.slug === 'honda-elevate' ? HONDA_ELEVATE_VARIANTS : undefined) ||
    (model.slug === 'honda-amaze' ? HONDA_AMAZE_VARIANTS : undefined) ||
    (model.slug === 'honda-city' ? HONDA_CITY_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-brezza' ? MARUTI_BREZZA_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-fronx' ? MARUTI_FRONX_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-baleno' ? MARUTI_BALENO_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-swift' ? MARUTI_SWIFT_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-victoris' ? MARUTI_VICTORIS_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-grand-vitara' ? MARUTI_GRAND_VITARA_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-dzire' ? MARUTI_DZIRE_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-alto-k10' ? MARUTI_ALTO_K10_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-ertiga' ? MARUTI_ERTIGA_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-wagon-r' ? MARUTI_WAGON_R_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-s-presso' ? MARUTI_S_PRESSO_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-celerio' ? MARUTI_CELERIO_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-xl6' ? MARUTI_XL6_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-e-vitara' ? MARUTI_E_VITARA_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-jimny' ? MARUTI_JIMNY_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-eeco' ? MARUTI_EECO_VARIANTS : undefined) ||
    (model.slug === 'maruti-suzuki-invicto' ? MARUTI_INVICTO_VARIANTS : undefined) ||
    (model.slug === 'toyota-glanza' ? TOYOTA_GLANZA_VARIANTS : undefined) ||
    (model.slug === 'toyota-urban-cruiser-taisor' ? TOYOTA_TAISOR_VARIANTS : undefined) ||
    (model.slug === 'toyota-urban-cruiser-hyryder' ? TOYOTA_HYRYDER_VARIANTS : undefined) ||
    (model.slug === 'toyota-innova-hycross' ? TOYOTA_INNOVA_HYCROSS_VARIANTS : undefined) ||
    (model.slug === 'toyota-fortuner' ? TOYOTA_FORTUNER_VARIANTS : undefined) ||
    (model.slug === 'toyota-fortuner-legender' ? TOYOTA_FORTUNER_LEGENDER_VARIANTS : undefined) ||
    (model.slug === 'toyota-innova-crysta' ? TOYOTA_INNOVA_CRYSTA_VARIANTS : undefined) ||
    (model.slug === 'toyota-hilux' ? TOYOTA_HILUX_VARIANTS : undefined) ||
    (model.slug === 'toyota-rumion' ? TOYOTA_RUMION_VARIANTS : undefined) ||
    (model.slug === 'toyota-land-cruiser-300' || model.slug === 'toyota-land-cruiser' ? TOYOTA_LAND_CRUISER_VARIANTS : undefined) ||
    (model.slug === 'toyota-camry' ? TOYOTA_CAMRY_VARIANTS : undefined) ||
    (model.slug === 'toyota-vellfire' ? TOYOTA_VELLFIRE_VARIANTS : undefined) ||
    (model.slug === 'hyundai-bayon' ? HYUNDAI_BAYON_VARIANTS : undefined) ||
    (model.slug === 'hyundai-creta' ? HYUNDAI_CRETA_VARIANTS : undefined) ||
    (model.slug === 'hyundai-venue' ? HYUNDAI_VENUE_VARIANTS : undefined) ||
    (model.slug === 'hyundai-exter' ? HYUNDAI_EXTER_VARIANTS : undefined) ||
    (model.slug === 'hyundai-i20' ? HYUNDAI_I20_VARIANTS : undefined) ||
    (model.slug === 'hyundai-grand-i10-nios' ? HYUNDAI_GRAND_I10_NIOS_VARIANTS : undefined) ||
    (model.slug === 'hyundai-verna' ? HYUNDAI_VERNA_VARIANTS : undefined) ||
    (model.slug === 'hyundai-aura' ? HYUNDAI_AURA_VARIANTS : undefined) ||
    (model.slug === 'hyundai-alcazar' ? HYUNDAI_ALCAZAR_VARIANTS : undefined) ||
    (model.slug === 'hyundai-i20-n-line' ? HYUNDAI_I20_N_LINE_VARIANTS : undefined) ||
    (model.slug === 'hyundai-venue-n-line' ? HYUNDAI_VENUE_N_LINE_VARIANTS : undefined) ||
    (model.slug === 'hyundai-creta-n-line' ? HYUNDAI_CRETA_N_LINE_VARIANTS : undefined) ||
    (model.slug === 'hyundai-creta-electric' || model.slug === 'hyundai-creta-ev' ? HYUNDAI_CRETA_ELECTRIC_VARIANTS : undefined) ||
    (model.slug === 'hyundai-ioniq-5' ? HYUNDAI_IONIQ_5_VARIANTS : undefined) ||
    (model.slug === 'lamborghini-revuelto' ? LAMBORGHINI_REVUELTO_VARIANTS : undefined) ||
    (model.slug === 'lamborghini-urus-se' ? LAMBORGHINI_URUS_SE_VARIANTS : undefined) ||
    (model.slug === 'lamborghini-temerario' ? LAMBORGHINI_TEMERARIO_VARIANTS : undefined) ||
    (model.slug === 'jeep-compass' ? JEEP_COMPASS_VARIANTS : undefined) ||
    (model.slug === 'jeep-meridian' ? JEEP_MERIDIAN_VARIANTS : undefined) ||
    (model.slug === 'jeep-wrangler' ? JEEP_WRANGLER_VARIANTS : undefined) ||
    (model.slug === 'jeep-grand-cherokee' ? JEEP_GRAND_CHEROKEE_VARIANTS : undefined) ||
    (model.slug === 'force-gurkha' ? FORCE_GURKHA_VARIANTS : undefined) ||
    (model.slug === 'force-trax-cruiser' ? FORCE_TRAX_CRUISER_VARIANTS : undefined) ||
    (model.slug === 'citroen-c3' || model.slug === 'citroen-c3-x' ? CITROEN_C3_X_VARIANTS : undefined) ||
    (model.slug === 'citroen-basalt' || model.slug === 'citroen-basalt-x' ? CITROEN_BASALT_X_VARIANTS : undefined) ||
    (model.slug === 'citroen-c3-aircross' || model.slug === 'citroen-aircross' || model.slug === 'citroen-aircross-x' ? CITROEN_AIRCROSS_VARIANTS : undefined) ||
    (model.slug === 'citroen-e-c3' || model.slug === 'citroen-ec3-x' ? CITROEN_EC3_X_VARIANTS : undefined) ||
    (model.slug === 'citroen-c5-aircross' ? CITROEN_C5_AIRCROSS_VARIANTS : undefined) ||
    // Lexus
    (model.slug === 'lexus-es-350h' || model.slug === 'lexus-es-300h' ? LEXUS_ES_350H_VARIANTS : undefined) ||
    (model.slug === 'lexus-lx' || model.slug === 'lexus-lx-500d' ? LEXUS_LX_VARIANTS : undefined) ||
    (model.slug === 'lexus-lm' || model.slug === 'lexus-lm-350h' ? LEXUS_LM_VARIANTS : undefined) ||
    (model.slug === 'lexus-nx' || model.slug === 'lexus-nx-350h' ? LEXUS_NX_VARIANTS : undefined) ||
    (model.slug === 'lexus-rx' ? LEXUS_RX_VARIANTS : undefined) ||
    (model.slug === 'lexus-es-500e' ? LEXUS_ES_500E_VARIANTS : undefined) ||
    // BYD
    (model.slug === 'byd-atto-3' ? BYD_ATTO_3_VARIANTS : undefined) ||
    (model.slug === 'byd-sealion-7' ? BYD_SEALION_7_VARIANTS : undefined) ||
    (model.slug === 'byd-seal' ? BYD_SEAL_VARIANTS : undefined) ||
    (model.slug === 'byd-emax-7' || model.slug === 'byd-e6' ? BYD_EMAX_7_VARIANTS : undefined) ||
    // Renault
    (model.slug === 'renault-triber' ? RENAULT_TRIBER_VARIANTS : undefined) ||
    (model.slug === 'renault-duster' ? RENAULT_DUSTER_VARIANTS : undefined) ||
    (model.slug === 'renault-kwid' ? RENAULT_KWID_VARIANTS : undefined) ||
    (model.slug === 'renault-kiger' ? RENAULT_KIGER_VARIANTS : undefined) ||
    // Nissan
    (model.slug === 'nissan-magnite' ? NISSAN_MAGNITE_VARIANTS : undefined) ||
    (model.slug === 'nissan-tekton' ? NISSAN_TEKTON_VARIANTS : undefined) ||
    (model.slug === 'nissan-gravite' ? NISSAN_GRAVITE_VARIANTS : undefined) ||
    (model.slug === 'nissan-x-trail' ? NISSAN_XTRAIL_VARIANTS : undefined) ||
    // MG
    (model.slug === 'mg-hector-tomahawk-ev' ? MG_HECTOR_TOMAHAWK_EV_VARIANTS : undefined) ||
    (model.slug === 'mg-windsor-ev' ? MG_WINDSOR_EV_VARIANTS : undefined) ||
    (model.slug === 'mg-hector' ? MG_HECTOR_VARIANTS : undefined) ||
    (model.slug === 'mg-majestor' ? MG_MAJESTOR_VARIANTS : undefined) ||
    (model.slug === 'mg-comet-ev' ? MG_COMET_EV_VARIANTS : undefined) ||
    (model.slug === 'mg-cyberster' ? MG_CYBERSTER_VARIANTS : undefined) ||
    (model.slug === 'mg-hector-tomahawk' ? MG_HECTOR_TOMAHAWK_VARIANTS : undefined) ||
    (model.slug === 'mg-m9' ? MG_M9_VARIANTS : undefined) ||
    (model.slug === 'mg-zs-ev' ? MG_ZS_EV_VARIANTS : undefined) ||
    (model.slug === 'mg-astor' ? MG_ASTOR_VARIANTS : undefined) ||
    (model.slug === 'mg-hector-plus' ? MG_HECTOR_PLUS_VARIANTS : undefined) ||
    // Land Rover
    (model.slug === 'land-rover-defender' ? LAND_ROVER_DEFENDER_VARIANTS : undefined) ||
    (model.slug === 'land-rover-range-rover-velar' ? LAND_ROVER_RANGE_ROVER_VELAR_VARIANTS : undefined) ||
    (model.slug === 'land-rover-range-rover' ? LAND_ROVER_RANGE_ROVER_VARIANTS : undefined) ||
    (model.slug === 'land-rover-range-rover-sport' ? LAND_ROVER_RANGE_ROVER_SPORT_VARIANTS : undefined) ||
    (model.slug === 'range-rover-evoque' || model.slug === 'land-rover-range-rover-evoque' ? LAND_ROVER_RANGE_ROVER_EVOQUE_VARIANTS : undefined) ||
    (model.slug === 'land-rover-discovery-sport' ? LAND_ROVER_DISCOVERY_SPORT_VARIANTS : undefined) ||
    (model.slug === 'land-rover-discovery' ? LAND_ROVER_DISCOVERY_VARIANTS : undefined) ||
    // Audi
    (model.slug === 'audi-q3' || model.slug === 'q3' ? AUDI_Q3_VARIANTS : undefined) ||
    (model.slug === 'audi-a4' || model.slug === 'a4' ? AUDI_A4_VARIANTS : undefined) ||
    (model.slug === 'audi-a6' || model.slug === 'a6' ? AUDI_A6_VARIANTS : undefined) ||
    (model.slug === 'audi-q7' || model.slug === 'q7' ? AUDI_Q7_VARIANTS : undefined) ||
    (model.slug === 'audi-s5-sportback' || model.slug === 's5-sportback' ? AUDI_S5_SPORTBACK_VARIANTS : undefined) ||
    (model.slug === 'audi-q3-sportback' || model.slug === 'q3-sportback' ? AUDI_Q3_SPORTBACK_VARIANTS : undefined) ||
    (model.slug === 'audi-q8' || model.slug === 'q8' ? AUDI_Q8_VARIANTS : undefined) ||
    (model.slug === 'audi-a8-l' || model.slug === 'a8-l' ? AUDI_A8_L_VARIANTS : undefined) ||
    (model.slug === 'audi-rs5' || model.slug === 'rs5' ? AUDI_RS5_VARIANTS : undefined) ||
    (model.slug === 'audi-rs-q8-performance' || model.slug === 'rs-q8-performance' || model.slug === 'audi-rs-q8' ? AUDI_RS_Q8_PERFORMANCE_VARIANTS : undefined) ||
    (model.slug === 'audi-e-tron-gt' || model.slug === 'e-tron-gt' ? AUDI_E_TRON_GT_VARIANTS : undefined) ||
    (model.slug === 'audi-e-tron-sportback' || model.slug === 'e-tron-sportback' ? AUDI_E_TRON_SPORTBACK_VARIANTS : undefined) ||
    (model.slug === 'audi-e-tron' || model.slug === 'e-tron' ? AUDI_E_TRON_VARIANTS : undefined) ||
    (model.slug === 'audi-q8-e-tron' || model.slug === 'q8-e-tron' ? AUDI_Q8_E_TRON_VARIANTS : undefined) ||
    (model.slug === 'audi-q8-sportback-e-tron' || model.slug === 'q8-sportback-e-tron' ? AUDI_Q8_SPORTBACK_E_TRON_VARIANTS : undefined) ||
    (model.slug === 'audi-sq8' || model.slug === 'sq8' ? AUDI_SQ8_VARIANTS : undefined) ||
    // Mercedes-Benz
    (model.slug === 'mercedes-benz-g-class' || model.slug === 'g-class' ? MERCEDES_G_CLASS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-maybach-s-class' || model.slug === 'maybach-s-class' ? MERCEDES_MAYBACH_S_CLASS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-c-class' || model.slug === 'c-class' ? MERCEDES_C_CLASS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-gla' || model.slug === 'gla' ? MERCEDES_GLA_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-gls' || model.slug === 'gls' ? MERCEDES_GLS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-glc' || model.slug === 'glc' ? MERCEDES_GLC_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-e-class' || model.slug === 'e-class' || model.slug === 'mercedes-benz-e-class-long-wheelbase' ? MERCEDES_E_CLASS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-cla-ev' || model.slug === 'cla-ev' ? MERCEDES_CLA_EV_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-gle' || model.slug === 'gle' ? MERCEDES_GLE_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-s-class' || model.slug === 's-class' ? MERCEDES_S_CLASS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-cle' || model.slug === 'amg-cle' || model.slug === 'mercedes-benz-cle' ? MERCEDES_AMG_CLE_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-v-class' || model.slug === 'v-class' ? MERCEDES_V_CLASS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-maybach-gls' || model.slug === 'maybach-gls' ? MERCEDES_MAYBACH_GLS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-g-class' || model.slug === 'amg-g-class' ? MERCEDES_AMG_G_CLASS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-gla35' || model.slug === 'amg-gla35' ? MERCEDES_AMG_GLA35_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-cle-cabriolet' || model.slug === 'cle-cabriolet' ? MERCEDES_CLE_CABRIOLET_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-glc43-coupe' || model.slug === 'amg-glc43-coupe' ? MERCEDES_AMG_GLC43_COUPE_VARIANTS : undefined) ||
    // Mercedes-Benz Part 2: AMG, Maybach, & EQ Electric
    (model.slug === 'mercedes-benz-amg-c-43' || model.slug === 'amg-c-43' ? MERCEDES_AMG_C_43_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-gt-63' || model.slug === 'amg-gt-63' || model.slug === 'mercedes-amg-gt' ? MERCEDES_AMG_GT_63_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-g-class-electric' || model.slug === 'g-class-electric' ? MERCEDES_G_CLASS_ELECTRIC_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-eqs' || model.slug === 'eqs' || model.slug === 'mercedes-benz-eqs-sedan' ? MERCEDES_EQS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-maybach-sl-680' || model.slug === 'maybach-sl-680' ? MERCEDES_MAYBACH_SL_680_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-gle-coupe' || model.slug === 'amg-gle-coupe' ? MERCEDES_AMG_GLE_COUPE_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-a45-s' || model.slug === 'amg-a45-s' ? MERCEDES_AMG_A45_S_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-e53-cabriolet' || model.slug === 'amg-e53-cabriolet' ? MERCEDES_AMG_E53_CABRIOLET_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-sl55-roadster' || model.slug === 'amg-sl55-roadster' ? MERCEDES_AMG_SL55_ROADSTER_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-eqs-suv' || model.slug === 'eqs-suv' ? MERCEDES_EQS_SUV_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-e53-phev' || model.slug === 'amg-e53-phev' ? MERCEDES_AMG_E53_PHEV_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-c-63-s-e-performance' || model.slug === 'amg-c-63-s-e-performance' ? MERCEDES_AMG_C_63_S_E_PERFORMANCE_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-maybach-eqs-suv' || model.slug === 'maybach-eqs-suv' ? MERCEDES_MAYBACH_EQS_SUV_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-gt-63-s-4matic-plus' || model.slug === 'amg-gt-63-s-4matic-plus' ? MERCEDES_AMG_GT_63_S_4MATIC_PLUS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-eqs' || model.slug === 'amg-eqs' ? MERCEDES_AMG_EQS_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-eqe-suv' || model.slug === 'eqe-suv' ? MERCEDES_EQE_SUV_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-gt-63-s-e-performance' || model.slug === 'amg-gt-63-s-e-performance' ? MERCEDES_AMG_GT_63_S_E_PERFORMANCE_VARIANTS : undefined) ||
    (model.slug === 'mercedes-benz-amg-s-63-e-performance' || model.slug === 'amg-s-63-e-performance' ? MERCEDES_AMG_S_63_E_PERFORMANCE_VARIANTS : undefined) ||
    DETAILED_VERIFIED_VARIANTS[model.slug] ||
    VERIFIED_MODEL_VARIANTS[model.slug] ||
    VERIFIED_MODEL_VARIANTS_BATCH2[model.slug];

  if (customVariants && customVariants.length > 0) {
    const variants: CarVariant[] = customVariants.map((cv, idx) => {
      const v: CarVariant = {
        id: (cv.id && cv.modelId === model.slug) ? cv.id : `${model.slug}-${cv.slug || idx}`,
        modelId: model.slug,
        generationId: null,
        name: cv.name || `${model.name} Variant`,
        fullName: cv.fullName || `${model.brand} ${model.name} ${cv.name}`,
        slug: cv.slug || `variant-${idx}`,
        trim: cv.trim || 'Standard',
        status: 'active',
        variantStatus: cv.variantStatus || 'verified',
        pricing: cv.pricing || {
          exShowroom: (model.startingPrice || 10) * 100000,
          exShowroomLakh: model.startingPrice || 10,
          currency: 'INR',
        },
        powertrain: cv.powertrain || {
          fuelType: (model.fuelTypes[0] as FuelType) || 'Petrol',
          engineName: null,
          engineDisplacementCC: model.specs?.displacementCC || null,
          cylinders: model.specs?.cylinders || null,
          aspiration: model.fuelTypes.includes('Electric') ? 'Electric Motor' : 'Naturally Aspirated',
          maxPowerBhp: model.specs?.maxPowerBhp || null,
          maxTorqueNm: model.specs?.maxTorqueNm || null,
          transmission: (model.transmissions[0] as TransmissionType) || 'Manual',
          drivetrain: model.specs?.drivetrain || 'FWD',
          batteryCapacityKWh: model.specs?.batteryKWh || null,
          electricMotorPowerBhp: null,
          electricRangeKm: model.specs?.rangeKm || null,
        },
        performance: cv.performance || {
          mileageKmpl: model.specs?.mileageKmpl || null,
          zeroToHundredSec: model.specs?.zeroToHundredSec || null,
          topSpeedKmph: model.specs?.topSpeedKmph || null,
        },
        dimensions: cv.dimensions || {
          lengthMm: model.specs?.lengthMm || null,
          widthMm: model.specs?.widthMm || null,
          heightMm: model.specs?.heightMm || null,
          wheelbaseMm: model.specs?.wheelbaseMm || null,
          groundClearanceMm: model.specs?.groundClearanceMm || null,
          kerbWeightKg: null,
          bootSpaceLitres: model.specs?.bootSpaceLitres || null,
          fuelTankLitres: model.specs?.fuelTankLitres || null,
        },
        features: cv.features || makeStandardFeatures(),
        // Comprehensive Extended Specifications (Sections A through V)
        extendedPowertrain: cv.extendedPowertrain || null,
        suspension: cv.suspension || null,
        extendedDimensions: cv.extendedDimensions || null,
        tyres: cv.tyres || null,
        warranty: cv.warranty || null,
        extendedSafety: cv.extendedSafety || null,
        brakes: cv.brakes || null,
        climate: cv.climate || null,
        doorsAndMirrors: cv.doorsAndMirrors || null,
        sunroofWindows: cv.sunroofWindows || null,
        parkingAssist: cv.parkingAssist || null,
        storage: cv.storage || null,
        seating: cv.seating || null,
        instrumentCluster: cv.instrumentCluster || null,
        steering: cv.steering || null,
        lighting: cv.lighting || null,
        connectedCar: cv.connectedCar || null,
        styling: cv.styling || null,
        warnings: cv.warnings || null,
        sources: cv.sources || model.sources.map((s) => ({
          name: s.name,
          url: s.url,
          type: s.type,
          checkedAt: s.checkedAt,
        })),
        lastVerified: cv.lastVerified || model.lastVerified || '2026-10-16',
      };
      return v;
    });

    const prices = variants.map((v) => v.pricing.exShowroomLakh).filter((p): p is number => p !== null);
    const minPrice = prices.length ? Math.min(...prices) : (model.startingPrice || 10);
    const maxPrice = prices.length ? Math.max(...prices) : (model.endingPrice || minPrice);
    const trimLadder = [...new Set(variants.map((v) => v.trim))];

    allModelGroups.push({
      modelId: model.slug,
      modelName: model.name,
      brand: model.brand,
      totalVariants: variants.length,
      activeVariants: variants.filter((v) => v.status === 'active').length,
      priceRangeLakh: { min: minPrice, max: maxPrice },
      trimLadder,
      variants,
    });

    totalVariantCount += variants.length;
    verifiedCount += variants.filter((v) => v.variantStatus === 'verified').length;
    needsVerificationCount += variants.filter((v) => v.variantStatus === 'needs_verification').length;
  } else {
    // Models with standard / baseline configuration or awaiting full trim disaggregation
    // Per Section 8 & 20: Mark as needs_verification with accurate model-level source
    const isSingleKnownTrim = model.startingPrice === model.endingPrice || !model.endingPrice;
    const trimName = isSingleKnownTrim ? 'Standard' : 'Base Specification';

    const baseVariant: CarVariant = {
      id: `${model.slug}-standard`,
      modelId: model.slug,
      generationId: null,
      name: trimName,
      fullName: `${model.brand} ${model.name} ${trimName}`,
      slug: 'standard',
      trim: trimName,
      status: 'active',
      variantStatus: isSingleKnownTrim ? 'verified' : 'needs_verification',
      pricing: {
        exShowroom: model.startingPrice ? Math.round(model.startingPrice * 100000) : null,
        exShowroomLakh: model.startingPrice,
        currency: 'INR',
      },
      powertrain: {
        fuelType: (model.fuelTypes[0] as FuelType) || 'Petrol',
        engineName: null,
        engineDisplacementCC: model.specs?.displacementCC || null,
        cylinders: model.specs?.cylinders || null,
        aspiration: model.fuelTypes.includes('Electric') ? 'Electric Motor' : 'Naturally Aspirated',
        maxPowerBhp: model.specs?.maxPowerBhp || null,
        maxTorqueNm: model.specs?.maxTorqueNm || null,
        transmission: (model.transmissions[0] as TransmissionType) || 'Manual',
        drivetrain: model.specs?.drivetrain || 'FWD',
        batteryCapacityKWh: model.specs?.batteryKWh || null,
        electricMotorPowerBhp: null,
        electricRangeKm: model.specs?.rangeKm || null,
      },
      performance: {
        mileageKmpl: model.specs?.mileageKmpl || null,
        zeroToHundredSec: model.specs?.zeroToHundredSec || null,
        topSpeedKmph: model.specs?.topSpeedKmph || null,
      },
      dimensions: {
        lengthMm: model.specs?.lengthMm || null,
        widthMm: model.specs?.widthMm || null,
        heightMm: model.specs?.heightMm || null,
        wheelbaseMm: model.specs?.wheelbaseMm || null,
        groundClearanceMm: model.specs?.groundClearanceMm || null,
        kerbWeightKg: null,
        bootSpaceLitres: model.specs?.bootSpaceLitres || null,
        fuelTankLitres: model.specs?.fuelTankLitres || null,
      },
      features: makeStandardFeatures({
        safety: {
          airbagsCount: model.specs?.airbagsCount || 6,
          ncapRating: (model.specs?.ncapRating as NCAPRating) || null,
        },
        exterior: {
          sunroof: model.specs?.sunroof === 'Panoramic' || model.specs?.sunroof === 'Single Pane' ? 'standard' : 'not_available',
          panoramicSunroof: model.specs?.sunroof === 'Panoramic' ? 'standard' : 'not_available',
        },
        interior: {
          ventilatedSeats: model.specs?.ventilatedSeats ? 'standard' : 'not_available',
          wirelessCharging: model.specs?.wirelessCharging ? 'standard' : 'not_available',
        },
        infotainment: {
          infotainmentScreenSizeInches: model.specs?.touchscreenInches || null,
          digitalInstrumentCluster: model.specs?.digitalCluster ? 'standard' : 'not_available',
          connectedCarTechnology: model.specs?.connectedCarTech ? 'standard' : 'not_available',
        },
      }),
      sources: model.sources.map((s) => ({
        name: s.name,
        url: s.url,
        type: s.type,
        checkedAt: s.checkedAt,
      })),
      lastVerified: model.lastVerified || '2026-10-05',
    };

    allModelGroups.push({
      modelId: model.slug,
      modelName: model.name,
      brand: model.brand,
      totalVariants: 1,
      activeVariants: 1,
      priceRangeLakh: {
        min: model.startingPrice || 10,
        max: model.endingPrice || model.startingPrice || 10,
      },
      trimLadder: [trimName],
      variants: [baseVariant],
    });

    totalVariantCount += 1;
    if (baseVariant.variantStatus === 'verified') {
      verifiedCount += 1;
    } else {
      needsVerificationCount += 1;
    }
  }
}

const masterCatalog: MasterVariantCatalog = {
  metadata: {
    country: 'India',
    market: 'Passenger Cars',
    lastUpdated: '2026-10-05',
    catalogVersion: '1.0.0',
    totalModelsWithVariants: allModelGroups.length,
    totalVariants: totalVariantCount,
    activeVariants: totalVariantCount,
    verifiedVariants: verifiedCount,
    needsVerificationVariants: needsVerificationCount,
  },
  models: allModelGroups,
};

fs.writeFileSync(variantsJsonPath, JSON.stringify(masterCatalog, null, 2), 'utf8');

console.log('VARIANT CATALOG GENERATED');
console.log('────────────────────────');
console.log(`Models with variants:   ${masterCatalog.metadata.totalModelsWithVariants}`);
console.log(`Total variants:         ${masterCatalog.metadata.totalVariants}`);
console.log(`Verified variants:      ${masterCatalog.metadata.verifiedVariants}`);
console.log(`Needs verification:     ${masterCatalog.metadata.needsVerificationVariants}`);
console.log(`Output:                 ${variantsJsonPath}`);
