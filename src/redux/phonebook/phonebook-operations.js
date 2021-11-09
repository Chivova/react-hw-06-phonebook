import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contacts-api';
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

export { fetchContacts };

// const fetchContacts = () => async dispatch => {
//   dispatch(contactActions.fetchContactsRequest());

//   try {
//     const contacts = await contactsApi.fetchContacts();
//     dispatch(contactActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactActions.fetchContactsError(error));
//   }
// };
