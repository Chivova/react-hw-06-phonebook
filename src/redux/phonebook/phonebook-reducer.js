import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postContact,
  deleteContact,
  filterContacts,
} from './phonebook-operations';

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [postContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const isLoadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [postContact.pending]: () => true,
  [postContact.fulfilled]: () => false,
  [postContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});
const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [postContact.rejected]: (_, { payload }) => payload,
  [postContact.pending]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});
export default combineReducers({
  contacts: contactsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
