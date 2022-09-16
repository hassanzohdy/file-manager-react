import Kernel from "../Kernel";
import fileManagerService from "../services/file-manager-service";

export default function createDirectory(kernel: Kernel) {
  return function create(
    directoryName: string,
    directoryPath: string = kernel.currentDirectoryNode?.path as string,
  ) {
    fileManagerService.createDirectory(directoryName, directoryPath);
  };
}
