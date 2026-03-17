import { Routes } from "react-router-dom";
import Cart from "../CartItems/CartItems";
import Header from "../Header/Header";
import SearchModal from "../SearchModal/SearchModal";
import Footer from "../Footer/Footer";
import styles from "./AppRoutes.module.css";
import useAppRoute from "./hooks/useAppRoutes";

const AppRoutes = () => {
  const {
    routes,
    cartOpen,
    cartItems,
    setCartOpen,
    handleUpdateQty,
    handleRemove,
    searchOpen,
    products,
    recentlyViewed,
    setSearchOpen,
    setRecentlyViewed,
    handleSelectProduct,
    setSearchQuery,
    navigate,
  } = useAppRoute();

  const totalCartQty = cartItems.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className={styles.container}>
      <Header setCartOpen={setCartOpen} setSearchOpen={setSearchOpen} totalCartQty={totalCartQty} />

      <Routes>{routes}</Routes>

      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdateQty={handleUpdateQty}
          onRemove={handleRemove}
          onCheckout={() => {
            setCartOpen(false);
            navigate("/checkout");
          }}
        />
      )}

      {searchOpen && (
        <SearchModal
          allProducts={products ?? []}
          recentlyViewed={recentlyViewed}
          onClose={() => setSearchOpen(false)}
          onSelectProduct={(p) => {
            handleSelectProduct(p);
            setSearchOpen(false);
          }}
          onClearRecent={() => setRecentlyViewed([])}
          onViewAll={(q) => {
            setSearchQuery(q);
            navigate("/search");
            setSearchOpen(false);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default AppRoutes;