'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Plus, Check, Zap, Fuel, Star, Users } from 'lucide-react';
import type { Car } from '@/types/car';
import { formatPriceRange } from '@/lib/cars';
import { useCompare } from '@/context/CompareContext';

interface CarCardProps {
  car: Car;
  /** Show the compare toggle button. Default true. */
  showCompare?: boolean;
}

function NCAPStars({ rating }: { rating: number | null }) {
  if (rating === null) return <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.78rem' }}>Not rated</span>;
  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={11}
          fill={i < rating ? '#f59e0b' : 'none'}
          color={i < rating ? '#f59e0b' : '#d4d4d0'}
          strokeWidth={1.5}
        />
      ))}
      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', marginLeft: '3px' }}>
        NCAP
      </span>
    </div>
  );
}

export function CarCard({ car, showCompare = true }: CarCardProps) {
  const { isSelected, addCar, removeCar, isFull } = useCompare();
  const selected = isSelected(car.slug);

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (selected) {
      removeCar(car.slug);
    } else if (!isFull) {
      addCar(car.slug);
    }
  };

  return (
    <article
      className="card"
      style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image */}
      <Link
        href={`/cars/${car.slug}`}
        style={{ display: 'block', textDecoration: 'none' }}
        className="group"
      >
        <div
          style={{
            position: 'relative',
            aspectRatio: '16/9',
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            overflow: 'hidden',
          }}
          className="car-image-container"
        >
          <Image
            src={car.primaryImage}
            alt={car.primaryImageAlt || `${car.displayName} front three-quarter view`}
            fill
            style={{
              objectFit: 'cover',
              transition: 'transform 250ms ease, opacity 200ms ease',
            }}
            unoptimized={car.primaryImage.startsWith('http')}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/cars/default-car.jpg';
            }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Fallback watermark behind image */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '0.375rem',
              zIndex: 0,
              pointerEvents: 'none',
              background: '#1e293b',
            }}
          >
            <span style={{ fontSize: '1.5rem', opacity: 0.3 }}>🚗</span>
            <span
              style={{
                fontSize: '0.7rem',
                color: '#64748b',
                letterSpacing: '0.04em',
              }}
            >
              {car.brand} {car.model}
            </span>
          </div>

          {/* Body type badge */}
          <div
            style={{
              position: 'absolute',
              top: '0.75rem',
              left: '0.75rem',
              zIndex: 2,
            }}
          >
            <span
              className="badge"
              style={{
                backdropFilter: 'blur(8px)',
                background: 'rgba(15, 23, 42, 0.75)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '0.72rem',
                fontWeight: 600,
              }}
            >
              {car.bodyType}
            </span>
          </div>

          {/* EV badge or Verified Photo angle tag */}
          <div
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              zIndex: 2,
              display: 'flex',
              gap: '0.35rem',
            }}
          >
            {car.engine.fuelType === 'Electric' && (
              <span
                className="badge badge-success"
                style={{
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                <Zap size={11} />
                EV
              </span>
            )}
            {car.primaryImageAssetAngle && (
              <span
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  backdropFilter: 'blur(8px)',
                  color: '#94a3b8',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                title={car.primaryImageSource ? `Verified photography from ${car.primaryImageSource}` : undefined}
              >
                {car.primaryImageAssetAngle === 'front_3_4'
                  ? 'Front ¾'
                  : car.primaryImageAssetAngle === 'rear_3_4'
                  ? 'Rear ¾'
                  : car.primaryImageAssetAngle === 'side'
                  ? 'Side'
                  : 'Verified'}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1 }}>
        {/* Header */}
        <div>
          <Link href={`/cars/${car.slug}`} style={{ textDecoration: 'none' }}>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', fontWeight: 500, marginBottom: '0.2rem' }}>
              {car.brand}
            </p>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '0.25rem',
                letterSpacing: '-0.015em',
                transition: 'color 150ms',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-primary)')}
            >
              {car.model}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)' }}>{car.generation}</p>
          </Link>
        </div>

        {/* Price */}
        <div>
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            {formatPriceRange(car)}
          </p>
          <p style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)', marginTop: '1px' }}>
            Ex-showroom price
          </p>
        </div>

        {/* Quick specs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem',
            paddingTop: '0.5rem',
            borderTop: '1px solid var(--color-border-subtle)',
          }}
        >
          {/* Mileage / Range */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            {car.mileageSummary?.label === 'Range' ? (
              <Zap size={13} color="var(--color-success)" />
            ) : (
              <Fuel
                size={13}
                color={car.mileageSummary?.hasVerifiedData ? 'var(--color-text-secondary)' : 'var(--color-text-tertiary)'}
              />
            )}
            <span
              style={{
                fontSize: '0.8rem',
                color: car.mileageSummary?.hasVerifiedData
                  ? 'var(--color-text-primary)'
                  : 'var(--color-text-secondary)',
                fontWeight: car.mileageSummary?.hasVerifiedData ? 600 : 400,
              }}
              title={car.mileageSummary?.hasVerifiedData ? 'Verified ARAI / Certified Claimed specification' : undefined}
            >
              {car.mileageSummary?.display ||
                (car.performance.rangeKm
                  ? `${car.performance.rangeKm} km`
                  : car.performance.mileageKmpl
                  ? `${car.performance.mileageKmpl} km/l`
                  : 'Spec on request')}
            </span>
          </div>

          {/* Power */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <Zap size={13} color="var(--color-text-tertiary)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
              {car.engine.maxPowerBhp} bhp
            </span>
          </div>

          {/* Seats */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <Users size={13} color="var(--color-text-tertiary)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
              {car.seatingCapacity} seats
            </span>
          </div>

          {/* NCAP */}
          <NCAPStars rating={car.safety.ncapRating} />
        </div>

        {/* Transmission + fuel pills (Multi-powertrain aware) */}
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          {car.availableFuelTypes && car.availableFuelTypes.length > 0 ? (
            <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
              {car.availableFuelTypes.join(' · ')}
            </span>
          ) : (
            <span className="badge badge-neutral">{car.engine.fuelType}</span>
          )}
          {car.availableTransmissions && car.availableTransmissions.length > 0 ? (
            <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
              {car.availableTransmissions.slice(0, 2).join(' · ')}
              {car.availableTransmissions.length > 2 ? ` +${car.availableTransmissions.length - 2}` : ''}
            </span>
          ) : (
            <span className="badge badge-neutral">{car.engine.transmission}</span>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
          <Link
            href={`/cars/${car.slug}`}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, justifyContent: 'center' }}
            aria-label={`View details for ${car.displayName}`}
          >
            View Details
          </Link>
          {showCompare && (
            <button
              onClick={handleCompareToggle}
              className={`btn btn-sm ${selected ? 'btn-primary' : 'btn-secondary'}`}
              disabled={!selected && isFull}
              aria-label={
                selected
                  ? `Remove ${car.displayName} from comparison`
                  : isFull
                  ? 'Maximum 5 cars can be compared'
                  : `Add ${car.displayName} to comparison`
              }
              title={!selected && isFull ? 'Max 5 cars' : undefined}
              style={{ flexShrink: 0 }}
            >
              {selected ? (
                <>
                  <Check size={14} />
                  Added
                </>
              ) : (
                <>
                  <Plus size={14} />
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
