import { call, all, takeLatest, put } from "redux-saga/effects";
import { BOOKS_FETCH_REQUESTED, updateBooks } from "../actions/book";
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

export default function* librarySaga() {
  yield all([
    takeLatest(BOOKS_FETCH_REQUESTED, getBooks),
    takeLatest(AUTHORS_FETCH_REQUESTED, getAuthors),
  ]);
}
