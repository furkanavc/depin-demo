'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/utils/cn';
import Button from '@/components/tools/Button';

const inputClasses =
  'h-s-48 w-full min-w-0 flex-1 rounded-s-8 border border-field-border bg-transparent px-s-16 py-s-12 text-s-14 leading-s-20 font-medium text-foreground outline-none placeholder:text-neutrals-20 focus:border-muted';

export default function NewsletterForm({ className }: { className?: string }) {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!agreed) return;

    setSubmitted(true);
    event.currentTarget.reset();
    setAgreed(false);
  };

  return (
    <form onSubmit={onSubmit} className={cn('flex flex-col gap-s-16', className)}>
      <div className="flex gap-s-12">
        <input name="name" type="text" required autoComplete="name" placeholder="Name Surname" aria-label="Name Surname" className={inputClasses} />
        <input name="email" type="email" required autoComplete="email" placeholder="E-mail address" aria-label="E-mail address" className={inputClasses} />
      </div>
      <div className="flex items-center gap-s-16">
        <label className="flex flex-1 cursor-pointer items-center gap-s-16">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            className="peer sr-only"
            required
          />
          <span
            aria-hidden
            className="relative flex size-s-24 shrink-0 items-center justify-center rounded-s-8 border-[calc(var(--1px)*1.2)] border-checkbox-border transition peer-checked:border-foreground peer-checked:bg-foreground peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-muted"
          >
            <span className={cn('h-s-10 w-s-6 -translate-y-[calc(var(--1px)*1)] rotate-45 border-r-2 border-b-2 border-background', !agreed && 'hidden')} />
          </span>
          <span className="flex-1 [text-box:trim-both_cap_alphabetic] text-s-12 leading-s-16 text-muted">
            {submitted ? 'Thanks! You are subscribed.' : 'I agree to the DePIN Space Privacy Policy.'}
          </span>
        </label>
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
}
