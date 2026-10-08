/**
 * Single source of truth for Website <-> Telegram product links. Pure functions,
 * safe on the server and in the browser.
 *
 * Telegram Mini App links (https://core.telegram.org/api/links#mini-app-links):
 *   main Mini App:    https://t.me/<bot>?startapp=<param>
 *   direct-link app:  https://t.me/<bot>/<short_name>?startapp=<param>
 * The Mini App receives <param> as `start_param`. We use the product id as-is.
 */
import { createWebsiteProductUrl } from "@/lib/config";
import { isValidProductId } from "@/lib/product-id";
import { getTelegramConfig } from "./config";

export function createTelegramProductLink(productId: string): string | null {
  const config = getTelegramConfig();
  if (!config || !isValidProductId(productId)) return null;
  const path = config.miniAppShortName ? `${config.botUsername}/${config.miniAppShortName}` : config.botUsername;
  return `https://t.me/${path}?startapp=${productId}`;
}

/**
 * Opens the EthioMarket Mini App itself (no product): `t.me/<bot>?startapp` for the main Mini App,
 * `t.me/<bot>/<short_name>` for a direct-link app. Null when Telegram is not configured.
 */
export function createTelegramMiniAppLink(): string | null {
  const config = getTelegramConfig();
  if (!config) return null;
  return config.miniAppShortName
    ? `https://t.me/${config.botUsername}/${config.miniAppShortName}`
    : `https://t.me/${config.botUsername}?startapp`;
}

const SELLER_USERNAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]{4,31}$/; // Telegram usernames: 5-32 chars

/**
 * Opens a chat with a seller: `https://t.me/<username>?text=<encoded message>`.
 * Null when the username is missing or invalid (a username is never guessed).
 */
export function createSellerChatLink(
  username: string | null | undefined,
  message?: string,
): string | null {
  const name = username?.trim().replace(/^@/, "");
  if (!name || !SELLER_USERNAME_PATTERN.test(name)) return null;
  const base = `https://t.me/${name}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Telegram's native share dialog (works in the browser and via openTelegramLink in a Mini App). */
export function createTelegramShareLink(url: string, text?: string): string {
  const params = new URLSearchParams({ url });
  if (text) params.set("text", text);
  return `https://t.me/share/url?${params.toString().replace(/\+/g, "%20")}`;
}

/** Shares the Telegram deep link when configured, otherwise the plain website URL. */
export function createProductShareLink(productId: string, text?: string): string | null {
  const target = createTelegramProductLink(productId) ?? createWebsiteProductUrl(productId);
  return target ? createTelegramShareLink(target, text) : null;
}

/** The start parameter is untrusted input: accept it only if it looks like a product id. */
export function extractProductId(startParam: string | null | undefined): string | null {
  return isValidProductId(startParam) ? startParam : null;
}

/**
 * Where a Telegram launch should land, or null to stay put.
 *  - valid product id  -> /products/<id> (the route itself checks the id against the data layer)
 *  - no/invalid param  -> /products, but only when launched on the home page
 */
export function resolveLaunchDestination(startParam: string | null | undefined, pathname: string): string | null {
  const productId = extractProductId(startParam);
  if (productId) return `/products/${productId}`;
  return pathname === "/" ? "/products" : null;
}
