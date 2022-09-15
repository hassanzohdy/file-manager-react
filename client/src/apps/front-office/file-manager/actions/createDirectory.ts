import Kernel from "../Kernel";

export default function createDirectory(kernel: Kernel) {
  return function create(
    directoryName: string,
    directoryPath: string = kernel.currentDirectoryNode?.path as string,
  ) {
    console.log("create directory", directoryName);
  };
}
