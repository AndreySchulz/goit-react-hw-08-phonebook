import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserApi = data => {
  return axios.post('/users/signup', data).then(res => {
    token.set(res.data.token);
    console.log(token);
    return res.data;
  });
};

export const logInUserApi = data => {
  return axios.post('/users/login', data).then(res => {
    token.set(res.data.token);
    return res.data;
  });
};
export const logOutUserApi = () => {
  return axios.post('/users/logout').then(res => {
    token.unset();
    return res.data;
  });
};
export const getCurrentUserApi = tokenStorage => {
  token.set(tokenStorage);
  return axios.get('/users/current').then(res => {
    console.log(res.data);
    return res.data;
  });
};

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
