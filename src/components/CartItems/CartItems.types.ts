import type { CartItem } from "../../types/interface";

export type CartProps = {
    items: CartItem[];
    onClose: () => void;
    onUpdateQty: (variantId: string, delta: number) => void;
    onRemove: (variantId: string) => void;
    onCheckout: () => void;
  }