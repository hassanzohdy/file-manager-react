import createDirectory from "./createDirectory";
import listDirectory from "./listDirectory";

const fileManager = {
  list: listDirectory,
  createDirectory: createDirectory,
};

export default fileManager;
