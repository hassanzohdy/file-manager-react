import { Button } from "@mantine/core";
import Helmet from "@mongez/react-helmet";
import FileManager from "app/file-manager/components/FileManager";
import { useState } from "react";

export default function HomePage() {
  const [openFileManager, setOpenFileManager] = useState(false);

  return (
    <>
      <Helmet title="home" appendAppName={false} />
      <h1>Welcome To Home Page</h1>
      <Button
        onClick={() => setOpenFileManager(true)}
        variant="gradient"
        gradient={{ from: "red", to: "orange" }}>
        Open File Manager
      </Button>
      <FileManager
        open={openFileManager}
        onClose={() => setOpenFileManager(false)}
      />
    </>
  );
}
