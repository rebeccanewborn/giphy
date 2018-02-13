import { combineReducers } from "redux";
import {
  SEARCH_RESULTS,
  INCREMENT_OFFSET,
  RESET_SEARCH,
  SET_RANDOM,
  CLEAR_RANDOM,
  MENU_SWITCH
} from "../actions/types";

const initialResults = [];
const initialOffset = 0;
const initialRandom = {};

const resultsReducer = (state = initialResults, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return [...state, ...action.payload];
    case RESET_SEARCH:
      return initialResults;
    case MENU_SWITCH:
      return initialResults;
    default:
      return state;
  }
};

const offsetReducer = (state = initialOffset, action) => {
  switch (action.type) {
    case INCREMENT_OFFSET:
      return (state += 25);
    case RESET_SEARCH:
      return initialOffset;
    case MENU_SWITCH:
      return initialOffset;
    default:
      return state;
  }
};

const randomReducer = (state = initialRandom, action) => {
  switch (action.type) {
    case SET_RANDOM:
      return action.payload;
    case CLEAR_RANDOM:
      return initialRandom;
    case MENU_SWITCH:
      return initialRandom;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  results: resultsReducer,
  offset: offsetReducer,
  random: randomReducer
});
