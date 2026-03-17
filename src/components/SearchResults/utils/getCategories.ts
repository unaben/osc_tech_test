import type { Product } from "../../../types/interface";

export const getCategories = (products: Product[]) =>
    Array.from(new Set(products.map((p) => p.category))).sort();