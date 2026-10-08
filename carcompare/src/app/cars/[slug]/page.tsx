import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getAllCars, getCarBySlug, getSimilarCars, formatPriceRange } from '@/lib/cars';
import { getModelVariantGroup } from '@/lib/variants';
import { getModelImages } from '@/lib/car-images';
import { ModelVariantView } from '@/components/ModelVariantView';

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return { title: 'Car Not Found' };

  const imageEntry = getModelImages(slug);
  const primaryImageUrl = imageEntry?.primaryImage?.url || car.primaryImage;

  return {
    title: `${car.displayName} — Specs, Variants, Price & Review`,
    description: `${car.displayName} specifications, variant trims, price (${formatPriceRange(car)}), safety rating, features, pros and cons. Compare variants and specs.`,
    openGraph: {
      title: `${car.displayName} | Static — but dynamic`,
      description: car.description,
      images: [{ url: primaryImageUrl, alt: car.displayName }],
    },
  };
}

export function generateStaticParams() {
  return getAllCars().map((car) => ({ slug: car.slug }));
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  const similarCars = getSimilarCars(car, 3);
  const modelGroup = getModelVariantGroup(slug);
  const imageEntry = getModelImages(slug);

  // Fallback if model group not registered
  const fallbackGroup = modelGroup || {
    modelId: car.slug,
    modelName: car.model,
    brand: car.brand,
    totalVariants: 1,
    activeVariants: 1,
    priceRangeLakh: {
      min: car.pricing.minPriceLakh,
      max: car.pricing.maxPriceLakh,
    },
    trimLadder: ['Standard'],
    variants: [],
  };

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      {/* Breadcrumb */}
      <div
        style={{
          background: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          padding: '0.75rem 0',
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.82rem',
                color: 'var(--color-text-tertiary)',
                listStyle: 'none',
                flexWrap: 'wrap',
              }}
            >
              <li>
                <Link href="/" style={{ color: 'var(--color-text-tertiary)', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li><ChevronRight size={12} /></li>
              <li>
                <Link href="/cars" style={{ color: 'var(--color-text-tertiary)', textDecoration: 'none' }}>
                  Cars
                </Link>
              </li>
              <li><ChevronRight size={12} /></li>
              <li style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                {car.displayName}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <ModelVariantView
        car={car}
        modelGroup={fallbackGroup}
        similarCars={similarCars}
        imageEntry={imageEntry}
      />
    </div>
  );
}
