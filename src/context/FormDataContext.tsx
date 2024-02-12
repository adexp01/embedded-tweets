import React, { createContext, useState } from "react";

interface IFormData {
  postUrl: string;
}

interface IFormDataContext {
  postData: IFormData | null;
  onSubmit: (data: IFormData) => void;
}

const FormDataContext = createContext<IFormDataContext>({
  postData: null,
  onSubmit: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});

const FormDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [postData, setPostData] = useState<IFormData | null>(null);

  const onSubmit = (data: IFormData) => {
    setPostData(data);
  };

  return (
    <FormDataContext.Provider value={{ postData, onSubmit }}>
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FormDataProvider };
