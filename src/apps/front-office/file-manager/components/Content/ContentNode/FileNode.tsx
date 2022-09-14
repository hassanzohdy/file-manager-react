import { NavLink, useMantineTheme } from "@mantine/core";
import { IconFileInfo as Icon } from "@tabler/icons";
import { FileNodeProps } from "./ContentNode.types";

export default function FileNode({ node }: FileNodeProps) {
  const theme = useMantineTheme();
  return (
    <NavLink
      style={{
        textAlign: "center",
        cursor: "default",
      }}
      label={
        <>
          <Icon
            fill={theme.colors.green[4]}
            strokeWidth={1.5}
            color={theme.colors.green[9]}
            size={40}
          />
          <div>{node.name}</div>
        </>
      }
    />
  );
}
