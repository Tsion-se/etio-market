import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getPublicAppUrl, siteConfig } from "@/lib/config";
import { themeInitScript } from "@/lib/theme";
import { TelegramStartParamHandler } from "@/components/telegram/TelegramStartParamHandler";
import { TelegramProvider } from "@/lib/telegram/TelegramProvider";
import "./globals.css";

// Inter (variable), self-hosted so builds don't depend on Google Fonts.
const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const appUrl = getPublicAppUrl();

export const metadata: Metadata = {
  // Only set when NEXT_PUBLIC_APP_URL is configured, so absolute URLs in metadata
  // (canonical, Open Graph) are never silently built from a localhost default.
  metadataBase: appUrl ? new URL(appUrl) : undefined,
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} – Discover products from trusted sellers`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} – Discover products from trusted sellers`,
    description: siteConfig.description,
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e13" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script adds the `dark` class to <html> before React hydrates.
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only rounded-lg bg-surface px-4 py-3 text-sm font-medium text-ink shadow-pop focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to main content
        </a>
        <TelegramProvider>
          <TelegramStartParamHandler />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </TelegramProvider>
      </body>
    </html>
  );
}
