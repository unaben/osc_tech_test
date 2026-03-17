import { formatCurrency } from "../../utils";
import type { CartProps } from "./CartItems.types";
import { getPlaceholderImage } from "../../utils/resolveProductImage";
import { IconCart, IconTrash } from "../Icons";
import CartFooter from "./components/CartFooter";
import styles from "./CartItems.module.css";

const Cart = (props: CartProps) => {
  const { items, onClose, onUpdateQty, onRemove, onCheckout } = props;

  const total = items.reduce((sum, i) => sum + i.price, 0);
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <>
      <div className={styles["cart-overlay"]} onClick={onClose} />
      <div className={styles["cart-panel"]}>
        <div className={styles["cart-header"]}>
          <h2>
            Cart{" "}
            {totalQty > 0 && (
              <span className={styles["cart-count"]}>{totalQty}</span>
            )}
          </h2>
          <button className={styles["cart-close"]} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles["cart-items"]}>
          {items.length === 0 ? (
            <div className={styles["cart-empty"]}>
              <IconCart />
              <p>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div className={styles["cart-item"]} key={item.variantId}>
                <div className={styles["cart-item-img"]}>
                  <img
                    src={getPlaceholderImage(item.imageColor, item.imageType)}
                    alt={item.title}
                  />
                </div>
                <div className={styles["cart-item-info"]}>
                  <div className={styles["cart-item-title"]}>{item.title}</div>
                  <div className={styles["cart-item-meta"]}>
                    {[item.size, item.color]
                      .filter(Boolean)
                      .map((v) => v!.charAt(0).toUpperCase() + v!.slice(1))
                      .join("  ·  ")}
                  </div>
                  <div className={styles["cart-item-controls"]}>
                    <div className={styles["cart-item-qty"]}>
                      <button
                        className={styles["cart-qty-btn"]}
                        onClick={() => onUpdateQty(item.variantId, -1)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className={styles["cart-qty-btn"]}
                        onClick={() => onUpdateQty(item.variantId, 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className={styles["cart-item-price-content"]}>
                      <span className={styles["cart-item-price"]}>
                        {formatCurrency(item.price)}
                      </span>
                      <button
                        className={styles["cart-remove"]}
                        onClick={() => onRemove(item.variantId)}
                      >
                        <IconTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <CartFooter {...{ items, onCheckout, total }} />
      </div>
    </>
  );
};
export default Cart;
