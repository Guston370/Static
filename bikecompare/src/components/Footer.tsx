import Link from 'next/link';
import { Bike, Shield, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: 'var(--hero-bg)', color: 'var(--hero-text)', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }}>
      <div className="container" style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                textDecoration: 'none',
              }}
              aria-label="BikeCompare Home"
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
                  color: '#fff',
                }}
              >
                <Bike size={18} strokeWidth={2.2} />
              </span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--hero-text)', letterSpacing: '-0.03em' }}>
                BikeCompare
              </span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '280px' }}>
              Independent Indian two-wheeler research and comparison platform covering motorcycles, scooters, and electric vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
              Two-Wheelers
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link href="/bikes" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                All Two-Wheelers
              </Link>
              <Link href="/bikes/compare" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                Compare Bikes
              </Link>
              <Link href="/bikes?type=Motorcycle" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                Motorcycles
              </Link>
              <Link href="/bikes?type=Scooter" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                Scooters
              </Link>
              <Link href="/bikes?type=Electric+Two-Wheeler" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                Electric Two-Wheelers
              </Link>
            </div>
          </div>

          {/* Top Brands */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
              Popular Brands
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link href="/bikes?brand=Royal+Enfield" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                Royal Enfield
              </Link>
              <Link href="/bikes?brand=TVS" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                TVS Motor
              </Link>
              <Link href="/bikes?brand=Honda" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                Honda
              </Link>
              <Link href="/bikes?brand=Ather" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                Ather Energy
              </Link>
            </div>
          </div>

          {/* Static Platform Ecosystem */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
              Static Ecosystem
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                Home Portal
              </Link>
              <Link href="/cars" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                CarCompare
              </Link>
              <Link href="/mobiles" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                PhoneCompare
              </Link>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          <div>© {new Date().getFullYear()} BikeCompare • Static — but dynamic. All rights reserved.</div>
          <div>All ex-showroom prices & specifications verified against manufacturer official data.</div>
        </div>
      </div>
    </footer>
  );
}
