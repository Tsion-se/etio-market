import { SearchX } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-line-strong bg-surface px-6 py-16 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
        <SearchX className="size-6" aria-hidden />
      </span>
      <h2 className="mt-5 text-lg font-semibold tracking-tight text-ink">No products found</h2>
      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-2">
        Try changing your search or removing some filters.
      </p>
      <ButtonLink href="/products" variant="secondary" className="mt-6">
        Clear filters
      </ButtonLink>
    </div>
  );
}
