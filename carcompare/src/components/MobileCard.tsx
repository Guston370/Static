'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Plus, Check, Cpu, Battery, Smartphone, ShieldCheck } from 'lucide-react';
import type { MobileModel } from '@/types/mobile';
import { formatMobilePriceRange } from '@/lib/mobiles';
import { useMobileCompare } from '@/context/MobileCompareContext';

interface MobileCardProps {
  mobile: MobileModel;
  showCompare?: boolean;
}

export function MobileCard({ mobile, showCompare = true }: MobileCardProps) {
  const { isMobileSelected, addMobile, removeMobile, isFull } = useMobileCompare();
  const selected = isMobileSelected(mobile.slug);

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (selected) {
      removeMobile(mobile.slug);
    } else if (!isFull) {
      addMobile(mobile.slug);
    }
  };

  const imageSrc = mobile.primaryImage || '/images/phone-placeholder.png';
  const isRemoteImage = imageSrc.startsWith('http');

  return (
    <article
      className="card"
      style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
    >
      {/* Product Image */}
      <Link
        href={`/mobiles/${mobile.slug}`}
        style={{ display: 'block', textDecoration: 'none' }}
        className="group"
      >
        <div
          style={{
            position: 'relative',
            height: '220px',
            background: 'linear-gradient(145deg, #18191c 0%, #202226 100%)',
            overflow: 'hidden',
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
          }}
        >
          {/* Subtle phone halo background effect */}
          <div
            style={{
              position: 'absolute',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(193,56,42,0.18) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />

          <Image
            src={imageSrc}
            alt={mobile.primaryImageAlt || `${mobile.brand} ${mobile.modelName} photo`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized={isRemoteImage}
            style={{
              objectFit: 'contain',
              padding: '12px',
              transition: 'transform 300ms ease',
            }}
            className="group-hover:scale-105"
          />

          {/* Perspective badge */}
          <span
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              fontSize: '0.68rem',
              fontWeight: 600,
              padding: '2px 7px',
              borderRadius: '4px',
              background: 'rgba(0,0,0,0.7)',
              color: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(4px)',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Smartphone size={10} />
            Official
          </span>

          {/* 5G Badge */}
          {mobile.connectivity.has5G && (
            <span
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: '4px',
                background: 'var(--color-accent)',
                color: '#fff',
                letterSpacing: '0.02em',
              }}
            >
              5G
            </span>
          )}
        </div>
      </Link>

      {/* Body */}
      <div
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '0.75rem',
        }}
      >
        {/* Brand & Model */}
        <div>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--color-text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {mobile.brand}
          </span>
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              marginTop: '1px',
            }}
          >
            <Link
              href={`/mobiles/${mobile.slug}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {mobile.modelName}
            </Link>
          </h3>
        </div>

        {/* Pricing */}
        <div>
          <div
            style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            {formatMobilePriceRange(mobile)}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
            Ex-store starting price
          </span>
        </div>

        {/* Quick Specs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.45rem',
            background: 'var(--color-surface-sunken)',
            padding: '0.65rem 0.75rem',
            borderRadius: '6px',
            border: '1px solid var(--color-border-subtle)',
            fontSize: '0.78rem',
          }}
        >
          {/* Display */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.7rem' }}>Screen</span>
            <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
              {mobile.display.displaySize}&quot; · {mobile.display.refreshRate}Hz
            </span>
          </div>

          {/* Battery */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.7rem' }}>Battery</span>
            <span style={{ fontWeight: 600, color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Battery size={11} color="var(--color-accent)" />
              {mobile.battery.batteryCapacity}mAh · {mobile.battery.wiredCharging}W
            </span>
          </div>

          {/* Chipset */}
          <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '5px', paddingTop: '2px', borderTop: '1px solid var(--color-border-subtle)' }}>
            <Cpu size={12} color="var(--color-accent)" style={{ flexShrink: 0 }} />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.74rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {mobile.performance.chipset.split('(')[0].trim()}
            </span>
          </div>
        </div>

        {/* Feature Pills */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: '0.72rem',
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {mobile.software.operatingSystem} {mobile.software.ui ? `(${mobile.software.ui})` : ''}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            <ShieldCheck size={11} color="var(--color-success)" />
            {mobile.physical.waterResistance.split(' ')[0]}
          </span>
        </div>

        {/* Actions */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
          }}
        >
          <Link
            href={`/mobiles/${mobile.slug}`}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, textAlign: 'center' }}
          >
            View Details
          </Link>

          {showCompare && (
            <button
              onClick={handleCompareToggle}
              className={`btn btn-sm ${selected ? 'btn-primary' : 'btn-outline'}`}
              style={{
                flexShrink: 0,
                padding: '0.45rem 0.65rem',
                minWidth: selected ? '88px' : '82px',
              }}
              disabled={!selected && isFull}
              aria-label={
                selected
                  ? `Remove ${mobile.brand} ${mobile.modelName} from compare`
                  : `Add ${mobile.brand} ${mobile.modelName} to compare`
              }
            >
              {selected ? (
                <>
                  <Check size={13} />
                  Added
                </>
              ) : (
                <>
                  <Plus size={13} />
                  Compare
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
