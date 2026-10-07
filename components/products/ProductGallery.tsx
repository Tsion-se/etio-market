"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SWIPE_THRESHOLD_PX = 50;

const arrowButton =
  "absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-card backdrop-blur-sm transition-[background-color,box-shadow] hover:bg-surface hover:shadow-lift";

export function ProductGallery({ images, productName }: { images: string[]; productName: string }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;
  const hasMany = count > 1;

  function goTo(next: number) {
    setIndex((next + count) % count);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!hasMany) return;
    if (event.key === "ArrowLeft") goTo(index - 1);
    if (event.key === "ArrowRight") goTo(index + 1);
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null || !hasMany) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) goTo(index + (delta < 0 ? 1 : -1));
  }

  return (
    <div onKeyDown={handleKeyDown}>
      <div
        className="relative aspect-[4/3] touch-pan-y overflow-hidden rounded-xl border border-line bg-placeholder shadow-card"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[index]}
          alt={`${productName} – photo ${index + 1} of ${count}`}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
        {hasMany && (
          <>
            <button type="button" aria-label="Previous photo" onClick={() => goTo(index - 1)} className={cn(arrowButton, "left-3")}>
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button type="button" aria-label="Next photo" onClick={() => goTo(index + 1)} className={cn(arrowButton, "right-3")}>
              <ChevronRight className="size-5" aria-hidden />
            </button>
            <span className="absolute bottom-3 right-3 rounded-md bg-black/65 px-2 py-1 text-xs font-medium tabular-nums text-white backdrop-blur-sm">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>

      {hasMany && (
        <>
          <ul className="mt-3 grid grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] gap-2.5">
            {images.map((src, i) => {
              const active = i === index;
              return (
                <li key={src}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "relative block aspect-[4/3] w-full overflow-hidden rounded-lg border-2 bg-placeholder transition-[opacity,border-color]",
                      active ? "border-accent" : "border-transparent opacity-70 hover:opacity-100",
                    )}
                  >
                    <Image src={src} alt={`${productName} – thumbnail of photo ${i + 1}`} fill sizes="96px" className="object-cover" />
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="sr-only" aria-live="polite">
            Showing photo {index + 1} of {count}
          </p>
        </>
      )}
    </div>
  );
}
