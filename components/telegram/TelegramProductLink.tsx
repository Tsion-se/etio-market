"use client";

import { Send } from "lucide-react";
import { buttonClassName } from "@/components/ui/Button";
import { useTelegram } from "@/lib/telegram/TelegramProvider";

/** Website -> Telegram. Hidden inside Telegram, where it would be pointless. */
export function TelegramProductLink({ href }: { href: string | null }) {
  const { isTelegram } = useTelegram();
  if (isTelegram) return null;

  if (!href) {
    // Missing/invalid config: never emit a broken link. Explain it to developers only.
    return process.env.NODE_ENV === "development" ? (
      <p className="text-xs text-stone-500">
        Set NEXT_PUBLIC_TELEGRAM_BOT_USERNAME to enable “Open in Telegram”.
      </p>
    ) : null;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClassName({ variant: "secondary" })}>
      <Send className="size-4" aria-hidden />
      Open in Telegram
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
