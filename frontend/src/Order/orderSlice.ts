import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import OrderTypes from '../types/OrderTypes';
import OrderState from './OrderState';

const initialState: OrderState = {
  user: null,
  orderFormError: null,
  order: null,
};

export const order = createAsyncThunk('order', async (data: OrderTypes) => {
  if (!data.address.trim() || !data.date.trim()) {
    throw new Error('заполните  все поля');
  }

  return api.orderData(data);
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrderFormError: (state) => {
      state.orderFormError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(order.fulfilled, (state, action) => {
        state.order = action.payload;
        state.orderFormError = null;
      })
      .addCase(order.rejected, (state, action) => {
        state.orderFormError = action.error.message;
      });
  },
});

export default orderSlice.reducer;
