import styles from "../Checkout.module.css";

const DeliverySection = () => {
  return (
    <div className={styles.coSection}>
      <div className={styles.coSectionTitle}>Delivery</div>

      <div className={`${styles.coFieldRow} ${styles.one} ${styles.marginBt}`}>
        <div className={styles.coSelectWrap}>
          <span className={styles.coSelectLabel}>Country/Region</span>

          <select className={styles.coSelect}>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>France</option>
            <option>Germany</option>
          </select>

          <span className={styles.coSelectCaret}>▾</span>
        </div>
      </div>

      <div className={styles.coFieldRow}>
        <div className={styles.coField}>
          <input
            className={styles.coInput}
            placeholder="First name (optional)"
          />
        </div>

        <div className={styles.coField}>
          <input className={styles.coInput} placeholder="Last name" />
        </div>
      </div>

      <div className={`${styles.coFieldRow} ${styles.one}`}>
        <div className={styles.coField}>
          <input className={styles.coInput} placeholder="Address" />

          <span className={styles.coInputIcon}>
            <svg
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </span>
        </div>
      </div>

      <div className={`${styles.coFieldRow} ${styles.one}`}>
        <div className={styles.coField}>
          <input
            className={styles.coInput}
            placeholder="Apartment, suite, etc. (optional)"
          />
        </div>
      </div>

      <div className={styles.coFieldRow}>
        <div className={styles.coField}>
          <input className={styles.coInput} placeholder="City" />
        </div>

        <div className={styles.coField}>
          <input className={styles.coInput} placeholder="Postcode" />
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;