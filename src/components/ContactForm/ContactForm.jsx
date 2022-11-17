import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactsOperations';

import { getAllContacts } from 'redux/selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    formContact(name, phone);
    reset();
  };
  const formContact = (name, phone) => {
    if (
      contacts.some(contact => {
        return contact.name === name || contact.phone === phone;
      })
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContacts({ name, phone, id: nanoid() }));
  };
  const inputValueForm = e => {
    const { value } = e.target;

    switch (e.target.name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
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
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={inputValueForm}
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
