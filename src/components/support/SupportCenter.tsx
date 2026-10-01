'use client';

import { useMemo, useState, type FormEvent } from 'react';
import {
  quickAnswers,
  supportCategories,
  supportFaqs,
  type SupportCategoryId,
} from '@/data/support';
import Reveal from '@/components/tools/Reveal';
import CategoryPicker from './CategoryPicker';
import FaqAccordion from './FaqAccordion';
import {
  pillInputClassName,
  quickCardClassName,
  quickTextClassName,
  quickTitleClassName,
} from './fieldStyles';
import TicketForm from './TicketForm';

const searchPlaceholder =
  "Search articles: 'QR Code pairing', 'DEGEN Boost', 'Fleet Setup'...";

const headingClassName =
  'font-saira-condensed text-s-40 leading-s-48 font-semibold text-foreground max-lg:text-s-32 max-lg:leading-s-36';

export default function SupportCenter() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SupportCategoryId | null>(null);

  const visibleFaqs = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return supportFaqs.filter(
      (faq) =>
        (!category || faq.category === category) &&
        (!needle ||
          faq.question.toLowerCase().includes(needle) ||
          faq.answer.toLowerCase().includes(needle)),
    );
  }, [query, category]);

  const jumpToFaq = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-background">
      <div className="mx-auto flex w-full max-w-s-1440 flex-col gap-s-24 p-s-60 max-lg:p-s-20">
        <div className="flex flex-col gap-s-24">
          <Reveal className="flex flex-col gap-s-24 max-lg:pt-s-24">
            <div className="flex flex-col gap-s-16">
              <h2 className={headingClassName}>Knowledge Base &amp; Support</h2>
              <p className="text-s-14 leading-s-18 text-neutrals-20 light:text-neutral-60">
                Immutable protocol allocations safeguarding long-term network
                growth.
              </p>
            </div>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={searchPlaceholder}
              aria-label="Search articles"
              className="h-s-48 w-full rounded-s-8 border border-field-border bg-transparent px-s-16 py-s-12 text-s-14 leading-s-20 font-medium text-foreground outline-none placeholder:text-neutrals-20 focus:border-muted light:placeholder:text-neutral-60"
            />
          </Reveal>

          <Reveal delay={0.08} amount={0.15}>
            <CategoryPicker
              categories={supportCategories}
              selected={category}
              onSelect={setCategory}
            />
          </Reveal>

          <div
            id="faq"
            className="flex scroll-mt-[calc(var(--1px)*100)] flex-col gap-s-24 py-s-40"
          >
            <Reveal>
              <h2 className={headingClassName}>Frequently Asked Questions</h2>
            </Reveal>
            <Reveal delay={0.08} amount={0.1}>
              {visibleFaqs.length > 0 ? (
                <FaqAccordion key={`${category}-${query}`} items={visibleFaqs} />
              ) : (
                <p className="px-s-24 text-s-14 leading-s-20 text-neutrals-20 light:text-neutral-60">
                  No articles match your search yet.
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
