
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,    // 5 mins - won't refetch if data is fresh
      gcTime: 1000 * 60 * 10,      // 10 mins - cache kept in memory
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});