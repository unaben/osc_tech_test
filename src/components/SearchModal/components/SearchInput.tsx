import { IconSearch } from "../../Icons";
import { SearchInputProps } from "../SearchModal.types";
import styles from "../SearchModal.module.css";

const SearchInput = (props: SearchInputProps) => {
  const { query, setQuery, inputRef, onClose } = props;
  return (
    <div className={styles.searchInputRow}>
      <span className={styles.searchInputIcon}>
        <IconSearch />
      </span>

      <input
        ref={inputRef}
        className={styles.searchInput}
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button
        className={styles.searchDismissBtn}
          onClick={() => setQuery("")}
          style={{ fontSize: "0.8rem", marginRight: "0.25rem" }}
        >
          Clear
        </button>
      )}

      <button className={styles.searchDismissBtn} onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default SearchInput;
