import { toastLoading } from "design-system/components/Toast";
import Kernel from "../Kernel";
import fileManagerService from "../services/file-manager-service";

export default function createDirectory(kernel: Kernel) {
  return function create(
    directoryName: string,
    directoryPath: string = kernel.currentDirectoryNode?.path as string,
  ) {
    return new Promise((resolve, reject) => {
      const loader = toastLoading(
        "Creating directory...",
        "We are creating your directory, please wait a moment.",
      );

      fileManagerService
        .createDirectory(directoryName, directoryPath)
        .then(response => {
          loader.success("Success!", "Your directory has been created.");

          kernel.tree.setNode(response.data.node);

          resolve(response.data.node);
        })
        .catch(error => {
          loader.error("Error", error.response.data.error);
          reject(error);
        });
    });
  };
}
