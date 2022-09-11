import Helmet from "@mongez/react-helmet";
import { FileManagerService } from "app/file-manager/services/file-manager-service";

const fileManager = new FileManagerService();

export default function HomePage() {
  fileManager.list("/").then(response => {
    console.log(response.data);
  });
  return (
    <>
      <Helmet title="home" appendAppName={false} />
      <h1>Welcome To Home Page</h1>
    </>
  );
}
