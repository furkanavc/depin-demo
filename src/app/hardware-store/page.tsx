import type { Metadata } from 'next';
import StoreNetworkSection from '@/components/hardware-store/StoreNetworkSection';
import PageHero from '@/components/tools/PageHero';
import ProductShowcase from '@/components/tools/ProductShowcase';
import ThemeImage from '@/components/tools/ThemeImage';

export const metadata: Metadata = {
  title: 'Hardware Store',
  description: 'Select your hardware miner to enter the network and start earning DEGEN coins.',
};

const heroMedia = (
  <>
    <div aria-hidden className="pointer-events-none absolute inset-0 max-lg:hidden">
      <ThemeImage
        dark="/images/hardware-store/hardware-store-hero-dark.webp"
        light="/images/hardware-store/hardware-store-hero-light.webp"
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover"
      />
    </div>
    <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
      <ThemeImage
        dark="/images/hardware-store/hardware-store-hero-dark-mobile.webp"
        light="/images/hardware-store/hardware-store-hero-light-mobile.webp"
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover object-bottom"
      />
    </div>
  </>
);

export default function HardwareStorePage() {
  return (
    <>
      <PageHero
        title="Buy Your Miner"
        subtitle="Select your hardware miner to enter the network and start earning DEGEN coins."
        media={heroMedia}
        className="lg:h-s-531"
        contentClassName="lg:top-[calc(50%_+_var(--1px)*60)]"
      />
      <ProductShowcase animated />
      <StoreNetworkSection />
    </>
  );
}
