import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';

import { getFilterContacts, getAllContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, phone, id }) => {
        return (
          <li key={id}>
            {name} : {phone}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
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
