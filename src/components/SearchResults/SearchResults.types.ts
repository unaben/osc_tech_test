import type { Product, ProductInventoryStatus } from "../../types/interface";

export type SortOption = "relevance" | "price-asc" | "price-desc" | "newest";

export type FilterState = {
  availability: Array<ProductInventoryStatus>;
  priceMin: string;
  priceMax: string;
  categories: string[];
};

export const SORT_LABELS: Record<SortOption, string> = {
  relevance: "Relevance",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  newest: "Newest",
};

export type SearchResultsProps = {
  initialQuery: string;
  allProducts: Product[];
  onBack: () => void;
  onSelectProduct: (p: Product) => void;
}

export type SearchFilterBarProps = {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  categories: string[];
  maxPrice: number;

  openDrop: string | null;
  setOpenDrop: (v: string | null) => void;

  sort: SortOption;
  setSort: (v: SortOption) => void;

  viewCols: 3 | 4;
  setViewCols: (v: 3 | 4) => void;

  resultsCount: number;
};

export type SearchActiveChipsProps = {
  filters: FilterState;
  setFilters: (f: FilterState) => void;
}

export type SearchHeaderProps = {
  query: string;
  setQuery: (v: string) => void;
}

export type SearchBodyProps = {
  products: Product[];
  viewCols: 3 | 4;
  onSelectProduct: (p: Product) => void;
}