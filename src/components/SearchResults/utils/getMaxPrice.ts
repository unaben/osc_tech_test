import type { Product } from "../../../types/interface";

export const getMaxPrice = (products: Product[]) =>
  Math.max(...products.map((p) => p.variants[0]?.price.amount ?? 0));
