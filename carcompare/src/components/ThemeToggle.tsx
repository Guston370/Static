'use client';

import { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeMode>('system');
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((mode: ThemeMode) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else if (mode === 'light') {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
        root.style.colorScheme = 'light';
      }
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    const active = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
    setTheme(active);
    applyTheme(active);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = () => {
      const current = localStorage.getItem('theme') as ThemeMode | null;
      if (!current || current === 'system') {
        applyTheme('system');
      }
    };

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: ThemeMode }>;
      if (customEvent.detail && customEvent.detail.theme) {
        setTheme(customEvent.detail.theme);
        applyTheme(customEvent.detail.theme);
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme' && e.newValue) {
        const next = (e.newValue as ThemeMode);
        if (next === 'light' || next === 'dark' || next === 'system') {
          setTheme(next);
          applyTheme(next);
        }
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    window.addEventListener('static-theme-change', handleCustomChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('static-theme-change', handleCustomChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [applyTheme]);

  const cycleTheme = () => {
    const next: Record<ThemeMode, ThemeMode> = {
      light: 'dark',
      dark: 'system',
      system: 'light',
    };
    const nextTheme = next[theme];
    setTheme(nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {}
    applyTheme(nextTheme);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('static-theme-change', { detail: { theme: nextTheme } }));
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className={`theme-toggle-btn ${className}`}
        aria-label="Toggle display theme"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          width: showLabel ? 'auto' : '36px',
          height: '36px',
          padding: showLabel ? '0 0.75rem' : '0',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-neu-button)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-secondary)',
          cursor: 'pointer',
        }}
      >
        <Sun size={17} />
        {showLabel && <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Theme</span>}
      </button>
    );
  }

  const getLabel = () => {
    if (theme === 'light') return 'Light Theme';
    if (theme === 'dark') return 'Dark Theme';
    return 'System Theme';
  };

  const renderIcon = () => {
    if (theme === 'light') return <Sun size={17} style={{ color: '#F59E0B' }} />;
    if (theme === 'dark') return <Moon size={17} style={{ color: 'var(--color-accent)' }} />;
    return <Laptop size={17} style={{ color: 'var(--color-text-secondary)' }} />;
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={`theme-toggle-btn ${className}`}
      title={`Theme: ${getLabel()} (Click to toggle)`}
      aria-label={`Current theme is ${getLabel()}. Click to cycle theme.`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.4rem',
        minWidth: showLabel ? 'auto' : '36px',
        height: '36px',
        padding: showLabel ? '0 0.75rem' : '0',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-neu-button)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text-primary)',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
      }}
    >
      {renderIcon()}
      {showLabel && (
        <span style={{ fontSize: '0.82rem', fontWeight: 600, textTransform: 'capitalize' }}>
          {theme}
        </span>
      )}
    </button>
  );
}
