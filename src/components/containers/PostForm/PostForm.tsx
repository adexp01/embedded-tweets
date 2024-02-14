import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BasicForm } from "../../common/BasicForm/BasicForm";
import { FormInput } from "../../common/Input/FormInput";
import { Button } from "../../common/Button/Button";
import { FormDataContext } from "../../../context/FormDataContext";
import { IPostFormData } from "src/interfaces/PostFormData.interface";

const PostForm = () => {
  const { onSubmit } = useContext(FormDataContext);

  const { register, handleSubmit, reset } = useForm<IPostFormData>();

  const handleFormSubmit = (data: IPostFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div>
      <BasicForm onSubmit={handleSubmit(handleFormSubmit)}>
        <FormInput
          placeholder="Provide Post URL"
          type="text"
          {...register("postUrl", {
            required: "URL is required",
          })}
        />
        <Button type="submit">Submit</Button>
      </BasicForm>
    </div>
  );
};

export default PostForm;
