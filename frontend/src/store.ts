import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import registerSlice from './Registration/registerSlice';
import authSlice from './Authorization/authSlice';
import orderSlice from './Order/orderSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    register: registerSlice,
    auth: authSlice,
    order: orderSlice,
  },
});

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
