import type { Metadata } from 'next';
import SupportCenter from '@/components/support/SupportCenter';
import NetworkSection from '@/components/tools/NetworkSection';
import PageHero from '@/components/tools/PageHero';
import ThemeImage from '@/components/tools/ThemeImage';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Everything you need to know before you buy, connect, or stake.',
};

const heroMedia = (
  <>
    <div aria-hidden className="pointer-events-none absolute inset-0 max-lg:hidden">
      <ThemeImage
        dark="/images/support/support-hero-dark.webp"
        light="/images/support/support-hero-light.webp"
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover"
      />
    </div>
    <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
      <ThemeImage
        dark="/images/support/support-hero-dark-mobile.webp"
        light="/images/support/support-hero-light-mobile.webp"
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover"
      />
    </div>
  </>
);

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="Common Questions, Answered"
        subtitle="Everything you need to know before you buy, connect, or stake."
        media={heroMedia}
      />
      <SupportCenter />
      <NetworkSection />
    </>
  );
}
