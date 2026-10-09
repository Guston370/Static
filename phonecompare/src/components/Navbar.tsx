'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Smartphone, Layers, Car } from 'lucide-react';
import { useMobileCompare } from '@/context/MobileCompareContext';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { selectedMobileSlugs } = useMobileCompare();

  const isBrowseActive = pathname === '/mobiles';
  const isCompareActive = pathname.startsWith('/mobiles/compare');

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
          {/* Logo & Category Branding */}
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
              aria-label="Static - but dynamic Mobiles Home"
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

            {/* Category Switcher Pill Toggle */}
            <div
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
                  fontWeight: 500,
                  color: 'var(--color-text-tertiary)',
                  background: 'transparent',
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
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  background: 'var(--color-surface)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                  textDecoration: 'none',
                  transition: 'all 150ms ease',
                }}
              >
                <Smartphone size={14} />
                Mobiles
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className="navbar-desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Link
              href="/mobiles"
              className={`nav-link ${isBrowseActive ? 'active' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                textDecoration: 'none',
                color: isBrowseActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                background: isBrowseActive ? 'var(--color-accent-light)' : 'transparent',
                transition: 'all 0.15s ease',
              }}
            >
              <Smartphone size={16} />
              Browse Phones
            </Link>

            <Link
              href="/mobiles/compare"
              className={`nav-link ${isCompareActive ? 'active' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                textDecoration: 'none',
                color: isCompareActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                background: isCompareActive ? 'var(--color-accent-light)' : 'transparent',
                transition: 'all 0.15s ease',
                position: 'relative',
              }}
            >
              Compare
              {selectedMobileSlugs.length > 0 && (
                <span
                  style={{
                    background: 'var(--color-accent)',
                    color: '#fff',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.1rem 0.45rem',
                    lineHeight: 1.2,
                    marginLeft: '0.2rem',
                  }}
                >
                  {selectedMobileSlugs.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="navbar-mobile-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            style={{
              borderTop: '1px solid var(--color-border)',
              padding: '0.75rem 0 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <Link
              href="/cars"
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '0.6rem 0.75rem',
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                borderRadius: '6px',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Car size={16} />
              Browse Cars
            </Link>
            <Link
              href="/mobiles"
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '0.6rem 0.75rem',
                fontSize: '0.92rem',
                fontWeight: 500,
                color: isBrowseActive ? 'var(--color-accent)' : 'var(--color-text-primary)',
                textDecoration: 'none',
                borderRadius: '6px',
                background: isBrowseActive ? 'var(--color-accent-light)' : 'transparent',
              }}
            >
              Browse Phones
            </Link>
            <Link
              href="/mobiles/compare"
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '0.6rem 0.75rem',
                fontSize: '0.92rem',
                fontWeight: 500,
                color: isCompareActive ? 'var(--color-accent)' : 'var(--color-text-primary)',
                textDecoration: 'none',
                borderRadius: '6px',
                background: isCompareActive ? 'var(--color-accent-light)' : 'transparent',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>Compare Phones</span>
              {selectedMobileSlugs.length > 0 && (
                <span
                  style={{
                    background: 'var(--color-accent)',
                    color: '#fff',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.1rem 0.5rem',
                  }}
                >
                  {selectedMobileSlugs.length}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
