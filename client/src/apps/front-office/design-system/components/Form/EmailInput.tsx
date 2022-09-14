import { FormInputProps } from "@mongez/react-form";
import { emailRule, requiredRule } from "@mongez/validator";
import BaseInput from "./BaseInput";

export default function EmailInput(props: FormInputProps) {
  return <BaseInput {...props} />;
}

EmailInput.defaultProps = {
  type: "email",
  rules: [requiredRule, emailRule],
};
