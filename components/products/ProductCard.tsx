import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, MapPin } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card transition-[border-color,box-shadow,transform] duration-200 focus-within:border-line-strong focus-within:shadow-lift hover:border-line-strong hover:shadow-lift motion-safe:md:hover:-translate-y-0.5">
      <div className="relative aspect-[4/3] overflow-hidden bg-placeholder">
        <Image
          src={product.images[0]}
          alt={`${product.name} – ${product.category} listing photo`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 480px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out motion-safe:md:group-hover:scale-[1.04]"
        />
        {/* Hairline inside the image edge keeps light photos from bleeding into the card. */}
        <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5" />
        <span className="absolute left-3 top-3 rounded-md bg-surface/90 px-2 py-1 text-xs font-medium text-ink shadow-card backdrop-blur-sm">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 min-h-12 break-words text-base font-semibold leading-6 tracking-[-0.015em] text-ink">
          <Link
            href={`/products/${product.id}`}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-offset-[-2px]"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-2 min-h-10 break-words text-sm leading-5 text-ink-2">
          {product.shortDescription}
        </p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xl font-semibold tabular-nums tracking-[-0.02em] text-ink">
            {formatPrice(product.price, product.currency)}
          </p>
          <span
            aria-hidden
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent group-hover:text-on-accent"
          >
            <ArrowUpRight className="size-4 transition-transform motion-safe:group-hover:translate-x-px motion-safe:group-hover:-translate-y-px" />
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3 text-xs text-ink-3">
          {/* Location keeps priority (up to 60% of the row); both truncate rather than overflow. */}
          <span className="inline-flex max-w-[60%] shrink-0 items-center gap-1">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            <span className="truncate">{product.location}</span>
          </span>
          <span className="inline-flex min-w-0 items-center gap-1">
            <span className="truncate">{product.seller.name}</span>
            {product.seller.verified && (
              <BadgeCheck className="size-3.5 shrink-0 text-accent-ink" role="img" aria-label="Verified seller" />
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
