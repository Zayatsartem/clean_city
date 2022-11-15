import User from '../types/UserTypes';
import Order from '../types/OrderTypes';

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
  authChecked: boolean;
  user?: User | null;
  loginFormError?: string | null;
  registerFormError?: string | null;
  orders: Order[] | null;
}

export interface EditingState {
  user: User;
  editFormError: string | null | undefined;
}
