import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Smartphone,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { MobileCard } from '@/components/MobileCard';
import {
  getPopularMobiles,
  getAllMobileBrands,
  getMobileCount,
  getMobileBrandCount,
  getAllMobiles,
  getMobileVariants,
} from '@/lib/mobiles';
import { HeroSearch } from '@/components/HeroSearch';

export const metadata: Metadata = {
  title: 'Static — but dynamic | Compare Indian Smartphones',
  description:
    'Compare smartphones across performance, cameras, display, battery and software. Independent specifications, verified Indian pricing, and transparent category scoring.',
};

const mobileFeatures = [
  {
    icon: BarChart3,
    title: 'Side-by-Side Comparison',
    description:
      'Compare up to 4 smartphones across full verified spec matrices: chipset, displays, battery, cameras, and OS.',
    available: true,
  },
  {
    icon: Shield,
    title: 'Transparent Category Winners',
    description:
      'Objective formula-based category winners across Display, Performance, Camera, Battery, and Software.',
    available: true,
  },
  {
    icon: TrendingUp,
    title: 'Variant Upgrade Analysis',
    description:
      'Clear breakdown of what you actually get for more money when stepping up RAM and storage tiers.',
    available: true,
  },
  {
    icon: Zap,
    title: 'Verified Official Pricing',
    description:
      'Track official Indian store ex-showroom prices without confusing third-party sale flash prices.',
    available: true,
  },
];

export default function HomePage() {
  const popularMobiles = getPopularMobiles(6);
  const brands = getAllMobileBrands();
  const mobileCount = getMobileCount();
  const brandCount = getMobileBrandCount();
  const allMobiles = getAllMobiles();
  const totalVariants = allMobiles.reduce(
    (acc, m) => acc + (getMobileVariants(m.id).length || 1),
    0
  );

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

        {/* Accent line at top */}
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
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
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
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                }}
              />
              <span
                style={{
                  fontSize: '0.82rem',
                  color: '#fff',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                Static{' '}
                <span
                  style={{
                    color: 'var(--color-accent)',
                    fontStyle: 'italic',
                    fontWeight: 500,
                  }}
                >
                  — but dynamic
                </span>
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>|</span>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.75)',
                  fontWeight: 400,
                }}
              >
                Indian Smartphone Intelligence
              </span>
            </div>

            <h1
              style={{
                color: '#fff',
                fontWeight: 800,
                fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Compare Phones.
              <br />
              Understand the Difference.{' '}
              <span style={{ color: 'var(--color-accent)' }}>Choose Better.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.18rem)',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '2.25rem',
                lineHeight: 1.6,
                maxWidth: '680px',
                marginInline: 'auto',
              }}
            >
              Compare smartphones across performance, cameras, display, battery and software.
              Zero sponsored bias, complete Indian variants, and verified manufacturer specs.
            </p>

            {/* Hero Search */}
            <div style={{ marginBottom: '2.5rem' }}>
              <HeroSearch />
            </div>

            {/* Quick Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '3rem',
              }}
            >
              <Link
                href="/mobiles"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--color-accent)',
                  color: '#fff',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'background 150ms',
                }}
              >
                <Smartphone size={18} />
                Browse All Phones
              </Link>
              <Link
                href="/mobiles/compare"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'background 150ms',
                }}
              >
                <BarChart3 size={18} />
                Compare Phones
              </Link>
            </div>

            {/* Dynamic Market Statistics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1.25rem',
                borderTop: '1px solid rgba(255,255,255,0.12)',
                paddingTop: '2rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {mobileCount}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                  Active Smartphones
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {brandCount}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                  Official Brands
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {totalVariants}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                  Verified Variants
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.03em',
                  }}
                >
                  100%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                  Real Photography
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          POPULAR / FEATURED PHONES SECTION
      ═══════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.35rem',
                }}
              >
                Featured Smartphones
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                Handpicked flagships, all-rounders, and camera-focused champions currently on sale in India.
              </p>
            </div>
            <Link
              href="/mobiles"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: '0.92rem',
                textDecoration: 'none',
              }}
            >
              View all {mobileCount} phones <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {popularMobiles.map((mobile) => (
              <MobileCard key={mobile.id} mobile={mobile} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPLORE BY BRAND SECTION
      ═══════════════════════════════════════ */}
      <section
        style={{
          padding: '3.5rem 0',
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '0.4rem',
              }}
            >
              Explore Official Indian Brands
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>
              Filter models by official manufacturer lineups
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {brands.map((brand) => (
              <Link
                key={brand}
                href={`/mobiles?brand=${encodeURIComponent(brand)}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.15rem',
                  borderRadius: '999px',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  transition: 'all 150ms',
                }}
              >
                <span>{brand}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PLATFORM CAPABILITIES
      ═══════════════════════════════════════ */}
      <section style={{ padding: '4.5rem 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto 3rem', textAlign: 'center' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--color-text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Why Use Static for Phones?
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Unlike retail stores that push sponsored placements, Static gives you pure spec transparency.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {mobileFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '14px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(193,56,42,0.08)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.55,
                      }}
                    >
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
