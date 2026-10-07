/** Mirrors ProductCard's fixed-height regions so loading causes no layout shift. */
export function ProductCardSkeleton() {
  return (
    <div className="flex h-full animate-pulse flex-col overflow-hidden rounded-xl border border-line bg-surface motion-reduce:animate-none">
      <div className="aspect-[4/3] bg-surface-2" />
      <div className="flex flex-1 flex-col p-4">
        <div className="min-h-12 space-y-2 pt-1">
          <div className="h-4 w-4/5 rounded bg-surface-2" />
          <div className="h-4 w-3/5 rounded bg-surface-2" />
        </div>
        <div className="mt-1 min-h-10 space-y-2 pt-1">
          <div className="h-3 w-full rounded bg-surface-2" />
          <div className="h-3 w-2/3 rounded bg-surface-2" />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="h-7 w-28 rounded bg-surface-2" />
          <div className="size-8 rounded-full bg-surface-2" />
        </div>
        <div className="mt-4 flex justify-between border-t border-line pt-3">
          <div className="h-4 w-20 rounded bg-surface-2" />
          <div className="h-4 w-16 rounded bg-surface-2" />
        </div>
      </div>
    </div>
  );
}
