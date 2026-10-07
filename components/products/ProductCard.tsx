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
        <span className="absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate rounded-md bg-surface/90 px-1.5 py-0.5 text-[0.6875rem] font-medium text-ink shadow-card backdrop-blur-sm min-[480px]:left-3 min-[480px]:top-3 min-[480px]:max-w-none min-[480px]:px-2 min-[480px]:py-1 min-[480px]:text-xs">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3 min-[480px]:p-4">
        <h3 className="line-clamp-2 min-h-10 break-words text-sm font-semibold leading-5 tracking-[-0.015em] text-ink min-[480px]:min-h-12 min-[480px]:text-base min-[480px]:leading-6">
          <Link
            href={`/products/${product.id}`}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-offset-[-2px]"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-2 min-h-8 break-words text-xs leading-4 text-ink-2 min-[480px]:min-h-10 min-[480px]:text-sm min-[480px]:leading-5">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center justify-between gap-3 min-[480px]:mt-3">
          <p className="min-w-0 text-base font-semibold tabular-nums tracking-[-0.02em] text-ink min-[480px]:text-xl">
            {formatPrice(product.price, product.currency)}
          </p>
          <span
            aria-hidden
            className="hidden size-8 shrink-0 items-center justify-center rounded-full bg-accent-soft min-[480px]:flex text-accent-ink transition-colors group-hover:bg-accent group-hover:text-on-accent"
          >
            <ArrowUpRight className="size-4 transition-transform motion-safe:group-hover:translate-x-px motion-safe:group-hover:-translate-y-px" />
          </span>
        </div>
        <div className="mt-3 flex flex-col items-start gap-1 border-t border-line pt-2.5 text-xs text-ink-3 min-[480px]:mt-4 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-3 min-[480px]:pt-3">
          {/* Location keeps priority (up to 60% of the row); both truncate rather than overflow. */}
          <span className="inline-flex max-w-full items-center gap-1 min-[480px]:max-w-[60%] min-[480px]:shrink-0">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            <span className="truncate">{product.location}</span>
          </span>
          <span className="inline-flex min-w-0 max-w-full items-center gap-1">
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
