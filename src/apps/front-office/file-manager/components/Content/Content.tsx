import { Card, LoadingOverlay } from "@mantine/core";
import { useLoading } from "app/file-manager/hooks";
import { ContentWrapper } from "./Content.styles";

export default function Content() {
  const isLoading = useLoading();

  return (
    <>
      <Card shadow="sm">
        <ContentWrapper>
          <LoadingOverlay visible={isLoading} overlayBlur={2} />
        </ContentWrapper>
      </Card>
    </>
  );
}
