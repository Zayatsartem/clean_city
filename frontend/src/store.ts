import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import registerSlice from './Registration/registerSlice';
import adminSlice from './Admin/Adminslice';
import authSlice from './Authorization/authSlice';
import mainSlice from './Main/mainSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    register: registerSlice,
    auth: authSlice,
    admin: adminSlice,
    main: mainSlice,
  },
});

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
