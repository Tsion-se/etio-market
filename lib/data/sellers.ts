import type { Seller } from "@/types/product";

export const sellers: Record<string, Seller> = {
  "seller-1": { id: "seller-1", name: "Abel Tesfaye", avatar: null, verified: true, rating: 4.8, location: "Dire Dawa", joinedAt: "2023-03-12", telegramUsername: "@kirub_mel" },
  "seller-2": { id: "seller-2", name: "Selam Home & Living", avatar: null, verified: true, rating: 4.6, location: "Addis Ababa", joinedAt: "2022-09-01", telegramUsername: "@Kiyu1y" },
  "seller-3": { id: "seller-3", name: "Dawit Bekele", avatar: null, verified: false, rating: 4.2, location: "Adama", joinedAt: "2024-06-20",telegramUsername: "@Kiyu1y" },
  "seller-4": { id: "seller-4", name: "Hiwot Mobile Hub", avatar: null, verified: true, rating: 4.9, location: "Addis Ababa", joinedAt: "2021-11-05", telegramUsername: "@Munit04" },
  "seller-5": { id: "seller-5", name: "Nebiyu Computers", avatar: null, verified: true, rating: 4.7, location: "Hawassa", joinedAt: "2022-04-18", telegramUsername: "@Munit04" },
  "seller-6": { id: "seller-6", name: "Meron Fashion House", avatar: null, verified: false, rating: 4.4, location: "Addis Ababa", joinedAt: "2024-01-09",telegramUsername: "@kirub_mel" },
};