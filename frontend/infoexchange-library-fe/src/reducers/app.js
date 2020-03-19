import { combineReducers } from "redux";
import {
  BOOKS_UPDATED,
  BOOK_UPDATE_PENDING,
  BOOKID_UPDATE_SELECTED,
  BOOK_SINGLE_UPDATED
} from "../actions/book";
import { AUTHORS_UPDATED } from "../actions/author";
import { remove } from "lodash";

const INITIAL_STATE = {
  books: [],
  authors: [],
  selectedId: null,
  pendingDetails: {}
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKS_UPDATED:
      return {
        ...state,
        books: action.payload.books
      };
    case BOOK_SINGLE_UPDATED:
      const updatedBook = action.payload.book;
      const removeUpdated = remove(
        state.books,
        book => book.pk === updatedBook.pk
      );
      return {
        ...state,
        books: state.books.concat(updatedBook)
      };
    case BOOK_UPDATE_PENDING:
      return {
        ...state,
        pendingDetails: action.pending
      };
    case BOOKID_UPDATE_SELECTED:
      return {
        ...state,
        selectedId: action.id
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
