import { apiSearch, apiRandom } from "../services/api";
import {
  SEARCH_RESULTS,
  INCREMENT_OFFSET,
  RESET_SEARCH,
  SET_RANDOM,
  CLEAR_RANDOM,
  MENU_SWITCH
} from "./types";

export const menuSwitch = () => {
  return { type: MENU_SWITCH };
};

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

export const resetSearch = () => {
  return { type: RESET_SEARCH };
};

export const randomGIPHY = () => {
  return dispatch => {
    apiRandom().then(res => {
      dispatch({ type: SET_RANDOM, payload: res.data });
    });
  };
};

export const clearRandom = () => {
  return { type: CLEAR_RANDOM };
};
