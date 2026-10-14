'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Filter,
  Check,
} from 'lucide-react';
import { MobileCard } from '@/components/MobileCard';
import { getAllMobiles, getAllMobileBrands } from '@/lib/mobiles';
import { PriceRangeSlider, formatPriceDisplay } from '@/components/pricing/PriceRangeSlider';

const PAGE_SIZE = 24;

const PRICE_MIN_LIMIT = 5000;
const PRICE_MAX_LIMIT = 180000;

const RAM_OPTIONS = ['4GB', '6GB', '8GB', '12GB', '16GB'];
const STORAGE_OPTIONS = ['64GB', '128GB', '256GB', '512GB', '1TB'];
const DISPLAY_TECH_OPTIONS = ['AMOLED', 'OLED', 'LCD'];
const REFRESH_RATE_OPTIONS = [60, 90, 120, 144];
const CHIPSET_FAMILIES = [
  { label: 'Snapdragon', keyword: 'snapdragon' },
  { label: 'MediaTek Dimensity', keyword: 'dimensity' },
  { label: 'Apple A-Series', keyword: 'apple' },
  { label: 'Google Tensor', keyword: 'tensor' },
  { label: 'Exynos', keyword: 'exynos' },
];

const BATTERY_TIERS = [
  { label: '5000 mAh & above', min: 5000, max: 99999 },
  { label: '6000 mAh & above (High Endurance)', min: 6000, max: 99999 },
  { label: 'Compact (< 5000 mAh)', min: 0, max: 4999 },
];

const CHARGING_TIERS = [
  { label: '33W+ Fast Charging', minWatts: 33 },
  { label: '67W+ Superfast', minWatts: 67 },
  { label: '100W+ Ultra-rapid', minWatts: 100 },
];

const CAMERA_TIERS = [
  { label: '50MP+ Primary', minMp: 50 },
  { label: '108MP+ Ultra-res', minMp: 108 },
  { label: '200MP Flagship', minMp: 200 },
];

function FilterSection({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1rem', marginBottom: '1rem' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0 0 0.75rem',
          fontWeight: 600,
          fontSize: '0.82rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--color-text-tertiary)',
        }}
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDown
          size={14}
          style={{
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 150ms',
          }}
        />
      </button>
      {open && children}
    </div>
  );
}

export function MobileFilters() {
  const searchParams = useSearchParams();
  const allMobiles = useMemo(() => getAllMobiles(), []);
  const allBrands = useMemo(() => getAllMobileBrands(), []);

  // Initial params
  const initialQuery = searchParams.get('q') || searchParams.get('search') || '';
  const initialBrand = searchParams.get('brand') ? searchParams.get('brand')!.split(',') : [];
  const initialMinPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!, 10) : PRICE_MIN_LIMIT;
  const initialMaxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!, 10) : PRICE_MAX_LIMIT;
  const initialRam = searchParams.get('ram') ? searchParams.get('ram')!.split(',') : [];
  const initialStorage = searchParams.get('storage') ? searchParams.get('storage')!.split(',') : [];
  const initialStatus = searchParams.get('status') || 'all';
  const initial5G = searchParams.get('has5G') === 'true';

  // Filter States
  const [query, setQuery] = useState(initialQuery);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrand);
  const [priceMin, setPriceMin] = useState(isNaN(initialMinPrice) ? PRICE_MIN_LIMIT : initialMinPrice);
  const [priceMax, setPriceMax] = useState(isNaN(initialMaxPrice) ? PRICE_MAX_LIMIT : initialMaxPrice);
  const [selectedRam, setSelectedRam] = useState<string[]>(initialRam);
  const [selectedStorage, setSelectedStorage] = useState<string[]>(initialStorage);
  const [selectedDisplayTech, setSelectedDisplayTech] = useState<string[]>([]);
  const [selectedRefresh, setSelectedRefresh] = useState<number[]>([]);
  const [selectedChipsets, setSelectedChipsets] = useState<string[]>([]);
  const [selectedBatteryIndex, setSelectedBatteryIndex] = useState<number | null>(null);
  const [selectedChargingWatts, setSelectedChargingWatts] = useState<number | null>(null);
  const [selectedCameraMp, setSelectedCameraMp] = useState<number | null>(null);
  const [requireOis, setRequireOis] = useState(false);
  const [only5G, setOnly5G] = useState(initial5G);
  const [selectedOS, setSelectedOS] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string>(initialStatus);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-asc' | 'price-desc' | 'battery' | 'name-asc'>('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Brand count map
  const brandCountMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const m of allMobiles) {
      map.set(m.brand, (map.get(m.brand) || 0) + 1);
    }
    return map;
  }, [allMobiles]);

  // Sync URL query params with state
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (selectedBrands.length > 0) params.set('brand', selectedBrands.join(','));
    if (priceMin > PRICE_MIN_LIMIT) params.set('minPrice', priceMin.toString());
    if (priceMax < PRICE_MAX_LIMIT) params.set('maxPrice', priceMax.toString());
    if (selectedRam.length > 0) params.set('ram', selectedRam.join(','));
    if (selectedStorage.length > 0) params.set('storage', selectedStorage.join(','));
    if (only5G) params.set('has5G', 'true');
    if (selectedAvailability !== 'all') params.set('status', selectedAvailability);

    const queryString = params.toString();
    const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  }, [query, selectedBrands, priceMin, priceMax, selectedRam, selectedStorage, only5G, selectedAvailability]);

  // Reset pagination on filter change
  const filterSignature = `${query}|${selectedBrands.join()}|${priceMin}|${priceMax}|${selectedRam.join()}|${selectedStorage.join()}|${selectedDisplayTech.join()}|${selectedRefresh.join()}|${selectedChipsets.join()}|${selectedBatteryIndex}|${selectedChargingWatts}|${selectedCameraMp}|${requireOis}|${only5G}|${selectedOS.join()}|${selectedAvailability}|${sortBy}`;
  const [prevFilterSig, setPrevFilterSig] = useState(filterSignature);
  if (prevFilterSig !== filterSignature) {
    setPrevFilterSig(filterSignature);
    setCurrentPage(1);
  }

  // Multi-select toggle helpers
  const toggleItem = (list: string[], item: string, setter: (val: string[]) => void) => {
    setter(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  };
  const toggleNumItem = (list: number[], item: number, setter: (val: number[]) => void) => {
    setter(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  };

  // Main Filtering Logic
  const filteredMobiles = useMemo(() => {
    return allMobiles.filter((m) => {
      // 1. Availability Status
      if (selectedAvailability === 'active' && m.status !== 'active') return false;
      if (selectedAvailability === 'discontinued' && m.status !== 'discontinued') return false;
      if (selectedAvailability === 'upcoming' && m.status !== 'upcoming') return false;

      // 2. Query Search
      if (query.trim()) {
        const q = query.toLowerCase().trim();
        const searchable = `${m.brand} ${m.modelName} ${m.id} ${m.slug} ${m.performance?.chipset || ''} ${m.software?.operatingSystem || ''}`.toLowerCase();
        const words = q.split(/[\s,]+/).filter(Boolean);
        const match = words.every((w) => searchable.includes(w));
        if (!match) return false;
      }

      // 3. Brands
      if (selectedBrands.length > 0 && !selectedBrands.includes(m.brand)) {
        return false;
      }

      // 4. Price Bounds (using effective startingPrice or currentPrice)
      const effectivePrice = m.pricing?.currentPrice || m.pricing?.startingPrice || 0;
      if (effectivePrice > 0) {
        if (effectivePrice < priceMin || effectivePrice > priceMax) {
          return false;
        }
      }

      // 5. RAM
      if (selectedRam.length > 0) {
        const phoneRams = m.performance?.ramOptions || [];
        const hasMatchingRam = selectedRam.some((r) =>
          phoneRams.some((pr) => pr.toLowerCase().includes(r.toLowerCase()))
        );
        if (!hasMatchingRam) return false;
      }

      // 6. Storage
      if (selectedStorage.length > 0) {
        const phoneStorages = m.performance?.storageOptions || [];
        const hasMatchingStorage = selectedStorage.some((s) =>
          phoneStorages.some((ps) => ps.toLowerCase().includes(s.toLowerCase()))
        );
        if (!hasMatchingStorage) return false;
      }

      // 7. Display Technology
      if (selectedDisplayTech.length > 0) {
        const dType = (m.display?.displayType || '').toLowerCase();
        const matchesTech = selectedDisplayTech.some((dt) => dType.includes(dt.toLowerCase()));
        if (!matchesTech) return false;
      }

      // 8. Refresh Rate
      if (selectedRefresh.length > 0) {
        const phoneHz = m.display?.refreshRate;
        if (!phoneHz || !selectedRefresh.includes(phoneHz)) return false;
      }

      // 9. Chipset Family
      if (selectedChipsets.length > 0) {
        const phoneChipset = (m.performance?.chipset || '').toLowerCase();
        const matchesChip = selectedChipsets.some((c) => phoneChipset.includes(c.toLowerCase()));
        if (!matchesChip) return false;
      }

      // 10. Battery Tier
      if (selectedBatteryIndex !== null) {
        const tier = BATTERY_TIERS[selectedBatteryIndex];
        const capacity = m.battery?.batteryCapacity || 0;
        if (capacity < tier.min || capacity > tier.max) return false;
      }

      // 11. Charging Speed
      if (selectedChargingWatts !== null) {
        const watts = m.battery?.wiredCharging || 0;
        if (watts < selectedChargingWatts) return false;
      }

      // 12. Camera Megapixels & OIS
      if (selectedCameraMp !== null) {
        const mainCamStr = m.cameras?.mainCamera || '';
        const match = mainCamStr.match(/(\d+)\s*MP/i);
        const mp = match ? parseInt(match[1], 10) : 0;
        if (mp < selectedCameraMp) return false;
      }

      if (requireOis) {
        const hasOis = m.cameras?.ois || (m.cameras?.mainCamera || '').toLowerCase().includes('ois');
        if (!hasOis) return false;
      }

      // 13. 5G Connectivity
      if (only5G && !m.connectivity?.has5G) {
        return false;
      }

      // 14. Operating System
      if (selectedOS.length > 0) {
        const os = (m.software?.operatingSystem || '').toLowerCase();
        const matchesOS = selectedOS.some((o) => os.includes(o.toLowerCase()));
        if (!matchesOS) return false;
      }

      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return (a.pricing?.startingPrice || 0) - (b.pricing?.startingPrice || 0);
        case 'price-desc':
          return (b.pricing?.startingPrice || 0) - (a.pricing?.startingPrice || 0);
        case 'battery':
          return (b.battery?.batteryCapacity || 0) - (a.battery?.batteryCapacity || 0);
        case 'name-asc':
          return `${a.brand} ${a.modelName}`.localeCompare(`${b.brand} ${b.modelName}`);
        case 'popularity':
        default:
          return 0; // retain catalog order
      }
    });
  }, [
    allMobiles,
    selectedAvailability,
    query,
    selectedBrands,
    priceMin,
    priceMax,
    selectedRam,
    selectedStorage,
    selectedDisplayTech,
    selectedRefresh,
    selectedChipsets,
    selectedBatteryIndex,
    selectedChargingWatts,
    selectedCameraMp,
    requireOis,
    only5G,
    selectedOS,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredMobiles.length / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * PAGE_SIZE;
  const visibleMobiles = filteredMobiles.slice(startIndex, startIndex + PAGE_SIZE);

  const clearAllFilters = useCallback(() => {
    setQuery('');
    setSelectedBrands([]);
    setPriceMin(PRICE_MIN_LIMIT);
    setPriceMax(PRICE_MAX_LIMIT);
    setSelectedRam([]);
    setSelectedStorage([]);
    setSelectedDisplayTech([]);
    setSelectedRefresh([]);
    setSelectedChipsets([]);
    setSelectedBatteryIndex(null);
    setSelectedChargingWatts(null);
    setSelectedCameraMp(null);
    setRequireOis(false);
    setOnly5G(false);
    setSelectedOS([]);
    setSelectedAvailability('all');
    setSortBy('popularity');
    setCurrentPage(1);
  }, []);

  const hasActiveFilters =
    Boolean(query) ||
    selectedBrands.length > 0 ||
    priceMin > PRICE_MIN_LIMIT ||
    priceMax < PRICE_MAX_LIMIT ||
    selectedRam.length > 0 ||
    selectedStorage.length > 0 ||
    selectedDisplayTech.length > 0 ||
    selectedRefresh.length > 0 ||
    selectedChipsets.length > 0 ||
    selectedBatteryIndex !== null ||
    selectedChargingWatts !== null ||
    selectedCameraMp !== null ||
    requireOis ||
    only5G ||
    selectedOS.length > 0 ||
    selectedAvailability !== 'all';

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const renderSidebarContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {/* Price Dual-Handle Range Slider */}
      <FilterSection title="Budget Range">
        <PriceRangeSlider
          minLimit={PRICE_MIN_LIMIT}
          maxLimit={PRICE_MAX_LIMIT}
          minValue={priceMin}
          maxValue={priceMax}
          step={1000}
          formatType="inr"
          onChange={(min, max) => {
            setPriceMin(min);
            setPriceMax(max);
          }}
          onReset={() => {
            setPriceMin(PRICE_MIN_LIMIT);
            setPriceMax(PRICE_MAX_LIMIT);
          }}
        />
      </FilterSection>

      {/* Brand Selection */}
      <FilterSection title="Brand">
        <div style={{ maxHeight: '220px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingRight: '0.4rem' }}>
          {allBrands.map((brand) => {
            const count = brandCountMap.get(brand) || 0;
            const isChecked = selectedBrands.includes(brand);
            return (
              <label
                key={brand}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  fontSize: '0.86rem',
                  padding: '0.3rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isChecked ? 'var(--color-surface-inset)' : 'transparent',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleItem(selectedBrands, brand, setSelectedBrands)}
                    style={{ accentColor: 'var(--color-accent)' }}
                  />
                  <span style={{ color: isChecked ? 'var(--color-accent)' : 'var(--color-text-primary)', fontWeight: isChecked ? 600 : 400 }}>
                    {brand}
                  </span>
                </div>
                <span style={{ fontSize: '0.74rem', color: 'var(--color-text-tertiary)' }}>
                  {count}
                </span>
              </label>
            );
          })}
        </div>
      </FilterSection>

      {/* RAM Options */}
      <FilterSection title="RAM Capacity">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {RAM_OPTIONS.map((ram) => {
            const active = selectedRam.includes(ram);
            return (
              <button
                key={ram}
                type="button"
                onClick={() => toggleItem(selectedRam, ram, setSelectedRam)}
                className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.7rem', fontSize: '0.8rem' }}
              >
                {ram}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Storage Options */}
      <FilterSection title="Internal Storage">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {STORAGE_OPTIONS.map((storage) => {
            const active = selectedStorage.includes(storage);
            return (
              <button
                key={storage}
                type="button"
                onClick={() => toggleItem(selectedStorage, storage, setSelectedStorage)}
                className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.7rem', fontSize: '0.8rem' }}
              >
                {storage}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Display & Refresh Rate */}
      <FilterSection title="Display & Screen">
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.76rem', color: 'var(--color-text-tertiary)', marginBottom: '0.4rem' }}>Display Panel</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {DISPLAY_TECH_OPTIONS.map((tech) => {
              const active = selectedDisplayTech.includes(tech);
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => toggleItem(selectedDisplayTech, tech, setSelectedDisplayTech)}
                  className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem' }}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.76rem', color: 'var(--color-text-tertiary)', marginBottom: '0.4rem' }}>Refresh Rate</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {REFRESH_RATE_OPTIONS.map((hz) => {
              const active = selectedRefresh.includes(hz);
              return (
                <button
                  key={hz}
                  type="button"
                  onClick={() => toggleNumItem(selectedRefresh, hz, setSelectedRefresh)}
                  className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem' }}
                >
                  {hz}Hz
                </button>
              );
            })}
          </div>
        </div>
      </FilterSection>

      {/* Processor Family */}
      <FilterSection title="Processor / Chipset">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {CHIPSET_FAMILIES.map((c) => {
            const isChecked = selectedChipsets.includes(c.keyword);
            return (
              <label
                key={c.keyword}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  color: isChecked ? 'var(--color-accent)' : 'var(--color-text-primary)',
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(selectedChipsets, c.keyword, setSelectedChipsets)}
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                {c.label}
              </label>
            );
          })}
        </div>
      </FilterSection>

      {/* Battery & Charging */}
      <FilterSection title="Battery & Power">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {BATTERY_TIERS.map((tier, idx) => (
            <label
              key={tier.label}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}
            >
              <input
                type="radio"
                name="batteryTier"
                checked={selectedBatteryIndex === idx}
                onChange={() => setSelectedBatteryIndex(selectedBatteryIndex === idx ? null : idx)}
                onClick={() => {
                  if (selectedBatteryIndex === idx) setSelectedBatteryIndex(null);
                }}
                style={{ accentColor: 'var(--color-accent)' }}
              />
              {tier.label}
            </label>
          ))}
        </div>

        <div>
          <div style={{ fontSize: '0.76rem', color: 'var(--color-text-tertiary)', marginBottom: '0.4rem' }}>Fast Charging</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {CHARGING_TIERS.map((tier) => {
              const active = selectedChargingWatts === tier.minWatts;
              return (
                <button
                  key={tier.label}
                  type="button"
                  onClick={() => setSelectedChargingWatts(active ? null : tier.minWatts)}
                  className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.3rem 0.6rem', fontSize: '0.76rem' }}
                >
                  {tier.minWatts}W+
                </button>
              );
            })}
          </div>
        </div>
      </FilterSection>

      {/* Camera & Optics */}
      <FilterSection title="Camera & Optics">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {CAMERA_TIERS.map((tier) => {
            const active = selectedCameraMp === tier.minMp;
            return (
              <label
                key={tier.label}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}
              >
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => setSelectedCameraMp(active ? null : tier.minMp)}
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                {tier.label}
              </label>
            );
          })}
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}>
          <input
            type="checkbox"
            checked={requireOis}
            onChange={(e) => setRequireOis(e.target.checked)}
            style={{ accentColor: 'var(--color-accent)' }}
          />
          Optical Image Stabilization (OIS)
        </label>
      </FilterSection>

      {/* Connectivity & OS */}
      <FilterSection title="Connectivity & Platform">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}>
            <input
              type="checkbox"
              checked={only5G}
              onChange={(e) => setOnly5G(e.target.checked)}
              style={{ accentColor: 'var(--color-accent)' }}
            />
            5G Enabled Only
          </label>
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem' }}>
            {['Android', 'iOS'].map((os) => {
              const active = selectedOS.includes(os);
              return (
                <button
                  key={os}
                  type="button"
                  onClick={() => toggleItem(selectedOS, os, setSelectedOS)}
                  className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ flex: 1, padding: '0.35rem 0.5rem', fontSize: '0.8rem', justifyContent: 'center' }}
                >
                  {os}
                </button>
              );
            })}
          </div>
        </div>
      </FilterSection>

      {/* Catalog Status */}
      <FilterSection title="Status" defaultOpen={false}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {[
            { id: 'all', label: 'All Models' },
            { id: 'active', label: 'In Production (Active)' },
            { id: 'upcoming', label: 'Upcoming in India' },
            { id: 'discontinued', label: 'Discontinued / Legacy' },
          ].map((status) => (
            <label
              key={status.id}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}
            >
              <input
                type="radio"
                name="availabilityStatus"
                checked={selectedAvailability === status.id}
                onChange={() => setSelectedAvailability(status.id)}
                style={{ accentColor: 'var(--color-accent)' }}
              />
              {status.label}
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <div>
      {/* ── Top Bar: Search, Quick Stats, Sort, and Mobile Toggle ── */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
        }}
      >
        {/* Search Field */}
        <div style={{ position: 'relative', flex: '1 1 320px', minWidth: '240px' }}>
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-tertiary)',
            }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search phones by brand, model, processor, or specs..."
            className="input"
            style={{ paddingLeft: '2.75rem', paddingRight: query ? '2.5rem' : '1rem' }}
            aria-label="Search smartphones"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-tertiary)',
                padding: '0.25rem',
              }}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Sort and Mobile Filter Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Mobile Filter Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="btn btn-secondary mobile-filter-btn"
            style={{ display: 'none', gap: '0.4rem', padding: '0.625rem 1rem' }}
            aria-label="Open filter drawer"
          >
            <SlidersHorizontal size={16} />
            Filters {hasActiveFilters && '•'}
          </button>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-tertiary)', whiteSpace: 'nowrap' }}>
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="input"
              style={{ width: 'auto', padding: '0.55rem 0.85rem', fontSize: '0.86rem', cursor: 'pointer' }}
              aria-label="Sort smartphones"
            >
              <option value="popularity">Catalog Popularity</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="battery">Battery Capacity</option>
              <option value="name-asc">Model Name (A–Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── Active Filter Chips Row ── */}
      {hasActiveFilters && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '0.75rem 1rem',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-neu-card)',
          }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginRight: '0.25rem' }}>
            Active Filters ({filteredMobiles.length} matches):
          </span>

          {query && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              Search: &quot;{query}&quot;
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setQuery('')} />
            </span>
          )}

          {(priceMin > PRICE_MIN_LIMIT || priceMax < PRICE_MAX_LIMIT) && (
            <span className="badge badge-accent" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {formatPriceDisplay(priceMin)} – {formatPriceDisplay(priceMax)}
              <X
                size={12}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setPriceMin(PRICE_MIN_LIMIT);
                  setPriceMax(PRICE_MAX_LIMIT);
                }}
              />
            </span>
          )}

          {selectedBrands.map((b) => (
            <span key={b} className="badge badge-accent" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {b}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedBrands, b, setSelectedBrands)} />
            </span>
          ))}

          {selectedRam.map((r) => (
            <span key={r} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {r} RAM
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedRam, r, setSelectedRam)} />
            </span>
          ))}

          {selectedStorage.map((s) => (
            <span key={s} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {s} Storage
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedStorage, s, setSelectedStorage)} />
            </span>
          ))}

          {selectedDisplayTech.map((dt) => (
            <span key={dt} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {dt}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedDisplayTech, dt, setSelectedDisplayTech)} />
            </span>
          ))}

          {selectedRefresh.map((hz) => (
            <span key={hz} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {hz}Hz
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleNumItem(selectedRefresh, hz, setSelectedRefresh)} />
            </span>
          ))}

          {only5G && (
            <span className="badge badge-success" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              5G Only
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setOnly5G(false)} />
            </span>
          )}

          {selectedBatteryIndex !== null && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {BATTERY_TIERS[selectedBatteryIndex].label}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedBatteryIndex(null)} />
            </span>
          )}

          {selectedChargingWatts !== null && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {selectedChargingWatts}W+ Charging
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedChargingWatts(null)} />
            </span>
          )}

          {requireOis && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              OIS Stabilized
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setRequireOis(false)} />
            </span>
          )}

          {selectedAvailability !== 'all' && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem', textTransform: 'capitalize' }}>
              Status: {selectedAvailability}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedAvailability('all')} />
            </span>
          )}

          <button
            type="button"
            onClick={clearAllFilters}
            className="btn btn-ghost btn-sm"
            style={{ marginLeft: 'auto', color: 'var(--color-danger)', gap: '0.25rem' }}
          >
            <RotateCcw size={12} /> Clear All
          </button>
        </div>
      )}

      {/* ── Main Layout: Sidebar + Product Grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem', alignItems: 'start' }} className="filter-layout-grid">
        {/* Desktop Filter Sidebar */}
        <aside
          className="filter-sidebar card"
          style={{
            padding: '1.5rem',
            position: 'sticky',
            top: '80px',
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto',
          }}
          aria-label="Filter options"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Filters
            </h2>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="btn btn-ghost btn-sm"
                style={{ fontSize: '0.78rem', padding: '0.2rem 0.5rem' }}
              >
                Reset
              </button>
            )}
          </div>
          {renderSidebarContent()}
        </aside>

        {/* Mobile Filter Drawer Modal */}
        {mobileFilterOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Filters"
          >
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                height: '100%',
                background: 'var(--color-bg)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-dropdown)',
              }}
            >
              {/* Drawer Header */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--color-surface)',
                }}
              >
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Filter Smartphones
                </div>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="btn btn-ghost btn-sm"
                  aria-label="Close filters"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Body */}
              <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
                {renderSidebarContent()}
              </div>

              {/* Drawer Footer */}
              <div
                style={{
                  padding: '1rem 1.5rem',
                  borderTop: '1px solid var(--color-border)',
                  display: 'flex',
                  gap: '0.75rem',
                  background: 'var(--color-surface)',
                }}
              >
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="btn btn-secondary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="btn btn-primary"
                  style={{ flex: 2, justifyContent: 'center' }}
                >
                  Show {filteredMobiles.length} Phones
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Products Grid & Pagination ── */}
        <div style={{ minWidth: 0 }}>
          {filteredMobiles.length === 0 ? (
            <div
              className="card"
              style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--color-surface-inset)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                <Filter size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                No smartphones match your filters
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px', fontSize: '0.92rem' }}>
                Try relaxing your price range or clearing specific filter criteria to browse available models.
              </p>
              <button type="button" onClick={clearAllFilters} className="btn btn-primary">
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              {/* Results summary text */}
              <div style={{ marginBottom: '1rem', fontSize: '0.86rem', color: 'var(--color-text-tertiary)' }}>
                Showing <strong>{startIndex + 1}</strong> – <strong>{Math.min(startIndex + PAGE_SIZE, filteredMobiles.length)}</strong> of <strong>{filteredMobiles.length}</strong> smartphones
              </div>

              {/* Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                {visibleMobiles.map((mobile) => (
                  <MobileCard key={mobile.id} mobile={mobile} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    padding: '1.5rem 0',
                  }}
                  aria-label="Pagination"
                >
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    disabled={safeCurrentPage <= 1}
                    onClick={() => handlePageChange(Math.max(1, safeCurrentPage - 1))}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={14} /> Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    const isCurrent = page === safeCurrentPage;
                    const isNear = Math.abs(page - safeCurrentPage) <= 2;
                    const isEdge = page === 1 || page === totalPages;

                    if (!isNear && !isEdge) {
                      if (page === 2 || page === totalPages - 1) {
                        return (
                          <span key={page} style={{ padding: '0 4px', color: 'var(--color-text-tertiary)' }}>
                            …
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={`btn btn-sm ${isCurrent ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ minWidth: '36px', justifyContent: 'center' }}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    disabled={safeCurrentPage >= totalPages}
                    onClick={() => handlePageChange(Math.min(totalPages, safeCurrentPage + 1))}
                    aria-label="Next page"
                  >
                    Next <ChevronRight size={14} />
                  </button>
                </nav>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .filter-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .filter-sidebar {
            display: none !important;
          }
          .mobile-filter-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </div>
  );
}
