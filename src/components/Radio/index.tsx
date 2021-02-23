// @ts-nocheck
import React, { forwardRef } from "react";

import { Label, RadioWrapper, Mark } from "./styles";

export interface RadioProps {
  label: string;
  name: string;
  value: any;
  color?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  onChange?: () => void;
}

const Radio: React.FC<RadioProps> = forwardRef(
  ({ label, name, value, color = "#f89406", ...props }: RadioProps, ref) => {
    const { readOnly, onChange } = props;

    return (
      <Label
        onClick={readOnly ? () => {} : onChange}
        htmlFor={name}
        color={color}
      >
        {label}

        <RadioWrapper {...props} ref={ref} name={name} value={value} />
        <Mark />
      </Label>
    );
  }
);

export { Radio };
