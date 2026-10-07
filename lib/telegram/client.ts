/**
 * The only module that touches `window.Telegram`. Every function is safe to import
 * on the server: nothing runs at import time and each function guards `window`.
 */
import type { TelegramTheme, TelegramUser, TelegramWebApp } from "./types";

const SDK_URL = "https://telegram.org/js/telegram-web-app.js";

export function getWebApp(): TelegramWebApp | null {
  if (typeof window === "undefined") return null;
  return window.Telegram?.WebApp ?? null;
}

/**
 * The SDK also defines `window.Telegram.WebApp` in ordinary browsers, with
 * platform "unknown" and empty init data, so its mere presence proves nothing.
 */
export function isTelegramWebApp(webApp: TelegramWebApp | null = getWebApp()): boolean {
  return webApp !== null && (webApp.initData !== "" || webApp.platform !== "unknown");
}

/**
 * Cheap pre-check so ordinary visitors never download the Telegram script.
 * Telegram launches with `#tgWebApp...` in the URL, injects `TelegramWebviewProxy`
 * on mobile, and the SDK remembers its launch params in sessionStorage so a reload
 * (which drops the hash) is still recognised.
 */
function mayBeInsideTelegram(): boolean {
  try {
    if (window.location.hash.includes("tgWebApp")) return true;
    if (window.sessionStorage.getItem("__telegram__initParams")) return true;
  } catch {
    // Storage can be blocked; fall through to the other signals.
  }
  return "TelegramWebviewProxy" in window || /Telegram/i.test(window.navigator.userAgent);
}

let sdkPromise: Promise<TelegramWebApp | null> | null = null;

/** Loads the official SDK on demand. Resolves to null outside Telegram or if loading fails. */
export function loadTelegramSdk(): Promise<TelegramWebApp | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  const existing = getWebApp();
  if (existing) return Promise.resolve(existing);
  if (!mayBeInsideTelegram()) return Promise.resolve(null);

  sdkPromise ??= new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = SDK_URL;
    script.async = true;
    script.onload = () => resolve(getWebApp());
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });
  return sdkPromise;
}

/** Tells Telegram the app is ready, expands it, and matches Telegram's chrome to our light UI. */
export function initializeTelegram(webApp: TelegramWebApp): void {
  try {
    webApp.ready();
    if (!webApp.isExpanded) webApp.expand();
    // Hex colours need Bot API 6.9. Our UI is light-only, so keep Telegram's chrome consistent with it.
    if (webApp.isVersionAtLeast("6.9")) {
      webApp.setHeaderColor("#ffffff");
      webApp.setBackgroundColor("#fafaf9");
    }
  } catch {
    // Telegram customisation is optional; never let it break the marketplace.
  }
}

/** Unverified, client-reported user. For display only. */
export function getTelegramUser(webApp: TelegramWebApp): TelegramUser | null {
  const raw = webApp.initDataUnsafe?.user;
  if (!raw || typeof raw.id !== "number") return null;
  return {
    id: raw.id,
    firstName: raw.first_name,
    lastName: raw.last_name,
    username: raw.username,
    languageCode: raw.language_code,
    isPremium: raw.is_premium,
  };
}

export function getTelegramTheme(webApp: TelegramWebApp): TelegramTheme {
  return {
    colorScheme: webApp.colorScheme === "dark" ? "dark" : "light",
    params: { ...webApp.themeParams },
  };
}

export function onTelegramThemeChanged(webApp: TelegramWebApp, handler: () => void): () => void {
  webApp.onEvent("themeChanged", handler);
  return () => webApp.offEvent("themeChanged", handler);
}

/** Shows Telegram's BackButton. Returns a cleanup that removes the listener and hides it. */
export function showTelegramBackButton(onClick: () => void): () => void {
  const webApp = getWebApp();
  if (!webApp || !isTelegramWebApp(webApp)) return () => {};
  webApp.BackButton.onClick(onClick);
  webApp.BackButton.show();
  return () => {
    webApp.BackButton.offClick(onClick);
    webApp.BackButton.hide();
  };
}

/**
 * `history.length` is unreliable (a fresh tab already has 2 entries), so we count the
 * in-app navigations ourselves. Zero means the user landed here directly, e.g. via a link.
 */
let inAppNavigations = 0;
let skipNextNavigation = false;
export function noteInAppNavigation(): void {
  if (skipNextNavigation) {
    skipNextNavigation = false;
    return;
  }
  inAppNavigations += 1;
}
/** Call right before a launch redirect (router.replace) so it isn't counted as user navigation. */
export function skipNextNavigationCount(): void {
  skipNextNavigation = true;
}
export function hasInAppHistory(): boolean {
  return inAppNavigations > 0;
}

/** The Mini App start parameter (untrusted). Prefers the SDK, falls back to the launch hash. */
export function getTelegramStartParam(webApp: TelegramWebApp | null = getWebApp()): string | null {
  const fromSdk = webApp?.initDataUnsafe?.start_param;
  if (fromSdk) return fromSdk;
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.hash.replace(/^#/, "")).get("tgWebAppStartParam") || null;
}

const LAUNCH_KEY = "marketly:tg-launch";

/** True if this webview session already handled a launch with this exact start param. */
export function hasHandledLaunch(startParam: string | null): boolean {
  try {
    return window.sessionStorage.getItem(LAUNCH_KEY) === (startParam ?? "");
  } catch {
    return false;
  }
}

export function markLaunchHandled(startParam: string | null): void {
  try {
    window.sessionStorage.setItem(LAUNCH_KEY, startParam ?? "");
  } catch {
    // Without storage we may redirect again on reload; that is harmless.
  }
}

/** Opens a normal web link in the user's browser. Returns false if unsupported. */
export function openExternalLink(url: string): boolean {
  const webApp = getWebApp();
  if (!webApp || !isTelegramWebApp(webApp) || typeof webApp.openLink !== "function") return false;
  webApp.openLink(url);
  return true;
}

export function canOpenTelegramLink(): boolean {
  const webApp = getWebApp();
  return !!webApp && isTelegramWebApp(webApp) && typeof webApp.openTelegramLink === "function";
}

/** Opens a t.me link inside Telegram (e.g. the share dialog). Returns false if unsupported. */
export function openTelegramLink(url: string): boolean {
  if (!canOpenTelegramLink()) return false;
  getWebApp()!.openTelegramLink(url);
  return true;
}
