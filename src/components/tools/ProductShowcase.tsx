import Image from 'next/image';
import type { ReactNode } from 'react';
import { products } from '@/data/products';
import { cn } from '@/utils/cn';
import Glow from './Glow';
import ProductCard from './ProductCard';
import ThemeMedia from './ThemeMedia';

function Pic({ src, className, sizes = '(max-width: 1023px) 100vw, 50vw' }: { src: string; className: string; sizes?: string }) {
  return (
    <span aria-hidden className={cn('pointer-events-none absolute', className)}>
      <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
    </span>
  );
}

const centered = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';

const media: Record<string, ReactNode> = {
  'dps-10': (
    <ThemeMedia
      darkDesktop={
        <>
          <Pic src="/images/products/dps-10-dark.png" className={cn(centered, 'size-s-635 -ml-s-2 -mt-s-2')} />
          <Glow tone="blue-60" className="-top-s-703 -left-s-579" />
        </>
      }
      darkMobile={
        <>
          <Pic src="/images/products/dps-10-dark-mobile.png" className={cn(centered, 'h-s-550 w-s-434')} sizes="100vw" />
          <Glow tone="blue-80" className="-top-s-816 -left-s-652" />
        </>
      }
      lightDesktop={
        <>
          <Pic src="/images/products/dps-10-light.png" className={cn(centered, 'h-s-698 w-s-930')} />
          <Pic src="/images/products/dps-10-light-overlay.png" className={cn(centered, 'h-s-698 w-s-930')} />
        </>
      }
      lightMobile={
        <>
          <Pic src="/images/products/dps-10-light.png" className={cn(centered, '-ml-s-12 h-s-550 w-s-733')} sizes="100vw" />
          <Pic src="/images/products/dps-10-light-overlay.png" className={cn(centered, '-ml-s-12 h-s-550 w-s-733')} sizes="100vw" />
        </>
      }
    />
  ),
  'dps-30': (
    <ThemeMedia
      darkDesktop={
        <>
          <Pic src="/images/products/dps-30-dark.png" className="top-1/2 left-s-10 size-s-630 -translate-y-1/2" />
          <Glow tone="blue-80" className="-top-s-764 -left-s-637" />
        </>
      }
      darkMobile={
        <>
          <Pic src="/images/products/dps-30-dark-mobile.png" className="top-0 -left-s-12 h-s-550 w-s-395" sizes="100vw" />
          <Glow tone="blue-80" className="-top-s-813 -left-s-636" />
        </>
      }
      lightDesktop={
        <Pic src="/images/products/dps-30-light.png" className="top-1/2 -left-s-261 mt-s-12 h-s-782 w-s-1042 -translate-y-1/2" />
      }
      lightMobile={
        <Pic src="/images/products/dps-30-light.png" className="top-0 -left-s-217 h-s-550 w-s-733" sizes="100vw" />
      }
    />
  ),
  'dps-50': (
    <ThemeMedia
      darkDesktop={
        <>
          <Pic src="/images/products/dps-50-dark.png" className={cn(centered, 'h-s-630 w-s-1320')} sizes="100vw" />
          <Glow tone="blue-60" className="-top-s-499 -left-s-547" />
        </>
      }
      darkMobile={
        <>
          <Pic src="/images/products/dps-50-dark-mobile.png" className={cn(centered, '-ml-s-24 h-s-550 w-s-790')} sizes="100vw" />
          <Glow tone="blue-60" className="-top-s-602 -left-s-700" />
        </>
      }
      lightDesktop={
        <>
          <Pic src="/images/products/dps-50-light.png" className={cn(centered, '-mt-s-28 -ml-s-7 h-s-1001 w-s-1334')} sizes="100vw" />
          <Glow tone="white-80" className="-top-s-499 -left-s-547" />
        </>
      }
      lightMobile={
        <>
          <Pic src="/images/products/dps-50-light.png" className={cn(centered, '-ml-s-25 h-s-602 w-s-802')} sizes="100vw" />
          <Glow tone="white-80" className="-top-s-602 -left-s-700" />
        </>
      }
    />
  ),
};

type ProductShowcaseProps = {
  showBadges?: boolean;
  animated?: boolean;
  className?: string;
};

export default function ProductShowcase({ showBadges = false, animated = false, className }: ProductShowcaseProps) {
  const [first, second, wide] = products;

  return (
    <section className={cn('w-full bg-neutral-100 light:bg-neutral-0', className)}>
      <div className="mx-auto flex w-full max-w-s-1440 flex-col gap-s-40 p-s-60 max-lg:px-s-16 max-lg:py-s-24">
        <div className="flex items-center gap-s-40 max-lg:flex-col">
          {[first, second].map((product, order) => (
            <ProductCard
              key={product.slug}
              product={product}
              media={media[product.slug]}
              showBadge={showBadges}
              animated={animated}
              order={order}
              className="min-w-0 flex-1 max-lg:flex-none"
            />
          ))}
        </div>
        <ProductCard product={wide} media={media[wide.slug]} showBadge={showBadges} wide animated={animated} className="w-full" />
      </div>
    </section>
  );
}
