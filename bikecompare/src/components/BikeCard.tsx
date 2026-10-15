'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bike, Zap, Fuel, ArrowRight, Check, Plus, History } from 'lucide-react';
import type { Bike as BikeType } from '@/types/bike';
import { useBikeCompare } from '@/context/BikeCompareContext';

export function BikeCard({ bike }: { bike: BikeType }) {
  const isEV = bike.fuelType === 'Electric';
  const isCNG = bike.fuelType === 'CNG';
  const isDiscontinued = bike.status === 'discontinued';
  const { isBikeSelected, addBike, removeBike } = useBikeCompare();
  const isSelected = isBikeSelected(bike.slug);
  const [imageError, setImageError] = useState(false);

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSelected) {
      removeBike(bike.slug);
    } else {
      addBike(bike.slug);
    }
  };

  return (
    <article className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Visual Header / Image Container */}
      <div
        style={{
          position: 'relative',
          height: '190px',
          background: 'linear-gradient(135deg, var(--color-surface-sunken) 0%, var(--color-surface-inset) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {bike.image && !imageError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bike.image}
            alt={`${bike.brand} ${bike.model}`}
            loading="lazy"
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 300ms ease',
            }}
            className="bike-card-image"
          />
        ) : (
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
                color: 'var(--color-accent)',
                margin: '0 auto 0.75rem',
              }}
            >
              <Bike size={32} />
            </div>
          </div>
        )}

        {/* Top Badges overlay */}
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            right: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pointerEvents: 'none',
          }}
        >
          <span className={`badge ${isEV ? 'badge-success' : isCNG ? 'badge-accent' : 'badge-neutral'}`} style={{ backdropFilter: 'blur(4px)' }}>
            {isEV ? <Zap size={11} /> : <Fuel size={11} />} {bike.category}
          </span>

          {isDiscontinued ? (
            <span
              className="badge"
              style={{
                background: 'rgba(100, 116, 139, 0.85)',
                color: '#fff',
                backdropFilter: 'blur(4px)',
                gap: '0.25rem',
                fontSize: '0.7rem',
              }}
            >
              <History size={11} /> Discontinued
            </span>
          ) : (
            <span
              className="badge badge-success"
              style={{
                backdropFilter: 'blur(4px)',
                fontSize: '0.7rem',
              }}
            >
              Active
            </span>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.04em' }}>
              {bike.brand}
            </span>
            {bike.launchYear && (
              <span style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)' }}>
                {bike.launchYear}
              </span>
            )}
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
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-primary)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              {bike.abs.split(' ')[0]}
            </div>
          </div>
        </div>

        {/* Price & Action */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border-subtle)', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}>
              {isDiscontinued ? 'Last Known Ex-Showroom' : 'Ex-Showroom'}
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-accent)' }}>
              ₹{bike.startingPrice.toLocaleString('en-IN')}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <button
              type="button"
              onClick={toggleCompare}
              className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}
              aria-label={isSelected ? `Remove ${bike.brand} ${bike.model} from comparison` : `Add ${bike.brand} ${bike.model} to comparison`}
            >
              {isSelected ? <Check size={13} /> : <Plus size={13} />}
              {isSelected ? 'Added' : 'Compare'}
            </button>
            <Link href={`/bikes/${bike.slug}`} className="btn btn-secondary btn-sm" aria-label={`View specs for ${bike.brand} ${bike.model}`}>
              Specs <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
