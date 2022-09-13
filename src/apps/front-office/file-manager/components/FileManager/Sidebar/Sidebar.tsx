import { Card, NavLink } from "@mantine/core";
import { IconFolder, IconHome2 } from "@tabler/icons";
import { useMemo } from "react";
import { Node } from "../../../types/FileManager.types";
import SidebarNode from "./SidebarNode";

export type SidebarProps = {
  rootDirectory?: Node;
};

export default function Sidebar({ rootDirectory }: SidebarProps) {
  const rootChildren = useMemo(() => {
    return rootDirectory?.children?.filter(child => child.isDirectory);
  }, [rootDirectory]);

  if (!rootDirectory) return null;

  return (
    <>
      <Card shadow="sm">
        <NavLink
          p={0}
          label={
            <SidebarNode
              node={rootDirectory}
              icon={<IconHome2 size={16} color="#78a136" />}
            />
          }
        />
        {rootChildren?.map(child => (
          <NavLink
            p={0}
            pl={10}
            key={child.path}
            label={
              <SidebarNode
                icon={<IconFolder size={16} fill="#31caf9" />}
                node={child}
              />
            }
          />
        ))}
      </Card>
    </>
  );
}
