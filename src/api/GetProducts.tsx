import { useEffect, useState } from "react";
import { IStoreItems } from "../model/interface";
import ApiConnector from "./ApiConnector";

const GetProducts = () => {
  const [products, setProducts] = useState<IStoreItems[]>([]);

  const fetchProducts = async () => {
    const URL = `?query={ products(first: 20) { edges { node { id title description featuredImage { id url } variants(first: 3) { edges { node { price { amount currencyCode } } } } } } }}`;
    try {
      const res = await ApiConnector.get(URL);
      setProducts(res.data.data.products.edges);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};

export default GetProducts;
