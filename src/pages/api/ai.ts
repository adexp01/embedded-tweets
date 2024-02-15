import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const ai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_GPT_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { markup } = req.body;

  try {
    const completion = await ai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant, that will achive a tweet text and provide a analize",
        },
        {
          role: "user",
          content: `I got a tweet title. You have to provide a analize of this text context. 
            A tweet has this text: """${markup}""", which includes some html tags that you need to ignore.
            
          `,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    res.status(200).json(completion.choices[0]);
  } catch (error) {
    console.log(error);
  }
}
