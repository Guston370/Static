# PhoneCompare — Unresolved Candidates & Non-India Device Audit

**Audit Target:** Indian Smartphone Catalog (`Static/phonecompare/`)  
**Scope:** Device candidates investigated but excluded from the production catalog due to absence of official Indian market release, global-only availability, or unverified specifications.

---

## 1. Overview of Market Exclusion Policy

In strict accordance with the project instructions:
> *"Distinguish global launches from Indian launches. Do not include a global-only device as an India-launched model unless reliable evidence confirms its Indian launch... Do not dump speculative models into the production catalogue. Put uncertain candidates in a separate review report."*

Every candidate listed below was investigated across official manufacturer India portals, Bureau of Indian Standards (BIS) certifications, official retail channels (Flipkart, Amazon India, Reliance Digital, Croma), and tech news announcements.

---

## 2. Unresolved Candidates Ledger

| Candidate Model | Brand | Evaluated Status | Investigation Finding & Exclusion Rationale |
|---|---|---|---|
| **Xiaomi 15 Pro** | Xiaomi | `global_only` (Mainland China) | While the standard **Xiaomi 15** launched in India in March 2025, Xiaomi India officially restricted the **Xiaomi 15 Pro** to Mainland China. Excluded to maintain verified India-only integrity. |
| **Vivo X100 Ultra** | Vivo | `global_only` (Mainland China) | Released exclusively in Mainland China with a 200MP periscope sensor and Snapdragon 8 Gen 3. Vivo India confirmed that only the X100 and X100 Pro launched in the Indian market. |
| **POCO F6 Pro** | POCO | `global_only` (Europe / Global) | POCO India officially launched only the standard POCO F6 (Snapdragon 8s Gen 3) in India; the POCO F6 Pro (Snapdragon 8 Gen 2) was designated strictly for global and European regions. |
| **ASUS Zenfone 9, 10, 11 Ultra** | ASUS | `global_only` (Global) | ASUS ceased marketing non-gaming Zenfone models in India following trademark litigation over the "Zen" mark after the ASUS 8z. In India, ASUS exclusively launches the ROG Phone gaming lineup. |
| **Tecno Phantom V Fold2 5G** | Tecno | `announced_not_yet_available` | Showcased globally and previewed at trade expos; official commercial launch with Indian MRP and direct retail availability was unverified at audit date. |
| **Sony Xperia 1 VI / Xperia 5 V** | Sony | `global_only` | Sony Mobile officially exited the Indian smartphone market in 2019. Any Xperia devices present in India are third-party grey-market imports without authorized warranty or BIS certification. |
| **CMF Phone 2 / Phone 2 Pro** | CMF by Nothing | `unannounced_speculative` | CMF Phone 1 is currently the only phone released by CMF in India. Any rumors of a CMF Phone 2 Pro remain unannounced and were excluded to prevent speculative fabrication. |
| **Redmi A4 5G** | Redmi | `pending_verified_asset` | Officially announced in India (Snapdragon 4s Gen 2), but high-fidelity official manufacturer product photography from authorized CDN endpoints could not be verified with HTTP 200 without compression artifacts. Kept for subsequent asset ingestion. |
| **realme 14 Pro+ 5G** | realme | `pending_verified_asset` | Announced in India in Jan 2025, but official photography assets on authorized CDN endpoints failed direct HEAD validation. Kept for subsequent asset ingestion. |
| **Infinix Zero Flip 5G** | Infinix | `pending_verified_asset` | Infinix India's first flip foldable was previewed in late 2024, but authorized photography assets on the CDN failed direct HEAD verification. Excluded until CDN assets become available. |

---

## 3. Recommended Protocol for Future Ingestion

When new models become eligible for inclusion in the PhoneCompare Indian catalog:
1. **BIS & Official Launch Confirmation:** Confirm official press release or manufacturer India website (`.in` domain).
2. **Indian Pricing:** Capture both MRP and initial launch selling price in Indian Rupees (INR).
3. **RAM / Storage SKUs:** Verify that only Indian SKUs are added (global models often have different RAM configurations).
4. **Photography Asset Verification:** Perform an automated `HEAD` HTTP request to ensure HTTP 200 OK before committing to `mobile-images.json`.
