import { Node } from "app/file-manager/Kernel";
import rootNode from "./data.json";

export default function fetchNode(
  directoryPath: string,
  node?: Node,
): Node | undefined {
  if (!node) {
    node = rootNode;
  }

  if (node.path === directoryPath) {
    return node;
  } else if (node.isDirectory && node.children) {
    for (const child of node.children) {
      const foundNode = fetchNode(directoryPath, child);

      if (foundNode) {
        return foundNode;
      }
    }
  }
}
