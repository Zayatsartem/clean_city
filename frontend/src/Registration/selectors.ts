import { RootState } from '../store';
import User from './User';

export const selectAuthChecked = (state: RootState): boolean => state.register.authChecked;
export const selectUser = (state: RootState): User | undefined => state.register.user;
export const selectRegisterFormError = (state: RootState): string | undefined =>
  state.register.registerFormError;
