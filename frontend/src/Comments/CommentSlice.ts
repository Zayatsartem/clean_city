import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiComment from './apiComment';
import { Data } from '../types/commentTypes';

const initialState: Data = {
  stars: null,
  title: null,
  orderId: null,
  commentError: null,
  status: false,
};

export const feedback = createAsyncThunk('feedback', async (data: Data) => {
  // if (data.title?.trim()) {
  //   console.log('пусто');
  //   throw new Error('Заполните поле отзыва');
  // }
  console.log(data);
  return apiComment.feedback(data);
});

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    resetCommentError: (state) => {
      state.commentError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(feedback.fulfilled, (state, action) => {
        state.stars = action.payload.stars;
        state.title = action.payload.title;
        state.commentError = 'Комментарий успешно добавлен';
      })
      .addCase(feedback.rejected, (state, action) => {
        state.commentError = action.error.message;
      });
  },
});

export const { resetCommentError } = commentSlice.actions;

export default commentSlice.reducer;
