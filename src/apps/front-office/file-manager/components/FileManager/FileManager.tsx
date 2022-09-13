import { Grid } from "@mantine/core";
import Content from "app/file-manager/components/Content";
import LoadingProgressBar from "app/file-manager/components/LoadingProgressBar";
import Sidebar from "app/file-manager/components/Sidebar";
import Toolbar from "app/file-manager/components/Toolbar";
import { KernelContext } from "app/file-manager/contexts";
import Kernel, { Node } from "app/file-manager/Kernel";
import { useCallback, useEffect, useRef, useState } from "react";
import { BodyWrapper } from "./FileManager.styles";
import { FileManagerProps } from "./FileManager.types";

export default function FileManager({ rootPath }: FileManagerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentDirectoryNode, setCurrentDirectoryNode] = useState<Node>();
  const [rootDirectoryNode, setRootDirectoryNode] = useState<Node>();

  const { current: kernel } = useRef(new Kernel());

  // load the given directory path
  const load = useCallback(
    (path: string, isRoot = false) => {
      setIsLoading(true);

      if (isRoot) {
        kernel.setRootPath(path);
      }

      kernel.load(path).then(node => {
        setCurrentDirectoryNode(node);

        setIsLoading(false);
        if (isRoot) {
          setRootDirectoryNode(node);
        }
      });
    },
    [kernel],
  );

  // load root directory
  useEffect(() => {
    if (!rootPath) return;

    load(rootPath, true);
  }, [rootPath, kernel, load]);

  return (
    <KernelContext.Provider value={kernel}>
      <LoadingProgressBar />
      <Toolbar />
      <BodyWrapper>
        <Grid>
          <Grid.Col span={3}>
            <Sidebar rootDirectory={rootDirectoryNode} />
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
