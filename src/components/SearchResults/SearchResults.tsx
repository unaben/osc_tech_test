import { useState, useEffect } from "react";
import SearchActiveChips from "./components/SearchActiveChips";
import SearchBody from "./components/SearchBody";
import SearchFilterBar from "./components/SearchFilterBar";
import SearchHeader from "./components/SearchHeader";
import type {
  FilterState,
  SearchResultsProps,
  SortOption,
} from "./SearchResults.types";
import {
  sortProducts,
  filterProducts,
  getCategories,
  getMaxPrice,
} from "./utils";
import styles from "./SearchResults.module.css";

const SearchResults = (props: SearchResultsProps) => {
  const { initialQuery, allProducts, onSelectProduct } = props;

  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortOption>("relevance");
  const [viewCols, setViewCols] = useState<3 | 4>(3);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    availability: [],
    priceMin: "",
    priceMax: "",
    categories: [],
  });

  useEffect(() => {
    const handler = () => setOpenDrop(null);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const filtered = sortProducts(
    filterProducts(allProducts, query, filters),
    sort
  );

  const categories = getCategories(allProducts);
  const maxPrice = getMaxPrice(allProducts);

  return (
    <div className={styles.srPage}>
      <SearchHeader query={query} setQuery={setQuery} />

      <SearchFilterBar
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        maxPrice={maxPrice}
        openDrop={openDrop}
        setOpenDrop={setOpenDrop}
        sort={sort}
        setSort={setSort}
        viewCols={viewCols}
        setViewCols={setViewCols}
        resultsCount={filtered.length}
      />

      <SearchActiveChips filters={filters} setFilters={setFilters} />

      <SearchBody
        products={filtered}
        viewCols={viewCols}
        onSelectProduct={onSelectProduct}
      />
    </div>
  );
};

export default SearchResults;
