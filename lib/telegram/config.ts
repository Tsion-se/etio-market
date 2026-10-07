/**
 * Public Telegram configuration. Only non-secret values belong here: anything
 * prefixed NEXT_PUBLIC_ is bundled into the browser. Never add a bot token.
 */
const BOT_USERNAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]{4,31}$/; // Telegram usernames: 5-32 chars
const MINI_APP_SHORT_NAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]{2,31}$/; // BotFather short names: 3-32 chars

export interface TelegramConfig {
  botUsername: string;
  /** Set when the Mini App is a "direct link" app rather than the bot's main Mini App. */
  miniAppShortName?: string;
}

/** Returns null (feature off) when the bot username is missing or malformed. */
export function getTelegramConfig(): TelegramConfig | null {
  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME?.trim().replace(/^@/, "");
  if (!botUsername || !BOT_USERNAME_PATTERN.test(botUsername)) return null;

  const shortName = process.env.NEXT_PUBLIC_TELEGRAM_MINI_APP_SHORT_NAME?.trim();
  return {
    botUsername,
    miniAppShortName: shortName && MINI_APP_SHORT_NAME_PATTERN.test(shortName) ? shortName : undefined,
  };
}
