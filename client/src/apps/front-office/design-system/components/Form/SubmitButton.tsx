import { Button } from "@mantine/core";
import { useForm } from "@mongez/react-form";
import { useEffect, useState } from "react";

type SubmitButtonProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export default function SubmitButton({
  children,
  ...props
}: SubmitButtonProps) {
  const [isSubmitting, submitting] = useState(false);
  const [isDisabled, disable] = useState(false);
  const formProvider = useForm();

  useEffect(() => {
    if (!formProvider) return;

    const onSubmit = formProvider.form.on("submit", () => {
      submitting(formProvider.form.isSubmitting());
      disable(formProvider.form.isSubmitting());
    });

    const inValidControls = formProvider.form.on("invalidControls", () => {
      disable(true);
    });

    const validControl = formProvider.form.on("validControls", () => {
      disable(false);
    });

    return () => {
      onSubmit.unsubscribe();
      validControl.unsubscribe();
      inValidControls.unsubscribe();
    };
  }, [formProvider]);

  return (
    <>
      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan" }}
        type="submit"
        loading={isSubmitting}
        {...props}
        disabled={isDisabled || isSubmitting}>
        {children}
      </Button>
    </>
  );
}
