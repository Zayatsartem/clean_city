import { RootState } from '../store';
import { TComment, TNewOrder } from './Adminslice';

export const selectNewOrders = (state: RootState): TNewOrder[] => state.admin.newOrders;
export const selectWIPOrders = (state: RootState): TNewOrder[] => state.admin.WIPOrders;
export const selectComments = (state: RootState): TComment[] => state.admin.comments;
