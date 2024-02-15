import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body;

  const twitterOembedApiUrl = `https://publish.twitter.com/oembed?url=${url}`;

  try {
    const twitterResponse = await axios(twitterOembedApiUrl);

    if (!twitterResponse.data) {
      throw new Error(
        `Failed to fetch from Twitter API: ${twitterResponse.statusText}`
      );
    }

    res.status(200).json(twitterResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
