import { apiSearch } from "../services/api";
import { SEARCH_RESULTS } from "./types";

export const searchGIPHY = term => {
  return dispatch => {
    apiSearch(term).then(res => {
      dispatch({ type: SEARCH_RESULTS, payload: res.data });
    });
  };
};
