import { createContext } from "react";
import FileManager from "../utils/FileManager";

const FileManagerContext = createContext<FileManager | null>(null);

export default FileManagerContext;
