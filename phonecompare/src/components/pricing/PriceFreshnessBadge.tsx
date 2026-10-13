'use client';

import React from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import type { FreshnessStatus } from '@/types/pricing';
import { formatFreshnessText } from '@/lib/pricing/validator';

interface PriceFreshnessBadgeProps {
  status: FreshnessStatus;
  observedAt: string;
  sourceName?: string;
  className?: string;
}

export function PriceFreshnessBadge({
  status,
  observedAt,
  sourceName,
  className = '',
}: PriceFreshnessBadgeProps) {
  const relativeText = formatFreshnessText(observedAt);

  let badgeColor = 'var(--color-success)';
  let bgColor = 'rgba(33, 134, 91, 0.12)';
  let borderColor = 'rgba(33, 134, 91, 0.25)';
  let Icon = CheckCircle2;

  if (status === 'stale') {
    badgeColor = 'var(--color-danger)';
    bgColor = 'rgba(196, 69, 69, 0.12)';
    borderColor = 'rgba(196, 69, 69, 0.25)';
    Icon = AlertCircle;
  } else if (status === 'cached') {
    badgeColor = 'var(--color-warning)';
    bgColor = 'rgba(183, 121, 31, 0.12)';
    borderColor = 'rgba(183, 121, 31, 0.25)';
    Icon = Clock;
  }

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '2px 8px',
        borderRadius: 'var(--radius-sm, 6px)',
        fontSize: '0.72rem',
        fontWeight: 600,
        color: badgeColor,
        background: bgColor,
        border: `1px solid ${borderColor}`,
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
      }}
      title={`Price verified on ${new Date(observedAt).toLocaleString('en-IN')}${sourceName ? ` via ${sourceName}` : ''}`}
    >
      <Icon size={11} style={{ flexShrink: 0 }} />
      <span>{relativeText}</span>
    </span>
  );
}
