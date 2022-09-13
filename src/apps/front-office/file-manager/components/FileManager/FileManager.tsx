import { Grid, Modal } from "@mantine/core";
import BaseFileManager from "app/file-manager/utils/FileManager";
import { useEffect, useRef, useState } from "react";
import { Node } from "../../types/FileManager.types";
import Content from "./Content";
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
  const [currentDirectoryNode, setCurrentDirectoryNode] = useState<
    Node | undefined
  >();

  const { current: fileManager } = useRef(new BaseFileManager());

  console.log(currentDirectoryNode);

  // load root directory
  useEffect(() => {
    if (!rootPath || !open) return;

    setIsLoading(true);

    fileManager.load(rootPath).then(directoryNode => {
      setIsLoading(false);
      setCurrentDirectoryNode(directoryNode);
    });
  }, [rootPath, fileManager, open]);

  return (
    <>
      <Modal size="xl" opened={open} onClose={onClose}>
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
      </Modal>
    </>
  );
}

FileManager.defaultProps = {
  rootPath: "/",
};
