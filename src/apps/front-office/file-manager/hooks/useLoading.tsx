import { useEffect, useState } from "react";
import useFileManager from "./useFileManager";

export default function useLoading(): boolean {
  const fileManager = useFileManager();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadingEvent = fileManager.on("loading", () => setIsLoading(true));

    const loadEvent = fileManager.on("load", () => setIsLoading(false));

    return () => {
      loadingEvent.unsubscribe();
      loadEvent.unsubscribe();
    };
  }, [fileManager]);

  return isLoading;
}
