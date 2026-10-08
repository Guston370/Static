'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Smartphone } from 'lucide-react';
import { getAllMobiles, formatMobilePrice } from '@/lib/mobiles';
import Link from 'next/link';

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? getAllMobiles()
        .filter(
          (m) =>
            m.brand.toLowerCase().includes(trimmed) ||
            m.modelName.toLowerCase().includes(trimmed) ||
            `${m.brand} ${m.modelName}`.toLowerCase().includes(trimmed) ||
            m.performance.chipset.toLowerCase().includes(trimmed)
        )
        .slice(0, 6)
    : [];

  const open = isOpen && trimmed.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/mobiles?search=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
    }
  };

  return (
    <div style={{ position: 'relative', maxWidth: '580px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} role="search">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: '14px',
            padding: '0.35rem 0.35rem 0.35rem 1.25rem',
            gap: '0.75rem',
            transition: 'border-color 150ms, box-shadow 150ms',
          }}
          onFocus={() => query && setIsOpen(true)}
        >
          <Search size={18} color="rgba(255,255,255,0.5)" style={{ flexShrink: 0 }} />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            placeholder="Search phones, brands, chipsets or series (e.g. Galaxy, iPhone, Nord)..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '0.95rem',
              padding: '0.5rem 0',
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={16} />
            </button>
          )}
          <button
            type="submit"
            style={{
              background: 'var(--color-accent)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '0.65rem 1.25rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background 150ms',
            }}
          >
            Search
          </button>
        </div>
      </form>

      {/* Autocomplete dropdown */}
      {open && (
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
            zIndex: 50,
            overflow: 'hidden',
          }}
        >
          {results.length > 0 ? (
            <div>
              {results.map((m) => (
                <Link
                  key={m.id}
                  href={`/mobiles/${m.slug}`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.25rem',
                    textDecoration: 'none',
                    color: 'var(--color-text-primary)',
                    borderBottom: '1px solid var(--color-border-subtle)',
                    transition: 'background 150ms',
                  }}
                  className="search-result-item"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Smartphone size={16} color="var(--color-accent)" />
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                        {m.brand} {m.modelName}
                      </span>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--color-text-secondary)',
                          marginLeft: '0.5rem',
                        }}
                      >
                        {m.performance.chipset}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                    }}
                  >
                    {formatMobilePrice(m.pricing.startingPrice)}
                  </span>
                </Link>
              ))}
              <div
                style={{
                  padding: '0.75rem 1.25rem',
                  background: 'var(--color-border-subtle)',
                  textAlign: 'center',
                }}
              >
                <button
                  type="button"
                  onClick={handleSubmit}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-accent)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  View all results for &ldquo;{query}&rdquo; &rarr;
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: '1.25rem',
                textAlign: 'center',
                color: 'var(--color-text-secondary)',
                fontSize: '0.9rem',
              }}
            >
              No phones found matching &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
