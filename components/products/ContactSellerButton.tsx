"use client";

import { Send } from "lucide-react";
import { Button, buttonClassName } from "@/components/ui/Button";
import { openTelegramLink } from "@/lib/telegram/client";
import { createSellerChatLink } from "@/lib/telegram/deeplink";
import { useTelegram } from "@/lib/telegram/TelegramProvider";
import { cn } from "@/lib/utils";

/**
 * With a valid seller Telegram username this is a link that opens the chat (t.me/<username>);
 * inside the Telegram Mini App it uses Telegram's own link opener. The chat opens with a
 * product-specific message prefilled. Without a username the button is disabled with a short note.
 */
export function ContactSellerButton({
  sellerName,
  telegramUsername,
  productName,
  variant = "primary",
  size,
  className,
}: {
  sellerName: string;
  /** Seller's Telegram username (with or without "@"). */
  telegramUsername?: string;
  /** When set, the chat opens with a message about this product. */
  productName?: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
}) {
  const { isTelegram } = useTelegram();
  const chatLink = createSellerChatLink(
    telegramUsername,
    productName
      ? `Hello, I'm interested in the ${productName} listed on EthioMarket. Is it still available?`
      : undefined,
  );

  if (chatLink) {
    return (
      <div className={cn("flex flex-col", className)}>
        <a
          href={chatLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            // Inside the Mini App, open the chat in Telegram itself instead of a browser tab.
            if (isTelegram && openTelegramLink(chatLink)) event.preventDefault();
          }}
          className={cn(buttonClassName({ variant, size }), "w-full")}
        >
          <Send className="size-4" aria-hidden />
          Chat on Telegram
          <span className="sr-only"> with {sellerName}{!isTelegram && " (opens in a new tab)"}</span>
        </a>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <Button variant={variant} size={size} disabled className="w-full">
        <Send className="size-4" aria-hidden />
        Contact seller
      </Button>
      <p className="mt-2 text-sm text-ink-2">Telegram contact unavailable</p>
    </div>
  );
}
