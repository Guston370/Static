import os
import json

def format_ts_bundle(bundle_name, models, variants, images):
    models_json = json.dumps(models, indent=2)
    variants_json = json.dumps(variants, indent=2)
    images_json = json.dumps(images, indent=2)

    return f"""import type {{ MobileBrandBundle }} from './types';
import type {{
  MobileModel,
  MobileVariant,
  MobileImageCatalogEntry,
}} from '../../src/types/mobile';

const models: MobileModel[] = {models_json} as unknown as MobileModel[];

const variants: MobileVariant[] = {variants_json} as unknown as MobileVariant[];

const images: MobileImageCatalogEntry[] = {images_json} as unknown as MobileImageCatalogEntry[];

export const {bundle_name}: MobileBrandBundle = {{
  models,
  variants,
  images,
}};
"""

# Test helper
print("format_ts_bundle helper ready.")
