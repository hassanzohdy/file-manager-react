import { NavLink, useMantineTheme } from "@mantine/core";
import { IconFolder } from "@tabler/icons";
import { useKernel } from "app/file-manager/hooks";
import { DirectoryNodeProps } from "./ContentNode.types";

export default function DirectoryNode({ node }: DirectoryNodeProps) {
  const theme = useMantineTheme();
  const kernel = useKernel();

  return (
    <NavLink
      style={{
        textAlign: "center",
        cursor: "default",
      }}
      onDoubleClick={() => kernel.load(node.path)}
      label={
        <>
          <IconFolder
            fill={theme.colors.blue[4]}
            strokeWidth={1.5}
            color={theme.colors.blue[9]}
            size={40}
          />
          <div>{node.name}</div>
        </>
      }
    />
  );
}
