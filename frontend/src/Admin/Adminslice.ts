import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type TComment = {
  id:number,
  date:string,
  name:string,
  title:string,
};
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
  comments:TComment[],
  error: string | null,
};
const initialState:AdminState = {
  newOrders: [],
  WIPOrders: [],
  comments: [],
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
export const addWIPOrder = createAsyncThunk(
  'newOrders/addWIPOrder',
  (id:number) => {
    const fetchAddWIPOrder = async (): Promise<any> => {
      const response = await fetch('/api/admin/new', {
        method: 'put',
        headers: {
          'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ id }),
      });
      const data = response.json();
      return data;
    };
    return fetchAddWIPOrder();
  }
);
export const cancelNewOrder = createAsyncThunk(
  'newOrders/cancelOrder',
  (id:number) => {
    const fetchCancelOrder = async (): Promise<any> => {
      const response = await fetch('/api/admin/new', {
        method: 'delete',
        headers: {
          'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ id }),
      });
      const data = response.json();
      return data;
    };
    return fetchCancelOrder();
  }
);
export const doneWIPOrder = createAsyncThunk(
  'WIPOrders/doneWIPOrder',
  (id:number) => {
    const fetchDoneOrder = async (): Promise<any> => {
      const response = await fetch('/api/admin/inwork', {
        method: 'put',
        headers: {
          'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ id }),
      });
      const data = response.json();
      return data;
    };
    return fetchDoneOrder();
  }
);
export const loadComments = createAsyncThunk(
  'comments/loadComments',
  () => {
    const fetchComments = async (): Promise<TComment[]> => {
      const response = await fetch('/api/admin/comments');
      const data = await response.json();
      return data.comments;
    };
    return fetchComments();
  }
);
export const publishComment = createAsyncThunk(
  'comments/publishComment',
  (id:number) => {
    const fetchPublishComment = async (): Promise<TComment[]> => {
      const response = await fetch('/api/admin/comments', {
        method: 'put',
        headers: {
          'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ id }),
      });

      const data = await response.json();
      return data.comments;
    };
    return fetchPublishComment();
  }
);
export const deleteCommentForAll = createAsyncThunk(
  'comments/deleteComment',
  (id:number) => {
    const fetchDeleteComment = async (): Promise<TComment[]> => {
      const response = await fetch('/api/admin/comments', {
        method: 'delete',
        headers: {
          'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ id }),
      });

      const data = await response.json();
      return data.comments;
    };
    return fetchDeleteComment();
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
      })
      .addCase(addWIPOrder.fulfilled, (state, action) => {
        state.newOrders = action.payload.orders;
        state.WIPOrders = action.payload.WIPorders;
      })
      .addCase(addWIPOrder.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при изменении статуса заказов';
      })
      .addCase(cancelNewOrder.fulfilled, (state, action) => {
        state.newOrders = action.payload.orders;
      })
      .addCase(cancelNewOrder.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при удалении заказа';
      })
      .addCase(doneWIPOrder.fulfilled, (state, action) => {
        state.WIPOrders = action.payload.WIPorders;
      })
      .addCase(doneWIPOrder.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при удалении заказа';
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(loadComments.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при загрузке комментариев';
      })
      .addCase(publishComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(publishComment.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при публикации комментариев';
      })
      .addCase(deleteCommentForAll.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(deleteCommentForAll.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка при удалении комментариев';
      });
  }
});
export default adminSlice.reducer;
