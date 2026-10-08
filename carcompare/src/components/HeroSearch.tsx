'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { getAllCars } from '@/lib/cars';
import Link from 'next/link';

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? getAllCars()
        .filter(
          (c) =>
            c.brand.toLowerCase().includes(trimmed) ||
            c.model.toLowerCase().includes(trimmed) ||
            c.displayName.toLowerCase().includes(trimmed) ||
            c.bodyType.toLowerCase().includes(trimmed) ||
            c.engine.fuelType.toLowerCase().includes(trimmed)
        )
        .slice(0, 5)
    : [];

  const open = isOpen && trimmed.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/cars?search=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
    }
  };

  return (
    <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} role="search">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '14px',
            padding: '0.25rem 0.25rem 0.25rem 1.25rem',
            gap: '0.75rem',
            transition: 'border-color 150ms, box-shadow 150ms',
          }}
          onFocus={() => query && setIsOpen(true)}
        >
          <Search size={18} color="rgba(255,255,255,0.45)" style={{ flexShrink: 0 }} />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            placeholder="Search cars, brands or models..."
            aria-label="Search cars"
            autoComplete="off"
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '1rem',
              padding: '0.625rem 0',
              fontFamily: 'inherit',
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); setIsOpen(false); }}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.375rem',
                borderRadius: '6px',
              }}
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ flexShrink: 0, borderRadius: '10px' }}
            aria-label="Submit search"
          >
            Search
          </button>
        </div>
      </form>

      {/* Dropdown results */}
      {open && results.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            zIndex: 50,
          }}
          role="listbox"
          aria-label="Search results"
        >
          {results.map((car, i) => (
            <Link
              key={car.id}
              href={`/cars/${car.slug}`}
              onClick={() => { setIsOpen(false); setQuery(''); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                padding: '0.875rem 1.125rem',
                borderBottom: i < results.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                textDecoration: 'none',
                transition: 'background 100ms',
              }}
              role="option"
              aria-selected="false"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--color-bg)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'var(--color-bg)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  flexShrink: 0,
                }}
              >
                🚗
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                  {car.displayName}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)' }}>
                  {car.bodyType} · {car.engine.fuelType}
                </p>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                ₹{car.pricing.minPriceLakh.toFixed(2)}L+
              </span>
            </Link>
          ))}
          <div
            style={{
              padding: '0.625rem 1.125rem',
              background: 'var(--color-bg)',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <Link
              href={`/cars?search=${encodeURIComponent(query)}`}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '0.82rem',
                color: 'var(--color-accent)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              See all results for &quot;{query}&quot; →
            </Link>
          </div>
        </div>
      )}

      {open && query && results.length === 0 && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '1.25rem',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            zIndex: 50,
          }}
        >
          <p style={{ color: 'var(--color-text-tertiary)', fontSize: '0.9rem' }}>
            No cars found for &quot;{query}&quot;
          </p>
        </div>
      )}
    </div>
  );
}
