import type { ProductsResponse } from "../types/interface";
import { attachStockToProducts } from "./utils/productStock";

const PRODUCTS_URL = "/products.json";

export const fetchProducts = async (): Promise<ProductsResponse> => {
  const res = await fetch(PRODUCTS_URL);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch products: ${res.status} ${res.statusText}`
    );
  }

  const json: ProductsResponse = await res.json();
  const products = attachStockToProducts(json.products);

  return {
    products,
    total: products.length,
  };
};

export default fetchProducts;
