import Kernel from "./Kernel";
import { Node } from "./Kernel.types";

export default class KernelTree {
  /**
   * Root node
   */
  public root?: Node;

  /**
   * Constructor
   */
  constructor(public kernel: Kernel) {}

  /**
   * Set root node
   */
  public setRootNode(root: Node) {
    this.root = root;
    this.kernel.trigger("nodeChange", this.root);

    this.prepareNode(this.root);
  }

  /**
   * Prepare the given node
   */
  public prepareNode(node: Node) {
    if (!node.children) return;

    this.reorderChildren(node);

    // set children directories
    node.directories = node.children.filter(child => child.isDirectory);

    // set children files
    node.files = node.children.filter(child => !child.isDirectory);
  }

  /**
   * Reorder node children by child name
   */
  public reorderChildren(node: Node) {
    node.children?.sort((a, b) => {
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1;
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
      return 0;
    });
  }

  /**
   * Add the given node to the tree
   */
  public setNode(node: Node) {
    // first find the parent node
    let parentNode = this.parentNode(node);

    // if it has no parent, which should not happen, then mark the root as parent
    if (!parentNode) {
      parentNode = this.root;
    }

    // if there is no parent, then do nothing and just return
    if (!parentNode) return;

    // a flag to determine if the given node was already existing but has been changed
    let nodeHasChanged = false;
    // a flag to determine if the parent node is changed
    let parentHasChanged = false;

    // now check if the node already exists in its parent
    if (this.parentHas(parentNode, node)) {
      // if it exists, replace it
      parentNode.children = parentNode.children?.map(child => {
        if (child.path === node.path) {
          if (this.nodeHasChanged(child, node)) {
            nodeHasChanged = true;
            parentHasChanged = true;
          }

          return node;
        }

        return child;
      });
    } else {
      // it means the node does not exist in the parent, then push it to the parent's children
      parentNode?.children?.push(node);
      this.kernel.trigger("newNode", node);
      parentHasChanged = true;
      // prepare the node
      this.prepareNode(node);
    }

    // this will be only triggered if the node has changed
    if (nodeHasChanged) {
      this.prepareNode(node);
      this.kernel.trigger("nodeChange", node);
    }

    // this will be only triggered if the parent node has changed
    if (parentHasChanged) {
      this.prepareNode(parentNode);
      // as the parent node has changed thus the root node will be marked as changed as well
      // we may later make it recursive to mark all the parent nodes as changed
      this.prepareNode(this.root as Node);

      this.kernel.trigger("nodeChange", parentNode);
      this.kernel.trigger("nodeChange", this.root);
    }
  }

  /**
   * Check if the given parent has the given node
   */
  public parentHas(parent: Node, node: Node): boolean {
    return parent.children?.some(child => child.path === node.path) ?? false;
  }

  /**
   * Get parent node
   */
  public parentNode(node: Node): Node | undefined {
    return this.findNode(this.getParentPath(node.path));
  }

  /**
   * Find node for the given path recursively in the tree
   */
  public findNode(path: string): Node | undefined {
    // loop starting from the tree root
    const currentNode = this.root;

    const findNode = (node?: Node): Node | undefined => {
      if (node?.path === path) {
        return node;
      }

      if (!node?.children) return undefined;

      for (const child of node.children) {
        const foundNode = findNode(child);

        if (foundNode) return foundNode;
      }
    };

    return findNode(currentNode);
  }

  /**
   * Check if the given node has been changed
   */
  public nodeHasChanged(oldNode: Node, newNode: Node): boolean {
    return JSON.stringify(oldNode) !== JSON.stringify(newNode);
  }

  /**
   * Get the parent path of the given path
   */
  protected getParentPath(path: string): string {
    if (!path) return "/";

    // get the parent path by splitting the path and removing the last item
    return path.split("/").slice(0, -1).join("/");
  }
}
