import { StoreGender } from "./types/interface";

export const genderData: Record<
  StoreGender,
  { label: string; description: string }
> = {
  men: {
    label: "Men",
    description:
      "High-quality men's clothing, expertly designed to marry style with comfort. From elegantly tailored office wear to chic casual pieces perfect for a weekend getaway.",
  },
  women: {
    label: "Women",
    description:
      "Beautiful women's clothing crafted with care. Effortlessly elegant pieces that move with you through every moment of your day.",
  },
  unisex: {
    label: "Unisex",
    description:
      "Timeless, gender-free pieces designed for everyone. Clean lines and quality materials that transcend trends.",
  },
};
