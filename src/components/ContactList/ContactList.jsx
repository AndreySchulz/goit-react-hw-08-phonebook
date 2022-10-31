import PropTypes from 'prop-types';

const ContactList = ({ filttredContacts, removeContact }) => {
  return (
    <ul>
      {filttredContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {name} : {number}
            <button
              type="button"
              onClick={() => {
                removeContact(id);
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

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  filttredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
