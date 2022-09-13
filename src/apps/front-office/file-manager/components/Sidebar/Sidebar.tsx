import { Card, Skeleton } from "@mantine/core";
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
          icon={<IconHome2 size={16} color="#78a136" />}
        />
        {rootChildren?.map(child => (
          <SidebarNode
            navProps={{
              p: 0,
              pl: 10,
            }}
            key={child.path}
            icon={<IconFolder size={16} fill="#31caf9" />}
            node={child}
          />
        ))}
      </SidebarWrapper>
    </Card>
  );
}
