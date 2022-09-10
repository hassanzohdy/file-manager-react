import { FormInputProps } from "@mongez/react-form";
import { floatRule, maxRule, minRule, requiredRule } from "@mongez/validator";
import BaseInput from "./BaseInput";

export default function FloatInput(props: FormInputProps) {
  return <BaseInput {...props} />;
}

FloatInput.defaultProps = {
  type: "float",
  rules: [requiredRule, minRule, maxRule, floatRule],
};
