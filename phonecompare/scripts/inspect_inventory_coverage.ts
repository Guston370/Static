import { allMobileModels } from './mobile_data';

const byBrand: Record<string, string[]> = {};
for (const m of allMobileModels) {
  if (!byBrand[m.brand]) byBrand[m.brand] = [];
  byBrand[m.brand].push(`${m.modelName} [${m.status}]`);
}

for (const [brand, models] of Object.entries(byBrand)) {
  console.log(`\n=== ${brand} (${models.length} models) ===`);
  console.log(models.join('\n'));
}
