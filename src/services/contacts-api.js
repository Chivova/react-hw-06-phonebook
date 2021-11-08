const BASE_URL = 'http://localhost:3004';

async function fetchContacts() {
  const data = await fetch(`${BASE_URL}/contacts`)
    .then(response => response.json())
    .then(contacts => contacts);

  return data;
}

// import axios from 'axios';

// const BASE_URL = 'http://localhost:3004/contacts';

// async function fetchContacts() {
//   const { data } = await axios.get(`${BASE_URL}`);
//   return data;
// }

export { fetchContacts };
