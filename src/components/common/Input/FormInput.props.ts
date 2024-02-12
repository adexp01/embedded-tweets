import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface FormInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  placeholder: string;
  defaultValue?: string | number;
  value?: string | number;
  handleChange?: () => void;
  handleClick?: () => void;
  handleFocus?: () => void;
  handleBlur?: () => void;
  name?: string;
  type: "text" | "password";
  disabled?: boolean;
}
