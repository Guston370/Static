'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  X,
  Plus,
  Trophy,
  Smartphone,
} from 'lucide-react';
import {
  getAllMobiles,
  getMobileBySlug,
  getMobileVariants,
  formatMobilePrice,
  evaluateMobileComparisonWinners,
} from '@/lib/mobiles';
import { useMobileCompare } from '@/context/MobileCompareContext';
import type { MobileModel } from '@/types/mobile';

export function MobileComparisonPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { selectedMobileSlugs, addMobile, removeMobile, clearMobiles } = useMobileCompare();

  // Load comparison slugs from URL or context
  const urlParam = searchParams.get('mobiles');
  const activeSlugs = useMemo(() => {
    if (urlParam) {
      return urlParam.split(',').filter(Boolean);
    }
    return selectedMobileSlugs;
  }, [urlParam, selectedMobileSlugs]);

  const allMobiles = useMemo(() => getAllMobiles(), []);

  const comparedMobiles = useMemo(() => {
    return activeSlugs
      .map((slug) => getMobileBySlug(slug))
      .filter((m): m is MobileModel => m !== undefined);
  }, [activeSlugs]);

  // Track selected variant per phone column
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  const handleVariantChange = (modelId: string, variantId: string) => {
    setSelectedVariants((prev) => ({ ...prev, [modelId]: variantId }));
  };

  const removePhone = (slug: string) => {
    const next = activeSlugs.filter((s) => s !== slug);
    removeMobile(slug);
    router.replace(`/mobiles/compare?mobiles=${next.join(',')}`);
  };

  const addPhone = (slug: string) => {
    if (!activeSlugs.includes(slug) && activeSlugs.length < 4) {
      const next = [...activeSlugs, slug];
      addMobile(slug);
      router.replace(`/mobiles/compare?mobiles=${next.join(',')}`);
    }
  };

  const loadPreset = (slugs: string[]) => {
    clearMobiles();
    slugs.forEach((s) => addMobile(s));
    router.replace(`/mobiles/compare?mobiles=${slugs.join(',')}`);
  };

  // Winners evaluation
  const categoryWinners = useMemo(() => {
    return evaluateMobileComparisonWinners(comparedMobiles);
  }, [comparedMobiles]);

  // If fewer than 2 phones, show phone selector and presets
  if (comparedMobiles.length < 2) {
    return (
      <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', padding: '3rem 1rem' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'var(--color-accent-light)',
            color: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <Smartphone size={32} />
        </div>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
          Select At Least 2 Smartphones to Compare
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem', fontSize: '1rem' }}>
          Compare up to 4 phones side-by-side across displays, camera sensors, processors, batteries, and real pricing.
        </p>

        {/* Popular Comparison Presets */}
        <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
            Popular Comparison Matchups
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {/* Preset 1 */}
            <div
              className="card"
              style={{ padding: '1.25rem', cursor: 'pointer' }}
              onClick={() =>
                loadPreset([
                  'samsung-galaxy-s25-ultra',
                  'apple-iphone-16-pro-max',
                  'oneplus-13',
                ])
              }
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                ULTRA FLAGSHIP SHOWDOWN
              </span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.35rem 0 0.5rem' }}>
                Galaxy S25 Ultra vs iPhone 16 Pro Max vs OnePlus 13
              </h4>
              <span className="btn btn-primary btn-sm" style={{ width: '100%', marginTop: '0.5rem' }}>
                Compare Flagships
              </span>
            </div>

            {/* Preset 2 */}
            <div
              className="card"
              style={{ padding: '1.25rem', cursor: 'pointer' }}
              onClick={() =>
                loadPreset([
                  'oneplus-nord-4',
                  'poco-f6',
                  'nothing-phone-2a-plus',
                ])
              }
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                VALUE KINGS (~₹30,000)
              </span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.35rem 0 0.5rem' }}>
                Nord 4 vs POCO F6 vs Nothing Phone (2a) Plus
              </h4>
              <span className="btn btn-primary btn-sm" style={{ width: '100%', marginTop: '0.5rem' }}>
                Compare Midrangers
              </span>
            </div>

            {/* Preset 3 */}
            <div
              className="card"
              style={{ padding: '1.25rem', cursor: 'pointer' }}
              onClick={() =>
                loadPreset([
                  'xiaomi-14-ultra',
                  'vivo-x100-pro',
                  'google-pixel-9-pro-xl',
                ])
              }
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                CAMERA POWERHOUSES
              </span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.35rem 0 0.5rem' }}>
                Xiaomi 14 Ultra vs Vivo X100 Pro vs Pixel 9 Pro XL
              </h4>
              <span className="btn btn-primary btn-sm" style={{ width: '100%', marginTop: '0.5rem' }}>
                Compare Cameras
              </span>
            </div>
          </div>
        </div>

        {/* Quick Phone Selection Picker */}
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
            Or Add Phones From Catalog:
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {allMobiles.map((m) => (
              <button
                key={m.id}
                onClick={() => addPhone(m.slug)}
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
              >
                <Plus size={14} />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {m.brand} {m.modelName}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ── Top Bar / Header ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '0.25rem',
            }}
          >
            Smartphone Comparison
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
            Comparing {comparedMobiles.length} smartphones side-by-side
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => {
              clearMobiles();
              router.replace('/mobiles/compare');
            }}
            className="btn btn-ghost btn-sm"
          >
            Clear Comparison
          </button>
          <Link href="/mobiles" className="btn btn-secondary btn-sm">
            Browse More Phones
          </Link>
        </div>
      </div>

      {/* ── Category Winners Highlight Section ── */}
      {categoryWinners.length > 0 && (
        <section
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '14px',
            padding: '1.75rem',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <Trophy size={20} color="var(--color-accent)" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Category Benchmark Winners
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)', marginLeft: 'auto' }}>
              Formula-based transparent scoring
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
            }}
          >
            {categoryWinners.map((w) => (
              <div
                key={w.category}
                style={{
                  background: 'var(--color-surface-sunken)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '10px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-text-tertiary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {w.category}
                  </span>
                  <span className="badge badge-accent" style={{ fontSize: '0.7rem' }}>
                    Winner
                  </span>
                </div>
                <strong style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
                  {w.winnerName}
                </strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.4, margin: 0 }}>
                  {w.reason}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Side-by-Side Comparison Matrix ── */}
      <div style={{ overflowX: 'auto', paddingBottom: '2rem' }}>
        <table
          className="table comparison-table"
          style={{
            width: '100%',
            minWidth: `${220 + comparedMobiles.length * 260}px`,
            borderCollapse: 'separate',
            borderSpacing: 0,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
        >
          {/* Table Header: Phone Cards */}
          <thead>
            <tr>
              <th
                style={{
                  width: '200px',
                  background: 'var(--color-surface-raised)',
                  verticalAlign: 'bottom',
                  padding: '1.25rem',
                }}
              >
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}>
                  Specification / Category
                </span>
              </th>

              {comparedMobiles.map((mobile) => {
                const variants = getMobileVariants(mobile.id);
                const selectedVarId = selectedVariants[mobile.id] || variants[0]?.id;
                const activeVar = variants.find((v) => v.id === selectedVarId) || variants[0];
                const activePrice = activeVar?.price || mobile.pricing.startingPrice;

                return (
                  <th
                    key={mobile.id}
                    style={{
                      width: `${100 / (comparedMobiles.length + 1)}%`,
                      verticalAlign: 'top',
                      padding: '1.25rem',
                      borderLeft: '1px solid var(--color-border)',
                    }}
                  >
                    {/* Header Card */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => removePhone(mobile.slug)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--color-text-tertiary)',
                          }}
                          aria-label={`Remove ${mobile.brand} ${mobile.modelName}`}
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {/* Image */}
                      <div
                        style={{
                          position: 'relative',
                          height: '140px',
                          background: '#18191c',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Image
                          src={mobile.primaryImage || '/mobiles/images/phone-placeholder.svg'}
                          alt={`${mobile.brand} ${mobile.modelName}`}
                          fill
                          sizes="150px"
                          style={{ objectFit: 'contain', padding: '10px' }}
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.srcset = '';
                            target.src = '/mobiles/images/phone-placeholder.svg';
                          }}
                        />
                      </div>

                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-tertiary)' }}>
                          {mobile.brand}
                        </span>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '2px 0 6px', color: 'var(--color-text-primary)' }}>
                          <Link href={`/mobiles/${mobile.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {mobile.modelName}
                          </Link>
                        </h3>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                          {formatMobilePrice(activePrice)}
                        </div>
                      </div>

                      {/* Variant Selector */}
                      {variants.length > 0 && (
                        <div>
                          <label style={{ fontSize: '0.72rem', color: 'var(--color-text-tertiary)', display: 'block', marginBottom: '3px' }}>
                            Variant:
                          </label>
                          <select
                            className="select"
                            value={selectedVarId}
                            onChange={(e) => handleVariantChange(mobile.id, e.target.value)}
                            style={{ fontSize: '0.8rem', padding: '0.35rem 0.5rem' }}
                          >
                            {variants.map((v) => (
                              <option key={v.id} value={v.id}>
                                {v.ram} + {v.storage} ({formatMobilePrice(v.price)})
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  </th>
                );
              })}

              {/* Add Phone Column if < 4 */}
              {comparedMobiles.length < 4 && (
                <th
                  style={{
                    width: '200px',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    padding: '1.5rem',
                    borderLeft: '1px solid var(--color-border)',
                    background: 'var(--color-surface-sunken)',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-tertiary)' }}>
                      Add another phone
                    </span>
                    <select
                      className="select"
                      onChange={(e) => {
                        if (e.target.value) addPhone(e.target.value);
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        + Choose phone...
                      </option>
                      {allMobiles
                        .filter((m) => !activeSlugs.includes(m.slug))
                        .map((m) => (
                          <option key={m.id} value={m.slug}>
                            {m.brand} {m.modelName}
                          </option>
                        ))}
                    </select>
                  </div>
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {/* ── Category: DISPLAY ── */}
            <tr style={{ background: 'var(--color-surface-raised)' }}>
              <td colSpan={comparedMobiles.length + 2} style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Display & Screen
              </td>
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Screen Size</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ fontWeight: 600, borderLeft: '1px solid var(--color-border)' }}>
                  {m.display.displaySize}&quot;
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Panel Technology</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.display.displayType}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Resolution</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.display.resolution}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Refresh Rate</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ fontWeight: 700, color: 'var(--color-accent)', borderLeft: '1px solid var(--color-border)' }}>
                  {m.display.refreshRate} Hz
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Peak Brightness</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.display.peakBrightness} nits
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Glass Protection</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.display.protection}
                </td>
              ))}
            </tr>

            {/* ── Category: PERFORMANCE ── */}
            <tr style={{ background: 'var(--color-surface-raised)' }}>
              <td colSpan={comparedMobiles.length + 2} style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Performance & Chipset
              </td>
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Chipset / Processor</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ fontWeight: 700, borderLeft: '1px solid var(--color-border)' }}>
                  {m.performance.chipset}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>GPU</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.performance.gpu}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>RAM Options</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.performance.ramOptions.join(' · ')}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Storage Options</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.performance.storageOptions.join(' · ')}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>AnTuTu Score</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ fontWeight: 700, borderLeft: '1px solid var(--color-border)' }}>
                  {m.performance.antutuScore ? `~${m.performance.antutuScore.toLocaleString()}` : 'N/A'}
                </td>
              ))}
            </tr>

            {/* ── Category: CAMERAS ── */}
            <tr style={{ background: 'var(--color-surface-raised)' }}>
              <td colSpan={comparedMobiles.length + 2} style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Camera Setup
              </td>
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Rear Setup</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ fontWeight: 600, borderLeft: '1px solid var(--color-border)' }}>
                  {m.cameras.rearCameraSetup}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Primary Sensor</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.cameras.mainCamera}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Telephoto Zoom</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.cameras.telephotoCamera || 'None (digital crop only)'}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Front Selfie Camera</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.cameras.frontCamera}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Video Capability</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.cameras.videoRecording}
                </td>
              ))}
            </tr>

            {/* ── Category: BATTERY & CHARGING ── */}
            <tr style={{ background: 'var(--color-surface-raised)' }}>
              <td colSpan={comparedMobiles.length + 2} style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Battery & Charging
              </td>
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Battery Capacity</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ fontWeight: 700, borderLeft: '1px solid var(--color-border)' }}>
                  {m.battery.batteryCapacity} mAh
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Wired Fast Charging</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ fontWeight: 600, borderLeft: '1px solid var(--color-border)' }}>
                  {m.battery.wiredCharging} W
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Wireless Charging</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.battery.wirelessCharging ? `${m.battery.wirelessCharging} W` : 'No'}
                </td>
              ))}
            </tr>

            {/* ── Category: SOFTWARE & BUILD ── */}
            <tr style={{ background: 'var(--color-surface-raised)' }}>
              <td colSpan={comparedMobiles.length + 2} style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Software & Build Quality
              </td>
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Operating System</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ fontWeight: 600, borderLeft: '1px solid var(--color-border)' }}>
                  {m.software.operatingSystem} ({m.software.ui})
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Major OS Upgrades</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ fontWeight: 700, color: 'var(--color-success)', borderLeft: '1px solid var(--color-border)' }}>
                  {m.software.promisedMajorUpdates} Years
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Water Resistance</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.physical.waterResistance}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Weight & Materials</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.physical.weight}g · {m.physical.materials}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Fingerprint Scanner</td>
              {comparedMobiles.map((m) => (
                <td key={m.id} style={{ borderLeft: '1px solid var(--color-border)' }}>
                  {m.security.fingerprint}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
