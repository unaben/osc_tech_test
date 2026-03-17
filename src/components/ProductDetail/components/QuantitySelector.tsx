import styles from "../ProductDetail.module.css";

type QuantitySelectorProps = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
};

const QuantitySelector = ({ qty, setQty }: QuantitySelectorProps) => {
  return (
    <div className={styles["qty-row"]}>
      <div className={styles["qty-ctrl"]}>
        <button
          className={styles["qty-btn"]}
          onClick={() => setQty(Math.max(1, qty - 1))}
        >
          −
        </button>

        <span className={styles["qty-num"]}>{qty}</span>

        <button className={styles["qty-btn"]} onClick={() => setQty(qty + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
