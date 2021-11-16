import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/phonebook';
import { contactsSelectors } from 'redux/phonebook';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filterWrapp}>
      <h2 className={s.filterTitle}>Contacts</h2>
      <label>
        <p className={s.filterText}>Find Contacts By Name</p>
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={e =>
            dispatch(contactsOperations.filterContacts(e.target.value))
          }
        />
      </label>
    </div>
  );
}
