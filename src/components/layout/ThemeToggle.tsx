'use client';

import { useSyncExternalStore } from 'react';
import { cn } from '@/utils/cn';
import { DEFAULT_THEME, THEME_STORAGE_KEY, type Theme } from '@/utils/theme';

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => DEFAULT_THEME);

  const setTheme = (next: Theme) => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  };

  return { theme, setTheme };
}

const options: { value: Theme; label: string }[] = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
];

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div role="radiogroup" aria-label="Theme" className={cn('flex gap-s-4 rounded-s-12 bg-icon-btn p-s-4', className)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={theme === option.value}
          onClick={() => setTheme(option.value)}
          className={cn(
            'h-s-40 flex-1 cursor-pointer rounded-s-8 px-s-16 text-s-14 leading-s-20 font-semibold transition',
            theme === option.value ? 'bg-btn-primary-bg text-btn-primary-fg' : 'text-neutral-0/70 hover:text-neutral-0',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
