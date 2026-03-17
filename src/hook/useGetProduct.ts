
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../config/queryKeys";
import type { Product } from "../types/interface";
import fetchProducts from "../api/fetchProducts";

interface UseProductResult {
  product: Product | undefined;
  isLoading: boolean;
  isFetching: boolean;
  error: string | null;
  refetch: () => void;
}

const useGetProduct = (productId: string): UseProductResult => {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: queryKeys.products.all,
    queryFn: fetchProducts,
    select: (res) => {
        return res.products.find((p) => p.id === productId);
      },
  });

  return {
    product: data,
    isLoading,
    isFetching,
    error: error instanceof Error ? error.message : null,
    refetch,
  };
};

export default useGetProduct;