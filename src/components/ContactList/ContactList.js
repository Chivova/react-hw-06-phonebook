import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/phonebook-actions';
import { getVisibileContacts } from '../redux/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(getVisibileContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <ul className={s.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
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
