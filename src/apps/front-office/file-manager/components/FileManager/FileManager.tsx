import { Grid, Modal } from "@mantine/core";
import Content from "./Content";
import { BodyWrapper } from "./FileManager.styles";
import { FileManagerProps } from "./FileManager.types";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";

export default function FileManager({ open, onClose }: FileManagerProps) {
  return (
    <>
      <Modal size="xl" opened={open} onClose={onClose}>
        <Toolbar />
        <BodyWrapper>
          <Grid>
            <Grid.Col span={3}>
              <Sidebar />
            </Grid.Col>
            <Grid.Col span={9}>
              <Content />
            </Grid.Col>
          </Grid>
        </BodyWrapper>
      </Modal>
    </>
  );
}
