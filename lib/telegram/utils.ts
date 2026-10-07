import type { TelegramUser } from "./types";

/** Short display name, or null if Telegram gave us nothing usable. */
export function getTelegramDisplayName(user: TelegramUser | null): string | null {
  if (!user) return null;
  return user.firstName || (user.username ? `@${user.username}` : null);
}

export function getTelegramGreeting(user: TelegramUser | null): string {
  const name = getTelegramDisplayName(user);
  return name ? `Hello, ${name}` : "Telegram user";
}
