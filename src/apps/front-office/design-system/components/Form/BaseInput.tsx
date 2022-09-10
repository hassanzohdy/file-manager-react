import { FormInputProps, useFormInput } from "@mongez/react-form";
import { requiredRule } from "@mongez/validator";
import InputError from "./InputError";
import InputLabel from "./InputLabel";

export default function BaseInput(props: FormInputProps) {
  const {
    name,
    id,
    value,
    label,
    placeholder,
    required,
    onChange,
    onBlur,
    error,
    otherProps,
  } = useFormInput(props);

  return (
    <>
      <div className="form-control">
        <InputLabel htmlFor={id} required={required}>
          {label}
        </InputLabel>
        <input
          id={id}
          name={name}
          placeholder={placeholder as string}
          onChange={onChange}
          onBlur={onBlur as any}
          value={value}
          {...otherProps}
        />
        {error && <InputError error={error} />}
      </div>
    </>
  );
}

BaseInput.defaultProps = {
  type: "text",
  rules: [requiredRule],
};
