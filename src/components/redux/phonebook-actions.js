import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// const addContact = createAction('phonebook/Add', (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction('phonebook/Delete');

// const filterContact = createAction('phonebook/Filter');

// export { addContact, deleteContact, filterContact };
const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

export { fetchContactsRequest, fetchContactsSuccess, fetchContactsError };
