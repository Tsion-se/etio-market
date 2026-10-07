import type { Product } from "@/types/product";
import { sellers } from "./sellers";

type ProductSeed = Omit<Product, "currency" | "images"> & {
  imageCount?: number;
  /** Optional: this product's own photos, as file names without ".png" in /public/images. Overrides the category photos. */
  imageNames?: string[];
};

/** Placeholder photos are named `<category>-<n>.png` in /public/images. */
function photos(category: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/${category.toLowerCase()}-${i + 1}.png`);
}

const seeds: ProductSeed[] = [
  {
    id: "iphone-13-128gb", name: "iPhone 13 128GB", price: 62000, category: "Phones", location: "Addis Ababa",
    shortDescription: "Midnight black, 89% battery health, with original box.",
    description: "A clean iPhone 13 that has always been used with a case and screen protector. Face ID and both cameras work perfectly. Comes with the original box and a new charging cable.",
    seller: sellers["seller-4"], imageCount: 3, imageNames: ["phones-1"], createdAt: "2026-10-03T10:00:00Z",
    specifications: [{ label: "Storage", value: "128 GB" }, { label: "Battery health", value: "89%" }, { label: "Condition", value: "Used – excellent" }],
  },
  {
    id: "samsung-galaxy-a54", name: "Samsung Galaxy A54 5G", price: 38500, category: "Phones", location: "Dire Dawa",
    shortDescription: "8GB RAM, 256GB storage, brand new and sealed.",
    description: "Brand new Samsung Galaxy A54 5G in the original sealed box with a one-year seller warranty. A bright 120Hz AMOLED display and a reliable 50MP main camera.",
    seller: sellers["seller-1"], imageCount: 2, imageNames: ["phones-2"], createdAt: "2026-09-29T08:30:00Z",
    specifications: [{ label: "RAM / Storage", value: "8 GB / 256 GB" }, { label: "Display", value: "6.4\" AMOLED, 120Hz" }, { label: "Condition", value: "New" }],
  },
  {
    id: "tecno-camon-20", name: "Tecno Camon 20 Pro", price: 14500, category: "Phones", location: "Adama",
    shortDescription: "Dual SIM phone with a 64MP camera and fast charging.",
    description: "Tecno Camon 20 Pro used for four months. No scratches, original charger included. A good choice for photos at a modest price.",
    seller: sellers["seller-3"], imageCount: 2, imageNames: ["phones-3"], createdAt: "2026-09-18T12:00:00Z",
    specifications: [{ label: "RAM / Storage", value: "8 GB / 256 GB" }, { label: "Camera", value: "64 MP" }, { label: "Condition", value: "Used – like new" }],
  },
  {
    id: "infinix-hot-30", name: "Infinix Hot 30", price: 11800, category: "Phones", location: "Hawassa",
    shortDescription: "Budget phone with a 5000mAh battery that lasts two days.",
    description: "New Infinix Hot 30 with a large 6.78 inch display and a 5000mAh battery. Includes charger, case and a screen protector already fitted.",
    seller: sellers["seller-5"], imageCount: 1, imageNames: ["phones-4"], createdAt: "2026-10-02T15:45:00Z",
    specifications: [{ label: "RAM / Storage", value: "4 GB / 128 GB" }, { label: "Battery", value: "5000 mAh" }, { label: "Condition", value: "New" }],
  },
  {
    id: "macbook-air-m1", name: "MacBook Air M1 13-inch", price: 98000, category: "Laptops", location: "Addis Ababa",
    shortDescription: "8GB RAM, 256GB SSD, 112 battery cycles.",
    description: "MacBook Air with the M1 chip in silver. Used lightly for university work and kept in a sleeve. No dents, and the keyboard and trackpad are in perfect condition. Charger included.",
    seller: sellers["seller-4"], imageCount: 3, imageNames: ["laptops-1"], createdAt: "2026-09-25T09:20:00Z",
    specifications: [{ label: "Processor", value: "Apple M1" }, { label: "RAM / Storage", value: "8 GB / 256 GB" }, { label: "Condition", value: "Used – excellent" }],
  },
  {
    id: "dell-latitude-7490", name: "Dell Latitude 7490", price: 36000, category: "Laptops", location: "Dire Dawa",
    shortDescription: "Business laptop, Core i5, 16GB RAM, backlit keyboard.",
    description: "Reliable ex-office Dell Latitude with a new SSD and fresh Windows install. Great for office work, study and browsing. Battery lasts about four hours.",
    seller: sellers["seller-1"], imageCount: 2, imageNames: ["laptops-2"], createdAt: "2026-09-12T11:10:00Z",
    specifications: [{ label: "Processor", value: "Intel Core i5 8th gen" }, { label: "RAM / Storage", value: "16 GB / 512 GB SSD" }, { label: "Condition", value: "Refurbished" }],
  },
  {
    id: "hp-pavilion-15", name: "HP Pavilion 15", price: 52000, category: "Laptops", location: "Hawassa",
    shortDescription: "Ryzen 5 laptop with a 15.6 inch full HD display.",
    description: "HP Pavilion 15 with a Ryzen 5 processor and a full HD screen. Bought last year and used for programming classes. Comes with the original charger and a laptop bag.",
    seller: sellers["seller-5"], imageCount: 2, imageNames: ["laptops-3"], createdAt: "2026-09-30T13:00:00Z",
    specifications: [{ label: "Processor", value: "AMD Ryzen 5" }, { label: "RAM / Storage", value: "16 GB / 512 GB SSD" }, { label: "Condition", value: "Used – good" }],
  },
  {
    id: "wireless-headphones", name: "Wireless Noise-Cancelling Headphones", price: 8500, category: "Electronics", location: "Dire Dawa",
    shortDescription: "Over-ear headphones with 30-hour battery life.",
    description: "Comfortable over-ear headphones with active noise cancellation, Bluetooth 5.3 and a foldable design. Includes a carrying case and charging cable.",
    seller: sellers["seller-1"], imageCount: 2, imageNames: ["electronics-1"], createdAt: "2026-09-20T09:00:00Z",
    specifications: [{ label: "Battery life", value: "30 hours" }, { label: "Connectivity", value: "Bluetooth 5.3" }, { label: "Condition", value: "New" }],
  },
  {
    id: "jbl-flip-6", name: "JBL Flip 6 Bluetooth Speaker", price: 7800, category: "Electronics", location: "Addis Ababa",
    shortDescription: "Portable waterproof speaker with deep bass.",
    description: "Original JBL Flip 6 in black. Waterproof and dustproof, with up to 12 hours of playtime. Sold with the box and USB-C cable.",
    seller: sellers["seller-4"], imageCount: 2, imageNames: ["electronics-2"], createdAt: "2026-09-22T17:00:00Z",
    specifications: [{ label: "Playtime", value: "12 hours" }, { label: "Water resistance", value: "IP67" }, { label: "Condition", value: "New" }],
  },
  {
    id: "smart-tv-43", name: "43-inch 4K Smart TV", price: 31500, category: "Electronics", location: "Adama",
    shortDescription: "4K Android TV with built-in streaming apps.",
    description: "A 43 inch 4K television with Android TV, voice remote and three HDMI ports. Wall mount not included. Delivery available within Adama.",
    seller: sellers["seller-3"], imageCount: 2, imageNames: ["electronics-3"], createdAt: "2026-09-08T10:30:00Z",
    specifications: [{ label: "Screen size", value: "43 inch" }, { label: "Resolution", value: "4K UHD" }, { label: "Condition", value: "New" }],
  },
  {
    id: "leather-jacket", name: "Genuine Leather Jacket", price: 4800, category: "Fashion", location: "Addis Ababa",
    shortDescription: "Handmade men's jacket in soft black leather.",
    description: "A handmade jacket cut from soft genuine leather with a quilted lining and two inside pockets. Available in sizes M to XL. Message the seller to confirm your size.",
    seller: sellers["seller-6"], imageCount: 3, imageNames: ["fashion-1"], createdAt: "2026-09-27T14:15:00Z",
    specifications: [{ label: "Material", value: "Genuine leather" }, { label: "Sizes", value: "M, L, XL" }, { label: "Condition", value: "New" }],
  },
  {
    id: "running-sneakers", name: "Lightweight Running Sneakers", price: 3600, category: "Fashion", location: "Dire Dawa",
    shortDescription: "Breathable mesh sneakers for daily runs.",
    description: "Comfortable running sneakers with a cushioned sole and breathable mesh upper. Worn only a few times. Size EU 43.",
    seller: sellers["seller-1"], imageCount: 2, imageNames: ["fashion-2"], createdAt: "2026-09-15T07:50:00Z",
    specifications: [{ label: "Size", value: "EU 43" }, { label: "Colour", value: "Grey / Indigo" }, { label: "Condition", value: "Used – like new" }],
  },
  {
    id: "habesha-kemis", name: "Handwoven Habesha Kemis", price: 6500, category: "Fashion", location: "Addis Ababa",
    shortDescription: "Cotton dress with traditional tibeb embroidery.",
    description: "A handwoven cotton habesha kemis with hand-stitched tibeb embroidery along the hem and sleeves. Made by a family workshop in Addis Ababa. Ideal for holidays and weddings.",
    seller: sellers["seller-6"], imageCount: 3, imageNames: ["fashion-3"], createdAt: "2026-10-04T09:00:00Z",
    specifications: [{ label: "Material", value: "Handwoven cotton" }, { label: "Sizes", value: "S, M, L" }, { label: "Condition", value: "New" }],
  },
  {
    id: "cookware-set", name: "10-Piece Non-Stick Cookware Set", price: 3900, category: "Home", location: "Hawassa",
    shortDescription: "Pots, pans and lids with a durable non-stick coating.",
    description: "A full 10 piece set including three pots with lids, two frying pans and cooking utensils. Works on gas and electric stoves.",
    seller: sellers["seller-5"], imageCount: 2, imageNames: ["home-1"], createdAt: "2026-09-10T16:00:00Z",
    specifications: [{ label: "Pieces", value: "10" }, { label: "Material", value: "Aluminium, non-stick" }, { label: "Condition", value: "New" }],
  },
  {
    id: "oak-desk-lamp", name: "Solid Oak Desk Lamp", price: 2400, category: "Home", location: "Addis Ababa",
    shortDescription: "Handmade lamp with a warm, dimmable light.",
    description: "A handmade desk lamp with a solid oak base and an adjustable arm. Ships with a dimmable warm-white LED bulb.",
    seller: sellers["seller-2"], imageCount: 2, imageNames: ["home-2"], createdAt: "2026-09-28T14:30:00Z",
    specifications: [{ label: "Material", value: "Oak, steel" }, { label: "Height", value: "45 cm" }, { label: "Condition", value: "New" }],
  },
  {
    id: "three-seater-sofa", name: "Three-Seater Fabric Sofa", price: 24500, category: "Furniture", location: "Addis Ababa",
    shortDescription: "Comfortable grey sofa with a solid wood frame.",
    description: "A three seater sofa upholstered in durable grey fabric with a hardwood frame and high-density foam cushions. Made to order in our workshop, ready within five days.",
    seller: sellers["seller-2"], imageCount: 3, imageNames: ["furniture-1"], createdAt: "2026-10-01T11:00:00Z",
    specifications: [{ label: "Dimensions", value: "200 × 90 × 85 cm" }, { label: "Frame", value: "Solid hardwood" }, { label: "Condition", value: "New" }],
  },
  {
    id: "dining-table-six", name: "Dining Table with 6 Chairs", price: 18000, category: "Furniture", location: "Adama",
    shortDescription: "Wooden dining set that seats six people.",
    description: "A sturdy wooden dining table with six padded chairs. Used for one year in a smoke-free home. Small mark on one table corner, shown in the photos.",
    seller: sellers["seller-3"], imageCount: 2, imageNames: ["furniture-2"], createdAt: "2026-09-05T08:00:00Z",
    specifications: [{ label: "Seats", value: "6" }, { label: "Table size", value: "160 × 90 cm" }, { label: "Condition", value: "Used – good" }],
  },
  {
    id: "trail-backpack", name: "35L Trail Backpack", price: 3200, category: "Accessories", location: "Adama",
    shortDescription: "Lightweight, water-resistant daypack.",
    description: "A 35 litre backpack with padded straps, a hydration sleeve and a rain cover. Used twice, in excellent condition.",
    seller: sellers["seller-3"], imageCount: 2, imageNames: ["accessories-1"], createdAt: "2026-10-01T08:15:00Z",
    specifications: [{ label: "Capacity", value: "35 L" }, { label: "Weight", value: "900 g" }, { label: "Condition", value: "Like new" }],
  },
  {
    id: "smartwatch-fitness", name: "Fitness Smartwatch", price: 5200, category: "Accessories", location: "Dire Dawa",
    shortDescription: "Tracks heart rate, sleep and steps for up to 10 days.",
    description: "A smartwatch with heart rate and sleep tracking, call notifications and a 10 day battery. Works with Android and iOS. Two straps included.",
    seller: sellers["seller-1"], imageCount: 2, imageNames: ["accessories-2"], createdAt: "2026-09-26T12:40:00Z",
    specifications: [{ label: "Battery", value: "Up to 10 days" }, { label: "Water resistance", value: "5 ATM" }, { label: "Condition", value: "New" }],
  },
  {
    id: "polarized-sunglasses", name: "Polarized Sunglasses", price: 1800, category: "Accessories", location: "Hawassa",
    shortDescription: "UV400 lenses in a lightweight metal frame.",
    description: "Polarized sunglasses with UV400 protection and a lightweight metal frame. Comes with a hard case and cleaning cloth.",
    seller: sellers["seller-5"], imageCount: 1, imageNames: ["accessories-3"], createdAt: "2026-09-02T10:10:00Z",
    specifications: [{ label: "Lens", value: "Polarized, UV400" }, { label: "Frame", value: "Metal" }, { label: "Condition", value: "New" }],
  },
];

export const products: Product[] = seeds.map(({ imageCount = 1, imageNames, ...seed }) => ({
  ...seed,
  currency: "ETB",
  images: imageNames ? imageNames.map((name) => `/images/${name}.png`) : photos(seed.category, imageCount),
}));
