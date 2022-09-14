import { useEffect, useState } from "react";
import useKernel from "./useKernel";

export default function useLoading(): boolean {
  const kernel = useKernel();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadingEvent = kernel.on("loading", () => setIsLoading(true));

    const loadEvent = kernel.on("load", () => setIsLoading(false));

    return () => {
      loadingEvent.unsubscribe();
      loadEvent.unsubscribe();
    };
  }, [kernel]);

  return isLoading;
}
