import { useEvent } from "@mongez/react";
import { Node } from "app/file-manager/Kernel";
import { useState } from "react";
import useKernel from "./useKernel";

export default function useCurrentDirectoryNode() {
  const kernel = useKernel();
  const [node, setNode] = useState<Node | undefined>(
    kernel.currentDirectoryNode,
  );

  useEvent(() => kernel.on("directoryChange", setNode));

  return node;
}
