import type { CategorySummary, Product } from "@/types/product";
import { products } from "./products";
import { applyProductQuery, type ProductQuery } from "./query";

/**
 * Data access layer. Components only call these functions, so the mock
 * implementation can later be swapped for a real API without UI changes.
 */
export async function getProducts(query: Partial<ProductQuery> = {}): Promise<Product[]> {
  return applyProductQuery([...products], query);
}

export async function getProductById(id: string): Promise<Product | null> {
  return products.find((product) => product.id === id) ?? null;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  return (await getProducts({ sort: "newest" })).slice(0, limit);
}

/** Categories are derived from the products, so there is no second list to maintain. */
export async function getCategories(): Promise<CategorySummary[]> {
  const counts = new Map<string, number>();
  for (const product of products) {
    counts.set(product.category, (counts.get(product.category) ?? 0) + 1);
  }
  return [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Products to show under a detail page: same category first (newest first),
 * topped up with products from other categories when there are too few.
 */
export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  const others = (await getProducts({ sort: "newest" })).filter((p) => p.id !== product.id);
  const sameCategory = others.filter((p) => p.category === product.category);
  const rest = others.filter((p) => p.category !== product.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
