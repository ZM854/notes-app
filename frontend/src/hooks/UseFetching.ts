import { useRef, useState } from "react";

export const useFetching = (
  callback: (signal: AbortSignal) => Promise<void>,
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<null | AbortController>(null);

  const fetching = async (): Promise<void> => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    try {
      setError(null);
      setIsLoading(true);
      await callback(controller.signal);
    } catch {
      if (!controller.signal.aborted) {
        setError("Data fetching error");
      }
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }
  };

  return [fetching, isLoading, error] as const;
};
