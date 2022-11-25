import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import adminSlice from './Admin/Adminslice';
import authSlice from './Authorization/authSlice';
import mainSlice from './Main/mainSlice';

import editingSlice from './Profile/editingSlice';

import orderSlice from './Order/orderSlice';
import CommentSlice from './Comments/CommentSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    auth: authSlice,
    editing: editingSlice,
    order: orderSlice,
    admin: adminSlice,
    main: mainSlice,
    comment: CommentSlice
  },
});

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
