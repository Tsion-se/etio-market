"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Feedback = { kind: "success" | "error"; message: string } | null;

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API is unavailable on insecure origins; try the legacy path.
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

/** Plain website sharing only: Web Share API with a copy-link fallback. */
export function ShareButton({ productId, title, text }: { productId: string; title: string; text: string }) {
  const [feedback, setFeedback] = useState<Feedback>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function show(next: Feedback) {
    setFeedback(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFeedback(null), 4000);
  }

  async function handleShare() {
    // Always share the stable product URL, never query strings or hashes.
    const url = `${window.location.origin}/products/${encodeURIComponent(productId)}`;

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return; // user cancelled
      }
    }

    const copied = await copyToClipboard(url);
    show(
      copied
        ? { kind: "success", message: "Link copied to clipboard" }
        : { kind: "error", message: "Couldn't copy the link. Copy it from the address bar instead." },
    );
  }

  return (
    <div>
      <Button variant="secondary" onClick={handleShare}>
        <Share2 className="size-4" aria-hidden />
        Share
      </Button>
      <p role="status" className="mt-2 text-sm text-ink-2">
        {feedback && (
          <span className="inline-flex items-start gap-1.5">
            {feedback.kind === "success" ? (
              <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
            ) : (
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-danger" aria-hidden />
            )}
            {feedback.message}
          </span>
        )}
      </p>
    </div>
  );
}
