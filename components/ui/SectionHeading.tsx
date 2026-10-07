import type { ReactNode } from "react";

/** Eyebrow + heading (+ optional description and action) used by every page section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
      <div className="max-w-xl">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-ink">{eyebrow}</p>}
        <h2 id={id} className="mt-1.5 text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-[1.75rem]">
          {title}
        </h2>
        {description && <p className="mt-2 text-ink-2">{description}</p>}
      </div>
      {action}
    </div>
  );
}
