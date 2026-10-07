"use client";

import { useEffect, useRef, type FormEvent } from "react";
import { Search } from "lucide-react";
import { useUrlQuery } from "./useUrlQuery";

const DEBOUNCE_MS = 300;

export function SearchBar({ value, className }: { value: string; className?: string }) {
  const { update } = useUrlQuery();
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Keep the input in sync with the URL after back/forward or "Clear filters",
  // but never overwrite text while the user is typing.
  useEffect(() => {
    const input = inputRef.current;
    if (input && document.activeElement !== input && input.value !== value) {
      input.value = value;
    }
  }, [value]);

  function commit(next: string, replace: boolean) {
    clearTimeout(timer.current);
    const trimmed = next.trim();
    if (trimmed === value) return;
    update({ q: trimmed || null }, { replace });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    commit(inputRef.current?.value ?? "", false);
  }

  return (
    <form role="search" action="/products" onSubmit={handleSubmit} className={className}>
      <label htmlFor="product-search" className="mb-1.5 block text-xs font-medium text-ink-2">
        Search products
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-3"
          aria-hidden
        />
        <input
          ref={inputRef}
          id="product-search"
          name="q"
          type="search"
          defaultValue={value}
          placeholder="Search phones, laptops, furniture…"
          autoComplete="off"
          enterKeyHint="search"
          onChange={(event) => {
            const next = event.target.value;
            clearTimeout(timer.current);
            timer.current = setTimeout(() => commit(next, true), DEBOUNCE_MS);
          }}
          className="min-h-11 w-full rounded-lg border border-line-strong bg-surface py-2 pl-9 pr-3 text-sm text-ink transition-colors placeholder:text-ink-3 hover:border-ink-3"
        />
      </div>
    </form>
  );
}
