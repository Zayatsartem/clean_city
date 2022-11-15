import { RootState } from '../store';
import User from '../types/UserTypes';
import { LoginError } from '../types/AuthTypes';

export const selectAuth = (state: RootState): LoginError => state.auth.loginFormError;
export const selectUser = (state: RootState): User | null | undefined => state.auth.user;

export const selectAuthChecked = (state: RootState): boolean => state.auth.authChecked;
