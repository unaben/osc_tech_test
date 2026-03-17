import styles from "../Checkout.module.css";

const ContactSection = () => {
  return (
    <div className={styles.coSection}>
      <div className={styles.coContactRow}>
        <span className={styles.coContactAvatar}>U</span>

        <input
          className={styles.coContactEmail}
          type="email"
          defaultValue="email@example.com"
        />

        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
          className={styles.svg}
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </div>

      <label className={styles.coCheckboxRow}>
        <span className={`${styles.coCheckBox} ${styles.unchecked}`} />
        Email me with news and offers
      </label>
    </div>
  );
};

export default ContactSection;