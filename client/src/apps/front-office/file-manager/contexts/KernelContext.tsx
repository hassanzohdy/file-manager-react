import Kernel from "app/file-manager/Kernel";
import { createContext } from "react";

const KernelContext = createContext<Kernel | null>(null);

export default KernelContext;
