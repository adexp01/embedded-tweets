import PostForm from "../components/containers/PostForm/PostForm";
import TweetPost from "../components/layout/TweetPost/TweetPost";
import { FormDataProvider } from "../context/FormDataContext";
import { Container } from "../components/styled/containers.styled";

export default function HomePage() {
  return (
    <Container>
      <FormDataProvider>
        <PostForm />
        <TweetPost />
      </FormDataProvider>
    </Container>
  );
}
