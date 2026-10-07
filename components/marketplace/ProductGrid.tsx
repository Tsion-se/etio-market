import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

/** Shared by the products page, home page and loading skeleton so columns always match. */
export const productGridClasses =
  "grid grid-cols-2 gap-3 min-[480px]:gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6";

export function ProductGrid({
  products,
  priorityCount = 4,
}: {
  products: Product[];
  /** How many of the first cards load their image eagerly. Use 0 below the fold. */
  priorityCount?: number;
}) {
  return (
    <ul className={productGridClasses}>
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductCard product={product} priority={index < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
