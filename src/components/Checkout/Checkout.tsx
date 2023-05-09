import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-container display-flex">
      <div className="checkout-frame">
        <p>Thanks for shopping with us today</p>
        <button className="upper btn checkout-bg">
          <Link to="/">Continue Shopping</Link>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
