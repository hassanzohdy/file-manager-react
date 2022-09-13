import { Node } from "app/file-manager/Kernel";

export type FileManagerProps = {
  /**
   * Root path to open in the file manager
   *
   * @default "/"
   */
  rootPath?: string;
  /**
   * Callback for when a file/directory is selected
   */
  onSelect?: (node: Node) => void;
  /**
   * Callback for when a file/directory is double clicked
   */
  onDoubleClick?: (node: Node) => void;
  /**
   * Callback for when a file/directory is right clicked
   */
  onRightClick?: (node: Node) => void;
  /**
   * Callback for when a file/directory is copied
   */
  onCopy?: (node: Node) => void;
  /**
   * Callback for when a file/directory is cut
   */
  onCut?: (node: Node) => void;
  /**
   * Callback for when a file/directory is pasted
   * The old node will contain the old path and the new node will contain the new path
   */
  onPaste?: (node: Node, oldNode: Node) => void;
  /**
   * Callback for when a file/directory is deleted
   */
  onDelete?: (node: Node) => void;
  /**
   * Callback for when a file/directory is renamed
   * The old node will contain the old path/name and the new node will contain the new path/name
   */
  onRename?: (node: Node, oldNode: Node) => void;
  /**
   * Callback for when a directory is created
   */
  onCreateDirectory?: (directory: Node) => void;
  /**
   * Callback for when file(s) is uploaded
   */
  onUpload?: (files: Node[]) => void;
  /**
   * Callback for when a file is downloaded
   */
  onDownload?: (node: Node) => void;
};
