import Reveal from '@/components/tools/Reveal';
import SectionHeading from '@/components/tools/SectionHeading';
import WaysToEarnSlider, { type EarnWay } from './WaysToEarnSlider';

function Highlight({ children }: { children: string }) {
  return <span className="font-medium text-neutral-0 light:text-neutral-90">{children}</span>;
}

const ways: EarnWay[] = [
  {
    image: '/home/ways-to-earn-1.webp',
    imageClassName: 'max-lg:scale-[1.0952]',
    description: (
      <>
        Earn native <Highlight>DPS tokens</Highlight> as rewards for hosting active infrastructure nodes and validating
        security protocols.
      </>
    ),
  },
  {
    image: '/home/ways-to-earn-2.webp',
    description: (
      <>
        Deploy smart sensors to gain <Highlight>high-priority satellite connection</Highlight> boosts, multiplying your
        standard mining yield.
      </>
    ),
  },
  {
    image: '/home/ways-to-earn-3.webp',
    description: (
      <>
        Seamlessly swap your accrued orbital <Highlight>DPS assets</Highlight> directly into fiat or stablecoins directly
        within <Highlight>the main App.</Highlight>
      </>
    ),
  },
  {
    image: '/home/ways-to-earn-4.webp',
    description:
      'Earn native DPS tokens as rewards for hosting active infrastructure nodes and validating security protocols.',
  },
];

export default function WaysToEarnSection() {
  return (
    <section className="w-full overflow-hidden bg-background">
      <div className="mx-auto flex w-full max-w-s-1440 flex-col gap-s-60 p-s-60 max-lg:gap-s-40 max-lg:px-s-16 max-lg:py-s-32">
        <Reveal>
          <SectionHeading
            eyebrow="WAYS TO EARN"
            title="One miner that works for you."
            align="start"
            className="w-full"
            titleClassName="[text-box:trim-both_cap_alphabetic] text-s-60 leading-s-64 text-neutral-0 light:text-neutral-90 max-lg:text-s-32"
          />
        </Reveal>

        <WaysToEarnSlider ways={ways} />
      </div>
    </section>
  );
}
