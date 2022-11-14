import { RootState } from '../store';
import Order from '../types/OrderTypes';
import User from '../types/UserTypes';

export const selectOrder = (state: RootState): Order | null | undefined => state.order.order;
export const selectUser = (state: RootState): User | null | undefined => state.order.user;
export const selectOrdeFormError = (state: RootState): string | null | undefined =>
  state.order.orderFormError;
