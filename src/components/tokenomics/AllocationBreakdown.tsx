import Reveal from '@/components/tools/Reveal';
import { allocations } from '@/data/tokenomics';
import { cn } from '@/utils/cn';

const barLabel = `Token allocation: ${allocations.map((allocation) => `${allocation.title} ${allocation.share}`).join(', ')}`;

export default function AllocationBreakdown() {
  return (
    <section id="token-allocation" className="w-full scroll-mt-[calc(var(--1px)*100)] bg-background">
      <div className="mx-auto flex w-full max-w-s-1440 flex-col gap-s-40 p-s-60 max-lg:gap-s-60 max-lg:px-s-16 max-lg:pt-s-20 max-lg:pb-s-30">
        <Reveal className="flex flex-col gap-s-16">
          <h2 className="font-saira-condensed text-s-48 leading-s-56 font-semibold text-foreground max-lg:text-s-32 max-lg:leading-s-40">
            Token Allocation Breakdown
          </h2>
          <p className="text-s-16 leading-s-24 text-neutrals-20 light:text-neutral-60">
            Immutable protocol allocations safeguarding long-term network growth.
          </p>
        </Reveal>

        <div className="flex flex-col gap-s-40 max-lg:gap-s-20">
          <Reveal delay={0.08}>
            <div
              role="img"
              aria-label={barLabel}
              className="flex h-s-84 w-full overflow-hidden rounded-s-12 max-lg:h-s-63"
            >
              {allocations.map((allocation) => (
                <div
                  key={allocation.title}
                  className={cn('flex h-full shrink-0 items-center justify-center', allocation.segmentClassName)}
                >
                  <span
                    className={cn(
                      'font-saira-condensed font-bold whitespace-nowrap text-neutrals-0',
                      allocation.segmentLabelClassName,
                    )}
                  >
                    {allocation.share}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16} amount={0.15}>
            <ul className="grid grid-cols-2 max-lg:grid-cols-1">
              {allocations.map((allocation) => (
                <li
                  key={allocation.title}
                  className="flex items-start gap-s-20 border-b border-field-border p-s-32 shadow-[0_calc(var(--1px)*4)_calc(var(--1px)*12)_0_rgb(0_0_0/0.03)] odd:border-r max-lg:gap-s-12 max-lg:px-0 max-lg:py-s-24 max-lg:odd:border-r-0 lg:nth-[-n+2]:border-t"
                >
                  <div className="flex shrink-0 items-center gap-s-12 max-lg:gap-s-8">
                    <span className={cn('size-s-16 rounded-s-4 max-lg:size-s-12', allocation.swatchClassName)} />
                    <span
                      className={cn(
                        'font-saira-condensed text-s-32 leading-s-40 font-semibold whitespace-nowrap',
                        allocation.shareClassName,
                      )}
                    >
                      {allocation.share}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-s-6">
                    <div className="flex items-baseline justify-between gap-s-8 font-saira-condensed text-s-24 leading-s-32 whitespace-nowrap">
                      <h3 className="min-w-0 flex-1 truncate font-semibold text-foreground">{allocation.title}</h3>
                      <span className="shrink-0 text-neutrals-20 light:text-neutral-60">{allocation.amount}</span>
                    </div>
                    <p className="text-s-14 leading-s-20 text-neutrals-20 light:text-neutral-60 max-lg:line-clamp-4">
                      {allocation.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
