import styles from "../Checkout.module.css";

const ExpressCheckout = () => {
  return (
    <div className={styles.coExpress}>
      <div className={styles.coExpressLabel}>Express checkout</div>

      <div className={styles.coExpressBtns}>
        <button className={styles.coExpressShop}>shop</button>

        <button className={styles.coExpressGpay}>
          <span
          className={styles.coExpressGpaySpan}
          >
            G
          </span>{" "}
          Pay
        </button>
      </div>

      <div className={(styles.coOr)}>
        <hr />
        <span>OR</span>
        <hr />
      </div>
    </div>
  );
};

export default ExpressCheckout;