"use client";

import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import { buttonClassName } from "@/components/ui/Button";
import { createTelegramMiniAppLink, createTelegramProductLink } from "@/lib/telegram/deeplink";
import { useTelegram } from "@/lib/telegram/TelegramProvider";

const PRODUCT_PATH = /^\/products\/([^/]+)\/?$/;

/**
 * Header action "Open in Telegram" (not the same as Share): opens the EthioMarket Mini App,
 * on that exact product when the current page is a product page. Hidden inside Telegram
 * and when Telegram is not configured, so it never produces a broken link.
 */
export function TelegramOpenAppLink({ variant = "header" }: { variant?: "header" | "menu" }) {
  const { isTelegram } = useTelegram();
  const pathname = usePathname();
  if (isTelegram) return null;

  const productId = PRODUCT_PATH.exec(pathname)?.[1];
  const href = (productId && createTelegramProductLink(decodeURIComponent(productId))) || createTelegramMiniAppLink();
  if (!href) return null;

  const link = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        variant === "menu"
          ? "flex min-h-11 items-center gap-2 rounded-lg px-3 text-base font-medium text-ink transition-colors hover:bg-surface-2"
          : buttonClassName({ variant: "secondary" })
      }
    >
      <Send className="size-4" aria-hidden />
      Open in Telegram
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );

  // The header wrapper only exists when there is a link, so an unconfigured site is unchanged.
  return variant === "header" ? <div className="ml-2 hidden md:block">{link}</div> : link;
}
