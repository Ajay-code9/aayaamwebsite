'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitch({ iconOnly = false, className = '' }: { iconOnly?: boolean; className?: string }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setDark(root.dataset.theme !== 'light');
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {attributes:true, attributeFilter:['data-theme']});
    return () => observer.disconnect();
  }, []);

  function toggle() {
    const root = document.documentElement;
    const isCurrentlyDark = root.dataset.theme !== 'light';
    const next = isCurrentlyDark ? 'light' : 'dark';
    root.dataset.theme = next;
    setDark(next === 'dark');
    try { localStorage.setItem('aayaamx-theme', next); } catch {}
  }

  if (iconOnly) {
    return (
      <button
        className={`nav-theme-toggle ${className}`}
        type="button"
        aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        aria-pressed={dark}
        onClick={toggle}
        title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {dark ? <Sun size={17} strokeWidth={2} aria-hidden="true"/> : <Moon size={17} strokeWidth={2} aria-hidden="true"/>}
      </button>
    );
  }

  return (
    <button className={`footer-theme-switch ${className}`} type="button" aria-pressed={dark} onClick={toggle}>
      {dark ? <Sun size={16} aria-hidden="true"/> : <Moon size={16} aria-hidden="true"/>}
      {dark ? 'Light theme' : 'Dark theme'}
    </button>
  );
}
