import { FormInputProps, HiddenInput, useFormInput } from "@mongez/react-form";
import InputLabel from "./InputLabel";

export type DatePickerInputProps = FormInputProps;

export default function DatePickerInput(props: DatePickerInputProps) {
  const { name, onChange, label, value, placeholder, required, otherProps } =
    useFormInput(props);

  return (
    <>
      <HiddenInput name={name} value={value} />
      <InputLabel required={required}>{label}</InputLabel>
      <div>
        <input
          type="date"
          value={value}
          onChange={onChange as any}
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
    </>
  );
}

DatePickerInput.defaultProps = {
  //
};
