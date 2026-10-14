'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Bike as BikeIcon,
  Zap,
  Fuel,
  X,
  Plus,
  Shield,
  Gauge,
  Check,
  RotateCcw,
  SlidersHorizontal,
  ArrowLeft,
} from 'lucide-react';
import { getAllBikes, getBikeBySlug } from '@/lib/bikes';
import { useBikeCompare } from '@/context/BikeCompareContext';
import type { Bike } from '@/types/bike';

const MAX_COMPARE_SLOTS = 4;

export function BikeComparisonPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const allBikes = getAllBikes();
  const { selectedBikeSlugs, addBike, removeBike, clearBikes } = useBikeCompare();

  // Parse slugs from query params or context
  const queryBikes = searchParams.get('bikes');
  const initialSlugs = queryBikes
    ? queryBikes.split(',').filter(Boolean)
    : selectedBikeSlugs.length > 0
    ? selectedBikeSlugs
    : [allBikes[0]?.slug, allBikes[1]?.slug].filter(Boolean);

  const [activeSlugs, setActiveSlugs] = useState<string[]>(initialSlugs.slice(0, MAX_COMPARE_SLOTS));

  // Sync state with URL
  useEffect(() => {
    if (queryBikes) {
      const parsed = queryBikes.split(',').filter(Boolean).slice(0, MAX_COMPARE_SLOTS);
      setActiveSlugs(parsed);
    }
  }, [queryBikes]);

  const updateUrl = (slugs: string[]) => {
    setActiveSlugs(slugs);
    if (slugs.length > 0) {
      router.replace(`/bikes/compare?bikes=${slugs.join(',')}`);
    } else {
      router.replace('/bikes/compare');
    }
  };

  const handleAddSlot = (slug: string) => {
    if (!slug || activeSlugs.includes(slug) || activeSlugs.length >= MAX_COMPARE_SLOTS) return;
    const next = [...activeSlugs, slug];
    updateUrl(next);
    addBike(slug);
  };

  const handleRemoveSlot = (slug: string) => {
    const next = activeSlugs.filter((s) => s !== slug);
    updateUrl(next);
    removeBike(slug);
  };

  const handleClearAll = () => {
    updateUrl([]);
    clearBikes();
  };

  const comparedBikes: (Bike | undefined)[] = activeSlugs.map((slug) => getBikeBySlug(slug));
  const availableBikes = allBikes.filter((b) => !activeSlugs.includes(b.slug));

  return (
    <div style={{ padding: '2rem 0 5rem' }}>
      <div className="container">
        {/* Navigation & Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <Link href="/bikes" className="btn btn-ghost btn-sm" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
              <ArrowLeft size={15} /> Back to Browse
            </Link>
            <h1 className="section-title">Compare Two-Wheelers</h1>
            <p className="section-subtitle">
              Side-by-side Indian motorcycle and scooter comparison across power, mileage, pricing, and safety.
            </p>
          </div>

          {activeSlugs.length > 0 && (
            <button
              onClick={handleClearAll}
              className="btn btn-secondary btn-sm"
              type="button"
            >
              <RotateCcw size={14} /> Clear All
            </button>
          )}
        </div>

        {/* Empty State */}
        {activeSlugs.length === 0 ? (
          <div className="card" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--color-surface-inset)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'var(--color-accent)',
              }}
            >
              <BikeIcon size={32} />
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
              No Two-Wheelers Selected
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
              Select up to 4 motorcycles or scooters to compare technical specifications and real pricing.
            </p>
            <Link href="/bikes" className="btn btn-primary">
              Browse Two-Wheelers
            </Link>
          </div>
        ) : (
          <div style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
            <table
              style={{
                width: '100%',
                minWidth: `${Math.max(650, activeSlugs.length * 240 + 200)}px`,
                borderCollapse: 'separate',
                borderSpacing: '0',
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-neu-card)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: '1.5rem',
                      width: '200px',
                      textAlign: 'left',
                      background: 'var(--color-surface-sunken)',
                      borderBottom: '1px solid var(--color-border)',
                      verticalAlign: 'bottom',
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}>
                      Models ({activeSlugs.length}/{MAX_COMPARE_SLOTS})
                    </span>
                  </th>
                  {comparedBikes.map((bike, idx) => {
                    if (!bike) return null;
                    const isEV = bike.fuelType === 'Electric';
                    return (
                      <th
                        key={bike.slug}
                        style={{
                          padding: '1.5rem',
                          textAlign: 'center',
                          borderBottom: '1px solid var(--color-border)',
                          borderLeft: '1px solid var(--color-border-subtle)',
                          verticalAlign: 'top',
                          position: 'relative',
                        }}
                      >
                        <button
                          onClick={() => handleRemoveSlot(bike.slug)}
                          style={{
                            position: 'absolute',
                            top: '0.75rem',
                            right: '0.75rem',
                            background: 'var(--color-surface-inset)',
                            border: '1px solid var(--color-border-subtle)',
                            color: 'var(--color-text-tertiary)',
                            borderRadius: '50%',
                            width: '26px',
                            height: '26px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                          aria-label={`Remove ${bike.brand} ${bike.model}`}
                        >
                          <X size={14} />
                        </button>

                        <div
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: 'var(--color-surface-inset)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 0.75rem',
                            color: 'var(--color-accent)',
                          }}
                        >
                          <BikeIcon size={28} />
                        </div>

                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
                          {bike.brand}
                        </div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                          {bike.model}
                        </div>
                        <span className={`badge ${isEV ? 'badge-success' : 'badge-neutral'}`} style={{ marginTop: '0.4rem' }}>
                          {bike.category}
                        </span>

                        <div style={{ marginTop: '0.75rem', fontSize: '1.3rem', fontWeight: 900, color: 'var(--color-accent)' }}>
                          ₹{bike.startingPrice.toLocaleString('en-IN')}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
                          Ex-Showroom Delhi
                        </div>
                      </th>
                    );
                  })}

                  {/* Add Slot Column if < MAX */}
                  {activeSlugs.length < MAX_COMPARE_SLOTS && (
                    <th
                      style={{
                        padding: '1.5rem',
                        textAlign: 'center',
                        borderBottom: '1px solid var(--color-border)',
                        borderLeft: '1px solid var(--color-border-subtle)',
                        verticalAlign: 'middle',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            border: '2px dashed var(--color-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-text-tertiary)',
                          }}
                        >
                          <Plus size={20} />
                        </div>
                        <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                          Add to Compare
                        </span>
                        <select
                          className="input"
                          style={{ fontSize: '0.8rem', padding: '0.4rem 0.6rem' }}
                          onChange={(e) => {
                            if (e.target.value) {
                              handleAddSlot(e.target.value);
                              e.target.value = '';
                            }
                          }}
                          defaultValue=""
                          aria-label="Add bike to compare"
                        >
                          <option value="" disabled>
                            Select Model...
                          </option>
                          {availableBikes.map((b) => (
                            <option key={b.slug} value={b.slug}>
                              {b.brand} {b.model}
                            </option>
                          ))}
                        </select>
                      </div>
                    </th>
                  )}
                </tr>
              </thead>

              <tbody>
                {/* Section: Overview */}
                <tr>
                  <td
                    colSpan={activeSlugs.length + (activeSlugs.length < MAX_COMPARE_SLOTS ? 2 : 1)}
                    style={{
                      background: 'var(--color-surface-sunken)',
                      padding: '0.65rem 1.5rem',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      color: 'var(--color-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    Pricing & Category
                  </td>
                </tr>

                {[
                  { label: 'Ex-Showroom Range', render: (b: Bike) => `₹${b.startingPrice.toLocaleString('en-IN')} – ₹${b.maxPrice.toLocaleString('en-IN')}` },
                  { label: 'Vehicle Type', render: (b: Bike) => b.vehicleType },
                  { label: 'Body Style', render: (b: Bike) => b.category },
                  { label: 'Powertrain Type', render: (b: Bike) => b.fuelType },
                ].map((row, rIdx) => (
                  <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? 'transparent' : 'var(--color-surface-inset)' }}>
                    <td style={{ padding: '0.85rem 1.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border-subtle)' }}>
                      {row.label}
                    </td>
                    {comparedBikes.map((b) => (
                      <td key={b?.slug} style={{ padding: '0.85rem 1.5rem', textAlign: 'center', fontSize: '0.88rem', fontWeight: 500, color: 'var(--color-text-primary)', borderBottom: '1px solid var(--color-border-subtle)', borderLeft: '1px solid var(--color-border-subtle)' }}>
                        {b ? row.render(b) : '—'}
                      </td>
                    ))}
                    {activeSlugs.length < MAX_COMPARE_SLOTS && <td style={{ borderBottom: '1px solid var(--color-border-subtle)', borderLeft: '1px solid var(--color-border-subtle)' }} />}
                  </tr>
                ))}

                {/* Section: Engine & Performance */}
                <tr>
                  <td
                    colSpan={activeSlugs.length + (activeSlugs.length < MAX_COMPARE_SLOTS ? 2 : 1)}
                    style={{
                      background: 'var(--color-surface-sunken)',
                      padding: '0.65rem 1.5rem',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      color: 'var(--color-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    Engine, Power & Mileage
                  </td>
                </tr>

                {[
                  { label: 'Displacement / Battery', render: (b: Bike) => b.displacementCC ? `${b.displacementCC} cc` : b.batteryKWh ? `${b.batteryKWh} kWh` : '—' },
                  { label: 'Max Power', render: (b: Bike) => `${b.maxPowerBhp} bhp` },
                  { label: 'Peak Torque', render: (b: Bike) => `${b.maxTorqueNm} Nm` },
                  { label: 'Efficiency / Range', render: (b: Bike) => b.fuelType === 'Electric' ? `${b.electricRangeKm} km (Certified)` : b.mileageKmpl ? `${b.mileageKmpl} kmpl (ARAI)` : '—' },
                  { label: 'Transmission', render: (b: Bike) => b.transmission },
                ].map((row, rIdx) => (
                  <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? 'transparent' : 'var(--color-surface-inset)' }}>
                    <td style={{ padding: '0.85rem 1.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border-subtle)' }}>
                      {row.label}
                    </td>
                    {comparedBikes.map((b) => (
                      <td key={b?.slug} style={{ padding: '0.85rem 1.5rem', textAlign: 'center', fontSize: '0.88rem', fontWeight: 500, color: 'var(--color-text-primary)', borderBottom: '1px solid var(--color-border-subtle)', borderLeft: '1px solid var(--color-border-subtle)' }}>
                        {b ? row.render(b) : '—'}
                      </td>
                    ))}
                    {activeSlugs.length < MAX_COMPARE_SLOTS && <td style={{ borderBottom: '1px solid var(--color-border-subtle)', borderLeft: '1px solid var(--color-border-subtle)' }} />}
                  </tr>
                ))}

                {/* Section: Safety & Chassis */}
                <tr>
                  <td
                    colSpan={activeSlugs.length + (activeSlugs.length < MAX_COMPARE_SLOTS ? 2 : 1)}
                    style={{
                      background: 'var(--color-surface-sunken)',
                      padding: '0.65rem 1.5rem',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      color: 'var(--color-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    Braking & Dimensions
                  </td>
                </tr>

                {[
                  { label: 'ABS Braking System', render: (b: Bike) => b.abs },
                  { label: 'Kerb Weight', render: (b: Bike) => `${b.kerbWeightKg} kg` },
                  { label: 'Fuel Tank Capacity', render: (b: Bike) => b.fuelTankLitres ? `${b.fuelTankLitres} L` : 'Not Applicable (EV)' },
                  { label: 'Tagline & Character', render: (b: Bike) => b.tagline },
                ].map((row, rIdx) => (
                  <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? 'transparent' : 'var(--color-surface-inset)' }}>
                    <td style={{ padding: '0.85rem 1.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border-subtle)' }}>
                      {row.label}
                    </td>
                    {comparedBikes.map((b) => (
                      <td key={b?.slug} style={{ padding: '0.85rem 1.5rem', textAlign: 'center', fontSize: '0.88rem', fontWeight: 500, color: 'var(--color-text-primary)', borderBottom: '1px solid var(--color-border-subtle)', borderLeft: '1px solid var(--color-border-subtle)' }}>
                        {b ? row.render(b) : '—'}
                      </td>
                    ))}
                    {activeSlugs.length < MAX_COMPARE_SLOTS && <td style={{ borderBottom: '1px solid var(--color-border-subtle)', borderLeft: '1px solid var(--color-border-subtle)' }} />}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
