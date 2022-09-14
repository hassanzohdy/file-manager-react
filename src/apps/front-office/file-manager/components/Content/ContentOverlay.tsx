import { LoadingOverlay } from "@mantine/core";
import { useLoading } from "app/file-manager/hooks";

export default function ContentOverlay() {
  const isLoading = useLoading();
  return <LoadingOverlay visible={isLoading} overlayBlur={2} />;
}
