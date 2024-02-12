import { BasicFormProps } from "./BasicForm.props";

export const BasicForm = ({ children, ...props }: BasicFormProps) => {
  return <form {...props}>{children}</form>;
};
