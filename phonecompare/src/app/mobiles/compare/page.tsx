import type { Metadata } from 'next';
import { Suspense } from 'react';
import { MobileComparisonPage } from '@/components/MobileComparisonPage';

export const metadata: Metadata = {
  title: 'Compare Smartphones Side by Side | Static — but dynamic',
  description:
    'Compare Indian smartphones side-by-side across processors, camera sensors, displays, batteries, fast charging, and verified prices. Transparent benchmark scoring.',
};

export default function CompareMobilesRoute() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container">
        <Suspense
          fallback={
            <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
              Loading smartphone comparison...
            </div>
          }
        >
          <MobileComparisonPage />
        </Suspense>
      </div>
    </div>
  );
}
