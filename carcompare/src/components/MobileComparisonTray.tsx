'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { X, Smartphone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useMobileCompare } from '@/context/MobileCompareContext';
import { useCompare } from '@/context/CompareContext';
import { getMobileBySlug } from '@/lib/mobiles';

export function MobileComparisonTray() {
  const { selectedMobileSlugs, removeMobile, clearMobiles } = useMobileCompare();
  const { selectedSlugs } = useCompare();
  const [feedback, setFeedback] = useState<string | null>(null);
  const prevCountRef = useRef(selectedMobileSlugs.length);

  const hasCarTray = selectedSlugs.length > 0;

  useEffect(() => {
    if (selectedMobileSlugs.length > prevCountRef.current && prevCountRef.current > 0) {
      setFeedback('Smartphone added to comparison');
      const timer = setTimeout(() => setFeedback(null), 2500);
      return () => clearTimeout(timer);
    }
    prevCountRef.current = selectedMobileSlugs.length;
  }, [selectedMobileSlugs.length]);

  const handleRemove = (slug: string, name: string) => {
    removeMobile(slug);
    setFeedback(`Removed ${name} from comparison`);
    setTimeout(() => setFeedback(null), 2500);
  };

  const handleClear = () => {
    clearMobiles();
    setFeedback('Smartphone comparison cleared');
    setTimeout(() => setFeedback(null), 2500);
  };

  if (selectedMobileSlugs.length === 0) {
    if (feedback) {
      return (
        <div
          className="toast-status toast-accent"
          style={{ bottom: hasCarTray ? '9.5rem' : '5.5rem' }}
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 size={16} />
          <span>{feedback}</span>
        </div>
      );
    }
    return null;
  }

  const compareUrl = `/mobiles/compare?mobiles=${selectedMobileSlugs.join(',')}`;

  return (
    <>
      {feedback && (
        <div
          className="toast-status toast-accent"
          style={{ bottom: hasCarTray ? '9.5rem' : '5.5rem' }}
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 size={16} />
          <span>{feedback}</span>
        </div>
      )}
      <div
        className="comparison-tray visible"
        role="region"
        aria-label="Mobile comparison tray"
        aria-live="polite"
        style={{
          zIndex: 55,
          bottom: hasCarTray ? '68px' : '0',
          borderTop: hasCarTray ? '1px solid rgba(255,255,255,0.1)' : undefined,
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
              const phoneName = `${mobile.brand} ${mobile.modelName}`;
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
                  <span>{phoneName}</span>
                  <button
                    onClick={() => handleRemove(slug, phoneName)}
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
                    aria-label={`Remove ${phoneName} from comparison`}
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
              onClick={handleClear}
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
    </>
  );
}
