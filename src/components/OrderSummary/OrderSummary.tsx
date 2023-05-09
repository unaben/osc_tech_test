import React, { FC } from "react";
import { IVariantProduct } from "../../model/interface";
import { allCalculation } from "../../helper/helper";
import { formatCurrency } from "../../utilities/currencyFormatter";

import "./OrderSummary.css";
import { Link } from "react-router-dom";

type IOrderSummaryProps = {
  cartStock: IVariantProduct[];
  setCartStock: React.Dispatch<React.SetStateAction<IVariantProduct[]>>;
};

const OrderSummary: FC<IOrderSummaryProps> = ({ cartStock, setCartStock }) => {
  const { totalItemPrices, tax, shipping, grandTotal } =
    allCalculation(cartStock);

  return (
    <div className="order-container">
      <div className="order-frame">
        <h2 className="upper mt" style={{ textAlign: "center" }}>
          Order Summary
        </h2>
        <p className="mt ps">
          Tax: {formatCurrency(parseFloat(tax?.toFixed(2)))}
        </p>
        <p className="mt ps">
          Shipping: {formatCurrency(parseFloat(shipping?.toFixed(2)))}
        </p>
        <p className="mt ps">
          Total Price: {formatCurrency(parseFloat(totalItemPrices?.toFixed(2)))}
        </p>
        <p className="mt ps">
          Grand Total: {formatCurrency(parseFloat(grandTotal?.toFixed(2)))}
        </p>
        <div className="btn-container">
          <button onClick={() => setCartStock([])} className="upper btn">
            <Link to={"/checkout"}>Complete Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
