import React, { createContext, useState } from "react";
import { IPostFormData } from "../interfaces/PostFormData.interface";

interface IFormDataContext {
  postData: IPostFormData | null;
  onSubmit: (data: IPostFormData) => void;
}

const FormDataContext = createContext<IFormDataContext>({
  postData: null,
  onSubmit: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});

const FormDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [postData, setPostData] = useState<IPostFormData | null>(null);

  const onSubmit = (data: IPostFormData) => {
    setPostData(data);
  };

  return (
    <FormDataContext.Provider value={{ postData, onSubmit }}>
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FormDataProvider };
