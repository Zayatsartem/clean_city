import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TComment } from '../Admin/Adminslice';
import OrderTelegram from '../types/OrderTelegram';
import * as api from './api';

type MainState = {
  comments: TComment[];
  error: string | null;
  message: string | null;
};

const initialState: MainState = {
  comments: [],
  error: null,
  message: null,
};

export const requestTelegram = createAsyncThunk(
  'main/requestTelegram',
  (data: OrderTelegram) => api.requestTelegram(data)
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
  reducers: {},
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
    });
  },
});
export default mainSlice.reducer;
