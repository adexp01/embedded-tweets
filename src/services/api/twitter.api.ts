import axios from "axios";

export const getTweetByUrl = async (url: string | undefined) => {
  const { data } = await axios.get(
    `https://publish.twitter.com/oembed?url=${url}`
  );

  return data;
};
