"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log for diagnostics only; never render the error details to users.
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink">
        Something went wrong
      </h1>
      <p className="mt-3 text-ink-2">
        We couldn&apos;t load this page. Try again in a moment.
      </p>
      <Button onClick={reset} className="mt-8">
        Try again
      </Button>
    </div>
  );
}
