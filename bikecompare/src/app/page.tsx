import Link from 'next/link';
import { Bike, Zap, Fuel, ArrowRight, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { getAllBikes } from '@/lib/bikes';
import { BikeCard } from '@/components/BikeCard';

export default function HomePage() {
  const allBikes = getAllBikes();
  const featuredBikes = allBikes.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: '5rem 0 4rem',
          background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.35rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-accent-light)',
              color: 'var(--color-accent)',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
            }}
          >
            <Bike size={15} /> Indian Two-Wheeler Platform
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Compare Indian Motorcycles, Scooters & EVs
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            Explore verified ex-showroom prices, real-world mileage benchmarks, engine displacement, and braking safety across India’s leading two-wheelers.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/bikes" className="btn btn-primary btn-lg">
              Browse All Two-Wheelers <ArrowRight size={18} />
            </Link>
            <Link href="/bikes?type=Electric+Two-Wheeler" className="btn btn-secondary btn-lg">
              <Zap size={18} /> Electric Scooters
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Bikes Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="section-title">Popular in India</h2>
              <p className="section-subtitle">Top researched motorcycles and electric scooters this month</p>
            </div>
            <Link href="/bikes" className="btn btn-secondary btn-sm">
              View All ({allBikes.length}) <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {featuredBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
