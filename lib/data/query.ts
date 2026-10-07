import type { Product } from "@/types/product";

export const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]["value"];

export const DEFAULT_SORT: SortOption = "newest";

export interface ProductQuery {
  q: string;
  category: string;
  sort: SortOption;
}

export type RawSearchParams = Record<string, string | string[] | undefined>;

function firstValue(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

/** Turns raw URL params into a validated query. Unknown sort values fall back to the default. */
export function parseProductQuery(params: RawSearchParams): ProductQuery {
  const sort = SORT_OPTIONS.find((option) => option.value === firstValue(params.sort))?.value;
  return {
    q: firstValue(params.q).trim().slice(0, 100),
    category: firstValue(params.category).trim(),
    sort: sort ?? DEFAULT_SORT,
  };
}

export function hasActiveFilters(query: ProductQuery): boolean {
  return query.q !== "" || query.category !== "" || query.sort !== DEFAULT_SORT;
}

/** Single place where search, category filtering and sorting are applied. */
export function applyProductQuery(products: Product[], query: Partial<ProductQuery> = {}): Product[] {
  const terms = (query.q ?? "").toLowerCase().split(/\s+/).filter(Boolean);
  const category = (query.category ?? "").toLowerCase();

  const matches = products.filter((product) => {
    if (category && product.category.toLowerCase() !== category) return false;
    const searchable = `${product.name} ${product.shortDescription} ${product.category}`.toLowerCase();
    return terms.every((term) => searchable.includes(term));
  });

  const sort = query.sort ?? DEFAULT_SORT;
  return matches.sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  });
}
