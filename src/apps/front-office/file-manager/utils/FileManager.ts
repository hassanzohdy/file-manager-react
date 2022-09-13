import fileManagerService from "../services/file-manager-service";
import { Node } from "../types/FileManager.types";

export default class FileManager {
  /**
   * Root path
   */
  protected rootPath = "/";

  /**
   * Current directory path
   */
  protected currentDirectoryPath = "/";

  /**
   * Current directory node
   */
  protected currentDirectoryNode?: Node;

  /**
   * Set root path
   */
  public setRootPath(rootPath: string): FileManager {
    this.rootPath = rootPath;
    return this;
  }

  /**
   * Load the given path
   */
  public load(path: string): Promise<Node> {
    return new Promise((resolve, reject) => {
      fileManagerService
        .list(path)
        .then(response => {
          this.currentDirectoryPath = path;
          this.currentDirectoryNode = response.data.node;
          resolve(this.currentDirectoryNode as Node);
        })
        .catch(reject);
    });
  }
}
