export const BOOKS_FETCH_REQUESTED = 'book/BOOKS_FETCH_REQUESTED';
export const BOOK_UPDATE_REQUESTED = 'book/BOOK_UPDATE_REQUESTED';
export const BOOK_UPDATE_PENDING = 'book/BOOK_UPDATE_PENDING';
export const BOOKID_UPDATE_SELECTED = 'book/BOOKID_UPDATE_SELECTED';
export const BOOK_SINGLE_UPDATED = 'book/BOOK_SINGLE_UPDATED';
export const BOOKS_UPDATED = 'book/BOOKS_UPDATED';

export const updatePendingBook = pending => ({
  type: BOOK_UPDATE_PENDING,
  pending,
});

export const updateSelectedBookId = id => ({
  type: BOOKID_UPDATE_SELECTED,
  id,
});

export const requestBooks = () => ({
  type: BOOKS_FETCH_REQUESTED,
});

export const updateBooks = books => ({
  type: BOOKS_UPDATED,
  payload: {
    books,
  },
});

export const updateSingleBook = book => ({
  type: BOOK_SINGLE_UPDATED,
  payload: {
    book,
  },
});


export const updateBook = () => ({
  type: BOOK_UPDATE_REQUESTED,
});