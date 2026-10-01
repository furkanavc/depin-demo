import Button from '@/components/tools/Button';
import Reveal from '@/components/tools/Reveal';
import { powerTiers } from '@/data/tokenomics';

const headerCellClassName =
  'py-s-14 text-s-12 leading-normal font-medium tracking-[calc(var(--1px)*0.48)] text-neutrals-30';
const bodyCellClassName = 'py-s-16 align-top text-s-15 leading-normal text-neutrals-5 light:text-neutral-90';

export default function MiningPowerTiers() {
  return (
    <section id="mining-power" className="w-full scroll-mt-[calc(var(--1px)*100)] bg-background">
      <div className="mx-auto flex w-full max-w-s-1440 flex-col items-center gap-s-40 p-s-60 max-lg:px-s-16 max-lg:pt-s-30 max-lg:pb-s-20">
        <Reveal className="flex w-full flex-col gap-s-16 text-center max-lg:text-left">
          <h2 className="font-saira-condensed text-s-48 leading-s-56 font-semibold text-foreground max-lg:text-s-32 max-lg:leading-s-40">
            More Coins Held = More Mining Power
          </h2>
          <p className="text-s-16 leading-s-24 text-neutrals-20 light:text-neutral-60">
            Hold DEGEN coins in your portal wallet to upgrade your miner power level and boost potential rewards.
          </p>
        </Reveal>

        <Reveal delay={0.08} amount={0.15} className="w-full px-s-240 max-lg:px-0">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="border-b border-field-border">
                <th scope="col" className={`${headerCellClassName} w-s-144 text-left max-lg:w-s-84`}>
                  TIER
                </th>
                <th scope="col" className={`${headerCellClassName} w-s-240 text-left max-lg:w-auto`}>
                  DEGEN REQUIRED
                </th>
                <th scope="col" className={`${headerCellClassName} text-right`}>
                  MINE MULTIPLIER
                </th>
              </tr>
            </thead>
            <tbody>
              {powerTiers.map((tier) => (
                <tr key={tier.level} className="border-b border-field-border last:border-b-0">
                  <th scope="row" className={`${bodyCellClassName} text-left font-normal`}>
                    {tier.shortLevel ? (
                      <>
                        <span className="max-lg:hidden">{tier.level}</span>
                        <span className="lg:hidden">{tier.shortLevel}</span>
                      </>
                    ) : (
                      tier.level
                    )}
                  </th>
                  <td className={bodyCellClassName}>{tier.required}</td>
                  <td className={`${bodyCellClassName} text-right font-semibold`}>{tier.multiplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.12} className="flex items-start gap-s-16 max-lg:w-full max-lg:flex-col">
          <Button href="/support" variant="white" className="max-lg:w-full">
            Learn More About DEGEN Coins
          </Button>
          <Button href="/hardware-store" variant="ink" className="max-lg:w-full">
            Buy DEGEN Coins
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
