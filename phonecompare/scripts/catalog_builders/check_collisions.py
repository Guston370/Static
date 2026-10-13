import glob
import re

existing_files = [f for f in glob.glob('scripts/mobile_data/*.ts') if 'additions' not in f and 'index.ts' not in f and 'types' not in f]
addition_files = glob.glob('scripts/mobile_data/additions_*.ts')

def extract_model_ids(files):
    ids = {}
    for f in files:
        content = open(f, encoding='utf-8').read()
        # Find all id and slug combinations
        matches = re.findall(r'["\']?id["\']?:\s*["\']([^"\']+)["\']', content)
        for i in matches:
            if re.search(r'["\']?slug["\']?:\s*["\']' + re.escape(i) + r'["\']', content):
                ids[i] = f
    return ids

ex = extract_model_ids(existing_files)
ad = extract_model_ids(addition_files)

coll = set(ex.keys()) & set(ad.keys())
print('Total existing models:', len(ex))
print('Total addition models:', len(ad))
print('Collisions between existing and additions:', coll)

# Check internal duplicates in additions
ad_all = []
for f in addition_files:
    content = open(f, encoding='utf-8').read()
    matches = re.findall(r'["\']?id["\']?:\s*["\']([^"\']+)["\']', content)
    for i in matches:
        if re.search(r'["\']?slug["\']?:\s*["\']' + re.escape(i) + r'["\']', content):
            ad_all.append((i, f))

from collections import Counter
c = Counter(i[0] for i in ad_all)
dups = [k for k, v in c.items() if v > 1]
print('Internal addition duplicates:', dups)

print('\nTotal models if combined:', len(ex) + len(ad))
