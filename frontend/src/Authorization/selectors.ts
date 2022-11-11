import { RootState } from '../types/RootState';
import User from '../types/UserTypes';

export const selectAuth = (state: RootState): undefined | string | null =>
state.auth.loginFormError;
export const selectUser = (state: RootState): User | null | undefined => state.auth.user;

export const selectAuthChecked = (state: RootState): boolean => state.auth.authChecked;
