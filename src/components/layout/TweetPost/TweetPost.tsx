import { TwitterTweetEmbed } from "react-twitter-embed";
import { useContext, useEffect, useState } from "react";
import { FormDataContext } from "../../../context/FormDataContext";
import { getTweetByUrl } from "../../../services/api/twitter.api";

const TweetPost = () => {
  const { postData } = useContext(FormDataContext);
  const [postDescData, setPostDescData] = useState(null);

  useEffect(() => {
    const getTweetData = async () => {
      const res = await getTweetByUrl(postData?.postUrl);
      setPostDescData(res);
    };

    if (postData?.postUrl) {
      getTweetData();
    }
  }, [postData?.postUrl]);

  function extractTweetIdFromUrl(url: string | undefined) {
    const regex = /status\/(\d+)/;
    const match = url?.match(regex);
    return match ? match[1] : "No result";
  }

  console.log(JSON.stringify(postDescData));

  return (
    <div>
      {postData && (
        <TwitterTweetEmbed
          key={extractTweetIdFromUrl(postData?.postUrl)}
          tweetId={extractTweetIdFromUrl(postData?.postUrl)}
          placeholder={"Loading..."}
        />
      )}
    </div>
  );
};

export default TweetPost;
