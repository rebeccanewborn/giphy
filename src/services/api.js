import { giphyApi } from "../config/keys";

const baseURL = "https://api.giphy.com/v1/gifs";

export const apiSearch = (term, offset) => {
  const formattedTerm = term.split(" ").join("+");
  return fetch(
    `${baseURL}/search?api_key=${giphyApi}&q=${formattedTerm}&offset=${offset}&limit=24`
  ).then(res => res.json());
};
