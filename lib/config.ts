import { isValidProductId } from "@/lib/product-id";

export const siteConfig = {
  name: "EthioMarket",
  description:
    "EthioMarket is a modern marketplace to discover products from trusted sellers.",
} as const;

/**
 * The configured public website URL (no trailing slash), or null when it is missing
 * or invalid. Unlike `siteConfig.url` this has no localhost fallback, so links meant
 * for other devices (Telegram -> website) are never generated from a dev default.
 */
export function getPublicAppUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return `${url.origin}${url.pathname.replace(/\/+$/, "")}`;
  } catch {
    return null;
  }
}

/** Canonical product URL, e.g. https://example.com/products/oak-desk-lamp. No tracking params. */
export function createWebsiteProductUrl(productId: string): string | null {
  const base = getPublicAppUrl();
  if (!base || !isValidProductId(productId)) return null;
  return `${base}/products/${productId}`;
}
