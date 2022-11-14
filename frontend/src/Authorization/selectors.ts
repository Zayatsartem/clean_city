import { RootState } from '../store';
import User from '../types/UserTypes';

type LoginError = undefined | string | null;
export const selectAuth = (state: RootState): LoginError => state.auth.loginFormError;
export const selectUser = (state: RootState): User | null | undefined => state.auth.user;

export const selectAuthChecked = (state: RootState): boolean => state.auth.authChecked;
