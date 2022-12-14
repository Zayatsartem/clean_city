import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TComment } from '../types/AdminTypes';
import { MainState } from '../types/MainTypes';
import OrderTelegram, { FreeOrderTelegram } from '../types/OrderTelegram';
import * as api from './api';

const initialState: MainState = {
  comments: [],
  error: null,
  message: null,
  freeFormMessage: null,
};

export const requestTelegram = createAsyncThunk('main/requestTelegram', (data: OrderTelegram) =>
  api.requestTelegram(data)
);

export const freeRequestTelegram = createAsyncThunk(
  'main/freeRequestTelegram',
  (data: FreeOrderTelegram) => api.freeRequestTelegram(data)
);

export const loadApprovedComments = createAsyncThunk('main/loadApprovedComments', () => {
  const fetchApprovedComments = async (): Promise<TComment[]> => {
    const response = await fetch('/api/main/comments');
    const data = await response.json();
    return data.comments;
  };
  return fetchApprovedComments();
});

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    resetError: (state) => {
      state.freeFormMessage = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadApprovedComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(loadApprovedComments.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при загрузке комментариев';
      })
      .addCase(requestTelegram.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(requestTelegram.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при отправке заявки';
      })
      .addCase(freeRequestTelegram.fulfilled, (state, action) => {
        state.freeFormMessage = action.payload.message;
      });
  },
});

export const { resetError } = mainSlice.actions;
export default mainSlice.reducer;
