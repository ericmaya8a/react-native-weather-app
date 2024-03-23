import { useEffect, useState } from "react";

/**
 *
 *
 * @param {T} value Infer the type
 * @param {number} [delay=500] default 500 milliseconds
 * @return {*} The value after debounce
 */
export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}
