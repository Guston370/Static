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
import { redmiBundle } from './redmi';
import { pocoBundle } from './poco';
import { vivoBundle } from './vivo';
import { iqooBundle } from './iqoo';
import { oppoBundle } from './oppo';
import { realmeBundle } from './realme';
import { motorolaBundle } from './motorola';
import { nothingBundle } from './nothing';
import { cmfBundle } from './cmf';
import { asusBundle } from './asus';
import { infinixBundle } from './infinix';
import { tecnoBundle } from './tecno';
import { lavaBundle } from './lava';
import { hmdBundle } from './hmd';
import { honorBundle } from './honor';
import { itelBundle } from './itel';

const bundles = [
  samsungBundle,
  appleBundle,
  oneplusBundle,
  googleBundle,
  xiaomiBundle,
  redmiBundle,
  pocoBundle,
  vivoBundle,
  iqooBundle,
  oppoBundle,
  realmeBundle,
  motorolaBundle,
  nothingBundle,
  cmfBundle,
  asusBundle,
  infinixBundle,
  tecnoBundle,
  lavaBundle,
  hmdBundle,
  honorBundle,
  itelBundle,
];

export const allMobileModels: MobileModel[] = bundles.flatMap((b) => b.models);
export const allMobileVariants: MobileVariant[] = bundles.flatMap((b) => b.variants);
export const allMobileImages: MobileImageCatalogEntry[] = bundles.flatMap((b) => b.images);
