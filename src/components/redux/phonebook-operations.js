import * as contactActions from './phonebook-actions';
import * as contactsApi from '../services/contacts-api';

const contactsOperations = () => async dispatch => {
  dispatch(contactActions.fetchContactsRequest());

  try {
    const contacts = await contactsApi.fetchContacts();
    dispatch(contactActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactActions.fetchContactsError(error));
  }
};

export default contactsOperations;
