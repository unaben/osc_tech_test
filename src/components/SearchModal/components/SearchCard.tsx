

import { resolveProductImage } from "../../../utils/resolveProductImage";
import type { SearchCardProps } from "../SearchModal.types";
import styles from "../SearchModal.module.css";
import { formatCurrency } from "../../../utils";



const SearchCard = ({ product, onClick }: SearchCardProps) => {
  const price = product.variants[0]?.price;

  return (
    <div className={styles.searchCard} onClick={onClick}>
      <div className={styles.searchCardImg}>
        <img
          src={resolveProductImage(
            product.featuredImage.color,
            product.featuredImage.imageType
          )}
          alt={product.title}
          loading="lazy"
        />
      </div>

      <div className={styles.searchCardBody}>
        <div className={styles.searchCardName}>{product.title}</div>

        {price && (
          <div className={styles.searchCardPrice}>
            {formatCurrency(price.amount)}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCard;
