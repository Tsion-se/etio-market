import type { Metadata } from "next";
import Link from "next/link";

import { notFound } from "next/navigation";
import { cache } from "react";
import { ChevronLeft } from "lucide-react";
import { TelegramBackButton } from "@/components/telegram/TelegramBackButton";
import { ContactSellerButton } from "@/components/products/ContactSellerButton";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ProductLocation } from "@/components/products/ProductLocation";
import { ProductSpecifications } from "@/components/products/ProductSpecifications";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { SellerCard } from "@/components/products/SellerCard";
import { createWebsiteProductUrl, getPublicAppUrl, siteConfig } from "@/lib/config";
import { getProductById, getProducts, getRelatedProducts } from "@/lib/data";
import { createSellerChatLink } from "@/lib/telegram/deeplink";
import { formatPrice, truncate } from "@/lib/utils";

// Shared by generateMetadata and the page so the lookup runs once per request.
const getProduct = cache(getProductById);

type PageProps = { params: Promise<{ id: string }> };

/** Pre-renders every known product. Unknown ids are still resolved (and 404) on demand. */
export async function generateStaticParams() {
  return (await getProducts()).map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  const description = truncate(product.description, 160);
  const path = `/products/${product.id}`;
  // Relative URLs resolve against metadataBase; without NEXT_PUBLIC_APP_URL there is
  // no correct absolute URL, so canonical and Open Graph url/image are omitted.
  const hasBase = getPublicAppUrl() !== null;

  return {
    title: product.name,
    description,
    alternates: hasBase ? { canonical: path } : undefined,
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: `${product.name} – ${formatPrice(product.price, product.currency)}`,
      description,
      ...(hasBase && {
        url: path,
        images: [{ url: product.images[0], width: 800, height: 600, alt: product.name }],
      }),
    },
    twitter: { card: hasBase ? "summary_large_image" : "summary", title: product.name, description },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  const related = await getRelatedProducts(product, 4);

  // Direct Telegram chat with the seller (null when the seller has no valid username).
  // Built once here so the main buttons, seller card and mobile bar always agree.
  const productUrl = createWebsiteProductUrl(product.id);
  const chatHref = createSellerChatLink(
    product.seller.telegramUsername,
    `Hi, I'm interested in "${product.name}"${productUrl ? ` ${productUrl}` : ""}`,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-4 sm:px-6 sm:pt-8">
      <TelegramBackButton fallbackHref="/products" />
      <Link
        href="/products"
        className="group inline-flex min-h-11 items-center gap-1 rounded-lg pr-2 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
      >
        <ChevronLeft className="size-4 transition-transform motion-safe:group-hover:-translate-x-0.5" aria-hidden />
        Back to products
      </Link>

      <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        {/* The gallery stays in view while the longer information column scrolls on desktop. */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ProductGallery key={product.id} images={product.images} productName={product.name} />
        </div>
        <ProductInfo product={product} chatHref={chatHref} />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        <div className="space-y-10">
          <section aria-labelledby="description-heading">
            <h2 id="description-heading" className="text-lg font-semibold tracking-[-0.02em] text-ink">
              Description
            </h2>
            <p className="mt-4 max-w-prose break-words text-[1.0625rem] leading-7 text-ink-2">{product.description}</p>
          </section>
          <ProductSpecifications specifications={product.specifications} />
        </div>
        <div className="space-y-10">
          <SellerCard seller={product.seller} chatHref={chatHref} />
          <ProductLocation location={product.location} />
        </div>
      </div>

      <div className="mt-16">
        <RelatedProducts products={related} />
      </div>

      {/* Sticky on small screens only; rests at the end of the page so it never covers the footer. */}
      <div className="sticky bottom-0 z-30 -mx-4 mt-10 border-t border-line bg-surface/95 px-4 pb-[calc(0.75rem+var(--safe-bottom))] pt-3 backdrop-blur sm:-mx-6 sm:px-6 md:hidden">
        <div className="flex items-end justify-between gap-4">
          <p className="min-w-0 text-xl font-semibold tabular-nums tracking-[-0.02em] text-ink">
            <span className="sr-only">Price: </span>
            {formatPrice(product.price, product.currency)}
          </p>
        <ContactSellerButton
            sellerName={product.seller.name}
            chatHref={chatHref}
            noticeAbove
            className="min-w-0 flex-1 [&>button]:w-full [&>a]:w-full"
          />
        </div>
      </div>
    </div>
  
  );
}