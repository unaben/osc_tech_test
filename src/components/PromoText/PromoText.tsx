import React from "react";
import "./PromoText.css";
import { message } from "../../translate/ENT";

const PromoText = () => {
  return (
    <div className="promo-text-container display-flex">
      <p>{message.offer}</p>
    </div>
  );
};

export default PromoText;
