import type { CartItem } from "../../../types/interface";


export const getSubtotal = (items: CartItem[]) =>
  items.reduce((s, i) => s + i.price, 0);

export const getTotalQty = (items: CartItem[]) =>
  items.reduce((s, i) => s + i.quantity, 0);

export const formatVariantMeta = (size?: string, color?: string) =>
  [size, color]
    .filter(Boolean)
    .map((v) => v!.charAt(0).toUpperCase() + v!.slice(1))
    .join(" / ");