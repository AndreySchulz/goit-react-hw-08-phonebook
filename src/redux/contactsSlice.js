import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContact } from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    removeContact(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(el => el.id !== payload.id);
    },
  },
});

export default contactsSlice.reducer;
