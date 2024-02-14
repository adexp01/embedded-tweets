import PostForm from "../components/containers/PostForm/PostForm";
import TweetPost from "../components/layout/TweetPost/TweetPost";
import { FormDataProvider } from "../context/FormDataContext";

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
