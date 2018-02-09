import { apiSearch } from "../services/api";

export const searchGIPHY = term => {
  return dispatch => {
    apiSearch(term);
  };
};
