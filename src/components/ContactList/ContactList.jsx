import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getFilterContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {name} : {number}
            <button
              type="button"
              onClick={() => {
                dispatch(removeContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
