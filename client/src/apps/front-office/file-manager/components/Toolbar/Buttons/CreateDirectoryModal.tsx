import { Modal } from "@mantine/core";
import { Form, FormInterface } from "@mongez/react-form";
import SubmitButton from "design-system/components/Form/SubmitButton";
import TextInput from "design-system/components/Form/TextInput";
import React from "react";
import { useKernel } from "../../../hooks";

export type CreateDirectoryModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateDirectoryModal({
  open,
  onClose,
}: CreateDirectoryModalProps) {
  const kernel = useKernel();

  const submitForm = (e: React.FormEvent, form: FormInterface) => {
    const directoryName = form.value("name");

    kernel.actions
      .createDirectory(directoryName)
      // 👇🏻 close the modal after creating the directory
      .then(() => {
        onClose();
      })
      // 👇🏻 If an error occurred, then allow form to be resubmitted again for example to allow the user to change the directory name.
      .catch(() => {
        form.submitting(false);
      });
  };

  return (
    <Modal
      title={<strong>{kernel.currentDirectoryNode?.path}</strong>}
      opened={open}
      trapFocus={false}
      onClose={onClose}>
      <Form onSubmit={submitForm}>
        <h2>Create New Directory</h2>
        <TextInput
          name="name"
          required
          autoFocus
          placeholder="Please Enter Directory Name"
        />

        <div
          style={{
            textAlign: "end",
            marginTop: "1.5rem",
          }}>
          <SubmitButton>Create</SubmitButton>
        </div>
      </Form>
    </Modal>
  );
}
