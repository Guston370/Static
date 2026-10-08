'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Plus,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import type { MobileModel, MobileVariant, MobileImageItem } from '@/types/mobile';
import { formatMobilePrice, calculateUpgradeDifference } from '@/lib/mobiles';
import { useMobileCompare } from '@/context/MobileCompareContext';

interface MobileDetailViewProps {
  mobile: MobileModel;
  variants: MobileVariant[];
  images: MobileImageItem[];
  similarMobiles: MobileModel[];
  upgradeTargetMobile?: MobileModel;
}

export function MobileDetailView({
  mobile,
  variants,
  images,
  similarMobiles,
  upgradeTargetMobile,
}: MobileDetailViewProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    variants[0]?.id || ''
  );
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const { isMobileSelected, addMobile, removeMobile, isFull } = useMobileCompare();
  const selectedForCompare = isMobileSelected(mobile.slug);

  const selectedVariant =
    variants.find((v) => v.id === selectedVariantId) || variants[0];

  const currentPrice = selectedVariant?.price || mobile.pricing.startingPrice;
  const currentMrp = selectedVariant?.mrp;
  const activeImage = images[activeImageIndex] || {
    url: mobile.primaryImage || '/images/phone-placeholder.png',
    alt: `${mobile.brand} ${mobile.modelName}`,
    angle: 'front',
  };

  const upgradeDiff = upgradeTargetMobile
    ? calculateUpgradeDifference(mobile, upgradeTargetMobile)
    : null;

  return (
    <div>
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-tertiary)',
          marginBottom: '1.5rem',
        }}
      >
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          Home
        </Link>
        <span>/</span>
        <Link href="/mobiles" style={{ color: 'inherit', textDecoration: 'none' }}>
          Mobiles
        </Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>
          {mobile.brand} {mobile.modelName}
        </span>
      </nav>

      {/* ── Hero Showcase Section ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 480px) 1fr',
          gap: '2.5rem',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2.5rem',
        }}
        className="mobile-hero-grid"
      >
        {/* Left: Interactive Multi-angle Gallery */}
        <div>
          <div
            style={{
              position: 'relative',
              height: '380px',
              background: 'linear-gradient(145deg, #18191c 0%, #22242a 100%)',
              borderRadius: '12px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '1.5rem',
            }}
          >
            <Image
              src={activeImage.url}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              unoptimized={activeImage.url.startsWith('http')}
              style={{ objectFit: 'contain', padding: '16px' }}
              priority
            />

            <span
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '4px 9px',
                borderRadius: '6px',
                background: 'rgba(0,0,0,0.75)',
                color: '#fff',
                textTransform: 'capitalize',
                backdropFilter: 'blur(4px)',
              }}
            >
              {activeImage.angle} View
            </span>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div
              style={{
                display: 'flex',
                gap: '0.65rem',
                marginTop: '1rem',
                overflowX: 'auto',
                paddingBottom: '4px',
              }}
            >
              {images.map((img, idx) => (
                <button
                  key={`${img.angle}-${idx}`}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    position: 'relative',
                    width: '68px',
                    height: '68px',
                    borderRadius: '8px',
                    border:
                      activeImageIndex === idx
                        ? '2px solid var(--color-accent)'
                        : '1px solid var(--color-border)',
                    background: '#1a1b1f',
                    cursor: 'pointer',
                    padding: '4px',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                  aria-label={`View ${img.angle} angle`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    unoptimized={img.url.startsWith('http')}
                    style={{ objectFit: 'contain', padding: '4px' }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Identity, Pricing, Variant Switcher & CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {mobile.brand}
              </span>
              <span style={{ color: 'var(--color-text-tertiary)' }}>·</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-tertiary)' }}>
                Launched {mobile.launchDate}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--color-text-primary)',
              }}
            >
              {mobile.modelName}
            </h1>
          </div>

          {/* Dynamic Price Display */}
          <div
            style={{
              padding: '1rem 1.25rem',
              background: 'var(--color-surface-sunken)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                fontSize: '1.9rem',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              {formatMobilePrice(currentPrice)}
            </span>
            {currentMrp && currentMrp > currentPrice && (
              <span
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-text-tertiary)',
                  textDecoration: 'line-through',
                }}
              >
                {formatMobilePrice(currentMrp)}
              </span>
            )}
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginLeft: 'auto' }}>
              Official Ex-Store Price
            </span>
          </div>

          {/* Variant Selector (RAM + Storage) */}
          {variants.length > 0 && (
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '0.5rem',
                }}
              >
                Select Configuration (RAM + Storage):
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {variants.map((v) => {
                  const isSelected = v.id === selectedVariant?.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantId(v.id)}
                      style={{
                        padding: '0.65rem 1rem',
                        borderRadius: '8px',
                        border: isSelected
                          ? '2px solid var(--color-accent)'
                          : '1px solid var(--color-border)',
                        background: isSelected
                          ? 'var(--color-accent-light)'
                          : 'var(--color-surface)',
                        color: isSelected
                          ? 'var(--color-accent)'
                          : 'var(--color-text-primary)',
                        cursor: 'pointer',
                        fontWeight: isSelected ? 700 : 500,
                        fontSize: '0.9rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '2px',
                        transition: 'all 150ms ease',
                      }}
                    >
                      <span>
                        {v.ram} + {v.storage}
                      </span>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: isSelected ? 'var(--color-accent)' : 'var(--color-text-tertiary)',
                        }}
                      >
                        {formatMobilePrice(v.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Colors available for this variant */}
          {selectedVariant && selectedVariant.colors.length > 0 && (
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '0.4rem',
                }}
              >
                Available Colors:
              </span>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {selectedVariant.colors.map((color) => (
                  <span
                    key={color}
                    style={{
                      fontSize: '0.78rem',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Actions */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '1rem' }}>
            <button
              onClick={() => {
                if (selectedForCompare) {
                  removeMobile(mobile.slug);
                } else if (!isFull) {
                  addMobile(mobile.slug);
                }
              }}
              className={`btn btn-lg ${selectedForCompare ? 'btn-primary' : 'btn-outline'}`}
              style={{ flex: 1 }}
              disabled={!selectedForCompare && isFull}
            >
              {selectedForCompare ? (
                <>
                  <Check size={18} />
                  Added to Comparison
                </>
              ) : (
                <>
                  <Plus size={18} />
                  Compare This Phone
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Key Highlights, Pros & Cons ── */}
      {Boolean(mobile.pros?.length || mobile.cons?.length) && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
          className="mobile-pros-grid"
        >
          {/* Pros */}
          {Boolean(mobile.pros?.length) && (
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-success)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <Check size={18} />
                Key Strengths & Pros
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {mobile.pros?.map((pro, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: '0.88rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.45,
                    }}
                  >
                    <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cons */}
          {Boolean(mobile.cons?.length) && (
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <span>⚠️</span>
                Things to Consider
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {mobile.cons?.map((con, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: '0.88rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.45,
                    }}
                  >
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* ── "What Do I Get for More Money?" Upgrade Analysis ── */}
      {upgradeDiff && (
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(193,56,42,0.06) 0%, rgba(20,22,26,0.95) 100%)',
            border: '1px solid rgba(193,56,42,0.25)',
            borderRadius: '14px',
            padding: '1.75rem',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <TrendingUp size={20} color="var(--color-accent)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
              What do I get for more money?
            </h3>
          </div>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
            Upgrading from <strong>{upgradeDiff.baseModelName}</strong> to{' '}
            <strong>{upgradeDiff.upgradedModelName}</strong> ({formatMobilePrice(upgradeDiff.priceDelta)} more) delivers:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '0.75rem',
            }}
          >
            {upgradeDiff.upgrades.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>+</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Complete Specification Matrix ── */}
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '14px',
          padding: '2rem',
          marginBottom: '3rem',
        }}
      >
        <h2
          style={{
            fontSize: '1.4rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}
        >
          Full Verified Specifications
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* 1. Display */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
              Display
            </h3>
            <table className="table" style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ width: '35%', color: 'var(--color-text-tertiary)' }}>Display Type & Size</td>
                  <td style={{ fontWeight: 600 }}>{mobile.display.displaySize}&quot; {mobile.display.displayType}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Resolution</td>
                  <td>{mobile.display.resolution}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Refresh Rate</td>
                  <td style={{ fontWeight: 600 }}>{mobile.display.refreshRate} Hz</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Peak Brightness</td>
                  <td>{mobile.display.peakBrightness} nits</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>HDR & Protection</td>
                  <td>{mobile.display.hdr} · {mobile.display.protection}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2. Performance */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
              Performance & Hardware
            </h3>
            <table className="table" style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ width: '35%', color: 'var(--color-text-tertiary)' }}>Chipset</td>
                  <td style={{ fontWeight: 600 }}>{mobile.performance.chipset}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>CPU & GPU</td>
                  <td>{mobile.performance.cpu} | {mobile.performance.gpu}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>RAM Options</td>
                  <td>{mobile.performance.ramOptions.join(', ')}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Storage Options</td>
                  <td>{mobile.performance.storageOptions.join(', ')} ({mobile.performance.storageType || 'High-speed flash'})</td>
                </tr>
                {mobile.performance.antutuScore && (
                  <tr>
                    <td style={{ color: 'var(--color-text-tertiary)' }}>AnTuTu Benchmark</td>
                    <td style={{ fontWeight: 700, color: 'var(--color-accent)' }}>
                      ~{mobile.performance.antutuScore.toLocaleString()}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* 3. Cameras */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
              Camera System
            </h3>
            <table className="table" style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ width: '35%', color: 'var(--color-text-tertiary)' }}>Rear Configuration</td>
                  <td style={{ fontWeight: 600 }}>{mobile.cameras.rearCameraSetup}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Primary Camera</td>
                  <td>{mobile.cameras.mainCamera}</td>
                </tr>
                {mobile.cameras.telephotoCamera && (
                  <tr>
                    <td style={{ color: 'var(--color-text-tertiary)' }}>Telephoto Camera</td>
                    <td style={{ fontWeight: 600 }}>{mobile.cameras.telephotoCamera}</td>
                  </tr>
                )}
                {mobile.cameras.ultrawideCamera && (
                  <tr>
                    <td style={{ color: 'var(--color-text-tertiary)' }}>Ultrawide Camera</td>
                    <td>{mobile.cameras.ultrawideCamera}</td>
                  </tr>
                )}
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Front Selfie Camera</td>
                  <td>{mobile.cameras.frontCamera}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Video Recording</td>
                  <td>{mobile.cameras.videoRecording}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4. Battery & Charging */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
              Battery & Charging
            </h3>
            <table className="table" style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ width: '35%', color: 'var(--color-text-tertiary)' }}>Capacity</td>
                  <td style={{ fontWeight: 600 }}>{mobile.battery.batteryCapacity} mAh</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Wired Charging</td>
                  <td style={{ fontWeight: 600 }}>{mobile.battery.wiredCharging} W Fast Charging</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Wireless Charging</td>
                  <td>
                    {mobile.battery.wirelessCharging
                      ? `${mobile.battery.wirelessCharging} W Wireless`
                      : 'Not supported'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 5. Software & Security */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
              Software, Security & Build
            </h3>
            <table className="table" style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ width: '35%', color: 'var(--color-text-tertiary)' }}>Operating System</td>
                  <td style={{ fontWeight: 600 }}>
                    {mobile.software.operatingSystem} ({mobile.software.ui})
                  </td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Software Update Policy</td>
                  <td style={{ fontWeight: 600 }}>
                    {mobile.software.promisedMajorUpdates} Major OS upgrades · {mobile.software.securityUpdatePolicy}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Biometric Security</td>
                  <td>{mobile.security.fingerprint} · Face Unlock: {mobile.security.faceUnlock ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Build & Ingress Protection</td>
                  <td>{mobile.physical.materials} · {mobile.physical.waterResistance}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--color-text-tertiary)' }}>Dimensions & Weight</td>
                  <td>{mobile.physical.dimensions} · {mobile.physical.weight}g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Similar Alternatives ── */}
      {similarMobiles.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Similar Alternatives in This Price Range</h2>
            <Link href="/mobiles" className="btn btn-secondary btn-sm">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {similarMobiles.map((sim) => (
              <div
                key={sim.id}
                className="card"
                style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <div style={{ position: 'relative', height: '140px', background: '#18191c', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    src={sim.primaryImage || '/images/phone-placeholder.png'}
                    alt={`${sim.brand} ${sim.modelName}`}
                    fill
                    unoptimized={sim.primaryImage?.startsWith('http')}
                    style={{ objectFit: 'contain', padding: '10px' }}
                  />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-tertiary)' }}>
                    {sim.brand}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '2px 0' }}>
                    <Link href={`/mobiles/${sim.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {sim.modelName}
                    </Link>
                  </h3>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                    {formatMobilePrice(sim.pricing.startingPrice)}
                  </div>
                </div>
                <Link href={`/mobiles/${sim.slug}`} className="btn btn-secondary btn-sm" style={{ marginTop: 'auto' }}>
                  Compare & View
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .mobile-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .mobile-pros-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
