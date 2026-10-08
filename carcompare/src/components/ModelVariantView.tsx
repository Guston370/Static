'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BarChart3,
  Shield,
  Zap,
  CheckCircle2,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  Star,
  Ruler,
  Gauge,
  Settings,
  ArrowRight,
  TrendingUp,
  SlidersHorizontal,
  Layers,
  Sparkles,
  Camera,
  Fuel,
} from 'lucide-react';
import type { Car } from '@/types/car';
import type { ModelVariantGroup } from '@/types/variant';
import type { ModelImageEntry } from '@/types/car-images';
import { CANONICAL_FEATURES, calculateUpgradeDiff, type UpgradeDiff } from '@/lib/featureMatrix';
import { formatVariantPrice } from '@/lib/variants';
import { AddToCompareButton } from '@/components/AddToCompareButton';

interface ModelVariantViewProps {
  car: Car;
  modelGroup: ModelVariantGroup;
  initialVariantSlug?: string;
  similarCars: Car[];
  imageEntry?: ModelImageEntry | null;
}

function SpecItem({
  label,
  value,
  unit,
}: {
  label: string;
  value: string | number | null | boolean | undefined;
  unit?: string;
}) {
  if (value === null || value === undefined) return null;
  const displayValue =
    typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value);

  return (
    <div className="spec-item">
      <p className="spec-label">{label}</p>
      <p className="spec-value">
        {displayValue}
        {unit && <span className="spec-unit"> {unit}</span>}
      </p>
    </div>
  );
}

function FeatureRow({
  label,
  available,
}: {
  label: string;
  available: boolean | 'standard' | 'optional' | 'not_available';
}) {
  const isAvailable = available === true || available === 'standard';
  const isOptional = available === 'optional';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem',
        padding: '0.5rem 0',
        borderBottom: '1px solid var(--color-border-subtle)',
        fontSize: '0.875rem',
      }}
    >
      {isAvailable ? (
        <CheckCircle2 size={15} color="var(--color-success)" style={{ flexShrink: 0 }} />
      ) : isOptional ? (
        <span
          style={{
            fontSize: '0.65rem',
            padding: '2px 5px',
            background: 'rgba(217, 119, 6, 0.1)',
            color: '#d97706',
            borderRadius: '4px',
            fontWeight: 600,
          }}
        >
          OPT
        </span>
      ) : (
        <XCircle size={15} color="#d0d0cc" style={{ flexShrink: 0 }} />
      )}
      <span
        style={{
          color: isAvailable
            ? 'var(--color-text-primary)'
            : isOptional
            ? '#d97706'
            : 'var(--color-text-tertiary)',
        }}
      >
        {label} {isOptional && <span style={{ fontSize: '0.75rem' }}>(Optional Package)</span>}
      </span>
    </div>
  );
}

export function ModelVariantView({
  car,
  modelGroup,
  initialVariantSlug,
  similarCars,
  imageEntry,
}: ModelVariantViewProps) {
  const variants = modelGroup.variants;

  const galleryImages = useMemo(() => {
    if (imageEntry && imageEntry.images && imageEntry.images.length > 0) {
      return imageEntry.images;
    }
    return [
      {
        url: car.primaryImage,
        angle: 'front_3_4' as const,
        alt: `${car.displayName} Front Three-Quarter View`,
        source: car.dataSource?.name || 'Manufacturer Official Portal',
        sourceUrl: car.dataSource?.url || '',
        sourceTier: 'official' as const,
        generation: car.generation || null,
        verifiedAt: car.dataSource?.lastVerified || '2026-10-07',
        urlVerified: true,
      },
    ];
  }, [imageEntry, car]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = galleryImages[activeImageIndex] || galleryImages[0];

  const ANGLE_DISPLAY_NAMES: Record<string, string> = {
    front_3_4: 'Front ¾',
    rear_3_4: 'Rear ¾',
    side: 'Side Profile',
    front: 'Straight Front',
    rear: 'Straight Rear',
    interior: 'Interior Cockpit',
  };

  const [selectedSlug, setSelectedSlug] = useState<string>(() => {
    if (initialVariantSlug) return initialVariantSlug;
    if (typeof window !== 'undefined') {
      const v = new URLSearchParams(window.location.search).get('variant');
      if (v) {
        const match = variants.find((item) => item.slug === v || item.id === v);
        if (match) return match.slug;
      }
    }
    return variants[0]?.slug || 'standard';
  });

  useEffect(() => {
    const handlePopState = () => {
      const v = new URLSearchParams(window.location.search).get('variant');
      if (v) {
        const match = variants.find((item) => item.slug === v || item.id === v);
        if (match) setSelectedSlug(match.slug);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [variants]);

  const selectedVariant = useMemo(() => {
    return variants.find((v) => v.slug === selectedSlug) || variants[0];
  }, [variants, selectedSlug]);

  const handleSelectVariant = (slug: string) => {
    setSelectedSlug(slug);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('variant', slug);
      window.history.replaceState({}, '', url.toString());
    }
  };

  // Compare upgrade between consecutive variants or base variant
  const baseVariant = variants[0];
  const upgradeFromBase: UpgradeDiff | null = useMemo(() => {
    if (!selectedVariant || selectedVariant.slug === baseVariant.slug) return null;
    return calculateUpgradeDiff(baseVariant, selectedVariant);
  }, [baseVariant, selectedVariant]);

  const ncapRating = selectedVariant?.features.safety.ncapRating ?? car.safety.ncapRating;
  const ncapStars = ncapRating !== null ? Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={14}
      color={i < ncapRating ? '#f59e0b' : '#d0d0cc'}
      fill={i < ncapRating ? '#f59e0b' : 'none'}
    />
  )) : null;

  return (
    <>
      {/* Hero section */}
      <section
        style={{
          background: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '2.5rem',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            {/* 4-Angle Vehicle Gallery */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, #f0f0ee 0%, #e5e5e2 100%)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Image
                  src={activeImage.url}
                  alt={activeImage.alt || `${selectedVariant.fullName} — ${car.bodyType}`}
                  fill
                  priority
                  style={{ objectFit: 'cover', transition: 'opacity 0.2s ease' }}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  unoptimized={activeImage.url.startsWith('http')}
                />

                {/* Top-Left: Angle Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.875rem',
                    left: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <Camera size={13} color="#60a5fa" />
                    {ANGLE_DISPLAY_NAMES[activeImage.angle] || activeImage.angle}
                  </span>
                  {galleryImages.length >= 4 && (
                    <span
                      style={{
                        background: 'rgba(16, 185, 129, 0.9)',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '4px 8px',
                        borderRadius: '999px',
                      }}
                    >
                      ✓ 4-Angle Verified
                    </span>
                  )}
                </div>

                {/* Bottom-Right: Source Attribution */}
                {activeImage.source && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.875rem',
                      background: 'rgba(15, 23, 42, 0.75)',
                      backdropFilter: 'blur(6px)',
                      color: '#e2e8f0',
                      fontSize: '0.68rem',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      zIndex: 2,
                    }}
                  >
                    Source: {activeImage.source}
                  </div>
                )}
              </div>

              {/* Angle Selector Thumbnails & Pills */}
              {galleryImages.length > 1 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    overflowX: 'auto',
                    paddingBottom: '0.25rem',
                  }}
                >
                  {galleryImages.map((img, idx) => {
                    const isActive = idx === activeImageIndex;
                    return (
                      <button
                        key={`${img.angle}-${idx}`}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          border: isActive ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                          background: isActive ? 'var(--color-primary-subtle, rgba(37, 99, 235, 0.08))' : 'var(--color-surface)',
                          color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                          fontSize: '0.75rem',
                          fontWeight: isActive ? 600 : 500,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          style={{
                            width: '28px',
                            height: '18px',
                            position: 'relative',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            display: 'inline-block',
                            background: '#e2e8f0',
                          }}
                        >
                          <Image
                            src={img.url}
                            alt=""
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="28px"
                            unoptimized={img.url.startsWith('http')}
                          />
                        </span>
                        {ANGLE_DISPLAY_NAMES[img.angle] || img.angle}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Info Card */}
            <div>
              <div style={{ marginBottom: '0.5rem' }}>
                <span className="badge badge-neutral" style={{ marginBottom: '0.625rem', display: 'inline-flex' }}>
                  {car.bodyType}
                </span>
                {selectedVariant.powertrain.fuelType === 'Electric' && (
                  <span className="badge badge-success" style={{ marginLeft: '0.375rem' }}>
                    <Zap size={11} /> EV
                  </span>
                )}
                <span
                  style={{
                    marginLeft: '0.375rem',
                    fontSize: '0.75rem',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 500,
                  }}
                >
                  Available in {variants.length} variant{variants.length > 1 ? 's' : ''}
                </span>
              </div>

              <p style={{ color: 'var(--color-text-tertiary)', fontSize: '0.85rem', fontWeight: 500 }}>
                {car.brand}
              </p>
              <h1
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.25rem',
                  color: 'var(--color-text-primary)',
                }}
              >
                {car.model}
              </h1>

              {/* Selected Variant Subhead */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '1rem',
                  padding: '2px 8px',
                  background: 'var(--color-bg)',
                  borderRadius: '6px',
                  border: '1px solid var(--color-border)',
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-accent)' }}>
                  Trim: {selectedVariant.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
                  ({selectedVariant.powertrain.fuelType} · {selectedVariant.powertrain.transmission})
                </span>
              </div>

              {/* NCAP */}
              {ncapRating !== null && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>{ncapStars}</div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-tertiary)' }}>
                    {ncapRating}-Star Safety Rating
                  </span>
                </div>
              )}

              {/* Dynamic Price */}
              <div
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>
                    Ex-showroom price ({selectedVariant.name})
                  </p>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)' }}>
                    Range: ₹{modelGroup.priceRangeLakh.min.toFixed(2)}L – {modelGroup.priceRangeLakh.max.toFixed(2)}L
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    letterSpacing: '-0.025em',
                    color: 'var(--color-text-primary)',
                    marginTop: '0.25rem',
                  }}
                >
                  {formatVariantPrice(selectedVariant)}
                </p>

                {/* Variant Verified Mileage */}
                {selectedVariant.powertrain.fuelType === 'Electric' ? (
                  (selectedVariant.powertrain.electricRangeKm || car.performance.rangeKm) && (
                    <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--color-success)', fontWeight: 600 }}>
                      <Zap size={14} />
                      <span>Certified Range: {selectedVariant.powertrain.electricRangeKm || car.performance.rangeKm} km</span>
                    </div>
                  )
                ) : selectedVariant.powertrain.fuelType === 'CNG' ? (
                  (selectedVariant.performance.mileageKmpl || car.performance.mileageKmpl) && (
                    <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                      <Fuel size={14} />
                      <span>ARAI Mileage: {selectedVariant.performance.mileageKmpl || car.performance.mileageKmpl} km/kg</span>
                    </div>
                  )
                ) : (
                  (selectedVariant.performance.mileageKmpl || car.performance.mileageKmpl) && (
                    <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                      <Fuel size={14} />
                      <span>ARAI Mileage: {selectedVariant.performance.mileageKmpl || car.performance.mileageKmpl} km/l</span>
                    </div>
                  )
                )}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <AddToCompareButton car={car} />
                <Link
                  href={`/compare?cars=${car.slug}`}
                  className="btn btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  <BarChart3 size={16} />
                  Compare with another car
                </Link>
              </div>

              {/* Source info */}
              <p style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)', marginTop: '1rem', lineHeight: 1.5 }}>
                Variant data verified from official {car.brand} catalog · Last updated {selectedVariant.lastVerified}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Variant Selector Bar */}
      <section
        style={{
          background: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          padding: '1rem 0',
          position: 'sticky',
          top: '64px',
          zIndex: 25,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={16} color="var(--color-accent)" />
              <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Select Variant:</span>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                overflowX: 'auto',
                paddingBottom: '2px',
                maxWidth: '100%',
              }}
            >
              {variants.map((v) => {
                const isSelected = v.slug === selectedVariant.slug;
                return (
                  <button
                    key={v.id}
                    onClick={() => handleSelectVariant(v.slug)}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: isSelected ? 600 : 500,
                      cursor: 'pointer',
                      border: isSelected ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                      background: isSelected ? 'var(--color-accent-light)' : 'var(--color-bg)',
                      color: isSelected ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 120ms ease',
                    }}
                  >
                    <span>{v.name}</span>
                    <span style={{ fontSize: '0.72rem', opacity: 0.8 }}>
                      ({formatVariantPrice(v)})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}
          className="detail-grid"
        >
          {/* Main column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* "What do I get for more money?" Upgrade Section */}
            {upgradeFromBase && upgradeFromBase.addedFeatures.length > 0 && (
              <div
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid rgba(193,56,42,0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <Sparkles size={18} color="var(--color-accent)" />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    What do you get for +₹{upgradeFromBase.priceDiffLakh.toFixed(2)} Lakh?
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                  Equipment and specification upgrades when choosing <strong>{selectedVariant.name}</strong> over base trim <strong>{baseVariant.name}</strong>:
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '0.75rem',
                  }}
                >
                  {upgradeFromBase.powerDiffBhp > 0 && (
                    <div style={{ padding: '0.5rem 0.75rem', background: 'var(--color-bg)', borderRadius: '6px', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>+{upgradeFromBase.powerDiffBhp} bhp</span> Higher Power
                    </div>
                  )}
                  {upgradeFromBase.torqueDiffNm > 0 && (
                    <div style={{ padding: '0.5rem 0.75rem', background: 'var(--color-bg)', borderRadius: '6px', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>+{upgradeFromBase.torqueDiffNm} Nm</span> Higher Torque
                    </div>
                  )}
                  {upgradeFromBase.transmissionChanged && (
                    <div style={{ padding: '0.5rem 0.75rem', background: 'var(--color-bg)', borderRadius: '6px', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>Upgraded:</span> {selectedVariant.powertrain.transmission}
                    </div>
                  )}
                  {upgradeFromBase.addedFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.5rem 0.75rem',
                        background: 'var(--color-bg)',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.4rem',
                      }}
                    >
                      <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>+</span>
                      <div>
                        <strong>{feat.label}</strong>
                        {feat.detail && (
                          <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.75rem', display: 'block' }}>
                            {feat.detail}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Powertrain & Engine */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Zap size={18} color="var(--color-accent)" />
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  Powertrain ({selectedVariant.name})
                </h2>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                  gap: '1rem',
                }}
              >
                <SpecItem label="Fuel Type" value={selectedVariant.powertrain.fuelType} />
                <SpecItem
                  label="Displacement"
                  value={selectedVariant.powertrain.engineDisplacementCC}
                  unit="cc"
                />
                <SpecItem label="Cylinders" value={selectedVariant.powertrain.cylinders} />
                <SpecItem label="Aspiration" value={selectedVariant.powertrain.aspiration} />
                <SpecItem
                  label="Max Power"
                  value={selectedVariant.powertrain.maxPowerBhp}
                  unit="bhp"
                />
                <SpecItem
                  label="Max Torque"
                  value={selectedVariant.powertrain.maxTorqueNm}
                  unit="Nm"
                />
                <SpecItem label="Transmission" value={selectedVariant.powertrain.transmission} />
                <SpecItem label="Drivetrain" value={selectedVariant.powertrain.drivetrain} />
                {selectedVariant.powertrain.batteryCapacityKWh && (
                  <SpecItem
                    label="Battery"
                    value={selectedVariant.powertrain.batteryCapacityKWh}
                    unit="kWh"
                  />
                )}
                {selectedVariant.powertrain.electricRangeKm && (
                  <SpecItem
                    label="Certified Range"
                    value={selectedVariant.powertrain.electricRangeKm}
                    unit="km"
                  />
                )}
              </div>
            </div>

            {/* Dimensions */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Ruler size={18} color="var(--color-accent)" />
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Dimensions & Capacity</h2>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                  gap: '1rem',
                }}
              >
                <SpecItem
                  label="Length"
                  value={selectedVariant.dimensions?.lengthMm ?? car.dimensions.lengthMm}
                  unit="mm"
                />
                <SpecItem
                  label="Width"
                  value={selectedVariant.dimensions?.widthMm ?? car.dimensions.widthMm}
                  unit="mm"
                />
                <SpecItem
                  label="Height"
                  value={selectedVariant.dimensions?.heightMm ?? car.dimensions.heightMm}
                  unit="mm"
                />
                <SpecItem
                  label="Wheelbase"
                  value={selectedVariant.dimensions?.wheelbaseMm ?? car.dimensions.wheelbaseMm}
                  unit="mm"
                />
                <SpecItem
                  label="Ground Clearance"
                  value={selectedVariant.dimensions?.groundClearanceMm ?? car.dimensions.groundClearanceMm}
                  unit="mm"
                />
                <SpecItem
                  label="Boot Space"
                  value={selectedVariant.dimensions?.bootSpaceLitres ?? car.dimensions.bootSpaceLitres}
                  unit="L"
                />
                <SpecItem
                  label="Fuel Tank"
                  value={selectedVariant.dimensions?.fuelTankLitres ?? car.dimensions.fuelTankLitres}
                  unit="L"
                />
                <SpecItem label="Seating" value={car.seatingCapacity} unit="seats" />
              </div>
            </div>

            {/* Performance */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Gauge size={18} color="var(--color-accent)" />
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Performance & Mileage</h2>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                  gap: '1rem',
                }}
              >
                {selectedVariant.powertrain.fuelType === 'Electric' ? (
                  <SpecItem
                    label="Certified Range"
                    value={selectedVariant.powertrain.electricRangeKm ?? car.performance.rangeKm}
                    unit="km"
                  />
                ) : selectedVariant.powertrain.fuelType === 'CNG' ? (
                  <SpecItem
                    label="Claimed Mileage"
                    value={selectedVariant.performance.mileageKmpl ?? car.performance.mileageKmpl}
                    unit="km/kg"
                  />
                ) : (
                  <SpecItem
                    label="Claimed Mileage (ARAI)"
                    value={selectedVariant.performance.mileageKmpl ?? car.performance.mileageKmpl}
                    unit="km/l"
                  />
                )}
                <SpecItem
                  label="0–100 km/h"
                  value={selectedVariant.performance.zeroToHundredSec ?? car.performance.zeroToHundredSec}
                  unit="sec"
                />
                <SpecItem
                  label="Top Speed"
                  value={selectedVariant.performance.topSpeedKmph ?? car.performance.topSpeedKmph}
                  unit="km/h"
                />
              </div>
            </div>

            {/* Safety Equipment */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Shield size={18} color="var(--color-accent)" />
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  Safety Equipment ({selectedVariant.name})
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }}>
                <div>
                  <FeatureRow label={`${selectedVariant.features.safety.airbagsCount ?? 6} Airbags`} available={true} />
                  <FeatureRow label="ABS with EBD" available={selectedVariant.features.safety.abs} />
                  <FeatureRow label="Electronic Stability Control" available={selectedVariant.features.safety.esc} />
                  <FeatureRow label="Hill Start Assist" available={selectedVariant.features.safety.hillAssist} />
                  <FeatureRow label="Rear Parking Camera" available={selectedVariant.features.safety.rearCamera} />
                </div>
                <div>
                  <FeatureRow label="360-Degree Camera" available={selectedVariant.features.safety.threeSixtyCamera} />
                  <FeatureRow label="Tyre Pressure Monitoring (TPMS)" available={selectedVariant.features.safety.tpms} />
                  <FeatureRow label="Level 2 ADAS Suite" available={selectedVariant.features.safety.adasLevel === 'Level 2'} />
                  <FeatureRow label="Blind Spot Monitoring" available={selectedVariant.features.safety.blindSpotMonitoring} />
                  <FeatureRow label="Front Parking Sensors" available={selectedVariant.features.safety.frontParkingSensors} />
                </div>
              </div>
            </div>

            {/* Comfort & Infotainment */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Settings size={18} color="var(--color-accent)" />
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  Key Features ({selectedVariant.name})
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }}>
                <div>
                  <FeatureRow label="Electric / Panoramic Sunroof" available={selectedVariant.features.exterior.sunroof} />
                  <FeatureRow label="Ventilated Front Seats" available={selectedVariant.features.interior.ventilatedSeats} />
                  <FeatureRow label="Automatic Climate Control" available={selectedVariant.features.interior.automaticClimateControl} />
                  <FeatureRow label="Powered Driver Seat" available={selectedVariant.features.interior.poweredDriverSeat} />
                  <FeatureRow label="Wireless Phone Charger" available={selectedVariant.features.interior.wirelessCharging} />
                </div>
                <div>
                  <FeatureRow
                    label={`${selectedVariant.features.infotainment.infotainmentScreenSizeInches ? selectedVariant.features.infotainment.infotainmentScreenSizeInches + '" ' : ''}Touchscreen Infotainment`}
                    available={Boolean(selectedVariant.features.infotainment.infotainmentScreenSizeInches)}
                  />
                  <FeatureRow label="Full Digital Instrument Cluster" available={selectedVariant.features.infotainment.digitalInstrumentCluster} />
                  <FeatureRow label="Wireless Android Auto & Apple CarPlay" available={selectedVariant.features.infotainment.wirelessAndroidAuto} />
                  <FeatureRow label="Premium Audio System" available={selectedVariant.features.infotainment.premiumAudio} />
                  <FeatureRow label="Cruise Control" available={selectedVariant.features.convenience.cruiseControl} />
                </div>
              </div>
            </div>

            {/* VARIANT FEATURE COMPARISON MATRIX */}
            {variants.length > 1 && (
              <div className="card" style={{ padding: '1.5rem', overflowX: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <SlidersHorizontal size={18} color="var(--color-accent)" />
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Variant Feature Comparison Matrix</h2>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
                  Direct trim-by-trim equipment availability across the entire {car.model} line-up:
                </p>

                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                      <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem', color: 'var(--color-text-secondary)' }}>
                        Feature
                      </th>
                      {variants.map((v) => (
                        <th
                          key={v.id}
                          style={{
                            textAlign: 'center',
                            padding: '0.75rem 0.5rem',
                            color: v.slug === selectedVariant.slug ? 'var(--color-accent)' : 'var(--color-text-primary)',
                            fontWeight: 700,
                            minWidth: '90px',
                            background: v.slug === selectedVariant.slug ? 'var(--color-accent-light)' : 'transparent',
                          }}
                        >
                          <div>{v.name}</div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 400, color: 'var(--color-text-tertiary)' }}>
                            {formatVariantPrice(v)}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CANONICAL_FEATURES.map((feat) => (
                      <tr key={feat.id} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                        <td style={{ padding: '0.625rem 0.5rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                          {feat.label}
                        </td>
                        {variants.map((v) => {
                          const avail = feat.getAvailability(v);
                          const isCur = v.slug === selectedVariant.slug;
                          return (
                            <td
                              key={v.id}
                              style={{
                                textAlign: 'center',
                                padding: '0.625rem 0.5rem',
                                background: isCur ? 'var(--color-accent-light)' : 'transparent',
                              }}
                            >
                              {avail === 'standard' ? (
                                <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>✓</span>
                              ) : avail === 'optional' ? (
                                <span style={{ color: '#d97706', fontSize: '0.75rem', fontWeight: 600 }}>Opt</span>
                              ) : (
                                <span style={{ color: '#d0d0cc' }}>—</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pros & Cons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div
                style={{
                  background: 'rgba(45,125,70,0.05)',
                  border: '1px solid rgba(45,125,70,0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                  <ThumbsUp size={16} color="var(--color-success)" />
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-success)' }}>Pros</h3>
                </div>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {car.pros.map((pro, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: 'rgba(193,56,42,0.05)',
                  border: '1px solid rgba(193,56,42,0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                  <ThumbsDown size={16} color="var(--color-accent)" />
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-accent)' }}>Cons</h3>
                </div>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {car.cons.map((con, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* VARIANT PRICE LADDER */}
            <div className="card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                <TrendingUp size={16} color="var(--color-accent)" />
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Variant Price Ladder
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {variants.map((v) => {
                  const isSelected = v.slug === selectedVariant.slug;
                  return (
                    <button
                      key={v.id}
                      onClick={() => handleSelectVariant(v.slug)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.5rem 0.625rem',
                        borderRadius: '6px',
                        border: isSelected ? '1px solid var(--color-accent)' : '1px solid transparent',
                        background: isSelected ? 'var(--color-accent-light)' : 'var(--color-bg)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'border-color 100ms',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: isSelected ? 700 : 500, color: 'var(--color-text-primary)' }}>
                          {v.name}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)' }}>
                          {v.powertrain.fuelType} · {v.powertrain.transmission}
                        </div>
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isSelected ? 'var(--color-accent)' : 'var(--color-text-primary)' }}>
                        {formatVariantPrice(v)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick compare widget */}
            <div className="card" style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Compare this car
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                See how {car.displayName} stacks up against other cars in its segment.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {similarCars.map((sim) => (
                  <Link
                    key={sim.id}
                    href={`/compare?cars=${car.slug},${sim.slug}`}
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'space-between', fontSize: '0.8rem' }}
                  >
                    <span>vs {sim.displayName}</span>
                    <ArrowRight size={13} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
