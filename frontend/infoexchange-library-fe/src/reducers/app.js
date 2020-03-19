import { combineReducers } from "redux";
import { BOOKS_UPDATED } from "../actions/book";

const INITIAL_STATE = {
  books: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case BOOKS_UPDATED:
      return {
        ...state,
        books: action.payload.books
      };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer
});
