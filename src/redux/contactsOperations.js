import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  fetchContactsApi,
  deleteContactApi,
} from 'utils/phoneApi';

export const getContacts = createAsyncThunk(
  'contact/get',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContactsApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contact/post',
  async (data, thunkApi) => {
    try {
      const contacts = await addContactApi(data);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = deleteContactApi(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
