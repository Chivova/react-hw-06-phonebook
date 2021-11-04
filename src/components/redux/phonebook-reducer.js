import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phonebook-actions';

const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,

  //   [deleteContact]: (state, { payload }) =>
  //     state.filter(contact => contact.id !== payload),
});

const isLoadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});
// const filter = createReducer('', {
//   [filterContact]: (_, { payload }) => payload,
// });

const errorReducer = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
});
export default combineReducers({
  contacts: contactsReducer,
  isLoading:isLoadingReducer,
  error:errorReducer,
  //   filter,
});
