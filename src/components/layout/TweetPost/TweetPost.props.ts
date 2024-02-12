import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TweetPostProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tweetId: string;
}
