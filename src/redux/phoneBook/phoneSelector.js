import { createSelector } from "reselect";

export const getLoading = (state) => state.contacts.loading;
export const getFilter = (state) => state.contacts.filter;
export const getAllContacts = (state) => state.contacts.items;

export const getUniqContact = createSelector(
  [getFilter, getAllContacts],
  (filter, allContacts) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
