import styles from "../Checkout.module.css";

const ShippingMethod = () => {
  return (
    <div className={styles.coSection}>
      <div className={styles.coSectionTitle}>Shipping method</div>

      <div className={styles.coShippingPlaceholder}>
        Enter your shipping address to view available shipping methods.
      </div>
    </div>
  );
};

export default ShippingMethod;