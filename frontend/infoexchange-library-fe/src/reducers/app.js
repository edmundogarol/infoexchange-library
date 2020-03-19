import { combineReducers } from "redux";
import { BOOKS_UPDATED } from "../actions/book";
import { AUTHORS_UPDATED } from "../actions/author";

const INITIAL_STATE = {
  books: [],
  authors: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case BOOKS_UPDATED:
      return {
        ...state,
        books: action.payload.books
      };
    case AUTHORS_UPDATED:
      return {
        ...state,
        authors: action.payload.authors
      };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer
});
