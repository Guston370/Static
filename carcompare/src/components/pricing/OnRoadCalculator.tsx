'use client';

import React, { useState } from 'react';
import { MapPin, Calculator, Info, FileText } from 'lucide-react';
import { calculateOnRoadPrice, MAJOR_INDIAN_CITIES } from '@/lib/pricing/onroad';

interface OnRoadCalculatorProps {
  carName: string;
  exShowroomInr: number;
  fuelType: string;
  variantName?: string;
}

export function OnRoadCalculator({
  carName,
  exShowroomInr,
  fuelType,
  variantName,
}: OnRoadCalculatorProps) {
  const [selectedCity, setSelectedCity] = useState<string>('delhi');

  const breakdown = calculateOnRoadPrice(exShowroomInr, fuelType, selectedCity);

  return (
    <div
      className="card"
      style={{
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg, 16px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              padding: '6px',
              borderRadius: '8px',
              background: 'rgba(196, 69, 69, 0.12)',
              color: 'var(--color-accent)',
              display: 'flex',
            }}
          >
            <Calculator size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--color-text-primary)' }}>
              On-Road Price Breakdown
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
              {variantName ? `${variantName} · ` : ''}{fuelType} Powertrain
            </span>
          </div>
        </div>

        {/* City Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPin size={15} color="var(--color-accent)" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="input"
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.82rem',
              fontWeight: 600,
              width: 'auto',
              minWidth: '150px',
              cursor: 'pointer',
            }}
            aria-label="Select City for On-Road Price Estimation"
          >
            {Object.entries(MAJOR_INDIAN_CITIES).map(([key, rule]) => (
              <option key={key} value={key}>
                {rule.city} ({rule.code})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Primary Price Hero */}
      <div
        className="neu-inset"
        style={{
          padding: '1rem 1.25rem',
          borderRadius: 'var(--radius-md, 10px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div>
          <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
            Estimated On-Road Price ({breakdown.city})
          </span>
          <div
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              marginTop: '2px',
            }}
          >
            ₹{breakdown.totalOnRoadLakh} Lakh
            <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginLeft: '8px' }}>
              (₹{breakdown.totalOnRoad.toLocaleString('en-IN')})
            </span>
          </div>
        </div>

        <div style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)' }}>
          State: <strong style={{ color: 'var(--color-text-secondary)' }}>{breakdown.state}</strong>
        </div>
      </div>

      {/* Itemized Table */}
      <div style={{ overflowX: 'auto' }}>
        <table className="table" style={{ width: '100%', fontSize: '0.85rem' }}>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
              <td style={{ padding: '8px 4px', color: 'var(--color-text-secondary)' }}>Ex-Showroom Price</td>
              <td style={{ padding: '8px 4px', textAlign: 'right', fontWeight: 600 }}>
                ₹{exShowroomInr.toLocaleString('en-IN')}
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
              <td style={{ padding: '8px 4px', color: 'var(--color-text-secondary)' }}>
                RTO Road Tax & Registration Charges
                {breakdown.rtoRegistration === 0 && (
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-success)', marginLeft: '6px' }}>
                    (100% EV Waiver Applied)
                  </span>
                )}
              </td>
              <td style={{ padding: '8px 4px', textAlign: 'right', fontWeight: 600 }}>
                +₹{breakdown.rtoRegistration.toLocaleString('en-IN')}
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
              <td style={{ padding: '8px 4px', color: 'var(--color-text-secondary)' }}>
                Comprehensive Insurance (1yr Own Damage + 3yr Third Party)
              </td>
              <td style={{ padding: '8px 4px', textAlign: 'right', fontWeight: 600 }}>
                +₹{breakdown.insuranceComprehensive.toLocaleString('en-IN')}
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
              <td style={{ padding: '8px 4px', color: 'var(--color-text-secondary)' }}>
                Tax Collected at Source (TCS 1% on Ex-Showroom &gt; ₹10L)
              </td>
              <td style={{ padding: '8px 4px', textAlign: 'right', fontWeight: 600 }}>
                {breakdown.tcsTaxCollectedAtSource > 0
                  ? `+₹${breakdown.tcsTaxCollectedAtSource.toLocaleString('en-IN')}`
                  : '₹0 (Not Applicable)'}
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-strong)' }}>
              <td style={{ padding: '8px 4px', color: 'var(--color-text-secondary)' }}>
                FASTag & Smart Card RC Fee
              </td>
              <td style={{ padding: '8px 4px', textAlign: 'right', fontWeight: 600 }}>
                +₹{breakdown.fastagAndGovtFees.toLocaleString('en-IN')}
              </td>
            </tr>
            <tr style={{ fontWeight: 800, fontSize: '0.95rem' }}>
              <td style={{ padding: '10px 4px', color: 'var(--color-text-primary)' }}>
                Total On-Road Estimate
              </td>
              <td style={{ padding: '10px 4px', textAlign: 'right', color: 'var(--color-accent)' }}>
                ₹{breakdown.totalOnRoad.toLocaleString('en-IN')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Assumptions & Disclaimers */}
      <div
        style={{
          background: 'var(--color-surface-inset)',
          padding: '0.85rem 1rem',
          borderRadius: 'var(--radius-sm, 8px)',
          border: '1px solid var(--color-border-subtle)',
          fontSize: '0.74rem',
          color: 'var(--color-text-tertiary)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
          <Info size={13} color="var(--color-accent)" />
          <span>Calculation Assumptions & Disclaimers</span>
        </div>
        <ul style={{ paddingLeft: '1.25rem', margin: '4px 0 0 0', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {breakdown.assumptions.map((asm, i) => (
            <li key={i}>{asm}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
