import { Card, Skeleton, useMantineTheme } from "@mantine/core";
import { IconFolder, IconHome2 } from "@tabler/icons";
import { useLoading } from "app/file-manager/hooks";
import { useMemo } from "react";
import { SidebarWrapper } from "./Sidebar.styles";
import { SidebarProps } from "./Sidebar.types";
import SidebarNode from "./SidebarNode";

export default function Sidebar({ rootDirectory }: SidebarProps) {
  const rootChildren = useMemo(() => {
    return rootDirectory?.children?.filter(child => child.isDirectory);
  }, [rootDirectory]);

  const isLoading = useLoading();

  const theme = useMantineTheme();

  if (isLoading) {
    return (
      <Card shadow={"sm"}>
        <SidebarWrapper>
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} width="80%" radius="sm" />
          <Skeleton height={8} mt={6} width="60%" radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} width="80%" radius="sm" />
          <Skeleton height={8} mt={6} width="60%" radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} width="80%" radius="sm" />
          <Skeleton height={8} mt={6} width="60%" radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={12} mt={6} width="80%" radius="sm" />
          <Skeleton height={8} mt={6} width="60%" radius="xl" />
        </SidebarWrapper>
      </Card>
    );
  }

  if (!rootDirectory) return null;

  return (
    <Card shadow="sm">
      <SidebarWrapper>
        <SidebarNode
          node={rootDirectory}
          navProps={{
            p: 0,
          }}
          icon={
            <IconHome2
              size={16}
              fill={theme.colors.lime[4]}
              strokeWidth={1.5}
              color={theme.colors.lime[9]}
            />
          }
        />
        {rootChildren?.map(child => (
          <SidebarNode
            navProps={{
              p: 0,
              pl: 10,
            }}
            key={child.path}
            icon={
              <IconFolder
                size={16}
                fill={theme.colors.blue[4]}
                strokeWidth={1.5}
                color={theme.colors.blue[9]}
              />
            }
            node={child}
          />
        ))}
      </SidebarWrapper>
    </Card>
  );
}
