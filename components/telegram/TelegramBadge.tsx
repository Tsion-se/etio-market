"use client";

import { Send } from "lucide-react";
import { useTelegram } from "@/lib/telegram/TelegramProvider";
import { getTelegramDisplayName } from "@/lib/telegram/utils";

/** Small header indicator, rendered only inside Telegram. */
export function TelegramBadge() {
  const { isTelegram, user } = useTelegram();
  if (!isTelegram) return null;

  const name = getTelegramDisplayName(user);

  return (
    <span className="inline-flex min-w-0 items-center gap-1.5 rounded-md border border-sky-200 bg-sky-50 px-2 py-1 text-xs font-medium text-sky-900 max-[399px]:px-1.5">
      <Send className="size-3.5 shrink-0" aria-hidden />
      <span className="max-[399px]:sr-only">Telegram</span>
      {name && <span className="max-sm:sr-only truncate">· Hello, {name}</span>}
    </span>
  );
}
