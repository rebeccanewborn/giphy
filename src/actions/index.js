import { apiSearch } from "../services/api";
import { SEARCH_RESULTS, INCREMENT_OFFSET, NEW_SEARCH } from "./types";

export const searchGIPHY = (term, offset) => {
  return dispatch => {
    apiSearch(term, offset).then(res => {
      dispatch({ type: SEARCH_RESULTS, payload: res.data });
    });
  };
};

export const incrementOffset = () => {
  return { type: INCREMENT_OFFSET };
};

export const newSearch = () => {
  return { type: NEW_SEARCH };
};

// export const moreResults = (term, offset) => {
//   return dispatch => {
//     searchWithOffset(term, offset);
//   };
// };
