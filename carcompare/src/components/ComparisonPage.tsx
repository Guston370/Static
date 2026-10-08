'use client';

import { useState, useMemo, Fragment } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  BarChart3,
  Trophy,
  Plus,
  X,
  CheckCircle2,
  XCircle,
  Info,
} from 'lucide-react';
import { getCarsBySlugs, getAllCars } from '@/lib/cars';
import { getVariantsByModelSlug, formatVariantPrice } from '@/lib/variants';
import type { CarVariant } from '@/types/variant';
import { compareCars, CATEGORY_LABELS } from '@/lib/comparison';
import { useCompare } from '@/context/CompareContext';
import type { Car, ComparisonCategory } from '@/types/car';

// ─────────────────────────────────────────
// Comparison cell helpers
// ─────────────────────────────────────────

function BoolCell({ value }: { value: boolean }) {
  return value ? (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-success)', fontWeight: 500, fontSize: '0.85rem' }}>
      <CheckCircle2 size={14} /> Yes
    </span>
  ) : (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-text-tertiary)', fontSize: '0.85rem' }}>
      <XCircle size={14} /> No
    </span>
  );
}

function CompareValue({
  value,
  unit,
  isWinner,
  isLoser,
  isBool,
}: {
  value: string | number | boolean | null;
  unit?: string;
  isWinner?: boolean;
  isLoser?: boolean;
  isBool?: boolean;
}) {
  if (value === null || value === undefined) {
    return <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.85rem' }}>—</span>;
  }
  if (isBool || typeof value === 'boolean') {
    return <BoolCell value={Boolean(value)} />;
  }
  return (
    <span
      style={{
        fontWeight: isWinner ? 700 : 400,
        color: isWinner
          ? 'var(--color-success)'
          : isLoser
          ? 'var(--color-text-tertiary)'
          : 'var(--color-text-primary)',
        fontSize: '0.9rem',
      }}
    >
      {String(value)}
      {unit && (
        <span style={{ fontSize: '0.78rem', fontWeight: 400, color: 'var(--color-text-tertiary)', marginLeft: '2px' }}>
          {unit}
        </span>
      )}
      {isWinner && (
        <Trophy size={12} color="var(--color-success)" style={{ marginLeft: '4px', display: 'inline' }} />
      )}
    </span>
  );
}

// Determine which car has the max numeric value (higher = better)
function getWinnerIndexes(values: (number | null)[]): number[] {
  const valid = values.filter((v) => v !== null) as number[];
  if (valid.length === 0) return [];
  const max = Math.max(...valid);
  return values.map((v, i) => (v === max ? i : -1)).filter((i) => i >= 0);
}

// Determine which car has the min numeric value (lower = better)
function getLoserIndexes(values: (number | null)[]): number[] {
  const valid = values.filter((v) => v !== null) as number[];
  if (valid.length === 0) return [];
  const min = Math.min(...valid);
  return values.map((v, i) => (v === min ? i : -1)).filter((i) => i >= 0);
}

// ─────────────────────────────────────────
// Score bar component
// ─────────────────────────────────────────

function ScoreBar({ score, winner }: { score: number; winner: boolean }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: winner ? 700 : 400, color: winner ? 'var(--color-success)' : 'var(--color-text-primary)' }}>
          {score}/10
        </span>
        {winner && (
          <span style={{ fontSize: '0.7rem', color: 'var(--color-success)', fontWeight: 600 }}>
            WINNER
          </span>
        )}
      </div>
      <div className="score-bar-track">
        <div
          className={`score-bar-fill ${winner ? 'winner' : ''}`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Section header
// ─────────────────────────────────────────

function CompareSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        marginBottom: '1.25rem',
      }}
    >
      <div
        style={{
          background: 'var(--color-bg)',
          borderBottom: '1px solid var(--color-border)',
          padding: '0.875rem 1.25rem',
        }}
      >
        <h3 style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--color-text-tertiary)' }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────
// Row in the comparison table
// ─────────────────────────────────────────

function CompareRow({
  label,
  cars,
  variants,
  getValue,
  unit,
  higherIsBetter = true,
  isBool = false,
}: {
  label: string;
  cars: Car[];
  variants?: (CarVariant | undefined)[];
  getValue: (car: Car, variant?: CarVariant) => number | boolean | string | null | undefined;
  unit?: string;
  higherIsBetter?: boolean;
  isBool?: boolean;
}) {
  const values = cars.map((c, i) => getValue(c, variants ? variants[i] : undefined) ?? null);
  const numericValues = isBool
    ? null
    : (values.map((v) => (typeof v === 'number' ? v : null)) as (number | null)[]);

  const winnerIdxs =
    !isBool && numericValues
      ? higherIsBetter
        ? getWinnerIndexes(numericValues)
        : getLoserIndexes(numericValues)
      : [];
  const loserIdxs =
    !isBool && numericValues
      ? higherIsBetter
        ? getLoserIndexes(numericValues)
        : getWinnerIndexes(numericValues)
      : [];

  return (
    <tr>
      <td
        style={{
          padding: '0.75rem 1.25rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
          borderBottom: '1px solid var(--color-border-subtle)',
          fontWeight: 500,
          minWidth: '140px',
        }}
      >
        {label}
      </td>
      {values.map((value, i) => (
        <td
          key={i}
          style={{
            padding: '0.75rem 1.25rem',
            borderBottom: '1px solid var(--color-border-subtle)',
            background: winnerIdxs.includes(i) ? 'rgba(45,125,70,0.04)' : 'transparent',
            textAlign: 'center',
          }}
        >
          <CompareValue
            value={value}
            unit={unit}
            isWinner={winnerIdxs.includes(i)}
            isLoser={loserIdxs.includes(i) && !winnerIdxs.includes(i) && ((numericValues?.filter((v) => v !== null).length ?? 0) > 1)}
            isBool={isBool}
          />
        </td>
      ))}
    </tr>
  );
}

// ─────────────────────────────────────────
// Car selector (add car to compare)
// ─────────────────────────────────────────

function CarSelector({
  onSelect,
  excludeSlugs,
}: {
  onSelect: (slug: string) => void;
  excludeSlugs: string[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const allCars = getAllCars();
  const q = searchQuery.trim().toLowerCase();

  const available = allCars
    .filter((c) => !excludeSlugs.includes(c.slug))
    .filter((c) => {
      if (!q) return true;
      return (
        c.displayName.toLowerCase().includes(q) ||
        c.brand.toLowerCase().includes(q) ||
        c.model.toLowerCase().includes(q) ||
        c.bodyType.toLowerCase().includes(q) ||
        c.engine.fuelType.toLowerCase().includes(q)
      );
    });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '0.625rem 0.75rem', borderBottom: '1px solid var(--color-border)' }}>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search brand, model (e.g. BMW, Nexon)..."
          className="input"
          style={{
            padding: '0.45rem 0.75rem',
            fontSize: '0.85rem',
            width: '100%',
          }}
          autoFocus
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.375rem',
          maxHeight: '300px',
          overflowY: 'auto',
          padding: '0.5rem',
        }}
      >
        {available.length === 0 ? (
          <p style={{ padding: '1.5rem', textAlign: 'center', fontSize: '0.82rem', color: 'var(--color-text-tertiary)' }}>
            No cars found matching &ldquo;{searchQuery}&rdquo;
          </p>
        ) : (
          available.map((car) => (
            <button
              key={car.slug}
              onClick={() => onSelect(car.slug)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.625rem 0.875rem',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'border-color 150ms',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')}
            >
              <span style={{ fontSize: '1.25rem' }}>🚗</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  {car.displayName}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
                  {car.bodyType} · {car.engine.fuelType} · ₹{car.pricing.minPriceLakh.toFixed(1)}L+
                </p>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Main comparison component
// ─────────────────────────────────────────

export function ComparisonPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { selectedSlugs: contextSlugs, addCar: ctxAddCar, removeCar: ctxRemoveCar } = useCompare();

  const urlCarsParam = searchParams.get('cars');
  const initialSlugs = (urlCarsParam ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(() => {
    if (initialSlugs.length > 0) return initialSlugs;
    return contextSlugs;
  });
  const [userSelectedVariants, setUserSelectedVariants] = useState<Record<string, string>>({});
  const [showSelector, setShowSelector] = useState(false);

  const effectiveVariants = useMemo(() => {
    const varParam = searchParams.get('variants');
    const mapping: Record<string, string> = {};
    if (varParam) {
      varParam.split(',').forEach((item) => {
        const [modelSlug, varSlug] = item.split(':');
        if (modelSlug && varSlug) mapping[modelSlug] = varSlug;
      });
    }
    return { ...mapping, ...userSelectedVariants };
  }, [searchParams, userSelectedVariants]);

  const handleVariantChange = (modelSlug: string, variantSlug: string) => {
    setUserSelectedVariants((prev) => {
      const updated = { ...prev, [modelSlug]: variantSlug };
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        const pairs = Object.entries(updated).map(([m, v]) => `${m}:${v}`);
        if (pairs.length > 0) {
          url.searchParams.set('variants', pairs.join(','));
        }
        window.history.replaceState({}, '', url.toString());
      }
      return updated;
    });
  };

  const cars = getCarsBySlugs(selectedSlugs);
  const resolvedVariants: (CarVariant | undefined)[] = cars.map((c) => {
    const modelVars = getVariantsByModelSlug(c.slug);
    const chosenSlug = effectiveVariants[c.slug];
    if (chosenSlug) {
      const match = modelVars.find((v) => v.slug === chosenSlug);
      if (match) return match;
    }
    return modelVars[0];
  });

  const result = cars.length >= 2 ? compareCars(cars) : null;

  const addCar = (slug: string) => {
    if (selectedSlugs.length < 5 && !selectedSlugs.includes(slug)) {
      const newSlugs = [...selectedSlugs, slug];
      setSelectedSlugs(newSlugs);
      ctxAddCar(slug);
      router.replace(`/compare?cars=${newSlugs.join(',')}`, { scroll: false });
      setShowSelector(false);
    }
  };

  const removeCar = (slug: string) => {
    const newSlugs = selectedSlugs.filter((s) => s !== slug);
    setSelectedSlugs(newSlugs);
    ctxRemoveCar(slug);
    router.replace(
      newSlugs.length ? `/compare?cars=${newSlugs.join(',')}` : '/compare',
      { scroll: false }
    );
  };

  // ── Empty state ──
  if (selectedSlugs.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '5rem 2rem',
          maxWidth: '560px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            width: '72px',
            height: '72px',
            background: 'var(--color-accent-light)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <BarChart3 size={32} color="var(--color-accent)" />
        </div>
        <h2 style={{ marginBottom: '0.75rem' }}>Select Cars to Compare</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Choose 2–5 cars to compare side by side. Browse cars and click &ldquo;Compare&rdquo; to add them here.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/cars" className="btn btn-primary btn-lg">
            Browse Cars
          </Link>
          <button className="btn btn-secondary btn-lg" onClick={() => setShowSelector(true)}>
            <Plus size={18} />
            Add Car
          </button>
        </div>
        {showSelector && (
          <div
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              marginTop: '1.5rem',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontWeight: 600 }}>Select a car</p>
              <button onClick={() => setShowSelector(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={16} />
              </button>
            </div>
            <CarSelector onSelect={addCar} excludeSlugs={selectedSlugs} />
          </div>
        )}
      </div>
    );
  }

  // ── Need more cars state ──
  const needMore = cars.length < 2;

  return (
    <div>
      {/* Car header row */}
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `200px repeat(${Math.max(cars.length + (cars.length < 5 ? 1 : 0), 1)}, 1fr)`,
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          {/* Label column header */}
          <div style={{ padding: '1.25rem', background: 'var(--color-bg)', borderRight: '1px solid var(--color-border)' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-tertiary)' }}>
              Specification
            </p>
          </div>

          {/* Car columns */}
          {cars.map((car, i) => (
            <div
              key={car.slug}
              style={{
                padding: '1.25rem',
                textAlign: 'center',
                borderRight: '1px solid var(--color-border-subtle)',
                position: 'relative',
              }}
            >
              {/* Remove button */}
              <button
                onClick={() => removeCar(car.slug)}
                style={{
                  position: 'absolute',
                  top: '0.625rem',
                  right: '0.625rem',
                  background: 'none',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  padding: '3px',
                  display: 'flex',
                  color: 'var(--color-text-tertiary)',
                }}
                aria-label={`Remove ${car.displayName} from comparison`}
              >
                <X size={12} />
              </button>

              {/* Car image */}
              <div
                style={{
                  width: '80px',
                  height: '50px',
                  background: 'var(--color-bg)',
                  borderRadius: '8px',
                  margin: '0 auto 0.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                }}
              >
                <Image
                  src={car.primaryImage}
                  alt={car.primaryImageAlt || `${car.displayName} front three-quarter view`}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized={car.primaryImage.startsWith('http')}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/cars/default-car.jpg';
                  }}
                  sizes="80px"
                />
                <span style={{ zIndex: -1 }}>🚗</span>
              </div>

              {/* Winner badge */}
              {result?.overallWinner === car.slug && (
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.375rem' }}>
                  <span className="badge badge-success">
                    <Trophy size={11} /> Overall Winner
                  </span>
                </div>
              )}

              <Link href={`/cars/${car.slug}`} style={{ textDecoration: 'none' }}>
                <p style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)', marginBottom: '2px' }}>{car.brand}</p>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-primary)', letterSpacing: '-0.015em' }}>
                  {car.model}
                </p>
              </Link>
              {(() => {
                const modelVariants = getVariantsByModelSlug(car.slug);
                const curVar = resolvedVariants[i];
                if (modelVariants.length > 1) {
                  return (
                    <div style={{ marginTop: '0.4rem', textAlign: 'left' }}>
                      <label style={{ fontSize: '0.68rem', color: 'var(--color-text-tertiary)', display: 'block', marginBottom: '2px' }}>
                        Trim:
                      </label>
                      <select
                        value={curVar?.slug}
                        onChange={(e) => {
                          const val = e.target.value;
                          handleVariantChange(car.slug, val);
                        }}
                        className="input"
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.4rem',
                          height: 'auto',
                          borderRadius: '6px',
                          width: '100%',
                          cursor: 'pointer',
                        }}
                        aria-label={`Select variant for ${car.displayName}`}
                      >
                        {modelVariants.map((v) => (
                          <option key={v.slug} value={v.slug}>
                            {v.name} ({formatVariantPrice(v)})
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }
                return (
                  <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-accent)', marginTop: '0.375rem' }}>
                    {curVar ? formatVariantPrice(curVar) : `₹${car.pricing.minPriceLakh.toFixed(1)}L+`}
                  </p>
                );
              })()}
            </div>
          ))}

          {/* Add car column */}
          {cars.length < 5 && (
            <div
              style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                borderLeft: '1px solid var(--color-border-subtle)',
                background: 'var(--color-bg)',
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={() => setShowSelector((o) => !o)}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '2px dashed var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-tertiary)',
                  transition: 'border-color 150ms, color 150ms',
                }}
              >
                <Plus size={18} />
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', fontWeight: 500 }}>
                Add car
              </p>

              {/* Selector dropdown */}
              {showSelector && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    width: '280px',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-card-hover)',
                    zIndex: 20,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div style={{ padding: '0.875rem 1rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Add a car</p>
                    <button onClick={() => setShowSelector(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-tertiary)' }}>
                      <X size={15} />
                    </button>
                  </div>
                  <CarSelector onSelect={addCar} excludeSlugs={selectedSlugs} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {needMore && (
        <div
          style={{
            background: 'var(--color-accent-light)',
            border: '1px solid rgba(193,56,42,0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.25rem',
            display: 'flex',
            gap: '0.625rem',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <Info size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.875rem', color: 'var(--color-accent)', fontWeight: 500 }}>
            Add at least one more car to see the full comparison.
          </p>
        </div>
      )}

      {/* Platform Score Section */}
      {result && (
        <CompareSection title="Platform Score (0–10)">
          <div style={{ padding: '1rem 1.25rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                marginBottom: '1.25rem',
                padding: '0.75rem',
                background: 'var(--color-bg)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <Info size={14} color="var(--color-text-tertiary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', lineHeight: 1.5 }}>
                Platform Scores are calculated using a transparent formula based on specifications. They are{' '}
                <strong>not official manufacturer or agency ratings</strong>. Scores are relative to the cars being compared.
              </p>
            </div>

            {/* Category scores */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `auto repeat(${cars.length}, 1fr)`,
                gap: '0.875rem 1.5rem',
                alignItems: 'center',
              }}
            >
              {(['performance', 'safety', 'efficiency', 'features', 'practicality', 'value'] as ComparisonCategory[]).map(
                (cat) => (
                  <Fragment key={cat}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                      {CATEGORY_LABELS[cat]}
                    </div>
                    {result.cars.map((cs) => {
                      const catScore = cs.categories.find((c) => c.category === cat);
                      return (
                        <div key={`${cs.carId}-${cat}`}>
                          <ScoreBar score={catScore?.score ?? 0} winner={catScore?.winner ?? false} />
                        </div>
                      );
                    })}
                  </Fragment>
                )
              )}
              {/* Overall */}
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
                Overall Score
              </div>
              {result.cars.map((cs) => (
                <div
                  key={`overall-${cs.carId}`}
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '1.375rem',
                      color: result.overallWinner === cs.slug ? 'var(--color-success)' : 'var(--color-text-primary)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {cs.overallScore}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)' }}>/10</span>
                  {result.overallWinner === cs.slug && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                      <span className="badge badge-success" style={{ fontSize: '0.68rem' }}>
                        <Trophy size={10} /> Winner
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CompareSection>
      )}

      {/* Scrollable comparison tables */}
      {cars.length >= 2 && (
        <div style={{ overflowX: 'auto' }}>

          <CompareSection title="Price & Trim">
            <table className="comparison-table" style={{ minWidth: `${200 + cars.length * 180}px` }}>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Specification</th>
                  {cars.map((c, idx) => (
                    <th key={c.slug} style={{ textAlign: 'center' }}>
                      <div>{c.model}</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-accent)' }}>
                        {resolvedVariants[idx]?.name || 'Standard'}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <CompareRow label="Selected Trim Price" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.pricing?.exShowroomLakh ?? c.pricing.minPriceLakh} unit="Lakh" higherIsBetter={false} />
                <CompareRow label="Fuel Type" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.powertrain?.fuelType ?? c.engine.fuelType} />
                <CompareRow label="Transmission" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.powertrain?.transmission ?? c.engine.transmission} />
                <CompareRow label="Model Price Range" cars={cars} getValue={(c) => `₹${c.pricing.minPriceLakh} – ${c.pricing.maxPriceLakh} L`} />
              </tbody>
            </table>
          </CompareSection>

          <CompareSection title="Engine & Performance">
            <table className="comparison-table" style={{ minWidth: `${200 + cars.length * 180}px` }}>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Specification</th>
                  {cars.map((c) => <th key={c.slug} style={{ textAlign: 'center' }}>{c.model}</th>)}
                </tr>
              </thead>
              <tbody>
                <CompareRow label="Displacement" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.powertrain?.engineDisplacementCC ?? c.engine.displacementCC} unit="cc" />
                <CompareRow label="Power" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.powertrain?.maxPowerBhp ?? c.engine.maxPowerBhp} unit="bhp" />
                <CompareRow label="Torque" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.powertrain?.maxTorqueNm ?? c.engine.maxTorqueNm} unit="Nm" />
                <CompareRow label="Drivetrain" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.powertrain?.drivetrain ?? c.engine.drivetrain} />
                <CompareRow label="Turbo" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.powertrain.aspiration === 'Turbocharged' : c.engine.turbo} isBool />
                <CompareRow label="Claimed Mileage" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.performance?.mileageKmpl ?? c.performance.mileageKmpl} unit="km/l" />
                <CompareRow label="Range (EV)" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.powertrain?.electricRangeKm ?? c.performance.rangeKm} unit="km" />
                <CompareRow label="0–100 km/h" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.performance?.zeroToHundredSec ?? c.performance.zeroToHundredSec} unit="sec" higherIsBetter={false} />
                <CompareRow label="Top Speed" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.performance?.topSpeedKmph ?? c.performance.topSpeedKmph} unit="km/h" />
              </tbody>
            </table>
          </CompareSection>

          <CompareSection title="Dimensions">
            <table className="comparison-table" style={{ minWidth: `${200 + cars.length * 180}px` }}>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Specification</th>
                  {cars.map((c) => <th key={c.slug} style={{ textAlign: 'center' }}>{c.model}</th>)}
                </tr>
              </thead>
              <tbody>
                <CompareRow label="Length" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.dimensions?.lengthMm ?? c.dimensions.lengthMm} unit="mm" />
                <CompareRow label="Width" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.dimensions?.widthMm ?? c.dimensions.widthMm} unit="mm" />
                <CompareRow label="Height" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.dimensions?.heightMm ?? c.dimensions.heightMm} unit="mm" />
                <CompareRow label="Wheelbase" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.dimensions?.wheelbaseMm ?? c.dimensions.wheelbaseMm} unit="mm" />
                <CompareRow label="Ground Clearance" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.dimensions?.groundClearanceMm ?? c.dimensions.groundClearanceMm} unit="mm" />
                <CompareRow label="Boot Space" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.dimensions?.bootSpaceLitres ?? c.dimensions.bootSpaceLitres} unit="L" />
                <CompareRow label="Fuel Tank" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.dimensions?.fuelTankLitres ?? c.dimensions.fuelTankLitres} unit="L" />
                <CompareRow label="Battery" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.powertrain?.batteryCapacityKWh ?? c.dimensions.batteryKWh} unit="kWh" />
                <CompareRow label="Seating Capacity" cars={cars} getValue={(c) => c.seatingCapacity} unit="persons" />
              </tbody>
            </table>
          </CompareSection>

          <CompareSection title="Safety & ADAS">
            <table className="comparison-table" style={{ minWidth: `${200 + cars.length * 180}px` }}>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Specification</th>
                  {cars.map((c) => <th key={c.slug} style={{ textAlign: 'center' }}>{c.model}</th>)}
                </tr>
              </thead>
              <tbody>
                <CompareRow label="NCAP Rating" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.features?.safety?.ncapRating ?? c.safety.ncapRating} />
                <CompareRow label="Airbags Count" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.features?.safety?.airbagsCount ?? c.safety.airbagsCount} />
                <CompareRow label="ABS with EBD" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.safety.abs === 'standard' : c.safety.abs} isBool />
                <CompareRow label="ESC / ESP" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.safety.esc === 'standard' : c.safety.esc} isBool />
                <CompareRow label="Hill Start Assist" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.safety.hillAssist === 'standard' : c.safety.hillStartAssist} isBool />
                <CompareRow label="Level 2 ADAS Suite" cars={cars} variants={resolvedVariants} getValue={(_, v) => v?.features?.safety?.adasLevel && v.features.safety.adasLevel !== 'None'} isBool />
                <CompareRow label="360° Surround Camera" cars={cars} variants={resolvedVariants} getValue={(_, v) => v?.features?.safety?.threeSixtyCamera === 'standard'} isBool />
                <CompareRow label="Rear Parking Camera" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.safety.rearCamera === 'standard' : c.safety.rearParkingCamera} isBool />
                <CompareRow label="TPMS" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.safety.tpms === 'standard' : c.safety.tpms} isBool />
                <CompareRow label="Blind Spot Monitoring" cars={cars} variants={resolvedVariants} getValue={(_, v) => v?.features?.safety?.blindSpotMonitoring === 'standard'} isBool />
              </tbody>
            </table>
          </CompareSection>

          <CompareSection title="Key Features & Equipment">
            <table className="comparison-table" style={{ minWidth: `${200 + cars.length * 180}px` }}>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Specification</th>
                  {cars.map((c) => <th key={c.slug} style={{ textAlign: 'center' }}>{c.model}</th>)}
                </tr>
              </thead>
              <tbody>
                <CompareRow label="Sunroof" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.exterior.sunroof === 'standard' : c.features.sunroof} isBool />
                <CompareRow label="Panoramic Sunroof" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.exterior.panoramicSunroof === 'standard' : c.features.panoramicSunroof} isBool />
                <CompareRow label="Ventilated Seats" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.interior.ventilatedSeats === 'standard' : c.features.ventilatedFrontSeats} isBool />
                <CompareRow label="Powered Driver Seat" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.interior.poweredDriverSeat === 'standard' : c.features.poweredDriverSeat} isBool />
                <CompareRow label="Touchscreen Size" cars={cars} variants={resolvedVariants} getValue={(c, v) => v?.features?.infotainment?.infotainmentScreenSizeInches ?? c.features.infotainmentSizeInches} unit="inch" />
                <CompareRow label="Digital Cluster" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.infotainment.digitalInstrumentCluster === 'standard' : c.features.digitalCluster} isBool />
                <CompareRow label="Wireless Charging" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.interior.wirelessCharging === 'standard' : c.features.wirelessCharging} isBool />
                <CompareRow label="Premium Audio" cars={cars} variants={resolvedVariants} getValue={(_, v) => v?.features?.infotainment?.premiumAudio === 'standard'} isBool />
                <CompareRow label="Connected Car Tech" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.infotainment.connectedCarTechnology === 'standard' : c.features.connectedCar} isBool />
                <CompareRow label="Auto Climate Control" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.interior.automaticClimateControl === 'standard' : c.features.autoClimate} isBool />
                <CompareRow label="Rear AC Vents" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.interior.rearACVents === 'standard' : c.features.rearACVents} isBool />
                <CompareRow label="Cruise Control" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.convenience.cruiseControl === 'standard' : c.features.cruiseControl} isBool />
                <CompareRow label="Keyless Entry / Push Start" cars={cars} variants={resolvedVariants} getValue={(c, v) => v ? v.features.convenience.keylessEntry === 'standard' : c.features.keylessEntry} isBool />
              </tbody>
            </table>
          </CompareSection>
        </div>
      )}
    </div>
  );
}
