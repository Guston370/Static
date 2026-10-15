'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, X, ChevronDown, RotateCcw, Filter, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { BikeCard } from '@/components/BikeCard';
import {
  getAllBikes,
  getAllBrands,
  getAllVehicleTypes,
  getAllCategories,
  getAllFuelTypes,
  filterBikes,
} from '@/lib/bikes';
import type { VehicleType, BikeCategory, FuelType } from '@/types/bike';
import { PriceRangeSlider, formatPriceDisplay } from '@/components/pricing/PriceRangeSlider';

const PRICE_MIN_LIMIT = 0;
const PRICE_MAX_LIMIT = 3500000;
const PAGE_SIZE = 24;

const CC_RANGES = [
  { label: 'Under 125 cc', max: 125 },
  { label: '125 – 200 cc', min: 125, max: 200 },
  { label: '200 – 400 cc', min: 200, max: 400 },
  { label: '400 cc & Above', min: 400 },
];

const ABS_OPTIONS = ['Dual Channel', 'Single Channel', 'None'];

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

export function BikeFilters() {
  const searchParams = useSearchParams();
  const allBikes = useMemo(() => getAllBikes(), []);
  const allBrands = useMemo(() => getAllBrands(), []);
  const allVehicleTypes = useMemo(() => getAllVehicleTypes(), []);
  const allCategories = useMemo(() => getAllCategories(), []);
  const allFuelTypes = useMemo(() => getAllFuelTypes(), []);

  // Counts for availability status
  const activeCount = useMemo(() => allBikes.filter((b) => b.status === 'active' || !b.status).length, [allBikes]);
  const discontinuedCount = useMemo(() => allBikes.filter((b) => b.status === 'discontinued').length, [allBikes]);

  // State
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'active' | 'discontinued'>(
    (searchParams.get('status') as any) || 'all'
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.get('brand') ? searchParams.get('brand')!.split(',') : []
  );
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<VehicleType[]>(
    searchParams.get('type') ? (searchParams.get('type')!.split(',') as VehicleType[]) : []
  );
  const [selectedCategories, setSelectedCategories] = useState<BikeCategory[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<FuelType[]>([]);
  const [priceMin, setPriceMin] = useState(PRICE_MIN_LIMIT);
  const [priceMax, setPriceMax] = useState(PRICE_MAX_LIMIT);
  const [selectedCcIndex, setSelectedCcIndex] = useState<number | null>(null);
  const [minPower, setMinPower] = useState<number | null>(null);
  const [selectedAbs, setSelectedAbs] = useState<string[]>([]);
  const [minMileage, setMinMileage] = useState<number | null>(null);
  const [minElectricRange, setMinElectricRange] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-asc' | 'price-desc' | 'power' | 'mileage'>('popularity');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Sync state to URL
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams();
    if (search.trim()) params.set('q', search.trim());
    if (selectedStatus !== 'all') params.set('status', selectedStatus);
    if (selectedBrands.length > 0) params.set('brand', selectedBrands.join(','));
    if (selectedVehicleTypes.length > 0) params.set('type', selectedVehicleTypes.join(','));
    if (priceMin > PRICE_MIN_LIMIT) params.set('minPrice', priceMin.toString());
    if (priceMax < PRICE_MAX_LIMIT) params.set('maxPrice', priceMax.toString());

    const queryString = params.toString();
    const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  }, [search, selectedStatus, selectedBrands, selectedVehicleTypes, priceMin, priceMax]);

  // Reset to page 1 when any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedStatus, selectedBrands, selectedVehicleTypes, selectedCategories, selectedFuelTypes, priceMin, priceMax, selectedCcIndex, minPower, selectedAbs, minMileage, minElectricRange, sortBy]);

  const toggleItem = <T,>(list: T[], item: T, setter: (val: T[]) => void) => {
    setter(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  };

  const filteredBikes = useMemo(() => {
    const ccRange = selectedCcIndex !== null ? CC_RANGES[selectedCcIndex] : null;
    return filterBikes({
      search,
      status: selectedStatus,
      brands: selectedBrands,
      vehicleTypes: selectedVehicleTypes,
      categories: selectedCategories,
      fuelTypes: selectedFuelTypes,
      minPrice: priceMin,
      maxPrice: priceMax,
      minDisplacementCC: ccRange?.min ?? null,
      maxDisplacementCC: ccRange?.max ?? null,
      minPowerBhp: minPower,
      transmissions: [],
      absTypes: selectedAbs,
      minMileage,
      minElectricRange,
      sortBy,
    });
  }, [
    search,
    selectedStatus,
    selectedBrands,
    selectedVehicleTypes,
    selectedCategories,
    selectedFuelTypes,
    priceMin,
    priceMax,
    selectedCcIndex,
    minPower,
    selectedAbs,
    minMileage,
    minElectricRange,
    sortBy,
  ]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredBikes.length / PAGE_SIZE));
  const paginatedBikes = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredBikes.slice(start, start + PAGE_SIZE);
  }, [filteredBikes, currentPage]);

  const clearAllFilters = useCallback(() => {
    setSearch('');
    setSelectedStatus('all');
    setSelectedBrands([]);
    setSelectedVehicleTypes([]);
    setSelectedCategories([]);
    setSelectedFuelTypes([]);
    setPriceMin(PRICE_MIN_LIMIT);
    setPriceMax(PRICE_MAX_LIMIT);
    setSelectedCcIndex(null);
    setMinPower(null);
    setSelectedAbs([]);
    setMinMileage(null);
    setMinElectricRange(null);
    setSortBy('popularity');
    setCurrentPage(1);
  }, []);

  const hasActiveFilters =
    Boolean(search) ||
    selectedStatus !== 'all' ||
    selectedBrands.length > 0 ||
    selectedVehicleTypes.length > 0 ||
    selectedCategories.length > 0 ||
    selectedFuelTypes.length > 0 ||
    priceMin > PRICE_MIN_LIMIT ||
    priceMax < PRICE_MAX_LIMIT ||
    selectedCcIndex !== null ||
    minPower !== null ||
    selectedAbs.length > 0 ||
    minMileage !== null ||
    minElectricRange !== null;

  const renderSidebarContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {/* Availability Status Filter */}
      <FilterSection title="Market Status">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {[
            { id: 'all', label: `All Models (${allBikes.length})` },
            { id: 'active', label: `Active (${activeCount})` },
            { id: 'discontinued', label: `Discontinued (${discontinuedCount})` },
          ].map((opt) => (
            <label
              key={opt.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.84rem',
                padding: '0.3rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                background: selectedStatus === opt.id ? 'var(--color-surface-inset)' : 'transparent',
              }}
            >
              <input
                type="radio"
                name="statusFilter"
                checked={selectedStatus === opt.id}
                onChange={() => setSelectedStatus(opt.id as any)}
                style={{ accentColor: 'var(--color-accent)' }}
              />
              <span style={{ fontWeight: selectedStatus === opt.id ? 700 : 400 }}>{opt.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Dual-Handle Range Slider */}
      <FilterSection title="Budget (Ex-Showroom)">
        <PriceRangeSlider
          minLimit={PRICE_MIN_LIMIT}
          maxLimit={PRICE_MAX_LIMIT}
          minValue={priceMin}
          maxValue={priceMax}
          step={10000}
          formatType="inr"
          label="Ex-Showroom Price"
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

      {/* Vehicle Type */}
      <FilterSection title="Vehicle Type">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {allVehicleTypes.map((type) => {
            const active = selectedVehicleTypes.includes(type);
            return (
              <button
                key={type}
                type="button"
                onClick={() => toggleItem(selectedVehicleTypes, type, setSelectedVehicleTypes)}
                className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
              >
                {type}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Brand */}
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

      {/* Category / Riding Style */}
      <FilterSection title="Category & Style">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {allCategories.map((cat) => {
            const active = selectedCategories.includes(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => toggleItem(selectedCategories, cat, setSelectedCategories)}
                className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Fuel / Powertrain */}
      <FilterSection title="Fuel / Powertrain">
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {allFuelTypes.map((fuel) => {
            const active = selectedFuelTypes.includes(fuel);
            return (
              <button
                key={fuel}
                type="button"
                onClick={() => toggleItem(selectedFuelTypes, fuel, setSelectedFuelTypes)}
                className={`btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}`}
                style={{ flex: '1 1 30%', padding: '0.35rem 0.6rem', fontSize: '0.82rem', justifyContent: 'center' }}
              >
                {fuel}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Engine Displacement CC */}
      <FilterSection title="Engine Displacement">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {CC_RANGES.map((cc, idx) => (
            <label
              key={cc.label}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}
            >
              <input
                type="radio"
                name="ccRange"
                checked={selectedCcIndex === idx}
                onChange={() => setSelectedCcIndex(selectedCcIndex === idx ? null : idx)}
                onClick={() => {
                  if (selectedCcIndex === idx) setSelectedCcIndex(null);
                }}
                style={{ accentColor: 'var(--color-accent)' }}
              />
              {cc.label}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* ABS Braking */}
      <FilterSection title="Braking & Safety">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {ABS_OPTIONS.map((abs) => {
            const checked = selectedAbs.includes(abs);
            return (
              <label
                key={abs}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.84rem' }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleItem(selectedAbs, abs, setSelectedAbs)}
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                {abs}
              </label>
            );
          })}
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
            placeholder="Search two-wheelers by brand, model, series, or type..."
            className="input"
            style={{ paddingLeft: '2.75rem', paddingRight: search ? '2.5rem' : '1rem' }}
            aria-label="Search two-wheelers"
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-tertiary)', whiteSpace: 'nowrap' }}>
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="input"
              style={{ width: 'auto', padding: '0.55rem 0.85rem', fontSize: '0.86rem', cursor: 'pointer' }}
              aria-label="Sort two-wheelers"
            >
              <option value="popularity">Popularity</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="power">Engine Power (Bhp)</option>
              <option value="mileage">Mileage / Range</option>
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
            Active Filters ({filteredBikes.length} bikes):
          </span>

          {search && (
            <span className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              Query: &quot;{search}&quot;
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSearch('')} />
            </span>
          )}

          {selectedStatus !== 'all' && (
            <span className="badge badge-accent" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              Status: {selectedStatus.toUpperCase()}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedStatus('all')} />
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

          {selectedVehicleTypes.map((vt) => (
            <span key={vt} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {vt}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedVehicleTypes, vt, setSelectedVehicleTypes)} />
            </span>
          ))}

          {selectedCategories.map((c) => (
            <span key={c} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {c}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedCategories, c, setSelectedCategories)} />
            </span>
          ))}

          {selectedFuelTypes.map((f) => (
            <span key={f} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {f}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedFuelTypes, f, setSelectedFuelTypes)} />
            </span>
          ))}

          {selectedAbs.map((a) => (
            <span key={a} className="badge badge-neutral" style={{ gap: '0.35rem', padding: '0.3rem 0.6rem' }}>
              {a}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => toggleItem(selectedAbs, a, setSelectedAbs)} />
            </span>
          ))}

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

      {/* ── Main Layout: Sidebar + Bikes Grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem', alignItems: 'start' }} className="filter-layout-grid">
        <aside
          className="filter-sidebar card"
          style={{
            padding: '1.5rem',
            position: 'sticky',
            top: '80px',
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto',
          }}
          aria-label="Filter two-wheelers"
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

        {/* Mobile Drawer */}
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
            aria-label="Filter two-wheelers"
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
                  Filter Two-Wheelers
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
                  Show {filteredBikes.length} Bikes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Products Grid + Pagination ── */}
        <div style={{ minWidth: 0 }}>
          {filteredBikes.length === 0 ? (
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
                No two-wheelers match your filters
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px', fontSize: '0.92rem' }}>
                Try widening your price range or clearing specific displacement, brand, or category filters.
              </p>
              <button type="button" onClick={clearAllFilters} className="btn btn-primary">
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.86rem', color: 'var(--color-text-tertiary)' }}>
                  Showing <strong>{(currentPage - 1) * PAGE_SIZE + 1}</strong>–
                  <strong>{Math.min(currentPage * PAGE_SIZE, filteredBikes.length)}</strong> of{' '}
                  <strong>{filteredBikes.length}</strong> matching models
                </div>

                {totalPages > 1 && (
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                    Page {currentPage} of {totalPages}
                  </div>
                )}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {paginatedBikes.map((bike) => (
                  <BikeCard key={bike.id} bike={bike} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '2.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="btn btn-secondary btn-sm"
                    style={{ gap: '0.25rem' }}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={16} /> Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                    .map((pageNum, idx, arr) => {
                      const prev = arr[idx - 1];
                      return (
                        <React.Fragment key={pageNum}>
                          {prev && pageNum - prev > 1 && (
                            <span style={{ padding: '0 0.25rem', color: 'var(--color-text-tertiary)' }}>...</span>
                          )}
                          <button
                            type="button"
                            onClick={() => setCurrentPage(pageNum)}
                            className={`btn btn-sm ${currentPage === pageNum ? 'btn-primary' : 'btn-secondary'}`}
                            style={{ minWidth: '36px', justifyContent: 'center' }}
                            aria-label={`Go to page ${pageNum}`}
                            aria-current={currentPage === pageNum ? 'page' : undefined}
                          >
                            {pageNum}
                          </button>
                        </React.Fragment>
                      );
                    })}

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="btn btn-secondary btn-sm"
                    style={{ gap: '0.25rem' }}
                    aria-label="Next page"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
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
