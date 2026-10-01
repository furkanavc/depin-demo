import Button from '@/components/tools/Button';
import type { ThemeIcon } from '@/components/tools/IconFeature';
import Reveal from '@/components/tools/Reveal';
import SectionHeading from '@/components/tools/SectionHeading';
import ThemeImage from '@/components/tools/ThemeImage';

type JourneyStep = {
  icon: ThemeIcon;
  title: string;
  description: string;
  action: string;
  href?: string;
};

const icon = (name: string): ThemeIcon => ({
  dark: `/home/journey-${name}-dark.svg`,
  light: `/home/journey-${name}-light.svg`,
});

const steps: JourneyStep[] = [
  {
    icon: icon('buy'),
    title: '1. Buy Miner',
    description: 'Buy your miner from $49. At checkout, add $100 DEGEN for 10% extra coins.',
    action: 'Buy Miner ($49)',
    href: '/hardware-store',
  },
  {
    icon: icon('scan'),
    title: '2. Miner Arrives & Scan',
    description: 'Scan the QR code on the miner. Create account and connect device.',
    action: 'Activate Your Miner',
  },
  {
    icon: icon('portal'),
    title: '3. Portal Opens',
    description: 'See miner online, mining power, daily rewards, and add DEGEN to boost power.',
    action: 'Open Portal',
  },
];

const actionClassName = 'light:border-neutral-100 light:bg-neutral-100';

export default function JourneySection() {
  return (
    <section id="how-it-works" className="w-full bg-background">
      <div className="mx-auto flex w-full max-w-s-1440 flex-col gap-s-60 p-s-60 max-lg:p-s-20">
        <Reveal>
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="SIMPLE MINER-TO-COIN JOURNEY"
            className="w-full"
            eyebrowClassName="[text-box:trim-both_cap_alphabetic] font-poppins text-s-20 leading-s-28 font-semibold text-neutral-0 opacity-40 max-lg:text-s-14 light:[text-box:normal] light:font-saira-condensed light:text-s-24 light:leading-s-32 light:text-neutrals-90 light:max-lg:text-s-20 light:max-lg:leading-s-28"
            titleClassName="text-s-60 leading-s-68 whitespace-nowrap text-neutral-0 light:text-neutrals-90 max-lg:text-s-40 max-lg:leading-s-48 max-lg:whitespace-normal max-lg:text-neutral-10"
          />
        </Reveal>

        <div className="flex w-full items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-s-25">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.1}
              className="flex w-s-370 flex-col items-center gap-s-24 text-center"
            >
              <span className="relative size-s-56 shrink-0">
                <ThemeImage dark={step.icon.dark} light={step.icon.light} alt="" fill sizes="56px" />
              </span>
              <h3 className="[text-box:trim-both_cap_alphabetic] text-s-24 leading-s-28 font-medium text-neutral-0 light:text-neutral-100">
                {step.title}
              </h3>
              <p className="[text-box:trim-both_cap_alphabetic] text-s-14 leading-s-22 tracking-[calc(var(--1px)*0.84)] text-neutral-0 light:text-neutral-100">
                {step.description}
              </p>
              {step.href ? (
                <Button href={step.href} className={actionClassName}>
                  {step.action}
                </Button>
              ) : (
                <Button className={actionClassName}>{step.action}</Button>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
