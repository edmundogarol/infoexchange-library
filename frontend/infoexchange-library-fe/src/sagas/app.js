import { call, takeEvery, put } from "redux-saga/effects";
import { BOOKS_FETCH_REQUESTED, updateBooks } from "../actions/book";
import { api } from "../utils";

/**
 * Retrieve list of books from infoexchange-library api
 */
export function* getBooks() {
  console.log("GETTING BOOKS");

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

export default function* librarySaga() {
  yield takeEvery(BOOKS_FETCH_REQUESTED, getBooks);
}
