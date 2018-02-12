import { combineReducers } from "redux";
import {
  SEARCH_RESULTS,
  INCREMENT_OFFSET,
  RESET_SEARCH
} from "../actions/types";

const initialResults = [];
const initialOffset = 0;

const resultsReducer = (state = initialResults, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return [...state, ...action.payload];
    case RESET_SEARCH:
      return [];
    default:
      return state;
  }
};

const offsetReducer = (state = initialOffset, action) => {
  switch (action.type) {
    case INCREMENT_OFFSET:
      return (state += 25);
    case RESET_SEARCH:
      return 0;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  results: resultsReducer,
  offset: offsetReducer
});
