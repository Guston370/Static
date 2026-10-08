import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { CarCard } from '@/components/CarCard';
import { MobileCard } from '@/components/MobileCard';
import {
  getPopularCars,
  getAllBrands,
  getCarCount,
  getBrandCount,
} from '@/lib/cars';
import {
  getPopularMobiles,
  getMobileCount,
  getMobileBrandCount,
} from '@/lib/mobiles';
import { HeroSearch } from '@/components/HeroSearch';
import { Car, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Static — but dynamic | Compare Indian Cars & Mobiles',
  description:
    'Static — but dynamic. Multi-category comparison platform for Indian passenger cars and smartphones. Detailed verified specifications, honest data, and transparent comparison.',
};

const bodyTypes = [
  { label: 'SUV', icon: '🚙', slug: 'SUV', description: 'Most popular segment' },
  { label: 'Hatchback', icon: '🚗', slug: 'Hatchback', description: 'City-friendly' },
  { label: 'Sedan', icon: '🚘', slug: 'Sedan', description: 'Premium comfort' },
  { label: 'MPV', icon: '🚐', slug: 'MPV', description: 'Family first' },
  { label: 'Electric', icon: '⚡', slug: 'Electric', description: 'Future of mobility', isFuel: true },
  { label: 'Crossover', icon: '🛻', slug: 'Crossover', description: 'Versatile performer' },
];

const platformFeatures = [
  {
    icon: BarChart3,
    title: 'Side-by-Side Comparison',
    description: 'Compare up to 5 cars across detailed specifications including engine, safety, features, and dimensions.',
    available: true,
  },
  {
    icon: Shield,
    title: 'Transparent Safety Scores',
    description: 'NCAP ratings, airbag counts, ADAS features — all presented clearly without hiding the numbers.',
    available: true,
  },
  {
    icon: TrendingUp,
    title: 'Performance Scoring',
    description: 'Our formula-based platform score lets you see which car wins each category and why.',
    available: true,
  },
  {
    icon: Zap,
    title: 'Personalised Recommendations',
    description: 'Tell us your priorities and budget — get a tailored shortlist. Coming soon.',
    available: false,
  },
];

const brandColors: Record<string, string> = {
  Tata: '#00519a',
  Hyundai: '#002c6c',
  Mahindra: '#e31837',
  Kia: '#bb162b',
  'Maruti Suzuki': '#004b93',
  Honda: '#cc0000',
};

export default function HomePage() {
  const popularCars = getPopularCars(6);
  const popularMobiles = getPopularMobiles(6);
  const brands = getAllBrands();
  const carCount = getCarCount();
  const brandCount = getBrandCount();
  const mobileCount = getMobileCount();
  const mobileBrandCount = getMobileBrandCount();

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--color-text-primary)',
          color: '#fff',
          paddingTop: '4.5rem',
          paddingBottom: '4.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Red accent line at top */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'var(--color-accent)',
          }}
        />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            {/* Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(193,56,42,0.15)',
                border: '1px solid rgba(193,56,42,0.3)',
                borderRadius: '9999px',
                padding: '0.28rem 0.95rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-accent)' }} />
              <span style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 600, letterSpacing: '0.02em' }}>
                Static <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 500 }}>— but dynamic</span>
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>|</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
                Transparent Indian Comparison Platform
              </span>
            </div>

            <h1
              style={{
                color: '#fff',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              What do you want to compare?
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}
            >
              Side-by-side specifications, transparent performance benchmarks, and verified Indian pricing.
            </p>

            {/* Category Switcher Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginBottom: '2.5rem',
                textAlign: 'left',
              }}
            >
              {/* Category 1: CARS */}
              <Link
                href="/cars"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'background 150ms, border-color 150ms',
                }}
                className="group hover:border-accent"
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'var(--color-accent)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Car size={22} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#fff' }}>
                      CARS
                    </span>
                    <ArrowRight size={14} color="var(--color-accent)" />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>
                    {carCount} models · ARAI mileage · Safety
                  </span>
                </div>
              </Link>

              {/* Category 2: MOBILES */}
              <Link
                href="/mobiles"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'background 150ms, border-color 150ms',
                }}
                className="group hover:border-accent"
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: '#2563eb',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Smartphone size={22} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#fff' }}>
                      MOBILES
                    </span>
                    <ArrowRight size={14} color="#60a5fa" />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>
                    {mobileCount} models · Chipsets · Cameras
                  </span>
                </div>
              </Link>
            </div>

            {/* Quick Hero Search */}
            <HeroSearch />

            {/* Trust signals */}
            <div
              style={{
                marginTop: '2.5rem',
                display: 'flex',
                justifyContent: 'center',
                gap: '2.5rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: `${carCount} Cars`, sub: 'in active catalog' },
                { label: `${mobileCount} Phones`, sub: 'verified flagships & midrangers' },
                { label: `${brandCount} Car Brands`, sub: 'officially in India' },
                { label: `${mobileBrandCount} Mobile Brands`, sub: '100% active coverage' },
              ].map(({ label, sub }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: '1.2rem', color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>
                    {label}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          POPULAR CARS
      ═══════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                <Car size={14} />
                <span>Cars Category</span>
              </div>
              <h2 className="section-title">Popular Cars</h2>
              <p className="section-subtitle">Most viewed and compared cars on Static</p>
            </div>
            <Link href="/cars" className="btn btn-secondary btn-sm">
              View all cars <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {popularCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          POPULAR SMARTPHONES (MOBILES)
      ═══════════════════════════════════════ */}
      <section
        className="section"
        style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#2563eb', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                <Smartphone size={14} />
                <span>Mobiles Category</span>
              </div>
              <h2 className="section-title">Popular Smartphones</h2>
              <p className="section-subtitle">Flagships, camera phones, and performance leaders</p>
            </div>
            <Link href="/mobiles" className="btn btn-secondary btn-sm">
              View all mobiles <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {popularMobiles.map((mobile) => (
              <MobileCard key={mobile.id} mobile={mobile} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BROWSE BY BODY TYPE
      ═══════════════════════════════════════ */}
      <section
        className="section"
        style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Browse by Body Type</h2>
            <p className="section-subtitle">Find your style of car</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '0.875rem',
            }}
          >
            {bodyTypes.map((bt) => (
              <Link
                key={bt.slug}
                href={bt.isFuel ? `/cars?fuelType=${bt.slug}` : `/cars?bodyType=${bt.slug}`}
                className="category-card"
              >
                <span style={{ fontSize: '2rem' }}>{bt.icon}</span>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-primary)', marginBottom: '2px' }}>
                    {bt.label}
                  </p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)' }}>
                    {bt.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BROWSE BY BRAND
      ═══════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Browse by Brand</h2>
            <p className="section-subtitle">Explore cars from your favourite manufacturer</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            {brands.map((brand) => (
              <Link
                key={brand}
                href={`/cars?brand=${encodeURIComponent(brand)}`}
                className="brand-pill"
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: brandColors[brand] || 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                />
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY USE THIS PLATFORM
      ═══════════════════════════════════════ */}
      <section
        className="section"
        style={{
          background: 'var(--color-text-primary)',
          color: '#fff',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.5rem' }} className="section-title">
              Why Static?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)' }} className="section-subtitle">
              Static verified specifications, dynamic real-time insights — built for Indian car buyers
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    opacity: feature.available ? 1 : 0.6,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: feature.available ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color="#fff" />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>
                          {feature.title}
                        </h3>
                        {!feature.available && (
                          <span
                            style={{
                              fontSize: '0.65rem',
                              background: 'rgba(255,255,255,0.12)',
                              color: 'rgba(255,255,255,0.6)',
                              padding: '1px 6px',
                              borderRadius: '9999px',
                              fontWeight: 500,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '3px',
                            }}
                          >
                            <Clock size={9} />
                            Soon
                          </span>
                        )}
                        {feature.available && (
                          <CheckCircle2 size={14} color="var(--color-accent)" />
                        )}
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════ */}
      <section
        className="section-sm"
        style={{
          background: 'var(--color-accent-light)',
          borderTop: '1px solid rgba(193,56,42,0.12)',
        }}
      >
        <div
          className="container"
          style={{ textAlign: 'center' }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '0.75rem',
            }}
          >
            Ready to find your perfect car?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.75rem', maxWidth: '500px', margin: '0 auto 1.75rem' }}>
            Start by browsing our curated list of Indian cars or compare two cars directly.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/cars" className="btn btn-primary btn-lg">
              <Search size={18} />
              Browse Cars
            </Link>
            <Link href="/compare" className="btn btn-secondary btn-lg">
              <BarChart3 size={18} />
              Start Comparing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
