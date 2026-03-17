import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

const useQueryParam = <T extends string>(key: string, defaultValue?: T) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setParam = useCallback(
    (value: T) => {
      const params = new URLSearchParams(searchParams);
      params.set(key, value);
      setSearchParams(params);
    },
    [key, searchParams, setSearchParams]
  );

  const clearParam = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    setSearchParams(params);
  }, [key, searchParams, setSearchParams]);

  const value = (searchParams.get(key) ?? defaultValue) as T;

  return {
    value,
    setParam,
    clearParam,
  };
};

export default useQueryParam;
