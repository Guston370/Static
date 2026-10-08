/**
 * lib/variants.ts
 *
 * Data Access Layer for Static Variant Catalog.
 * Primary source of truth: data/india-car-variants.json
 */

import variantCatalogData from '@data/india-car-variants.json';
import type {
  MasterVariantCatalog,
  ModelVariantGroup,
  CarVariant,
} from '@/types/variant';

const catalog = variantCatalogData as unknown as MasterVariantCatalog;

// Indexing maps for O(1) lookups
const groupMap = new Map<string, ModelVariantGroup>();
const variantByIdMap = new Map<string, CarVariant>();
const variantsByModelSlugMap = new Map<string, CarVariant[]>();

catalog.models.forEach((group) => {
  groupMap.set(group.modelId, group);
  variantsByModelSlugMap.set(group.modelId, group.variants);
  group.variants.forEach((v) => {
    variantByIdMap.set(v.id, v);
  });
});

/** Returns the master variant catalog */
export function getMasterVariantCatalog(): MasterVariantCatalog {
  return catalog;
}

/** Returns the model variant group for a given model slug */
export function getModelVariantGroup(modelSlug: string): ModelVariantGroup | undefined {
  return groupMap.get(modelSlug);
}

/** Returns all variants for a given model slug */
export function getVariantsByModelSlug(modelSlug: string): CarVariant[] {
  return variantsByModelSlugMap.get(modelSlug) || [];
}

/** Returns a variant by its globally unique id */
export function getVariantById(id: string): CarVariant | undefined {
  return variantByIdMap.get(id);
}

/** Returns a variant by model slug and variant slug */
export function getVariantBySlug(modelSlug: string, variantSlug: string): CarVariant | undefined {
  const variants = variantsByModelSlugMap.get(modelSlug);
  if (!variants) return undefined;
  return variants.find((v) => v.slug === variantSlug || v.id === variantSlug);
}

/** Returns the default (first / entry) variant for a model */
export function getDefaultVariantForModel(modelSlug: string): CarVariant | undefined {
  const variants = variantsByModelSlugMap.get(modelSlug);
  if (!variants || variants.length === 0) return undefined;
  return variants[0];
}

/** Returns all active variants in the catalog */
export function getAllVariants(): CarVariant[] {
  const all: CarVariant[] = [];
  catalog.models.forEach((group) => {
    all.push(...group.variants);
  });
  return all;
}

/** Formats variant price as ₹X.XX Lakh */
export function formatVariantPrice(variant: CarVariant): string {
  if (variant.pricing.exShowroomLakh === null) {
    return 'Price on request';
  }
  return `₹${variant.pricing.exShowroomLakh.toFixed(2)} Lakh`;
}
