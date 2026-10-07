"use client";

import { useOptimistic, useTransition } from "react";
import { Select } from "@/components/ui/Select";
import { DEFAULT_SORT, SORT_OPTIONS, type SortOption } from "@/lib/data/query";
import { useUrlQuery } from "./useUrlQuery";

export function SortSelect({ value, className }: { value: SortOption; className?: string }) {
  const { update } = useUrlQuery();
  const [selected, setSelected] = useOptimistic<string>(value);
  const [, startTransition] = useTransition();

  return (
    <Select
      id="sort-select"
      label="Sort by"
      className={className}
      value={selected}
      onChange={(event) => {
        const next = event.target.value;
        startTransition(() => {
          setSelected(next);
          update({ sort: next === DEFAULT_SORT ? null : next });
        });
      }}
    >
      {SORT_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}
