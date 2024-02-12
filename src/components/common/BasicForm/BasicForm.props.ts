import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from "react";

export interface BasicFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children: ReactNode;
}
