import { RootState } from '../store';
import { TNewOrder } from './Adminslice';

export const selectNewOrders = (state: RootState): TNewOrder[] => state.admin.newOrders;
export const selectAuthChecked = (state: RootState): boolean => state.auth.authChecked;
