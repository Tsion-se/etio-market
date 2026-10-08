import { BadgeCheck, CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { OpenWebsiteButton } from "@/components/telegram/OpenWebsiteButton";
import { TelegramProductLink } from "@/components/telegram/TelegramProductLink";
import { TelegramShareButton } from "@/components/telegram/TelegramShareButton";
import { createWebsiteProductUrl } from "@/lib/config";
import { createProductShareLink, createTelegramProductLink } from "@/lib/telegram/deeplink";
import { formatFullDate, formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";
import { ContactSellerButton } from "./ContactSellerButton";
import { ShareButton } from "./ShareButton";

export function ProductInfo({ product }: { product: Product }) {
  const { seller } = product;

  return (
    // Flex column so the seller action can sit right under the price on phones (order-*)
    // while desktop keeps its original order (md:order-*).
    <div className="flex flex-col">
      <div className="order-1">
        <Badge tone="primary">{product.category}</Badge>
      </div>
      <h1 className="order-2 mt-4 text-balance break-words text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl">
        {product.name}
      </h1>
      <p className="order-3 mt-5 text-4xl font-semibold tabular-nums tracking-[-0.03em] text-ink">
        <span className="sr-only">Price: </span>
        {formatPrice(product.price, product.currency)}
      </p>

      <ul className="order-5 mt-5 flex flex-col gap-2.5 border-y border-line py-5 text-sm text-ink-2 md:order-4">
        <li className="flex items-center gap-2.5">
          <MapPin className="size-4 shrink-0 text-ink-3" aria-hidden />
          <span className="min-w-0 break-words">{product.location}</span>
        </li>
        <li className="flex items-center gap-2.5">
          <CalendarDays className="size-4 shrink-0 text-ink-3" aria-hidden />
          <span>
            Listed on <time dateTime={product.createdAt}>{formatFullDate(product.createdAt)}</time>
          </span>
        </li>
        <li className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="min-w-0 break-words">
            Sold by <span className="font-medium text-ink">{seller.name}</span>
          </span>
          {seller.verified && (
            <Badge tone="primary">
              <BadgeCheck className="size-3.5" aria-hidden />
              Verified
            </Badge>
          )}
        </li>
      </ul>

      <p className="order-6 mt-5 break-words text-base leading-relaxed text-ink-2 md:order-5">{product.shortDescription}</p>

      {/* Seller action: directly under the price on phones, in its original place on desktop. Scrolls with the page. */}
      <ContactSellerButton
        sellerName={seller.name}
        telegramUsername={seller.telegramUsername}
        productName={product.name}
        size="lg"
        className="order-4 mt-5 w-full md:order-6 md:mt-7 [&>button]:w-full"
      />

      <div className="order-7 mt-7 flex flex-wrap items-start gap-3 md:mt-3">
        <ShareButton
          productId={product.id}
          title={product.name}
          text={`${product.name} on EthioMarket – ${product.shortDescription}`}
        />
        {/* Links are built on the server from the product id: one source of truth, no client logic. */}
        <TelegramProductLink href={createTelegramProductLink(product.id)} />
        <OpenWebsiteButton href={createWebsiteProductUrl(product.id)} />
        <TelegramShareButton href={createProductShareLink(product.id, `${product.name} on EthioMarket`)} />
      </div>
    </div>
  );
}
