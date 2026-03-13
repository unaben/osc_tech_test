import type { ProductVariant, ProductStock, Product } from "../../model/interface";


export const computeProductStock = (variants: ProductVariant[]): ProductStock => {
    const availableStock = variants.reduce((sum, v) => sum + v.stock, 0);
    const totalStockValue = variants.reduce((sum, v) => sum + v.stock * v.price.amount, 0);
  
    return {
      availableStock,
      inStock: availableStock > 0,
      variantCount: variants.length,
      totalStockValue:( Math.round(totalStockValue * 100) / 100),
    };
  };


export const enrichProduct = (
  raw: Omit<Product, keyof ProductStock>
): Product => ({
  ...raw,
  ...computeProductStock(raw.variants),
});


export const enrichProducts = (
  raws: Omit<Product, keyof ProductStock>[]
): Product[] => raws.map(enrichProduct);
