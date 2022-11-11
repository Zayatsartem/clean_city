import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export type TNewOrder = {
  id:number,
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
  WIPOrders:TNewOrder[],
  error: string | null,
};
const initialState:AdminState = {
  newOrders: [],
  WIPOrders:[],
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
export const loadWIPOrders = createAsyncThunk(
  'WIPOrders/loadWIPOrders',
  () => {
    const fetchWIPOrders = async (): Promise<TNewOrder[]> => {
      const response = await fetch('/api/admin/inwork');
      const data = await response.json();
      return data.orders;
    };
    return fetchWIPOrders();
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
        state.error = action.error.message || 'Ошибка при загрузке заказов';
      })
      .addCase(loadWIPOrders.fulfilled, (state, action) => {
        state.WIPOrders = action.payload;
      })
      .addCase(loadWIPOrders.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при загрузке заказов';
      });
  }
});
export default adminSlice.reducer;

