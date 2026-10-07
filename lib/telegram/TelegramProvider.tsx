"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import {
  getTelegramTheme,
  getTelegramUser,
  initializeTelegram,
  isTelegramWebApp,
  loadTelegramSdk,
  noteInAppNavigation,
  onTelegramThemeChanged,
} from "./client";
import type { TelegramTheme, TelegramUser } from "./types";

export interface TelegramContextValue {
  /** True only after the SDK loaded and confirmed we are inside Telegram. */
  isTelegram: boolean;
  /** Unverified Telegram user (display only), or null. */
  user: TelegramUser | null;
  theme: TelegramTheme | null;
}

// The server and the first client render both use this value, so hydration always matches.
const outsideTelegram: TelegramContextValue = { isTelegram: false, user: null, theme: null };

const TelegramContext = createContext<TelegramContextValue>(outsideTelegram);

export function TelegramProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<TelegramContextValue>(outsideTelegram);

  // Lets the BackButton know whether there is an in-app page to go back to.
  const pathname = usePathname();
  const lastPathname = useRef<string | null>(null);
  useEffect(() => {
    if (lastPathname.current !== null && lastPathname.current !== pathname) noteInAppNavigation();
    lastPathname.current = pathname;
  }, [pathname]);

  useEffect(() => {
    let cancelled = false;
    let stopThemeListener: (() => void) | undefined;

    loadTelegramSdk().then((webApp) => {
      if (cancelled || !webApp || !isTelegramWebApp(webApp)) return;

      initializeTelegram(webApp);
      document.documentElement.dataset.telegram = "true";
      setValue({ isTelegram: true, user: getTelegramUser(webApp), theme: getTelegramTheme(webApp) });
      stopThemeListener = onTelegramThemeChanged(webApp, () =>
        setValue((current) => ({ ...current, theme: getTelegramTheme(webApp) })),
      );
    });

    return () => {
      cancelled = true;
      stopThemeListener?.();
    };
  }, []);

  return <TelegramContext.Provider value={value}>{children}</TelegramContext.Provider>;
}

/** The only thing components need to know about Telegram. Safe in any browser. */
export function useTelegram(): TelegramContextValue {
  return useContext(TelegramContext);
}
