import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postContact,
  fetchDeleteContact,
  filterContacts,
} from './phonebook-operations';

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [postContact.fulfilled]: (state, { payload }) => [...state, payload],
  [fetchDeleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [postContact.pending]: () => true,
  [postContact.fulfilled]: () => false,
  [postContact.rejected]: () => false,

  [fetchDeleteContact.pending]: () => true,
  [fetchDeleteContact.fulfilled]: () => false,
  [fetchDeleteContact.rejected]: () => false,
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
