import type { CheckoutProps } from "./Checkout.type";
import { getSubtotal, getTotalQty } from "./utils/checkoutUtils";
import Breadcrumb from "./components/Breadcrumb";
import ContactSection from "./components/ContactSection";
import DeliverySection from "./components/DeliverySection";
import ExpressCheckout from "./components/ExpressCheckout";
import OrderSummary from "./components/OrderSummary";
import PaymentSection from "./components/PaymentSection";
import PolicyFooter from "./components/PolicyFooter";
import SaveInfo from "./components/SaveInfo";
import ShippingMethod from "./components/ShippingMethod";
import { useNavigate } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";
import styles from "./Checkout.module.css";


const Checkout = (props: CheckoutProps) => {
  const { items, onBack, onSuccess } = props;
  const navigate = useNavigate();

  const subtotal = getSubtotal(items);
  const totalQty = getTotalQty(items);

  const handlePayNow = () => {
    onSuccess();
    navigate("/confirm");
    scrollToTop();
  };

  return (
    <div className={styles.coPage}>
      <div className={styles.coBody}>
        <div className={styles.coLeft}>
          <Breadcrumb onBack={onBack} />
          <ExpressCheckout />
          <ContactSection />
          <DeliverySection />
          <ShippingMethod />
          <PaymentSection />
          <SaveInfo />
          <button className={styles.coPayBtn} onClick={handlePayNow}>
            Pay now
          </button>
          <PolicyFooter />
        </div>
        <OrderSummary items={items} subtotal={subtotal} totalQty={totalQty} />
      </div>
    </div>
  );
};

export default Checkout;
