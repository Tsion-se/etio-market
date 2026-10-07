import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, BadgeCheck, Compass, MapPin, MessageCircle, Search, Send, Sparkles } from "lucide-react";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { getCategoryIcon } from "@/components/marketplace/categoryIcons";
import { Button, ButtonLink, buttonClassName } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";
import { getCategories, getFeaturedProducts, getProductById } from "@/lib/data";
import { createTelegramMiniAppLink } from "@/lib/telegram/deeplink";
import { cn, formatPrice, productsHref } from "@/lib/utils";
import type { Product } from "@/types/product";

/**
 * TelegramProvider sets `data-telegram="true"` on <html> once it confirms we are inside Telegram.
 * This hides "open in Telegram" UI there without making the page a client component.
 */
const hideInTelegram = "[html[data-telegram=true]_&]:hidden";

const linkAction =
  "inline-flex min-h-11 items-center gap-1 rounded-lg text-sm font-medium text-accent-ink hover:underline";

/**
 * Staggered reveal. Where the browser supports scroll-driven animations the sections animate as they
 * scroll into view (each item starts a little later via --i); elsewhere they fade in on load.
 * Disabled entirely for prefers-reduced-motion. Plain CSS, so the page stays a server component.
 */
const revealCss = `
@keyframes em-reveal{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.em-reveal{animation:em-reveal 500ms cubic-bezier(.2,.7,.2,1) both;animation-delay:calc(var(--i,0)*80ms)}
@supports (animation-timeline:view()){.em-reveal{animation-timeline:view();animation-delay:0s;animation-range:entry calc(var(--i,0)*6%) entry calc(35% + var(--i,0)*6%)}}
@media (prefers-reduced-motion:reduce){.em-reveal{animation:none}}
`;
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/** "Open the Mini App" link. The URL comes from the existing deep-link helper; null = not configured. */
function TelegramLink({ href, variant, children }: { href: string; variant: "primary" | "secondary"; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClassName({ variant, size: "lg" }, cn("max-sm:w-full", hideInTelegram))}
    >
      <Send className="size-4" aria-hidden />
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/**
 * Collage tile: real product photo, floating info card, links to the product page.
 * Shown on every screen size. On narrow screens the card shows only the price visually
 * (the name and location stay available to screen readers) so it never gets cramped.
 */
function CollageTile({ product, aspect }: { product: Product; aspect: string }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={`group relative block overflow-hidden rounded-xl border border-line bg-placeholder shadow-lift transition-shadow duration-200 hover:border-line-strong ${aspect}`}
    >
      <Image
        src={product.images[0]}
        alt=""
        fill
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 45vw"
        className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
      />
      <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5" />
      <span className="absolute inset-x-2 bottom-2 block rounded-lg border border-line bg-surface/95 px-2 py-1.5 shadow-card backdrop-blur-sm sm:inset-x-2.5 sm:bottom-2.5 sm:px-3 sm:py-2">
        <span className="flex items-center justify-between gap-2">
          <span className="truncate text-xs font-semibold text-ink max-[479px]:sr-only">{product.name}</span>
          <span className="shrink-0 text-xs font-semibold tabular-nums text-ink">
            {formatPrice(product.price, product.currency)}
          </span>
        </span>
        <span className="mt-0.5 flex items-center gap-1 text-xs text-ink-3 max-sm:sr-only">
          <MapPin className="size-3 shrink-0" aria-hidden />
          <span className="truncate">{product.location}</span>
        </span>
      </span>
    </Link>
  );
}

export default async function HomePage() {
  const [categories, featured, a, b, c] = await Promise.all([
    getCategories(),
    getFeaturedProducts(4),
    getProductById("habesha-kemis"), // tall tile (left)
    getProductById("iphone-13-128gb"), // top-right tile
    getProductById("infinix-hot-30"), // bottom-right tile
  ]);
  const telegramHref = createTelegramMiniAppLink();
  const brand = siteConfig.name;

  // Copy only claims what the app really does: seller contact is not live yet, Telegram links and sharing are.
  const aboutPoints = [
    { icon: MapPin, title: "Local Sellers", text: "Discover products from sellers across Ethiopia." },
    { icon: BadgeCheck, title: "Trusted Listings", text: "Browse clear product information and verified seller badges." },
    telegramHref
      ? { icon: Send, title: "Works with Telegram", text: "Browse the marketplace as a Telegram Mini App and share listings there." }
      : { icon: MessageCircle, title: "Seller Details", text: "See each seller’s name, location and verified status." },
  ];

  const steps = [
    { icon: Compass, title: "Discover", text: "Browse products from local sellers." },
    { icon: Sparkles, title: "Choose", text: "View product details, photos, price, location and seller information." },
    telegramHref
      ? { icon: Send, title: "Connect", text: "Continue on Telegram and share listings with the people you trust." }
      : { icon: MessageCircle, title: "Connect", text: "Share a listing, or take note of the seller and where they are based." },
  ];

  return (
    <>
      <style>{revealCss}</style>
      {/* 1. Hero: text and search first, product collage below on mobile / beside the text on desktop */}
      <section className="relative isolate overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_85%_0%,var(--hero-glow),transparent)]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-8 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-ink">Local marketplace</p>
            <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-6xl">
              Discover products from <span className="text-accent-ink">local sellers.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
              Search phones, laptops, fashion, furniture and more from sellers across Ethiopia.
            </p>

            {/* A plain GET form: works without JavaScript and lands on /products?q=... */}
            <form
              role="search"
              action="/products"
              method="get"
              className="mt-6 flex max-w-xl items-center gap-2 rounded-xl border border-line-strong bg-surface p-1.5 shadow-lift transition-shadow focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/20 sm:mt-8"
            >
              <label htmlFor="hero-search" className="sr-only">
                Search products
              </label>
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-ink-3" aria-hidden />
                <input
                  id="hero-search"
                  name="q"
                  type="search"
                  placeholder="Try “iPhone” or “sofa”"
                  autoComplete="off"
                  enterKeyHint="search"
                  className="min-h-11 w-full bg-transparent py-2 pl-10 pr-2 text-base text-ink outline-none placeholder:text-ink-3 focus-visible:outline-none"
                />
              </div>
              <Button type="submit" size="md" className="shrink-0 px-5">
                Search
              </Button>
            </form>

            <nav aria-label="Popular categories" className="mt-4 flex items-center gap-2 sm:mt-5">
              <span className="shrink-0 text-sm text-ink-2">Popular:</span>
              <ul className="-mr-4 flex min-w-0 gap-2 overflow-x-auto py-1 pr-4 [scrollbar-width:none] sm:mr-0 sm:flex-wrap sm:overflow-visible sm:pr-0 [&::-webkit-scrollbar]:hidden">
                {categories.slice(0, 4).map((category) => (
                  <li key={category.name} className="shrink-0">
                    <Link
                      href={productsHref({ category: category.name })}
                      className="inline-flex min-h-11 items-center rounded-lg border border-line bg-surface px-3.5 text-sm font-medium text-ink shadow-card transition-colors hover:border-line-strong hover:bg-surface-2"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {telegramHref && (
              <p className={cn("mt-3 text-sm text-ink-2", hideInTelegram)}>
                Also available as a Telegram Mini App.{" "}
                <a href="#telegram" className="font-medium text-accent-ink underline underline-offset-4">
                  Learn more
                </a>
              </p>
            )}
          </div>

          {/* Visible on every screen: under the text on mobile, beside it on desktop. */}
          {a && b && c && (
            <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4 lg:max-w-none">
              <div className="pt-8 sm:pt-10">
                <CollageTile product={a} aspect="aspect-[3/4]" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <CollageTile product={b} aspect="aspect-[4/3]" />
                <CollageTile product={c} aspect="aspect-square" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About: two columns on desktop, stacked on mobile */}
      <section aria-labelledby="about-heading" className="relative isolate overflow-hidden border-b border-line bg-surface">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(45%_80%_at_0%_100%,var(--hero-glow),transparent)]"
        />
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
          <div className="max-w-xl">
            <p className="em-reveal text-xs font-semibold uppercase tracking-[0.12em] text-accent-ink" style={stagger(0)}>
              About us
            </p>
            <h2
              id="about-heading"
              className="em-reveal mt-1.5 text-balance text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl"
              style={stagger(1)}
            >
              About {brand}
            </h2>
            <p className="em-reveal mt-3 leading-relaxed text-ink-2 sm:text-lg" style={stagger(2)}>
              {brand} is a marketplace that connects buyers with local sellers across Ethiopia. Discover phones,
              electronics, fashion, furniture, and more from local businesses and independent sellers.
            </p>
          </div>
          <ul className="grid gap-3 sm:gap-4">
            {aboutPoints.map(({ icon: Icon, title, text }, index) => (
              <li
                key={title}
                className="em-reveal flex items-start gap-4 rounded-xl border border-line bg-canvas p-4 shadow-card transition-[border-color,box-shadow] duration-200 hover:border-line-strong hover:shadow-lift sm:p-5"
                style={stagger(index + 3)}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-[-0.01em] text-ink">{title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-2">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Categories: scrolls sideways on mobile instead of stacking into a tall grid */}
      <section id="categories" aria-labelledby="categories-heading" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
        <SectionHeading
          id="categories-heading"
          eyebrow="Categories"
          title="Shop by category"
          action={
            <Link href="/products" className={linkAction}>
              All products
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          }
        />
        <ul className="-mx-4 mt-6 flex snap-x gap-3 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] sm:gap-4 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <li key={category.name} className="w-36 shrink-0 snap-start sm:w-auto">
                <Link
                  href={productsHref({ category: category.name })}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-line bg-surface p-4 shadow-card transition-[border-color,box-shadow,transform] duration-200 hover:border-line-strong hover:shadow-lift motion-safe:hover:-translate-y-0.5"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent group-hover:text-on-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold tracking-[-0.01em] text-ink">{category.name}</span>
                    <span className="mt-0.5 block text-xs tabular-nums text-ink-3">
                      {category.count} {category.count === 1 ? "listing" : "listings"}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 4. Featured products (existing ProductGrid, untouched) */}
      <section aria-labelledby="featured-heading" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
        <SectionHeading
          id="featured-heading"
          title="Featured products"
          description="Popular picks from local sellers."
          action={
            <Link href="/products" className={linkAction}>
              View all products
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          }
        />
        <div className="mt-6 sm:mt-8">
          <ProductGrid products={featured} />
        </div>
      </section>

      {/* 2. Telegram Mini App entry point: rendered only when Telegram is configured, never inside Telegram */}
      {telegramHref && (
        <section
          id="telegram"
          aria-labelledby="telegram-heading"
          className={cn("mx-auto max-w-6xl scroll-mt-20 px-4 pt-16 sm:px-6 sm:pt-20", hideInTelegram)}
        >
          <div className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                <Send className="size-6" aria-hidden />
              </span>
              <div className="min-w-0">
                <h2 id="telegram-heading" className="text-xl font-semibold tracking-[-0.025em] text-ink sm:text-2xl">
                  Shop faster on Telegram
                </h2>
                <p className="mt-1.5 max-w-md text-ink-2">Browse {brand} directly inside Telegram.</p>
              </div>
            </div>
            <div className="md:shrink-0">
              <TelegramLink href={telegramHref} variant="primary">
                Open {brand} in Telegram
              </TelegramLink>
            </div>
          </div>
        </section>
      )}

      {/* How it works: a vertical timeline on mobile, a connected row on desktop */}
      <section aria-labelledby="how-heading" className="mt-16 border-y border-line bg-surface sm:mt-20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading id="how-heading" eyebrow="Simple by design" title={`How ${brand} works`} />
          <ol className="mt-8 grid gap-0 sm:mt-10 sm:grid-cols-3 sm:gap-8">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <li key={title} className="em-reveal relative flex gap-4 pb-8 last:pb-0 sm:block sm:pb-0" style={stagger(index)}>
                {index < steps.length - 1 && (
                  <>
                    <span aria-hidden className="absolute left-[1.375rem] top-12 bottom-1 border-l border-dashed border-line-strong sm:hidden" />
                    <span aria-hidden className="absolute left-14 right-0 top-[1.375rem] hidden border-t border-dashed border-line-strong sm:block" />
                  </>
                )}
                <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent-ink">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0 sm:mt-5">
                  <h3 className="text-base font-semibold tracking-[-0.01em] text-ink">
                    <span className="mr-2 tabular-nums text-accent-ink">0{index + 1}</span>
                    {title}
                  </h3>
                  <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ink-2">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="cta-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative isolate overflow-hidden rounded-2xl border border-line bg-surface px-6 py-10 text-center shadow-lift sm:px-10 sm:py-14">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_50%_0%,var(--hero-glow),transparent)]"
          />
          <h2 id="cta-heading" className="text-balance text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl">
            Ready to find something?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-ink-2">Explore products from local sellers.</p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/products" size="lg">
              Browse products
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            {telegramHref && (
              <TelegramLink href={telegramHref} variant="secondary">
                Open in Telegram
              </TelegramLink>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
