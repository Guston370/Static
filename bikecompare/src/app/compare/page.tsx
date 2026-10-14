import { Suspense } from 'react';
import type { Metadata } from 'next';
import { BikeComparisonPage } from '@/components/BikeComparisonPage';

export const metadata: Metadata = {
  title: 'Compare Two-Wheelers Side by Side | BikeCompare',
  description:
    'Compare Indian motorcycles and scooters side-by-side across ex-showroom price, engine power, torque, mileage, braking, and fuel capacity.',
};

export default function CompareRoute() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
          Loading comparison data...
        </div>
      }
    >
      <BikeComparisonPage />
    </Suspense>
  );
}
