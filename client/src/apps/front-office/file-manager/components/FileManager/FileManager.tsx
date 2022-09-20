import { Grid } from "@mantine/core";
import Content from "app/file-manager/components/Content";
import LoadingProgressBar from "app/file-manager/components/LoadingProgressBar";
import Sidebar from "app/file-manager/components/Sidebar";
import Toolbar from "app/file-manager/components/Toolbar";
import { KernelContext } from "app/file-manager/contexts";
import Kernel from "app/file-manager/Kernel";
import { useEffect, useRef } from "react";
import { BodyWrapper } from "./FileManager.styles";
import { FileManagerProps } from "./FileManager.types";

export default function FileManager({ rootPath }: FileManagerProps) {
  const { current: kernel } = useRef(new Kernel(rootPath as string));

  // load root directory
  useEffect(() => {
    if (!rootPath) return;

    kernel.load(rootPath);
  }, [rootPath, kernel]);

  return (
    <KernelContext.Provider value={kernel}>
      <LoadingProgressBar />
      <Toolbar />
      <BodyWrapper>
        <Grid>
          <Grid.Col span={3}>
            <Sidebar />
          </Grid.Col>
          <Grid.Col span={9}>
            <Content />
          </Grid.Col>
        </Grid>
      </BodyWrapper>
    </KernelContext.Provider>
  );
}

FileManager.defaultProps = {
  rootPath: "/",
};
