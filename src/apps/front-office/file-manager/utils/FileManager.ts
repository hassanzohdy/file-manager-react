import events, { EventSubscription } from "@mongez/events";
import fileManagerService from "../services/file-manager-service";
import { FileManagerEvents, Node } from "../types/FileManager.types";

export default class FileManager {
  /**
   * Root path
   */
  public rootPath = "/";

  /**
   * Current directory path
   */
  public currentDirectoryPath = "/";

  /**
   * Current directory node
   */
  public currentDirectoryNode?: Node;

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
    // trigger loading event
    this.trigger("loading");

    return new Promise((resolve, reject) => {
      fileManagerService
        .list(path)
        .then(response => {
          // trigger load event as the directory has been loaded successfully.
          this.trigger("load", response.data.node);
          this.currentDirectoryPath = path;

          // if the current directory is not as the same loaded directory path,
          // then we'll trigger directory changed event.
          if (response.data.node.path !== this.currentDirectoryNode?.path) {
            this.trigger("directoryChange", response.data.node);
          }

          this.currentDirectoryNode = response.data.node;

          resolve(this.currentDirectoryNode as Node);
        })
        .catch(reject);
    });
  }

  /**
   * Add event listener to the given event
   */
  public on(event: FileManagerEvents, callback: any): EventSubscription {
    return events.subscribe(`file-manger.${event}`, callback);
  }

  /**
   * Trigger the given event
   */
  public trigger(event: FileManagerEvents, ...args: any[]): void {
    events.trigger(`file-manger.${event}`, ...args);
  }
}
