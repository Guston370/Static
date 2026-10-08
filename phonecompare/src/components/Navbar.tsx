'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Smartphone, Layers } from 'lucide-react';
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

            {/* Platform pill indicator */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                background: 'rgba(193,56,42,0.08)',
                color: 'var(--color-accent)',
                border: '1px solid rgba(193,56,42,0.2)',
              }}
            >
              <Smartphone size={13} />
              Mobiles
            </span>
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
