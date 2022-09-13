import Helmet from "@mongez/react-helmet";
import FileManager from "app/file-manager/components/FileManager";

export default function HomePage() {
  return (
    <>
      <Helmet title="home" appendAppName={false} />
      <FileManager />
    </>
  );
}
