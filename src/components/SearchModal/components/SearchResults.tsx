import SearchCard from "./SearchCard";
import { useNavigate } from "react-router-dom";
import type { SearchResultsProps } from "../SearchModal.types";
import styles from "../SearchModal.module.css";

const SearchResults = (props: SearchResultsProps) => {
  const { products, onSelect, onViewAll, onClose, query, results } = props;
  const navigate = useNavigate();
  return (
    <>
      <h2 className={styles.searchSectionLabel}>Products</h2>

      <div className={styles.searchGrid}>
        {products.slice(0, 8).map((p) => (
          <SearchCard
            key={p.id}
            product={p}
            onClick={() => {
              navigate(`/product/${p.id}`);
              onSelect(p);
            }}
          />
        ))}
      </div>
      <div className={styles.queryContent}>
        <button
          onClick={() => {
            onViewAll(query.trim());
            onClose();
            navigate('/search')
          }}
          className={styles.queryButton}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = "#333";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = "var(--text)";
          }}
        >
          View all {results.length} result
          {results.length !== 1 ? "s" : ""}
        </button>
      </div>
    </>
  );
};

export default SearchResults;
