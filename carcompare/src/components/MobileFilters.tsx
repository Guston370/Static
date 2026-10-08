'use client';

import { useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  RotateCcw,
} from 'lucide-react';
import { MobileCard } from '@/components/MobileCard';
import { getAllMobiles, getAllMobileBrands } from '@/lib/mobiles';

const PRICE_TIERS = [
  { label: 'Under ₹25,000', min: 0, max: 25000 },
  { label: '₹25,000 – ₹45,000', min: 25000, max: 45000 },
  { label: '₹45,000 – ₹80,000', min: 45000, max: 80000 },
  { label: 'Above ₹80,000', min: 80000, max: 999999 },
];

const REFRESH_RATES = [120, 144, 165];
const OS_OPTIONS = ['Android', 'iOS'];

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
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

  // Filter state
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.get('brand') ? searchParams.get('brand')!.split(',') : []
  );
  const [selectedPriceTier, setSelectedPriceTier] = useState<number | null>(null);
  const [selectedRefresh, setSelectedRefresh] = useState<number | null>(null);
  const [selectedRam, setSelectedRam] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedOS, setSelectedOS] = useState<string | null>(null);
  const [only5G, setOnly5G] = useState(false);
  const [hasTelephoto, setHasTelephoto] = useState(false);
  const [fastCharging, setFastCharging] = useState(false);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-asc' | 'price-desc' | 'battery'>('popularity');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter logic
  const filteredMobiles = useMemo(() => {
    return allMobiles.filter((m) => {
      // Search query
      if (query.trim()) {
        const q = query.toLowerCase().trim();
        const fullString = `${m.brand} ${m.modelName} ${m.performance.chipset} ${m.display.displayType} ${m.cameras.rearCameraSetup} ${m.software.operatingSystem} ${m.software.ui}`.toLowerCase();
        
        // Handle price searches like "50000" or "₹50,000"
        const numMatch = q.replace(/[^0-9]/g, '');
        if (numMatch && numMatch.length >= 4) {
          const target = parseInt(numMatch, 10);
          const withinPrice = Math.abs(m.pricing.startingPrice - target) < 15000;
          if (withinPrice) return true;
        }

        if (!fullString.includes(q)) {
          return false;
        }
      }

      // Brand
      if (selectedBrands.length > 0 && !selectedBrands.includes(m.brand)) {
        return false;
      }

      // Price Tier
      if (selectedPriceTier !== null) {
        const tier = PRICE_TIERS[selectedPriceTier];
        if (m.pricing.startingPrice < tier.min || m.pricing.startingPrice > tier.max) {
          return false;
        }
      }

      // Refresh rate
      if (selectedRefresh !== null && m.display.refreshRate < selectedRefresh) {
        return false;
      }

      // RAM
      if (selectedRam && !m.performance.ramOptions.includes(selectedRam)) {
        return false;
      }

      // Storage
      if (selectedStorage && !m.performance.storageOptions.includes(selectedStorage)) {
        return false;
      }

      // OS
      if (selectedOS && m.software.operatingSystem !== selectedOS) {
        return false;
      }

      // 5G
      if (only5G && !m.connectivity.has5G) {
        return false;
      }

      // Telephoto camera
      if (hasTelephoto && !m.cameras.telephotoCamera) {
        return false;
      }

      // Fast Charging (>= 65W)
      if (fastCharging && m.battery.wiredCharging < 65) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.pricing.startingPrice - b.pricing.startingPrice;
      if (sortBy === 'price-desc') return b.pricing.startingPrice - a.pricing.startingPrice;
      if (sortBy === 'battery') return b.battery.batteryCapacity - a.battery.batteryCapacity;
      // popularity default
      return 0;
    });
  }, [
    allMobiles,
    query,
    selectedBrands,
    selectedPriceTier,
    selectedRefresh,
    selectedRam,
    selectedStorage,
    selectedOS,
    only5G,
    hasTelephoto,
    fastCharging,
    sortBy,
  ]);

  const clearAllFilters = useCallback(() => {
    setQuery('');
    setSelectedBrands([]);
    setSelectedPriceTier(null);
    setSelectedRefresh(null);
    setSelectedRam(null);
    setSelectedStorage(null);
    setSelectedOS(null);
    setOnly5G(false);
    setHasTelephoto(false);
    setFastCharging(false);
    setSortBy('popularity');
  }, []);

  const hasActiveFilters =
    Boolean(query) ||
    selectedBrands.length > 0 ||
    selectedPriceTier !== null ||
    selectedRefresh !== null ||
    selectedRam !== null ||
    selectedStorage !== null ||
    selectedOS !== null ||
    only5G ||
    hasTelephoto ||
    fastCharging;

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div>
      {/* ── Top Bar: Search & Sort ── */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
        }}
      >
        {/* Search Input */}
        <div style={{ position: 'relative', flex: '1 1 320px' }}>
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '0.875rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-tertiary)',
              pointerEvents: 'none',
            }}
          />
          <input
            type="search"
            className="input"
            style={{ paddingLeft: '2.5rem' }}
            placeholder="Search mobiles, brands, chipsets, AMOLED, ₹50,000..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Clear search query"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', flexShrink: 0 }}>
            Sort by:
          </span>
          <select
            className="select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'popularity' | 'price-asc' | 'price-desc' | 'battery')}
            style={{ width: 'auto', minWidth: '160px' }}
          >
            <option value="popularity">Popular Flagships</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="battery">Largest Battery</option>
          </select>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          className="btn btn-secondary mobile-filter-btn"
          onClick={() => setMobileFilterOpen((o) => !o)}
          style={{ display: 'none' }}
        >
          <SlidersHorizontal size={16} />
          Filters {hasActiveFilters && '(Active)'}
        </button>
      </div>

      {/* ── Active Filter Badges ── */}
      {hasActiveFilters && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.25rem',
            padding: '0.75rem 1rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
          }}
        >
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
            Active Filters:
          </span>

          {query && (
            <span className="badge badge-accent">
              &quot;{query}&quot;
              <button onClick={() => setQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px' }}>
                <X size={11} />
              </button>
            </span>
          )}

          {selectedBrands.map((b) => (
            <span key={b} className="badge badge-secondary">
              {b}
              <button onClick={() => toggleBrand(b)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px' }}>
                <X size={11} />
              </button>
            </span>
          ))}

          {selectedPriceTier !== null && (
            <span className="badge badge-secondary">
              {PRICE_TIERS[selectedPriceTier].label}
              <button onClick={() => setSelectedPriceTier(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px' }}>
                <X size={11} />
              </button>
            </span>
          )}

          {selectedRefresh !== null && (
            <span className="badge badge-secondary">
              {selectedRefresh}Hz+
              <button onClick={() => setSelectedRefresh(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px' }}>
                <X size={11} />
              </button>
            </span>
          )}

          {selectedOS && (
            <span className="badge badge-secondary">
              OS: {selectedOS}
              <button onClick={() => setSelectedOS(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px' }}>
                <X size={11} />
              </button>
            </span>
          )}

          {only5G && (
            <span className="badge badge-secondary">
              5G Only
              <button onClick={() => setOnly5G(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px' }}>
                <X size={11} />
              </button>
            </span>
          )}

          {hasTelephoto && (
            <span className="badge badge-secondary">
              Optical Zoom Telephoto
              <button onClick={() => setHasTelephoto(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px' }}>
                <X size={11} />
              </button>
            </span>
          )}

          {fastCharging && (
            <span className="badge badge-secondary">
              Fast Charging ≥65W
              <button onClick={() => setFastCharging(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px' }}>
                <X size={11} />
              </button>
            </span>
          )}

          <button
            onClick={clearAllFilters}
            className="btn btn-ghost btn-sm"
            style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'var(--color-accent)' }}
          >
            <RotateCcw size={13} />
            Reset all
          </button>
        </div>
      )}

      {/* ── Main Layout: Sidebar Filters + Cards Grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem', alignItems: 'start' }}>
        {/* Sidebar */}
        <aside
          className={`filter-sidebar ${mobileFilterOpen ? 'open' : ''}`}
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '1.25rem',
            position: 'sticky',
            top: '80px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-primary)' }}>
              Filters
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-accent)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                }}
              >
                Clear all
              </button>
            )}
          </div>

          {/* Price Range */}
          <FilterSection title="Budget / Price">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {PRICE_TIERS.map((tier, idx) => (
                <label
                  key={tier.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    color: selectedPriceTier === idx ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                    fontWeight: selectedPriceTier === idx ? 600 : 400,
                  }}
                >
                  <input
                    type="radio"
                    name="priceTier"
                    checked={selectedPriceTier === idx}
                    onChange={() => setSelectedPriceTier(selectedPriceTier === idx ? null : idx)}
                  />
                  {tier.label}
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Brands */}
          <FilterSection title="Brand">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', maxHeight: '200px', overflowY: 'auto' }}>
              {allBrands.map((brand) => (
                <label
                  key={brand}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    color: selectedBrands.includes(brand) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                    fontWeight: selectedBrands.includes(brand) ? 600 : 400,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Operating System */}
          <FilterSection title="Operating System">
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {OS_OPTIONS.map((os) => (
                <button
                  key={os}
                  onClick={() => setSelectedOS(selectedOS === os ? null : os)}
                  className={`btn btn-sm ${selectedOS === os ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ flex: 1 }}
                >
                  {os}
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Refresh Rate */}
          <FilterSection title="Refresh Rate">
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {REFRESH_RATES.map((hz) => (
                <button
                  key={hz}
                  onClick={() => setSelectedRefresh(selectedRefresh === hz ? null : hz)}
                  className={`btn btn-sm ${selectedRefresh === hz ? 'btn-primary' : 'btn-outline'}`}
                  style={{ flex: '1 1 60px' }}
                >
                  {hz}Hz+
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Hardware Features */}
          <FilterSection title="Hardware Features">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={only5G}
                  onChange={(e) => setOnly5G(e.target.checked)}
                />
                5G Connectivity
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={hasTelephoto}
                  onChange={(e) => setHasTelephoto(e.target.checked)}
                />
                Dedicated Optical Telephoto
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={fastCharging}
                  onChange={(e) => setFastCharging(e.target.checked)}
                />
                Fast Charging (≥65W)
              </label>
            </div>
          </FilterSection>
        </aside>

        {/* Results Area */}
        <div>
          {/* Results count banner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
            }}
          >
            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
              Showing {filteredMobiles.length} smartphone{filteredMobiles.length === 1 ? '' : 's'}
            </span>
          </div>

          {filteredMobiles.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1.5rem',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                No smartphones match your filters
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Try adjusting your search terms, price tier, or clear brand selections.
              </p>
              <button onClick={clearAllFilters} className="btn btn-primary">
                Reset All Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {filteredMobiles.map((mobile) => (
                <MobileCard key={mobile.id} mobile={mobile} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .mobile-filter-btn {
            display: inline-flex !important;
          }
          .filter-sidebar {
            display: none;
          }
          .filter-sidebar.open {
            display: block !important;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 100;
            overflow-y: auto;
            border-radius: 0;
          }
        }
      `}</style>
    </div>
  );
}
