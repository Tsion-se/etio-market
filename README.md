# EthioMarket

A mobile-first marketplace where people browse products from local sellers, search and filter listings, open
product details with seller information, and continue the same product in **Telegram as a Mini App**. The
website and the Mini App are one codebase and share the same `/products/[id]` pages.

## Features

- Product listing with search, category filter and sorting. All state lives in the URL, so it survives refresh and can be shared.
- Product detail: image gallery (thumbnails, previous/next, swipe, keyboard), price, description, specifications, seller card, location, share, and related products.
- Telegram Mini App support: environment detection, user greeting, native BackButton, safe-area handling.
- Website ↔ Telegram product links that preserve the exact product ID in both directions.
- Loading skeletons, custom 404, and error boundaries (including a global one).
- Accessible by default: semantic HTML, skip link, visible focus, labelled controls, 44px touch targets.

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Lucide icons · ESLint · `next/image` · `next/font` (Inter, self-hosted).
No database, auth, state library or other runtime dependencies. Product data is mocked.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Environment variables

All variables are **public** (`NEXT_PUBLIC_*`, bundled into the browser) and optional. The app runs without them;
the features that need them are hidden instead of producing broken links. They are read at **build time**, so set
them before `npm run build`. Details are in `.env.example`.

| Variable | Purpose | If missing |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | Public https URL of the deployed site | "Open on website" is hidden; canonical and Open Graph URLs are omitted |
| `NEXT_PUBLIC_TELEGRAM_BOT_USERNAME` | Bot username without `@` | Telegram links are hidden |
| `NEXT_PUBLIC_TELEGRAM_MINI_APP_SHORT_NAME` | Optional, for a direct-link Mini App | The bot's main Mini App link is used |

**Never put a bot token or signing secret in a `NEXT_PUBLIC_*` variable.** None is needed or used.

## Telegram Mini App

**Setup.** Deploy over HTTPS, then in @BotFather create or select a bot and set the Mini App URL to the site
root (for example the bot's Main Mini App, or `/newapp` for a direct-link app). Set the three variables above.

**Behaviour.** All `window.Telegram` access is isolated in `lib/telegram/`. The official
`telegram-web-app.js` is loaded only when the page looks like a Telegram launch (launch hash, Telegram webview,
Telegram user agent), so normal browsers never contact telegram.org and nothing Telegram-specific runs during
server rendering. Inside Telegram the app calls `ready()` and `expand()`, shows a small "Telegram" badge with a
greeting, and shows the native BackButton on product pages.

**Deep-link flow.**

1. A product page builds `https://t.me/<bot>?startapp=<product-id>` (or `https://t.me/<bot>/<short_name>?startapp=…`) on the server and offers **Open in Telegram**.
2. Telegram opens the Mini App and passes the value as `start_param`.
3. `TelegramStartParamHandler` reads it once per launch, accepts it only if it matches `[A-Za-z0-9_-]{1,64}`, and navigates with `router.replace` to `/products/<id>`, so no extra history entry is created.
4. That route resolves the product through the normal data layer. An unknown id shows the 404 page; a malformed value or no value opens `/products`.
5. Inside Telegram, **Open on website** opens `<NEXT_PUBLIC_APP_URL>/products/<id>` and **Share in Telegram** opens Telegram's share dialog with the deep link. Website sharing keeps the clean `/products/<id>` URL with no tracking parameters.

**Security.** `initDataUnsafe` (user, start parameter) is client-reported and can be forged. It is used only for
display and as a product identifier, and is never used for authentication or authorisation. Product IDs are public,
validated, and looked up server-side. Real identity would require a server route that verifies the signed `initData`
with the bot token (kept in a server-only variable); this is intentionally not implemented.

## Routes

| Route | Description |
| --- | --- |
| `/` | Home: search, categories, featured products, how it works |
| `/products` | Listing; `?q=`, `?category=`, `?sort=newest\|price-asc\|price-desc` |
| `/products/[id]` | Product detail (prerendered per product; unknown ids return a real 404) |

## Architecture

```
app/                    Routes, layouts, loading / error / global-error / not-found
  products/(list)/      Listing + skeleton (route group: a loading route on [id] would turn 404s into 200s)
components/
  layout/               Header, MobileNav, CategoriesMenu, Footer
  marketplace/          Search, filters, sort, grid, empty state, URL-state hook
  products/             ProductCard, gallery, info, specs, seller, location, share, related
  telegram/             Badge, BackButton, start-param handler, link/share/website buttons
  ui/                   Button, Badge, Select
lib/
  data/                 Mock data and the data-access API (swap for a real API later) + query logic
  telegram/             Isolated Telegram layer: client, config, deeplink, types, provider
  config.ts, utils.ts, product-id.ts
types/                  Shared TypeScript types
```

- **Server Components by default.** Listing, detail, related products and metadata are server-rendered. Client components are limited to interactive pieces (filters, gallery, share, menus, Telegram).
- **URL as state.** The listing is filtered on the server from the URL; controls only update the URL.
- **One data layer.** Components call `getProducts`, `getProductById`, `getRelatedProducts`, never the raw array.
- **One source of truth for links.** Telegram links are built only in `lib/telegram/deeplink.ts`; the website URL only in `lib/config.ts`.

## Testing

```bash
npm run lint && npm run typecheck && npm run build
```

Beyond these, the project was verified with scripted browser checks (Playwright) against a production build:
search, filter and sort combinations, gallery, share, related products, 404 and error boundaries, keyboard
focus order, an automated axe-core accessibility scan, horizontal overflow at 320–1440px, and every
Website ↔ Telegram flow. Telegram was tested against a **mock of the official SDK**; see Limitations. Those
scripts are not part of this repository.

## Deployment

Any Node host works (e.g. Vercel). Set `NEXT_PUBLIC_APP_URL` and the Telegram variables **at build time**, serve
over HTTPS (required by Telegram), and point the bot's Mini App URL at the site root.

## Limitations

- Product images are generated placeholders; seller contact is UI-only (no messaging backend).
- Not tested in a real Telegram client: link formats, SDK behaviour and BackButton were verified against a mock and the Telegram documentation only.
- `initData` is not validated server-side (see Security).
