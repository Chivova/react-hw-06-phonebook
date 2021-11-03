const BASE_URL = 'http://localhost:3004';
export async function fetchContacts() {
  const data = await fetch(`${BASE_URL}/contacts`).then(contacts => contacts);

  return data;
}
