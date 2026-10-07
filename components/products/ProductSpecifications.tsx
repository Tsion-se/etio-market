import type { ProductSpecification } from "@/types/product";

/** Renders only the specifications a product actually has. */
export function ProductSpecifications({ specifications }: { specifications: ProductSpecification[] }) {
  if (specifications.length === 0) return null;

  return (
    <section aria-labelledby="specifications-heading">
      <h2 id="specifications-heading" className="text-lg font-semibold tracking-[-0.02em] text-ink">
        Specifications
      </h2>
      <dl className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface shadow-card">
        {specifications.map((spec) => (
          <div key={spec.label} className="flex justify-between gap-4 px-4 py-3.5 text-sm sm:px-5">
            <dt className="text-ink-2">{spec.label}</dt>
            <dd className="min-w-0 break-words text-right font-medium text-ink">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
