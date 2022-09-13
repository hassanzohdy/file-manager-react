import { NavLink, NavLinkProps } from "@mantine/core";
import { IconFolder } from "@tabler/icons";
import { useEffect, useState } from "react";
import useFileManager from "../../../hooks/useFileManager";
import { Node } from "../../../types/FileManager.types";
import { IconWrapper } from "./SidebarNode.styles";

export type SidebarNodeProps = {
  node: Node;
  icon?: React.ReactNode;
  navProps?: Partial<NavLinkProps>;
};

export default function SidebarNode({
  icon,
  node,
  navProps = {},
}: SidebarNodeProps) {
  const fileManager = useFileManager();

  const [isActiveNode, setIsActiveNode] = useState(
    node === fileManager.currentDirectoryNode,
  );

  useEffect(() => {
    setIsActiveNode(node === fileManager.currentDirectoryNode);
  }, [fileManager.currentDirectoryNode, node]);

  return (
    <>
      <NavLink
        {...navProps}
        active={isActiveNode}
        label={
          <>
            <IconWrapper>{icon}</IconWrapper>
            <span>{node.name}</span>
          </>
        }
      />
    </>
  );
}

SidebarNode.defaultProps = {
  icon: <IconFolder fill="#31caf9" />,
};
