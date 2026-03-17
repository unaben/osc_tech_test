import cn from "classnames";
import { formatCurrency } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../types/interface";
import styles from "../CartItems.module.css";

type CartFooterProps = {
  total: number;
  onCheckout: () => void;
  items: CartItem[];
};

const CartFooter = (props: CartFooterProps) => {
  const { items, onCheckout, total } = props;
  const navigate = useNavigate();
  return (
    <div className={styles["cart-footer"]}>
      <div className={styles["cart-discount"]}>
        <span>Discount</span>
        <span className={styles.plusSize}>+</span>
      </div>
      <div className={styles["cart-total"]}>
        <span className={styles["cart-total-label"]}>Estimated total</span>
        <span className={styles["cart-total-amount"]}>
          {formatCurrency(total)} GBP
        </span>
      </div>
      <div className={styles["cart-tax-note"]}>
        Taxes and <strong>shipping</strong> calculated at checkout.
      </div>
      <button
        className={styles["checkout-btn"]}
        onClick={() => {
          navigate("/checkout");
          onCheckout();
        }}
        disabled={items.length === 0}
      >
        Check out
      </button>
      <div className={styles["payment-btns"]}>
        <button className={cn(styles["pay-btn"], styles.shop)}>shop</button>
        <button className={cn(styles["pay-btn"], styles.gpay)}>
          <span className={styles["pay-btn-gpay-span"]}>G</span> Pay
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
