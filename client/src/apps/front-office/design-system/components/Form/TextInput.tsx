import { FormInputProps } from "@mongez/react-form";
import {
  lengthRule,
  maxLengthRule,
  maxRule,
  minLengthRule,
  minRule,
  patternRule,
  requiredRule,
} from "@mongez/validator";
import BaseInput from "./BaseInput";

export default function TextInput(props: FormInputProps) {
  return <BaseInput {...props} />;
}

TextInput.defaultProps = {
  type: "text",
  rules: [
    requiredRule,
    minLengthRule,
    maxLengthRule,
    lengthRule,
    minRule,
    maxRule,
    patternRule,
  ],
};
