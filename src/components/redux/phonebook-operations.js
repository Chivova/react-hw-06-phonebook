import * as contactActions from './phonebook-actions';
import fetchContacts from '../services/contacts-api';

const fetchPhonebook = () => async dispatch => {
  dispatch(contactActions.fetchContactsRequest());

  try {
    const contacts = await fetchContacts();
    dispatch(contactActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactActions.fetchContactsError(error));
  }
};

export default fetchPhonebook;
