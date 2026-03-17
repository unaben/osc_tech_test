import React, { useCallback, useMemo } from "react";
import type { CartItem } from "../types/interface";

const useProductStore = (
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>,
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const handleAddToCart = useCallback(
    (item: CartItem) => {
      setCartItems((prev) => {
        const existing = prev.find((i) => i.variantId === item.variantId);
        if (existing) {
          return prev.map((i) =>
            i.variantId === item.variantId
              ? {
                  ...i,
                  quantity: i.quantity + item.quantity,
                  price: i.price + item.price,
                }
              : i
          );
        }
        return [...prev, item];
      });
      setCartOpen(true);
    },
    [setCartItems, setCartOpen]
  );

  const handleUpdateQty = useCallback(
    (variantId: string, delta: number) => {
      setCartItems((prev) =>
        prev
          .map((i) =>
            i.variantId === variantId
              ? {
                  ...i,
                  quantity: i.quantity + delta,
                  price: (i.price / i.quantity) * (i.quantity + delta),
                }
              : i
          )
          .filter((i) => i.quantity > 0)
      );
    },
    [setCartItems]
  );

  const handleRemove = useCallback(
    (variantId: string) => {
      setCartItems((prev) => prev.filter((i) => i.variantId !== variantId));
    },
    [setCartItems]
  );
  return useMemo(
    () => ({
      handleAddToCart,
      handleRemove,
      handleUpdateQty,
      setCartOpen,
    }),
    [
      handleAddToCart,
      handleRemove,
      handleUpdateQty,
      setCartOpen,
    ]
  );
};

export default useProductStore;
