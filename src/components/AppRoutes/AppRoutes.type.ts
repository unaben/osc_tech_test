import type React from "react";
import type { CartItem, Product } from "../../types/interface";

export interface RouteContext {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products?: Product[];
  handleAddToCart: (item: CartItem) => void
  searchQuery: string;
  navigate: (path: string) => void;
  handleSelectProduct: (product: Product) => void
}