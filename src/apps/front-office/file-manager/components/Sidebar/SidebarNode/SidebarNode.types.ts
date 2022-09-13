import { NavLinkProps } from "@mantine/core";
import { Node } from "app/file-manager/Kernel";

export type SidebarNodeProps = {
  node: Node;
  icon?: React.ReactNode;
  navProps?: Partial<NavLinkProps>;
};
