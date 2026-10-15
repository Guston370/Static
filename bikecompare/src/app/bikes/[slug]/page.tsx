import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Bike as BikeIcon, Zap, Fuel, ArrowLeft, Shield, Gauge, Check, ExternalLink, History } from 'lucide-react';
import { getBikeBySlug, getAllBikes, getBikeVariants, getBikePriceSnapshot } from '@/lib/bikes';
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
  const isCNG = bike.fuelType === 'CNG';
  const isDiscontinued = bike.status === 'discontinued';
  const variants = getBikeVariants(bike.id);
  const pricingSnapshot = getBikePriceSnapshot(bike.id);

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <Link href="/bikes" className="btn btn-ghost btn-sm" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
          <ArrowLeft size={16} /> Back to All Two-Wheelers
        </Link>

        {/* Hero Card */}
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            {/* Visual Column */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: 'var(--color-surface-inset)',
                minHeight: '240px',
                maxHeight: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {bike.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={bike.image}
                  alt={`${bike.brand} ${bike.model}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ color: 'var(--color-text-tertiary)', textAlign: 'center', padding: '2rem' }}>
                  <BikeIcon size={64} style={{ margin: '0 auto 0.5rem' }} />
                  <div>No image available</div>
                </div>
              )}

              {/* Status Badge */}
              <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                {isDiscontinued ? (
                  <span className="badge" style={{ background: 'rgba(100, 116, 139, 0.9)', color: '#fff', gap: '0.3rem' }}>
                    <History size={12} /> Discontinued
                  </span>
                ) : (
                  <span className="badge badge-success">
                    Active in Market
                  </span>
                )}
              </div>
            </div>

            {/* Content Column */}
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className={`badge ${isEV ? 'badge-success' : isCNG ? 'badge-accent' : 'badge-neutral'}`}>
                  {isEV ? <Zap size={12} /> : <Fuel size={12} />} {bike.vehicleType} • {bike.category}
                </span>
                {bike.launchYear && (
                  <span className="badge badge-neutral">
                    Launch Year: {bike.launchYear}
                  </span>
                )}
              </div>

              <div style={{ fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
                {bike.brand} {bike.series ? `• ${bike.series}` : ''}
              </div>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.2, margin: '0.2rem 0' }}>
                {bike.model}
              </h1>
              {bike.generation && (
                <div style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {bike.generation}
                </div>
              )}
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginTop: '0.4rem', lineHeight: 1.5 }}>
                {bike.tagline}
              </p>

              {/* Price Box */}
              <div style={{ marginTop: '1.25rem', padding: '1rem', background: 'var(--color-surface-inset)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
                  {isDiscontinued ? 'Last Known Ex-Showroom (Delhi)' : 'Ex-Showroom Price (Delhi)'}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-accent)', lineHeight: 1.1 }}>
                  ₹{bike.startingPrice.toLocaleString('en-IN')}
                </div>
                {bike.maxPrice > bike.startingPrice && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)', marginTop: '0.2rem' }}>
                    Up to ₹{bike.maxPrice.toLocaleString('en-IN')} (Top Trim)
                  </div>
                )}
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                <BikeDetailActions slug={bike.slug} modelName={`${bike.brand} ${bike.model}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
            Key Technical Specifications
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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

        {/* Variants Section */}
        {variants.length > 0 && (
          <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
              Available Trims & Variants ({variants.length})
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {variants.map((v) => (
                <div
                  key={v.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    background: 'var(--color-surface-inset)',
                    borderRadius: 'var(--radius-sm)',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                      {v.variantName}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                      Brakes: {v.brakes} • Wheels: {v.wheels}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}>
                      Ex-Showroom
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                      ₹{v.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* On-Road Pricing Estimates Section */}
        {pricingSnapshot && (
          <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
              Estimated On-Road Pricing Benchmarks
            </h2>
            <p style={{ fontSize: '0.84rem', color: 'var(--color-text-tertiary)', marginBottom: '1.25rem' }}>
              Estimated on-road price includes Ex-Showroom + State RTO Registration Charges + Comprehensive 5-Year Insurance.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div className="neu-inset" style={{ padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>DELHI</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-text-primary)', marginTop: '0.25rem' }}>
                  ₹{pricingSnapshot.estimatedOnRoadDelhiINR.toLocaleString('en-IN')}
                </div>
              </div>
              <div className="neu-inset" style={{ padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>MUMBAI</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-text-primary)', marginTop: '0.25rem' }}>
                  ₹{pricingSnapshot.estimatedOnRoadMumbaiINR.toLocaleString('en-IN')}
                </div>
              </div>
              <div className="neu-inset" style={{ padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>BENGALURU</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-text-primary)', marginTop: '0.25rem' }}>
                  ₹{pricingSnapshot.estimatedOnRoadBengaluruINR.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Verification Source */}
        {bike.sourceUrl && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href={bike.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              style={{ gap: '0.4rem', color: 'var(--color-text-tertiary)', fontSize: '0.8rem' }}
            >
              Verify specifications on official {bike.brand} portal <ExternalLink size={13} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
