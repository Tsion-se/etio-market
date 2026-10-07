import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-150 disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-on-accent shadow-[0_1px_2px_rgb(0_0_0/0.18),inset_0_1px_0_rgb(255_255_255/0.14)] hover:bg-accent-hover active:bg-accent-active",
  secondary:
    "border border-line-strong bg-surface text-ink shadow-card hover:border-ink-3 hover:bg-surface-2",
  ghost: "text-ink-2 hover:bg-surface-2 hover:text-ink",
};

// Both sizes keep a minimum 44px touch target.
const sizes: Record<Size, string> = {
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-6 text-base",
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
}

export function buttonClassName({ variant = "primary", size = "md" }: StyleProps, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type={type} className={buttonClassName({ variant, size }, className)} {...props} />;
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: StyleProps & ComponentProps<typeof Link>) {
  return <Link className={buttonClassName({ variant, size }, className)} {...props} />;
}
