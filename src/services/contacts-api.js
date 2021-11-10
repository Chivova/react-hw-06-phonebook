import axios from 'axios';
const BASE_URL = 'http://localhost:3004';

async function fetchContacts() {
  const data = await fetch(`${BASE_URL}/contacts`)
    .then(response => response.json())
    .then(contacts => contacts);

  return data;
}

// async function addContact(name, number) {
//   const data = await fetch(`${BASE_URL}/contacts`, {
//     method: 'POST',
//     name,
//     number,
//   });
//   return data;
// }

// const BASE_URL = 'http://localhost:3004/contacts';

// async function fetchContacts() {
//   const { data } = await axios.get(`${BASE_URL}`);
//   return data;
// }

async function addContact(name, number) {
  const data = await axios.post(`${BASE_URL}`, {
    name,
    number,
  });
  return data;
}
export { fetchContacts, addContact };
