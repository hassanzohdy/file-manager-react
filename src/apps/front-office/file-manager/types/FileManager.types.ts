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
  /**
   * Node children
   * This should be present (event with empty array) if the node is directory
   */
  children?: Node[];
};

/**
 * File manager events
 */
export type FileManagerEvents = "loading" | "load" | "directoryChange";
