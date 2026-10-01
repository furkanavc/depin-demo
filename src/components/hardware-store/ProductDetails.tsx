import Button from '@/components/tools/Button';
import Reveal from '@/components/tools/Reveal';
import type { Product } from '@/data/products';
import { productName } from '@/data/products';
import { cn } from '@/utils/cn';
import ProductGallery from './ProductGallery';

const cardBorder = 'border border-neutral-70 light:border-neutrals-10';

export default function ProductDetails({ product }: { product: Product }) {
  const name = productName(product);
  const { headline, description, highlights, specs, price, gallery } = product.detail;

  return (
    <section className="w-full bg-background">
      <div className="mx-auto flex w-full max-w-s-1440 flex-col gap-s-60 px-s-60 pt-s-121 pb-s-60 max-lg:gap-s-40 max-lg:px-s-16 max-lg:pt-s-113 max-lg:pb-s-32">
        <Reveal amount={0.15}>
          <ProductGallery images={gallery} name={name} />
        </Reveal>

        <div className="flex w-full items-start gap-s-40 max-lg:flex-col">
          <Reveal className="flex w-s-640 flex-none flex-col gap-s-16 text-foreground max-lg:w-full">
            <h1 className="font-saira-condensed text-s-48 leading-s-56 font-semibold">{name}</h1>
            <p className="text-s-16 leading-s-24 font-semibold">{headline}</p>
            <p className="text-s-14 leading-s-20 text-neutral-50 light:text-neutral-60 max-lg:text-s-16">{description}</p>
            <ul className="grid grid-cols-2 gap-s-12 text-s-14 leading-normal text-neutrals-30 light:text-neutrals-50 max-lg:grid-cols-1">
              {highlights.map((highlight) => (
                <li key={highlight} className="ml-s-21 list-disc">
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} amount={0.15} className={cn(cardBorder, 'flex min-w-0 flex-1 flex-col gap-s-24 rounded-s-12 p-s-24 max-lg:w-full')}>
            <h2 className="text-s-25 leading-normal font-semibold text-foreground">{name} Specs</h2>

            <dl className="flex flex-col gap-s-15 text-s-16 leading-s-24">
              {specs.map(({ label, value }, index) => (
                <div
                  key={label}
                  className={cn(
                    'flex items-start justify-between gap-s-16 max-lg:flex-col',
                    index > 0 && 'border-t border-neutral-70 pt-s-15 light:border-neutrals-10',
                  )}
                >
                  <dt className="[text-box:trim-both_cap_alphabetic] text-neutral-50 light:text-neutral-60">{label}</dt>
                  <dd className="[text-box:trim-both_cap_alphabetic] text-right font-medium text-foreground max-lg:text-left">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex w-full items-center gap-s-24 max-lg:flex-col max-lg:items-start">
              <p className="text-s-46 leading-normal font-semibold text-foreground max-lg:text-s-36">{price}</p>
              <div className="flex flex-1 gap-s-24 max-lg:w-full max-lg:flex-col max-lg:gap-s-16">
                <Button
                  variant="none"
                  className="border border-neutrals-10 bg-neutrals-20 text-ink hover:bg-neutrals-10 lg:flex-1"
                >
                  Add to Cart
                </Button>
                <Button className="lg:flex-1">Buy now</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
