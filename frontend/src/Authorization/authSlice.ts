import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, Credentials } from './types';
import * as api from './api';
import * as apiReg from '../Registration/apiReg';
import apiProfile from '../Profile/apiProfileOrders';
import RegisterData from '../Registration/RegisterData';

// import { RootState } from '../store';

const initialState: AuthState = {
  authChecked: false,
  user: null,
  loginFormError: null,
  registerFormError: null,
  orders: null,
};

export const getUser = createAsyncThunk('user', () => api.user());

export const login = createAsyncThunk('login', async (credentials: Credentials) => {
  if (!credentials.email.trim() || !credentials.password.trim()) {
    throw new Error('Заполните все поля');
  }
  return api.login(credentials);
});

export const logout = createAsyncThunk('logout', api.logout);

export const regist = createAsyncThunk('auth/register', async (data: RegisterData) => {
  if (!data.name.trim() || !data.password.trim() || !data.email.trim()) {
    throw new Error('Не все поля заполнены');
  }

  return apiReg.register(data);
});

export const getOrders = createAsyncThunk('getOrder', async () => apiProfile.getOrders());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetLoginFormError: (state) => {
      state.loginFormError = null;
    },
    resetRegisterFormError: (state) => {
      state.registerFormError = null;
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
    })
    .addCase(regist.fulfilled, (state, action) => {
      state.user = action.payload;
      state.registerFormError = null;
    })
    .addCase(regist.rejected, (state, action) => {
      state.registerFormError = action.error.message;
    })
    .addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    })
    .addCase(getOrders.rejected, (state, action) => {
      state.registerFormError = action.error.message;
    });
  }
});

export const { resetLoginFormError } = authSlice.actions;

export default authSlice.reducer;
