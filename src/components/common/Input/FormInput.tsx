import { forwardRef, ForwardedRef } from "react";
import { FormInputProps } from "./FormInput.props";

export const FormInput = forwardRef(
  (
    {
      label,
      placeholder,
      defaultValue,
      value,
      handleChange,
      handleClick,
      handleFocus,
      handleBlur,
      name,
      type,
      disabled,
      ...props
    }: FormInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        {label ? <label>{label}</label> : null}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={handleChange}
          onClick={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
