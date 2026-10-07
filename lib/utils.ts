/** Joins truthy class names into a single string. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

export function productCountLabel(count: number, filtered: boolean): string {
  if (count === 0) return "No products found";
  const noun = count === 1 ? "product" : "products";
  return filtered ? `${count} ${noun} found` : `${count} ${noun}`;
}

/** Builds a /products URL, omitting empty params. */
export function productsHref(params: { q?: string; category?: string; sort?: string } = {}): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) if (value) search.set(key, value);
  const qs = search.toString();
  return qs ? `/products?${qs}` : "/products";
}

/** e.g. "3 Oct 2026" */
export function formatFullDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

/** Shortens text to at most `max` characters on a word boundary. */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
}
