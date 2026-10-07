import { getCategories } from "@/lib/data";

import { TelegramBadge } from "@/components/telegram/TelegramBadge";
import { TelegramOpenAppLink } from "@/components/telegram/TelegramOpenAppLink";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { CategoriesMenu } from "./CategoriesMenu";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

export async function Header() {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[var(--header-bg)] backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* The badge sits with the logo so it never shifts the nav when it appears. */}
        <div className="flex min-w-0 items-center gap-3">
          <Logo />
          <TelegramBadge />
        </div>

        <div className="flex items-center gap-1">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              <li>
                <NavLink href="/products">Products</NavLink>
              </li>
              <li>
                <CategoriesMenu categories={categories} />
              </li>
            </ul>
          </nav>
          <TelegramOpenAppLink variant="header" />
          <span aria-hidden className="mx-2 hidden h-5 w-px bg-line md:block" />
          
          <ThemeToggle />
          <MobileNav categories={categories} />
        </div>
      </div>
    </header>
  );
}