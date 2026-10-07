"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import { cn } from "@/lib/utils";

const root = () => document.documentElement;

/** The <html> class list is the source of truth; the inline script sets it before first paint. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(root(), { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function applyTheme(dark: boolean, animate: boolean) {
  const el = root();
  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.classList.add("theme-transition");
    window.setTimeout(() => el.classList.remove("theme-transition"), 260);
  }
  el.classList.toggle("dark", dark);
}

export function ThemeToggle({ className }: { className?: string }) {
  // Server and first client render both report "light"; the real value arrives right after
  // hydration, so markup never mismatches. Both icons are always rendered and switched by CSS.
  const isDark = useSyncExternalStore(
    subscribe,
    () => root().classList.contains("dark"),
    () => false,
  );

  // While the user has no saved choice, keep following the operating system.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      } catch {
        // Storage unavailable: fall through and follow the system.
      }
      applyTheme(event.matches, true);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = !isDark;
    applyTheme(next, true);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Private mode etc.: the theme still changes for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative inline-flex size-11 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink",
        className,
      )}
    >
      <Sun className="size-5 scale-100 transition-transform dark:hidden" aria-hidden />
      <Moon className="hidden size-5 dark:block" aria-hidden />
    </button>
  );
}
