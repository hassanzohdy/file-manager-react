import { FormInputProps } from "@mongez/react-form";
import { integerRule, maxRule, minRule, requiredRule } from "@mongez/validator";
import BaseInput from "./BaseInput";

export default function IntegerInput(props: FormInputProps) {
  return <BaseInput {...props} />;
}

IntegerInput.defaultProps = {
  type: "integer",
  rules: [requiredRule, minRule, maxRule, integerRule],
};
