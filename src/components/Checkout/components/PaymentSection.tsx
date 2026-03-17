import cn from 'classnames'
import { IconLock, IconInfo } from "../../Icons";
import styles from "../Checkout.module.css";


const PaymentSection = () => {
  return (
    <div className={styles.coSection}>
      <div className={styles.coSectionTitle}>Payment</div>

      <div
       className={styles.coIconLockContent}
      >
        <IconLock /> All transactions are secure and encrypted.
      </div>

      <div className={styles.coPaymentHeader}>
        <span className={styles.coPaymentLabel}>Credit card</span>

        <div className={styles.coCardIcons}>
          <div className={cn(styles.coCardIcon, styles.visa)}>VISA</div>

          <div className={cn(styles.coCardIcon, styles.mc)}>
            <svg width="32" height="20" viewBox="0 0 32 20">
              <circle cx="12" cy="10" r="9" fill="#eb001b" opacity="0.9" />
              <circle cx="20" cy="10" r="9" fill="#f79e1b" opacity="0.9" />
              <ellipse cx="16" cy="10" rx="4" ry="8" fill="#ff5f00" opacity="0.85" />
            </svg>
          </div>

          <div className={cn(styles.coCardIcon, styles.amex)}>AMEX</div>

          <div className={cn(styles.coCardIcon, styles.more)}>+4</div>
        </div>
      </div>

      <div className={styles.coCardGroup}>
        <div className={styles.coField}>
          <input className={styles.coInput} placeholder="Card number" />
          <span className={styles.coInputIcon}>
            <IconLock />
          </span>
        </div>

        <div className={styles.coCardGroupRow}>
          <input
            className={styles.coInput}
            placeholder="Expiration date (MM / YY)"
          />

          <div className={cn(styles.coField, styles.relativePosition)} >
            <input className={styles.coInput} placeholder="Security code" />
            <span className={styles.coInputIcon}>
              <IconInfo />
            </span>
          </div>
        </div>

        <input
          className={cn(styles.coInput, styles.bRadius)}
          placeholder="Name on card"
        />
      </div>

      <label className={styles.coCheckboxRow}>
        <span className={cn(styles.coCheckBox, styles.checked)}>
          <svg width="10" height="8" fill="none" viewBox="0 0 10 8">
            <path
              d="M1 4l3 3 5-6"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        Use shipping address as billing address
      </label>
    </div>
  );
};

export default PaymentSection;