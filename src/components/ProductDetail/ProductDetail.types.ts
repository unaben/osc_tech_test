import type { CartItem, Product } from "../../types/interface";


export type ProductDetailsProps = {
  onAddToCart: (item: CartItem) => void;
  allProducts: Product[];
}