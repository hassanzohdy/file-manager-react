import { Grid } from "@mantine/core";
import {
  useCurrentDirectoryNode,
  useNodeWatcher,
} from "app/file-manager/hooks";
import { DirectoryNode, FileNode } from "./ContentNode";

export default function NodesList() {
  const currentDirectoryNode = useCurrentDirectoryNode();

  const node = useNodeWatcher(currentDirectoryNode);

  return (
    <>
      <Grid>
        {node?.directories?.map(node => (
          <Grid.Col key={node.path} span={2}>
            <DirectoryNode node={node} />
          </Grid.Col>
        ))}
        {node?.files?.map(node => (
          <Grid.Col key={node.path} span={2}>
            <FileNode node={node} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
