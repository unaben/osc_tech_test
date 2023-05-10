import { useEffect, useState } from "react";
import { IVariantProduct } from "../model/interface";
import ApiConnector from "./ApiConnector";

export const GetProduct = (productId: string) => {
  const [product, setProducts] = useState<IVariantProduct>();

  const fetchProduct = async () => {
    const URL = `?query={ product(id: "gid://shopify/Product/${productId}") { id title description featuredImage { id url } variants(first: 3) { edges { cursor node { id title image { url } price { amount currencyCode } } } } }} `;
    try {
      const res = await ApiConnector.get(URL);
      setProducts(res.data.data.product);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return product;
};

export default GetProduct;
