'use client';

import { Plus, Check, Minus } from 'lucide-react';
import { useCompare } from '@/context/CompareContext';
import type { Car } from '@/types/car';

export function AddToCompareButton({ car }: { car: Car }) {
  const { isSelected, addCar, removeCar, isFull } = useCompare();
  const selected = isSelected(car.slug);

  if (selected) {
    return (
      <button
        onClick={() => removeCar(car.slug)}
        className="btn btn-primary"
        style={{ justifyContent: 'center' }}
        aria-label={`Remove ${car.displayName} from comparison`}
      >
        <Check size={16} />
        Added to Compare
      </button>
    );
  }

  return (
    <button
      onClick={() => addCar(car.slug)}
      className="btn btn-primary"
      style={{ justifyContent: 'center' }}
      disabled={isFull}
      title={isFull ? 'Maximum 5 cars can be compared' : undefined}
      aria-label={
        isFull
          ? 'Maximum 5 cars can be compared'
          : `Add ${car.displayName} to comparison`
      }
    >
      {isFull ? <Minus size={16} /> : <Plus size={16} />}
      {isFull ? 'Compare Full (5 max)' : 'Add to Compare'}
    </button>
  );
}
