export const BOOKS_FETCH_REQUESTED = 'book/BOOKS_FETCH_REQUESTED';
export const BOOKS_UPDATED = 'book/BOOKS_UPDATED';

export const requestBooks = () => ({
  type: BOOKS_FETCH_REQUESTED,
});

export const updateBooks = books => ({
  type: BOOKS_UPDATED,
  payload: {
    books,
  },
});
