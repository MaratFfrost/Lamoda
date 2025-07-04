import { useEffect, useRef, useState } from "react";

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] =
    useState(value);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(
      () => setDebouncedValue(value),
      delay
    );

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};
