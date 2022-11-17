export const getAllContacts = state => state.contacts.items;

// export const getFilterContacts = () => {
//   state.contacts.item.filter(({ name }) =>
//     name?.toLowerCase().includes(state.filter.toLowerCase())
//   );
// };

export const getFilter = state => state.filter;
