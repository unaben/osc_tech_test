import styles from "../Checkout.module.css";

const links = [
  "Refund policy",
  "Shipping",
  "Privacy policy",
  "Terms of service",
  "Cancellations",
  "Contact",
  "Cookies",
];

const PolicyFooter = () => {
  return (
    <ul className={styles.coFooter}>
      {links.map((l) => (
        <li key={l}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">{l}</a>
        </li>
      ))}
    </ul>
  );
};

export default PolicyFooter;
