import { RootState } from '../store';
import { TComment } from '../types/AdminTypes';

const selectApprovedComments = (state: RootState): TComment[] => state.main.comments;
export default selectApprovedComments;
export const getMessage = (state: RootState): string | null => state.main.message;
export const getFreeFormMessage = (state: RootState): string | null => state.main.freeFormMessage;
