import Button from '@/components/tools/Button';
import IconFeature, { type ThemeIcon } from '@/components/tools/IconFeature';
import Reveal from '@/components/tools/Reveal';
import SectionHeading from '@/components/tools/SectionHeading';

type TechnologyPart = {
  icon: ThemeIcon;
  title: string;
  description: string;
};

const icon = (name: string): ThemeIcon => ({
  dark: `/home/technology-${name}-dark.svg`,
  light: `/home/technology-${name}-light.svg`,
});

const parts: TechnologyPart[] = [
  { icon: icon('satellite'), title: 'Satellite Network', description: 'Always-on global coverage' },
  { icon: icon('receiver'), title: 'SpaceLink Receiver', description: 'Secure space link' },
  { icon: icon('miner'), title: 'DePIN Space Miner', description: 'Powerful, connected' },
  { icon: icon('wallet'), title: 'Wallet App', description: 'Track and grow' },
];

export default function TechnologySection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto flex w-full max-w-s-1440 flex-col items-center gap-s-60 p-s-60 max-lg:gap-s-40 max-lg:px-s-16">
        <div className="flex w-full flex-col items-center gap-s-40">
          <Reveal className="w-s-800 max-lg:w-full">
            <SectionHeading
              eyebrow="TECHNOLOGY"
              title={
                <>
                  Simple. Powerful. <span className="font-bold max-lg:font-semibold">From Space.</span>
                </>
              }
              description="Our technology seamlessly links earth to orbit, delivering robust internet connectivity and decentralized rewards."
              className="w-full"
              titleClassName="text-s-60 leading-s-68 text-neutral-10 light:text-neutral-90 max-lg:[text-box:trim-both_cap_alphabetic] max-lg:text-s-32 max-lg:leading-s-64"
              descriptionClassName="text-s-16 leading-s-24 text-neutral-30 light:text-neutral-70 max-lg:[text-box:trim-both_cap_alphabetic] max-lg:text-s-15 max-lg:leading-s-22"
            />
          </Reveal>

          <div className="flex w-full items-center justify-center gap-s-16 max-lg:flex-col">
            {parts.map((part, index) => (
              <Reveal key={part.title} delay={index * 0.08}>
                <IconFeature {...part} size="sm" />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <Button href="#how-it-works" className="light:border-neutral-90 light:bg-neutral-90">
            See How it Works
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
