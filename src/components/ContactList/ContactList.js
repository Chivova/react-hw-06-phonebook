import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/phonebook';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibileContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.isLoading);

  const onDeleteContact = id =>
    dispatch(contactsOperations.fetchDeleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      <ul className={s.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.contactsItem} key={id}>
            {name}: {number}
            <button
              className={s.contactsBtn}
              onClick={() => onDeleteContact(id)}
              type="button"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
