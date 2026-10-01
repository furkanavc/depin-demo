import HomeHero from '@/components/home/HomeHero';
import JourneySection from '@/components/home/JourneySection';
import MineAnywhereSection from '@/components/home/MineAnywhereSection';
import TechnologySection from '@/components/home/TechnologySection';
import WaysToEarnSection from '@/components/home/WaysToEarnSection';
import WhyDepinSection from '@/components/home/WhyDepinSection';
import NetworkSection from '@/components/tools/NetworkSection';
import ProductShowcase from '@/components/tools/ProductShowcase';

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhyDepinSection />
      <MineAnywhereSection />
      <WaysToEarnSection />
      <JourneySection />
      <ProductShowcase animated />
      <TechnologySection />
      <NetworkSection />
    </>
  );
}
