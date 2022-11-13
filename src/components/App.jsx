import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export function App() {
  // // const [contacts, setContacts] = useState(
  // //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // // );
  // // const [filter, setFilter] = useState('');

  // // useEffect(() => {
  // //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // // }, [contacts]);
  // const contacts = useSelector(getAllContacts);
  // const dispatch = useDispatch();
  // const inputValueForm = e => {
  //   const { value } = e.target;

  //   setFilter(value);
  // };

  // const addContact = ({ name, number }) => {
  //   // if (
  //   //   contacts.some(contact => {
  //   //     return contact.name === name || contact.number === number;
  //   //   })
  //   // ) {
  //   //   return alert(`${name} is already in contacts`);
  //   // }
  //   dispatch(add({ name, number }));
  // };

  // // const filterContact = () => {
  // //   if (filter.length === 0) return contacts;
  // //   const filttredContacts = contacts.filter(el =>
  // //     el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  // // //   );
  // // //   return filttredContacts;
  // // };
  // const removeContact = id => {
  //   // setContacts(prev => prev.filter(el => el.id !== id));
  //   dispatch(remove(id));
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
