import User from '../types/UserTypes';

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
  authChecked: boolean;
  user?: User | null;
  loginFormError?: string | null;
}
