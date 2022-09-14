import { KernelContext } from "app/file-manager/contexts";
import { useContext } from "react";

export default function useKernel() {
  const kernel = useContext(KernelContext);

  if (!kernel) {
    throw new Error("useKernel must be used within KernelProvider");
  }

  return kernel;
}
