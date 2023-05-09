import { IStoreItems } from "../model/interface";

const useSearch = (products: IStoreItems[], searchTerm: string) => {
  const searchData = products?.filter((product: IStoreItems) => {
    return Object.keys(product.node)?.some((key) => {
      return product.node[key as keyof IStoreItems["node"]]
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());
    });
  });
  return { searchData };
};

export default useSearch;
