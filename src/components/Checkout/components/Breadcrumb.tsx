import styles from "../Checkout.module.css";

const Breadcrumb = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className={styles.coBreadcrumb}>
      <button
        className={styles.coBreadcrumbBtn}
        onClick={() => {
          onBack();
        }}
      >
        Cart
      </button>

      <span className={styles.coBreadcrumbSep}>›</span>
      <span className={styles.coBreadcrumbActive}>Information</span>
      <span className={styles.coBreadcrumbSep}>›</span>
      <span>Shipping</span>
      <span className={styles.coBreadcrumbSep}>›</span>
      <span>Payment</span>
    </div>
  );
};

export default Breadcrumb;
