import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';
import { samsungBundle } from './samsung';
import { appleBundle } from './apple';
import { oneplusBundle } from './oneplus';
import { googleBundle } from './google';
import { xiaomiBundle } from './xiaomi';
import { bbkVivoBundle } from './bbk_vivo';
import { bbkOppoRealmeBundle } from './bbk_oppo_realme';
import { motorolaBundle } from './motorola';
import { nothingAsusBundle } from './nothing_asus';
import { transsionBundle } from './transsion';
import { indianOemsBundle } from './indian_oems';

const bundles = [
  samsungBundle,
  appleBundle,
  oneplusBundle,
  googleBundle,
  xiaomiBundle,
  bbkVivoBundle,
  bbkOppoRealmeBundle,
  motorolaBundle,
  nothingAsusBundle,
  transsionBundle,
  indianOemsBundle,
];

export const allMobileModels: MobileModel[] = bundles.flatMap((b) => b.models);
export const allMobileVariants: MobileVariant[] = bundles.flatMap((b) => b.variants);
export const allMobileImages: MobileImageCatalogEntry[] = bundles.flatMap((b) => b.images);
