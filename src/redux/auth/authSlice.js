import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  logInUser,
  logOutUser,
  registerUser,
} from './authOperation';

const handleRejected = (state, { payload }) => {
  state.error = payload;
};
// const handlePending = state => {
//   state.isLoading = true;
// };
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  error: null,
  //   isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.rejected]: handleRejected,
    [logInUser.rejected]: handleRejected,
    [logOutUser.rejected]: handleRejected,
    [getCurrentUser.rejected]: handleRejected,
    [registerUser.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOutUser.fulfilled]: state => {
      state.error = null;
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.user = payload;

      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
