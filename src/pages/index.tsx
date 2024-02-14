import PostForm from "src/components/containers/PostForm/PostForm";
import TweetPost from "src/components/layout/TweetPost/TweetPost";
import { FormDataProvider } from "src/context/FormDataContext";

export default function HomePage() {
  return (
    <>
      <FormDataProvider>
        <PostForm />
        <TweetPost />
      </FormDataProvider>
    </>
  );
}
