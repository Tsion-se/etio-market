import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { LogoMark } from "./Logo";

const linkClass =
  "inline-flex min-h-11 items-center rounded-lg text-sm text-ink-2 transition-colors hover:text-ink";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 pb-[calc(2rem+var(--safe-bottom))] pt-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 text-[1.05rem] font-semibold tracking-[-0.03em] text-ink">
              <LogoMark className="size-8" />
              {siteConfig.name}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">
              Discover products from local sellers, with photos, specifications and seller details up front.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">Explore</p>
            <ul className="mt-1 flex flex-col">
              <li>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className={linkClass}>
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-8 border-t border-line pt-6 text-sm text-ink-3">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
