import { Product } from "../types/interface";

/**
 * getRelatedProducts — scores every product against the current one, returns top N.
 * Scoring: same category +3 | same gender +2 | shared tag +2 each | shared collection +1 each
 */
export const getRelatedProducts = (
  product: Product,
  all: Product[],
  limit = 4
): Product[] => {
  return all
    .filter((p) => p.id !== product.id)
    .map((p) => {
      let score = 0;
      if (p.category === product.category) score += 3;
      if (p.gender === product.gender) score += 2;
      product.tags.forEach((t) => {
        if (p.tags.includes(t)) score += 2;
      });
      product.collections.forEach((c) => {
        if (p.collections.includes(c)) score += 1;
      });
      return { p, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ p }) => p);
};
