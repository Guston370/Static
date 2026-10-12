with open('scripts/audit_mobile_catalog.ts', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Samsung
c = c.replace(
    "      'Galaxy S25 Ultra',\n      'Galaxy S25+',\n      'Galaxy S25',",
    "      'Galaxy S25 Ultra',\n      'Galaxy S25+',\n      'Galaxy S25',\n      'Galaxy S25 FE',"
)

c = c.replace(
    "      'Galaxy A55 5G',\n      'Galaxy A54 5G',\n      'Galaxy A35 5G',",
    "      'Galaxy A55 5G',\n      'Galaxy A54 5G',\n      'Galaxy A36 5G',\n      'Galaxy A35 5G',"
)

# 2. Apple
c = c.replace(
    "      'iPhone 16 Pro Max',\n      'iPhone 16 Pro',\n      'iPhone 16 Plus',\n      'iPhone 16',",
    "      'iPhone 16 Pro Max',\n      'iPhone 16 Pro',\n      'iPhone 16 Plus',\n      'iPhone 16',\n      'iPhone 16e',"
)

# 3. Google
c = c.replace(
    "      'Pixel 9 Pro Fold',\n      'Pixel 8a',",
    "      'Pixel 9 Pro Fold',\n      'Pixel 9a',\n      'Pixel 8a',"
)

# 4. Xiaomi
c = c.replace(
    "      'Xiaomi 14 Ultra',\n      'Xiaomi 14',",
    "      'Xiaomi 15',\n      'Xiaomi 14 Ultra',\n      'Xiaomi 14',"
)

# 5. POCO
c = c.replace(
    "      'POCO X6 Pro 5G',\n      'POCO X6 5G',",
    "      'POCO X7 Pro 5G',\n      'POCO X7 5G',\n      'POCO X6 Pro 5G',\n      'POCO X6 5G',"
)

# 6. Vivo
c = c.replace(
    "      'Vivo Y200 5G',\n      'Vivo Y28 5G',",
    "      'Vivo Y300 5G',\n      'Vivo Y200 5G',\n      'Vivo Y28 5G',"
)

# 7. iQOO
c = c.replace(
    "      'iQOO Z9 5G',\n      'iQOO Z9x 5G',",
    "      'iQOO Z9 5G',\n      'iQOO Z9x 5G',\n      'iQOO Z9 Lite 5G',"
)

# 8. Motorola
c = c.replace(
    "      'Motorola Razr 50 Ultra',\n      'Motorola Razr 40 Ultra',",
    "      'Motorola Razr 50 Ultra',\n      'Motorola Razr 50',\n      'Motorola Razr 40 Ultra',"
)
c = c.replace(
    "      'Motorola Edge 50 Ultra',\n      'Motorola Edge 50 Pro',\n      'Motorola Edge 50 Fusion',\n      'Motorola Edge 50 Neo',",
    "      'Motorola Edge 50 Ultra',\n      'Motorola Edge 50 Pro',\n      'Motorola Edge 50',\n      'Motorola Edge 50 Fusion',\n      'Motorola Edge 50 Neo',"
)

# 9. Nothing
c = c.replace(
    "      'Nothing Phone (2)',\n      'Nothing Phone (2a) Plus',",
    "      'Nothing Phone (3)',\n      'Nothing Phone (3a)',\n      'Nothing Phone (2)',\n      'Nothing Phone (2a) Plus',"
)

# 10. Lava
c = c.replace(
    "      'Lava Agni 3 5G',\n      'Lava Agni 5G',",
    "      'Lava Agni 3 5G',\n      'Lava Agni 2 5G',\n      'Lava Agni 5G',"
)

# 11. HMD
c = c.replace(
    "      'HMD Skyline',\n      'HMD Crest Max 5G',",
    "      'HMD Skyline',\n      'HMD Fusion',\n      'HMD Crest Max 5G',"
)

# SERIES_AUDIT_DATA updates
c = c.replace(
    "{ brand: 'Samsung', series: 'Galaxy S Series', knownGenerations: 'S25, S24, S23, S22 Ultra, S21 FE', modelsDiscovered: 12, modelsInDataset: 12, missingModelsAdded: 12, sourcesChecked: 'Samsung India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'Samsung', series: 'Galaxy S Series', knownGenerations: 'S25 Ultra/+/Base/FE, S24 Ultra/+/Base/FE, S23 Ultra/Base/FE, S22 Ultra, S21 FE', modelsDiscovered: 13, modelsInDataset: 13, missingModelsAdded: 13, sourcesChecked: 'Samsung India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'Samsung', series: 'Galaxy A Series', knownGenerations: 'A55/A54, A35/A34, A25, A16, A15, A06', modelsDiscovered: 8, modelsInDataset: 8, missingModelsAdded: 8, sourcesChecked: 'Samsung India, Reliance Digital', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'Samsung', series: 'Galaxy A Series', knownGenerations: 'A55/A54, A36/A35/A34, A25, A16, A15, A06', modelsDiscovered: 9, modelsInDataset: 9, missingModelsAdded: 9, sourcesChecked: 'Samsung India, Reliance Digital', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'Apple', series: 'iPhone Standard/Plus/mini', knownGenerations: '16/Plus, 15/Plus, 14/Plus, 13/mini, 12', modelsDiscovered: 9, modelsInDataset: 9, missingModelsAdded: 9, sourcesChecked: 'Apple India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'Apple', series: 'iPhone Standard/Plus/mini', knownGenerations: '16e, 16/Plus, 15/Plus, 14/Plus, 13/mini, 12', modelsDiscovered: 10, modelsInDataset: 10, missingModelsAdded: 10, sourcesChecked: 'Apple India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'Google', series: 'Pixel Base & A Series', knownGenerations: '9, 8, 8a, 7, 7a, 6a', modelsDiscovered: 6, modelsInDataset: 6, missingModelsAdded: 6, sourcesChecked: 'Google Store IN, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'Google', series: 'Pixel Base & A Series', knownGenerations: '9/9a, 8/8a, 7/7a, 6a', modelsDiscovered: 7, modelsInDataset: 7, missingModelsAdded: 7, sourcesChecked: 'Google Store IN, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'Xiaomi', series: 'Xiaomi Flagships', knownGenerations: '14 Ultra, 14, 13 Pro, 12 Pro', modelsDiscovered: 4, modelsInDataset: 4, missingModelsAdded: 4, sourcesChecked: 'Mi India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'Xiaomi 15 waiting for official IN launch date' },",
    "{ brand: 'Xiaomi', series: 'Xiaomi Flagships', knownGenerations: '15, 14 Ultra, 14, 13 Pro, 12 Pro', modelsDiscovered: 5, modelsInDataset: 5, missingModelsAdded: 5, sourcesChecked: 'Mi India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'POCO', series: 'X Series', knownGenerations: 'X6 Pro, X6, X6 Neo, X5 Pro', modelsDiscovered: 4, modelsInDataset: 4, missingModelsAdded: 4, sourcesChecked: 'POCO India, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'POCO', series: 'X Series', knownGenerations: 'X7 Pro/X7, X6 Pro, X6, X6 Neo, X5 Pro', modelsDiscovered: 6, modelsInDataset: 6, missingModelsAdded: 6, sourcesChecked: 'POCO India, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'Vivo', series: 'T & Y Series', knownGenerations: 'T3 Ultra, T3 Pro, T3, T3x, T3 Lite, Y200, Y28', modelsDiscovered: 7, modelsInDataset: 7, missingModelsAdded: 7, sourcesChecked: 'Vivo India, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'Vivo', series: 'T & Y Series', knownGenerations: 'T3 Ultra, T3 Pro, T3, T3x, T3 Lite, Y300, Y200, Y28', modelsDiscovered: 8, modelsInDataset: 8, missingModelsAdded: 8, sourcesChecked: 'Vivo India, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'iQOO', series: 'Z Series', knownGenerations: 'Z9s Pro, Z9s, Z9, Z9x', modelsDiscovered: 4, modelsInDataset: 4, missingModelsAdded: 4, sourcesChecked: 'iQOO India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'iQOO', series: 'Z Series', knownGenerations: 'Z9s Pro, Z9s, Z9, Z9x, Z9 Lite', modelsDiscovered: 5, modelsInDataset: 5, missingModelsAdded: 5, sourcesChecked: 'iQOO India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'Motorola', series: 'Razr Series', knownGenerations: 'Razr 50 Ultra, Razr 40 Ultra', modelsDiscovered: 2, modelsInDataset: 2, missingModelsAdded: 2, sourcesChecked: 'Motorola India, Reliance Digital', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'Motorola', series: 'Razr Series', knownGenerations: 'Razr 50 Ultra/50, Razr 40 Ultra', modelsDiscovered: 3, modelsInDataset: 3, missingModelsAdded: 3, sourcesChecked: 'Motorola India, Reliance Digital', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'Motorola', series: 'Edge Series', knownGenerations: 'Edge 50 Ultra/Pro/Fusion/Neo, Edge 40/Neo, Edge 30 Ultra/Fusion/Pro', modelsDiscovered: 9, modelsInDataset: 9, missingModelsAdded: 9, sourcesChecked: 'Motorola India, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'Motorola', series: 'Edge Series', knownGenerations: 'Edge 50 Ultra/Pro/Base/Fusion/Neo, Edge 40/Neo, Edge 30 Ultra/Fusion/Pro', modelsDiscovered: 10, modelsInDataset: 10, missingModelsAdded: 10, sourcesChecked: 'Motorola India, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'Nothing', series: 'Phone Series', knownGenerations: 'Phone (2), (2a) Plus, (2a), (1)', modelsDiscovered: 4, modelsInDataset: 4, missingModelsAdded: 4, sourcesChecked: 'Nothing India, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'Nothing', series: 'Phone Series', knownGenerations: 'Phone (3), (3a), (2), (2a) Plus, (2a), (1)', modelsDiscovered: 6, modelsInDataset: 6, missingModelsAdded: 6, sourcesChecked: 'Nothing India, Flipkart', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'Lava', series: 'Agni Series', knownGenerations: 'Agni 3 5G, Agni 5G', modelsDiscovered: 2, modelsInDataset: 2, missingModelsAdded: 2, sourcesChecked: 'Lava India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'Lava', series: 'Agni Series', knownGenerations: 'Agni 3 5G, Agni 2 5G, Agni 5G', modelsDiscovered: 3, modelsInDataset: 3, missingModelsAdded: 3, sourcesChecked: 'Lava India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

c = c.replace(
    "{ brand: 'HMD', series: 'Skyline & Crest Series', knownGenerations: 'Skyline, Crest Max 5G, Crest 5G', modelsDiscovered: 3, modelsInDataset: 3, missingModelsAdded: 3, sourcesChecked: 'HMD India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },",
    "{ brand: 'HMD', series: 'Skyline & Crest Series', knownGenerations: 'Skyline, Fusion, Crest Max 5G, Crest 5G', modelsDiscovered: 4, modelsInDataset: 4, missingModelsAdded: 4, sourcesChecked: 'HMD India, Amazon IN', auditStatus: 'Complete', unresolvedGaps: 'None' },"
)

# Update UNRESOLVED_ITEMS for Xiaomi 15
c = c.replace(
    """  {
    modelCandidate: 'Xiaomi 15 & Xiaomi 15 Pro',
    brand: 'Xiaomi',
    status: 'global_only',
    reason: 'Launched in China late 2024; official Indian BIS certification and MRP launch pending as of audit date. Excluded to preserve verified Indian market constraint.',
  },""",
    """  {
    modelCandidate: 'Xiaomi 15 Pro',
    brand: 'Xiaomi',
    status: 'global_only',
    reason: 'Mainland China exclusive flagship; Xiaomi India launched the standard Xiaomi 15 in March 2025, while 15 Pro was not launched in India.',
  },"""
)

with open('scripts/audit_mobile_catalog.ts', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated audit_mobile_catalog.ts successfully!')
