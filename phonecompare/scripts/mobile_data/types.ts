import type {
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
} from '../../src/types/mobile';

export interface MobileBrandBundle {
  models: MobileModel[];
  variants: MobileVariant[];
  images: MobileImageCatalogEntry[];
}
