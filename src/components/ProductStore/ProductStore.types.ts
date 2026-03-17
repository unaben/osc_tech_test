import type { CartItem, Product } from "../../types/interface";

export type ProductStoreProps = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: Product[] | undefined;
};
