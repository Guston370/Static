'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Bike, Car, Smartphone, Mail, Layers } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useBikeCompare } from '@/context/BikeCompareContext';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { selectedBikeSlugs } = useBikeCompare();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const isBikesActive = pathname.startsWith('/bikes') || pathname === '/';
  const isCompareActive = pathname.includes('/compare');
  const isContactActive = pathname === '/contact';

  return (
    <header
      ref={headerRef}
      style={{
        background: 'var(--color-surface)',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        boxShadow: 'var(--shadow-nav)',
      }}
    >
      <div className="container">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
          aria-label="Main navigation"
        >
          {/* Logo & Category Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                textDecoration: 'none',
                flexShrink: 0,
              }}
              aria-label="Static Platform Home"
            >
              <span
                style={{
                  background: 'var(--color-accent)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-sm)',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '2px 2px 8px rgba(234, 88, 12, 0.35)',
                }}
              >
                <Bike size={22} strokeWidth={2.2} />
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem' }}>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: '1.3rem',
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}
                >
                  Static
                </span>
                <span
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    letterSpacing: '0.01em',
                    fontStyle: 'italic',
                  }}
                >
                  bikes
                </span>
              </div>
            </Link>

            {/* Category Switcher Tabs */}
            <div
              className="category-switch-desktop neu-inset"
              style={{
                padding: '3px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                gap: '3px',
              }}
            >
              <Link
                href="/cars"
                className="nav-link"
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.82rem',
                }}
              >
                <Car size={14} />
                Cars
              </Link>

              <Link
                href="/mobiles"
                className="nav-link"
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.82rem',
                }}
              >
                <Smartphone size={14} />
                Mobiles
              </Link>

              <Link
                href="/bikes"
                className="nav-link active"
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.82rem',
                }}
              >
                <Bike size={14} />
                Bikes
              </Link>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="nav-desktop">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/bikes" className={`nav-link ${pathname === '/bikes' ? 'active' : ''}`}>
              <Bike size={16} /> Browse Bikes
            </Link>
            <Link href="/bikes/compare" className={`nav-link ${isCompareActive ? 'active' : ''}`}>
              Compare
              {selectedBikeSlugs.length > 0 && (
                <span
                  style={{
                    background: 'var(--color-accent)',
                    color: '#fff',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.1rem 0.45rem',
                    lineHeight: 1.2,
                    marginLeft: '0.2rem',
                  }}
                >
                  {selectedBikeSlugs.length}
                </span>
              )}
            </Link>
            <Link href="/contact" className={`nav-link ${isContactActive ? 'active' : ''}`}>
              <Mail size={16} /> Contact
            </Link>
            <div style={{ marginLeft: '0.5rem' }}>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="nav-mobile-actions">
            {selectedBikeSlugs.length > 0 && (
              <Link
                href={`/bikes/compare?bikes=${selectedBikeSlugs.join(',')}`}
                className="btn btn-primary btn-sm mobile-compare-badge"
                style={{ fontSize: '0.78rem', padding: '0.3rem 0.6rem' }}
                aria-label={`Compare ${selectedBikeSlugs.length} bikes`}
              >
                <Bike size={13} /> ({selectedBikeSlugs.length})
              </Link>
            )}
            <div className="mobile-toggle-btn">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn btn-secondary btn-sm mobile-toggle-btn"
              type="button"
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            style={{
              background: 'var(--color-surface)',
              boxShadow: 'var(--shadow-dropdown)',
              borderTop: '1px solid var(--color-border)',
              padding: '1rem 1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}
          >
            {/* Quick Category Switcher */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Link
                href="/cars"
                onClick={() => setMobileOpen(false)}
                className="btn btn-secondary btn-sm"
                style={{ padding: '0.5rem', justifyContent: 'center', fontSize: '0.8rem' }}
              >
                <Car size={13} /> Cars
              </Link>
              <Link
                href="/mobiles"
                onClick={() => setMobileOpen(false)}
                className="btn btn-secondary btn-sm"
                style={{ padding: '0.5rem', justifyContent: 'center', fontSize: '0.8rem' }}
              >
                <Smartphone size={13} /> Mobiles
              </Link>
              <Link
                href="/bikes"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary btn-sm"
                style={{ padding: '0.5rem', justifyContent: 'center', fontSize: '0.8rem' }}
              >
                <Bike size={13} /> Bikes
              </Link>
            </div>

            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/bikes" className={`nav-link ${pathname === '/bikes' ? 'active' : ''}`}>
              <Bike size={16} /> Browse Two-Wheelers
            </Link>
            <Link href="/bikes/compare" className={`nav-link ${isCompareActive ? 'active' : ''}`}>
              Compare Two-Wheelers {selectedBikeSlugs.length > 0 ? `(${selectedBikeSlugs.length})` : ''}
            </Link>
            <Link href="/contact" className={`nav-link ${isContactActive ? 'active' : ''}`}>
              <Mail size={16} /> Contact Us
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)', marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                Display Theme
              </span>
              <ThemeToggle showLabel />
            </div>
          </div>
        )}
      </div>

      <style>{`
        .mobile-toggle-btn {
          display: none;
        }
        @media (max-width: 860px) {
          .category-switch-desktop {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
