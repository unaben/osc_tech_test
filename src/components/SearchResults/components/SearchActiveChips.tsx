import type { SearchActiveChipsProps } from "../SearchResults.types";
import styles from "../SearchResults.module.css";

const SearchActiveChips = (props: SearchActiveChipsProps) => {
  const { filters, setFilters } = props;
  const hasFilters =
    filters.availability.length ||
    filters.categories.length ||
    filters.priceMin ||
    filters.priceMax;

  if (!hasFilters) return null;

  return (
    <div className={styles.srActiveChips}>
      <button
        className={styles.srChipClearAll}
        onClick={() =>
          setFilters({
            availability: [],
            priceMin: "",
            priceMax: "",
            categories: [],
          })
        }
      >
        Clear all
      </button>
    </div>
  );
};

export default SearchActiveChips;
