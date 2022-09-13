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
    const event = fileManager.on(
      "directoryChange",
      (newCurrentDirectory: Node) => {
        if (newCurrentDirectory.path !== node.path && isActiveNode) {
          setIsActiveNode(false);
        } else if (newCurrentDirectory.path === node.path && !isActiveNode) {
          setIsActiveNode(true);
        }
      },
    );

    return () => event.unsubscribe();
  }, [fileManager, isActiveNode, node]);

  return (
    <>
      <NavLink
        {...navProps}
        active={isActiveNode}
        onClick={() => fileManager.load(node.path)}
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
