const getContacts = state => state.contacts;
const getFilter = state => state.filter;

const getVisibileContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedContacts = filter.toLocaleLowerCase();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedContacts),
  );
};

export { getContacts, getFilter, getVisibileContacts };
