import ErrorHandler from "./../ErrorHandler";
import Loader from "./../Loader";
import { LoadingErrorHandlerProps } from "./types";

export default function LoadingErrorHandler({
  error = null,
  isLoading = undefined,
}: LoadingErrorHandlerProps) {
  if (isLoading !== undefined) {
    return <Loader isLoading={isLoading} />;
  }

  if (error) {
    return <ErrorHandler error={error} />;
  }

  return null;
}
