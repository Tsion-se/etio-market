"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button, buttonClassName } from "@/components/ui/Button";
import { openTelegramLink } from "@/lib/telegram/client";
import { cn } from "@/lib/utils";

/**
 * With `chatHref` (the seller has a Telegram username) this is a real link that opens a direct
 * chat. Without it, it stays a UI placeholder that only shows a notice.
 */
export function ContactSellerButton({
  sellerName,
  chatHref = null,
  variant = "primary",
  noticeAbove = false,
  size,
  className,
}: {
  sellerName: string;
  /** Telegram chat link from createSellerChatLink, or null when the seller has no username. */
  chatHref?: string | null;
  variant?: "primary" | "secondary";
  /** Float the notice above the parent bar instead of below the button (sticky mobile bar). */
  noticeAbove?: boolean;
  size?: "md" | "lg";
  className?: string;
}) {
  const [notified, setNotified] = useState(false);

  if (chatHref) {
    return (
      <div className={cn("flex flex-col", className)}>
        <a
          href={chatHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            // Inside the Telegram Mini App, open the chat within Telegram instead of a new tab.
            if (openTelegramLink(chatHref)) event.preventDefault();
          }}
          className={buttonClassName({ variant, size })}
        >
          <Send className="size-4" aria-hidden />
          Chat on Telegram
          <span className="sr-only"> (opens a chat with {sellerName})</span>
        </a>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <Button variant={variant} size={size} onClick={() => setNotified(true)}>
        <MessageCircle className="size-4" aria-hidden />
        Contact seller
      </Button>
      <p
        role="status"
        className={cn(
          "text-sm text-ink-2",
          // Floats above the nearest positioned ancestor (the sticky bar) so the bar never changes height.
          noticeAbove
            ? notified
              ? "absolute inset-x-0 bottom-full border-t border-line bg-surface px-4 py-3 text-ink shadow-pop sm:px-6"
              : "sr-only"
            : "mt-2",
        )}
      >
        {notified && `Contacting ${sellerName} isn’t available yet. It’s coming in a later update.`}
      </p>
    </div>
  );
}