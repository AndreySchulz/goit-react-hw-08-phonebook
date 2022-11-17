import axios from 'axios';

axios.defaults.baseURL = 'https://6374c1c108104a9c5f883324.mockapi.io/contacts';

export const addContactApi = form => {
  return axios.post('/contacts', form).then(data => data.data);
};

export const fetchContactsApi = () => {
  return axios.get('/contacts').then(data => data.data);
};

export const deleteContactApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => {
    return { id };
  });
};
