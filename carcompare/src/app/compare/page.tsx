import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ComparisonPage } from '@/components/ComparisonPage';

export const metadata: Metadata = {
  title: 'Compare Cars',
  description:
    'Compare Indian cars side by side. View specs, safety ratings, features, and platform scores for up to 5 cars at once.',
};

export default function ComparePage() {
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
            Compare Cars
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
            Select 2–5 cars for a side-by-side specification comparison
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <Suspense
          fallback={
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
              Loading comparison...
            </div>
          }
        >
          <ComparisonPage />
        </Suspense>
      </div>
    </div>
  );
}
