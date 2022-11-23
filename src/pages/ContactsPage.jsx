import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { getContacts } from '../redux/contacts/contactsOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
