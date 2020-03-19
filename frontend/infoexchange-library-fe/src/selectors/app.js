import { createSelector } from "reselect";

const selectDomain = state => state.app;

export const selectBooks = createSelector(selectDomain, ({ books }) => books);

export const selectPendingBook = createSelector(
  selectDomain,
  ({ pendingDetails }) => pendingDetails
);

export const selectAuthors = createSelector(
  selectDomain,
  ({ authors }) => authors
);

export const selectActiveBook = createSelector(
  selectDomain,
  ({ selectedId, books, authors }) => {
    if (books.length && authors.length && selectedId !== null) {
      const book = books.find(
        book => parseInt(book.pk, 10) === parseInt(selectedId, 10)
      );
      const author = authors.find(
        author => parseInt(author.pk, 10) === parseInt(book.author, 10)
      );
      return { book, author };
    }
    return { book: undefined, author: undefined };
  }
);
