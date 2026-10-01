import IconFeature, { type ThemeIcon } from '@/components/tools/IconFeature';
import Reveal from '@/components/tools/Reveal';
import SectionHeading from '@/components/tools/SectionHeading';

type WhyFeature = {
  icon: ThemeIcon;
  title: string;
  description: string;
};

const icon = (name: string): ThemeIcon => ({
  dark: `/home/why-${name}-dark.svg`,
  light: `/home/why-${name}-light.svg`,
});

const features: WhyFeature[] = [
  {
    icon: icon('yield'),
    title: 'Automated Yield',
    description: 'Earn DEGEN tokens 24/7 without high electricity bills or complex server maintenance.',
  },
  {
    icon: icon('setup'),
    title: '2-Min Setup',
    description: 'Unpack, plug in, and scan the QR code on the miner to automatically connect device.',
  },
  {
    icon: icon('infrastructure'),
    title: 'Real Infrastructure',
    description: 'Backed by physical orbital satellite hardware and genuine network connectivity.',
  },
  {
    icon: icon('fleet'),
    title: 'Mining Fleet',
    description: 'Start with 1 miner at $49 and build a multi-device fleet as your holdings grow.',
  },
];

export default function WhyDepinSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto flex w-full max-w-s-1440 flex-col items-center gap-s-40 p-s-60 max-lg:p-s-20">
        <Reveal className="w-s-800 max-lg:w-full">
          <SectionHeading
            eyebrow="TECHNOLOGY"
            title={
              <>
                WHY DePIN <span className="font-semibold">SPACE?</span>
              </>
            }
            description="Turn satellite connectivity into an effortless income stream."
            className="w-full"
            titleClassName="[text-box:trim-both_cap_alphabetic] text-s-60 leading-s-68 text-neutral-10 light:leading-s-64 light:text-neutrals-90 max-lg:text-s-40 max-lg:leading-s-48 light:max-lg:text-s-35 light:max-lg:leading-s-64"
            descriptionClassName="text-s-14 leading-s-20 text-neutral-30 light:text-neutrals-70"
          />
        </Reveal>

        <div className="flex w-full items-start justify-center gap-s-24 max-lg:flex-col max-lg:items-center">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08} className="max-lg:w-full">
              <IconFeature {...feature} className="max-lg:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
