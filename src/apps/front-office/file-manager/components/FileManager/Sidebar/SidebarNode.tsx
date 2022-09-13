import { IconFolder } from "@tabler/icons";
import { Node } from "../../../types/FileManager.types";
import { IconWrapper } from "./SidebarNode.styles";

export type SidebarNodeProps = {
  node: Node;
  icon?: React.ReactNode;
};

export default function SidebarNode({ icon, node }: SidebarNodeProps) {
  return (
    <>
      <div>
        <IconWrapper>{icon}</IconWrapper>
        <span>{node.name}</span>
      </div>
    </>
  );
}

SidebarNode.defaultProps = {
  icon: <IconFolder fill="#31caf9" />,
};
