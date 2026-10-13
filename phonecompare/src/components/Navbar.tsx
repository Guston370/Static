'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Smartphone, Layers } from 'lucide-react';
import { useMobileCompare } from '@/context/MobileCompareContext';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { selectedMobileSlugs } = useMobileCompare();
  const headerRef = useRef<HTMLElement>(null);

  const isBrowseActive = pathname === '/mobiles';
  const isCompareActive = pathname.startsWith('/mobiles/compare');

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Handle escape key and outside clicks
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      style={{
        background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-nav)',
        position: 'sticky',
        top: 0,
        zIndex: 40,
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
          {/* Logo & Brand Identity */}
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
              aria-label="PhoneCompare Home"
            >
              <span
                style={{
                  background: 'var(--color-accent)',
                  color: '#fff',
                  borderRadius: 'var(--radius-sm)',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-neu-button)',
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
          </div>

          {/* Desktop Navigation Links */}
          <div className="navbar-desktop-nav">
            <Link
              href="/mobiles"
              className={`nav-link ${isBrowseActive ? 'active' : ''}`}
            >
              <Smartphone size={16} />
              Browse Phones
            </Link>

            <Link
              href="/mobiles/compare"
              className={`nav-link ${isCompareActive ? 'active' : ''}`}
            >
              Compare
              {selectedMobileSlugs.length > 0 && (
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
                  {selectedMobileSlugs.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="navbar-mobile-toggle"
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="navbar-mobile-dropdown"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            id="navbar-mobile-dropdown"
            role="region"
            aria-label="Mobile navigation links"
            style={{
              background: 'var(--color-surface)',
              boxShadow: 'var(--shadow-dropdown)',
              borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
              borderTop: '1px solid var(--color-border-subtle)',
              padding: '0.75rem 0.5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <Link
              href="/mobiles"
              onClick={() => setMobileOpen(false)}
              className={`nav-link ${isBrowseActive ? 'active' : ''}`}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <Smartphone size={16} />
              Browse Phones
            </Link>
            <Link
              href="/mobiles/compare"
              onClick={() => setMobileOpen(false)}
              className={`nav-link ${isCompareActive ? 'active' : ''}`}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Compare Phones
              </span>
              {selectedMobileSlugs.length > 0 && (
                <span
                  style={{
                    background: 'var(--color-accent)',
                    color: '#fff',
                    borderRadius: 'var(--radius-full)',
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
