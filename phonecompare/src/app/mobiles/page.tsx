import type { Metadata } from 'next';
import { Suspense } from 'react';
import { MobileFilters } from '@/components/MobileFilters';

export const metadata: Metadata = {
  title: 'Browse Indian Smartphones & Mobiles | Static — but dynamic',
  description:
    'Browse and compare Indian smartphones by brand, chipset, RAM, storage, 5G, display refresh rate, and verified prices. Transparent specifications and side-by-side comparison.',
  keywords: [
    'Indian smartphones',
    'compare mobiles India',
    'phone specifications',
    'best 5G phones India',
    'flagship phone comparison',
    'Static mobile compare',
  ],
};

export default function MobilesPage() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Page Header */}
      <div
        style={{
          background: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          padding: '2.5rem 0',
        }}
      >
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            <span>MOBILES</span>
            <span>·</span>
            <span>INDIAN MARKET</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '0.5rem',
            }}
          >
            Browse Smartphones
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', maxWidth: '640px' }}>
            Compare specifications, displays, chipsets, camera setups, and official ex-store pricing across active Indian smartphones.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
        <Suspense
          fallback={
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
              Loading smartphones catalog...
            </div>
          }
        >
          <MobileFilters />
        </Suspense>
      </div>
    </div>
  );
}
