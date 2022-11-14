import {
 createAsyncThunk, createSlice,
} from '@reduxjs/toolkit';
import User from '../types/UserTypes';
import api from './api';
import EditData, { EditState } from './profileTypes';

// export const selectUser = (state: RootState): User | null | undefined => state.auth.user;

export const initialUser: User = {
  id: 1,
  name: 'hello',
  email: 'vyscgy@isc',
  telephone: '673748',
  password: 'snxsxn',
  admin: true,
};

export const initialState: EditState = {
  user: initialUser,
  editFormError: null
};

export const editProfile = createAsyncThunk('edit', async (data: EditData) => api.editProfile(data));

const editingSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    resetEditFormError: (state) => {
      state.editFormError = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(editProfile.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(editProfile.rejected, (state, action) => {
      state.editFormError = action.error.message || 'Ошибка изменения профиля';
    });
  },
});

export const { resetEditFormError } = editingSlice.actions;
export default editingSlice.reducer;
