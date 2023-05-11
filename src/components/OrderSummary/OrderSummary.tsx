import React, { FC } from "react";
import { IVariantProduct } from "../../model/interface";
import { allCalculation } from "../../helper/helper";
import { formatCurrency } from "../../utilities/currencyFormatter";

import "./OrderSummary.css";
import { useNavigate } from "react-router-dom";
import { message } from "../../translate/ENT";

type IOrderSummaryProps = {
  cartStock: IVariantProduct[];
  setCartStock: React.Dispatch<React.SetStateAction<IVariantProduct[]>>;
};

const OrderSummary: FC<IOrderSummaryProps> = ({ cartStock, setCartStock }) => {
  const { totalItemPrices, tax, shipping, grandTotal } =
    allCalculation(cartStock);

  const navigate = useNavigate();

  const handleCompleteCheckout = () => {
    setCartStock([]);
    navigate(`/checkout`);
  };

  return (
    <div className="order-container">
      <div className="order-frame">
        <h2 className="upper mt">{message.orderSummary}</h2>
        <p className="mt ps">
          {message.tax}: {formatCurrency(parseFloat(tax?.toFixed(2)))}
        </p>
        <p className="mt ps">
          {message.shipping}: {formatCurrency(parseFloat(shipping?.toFixed(2)))}
        </p>
        <p className="mt ps">
          {message.totalPrice}:{" "}
          {formatCurrency(parseFloat(totalItemPrices?.toFixed(2)))}
        </p>
        <p className="mt ps">
          {message.grandTotal}:{" "}
          {formatCurrency(parseFloat(grandTotal?.toFixed(2)))}
        </p>
        <div className="btn-checkout-container">
          <button
            disabled={totalItemPrices <= 0}
            onClick={handleCompleteCheckout}
            className="upper btn"
          >
            {message.completeCheckout}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
