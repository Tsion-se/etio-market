/**
 * Minimal typings for the parts of the official Telegram WebApp API that EthioMarket uses.
 * Reference: https://core.telegram.org/bots/webapps
 */

export interface TelegramWebAppUserRaw {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

export interface TelegramBackButtonApi {
  show(): void;
  hide(): void;
  onClick(callback: () => void): void;
  offClick(callback: () => void): void;
}

export interface TelegramWebApp {
  /** Raw, signed init data string. Only a server can verify it. */
  initData: string;
  /** Parsed init data. UNVERIFIED: the client can forge it. Display purposes only. */
  initDataUnsafe: { user?: TelegramWebAppUserRaw; start_param?: string };
  /** "unknown" when the SDK is loaded outside Telegram. */
  platform: string;
  version: string;
  colorScheme: "light" | "dark";
  themeParams: Record<string, string | undefined>;
  isExpanded: boolean;
  BackButton: TelegramBackButtonApi;
  openLink(url: string): void;
  openTelegramLink(url: string): void;
  ready(): void;
  expand(): void;
  isVersionAtLeast(version: string): boolean;
  setHeaderColor(color: string): void;
  setBackgroundColor(color: string): void;
  onEvent(eventType: string, handler: () => void): void;
  offEvent(eventType: string, handler: () => void): void;
}

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp };
  }
}

/** Telegram user as shown by the client. Not verified; never use for authorization. */
export interface TelegramUser {
  id: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  languageCode?: string;
  isPremium?: boolean;
}

export interface TelegramTheme {
  colorScheme: "light" | "dark";
  params: Record<string, string | undefined>;
}
