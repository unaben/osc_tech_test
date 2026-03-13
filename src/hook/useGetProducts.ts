
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../lib/queryKeys";
import type { ProductsResponse } from "../model/interface";
import fetchProducts from "../api/fetchProducts";

interface UseProductsResult {
  data: ProductsResponse | undefined;
  isLoading: boolean;
  isFetching: boolean;
  error: string | null;
  refetch: () => void;
}

const useGetProducts = (): UseProductsResult => {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: queryKeys.products.all,
    queryFn: fetchProducts,
  });

  return {
    data,
    isLoading,
    isFetching,
    error: error instanceof Error ? error.message : null,
    refetch,
  };
};

export default useGetProducts;