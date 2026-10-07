import { BadgeCheck, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { Seller } from "@/types/product";
import { ContactSellerButton } from "./ContactSellerButton";

export function SellerCard({ seller, chatHref = null }: { seller: Seller; chatHref?: string | null }) {
  return (
    <section aria-labelledby="seller-heading">
      <h2 id="seller-heading" className="text-lg font-semibold tracking-[-0.02em] text-ink">
        Seller
      </h2>
      <div className="mt-4 rounded-xl border border-line bg-surface p-5 shadow-card">
        <div className="flex items-center gap-4">
          <span
            aria-hidden
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-lg font-semibold text-accent-ink"
          >
            {seller.name.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="break-words font-semibold tracking-[-0.01em] text-ink">{seller.name}</p>
            {seller.verified && (
              <Badge tone="primary" className="mt-1">
                <BadgeCheck className="size-3.5" aria-hidden />
                Verified seller
              </Badge>
            )}
          </div>
        </div>

        <dl className="mt-5 divide-y divide-line border-t border-line text-sm">
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-ink-2">Rating</dt>
            <dd className="inline-flex min-w-0 items-center gap-1 break-words text-right font-medium text-ink">
              <Star className="size-3.5 fill-star text-star" aria-hidden />
              {seller.rating.toFixed(1)} out of 5
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-ink-2">Location</dt>
            <dd className="inline-flex min-w-0 items-center gap-1 break-words text-right font-medium text-ink">
              <MapPin className="size-3.5 shrink-0" aria-hidden />
              {seller.location}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-ink-2">Member since</dt>
            <dd className="min-w-0 break-words text-right font-medium text-ink">{formatDate(seller.joinedAt)}</dd>
          </div>
        </dl>

        <ContactSellerButton
          sellerName={seller.name}
          chatHref={chatHref}
          variant="secondary"
          className="mt-2 [&>button]:w-full [&>a]:w-full"
        />
      </div>
    </section>
  );
}