import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import RegisterData from './RegisterData';
import RegaState from './RegaState';

const initialState: RegaState = {
  authChecked: false,
  user: null,
  registerFormError: null,
};

export const getUser = createAsyncThunk('/user', () => api.user()); // проверка на есть ли юзер роутер написан на беке

export const regist = createAsyncThunk('auth/register', async (data: RegisterData) => {
  if (!data.name.trim() || !data.password.trim() || !data.email.trim()) {
    throw new Error('Не все поля заполнены');
  }

  return api.register(data);
});

const registerSlice = createSlice({
  name: 'rega',
  initialState,
  reducers: {
    // 332 редьюсер для очистки ошибки
    resetRegisterFormError: (state) => {
      state.registerFormError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regist.fulfilled, (state, action) => {
        state.user = action.payload;
        state.registerFormError = null;
      })
      .addCase(regist.rejected, (state, action) => {
        state.registerFormError = action.error.message;
      });
  },
});

export default registerSlice.reducer;
