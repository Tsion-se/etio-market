"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

/** Last-resort boundary for errors in the root layout itself (which error.tsx cannot catch). */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-dvh items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink">Something went wrong</h1>
          <p className="mt-3 text-ink-2">EthioMarket hit an unexpected problem. Please try again.</p>
          <Button onClick={reset} className="mt-8">
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
