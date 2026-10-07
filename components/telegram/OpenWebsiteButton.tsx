"use client";

import { Globe } from "lucide-react";
import { buttonClassName } from "@/components/ui/Button";
import { openExternalLink } from "@/lib/telegram/client";
import { useTelegram } from "@/lib/telegram/TelegramProvider";

/** Telegram -> website, for the exact same product. Shown only inside Telegram. */
export function OpenWebsiteButton({ href }: { href: string | null }) {
  const { isTelegram } = useTelegram();
  if (!isTelegram) return null;

  if (!href) {
    return process.env.NODE_ENV === "development" ? (
      <p className="text-xs text-stone-500">Set NEXT_PUBLIC_APP_URL to enable “Open on website”.</p>
    ) : null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        // Inside Telegram, openLink uses the system browser instead of the Mini App webview.
        if (openExternalLink(href)) event.preventDefault();
      }}
      className={buttonClassName({ variant: "secondary" })}
    >
      <Globe className="size-4" aria-hidden />
      Open on website
    </a>
  );
}
