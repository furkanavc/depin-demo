'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/tools/Button';
import { cn } from '@/utils/cn';
import { pillInputClassName, quickCardClassName, quickTextClassName, quickTitleClassName } from './fieldStyles';

export default function TicketForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className={cn(quickCardClassName, 'border border-neutral-100 light:border-neutrals-10', className)}>
      <div className="flex flex-col gap-s-16">
        <h2 className={quickTitleClassName}>Need Technical Support?</h2>
        <p className={quickTextClassName} aria-live="polite">
          {submitted ? 'Thanks! Your ticket has been submitted.' : 'Submit a ticket to our connectivity team.'}
        </p>
      </div>
      <label className="flex flex-col gap-s-16">
        <span className={quickTextClassName}>Your Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="name@domain.com" className={pillInputClassName} />
      </label>
      <label className="flex flex-col gap-s-16">
        <span className={quickTextClassName}>Issue Summary</span>
        <input name="summary" type="text" required placeholder="Device activation issue..." className={pillInputClassName} />
      </label>
      <Button type="submit" variant="none" className="w-full rounded-full! bg-neutral-0 px-s-24! py-s-16! text-s-15! leading-normal! text-neutral-90 hover:bg-neutral-10 light:bg-ink light:text-neutral-0 light:hover:bg-neutral-80">
        Submit Ticket
      </Button>
    </form>
  );
}
