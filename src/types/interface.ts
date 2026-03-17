type BaseGender = "men" | "women" | "unisex";

export type ProductGender = BaseGender | "kids";

export type ProductInventoryStatus = "in_stock" | "low_stock" | "out_of_stock";

type Color = 'green' | 'olive' | 'ocean' | 'red' | 'clay' | 'purple'

export type Page = "store" | "checkout" | "success";

export type StoreGender = Exclude<ProductGender, "kids">;

export interface ProductImage {
  id: string;
  color: Color;
  imageType: string;
}

export interface ProductPrice {
  amount: number;
  currencyCode: string;
}

export interface ProductVariant {
  id: string;
  size?: string;
  color?: Color;
  stock: number;
  inventoryStatus: ProductInventoryStatus;
  price: ProductPrice;
  compareAtPrice?: ProductPrice;
}

// Computed stock summary, added dynamically to each Product
export interface ProductStock {
  availableStock: number; 
  inStock: boolean;      
  variantCount: number;
  totalStockValue: number;  
}

export interface Product extends ProductStock {
  id: string;
  slug: string;
  title: string;
  description: string;
  gender: ProductGender;
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
  collections: string[];
  createdAt: string;
  featuredImage: ProductImage;
  images: ProductImage[];
  variants: ProductVariant[];
}

export interface ProductsResponse {
  products: Product[];
  total?: number;
}

export interface CartItem {
  variantId: string;
  productId: string;
  title: string;
  size?: string;
  color?: string;
  price: number;
  quantity: number;
  imageType: string;
  imageColor: string;
}

export interface Price {
  amount: number;
  currencyCode: string;
}

export interface Variant {
  id: string;
  size?: string;
  color?: string;
  stock: number;
  inventoryStatus: ProductInventoryStatus;
  price: Price;
  compareAtPrice?: Price;
}

