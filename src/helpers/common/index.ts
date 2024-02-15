export function extractTweetIdFromUrl(url: string | undefined) {
  const regex = /status\/(\d+)/;
  const match = url?.match(regex);
  return match ? match[1] : "No results";
}
