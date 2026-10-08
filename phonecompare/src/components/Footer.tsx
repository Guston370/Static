import Link from 'next/link';
import { Smartphone, Shield, BarChart3, Heart } from 'lucide-react';

const footerLinks = {
  Mobiles: [
    { href: '/mobiles', label: 'Browse All Phones' },
    { href: '/mobiles/compare', label: 'Compare Phones' },
    { href: '/mobiles?brand=Samsung', label: 'Samsung Galaxy' },
    { href: '/mobiles?brand=Apple', label: 'Apple iPhone' },
    { href: '/mobiles?brand=OnePlus', label: 'OnePlus' },
    { href: '/mobiles?brand=Google', label: 'Google Pixel' },
  ],
  Categories: [
    { href: '/mobiles?priceMax=20000', label: 'Phones Under ₹20,000' },
    { href: '/mobiles?priceMax=40000', label: 'Phones Under ₹40,000' },
    { href: '/mobiles?has5G=true', label: '5G Smartphones' },
    { href: '/mobiles?ram=12GB', label: '12GB+ RAM Flagships' },
  ],
  Platform: [
    { href: '/', label: 'Home' },
    { href: '/mobiles', label: 'Mobiles Catalog' },
    { href: '/mobiles/compare', label: 'Direct Comparison' },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-text-primary)',
        color: '#fff',
        marginTop: 'auto',
        paddingBottom: '5rem', // space for comparison tray
      }}
    >
      {/* Main footer content */}
      <div className="container" style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  background: 'var(--color-accent)',
                  borderRadius: '8px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Smartphone size={18} color="#fff" />
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    letterSpacing: '-0.03em',
                    color: '#fff',
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
            </div>
            <p
              style={{
                color: '#9b9b97',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              The definitive Indian smartphone comparison platform. Independent specifications, verified
              pricing, and transparent side-by-side analysis.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                color: '#9b9b97',
                fontSize: '0.8rem',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Shield size={14} />
                Independent & Unbiased
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <BarChart3 size={14} />
                100% Verified Specs
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#e5e5e3',
                  marginBottom: '1.25rem',
                }}
              >
                {section}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.href} style={{ marginBottom: '0.65rem' }}>
                    <Link
                      href={link.href}
                      style={{
                        color: '#9b9b97',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #2a2a28',
            marginTop: '3rem',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#6b6b68',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Static &mdash; Indian Smartphone Intelligence.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Built with <Heart size={13} color="var(--color-accent)" fill="var(--color-accent)" /> for Indian smartphone buyers
          </div>
        </div>
      </div>
    </footer>
  );
}
