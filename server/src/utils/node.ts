// import the Node type from the client directory xD
import concatRoute from "@mongez/concat-route";
import { isDirectory, size } from "@mongez/fs";
import { Node } from "./../../../client/src/apps/front-office/file-manager/Kernel/Kernel.types";
import { dataPath } from "./paths";

export type { Node };

/**
 * Generate a node object to the given path,
 * the given path should be relative to the data directory
 */
export default function makeNode(path: string, children?: string[]): Node {
  // get the full path of the node
  const fullPath = dataPath(path);

  const node: Node = {
    path,
    name: path.split("/")?.pop() || "/",
    isDirectory: isDirectory(fullPath),
    size: size(fullPath),
  };

  if (node.isDirectory) {
    node.children = (children || []).map((child) =>
      // 👇🏻 we need to check if the path is the root then we will just append it to the child
      // if its not the root then we need to append `/` to the path and then append the child
      makeNode(concatRoute(path, child))
    );
  }

  return node;
}
