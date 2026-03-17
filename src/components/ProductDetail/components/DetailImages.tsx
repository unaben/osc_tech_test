import type { Product, ProductImage } from "../../../types/interface";
import styles from "../ProductDetail.module.css";

type DetailImagesProps = {
  product: Product;
  displayImages: ProductImage[];
  imgSrc: (img: ProductImage) => string;
};

const DetailImages = (props: DetailImagesProps) => {
  const { displayImages, imgSrc, product } = props;
  return (
    <div className={styles["detail-images"]}>
      {(displayImages.length > 0 ? displayImages : product.images)
        .slice(0, 4)
        .map((img, i) => (
          <img key={i} src={imgSrc(img)} alt={`${product.title} ${i + 1}`} />
        ))}
      {displayImages.length === 1 && (
        <img
          src={imgSrc(displayImages[0])}
          alt={product.title}
          style={{ opacity: 0.5, filter: "grayscale(0.3)" }}
        />
      )}
    </div>
  );
};

export default DetailImages;
