import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import type { Product } from "@/types/product";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="related-heading">
      <SectionHeading id="related-heading" eyebrow="Keep browsing" title="You may also like" />
      <div className="mt-8">
        <ProductGrid products={products} priorityCount={0} />
      </div>
    </section>
  );
}
