'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface BikeCompareContextValue {
  selectedBikeSlugs: string[];
  addBike: (slug: string) => void;
  removeBike: (slug: string) => void;
  clearBikes: () => void;
  isBikeSelected: (slug: string) => boolean;
  isFull: boolean;
}

const BikeCompareContext = createContext<BikeCompareContextValue | null>(null);

const MAX_BIKE_COMPARE = 4;
const STORAGE_KEY = 'static_compare_bikes';

export function BikeCompareProvider({ children }: { children: React.ReactNode }) {
  const [selectedBikeSlugs, setSelectedBikeSlugs] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage on client mount to avoid hydration mismatch
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSelectedBikeSlugs(parsed.slice(0, MAX_BIKE_COMPARE));
        }
      }
    } catch {
      // ignore parsing error
    }
    setIsInitialized(true);
  }, []);

  const saveToStorage = useCallback((slugs: string[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
    } catch {
      // ignore storage error
    }
  }, []);

  const addBike = useCallback(
    (slug: string) => {
      setSelectedBikeSlugs((prev) => {
        if (prev.includes(slug) || prev.length >= MAX_BIKE_COMPARE) return prev;
        const next = [...prev, slug];
        saveToStorage(next);
        return next;
      });
    },
    [saveToStorage]
  );

  const removeBike = useCallback(
    (slug: string) => {
      setSelectedBikeSlugs((prev) => {
        const next = prev.filter((s) => s !== slug);
        saveToStorage(next);
        return next;
      });
    },
    [saveToStorage]
  );

  const clearBikes = useCallback(() => {
    setSelectedBikeSlugs([]);
    saveToStorage([]);
  }, [saveToStorage]);

  const isBikeSelected = useCallback(
    (slug: string) => selectedBikeSlugs.includes(slug),
    [selectedBikeSlugs]
  );

  return (
    <BikeCompareContext.Provider
      value={{
        selectedBikeSlugs,
        addBike,
        removeBike,
        clearBikes,
        isBikeSelected,
        isFull: selectedBikeSlugs.length >= MAX_BIKE_COMPARE,
      }}
    >
      {children}
    </BikeCompareContext.Provider>
  );
}

export function useBikeCompare(): BikeCompareContextValue {
  const ctx = useContext(BikeCompareContext);
  if (!ctx) {
    throw new Error('useBikeCompare must be used within a BikeCompareProvider');
  }
  return ctx;
}
