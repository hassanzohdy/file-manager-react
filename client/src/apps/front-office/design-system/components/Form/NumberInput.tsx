import { FormInputProps } from "@mongez/react-form";
import { maxRule, minRule, numberRule, requiredRule } from "@mongez/validator";
import BaseInput from "./BaseInput";

export default function NumberInput(props: FormInputProps) {
  return <BaseInput {...props} />;
}

NumberInput.defaultProps = {
  type: "text",
  rule: "number",
  rules: [requiredRule, minRule, maxRule, numberRule],
};
