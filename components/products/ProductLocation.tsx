import { MapPin } from "lucide-react";

export function ProductLocation({ location }: { location: string }) {
  return (
    <section aria-labelledby="location-heading">
      <h2 id="location-heading" className="text-lg font-semibold tracking-[-0.02em] text-ink">
        Location
      </h2>
      <div className="mt-4 flex items-center gap-4 rounded-xl border border-line bg-surface p-5 shadow-card">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink-2">
          <MapPin className="size-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-sm text-ink-2">Item location</p>
          <p className="break-words font-semibold text-ink">{location}</p>
        </div>
      </div>
    </section>
  );
}
