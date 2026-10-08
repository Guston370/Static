'use client';

import Link from 'next/link';
import { X, Smartphone, ChevronRight } from 'lucide-react';
import { useMobileCompare } from '@/context/MobileCompareContext';
import { getMobileBySlug } from '@/lib/mobiles';

export function MobileComparisonTray() {
  const { selectedMobileSlugs, removeMobile, clearMobiles } = useMobileCompare();

  if (selectedMobileSlugs.length === 0) return null;

  const compareUrl = `/mobiles/compare?mobiles=${selectedMobileSlugs.join(',')}`;

  return (
    <div
      className="comparison-tray visible"
      role="region"
      aria-label="Mobile comparison tray"
      aria-live="polite"
      style={{
        zIndex: 55,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <Smartphone size={18} color="var(--color-accent)" />
          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
            {selectedMobileSlugs.length} phone{selectedMobileSlugs.length > 1 ? 's' : ''} selected
          </span>
        </div>

        {/* Selected phones */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flex: 1,
            flexWrap: 'wrap',
          }}
        >
          {selectedMobileSlugs.map((slug) => {
            const mobile = getMobileBySlug(slug);
            if (!mobile) return null;
            return (
              <div
                key={slug}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.625rem',
                  fontSize: '0.82rem',
                }}
              >
                <span>{mobile.brand} {mobile.modelName}</span>
                <button
                  onClick={() => removeMobile(slug)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1px',
                    borderRadius: '3px',
                  }}
                  aria-label={`Remove ${mobile.brand} ${mobile.modelName} from comparison`}
                >
                  <X size={13} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
          <button
            onClick={clearMobiles}
            className="btn btn-ghost btn-sm"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            aria-label="Clear all phones from comparison"
          >
            Clear all
          </button>
          <Link
            href={compareUrl}
            className="btn btn-primary btn-sm"
            aria-label="Go to mobile comparison page"
          >
            Compare Now
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
