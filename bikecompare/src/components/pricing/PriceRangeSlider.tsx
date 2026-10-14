'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';

interface PriceRangeSliderProps {
  minLimit: number;
  maxLimit: number;
  minValue: number;
  maxValue: number;
  step?: number;
  formatType?: 'inr' | 'lakh';
  onChange: (min: number, max: number) => void;
  onReset?: () => void;
  label?: string;
}

export function formatPriceDisplay(value: number, formatType: 'inr' | 'lakh' = 'inr'): string {
  if (formatType === 'lakh') {
    return `₹${value.toFixed(2)} Lakh`;
  }
  return `₹${value.toLocaleString('en-IN')}`;
}

export function PriceRangeSlider({
  minLimit,
  maxLimit,
  minValue,
  maxValue,
  step = 5000,
  formatType = 'inr',
  onChange,
  onReset,
  label = 'Ex-Showroom Price Range',
}: PriceRangeSliderProps) {
  const currentMin = Math.max(minLimit, Math.min(minValue, maxValue));
  const currentMax = Math.min(maxLimit, Math.max(minValue, maxValue));

  const minPercent = Math.min(
    100,
    Math.max(0, ((currentMin - minLimit) / (maxLimit - minLimit)) * 100)
  );
  const maxPercent = Math.min(
    100,
    Math.max(0, ((currentMax - minLimit) / (maxLimit - minLimit)) * 100)
  );

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) return;
    const clamped = Math.max(minLimit, Math.min(val, currentMax));
    onChange(clamped, currentMax);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) return;
    const clamped = Math.min(maxLimit, Math.max(val, currentMin));
    onChange(currentMin, clamped);
  };

  const isCustomRange = currentMin > minLimit || currentMax < maxLimit;

  return (
    <div className="price-range-slider-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
          {label}
        </span>
        {isCustomRange && onReset && (
          <button
            type="button"
            onClick={onReset}
            className="btn btn-ghost btn-sm"
            style={{ padding: '0.15rem 0.5rem', fontSize: '0.75rem', height: 'auto', gap: '0.25rem' }}
            title="Reset price range"
          >
            <RotateCcw size={11} /> Reset
          </button>
        )}
      </div>

      <div
        style={{
          background: 'var(--color-surface-inset)',
          boxShadow: 'var(--shadow-neu-inset)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.45rem 0.75rem',
          fontSize: '0.86rem',
          fontWeight: 700,
          color: 'var(--color-accent)',
          textAlign: 'center',
          letterSpacing: '0.01em',
        }}
      >
        {formatPriceDisplay(currentMin, formatType)} — {formatPriceDisplay(currentMax, formatType)}
      </div>

      <div className="range-slider-container">
        <div className="range-slider-track" />
        <div
          className="range-slider-progress"
          style={{
            left: `${minPercent}%`,
            width: `${Math.max(0, maxPercent - minPercent)}%`,
          }}
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={step}
          value={currentMin}
          onChange={handleMinChange}
          className="range-slider-input"
          aria-label={`${label} minimum value`}
          aria-valuemin={minLimit}
          aria-valuemax={currentMax}
          aria-valuenow={currentMin}
          style={{ zIndex: currentMin > maxLimit - 1000 ? 5 : 3 }}
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={step}
          value={currentMax}
          onChange={handleMaxChange}
          className="range-slider-input"
          aria-label={`${label} maximum value`}
          aria-valuemin={currentMin}
          aria-valuemax={maxLimit}
          aria-valuenow={currentMax}
          style={{ zIndex: 4 }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '0.5rem', alignItems: 'center' }}>
        <div>
          <label style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)', display: 'block', marginBottom: '0.2rem' }}>
            Min (₹)
          </label>
          <input
            type="number"
            min={minLimit}
            max={currentMax}
            step={step}
            value={currentMin}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              if (!isNaN(val)) onChange(Math.max(minLimit, Math.min(val, currentMax)), currentMax);
            }}
            className="input"
            style={{ padding: '0.4rem 0.6rem', fontSize: '0.82rem', textAlign: 'center' }}
            aria-label="Minimum price input"
          />
        </div>

        <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.8rem', marginTop: '1rem', fontWeight: 600 }}>
          to
        </span>

        <div>
          <label style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)', display: 'block', marginBottom: '0.2rem' }}>
            Max (₹)
          </label>
          <input
            type="number"
            min={currentMin}
            max={maxLimit}
            step={step}
            value={currentMax}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              if (!isNaN(val)) onChange(currentMin, Math.min(maxLimit, Math.max(val, currentMin)));
            }}
            className="input"
            style={{ padding: '0.4rem 0.6rem', fontSize: '0.82rem', textAlign: 'center' }}
            aria-label="Maximum price input"
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--color-text-tertiary)' }}>
        <span>Min: {formatPriceDisplay(minLimit, formatType)}</span>
        <span>Max: {formatPriceDisplay(maxLimit, formatType)}</span>
      </div>
    </div>
  );
}
