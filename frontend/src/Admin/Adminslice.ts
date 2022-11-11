import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type TNewOrder = {
  rooms:number,
  bathrooms:number,
  date:string,
  time:string,
  address:string,
  name:string,
  email:string,
  telephone:string
};
type AdminState = {
  newOrders:TNewOrder[],
  error: string | null,
};
const initialState:AdminState = {
  newOrders: [],
  error: null,
};
export const loadNewOrders = createAsyncThunk(
  'newOrders/loadNewOrders',
  () => {
    const fetchNewOrders = async (): Promise<TNewOrder[]> => {
      const response = await fetch('/api/admin/new');
      const data = await response.json();
      return data.orders;
    };
    return fetchNewOrders();
  }
);
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadNewOrders.fulfilled, (state, action) => {
        state.newOrders = action.payload;
      })
      .addCase(loadNewOrders.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при загрузке покемонов';
      });
  }
});
export default adminSlice.reducer;

