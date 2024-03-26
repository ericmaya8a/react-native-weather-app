import { useState } from "react";

export function useApi<T>(apiFunc: (...args: any[]) => Promise<T | undefined>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T>();

  const clear = () => {
    setData(undefined);
    setError(false);
  };

  const request = async (...args: any[]) => {
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
