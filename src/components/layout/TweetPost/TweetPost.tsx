import { TwitterTweetEmbed } from "react-twitter-embed";
import { useContext, useEffect, useState } from "react";
import { FormDataContext } from "../../../context/FormDataContext";
import axios from "axios";

interface IEmbedTweetRes {
  url: string;
  author_name: string;
  author_url: string;
  html: string;
  width: number;
  height: number | null;
  type: string;
  cache_age: string;
  provider_name: string;
  provider_url: string;
  version: string;
}

const TweetPost = () => {
  const { postData } = useContext(FormDataContext);
  const [postDescData, setPostDescData] = useState<IEmbedTweetRes | null>(null);

  const getTweetData = async () => {
    const res = await axios.post(`/api/twitter`, {
      url: postData?.postUrl,
    });
    setPostDescData(res.data);
  };

  useEffect(() => {
    if (postData?.postUrl) {
      getTweetData();
    }
  }, [postData?.postUrl]);

  function extractTweetIdFromUrl(url: string | undefined) {
    const regex = /status\/(\d+)/;
    const match = url?.match(regex);
    return match ? match[1] : "No result";
  }

  console.log(postDescData?.html);

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
