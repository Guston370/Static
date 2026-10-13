'use client';

import React from 'react';
import { ExternalLink, ShieldCheck, Car, Search } from 'lucide-react';
import type { SourceLink } from '@/types/pricing';

interface PlatformLinksListProps {
  links: SourceLink[];
  productName: string;
  compact?: boolean;
}

export function PlatformLinksList({
  links,
  productName,
  compact = false,
}: PlatformLinksListProps) {
  if (!links || links.length === 0) return null;

  if (compact) {
    return (
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
        {links.map((link, idx) => {
          return (
            <a
              key={`${link.platform}-${idx}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{
                fontSize: '0.74rem',
                padding: '3px 8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none',
              }}
              aria-label={`Open ${link.label} for ${productName} (opens in new tab)`}
            >
              {link.isOfficialManufacturer ? (
                <ShieldCheck size={11} color="var(--color-accent)" />
              ) : (
                <Car size={11} color="var(--color-text-secondary)" />
              )}
              <span>{link.label}</span>
              <ExternalLink size={9} style={{ opacity: 0.6 }} />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '0.75rem',
      }}
    >
      {links.map((link, idx) => {
        return (
          <a
            key={`${link.platform}-${idx}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              padding: '0.85rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 150ms ease',
            }}
            aria-label={`View ${productName} on ${link.label} (opens in new tab)`}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {link.isOfficialManufacturer ? (
                  <ShieldCheck size={15} color="var(--color-accent)" />
                ) : link.platform === 'cardekho' ? (
                  <Car size={15} color="var(--color-accent-blue, #356AE6)" />
                ) : (
                  <Search size={15} color="var(--color-text-tertiary)" />
                )}
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-text-primary)' }}>
                  {link.label}
                </span>
              </div>
              <ExternalLink size={12} style={{ color: 'var(--color-text-tertiary)' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: link.isOfficialManufacturer
                    ? 'rgba(196, 69, 69, 0.12)'
                    : 'var(--color-surface-inset)',
                  color: link.isOfficialManufacturer ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                }}
              >
                {link.badgeText || (link.isOfficialManufacturer ? 'Official' : 'Research Portal')}
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)' }}>
                {link.isDirectProductPage ? 'Direct Vehicle Overview' : 'Authorized Manufacturer Link'}
              </span>
            </div>

            {link.note && (
              <p style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)', marginTop: '4px', lineHeight: 1.35 }}>
                {link.note}
              </p>
            )}
          </a>
        );
      })}
    </div>
  );
}
