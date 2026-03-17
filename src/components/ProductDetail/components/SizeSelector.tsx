import cn from "classnames";
import type { Product } from "../../../types/interface";
import styles from "../ProductDetail.module.css";

type SizeSelectorProps = {
  sizes: string[];
  selectedColor?: string;
  selectedSize: string | undefined;
  product: Product;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const SizeSelector = (props: SizeSelectorProps) => {
  const { product, selectedColor, selectedSize, setSelectedSize, sizes } =
    props;
  return (
    <>
      <div className={styles["option-label"]}>Size</div>
      <div className={styles["option-group"]}>
        {sizes.map((s) => {
          const v = product.variants.find(
            (vv) => vv.color === selectedColor && vv.size === s
          );
          return (
            <button
              key={s}
              className={cn(styles["size-btn"], {
                [styles["selected"]]: selectedSize === s,
              })}
              disabled={v?.inventoryStatus === "out_of_stock"}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SizeSelector;
