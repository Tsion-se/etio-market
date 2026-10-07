"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { productsHref } from "@/lib/utils";
import type { CategorySummary } from "@/types/product";

export function CategoriesMenu({ categories }: { categories: CategorySummary[] }) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const itemClass =
    "flex min-h-11 items-center justify-between gap-6 rounded-lg px-3 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink";

  return (
    <div ref={container} className="relative">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="categories-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink aria-expanded:bg-surface-2 aria-expanded:text-ink"
      >
        Categories
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <ul
          id="categories-menu"
          className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-line bg-surface p-1.5 shadow-pop"
        >
          <li>
            <Link href="/products" onClick={() => setOpen(false)} className={itemClass}>
              All categories
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={productsHref({ category: category.name })}
                onClick={() => setOpen(false)}
                className={itemClass}
              >
                {category.name}
                <span className="text-xs tabular-nums text-ink-3">{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
