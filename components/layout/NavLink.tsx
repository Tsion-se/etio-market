"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** Header link that marks the current section for both sighted and screen-reader users. */
export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors",
        active ? "text-ink" : "text-ink-2 hover:bg-surface-2 hover:text-ink",
      )}
    >
      <span className={cn("border-b-2 py-0.5", active ? "border-accent" : "border-transparent")}>{children}</span>
    </Link>
  );
}
