import { useContext } from "react";
import FileManagerContext from "../contexts/FileManagerContext";

export default function useFileManager() {
  const fileManager = useContext(FileManagerContext);

  if (!fileManager) {
    throw new Error("useFileManager must be used within FileManagerProvider");
  }

  return fileManager;
}
