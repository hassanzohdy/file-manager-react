import { Grid } from "@mantine/core";
import HomeDirectoryButton from "./Buttons/HomeDirectoryButton";
import { ToolbarWrapper } from "./Toolbar.styles";

const buttons = [
  //
  HomeDirectoryButton,
];

export default function Toolbar() {
  return (
    <>
      <ToolbarWrapper shadow="sm">
        <Grid>
          {buttons.map((Button, index) => (
            <Button key={index} />
          ))}
        </Grid>
      </ToolbarWrapper>
    </>
  );
}
