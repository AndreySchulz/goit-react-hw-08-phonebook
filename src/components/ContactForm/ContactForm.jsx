import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getAllContacts } from 'redux/selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    formContact(name, number);
    reset();
  };
  const formContact = (name, number) => {
    if (
      contacts.some(contact => {
        return contact.name === name || contact.number === number;
      })
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number, id: nanoid() }));
  };
  const inputValueForm = e => {
    const { value } = e.target;
    switch (e.target.name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputValueForm}
        />
      </label>

      <label htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputValueForm}
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
