"use client";

import { usePathname, useRouter } from "next/navigation";

/**
 * Updates individual URL params while keeping all the others.
 * The URL is the source of truth for browsing state.
 */
export function useUrlQuery() {
  const router = useRouter();
  const pathname = usePathname();

  function update(patch: Record<string, string | null>, options: { replace?: boolean } = {}) {
    // Read the live URL so a delayed (debounced) update never overwrites newer params.
    const next = new URLSearchParams(window.location.search);
    for (const [key, value] of Object.entries(patch)) {
      if (value) next.set(key, value);
      else next.delete(key);
    }
    const qs = next.toString();
    const href = qs ? `${pathname}?${qs}` : pathname;
    if (options.replace) router.replace(href, { scroll: false });
    else router.push(href, { scroll: false });
  }

  return { update };
}
