import { Suspense } from 'react';
import type { Metadata } from 'next';
import { BikeFilters } from '@/components/BikeFilters';

export const metadata: Metadata = {
  title: 'Browse Motorcycles & Scooters | BikeCompare',
  description: 'Explore and filter Indian two-wheelers by price range, engine displacement, mileage, and ABS configuration.',
};

export default function BikesPage() {
  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <h1 className="section-title">All Motorcycles & Scooters</h1>
          <p className="section-subtitle">
            Filter by ex-showroom price, engine capacity, power output, and safety features.
          </p>
        </div>

        <Suspense fallback={<div className="card" style={{ padding: '3rem', textAlign: 'center' }}>Loading two-wheeler catalogue...</div>}>
          <BikeFilters />
        </Suspense>
      </div>
    </div>
  );
}
