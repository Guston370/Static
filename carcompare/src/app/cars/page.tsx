import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CarsFilters } from '@/components/CarsFilters';

export const metadata: Metadata = {
  title: 'Browse Indian Cars',
  description:
    'Browse and filter Indian cars by brand, body type, fuel type, transmission, and price. Compare specs and find your perfect car.',
};

export default function CarsPage() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Page header */}
      <div
        style={{
          background: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          padding: '2rem 0',
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '0.375rem',
            }}
          >
            Browse Cars
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
            Compare specifications and find the right car for you
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>Loading cars...</div>}>
          <CarsFilters />
        </Suspense>
      </div>
    </div>
  );
}
