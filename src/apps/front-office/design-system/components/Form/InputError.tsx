import { InputError as FormInputErrorProps } from "@mongez/react-form";

export type InputErrorProps = {
  error: FormInputErrorProps;
};

export default function InputError({ error }: InputErrorProps) {
  if (error === null) return null;

  return (
    <>
      <div>
        <div>{error.errorMessage}</div>
      </div>
    </>
  );
}
