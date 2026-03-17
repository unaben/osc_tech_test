import { formatCurrency } from "../../../utils";
import type { CartItem } from "../../../types/interface";
import { IconInfo } from "../../Icons";
import SummaryItem from "./SummaryItem";
import styles from "../Checkout.module.css";

type OrderSummaryProps = {
  items: CartItem[];
  subtotal: number;
  totalQty: number;
};

const OrderSummary = (props: OrderSummaryProps) => {
  const { items, subtotal, totalQty } = props;
  
  return (
    <div className={styles.coRight}>
      <div>
        {items.map((item) => (
          <SummaryItem key={item.variantId} item={item} />
        ))}
      </div>

      <div className={styles.coGiftRow}>
        <input className={styles.coGiftInput} placeholder="Gift card" />
        <button className={styles.coGiftBtn}>Apply</button>
      </div>

      <div className={styles.coTotals}>
        <div className={styles.coTotalRow}>
          <span className={styles.coTotalLbl}>
            Subtotal · {totalQty} item{totalQty !== 1 ? "s" : ""}
          </span>
          <span className={styles.coTotalVal}>{formatCurrency(subtotal)}</span>
        </div>

        <div className={styles.coTotalRow}>
          <span className={styles.coTotalLbl}>
            Shipping <IconInfo />
          </span>
          <span className={styles.coShipNote}>Enter shipping address</span>
        </div>

        <div className={`${styles.coTotalRow} ${styles.final}`}>
          <span className={styles.coTotalLbl}>Total</span>
          <span className={styles.coTotalVal}>
            <span className={styles.coCur}>GBP</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
