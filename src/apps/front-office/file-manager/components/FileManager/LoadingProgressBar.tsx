import { Progress } from "@mantine/core";
import { useEffect, useState } from "react";
import useFileManager from "../../hooks/useFileManager";

export default function LoadingProgressBar() {
  const fileManager = useFileManager();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // let's create an interval that will update progress every 300ms
    let interval: ReturnType<typeof setInterval>;

    // we'll listen for loading state
    const loadingEvent = fileManager.on("loading", () => {
      setProgress(5);

      interval = setInterval(() => {
        // we'll increase it by 10% every 100ms
        // if it's more than 100% we'll set it to 100%
        setProgress(progress => {
          if (progress >= 100) {
            clearInterval(interval);
            return 100;
          }

          return progress + 2;
        });
      }, 100);
    });

    // now let's listen when the loading is finished
    const loadEvent = fileManager.on("load", () => {
      // clear the interval
      setProgress(100);

      setTimeout(() => {
        clearInterval(interval);

        // set progress to 0
        setProgress(0);
      }, 300);
    });

    // unsubscribe events on unmount or when use effect dependencies change
    return () => {
      loadingEvent.unsubscribe();
      loadEvent.unsubscribe();
    };
  }, [fileManager]);

  if (progress === 0) return null;

  return <Progress size="lg" value={progress} striped animate />;
}
