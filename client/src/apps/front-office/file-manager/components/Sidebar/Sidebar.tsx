import { Card, ScrollArea, ThemeIcon, useMantineTheme } from "@mantine/core";
import { IconFolder, IconHome2 } from "@tabler/icons";
import { useKernel, useLoading } from "app/file-manager/hooks";
import useWatchNodeChange from "../../hooks/useNodeWatcher";
import { SidebarWrapper } from "./Sidebar.styles";
import SidebarNode from "./SidebarNode";
import SidebarSkeleton from "./SidebarSkeleton";

export default function Sidebar() {
  const isLoading = useLoading();

  const theme = useMantineTheme();

  // get the kernel
  const kernel = useKernel();

  // watch for the root node for change
  const rootNode = useWatchNodeChange(kernel.rootNode);

  if (isLoading) return <SidebarSkeleton />;

  // if no root node yet, return null
  if (!rootNode) return null;

  return (
    <Card shadow="sm">
      <SidebarWrapper>
        <ScrollArea type="auto" style={{ height: "300px" }}>
          <SidebarNode
            node={rootNode}
            icon={
              <ThemeIcon variant="light" color={theme.colors.lime[1]}>
                <IconHome2 size={16} color={theme.colors.lime[9]} />
              </ThemeIcon>
            }
          />
          {rootNode.directories?.map(child => (
            <SidebarNode
              navProps={{
                pl: 25,
              }}
              key={child.path}
              icon={
                <ThemeIcon variant="light" color={theme.colors.blue[1]}>
                  <IconFolder size={16} color={theme.colors.blue[5]} />
                </ThemeIcon>
              }
              node={child}
            />
          ))}
        </ScrollArea>
      </SidebarWrapper>
    </Card>
  );
}
