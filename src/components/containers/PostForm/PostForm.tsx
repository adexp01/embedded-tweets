import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BasicForm } from "../../common/BasicForm/BasicForm";
import { FormInput } from "../../common/Input/FormInput";
import { Button } from "../../common/Button/Button";
import { FormDataContext } from "../../../context/FormDataContext";
import { IPostFormData } from "../../../interfaces/PostFormData.interface";
import * as S from "./styled";

const PostForm = () => {
  const { onSubmit } = useContext(FormDataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<IPostFormData>();

  const URL_PATTERN =
    /https:\/\/(?:www\.)?x\.com\/[a-zA-Z0-9_]+\/status\/(\d+)(?:\?.*)?$/;

  const handleFormSubmit = (data: IPostFormData) => {
    if (data && !URL_PATTERN.test(data.postUrl)) {
      setError("postUrl", {
        type: "pattern",
        message: "Invalid link",
      });

      return;
    }

    onSubmit(data);
    reset();
  };

  return (
    <S.FormWrapper>
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
      {errors.postUrl && <p style={{ color: "tomato" }}>Invalid URL</p>}
    </S.FormWrapper>
  );
};

export default PostForm;
