'use client';

import Link from 'next/link';
import { X, Bike, ChevronRight } from 'lucide-react';
import { useBikeCompare } from '@/context/BikeCompareContext';
import { getBikeBySlug } from '@/lib/bikes';

export function BikeComparisonTray() {
  const { selectedBikeSlugs, removeBike, clearBikes } = useBikeCompare();

  if (selectedBikeSlugs.length === 0) return null;

  const compareUrl = `/bikes/compare?bikes=${selectedBikeSlugs.join(',')}`;

  return (
    <div
      className="comparison-tray visible"
      role="region"
      aria-label="Two-wheeler comparison tray"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'var(--hero-bg)',
        color: 'var(--hero-text)',
        zIndex: 55,
        padding: '0.85rem 1.5rem',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.4)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <Bike size={18} color="var(--color-accent)" />
          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>
            {selectedBikeSlugs.length} two-wheeler{selectedBikeSlugs.length > 1 ? 's' : ''} selected
          </span>
        </div>

        {/* Selected Bikes Chips */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flex: 1,
            flexWrap: 'wrap',
          }}
        >
          {selectedBikeSlugs.map((slug) => {
            const bike = getBikeBySlug(slug);
            if (!bike) return null;
            return (
              <div
                key={slug}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.25rem 0.625rem',
                  fontSize: '0.82rem',
                }}
              >
                <span style={{ fontWeight: 600 }}>
                  {bike.brand} {bike.model}
                </span>
                <button
                  type="button"
                  onClick={() => removeBike(slug)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'rgba(255, 255, 255, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px',
                    borderRadius: '3px',
                  }}
                  aria-label={`Remove ${bike.brand} ${bike.model} from comparison`}
                >
                  <X size={13} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.6rem', flexShrink: 0, alignItems: 'center' }}>
          <button
            type="button"
            onClick={clearBikes}
            className="btn btn-ghost btn-sm"
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
            aria-label="Clear all selected two-wheelers"
          >
            Clear all
          </button>
          <Link
            href={compareUrl}
            className="btn btn-primary btn-sm"
            aria-label="Go to comparison page"
          >
            Compare Now
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
