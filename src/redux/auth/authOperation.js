import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUserApi,
  logInUserApi,
  logOutUserApi,
  registerUserApi,
} from '../../utils/phoneApi';

export const registerUser = createAsyncThunk(
  '/users/signup',
  async (data, { rejectWithValue }) => {
    try {
      const newUser = await registerUserApi(data);
      return newUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  '/users/login',
  async (data, { rejectWithValue }) => {
    try {
      const logUser = await logInUserApi(data);
      return logUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOutUser = createAsyncThunk(
  '/users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const out = await logOutUserApi();
      return out;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  '/users/refresh',
  async (_, thunkApi) => {
    const tokenStorage = thunkApi.getState().auth.token;

    if (tokenStorage === null) {
      return thunkApi.rejectWithValue();
    }
    try {
      const refreshUser = await getCurrentUserApi(tokenStorage);
      console.log(refreshUser);
      return refreshUser;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
