import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contacts-api';
import shortid from 'shortid';
// import * as contactActions from './phonebook-actions';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const postContact = createAsyncThunk(
  'contacts/postContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const response = await contactsApi.postContact(name, number);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const addContact = createAction(
  'contactsList/addContact',
  ({ name, number }) => ({
    payload: {
      id: shortid.generate(),
      name: name,
      number: number,
    },
  }),
);

export { fetchContacts, postContact, addContact };

// const fetchContacts = () => async dispatch => {
//   dispatch(contactActions.fetchContactsRequest());

//   try {
//     const contacts = await contactsApi.fetchContacts();
//     dispatch(contactActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactActions.fetchContactsError(error));
//   }
// };
