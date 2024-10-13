import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {
  const callbackRef = useRef<() => void>();

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (!delay) {
      return () => {};
    }

    const interval = setInterval(() => {
      callbackRef.current?.();
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);
}
