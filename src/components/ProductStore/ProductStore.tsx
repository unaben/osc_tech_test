import { useNavigate } from "react-router-dom";
import { genderData } from "../../genderData";
import ProductCard from "../ProductCard/ProductCard";
import { useQueryParam } from "../../hook";
import type { StoreGender } from "../../types/interface";
import type { ProductStoreProps } from "./ProductStore.types";
import styles from "./ProductStore.module.css";
import scrollToTop from "../../utils/scrollToTop";

function ProductStore(props: ProductStoreProps) {
  const { products, setCartOpen } = props;

  const navigate = useNavigate();

  const { value: activeGender } =
    useQueryParam<StoreGender>("gender", 'men');

  const genderProducts =
    activeGender === "unisex"
      ? products?.filter((p) => p.gender === "unisex")
      : products?.filter((p) => p.gender === activeGender);

  const meta = genderData[activeGender];

  return (
    <div>
      <div className={styles["page-header"]}>
        <h1>{meta?.label}</h1>
        <p>{meta?.description}</p>
      </div>

      <div className={styles["product-grid"]}>
        {genderProducts?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => {
              navigate(`/product/${product.id}`);
              setCartOpen(false);
              scrollToTop()
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default ProductStore;
