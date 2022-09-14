import { FormInputProps, HiddenInput, useFormInput } from "@mongez/react-form";
import Is from "@mongez/supportive-is";
import { useState } from "react";
import InputLabel from "./InputLabel";

export type CheckboxProps = FormInputProps & {
  defaultChecked?: boolean;
  checked?: boolean;
};

export default function SwitchButton(props: CheckboxProps) {
  const [enabled, setEnabled] = useState(
    Is.bool(props.checked)
      ? props.checked
      : Is.bool(props.defaultChecked)
      ? props.defaultChecked
      : false,
  );
  const { value, label, name, id, setValue } = useFormInput(props);

  const updateSwitch = (newState: any) => {
    setEnabled(newState);

    setValue(newState ? props.value || props.defaultValue || 1 : null);
  };

  const toggle = () => {
    const newState = !enabled;

    setEnabled(newState);
    setValue(newState ? props.value || props.defaultValue || 1 : null);
  };

  return (
    <>
      {enabled && <HiddenInput name={name} value={value} />}
      <InputLabel onClick={toggle} htmlFor={id}>
        {label}
      </InputLabel>

      <input type="checkbox" checked={enabled} onChange={updateSwitch} />
    </>
  );
}

SwitchButton.defaultProps = {};
