import { NavLink } from "@mantine/core";
import { IconFolder } from "@tabler/icons";
import { useKernel } from "app/file-manager/hooks";
import { Node } from "app/file-manager/Kernel";
import { useEffect, useState } from "react";
import { IconWrapper } from "./SidebarNode.styles";
import { SidebarNodeProps } from "./SidebarNode.types";

export default function SidebarNode({
  icon,
  node,
  navProps = {},
}: SidebarNodeProps) {
  const kernel = useKernel();

  const [isActiveNode, setIsActiveNode] = useState(
    node === kernel.currentDirectoryNode,
  );

  useEffect(() => {
    const event = kernel.on("directoryChange", (newCurrentDirectory: Node) => {
      if (newCurrentDirectory.path !== node.path && isActiveNode) {
        setIsActiveNode(false);
      } else if (newCurrentDirectory.path === node.path && !isActiveNode) {
        setIsActiveNode(true);
      }
    });

    return () => event.unsubscribe();
  }, [kernel, isActiveNode, node]);

  return (
    <>
      <NavLink
        {...navProps}
        active={isActiveNode}
        onClick={() => kernel.load(node.path)}
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
