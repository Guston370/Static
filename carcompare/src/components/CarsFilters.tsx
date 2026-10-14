'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  RotateCcw,
  Filter,
  Check,
} from 'lucide-react';
import { CarCard } from '@/components/CarCard';
import {
  getAllBrands,
  getAllBodyTypes,
  getAllFuelTypes,
  filterCars,
} from '@/lib/cars';
import type { CarFilters, BodyType, FuelType, TransmissionType } from '@/types/car';
import { PriceRangeSlider, formatPriceDisplay } from '@/components/pricing/PriceRangeSlider';

const TRANSMISSIONS: TransmissionType[] = ['Manual', 'Automatic', 'CVT', 'DCT', 'AMT', 'iMT'];
const SEATING_OPTIONS = [5, 6, 7, 8];
const NCAP_OPTIONS = [
  { label: '5-Star Safety (Safest)', stars: 5 },
  { label: '4-Star & Above', stars: 4 },
  { label: '3-Star & Above', stars: 3 },
];

const PRICE_MIN_LIMIT = 3.0; // 3 Lakhs
const PRICE_MAX_LIMIT = 150.0; // 1.50 Crore (150 Lakhs)

const SORT_OPTIONS: { value: CarFilters['sortBy']; label: string }[] = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'power', label: 'Power (Bhp)' },
  { value: 'mileage', label: 'Efficiency / Range' },
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
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }}
        />
      </button>
      {open && children}
    </div>
  );
}

export function CarsFilters() {
  const searchParams = useSearchParams();
  const allBrands = useMemo(() => getAllBrands(), []);
  const allBodyTypes = useMemo(() => getAllBodyTypes(), []);
  const allFuelTypes = useMemo(() => getAllFuelTypes(), []);

  // Initial values from URL
  const initialSearch = searchParams.get('q') || searchParams.get('search') || '';
  const initialBrand = searchParams.get('brand') ? searchParams.get('brand')!.split(',') : [];
  const initialBody = searchParams.get('bodyType') ? (searchParams.get('bodyType')!.split(',') as BodyType[]) : [];
  const initialFuel = searchParams.get('fuelType') ? (searchParams.get('fuelType')!.split(',') as FuelType[]) : [];
  const initialTrans = searchParams.get('transmission') ? (searchParams.get('transmission')!.split(',') as TransmissionType[]) : [];
  const initialMinPrice = searchParams.get('minPrice') ? parseFloat(searchParams.get('minPrice')!) : PRICE_MIN_LIMIT;
  const initialMaxPrice = searchParams.get('maxPrice') ? parseFloat(searchParams.get('maxPrice')!) : PRICE_MAX_LIMIT;

  // State
  const [search, setSearch] = useState(initialSearch);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrand);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState<BodyType[]>(initialBody);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<FuelType[]>(initialFuel);
  const [selectedTransmissions, setSelectedTransmissions] = useState<TransmissionType[]>(initialTrans);
  const [minPrice, setMinPrice] = useState(isNaN(initialMinPrice) ? PRICE_MIN_LIMIT : initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(isNaN(initialMaxPrice) ? PRICE_MAX_LIMIT : initialMaxPrice);
  const [seatingCapacities, setSeatingCapacities] = useState<number[]>([]);
  const [minNcap, setMinNcap] = useState<number | null>(null);
  const [requireSunroof, setRequireSunroof] = useState(false);
  const [requireVentilatedSeats, setRequireVentilatedSeats] = useState(false);
  const [requireADAS, setRequireADAS] = useState(false);
  const [require360Camera, setRequire360Camera] = useState(false);
  const [sortBy, setSortBy] = useState<CarFilters['sortBy']>('popularity');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state to URL search parameters
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams();
    if (search.trim()) params.set('q', search.trim());
    if (selectedBrands.length > 0) params.set('brand', selectedBrands.join(','));
    if (selectedBodyTypes.length > 0) params.set('bodyType', selectedBodyTypes.join(','));
    if (selectedFuelTypes.length > 0) params.set('fuelType', selectedFuelTypes.join(','));
    if (selectedTransmissions.length > 0) params.set('transmission', selectedTransmissions.join(','));
    if (minPrice > PRICE_MIN_LIMIT) params.set('minPrice', minPrice.toString());
    if (maxPrice < PRICE_MAX_LIMIT) params.set('maxPrice', maxPrice.toString());

    const queryString = params.toString();
    const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  }, [search, selectedBrands, selectedBodyTypes, selectedFuelTypes, selectedTransmissions, minPrice, maxPrice]);

  // Multi-select helpers
  const toggleItem = <T,>(list: T[], item: T, setter: (val: T[]) => void) => {
    setter(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  };

  // Filter cars using updated filterCars engine
  const filteredCars = useMemo(() => {
    return filterCars({
      search,
      brands: selectedBrands,
      bodyTypes: selectedBodyTypes,
      fuelTypes: selectedFuelTypes,
      transmissions: selectedTransmissions,
      minPrice: minPrice > PRICE_MIN_LIMIT ? minPrice : null,
      maxPrice: maxPrice < PRICE_MAX_LIMIT ? maxPrice : null,
      seatingCapacities,
      minNcap,
      requireSunroof,
      requireVentilatedSeats,
      requireADAS,
      require360Camera,
      sortBy,
    });
  }, [
    search,
    selectedBrands,
    selectedBodyTypes,
    selectedFuelTypes,
    selectedTransmissions,
    minPrice,
    maxPrice,
    seatingCapacities,
    minNcap,
    requireSunroof,
    requireVentilatedSeats,
    requireADAS,
    require360Camera,
    sortBy,
  ]);

  const clearAllFilters = useCallback(() => {
    setSearch('');
    setSelectedBrands([]);
    setSelectedBodyTypes([]);
    setSelectedFuelTypes([]);
    setSelectedTransmissions([]);
    setMinPrice(PRICE_MIN_LIMIT);
    setMaxPrice(PRICE_MAX_LIMIT);
    setSeatingCapacities([]);
    setMinNcap(null);
    setRequireSunroof(false);
    setRequireVentilatedSeats(false);
    setRequireADAS(false);
    setRequire360Camera(false);
    setSortBy('popularity');
  }, []);

  const hasActiveFilters =
    Boolean(search) ||
    selectedBrands.length > 0 ||
    selectedBodyTypes.length > 0 ||
    selectedFuelTypes.length > 0 ||
    selectedTransmissions.length > 0 ||
    minPrice > PRICE_MIN_LIMIT ||
    maxPrice < PRICE_MAX_LIMIT ||
    seatingCapacities.length > 0 ||
    minNcap !== null ||
    requireSunroof ||
    requireVentilatedSeats ||
    requireADAS ||
    require360Camera;

  const renderSidebarContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {/* Dual Handle Ex-Showroom Price Range Slider */}
      <FilterSection title="Ex-Showroom Budget">
        <PriceRangeSlider
          minLimit={PRICE_MIN_LIMIT}
          maxLimit={PRICE_MAX_LIMIT}
          minValue={minPrice}
          maxValue={maxPrice}
          step={0.5}
          formatType="lakh"
          label="Ex-Showroom Price"
          onChange={(min, max) => {
            setMinPrice(min);
            setMaxPrice(max);
          }}
          onReset={() => {
            setMinPrice(PRICE_MIN_LIMIT);
            setMaxPrice(PRICE_MAX_LIMIT);
          }}
        />
      </FilterSection>

      {/* Brand / Manufacturer */}
      <FilterSection title="Manufacturer">
        <div style={{ maxHeight: '200px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingRight: '0.4rem' }}>
          {allBrands.map((brand) => {
            const isChecked = selectedBrands.includes(brand);
            return (
              <label
                key={brand}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.86rem',
                  padding: '0.25rem 0.4rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isChecked ? 'var(--color-surface-inset)' : 'transparent',
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(selectedBrands, brand, setSelectedBrands)}
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                <span style={{ color: isChecked ? 'var(--color-accent)' : 'var(--color-text-primary)', fontWeight: isChecked ? 600 : 400 }}>
                  {brand}
                </span>
              </label>
            );
          })}
        </div>
      </FilterSection>

      {/* Body Style */}
      <FilterSection title="Body Style">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {allBodyTypes.map((type) => {
            const active = selectedBodyTypes.includes(type);
            return (
              <button
                key={type}
                type="button"
                onClick={() => toggleItem(selectedBodyTypes, type, setSelectedBodyTypes)}
                className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
              >
                {type}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Fuel / Powertrain */}
      <FilterSection title="Fuel & Powertrain">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {allFuelTypes.map((fuel) => {
            const active = selectedFuelTypes.includes(fuel);
            return (
              <button
                key={fuel}
                type="button"
                onClick={() => toggleItem(selectedFuelTypes, fuel, setSelectedFuelTypes)}
                className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
              >
                {fuel}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Transmission */}
      <FilterSection title="Transmission">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {TRANSMISSIONS.map((trans) => {
            const active = selectedTransmissions.includes(trans);
            return (
              <button
                key={trans}
                type="button"
                onClick={() => toggleItem(selectedTransmissions, trans, setSelectedTransmissions)}
                className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
              >
                {trans}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Seating Capacity */}
      <FilterSection title="Seating Capacity">
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {SEATING_OPTIONS.map((seats) => {
            const active = seatingCapacities.includes(seats);
            return (
              <button
                key={seats}
                type="button"
                onClick={() => toggleItem(seatingCapacities, seats, setSeatingCapacities)}
                className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                style={{ flex: 1, padding: '0.35rem 0.5rem', fontSize: '0.82rem', justifyContent: 'center' }}
              >
                {seats} Seats
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Safety & Crash Test */}
      <FilterSection title="Safety & NCAP Rating">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {NCAP_OPTIONS.map((n) => (
            <label
              key={n.stars}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}
            >
              <input
                type="radio"
                name="ncapRating"
                checked={minNcap === n.stars}
                onChange={() => setMinNcap(minNcap === n.stars ? null : n.stars)}
                onClick={() => {
                  if (minNcap === n.stars) setMinNcap(null);
                }}
                style={{ accentColor: 'var(--color-accent)' }}
              />
              {n.label}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Premium Features */}
      <FilterSection title="Key Comfort & Tech Features">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}>
            <input
              type="checkbox"
              checked={requireSunroof}
              onChange={(e) => setRequireSunroof(e.target.checked)}
              style={{ accentColor: 'var(--color-accent)' }}
            />
            Sunroof (Single / Panoramic)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}>
            <input
              type="checkbox"
              checked={requireVentilatedSeats}
              onChange={(e) => setRequireVentilatedSeats(e.target.checked)}
              style={{ accentColor: 'var(--color-accent)' }}
            />
            Ventilated Front Seats
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}>
            <input
              type="checkbox"
              checked={requireADAS}
              onChange={(e) => setRequireADAS(e.target.checked)}
              style={{ accentColor: 'var(--color-accent)' }}
            />
            ADAS Level 1 / Level 2
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}>
            <input
              type="checkbox"
              checked={require360Camera}
              onChange={(e) => setRequire360Camera(e.target.checked)}
              style={{ accentColor: 'var(--color-accent)' }}
            />
            Parking Camera / 360 View
          </label>
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by brand, model, engine, or fuel..."
            className="input"
            style={{ paddingLeft: '2.75rem', paddingRight: search ? '2.5rem' : '1rem' }}
            aria-label="Search car catalog"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
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
              aria-label="Sort cars"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
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
            Active Filters ({filteredCars.length} cars):
          </span>

          {search && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              Query: &quot;{search}&quot;
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSearch('')} />
            </span>
          )}

          {(minPrice > PRICE_MIN_LIMIT || maxPrice < PRICE_MAX_LIMIT) && (
            <span className="badge badge-accent" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {formatPriceDisplay(minPrice, 'lakh')} – {formatPriceDisplay(maxPrice, 'lakh')}
              <X
                size={12}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setMinPrice(PRICE_MIN_LIMIT);
                  setMaxPrice(PRICE_MAX_LIMIT);
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

          {selectedBodyTypes.map((bt) => (
            <span key={bt} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {bt}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedBodyTypes, bt, setSelectedBodyTypes)} />
            </span>
          ))}

          {selectedFuelTypes.map((f) => (
            <span key={f} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {f}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedFuelTypes, f, setSelectedFuelTypes)} />
            </span>
          ))}

          {selectedTransmissions.map((t) => (
            <span key={t} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {t}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedTransmissions, t, setSelectedTransmissions)} />
            </span>
          ))}

          {seatingCapacities.map((seats) => (
            <span key={seats} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {seats} Seats
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(seatingCapacities, seats, setSeatingCapacities)} />
            </span>
          ))}

          {minNcap !== null && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {minNcap}★ Safety
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setMinNcap(null)} />
            </span>
          )}

          {requireSunroof && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              Sunroof
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setRequireSunroof(false)} />
            </span>
          )}

          {requireVentilatedSeats && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              Ventilated Seats
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setRequireVentilatedSeats(false)} />
            </span>
          )}

          {requireADAS && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              ADAS
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setRequireADAS(false)} />
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

      {/* ── Main Layout: Sidebar + Car Grid ── */}
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
          aria-label="Filter cars"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Car Filters
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
            aria-label="Filter cars"
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
                  Filter Vehicles
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

              <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
                {renderSidebarContent()}
              </div>

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
                  Show {filteredCars.length} Cars
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Products Grid ── */}
        <div style={{ minWidth: 0 }}>
          {filteredCars.length === 0 ? (
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
                No cars match your search criteria
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px', fontSize: '0.92rem' }}>
                Try adjusting your budget range or clearing specific powertrain and body style filters.
              </p>
              <button type="button" onClick={clearAllFilters} className="btn btn-primary">
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '1rem', fontSize: '0.86rem', color: 'var(--color-text-tertiary)' }}>
                Showing <strong>{filteredCars.length}</strong> matching vehicles
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
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
