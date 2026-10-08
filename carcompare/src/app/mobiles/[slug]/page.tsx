import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllMobiles,
  getMobileBySlug,
  getMobileVariants,
  getMobileImages,
  getSimilarMobiles,
  formatMobilePriceRange,
} from '@/lib/mobiles';
import { MobileDetailView } from '@/components/MobileDetailView';

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mobile = getMobileBySlug(slug);
  if (!mobile) return { title: 'Smartphone Not Found' };

  return {
    title: `${mobile.brand} ${mobile.modelName} — Specs, Variants, Price & Review`,
    description: `${mobile.brand} ${mobile.modelName} specifications, RAM/storage variants, official Indian price (${formatMobilePriceRange(mobile)}), display, cameras, and benchmark scoring.`,
    openGraph: {
      title: `${mobile.brand} ${mobile.modelName} | Static — but dynamic`,
      description: `${mobile.brand} ${mobile.modelName} full verified specifications and variant pricing.`,
      images: mobile.primaryImage ? [{ url: mobile.primaryImage, alt: `${mobile.brand} ${mobile.modelName}` }] : [],
    },
  };
}

export function generateStaticParams() {
  return getAllMobiles().map((m) => ({ slug: m.slug }));
}

export default async function MobileDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const mobile = getMobileBySlug(slug);
  if (!mobile) notFound();

  const variants = getMobileVariants(mobile.id);
  const images = getMobileImages(mobile.id);
  const similarMobiles = getSimilarMobiles(mobile, 3);

  // Determine upgrade target (higher tier in same brand or flagship alternative)
  let upgradeTarget = getAllMobiles().find(
    (m) =>
      m.brand === mobile.brand &&
      m.pricing.startingPrice > mobile.pricing.startingPrice
  );
  if (!upgradeTarget && mobile.pricing.startingPrice < 100000) {
    upgradeTarget = getAllMobiles().find(
      (m) => m.pricing.startingPrice > mobile.pricing.startingPrice + 15000
    );
  }

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container">
        <MobileDetailView
          mobile={mobile}
          variants={variants}
          images={images}
          similarMobiles={similarMobiles}
          upgradeTargetMobile={upgradeTarget}
        />
      </div>
    </div>
  );
}
