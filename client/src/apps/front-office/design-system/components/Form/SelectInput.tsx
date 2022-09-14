import { FormInputProps, useFormInput } from "@mongez/react-form";
import {
  lengthRule,
  maxLengthRule,
  minLengthRule,
  requiredRule,
} from "@mongez/validator";

export default function SelectInput(props: FormInputProps) {
  const { id, label, error, placeholder, onChange, name, value } =
    useFormInput(props);

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <select name={name} id={id} value={value} onChange={onChange}>
        <option value="">{placeholder}</option>
      </select>
      {error && error.errorMessage}
    </>
  );
}

SelectInput.defaultProps = {
  type: "select",
  multiple: false,
  rules: [requiredRule, minLengthRule, maxLengthRule, lengthRule],
};
