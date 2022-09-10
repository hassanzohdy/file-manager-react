import { LoaderProps } from "./types";

export default function Loader({ isLoading = true }: LoaderProps) {
  if (!isLoading) return null;

  return <div>Loader</div>;
}
