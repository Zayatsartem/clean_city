import User from './UserTypes';
import { Comment } from './commentTypes';

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
  authChecked: boolean;
  user?: User | null;
  loginFormError?: string | null;
  registerFormError?: string | null;
  orders: Comment[] | null;
}

export interface EditingState {
  user: User;
  editFormError: string | null | undefined;
}

export type LoginError = undefined | string | null;
