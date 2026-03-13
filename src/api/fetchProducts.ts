import type { ProductsResponse } from "../model/interface";
import { enrichProducts } from "./utils/enrichProduct";

const PRODUCTS_URL = "/products.json";

export const fetchProducts = async (): Promise<ProductsResponse> => {
  const res = await fetch(PRODUCTS_URL);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch products: ${res.status} ${res.statusText}`
    );
  }

  const json: ProductsResponse = await res.json();
  console.log("fetchProducts json:", json);
  const products = enrichProducts(json.products);
  console.log("fetchProducts products:", products);

  return {
    products,
    total: products.length,
  };
};

export default fetchProducts;
