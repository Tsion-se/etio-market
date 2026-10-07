import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

/** Native select (best mobile UX) with a visible label and consistent styling. */
export function Select({ label, id, className, children, ...props }: SelectProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-ink-2">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className="min-h-11 w-full cursor-pointer appearance-none truncate rounded-lg border border-line-strong bg-surface py-2 pl-3 pr-9 text-sm text-ink transition-colors hover:border-ink-3"
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink-3"
          aria-hidden
        />
      </div>
    </div>
  );
}
