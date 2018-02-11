import { combineReducers } from "redux";
import { SEARCH_RESULTS } from "../actions/types";

const initialResults = [];
const initialOffset = 0;

const resultsReducer = (state = initialResults, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

const offsetReducer = (state = initialOffset, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const reducer = combineReducers({
  results: resultsReducer,
  offset: offsetReducer
});
