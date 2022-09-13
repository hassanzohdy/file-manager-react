import { Grid, Modal } from "@mantine/core";
import BaseFileManager from "app/file-manager/utils/FileManager";
import { useCallback, useEffect, useRef, useState } from "react";
import Content from "../../Content";
import FileManagerContext from "../../contexts/FileManagerContext";
import { Node } from "../../types/FileManager.types";
import { BodyWrapper } from "./FileManager.styles";
import { FileManagerProps } from "./FileManager.types";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";

export default function FileManager({
  open,
  onClose,
  rootPath,
}: FileManagerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentDirectoryNode, setCurrentDirectoryNode] = useState<Node>();
  const [rootDirectoryNode, setRootDirectoryNode] = useState<Node>();

  const { current: fileManager } = useRef(new BaseFileManager());

  // load the given directory path
  const load = useCallback(
    (path: string, isRoot = false) => {
      setIsLoading(true);

      fileManager.load(path).then(node => {
        setCurrentDirectoryNode(node);

        setIsLoading(false);
        if (isRoot) {
          setRootDirectoryNode(node);
        }
      });
    },
    [fileManager],
  );

  // load root directory
  useEffect(() => {
    if (!rootPath || !open) return;

    load(rootPath, true);
  }, [rootPath, fileManager, open, load]);

  return (
    <FileManagerContext.Provider value={fileManager}>
      <Modal size="xl" opened={open} onClose={onClose}>
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
      </Modal>
    </FileManagerContext.Provider>
  );
}

FileManager.defaultProps = {
  rootPath: "/",
};
