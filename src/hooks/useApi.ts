import { useState } from "react";

type ApiFunc<T> = (...args: any[]) => Promise<T | undefined>;

export function useApi<T>(apiFunc: ApiFunc<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T>();

  const clear: VoidFunction = () => {
    setData(undefined);
    setError(false);
  };

  const request: ApiFunc<T> = async (...args) => {
    let response: Awaited<T> | undefined;
    try {
      setIsLoading(true);
      response = await apiFunc(...args);
      setData(response);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
    return response;
  };

  return { data, isLoading, error, request, clear };
}
