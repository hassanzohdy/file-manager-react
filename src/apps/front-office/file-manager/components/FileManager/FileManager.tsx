import { Modal } from "@mantine/core";
import { FileManagerProps } from "./FileManager.types";

export default function FileManager({ open, onClose }: FileManagerProps) {
  return (
    <>
      <Modal size="xl" opened={open} onClose={onClose}>
        <h1>File Manager</h1>
      </Modal>
    </>
  );
}
