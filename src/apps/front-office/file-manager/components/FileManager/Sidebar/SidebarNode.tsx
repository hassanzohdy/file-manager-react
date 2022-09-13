import { Node } from "../../../types/FileManager.types";

export type SidebarNodeProps = {
  node: Node;
};

export default function SidebarNode({ node }: SidebarNodeProps) {
  return (
    <>
      <div>{node.name}</div>
    </>
  );
}
