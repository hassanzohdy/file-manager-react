import { Text, ThemeIcon, Tooltip, useMantineTheme } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons";
import { useState } from "react";
import {
  ToolbarButtonText,
  ToolBarButtonWrapper,
  ToolbarIcon,
} from "../Toolbar.styles";
import CreateDirectoryModal from "./CreateDirectoryModal";

export default function CreateDirectoryButton() {
  const theme = useMantineTheme();

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Tooltip
        label={"Create New Directory"}
        position="bottom"
        transition="slide-up">
        <ToolBarButtonWrapper onClick={() => setOpenModal(true)}>
          <ToolbarIcon variant="subtle">
            <ThemeIcon
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}>
              <IconCirclePlus size={18} color={theme.white} />
            </ThemeIcon>
          </ToolbarIcon>
          <ToolbarButtonText>
            <Text color="blue">Directory</Text>
          </ToolbarButtonText>
        </ToolBarButtonWrapper>
      </Tooltip>

      <CreateDirectoryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
