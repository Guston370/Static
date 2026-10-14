'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Check, ChevronRight } from 'lucide-react';
import { useBikeCompare } from '@/context/BikeCompareContext';

export function BikeDetailActions({ slug, modelName }: { slug: string; modelName: string }) {
  const { isBikeSelected, addBike, removeBike, selectedBikeSlugs } = useBikeCompare();
  const isSelected = isBikeSelected(slug);

  const toggle = () => {
    if (isSelected) {
      removeBike(slug);
    } else {
      addBike(slug);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '1.25rem', flexWrap: 'wrap' }}>
      <button
        type="button"
        onClick={toggle}
        className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
        aria-label={isSelected ? `Remove ${modelName} from comparison` : `Add ${modelName} to comparison`}
      >
        {isSelected ? <Check size={16} /> : <Plus size={16} />}
        {isSelected ? 'In Compare Tray' : 'Add to Compare'}
      </button>

      {selectedBikeSlugs.length > 0 && (
        <Link
          href={`/bikes/compare?bikes=${selectedBikeSlugs.join(',')}`}
          className="btn btn-secondary"
        >
          Compare Now ({selectedBikeSlugs.length}) <ChevronRight size={15} />
        </Link>
      )}
    </div>
  );
}
