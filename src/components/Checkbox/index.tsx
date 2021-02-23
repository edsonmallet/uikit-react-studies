import React, { forwardRef } from "react";

import { Label, Box, Mark } from "./styles";

export interface CheckboxProps {
  label: string;
  name: string;
  value: any;
  color?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  onChange?: () => void;
}

export interface ILabelCheckbox {
  color?: string;
}

export interface IBox {
  ref: any;
}

const CheckBox: React.FC<CheckboxProps> = forwardRef(
  ({ label, name, value, color = "#f89406", ...props }: CheckboxProps, ref) => {
    const { readOnly, onChange } = props;

    return (
      <Label
        onClick={readOnly ? () => {} : onChange}
        htmlFor={name}
        color={color}
      >
        {label}

        <Box {...props} ref={ref} name={name} value={value} />
        <Mark />
      </Label>
    );
  }
);

export { CheckBox };
