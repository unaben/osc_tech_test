import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { message } from "../../translate/ENT";

const Checkout = () => {
  return (
    <div className="checkout-container display-flex">
      <div className="checkout-frame">
        <p>{message.checkoutMessage}</p>
        <button className="upper btn checkout-bg">
          <Link to="/">{message.continueShopping}</Link>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
