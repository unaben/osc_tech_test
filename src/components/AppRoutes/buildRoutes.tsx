import { Route } from "react-router-dom";
import type { RouteContext } from "./AppRoutes.type";
import Checkout from "../Checkout/Checkout";
import OrderSuccess from "../OrderSuccess/OrderSuccess";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductStore from "../ProductStore/ProductStore";
import SearchResults from "../SearchResults/SearchResults";

/**
 * Single source of truth for routes + their prop derivation.
 * Replaces the old routeConfig + getComponentProps split.
 */
export const buildRoutes = (ctx: RouteContext) => [
  <Route
    key="/"
    path="/"
    element={
      <ProductStore
        cartItems={ctx.cartItems}
        setCartItems={ctx.setCartItems}
        cartOpen={ctx.cartOpen}
        setCartOpen={ctx.setCartOpen}
        products={ctx.products}
      />
    }
  />,
  <Route
    key="/product/:id"
    path="/product/:id"
    element={
      <ProductDetail
        allProducts={ctx.products ?? []}
        onAddToCart={ctx.handleAddToCart}
      />
    }
  />,
  <Route
    key="/checkout"
    path="/checkout"
    element={
      <Checkout
        items={ctx.cartItems}
        onBack={() => ctx.setCartOpen(true)}
        onSuccess={() => ctx.setCartItems([])}
      />
    }
  />,
  <Route key="/confirm" path="/confirm" element={<OrderSuccess />} />,
  <Route
    key="/search"
    path="/search"
    element={
      <SearchResults
        initialQuery={ctx.searchQuery}
        allProducts={ctx.products ?? []}
        onBack={() => ctx.navigate("/")}
        onSelectProduct={(p) => {
          ctx.handleSelectProduct(p);
          ctx.setCartOpen(false);
        }}
      />
    }
  />,
];
