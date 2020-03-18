import { combineReducers } from "redux";
import { BOOKS_UPDATED } from "../actions/book";
import { set } from "lodash";

const INITIAL_STATE = {
  books: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKS_UPDATED:
      return {
        ...state,
        boooks: action.payload.books
      };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer
});
