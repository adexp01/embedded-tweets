import { TwitterTweetEmbed } from "react-twitter-embed";
import { useContext } from "react";
import { FormDataContext } from "../../../context/FormDataContext";

const TweetPost = () => {
  const { postData } = useContext(FormDataContext);

  function extractTweetIdFromUrl(url: string | undefined) {
    const regex = /status\/(\d+)/;
    const match = url?.match(regex);
    return match ? match[1] : "No result";
  }

  return (
    <div>
      {postData && (
        <TwitterTweetEmbed
          tweetId={extractTweetIdFromUrl(postData?.postUrl)}
          placeholder={"Loading..."}
        />
      )}
    </div>
  );
};

export default TweetPost;
