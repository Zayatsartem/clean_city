import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, Credentials } from './types';
import * as api from './api';
// import { RootState } from '../store';

const initialState: AuthState = {
  authChecked: false,
  user: null,
  loginFormError: null,
};

export const getUser = createAsyncThunk('user', () => api.user());

export const login = createAsyncThunk('login', async (credentials: Credentials) => {
  if (!credentials.email.trim() || !credentials.password.trim()) {
    throw new Error('Заполните все поля');
  }
  return api.login(credentials);
});

export const logout = createAsyncThunk('logout', api.logout);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetLoginFormError: (state) => {
      state.loginFormError = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getUser.fulfilled, (state, action) => {
      state.authChecked = true;
      state.user = action.payload.exist ? action.payload.user : null;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loginFormError = null;
    })
    .addCase(login.rejected, (state, action) => {
      state.loginFormError = action.error.message;
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
    // .addCase(logout.rejected, (state) => {
    //   state.user = null;
    // });
  }
});

export const { resetLoginFormError } = authSlice.actions;

export default authSlice.reducer;
