import { createSelector } from 'reselect';

const selectDomain = state => state.app;

export const selectBooks = createSelector(
  selectDomain,
  ({ books }) => books,
);

export const selectAuthors = createSelector(
  selectDomain,
  ({ authors }) => authors,
);