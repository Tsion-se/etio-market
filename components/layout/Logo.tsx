import Link from "next/link";
import { siteConfig } from "@/lib/config";

/** Brand mark: a shopping bag with a location pin, for local sellers. */
export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-[0.6rem] bg-accent text-on-accent shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_1px_2px_rgb(0_0_0/0.2)] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-[62%]" fill="none">
        {/* Handle */}
        <path d="M7.9 9.4C7.9 4.2 16.1 4.2 16.1 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* Bag */}
        <path d="M5.4 8.4h13.2l1.7 10.4a2.3 2.3 0 0 1-2.3 2.7H6a2.3 2.3 0 0 1-2.3-2.7z" fill="currentColor" />
        {/* Location pin cut into the bag: local sellers, found near you */}
        <path className="fill-accent" d="M12 19c-2.3-1.9-3.4-3.4-3.4-5a3.4 3.4 0 0 1 6.8 0c0 1.6-1.1 3.1-3.4 5z" />
        <circle cx="12" cy="14" r="1.25" fill="currentColor" />
      </svg>
    </span>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5 rounded-lg py-1 text-[1.15rem] font-semibold tracking-[-0.03em] text-ink"
    >
      <LogoMark />
      {siteConfig.name}
    </Link>
  );
}
