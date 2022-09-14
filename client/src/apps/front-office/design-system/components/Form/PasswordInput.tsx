import { FormInputProps } from "@mongez/react-form";
import {
  lengthRule,
  matchElementRule,
  maxLengthRule,
  minLengthRule,
  requiredRule,
} from "@mongez/validator";
import BaseInput from "./BaseInput";

export default function PasswordInput(props: FormInputProps) {
  return <BaseInput {...props} />;
}

PasswordInput.defaultProps = {
  type: "password",
  rules: [
    requiredRule,
    minLengthRule,
    lengthRule,
    maxLengthRule,
    matchElementRule,
  ],
};
