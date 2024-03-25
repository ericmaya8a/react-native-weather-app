import { useState } from "react";

export function useApi<T>(apiFunc: (...args: any[]) => Promise<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();

  const request = async (...args: any[]) => {
    setIsLoading(true);
    const response = await apiFunc(...args);
    setData(response);
    setIsLoading(false);
    return response;
  };

  return { data, isLoading, request, setData };
}
