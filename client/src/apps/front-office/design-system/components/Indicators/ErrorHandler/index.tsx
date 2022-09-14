import { ErrorHandlerProps } from "./types";

export default function ErrorHandler({ error }: ErrorHandlerProps) {
  return <div>ErrorHandler {error}</div>;
}
