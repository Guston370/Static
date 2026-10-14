import Link from 'next/link';
import { Car, Shield, BarChart3, Heart } from 'lucide-react';

const footerLinks = {
  Cars: [
    { href: '/cars', label: 'Browse Cars' },
    { href: '/compare', label: 'Compare Cars' },
    { href: '/cars?bodyType=SUV', label: 'SUVs' },
    { href: '/cars?fuelType=Electric', label: 'Electric Cars' },
    { href: '/cars?brand=Tata', label: 'Tata Motors' },
  ],
  Mobiles: [
    { href: '/mobiles', label: 'Browse Mobiles' },
    { href: '/mobiles/compare', label: 'Compare Mobiles' },
    { href: '/mobiles?brand=Samsung', label: 'Samsung Galaxy' },
    { href: '/mobiles?brand=Apple', label: 'Apple iPhone' },
    { href: '/mobiles?brand=OnePlus', label: 'OnePlus' },
  ],
  Bikes: [
    { href: '/bikes', label: 'Browse Two-Wheelers' },
    { href: '/bikes/compare', label: 'Compare Bikes' },
    { href: '/bikes?brand=Royal+Enfield', label: 'Royal Enfield' },
    { href: '/bikes?type=Electric+Two-Wheeler', label: 'Electric Scooters' },
    { href: '/bikes?type=Motorcycle', label: 'Motorcycles' },
  ],
  Platform: [
    { href: '/', label: 'Home Portal' },
    { href: '/cars', label: 'Cars Database' },
    { href: '/mobiles', label: 'Mobiles Database' },
    { href: '/bikes', label: 'Two-Wheeler Database' },
    { href: '/contact', label: 'Contact Us' },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--hero-bg)',
        color: 'var(--hero-text)',
        borderTop: '1px solid var(--color-border)',
        marginTop: 'auto',
        paddingBottom: '5rem', // space for comparison tray
      }}
    >
      {/* Main footer content */}
      <div className="container" style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
        <div className="footer-grid">
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                textDecoration: 'none',
              }}
              aria-label="Static — but dynamic Home"
            >
              <span
                style={{
                  background: 'var(--color-accent)',
                  borderRadius: 'var(--radius-sm)',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(196, 69, 69, 0.4)',
                }}
              >
                <Car size={18} color="#fff" />
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    letterSpacing: '-0.03em',
                    color: 'var(--hero-text)',
                  }}
                >
                  Static
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    fontStyle: 'italic',
                  }}
                >
                  but dynamic
                </span>
              </div>
            </Link>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Static — but dynamic. Transparent, multi-category Indian consumer comparison covering passenger cars, smartphones, and two-wheelers.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                <Shield size={13} />
                <span>Transparent Scoring</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                <BarChart3 size={13} />
                <span>100% Real Specs</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.85)',
                  marginBottom: '1rem',
                }}
              >
                {category}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          className="container"
          style={{
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Static — but dynamic. All specifications are sourced from public manufacturer data and verified documents.
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            Made with <Heart size={12} color="var(--color-accent)" fill="var(--color-accent)" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
