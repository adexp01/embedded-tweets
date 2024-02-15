import axios from "axios";
import { useContext, useEffect, useState } from "react";
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
  const [analizeRes, setAnalizeRes] = useState(null);

  //move to a service folder
  const getTweetData = async (): Promise<IEmbedTweetRes> => {
    const { data } = await axios.post(`/api/twitter`, {
      url: postData?.postUrl,
    });

    return data;
  };

  const analizeTweet = async (tweetBody: IEmbedTweetRes) => {
    const { data } = await axios.post(`/api/ai`, {
      markup: tweetBody.html,
    });

    return data;
  };

  useEffect(() => {
    setAnalizeRes(null);

    const getTweetAndAnalize = async () => {
      const tweetData = await getTweetData();
      if (tweetData) {
        const { message } = await analizeTweet(tweetData);
        setAnalizeRes(message.content);
      }
    };

    if (postData?.postUrl) {
      getTweetAndAnalize();
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
      {analizeRes ? <p>{analizeRes}</p> : null}
    </div>
  );
};

export default TweetPost;
