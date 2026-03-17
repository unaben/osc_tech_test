import styles from "../Checkout.module.css";
import { IconPhone } from "../../Icons";

const SaveInfo = () => {
  return (
    <div className={styles.coSection}>
      <div className={styles.coSectionTitle}>
        <p>Save my information for a faster checkout</p>
      </div>

      <div className={styles.coSaveBox}>
        <span >
          <IconPhone />
        </span>

        <div>
          <div className={styles.coSaveLabel}><p>Mobile phone (optional)</p></div>
          <div className={styles.coSaveSub}><p>+44</p></div>
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