import { RootState } from '../store';
import { TNewOrder, TComment } from '../types/AdminTypes';

export const selectNewOrders = (state: RootState): TNewOrder[] => state.admin.newOrders;
export const selectWIPOrders = (state: RootState): TNewOrder[] => state.admin.WIPOrders;
export const selectComments = (state: RootState): TComment[] => state.admin.comments;
