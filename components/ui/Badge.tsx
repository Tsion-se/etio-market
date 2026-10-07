import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "primary";

const tones: Record<Tone, string> = {
  neutral: "bg-surface-2 text-ink-2",
  primary: "bg-accent-soft text-accent-ink",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: { tone?: Tone } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
