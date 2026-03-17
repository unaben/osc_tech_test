import type { Product } from "../../../types/interface";
import type { SortOption } from "../SearchResults.types";

export const sortProducts = (products: Product[], sort: SortOption) => {
    return [...products].sort((a, b) => {
      const pa = a.variants[0]?.price.amount ?? 0;
      const pb = b.variants[0]?.price.amount ?? 0;
  
      if (sort === "price-asc") return pa - pb;
      if (sort === "price-desc") return pb - pa;
  
      if (sort === "newest") {
        return (
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
        );
      }
  
      return 0;
    });
  };