import { useState, useRef, useEffect } from "react";

import type { Product } from "../../types/interface";
import type { SearchModalProps } from "./SearchModal.types";

import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import SearchRecent from "./components/SearchRecent";
import SearchEmpty from "./components/SearchEmpty";

import { filterProducts, shouldShowRecent, shouldShowResults } from "./utils";

import styles from "./SearchModal.module.css";
import Suggestions from "./components/Suggestions";

const SearchModal = (props: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    allProducts,
    recentlyViewed,
    onClose,
    onClearRecent,
    onSelectProduct,
    onViewAll,
  } = props;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter" && query.trim()) {
        onViewAll(query.trim());
        onClose();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onViewAll, query]);

  const results = filterProducts(query, allProducts);

  // Derive suggestion chips from query (matching tags/categories)
  const suggestions =
    query.trim().length > 0
      ? Array.from(
          new Set(
            allProducts
              .filter((p) =>
                p.tags.some((t) =>
                  t.toLowerCase().includes(query.toLowerCase())
                )
              )
              .flatMap((p) => p.tags)
              .filter((t) => t.toLowerCase().includes(query.toLowerCase()))
          )
        ).slice(0, 5)
      : [];

  const showRecent = query.trim().length === 0 && recentlyViewed.length > 0;
  const showResults = query.trim().length > 0;
  const handleSelect = (p: Product) => {
    onSelectProduct(p);
    onClose();
  };

  return (
    <div className={styles.searchOverlay} onClick={onClose}>
      <div className={styles.searchModal} onClick={(e) => e.stopPropagation()}>
        <SearchInput
          query={query}
          setQuery={setQuery}
          inputRef={inputRef}
          onClose={onClose}
        />

        <div className={styles.searchBody}>
          <Suggestions
            onClose={onClose}
            onViewAll={onViewAll}
            suggestions={suggestions}
          />

          {showRecent && (
            <SearchRecent
              products={recentlyViewed}
              onClearRecent={onClearRecent}
              onClose={onClose}
            />
          )}

          {showResults && results.length > 0 && (
            <SearchResults
              products={results}
              onSelect={handleSelect}
              onViewAll={onViewAll}
              onClose={onClose}
              query={query}
              results={results}
            />
          )}

          {showResults && results.length === 0 && <SearchEmpty query={query} />}

          {!showRecent && !showResults && (
            <div className={styles.searchEmptyState}>
              Start typing to search products.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
