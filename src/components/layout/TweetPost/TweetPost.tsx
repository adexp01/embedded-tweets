import axios from "axios";
import { useContext, useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { FormDataContext } from "../../../context/FormDataContext";
import { extractTweetIdFromUrl } from "../../../helpers/common";
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

  const getTweetData = async (): Promise<IEmbedTweetRes> => {
    const res = await axios.post(`/api/twitter`, {
      url: postData?.postUrl,
    });

    console.log(res.data);
    return res.data;
  };

  useEffect(() => {
    if (postData?.postUrl) {
      getTweetData();
    }
  }, [postData?.postUrl]);

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
