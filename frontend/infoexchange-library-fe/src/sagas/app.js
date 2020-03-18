import { call, takeEvery, put } from "redux-saga/effects";
import {
  BOOKS_FETCH_REQUESTED,
  updateBooks
} from "../actions/book";
import { api } from "../utils";

/**
 * Retrieve list of books from infoexchange-library backend
 * 
 */
export function* getBooks() {
  console.log('GETTING BOOKS');

  const response = yield call(api, "authors/", {
    method: "GET",
  });

  if (response && response.ok) {
    console.log("Response", response);
    yield put(updateBooks(response.result));
  } 
  else {
    console.log("Get Books error", JSON.stringify(response));
  }
}

export default function* librarySaga() {
  yield takeEvery(BOOKS_FETCH_REQUESTED, getBooks);
}
