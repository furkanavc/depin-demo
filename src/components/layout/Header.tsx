'use client';

import Link from 'next/link';
import { useCallback, useState, useSyncExternalStore } from 'react';
import { mainNav } from '@/data/navigation';
import { cn } from '@/utils/cn';
import Button from '@/components/tools/Button';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import MobileMenu from './MobileMenu';

const SCROLL_THRESHOLD = 8;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

const getIsScrolled = () => window.scrollY > SCROLL_THRESHOLD;

export default function Header() {
  const isScrolled = useSyncExternalStore(subscribeToScroll, getIsScrolled, () => false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 w-full transition-[background-color,backdrop-filter,box-shadow] duration-300',
          isScrolled && 'bg-background/70 shadow-[0_1px_0_var(--color-stroke)] backdrop-blur-s-16',
        )}
      >
        <div
          className={cn(
            'mx-auto flex w-full max-w-s-1440 items-center justify-between px-s-80 transition-[padding] duration-300 max-lg:px-s-16',
            isScrolled ? 'py-s-10 max-lg:py-s-8' : 'py-s-20 max-lg:py-s-16',
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="flex items-center gap-s-40 max-lg:hidden">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-s-15 leading-normal whitespace-nowrap text-nav transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-s-16">
            <Button
              href="/hardware-store"
              size="nav"
              variant="none"
              className="bg-btn-primary-bg text-btn-primary-fg hover:opacity-90 lg:hidden"
            >
              Buy Now
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen(true)}
              className="flex size-s-48 cursor-pointer items-center justify-center rounded-s-8 bg-icon-btn transition-opacity hover:opacity-80 max-lg:size-s-47 max-lg:p-s-10 max-lg:backdrop-blur-s-12"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
