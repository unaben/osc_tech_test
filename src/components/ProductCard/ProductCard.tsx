import { formatCurrency } from "../../utils";
import { resolveProductImage } from "../../utils/resolveProductImage";
import type { ProductCardProps } from "./ProductCard.types";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { featuredImage, title, variants } = product;
  const price = variants[0]?.price;
  return (
    <div className={styles["product-card"]} onClick={onClick}>
      <div className={styles["product-card-img"]}>
        <img
          src={resolveProductImage(
            featuredImage.color,
            featuredImage.imageType
          )}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className={styles["product-card-body"]}>
        <div className={styles["product-card-title"]}>{title}</div>
        {price && (
          <div className={styles["product-card-price"]}>
            {formatCurrency(price.amount)}
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
