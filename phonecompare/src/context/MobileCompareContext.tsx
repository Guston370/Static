/**
 * MobileCompareContext — global client-side state for the mobile comparison tray.
 * Provides add/remove/clear actions and a 4-phone cap.
 */
'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface MobileCompareContextValue {
  selectedMobileSlugs: string[];
  addMobile: (slug: string) => void;
  removeMobile: (slug: string) => void;
  clearMobiles: () => void;
  isMobileSelected: (slug: string) => boolean;
  isFull: boolean;
}

const MobileCompareContext = createContext<MobileCompareContextValue | null>(null);

const MAX_MOBILE_COMPARE = 4;
const STORAGE_KEY = 'static_compare_mobiles';

export function MobileCompareProvider({ children }: { children: React.ReactNode }) {
  const [selectedMobileSlugs, setSelectedMobileSlugs] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed.slice(0, MAX_MOBILE_COMPARE);
        }
      }
    } catch {
      // ignore
    }
    return [];
  });

  const saveToStorage = useCallback((slugs: string[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
    } catch {
      // ignore storage errors
    }
  }, []);

  const addMobile = useCallback(
    (slug: string) => {
      setSelectedMobileSlugs((prev) => {
        if (prev.includes(slug) || prev.length >= MAX_MOBILE_COMPARE) return prev;
        const next = [...prev, slug];
        saveToStorage(next);
        return next;
      });
    },
    [saveToStorage]
  );

  const removeMobile = useCallback(
    (slug: string) => {
      setSelectedMobileSlugs((prev) => {
        const next = prev.filter((s) => s !== slug);
        saveToStorage(next);
        return next;
      });
    },
    [saveToStorage]
  );

  const clearMobiles = useCallback(() => {
    setSelectedMobileSlugs([]);
    saveToStorage([]);
  }, [saveToStorage]);

  const isMobileSelected = useCallback(
    (slug: string) => selectedMobileSlugs.includes(slug),
    [selectedMobileSlugs]
  );

  return (
    <MobileCompareContext.Provider
      value={{
        selectedMobileSlugs,
        addMobile,
        removeMobile,
        clearMobiles,
        isMobileSelected,
        isFull: selectedMobileSlugs.length >= MAX_MOBILE_COMPARE,
      }}
    >
      {children}
    </MobileCompareContext.Provider>
  );
}

export function useMobileCompare(): MobileCompareContextValue {
  const ctx = useContext(MobileCompareContext);
  if (!ctx) throw new Error('useMobileCompare must be used inside MobileCompareProvider');
  return ctx;
}
