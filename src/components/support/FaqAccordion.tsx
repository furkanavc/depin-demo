'use client';

import { useId, useState } from 'react';
import type { FaqItem } from '@/data/support';
import { cn } from '@/utils/cn';
import SupportIcon from './SupportIcon';

type FaqAccordionVariant = 'default' | 'compact';

type FaqAccordionProps = {
  items: FaqItem[];
  variant?: FaqAccordionVariant;
  className?: string;
};

const panelMotion = 'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none';

export default function FaqAccordion({ items, variant = 'default', className }: FaqAccordionProps) {
  const baseId = useId();
  const [openQuestion, setOpenQuestion] = useState<string | undefined>(items[0]?.question);

  const toggle = (question: string) => setOpenQuestion((current) => (current === question ? undefined : question));

  return (
    <ul className={cn('flex w-full flex-col', className)}>
      {items.map((item, index) => {
        const open = openQuestion === item.question;
        const buttonId = `${baseId}-question-${index}`;
        const panelId = `${baseId}-answer-${index}`;
        const panelClassName = cn(panelMotion, open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]');

        if (variant === 'compact') {
          return (
            <li
              key={item.question}
              className={cn(
                'relative flex items-start gap-s-20 p-s-20 transition-colors',
                open ? 'rounded-s-24 bg-neutrals-70 light:bg-neutrals-5' : 'border-b border-field-border last:border-b-0',
              )}
            >
              <div className="flex min-w-0 flex-1 flex-col">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(item.question)}
                    className="w-full cursor-pointer text-left text-s-15 leading-s-18 font-medium text-neutral-0 after:absolute after:inset-0 after:rounded-s-24 light:text-neutral-90"
                  >
                    {item.question}
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} inert={!open} className={panelClassName}>
                  <div className="overflow-hidden">
                    <p className="pt-s-10 text-s-14 leading-s-18 text-neutrals-50 light:text-neutral-60">{item.answer}</p>
                  </div>
                </div>
              </div>
              <span className="flex size-s-35 shrink-0 items-center justify-center rounded-full text-neutral-0 light:text-neutral-90">
                <SupportIcon
                  name="plus"
                  className={cn(
                    'size-[calc(var(--1px)*19.573)] transition-transform duration-300 motion-reduce:transition-none',
                    open && 'rotate-45',
                  )}
                />
              </span>
            </li>
          );
        }

        return (
          <li key={item.question} className="border-b border-field-border pb-s-4">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.question)}
                className="flex w-full cursor-pointer items-center gap-s-20 px-s-24 pt-s-24 pb-s-20 text-left"
              >
                <span className="flex-1 text-s-16 leading-s-20 font-medium text-neutrals-5 light:text-neutral-90">{item.question}</span>
                <span
                  className={cn(
                    'flex size-s-56 shrink-0 items-center justify-center rounded-full',
                    open ? 'text-neutrals-30' : 'text-neutrals-20 light:text-neutral-60',
                  )}
                >
                  <SupportIcon name={open ? 'minus' : 'plus'} className="size-s-24" />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} inert={!open} className={panelClassName}>
              <div className="overflow-hidden">
                <p className="px-s-24 pb-s-20 text-s-14 leading-s-20 text-neutrals-20 light:text-neutral-60">{item.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
