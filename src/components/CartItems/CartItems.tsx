import React, { FC } from "react";
import Cart from "../CartList/CartList";
import { Link } from "react-router-dom";
import { IVariantProduct } from "../../model/interface";
import OrderSummary from "../OrderSummary/OrderSummary";
import "./CartItems.css";
import { allCalculation } from "../../helper/helper";

type ICartItemProps = {
  cartStock: IVariantProduct[];
  setCartStock: React.Dispatch<React.SetStateAction<IVariantProduct[]>>;
};

const CartItems: FC<ICartItemProps> = ({ cartStock, setCartStock }) => {
  const { itemQty } = allCalculation(cartStock);

  const deleteCartitem = (id: string) => {
    setCartStock(cartStock.filter((item) => item.id !== id));
  };

  const removeCartItems = () => {
    setCartStock([]);
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item-frame">
        <h2 className="upper">Your Bag</h2>
        <div className="btn-container">
          <button className="upper btn bg">
            <Link to="/">Continue Shopping</Link>
          </button>
          <div className="flexbox">
            <p className="gap">shopping bag ({itemQty})</p>
            <p>Your WishList (0)</p>
          </div>
          <button
            onClick={removeCartItems}
            className="upper btn clear-cart-btn"
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="cartList-content">
        <div className="cartList-container">
          {cartStock.length === 0 ? (
            <h2>No item in cart</h2>
          ) : (
            cartStock?.map((item) => (
              <Cart
                key={item.id}
                item={item}
                cartStock={cartStock}
                setCartStock={setCartStock}
                onDelete={deleteCartitem}
              />
            ))
          )}
        </div>
        <OrderSummary cartStock={cartStock} setCartStock={setCartStock} />
      </div>
    </div>
  );
};

export default CartItems;
