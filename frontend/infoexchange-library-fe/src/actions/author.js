export const AUTHORS_FETCH_REQUESTED = 'author/AUTHORS_FETCH_REQUESTED';
export const AUTHORS_UPDATED = 'author/AUTHORS_UPDATED';

export const requestAuthors = () => ({
  type: AUTHORS_FETCH_REQUESTED,
});

export const updateAuthors = authors => ({
  type: AUTHORS_UPDATED,
  payload: {
    authors,
  },
});
