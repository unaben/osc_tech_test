import SearchCard from "./SearchCard";
import { useNavigate } from "react-router-dom";
import type { SearchRecentProps } from "../SearchModal.types";
import styles from "../SearchModal.module.css";

const SearchRecent = ({
  products,
  onClearRecent,
  onClose,
}: SearchRecentProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.searchSectionLabel}>
        Recently viewed
        <button className={styles.searchSectionClear} onClick={onClearRecent}>
          Clear
        </button>
      </div>

      <div className={styles.searchGrid}>
        {products.slice(0, 4).map((p) => (
          <SearchCard
            key={p.id}
            product={p}
            onClick={() => {
              navigate(`/product/${p.id}`);
              onClose();
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SearchRecent;
