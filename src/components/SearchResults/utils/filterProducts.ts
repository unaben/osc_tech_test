import type { Product } from "../../../types/interface";
import type { FilterState } from "../SearchResults.types";

export const filterProducts = (
    products: Product[],
    query: string,
    filters: FilterState
  ) => {
    return products
      .filter((p) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
  
        return (
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
      .filter((p) => {
        if (!filters.availability.length) return true;
  
        const statuses = p.variants.map((v) => v.inventoryStatus);
  
        return filters.availability.some((a) =>
          a === "in_stock"
            ? statuses.some((s) => s === "in_stock" || s === "low_stock")
            : statuses.some((s) => s === "out_of_stock")
        );
      })
      .filter((p) => {
        const price = p.variants[0]?.price.amount ?? 0;
        const min = parseFloat(filters.priceMin) || 0;
        const max = parseFloat(filters.priceMax) || Infinity;
  
        return price >= min && price <= max;
      })
      .filter((p) => {
        if (!filters.categories.length) return true;
        return filters.categories.includes(p.category);
      });
  };