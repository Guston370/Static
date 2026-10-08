'use client';

import Link from 'next/link';
import { X, BarChart3, ChevronRight } from 'lucide-react';
import { useCompare } from '@/context/CompareContext';
import { getCarBySlug } from '@/lib/cars';

export function ComparisonTray() {
  const { selectedSlugs, removeCar, clearCars } = useCompare();

  if (selectedSlugs.length === 0) return null;

  const compareUrl = `/compare?cars=${selectedSlugs.join(',')}`;

  return (
    <div
      className="comparison-tray visible"
      role="region"
      aria-label="Car comparison tray"
      aria-live="polite"
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <BarChart3 size={18} color="var(--color-accent)" />
          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
            {selectedSlugs.length} car{selectedSlugs.length > 1 ? 's' : ''} selected
          </span>
        </div>

        {/* Selected cars */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flex: 1,
            flexWrap: 'wrap',
          }}
        >
          {selectedSlugs.map((slug) => {
            const car = getCarBySlug(slug);
            if (!car) return null;
            return (
              <div
                key={slug}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.625rem',
                  fontSize: '0.82rem',
                }}
              >
                <span>{car.displayName}</span>
                <button
                  onClick={() => removeCar(slug)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1px',
                    borderRadius: '3px',
                  }}
                  aria-label={`Remove ${car.displayName} from comparison`}
                >
                  <X size={13} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
          <button
            onClick={clearCars}
            className="btn btn-ghost btn-sm"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            aria-label="Clear all cars from comparison"
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
