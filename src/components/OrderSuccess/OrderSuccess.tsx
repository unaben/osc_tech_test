import styles from "./OrderSuccess.module.css";
import scrollToTop from "../../utils/scrollToTop";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
    scrollToTop();
  };

  return (
    <div className={styles["success-page"]}>
      <div className={styles["success-box"]}>
        <div className={styles["success-icon"]}>
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#059669"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className={styles["success-title"]}>Order confirmed!</h2>
        <p className={styles["success-sub"]}>
          Thanks for your purchase. We've received your order and will send a
          confirmation to your email shortly.
        </p>
        <button
          className={styles["success-btn"]}
          onClick={handleContinueShopping}
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
