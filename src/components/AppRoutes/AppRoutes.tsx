import React from "react";
import { IVariantProduct } from "../../model/interface";
import { useLocalStorage } from "../../hook/useLocalStorage";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import ProductsList from "../ProductsList/ProductsList";
import ProductDetail from "../ProductDetail/ProductDetail";
import CartItems from "../CartItems/CartItems";
import "./AppRoutes.css";
import Checkout from "../Checkout/Checkout";

const AppRoutes = () => {
  const [cartStock, setCartStock] = useLocalStorage<IVariantProduct[]>(
    "cart",
    []
  );
  return (
    <div className="app-route-container">
      <Header cartStock={cartStock} />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route
          path="/details/:productId"
          element={
            <ProductDetail cartStock={cartStock} setCartStock={setCartStock} />
          }
        />
        <Route
          path="/cart"
          element={
            <CartItems cartStock={cartStock} setCartStock={setCartStock} />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
