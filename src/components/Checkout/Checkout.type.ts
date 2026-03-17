import type { CartItem } from "../../types/interface";

export type CheckoutProps = {
  items: CartItem[];
  onBack: () => void;
  onSuccess: () => void;
}