import { Progress } from "@mantine/core";
import { useKernel } from "app/file-manager/hooks";
import { useEffect, useState } from "react";

export default function LoadingProgressBar() {
  const kernel = useKernel();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // let's create an interval that will update progress every 300ms
    let interval: ReturnType<typeof setInterval>;

    // we'll listen for loading state
    const loadingEvent = kernel.on("loading", () => {
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
    const loadEvent = kernel.on("load", () => {
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
  }, [kernel]);

  const mapProgressColor = () => {
    if (progress < 25) {
      return "blue";
    }

    if (progress < 50) {
      return "indigo";
    }

    if (progress < 75) {
      return "lime";
    }

    return "green";
  };

  return (
    <Progress
      size="lg"
      value={progress}
      striped
      styles={{
        root: {
          backgroundColor: progress === 0 ? "white" : undefined,
        },
      }}
      label={progress > 0 ? `${progress}%` : undefined}
      color={mapProgressColor()}
      animate
    />
  );
}
