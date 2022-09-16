import Helmet from "@mongez/react-helmet";
import FileManager from "app/file-manager";
import { toastLoading } from "design-system/components/Toast";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const loader = toastLoading(
      "Loading",
      "Please wait while we are loading your files",
    );

    setTimeout(() => {
      loader.success("Success", "Your files are loaded successfully");
    }, 2000);
  }, []);
  return (
    <>
      <Helmet title="home" appendAppName={false} />

      <FileManager />
    </>
  );
}
