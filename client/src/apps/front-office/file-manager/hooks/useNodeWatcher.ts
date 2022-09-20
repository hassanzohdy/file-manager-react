import { Node } from "app/file-manager/Kernel";
import { useEffect, useState } from "react";
import useKernel from "./useKernel";

export default function useWatchNodeChange(node?: Node) {
  const kernel = useKernel();

  // Store the node internally in a state
  const [internalNode, setNode] = useState<Node | undefined>(node);

  useEffect(() => {
    // watch for node change
    const event = kernel.on("nodeChange", (newNode: Node) => {
      // if the updated node is the same as the one we are watching
      // then update the internal node
      if (newNode.path === internalNode?.path) {
        setNode({ ...newNode });
      }
    });

    return () => event.unsubscribe();
  }, [internalNode, kernel]);

  useEffect(() => {
    setNode(node);
  }, [node]);

  return internalNode;
}
