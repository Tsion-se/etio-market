"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { TelegramOpenAppLink } from "@/components/telegram/TelegramOpenAppLink";
import { useTelegram } from "@/lib/telegram/TelegramProvider";
import { getTelegramGreeting } from "@/lib/telegram/utils";
import { productsHref } from "@/lib/utils";
import type { CategorySummary } from "@/types/product";

export function MobileNav({ categories }: { categories: CategorySummary[] }) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const { isTelegram, user } = useTelegram();
  const close = () => setOpen(false);
  const linkClass =
    "flex min-h-11 items-center rounded-lg px-3 text-base text-ink transition-colors hover:bg-surface-2";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    // Tapping anywhere outside the button and menu closes it, so it can never stay open by accident.
    const onPointerDown = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={container} className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-surface px-4 pb-3 pt-2 shadow-pop"
        >
          {isTelegram && (
            <p className="px-3 pb-2 text-sm text-ink-2">{getTelegramGreeting(user)}</p>
          )}
          <ul className="mx-auto max-w-6xl">
            <li>
              <Link href="/products" onClick={close} className={`${linkClass} font-medium`}>
                All products
              </Link>
            </li>
          </ul>
          <div className="mt-1" onClick={close}>
            <TelegramOpenAppLink variant="menu" />
          </div>
          <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-wider text-ink-3">Categories</p>
          <ul className="mx-auto mt-1 grid max-w-6xl grid-cols-2 gap-x-2">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={productsHref({ category: category.name })}
                  onClick={close}
                  className={`${linkClass.replace("text-base", "text-sm")} justify-between gap-2`}
                >
                  {category.name}
                  <span className="text-sm tabular-nums text-ink-3">{category.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
