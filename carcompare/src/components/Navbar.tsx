'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Car, Smartphone, Layers } from 'lucide-react';
import { useCompare } from '@/context/CompareContext';
import { useMobileCompare } from '@/context/MobileCompareContext';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { selectedSlugs } = useCompare();
  const { selectedMobileSlugs } = useMobileCompare();
  const headerRef = useRef<HTMLElement>(null);

  // Close mobile navigation on Escape key or outside click
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

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen]);

  const isCarsActive =
    pathname.startsWith('/cars') ||
    pathname === '/compare' ||
    (pathname === '/' && !pathname.includes('mobiles'));

  const isMobilesActive = pathname.startsWith('/mobiles');

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
              aria-label="Static - but dynamic Home"
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
                  boxShadow: '2px 2px 8px rgba(196, 69, 69, 0.35)',
                }}
              >
                <Layers size={20} strokeWidth={2.2} />
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
              className="category-switch-desktop neu-inset"
              style={{
                padding: '3px',
                borderRadius: 'var(--radius-md)',
                gap: '3px',
              }}
            >
              <Link
                href="/cars"
                className={`nav-link ${isCarsActive ? 'active' : ''}`}
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
                className={`nav-link ${isMobilesActive ? 'active' : ''}`}
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.82rem',
                }}
              >
                <Smartphone size={14} />
                Mobiles
              </Link>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="nav-desktop">
            <Link
              href="/"
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>

            <Link
              href="/cars"
              className={`nav-link ${pathname.startsWith('/cars') ? 'active' : ''}`}
            >
              Browse Cars
            </Link>

            <Link
              href="/mobiles"
              className={`nav-link ${pathname.startsWith('/mobiles') && !pathname.includes('/compare') ? 'active' : ''}`}
            >
              Browse Mobiles
            </Link>

            <Link
              href={isMobilesActive ? '/mobiles/compare' : '/compare'}
              className={`nav-link ${pathname.includes('/compare') ? 'active' : ''}`}
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
                className="btn btn-primary btn-sm"
                style={{
                  background: 'var(--color-accent-blue)',
                  borderColor: 'var(--color-accent-blue)',
                }}
                aria-label={`Compare ${selectedMobileSlugs.length} selected mobiles`}
              >
                <Smartphone size={13} />
                Mobiles ({selectedMobileSlugs.length})
              </Link>
            )}

            {/* Mobile menu toggle */}
            <button
              className="btn btn-secondary btn-sm nav-mobile-toggle"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
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
            boxShadow: 'var(--shadow-dropdown)',
            borderTop: '1px solid var(--color-border)',
            padding: '1.25rem 1.5rem 1.75rem',
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <Link
              href="/cars"
              onClick={() => setMobileOpen(false)}
              className={`btn btn-sm ${isCarsActive ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1, padding: '0.625rem 1rem' }}
            >
              <Car size={14} /> Cars
            </Link>
            <Link
              href="/mobiles"
              onClick={() => setMobileOpen(false)}
              className={`btn btn-sm ${isMobilesActive ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1, padding: '0.625rem 1rem' }}
            >
              <Smartphone size={14} /> Mobiles
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
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
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.85rem 1rem',
                  fontSize: '0.95rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
