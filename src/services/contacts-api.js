import shortid from 'shortid';
// import axios from 'axios';
const BASE_URL = 'http://localhost:3004';

async function fetchContacts() {
  const data = await fetch(`${BASE_URL}/contacts`)
    .then(response => response.json())
    .then(contacts => contacts);

  return data;
}

async function postContact(name, number) {
  const contact = {
    id: shortid(),
    name,
    number,
  };
  const data = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(data => data);
  return data;
}

async function fetchDeleteContact(id) {
  const contactId = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(id),
  })
    .then(response => response.json())
    .then(contactId => contactId);
  console.log(contactId);
  return contactId;
}

export { fetchContacts, postContact, fetchDeleteContact };

// Через AXIOS
// async function fetchContacts() {
//   const { data } = await axios.get(`${BASE_URL}`);
//   return data;
// }

// async function postContact(name, number) {
//   const { data } = await axios.post(`${BASE_URL}/contacts`, {
//     id: shortid(),
//     name,
//     number,
//   });
//   return data;
// }
// async function deleteContact(id) {
//   await axios.delete(`${BASE_URL}/contacts/${id}`);
//   console.log(id);
//   return id;
// }
