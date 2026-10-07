export interface Seller {
  id: string;
  name: string;
  /** Path or URL of the avatar image; null falls back to initials. */
  avatar: string | null;
  verified: boolean;
  /** Average rating from 0 to 5. */
  rating: number;
  location: string;
  /** ISO 8601 date string. */
  joinedAt: string;
  /**
   * Public Telegram username WITHOUT the "@" (e.g. "hiwot_mobile_hub").
   * Optional: only set it if the seller agreed to be contacted on Telegram.
   */
  telegramUsername?: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  /** Price in major currency units. */
  price: number;
  /** ISO 4217 currency code, e.g. "ETB". */
  currency: string;
  shortDescription: string;
  description: string;
  images: string[];
  category: string;
  location: string;
  seller: Seller;
  specifications: ProductSpecification[];
  /** ISO 8601 date string. */
  createdAt: string;
}

export interface CategorySummary {
  name: string;
  /** Number of products in this category. */
  count: number;
}