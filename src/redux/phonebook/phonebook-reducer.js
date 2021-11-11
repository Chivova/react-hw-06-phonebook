import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, addContact, postContact } from './phonebook-operations';

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  // [addContact]: (state, { payload }) => [...state, { payload }],
  [postContact.fulfilled]: (state, { payload }) => [...state, payload],
  //   [deleteContact]: (state, { payload }) =>
  //     state.filter(contact => contact.id !== payload),
});

const isLoadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});
// const filter = createReducer('', {
//   [filterContact]: (_, { payload }) => payload,
// });

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});
export default combineReducers({
  contacts: contactsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  //   filter,
});
