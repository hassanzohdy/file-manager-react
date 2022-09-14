import { faker } from "@faker-js/faker";
import { Node } from "app/file-manager/Kernel";

export function newNode(
  isDirectory = faker.datatype.boolean(),
  minChildrenNodes = 1,
  maxChildrenNodes = 2,
): Node {
  const path = isDirectory
    ? faker.system.directoryPath()
    : faker.system.directoryPath() + "/" + faker.system.fileName();
  const node: Node = {
    path,
    name: path.split("/")[1],
    size: faker.datatype.number({ min: 1, max: 100000 }),
    isDirectory,
  };

  if (node.isDirectory) {
    node.children = listNodes(minChildrenNodes, maxChildrenNodes);
  }

  return node;
}

export function newDirectoryNode() {
  return newNode(true, 10, 15);
}

export function listNodes(minNodes = 1, maxNodes = 10): Node[] {
  return faker.datatype
    .array(faker.datatype.number({ min: minNodes, max: maxNodes }))
    .map(() => newNode());
}
