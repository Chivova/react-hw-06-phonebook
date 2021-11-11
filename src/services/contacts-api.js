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
  });
  console.log(data.body); // ---> ????????????????????????????????????
}

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
export { fetchContacts, postContact };
