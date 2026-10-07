"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { hasInAppHistory, showTelegramBackButton } from "@/lib/telegram/client";
import { useTelegram } from "@/lib/telegram/TelegramProvider";

/**
 * Shows Telegram's native BackButton while mounted. Renders nothing, and does
 * nothing at all outside Telegram.
 */
export function TelegramBackButton({ fallbackHref }: { fallbackHref: string }) {
  const { isTelegram } = useTelegram();
  const router = useRouter();

  useEffect(() => {
    if (!isTelegram) return;
    return showTelegramBackButton(() => {
      // A deep-linked page has no in-app history to go back to.
      if (hasInAppHistory()) router.back();
      else router.push(fallbackHref);
    });
  }, [isTelegram, router, fallbackHref]);

  return null;
}
