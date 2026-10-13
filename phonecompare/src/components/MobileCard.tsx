'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Check, Cpu, Battery, Smartphone, ShieldCheck } from 'lucide-react';
import type { MobileModel } from '@/types/mobile';
import { formatMobilePriceRange } from '@/lib/mobiles';
import { useMobileCompare } from '@/context/MobileCompareContext';
import { getMobilePriceSnapshot } from '@/lib/pricing/service';
import { PriceFreshnessBadge } from '@/components/pricing/PriceFreshnessBadge';

interface MobileCardProps {
  mobile: MobileModel;
  showCompare?: boolean;
}

export function MobileCard({ mobile, showCompare = true }: MobileCardProps) {
  const { isMobileSelected, addMobile, removeMobile, isFull } = useMobileCompare();
  const selected = isMobileSelected(mobile.slug);
  const priceSnapshot = getMobilePriceSnapshot(mobile);
  const [imgSrc, setImgSrc] = useState<string>(
    mobile.primaryImage || '/mobiles/images/phone-placeholder.svg'
  );

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (selected) {
      removeMobile(mobile.slug);
    } else if (!isFull) {
      addMobile(mobile.slug);
    }
  };

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
            border: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
          }}
        >
          {/* Subtle phone halo background effect in blue */}
          <div
            style={{
              position: 'absolute',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(53, 106, 230, 0.22) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />

          <Image
            src={imgSrc}
            alt={mobile.primaryImageAlt || `${mobile.brand} ${mobile.modelName} photo`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgSrc('/mobiles/images/phone-placeholder.svg')}
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
              borderRadius: 'var(--radius-sm)',
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

          {/* Availability Status Badge */}
          {mobile.status === 'discontinued' ? (
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(71, 85, 105, 0.9)',
                color: '#f8fafc',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(4px)',
                zIndex: 2,
              }}
            >
              Discontinued
            </span>
          ) : mobile.status === 'upcoming' ? (
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(183, 121, 31, 0.25)',
                color: '#fbbf24',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                border: '1px solid rgba(183, 121, 31, 0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 2,
              }}
            >
              Upcoming
            </span>
          ) : (
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '0.68rem',
                fontWeight: 600,
                padding: '2px 7px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(33, 134, 91, 0.22)',
                color: '#34d399',
                border: '1px solid rgba(33, 134, 91, 0.45)',
                letterSpacing: '0.02em',
                backdropFilter: 'blur(4px)',
                zIndex: 2,
              }}
            >
              Active
            </span>
          )}

          {/* 5G Badge */}
          {mobile.connectivity?.has5G && (
            <span
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--color-accent)',
                color: '#fff',
                letterSpacing: '0.02em',
                zIndex: 2,
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

        {/* Pricing & Freshness */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px', flexWrap: 'wrap', marginBottom: '2px' }}>
            <div
              style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--color-accent)',
                letterSpacing: '-0.02em',
              }}
            >
              {formatMobilePriceRange(mobile)}
            </div>
            <PriceFreshnessBadge
              status={priceSnapshot.priceFreshness}
              observedAt={priceSnapshot.lastCheckedAt}
              sourceName={priceSnapshot.bestPlatform === 'amazon_in' ? 'Amazon India' : 'Official Store'}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--color-text-tertiary)' }}>
            <span>Starting Ex-Store Price</span>
            <span>·</span>
            <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>
              {priceSnapshot.sources.length} Verified Stores
            </span>
          </div>
        </div>

        {/* Quick Specs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.45rem',
            background: 'var(--color-surface-sunken)',
            padding: '0.65rem 0.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border-subtle)',
            fontSize: '0.78rem',
          }}
        >
          {/* Display */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.7rem' }}>Screen</span>
            <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
              {mobile.display?.displaySize ? `${mobile.display.displaySize}"` : 'Screen'} · {mobile.display?.refreshRate || 60}Hz
            </span>
          </div>

          {/* Battery */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.7rem' }}>Battery</span>
            <span style={{ fontWeight: 600, color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Battery size={11} color="var(--color-accent)" />
              {mobile.battery?.batteryCapacity || '4000'}mAh · {mobile.battery?.wiredCharging || 18}W
            </span>
          </div>

          {/* Chipset */}
          <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '5px', paddingTop: '2px', borderTop: '1px solid var(--color-border-subtle)' }}>
            <Cpu size={12} color="var(--color-accent)" style={{ flexShrink: 0 }} />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.74rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {mobile.performance?.chipset ? mobile.performance.chipset.split('(')[0].trim() : 'Chipset unlisted'}
            </span>
          </div>
        </div>

        {/* Feature Pills */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          <span className="badge badge-neutral">
            {mobile.software?.operatingSystem || 'Android'} {mobile.software?.ui ? `(${mobile.software.ui})` : ''}
          </span>
          {mobile.physical?.waterResistance && (
            <span className="badge badge-neutral" style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
              <ShieldCheck size={11} color="var(--color-success)" />
              {mobile.physical.waterResistance.split(' ')[0]}
            </span>
          )}
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
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <button
                onClick={handleCompareToggle}
                className={`btn btn-sm ${selected ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '0.45rem 0.65rem',
                  minWidth: selected ? '88px' : '82px',
                  transition: 'all 150ms ease',
                }}
                disabled={!selected && isFull}
                aria-pressed={selected}
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
              <span className="sr-only" role="status" aria-live="polite">
                {selected ? `${mobile.brand} ${mobile.modelName} added to comparison list` : ''}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
