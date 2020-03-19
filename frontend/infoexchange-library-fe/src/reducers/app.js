import { combineReducers } from "redux";
import { BOOKS_UPDATED } from "../actions/book";

const INITIAL_STATE = {
  books: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKS_UPDATED:
      console.log('action', action);

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
