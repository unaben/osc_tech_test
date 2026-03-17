import { useCallback } from "react";
import type { Product, CartItem, Variant } from "../../../types/interface";

export type OnAddToCartArgs = {
  variant: Variant;
  canAdd: boolean;
  product: Product;
  selectedSize: string | undefined;
  selectedColor: string;
  qty: number;
  onAddToCart: (item: CartItem) => void;
};

const useHandleOnAddToCart = () => {
  const handleOnAddToCart = useCallback((data: OnAddToCartArgs) => {
    const {
      variant,
      canAdd,
      product,
      selectedSize,
      selectedColor,
      qty,
      onAddToCart,
    } = data;

    if (!variant || !canAdd) return;
    onAddToCart({
      variantId: variant.id,
      productId: product.id,
      title: product.title,
      size: selectedSize,
      color: selectedColor,
      price: variant.price.amount * qty,
      quantity: qty,
      imageType: product.featuredImage.imageType,
      imageColor: selectedColor ?? product.featuredImage.color,
    });
  }, []);

  return handleOnAddToCart;
};

export default useHandleOnAddToCart;
