import type { Metadata } from 'next';
import AllocationBreakdown from '@/components/tokenomics/AllocationBreakdown';
import MiningPowerTiers from '@/components/tokenomics/MiningPowerTiers';
import Button from '@/components/tools/Button';
import NetworkSection from '@/components/tools/NetworkSection';
import PageHero from '@/components/tools/PageHero';
import ThemeImage from '@/components/tools/ThemeImage';

export const metadata: Metadata = {
  title: 'Tokenomics',
  description: 'Protocol architecture and DEGEN tokenomics. Fixed total supply: 20,000,000,000 DEGEN (immutable).',
};

const heroMedia = (
  <>
    <div aria-hidden className="pointer-events-none absolute inset-0 max-lg:hidden">
      <ThemeImage
        dark="/images/tokenomics/tokenomics-hero-dark.webp"
        light="/images/tokenomics/tokenomics-hero-light.webp"
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover"
      />
    </div>
    <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
      <ThemeImage
        dark="/images/tokenomics/tokenomics-hero-dark-mobile.webp"
        light="/images/tokenomics/tokenomics-hero-light-mobile.webp"
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover"
      />
    </div>
  </>
);

export default function TokenomicsPage() {
  return (
    <>
      <PageHero
        title="Protocol Architecture & DEGEN Tokenomics"
        subtitle="Fixed Total Supply: 20,000,000,000 DEGEN (Immutable)"
        media={heroMedia}
        actions={
          <>
            <Button href="#token-allocation" variant="white">
              Learn More
            </Button>
            <Button href="#mining-power" variant="ink">
              DEGEN
            </Button>
          </>
        }
      />
      <AllocationBreakdown />
      <MiningPowerTiers />
      <NetworkSection />
    </>
  );
}
