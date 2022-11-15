import { TComment } from './AdminTypes';

export type MainState = {
  comments: TComment[];
  error: string | null;
  message: string | null;
};
