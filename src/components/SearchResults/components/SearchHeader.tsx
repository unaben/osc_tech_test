import { IconSearch, IconXCircle } from "../../Icons";
import type { SearchHeaderProps } from "../SearchResults.types";
import styles from "../SearchResults.module.css";

const SearchHeader = ({ query, setQuery }: SearchHeaderProps) => {
  return (
    <div className={styles.srHeader}>
      <h1 className={styles.srTitle}>Search results</h1>

      <div className={styles.srSearchBar}>
        <IconSearch />

        <input
          className={styles.srSearchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products…"
        />

        {query && (
          <button className={styles.srClearBtn} onClick={() => setQuery("")}>
            <IconXCircle />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchHeader;
