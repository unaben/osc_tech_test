import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartActions, useGetProducts } from "../../../hook";
import type { CartItem, Product } from "../../../types/interface";
import { buildRoutes } from "../buildRoutes";

const useAppRoute = () => {
  const navigate = useNavigate();
  const { data } = useGetProducts();
  const { products } = { ...data };

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { handleRemove, handleUpdateQty, handleAddToCart } = useCartActions(
    setCartItems,
    setCartOpen
  );

  const handleSelectProduct = useCallback(
    (product: Product) => {
      navigate(`/product/${product.id}`);
      setRecentlyViewed((prev) =>
        [product, ...prev.filter((p) => p.id !== product.id)].slice(0, 8)
      );
    },
    [navigate]
  );

  const routes = buildRoutes({
    cartItems,
    setCartItems,
    cartOpen,
    setCartOpen,
    products,
    handleAddToCart,
    searchQuery,
    navigate,
    handleSelectProduct
  });

  return {
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
  };
};

export default useAppRoute;