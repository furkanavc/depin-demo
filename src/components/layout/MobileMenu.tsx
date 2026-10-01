'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { mainNav } from '@/data/navigation';
import { cn } from '@/utils/cn';
import Button from '@/components/tools/Button';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div className={cn('fixed inset-0 z-50 transition-[visibility]', open ? 'visible' : 'invisible delay-300')} aria-hidden={!open}>
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className={cn('absolute inset-0 bg-neutral-100/60 backdrop-blur-s-4 transition-opacity duration-300', open ? 'opacity-100' : 'opacity-0')}
      />
      <nav
        id="site-menu"
        aria-label="Main"
        className={cn(
          'absolute inset-y-0 right-0 flex w-s-420 flex-col gap-s-40 bg-background px-s-40 py-s-24 transition-transform duration-300 max-lg:w-full max-lg:px-s-16 max-lg:py-s-16',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="relative flex size-s-48 cursor-pointer items-center justify-center rounded-s-8 bg-icon-btn text-neutral-0"
          >
            <span className="absolute h-s-2 w-s-18 rotate-45 rounded-full bg-current" />
            <span className="absolute h-s-2 w-s-18 -rotate-45 rounded-full bg-current" />
          </button>
        </div>

        <ul className="flex flex-col gap-s-24">
          {mainNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="font-saira-condensed text-s-40 leading-s-48 text-foreground transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-s-16">
          <span className="text-s-12 leading-s-16 text-muted">Theme</span>
          <ThemeToggle />
          <Button href="/hardware-store" onClick={onClose} className="w-full">
            Buy Your Miner
          </Button>
        </div>
      </nav>
    </div>
  );
}
