'use client';

import { useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
} from 'lucide-react';
import { CarCard } from '@/components/CarCard';
import {
  getAllBrands,
  getAllBodyTypes,
  getAllFuelTypes,
  filterCars,
} from '@/lib/cars';
import type { CarFilters, BodyType, FuelType, TransmissionType } from '@/types/car';

const TRANSMISSIONS: TransmissionType[] = ['Manual', 'Automatic', 'CVT', 'DCT', 'AMT', 'iMT'];
const PRICE_RANGES = [
  { label: 'Under ₹8L', min: 0, max: 8 },
  { label: '₹8L – ₹15L', min: 8, max: 15 },
  { label: '₹15L – ₹20L', min: 15, max: 20 },
  { label: 'Above ₹20L', min: 20, max: 99 },
];

const SORT_OPTIONS: { value: CarFilters['sortBy']; label: string }[] = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'power', label: 'Most Powerful' },
];

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
        {title}
        <ChevronDown
          size={15}
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }}
        />
      </button>
      {open && <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>{children}</div>}
    </div>
  );
}

function CheckboxOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        fontSize: '0.875rem',
        color: 'var(--color-text-secondary)',
        padding: '0.125rem 0',
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
      {label}
    </label>
  );
}

const DEFAULT_FILTERS: CarFilters = {
  search: '',
  brands: [],
  bodyTypes: [],
  fuelTypes: [],
  transmissions: [],
  minPrice: null,
  maxPrice: null,
  sortBy: 'popularity',
};

export function CarsFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState<CarFilters>(() => ({
    ...DEFAULT_FILTERS,
    search: searchParams.get('search') ?? '',
    brands: searchParams.get('brand') ? [searchParams.get('brand')!] : [],
    bodyTypes: searchParams.get('bodyType') ? [searchParams.get('bodyType') as BodyType] : [],
    fuelTypes: searchParams.get('fuelType') ? [searchParams.get('fuelType') as FuelType] : [],
  }));

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const brands = getAllBrands();
  const bodyTypes = getAllBodyTypes();
  const fuelTypes = getAllFuelTypes();

  const filteredCars = filterCars(filters);
  const activeFilterCount =
    filters.brands.length +
    filters.bodyTypes.length +
    filters.fuelTypes.length +
    filters.transmissions.length +
    (filters.minPrice !== null || filters.maxPrice !== null ? 1 : 0) +
    (filters.search ? 1 : 0);

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    router.push('/cars');
  }, [router]);

  function toggleArray<T>(arr: T[], item: T): T[] {
    return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
  }

  const setPrice = (min: number | null, max: number | null) => {
    setFilters((f) => ({ ...f, minPrice: min, maxPrice: max }));
  };

  // Check if given price range is active
  const isPriceActive = (min: number, max: number) =>
    filters.minPrice === min && filters.maxPrice === max;

  const FilterPanel = (
    <aside
      style={{
        width: '240px',
        flexShrink: 0,
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem',
        height: 'fit-content',
        position: 'sticky',
        top: '80px',
      }}
    >
      {/* Filter header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SlidersHorizontal size={16} color="var(--color-text-secondary)" />
          <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Filters</span>
          {activeFilterCount > 0 && (
            <span
              style={{
                background: 'var(--color-accent)',
                color: '#fff',
                borderRadius: '9999px',
                padding: '1px 7px',
                fontSize: '0.72rem',
                fontWeight: 600,
              }}
            >
              {activeFilterCount}
            </span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.78rem',
              color: 'var(--color-accent)',
              fontWeight: 500,
            }}
          >
            Reset all
          </button>
        )}
      </div>

      {/* Brand */}
      <FilterSection title="Brand">
        {brands.map((brand) => (
          <CheckboxOption
            key={brand}
            label={brand}
            checked={filters.brands.includes(brand)}
            onChange={() => setFilters((f) => ({ ...f, brands: toggleArray(f.brands, brand) }))}
          />
        ))}
      </FilterSection>

      {/* Body type */}
      <FilterSection title="Body Type">
        {bodyTypes.map((bt) => (
          <CheckboxOption
            key={bt}
            label={bt}
            checked={filters.bodyTypes.includes(bt)}
            onChange={() => setFilters((f) => ({ ...f, bodyTypes: toggleArray(f.bodyTypes, bt) }))}
          />
        ))}
      </FilterSection>

      {/* Fuel type */}
      <FilterSection title="Fuel Type">
        {fuelTypes.map((ft) => (
          <CheckboxOption
            key={ft}
            label={ft}
            checked={filters.fuelTypes.includes(ft)}
            onChange={() => setFilters((f) => ({ ...f, fuelTypes: toggleArray(f.fuelTypes, ft) }))}
          />
        ))}
      </FilterSection>

      {/* Transmission */}
      <FilterSection title="Transmission">
        {TRANSMISSIONS.map((tx) => (
          <CheckboxOption
            key={tx}
            label={tx}
            checked={filters.transmissions.includes(tx)}
            onChange={() => setFilters((f) => ({ ...f, transmissions: toggleArray(f.transmissions, tx) }))}
          />
        ))}
      </FilterSection>

      {/* Price range */}
      <FilterSection title="Price Range">
        {PRICE_RANGES.map((range) => (
          <button
            key={range.label}
            onClick={() =>
              isPriceActive(range.min, range.max)
                ? setPrice(null, null)
                : setPrice(range.min, range.max)
            }
            style={{
              background: isPriceActive(range.min, range.max) ? 'var(--color-accent-light)' : 'transparent',
              border: `1px solid ${isPriceActive(range.min, range.max) ? 'var(--color-accent)' : 'transparent'}`,
              borderRadius: '6px',
              padding: '0.375rem 0.625rem',
              fontSize: '0.85rem',
              cursor: 'pointer',
              color: isPriceActive(range.min, range.max) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
              fontWeight: isPriceActive(range.min, range.max) ? 600 : 400,
              textAlign: 'left',
              width: '100%',
            }}
          >
            {range.label}
          </button>
        ))}
      </FilterSection>
    </aside>
  );

  return (
    <div>
      {/* Search + Sort bar */}
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          marginBottom: '1.5rem',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Search */}
        <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: '0.875rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-tertiary)',
            }}
          />
          <input
            type="search"
            value={filters.search}
            onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
            placeholder="Search brand, model..."
            className="input"
            style={{ paddingLeft: '2.5rem', paddingRight: filters.search ? '2.5rem' : '0.875rem' }}
            aria-label="Search cars"
          />
          {filters.search && (
            <button
              onClick={() => setFilters((f) => ({ ...f, search: '' }))}
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
              }}
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Sort */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters((f) => ({ ...f, sortBy: e.target.value as CarFilters['sortBy'] }))}
            className="input"
            style={{ width: 'auto', paddingRight: '2rem', cursor: 'pointer', appearance: 'none' }}
            aria-label="Sort cars"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            style={{
              position: 'absolute',
              right: '0.625rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-tertiary)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Mobile filter toggle */}
        <button
          className="btn btn-secondary btn-sm mobile-filter-btn"
          onClick={() => setMobileFiltersOpen((o) => !o)}
          aria-expanded={mobileFiltersOpen}
          aria-label="Toggle filters"
        >
          <SlidersHorizontal size={15} />
          Filters
          {activeFilterCount > 0 && (
            <span
              style={{
                background: 'var(--color-accent)',
                color: '#fff',
                borderRadius: '9999px',
                padding: '0 5px',
                fontSize: '0.7rem',
                fontWeight: 600,
              }}
            >
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Result count */}
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-tertiary)', marginBottom: '1.25rem' }}>
        {filteredCars.length} car{filteredCars.length !== 1 ? 's' : ''} found
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
        {/* Desktop filter panel */}
        <div className="filter-panel-desktop">{FilterPanel}</div>

        {/* Mobile filter panel */}
        {mobileFiltersOpen && (
          <div
            className="filter-panel-mobile"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              marginBottom: '1.25rem',
            }}
          >
            {FilterPanel}
          </div>
        )}

        {/* Car grid */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {filteredCars.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🔍</span>
              <h3 style={{ marginBottom: '0.5rem' }}>No cars found</h3>
              <p style={{ color: 'var(--color-text-tertiary)', marginBottom: '1.5rem' }}>
                Try adjusting your filters or search terms.
              </p>
              <button onClick={resetFilters} className="btn btn-primary">
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .filter-panel-desktop { display: block; }
        .filter-panel-mobile { display: none; width: 100%; }
        .mobile-filter-btn { display: none; }
        @media (max-width: 768px) {
          .filter-panel-desktop { display: none !important; }
          .filter-panel-mobile { display: block !important; }
          .mobile-filter-btn { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
