import { RootState } from '../store';
import User from '../types/UserTypes';

export const selectAuthChecked = (state: RootState): boolean => state.auth.authChecked;
export const selectUser = (state: RootState): User | null | undefined => state.register.user;
export const selectRegisterFormError = (state: RootState): string | null | undefined =>
  state.register.registerFormError;
