import { Grid } from "@mantine/core";
import { useCurrentDirectoryNode } from "app/file-manager/hooks";
import { useMemo } from "react";
import { DirectoryNode, FileNode } from "./ContentNode";

export default function NodesList() {
  const currentDirectoryNode = useCurrentDirectoryNode();

  const [directories, files] = useMemo(() => {
    const node = currentDirectoryNode;

    if (!node || !node.children?.length) return [[], []];

    return [
      node.children.filter(node => node.isDirectory),
      node.children.filter(node => !node.isDirectory),
    ];
  }, [currentDirectoryNode]);

  return (
    <>
      <Grid>
        {directories.map(node => (
          <Grid.Col key={node.path} span={2}>
            <DirectoryNode node={node} />
          </Grid.Col>
        ))}
        {files.map(node => (
          <Grid.Col key={node.path} span={2}>
            <FileNode node={node} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
