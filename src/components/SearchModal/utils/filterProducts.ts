import type { Product } from "../../../types/interface";

export const filterProducts = (query: string, products: Product[]) => {
  const q = query.trim().toLowerCase();

  if (!q) return [];

  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
};
