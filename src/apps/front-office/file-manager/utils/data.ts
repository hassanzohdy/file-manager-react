import { faker } from "@faker-js/faker";
import { Node } from "../types/FileManager.types";

export function newNode(): Node {
  const isDirectory = faker.datatype.boolean();
  const node: Node = {
    name: isDirectory ? faker.system.directoryPath() : faker.system.fileName(),
    path: faker.system.filePath(),
    size: faker.datatype.number({ min: 1, max: 100000 }),
    isDirectory,
  };

  if (node.isDirectory) {
    node.children = listNodes(1, 3);
  }

  return node;
}

export function newDirectoryNode() {
  const node = newNode();
  node.children = listNodes(faker.datatype.number({ min: 3, max: 4 }), 5);
  node.name = faker.system.directoryPath();
  node.isDirectory = true;
  return node;
}

export function listNodes(minNodes = 1, maxNodes = 10): Node[] {
  return faker.datatype
    .array(faker.datatype.number({ min: minNodes, max: maxNodes }))
    .map(newNode);
}
