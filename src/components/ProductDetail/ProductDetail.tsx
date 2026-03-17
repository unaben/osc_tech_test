import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useParams } from "react-router-dom";
import { IconCartAdd } from "../Icons";
import type { ProductDetailsProps } from "./ProductDetail.types";
import {
  uniqueColors,
  sortSizes,
  uniqueSizes,
  findVariant,
  getRelatedProducts,
} from "../../helper";
import { ProductImage } from "../../types/interface";
import { resolveProductImage } from "../../utils/resolveProductImage";
import ColorSelector from "./components/ColorSelector";
import {
  DetailImages,
  SizeSelector,
  RelatedProducts,
} from "./components/index.";
import useGetProduct from "../../hook/useGetProduct";
import QuantitySelector from "./components/QuantitySelector";
import useHandleOnAddToCart, {
  type OnAddToCartArgs,
} from "./hooks/useHandleOnAddToCart";
import styles from "./ProductDetail.module.css";
import { formatCurrency } from "../../utils";
import scrollToTop from "../../utils/scrollToTop";

const ProductDetail = (props: ProductDetailsProps) => {
  const { onAddToCart, allProducts } = props;

  const { id: productId } = useParams();

  const { product } = useGetProduct(productId ?? "");

  const panelRef = useRef<HTMLDivElement>(null);

  const variants = product?.variants ?? [];
  const images = product?.images ?? [];

  const colors = uniqueColors(variants);

  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [qty, setQty] = useState(1);

  const sizes = sortSizes(uniqueSizes(variants, selectedColor));
  const variant = findVariant(variants, selectedColor, selectedSize);

  const handleOnAddToCart = useHandleOnAddToCart();

  const hasSizes = sizes.length > 0;

  const canAdd =
    variant &&
    variant.inventoryStatus !== "out_of_stock" &&
    (!hasSizes || !!selectedSize);

  const displayImages = images.filter(
    (img) => !selectedColor || img.color === selectedColor
  );

  const imgSrc = (img: ProductImage) =>
    resolveProductImage(img.color, img.imageType);

  const onAddToCartArgs = {
    variant,
    canAdd,
    product,
    selectedSize,
    selectedColor,
    qty,
    onAddToCart,
  };

  useEffect(() => {
    if (!product) return;

    const colors = uniqueColors(product.variants);
    setSelectedColor(colors[0]);
    setSelectedSize(undefined);
    setQty(1);

    panelRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  if (!product) return null;

  const relatedProduct = getRelatedProducts(product, allProducts);

  return (
    <div className={styles.container}>
      <div
        className={styles["detail-panel"]}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
      >
        <DetailImages
          product={product}
          displayImages={displayImages}
          imgSrc={imgSrc}
        />

        <RelatedProducts relatedProduct={relatedProduct} />
      </div>
      <div className={styles["detail-body"]}>
        <h2 className={styles["detail-title"]}>{product.title}</h2>
        <div className={styles["detail-price"]}>
          {variant ? formatCurrency(variant.price.amount) : ""}
          {variant?.compareAtPrice && (
            <s>{formatCurrency(variant.compareAtPrice.amount)}</s>
          )}
        </div>
        {variant?.inventoryStatus === "in_stock" && (
          <span className={cn(styles["stock-badge"], styles.in)}>In Stock</span>
        )}
        {variant?.inventoryStatus === "low_stock" && (
          <span className={cn(styles["stock-badge"], styles.low)}>
            Low Stock
          </span>
        )}
        {variant?.inventoryStatus === "out_of_stock" && (
          <span className={cn(styles["stock-badge"], styles.out)}>
            Out of Stock
          </span>
        )}

        <ColorSelector
          colors={colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          setSelectedSize={setSelectedSize}
        />

        {hasSizes && (
          <SizeSelector
            sizes={sizes}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            product={product}
            setSelectedSize={setSelectedSize}
          />
        )}

        <QuantitySelector qty={qty} setQty={setQty} />

        <button
          className={styles["add-btn"]}
          onClick={() => {
            handleOnAddToCart(onAddToCartArgs as OnAddToCartArgs);
            scrollToTop();
          }}
          disabled={!canAdd}
        >
          <IconCartAdd /> Add to cart
        </button>

        <p className={styles["detail-desc"]}>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
