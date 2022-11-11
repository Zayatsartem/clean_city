type NewOrder = {

}
export const loadNewOrders = createAsyncThunk(
  'newOrders/loadNewOrders',
  () => {
    const fetchNewOrders = async (): Promise<NewOrder[]> => {
      const response = await fetch('/api/orders');
      const data = await response.json();
      return data.results;
    };
    return fetchNewOrders();
  }
);