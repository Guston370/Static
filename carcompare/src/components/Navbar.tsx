'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Car, Smartphone, Layers } from 'lucide-react';
import { useCompare } from '@/context/CompareContext';
import { useMobileCompare } from '@/context/MobileCompareContext';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { selectedSlugs } = useCompare();
  const { selectedMobileSlugs } = useMobileCompare();

  const isCarsActive =
    pathname.startsWith('/cars') ||
    pathname === '/compare' ||
    (pathname === '/' && !pathname.includes('mobiles'));

  const isMobilesActive = pathname.startsWith('/mobiles');

  return (
    <header
      style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        boxShadow: '0 1px 0 var(--color-border)',
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
                gap: '0.5rem',
                textDecoration: 'none',
                flexShrink: 0,
              }}
              aria-label="Static - but dynamic Home"
            >
              <span
                style={{
                  background: 'var(--color-accent)',
                  color: '#fff',
                  borderRadius: '8px',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Layers size={19} strokeWidth={2.2} />
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
                  but dynamic
                </span>
              </div>
            </Link>

            {/* Category Switcher Tabs */}
            <div
              className="category-switch-desktop"
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'var(--color-surface-sunken)',
                padding: '3px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
              }}
            >
              <Link
                href="/cars"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: isCarsActive ? 700 : 500,
                  color: isCarsActive
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-tertiary)',
                  background: isCarsActive ? 'var(--color-surface)' : 'transparent',
                  boxShadow: isCarsActive ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                  textDecoration: 'none',
                  transition: 'all 150ms ease',
                }}
              >
                <Car size={14} />
                Cars
              </Link>

              <Link
                href="/mobiles"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: isMobilesActive ? 700 : 500,
                  color: isMobilesActive
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-tertiary)',
                  background: isMobilesActive ? 'var(--color-surface)' : 'transparent',
                  boxShadow: isMobilesActive ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                  textDecoration: 'none',
                  transition: 'all 150ms ease',
                }}
              >
                <Smartphone size={14} />
                Mobiles
              </Link>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
            className="nav-desktop"
          >
            <Link
              href="/"
              style={{
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: pathname === '/' ? 600 : 400,
                color: pathname === '/' ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                background: pathname === '/' ? 'var(--color-accent-light)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>

            <Link
              href="/cars"
              style={{
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: pathname.startsWith('/cars') ? 600 : 400,
                color: pathname.startsWith('/cars') ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                background: pathname.startsWith('/cars') ? 'var(--color-accent-light)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              Browse Cars
            </Link>

            <Link
              href="/mobiles"
              style={{
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: pathname.startsWith('/mobiles') && !pathname.includes('/compare') ? 600 : 400,
                color: pathname.startsWith('/mobiles') && !pathname.includes('/compare') ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                background: pathname.startsWith('/mobiles') && !pathname.includes('/compare') ? 'var(--color-accent-light)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              Browse Mobiles
            </Link>

            <Link
              href={isMobilesActive ? '/mobiles/compare' : '/compare'}
              style={{
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: pathname.includes('/compare') ? 600 : 400,
                color: pathname.includes('/compare') ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                background: pathname.includes('/compare') ? 'var(--color-accent-light)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              Compare
            </Link>
          </div>

          {/* Active Compare CTA Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {selectedSlugs.length > 0 && (
              <Link
                href={`/compare?cars=${selectedSlugs.join(',')}`}
                className="btn btn-primary btn-sm"
                aria-label={`Compare ${selectedSlugs.length} selected cars`}
              >
                <Car size={13} />
                Cars ({selectedSlugs.length})
              </Link>
            )}

            {selectedMobileSlugs.length > 0 && (
              <Link
                href={`/mobiles/compare?mobiles=${selectedMobileSlugs.join(',')}`}
                className="btn btn-secondary btn-sm"
                style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
                aria-label={`Compare ${selectedMobileSlugs.length} selected mobiles`}
              >
                <Smartphone size={13} />
                Mobiles ({selectedMobileSlugs.length})
              </Link>
            )}

            {/* Mobile menu toggle */}
            <button
              className="btn btn-ghost btn-sm nav-mobile-toggle"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          style={{
            background: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            padding: '1rem 1.5rem 1.5rem',
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <Link
              href="/cars"
              onClick={() => setMobileOpen(false)}
              className={`btn btn-sm ${isCarsActive ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1 }}
            >
              <Car size={14} /> Cars
            </Link>
            <Link
              href="/mobiles"
              onClick={() => setMobileOpen(false)}
              className={`btn btn-sm ${isMobilesActive ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1 }}
            >
              <Smartphone size={14} /> Mobiles
            </Link>
          </div>

          {[
            { href: '/', label: 'Home' },
            { href: '/cars', label: 'Browse Cars' },
            { href: '/compare', label: 'Compare Cars' },
            { href: '/mobiles', label: 'Browse Mobiles' },
            { href: '/mobiles/compare', label: 'Compare Mobiles' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontSize: '1rem',
                color: 'var(--color-text-secondary)',
                borderBottom: '1px solid var(--color-border-subtle)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-desktop {
          display: flex;
        }
        .category-switch-desktop {
          display: flex;
        }
        .nav-mobile-toggle {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-desktop, .category-switch-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
