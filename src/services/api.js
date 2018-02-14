import { giphyApi } from "../config/keys";

const key = giphyApi || "YOUR_KEY_HERE";

const baseURL = "https://api.giphy.com/v1/gifs";

export const apiSearch = (term, offset) => {
  const formattedTerm = term.split(" ").join("+");
  return fetch(
    `${baseURL}/search?api_key=${key}&q=${formattedTerm}&offset=${offset}&limit=24`
  ).then(res => res.json());
};

export const apiRandom = () => {
  return fetch(`${baseURL}/random?api_key=${key}`).then(res => res.json());
};
