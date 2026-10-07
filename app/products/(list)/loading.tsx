import { productGridClasses } from "@/components/marketplace/ProductGrid";
import { ProductCardSkeleton } from "@/components/products/ProductCardSkeleton";

export default function ProductsLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14" role="status" aria-live="polite">
      <span className="sr-only">Loading products…</span>
      <div aria-hidden className="animate-pulse motion-reduce:animate-none">
        <div className="h-4 w-24 rounded bg-surface-2" />
        <div className="mt-3 h-9 w-56 rounded bg-surface-2" />
        <div className="mt-3 h-6 w-72 max-w-full rounded bg-surface-2" />
        <div className="mt-8 h-[10.5rem] rounded-xl border border-line bg-surface min-[420px]:h-[6.5rem] md:h-[5.25rem]" />
        <div className="mb-5 mt-6 flex min-h-11 items-center">
          <div className="h-5 w-24 rounded bg-surface-2" />
        </div>
      </div>
      <ul aria-hidden className={productGridClasses}>
        {Array.from({ length: 8 }, (_, i) => (
          <li key={i}>
            <ProductCardSkeleton />
          </li>
        ))}
      </ul>
    </div>
  );
}
