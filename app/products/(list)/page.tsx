import type { Metadata } from "next";
import { X } from "lucide-react";
import { CategoryFilter } from "@/components/marketplace/CategoryFilter";
import { EmptyState } from "@/components/marketplace/EmptyState";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { SearchBar } from "@/components/marketplace/SearchBar";
import { SortSelect } from "@/components/marketplace/SortSelect";
import { ButtonLink } from "@/components/ui/Button";
import { getCategories, getProducts } from "@/lib/data";
import { hasActiveFilters, parseProductQuery, type RawSearchParams } from "@/lib/data/query";
import { productCountLabel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Explore products",
  description: "Discover products from local sellers on EthioMarket.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const query = parseProductQuery(await searchParams);
  const [categories, products] = await Promise.all([getCategories(), getProducts(query)]);

  const filtered = hasActiveFilters(query);
  // Match the URL value to a real category (case-insensitive) so the select shows it.
  const selectedCategory =
    categories.find((c) => c.name.toLowerCase() === query.category.toLowerCase())?.name ?? "";

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-ink">Marketplace</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
          Explore products
        </h1>
        <p className="mt-2 text-lg text-ink-2">Discover products from local sellers.</p>
      </header>

      {/* One toolbar: search grows, the two selects keep a fixed width on desktop. */}
      <div className="mt-8 grid gap-3 rounded-xl border border-line bg-surface p-3 shadow-card sm:p-4 md:grid-cols-[minmax(0,1fr)_13rem_13rem]">
        <SearchBar value={query.q} />
        <div className="grid gap-3 min-[420px]:grid-cols-2 md:contents">
          <CategoryFilter value={selectedCategory} categories={categories} />
          <SortSelect value={query.sort} />
        </div>
      </div>

      <div className="mb-5 mt-6 flex min-h-11 items-center justify-between gap-3">
        <p aria-live="polite" className="text-sm font-medium tabular-nums text-ink-2">
          {productCountLabel(products.length, filtered)}
        </p>
        {filtered && (
          <ButtonLink href="/products" variant="ghost">
            <X className="size-4" aria-hidden />
            Clear filters
          </ButtonLink>
        )}
      </div>

      {products.length > 0 ? (
        <section aria-labelledby="results-heading">
          <h2 id="results-heading" className="sr-only">
            Product results
          </h2>
          <ProductGrid products={products} />
        </section>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
