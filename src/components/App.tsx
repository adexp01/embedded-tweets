import { GlobalStyle } from "../styled/globalStyles";
import PostForm from "./containers/PostForm/PostForm";
import { FormDataProvider } from "../context/FormDataContext";
import TweetPost from "./layout/TweetPost/TweetPost";

function App() {
  return (
    <>
      <GlobalStyle />
      <FormDataProvider>
        <PostForm />
        <TweetPost />
      </FormDataProvider>
    </>
  );
}

export default App;
