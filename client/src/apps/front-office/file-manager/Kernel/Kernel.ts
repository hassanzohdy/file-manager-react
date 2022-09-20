import events, { EventSubscription } from "@mongez/events";
import { createDirectory } from "../actions";
import fileManagerService from "../services/file-manager-service";
import { KernelEvents, Node } from "./Kernel.types";
import KernelTree from "./KernelTree";

export default class Kernel {
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
   * Kernel nodes tree
   */
  public tree: KernelTree;

  /**
   * Root node
   */
  public rootNode?: Node;

  /**
   * Constructor
   */
  public constructor(rootPath: string) {
    this.rootPath = rootPath;

    this.tree = new KernelTree(this);
  }

  /**
   * Get kernel actions
   */
  public get actions() {
    // we added the following line to disable the annoying eslint message
    // as we can not use the this keyword in any getters i.e createDirectory.
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const kernel = this;

    return {
      navigateTo: this.load.bind(this),
      get createDirectory() {
        return createDirectory(kernel);
      },
    };
  }

  /**
   * Set root path
   */
  public setRootPath(rootPath: string): Kernel {
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
          this.currentDirectoryPath = path;

          if (response.data.node.path === this.rootPath) {
            this.tree.setRootNode(response.data.node);
            this.rootNode = response.data.node;
          } else {
            this.tree.setNode(response.data.node);
          }

          // trigger load event as the directory has been loaded successfully.
          this.trigger("load", response.data.node);

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
  public on(event: KernelEvents, callback: any): EventSubscription {
    return events.subscribe(`file-manger.${event}`, callback);
  }

  /**
   * Trigger the given event
   */
  public trigger(event: KernelEvents, ...args: any[]): void {
    events.trigger(`file-manger.${event}`, ...args);
  }
}
