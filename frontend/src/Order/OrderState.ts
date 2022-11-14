import Order from '../types/OrderTypes';
import User from '../types/UserTypes';

export default interface OrderState {
  order: Order | null;
  user?: User | null;
  orderFormError?: string | null;
}
