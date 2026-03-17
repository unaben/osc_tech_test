import styles from "../Checkout.module.css";
import { IconPhone } from "../../Icons";

const SaveInfo = () => {
  return (
    <div className={styles.coSection}>
      <div className={styles.coSectionTitle}>
        Save my information for a faster checkout
      </div>

      <div className={styles.coSaveBox}>
        <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>
          <IconPhone />
        </span>

        <div>
          <div className={styles.coSaveLabel}>Mobile phone (optional)</div>
          <div className={styles.coSaveSub}>+44</div>
        </div>
      </div>

      <p className={styles.coLegal}>
        By providing your phone number, you agree to create a Shop account
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        subject to Shop's <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default SaveInfo;