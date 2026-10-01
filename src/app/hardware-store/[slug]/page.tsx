import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetails from '@/components/hardware-store/ProductDetails';
import StoreNetworkSection from '@/components/hardware-store/StoreNetworkSection';
import ProductShowcase from '@/components/tools/ProductShowcase';
import { getProduct, productName, products } from '@/data/products';

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/hardware-store/[slug]'>): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};

  return {
    title: productName(product),
    description: product.description.replace('\n', ' '),
  };
}

export default async function ProductDetailPage({ params }: PageProps<'/hardware-store/[slug]'>) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  return (
    <>
      <ProductDetails product={product} />
      <ProductShowcase animated />
      <StoreNetworkSection />
    </>
  );
}
