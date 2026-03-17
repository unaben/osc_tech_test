import type { Product } from "../types/interface";
import fetchProducts from "./fetchProducts";

export const fetchProduct = async (productId: string): Promise<Product> => {
  const data = await fetchProducts();
  const product = data.products.find((prod) => prod.id === productId);
  if (!product) {
    throw new Error(`Product not found: ${productId}`);
  }
  return product;
};

export default fetchProduct;
