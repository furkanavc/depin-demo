import Image from 'next/image';
import { cn } from '@/utils/cn';

const tones = {
  'blue-60': '/images/products/glow-blue-60.svg',
  'blue-80': '/images/products/glow-blue-80.svg',
  'white-80': '/images/products/glow-white-80.svg',
} as const;

type GlowProps = {
  tone: keyof typeof tones;
  className?: string;
};

export default function Glow({ tone, className }: GlowProps) {
  return (
    <span aria-hidden className={cn('pointer-events-none absolute size-s-998', className)}>
      <span className="absolute inset-[-40.08%]">
        <Image src={tones[tone]} alt="" fill />
      </span>
    </span>
  );
}
