import { Card } from "@mantine/core";
import { ContentWrapper } from "./Content.styles";
import ContentOverlay from "./ContentOverlay";
import NodesList from "./NodesList";

export default function Content() {
  return (
    <>
      <Card shadow="sm">
        <ContentWrapper>
          <ContentOverlay />
          <NodesList />
        </ContentWrapper>
      </Card>
    </>
  );
}
