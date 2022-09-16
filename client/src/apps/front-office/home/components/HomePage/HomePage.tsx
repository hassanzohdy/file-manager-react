import Helmet from "@mongez/react-helmet";
import FileManager from "app/file-manager";

export default function HomePage() {
  return (
    <>
      <Helmet title="home" appendAppName={false} />

      <FileManager />
    </>
  );
}
