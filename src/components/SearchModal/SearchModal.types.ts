import { RefObject } from "react";
import { Product } from "../../types/interface";

export type SearchModalProps = {
  allProducts: Product[];
  recentlyViewed: Product[];
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
  onClearRecent: () => void;
  onViewAll: (query: string) => void;
};

export type SearchResultsProps = {
  products: Product[];
  onSelect: (p: Product) => void;
  onViewAll: (query: string) => void;
  onClose: () => void;
  query: string
  results: Product[]
};

export type SearchRecentProps = {
  products: Product[];
  onClearRecent: () => void;
  onClose: () => void;
};

export type SearchInputProps = {
  query: string;
  setQuery: (v: string) => void;
  inputRef: RefObject<HTMLInputElement>;
  onClose: () => void;
};

export type SearchCardProps = {
  product: Product;
  onClick: () => void;
};
