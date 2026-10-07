/**
 * Product ids travel through Telegram's `startapp` parameter, which only allows
 * A-Z a-z 0-9 _ - (max 512 chars). Ids are also public data and never a credential.
 */
export const PRODUCT_ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

export function isValidProductId(value: unknown): value is string {
  return typeof value === "string" && PRODUCT_ID_PATTERN.test(value);
}
