"use client";

import { Send } from "lucide-react";
import { buttonClassName } from "@/components/ui/Button";
import { canOpenTelegramLink, openTelegramLink } from "@/lib/telegram/client";
import { useTelegram } from "@/lib/telegram/TelegramProvider";

/**
 * Opens Telegram's own share dialog (t.me/share/url). In a browser it is a normal
 * link; inside a Mini App it uses openTelegramLink, and is hidden if that is unavailable.
 */
export function TelegramShareButton({ href }: { href: string | null }) {
  const { isTelegram } = useTelegram();
  if (!href) return null;
  if (isTelegram && !canOpenTelegramLink()) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        if (isTelegram && openTelegramLink(href)) event.preventDefault();
      }}
      className={buttonClassName({ variant: "secondary" })}
    >
      <Send className="size-4" aria-hidden />
      Share in Telegram
      {!isTelegram && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
