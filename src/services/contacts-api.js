import shortid from 'shortid';
import axios from 'axios';
const BASE_URL = 'http://localhost:3004/contacts';

async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}

async function postContact(name, number) {
  const { data } = await axios.post(`${BASE_URL}`, {
    id: shortid(),
    name,
    number,
  });
  return data;
}

async function fetchDeleteContact(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
}

export { fetchContacts, postContact, fetchDeleteContact };

// Через FETCH

// async function fetchContacts() {
//   const data = await fetch(`${BASE_URL}`)
//     .then(response => response.json())
//     .then(contacts => contacts);

//   return data;
// }

// async function postContact(name, number) {
//   const contact = {
//     id: shortid(),
//     name,
//     number,
//   };
//   const data = await fetch(`${BASE_URL}`, {
//     method: 'POST',
//     body: JSON.stringify(contact),
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//   })
//     .then(response => response.json())
//     .then(data => data);
//   return data;
// }

//  fetchDeleteContact ===> НЕ ПРАВИЛЬНО РАБОТАЕТ

// async function fetchDeleteContact(id) {
//   const contactId = await fetch(`${BASE_URL}/${id}`, {
//     method: 'DELETE',
//   })
//     .then(response => response.json())
//     .then(contactId => contactId);

//   return contactId;
// }
