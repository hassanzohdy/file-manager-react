import { FormInputProps } from "@mongez/react-form";
import BaseInput from "./BaseInput";

export default function TextAreaInput(props: FormInputProps) {
  return <BaseInput {...props} />;
}

TextAreaInput.defaultProps = {
  rows: 5,
  type: "textarea",
};
