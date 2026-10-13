'use client';

import React from 'react';
import { History, TrendingDown, TrendingUp, Minus } from 'lucide-react';
import type { PriceHistoryRecord } from '@/types/pricing';
import { formatMobilePrice } from '@/lib/mobiles';

interface PriceHistoryTableProps {
  history: PriceHistoryRecord[];
}

export function PriceHistoryTable({ history }: PriceHistoryTableProps) {
  if (!history || history.length === 0) return null;

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg, 12px)',
        padding: '1.25rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
        <History size={16} color="var(--color-accent)" />
        <h3 style={{ fontSize: '0.98rem', fontWeight: 700, margin: 0 }}>
          Verified Price History & Observation Log
        </h3>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="table" style={{ width: '100%', fontSize: '0.82rem' }}>
          <thead>
            <tr style={{ color: 'var(--color-text-tertiary)', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <th style={{ textAlign: 'left', padding: '6px 8px' }}>Observation Date</th>
              <th style={{ textAlign: 'left', padding: '6px 8px' }}>Source / Platform</th>
              <th style={{ textAlign: 'left', padding: '6px 8px' }}>Price Type</th>
              <th style={{ textAlign: 'right', padding: '6px 8px' }}>Observed Price</th>
              <th style={{ textAlign: 'center', padding: '6px 8px' }}>Trend</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record, idx) => {
              const prev = idx > 0 ? history[idx - 1] : null;
              const diff = prev ? record.price - prev.price : 0;

              return (
                <tr key={record.id || idx} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '8px', color: 'var(--color-text-secondary)' }}>
                    {new Date(record.observedAt).toLocaleDateString('en-IN', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </td>
                  <td style={{ padding: '8px', fontWeight: 600 }}>{record.platformName}</td>
                  <td style={{ padding: '8px', color: 'var(--color-text-tertiary)' }}>
                    {record.priceType === 'launch_msrp'
                      ? 'Launch MSRP'
                      : record.priceType === 'platform_listed'
                      ? 'Retail Listed'
                      : record.priceType === 'current_retail'
                      ? 'Official Retail'
                      : record.priceType}
                  </td>
                  <td style={{ padding: '8px', textAlign: 'right', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {formatMobilePrice(record.price)}
                  </td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>
                    {diff < 0 ? (
                      <span
                        style={{
                          color: 'var(--color-success)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '2px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
                        <TrendingDown size={12} />
                        -₹{Math.abs(diff).toLocaleString('en-IN')}
                      </span>
                    ) : diff > 0 ? (
                      <span
                        style={{
                          color: 'var(--color-danger)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '2px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
                        <TrendingUp size={12} />
                        +₹{diff.toLocaleString('en-IN')}
                      </span>
                    ) : (
                      <span style={{ color: 'var(--color-text-tertiary)', display: 'inline-flex', alignItems: 'center' }}>
                        <Minus size={12} />
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
