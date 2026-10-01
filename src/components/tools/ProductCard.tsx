import type { ReactNode } from 'react';
import type { Product } from '@/data/products';
import { productHref } from '@/data/products';
import { cn } from '@/utils/cn';
import Button from './Button';
import RevealCard from './RevealCard';

type ProductCardProps = {
  product: Product;
  media: ReactNode;
  showBadge?: boolean;
  wide?: boolean;
  animated?: boolean;
  order?: number;
  className?: string;
};

export default function ProductCard({
  product,
  media,
  showBadge = false,
  wide = false,
  animated = false,
  order = 0,
  className,
}: ProductCardProps) {
  const [firstLine, ...rest] = product.description.split('\n');
  const cardClassName = cn('relative h-s-630 overflow-hidden max-lg:h-s-550 max-lg:w-full', className);

  const content = (
    <>
      <div
        className={cn(
          'absolute flex flex-col items-start gap-s-24',
          wide
            ? 'top-s-40 left-s-40 w-s-400 max-lg:top-s-20 max-lg:left-s-16 max-lg:w-s-332'
            : 'top-0 left-0 w-s-640 p-s-40 max-lg:w-s-370 max-lg:p-s-24',
        )}
      >
        {showBadge && (
          <span className="flex items-center justify-center rounded-s-8 bg-[#f3f3f3] px-s-20 py-s-12 [text-box:trim-both_cap_alphabetic] text-s-16 leading-s-24 font-medium text-neutrals-90">
            {product.badge}
          </span>
        )}
        <h3 className="font-saira-condensed text-s-60 leading-s-68 font-medium text-neutral-10 light:text-neutral-90">
          {product.series} <span className="font-bold">{product.model}</span>
        </h3>
        <p className="text-s-16 leading-s-24 text-neutral-30 light:text-neutral-70">
          {firstLine}
          {rest.map((line) => (
            <span key={line}>
              <br />
              {line}
            </span>
          ))}
        </p>
      </div>

      <Button
        href={productHref(product.slug)}
        className="absolute bottom-s-40 max-lg:left-s-24 left-s-40"
      >
        Learn More
      </Button>
    </>
  );

  if (animated) {
    return (
      <RevealCard media={media} order={order} className={cardClassName}>
        {content}
      </RevealCard>
    );
  }

  return (
    <article className={cardClassName}>
      {media}
      {content}
    </article>
  );
}
