/**
 * CompareContext — global client-side state for the comparison tray.
 * Provides add/remove/clear actions and a 5-car cap.
 *
 * Phase 2+: persist selection to localStorage or URL params.
 */
'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface CompareContextValue {
  selectedSlugs: string[];
  addCar: (slug: string) => void;
  removeCar: (slug: string) => void;
  clearCars: () => void;
  isSelected: (slug: string) => boolean;
  isFull: boolean;
}

const CompareContext = createContext<CompareContextValue | null>(null);

const MAX_COMPARE = 5;

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);

  const addCar = useCallback((slug: string) => {
    setSelectedSlugs((prev) => {
      if (prev.includes(slug) || prev.length >= MAX_COMPARE) return prev;
      return [...prev, slug];
    });
  }, []);

  const removeCar = useCallback((slug: string) => {
    setSelectedSlugs((prev) => prev.filter((s) => s !== slug));
  }, []);

  const clearCars = useCallback(() => {
    setSelectedSlugs([]);
  }, []);

  const isSelected = useCallback(
    (slug: string) => selectedSlugs.includes(slug),
    [selectedSlugs]
  );

  return (
    <CompareContext.Provider
      value={{
        selectedSlugs,
        addCar,
        removeCar,
        clearCars,
        isSelected,
        isFull: selectedSlugs.length >= MAX_COMPARE,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare(): CompareContextValue {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error('useCompare must be used inside CompareProvider');
  return ctx;
}
