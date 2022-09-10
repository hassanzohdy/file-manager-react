/**
 * File Manager node is the primary data structure for the File Manager.
 * It can be a directory or a file.
 * It contains the following properties:
 */
export type Node = {
  /**
   * Node Name
   */
  name: string;
  /**
   * Node full path to root
   */
  path: string;
  /**
   * Node size in bits
   */
  size: number;
  /**
   * Is node directory
   */
  isDirectory: boolean;
};

/**
 * FileNode is a node that represents a file.
 * It extends the `Node` type.
 */
export type FileNode = Node;

/**
 * DirectoryNode is a node that represents a directory.
 * It extends the `Node` type.
 */
export type DirectoryNode = Node & {
  /**
   * Directory children
   * It can be a list of `FileNode` and/or a `DirectoryNode`
   */
  children: Node[];
};
