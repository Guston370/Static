'use client';

import React from 'react';
import Link from 'next/link';
import { Bike, Zap, Fuel, ArrowRight } from 'lucide-react';
import type { Bike as BikeType } from '@/types/bike';

export function BikeCard({ bike }: { bike: BikeType }) {
  const isEV = bike.fuelType === 'Electric';

  return (
    <article className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Visual Header */}
      <div
        style={{
          position: 'relative',
          height: '180px',
          background: 'linear-gradient(135deg, var(--color-surface-sunken) 0%, var(--color-surface-inset) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--color-surface)',
              boxShadow: 'var(--shadow-neu-button)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              margin: '0 auto 0.75rem',
            }}
          >
            <Bike size={32} />
          </div>
          <span className={`badge ${isEV ? 'badge-success' : 'badge-neutral'}`}>
            {isEV ? <Zap size={12} /> : <Fuel size={12} />} {bike.category}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.04em' }}>
            {bike.brand}
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {bike.model}
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem', lineHeight: 1.4 }}>
            {bike.tagline}
          </p>
        </div>

        {/* Quick Specs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.4rem',
            padding: '0.6rem',
            background: 'var(--color-surface-inset)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>POWER</div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {bike.maxPowerBhp} bhp
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
              {isEV ? 'RANGE' : 'DISPLACEMENT'}
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {isEV ? `${bike.electricRangeKm} km` : `${bike.displacementCC} cc`}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>BRAKING</div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {bike.abs.split(' ')[0]}
            </div>
          </div>
        </div>

        {/* Price & Action */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border-subtle)' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}>
              Ex-Showroom
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#EA580C' }}>
              ₹{bike.startingPrice.toLocaleString('en-IN')}
            </div>
          </div>

          <Link href={`/bikes/${bike.slug}`} className="btn btn-secondary btn-sm" aria-label={`View specs for ${bike.brand} ${bike.model}`}>
            Specs <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}
