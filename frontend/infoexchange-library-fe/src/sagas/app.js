import {
  call,
  all,
  select,
  takeLatest,
  takeEvery,
  put
} from "redux-saga/effects";
import {
  BOOKS_FETCH_REQUESTED,
  BOOK_UPDATE_REQUESTED,
  updateSingleBook,
  updateBooks
} from "../actions/book";
import { selectActiveBook, selectPendingBook } from "../selectors/app";
import { AUTHORS_FETCH_REQUESTED, updateAuthors } from "../actions/author";
import { api } from "../utils";

/**
 * Retrieve list of books from infoexchange-library api
 */
export function* getBooks() {
  const response = yield call(api, "books/", {
    method: "GET"
  });

  if (response && response.ok) {
    const data = yield response.json();
    yield put(updateBooks(data));
  } else {
    console.log("Get Books error", JSON.stringify(response));
  }
}

/**
 * Retrieve list of authors from infoexchange-library api
 */
export function* getAuthors() {
  const response = yield call(api, "authors/", {
    method: "GET"
  });

  if (response && response.ok) {
    const data = yield response.json();
    yield put(updateAuthors(data));
  } else {
    console.log("Get Authors error", JSON.stringify(response));
  }
}

/**
 * Update book instance
 */
export function* updateBookCall() {
  const pendingBook = yield select(selectPendingBook);

  const response = yield call(
    api,
    pendingBook.pk ? `book/${pendingBook.pk}/` : "books/",
    {
      method: pendingBook.pk ? "PATCH" : "POST",
      body: {
        ...pendingBook
      }
    }
  );

  if (response && response.ok) {
    const data = yield response.json();
    yield put(updateSingleBook(data));
  } else {
    console.log("Update book error", JSON.stringify(response));
  }
}

export default function* librarySaga() {
  yield all([
    takeLatest(BOOKS_FETCH_REQUESTED, getBooks),
    takeLatest(AUTHORS_FETCH_REQUESTED, getAuthors),
    takeEvery(BOOK_UPDATE_REQUESTED, updateBookCall)
  ]);
}
