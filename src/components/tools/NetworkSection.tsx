import Image from 'next/image';
import type { ReactNode } from 'react';
import Reveal from './Reveal';
import NetworkFeatureSlider, {
  type NetworkFeature,
} from './NetworkFeatureSlider';

const features: NetworkFeature[] = [
  {
    title: 'Network Gas & Transactions',
    description:
      'Earn native DEGEN tokens as rewards for hosting active infrastructure nodes and validating security protocols.',
  },
  {
    title: 'Stake to Save Gas',
    description:
      'Lock DEGEN to unlock a higher wallet tier and cut your gas costs by up to 75%. The longer you stake, the bigger the discount.',
  },
  {
    title: 'Mining Payouts',
    description:
      'Choose DEGEN as your settlement asset when your miner earns rewards, alongside the mined coin itself.',
  },
  {
    title: 'Governance',
    description:
      'DEGEN holders help shape network parameters. Thresholds can only change within disclosed limits and advance notice — no surprise rule changes.',
  },
];

const defaultBackground = (
  <>
    <div className="absolute top-0 left-0 h-[104.07%] w-[104.1%] light:hidden max-lg:-left-s-182 max-lg:h-s-1049 max-lg:w-s-1499">
      <Image
        src="/images/shared/network-bg-dark.webp"
        alt=""
        fill
        sizes="110vw"
        className="object-cover"
      />
    </div>

    <div className="absolute inset-0 hidden light:block max-lg:-left-s-182 max-lg:h-s-924 max-lg:w-s-1320">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-7.23%] left-0 h-[195.99%] w-full">
          <Image
            src="/images/shared/network-bg-light.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-neutral-0/0 from-[84%] to-neutral-0 max-lg:from-[67%]" />
    </div>
  </>
);

type NetworkSectionProps = {
  background?: ReactNode;
};

export default function NetworkSection({
  background = defaultBackground,
}: NetworkSectionProps) {
  return (
    <section className="relative h-s-1008 w-full overflow-hidden bg-background max-lg:h-s-894">
      {background}

      <div className="relative mx-auto flex w-full max-w-s-1440 flex-col items-center gap-s-60 px-s-80 py-s-60 max-lg:items-start max-lg:gap-s-40 max-lg:px-s-16">
        <Reveal className="w-s-800 max-lg:w-full">
          <div className="flex w-full flex-col items-center gap-s-24 max-lg:gap-s-12 text-center text-foreground">
            <p className="font-saira-condensed text-s-24 leading-s-32 font-medium opacity-40">
              NETWORK
            </p>
            <h2 className="font-saira-condensed text-s-60 leading-s-64 max-lg:text-s-32 max-lg:leading-s-40 max-lg:text-sky-blue-10 light:max-lg:text-neutral-90">
              One token powers the entire
              <br />
              <span className="font-semibold">DePIN Space Network</span>
            </h2>
            <p className="w-s-596 [text-box:trim-both_cap_alphabetic] text-s-16 leading-s-22 tracking-[calc(var(--1px)*0.96)] max-lg:w-full max-lg:text-s-15 max-lg:tracking-normal max-lg:text-neutral-40 light:max-lg:text-neutral-70">
              Our technology seamlessly links earth to orbit, delivering robust
              internet connectivity and decentralized rewards.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="w-full">
          <NetworkFeatureSlider features={features} />
        </Reveal>
      </div>
    </section>
  );
}
