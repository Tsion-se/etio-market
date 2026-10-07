"use client";

import { useOptimistic, useTransition } from "react";
import { Select } from "@/components/ui/Select";
import type { CategorySummary } from "@/types/product";
import { useUrlQuery } from "./useUrlQuery";

export function CategoryFilter({
  value,
  categories,
  className,
}: {
  value: string;
  categories: CategorySummary[];
  className?: string;
}) {
  const { update } = useUrlQuery();
  const [selected, setSelected] = useOptimistic(value);
  const [, startTransition] = useTransition();

  return (
    <Select
      id="category-filter"
      label="Category"
      className={className}
      value={selected}
      onChange={(event) => {
        const next = event.target.value;
        startTransition(() => {
          setSelected(next);
          update({ category: next || null });
        });
      }}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category.name} value={category.name}>
          {category.name} ({category.count})
        </option>
      ))}
    </Select>
  );
}
