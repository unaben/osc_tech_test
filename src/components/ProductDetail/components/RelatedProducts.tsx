import { useNavigate } from "react-router-dom";
import type { Product } from "../../../types/interface";
import { formatCurrency } from "../../../utils";
import { resolveProductImage } from "../../../utils/resolveProductImage";
import styles from "../ProductDetail.module.css";

type RelatedProductsProps = {
  relatedProduct: Product[];
};

const RelatedProducts = (props: RelatedProductsProps) => {
  const { relatedProduct } = props;
  const navigate = useNavigate();

  if (!relatedProduct.length) {
    return null;
  }
  return (
    <div className={styles["related-section"]}>
      <div className={styles["related-title"]}>You may also like</div>
      <ul className={styles["related-grid"]}>
        {relatedProduct.map((p) => {
          const price = p.variants[0]?.price;
          return (
            <li
              key={p.id}
              className={styles["related-card"]}
              onClick={() => navigate(`/product/${p.id}`)}
            >
              <div className={styles["related-card-img"]}>
                <img
                  src={resolveProductImage(
                    p.featuredImage.color,
                    p.featuredImage.imageType
                  )}
                  alt={p.title}
                  loading="lazy"
                />
              </div>
              <div className={styles["related-card-body"]}>
                <div className={styles["related-card-title"]}>{p.title}</div>
                {price && (
                  <div className={styles["related-card-price"]}>
                    <p>{formatCurrency(price.amount)}</p>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedProducts;
