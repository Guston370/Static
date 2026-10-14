import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Bike as BikeIcon, Zap, Fuel, ArrowLeft, Shield, Gauge, Check } from 'lucide-react';
import { getBikeBySlug, getAllBikes } from '@/lib/bikes';
import { BikeDetailActions } from '@/components/BikeDetailActions';

export async function generateStaticParams() {
  const bikes = getAllBikes();
  return bikes.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  if (!bike) return { title: 'Bike Not Found | BikeCompare' };
  return {
    title: `${bike.brand} ${bike.model} Price, Mileage & Specs | BikeCompare`,
    description: `${bike.brand} ${bike.model} ex-showroom price ₹${bike.startingPrice.toLocaleString('en-IN')}, ${bike.maxPowerBhp} bhp power, and ${bike.abs} braking in India.`,
  };
}

export default async function BikeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  if (!bike) notFound();

  const isEV = bike.fuelType === 'Electric';

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <Link href="/bikes" className="btn btn-ghost btn-sm" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
          <ArrowLeft size={16} /> Back to All Two-Wheelers
        </Link>

        {/* Hero Card */}
        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className={`badge ${isEV ? 'badge-success' : 'badge-neutral'}`} style={{ marginBottom: '0.75rem' }}>
                {bike.vehicleType} • {bike.category}
              </span>
              <div style={{ fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
                {bike.brand}
              </div>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.2 }}>
                {bike.model}
              </h1>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginTop: '0.4rem', maxWidth: '580px' }}>
                {bike.tagline}
              </p>
              <BikeDetailActions slug={bike.slug} modelName={`${bike.brand} ${bike.model}`} />
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
                Ex-Showroom Price (Delhi)
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-accent)' }}>
                ₹{bike.startingPrice.toLocaleString('en-IN')}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)' }}>
                Up to ₹{bike.maxPrice.toLocaleString('en-IN')} (Top Trim)
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
            Key Technical Specifications
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <div className="neu-inset" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                Max Power
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                {bike.maxPowerBhp} bhp
              </div>
            </div>

            <div className="neu-inset" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                Peak Torque
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                {bike.maxTorqueNm} Nm
              </div>
            </div>

            <div className="neu-inset" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                {isEV ? 'Certified Range' : 'Fuel Economy'}
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                {isEV ? `${bike.electricRangeKm} km` : `${bike.mileageKmpl} km/l`}
              </div>
            </div>

            <div className="neu-inset" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                {isEV ? 'Battery Capacity' : 'Engine Displacement'}
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                {isEV ? `${bike.batteryKWh} kWh` : `${bike.displacementCC} cc`}
              </div>
            </div>

            <div className="neu-inset" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                Transmission
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                {bike.transmission}
              </div>
            </div>

            <div className="neu-inset" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                Braking & Safety
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                {bike.abs}
              </div>
            </div>

            <div className="neu-inset" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                Kerb Weight
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                {bike.kerbWeightKg} kg
              </div>
            </div>

            <div className="neu-inset" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                Fuel Tank Capacity
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                {bike.fuelTankLitres ? `${bike.fuelTankLitres} Litres` : 'Not Applicable (EV)'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
