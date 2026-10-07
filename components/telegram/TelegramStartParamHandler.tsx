"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  getTelegramStartParam,
  hasHandledLaunch,
  markLaunchHandled,
  skipNextNavigationCount,
} from "@/lib/telegram/client";
import { resolveLaunchDestination } from "@/lib/telegram/deeplink";
import { useTelegram } from "@/lib/telegram/TelegramProvider";

/**
 * Routes a Telegram Mini App launch to the right page. Renders nothing and does
 * nothing outside Telegram. Runs once per launch, using `replace` so the launch
 * page doesn't become an extra history entry (which would confuse the BackButton).
 */
export function TelegramStartParamHandler() {
  const { isTelegram } = useTelegram();
  const router = useRouter();
  const pathname = usePathname();
  const ran = useRef(false);

  useEffect(() => {
    if (!isTelegram || ran.current) return;
    ran.current = true;

    const startParam = getTelegramStartParam();
    // A reload re-delivers the same start param; don't yank the user back to it.
    if (hasHandledLaunch(startParam)) return;
    markLaunchHandled(startParam);

    const destination = resolveLaunchDestination(startParam, pathname);
    if (destination && destination !== pathname) {
      skipNextNavigationCount();
      router.replace(destination);
    }
  }, [isTelegram, pathname, router]);

  return null;
}
