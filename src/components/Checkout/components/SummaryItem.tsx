import type { CartItem } from "../../../types/interface";
import { formatCurrency } from "../../../utils";
import { formatVariantMeta } from "../utils/checkoutUtils";
import { resolveProductImage } from "../../../utils/resolveProductImage";
import styles from "../Checkout.module.css";

const SummaryItem = ({ item }: { item: CartItem }) => {
  return (
    <div className={styles.coSumItem}>
      <div className={styles.coSumImgWrap}>
        <img
          className={styles.coSumImg}
          src={resolveProductImage(item.imageColor, item.imageType)}
          alt={item.title}
        />
        <span className={styles.coSumBadge}>{item.quantity}</span>
      </div>

      <div className={styles.coSumInfo}>
        <div className={styles.coSumTitle}>{item.title}</div>

        <div className={styles.coSumMeta}>
          <p>{formatVariantMeta(item.size, item.color)}</p>
        </div>
      </div>

      <div className={styles.coSumPrice}>{formatCurrency(item.price)}</div>
    </div>
  );
};

export default SummaryItem;
