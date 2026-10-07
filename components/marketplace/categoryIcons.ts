import { Armchair, Home, Laptop, Shirt, Smartphone, Tag, Tv, Watch, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Phones: Smartphone,
  Laptops: Laptop,
  Electronics: Tv,
  Fashion: Shirt,
  Home,
  Furniture: Armchair,
  Accessories: Watch,
};

export function getCategoryIcon(category: string): LucideIcon {
  return icons[category] ?? Tag;
}
