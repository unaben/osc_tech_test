import { IconCart } from "../../Icons";
import { useNavigate } from "react-router-dom";
import styles from "../Header.module.css";


const CheckoutNav = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.coNav}>
      <span
        className={styles.coNavLogo}
        onClick={() => {
          navigate("/");
        }}
      >
        LOGN
      </span>

      <span className={styles.coNavIcon}>
        <IconCart />
      </span>
    </nav>
  );
};

export default CheckoutNav;
