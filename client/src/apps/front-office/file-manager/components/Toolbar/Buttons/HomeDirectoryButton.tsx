import { Text, ThemeIcon, Tooltip, useMantineTheme } from "@mantine/core";
import { IconHome2 } from "@tabler/icons";
import { useKernel } from "app/file-manager/hooks";
import {
  ToolbarButtonText,
  ToolBarButtonWrapper,
  ToolbarIcon,
} from "../Toolbar.styles";

export default function HomeDirectoryButton() {
  const theme = useMantineTheme();
  // we need to use the kernel to get the root path
  const kernel = useKernel();

  const actions = kernel.actions;

  return (
    <Tooltip label={"Home"} position="bottom" transition="slide-up">
      <ToolBarButtonWrapper onClick={() => actions.navigateTo(kernel.rootPath)}>
        <ToolbarIcon variant="subtle">
          <ThemeIcon variant="light" color={theme.colors.lime[1]}>
            <IconHome2 size={16} color={theme.colors.lime[9]} />
          </ThemeIcon>
        </ToolbarIcon>
        <ToolbarButtonText>
          <Text color="lime.8">Home</Text>
        </ToolbarButtonText>
      </ToolBarButtonWrapper>
    </Tooltip>
  );
}
