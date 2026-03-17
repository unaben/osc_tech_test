import cn from "classnames";
import ProductCard from "../../ProductCard/ProductCard";
import type { SearchBodyProps } from "../SearchResults.types";
import styles from "../SearchResults.module.css";

const SearchBody = (props: SearchBodyProps) => {
  const { products, viewCols, onSelectProduct } = props;
  
  if (!products.length) {
    return (
      <div className={styles.srEmpty}>
        <h3>No results found</h3>
        <p>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className={styles.srBody}>
      <div
        className={cn({
          [styles.srGrid3]: viewCols === 3,
          [styles.srGrid4]: viewCols === 4,
        })}
      >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onClick={() => onSelectProduct(p)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBody;
