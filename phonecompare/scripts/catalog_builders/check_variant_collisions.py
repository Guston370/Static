import glob
import re
from collections import Counter

existing_files = [f for f in glob.glob('scripts/mobile_data/*.ts') if 'additions' not in f and 'index.ts' not in f and 'types' not in f]
addition_files = glob.glob('scripts/mobile_data/additions_*.ts')

def extract_variant_ids(files):
    ids = {}
    for f in files:
        content = open(f, encoding='utf-8').read()
        # variants: [ ... id: "..." or "id": "..."
        # In files, variant sections have modelId: ...
        matches = re.findall(r'["\']?id["\']?:\s*["\']([^"\']+)["\'][\s\S]*?["\']?modelId["\']?:\s*["\']([^"\']+)["\']', content)
        for var_id, model_id in matches:
            ids[var_id] = (model_id, f)
    return ids

ex_vars = extract_variant_ids(existing_files)
ad_vars = extract_variant_ids(addition_files)

coll_vars = set(ex_vars.keys()) & set(ad_vars.keys())
print('Total existing variants:', len(ex_vars))
print('Total addition variants:', len(ad_vars))
print('Variant collisions:', coll_vars)

# Check all addition variant IDs for internal duplicates
ad_var_list = []
for f in addition_files:
    content = open(f, encoding='utf-8').read()
    matches = re.findall(r'["\']?id["\']?:\s*["\']([^"\']+)["\'][\s\S]*?["\']?modelId["\']?:\s*["\']([^"\']+)["\']', content)
    for var_id, model_id in matches:
        ad_var_list.append(var_id)

c = Counter(ad_var_list)
dups = [k for k, v in c.items() if v > 1]
print('Internal addition variant duplicates:', dups)
