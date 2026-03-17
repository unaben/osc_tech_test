import type {
  ProductVariant,
  ProductStock,
  Product,
} from "../../types/interface";

export const calculateStockMetrics = (
  variants: ProductVariant[]
): ProductStock => {
  const availableStock = variants.reduce((sum, v) => sum + v.stock, 0);
  const totalStockValue = variants.reduce(
    (sum, v) => sum + v.stock * v.price.amount,
    0
  );

  return {
    availableStock,
    inStock: availableStock > 0,
    variantCount: variants.length,
    totalStockValue: Math.round(totalStockValue * 100) / 100,
  };
};

export const attachStockToProduct = (
  raw: Omit<Product, keyof ProductStock>
): Product => ({
  ...raw,
  ...calculateStockMetrics(raw.variants),
});

export const attachStockToProducts = (
  raws: Omit<Product, keyof ProductStock>[]
): Product[] => raws.map(attachStockToProduct);
