import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IVariantProduct } from "../../model/interface";
import { allCalculation } from "../../helper/helper";
import "./Header.css";
import PromoText from "../PromoText/PromoText";
import { message } from "../../translate/ENT";

type IHeaderProps = {
  cartStock: IVariantProduct[];
};
const Header: FC<IHeaderProps> = ({ cartStock }) => {
  const { itemQty } = allCalculation(cartStock);
  return (
    <>
      <div className="header-container">
        <div className="display-flex">
          <Link to={"/"}>
            <h1>{message.title}</h1>
          </Link>
        </div>
        <div className="display-flex wrapper">
          <nav>
            <ul className="display-flex">
              <li>
                <Link to="/">{message.store}</Link>
              </li>
            </ul>
          </nav>
          <button className="add-btn m">
            <Link to="/cart">
              <i className="icon">
                <FaShoppingCart />
              </i>
              <span>
                {message.cart}({itemQty})
              </span>
            </Link>
          </button>
        </div>
      </div>
      <PromoText />
    </>
  );
};

export default Header;
